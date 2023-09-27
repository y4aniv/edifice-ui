import { Download } from "@edifice-ui/icons";

import { useDropzoneContext } from "./Dropzone";
import { Button } from "../Button";

const DropzoneImport = () => {
  const { inputRef, importMessage } = useDropzoneContext();

  return (
    <>
      <div className="import-wrapper">
        <Download height={48} width={48} />
        <p className="my-16">{importMessage}</p>
        <Button onClick={() => inputRef?.current?.click()}>
          Import button
        </Button>
      </div>
    </>
  );
};

DropzoneImport.displayName = "Dropzone.Import";

export default DropzoneImport;
