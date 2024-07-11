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
      const parsedJson = JSON.parse(json);
      if (!Array.isArray(parsedJson)) {
        throw new Error("The questions must be contained in an array");
      }

      if (parsedJson.length === 0) {
        throw new Error("There must be at least one question");
      }

      parsedJson.forEach((element: any) => {
        if (!element.question) {
          throw new Error("The question must be defined");
        }
        if (typeof element.question !== "string") {
          throw new Error(
            `The question must be a string (got ${typeof element.question} for ${
              element.question
            })`,
          );
        }

        if (!element.options) {
          throw new Error("The options must be defined");
        }

        if (!Array.isArray(element.options)) {
          throw new Error("The options must be an array");
        }

        if (element.options.length < 2) {
          throw new Error("There must be at least two options");
        }

        element.options.forEach(
          (option: { [key: string]: string | number }) => {
            if (typeof option !== "string" && typeof option !== "number") {
              throw new Error(
                `The option must be a string or a number (got ${typeof option} for ${option})`,
              );
            }
          },
        );

        if (element.correctIndex === undefined) {
          throw new Error("The correct answer index must be defined");
        }

        if (typeof element.correctIndex !== "number") {
          throw new Error(
            `The correct answer index must be a number (got ${typeof element.correct} for ${
              element.correctIndex
            })`,
          );
        }

        if (
          element.correctIndex < 0 ||
          element.correctIndex >= element.options.length
        ) {
          throw new Error(
            `The correct answer index must be between 0 and ${
              element.options.length - 1
            } (got ${element.correctIndex})`,
          );
        }

        if (element.explanation && typeof element.explanation !== "string") {
          throw new Error(
            `The explanation must be a string (got ${typeof element.explanation} for ${
              element.explanation
            })`,
          );
        }
      });
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
