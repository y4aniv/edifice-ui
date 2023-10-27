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

      if (doc._id) {
        setStatus("success");
        return doc;
      } else {
        setStatus("error");
        return file;
      }
    } catch (e) {
      setStatus("error");
      console.log(e);
      return file;
    }
  }

  async function handleDelete(element: WorkspaceElement, index: number) {
    try {
      await odeServices.workspace().deleteFile([element]);
      setUploadFiles((oldUploadFiles) =>
        oldUploadFiles.filter((_, i) => i !== index),
      );
    } catch (e) {
      console.log(e);
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
