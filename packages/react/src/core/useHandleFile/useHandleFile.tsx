import { useState } from "react";

import { WorkspaceElement, odeServices } from "edifice-ts-client";

import { Status } from "../../utils/Status";

export default function useHandleFile() {
  const [status, setStatus] = useState<Status | undefined>("idle");
  const [uploadFiles, setUploadFiles] = useState<(WorkspaceElement | File)[]>(
    [],
  );

  async function saveFile(file: File) {
    setStatus("loading");

    try {
      const doc = await odeServices.workspace().saveFile(file);

      if (!doc) throw new Error("No document found");

      if (doc._id) {
        setStatus("success");
        return doc;
      }
    } catch (error) {
      setStatus("error");
      return file;
    }
  }

  async function handleDelete(element: WorkspaceElement, index: number) {
    try {
      await odeServices.workspace().deleteFile([element]);
      setUploadFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
    } catch (error) {
      console.error(error);
    }
  }

  return {
    uploadFiles,
    setUploadFiles,
    saveFile,
    status,
    handleDelete,
  };
}
