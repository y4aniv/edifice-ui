import { useCallback, useEffect, useRef, useState } from "react";

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
  | "PAUSED"
  | "RECORDED"
  | "SAVING"
  | "SAVED";

export type PlayState = "IDLE" | "PLAYING" | "PAUSED";

export default function useAudioRecorder(
  onSuccess: (resource: WorkspaceElement) => void,
  onError: (error: string) => void,
) {
  const recordState = useRef<RecordState>("IDLE");
  const [playState, setPlayState] = useState<PlayState>("IDLE");

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

  const audioNameRef = useRef<HTMLInputElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);

  const BUFFER_SIZE: number = 128; // https://developer.mozilla.org/en-US/docs/Web/API/AudioWorkletProcessor
  const DEFAULT_SAMPLE_RATE: number = 44100;

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
      setPlayState("IDLE");
      recordState.current = "IDLE";
      closeWs();
    };
    ws.onmessage = async (event) => {
      if (
        event.data &&
        event.data.indexOf &&
        typeof event.data.indexOf === "function" &&
        event.data.indexOf("error") !== -1
      ) {
        console.error(event.data);
        setPlayState("IDLE");
        recordState.current = "IDLE";
        closeWs();
      } else if (
        event.data &&
        event.data.text &&
        typeof event.data.text === "function" &&
        recordState.current === "SAVING"
      ) {
        const data = JSON.parse(await event.data.text());
        if (data.status === "ok") {
          closeWs();
          // TODO get Audio Workspace element to return onSuccess
          const mockWorkspaceAudio = {
            _id: data.docId,
            name: audioNameRef.current?.value,
            eType: "file",
            eParent: "",
            children: [],
            created: new Date(),
            _shared: [],
            _isShared: false,
            owner: { userId: "", displayName: "" },
          } as any as WorkspaceElement;

          if (mockWorkspaceAudio) {
            onSuccess(mockWorkspaceAudio);
          } else {
            onError("");
          }

          closeAudioStream();
          recordState.current = "SAVED";
        } else {
          recordState.current = "IDLE";
          closeWs();
        }
      }
    };
    ws.onclose = () => {
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

  /**
   * Close opened audio stream and clean channels
   */
  function closeAudioStream() {
    // Close audio stream
    micStream?.getTracks().forEach((track) => track.stop());
    micStreamAudioSourceNode?.disconnect();
    audioWorkletNode?.port.removeEventListener(
      "message",
      handleAudioWorkletNodeMessage,
    );
    audioWorkletNode?.disconnect();
    audioContext?.close();
    setLeftChannel([]);
    setRigthChannel([]);
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

    // Message received from the audio recorder processor. cf handleAudioWorkletNodeMessage function.
    // Basically the Audio recorder processor returns the input channels that will be treated by the audioEncoder worker.
    audioWorkletNode.port.addEventListener(
      "message",
      handleAudioWorkletNodeMessage,
    );

    // Clear channels before strating recording
    setLeftChannel([]);
    setRigthChannel([]);

    audioWorkletNode.port.start();

    micStreamAudioSourceNode.connect(audioWorkletNode);
    audioWorkletNode.connect(audioContext.destination);
  };

  const handleRecord = async () => {
    recordState.current = "RECORDING";
    setPlayState("IDLE");

    await initRecording();
  };

  const handleRecordPause = () => {
    if (audioContext?.state === "running") {
      console.log("Paused");
      recordState.current = "PAUSED";
      audioContext?.suspend();
    } else {
      console.log("Recording");
      recordState.current = "RECORDING";
      audioContext?.resume();
      if (audioRef.current) {
        audioRef.current.currentTime = 0;
      }
    }
  };

  const handlePlay = useCallback(() => {
    setPlayState("PLAYING");
    if (audioRef?.current?.currentTime) {
      audioRef.current.play();
    } else {
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
    }
  }, [leftChannel, rightChannel, encoderWorker]);

  const handlePlayPause = useCallback(() => {
    audioRef?.current?.pause();
    setPlayState("PAUSED");
  }, []);

  const handleReset = useCallback(() => {
    setPlayState("IDLE");
    recordState.current = "IDLE";
    closeAudioStream();
  }, []);

  const handleSave = useCallback(() => {
    recordState.current = "SAVING";

    webSocket?.send(`save-${audioNameRef.current?.value}`);
  }, [webSocket]);

  const handlePlayStop = useCallback(() => {
    // Stop Playing the record
    if (audioRef?.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    setPlayState("IDLE");
  }, []);

  const handlePlayEnded = useCallback(() => {
    setPlayState("PAUSED");
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
    }
  }, []);

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
    let host: string = window.location.host;
    if (
      window.location.host === "localhost:8090" ||
      window.location.host === "localhost:3000"
    ) {
      host = "localhost:6502";
    }
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
      visibility:
        recordState.current === "RECORDING" || recordState.current === "PAUSED"
          ? "hide"
          : "show",
      props: {
        icon: <Record color="" />,
        color: "danger",
        disabled: recordState.current !== "IDLE",
        onClick: handleRecord,
      },
    },
    {
      type: "icon",
      name: "recordPause",
      visibility:
        recordState.current === "RECORDING" || recordState.current === "PAUSED"
          ? "show"
          : "hide",
      props: {
        icon: (
          <Pause
            className={recordState.current === "PAUSED" ? "text-danger" : ""}
          />
        ),
        disabled:
          recordState.current !== "RECORDING" &&
          recordState.current !== "PAUSED",
        onClick: handleRecordPause,
      },
    },
    { type: "divider" },
    {
      type: "icon",
      name: "stop",
      props: {
        icon: <RecordStop />,
        disabled: playState !== "PLAYING" && playState !== "PAUSED",
        onClick: handlePlayStop,
      },
    },
    {
      type: "icon",
      name: "play",
      visibility: playState === "PLAYING" ? "hide" : "show",
      props: {
        icon: <PlayFilled />,
        disabled:
          recordState.current !== "RECORDED" &&
          recordState.current !== "PAUSED" &&
          recordState.current !== "SAVED" &&
          playState !== "PAUSED",
        onClick: handlePlay,
      },
    },
    {
      type: "icon",
      name: "playPause",
      visibility: playState === "PLAYING" ? "show" : "hide",
      props: {
        icon: <Pause />,
        disabled: playState !== "PLAYING",
        onClick: handlePlayPause,
      },
    },
    { type: "divider" },
    {
      type: "icon",
      name: "reset",
      props: {
        icon: <Refresh />,
        disabled:
          recordState.current !== "RECORDED" &&
          playState !== "PLAYING" &&
          playState !== "PAUSED" &&
          recordState.current !== "PAUSED",
        onClick: handleReset,
      },
    },
    {
      type: "icon",
      name: "save",
      props: {
        icon: <Save />,
        disabled:
          (recordState.current !== "RECORDED" &&
            recordState.current !== "PAUSED" &&
            playState !== "PLAYING" &&
            playState !== "PAUSED") ||
          !audioNameRef.current?.value,
        onClick: handleSave,
      },
    },
  ];

  return {
    recordState: recordState.current,
    playState,
    recordtime: audioContext?.currentTime
      ? audioContext?.currentTime * 1000
      : undefined,
    audioRef,
    audioNameRef,
    toolbarItems,
    handlePlayEnded,
  };
}
