import { WorkspaceElement } from "edifice-ts-client";

import { Dropzone } from "../../../components/Dropzone";
import { MediaLibraryType } from "../MediaLibrary";
import { useMediaLibraryContext } from "../MediaLibraryContext";

export const Upload = () => {
  const context = useMediaLibraryContext();

  const acceptTypeFile = (type: MediaLibraryType) => {
    const acceptTypes = [];

    if (type) {
      switch (type) {
        case "audio":
        case "video":
          acceptTypes.push("video/mp4", "video/mp3");
          break;
        case "image":
          acceptTypes.push("image/jpeg", "image/png");
          break;
        default:
          break;
      }
      return acceptTypes;
    }
  };

  const handleSuccess = (res: WorkspaceElement[]) => {
    context.setResultCounter(res.length);
    if (res.length !== 0) {
      context.setResult(res);
    } else {
      context.setResult(undefined);
    }
  };

  const handleError = (err: string) => {
    console.error(err);
  };

  return (
    <div className="py-8">
      <Dropzone
        multiple
        accept={acceptTypeFile(context.type ?? "embedder")}
        importMessage="Glissez-déposez un/des fichier(s) depuis votre appareil ou cliquez sur parcourir"
        onSuccess={handleSuccess}
        onError={handleError}
      />
    </div>
  );
};
