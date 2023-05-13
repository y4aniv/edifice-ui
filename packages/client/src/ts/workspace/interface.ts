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
