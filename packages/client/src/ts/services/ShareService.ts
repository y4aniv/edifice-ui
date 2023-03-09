import { StringUtils } from "../utils/StringUtils";
import { Bookmark, Group, User } from "./DirectoryService";
import { OdeServices } from "./OdeServices";

export class ShareService {
  //
  // IMPLEMENTATION
  //
  constructor(protected context: OdeServices) {}

  get directory() {
    return this.context.directory();
  }
  get http() {
    return this.context.http();
  }
  get cache() {
    return this.context.cache();
  }

  findUsers(
    searchText: string,
    {
      visibleBookmarks,
      visibleGroups,
      visibleUsers,
    }: {
      visibleUsers: User[];
      visibleGroups: User[];
      visibleBookmarks: Bookmark[];
    },
  ): Array<ShareSubject> {
    const cleanSearchText = searchText.toLowerCase();
    const bookmarks = visibleBookmarks
      .filter(({ displayName }) => {
        const cleanName = StringUtils.removeAccents(
          displayName || "",
        ).toLowerCase();
        return cleanName.includes(cleanSearchText);
      })
      .map(({ id, displayName }) => {
        const share: ShareSubject = {
          avatarUrl: "",
          directoryUrl: "",
          profile: "",
          displayName,
          id,
          type: "bookmark",
        };
        return share;
      });
    const groups = visibleGroups
      .filter(({ displayName }) => {
        const cleanName = StringUtils.removeAccents(
          displayName || "",
        ).toLowerCase();
        return cleanName.includes(cleanSearchText);
      })
      .map(({ id, displayName, profile }) => {
        const share: ShareSubject = {
          avatarUrl: this.directory.getAvatarUrl(id, "group"),
          directoryUrl: this.directory.getDirectoryUrl(id, "group"),
          displayName,
          id,
          profile,
          type: "group",
        };
        return share;
      });
    const users = visibleUsers
      .filter(({ profile, displayName, firstName, lastName, login }) => {
        const cleanLName = StringUtils.removeAccents(
          lastName || "",
        ).toLowerCase();
        const cleanFName = StringUtils.removeAccents(
          firstName || "",
        ).toLowerCase();
        const cleanDName = StringUtils.removeAccents(
          displayName || "",
        ).toLowerCase();
        const cleanLogin = StringUtils.removeAccents(login || "").toLowerCase();
        const cleanName = StringUtils.removeAccents(
          displayName || "",
        ).toLowerCase();
        return (
          cleanDName.includes(cleanName) ||
          cleanFName.includes(cleanName) ||
          cleanLName.includes(cleanName) ||
          cleanLogin.includes(cleanName) ||
          (profile || "").includes(cleanName)
        );
      })
      .map(({ id, displayName, profile }) => {
        const share: ShareSubject = {
          avatarUrl: this.directory.getAvatarUrl(id, "user"),
          directoryUrl: this.directory.getDirectoryUrl(id, "user"),
          displayName,
          id,
          profile,
          type: "user",
        };
        return share;
      });
    return [...bookmarks, ...users, ...groups];
  }

  async getShareMapping(app: string) {
    const sharingMap = await this.cache.httpGetJson<ShareMapping>(
      `/${app}/rights/sharing`,
    );
    //fix keys app.role => role
    for (const key of Object.keys(sharingMap)) {
      if (key.includes(".")) {
        const newKey = key.split(".")[1];
        const value = (sharingMap as any)[key];
        delete (sharingMap as any)[key];
        (sharingMap as any)[newKey] = value;
      }
    }
    return sharingMap;
  }

  getActionsAvailableFor(
    { id, type }: { id: string; type: "user" | "group" },
    payload: GetResourceRightPayload,
    mapping: ShareMapping,
  ): ShareRightActionDisplayName[] {
    // get rights affected to this user or group
    const usafeRights =
      type === "user" ? payload.users.checked[id] : payload.groups.checked[id];
    const rights = usafeRights || [];
    // get normalized actions names
    const actions = Object.keys(mapping) as ShareRightActionDisplayName[];
    const actionAvailable: ShareRightActionDisplayName[] = [];
    // for each normalized action, check whether current user or group has right for it
    for (const action of actions) {
      const rightsForAction = mapping[action];
      const intersection = rightsForAction.filter((right) =>
        rights.includes(right),
      );
      if (intersection.length > 0) {
        actionAvailable.push(action);
      }
    }
    return actionAvailable;
  }

  async getRightsForResource(
    app: string,
    resourceId: string,
  ): Promise<ShareRightWithVisibles> {
    // fetch bookmarks
    const visibleBookmarks = await this.directory.getBookMarks();
    // get rights for this ressources
    const url = this.context.resource(app, app).getShareReadUrl(resourceId);
    const rightsPayload = await this.cache.httpGetJson<GetResourceRightPayload>(
      url,
    );
    // get mapping between rights and normalized rights
    const sharingMap = await this.getShareMapping(app);
    // get normalized rights infos
    const sharingRights = await this.cache.httpGetJson<SharingRight>(
      "/infra/public/json/sharing-rights.json",
    );
    // generate rows for users
    const userRights = Object.keys(rightsPayload.users.checked)
      .map((userId) => {
        // find user info
        const user = rightsPayload.users.visibles.find(
          (user) => user.id === userId,
        );
        return user;
      })
      .filter((user) => {
        // remove if user not found
        return user !== undefined;
      })
      .map((user) => {
        // get normalized actions for user
        const actions = this.getActionsAvailableFor(
          { id: user!.id, type: "user" },
          rightsPayload,
          sharingMap,
        );
        // generate ShareRight row
        const right: ShareRight = {
          id: user!.id,
          type: "user",
          displayName: user!.username,
          profile: user!.profile,
          avatarUrl: this.directory.getAvatarUrl(user!.id, "user"),
          directoryUrl: this.directory.getDirectoryUrl(user!.id, "user"),
          actions: actions.map((action) => {
            const act = sharingRights[action];
            return {
              displayName: action,
              id: action,
              priority: act.priority,
            };
          }),
        };
        return right;
      })
      .sort((a, b) => {
        // sort by user name ASC
        return (a.displayName || "").localeCompare(b.displayName);
      });
    // generate rows for groups
    const groupRights = Object.keys(rightsPayload.groups.checked)
      .map((groupId) => {
        // find group info
        const group = rightsPayload.groups.visibles.find(
          (group) => group.id === groupId,
        );
        return group;
      })
      .filter((group) => {
        // remove if group not found
        return group !== undefined;
      })
      .map((group) => {
        // get normalized actions for group
        const actions = this.getActionsAvailableFor(
          { id: group!.id, type: "group" },
          rightsPayload,
          sharingMap,
        );
        const right: ShareRight = {
          id: group!.id,
          type: "group",
          displayName: group!.name,
          profile: undefined,
          avatarUrl: this.directory.getAvatarUrl(group!.id, "group"),
          directoryUrl: this.directory.getDirectoryUrl(group!.id, "group"),
          actions: actions.map((action) => {
            const act = sharingRights[action];
            return {
              displayName: action,
              id: action,
              priority: act.priority,
            };
          }),
        };
        return right;
      })
      .sort((a, b) => {
        // sort by group name ASC
        return (a.displayName || "").localeCompare(b.displayName);
      });
    const rights = [...userRights, ...groupRights];
    // prepare list of visible groups
    const visibleGroups = rightsPayload.groups.visibles.map(
      ({ groupDisplayName, id, name }) => {
        const group: Group = {
          displayName: groupDisplayName || name,
          id,
        };
        return group;
      },
    );
    // prepare list of visible user
    const visibleUsers = rightsPayload.users.visibles.map(
      ({ id, profile, username, firstName, lastName, login }) => {
        const user: User = {
          displayName: username,
          firstName,
          lastName,
          login,
          profile,
          id,
        };
        return user;
      },
    );
    return {
      rights,
      visibleBookmarks,
      visibleGroups,
      visibleUsers,
    };
  }

  async saveRights(
    app: string,
    resourceId: string,
    rights: ShareRight[],
  ): Promise<PutShareResponse> {
    // get mapping between action and java names
    const mapping = await this.getShareMapping(app);
    const payload: PutSharePayload = {
      bookmarks: {},
      groups: {},
      users: {},
    };
    for (const right of rights) {
      // get java rights for each available actions
      const rightWithDuplicates = right.actions
        .map((action) => {
          return mapping[action.id];
        })
        .reduce((previous, current) => {
          return [...previous, ...current];
        }, []);
      const rights = [...new Set(rightWithDuplicates)];
      // for each user/group/bookmark add a record
      if (rights.length > 0) {
        if (right.type === "user") {
          payload.users[right.id] = rights;
        } else if (right.type === "group") {
          payload.groups[right.id] = rights;
        } else {
          payload.bookmarks[right.id] = rights;
        }
      }
    }
    const resourceService = this.context.resource(app, app);
    const url = resourceService.getSaveShareUrl(resourceId);
    //clear cache for rights
    this.cache.clearCache(resourceService.getShareReadUrl(resourceId));
    const res = await this.http.putJson<PutShareResponse>(url, payload);
    return res;
  }

  async getActionsForApp(app: string): Promise<ShareRightAction[]> {
    // get normalized rights infos
    const sharingRights = await this.cache.httpGetJson<SharingRight>(
      "/infra/public/json/sharing-rights.json",
    );
    // get mapping for rights
    const sharingMap = await this.getShareMapping(app);
    const rightActions: ShareRightAction[] = Object.keys(sharingRights)
      .map((key) => {
        const value = sharingRights[key as ShareRightActionDisplayName];
        return {
          displayName: key as ShareRightActionDisplayName,
          id: key as ShareRightActionDisplayName,
          priority: value.priority,
        };
      })
      .filter((right) => {
        // if app does not manage this role => remove it
        if (sharingMap[right.id as ShareRightActionDisplayName]?.length > 0) {
          return true;
        }
        return false;
      })
      .sort((a, b) => {
        // sort by priority ASC
        return a.priority - b.priority;
      });
    return rightActions;
  }
}

export interface ShareRight {
  id: string;
  type: ShareRightType;
  displayName: string;
  profile?: string; // if type is user
  avatarUrl: string;
  directoryUrl: string;
  actions: ShareRightAction[];
}

export type ShareRightType = "user" | "group" | "sharebookmark";

export interface ShareRightAction {
  id: ShareRightActionDisplayName;
  displayName: ShareRightActionDisplayName;
  priority?: number;
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

type SharingRight = Record<
  ShareRightActionDisplayName,
  {
    priority: number;
    default: boolean;
    requires: ShareRightActionDisplayName[];
  }
>;
type ShareMapping = Record<ShareRightActionDisplayName, string[]>;

interface GetResourceRightPayload {
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

interface PutSharePayload {
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
  profile: string;
  avatarUrl: string;
  directoryUrl: string;
  type: "user" | "group" | "bookmark";
}

export interface ShareRightWithVisibles {
  rights: ShareRight[];
  visibleUsers: User[];
  visibleGroups: Group[];
  visibleBookmarks: Bookmark[];
}
