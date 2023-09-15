import { MediaLibraryResponse } from "../MediaLibrary";

export const Workspace = ({
  onSuccess,
}: {
  onSuccess: MediaLibraryResponse;
}) => {
  return (
    <p>
      TODO: Workspace <button onClick={onSuccess}>successful</button>
    </p>
  );
};
