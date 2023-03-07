import { ResourceRight, RightRole, RightSubject } from "./RightService";
// TODO should be loaded from app in future
import "../resources/BlogResourceService";
import { UpdateParameters } from "./ResourceService";
import {
  ShareRight,
  ShareRightAction,
  ShareRightActionDisplayName,
  ShareRightType,
} from "./ShareService";
import { OdeServices, OdeServicesImpl } from "./OdeServices";

export const odeServices: OdeServices = new OdeServicesImpl();

export type {
  ResourceRight,
  RightRole,
  RightSubject,
  ShareRight,
  ShareRightAction,
  ShareRightActionDisplayName,
  ShareRightType,
  UpdateParameters,
};
