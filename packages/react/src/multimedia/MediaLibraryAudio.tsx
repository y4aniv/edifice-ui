import { MediaLibraryResponse } from "./MediaLibrary";

export const MediaLibraryAudio = ({
  onSuccess,
}: {
  onSuccess: MediaLibraryResponse;
}) => {
  return (
    <p>
      TODO: Audio <button onClick={onSuccess}>successful</button>
    </p>
  );
};
