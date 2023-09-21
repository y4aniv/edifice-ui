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
  multiple = true,
  handle = false,
  onSuccess,
  onError,
}: DropzoneProps) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const [attachment, setAttachment] = useState<AttachementType | undefined>();

  const handleChange = (files?: FileList | null) => {
    try {
      const file = files?.[0];
      if (!file) return;

      if (file) {
        setAttachment({
          type: file.type,
          size: file.size,
          name: file.name,
          src: URL.createObjectURL(file),
        });
        /* if (multiple) {
          setAttachment((attach) => {
            const test = {
              type: file.type,
              size: file.size,
              name: file.name,
              src: URL.createObjectURL(file),
            };
            (attach as AttachementType[]).push(test)
            return attach;
          });
        } else {
          setAttachment({
            type: file.type,
            size: file.size,
            name: file.name,
            src: URL.createObjectURL(file),
          });
        } */
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
      "is-drop-files": attachment && !handle ? false : true,
    },
    className,
  );

  const value = useMemo(() => ({ inputRef, multiple }), [inputRef, multiple]);

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
              {attachment ? (
                <Dropzone.File attachment={attachment} />
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
