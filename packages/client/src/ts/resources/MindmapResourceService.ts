import { APP, IResource, RESOURCE, ResourceType } from "..";
import { MindmapUpdate, UpdateResult } from "./interface";
import { ResourceService } from "./ResourceService";

export class MindmapResourceService extends ResourceService {
  async update(parameters: MindmapUpdate): Promise<UpdateResult> {
    const fixThumb = parameters.thumbnail
      ? await this.getThumbnailPath(parameters.thumbnail)
      : "";
    const res = await this.http.put<IResource>(`/mindmap/${parameters.entId}`, {
      trashed: parameters.trashed,
      _id: parameters.entId,
      name: parameters.name,
      thumbnail: fixThumb,
      description: parameters.description,
      visibility: parameters.public ? "PUBLIC" : "OWNER",
      /* slug: parameters.public ? parameters.slug : "",
      "publish-type": parameters["publish-type"] || "RESTRAINT",
      "comment-type": "IMMEDIATE", */
    });
    this.checkHttpResponse(res);
    return { thumbnail: fixThumb, entId: parameters.entId } as UpdateResult;
  }
  getResourceType(): ResourceType {
    return RESOURCE.MINDMAP;
  }
  getApplication(): string {
    return APP.MINDMAP;
  }
  getFormUrl(folderId?: string): string {
    return folderId ? `/mindmap?folderid=${folderId}/new` : `/mindmap/new`;
  }
  getViewUrl(resourceId: string): string {
    return `/mindmap/id/${resourceId}`;
  }
  getPrintUrl(resourceId: string, withComment?: boolean): string {
    return `/mindmap/print/mindmap#/print/${resourceId}?comments=${
      withComment || true
    }`;
  }
}
ResourceService.register(
  { application: RESOURCE.MINDMAP, resourceType: RESOURCE.MINDMAP },
  (context) => new MindmapResourceService(context),
);
