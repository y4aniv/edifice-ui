import { Mic } from "@edifice-ui/icons";
import { WorkspaceElement } from "edifice-ts-client";

import useAudioRecorder from "./useAudioRecorder";
import { FormControl, Input, Toolbar } from "../../components";
import { convertMsToMS } from "../../utils";

export interface AudioRecorderProps {
  onSuccess: (res: WorkspaceElement) => void;
  onError: (error: string) => void;
}

const AudioRecorder = ({ onSuccess, onError }: AudioRecorderProps) => {
  const {
    recordState,
    playState,
    recordtime,
    audioRef,
    audioNameRef,
    toolbarItems,
    handlePlayEnded,
  } = useAudioRecorder(onSuccess, onError);

  return (
    <div className="audio-recorder d-flex flex-column flex-fill justify-content-center align-items-center">
      <div className="audio-recorder-icon">
        <Mic
          width={64}
          height={64}
          style={
            recordState === "RECORDING"
              ? { color: "var(--edifice-danger)" }
              : playState === "PLAYING"
              ? { color: "var(--edifice-success)" }
              : {}
          }
        />
      </div>
      <div
        className="audio-recorder-time m-16"
        style={
          recordState === "RECORDING" ? { color: "var(--edifice-danger)" } : {}
        }
      >
        {playState === "IDLE" &&
          (recordtime ? convertMsToMS(recordtime) : "00:00")}
        {playState !== "IDLE" &&
          audioRef.current &&
          recordtime &&
          `${convertMsToMS(
            audioRef.current?.currentTime * 1000,
          )} / ${convertMsToMS(recordtime)}`}
      </div>
      <div>
        <audio ref={audioRef} onEnded={handlePlayEnded}>
          <track default kind="captions" srcLang="fr" src=""></track>
        </audio>
      </div>
      <div className="audio-recorder-toolbar toolbar default">
        <FormControl id="recordName" className="mb-8" isRequired>
          <Input
            type="text"
            size={"sm"}
            placeholder="Nom de l'enregistrement audio"
            ref={audioNameRef}
            defaultValue={"Capture " + new Date().toLocaleDateString()}
          />
        </FormControl>
        <Toolbar items={toolbarItems} variant="no-shadow" />
      </div>
    </div>
  );
};

export default AudioRecorder;
