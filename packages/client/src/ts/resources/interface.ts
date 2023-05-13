import { IResource } from "..";

export interface UpdateParameters {
  entId: string;
  trashed: boolean;
  name: string;
  thumbnail: string | Blob | File;
  description: string;
  public: boolean;
  slug: string;
}

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
