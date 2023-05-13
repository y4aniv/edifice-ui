import { ResourceRight, RightRole, RightSubject } from "../rights/Service";
// TODO should be loaded from app in future
import "../resources/BlogResourceService";

import { IOdeServices, OdeServices } from "./OdeServices";

export const odeServices: IOdeServices = new OdeServices();

export * from "../resources/interface";

export type { ResourceRight, RightRole, RightSubject };
