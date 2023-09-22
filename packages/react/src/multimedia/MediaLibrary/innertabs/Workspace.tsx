import { NOOP } from "../../../utils";
import {
  WorkspaceFileFormat,
  Workspace as WorkspaceWidget,
} from "../../Workspace";
import { useMediaLibraryContext } from "../MediaLibrary";

export const Workspace = () => {
  const ctx = useMediaLibraryContext();

  function getFileFormat(): WorkspaceFileFormat | null {
    switch (ctx.type) {
      case "audio":
        return "audio";
      case "image":
        return "img";
      case "video":
        return "video";
      default:
        return null;
    }
  }

  return (
    <div className="border rounded mt-24">
      <WorkspaceWidget
        fileFormat={getFileFormat()}
        onSuccess={NOOP}
        onCancel={NOOP}
      ></WorkspaceWidget>
    </div>
  );
};
