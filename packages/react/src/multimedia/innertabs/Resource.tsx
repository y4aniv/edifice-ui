import { MediaLibraryResponse } from "../MediaLibrary";

export const Resource = ({
  onSuccess,
}: {
  onSuccess: MediaLibraryResponse;
}) => {
  return (
    <p>
      TODO: Resource \(internal linker\){" "}
      <button onClick={onSuccess}>successful</button>
    </p>
  );
};
