export interface User {
  id: string;
  displayName: string;
}

export interface Group {
  id: string;
  displayName: string;
}

export interface Bookmark {
  id: string;
  displayName: string;
}

export class DirectoryService {
  constructor() {}

  findUsers(search: string) {}

  getUsers(): Promise<User[]> {
    const mockUser: User = {
      id: "user_1",
      displayName: "mock.user.1",
    };
    return Promise.resolve([mockUser]);
  }

  getGroups(): Promise<Group[]> {
    const mockGroup: Group = {
      id: "group_1",
      displayName: "mock.group.1",
    };
    return Promise.resolve([mockGroup]);
  }

  getBookMarks(): Promise<Bookmark[]> {
    const mockBookmark: Bookmark = {
      id: "bookmark_1",
      displayName: "mock.bookmark.1",
    };
    return Promise.resolve([mockBookmark]);
  }
}
