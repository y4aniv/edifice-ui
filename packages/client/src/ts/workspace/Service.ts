import { FileTypeUtils } from "../utils/FileTypeUtils";
import { OdeServices } from "../services/OdeServices";
import { ID, WorkspaceElement, WorkspaceSearchFilter } from "./interface";

export interface ElementQuery {
  id?: ID;
  parentId?: ID;
  hierarchical?: boolean;
  filter: WorkspaceSearchFilter;
  search?: string;
  includeall?: boolean;
  ancestorId?: string;
  application?: string;
  directShared?: boolean;
  limit?: number;
  skip?: number;
  onlyRoot?: boolean;
}

export interface Node {
  _id?: string;
  children: Node[];
  name?: string;
}

export class WorkspaceService {
  constructor(private context: OdeServices) {}
  private get http() {
    return this.context.http();
  }
  async saveFile(
    file: Blob | File,
    params?: {
      parentId?: string;
      visibility?: "public" | "protected";
      application?: string;
    },
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
      formData,
    );
    return res;
  }

  private async acceptDocuments(params: ElementQuery) {
    const userInfo = await this.context.session().getUser();
    return (current: WorkspaceElement) => {
      //filter by trasherid
      if (current.deleted && current.trasher) {
        return userInfo?.userId == current.trasher;
      }
      return true;
    };
  }

  private async fetchDocuments(
    params: ElementQuery,
  ): Promise<WorkspaceElement[]> {
    let filesO: WorkspaceElement[] =
      params.filter !== "external" || params.parentId
        ? await this.http.get<WorkspaceElement[]>("/workspace/documents", {
            queryParams: params,
          })
        : [];
    const filterFn = await this.acceptDocuments(params);
    return filesO.filter(filterFn);
  }

  async listDocuments(
    filter: WorkspaceSearchFilter,
    parentId?: ID,
  ): Promise<WorkspaceElement[]> {
    return this.fetchDocuments({ filter, parentId });
  }
}
