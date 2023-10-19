import { Plus } from "@edifice-ui/icons";
import { useTranslation } from "react-i18next";

import { useDropzoneContext } from "./Dropzone";
import Files from "./Files";
import { Button } from "../Button";

const DropzoneFile = () => {
  const { t } = useTranslation();
  const { inputRef, uploadFiles, handleDelete } = useDropzoneContext();

  return (
    <div className="drop-file-wrapper">
      <div className="drop-file-content">
        <div className="add-button m-4">
          <Button
            variant="ghost"
            leftIcon={<Plus></Plus>}
            onClick={() => inputRef?.current?.click()}
          >
            {t("add")}
          </Button>
        </div>
      </div>
      <div className="p-8">
        {uploadFiles.map((uploadFile, index) => (
          <div key={index}>
            <Files
              uploadFile={uploadFile}
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
