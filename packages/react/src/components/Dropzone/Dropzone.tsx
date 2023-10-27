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
import useHandleFile from "../../hooks/useHandleFile/useHandleFile";

export interface AttachmentType {
  type: string;
  size: number;
  name: string;
  src: string;
}

interface DropzoneContextType {
  inputRef: React.MutableRefObject<HTMLInputElement | null>;
  importMessage?: string;
  uploadFiles: (WorkspaceElement | File)[];
  handleDelete: (element: WorkspaceElement, index: number) => void;
  setUploadFiles: any;
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
  multiple,
  handle = false,
  importMessage,
  onSuccess,
}: DropzoneProps) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const { handleDelete, setUploadFiles, uploadFiles } = useHandleFile();

  const handleInputChange = (files: FileList | null) => {
    if (files && (accept?.includes(files[0].type) || accept?.length === 0)) {
      setUploadFiles((oldAttachments) => {
        const newArray = [...oldAttachments];
        for (let i = 0; i < files?.length; i++) {
          newArray.push(files[i]);
        }
        return newArray;
      });
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
      "is-drop-files": uploadFiles.length !== 0 && !handle ? false : true,
    },
    className,
  );

  const value = useMemo(
    () => ({
      inputRef,
      importMessage,
      uploadFiles,
      handleDelete,
      setUploadFiles,
    }),
    [inputRef, importMessage, uploadFiles, handleDelete, setUploadFiles],
  );

  useEffect(() => {
    onSuccess((uploadFiles as WorkspaceElement[]).filter((el) => el._id && el));
  }, [uploadFiles]);

  return (
    <DropzoneContext.Provider value={value}>
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
              {uploadFiles.length !== 0 ? (
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
          multiple={multiple}
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
