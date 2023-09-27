import React, {
  ChangeEvent,
  createContext,
  useContext,
  useMemo,
  useRef,
  useState,
} from "react";

import clsx from "clsx";

import DropzoneDrag from "./DropzoneDrag";
import DropzoneFile from "./DropzoneFile";
import DropzoneImport from "./DropzoneImport";
import { useDropzone } from "../../hooks";
export interface AttachementType {
  type: string;
  size: number;
  name: string;
  src: string;
}

const DropZoneContext = createContext<{
  inputRef: React.MutableRefObject<HTMLInputElement | null>;
  multiple?: boolean;
  importMessage?: string;
}>(null!);

export function useDropzoneContext() {
  const context = useContext(DropZoneContext);
  if (!context) {
    throw new Error(
      `Dropzone compound components cannot be rendered outside the Dropzone component`,
    );
  }
  return context;
}
export interface DropzoneProps {
  /**
   * Optional class for styling purpose
   */
  className?: string;
  /**
   * Optional filter type mime
   */
  accept?: string[];
  /**
   * Authorize import multiple files
   */
  multiple?: boolean;
  /**
   * Authorize import multiple files
   */
  handle?: boolean;
  /**
   * Show instruction to import file
   */
  importMessage?: string;
  /**
   * Execute if a success
   */
  onSuccess: () => void;
  /**
   * Execute if an error
   */
  onError: () => void;
}

const Dropzone = ({
  className,
  accept,
  multiple = false,
  handle = false,
  importMessage,
  onSuccess,
  onError,
}: DropzoneProps) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const [attachments, setAttachments] = useState<AttachementType[]>([]);

  const handleChange = (files?: FileList | null) => {
    try {
      const file = files?.[0];
      if (!file) return;

      if (file) {
        if (multiple) {
          const newFile = {
            type: file.type,
            size: file.size,
            name: file.name,
            src: URL.createObjectURL(file),
          };
          setAttachments((oldArray) => [...oldArray, newFile]);
        } else {
          const newFile = {
            type: file.type,
            size: file.size,
            name: file.name,
            src: URL.createObjectURL(file),
          };
          setAttachments([newFile]);
        }
      }
      onSuccess();
    } catch {
      onError();
    }
  };

  const { handleDragLeave, handleDragging, handleDrop, dragging } = useDropzone(
    inputRef,
    handleChange,
  );

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    handleChange(event.target.files);
  };

  const classes = clsx(
    "dropzone p-32",
    {
      "is-dragging": dragging,
      "is-drop-files": attachments.length !== 0 && !handle ? false : true,
    },
    className,
  );

  const value = useMemo(
    () => ({ inputRef, multiple, importMessage }),
    [inputRef, multiple, importMessage],
  );

  return (
    <DropZoneContext.Provider value={value}>
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
              {attachments.length !== 0 ? (
                <Dropzone.File attachments={attachments} />
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
          name="attachement-input"
          id="attachement-input"
          onChange={handleInputChange}
          hidden
        />
      </div>
    </DropZoneContext.Provider>
  );
};

Dropzone.File = DropzoneFile;
Dropzone.Import = DropzoneImport;
Dropzone.Drag = DropzoneDrag;

Dropzone.displayName = "Dropzone";

export default Dropzone;
