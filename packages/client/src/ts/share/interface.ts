import { Group, Bookmark, User } from "../directory/interface";

export interface ShareRight {
  id: string;
  type: ShareRightType;
  displayName: string;
  profile?: string; // if type is user
  avatarUrl: string;
  directoryUrl: string;
  actions: ShareRightAction[];
  isBookmarkMember?: boolean;
  users?: User[]; // bookmark users
  groups?: Group[]; // bookmark groups
}

export type ShareRightType = "user" | "group" | "sharebookmark";

export interface ShareRightAction {
  id: ShareRightActionDisplayName;
  displayName: ShareRightActionDisplayName;
  priority?: number;
  requires?: ShareRightActionDisplayName[];
}

export type ShareRightActionDisplayName =
  | "read"
  | "contrib"
  | "manage"
  | "publish"
  | "manager"
  | "comment";

export type ShareRightActionDisplayNameExt =
  | ShareRightActionDisplayName
  | "creator";

export type SharingRight = Record<
  ShareRightActionDisplayName,
  {
    priority: number;
    default: boolean;
    requires: ShareRightActionDisplayName[];
  }
>;
export type ShareMapping = Record<ShareRightActionDisplayName, string[]>;

export interface GetResourceRightPayload {
  actions: Array<{
    name: string[];
    displayName: string; //'app.right'
    type: "RESOURCE";
  }>;
  groups: {
    visibles: Array<{
      id: string;
      name: string;
      groupDisplayName: string;
      structureName: string;
    }>;
    checked: Record<string, string[]>;
  };
  users: {
    visibles: Array<{
      id: string;
      login: string;
      username: string;
      lastName: string;
      firstName: string;
      profile: string;
    }>;
    checked: Record<string, string[]>;
  };
}

export interface PutSharePayload {
  users: Record<string, string[]>;
  groups: Record<string, string[]>;
  bookmarks: Record<string, string[]>;
}

export interface PutShareResponse {
  "notify-timeline-array": Array<{ groupId: string } | { userId: string }>;
}

export interface ShareSubject {
  id: string;
  displayName: string;
  profile?: string;
  avatarUrl: string;
  directoryUrl: string;
  type: "user" | "group" | "sharebookmark";
}

export interface ShareRightWithVisibles {
  rights: ShareRight[];
  visibleUsers: User[];
  visibleGroups: Group[];
  visibleBookmarks: Bookmark[];
}
