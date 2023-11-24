import { Mic } from "@edifice-ui/icons";
import clsx from "clsx";
import { WorkspaceElement } from "edifice-ts-client";

import AudioRecorderTimer from "./AudioRecorderTimer";
import useAudioRecorder from "./useAudioRecorder";
import { FormControl, Input, Toolbar } from "../../components";

export interface AudioRecorderProps {
  onSuccess: (resource: WorkspaceElement) => void;
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

  const classColor = clsx({
    "text-danger": recordState === "RECORDING",
    "text-success": playState === "PLAYING",
  });

  return (
    <div className="audio-recorder d-flex flex-column flex-fill justify-content-center align-items-center">
      <div className="audio-recorder-icon">
        <Mic width={64} height={64} className={classColor} />
      </div>
      <AudioRecorderTimer
        recordState={recordState}
        playState={playState}
        recordtime={recordtime}
        audiotime={audioRef.current?.currentTime}
      ></AudioRecorderTimer>
      <div>
        <audio ref={audioRef} onEnded={handlePlayEnded}>
          <track default kind="captions" srcLang="fr" src=""></track>
        </audio>
      </div>
      <div className="audio-recorder-toolbar toolbar default">
        <FormControl
          id="recordName"
          className="mb-8"
          isRequired
          isReadOnly={recordState === "SAVED" || recordState === "SAVING"}
        >
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
