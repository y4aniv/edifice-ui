import { TimelinegeneratorBehaviour } from "./TimelinegeneratorBehaviour";
import { App, ERROR_CODE, ResourceType } from "../../globals";
import { IOdeServices } from "../../services/OdeServices";
import { ResourceService } from "../ResourceService";
import { AbstractBehaviourService } from "./AbstractBehaviourService";
import { WorkspaceBehaviour } from "./WorkspaceBehaviour";

export class SnipletsService {
  static resourceProducingApps: App[] = [];

  private static serviceFor(
    context: IOdeServices,
    application: App,
    resourceType: ResourceType,
  ) {
    let service: AbstractBehaviourService;
    switch (resourceType) {
      case "timelinegenerator":
        service = new TimelinegeneratorBehaviour(context);
        break;
      case "workspace":
        service = new WorkspaceBehaviour(context);
        break;
      case "blog":
      case "actualites":
      case "wiki":
      case "pages":
      case "poll":
      case "community":
      case "mindmap":
      case "forum":
      case "homeworks":
      case "scrapbook":
      case "collaborativewall":
      case "exercizer":
      case "formulaire":
      case "magneto":
      default:
        throw ERROR_CODE.NOT_SUPPORTED;
    }
    service.APP = application;
    return service;
  }

  static async load(context: IOdeServices, currentApp: App): Promise<void> {
    const http = context.http();
    return new Promise<Array<App | string>>(async (resolve, reject) => {
      if (!this.resourceProducingApps.length) {
        // Default to current app and workspace
        this.resourceProducingApps = [currentApp, "workspace"];

        // Dynamic load prefixes of resource-producing apps
        try {
          const [appList, me] = await Promise.all([
            http.get<App[]>("/resources-applications"),
            context.session().getUser(),
          ]);
          if (me && me.apps && appList?.length) {
            // Sanitize list agains authorized apps for this user
            this.resourceProducingApps = appList.filter((appPrefix) => {
              return (
                -1 <
                me.apps.findIndex((webapp) => {
                  return (
                    webapp.address.indexOf(appPrefix) !== -1 &&
                    webapp.icon.indexOf("/") === -1
                  );
                })
              );
            });
          }
        } catch {}
      }
      resolve(this.resourceProducingApps);
    }).then((apps) => {
      // Register services
      apps.forEach((app) => {
        ResourceService.register(
          { application: currentApp, resourceType: app },
          (context: IOdeServices) => this.serviceFor(context, currentApp, app),
        );
      });
    });
  }
}
