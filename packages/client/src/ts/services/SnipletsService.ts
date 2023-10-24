import { TimelinegeneratorBehaviour } from "../resources/behaviours/TimelinegeneratorBehaviour";
import { App as IWebApp, ERROR_CODE, ResourceType } from "../globals";
import { IOdeServices } from "./OdeServices";
import { ResourceService } from "../resources/ResourceService";
import { AbstractBehaviourService } from "../resources/behaviours/AbstractBehaviourService";
import { WorkspaceBehaviour } from "../resources/behaviours/WorkspaceBehaviour";


export class SnipletsService {
  static resourceProducingApps: IWebApp[] = [];

  private static serviceFor(
    context: IOdeServices,
    application: IWebApp,
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

  static async registerBehaviours(context: IOdeServices, currentApp: IWebApp): Promise<void> {
    const http = context.http();
    return new Promise<Array<IWebApp | string>>(async (resolve, reject) => {
      if (!this.resourceProducingApps.length) {
        // Default to current app and workspace
        this.resourceProducingApps = [currentApp, "workspace"];

        // Dynamic load prefixes of resource-producing apps
        try {
          const [appList, me] = await Promise.all([
            http.get<IWebApp[]>("/resources-applications"),
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
        const key = { application: currentApp, resourceType: app };
        // But not if one is already registered
        if (!ResourceService.isRegistered(key)) {
          ResourceService.register(key, (context: IOdeServices) =>
            this.serviceFor(context, currentApp, app),
          );
        }
      });
    });
  }
}
