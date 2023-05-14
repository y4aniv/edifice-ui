import { ERROR_CODE } from "../globals";
import {
  IGetSession,
  IQuotaAndUsage,
  IUserDescription,
  IUserInfo,
  PersonApiResult,
  UserProfile,
} from "./interfaces";

import { IOdeServices } from "../services/OdeServices";

export class SessionService {
  constructor(private context: IOdeServices) {}

  get http() {
    return this.context.http();
  }
  get cache() {
    return this.context.cache();
  }

  /**
   * Callback to call when user logout
   */
  onLogout() {
    this.cache.clearCache();
  }

  /**
   * Callback to call when session change
   */
  onRefreshSession() {
    this.cache.clearCache();
  }

  async getSession(): Promise<IGetSession> {
    const user = await this.getUser();

    const [currentLanguage, quotaAndUsage, userDescription, userProfile] =
      await Promise.all([
        this.getCurrentLanguage(user),
        this.latestQuotaAndUsage(user),
        this.loadDescription(user),
        this.getUserProfile(),
      ]);

    return {
      user,
      quotaAndUsage,
      currentLanguage,
      userDescription,
      userProfile,
    };
  }

  public login(
    email: string,
    password: string,
    rememberMe?: boolean,
    secureLocation?: boolean,
  ): Promise<void> {
    const data = new FormData();
    data.append("email", email);
    data.append("password", password);
    if (typeof rememberMe !== "undefined") {
      data.append("rememberMe", "" + rememberMe);
    }
    if (typeof secureLocation !== "undefined") {
      data.append("secureLocation", "" + secureLocation);
    }

    return this.http
      .post<void>("/auth/login", data, {
        headers: { "content-type": "application/x-www-form-urlencoded" },
      })
      .finally(() => {
        switch (this.http.latestResponse.status) {
          case 200: // error, TODO look for error message in returned html...
            throw ERROR_CODE.MALFORMED_DATA;
          case 302: // success TODO redirects cannot be intercepted with axios in a browser !!!
          default:
            break;
        }
      });
  }

  logout(): Promise<void> {
    return this.http.get<void>("/auth/logout").finally(() => {
      // void, always successful
    });
  }

  async latestQuotaAndUsage(
    user: IUserInfo | undefined,
  ): Promise<IQuotaAndUsage> {
    try {
      const infos = await this.http.get<IQuotaAndUsage>(
        `/workspace/quota/user/${user?.userId}`,
      );
      return infos;
    } catch (error) {
      console.error(error);
      return { quota: 0, storage: 0 };
    }
  }

  async getCurrentLanguage(
    user: IUserInfo | undefined,
  ): Promise<string | undefined> {
    const isUserSignin = user?.sessionMetadata && user?.sessionMetadata.userId;

    try {
      let response;

      if (isUserSignin) {
        response = await this.loadUserLanguage();
      } else {
        response = await this.loadDefaultLanguage();
      }
      return response;
    } catch (error) {
      console.error(error);
    }
  }

  private async loadUserLanguage(): Promise<string> {
    try {
      // don't cache preference it could change
      const response = await this.http.get<{ preference: any }>(
        "/userbook/preference/language",
      );
      return JSON.parse(response.preference)["default-domain"];
    } catch (error) {
      const response = await this.loadDefaultLanguage();
      return response;
    }
  }

  private async loadDefaultLanguage(): Promise<string> {
    // locale does not change until onLogout
    const response = await this.cache.httpGetJson<{ locale: string }>(
      "/locale",
    );
    return response.locale;
  }

  public async getUser(): Promise<IUserInfo | undefined> {
    // session does not change until onLogout
    const { response, value } = await this.cache.httpGet<IUserInfo>(
      "/auth/oauth2/userinfo",
    );
    if (response.status < 200 || response.status >= 300) {
      // Backend tries to redirect the user => not logged in !
      throw ERROR_CODE.NOT_LOGGED_IN;
    } else {
      return value;
    }
  }

  hasWorkflow({
    workflowName,
    user,
  }: {
    workflowName: string;
    user: IUserInfo | undefined;
  }): boolean {
    return (
      workflowName === undefined ||
      user?.authorizedActions.findIndex((workflowRight) => {
        return workflowRight.name === workflowName;
      }) !== -1
    );
  }

  private async loadDescription(
    user: IUserInfo | undefined,
  ): Promise<IUserDescription> {
    try {
      const [person, userbook] = await Promise.all([
        // FIXME The full user's description should be obtainable from a single endpoint in the backend.
        this.http.get<PersonApiResult>("/userbook/api/person", {
          requestName: "refreshAvatar",
        }),
        this.http.get<IUserDescription>("/directory/userbook/" + user?.userId),
      ]);
      return { ...person.result[0], ...userbook };
    } catch (error) {
      console.error(error);
      return {} as unknown as IUserDescription;
    }
  }

  async getUserProfile(): Promise<UserProfile> {
    const person = await this.http.get<any>("/userbook/api/person");
    return person.result[0].type;
  }

  public async isAdml(): Promise<boolean> {
    // session does not change until onLogout
    const { response, value } = await this.cache.httpGet<IUserInfo>(
      "/auth/oauth2/userinfo",
    );
    if (response.status < 200 || response.status >= 300) {
      // Backend tries to redirect the user => not logged in !
      throw ERROR_CODE.NOT_LOGGED_IN;
    } else {
      return value.functions.ADMIN_LOCAL !== undefined;
    }
  }
}
