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

        if (!element.answers) {
          throw new Error("The answers must be defined");
        }

        if (!Array.isArray(element.answers)) {
          throw new Error("The answers must be contained in an array");
        }

        if (element.answers.length < 2) {
          throw new Error("There must be at least two answers");
        }

        element.answers.forEach((answer: any) => {
          if (typeof answer !== "string" && typeof answer !== "number") {
            throw new Error(
              `The answer must be a string or a number (got ${typeof answer} for ${answer})`,
            );
          }
        });

        if (element.correct === undefined) {
          throw new Error("The correct answer must be defined");
        }

        if (typeof element.correct !== "number") {
          throw new Error(
            `The correct answer must be a number (got ${typeof element.correct} for ${
              element.correct
            })`,
          );
        }

        if (element.correct < 0 || element.correct >= element.answers.length) {
          throw new Error(
            `The correct answer must be between 0 and ${
              element.answers.length - 1
            } (got ${element.correct})`,
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
