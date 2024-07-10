import { Qcm } from "@edifice-tiptap-extensions/extension-qcm";
import { ReactNodeViewRenderer } from "@tiptap/react";

const QcmNodeView = (Component: any) =>
  Qcm.extend({
    addNodeView() {
      return ReactNodeViewRenderer(Component);
    },
  });

export default QcmNodeView;
