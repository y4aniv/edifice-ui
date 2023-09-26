import { WorkspaceElement } from "edifice-ts-client";

import { Role } from "../../../core";
import { Workspace as WorkspaceWidget } from "../../Workspace";
import { useMediaLibraryContext } from "../MediaLibrary";

export const Workspace = () => {
  const ctx = useMediaLibraryContext();

  function getDocumentRoleFilter(): Role | Role[] | null {
    switch (ctx.type) {
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
    result && ctx.setResultCounter(result.length);
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
