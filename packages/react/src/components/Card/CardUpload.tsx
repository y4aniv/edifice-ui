import { forwardRef } from "react";

import { Close, SuccessOutline, Wand, Retry } from "@edifice-ui/icons";
import clsx from "clsx";
import { useTranslation } from "react-i18next";

import { useCardContext } from "./CardContext";
import { usePaths } from "../../core";
import { Button, IconButton } from "../Button";
import { Image } from "../Image";
import { Loading } from "../Loading";

const Upload = forwardRef(() => {
  const { options, isLoading } = useCardContext();

  const { imageSrc, name, info, status, onDelete, onEdit, onRetry } = options;

  const { t } = useTranslation();

  const [imagePath] = usePaths();

  const classesText = clsx(
    "card-text caption text-break text-truncate text-truncate-1",
  );

  const classesTitle = clsx(
    "card-title body text-title text-break text-truncate text-truncate-1",
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
          {t("Retry")}
        </Button>
      </>
    );

  return (
    <>
      <div className="card-body">
        <div className="card-image">
          {status === "error" ? (
            <Image
              alt=""
              src={`${imagePath}/common/image-status-error.svg`}
              objectFit="cover"
              className={clsx({
                placeholder: isLoading,
              })}
            />
          ) : (
            <Image
              alt=""
              src={imageSrc ?? ""}
              objectFit="cover"
              className={clsx({
                placeholder: isLoading,
              })}
            />
          )}
        </div>
        <div className="text-break text-truncate text-truncate-1">
          <h3 className={classesTitle}>
            <strong>{name}</strong>
          </h3>
          <p className={classesText}>
            {status === "success" ? (
              <em>
                {info?.type} {info?.weight && `- ${info.weight}`}
              </em>
            ) : (
              <strong className="upload-error">{t("Import error")}</strong>
            )}
          </p>
        </div>
      </div>
      <div className="card-footer px-8 py-16">
        <div className="action-content">
          <div className="status">
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
              color="secondary"
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
