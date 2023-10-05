import { useMediaLibraryContext } from "../MediaLibraryContext";

export const Linker = () => {
  const context = useMediaLibraryContext();
  context.setResult();

  return <p>TODO: Linker</p>;
};
