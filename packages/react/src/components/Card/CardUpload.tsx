import { forwardRef } from "react";

import { Close, SuccessOutline, Wand, Retry } from "@edifice-ui/icons";
import clsx from "clsx";

import { useCardContext } from "./CardContext";
import { usePaths } from "../../core";
import { Button, IconButton } from "../Button";
import { Image } from "../Image";
import { Loading } from "../Loading";

const Upload = forwardRef(() => {
  const { options, isLoading, classesTitle } = useCardContext();

  const { imageSrc, name, info, status, onDelete, onEdit, onRetry } = options;

  const [imagePath] = usePaths();

  const classesText = clsx(
    "card-text small text-break text-truncate text-truncate-1",
    {
      placeholder: isLoading,
    },
  );

  const renderStatusUpload =
    status === "success" ? (
      <SuccessOutline className="upload-success" />
    ) : (
      <>
        <Button
          leftIcon={<Retry />}
          variant="ghost"
          color="tertiary"
          onClick={onRetry}
        >
          Retry
        </Button>
      </>
    );

  return (
    <>
      <div className="card-body">
        {status === "error" ? (
          <Image
            alt=""
            src={`${imagePath}/common/image-status-error.svg`}
            width="36"
            height="36"
            objectFit="cover"
            className={clsx({
              placeholder: isLoading,
            })}
          />
        ) : (
          <Image
            alt=""
            src={imageSrc ?? ""}
            width="36"
            height="36"
            objectFit="cover"
            className={clsx("h-full", {
              placeholder: isLoading,
            })}
          />
        )}
        <div className="text-break text-truncate text-truncate-1">
          <h3 className={classesTitle}>
            <strong>{name}</strong>
          </h3>
          <p className={classesText}>
            {status === "success" ? (
              <>
                {info?.type} {info?.weight && `- ${info.weight}`}
              </>
            ) : (
              <strong className="upload-error">Erreur d'import</strong>
            )}
          </p>
        </div>
      </div>
      <div className="card-footer gap-16">
        <div className="action-content">
          <div className="status px-16">
            {isLoading ? (
              <Loading
                isLoading
                loadingPosition="left"
                className="loading-color"
              />
            ) : (
              renderStatusUpload
            )}
          </div>
          <div className="actions">
            <IconButton
              icon={<Wand />}
              variant="ghost"
              disabled={status !== "success" || isLoading}
              onClick={onEdit}
            />
            <IconButton
              icon={<Close />}
              variant="ghost"
              color="tertiary"
              onClick={onDelete}
            />
          </div>
        </div>
      </div>
    </>
  );
});

Upload.displayName = "Card.Upload";

export default Upload;
