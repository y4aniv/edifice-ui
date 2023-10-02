import { useMediaLibraryContext } from "../MediaLibrary";

export const Upload = () => {
  const context = useMediaLibraryContext();
  context.setResult();

  return <p>TODO: Upload</p>;
};
