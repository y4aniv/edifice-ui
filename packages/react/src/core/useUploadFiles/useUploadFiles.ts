import { useState, useEffect } from "react";

import { WorkspaceElement } from "edifice-ts-client";

import { useDropzoneContext } from "../../components/Dropzone/DropzoneContext";
import { Status } from "../../utils";
import { useWorkspaceFile } from "../useWorkspaceFile";

const useUploadFiles = ({
  handleOnChange,
}: {
  handleOnChange: (uploadedFiles: WorkspaceElement[]) => void;
}) => {
  const [uploadedFiles, setUploadedFiles] = useState<WorkspaceElement[]>([]);
  const [status, setStatus] = useState<Record<string, Status>>({});

  const { files, deleteFile } = useDropzoneContext();
  const { create, remove } = useWorkspaceFile();

  useEffect(() => {
    if (files.length > 0) {
      files.forEach((file) => {
        if (status[file.name] === "success") return;

        (async () => {
          await uploadFile(file);
        })();
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [files]);

  useEffect(() => {
    handleOnChange(uploadedFiles);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [uploadedFiles]);

  async function uploadFile(file: File) {
    setStatus((prevStatus) => ({
      ...prevStatus,
      [file.name]: "loading",
    }));

    try {
      const resource = await create(file);

      setStatus((prevStatus) => ({
        ...prevStatus,
        [resource.name]: "success",
      }));

      setUploadedFiles((prevFiles: WorkspaceElement[]) => [
        ...prevFiles,
        resource,
      ]);
    } catch (error) {
      console.error(error);

      setStatus((prevStatus) => ({
        ...prevStatus,
        [file.name]: "error",
      }));
    }
  }

  async function removeFile(file: File) {
    const resource = uploadedFiles.find(
      (uploadedFile) => uploadedFile.name === file.name,
    );

    if (resource) {
      await remove(resource);

      setStatus((prevStatus) => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { [resource.name]: removedStatus, ...rest } = prevStatus;

        return rest;
      });

      setUploadedFiles((prevFiles: WorkspaceElement[]) => {
        return prevFiles.filter((prevFile) => prevFile.name !== resource?.name);
      });

      deleteFile(file);
    }
  }

  return {
    files,
    status,
    uploadedFiles,
    uploadFile,
    removeFile,
  };
};

export default useUploadFiles;
