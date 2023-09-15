import { MediaLibraryResponse } from "../MediaLibrary";

export const Iframe = ({ onSuccess }: { onSuccess: MediaLibraryResponse }) => {
  return (
    <p>
      TODO: Iframe <button onClick={onSuccess}>successful</button>
    </p>
  );
};
