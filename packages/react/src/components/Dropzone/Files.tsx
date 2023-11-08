import { useEffect } from "react";

import { WorkspaceElement } from "edifice-ts-client";

import { useDropzoneContext } from "./DropzoneContext";
import useHandleFile from "../../core/useHandleFile/useHandleFile";
import { UploadCard } from "../../multimedia";
import { customSize } from "../../utils/fileSize";

export interface FilesProps {
  uploadFile: WorkspaceElement | File;
  index: number;
  handleDelete: (element: WorkspaceElement, index: number) => void;
}

const Files = ({ uploadFile, index, handleDelete }: FilesProps) => {
  const { status, saveFile } = useHandleFile();
  const { setUploadFiles } = useDropzoneContext();

  const responseFile = uploadFile as WorkspaceElement;
  const file = uploadFile as File;

  useEffect(() => {
    (async () => {
      try {
        const result = await saveFile(file);

        setUploadFiles((prevFiles: any) => {
          const newArray = [...prevFiles];
          newArray[index] = result;
          return newArray;
        });
      } catch (error) {
        console.error(error);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleRetry = async () => {
    try {
      const result = await saveFile(file);
      if ((result as WorkspaceElement)._id) {
        setUploadFiles((prevFiles: any) => {
          const newArray = [...prevFiles];
          newArray[newArray.length - index] = result;
          return newArray;
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const fileInfo = {
    name: responseFile?.metadata?.filename || file?.name,
    info: {
      type:
        responseFile?.metadata?.["content-type"]?.match(/([^/]+$)/)?.[0] ||
        file?.type,
      weight: customSize(responseFile?.metadata?.size || 0, 1),
    },
    src: `/workspace/document/${responseFile?._id}`,
  };

  return (
    <UploadCard
      status={status}
      onDelete={() => handleDelete(uploadFile as WorkspaceElement, index)}
      onEdit={() => console.log("edit")}
      onRetry={() => handleRetry()}
      item={fileInfo}
    />
  );
};

export default Files;
