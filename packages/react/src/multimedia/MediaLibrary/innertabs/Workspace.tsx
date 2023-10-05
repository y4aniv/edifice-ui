import { WorkspaceElement } from "edifice-ts-client";

import { Role } from "../../../core";
import { Workspace as WorkspaceWidget } from "../../Workspace";
import { useMediaLibraryContext } from "../MediaLibraryContext";

export const Workspace = () => {
  const context = useMediaLibraryContext();

  function getDocumentRoleFilter(): Role | Role[] | null {
    switch (context.type) {
      case "image":
        return "img";
      case "audio":
        return "audio";
      case "video":
        return "video";
      default:
        return null; // = all document roles
    }
  }

  function handleSelect(result: WorkspaceElement[]) {
    context.setResultCounter(result.length);
    if (result.length > 0) {
      context.setResult(result);
    } else {
      context.setResult();
    }
  }

  return (
    <div className="border rounded mt-24">
      <WorkspaceWidget
        roles={getDocumentRoleFilter()}
        onSelect={handleSelect}
      ></WorkspaceWidget>
    </div>
  );
};
