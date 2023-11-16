import ExternalLinker, { IExternalLink } from "../../Linker/ExternalLinker";
import { useMediaLibraryContext } from "../MediaLibraryContext";

export const Linker = () => {
  const { setResult } = useMediaLibraryContext();

  const handleLinkChange = (link: IExternalLink, isValidLink: boolean) => {
    if (isValidLink) {
      setResult({
        url: link.url,
        text: link.text ? link.text : link.url,
        target: link.target,
      } as IExternalLink);
    } else {
      setResult();
    }
  };

  return <ExternalLinker onChange={handleLinkChange} />;
};
