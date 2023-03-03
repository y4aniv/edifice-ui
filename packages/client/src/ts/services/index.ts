import { ConfService } from "./ConfService";
import { HttpService } from "./HttpService";
import {
  RightService,
  ResourceRight,
  RightRole,
  RightSubject,
} from "./RightService";
import { SessionService } from "./SessionService";
import { OdeContext } from "./types";
import { WorkspaceService } from "./WorkspaceService";
// TODO should be loaded from app in future
import "../resources/BlogResourceService";
import { ResourceService, UpdateParameters } from "./ResourceService";
import { ShareService } from "./ShareService";
import { DirectoryService } from "./DirectoryService";

class OdeContextImpl implements OdeContext {
  private _conf: ConfService;
  private _directory: DirectoryService;
  private _http: HttpService;
  private _rights: RightService;
  private _session: SessionService;
  private _share: ShareService;
  private _workspace: WorkspaceService;

  constructor() {
    this._conf = new ConfService(this);
    this._directory = new DirectoryService();
    this._http = new HttpService(this);
    this._rights = new RightService(this);
    this._session = new SessionService(this);
    this._share = new ShareService();
    this._workspace = new WorkspaceService(this);
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

  resource(application: string, resourceType: string): ResourceService {
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

export const ode = new OdeContextImpl();
export type { ResourceRight, RightRole, RightSubject, UpdateParameters };
