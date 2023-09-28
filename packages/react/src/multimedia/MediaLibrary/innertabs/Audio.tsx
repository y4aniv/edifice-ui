import { useMediaLibraryContext } from "../MediaLibrary";

export const Audio = () => {
  const context = useMediaLibraryContext();

  function handleClick() {
    context.setResult();
    context.setResultCounter(32);
  }

  return (
    <p>
      TODO: Audio <button onClick={handleClick}>add 32</button>
    </p>
  );
};
