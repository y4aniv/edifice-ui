import React, {
  ChangeEvent,
  ComponentPropsWithRef,
  forwardRef,
  Ref,
  useRef,
  useState,
} from "react";

import { Download } from "@edifice-ui/icons";
import clsx from "clsx";

import { useDropzone } from "../../hooks";
import { Button } from "../Button";

export interface DropzoneProps extends ComponentPropsWithRef<"div"> {
  /**
   * Optional class for styling purpose
   */
  className?: string;
}

const Dropzone = forwardRef(
  ({ className, ...restProps }: DropzoneProps, ref: Ref<HTMLDivElement>) => {
    const inputRef = useRef<HTMLInputElement | null>(null);

    const [preview, setPreview] = useState<Record<string, string>>({
      name: "",
      image: "",
    });

    const handleChange = (files?: FileList | null) => {
      setPreview({ ...preview, name: "", image: "" });

      const file = files?.[0];
      if (!file) {
        return;
      }

      const newPreview = {
        ...preview,
        name: file.name,
        image: URL.createObjectURL(file),
      };

      setPreview(newPreview);
    };

    const { handleDragLeave, handleDragging, handleDrop, dragging } =
      useDropzone(inputRef, handleChange);

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
      handleChange(event.target.files);
    };

    const classes = clsx(
      "dropzone",
      {
        "is-dragging": dragging,
      },
      className,
    );

    const checkDropZoneEmpty = () => {
      const arrayValue = Object.values(preview);
      const result = arrayValue.filter((item) => item === "").length === 0;
      return result;
    };

    return (
      <div
        ref={ref}
        className={classes}
        {...restProps}
        onDragEnter={handleDragging}
        onDragOver={handleDragging}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <div className="align-center">
          {checkDropZoneEmpty() ? (
            <div>
              {preview.image ? (
                <img
                  src={preview.image}
                  alt={preview.name}
                  width={200}
                  height={200}
                />
              ) : null}
            </div>
          ) : (
            <>
              <div className="import-wrapper">
                <Download height={48} width={48} />
                <p className="import-text my-16">
                  Glissez-déposez un/des fichier(s) depuis votre appareil ou
                  cliquez sur parcourir
                </p>
                <Button onClick={() => inputRef?.current?.click()}>
                  Import button
                </Button>
              </div>
            </>
          )}
          <div className="drop-wrapper">
            <div className="drop-content">
              <p className="drop-text">
                Déposez ici vos fichiers, images, vidéos ou audios
              </p>
            </div>
          </div>
        </div>
        <input
          ref={inputRef}
          type="file"
          name="attachement-input"
          id="attachement-input"
          onChange={handleInputChange}
          hidden
        />
      </div>
    );
  },
);

Dropzone.displayName = "Dropzone";

export default Dropzone;
