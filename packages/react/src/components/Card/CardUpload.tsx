import { forwardRef } from "react";

import { Close, Error, Redo, SuccessOutline, Wand } from "@edifice-ui/icons";
import clsx from "clsx";

import { useCardContext } from "./CardContext";
import { AppIcon } from "../AppIcon";
import { Button, IconButton } from "../Button";
import { Image } from "../Image";
import { Loading } from "../Loading";

const Upload = forwardRef(() => {
  const { options, isLoading, classesTitle, app } = useCardContext();

  const {
    imageSrc,
    name,
    extensionFile,
    weightFile,
    successUpload,
    uploadLoading,
    onDelete,
    onEdit,
    onRetry,
  } = options;

  const classesText = clsx("card-text small", {
    placeholder: isLoading,
  });

  return (
    <div className="card-upload">
      <div className="card-body">
        {imageSrc ? (
          <div className="card-image">
            <Image
              alt=""
              src={imageSrc}
              width="48"
              height="48"
              objectFit="cover"
              className={clsx("h-full", {
                placeholder: isLoading,
              })}
            />
          </div>
        ) : (
          <AppIcon app={app} iconFit="ratio" size="48" variant="rounded" />
        )}
        <div>
          <h3 className={classesTitle}>
            {successUpload ? (
              <strong>{name}</strong>
            ) : (
              <strong>Upload failed</strong>
            )}
          </h3>
          <p className="card-text small">
            <em className={classesText}>
              {extensionFile} {weightFile && `- ${weightFile}`}
            </em>
          </p>
        </div>
      </div>
      <div className="action-upload">
        <div className="action-content">
          <div className="status px-16">
            {uploadLoading ? (
              <Loading isLoading loadingPosition="left" />
            ) : (
              <>
                {successUpload ? (
                  <SuccessOutline className="upload-success" />
                ) : (
                  <>
                    <Button
                      leftIcon={<Redo />}
                      variant="ghost"
                      color="tertiary"
                      onClick={onRetry}
                    >
                      Retry
                    </Button>
                    <Error className="upload-error" />
                  </>
                )}
              </>
            )}
          </div>
          <div className="actions">
            <IconButton icon={<Wand />} variant="ghost" onClick={onEdit} />
            <IconButton
              icon={<Close />}
              variant="ghost"
              color="tertiary"
              onClick={onDelete}
            />
          </div>
        </div>
      </div>
    </div>
  );
});

Upload.displayName = "Card.Upload";

export default Upload;
