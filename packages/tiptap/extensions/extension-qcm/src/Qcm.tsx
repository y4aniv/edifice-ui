import { Node, mergeAttributes } from "@tiptap/core";
import { NodeViewWrapper, ReactNodeViewRenderer } from "@tiptap/react";
import React from "react";

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
