import { CacheService } from "./CacheService";
import { ConfService } from "./ConfService";
import { DirectoryService } from "./DirectoryService";
import { HttpService } from "./HttpService";
import { ResourceService } from "./ResourceService";
import { RightService } from "./RightService";
import { SessionService } from "./SessionService";
import { ShareService } from "./ShareService";
import { WorkspaceService } from "./WorkspaceService";

export interface IOdeServices {
  cache(): CacheService;
  conf(): ConfService;
  directory(): DirectoryService;
  http(): HttpService;
  resource(application: string, resourceType: string): ResourceService;
  rights(): RightService;
  session(): SessionService;
  share(): ShareService;
  workspace(): WorkspaceService;
}

export class OdeServices implements IOdeServices {
  private _cache: CacheService;
  private _conf: ConfService;
  private _directory: DirectoryService;
  private _http: HttpService;
  private _rights: RightService;
  private _session: SessionService;
  private _share: ShareService;
  private _workspace: WorkspaceService;

  constructor() {
    this._cache = new CacheService(this);
    this._conf = new ConfService(this);
    this._directory = new DirectoryService(this);
    this._http = new HttpService(this);
    this._rights = new RightService(this);
    this._session = new SessionService(this);
    this._share = new ShareService(this);
    this._workspace = new WorkspaceService(this);
  }

  cache() {
    return this._cache;
  }

  conf() {
    return this._conf;
  }

  directory(): DirectoryService {
    return this._directory;
  }

  http() {
    return this._http;
  }

  resource(application: string, resourceType?: string): ResourceService {
    if(!resourceType){
      return ResourceService.findMainService({application}, this);
    }
    return ResourceService.findService({ application, resourceType }, this);
  }

  rights() {
    return this._rights;
  }

  session() {
    return this._session;
  }

  share() {
    return this._share;
  }

  workspace() {
    return this._workspace;
  }
}
