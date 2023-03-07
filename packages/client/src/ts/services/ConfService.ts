import { OdeContext } from "./types";

export class ConfService {
  constructor(private context: OdeContext) {}
  getCdnUrl(): string | undefined {
    console.warn("[getCdnUrl] Not implemented yet");
    return undefined;
  }
  private get http() {
    return this.context.http();
  }
  async savePreference<T>(key: string, value: T) {
    this.http.putJson(`/userbook/preference/${key}`, value);
  }

  async getPreference<T>(key: string): Promise<T> {
    const res = await this.http.get<T>(`/userbook/preference/${key}`);
    return res;
  }
}
