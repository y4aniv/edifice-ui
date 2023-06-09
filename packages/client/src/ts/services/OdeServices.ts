import { CacheService } from "../cache/Service";
import { ConfService } from "../configure/Service";
import { DirectoryService } from "../directory/Service";
import { HttpService } from "../transport/Service";
import { ResourceService } from "../resources/ResourceService";
import { RightService } from "../rights/Service";
import { SessionService } from "../session/Service";
import { ShareService } from "../share/Service";
import { WorkspaceService } from "../workspace/Service";
import { IdiomService } from "../idiom/Service";
import { AnalyticsService } from "../analytics/Service";

export interface IOdeServices {
  analytics(): AnalyticsService;
  cache(): CacheService;
  conf(): ConfService;
  directory(): DirectoryService;
  http(): HttpService;
  idiom(): IdiomService;
  resource(application: string, resourceType?: string): ResourceService;
  rights(): RightService;
  session(): SessionService;
  share(): ShareService;
  workspace(): WorkspaceService;
}

export class OdeServices implements IOdeServices {
  private _analytics: AnalyticsService;
  private _cache: CacheService;
  private _conf: ConfService;
  private _directory: DirectoryService;
  private _http: HttpService;
  private _idiom: IdiomService;
  private _rights: RightService;
  private _session: SessionService;
  private _share: ShareService;
  private _workspace: WorkspaceService;

  constructor() {
    this._analytics = new AnalyticsService(this);
    this._cache = new CacheService(this);
    this._conf = new ConfService(this);
    this._directory = new DirectoryService(this);
    this._http = new HttpService(this);
    this._idiom = new IdiomService(this);
    this._rights = new RightService(this);
    this._session = new SessionService(this);
    this._share = new ShareService(this);
    this._workspace = new WorkspaceService(this);
  }

  analytics() {
    return this._analytics;
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

  idiom() {
    return this._idiom;
  }

  resource(application: string, resourceType?: string): ResourceService {
    if (!resourceType) {
      return ResourceService.findMainService({ application }, this);
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
