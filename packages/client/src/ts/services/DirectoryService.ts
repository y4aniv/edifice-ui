import { OdeServices } from "./OdeServices";

export interface User {
  id: string;
  displayName: string;
  profile: string;
  lastName: string;
  firstName: string;
  login: string;
}

export interface Group {
  id: string;
  displayName: string;
}

export interface Bookmark {
  id: string;
  displayName: string;
}

export interface BookmarkWithMembers extends Bookmark {
  members: string[];
}

export interface BookmarkWithDetails extends Bookmark {
  users: User[];
  groups: Group[];
}

export class DirectoryService {
  constructor(private odeServices: OdeServices) {}
  private get http() {
    return this.odeServices.http();
  }
  private get cache() {
    return this.odeServices.cache();
  }

  getAvatarUrl(id: string, type: "user" | "group", size = "100x100") {
    return type === "user"
      ? `/userbook/avatar/${id}?thumbnail=${size}`
      : `/assets/img/illustrations/group-avatar.svg`;
  }
  getDirectoryUrl(id: string, type: "user" | "group") {
    return type === "user"
      ? `/userbook/annuaire#/${id}`
      : `/userbook/annuaire#/group-view/${id}`;
  }

  async getBookMarks(): Promise<Bookmark[]> {
    const all = await this.cache.httpGetJson<BookmarkGetResponse[]>(
      `/directory/sharebookmark/all`,
    );
    return all.map(({ id, name }) => {
      return {
        id,
        displayName: name,
        members: [], // this api does not return members
      };
    });
  }

  async getBookMarkById(idBookmark: string): Promise<BookmarkWithDetails> {
    const { groups, id, name, users } =
      await this.http.get<BookmarkGetResponse>(
        `/directory/sharebookmark/${idBookmark}`,
      );
    return {
      id,
      displayName: name,
      groups: groups.map(({ name, id }) => {
        return {
          displayName: name,
          id,
        };
      }),
      users: users.map(({ displayName, id, profile }) => {
        return {
          profile,
          displayName,
          // these info are missing from api
          firstName: "",
          lastName: "",
          login: "",
          id,
        };
      }),
    };
  }

  async saveBookmarks(
    name: string,
    {
      bookmarks,
      groups,
      users,
    }: {
      users: string[] | User[];
      groups: string[] | Group[];
      bookmarks: BookmarkWithMembers[] | string[];
    },
  ): Promise<BookmarkWithMembers> {
    this.cache.clearCache(`/directory/sharebookmark/all`);
    // get user ids
    const userIds = users.map((user) => {
      return typeof user === "string" ? user : user.id;
    });
    // get group ids
    const groupIds = groups.map((group) => {
      return typeof group === "string" ? group : group.id;
    });
    const bookmarkDetailPromises = bookmarks.map(async (bookmark) => {
      if (typeof bookmark === "string") {
        const { displayName, groups, id, users } = await this.getBookMarkById(
          bookmark,
        );
        const usersId = users.map((g) => g.id);
        const groupId = groups.map((g) => g.id);
        const tmp: BookmarkWithMembers = {
          displayName,
          id,
          members: [...groupId, ...usersId],
        };
        return tmp;
      } else {
        return Promise.resolve(bookmark);
      }
    });
    const bookmarDetails = await Promise.all(bookmarkDetailPromises);
    // get members ids in bookmarks
    const memberIds = bookmarDetails
      .map((bookmark) => {
        return bookmark.members;
      })
      .reduce((previous, current) => {
        return [...previous, ...current];
      }, []);
    // generate payload
    const data = {
      name,
      members: [...userIds, ...groupIds, ...memberIds],
    };

    const { id } = await this.http.postJson<BookmarkSaveResponse>(
      "/directory/sharebookmark",
      data,
    );
    return {
      id,
      displayName: name,
      members: data.members,
    };
  }
}

interface BookmarkSaveResponse {
  id: string;
}

interface BookmarkGetResponse {
  id: string;
  name: string;
  groups: Array<{
    id: string;
    name: string;
    activationCode: boolean;
    groupType: string;
    profile: string;
    sortName: string;
  }>;
  users: Array<{
    displayName: string;
    profile: string;
    id: string;
    activationCode: boolean;
  }>;
}
