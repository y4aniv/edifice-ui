import { ERROR_CODE } from "../globals";
import { BusFactory } from "./Bus";
import { ACTION, ActionType, IActionParameters, IActionResult, IBusAgent, ResourceType } from "./interfaces";

export type IHandler = (parameters:IActionParameters)=>Promise<IActionResult>;

/**
 * Manage a generic RESOURCE
 */
export abstract class AbstractBusAgent implements IBusAgent {
    constructor( managedResource:ResourceType ) {
        this.managedResource = managedResource;
        this.initialize();
    }
    /** Type of resource this agent can manage. */
    protected managedResource: ResourceType;
    protected static defaultHandler: IHandler = function( parameters:IActionParameters ):Promise<IActionResult> {
        throw new Error(ERROR_CODE.NOT_SUPPORTED);
    }
    protected handlerFor:{ [action in ActionType]:IHandler } = {
        comment:    AbstractBusAgent.defaultHandler,
        copy:       AbstractBusAgent.defaultHandler,
        create:     AbstractBusAgent.defaultHandler,
        delete:     AbstractBusAgent.defaultHandler,
        export:     AbstractBusAgent.defaultHandler,
        initialize: AbstractBusAgent.defaultHandler,
        manage:     AbstractBusAgent.defaultHandler,
        properties: AbstractBusAgent.defaultHandler,
        move:       AbstractBusAgent.defaultHandler,
        open:       AbstractBusAgent.defaultHandler,
        print:      AbstractBusAgent.defaultHandler,
        publish:    AbstractBusAgent.defaultHandler,
        search:     AbstractBusAgent.defaultHandler,
        share:      AbstractBusAgent.defaultHandler,
        distribute: AbstractBusAgent.defaultHandler,
        pages_list: AbstractBusAgent.defaultHandler,
        register:   AbstractBusAgent.defaultHandler,
        trash:      AbstractBusAgent.defaultHandler,
        publish_moodle: AbstractBusAgent.defaultHandler,
    };

    protected initialize(): void {
        for( let action in Object.values(ACTION) ) {
            this.handlerFor[action as ActionType] = AbstractBusAgent.defaultHandler;
        }
        this.registerHandlers();
    }

    protected setHandler( action:ActionType, handler:IHandler ): void {
        BusFactory.instance.setAgentFor(this.managedResource, action, this);
        this.handlerFor[action] = handler;
    }

    protected getHandler( action:ActionType ): IHandler {
        return this.handlerFor[action];
    }

    /** Override to register handlers for actions this agent support. */
    protected abstract registerHandlers(): void;

    activate(res: ResourceType, action: ActionType, parameters: IActionParameters): Promise<IActionResult> {
        return Promise.resolve()
        .then( () => this.getHandler(action).bind(this)(parameters) );
    }
}
