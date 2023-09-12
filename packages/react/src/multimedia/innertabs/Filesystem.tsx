import { MediaLibraryResponse } from "../MediaLibrary";

export const Filesystem = ({
  onSuccess,
}: {
  onSuccess: MediaLibraryResponse;
}) => {
  return (
    <p>
      TODO: Filesystem <button onClick={onSuccess}>successful</button>
    </p>
  );
};
