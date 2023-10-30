import { Paperclip } from "@edifice-ui/icons";
import clsx from "clsx";

const FileIcon = ({
  roleMap,
}: {
  roleMap?: Record<string, string | JSX.Element>;
}) => {
  const fileicon = clsx(
    "position-absolute top-50 start-50 translate-middle",
    {
      "p-12 rounded-circle shadow": typeof roleMap?.icon !== "string",
    },
    roleMap?.color,
  );

  return <div className={fileicon}>{roleMap?.icon ?? <Paperclip />}</div>;
};
export default FileIcon;
