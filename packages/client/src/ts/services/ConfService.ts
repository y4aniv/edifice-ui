import { OdeContext } from "./types";

export class ConfService {
  constructor(private context: OdeContext) {}
  getCdnUrl(): string | undefined {
    console.error("[getCdnUrl] Not implemented yet");
    return undefined;
  }
  get http(){
    return this.context.transport().http();
  }
}
