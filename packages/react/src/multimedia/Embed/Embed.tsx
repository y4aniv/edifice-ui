import { useState } from "react";

import { Code } from "@edifice-ui/icons";
import { useTranslation } from "react-i18next";

import { FormControl, TextArea } from "../../components";

export interface EmbedProps {
  onSuccess: (resource?: string) => void;
}

const Embed = ({ onSuccess }: EmbedProps) => {
  const { t } = useTranslation();
  const [htmlContent, setHTMLContent] = useState<string>();

  function handleContentChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
    const HTMLContent = event.target.value;

    setHTMLContent(HTMLContent);
    if (HTMLContent?.length) {
      onSuccess(HTMLContent);
    } else {
      onSuccess();
    }
  }

  return (
    <div className="d-flex flex-column flex-fill">
      <div className="mb-32">
        {t(
          'Pour ajouter un contenu externe, copiez le code de partage "embed" ou "iframe" et coller le ci-dessous.',
        )}
      </div>
      <div className="mb-8 d-flex">
        <Code className="me-8"></Code>
        {t("Balise embed ou iframe")}
      </div>
      <FormControl id="iframeContent">
        <TextArea
          size="md"
          height="sm"
          placeholder={t("Coller le code embed / iframe ici")}
          onChange={handleContentChange}
        />
      </FormControl>
      {!!htmlContent?.length && (
        <div
          className="embed-preview mt-12"
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        ></div>
      )}
      {!htmlContent?.length && (
        <div className="embed-preview mt-12 d-flex align-items-center justify-content-center bg-gray-300 text-black-50 rounded-3">
          <strong>{t("Prévisualisation")}</strong>
        </div>
      )}
    </div>
  );
};

export default Embed;
