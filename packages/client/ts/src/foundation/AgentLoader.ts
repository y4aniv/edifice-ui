import { appNameForResource, ResourceType } from "../interfaces";
import { IAbstractBusAgent } from "./Agent";

/**
 * Inner representation of an agent loader, from the bus' perspective.
 */
export interface IAgentLoader {
    load(res: ResourceType): Promise<IAbstractBusAgent>;
}

/**
 * Default implementation of the loader.
 */
export class AgentLoader implements IAgentLoader {
    load(res: ResourceType): Promise<IAbstractBusAgent> {
        let appName = appNameForResource[res];
        if( typeof appName!=="string" ) {
            throw new Error(`The resource type ${res} is not supported yet.`);
        }
        return import(`/${appName}/public/js/explorer.js`);
    }
}