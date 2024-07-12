import { Alert, Button, Modal } from "@edifice-ui/react";
import { useState } from "react";
import { createPortal } from "react-dom";
import { useTranslation } from "react-i18next";

interface ModalProps {
  isOpen: boolean;
  onSuccess?: (json: string) => void;
  onCancel?: () => void;
}

const QcmModal = ({ isOpen, onSuccess, onCancel }: ModalProps) => {
  const handleOnCancel = () => {
    onCancel?.();
  };

  const { t } = useTranslation("");

  const [jsonValue, setJsonValue] = useState<string>("");
  const [jsonError, setJsonError] = useState<string | null>(null);

  const validateJson = (json: string) => {
    try {
      JSON.parse(json);
      return true;
    } catch (error: any) {
      if (error instanceof Error) {
        return error.message;
      } else {
        return "An error occurred";
      }
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setJsonValue(event.target.value);
  };

  const handleSubmit = () => {
    const isValidJson = validateJson(jsonValue);
    if (isValidJson === true) {
      setJsonError(null);
      onSuccess?.(jsonValue);
    } else {
      setJsonError(isValidJson);
    }
  };

  return createPortal(
    <Modal id="QcmModal" isOpen={isOpen} onModalClose={handleOnCancel}>
      <Modal.Header onModalClose={handleOnCancel}>
        {t("tiptap.qcm.title")}
      </Modal.Header>
      <Modal.Subtitle>{t("tiptap.qcm.subtitle")}</Modal.Subtitle>
      <Modal.Body>
        <div
          className="mb-16"
          style={{ display: jsonError ? "block" : "none" }}
        >
          <Alert type={"warning"}>
            {t("tiptap.qcm.warning") + " " + jsonError}
          </Alert>
        </div>
        <textarea
          id="jsonTextArea"
          name="json"
          rows={4}
          cols={50}
          placeholder={t("tiptap.qcm.placeholder")}
          className="border rounded-3 w-100 px-16 py-12"
          onChange={(e) => handleChange(e)}
        ></textarea>
      </Modal.Body>
      <Modal.Footer>
        <Button
          color="tertiary"
          onClick={onCancel}
          type="button"
          variant="ghost"
        >
          {t("tiptap.qcm.cancel")}
        </Button>
        <Button
          color="primary"
          onClick={() => handleSubmit()}
          type="button"
          variant="filled"
        >
          {t("tiptap.qcm.add")}
        </Button>
      </Modal.Footer>
    </Modal>,
    document.getElementById("portal") as HTMLElement,
  );
};

export default QcmModal;
