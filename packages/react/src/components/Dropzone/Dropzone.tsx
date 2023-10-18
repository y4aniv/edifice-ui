import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useRef,
} from "react";

import clsx from "clsx";
import { WorkspaceElement } from "edifice-ts-client";

import DropzoneDrag from "./DropzoneDrag";
import DropzoneFile from "./DropzoneFile";
import DropzoneImport from "./DropzoneImport";
import { useDropzone } from "../../hooks";
import useHandleFile from "../../hooks/useHandleFiles/useHandleFiles";

export interface AttachmentType {
  type: string;
  size: number;
  name: string;
  src: string;
}

interface DropzoneContextType {
  inputRef: React.MutableRefObject<HTMLInputElement | null>;
  importMessage?: string;
  uploadFile: (WorkspaceElement | File)[];
  handleDelete: (element: WorkspaceElement, index: number) => void;
}

const DropzoneContext = createContext<DropzoneContextType | null>(null);

export function useDropzoneContext() {
  const context = useContext(DropzoneContext);
  if (!context) {
    throw new Error(
      "Dropzone compound components cannot be rendered outside the Dropzone component",
    );
  }
  return context;
}

interface DropzoneProps {
  className?: string;
  accept?: string[];
  multiple?: boolean;
  handle?: boolean;
  importMessage?: string;
  onSuccess: (res: WorkspaceElement[]) => void;
  onError: (err: string) => void;
}

const Dropzone = ({
  className,
  accept,
  multiple = true,
  handle = false,
  importMessage,
  onSuccess,
}: DropzoneProps) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const { handleDelete, handleSave, setUploadFile, uploadFile } =
    useHandleFile();

  const handleInputChange = (files: FileList | null) => {
    if (files && (accept?.includes(files[0].type) || accept?.length === 0)) {
      const file = files?.[0];
      if (file) {
        handleSave;
        setUploadFile(
          multiple ? (oldAttachments) => [...oldAttachments, file] : [file],
        );
      }
    }
  };

  const { handleDragLeave, handleDragging, handleDrop, dragging } = useDropzone(
    inputRef,
    handleInputChange,
  );

  const classes = clsx(
    "dropzone",
    {
      "is-dragging": dragging,
      "is-drop-files": uploadFile.length !== 0 && !handle ? false : true,
    },
    className,
  );

  const contextValue = useMemo(
    () => ({
      inputRef,
      importMessage,
      uploadFile,
      handleDelete,
    }),
    [inputRef, importMessage, uploadFile, handleDelete],
  );

  useEffect(() => {
    onSuccess((uploadFile as WorkspaceElement[]).filter((el) => el._id && el));
  }, [uploadFile]);

  return (
    <DropzoneContext.Provider value={contextValue}>
      <div
        className={classes}
        onDragEnter={handleDragging}
        onDragOver={handleDragging}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <div className="align-center">
          {handle ? (
            <Dropzone.Drag />
          ) : (
            <>
              {uploadFile.length !== 0 ? (
                <Dropzone.File />
              ) : (
                <Dropzone.Import />
              )}
              <Dropzone.Drag />
            </>
          )}
        </div>
        <input
          ref={inputRef}
          accept={accept?.join(",")}
          multiple
          type="file"
          name="attachment-input"
          id="attachment-input"
          onChange={(event) => {
            handleInputChange(event.target.files);
            event.target.value = "";
          }}
          hidden
        />
      </div>
    </DropzoneContext.Provider>
  );
};

Dropzone.File = DropzoneFile;
Dropzone.Import = DropzoneImport;
Dropzone.Drag = DropzoneDrag;

Dropzone.displayName = "Dropzone";

export default Dropzone;
