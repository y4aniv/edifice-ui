import { Observable, Subject } from "rxjs";
import { App, ERROR_CODE } from "../globals";
import { IContext, IExplorerContext, ISearchParameters, ResourceType, IBus, ACTION, GetResourcesResult, GetSubFoldersResult, CreateFolderResult, UpdateFolderResult, ExplorerFrameworkFactory, GetContextResult, RESOURCE, CreateFolderParameters, ID, ISearchResults, IResource, ManagePropertiesResult, ManagePropertiesParameters, UpdatePropertiesResult, UpdatePropertiesParameters, UpdateFolderParameters, CopyParameters, MoveParameters, DeleteParameters, PropKeyType, TrashParameters } from "./interfaces";

export class ExplorerContext implements IExplorerContext {
    private searchParameters: ISearchParameters;
    private context: IContext | null;
    private bus:IBus;
    private latestResults:Subject<{input:ISearchParameters, output:ISearchResults}> = new Subject();

    constructor( types:ResourceType[], app:App ) {
        this.context = null;
        this.bus = ExplorerFrameworkFactory.instance().getBus();
        
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
    getContext(): IContext|undefined {
        if( this.context!==null ) {
            return this.context;
        }
    }
    getSearchParameters(): ISearchParameters {
        return this.searchParameters;
    }
    private duplicateSearchParameters():ISearchParameters {
        return JSON.parse( JSON.stringify(this.searchParameters) );
    }
    
    latestResources():Observable<{input:ISearchParameters, output:ISearchResults}> {
        return this.latestResults.asObservable();
    }

    initialize(): Promise<IContext> {
        const parameters:ISearchParameters = this.duplicateSearchParameters();
        // Using Promise.resolve().then() allows the use of .catch(), .finally() and is considered a good practice.
        return Promise.resolve()
        .then( () => this.bus.publish(RESOURCE.FOLDER, ACTION.INITIALIZE, parameters) )
        .then( (ar) => {
            this.context = ar as GetContextResult;
            // TODO data sanity check
            if( !this.context ) {
                throw new Error( ERROR_CODE.UNKNOWN );
            }
            // Publish this results for listeners.
            this.latestResults.next( {input:parameters, output:this.context} );
            return this.context;
        });
    }
    getResources(): Promise<GetResourcesResult> {
        const parameters:ISearchParameters = this.duplicateSearchParameters();
        return this.bus.publish( RESOURCE.FOLDER, ACTION.SEARCH, parameters )
        .then( (ar) => {
            let result = ar as GetResourcesResult;
            // TODO data sanity check
            if( !result )
                throw new Error( ERROR_CODE.UNKNOWN );
            // Publish this results for listeners.
            this.latestResults.next( {input:parameters, output:result} );
            return result;
        });
    }
    getSubFolders(parentId: string): Promise<GetSubFoldersResult> {
        throw new Error("Method not implemented.");
    }
    createFolder(resourceType: ResourceType, parentId: string, name: string): Promise<CreateFolderResult> {
        const parameters:CreateFolderParameters = {
            app: this.searchParameters.app,
            name: name,
            parentId: parentId,
            type: resourceType
        };
        return this.bus.publish( RESOURCE.FOLDER, ACTION.CREATE, parameters )
        .then( (ar) => {
            let result = ar as CreateFolderResult;
            // TODO data sanity check
            if( !result )
                throw new Error( ERROR_CODE.UNKNOWN );
            return result;
        });
    }
    updateFolder( folderId:ID, resourceType:ResourceType, parentId:ID|"default", name: string): Promise<UpdateFolderResult> {
        const parameters:UpdateFolderParameters = {
            folderId: folderId,
            app: this.searchParameters.app,
            name: name,
            parentId: parentId,
            type: resourceType
        };
        return this.bus.publish( RESOURCE.FOLDER, ACTION.UPD_PROPS, parameters )
        .then( (ar) => {
            let result = ar as UpdateFolderResult;
            // TODO data sanity check
            if( !result )
                throw new Error( ERROR_CODE.UNKNOWN );
            return result;
        });
    }
    copy(targetId:string, resourceIds:ID[], folderIds:ID[]): Promise<void> {
        const parameters:CopyParameters = {
            folderId: targetId,
            resourceIds: resourceIds,
            folderIds: folderIds
        };
        return this.bus.publish( RESOURCE.FOLDER, ACTION.COPY, parameters )
        .then( (ar) => {
            // void
        });
    }
    move(targetId:string, resourceIds:ID[], folderIds:ID[]): Promise<void> {
        const parameters:MoveParameters = {
            folderId: targetId,
            resourceIds: resourceIds,
            folderIds: folderIds
        };
        return this.bus.publish( RESOURCE.FOLDER, ACTION.MOVE, parameters )
        .then( (ar) => {
            // void
        });
    }
    delete(resourceIds:string[], folderIds:string[]): Promise<void> {
        //TODO what if we have multi types apps?
        const parameters:DeleteParameters = {
            application: this.searchParameters.app,
            resourceType: this.searchParameters.types[0],
            resourceIds: resourceIds,
            folderIds: folderIds
        };
        return this.bus.publish( RESOURCE.FOLDER, ACTION.DELETE, parameters )
        .then( (ar) => {
            // void
        });
    }
    trash(trash:boolean, resourceIds:string[], folderIds:string[]): Promise<void> {
        //TODO what if we have multi types apps?
        const parameters:TrashParameters = {
            trash,
            application: this.searchParameters.app,
            resourceType: this.searchParameters.types[0],
            resourceIds,
            folderIds
        };
        return this.bus.publish( RESOURCE.FOLDER, ACTION.TRASH, parameters )
        .then( (ar) => {
            // void
        });
    }
    manageProperties(resourceType:ResourceType, resources:IResource[]): Promise<ManagePropertiesResult> {
        const params:ManagePropertiesParameters = { resources:resources };
        return this.bus.publish( resourceType, ACTION.MANAGE, params )
        .then( (ar) => {
            let result = ar as ManagePropertiesResult;
            // TODO data sanity check
            if( !result )
                throw new Error( ERROR_CODE.UNKNOWN );
            return result;
        });
    }
    updateProperties(resourceType:ResourceType, resources:IResource[], props:{[key in PropKeyType]?:string}): Promise<UpdatePropertiesResult> {
        const params:UpdatePropertiesParameters = { resources:resources, props:props };
        return this.bus.publish( resourceType, ACTION.UPD_PROPS, params )
        .then( (ar) => {
            let result = ar as UpdatePropertiesResult;
            // TODO data sanity check
            if( !result )
                throw new Error( ERROR_CODE.UNKNOWN );
            return result;
        });
    }
}