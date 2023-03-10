import { ResourceRight, RightRole, RightSubject } from "./RightService";
// TODO should be loaded from app in future
import "../resources/BlogResourceService";
import { UpdateParameters } from "./ResourceService";
import {
  ShareRight,
  ShareRightAction,
  ShareRightActionDisplayName,
  ShareRightType,
  ShareSubject,
} from "./ShareService";
import { IOdeServices, OdeServices } from "./OdeServices";

export const odeServices: IOdeServices = new OdeServices();

export type {
  ResourceRight,
  RightRole,
  RightSubject,
  ShareRight,
  ShareRightAction,
  ShareRightActionDisplayName,
  ShareRightType,
  ShareSubject,
  UpdateParameters,
};
