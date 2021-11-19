import { appNameForResource, ResourceType } from "./interfaces";
import { IHttp } from "../transport/interfaces";
import { Http } from "../transport/Http";

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
    private http:IHttp = new Http();

    load(res: ResourceType): Promise<void> {
        let appName = appNameForResource[res];
        if( typeof appName!=="string" ) {
            throw new Error(`The resource type ${res} is not supported yet.`);
        }
        return this.http.loadScript(`${appName}/public/js/explorer.agent.js`);
    }
}