import { Workspace as WorkspaceWidget } from "../../Workspace";
import { useMediaLibraryContext } from "../MediaLibrary";

export const Workspace = () => {
  const ctx = useMediaLibraryContext();
  ctx.setResult();

  return (
    <div className="border rounded mt-24">
      <WorkspaceWidget></WorkspaceWidget>
    </div>
  );
};
