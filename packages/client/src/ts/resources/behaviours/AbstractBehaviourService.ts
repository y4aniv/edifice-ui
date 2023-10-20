import { ERROR_CODE, ID, IHttpParams, ResourceType } from "../..";
import { CacheService } from "../../cache/Service";
import { OdeServices } from "../../services/OdeServices";
import {
  GetContextParameters,
  IResource,
  IResourceService,
  ISearchResults,
} from "../interface";

function notSupported(): any {
  throw ERROR_CODE.NOT_SUPPORTED;    
}

export interface LinkerModel {
  _id: ID;
  title: string;
  ownerName: string;
  owner: string;
  icon: string;
  shared: boolean;
  path?: string;
  modified: {
    "$date": number | string
  };
};

/**
 * TO BE DEPRECATED. DO NOT USE UNLESS YOU KNOW WHAT YOU ARE DOING.
 * Facade for the old-fashioned way of listing resources => behaviours.loadResources()
 * Any other functionality is unavailable.
 */
export abstract class AbstractBehaviourService implements IResourceService {
  abstract APP:string;
  abstract RESOURCE:ResourceType;
  /** Adapter function to be implemented by subclasses. */
  abstract loadResources():Promise<IResource[]>;

  //
  // IMPLEMENTATION
  //
  constructor(protected context: OdeServices) {
    this._cache = new CacheService(this.context);
  }

  async searchContext(_parameters: GetContextParameters): Promise<ISearchResults> {
    return this.rssToResults(await this.loadResources());
  }
  getApplication(): string {
    return this.APP;
  }
  getResourceType(): ResourceType {
    return this.RESOURCE;
  }

  //-----------------
  //--- Utilities ---
  //-----------------
  private _cache:CacheService;

  protected httpGet<R>(url: string, params?: IHttpParams | undefined) {
    return this._cache.httpGetJson<R>(url, params);
  }
  /* Utility to map data between linker model and search model. */
  protected dataToResource( {
      _id: assetId,
      title: name, 
      ownerName: creatorName, 
      owner: creatorId, 
      icon: thumbnail,
      shared,
      modified,
    }:LinkerModel):IResource {
      const modifiedAt = modified?.$date ? ""+modified.$date : ""
    return {
      name,
      creatorId,
      creatorName,
      thumbnail,
      assetId,
      modifiedAt,
      shared,
    } as IResource;
  }

  protected rssToResults(resources:IResource[]) {
    return {
      folders: [],
      pagination: {startIdx:0, maxIdx:resources.length-1, pageSize:resources.length },
      resources,
    }
  }

  //---------------------------------------------
  //--- Every other members are not supported ---
  //---------------------------------------------
  createContext = notSupported;
  create = notSupported;
  update = notSupported;
  getFormUrl = notSupported;
  getViewUrl = notSupported;
  getPrintUrl = notSupported;
  getShareReadUrl = notSupported;
  getSaveShareUrl = notSupported;
  publish = notSupported;
  createFolder = notSupported;
  updateFolder = notSupported;
  moveToFolder = notSupported;
  listSubfolders = notSupported;
  deleteAll = notSupported;
  trashAll = notSupported;
  restoreAll = notSupported;
}
