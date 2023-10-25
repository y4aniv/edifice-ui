import { useEffect, useState } from "react";

import { WorkspaceElement } from "edifice-ts-client";

import { useDropzoneContext } from "./Dropzone";
import useHandleFile from "../../hooks/useHandleFiles/useHandleFiles";
import { custumSize } from "../../utils/fileSize";
import { Card } from "../Card";

export interface FilesProps {
  uploadFile: WorkspaceElement | File;
  index: number;
  handleDelete: any;
}

const Files = ({ uploadFile, index, handleDelete }: FilesProps) => {
  const { statusUpload, handleSave } = useHandleFile();
  const { setUploadFiles } = useDropzoneContext();
  const [isLoading, setLoading] = useState(false);

  const callHandleSave = async () => {
    setLoading(true);
    const result = await handleSave(uploadFile as File);
    setUploadFiles((olduploadFiles: any) => {
      const newArray = [...olduploadFiles];
      newArray[newArray.length - 1] = result;
      return newArray;
    });
    setLoading(false);
  };

  const callHandleRetry = async () => {
    setLoading(true);
    const result = await handleSave(uploadFile as File);

    setUploadFiles((olduploadFiles: any) => {
      const newArray = [...olduploadFiles];
      newArray[newArray.length - index] = result;
      return newArray;
    });

    setLoading(false);
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
    //imageSrc: URL.createObjectURL(uploadFile as File),
  };

  return (
    <Card
      isLoading={isLoading}
      options={{
        type: "upload",
        name: fileInfo.name,
        status: statusUpload,
        info: fileInfo.info,
        onDelete: () => handleDelete(uploadFile as WorkspaceElement, index),
        onEdit: () => console.log("edit"),
        onRetry: () => callHandleRetry(),
      }}
      app={undefined}
    />
  );
};

export default Files;
