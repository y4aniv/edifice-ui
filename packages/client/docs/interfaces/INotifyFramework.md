[ode-ts-client](../README.md) / [Exports](../modules.md) / INotifyFramework

# Interface: INotifyFramework

## Table of contents

### Methods

- [events](INotifyFramework.md#events)
- [onLangReady](INotifyFramework.md#onlangready)
- [onOverridesReady](INotifyFramework.md#onoverridesready)
- [onSessionReady](INotifyFramework.md#onsessionready)
- [onSkinReady](INotifyFramework.md#onskinready)
- [promisify](INotifyFramework.md#promisify)

## Methods

### events

▸ **events**(): [`Subject`](../classes/RxJS.Subject.md)<{ `data?`: `any` ; `layer`: `string` ; `name`: [`EventName`](../modules.md#eventname)  }\>

Notify that an event occured.
By definition, an event can occur multiple times (otherwise it is a one-time "process", see above) and be watched by many targets.
=> We use RxJS Subject to model events stream with many potential subscribers.

#### Returns

[`Subject`](../classes/RxJS.Subject.md)<{ `data?`: `any` ; `layer`: `string` ; `name`: [`EventName`](../modules.md#eventname)  }\>

___

### onLangReady

▸ **onLangReady**(): [`IPromisified`](IPromisified.md)<`string`\>

Notify that a process is done and data ready or rejected.
Promise / resolve / reject of current user's language.

#### Returns

[`IPromisified`](IPromisified.md)<`string`\>

___

### onOverridesReady

▸ **onOverridesReady**(): [`IPromisified`](IPromisified.md)<[`IThemeOverrides`](../modules.md#ithemeoverrides)\>

Notify that a process is done and data ready or rejected.
This data is not intended to change after being resolved.
Promise / resolve / reject of asynchronous skin overrides.

#### Returns

[`IPromisified`](IPromisified.md)<[`IThemeOverrides`](../modules.md#ithemeoverrides)\>

___

### onSessionReady

▸ **onSessionReady**(): [`IPromisified`](IPromisified.md)<[`IUserInfo`](IUserInfo.md)\>

Notify that a process is done and data ready or rejected.
Promise / resolve / reject of current user's session.

#### Returns

[`IPromisified`](IPromisified.md)<[`IUserInfo`](IUserInfo.md)\>

___

### onSkinReady

▸ **onSkinReady**(): [`IPromisified`](IPromisified.md)<[`ITheme`](ITheme.md)\>

Notify that a process is done and data ready or rejected.
This data is not intended to change after being resolved.
Promise / resolve / reject of asynchronous skin.

#### Returns

[`IPromisified`](IPromisified.md)<[`ITheme`](ITheme.md)\>

___

### promisify

▸ **promisify**<`T`\>(): [`IPromisified`](IPromisified.md)<`T`\>

Notify that a process is done and data ready or rejected.
Utility method : wrap your own Promise.
Or use one of the predefined promises.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`IPromisified`](IPromisified.md)<`T`\>
