import clsx from "clsx";
import { WorkspaceElement } from "edifice-ts-client";

import FileIcon from "./FileIcon";
import { Card, CardProps, Image } from "../../components";
import { DocumentHelper, Role } from "../../core";

export interface FileCardProps extends CardProps {
  /**
   * WorkspaceElement
   * */
  doc: WorkspaceElement;
}

const FileCard = ({
  doc,
  isClickable = true,
  isSelectable = false,
  isSelected = false,
  onClick,
  className,
}: FileCardProps) => {
  const type = DocumentHelper.getRole(doc) as Role;

  return (
    <Card
      className={clsx("card-file c-pointer", className)}
      isClickable={isClickable}
      isSelectable={isSelectable}
      isSelected={isSelected}
      onClick={onClick}
    >
      <Card.Body space="8">
        {type === "img" ? (
          <Image src={`workspace/document/${doc._id}`} alt={doc?.name} />
        ) : (
          <FileIcon type={type} />
        )}
        <div className="mt-4">
          <Card.Text>{doc?.name}</Card.Text>
          <Card.Text className="text-black-50">{doc?.ownerName}</Card.Text>
        </div>
      </Card.Body>
    </Card>
  );
};

FileCard.displayName = "FileCard";

export default FileCard;
