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

class OdeContextImpl implements OdeContext {
  private _http: HttpService;
  private _workspace: WorkspaceService;
  private _session: SessionService;
  private _rights: RightService;
  private _conf: ConfService;
  constructor() {
    this._conf = new ConfService(this);
    this._http = new HttpService(this);
    this._rights = new RightService(this);
    this._session = new SessionService(this);
    this._workspace = new WorkspaceService(this);
  }
  conf() {
    return this._conf;
  }
  rights() {
    return this._rights;
  }
  session() {
    return this._session;
  }
  workspace() {
    return this._workspace;
  }
  http() {
    return this._http;
  }
}

export const ode = new OdeContextImpl();
export type { ResourceRight, RightRole, RightSubject };
