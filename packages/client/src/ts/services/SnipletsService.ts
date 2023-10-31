import { TimelinegeneratorBehaviour } from "../resources/behaviours/TimelinegeneratorBehaviour";
import { App, ERROR_CODE, ResourceType } from "../globals";
import { IOdeServices } from "./OdeServices";
import { ResourceService } from "../resources/ResourceService";
import { AbstractBehaviourService } from "../resources/behaviours/AbstractBehaviourService";
import { WorkspaceBehaviour } from "../resources/behaviours/WorkspaceBehaviour";
import { BlogBehaviour } from "../resources/behaviours/BlogBehaviour";

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
        service = new BlogBehaviour(context);
        break;
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

  static async initialize(
    context: IOdeServices,
    currentApp: App,
  ): Promise<App[]> {
    const http = context.http();
    return new Promise<App[]>(async (resolve, reject) => {
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
        } catch {
          /* keep default */
        }
      }
      resolve(this.resourceProducingApps);
    });
  }

  static async registerBehaviours(currentApp: App): Promise<void> {
    // Register services
    this.resourceProducingApps.forEach((app) => {
      const key = { application: currentApp, resourceType: app };
      // But not if one is already registered
      if (!ResourceService.isRegistered(key)) {
        ResourceService.register(key, (context: IOdeServices) =>
          this.serviceFor(context, currentApp, app),
        );
      }
    });
    // we wanna return a promise because behaviours may be lazy loaded in a near future
    return Promise.resolve();
  }
}
