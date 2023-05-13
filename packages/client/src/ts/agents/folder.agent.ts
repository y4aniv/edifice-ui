import { AgentFactory } from ".";
import {
  ACTION,
  CreateFolderParameters,
  CreateFolderResult,
  DeleteParameters,
  GetContextParameters,
  GetContextResult,
  GetSubFoldersResult,
  IActionResult,
  IContext,
  ID,
  IHttp,
  ISearchResults,
  ManagePropertiesParameters,
  ManagePropertiesResult,
  MoveParameters,
  PROP_KEY,
  RESOURCE,
  TransportFrameworkFactory,
  TrashParameters,
  UpdateFolderParameters,
} from "..";
import { AbstractBusAgent, IHandler } from "../explore/Agent";

// declare var console: any;

class FolderAgent extends AbstractBusAgent {
  constructor() {
    super(RESOURCE.FOLDER);
    this.registerHandlers();
  }

  protected ctx: IContext | null = null;
  protected http: IHttp = TransportFrameworkFactory.instance().newHttpInstance({
    // `paramsSerializer` is an optional function in charge of serializing `params`
    // (e.g. https://www.npmjs.com/package/qs, http://api.jquery.com/jquery.param/)
    paramsSerializer: function (params: any) {
      return Object.entries(params)
        .map((param) => {
          if (param[1] instanceof Array) {
            return param[1]
              .map((value) => `${param[0]}=${encodeURIComponent(value)}`)
              .join("&");
          } else if (
            ["string", "number", "boolean"].indexOf(typeof param[1]) >= 0
          ) {
            return `${param[0]}=${encodeURIComponent(param[1] as any)}`;
          }
          return "";
        })
        .join("&");
    },
  });
  protected checkHttpResponse: <R>(result: R) => R = (result) => {
    if (this.http.latestResponse.status >= 300) {
      throw this.http.latestResponse.statusText;
    }
    return result;
  };

  protected registerHandlers(): void {
    this.setHandler(
      ACTION.INITIALIZE,
      this.createContext as unknown as IHandler,
    );
    this.setHandler(ACTION.SEARCH, this.searchContext as unknown as IHandler);
    this.setHandler(ACTION.CREATE, this.createFolder as unknown as IHandler);
    this.setHandler(ACTION.OPEN, this.listSubfolders as unknown as IHandler);
    this.setHandler(ACTION.MOVE, this.moveToFolder as unknown as IHandler);
    this.setHandler(ACTION.DELETE, this.deleteFolders as unknown as IHandler);
    this.setHandler(ACTION.TRASH, this.trashFolders as unknown as IHandler);
    this.setHandler(ACTION.MANAGE, this.onManage as unknown as IHandler);
    this.setHandler(ACTION.UPD_PROPS, this.updateFolder as unknown as IHandler);
  }

  /** Create a search context. */
  createContext(parameters: GetContextParameters): Promise<GetContextResult> {
    return this.http
      .get<GetContextResult>("/explorer/context", {
        queryParams: this.toQueryParams(parameters),
      })
      .then(this.checkHttpResponse);
  }

  /** Search / paginate within a search context. */
  searchContext(parameters: GetContextParameters): Promise<ISearchResults> {
    return this.http
      .get<GetContextResult>("/explorer/resources", {
        queryParams: this.toQueryParams(parameters),
      })
      .then(this.checkHttpResponse);
  }

  /** Create a new folder. */
  createFolder(
    parameters: CreateFolderParameters,
  ): Promise<CreateFolderResult> {
    return this.http
      .post<CreateFolderResult>(
        "/explorer/folders",
        this.createFolderToBodyParams(parameters),
      )
      .then(this.checkHttpResponse);
  }

  /** Create a new folder. */
  updateFolder(
    parameters: UpdateFolderParameters,
  ): Promise<CreateFolderResult> {
    return this.http
      .put<CreateFolderResult>(
        `/explorer/folders/${parameters.folderId}`,
        this.createFolderToBodyParams(parameters),
      )
      .then(this.checkHttpResponse);
  }

  /** Move resources/folders to a folder. */
  moveToFolder(parameters: MoveParameters): Promise<IActionResult> {
    return this.http
      .post<IActionResult>(
        `/explorer/folders/${parameters.folderId}/move`,
        this.moveToBodyParams(parameters),
      )
      .then(this.checkHttpResponse);
  }

  /** List subfolders of a parent folder. */
  listSubfolders(folderId: ID): Promise<GetSubFoldersResult> {
    return this.http
      .get<GetSubFoldersResult>(`/explorer/folders/${folderId}/move`)
      .then(this.checkHttpResponse);
  }

  /** Delete folders and/or resources. */
  deleteFolders(parameters: DeleteParameters): Promise<IActionResult> {
    return this.http
      .deleteJson<IActionResult>(`/explorer`, parameters)
      .then(this.checkHttpResponse);
  }

  /** Trash folders and/or resources. */
  trashFolders({
    trash,
    resourceType,
    ...parameters
  }: TrashParameters): Promise<IActionResult> {
    return this.http
      .putJson<IActionResult>(
        `/explorer/${trash ? "trash" : "restore"}`,
        parameters,
      )
      .then(this.checkHttpResponse);
  }

  onManage(
    parameters: ManagePropertiesParameters,
  ): Promise<ManagePropertiesResult> {
    const res: ManagePropertiesResult = {
      genericProps: [
        {
          key: PROP_KEY.TITLE,
        },
        {
          key: PROP_KEY.IMAGE,
        },
        {
          key: PROP_KEY.URL,
        },
      ],
    };
    return Promise.resolve().then(() => res);
  }

  private toQueryParams(params: GetContextParameters): any {
    let ret = {
      application: params.app,
      start_idx: params.pagination.startIdx,
      page_size: params.pagination.pageSize,
      resource_type: params.types,
    } as any;
    if (params.orders) {
      ret.order_by = Object.entries(params.orders).map(
        (entry) => `${entry[0]}:${entry[1]}`,
      );
    }
    if (params.filters) {
      Object.assign(ret, params.filters);
    }
    if (typeof params.search === "string") {
      ret.search = params.search;
    }
    return ret;
  }
  private createFolderToBodyParams(params: CreateFolderParameters) {
    return {
      application: params.app,
      resourceType: params.type,
      parentId: params.parentId,
      name: params.name,
    };
  }
  private moveToBodyParams(params: MoveParameters) {
    return {
      application: params.application,
      resourceType: this.managedResource,
      resourceIds: params.resourceIds,
      folderIds: params.folderIds,
    };
  }
}

export const factory: AgentFactory = () => new FolderAgent();
