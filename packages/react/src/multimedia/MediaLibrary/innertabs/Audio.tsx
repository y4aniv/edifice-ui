import { WorkspaceElement } from "edifice-ts-client";

import { AudioRecorder } from "../../AudioRecorder";
import { useMediaLibraryContext } from "../MediaLibraryContext";

export const Audio = () => {
  const { setResult } = useMediaLibraryContext();

  const handleOnSuccess = (ressource: WorkspaceElement) => {
    setResult([ressource]);
  };

  const handleOnError = (error: string) => {
    console.error(error);
  };

  return (
    <AudioRecorder
      onSuccess={handleOnSuccess}
      onError={handleOnError}
    ></AudioRecorder>
  );
};
