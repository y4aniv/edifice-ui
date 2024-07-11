import { Node, mergeAttributes } from "@tiptap/core";

export const Qcm = Node.create({
  name: "qcmComponent",
  group: "block",
  atom: true,
  draggable: true,
  addAttributes() {
    return {
      json: {
        default: "",
      },
    };
  },

  parseHTML() {
    return [
      {
        tag: "qcm-component",
      },
    ];
  },

  renderHTML({ HTMLAttributes }) {
    return ["qcm-component", mergeAttributes(HTMLAttributes)];
  },
});
