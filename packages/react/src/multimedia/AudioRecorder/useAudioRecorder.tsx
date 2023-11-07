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
  const [initialized, setInitialized] = useState<boolean>(false);

  const [audioContext, setAudioContext] = useState<AudioContext>();
  const [encoderWorker, setEncoderWorker] = useState<Worker>();
  const [webSocket, setWebSocket] = useState<WebSocket | null>(null);
  const [recorder, setRecorder] = useState<ScriptProcessorNode>();
  const [leftChannel, setLeftChannel] = useState<Float32Array>(
    new Float32Array(),
  );
  const [rightChannel, setRightChannel] = useState<Float32Array>(
    new Float32Array(),
  );
  const [recordingLength, setRecordingLength] = useState<number>(0);
  const [elapsedTime, setElapsedTime] = useState<number>(0);
  const [lastIndex, setLastIndex] = useState<number>(0);
  const [compress, setCompress] = useState<boolean>(true);
  // const [audioTitle, setAudioTitle] = useState<string>(""); // TODO audio title for saving in workspace

  const audioRef = useRef<HTMLAudioElement>(null);

  const BUFFER_SIZE: number = 4096;
  const DEFAULT_SAMPLE_RATE: number = 48000;

  useEffect(() => {
    setEncoderWorker(new Worker("/infra/public/js/audioEncoder.js"));
    setAudioContext(new AudioContext());
  }, []);

  function sendWavChunk(
    leftChannel: Float32Array,
    rightChannel: Float32Array,
    lastIndex: number,
    webSocket: WebSocket,
  ) {
    const index = rightChannel.length;
    console.log("index = ", index);
    console.log("lastIndex = ", lastIndex);

    if (!(index > lastIndex)) {
      return;
    }

    if (encoderWorker && webSocket) {
      encoderWorker.postMessage(["init", audioContext?.sampleRate]);
      encoderWorker.postMessage([
        "chunk",
        leftChannel.slice(lastIndex, index),
        rightChannel.slice(lastIndex, index),
        (index - lastIndex) * BUFFER_SIZE,
      ]);

      encoderWorker.onmessage = function (event) {
        if (!compress) {
          webSocket.send(event.data);
          return;
        }
        const initialTime = performance.now();
        webSocket.send(pako.deflate(event.data));
        const endTime = performance.now();
        if (endTime - initialTime > 50) {
          setCompress(false);
          webSocket?.send("rawdata");
        }
      };
      setLastIndex(index);
    }
  }

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
    setLeftChannel(new Float32Array());
    setRightChannel(new Float32Array());
    setLastIndex(0);
  }

  const initRecording = async (webSocket: WebSocket) => {
    // Request the user’s media stream’s permission
    const mediaStream: MediaStream = await navigator.mediaDevices.getUserMedia({
      audio: true,
    });
    console.log(mediaStream);

    // Init encoder worker communication
    console.log(encoderWorker);

    if (encoderWorker) {
      encoderWorker.postMessage(["init", audioContext?.sampleRate]);
    }

    // init audioInput
    if (audioContext) {
      console.log(audioContext);

      const audioInput: MediaStreamAudioSourceNode | undefined =
        audioContext.createMediaStreamSource(mediaStream);
      console.log(audioInput);

      const gainNode = audioContext.createGain();
      audioInput.connect(gainNode);

      // init audio recorder
      const recorder = audioContext.createScriptProcessor(BUFFER_SIZE, 2, 2);
      recorder.onaudioprocess = (event: AudioProcessingEvent) => {
        const leftChannel = event.inputBuffer.getChannelData(0);
        const rightChannel = event.inputBuffer.getChannelData(1);

        sendWavChunk(leftChannel, rightChannel, lastIndex, webSocket);

        setLeftChannel((prev) => new Float32Array([...prev, ...leftChannel]));
        setRightChannel((prev) => new Float32Array([...prev, ...rightChannel]));
        setRecordingLength((prev) => prev + BUFFER_SIZE);
        setElapsedTime((prev) => prev + event.inputBuffer.duration);
      };
      gainNode.connect(recorder);
      recorder.connect(audioContext.destination);
      setRecorder(recorder);
      setInitialized(true);
    }
  };

  const handleRecord = async () => {
    console.log("RECORD");
    setState("RECORDING");

    // initialize WebSocket for data transfer
    if (webSocket) {
      if (!initialized) {
        initRecording(webSocket);
      }
    } else {
      const ws = new WebSocket(
        getUrl(audioContext?.sampleRate || DEFAULT_SAMPLE_RATE),
      );
      ws.onopen = () => {
        if (audioRef.current && audioRef.current.currentTime > 0) {
          audioRef.current.currentTime = 0;
        }
        if (!compress) {
          ws.send("rawdata");
        }
        if (!initialized) {
          initRecording(ws);
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
          setElapsedTime(0);
        }
      };
      ws.onclose = () => {
        setState("IDLE");
        setElapsedTime(0);
        clearWs();
      };
      setWebSocket(ws);
    }
  };

  const handleStop = () => {
    console.log("STOP");
    recorder?.disconnect();
    setState("RECORDED");
  };

  const handlePlay = () => {
    console.log("PLAYING");
    setState("PLAYING");
    if (encoderWorker) {
      encoderWorker.postMessage(["init", audioContext?.sampleRate]);
      encoderWorker.postMessage([
        "wav",
        rightChannel,
        leftChannel,
        recordingLength,
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
    setElapsedTime(0);
    setLeftChannel(new Float32Array());
    setRightChannel(new Float32Array());
  };

  const handleSave = () => {
    console.log("SAVE");
    setState("SAVING");
    if (webSocket) {
      sendWavChunk(leftChannel, rightChannel, lastIndex, webSocket);
    }
    webSocket?.send("save-");

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
    elapsedTime,
    audioRef,
    toolbarItems,
    handleEnded,
  };
}
