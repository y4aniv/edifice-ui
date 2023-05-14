import { IResource } from "..";

/**
 * Parameters expected to update resource
 */
export interface UpdateParameters {
  entId: string;
  trashed: boolean;
  name: string;
  thumbnail: string | Blob | File;
  description: string;
  public: boolean;
  slug: string;
}

/**
 * Response when updating resource
 */
export interface UpdateResult {
  entId: string;
  thumbnail?: string;
}

export interface BlogUpdate extends UpdateParameters {
  "publish-type"?: "RESTRAINT" | "IMMEDIATE";
}

export interface BlogResource extends IResource {
  "publish-type": "RESTRAINT" | "IMMEDIATE";
}
