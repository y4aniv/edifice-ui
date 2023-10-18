import { Plus } from "@edifice-ui/icons";

import { useDropzoneContext } from "./Dropzone";
import Files from "./Files";
import { Button } from "../Button";

const DropzoneFile = () => {
  const { inputRef, uploadFile, handleDelete } = useDropzoneContext();

  return (
    <div className="drop-file-wrapper">
      <div className="drop-file-content">
        <div className="add-button m-4">
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
        {uploadFile.map((attachment, index) => (
          <div key={index}>
            <Files
              attachment={attachment}
              index={index}
              handleDelete={handleDelete}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

DropzoneFile.displayName = "Dropzone.File";

export default DropzoneFile;
