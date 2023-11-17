import { Dropzone } from "../../../components/Dropzone";
import UploadFiles from "../../UploadFiles/UploadFiles";
import { MediaLibraryType } from "../MediaLibrary";
import { useMediaLibraryContext } from "../MediaLibraryContext";

const acceptedTypes = (type: MediaLibraryType) => {
  const acceptedTypes = [];

  switch (type) {
    case "audio":
    case "video":
      acceptedTypes.push("video/*");
      break;
    case "image":
      acceptedTypes.push("image/*");
      break;
    default:
      break;
  }
  return acceptedTypes;
};

export const Upload = () => {
  const { type } = useMediaLibraryContext();

  return (
    <div className="py-8 flex-grow-1">
      <Dropzone multiple accept={acceptedTypes(type ?? "embedder")}>
        <UploadFiles />
      </Dropzone>
    </div>
  );
};
