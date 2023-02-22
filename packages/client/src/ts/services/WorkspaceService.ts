import { FileTypeUtils } from "../utils/FileTypeUtils";
import { OdeContext } from "./types";

export class WorkspaceService {
  constructor(private context: OdeContext) {}
  get http() {
    return this.context.http();
  }
  async saveFile(
    file: Blob | File,
    params?: {
      parentId?: string;
      visibility?: "public" | "protected";
      application?: string;
    }
  ) {
    //prepare metadata
    const tmpName = (file as File).name || "";
    const nameSplit = tmpName.split(".");
    const contentType = file.type || "application/octet-stream";
    const extension =
      nameSplit.length > 1 ? nameSplit[nameSplit.length - 1] : "";
    const metadata = {
      "content-type": contentType,
      filename: tmpName,
      size: file.size,
      extension,
      role: FileTypeUtils.getFileType(contentType, false, extension),
    };
    const name = tmpName.replace("." + metadata.extension, "");
    const fullname = metadata.extension
      ? name + "." + metadata.extension
      : name;
    //prepare form data
    const formData = new FormData();
    formData.append("file", file, fullname);
    //add query params
    const args = [];
    if (params?.visibility === "public" || params?.visibility === "protected") {
      args.push(`${params.visibility}=true`);
    }
    if (params?.application) {
      args.push(`application=${params.application}`);
    }
    if (metadata.role === "img") {
      args.push(`quality=1`);
    }
    if (params?.parentId) {
      args.push(`parentId=${params.parentId}`);
    }
    //make query
    const res = await this.http.postFile<WorkspaceElement>(
      `/workspace/document?${args.join("&")}`,
      formData
    );
    return res;
  }
}

export interface WorkspaceElement {
  _id?: string;
  eType: string;
  eParent: string;
  name: string;
  title?: string;
  file?: string;
  deleted?: boolean;
  children: Element[];
  created: Date;
  trasher?: string;
  externalId?: string;
  //shared
  _shared: any[];
  inheritedShares?: any[];
  _isShared: boolean;
  //
  showComments?: boolean;
  editing?: boolean;
  //comments
  comments?: Comment[];
  comment?: string;
  //
  ownerName?: string;
  owner: { userId: string; displayName: string };
  //upload
  uploadStatus?: "loading" | "loaded" | "failed" | "abort";
  uploadXhr?: XMLHttpRequest;
  hiddenBlob?: Blob;
  metadata?: {
    "content-type"?: string;
    role?: string;
    extension?: string;
    filename?: string;
    size?: number;
    captation?: boolean;
    duration?: number;
    width?: number;
    height?: number;
  };
  link?: string;
  icon?: string;
  version?: number;
  currentQuality?: number;
  application?: string;
  legend?: string;
  alt?: string;
  //visibility
  protected?: boolean;
  public?: boolean;
}
