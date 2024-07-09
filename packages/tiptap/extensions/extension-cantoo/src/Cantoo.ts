import { Node } from "@tiptap/core";

class SS_Node<O = any, S = any> extends Node<O, S> {
  static create<O = any, S = any>(config?: any) {
    return Node.create(config) as SS_Node<O, S>;
  }
}

export const Cantoo = SS_Node.create<{}>({
  name: "cantoo",
  addCommands() {
    return {
      runCantoo:
        () =>
        ({ commands }) => {
          console.log("Cantoo is running");
          return commands;
        },
    };
  },
});
