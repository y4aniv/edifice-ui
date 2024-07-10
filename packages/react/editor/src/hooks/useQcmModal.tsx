import { useToggle } from "@edifice-ui/react";
import { Editor } from "@tiptap/react";

/**
 * Custom hook to manage QcmModal events in an editor.
 * @param editor an instance
 * @returns {
 * `isOpen`: truthy boolean when QcmModal sholud be visible,
 * `toggle`: an imperative function to toggle the `isOpen` value,
 * `onCancel`: Cancel event handler,
 * `onSuccess`: Success event handler (adds a qcm to the editor content),
 * }
 */
export const useQcmModal = (editor: Editor | null) => {
  const [isOpen, toggle] = useToggle(false);

  const onCancel = () => {
    toggle();
  };

  const onSuccess = (json: string) => {
    const jsonContent = JSON.parse(json) as {
      question: string;
      answers: string[] | number[];
      correct: number;
    }[];
    jsonContent.forEach((qcm) => {
      console.log(qcm);
    });
    toggle();
  };

  return {
    isOpen,
    toggle,
    onCancel,
    onSuccess,
  };
};
