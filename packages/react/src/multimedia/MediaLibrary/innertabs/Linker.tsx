import ExternalLinker, { IExternalLink } from "../../Linker/ExternalLinker";
import { useMediaLibraryContext } from "../MediaLibraryContext";

export type LinkerTabProps = {
  text?: string;
  url?: string;
  target?: string;
};

export type LinkerTabResult = {
  url: string;
  text?: string;
  target?: "_blank";
};

export const Linker = () => {
  const context = useMediaLibraryContext();
  context.setResult();

  const handleLinkChange = (link: IExternalLink) => {
    if (link.url) {
      context.setResult({
        url: link.url,
        text: link.text ? link.text : link.url,
        target: link.target,
      } as LinkerTabResult);
    } else {
      context.setResult();
    }
  };

  return <ExternalLinker onChange={handleLinkChange} />;
};
