import { useMediaLibraryContext } from "../MediaLibrary";

export const Upload = () => {
  const ctx = useMediaLibraryContext();
  ctx.setResult();

  return <p>TODO: Upload</p>;
};
