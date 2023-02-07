import { ConfService } from "./ConfService";
import { HttpService } from "./HttpService";
import { RightService } from "./RightService";
import { SessionService } from "./SessionService";
import { OdeContext } from "./types";
import { WorkspaceService } from "./WorkspaceService";

export const ode: OdeContext = {
  conf() {
    return new ConfService(ode);
  },
  rights() {
    return new RightService(ode);
  },
  session(){
    return new SessionService(ode);
  },
  storage() {
    return {
      workspace() {
        return new WorkspaceService(ode);
      },
    };
  },
  transport() {
    return {
      http() {
        return new HttpService(ode);
      },
    };
  },
};
