import { useMediaLibraryContext } from "../MediaLibrary";

export const Audio = () => {
  const ctx = useMediaLibraryContext();

  function handleClick() {
    ctx.setResult();
    ctx.setResultCounter(32);
  }

  return (
    <p>
      TODO: Audio <button onClick={handleClick}>add 32</button>
    </p>
  );
};
