import { APP, IResource, RESOURCE, ResourceType } from "..";
import { ScrapbookUpdate, UpdateResult } from "./interface";
import { ResourceService } from "./ResourceService";

export class ScrapbookResourceService extends ResourceService {
  async update(parameters: ScrapbookUpdate): Promise<UpdateResult> {
    const fixThumb = await this.getThumbnailPath(parameters.thumbnail);
    const res = await this.http.put<IResource>(`/scrapbook/${parameters.entId}`, {
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
    return RESOURCE.SCRAPBOOK;
  }
  getApplication(): string {
    return APP.SCRAPBOOK;
  }
  getFormUrl(folderId?: string): string {
    return folderId
      ? `/scrapbook?folderid=${folderId}#/edit-scrapbook/new`
      : `/scrapbook#/edit-scrapbook/new`;
  }
  getViewUrl(resourceId: string): string {
    return `/scrapbook#/view-scrapbook/${resourceId}`;
  }
  getPrintUrl(resourceId: string, withComment?: boolean): string {
    return `/scrapbook/print#//print-scrapbook/${resourceId}?comments=${
      withComment || true
    }`;
  }
}
ResourceService.register(
  { application: RESOURCE.SCRAPBOOK, resourceType: RESOURCE.SCRAPBOOK },
  (context) => new ScrapbookResourceService(context),
);
