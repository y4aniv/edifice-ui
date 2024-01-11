import { useState, useEffect } from "react";

import { useTranslation } from "react-i18next";

import { FormControl, Label, Input, Checkbox } from "../../components";
import { useToggle } from "../../hooks";
import { StringUtils } from "../../utils/StringUtils";

/**
 * Properties for the ExternalLink.
 */
export interface IExternalLink {
  /** Link Url */
  url: string;
  /** Link text for the llink display */
  text?: string;
  /** Link target (default: _blank) */
  target?: "_blank";
}

/**
 * Properties for the ExternalLinker react component.
 */
export type ExternalLinkerProps = {
  /** Default link to update. */
  link?: IExternalLink;
  /** Selected text in case of a link creation. */
  selectedText?: string;
  /** Target */
  target?: "_blank";
  /** Notify when the user change any link information */
  onChange?: (link: IExternalLink, isValidLink: boolean) => void;
};

const ExternalLinker = ({
  link,
  selectedText,
  onChange,
}: ExternalLinkerProps) => {
  const { t } = useTranslation();

  const [linkText, setLinkText] = useState<string>(
    link?.text || selectedText || "",
  );
  const [linkURL, setLinkURL] = useState<string>(link?.url || "");
  const [isBlankTarget, toggleBlankTarget] = useToggle(
    link ? link.target === "_blank" : true,
  );

  useEffect(() => {
    onChange?.(
      {
        url: linkURL,
        text: linkText,
        target: isBlankTarget ? "_blank" : undefined,
      },
      StringUtils.isLocalURL(linkURL) || StringUtils.isValidURL(linkURL),
    );
  }, [linkText, linkURL, isBlankTarget, onChange]);

  return (
    <>
      <div className="d-flex flex-column flex-fill gap-24">
        <FormControl id="linkText" isOptional>
          <Label>{t("Texte du lien")}</Label>
          <Input
            type="text"
            placeholder={t("Texte du lien personnalisé")}
            size="md"
            value={linkText}
            onChange={(e) => setLinkText(e.target.value)}
          />
        </FormControl>
        <FormControl id="linkUrl" isRequired>
          <Label>{t("URL du lien externe")}</Label>
          <Input
            type="text"
            placeholder={t("http://www.exemple-lien.com")}
            size="md"
            value={linkURL}
            onChange={(e) => setLinkURL(e.target.value)}
          />
        </FormControl>
        <Checkbox
          label={t("Ouvrir le lien dans un nouvel onglet")}
          onChange={() => toggleBlankTarget()}
          checked={isBlankTarget}
        />
      </div>
    </>
  );
};

export default ExternalLinker;
