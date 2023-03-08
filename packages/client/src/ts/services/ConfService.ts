import { configure } from "../configure/Framework";
import { IThemeConfOverriding } from "../configure/interfaces";
import { IOdeServices } from "./OdeServices";

export interface ITheme {
  basePath: string;
  logoutCallback: string;
  skin: string;
  skinName: string;
  skins: Array<IThemeConfOverriding>;
  themeName: string;
  themeUrl: string;
  is1d: boolean;
  bootstrapVersion: string;
  bootstrapPath: string;
}

export class ConfService {
  constructor(private context: IOdeServices) {}

  private get http() {
    return this.context.http();
  }

  private get cdnDomain(): string {
    return configure.Platform.cdnDomain;
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

  private async getConf<IThemeConf>(version?: string): Promise<IThemeConf> {
    const res = await this.http.getScript<IThemeConf>(
      "/assets/theme-conf.js",
      { queryParams: { v: version } },
      "exports.conf",
    );
    return res;
  }

  async loadTheme(version: string): Promise<ITheme> {
    const theme = await this.http.get("/theme", {
      queryParams: { _: version },
    });
    const conf: any = await this.getConf();
    const skin = theme.themeName;
    const skins = conf?.overriding.find(
      (item: { child: any }) => item.child === skin,
    ).skins;
    const bootstrapVersion = conf?.overriding.find(
      (item: { child: any }) => item.child === skin,
    ).bootstrapVersion;
    const is1d =
      conf?.overriding.find((item: { child: any }) => item.child === skin)
        .parent === "panda";
    const bootstrapPath = `${this.cdnDomain}/assets/themes/${bootstrapVersion}`;

    return {
      basePath: `${this.cdnDomain}${theme.skin}../../`,
      logoutCallback: theme.logoutCallback,
      skin: theme.skin.split("/assets/themes/")[1].split("/")[0],
      skinName: theme.skinName,
      skins,
      themeName: theme.themeName,
      themeUrl: theme.skin,
      bootstrapVersion,
      bootstrapPath,
      is1d,
    };
  }
}
