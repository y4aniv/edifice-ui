import { ConfService } from "./ConfService";
import { HttpService } from "./HttpService";
import { RightService } from "./RightService";
import { SessionService } from "./SessionService";
import { WorkspaceService } from "./WorkspaceService";

export interface OdeContext {
  conf(): ConfService;
  rights(): RightService;
  session(): SessionService;
  workspace(): WorkspaceService;
  http(): HttpService;
}
