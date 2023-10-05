import { useMediaLibraryContext } from "../MediaLibraryContext";

export const Resource = () => {
  const context = useMediaLibraryContext();
  context.setResult();

  return <p>TODO: Resource \(internal linker\)</p>;
};
