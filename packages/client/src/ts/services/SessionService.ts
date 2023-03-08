import { ERROR_CODE } from "../globals";
import { IUserInfo } from "../session/interfaces";
import { OdeServices } from "./OdeServices";

export class SessionService {
  constructor(private context: OdeServices) {}

  get cache() {
    return this.context.cache();
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
}
