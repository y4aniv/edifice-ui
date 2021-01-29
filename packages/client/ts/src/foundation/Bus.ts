import { Observable } from "rxjs";
import { ActionType, ACTION, IActionResult, IBus, ResourceType, IBusAgent } from "../interfaces";
import { IAbstractBusAgent } from "./Agent";
import { ExplorerFramework, framework } from "./ExplorerFramework";

type AgentByAction = {[B in ActionType]: IAbstractBusAgent|null};

class Bus implements IBus {
    // Mapping of initialized agents.
    private agents: {[R in ResourceType]?: AgentByAction} = {};

    consumer( res:ResourceType, action:ActionType, agent:IBusAgent ): void {
        let agentByAction = this.getActionMapping(res);
        agentByAction[action] = agent as IAbstractBusAgent;
    }

    send( res:ResourceType, action:ActionType, parameters:any ): Promise<IActionResult> {
        return Promise.resolve().then( () => {
            return this.getActionMapping(res)[action] || (framework as ExplorerFramework).requestAgentFor( res, action );
        }).then( agent => {
            const obs = agent.activate(res, action, parameters);
            //TODO FIXME https://indepth.dev/posts/1287/rxjs-heads-up-topromise-is-being-deprecated
            //return await lastValueFrom(obs);
            return obs.toPromise();
        });
    }

    private getActionMapping(res:ResourceType): AgentByAction {
        let agentByAction = this.agents[res];
        if( typeof agentByAction==="undefined" ) {
            // It's the first time an action is requested on this app, so init the map.
            agentByAction = {} as AgentByAction;
            for( let a of Object.values(ACTION) ) {
                agentByAction[a] = null;
            }
            this.agents[res] = agentByAction;
        }
        return agentByAction;
    }
}

export class BusFactory {
    private static _instance: IBus;
    static get instance(): IBus {
        return (this._instance = this._instance || new Bus());
    }
}
