/* import { SuccessOutline, Retry, Wand, Close } from "@edifice-ui/icons";
import { useTranslation } from "react-i18next"; */

/* import { CardProps, Card, Loading, Button, IconButton, Image } from "..";
import { usePaths } from "../..";
import { Status } from "../../types";
import CardBody from "../Card/CardBody";
import CardText from "../Card/CardText"; */

// interface UploadItemProps {
//   /**
//    * File's image
//    * */
//   src: string;
//   /**
//    * File's name
//    * */
//   name: string;
//   /**
//    * File's info
//    * */
//   info?: { type: string; weight: string };
// }

// interface UploadCardProps extends CardProps {
//   /**
//    * UploadItemProps
//    * */
//   item: UploadItemProps;
//   /**
//    * idle, loading, success, warning, error
//    * */
//   status?: Status;
//   /**
//    * Delete callback
//    * */
//   onDelete?: () => void;
//   /**
//    * Edit callback
//    * */
//   onEdit?: () => void;
//   /**
//    * Retry callback
//    * */
//   onRetry?: () => void;
// }

export const UploadCard = (/* {
  item,
  status = "idle",
  isClickable = false,
  isSelectable = false,
  onDelete,
  onEdit,
  onRetry,
}: UploadCardProps */) => {
  /* const [imagePath] = usePaths();

  const { t } = useTranslation();

  const { src, name, info } = item;

  const isIdle = status === "idle";
  const isLoading = status === "loading";
  const isError = status === "error";
  const isSuccess = status === "success";

  const isTypeImage = info?.type.startsWith("image/"); */

  return <p>"test"</p>;

  /* return (
    <Card
      isClickable={isClickable}
      isSelectable={isSelectable}
      className="card-upload"
    >
      <CardBody>
        <div className="card-image">
          {isError ? (
            <Image
              alt=""
              src={`${imagePath}/common/image-status-error.svg`}
              objectFit="cover"
            />
          ) : (
            <Image
              alt=""
              src={src ?? ""}
              width="48"
              objectFit="cover"
              className="rounded"
              style={{ aspectRatio: 1 / 1 }}
            />
          )}
        </div>
        <div className="text-truncate">
          <CardText>{name}</CardText>
          <CardText className="caption">
            {isSuccess && (
              <em>
                {info?.type} {info?.weight && `- ${info.weight}`}
              </em>
            )}
            {isError && (
              <strong>
                <small className="text-danger caption">
                  {t("Upload error")}
                </small>
              </strong>
            )}
          </CardText>
        </div>
        {!isIdle && (
          <div className="ms-auto">
            <div className="d-flex align-items-center gap-12">
              {isLoading && (
                <Loading
                  isLoading
                  loadingPosition="left"
                  className="text-secondary"
                />
              )}
              {isSuccess && <SuccessOutline className="text-success" />}
              {isError && (
                <Button
                  leftIcon={<Retry />}
                  variant="ghost"
                  color="tertiary"
                  onClick={onRetry}
                >
                  {t("Retry")}
                </Button>
              )}
              {!isIdle && <div className="vr"></div>}
              {isTypeImage && (
                <IconButton
                  icon={<Wand />}
                  variant="ghost"
                  aria-label="edit"
                  disabled={isLoading || !isSuccess}
                  onClick={onEdit}
                  color="secondary"
                />
              )}
              <IconButton
                icon={<Close />}
                variant="ghost"
                aria-label="delete"
                color="tertiary"
                onClick={onDelete}
              />
            </div>
          </div>
        )}
      </CardBody>
    </Card>
  ); */
};

// UploadCard.displayName = "UploadCard";
