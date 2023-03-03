import { ConfService } from "./ConfService";
import { DirectoryService } from "./DirectoryService";
import { HttpService } from "./HttpService";
import { ResourceService } from "./ResourceService";
import { RightService } from "./RightService";
import { SessionService } from "./SessionService";
import { ShareService } from "./ShareService";
import { WorkspaceService } from "./WorkspaceService";

export interface OdeContext {
  conf(): ConfService;
  directory(): DirectoryService;
  http(): HttpService;
  resource(application: string, resourceType: string): ResourceService;
  rights(): RightService;
  session(): SessionService;
  share(): ShareService;
  workspace(): WorkspaceService;
}
