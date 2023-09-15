import { MediaLibraryResponse } from "../MediaLibrary";

export const Upload = ({ onSuccess }: { onSuccess: MediaLibraryResponse }) => {
  return (
    <p>
      TODO: Upload <button onClick={onSuccess}>successful</button>
    </p>
  );
};
