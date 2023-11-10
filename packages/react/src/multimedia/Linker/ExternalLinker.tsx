import { useState, useEffect } from "react";

import { useTranslation } from "react-i18next";

import { FormControl, Label, Input, Checkbox } from "../../components";
import { useToggle } from "../../hooks";

export interface IExternalLink {
  url: string;
  text?: string;
  target?: "_blank" | "";
}

export type ExternalLinkerProps = {
  /** Default link value. */
  link?: IExternalLink;
  /** Default text value. */
  text?: string;

  onChange?: (props: IExternalLink) => void;
};

const ExternalLinker = ({ link, text, onChange }: ExternalLinkerProps) => {
  const { t } = useTranslation();

  const [linkText, setLinkText] = useState<string>(link?.text || text || "");
  const [linkURL, setLinkURL] = useState<string>(link?.url || "");
  const [isBlankTarget, toggleBlankTarget] = useToggle(
    link ? link.target === "_blank" : true,
  );

  useEffect(() => {
    onChange?.({
      url: linkURL,
      text: linkText,
      target: isBlankTarget ? "_blank" : undefined,
    });
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
            placeholder={t("www.exemple-lien.com")}
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
