import { Subject } from "rxjs";
import { ITheme, IThemeOverrides } from "../configure/interfaces";
import { IUserInfo } from "../session/interfaces";
import { notify } from "./Framework";

//-------------------------------------
export abstract class NotifyFrameworkFactory {
//-------------------------------------
	static instance():INotifyFramework {
		return notify;
	}
}

//-------------------------------------
export interface INotifyFramework {
//-------------------------------------
	/**
	 * Notify that a process is done and data ready or rejected.
	 * Utility method : wrap your own Promise.
	 * Or use one of the predefined promises.
	 */
	promisify<T>():IPromisified<T>;

	/**
	 * Notify that a process is done and data ready or rejected.
	 * Promise / resolve / reject of current user's language.
	 */
	onLangReady():IPromisified<string>;

	/**
	 * Notify that a process is done and data ready or rejected.
	 * Promise / resolve / reject of current user's session.
	 */
	onSessionReady():IPromisified<IUserInfo>;

	 /**
	  * Notify that a process is done and data ready or rejected.
	  * This data is not intended to change after being resolved.
	  * Promise / resolve / reject of asynchronous skin.
	  */
	onSkinReady():IPromisified<ITheme>;

	/**
	 * Notify that a process is done and data ready or rejected.
	 * This data is not intended to change after being resolved.
	 * Promise / resolve / reject of asynchronous skin overrides.
	 */
	onOverridesReady():IPromisified<IThemeOverrides>;


	/**
	 * Notify that an event occured.
	 * By definition, an event can occur multiple times (otherwise it is a one-time "process", see above) and be watched by many targets.
	 * => We use RxJS Subject to model events stream with many potential subscribers.
	 */
	events():Subject<{name:EventName, layer:LayerName|string, data?:any}>;
}

//-------------------------------------
export interface IPromisified<T> {
//-------------------------------------
	readonly promise: Promise<T>;
    resolve: (value: T | PromiseLike<T>)=>void;
    reject: (reason?: any)=>void;
}

//-------------------------------------
export const LAYER_NAME = {
//-------------------------------------
	WIDGETS:  "widgets"
,	EXPLORER: "explorer"
} as const;
export type LayerName = typeof LAYER_NAME[keyof typeof LAYER_NAME];

//-------------------------------------
export const EVENT_NAME = {
//-------------------------------------
	USERPREF_CHANGED:  "userprefChanged"
,	SEARCH_RESULTED:	"searchResulted"
} as const;
export type EventName = typeof EVENT_NAME[keyof typeof EVENT_NAME];

