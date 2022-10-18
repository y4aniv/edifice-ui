import { IBusAgent } from "..";
import { App, ERROR_CODE } from "../globals";
import { AgentLoader, IAgentLoader } from "./AgentLoader";
import { BusFactory } from "./Bus";
import { ExplorerContext } from "./Context";
import { ActionType, IBus, IExplorerContext, IExplorerFramework, ResourceType } from "./interfaces";

export class ExplorerFramework implements IExplorerFramework {
    // private agentLoader:IAgentLoader = new AgentLoader();
    //private agentLoader:IAgentLoader = new AgentLoader();
    private _agentLoader?:IAgentLoader;

    public get agentLoader() {
        if (!this._agentLoader) {
            this._agentLoader = new AgentLoader();
        }

        return this._agentLoader;
    }

    /* This is useful for mocking data. */
    setAgentLoader( loader:IAgentLoader ): void {
        if( loader ) {
            this._agentLoader = loader;
        }
    }

    /** Load the agent dedicated to resolve this @param action on this @param resource */
    requestAgentFor(resource:ResourceType, action: ActionType): Promise<IBusAgent> {
        // TODO Check which apps Me can access.
        return this.agentLoader.load( resource ).then( () => {
            // The agent should be registered on the bus, by itself or by the (mocked) loader. It MUST be available right now.
            let agent = this.getBus().getAgentFor(resource, action) as IBusAgent;
            if( !agent ) {
                throw new Error(ERROR_CODE.AGENT_NOT_FOUND);
            }
            return agent;
        });
    }

    createContext(types: ResourceType[], app: App): IExplorerContext {
        return new ExplorerContext( types, app );
    }
    
    getBus(): IBus {
        return BusFactory.instance;
    }
}

/** The whole framework is a singleton. */
export const explorer:IExplorerFramework = new ExplorerFramework();
