import { ConfService } from "./ConfService";
import { HttpService } from "./HttpService";
import { ResourceService } from "./ResourceService";
import { RightService } from "./RightService";
import { SessionService } from "./SessionService";
import { WorkspaceService } from "./WorkspaceService";

export interface OdeContext {
  conf(): ConfService;
  rights(): RightService;
  resource(application: string, resourceType: string): ResourceService;
  session(): SessionService;
  workspace(): WorkspaceService;
  http(): HttpService;
}
