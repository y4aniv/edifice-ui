import clsx from "clsx";
import { IResource } from "edifice-ts-client";

import { Card, CardProps, Image } from "../../components";
import { usePaths } from "../../core";

export interface LinkerCardProps extends CardProps {
  /**
   * Resource to render as a card
   * */
  doc: IResource;
}

const LinkerCard = ({
  doc,
  isClickable = true,
  isSelectable = false,
  isSelected = false,
  onClick,
  className,
}: LinkerCardProps) => {
  const [imagePath] = usePaths();
  return (
    <Card
      className={clsx("card-linker", className)}
      isClickable={isClickable}
      isSelectable={isSelectable}
      isSelected={isSelected}
      onClick={onClick}
    >
      <Card.Body space="8">
        <div className="me-4">
          <Image
            alt=""
            src={doc.thumbnail ?? `${imagePath}/common/image-placeholder.png`}
            width="48"
            objectFit="cover"
            className="rounded mx-8"
            style={{ aspectRatio: 1 / 1 }}
          />
        </div>

        <div className="w-100">
          <Card.Text>{doc.name}</Card.Text>
          <Card.Text className="text-black-50">{doc?.creatorName}</Card.Text>
        </div>

        <div className="d-none d-md-block">
          <Card.Text>{doc.modifiedAt}</Card.Text>
        </div>

        <div className="">
          <Card.Text className="text-black-50">{doc?.creatorName}</Card.Text>
        </div>
      </Card.Body>
    </Card>
  );
};

LinkerCard.displayName = "LinkerCard";

export default LinkerCard;
