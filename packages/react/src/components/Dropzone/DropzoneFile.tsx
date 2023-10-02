import { Plus } from "@edifice-ui/icons";

import { AttachementType, useDropzoneContext } from "./Dropzone";
import { Button } from "../Button";

export interface DropZoneFileProps {
  attachments: AttachementType[];
}

const DropzoneFile = ({ attachments }: DropZoneFileProps) => {
  const { inputRef } = useDropzoneContext();

  return (
    <div className="drop-file-wrapper">
      <div className="drop-file-content">
        <div className="addButton m-4">
          <Button
            variant="ghost"
            leftIcon={<Plus></Plus>}
            onClick={() => inputRef?.current?.click()}
          >
            Add more files
          </Button>
        </div>
      </div>
      <div className="p-8">
        {attachments.map((attachment) => (
          <div key={attachment?.name}>
            <img
              src={attachment?.src}
              alt={attachment?.name}
              width={200}
              height={200}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

DropzoneFile.displayName = "Dropzone.File";

export default DropzoneFile;
