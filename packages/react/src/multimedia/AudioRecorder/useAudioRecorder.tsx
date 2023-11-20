import { useEffect, useRef, useState } from "react";

import {
  Pause,
  PlayFilled,
  Record,
  RecordStop,
  Refresh,
  Save,
} from "@edifice-ui/icons";
import { WorkspaceElement } from "edifice-ts-client";
import pako from "pako";

import { ToolbarItem } from "../../components";

export type RecordState =
  | "IDLE"
  | "RECORDING"
  | "RECORDED"
  | "PLAYING"
  | "PAUSED"
  | "SAVING"
  | "SAVED";

export default function useAudioRecorder(
  onSuccess: (res: WorkspaceElement) => void,
  onError: (error: string) => void,
) {
  const [state, setState] = useState<RecordState>("IDLE");

  // The audio recorder is based on the Web Audio API (https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API)
  // See also https://developer.mozilla.org/en-US/docs/Web/API/AudioWorkletNode for more information.
  const [micStream, setMicStream] = useState<MediaStream>();
  const [micStreamAudioSourceNode, setMicStreamAudioSourceNode] =
    useState<MediaStreamAudioSourceNode>();
  const [audioWorkletNode, setAudioWorkletNode] = useState<AudioWorkletNode>();
  const [audioContext, setAudioContext] = useState<AudioContext>();

  // encoder and web socket for sending encoded audio to the backend
  const [encoderWorker, setEncoderWorker] = useState<Worker>();
  const [webSocket, setWebSocket] = useState<WebSocket | null>(null);
  const [compress, setCompress] = useState<boolean>(true);
  const [leftChannel, setLeftChannel] = useState<Float32Array[]>([]);
  const [rightChannel, setRigthChannel] = useState<Float32Array[]>([]);

  const audioRef = useRef<HTMLAudioElement>(null);

  const BUFFER_SIZE: number = 128; // https://developer.mozilla.org/en-US/docs/Web/API/AudioWorkletProcessor
  const DEFAULT_SAMPLE_RATE: number = 48000;

  // Init Web Socket to send audio chunks to backend
  useEffect(() => {
    const ws = new WebSocket(
      getUrl(audioContext?.sampleRate || DEFAULT_SAMPLE_RATE),
    );
    setWebSocket(ws);

    ws.onopen = () => {
      if (audioRef.current && audioRef.current.currentTime > 0) {
        audioRef.current.currentTime = 0;
      }
      ws.send("open");
      if (!compress) {
        ws.send("rawdata");
      }
    };
    ws.onerror = (event: Event) => {
      console.error(event);
      setState("IDLE");
      closeWs();
    };
    ws.onmessage = (event) => {
      if (event.data?.indexOf("error") !== -1) {
        console.error(event.data);
        closeWs();
      } else if (event.data === "ok" && state === "SAVING") {
        closeWs();
      }
    };
    ws.onclose = () => {
      setState("IDLE");
      clearWs();
    };

    return () => {
      if (ws.readyState === 1) {
        ws.close();
      }
      setWebSocket(null);
    };
  }, []);

  // Init encoder worker
  useEffect(() => {
    const encoderWorker = new Worker("/infra/public/js/audioEncoder.js");
    setEncoderWorker(encoderWorker);
    encoderWorker.postMessage([
      "init",
      audioContext?.sampleRate || DEFAULT_SAMPLE_RATE,
    ]);
  }, []);

  /**
   * Handle message received from the audio recorder processor.
   * Basically the Audio recorder processor returns the input channels that will be treated by the audioEncoder worker.
   * The audio recorder processor script is located here: /infra/public/js/audio-recorder-processor.js
   * The script follows the AudioWorkletProcessor API (https://developer.mozilla.org/en-US/docs/Web/API/AudioWorkletProcessor)
   * This method gets called for each block of 128 sample-frames.
   *
   * @param event is the input returned, containing leftChannel and rightChannel arrays.
   */
  function handleAudioWorkletNodeMessage(event: MessageEvent) {
    const leftChannel = (event.data.inputs as Float32Array[][])[0][0];
    const rightChannel = (event.data.inputs as Float32Array[][])[0][1];
    setLeftChannel((prev) => [...prev, leftChannel]);
    setRigthChannel((prev) => [...prev, rightChannel]);

    if (encoderWorker) {
      // send audio data to encoder worker
      encoderWorker.postMessage([
        "chunk",
        [leftChannel],
        [rightChannel],
        BUFFER_SIZE,
      ]);

      // chunk encodedData received from ths  encoder worker
      encoderWorker.onmessage = function (event: MessageEvent) {
        const encodedData: Uint8Array = event.data as Uint8Array;

        // send encoded data to websocket
        if (!compress) {
          webSocket?.send(encodedData);
          return;
        }
        const initialTime = performance.now();
        webSocket?.send(pako.deflate(encodedData));
        const endTime = performance.now();
        if (endTime - initialTime > 50) {
          setCompress(false);
          webSocket?.send("rawdata");
        }
      };
    }
  }

  const initRecording = async () => {
    // Request access to the user's microphone
    const micStream: MediaStream = await navigator.mediaDevices.getUserMedia({
      audio: true,
    });
    setMicStream(micStream);

    // Create the microphone stream
    const audioContext = new AudioContext({ sampleRate: DEFAULT_SAMPLE_RATE });
    setAudioContext(audioContext);
    const micStreamAudioSourceNode: MediaStreamAudioSourceNode =
      audioContext.createMediaStreamSource(micStream);
    setMicStreamAudioSourceNode(micStreamAudioSourceNode);

    // Create and connect AudioWorkletNode for processing the audio stream
    // https://developer.mozilla.org/en-US/docs/Web/API/AudioWorkletProcessor
    try {
      await audioContext.audioWorklet.addModule(
        "/infra/public/js/audio-recorder-processor.js",
      );
    } catch (err) {
      console.error(err);
    }

    const audioWorkletNode = new AudioWorkletNode(
      audioContext,
      "audio-recorder-processor",
    );
    setAudioWorkletNode(audioWorkletNode);
    console.log(audioWorkletNode);

    // Message received from the audio recorder processor. cf handleAudioWorkletNodeMessage function.
    // Basically the Audio recorder processor returns the input channels that will be treated by the audioEncoder worker.
    audioWorkletNode.port.addEventListener(
      "message",
      handleAudioWorkletNodeMessage,
    );

    audioWorkletNode.port.start();

    micStreamAudioSourceNode.connect(audioWorkletNode);
    audioWorkletNode.connect(audioContext.destination);
  };

  const handleRecord = async () => {
    console.log("RECORD");
    setState("RECORDING");

    await initRecording();
  };

  const handleStop = () => {
    console.log("STOP");
    setState("RECORDED");

    // Close audio stream
    micStream?.getTracks().forEach((track) => track.stop());
    micStreamAudioSourceNode?.disconnect();
    audioWorkletNode?.port.removeEventListener(
      "message",
      handleAudioWorkletNodeMessage,
    );
    audioWorkletNode?.disconnect();
    audioContext?.close();
    setState("RECORDED");
  };

  const handlePlay = () => {
    console.log("PLAYING");
    setState("PLAYING");

    // TODO Get cumulated leftChannel and rightChannel to send it to encoder for WAV encoding and then play it
    if (encoderWorker) {
      encoderWorker.postMessage([
        "wav",
        rightChannel,
        leftChannel,
        rightChannel.length * BUFFER_SIZE,
      ]);
      encoderWorker.onmessage = (event: MessageEvent) => {
        if (audioRef.current) {
          audioRef.current.src = window.URL.createObjectURL(event.data);
          audioRef.current.play();
        }
      };
    }
  };

  const handlePause = () => {
    console.log("PAUSED");
    audioRef?.current?.pause();
    setState("PAUSED");
  };

  const handleReset = () => {
    console.log("RESET");
    setState("IDLE");
  };

  const handleSave = () => {
    console.log("SAVE");
    setState("SAVING");

    // TODO is this enough to save the whole audio?
    const date = new Date();
    webSocket?.send(
      `save-${date.getHours()}:${date.getMinutes()} ${date.getDate()}/${date.getMonth()}`,
    );

    // TODO get Audio Workspace element to return onSuccess
    const mockWorkspaceAudio = { id: "1" } as any as WorkspaceElement;
    if (mockWorkspaceAudio) {
      onSuccess(mockWorkspaceAudio);
    } else {
      onError("");
    }
  };

  const handleEnded = () => {
    setState("PAUSED");
  };

  function uuid() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
      /[xy]/g,
      function (c) {
        const r = (Math.random() * 16) | 0,
          v = c == "x" ? r : (r & 0x3) | 0x8;
        return v.toString(16);
      },
    );
  }

  function getUrl(sampleRate: number) {
    const protocol = window.location.protocol === "https:" ? "wss" : "ws";
    const host: string = "recette-ode1.opendigitaleducation.com";
    // if (
    //   window.location.host === "localhost:8090" ||
    //   window.location.host === "localhost:3000"
    // ) {
    //   host = "localhost:6502";
    // }
    const base = protocol + "://" + host;
    return `${base}/audio/${uuid()}?sampleRate=${sampleRate}`;
  }

  function closeWs() {
    if (webSocket) {
      if (webSocket.readyState === 1) {
        webSocket.close();
      }
    }
    clearWs();
  }

  function clearWs() {
    setWebSocket(null);
  }

  const toolbarItems: ToolbarItem[] = [
    {
      type: "icon",
      name: "record",
      props: {
        icon: <Record color="" />,
        color: "danger",
        disabled: state !== "IDLE",
        onClick: handleRecord,
      },
    },
    {
      type: "icon",
      name: "stop",
      props: {
        icon: <RecordStop />,
        disabled: state !== "RECORDING",
        onClick: handleStop,
      },
    },
    {
      type: "icon",
      name: "play",
      visibility: state === "PLAYING" ? "hide" : "show",
      props: {
        icon: <PlayFilled />,
        disabled: state !== "RECORDED" && state !== "PAUSED",
        onClick: handlePlay,
      },
    },
    {
      type: "icon",
      name: "pause",
      visibility: state === "PLAYING" ? "show" : "hide",
      props: {
        icon: <Pause />,
        disabled: state !== "PLAYING",
        onClick: handlePause,
      },
    },
    { type: "divider" },
    {
      type: "icon",
      name: "reset",
      props: {
        icon: <Refresh />,
        disabled:
          state !== "RECORDED" && state !== "PLAYING" && state !== "PAUSED",
        onClick: handleReset,
      },
    },
    {
      type: "icon",
      name: "save",
      props: {
        icon: <Save />,
        disabled:
          state !== "RECORDED" && state !== "PLAYING" && state !== "PAUSED",
        onClick: handleSave,
      },
    },
  ];

  return {
    state,
    audioRef,
    toolbarItems,
    handleEnded,
  };
}
