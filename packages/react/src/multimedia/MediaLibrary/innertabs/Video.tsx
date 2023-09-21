import { WorkspaceElement } from "edifice-ts-client";

import { VideoRecorder } from "../../VideoRecorder";
import { useMediaLibraryContext } from "../MediaLibrary";

export const Video = () => {
  const context = useMediaLibraryContext();

  const handleSuccess = (res: WorkspaceElement) => {
    console.log(res);
    context.setResult(res);
  };

  const handleError = (err: string) => {
    console.error(err);
  };

  return (
    <VideoRecorder
      appName="blog"
      caption="Yo!"
      onSuccess={handleSuccess}
      onError={handleError}
    ></VideoRecorder>
  );
};
