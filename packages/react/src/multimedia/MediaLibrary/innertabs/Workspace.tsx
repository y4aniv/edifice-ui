import { Workspace as WorkspaceWidget } from "../../Workspace";
import { MediaLibraryResponse } from "../MediaLibrary";

export const Workspace = ({
  onSuccess,
}: {
  onSuccess: MediaLibraryResponse;
}) => {
  return (
    <div>
      <WorkspaceWidget dummy="hé !"></WorkspaceWidget>
      <button onClick={onSuccess}>successful</button>
    </div>
  );
};
