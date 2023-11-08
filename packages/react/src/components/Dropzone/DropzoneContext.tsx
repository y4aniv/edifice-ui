import { createContext, useContext } from "react";

import { WorkspaceElement } from "edifice-ts-client";

export interface DropzoneContextType {
  inputRef: React.MutableRefObject<HTMLInputElement | null>;
  importMessage?: string;
  uploadFiles: (WorkspaceElement | File)[];
  handleDelete: (element: WorkspaceElement, index: number) => void;
  setUploadFiles: any;
}

export const DropzoneContext = createContext<DropzoneContextType | null>(null);

export function useDropzoneContext() {
  const context = useContext(DropzoneContext);
  if (!context) {
    throw new Error(
      "Dropzone compound components cannot be rendered outside the Dropzone component",
    );
  }
  return context;
}
