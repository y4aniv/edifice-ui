import { RESOURCE, ResourceType } from "../../../ts";
import { IAgentLoader } from "../../../ts/explore/AgentLoader";
import { MockedFolderAgent } from "./MockedFolderAgent";

/**
 * Default implementation of the loader.
 */
export class MockedAgentLoader implements IAgentLoader {
    load(res: ResourceType): Promise<void> {
        switch( res ) {
            case RESOURCE.FOLDER : 
                new MockedFolderAgent();
                return Promise.resolve();
            default:
                throw new Error(`A mocked "${res}" agent cannot be found.`);
        }

    }
    
}