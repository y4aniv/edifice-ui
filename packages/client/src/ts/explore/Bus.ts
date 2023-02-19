import {
  ActionType,
  ACTION,
  IActionResult,
  IBus,
  ResourceType,
  IBusAgent,
} from "./interfaces";
import { ExplorerFramework, explorer } from "./Framework";
import { filter, Observable, Subject } from "rxjs";
import { IActionParameters } from "..";

type AgentMessage = {
  res: ResourceType;
  action: ActionType;
  input: IActionParameters;
  output: IActionResult;
};
type AgentByAction = { [B in ActionType]: IBusAgent | null };

class Bus implements IBus {
  // Mapping of initialized agents.
  private agents: { [R in ResourceType]?: AgentByAction } = {};

  // The communication bus itself
  private comm: Subject<AgentMessage> = new Subject();

  setAgentFor(res: ResourceType, action: ActionType, agent: IBusAgent): void {
    let agentByAction = this.getActionMapping(res);
    agentByAction[action] = agent as IBusAgent;
  }

  getAgentFor(res: ResourceType, action: ActionType): IBusAgent | null {
    return this.getActionMapping(res)[action];
  }

  publish(
    res: ResourceType,
    action: ActionType,
    parameters: any,
  ): Promise<IActionResult> {
    return Promise.resolve()
      .then(() => {
        return (
          this.getAgentFor(res, action) ??
          (explorer as ExplorerFramework).requestAgentFor(res, action)
        );
      })
      .then((agent) => {
        const result = agent.activate(res, action, parameters);
        // Publish this result for any subscriber.
        this.comm.next({
          res: res,
          action: action,
          input: parameters,
          output: result,
        });
        return result;
      });
  }

  subscribe(
    res: ResourceType,
    action: ActionType,
  ): Observable<{ input: IActionParameters; output: IActionResult }> {
    return this.comm
      .asObservable()
      .pipe(filter((msg) => msg.res === res && msg.action === action));
  }

  private getActionMapping(res: ResourceType): AgentByAction {
    let agentByAction = this.agents[res];
    if (typeof agentByAction === "undefined") {
      // It's the first time an action is requested on this app, so init the map.
      agentByAction = {} as AgentByAction;
      for (let a of Object.values(ACTION)) {
        agentByAction[a] = null;
      }
      this.agents[res] = agentByAction;
    }
    return agentByAction;
  }
}

export class BusFactory {
  private static _instance: Bus;
  static get instance(): Bus {
    return (this._instance = this._instance || new Bus());
  }
}
