import { useMediaLibraryContext } from "../MediaLibrary";

export const Linker = () => {
  const ctx = useMediaLibraryContext();
  ctx.setResult();

  return <p>TODO: Linker</p>;
};
