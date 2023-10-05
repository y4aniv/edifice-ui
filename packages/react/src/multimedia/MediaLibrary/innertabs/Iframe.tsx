import { useMediaLibraryContext } from "../MediaLibraryContext";

export const Iframe = () => {
  const context = useMediaLibraryContext();
  context.setResult();

  return <p>TODO: Iframe</p>;
};
