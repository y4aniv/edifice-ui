import { Observable } from "rxjs";

//------------------------- Data types
//-- Error codes 
export const ERROR_CODE = {
  SUCCESS:          "0000"
 ,UNKNOWN:          "0010"
 ,NOT_INITIALIZED:  "0020"
 ,NOT_SUPPORTED:    "0030"
 ,APP_NOT_FOUND:    "0040"
} as const;
export type ErrorCode = typeof ERROR_CODE[keyof typeof ERROR_CODE];

//-- Applications
export const APP = {
  EXPLORER:   "explorer"
 ,BLOG:       "blog"
 ,EXERCIZER:  "exercizer"
 // TODO compléter
} as const;
export type App = typeof APP[keyof typeof APP];   // type App = "explorer" | "blog" | "exercizer"...

//-- Resources
export const RESOURCE = {
  FOLDER:     "folder"
 ,BLOG:       "blog"
 ,EXERCISE:   "exercise"
} as const;
export type ResourceType = typeof RESOURCE[keyof typeof RESOURCE];

//-- App/Resource link
export const appNameForResource:{[R in ResourceType]: App} = {
  "folder":   APP.EXPLORER
, "blog":     APP.BLOG
, "exercise": APP.EXERCIZER
} as const;

//-- Actions (toaster)
export const ACTION = {
  /** @param ISearchParameters */
  INITIALIZE: "initialize"
 ,SEARCH:     "search"
 ,CREATE:     "create"
 ,OPEN:       "open"
 ,MANAGE:     "manage"
 ,COMMENT:    "comment"
 ,DELETE:     "delete"
 ,MOVE:       "move"
 ,COPY:       "copy"
 ,EXPORT:     "export"
 ,SHARE:      "share"
 ,PUBLISH:    "publish"
 ,PRINT:      "print"
} as const;
export type ActionType = typeof ACTION[keyof typeof ACTION];

//-- Folders
export const FOLDER = {
  BIN:       "bin"
 ,DEFAULT:   "default"
} as const;
export type FolderType = typeof FOLDER[keyof typeof FOLDER];

//-- Filters
export const BOOLEAN_FILTER = {
  OWNER:      "owner"
 ,SHARED:     "shared"
 ,PUBLIC:     "public"
 ,FAVORITE:   "favorite"
} as const;
export type BooleanFilterType = typeof BOOLEAN_FILTER[keyof typeof BOOLEAN_FILTER];
export const STRING_FILTER = {
//  FOLDER:     "folder" // is instead an ID
} as const;
export type StringFilterType = typeof STRING_FILTER[keyof typeof STRING_FILTER];

//-- Orders 
export const ORDER = {
  NAME:         "name"
 ,MODIFY_DATE:  "modifiedAt"
 ,VIEWS:        "views"
 /*
//FIXME On devrait pouvoir trier sur tout champ issu d'un type de ressource (name, createdAt, authorId...) voir IResource
  createdAt: string;
  authorId: string;
  authorName: string;
  modifierId: ID;
  modifierName: string;
  modifiedAt: string;
  folderId?: ID;      // TODO à confirmer
  public?: boolean;
  shared?: boolean;
  favorite?: boolean;
  comments?: number;
*/
} as const;
export type OrderType = typeof ORDER[keyof typeof ORDER];

//-- Semantique
export type ID = string;
export type StringFilterValue = {
  value: string;  // Value of the filter (as sent to backend)
  name: string;   // Translation key of the filter (as displayed in frontend)
};


//------------------------- Data models 
//-------------------------------------
export interface IContext {
//-------------------------------------
  folders: IFolder[];
  filters: IFilter[];
  orders: IOrder[];
  actions: IAction[];
  pagination: IPagination;
  resources: IResource[];
  preferences: IPreferences;
}

//-------------------------------------
export interface ISearchParameters {
//-------------------------------------
  types:ResourceType[];
  app:App;
  filters:FilterValues;
  orders?:IOrder[];
  pagination:IPagination;
  search?:String;
}

//-------------------------------------
export interface IAction {
//-------------------------------------
  id: ActionType,
  available: boolean  // L'utilisateur a le droit workflow ou pas
  //FIXME comment relier les actions aux behaviours, qu'on va remplacer.
}

//-------------------------------------
export interface IFolder {
//-------------------------------------
  id: ID;
  name: string;
  type: FolderType | ID;
  childNumber: number; // à minima, 0 ou 1...
}

//-------------------------------------
export interface IFilter {
//-------------------------------------
  id: BooleanFilterType | StringFilterType;
  defaultValue?: string | string[] | boolean | boolean[];
  values?: StringFilterValue[];
}

//-------------------------------------
export interface IOrder {
//-------------------------------------
  id: OrderType;
  defaultValue?: "asc"|"desc";
  name: string;
}
  
//-------------------------------------
export interface IPagination { // TODO à tester
//-------------------------------------
  startIdx: number;
  maxIdx?: number;  // Si elastic search renvoie bien le nombre de hits 
  pageSize: number; // Sera égal à la valeur paramétrée côté serveur
}

//-------------------------------------
export interface IResource {
//-------------------------------------
  id: ID;
  name: string;
  thumbnail: string;   // URL : requis; ou bien déductible d’une convention ?
  application: App;
  createdAt: string;  // FIXME: S'entendre sur un format de date
  authorId: string;
  authorName: string;
  modifierId: ID;
  modifierName: string;
  modifiedAt: string; // FIXME: S'entendre sur un format de date
  folderId?: ID;      // TODO à confirmer
  public?: boolean;
  shared?: boolean;
  favorite?: boolean;
  views?: number;
  comments?: number;
}

//-------------------------------------
export interface IPreferences {
//-------------------------------------
  view: "card"|"list";
}

//------------------------- Service call parameters
//-------------------------------------
export interface IActionParameters {
//-------------------------------------
}
export type GetContextParameters = IActionParameters & ISearchParameters;
export type GetResourcesParameters = IActionParameters & ISearchParameters;
export type CreateFolderParameters = IActionParameters & {
  app:App
, type:ResourceType
, parentId: ID|"default"
, name: string
};

//-------------------------------------
export interface IGroupUserRight {
//-------------------------------------
  read: boolean;
  contribute: boolean;
  manage: boolean;
  comment: boolean;
  userId?: ID;
  groupId?: ID;
}

export type FilterValues = {[B in BooleanFilterType]?: boolean} & {[S in StringFilterType]?: string} & {folder?: ID};
export type OrderValues  = {  };

//------------------------- Service call results
//-------------------------------------
export interface IActionResult {
//-------------------------------------
}

export type GetContextResult = IActionResult & IContext;

export type GetResourcesResult = IActionResult & {
  folders: IFolder[];
  pagination: IPagination;
  resources: IResource[];
}
export type GetSubFoldersResult = IActionResult & {
  folders: IFolder[];
}
export type CreateFolderResult = IActionResult &  IFolder & {
  createdAt: string;
}
export type UpdateFolderResult = CreateFolderResult & {
  updatedAt: string;
  parentId: ID|"default";
}

//-------------------------------------
//------------------- API (HIGH-LEVEL)
//-------------------------------------
/** Framework is a singleton. */
//-------------------------------------
export abstract class ExplorerFrameworkFactory {
//-------------------------------------
  static instance: IExplorerFramework;
}

//-------------------------------------
export interface IExplorerFramework {
//-------------------------------------
  /**
   * Instancie un contexte d'exploration .
   * @param types Types de ressources traitées par l'agent, minimum 1.
   * @param app Application à l'origine de l'appel.
   */
  createContext( types:ResourceType[], app:App ): IExplorerContext;
  
  /**
   * Retrieve the underlying communication bus.
   */
  getBus(): IBus;
}

//-------------------------------------
export interface IExplorerContext {
//-------------------------------------
  isInitialized(): boolean;
  /**
   * @return a new search context
   * @throw ERROR_CODE.NOT_INITIALIZED: if initialize() was not called before.
   */
  getContext(): IContext;
  getSearchParameters(): ISearchParameters;

  clear(): void;

  /**
   * Retrieves the first page of listed resources from the server.
   * Search parameters can be adjusted beforehand, @see getSearchParameters().
   * @return 
   */
  initialize(): Promise<IContext>;

  getResources(): Promise<GetResourcesResult>;

  getSubFolders( parentId:ID ): Promise<GetSubFoldersResult>;

  createFolder( resourceType:ResourceType, parentId:ID|"default", name:string ): Promise<CreateFolderResult>;

  updateFolder( folderId:ID, resourceType:ResourceType, parentId:ID|"default", name:string ): Promise<UpdateFolderResult>;

  share( resourceIds:ID[], rights:IGroupUserRight[] ): void;

  copy( targetId:ID, resourceIds:ID[], folderIds:ID[] ): void;

  move( targetId:ID, resourceIds:ID[], folderIds:ID[] ): void;

  delete( resourceIds:ID[], folderIds:ID[] ): void; //FIXME 1 seul tableau en paramètres ?

/*//TODO ajouter des méthodes pour les autres actions du toaster ?
  CREATE:     "create"
 ,OPEN:       "open"
 ,MANAGE:     "manage"
 ,COMMENT:    "comment"
 ,EXPORT:     "export"
 ,PUBLISH:    "publish"
 ,PRINT:      "print"
*/
}

//-------------------------------------
//-------------------- API (LOW-LEVEL)
//-------------------------------------
export interface IBus {
//-------------------------------------
  /** Allows registering an agent as being able to resolve 1 or more action on a type of resource. */
  consumer( res:ResourceType, action:ActionType, agent:IBusAgent ): void;

  /** Allows delegating an action on a type of resource, to a registered agent on the bus. */
  send( res:ResourceType, action:ActionType, parameters:IActionParameters ): Promise<IActionResult>;
}

//-------------------------------------
export interface IBusAgent {
//-------------------------------------
  /** Ask this agent to resolve an action. */
  activate( res:ResourceType, action:ActionType, parameters:IActionParameters ): Observable<IActionResult>;

// Ou bien, s'il y a besoin de dissocier agents et actions pour permettre plus d'interactions :
/*
  queryActivator( app:App, action:ActionType ): IActivator;
}
export interface IActivator {
  activate( parameters:IActionParameters ): Observable<IActionResult>;
}
*/
}

