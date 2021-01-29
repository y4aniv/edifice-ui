import { App, IContext, IExplorerContext, ISearchParameters, ResourceType, ERROR_CODE, IBus, APP, ACTION, GetResourcesResult, GetSubFoldersResult, CreateFolderResult, UpdateFolderResult, IGroupUserRight, ExplorerFrameworkFactory, GetContextResult, RESOURCE, CreateFolderParameters, ID } from "../interfaces";

export class ExplorerContext implements IExplorerContext {
    private searchParameters: ISearchParameters;
    private context: IContext | null;
    private bus:IBus;

    constructor( types:ResourceType[], app:App ) {
        this.context = null;
        this.bus = ExplorerFrameworkFactory.instance.getBus();
        
        this.searchParameters = {
            types: types,
            app: app,
            filters: {},
            pagination: {
                startIdx: 0,
                pageSize: 20
            }
        }
    }

    clear(): void {
        this.searchParameters.filters = {
            owner: true,
            shared: true,
            public: true
        };
        this.searchParameters.pagination.startIdx = 0;
        this.searchParameters.pagination.pageSize = 20;
        this.context = null;
    }
    isInitialized(): boolean {
        return this.context!==null;
    }
    getContext(): IContext {
        if( this.context!==null ) {
            return this.context;
        } else {
            throw new Error(ERROR_CODE.NOT_INITIALIZED);
        }
    }
    getSearchParameters(): ISearchParameters {
        return this.searchParameters;
    }
    initialize(): Promise<IContext> {
        // Using Promise.resolve().then() allows the use of .catch(), .finally() and is considered a good practice.
        return Promise.resolve()
        .then( () => this.bus.send(RESOURCE.FOLDER, ACTION.INITIALIZE, this.searchParameters) )
        .then( (ar) => {
            this.context = ar as GetContextResult;
            // TODO data sanity check
            if( !this.context )
                throw new Error( ERROR_CODE.UNKNOWN );
            return this.context;
        });
    }
    getResources(): Promise<GetResourcesResult> {
        return this.bus.send( RESOURCE.FOLDER, ACTION.SEARCH, this.searchParameters )
        .then( (ar) => {
            let result = ar as GetResourcesResult;
            // TODO data sanity check
            if( !result )
                throw new Error( ERROR_CODE.UNKNOWN );
            return result;
        });
    }
    getSubFolders(parentId: string): Promise<GetSubFoldersResult> {
        throw new Error("Method not implemented.");
    }
    createFolder(resourceType: ResourceType, parentId: string, name: string): Promise<CreateFolderResult> {
        const createParameters:CreateFolderParameters = {
            app: this.searchParameters.app,
            name: name,
            parentId: parentId,
            type: resourceType
        };
        return this.bus.send( RESOURCE.FOLDER, ACTION.CREATE, createParameters )
        .then( (ar) => {
            let result = ar as CreateFolderResult;
            // TODO data sanity check
            if( !result )
                throw new Error( ERROR_CODE.UNKNOWN );
            return result;
        });
    }
    updateFolder( folderId:ID, resourceType: ResourceType, parentId:ID|"default", name: string): Promise<UpdateFolderResult> {
        throw new Error("Method not implemented.");
    }
    share(resourceIds: string[], rights: IGroupUserRight[]): void {
        throw new Error("Method not implemented.");
    }
    copy(targetId: string, resourceIds: string[], folderIds: string[]): void {
        throw new Error("Method not implemented.");
    }
    move(targetId: string, resourceIds: string[], folderIds: string[]): void {
        throw new Error("Method not implemented.");
    }
    delete(resourceIds: string[], folderIds: string[]): void {
        throw new Error("Method not implemented.");
    }

}