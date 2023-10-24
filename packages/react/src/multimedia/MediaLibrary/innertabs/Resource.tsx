import InternalLinker from "../../Linker/InternalLinker";
//import { useMediaLibraryContext } from "../MediaLibraryContext";

export const Resource = () => {
  //  const context = useMediaLibraryContext();

  // const handleSuccess = () => {
  //   context.setResult();
  // };

  return (
    <InternalLinker
      onChange={(e) => console.log(JSON.stringify(e))}
    ></InternalLinker>
  );
};
