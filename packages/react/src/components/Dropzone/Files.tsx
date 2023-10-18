import { WorkspaceElement } from "edifice-ts-client";

import useHandleFile from "../../hooks/useHandleFiles/useHandleFiles";
import { custumSize } from "../../utils/fileSize";
import { Card } from "../Card";

export interface FilesProps {
  attachment: WorkspaceElement | File;
  index: number;
  handleDelete: any;
}

const Files = ({ attachment, index, handleDelete }: FilesProps) => {
  const { handleRetry, statusUpload, isLoading } = useHandleFile();

  return (
    <Card
      isLoading={isLoading}
      options={{
        type: "upload",
        name:
          (attachment as WorkspaceElement).metadata?.filename ??
          (attachment as File).name,
        //imageSrc: (attachment as File) && URL.createObjectURL(attachment as File),
        status: statusUpload,
        info: {
          type:
            (attachment as WorkspaceElement).metadata?.["content-type"]?.match(
              /([^/]+$)/,
            )?.[0] ?? (attachment as File).type,
          weight: custumSize(
            (attachment as WorkspaceElement)?.metadata?.size ?? 0,
            1,
          ),
        },
        onDelete: () => handleDelete(attachment as WorkspaceElement, index),
        onEdit: () => console.log("edit"),
        onRetry: () => handleRetry(attachment as File, index),
      }}
      app={undefined}
    />
  );
};

export default Files;
