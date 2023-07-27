import { APP, IResource, RESOURCE, ResourceType } from "..";
import { BlogUpdate, UpdateResult } from "./interface";
import { ResourceService } from "./ResourceService";

export class MindmapResourceService extends ResourceService {
  async update(parameters: BlogUpdate): Promise<UpdateResult> {
    const fixThumb = await this.getThumbnailPath(parameters.thumbnail);
    const res = await this.http.put<IResource>(`/blog/${parameters.entId}`, {
      trashed: parameters.trashed,
      _id: parameters.entId,
      title: parameters.name,
      thumbnail: fixThumb,
      description: parameters.description,
      visibility: parameters.public ? "PUBLIC" : "OWNER",
      slug: parameters.public ? parameters.slug : "",
      "publish-type": parameters["publish-type"] || "RESTRAINT",
      "comment-type": "IMMEDIATE",
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
    return folderId
      ? `/mindmap?folderid=${folderId}#/edit/new`
      : `/mindmap#/edit/new`;
  }
  getViewUrl(resourceId: string): string {
    return `/mindmap/id/${resourceId}`;
  }
  getPrintUrl(resourceId: string, withComment?: boolean): string {
    return `/mindmap/print/blog#/print/${resourceId}?comments=${
      withComment || true
    }`;
  }
}
ResourceService.register(
  { application: RESOURCE.BLOG, resourceType: RESOURCE.BLOG },
  (context) => new MindmapResourceService(context),
);
