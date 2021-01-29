import { Observable } from "rxjs";
import { ACTION, ActionType, ERROR_CODE, ExplorerFrameworkFactory, IActionParameters, IActionResult, IBusAgent, ResourceType } from "../interfaces";

/**
 * Inner representation of an agent, from the bus' perspective.
 */
export interface IAbstractBusAgent extends IBusAgent {
    /**
     * 
     * @param res 
     * @param action 
     */
    initialize(res: ResourceType, action: ActionType): Promise<IAbstractBusAgent>;
}

export type IHandler = (parameters:IActionParameters)=>Promise<IActionResult>;

/**
 * Manage a generic RESOURCE
 */
export abstract class AbstractBusAgent implements IAbstractBusAgent {
    constructor( managedResource:ResourceType ) {
        this.managedResource = managedResource;
    }
    /** Type of resource this agent can manage. */
    protected managedResource: ResourceType;
    protected initialized: boolean = false;
    protected static defaultHandler: IHandler = function( parameters:IActionParameters ):Promise<IActionResult> {
        throw new Error(ERROR_CODE.NOT_SUPPORTED);
    }
    protected handlerFor: {
        [action in ActionType]: IHandler
    } = {
            comment: AbstractBusAgent.defaultHandler,
            copy: AbstractBusAgent.defaultHandler,
            create: AbstractBusAgent.defaultHandler,
            delete: AbstractBusAgent.defaultHandler,
            export: AbstractBusAgent.defaultHandler,
            initialize: AbstractBusAgent.defaultHandler,
            manage: AbstractBusAgent.defaultHandler,
            move: AbstractBusAgent.defaultHandler,
            open: AbstractBusAgent.defaultHandler,
            print: AbstractBusAgent.defaultHandler,
            publish: AbstractBusAgent.defaultHandler,
            search: AbstractBusAgent.defaultHandler,
            share: AbstractBusAgent.defaultHandler
        };

    protected resetHandlers(): void {
        for( let action in Object.values(ACTION) ) {
            this.handlerFor[action as ActionType] = AbstractBusAgent.defaultHandler;
        }
    }
    protected setHandler( action:ActionType, handler:IHandler ): void {
        ExplorerFrameworkFactory.instance.getBus().consumer(this.managedResource, action, this);
        this.handlerFor[action] = handler;
    }
    protected getHandler( action:ActionType ): IHandler {
        return this.handlerFor[action];
    }
    protected canHandle( res:ResourceType, action:ActionType): boolean {
        return this.managedResource===res && AbstractBusAgent.defaultHandler!==this.getHandler(action);
    }

    /** Override to register handlers for actions this agent support. */
    protected abstract registerHandlers(): void;

    initialize(res: ResourceType, action: ActionType): Promise<IAbstractBusAgent> {
        this.resetHandlers();
        return Promise.resolve()
        .then( () => {
            this.registerHandlers();
            this.initialized = true;
            if (this.canHandle(res, action)) {
                return this;
            } else {
                throw new Error(`Agent for "${this.managedResource}" is unable to handle "${action}" actions.`);
            }
        });
    }

    activate(res: ResourceType, action: ActionType, parameters: IActionParameters): Observable<IActionResult> {
        if( !this.initialized ) {
            throw new Error(ERROR_CODE.NOT_INITIALIZED);
        }
        return new Observable<IActionResult>(observer => {
            const handler:IHandler = this.getHandler(action);
            handler.bind(this)(parameters).then( result => {
                observer.next(result);
                observer.complete();
            });
        });
    }

}
