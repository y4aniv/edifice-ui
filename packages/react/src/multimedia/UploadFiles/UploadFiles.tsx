import { WorkspaceElement } from "edifice-ts-client";

import { UploadCard } from "../../components";
import useUploadFiles from "../../core/useUploadFiles/useUploadFiles";
import { customSize } from "../../utils/fileSize";

const Upload = ({
  onFilesChange,
}: {
  onFilesChange: (uploadedFiles: WorkspaceElement[]) => void;
}) => {
  const { files, uploadedFiles, status, uploadFile, removeFile } =
    useUploadFiles({ handleOnChange: onFilesChange });

  return files.map((file) => {
    const resource = uploadedFiles.find(
      (uploadedFile) => uploadedFile.name === file.name,
    );

    const item = {
      name: file.name,
      info: {
        type: file.type,
        weight: customSize(file.size || 0, 1),
      },
      src: resource ? `/workspace/document/${resource?._id}` : "",
    };

    return (
      <UploadCard
        key={file.name}
        status={status[file.name]}
        item={item}
        onRetry={() => uploadFile(file)}
        onDelete={() => removeFile(file)}
      />
    );
  });
};

Upload.displayName = "Upload";

export default Upload;
