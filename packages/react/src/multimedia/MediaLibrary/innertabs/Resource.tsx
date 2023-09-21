import { useMediaLibraryContext } from "../MediaLibrary";

export const Resource = () => {
  const ctx = useMediaLibraryContext();
  ctx.setResult();

  return <p>TODO: Resource \(internal linker\)</p>;
};
