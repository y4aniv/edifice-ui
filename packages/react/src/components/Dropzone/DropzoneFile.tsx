import { Plus } from "@edifice-ui/icons";

import { AttachementType, useDropzoneContext } from "./Dropzone";
import { Button } from "../Button";

export interface DropZoneFileProps {
  attachment: AttachementType;
}

const DropzoneFile = ({ attachment }: DropZoneFileProps) => {
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
      <div>
        <img
          src={attachment?.src}
          alt={attachment?.name}
          width={200}
          height={200}
        />
      </div>
    </div>
  );
};

DropzoneFile.displayName = "Dropzone.File";

export default DropzoneFile;
