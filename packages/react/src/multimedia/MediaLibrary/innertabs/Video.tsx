import { MediaLibraryResponse } from "../MediaLibrary";

export const Video = ({ onSuccess }: { onSuccess: MediaLibraryResponse }) => {
  return (
    <p>
      TODO: Video <button onClick={onSuccess}>successful</button>
    </p>
  );
};
