[ode-ts-client](../README.md) / [Exports](../modules.md) / INotifyFramework

# Interface: INotifyFramework

## Table of contents

### Methods

- [events](inotifyframework.md#events)
- [onLangReady](inotifyframework.md#onlangready)
- [onOverridesReady](inotifyframework.md#onoverridesready)
- [onSessionReady](inotifyframework.md#onsessionready)
- [onSkinReady](inotifyframework.md#onskinready)
- [promisify](inotifyframework.md#promisify)

## Methods

### events

▸ **events**(): [*Subject*](../classes/rxjs.subject.md)<{ `data?`: *any* ; `layer`: *string* ; `name`: [*EventName*](../modules.md#eventname)  }\>

Notify that an event occured.
By definition, an event can occur multiple times (otherwise it is a one-time "process", see above) and be watched by many targets.
=> We use RxJS Subject to model events stream with many potential subscribers.

**Returns:** [*Subject*](../classes/rxjs.subject.md)<{ `data?`: *any* ; `layer`: *string* ; `name`: [*EventName*](../modules.md#eventname)  }\>

___

### onLangReady

▸ **onLangReady**(): [*IPromisified*](ipromisified.md)<string\>

Notify that a process is done and data ready or rejected.
Promise / resolve / reject of current user's language.

**Returns:** [*IPromisified*](ipromisified.md)<string\>

___

### onOverridesReady

▸ **onOverridesReady**(): [*IPromisified*](ipromisified.md)<[*IThemeOverrides*](../modules.md#ithemeoverrides)\>

Notify that a process is done and data ready or rejected.
This data is not intended to change after being resolved.
Promise / resolve / reject of asynchronous skin overrides.

**Returns:** [*IPromisified*](ipromisified.md)<[*IThemeOverrides*](../modules.md#ithemeoverrides)\>

___

### onSessionReady

▸ **onSessionReady**(): [*IPromisified*](ipromisified.md)<[*IUserInfo*](iuserinfo.md)\>

Notify that a process is done and data ready or rejected.
Promise / resolve / reject of current user's session.

**Returns:** [*IPromisified*](ipromisified.md)<[*IUserInfo*](iuserinfo.md)\>

___

### onSkinReady

▸ **onSkinReady**(): [*IPromisified*](ipromisified.md)<[*ITheme*](itheme.md)\>

Notify that a process is done and data ready or rejected.
This data is not intended to change after being resolved.
Promise / resolve / reject of asynchronous skin.

**Returns:** [*IPromisified*](ipromisified.md)<[*ITheme*](itheme.md)\>

___

### promisify

▸ **promisify**<T\>(): [*IPromisified*](ipromisified.md)<T\>

Notify that a process is done and data ready or rejected.
Utility method : wrap your own Promise.
Or use one of the predefined promises.

#### Type parameters:

Name |
:------ |
`T` |

**Returns:** [*IPromisified*](ipromisified.md)<T\>
