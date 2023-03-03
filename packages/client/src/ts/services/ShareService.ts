import { ResourceRight, RightRole } from "./RightService";

export class ShareService {
  constructor() {}

  getRightsForResource(resourceId: string): Promise<ResourceRight[]> {
    const mockRight: ResourceRight = {
      type: "user",
      id: "right_1",
      right: "read",
    };
    return Promise.resolve([mockRight]);
  }

  saveRights(resourceId: string, rights: ResourceRight[]) {}

  getRoleForApp(app: string): Promise<RightRole[]> {
    const mockRightRole = "read";
    return Promise.resolve([mockRightRole]);
  }
}
