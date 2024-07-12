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
    const jsonPayload = JSON.parse(json) as {
      qcmId: string;
      qcmData: {
        question: string;
        options: string[] | number[];
        correctIndex: number;
        explanation?: string;
      }[];
    };

    editor?.commands.insertContent([
      {
        type: "qcmComponent",
        attrs: {
          json: jsonPayload,
          random: true,
        },
      },
      // Add a line break after the QCM to avoid a bug if the component is at the end of the document
      {
        type: "paragraph",
        content: [{ type: "text", text: "\n" }],
      },
    ]);

    toggle();
  };

  return {
    isOpen,
    toggle,
    onCancel,
    onSuccess,
  };
};
