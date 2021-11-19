import { ACTION, GetContextParameters, GetContextResult, GetResourcesParameters, GetResourcesResult, IContext, ID, CreateFolderParameters, CreateFolderResult, RESOURCE } from "../../../ts/explore/interfaces";
import { AbstractBusAgent, IHandler } from "../../../ts/explore/Agent";
import * as ContextData from '../data/MockedContextData.json';

/**
 * Manage RESOURCE.FOLDER
 */
export class MockedFolderAgent extends AbstractBusAgent {
    constructor() {
        super( RESOURCE.FOLDER );
        this.registerHandlers();
    }

    protected ctx:IContext|null = null;

    protected folders:any = { "default": {} };

    protected registerHandlers(): void {
        this.setHandler( ACTION.INITIALIZE,     this.onInitialize as unknown as IHandler );
        this.setHandler( ACTION.CREATE,         this.onCreate as unknown as IHandler );
        this.setHandler( ACTION.SEARCH,         this.onSearch as unknown as IHandler );
    }

    onInitialize( parameters:GetContextParameters ): Promise<GetContextResult> {
        return Promise.resolve().then( () => {
            return ContextData as GetContextResult
        }).then( ctx => {
            return this.ctx = ctx;
        });
    }

    onCreate( parameters:CreateFolderParameters ): Promise<CreateFolderResult> {
        let newFolderId:ID = "folder_" + Object.keys(this.folders).length;
        this.folders[newFolderId] = {id:newFolderId, name:parameters.name, type:"default", childNumber:0, createAt: new Date().toUTCString() };
        return Promise.resolve().then( () => this.folders[newFolderId] );
    }

    onSearch( parameters:GetResourcesParameters ): Promise<GetResourcesResult> {
        throw new Error("Method not implemented.");
    }
}
