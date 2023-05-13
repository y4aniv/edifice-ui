import { configure } from "./Framework";
import { IGetConf, IOdeTheme, IThemeConf } from "./interfaces";
import { App } from "../globals";
import { IWebApp } from "../session/interfaces";
import { IOdeServices } from "../services/OdeServices";

export class ConfService {
  constructor(private context: IOdeServices) {}

  private get http() {
    return this.context.http();
  }

  private get cdnDomain(): string {
    return configure.Platform.cdnDomain;
  }

  async getConf(app: App): Promise<IGetConf> {
    const [conf, applications] = await Promise.all([
      this.getThemeConf(),
      this.getApplicationsList(),
    ]);

    // const theme = await this.getTheme({ conf });
    const [theme, currentApp] = await Promise.all([
      this.getTheme({ conf }),
      this.getWebAppConf({ app, applications }),
    ]);

    await configure.Platform.idiom.addBundlePromise("/i18n");
    return {
      applications,
      conf,
      currentApp,
      theme,
    };
  }

  getCdnUrl(): string | undefined {
    //TODO to implement
    console.warn("[getCdnUrl] Not implemented yet");
    return undefined;
  }

  async savePreference<T>(key: string, value: T) {
    this.http.putJson(`/userbook/preference/${key}`, value);
  }

  async getPreference<T>(key: string): Promise<T> {
    const res = await this.http.get<{ preference: string }>(
      `/userbook/preference/${key}`,
    );
    return JSON.parse(res.preference) as T;
  }

  private async getThemeConf(version?: string): Promise<IThemeConf> {
    const res = await this.http.getScript<IThemeConf>(
      "/assets/theme-conf.js",
      { queryParams: { v: version } },
      "exports.conf",
    );
    return res;
  }

  private async getApplicationsList(): Promise<IWebApp[]> {
    const response = await this.http.get<{ apps: Array<IWebApp> }>(
      `/applications-list`,
    );
    return response.apps;
  }

  /* async geti18n() {
    await this.idiom.addBundlePromise("fr", "/i18n");
  } */

  /* async geti18nApp(param: App) {
    console.log("app i18n");

    await this.loadI18n(param);
  } */

  /* public async loadI18n(app: App): Promise<void> {
    console.log("inside i18n");
    return this.idiom.addBundlePromise("fr", `/${app}/i18n`);
  } */

  private async getWebAppConf({
    app,
    applications,
  }: {
    app: App;
    applications: IWebApp[];
  }): Promise<IWebApp | undefined> {
    const find = applications.find((item) => {
      if (item?.prefix) {
        return item?.prefix.replace("/", "") === app;
      }
    });
    return find;
  }

  private async getTheme({
    version,
    conf,
  }: {
    version?: string;
    conf: any;
  }): Promise<IOdeTheme> {
    const theme = await this.http.get<IOdeTheme>("/theme", {
      queryParams: { _: version },
    });
    const skin = theme.themeName;
    const skins = conf?.overriding.find(
      (item: { child: any }) => item.child === skin,
    ).skins;
    const bootstrap = "/assets/themes/ode-bootstrap";
    const bootstrapVersion = conf?.overriding.find(
      (item: { child: any }) => item.child === skin,
    ).bootstrapVersion;
    const bootstrapPath = `${this.cdnDomain}/assets/themes/${bootstrapVersion}`;
    const bootstrapUrl = `${bootstrapPath}/skins/${theme.skinName}`;
    const is1d =
      conf?.overriding.find((item: { child: any }) => item.child === skin)
        .parent === "panda";

    return {
      basePath: `${this.cdnDomain}${theme.skin}../../`,
      logoutCallback: theme.logoutCallback,
      skin: theme.skin.split("/assets/themes/")[1].split("/")[0],
      skinName: theme.skinName,
      skins,
      themeName: theme.themeName,
      themeUrl: theme.skin,
      bootstrap,
      bootstrapVersion,
      bootstrapPath,
      bootstrapUrl,
      is1d,
    };
  }
}
