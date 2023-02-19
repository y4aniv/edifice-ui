import { appNameForResource, ResourceType } from "./interfaces";
import { APP } from "../globals";

/* FIXME do not import these, fetch when needed !*/
import { blogAgentFactory, folderAgentFactory } from "../agents";
// import { IHttp } from "../transport/interfaces";
// import { Http } from "../transport/Http";

/**
 * Inner representation of an agent loader, from the bus' perspective.
 */
export interface IAgentLoader {
  load(res: ResourceType): Promise<void>;
}

/**
 * Default implementation of the loader.
 */
export class AgentLoader implements IAgentLoader {
  load(res: ResourceType): Promise<void> {
    let appName = appNameForResource[res];
    if (typeof appName !== "string") {
      throw new Error(`The resource type ${res} is not supported yet.`);
    }
    switch (appName) {
      case APP.EXPLORER:
        folderAgentFactory();
        break;
      case APP.BLOG:
        blogAgentFactory();
        break;
      default:
        throw new Error(`The resource type ${res} is not supported yet.`);
    }
    return Promise.resolve();
  }

  /* FIXME use a fetch-like method
    private http:IHttp = new Http();

    load(res: ResourceType): Promise<void> {
        let appName = appNameForResource[res];
        if( typeof appName!=="string" ) {
            throw new Error(`The resource type ${res} is not supported yet.`);
        }
        return this.http.loadScript(`${appName}/public/js/explorer.agent.js`);
    }
    */
}
