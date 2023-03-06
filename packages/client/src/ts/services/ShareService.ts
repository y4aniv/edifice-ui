export class ShareService {
  getRightsForResource(resourceId: string): Promise<ShareRight[]> {
    const mockRight: ShareRight = {
      id: "right_1",
      type: "user",
      username: "user 1",
      name: "user_1",
      actions: [
        {
          id: "1",
          displayName: "read",
        },
      ],
      hide: false,
    };
    return Promise.resolve([mockRight]);
  }

  saveRights(resourceId: string, rights: ShareRight[]) {}

  getActionsForApp(app: string): Promise<ShareRightAction[]> {
    const mockShareRightAction: ShareRightAction[] = [
      {
        id: "1",
        displayName: "read",
        priority: 1,
      },
    ];
    return Promise.resolve(mockShareRightAction);
  }
}

export interface ShareRight {
  id: string;
  type: ShareRightType;
  hide: boolean;
  username: string; // if type is user // TODO can we fix this and have displayName instead for both username and name
  name: string; // if type is group
  profile?: string; // if type is user
  actions: ShareRightAction[];
}

export type ShareRightType = "user" | "group" | "sharebookmark";

export interface ShareRightAction {
  id: string;
  displayName: ShareRightActionDisplayName;
  priority?: number;
}

export type ShareRightActionDisplayName =
  | "read"
  | "contrib"
  | "manage"
  | "creator";
