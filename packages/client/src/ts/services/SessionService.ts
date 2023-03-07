import { ERROR_CODE } from "../globals";
import { IUserInfo } from "../session/interfaces";
import { OdeServices } from "./OdeServices";

export class SessionService {
  private _me: IUserInfo | undefined;
  constructor(private context: OdeServices) {}

  get http() {
    return this.context.http();
  }

  public async getUser(): Promise<IUserInfo | undefined> {
    if (this._me) {
      return this._me;
    }
    const res = await this.http.get<IUserInfo>("/auth/oauth2/userinfo");
    if (
      this.http.latestResponse.status < 200 ||
      this.http.latestResponse.status >= 300
    ) {
      // Backend tries to redirect the user => not logged in !
      throw ERROR_CODE.NOT_LOGGED_IN;
    } else {
      this._me = res;
      return this._me;
    }
  }
}
