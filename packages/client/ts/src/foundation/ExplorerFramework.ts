import { ActionType, App, ExplorerFrameworkFactory, IBus, IExplorerContext, IExplorerFramework, ResourceType } from "../interfaces";
import { IAbstractBusAgent } from "./Agent";
import { AgentLoader, IAgentLoader } from "./AgentLoader";
import { BusFactory } from "./Bus";
import { ExplorerContext } from "./ExplorerContext";

export class ExplorerFramework implements IExplorerFramework {
    private agentLoader:AgentLoader = new AgentLoader();

    /* This is useful for mocking data. */
    setAgentLoader( loader:IAgentLoader ): void {
        if( loader ) {
            this.agentLoader = loader;
        }
    }

    requestAgentFor(res:ResourceType, action: ActionType): Promise<IAbstractBusAgent> {
        // TODO Check which apps Me can access.
        return this.agentLoader.load( res ).then( agent => agent.initialize(res,action) );
    }

    createContext(types: ResourceType[], app: App): IExplorerContext {
        return new ExplorerContext( types, app );
    }
    
    getBus(): IBus {
        return BusFactory.instance;
    }
}

/** The whole framework is a singleton. */
export let framework:IExplorerFramework = ExplorerFrameworkFactory.instance = new ExplorerFramework();
