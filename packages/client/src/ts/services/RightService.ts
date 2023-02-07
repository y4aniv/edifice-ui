import { OdeContext } from "./types";

export class RightService {
  constructor(private context: OdeContext) {}
  get session() {
    return this.context.session();
  }
  /**
   * Parse right concat as "$TYPE:$ID:$RIGHT"
   * $TYPE = user | group | creator
   * $ID: id of the resource
   * $RIGHT: read | contrib | manage
   *
   * @param right  a concat right
   * @returns Right parsed
   */
  parseResourceRight(right: string): Right | undefined {
    const parts = right.split(":");
    if (parts.length === 2) {
      if (parts[0] === "creator") {
        return {
          id: parts[1],
          right: "manage",
          type: "creator",
        } as Right;
      }
    } else if (parts.length === 3) {
      return {
        id: parts[1],
        right: parts[2],
        type: parts[0],
      } as Right;
    } else {
      return undefined;
    }
  }
  /**
   * Parse an array of rights concat as "$TYPE:$ID:$RIGHT"
   * $TYPE = user | group | creator
   * $ID: id of the resource
   * $RIGHT: read | contrib | manage
   *
   * @param rights  a list of concat rights
   * @returns Array of Right parsed
   */
  parseResourceRights(rights: string[]): Right[] {
    const parsed = rights
      .map((right) => {
        return this.parseResourceRight(right);
      })
      .filter((right) => {
        return right !== undefined;
      }) as Right[];
    return parsed;
  }

  /**
   * Check wether a user has the expected right for a ressource
   * @param user the userId and groupId concerned by the check
   * @param expect the expected right to check
   * @param rights array of Right for the resource
   * @returns true if has rights
   */
  hasResourceRight(
    { id, groupIds }: { id: string; groupIds: string[] },
    expect: RightAction,
    rights: Right[] | string[]
  ) {
    const safeRights = rights
      .map((right) => {
        if (typeof right === "string") {
          return this.parseResourceRight(right);
        }
        return right;
      })
      .filter((right) => {
        return right !== undefined;
      }) as Right[];
    for (const right of safeRights) {
      if (right.id === id && right.type === "creator") {
        return true;
      } else if (
        right.id === id &&
        right.type === "user" &&
        right.right === expect
      ) {
        return true;
      } else if (
        groupIds.includes(right.id) &&
        right.type === "group" &&
        right.right === expect
      ) {
        return true;
      }
    }
    return false;
  }
  /**
   * Check wether the current user have resource right
   * @param expect the expected right to check
   * @param rights array of Right for the resource
   * @returns true if has rights
   */
  async sessionHasResourceRight(
    expect: RightAction,
    rights: Right[] | string[]
  ) {
    try {
      const user = await this.session.getUser();
      return (
        user &&
        this.hasResourceRight(
          { groupIds: user.groupsIds, id: user.userId },
          expect,
          rights
        )
      );
    } catch (e) {
      console.error(e);
      return false;
    }
  }

  hasWorkflowRight(expect: string, right: string[]) {
    return (
      right.findIndex((workflowRight) => {
        return workflowRight === expect;
      }) !== -1
    );
  }

  async sessionHasWorkflowRight(expect: string) {
    try {
      const user = await this.session.getUser();
      return (
        user &&
        this.hasWorkflowRight(
          expect,
          user.authorizedActions.map((e) => e.name)
        )
      );
    } catch (e) {
      console.error(e);
      return false;
    }
  }
}

export type RightSubject = "user" | "group" | "creator";

export type RightAction = "read" | "contrib" | "manage";

export interface Right {
  type: RightSubject;
  id: string;
  right: RightAction;
}
