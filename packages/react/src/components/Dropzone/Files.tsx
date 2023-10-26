import { useEffect } from "react";

import { WorkspaceElement } from "edifice-ts-client";

import { useDropzoneContext } from "./Dropzone";
import useHandleFile from "../../hooks/useHandleFiles/useHandleFiles";
import { UploadCard } from "../../multimedia";
import { custumSize } from "../../utils/fileSize";

export interface FilesProps {
  uploadFile: WorkspaceElement | File;
  index: number;
  handleDelete: any;
}

const Files = ({ uploadFile, index, handleDelete }: FilesProps) => {
  const { statusUpload, handleSave } = useHandleFile();
  const { setUploadFiles } = useDropzoneContext();

  const callHandleSave = async () => {
    const result = await handleSave(uploadFile as File);
    setUploadFiles((olduploadFiles: any) => {
      const newArray = [...olduploadFiles];
      newArray[index] = result;
      return newArray;
    });
  };

  const callHandleRetry = async () => {
    const result = await handleSave(uploadFile as File);
    if ((result as WorkspaceElement)._id) {
      setUploadFiles((olduploadFiles: any) => {
        const newArray = [...olduploadFiles];
        newArray[newArray.length - index] = result;
        return newArray;
      });
    }
  };

  useEffect(() => {
    callHandleSave();
  }, []);

  const fileInfo = {
    name:
      (uploadFile as WorkspaceElement).metadata?.filename ||
      (uploadFile as File).name,
    info: {
      type:
        (uploadFile as WorkspaceElement).metadata?.["content-type"]?.match(
          /([^/]+$)/,
        )?.[0] || (uploadFile as File).type,
      weight: custumSize(
        (uploadFile as WorkspaceElement)?.metadata?.size || 0,
        1,
      ),
    },
    src: `/workspace/document/${(uploadFile as WorkspaceElement)._id}`,
  };

  return (
    <UploadCard
      status={statusUpload}
      onDelete={() => handleDelete(uploadFile as WorkspaceElement, index)}
      onEdit={() => console.log("edit")}
      onRetry={() => callHandleRetry()}
      item={fileInfo}
    />
  );
};

export default Files;
