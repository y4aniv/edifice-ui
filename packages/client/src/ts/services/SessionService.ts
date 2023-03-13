import { ERROR_CODE } from "../globals";
import { IUserInfo, UserProfile } from "../session/interfaces";
import { IOdeServices } from "./OdeServices";

export interface IGetSession {
  user: IUserInfo | undefined;
  currentLanguage: string | undefined;
}

export class SessionService {
  /*  private _user: IUserInfo = null as unknown as IUserInfo;

  private _currentLanguage: string = "";
  private _notLoggedIn: boolean = true; */

  constructor(private context: IOdeServices) {}

  private get http() {
    return this.context.http();
  }

  get cache() {
    return this.context.cache();
  }

  async getSession(): Promise<IGetSession> {
    const user = await this.getUser();
    const currentLanguage = await this.getCurrentLanguage(user);

    return {
      user,
      currentLanguage,
    };
  }

  async getCurrentLanguage(user: IUserInfo | undefined) {
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

  async loadUserLanguage(): Promise<string> {
    try {
      const response = await this.http.get<any>(
        "/userbook/preference/language",
      );
      return JSON.parse(response.preference)["default-domain"];
    } catch (error) {
      const response = await this.loadDefaultLanguage();
      return response;
    }
  }

  private async loadDefaultLanguage(): Promise<string> {
    const response = await this.http.get<{ locale: string }>("/locale");
    return response.locale;
  }

  public async getUser(): Promise<IUserInfo | undefined> {
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

  public async getUserProfile(): Promise<UserProfile> {
    const person = await this.http.get<any>("/userbook/api/person");
    return person.result[0];
  }
}
