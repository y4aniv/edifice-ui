import { Landscape, Mic, Paperclip, Video } from "@edifice-ui/icons";
import clsx from "clsx";

import { Role } from "../../core";

const FileIcon = ({ type }: { type?: Role | "unknown" }) => {
  function getRoleMap(type: Role | "unknown") {
    let fileRoleMap: Record<string, string | JSX.Element>;

    switch (type) {
      case "csv":
      case "xls":
        fileRoleMap = {
          icon: type === "csv" ? ".CSV" : ".XLS",
          color: "bg-orange-200",
        };
        break;
      case "doc":
      case "txt":
        fileRoleMap = {
          icon: type === "doc" ? ".DOC" : ".TXT",
          color: "bg-blue-200",
        };
        break;
      case "pdf":
      case "audio":
        fileRoleMap = {
          icon: type === "pdf" ? ".PDF" : <Mic />,
          color: "bg-red-200",
        };
        break;
      case "ppt":
      case "unknown":
        fileRoleMap = {
          icon: type === "ppt" ? ".PPT" : <Paperclip />,
          color: "bg-yellow-200",
        };
        break;
      case "img":
        fileRoleMap = {
          icon: <Landscape />,
          color: "bg-green-200",
        };
        break;
      case "video":
        fileRoleMap = {
          icon: <Video />,
          color: "bg-purple-200",
        };
        break;
      case "zip":
        fileRoleMap = {
          icon: ".ZIP",
          color: "bg-gray-300",
        };
        break;
      default:
        fileRoleMap = {
          icon: <Paperclip />,
          color: "bg-yellow-400",
        };
        break;
    }
    return fileRoleMap;
  }

  const file = clsx(
    "file position-relative rounded",
    getRoleMap(type ?? "unknown")?.color ?? "bg-yellow-200",
  );

  const fileicon = clsx(
    "position-absolute top-50 start-50 translate-middle",
    {
      "p-12 rounded-circle shadow":
        typeof getRoleMap(type ?? "unknown")?.icon !== "string",
    },
    getRoleMap(type ?? "unknown")?.color,
  );

  return (
    <div className={file} style={{ aspectRatio: "16/10" }}>
      <div className={fileicon}>
        {getRoleMap(type ?? "unknown")?.icon ?? <Paperclip />}
      </div>
    </div>
  );
};
export default FileIcon;
