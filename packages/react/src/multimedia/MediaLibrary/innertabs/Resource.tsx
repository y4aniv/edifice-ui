import { useMediaLibraryContext } from "../MediaLibrary";

export const Resource = () => {
  const context = useMediaLibraryContext();
  context.setResult();

  return <p>TODO: Resource \(internal linker\)</p>;
};
