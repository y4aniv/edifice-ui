import { useState } from "react";

import { WorkspaceElement, odeServices } from "edifice-ts-client";

import { Status } from "../../components";

export default function useHandleFile() {
  const [isLoading, setLoading] = useState(false);
  const [statusUpload, setStatusUpload] = useState<Status | undefined>();
  const [uploadFile, setUploadFile] = useState<(WorkspaceElement | File)[]>([]);

  async function handleSave(file: File | undefined) {
    setLoading(true);
    setStatusUpload(undefined);
    try {
      if (file) {
        const fileUpload = await odeServices.workspace().saveFile(file);
        if (fileUpload._id) {
          setUploadFile((oldAttachments) => {
            const newArray = [...oldAttachments];
            newArray[newArray.length - 1] = fileUpload;
            return newArray;
          });
          setStatusUpload("success");
        }
      }
    } catch (e) {
      setStatusUpload("error");
      //onError?.("Error while uploading video");
      console.log(e);
    } finally {
      setLoading(false);
    }
  }

  async function handleDelete(element: WorkspaceElement, index: number) {
    //await odeServices.workspace().deleteFile([element]);
    setUploadFile((oldUploadFile) => {
      const updatedUploadFile = oldUploadFile.filter((_, i) => i !== index);
      return updatedUploadFile;
    });
  }

  async function handleRetry(file: File | undefined, index: number) {
    setLoading(true);
    setStatusUpload(undefined);
    try {
      if (file) {
        const fileUpload = await odeServices.workspace().saveFile(file);
        if (fileUpload._id) {
          setUploadFile((oldAttachments) => {
            const newArray = [...oldAttachments];
            newArray[newArray.length - index] = fileUpload;
            return newArray;
          });
          setStatusUpload("success");
        }
      }
    } catch (e) {
      setStatusUpload("error");
      //onError?.("Error while uploading video");
      console.log(e);
    } finally {
      setLoading(false);
    }
  }

  return {
    uploadFile,
    setUploadFile,
    handleSave,
    isLoading,
    statusUpload,
    handleDelete,
    handleRetry,
    setLoading,
  };
}
