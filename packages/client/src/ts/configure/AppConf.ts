import { transport } from "../transport/Framework";
import { App } from "../globals";
import { configure } from "./Framework";
import { notify } from "../notify/Framework";

const http = transport?.http;

//-------------------------------------
export class AppConf {
  //-------------------------------------
  private _publicConf: { [key in App]?: any } = {};
  private _currentApp?: App;

  /**
   * Get the currently initialized App.
   * @see getter SessionFramework.currentApp
   */
  get currentApp(): App | null {
    return this._currentApp ?? null;
  }

  setCurrentApp(app: App): AppConf {
    this._currentApp = app;
    return this;
  }

  async initialize(app: App, alternativeApp: boolean = false): Promise<void> {
    if (!alternativeApp) {
      this.setCurrentApp(app);
    }
    await Promise.all([this.getPublicConf(app), this.loadI18n(app)]);
  }

  public async getPublicConf(app: App): Promise<any> {
    if (!this._publicConf[app]) {
      this._publicConf[app] = await http.get<any>(`/${app}/conf/public`, {
        queryParams: { _: configure.Platform.deploymentTag },
      });
    }
    return this._publicConf[app];
  }

  public loadI18n(app: App): Promise<void> {
    return notify.onLangReady().promise.then((lang) => {
      const i18n = configure.Platform.idiom;
      return i18n.addBundlePromise(`/${app}/i18n`);
    });
  }
}
