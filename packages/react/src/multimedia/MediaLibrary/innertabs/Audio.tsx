import { WorkspaceElement } from "edifice-ts-client";

import { AudioRecorder } from "../../AudioRecorder";
import { useMediaLibraryContext } from "../MediaLibraryContext";

export const Audio = () => {
  const context = useMediaLibraryContext();

  const handleSuccess = (res: WorkspaceElement) => {
    context.setResult(res);
  };

  const handleError = (err: string) => {
    console.error(err);
  };

  return (
    <AudioRecorder
      onSuccess={handleSuccess}
      onError={handleError}
    ></AudioRecorder>
  );
};
