import ExternalLinker, { IExternalLink } from "../../Linker/ExternalLinker";
import { useMediaLibraryContext } from "../MediaLibraryContext";

export const ExternalLink = (link?: IExternalLink) => {
  const { setResult } = useMediaLibraryContext();

  const handleLinkChange = (
    { url, text, target }: IExternalLink,
    isValidLink: boolean,
  ) => {
    if (isValidLink) {
      setResult({
        url,
        text: text ? text : url,
        target,
      } as IExternalLink);
    } else {
      setResult();
    }
  };

  return <ExternalLinker link={link} onChange={handleLinkChange} />;
};
