import { useMediaLibraryContext } from "../MediaLibrary";

export const Iframe = () => {
  const ctx = useMediaLibraryContext();
  ctx.setResult();

  return <p>TODO: Iframe</p>;
};
