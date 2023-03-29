[ode-ts-client](../README.md) / [Exports](../modules.md) / [RxJS](../modules/RxJS.md) / Notification

# Class: Notification<T\>

[RxJS](../modules/RxJS.md).Notification

Represents a push-based event or value that an [Observable](RxJS.Observable.md) can emit.
This class is particularly useful for operators that manage notifications,
like [materialize](../modules/RxJS.md#materialize), [dematerialize](../modules/RxJS.md#dematerialize), [observeOn](../modules/RxJS.md#observeon), and
others. Besides wrapping the actual delivered value, it also annotates it
with metadata of, for instance, what type of push message it is (`next`,
`error`, or `complete`).

**`See`**

 - [materialize](../modules/RxJS.md#materialize)
 - [dematerialize](../modules/RxJS.md#dematerialize)
 - [observeOn](../modules/RxJS.md#observeon)

**`Deprecated`**

It is NOT recommended to create instances of `Notification` directly.
Rather, try to create POJOs matching the signature outlined in [ObservableNotification](../modules/RxJS.md#observablenotification).
For example: `{ kind: 'N', value: 1 }`, `{ kind: 'E', error: new Error('bad') }`, or `{ kind: 'C' }`.
Will be removed in v8.

## Type parameters

| Name |
| :------ |
| `T` |

## Table of contents

### Constructors

- [constructor](RxJS.Notification.md#constructor)

### Properties

- [error](RxJS.Notification.md#error)
- [hasValue](RxJS.Notification.md#hasvalue)
- [kind](RxJS.Notification.md#kind)
- [value](RxJS.Notification.md#value)

### Methods

- [accept](RxJS.Notification.md#accept)
- [do](RxJS.Notification.md#do)
- [observe](RxJS.Notification.md#observe)
- [toObservable](RxJS.Notification.md#toobservable)
- [createComplete](RxJS.Notification.md#createcomplete)
- [createError](RxJS.Notification.md#createerror)
- [createNext](RxJS.Notification.md#createnext)

## Constructors

### constructor

• **new Notification**<`T`\>(`kind`, `value?`)

Creates a "Next" notification object.

**`Deprecated`**

Internal implementation detail. Use Notification#createNext createNext instead.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `kind` | ``"N"`` | Always `'N'` |
| `value?` | `T` | The value to notify with if observed. |

• **new Notification**<`T`\>(`kind`, `value`, `error`)

Creates an "Error" notification object.

**`Deprecated`**

Internal implementation detail. Use Notification#createError createError instead.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `kind` | ``"E"`` | Always `'E'` |
| `value` | `undefined` | Always `undefined` |
| `error` | `any` | The error to notify with if observed. |

• **new Notification**<`T`\>(`kind`)

Creates a "completion" notification object.

**`Deprecated`**

Internal implementation detail. Use Notification#createComplete createComplete instead.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `kind` | ``"C"`` | Always `'C'` |

## Properties

### error

• `Optional` `Readonly` **error**: `any`

___

### hasValue

• `Readonly` **hasValue**: `boolean`

A value signifying that the notification will "next" if observed. In truth,
This is really synonymous with just checking `kind === "N"`.

**`Deprecated`**

Will be removed in v8. Instead, just check to see if the value of `kind` is `"N"`.

___

### kind

• `Readonly` **kind**: ``"C"`` \| ``"E"`` \| ``"N"``

___

### value

• `Optional` `Readonly` **value**: `T`

## Methods

### accept

▸ **accept**(`next`, `error`, `complete`): `void`

Executes a notification on the appropriate handler from a list provided.
If a handler is missing for the kind of notification, nothing is called
and no error is thrown, it will be a noop.

**`Deprecated`**

Replaced with [observe](RxJS.Notification.md#observe). Will be removed in v8.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `next` | (`value`: `T`) => `void` | A next handler |
| `error` | (`err`: `any`) => `void` | An error handler |
| `complete` | () => `void` | A complete handler |

#### Returns

`void`

▸ **accept**(`next`, `error`): `void`

Executes a notification on the appropriate handler from a list provided.
If a handler is missing for the kind of notification, nothing is called
and no error is thrown, it will be a noop.

**`Deprecated`**

Replaced with [observe](RxJS.Notification.md#observe). Will be removed in v8.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `next` | (`value`: `T`) => `void` | A next handler |
| `error` | (`err`: `any`) => `void` | An error handler |

#### Returns

`void`

▸ **accept**(`next`): `void`

Executes the next handler if the Notification is of `kind` `"N"`. Otherwise
this will not error, and it will be a noop.

**`Deprecated`**

Replaced with [observe](RxJS.Notification.md#observe). Will be removed in v8.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `next` | (`value`: `T`) => `void` | The next handler |

#### Returns

`void`

▸ **accept**(`observer`): `void`

Executes the appropriate handler on a passed `observer` given the `kind` of notification.
If the handler is missing it will do nothing. Even if the notification is an error, if
there is no error handler on the observer, an error will not be thrown, it will noop.

**`Deprecated`**

Replaced with [observe](RxJS.Notification.md#observe). Will be removed in v8.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `observer` | [`PartialObserver`](../modules/RxJS.md#partialobserver)<`T`\> | The observer to notify. |

#### Returns

`void`

___

### do

▸ **do**(`next`, `error`, `complete`): `void`

Executes a notification on the appropriate handler from a list provided.
If a handler is missing for the kind of notification, nothing is called
and no error is thrown, it will be a noop.

**`Deprecated`**

Replaced with [observe](RxJS.Notification.md#observe). Will be removed in v8.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `next` | (`value`: `T`) => `void` | A next handler |
| `error` | (`err`: `any`) => `void` | An error handler |
| `complete` | () => `void` | A complete handler |

#### Returns

`void`

▸ **do**(`next`, `error`): `void`

Executes a notification on the appropriate handler from a list provided.
If a handler is missing for the kind of notification, nothing is called
and no error is thrown, it will be a noop.

**`Deprecated`**

Replaced with [observe](RxJS.Notification.md#observe). Will be removed in v8.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `next` | (`value`: `T`) => `void` | A next handler |
| `error` | (`err`: `any`) => `void` | An error handler |

#### Returns

`void`

▸ **do**(`next`): `void`

Executes the next handler if the Notification is of `kind` `"N"`. Otherwise
this will not error, and it will be a noop.

**`Deprecated`**

Replaced with [observe](RxJS.Notification.md#observe). Will be removed in v8.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `next` | (`value`: `T`) => `void` | The next handler |

#### Returns

`void`

___

### observe

▸ **observe**(`observer`): `void`

Executes the appropriate handler on a passed `observer` given the `kind` of notification.
If the handler is missing it will do nothing. Even if the notification is an error, if
there is no error handler on the observer, an error will not be thrown, it will noop.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `observer` | [`PartialObserver`](../modules/RxJS.md#partialobserver)<`T`\> | The observer to notify. |

#### Returns

`void`

___

### toObservable

▸ **toObservable**(): [`Observable`](RxJS.Observable.md)<`T`\>

Returns a simple Observable that just delivers the notification represented
by this Notification instance.

**`Deprecated`**

Will be removed in v8. To convert a `Notification` to an [Observable](RxJS.Observable.md),
use [of](../modules/RxJS.md#of) and [dematerialize](../modules/RxJS.md#dematerialize): `of(notification).pipe(dematerialize())`.

#### Returns

[`Observable`](RxJS.Observable.md)<`T`\>

___

### createComplete

▸ `Static` **createComplete**(): [`Notification`](RxJS.Notification.md)<`never`\> & [`CompleteNotification`](../interfaces/RxJS.CompleteNotification.md)

A shortcut to create a Notification instance of the type `complete`.

**`Nocollapse`**

**`Deprecated`**

It is NOT recommended to create instances of `Notification` directly.
Rather, try to create POJOs matching the signature outlined in [ObservableNotification](../modules/RxJS.md#observablenotification).
For example: `{ kind: 'N', value: 1 }`, `{ kind: 'E', error: new Error('bad') }`, or `{ kind: 'C' }`.
Will be removed in v8.

#### Returns

[`Notification`](RxJS.Notification.md)<`never`\> & [`CompleteNotification`](../interfaces/RxJS.CompleteNotification.md)

The valueless "complete" Notification.

___

### createError

▸ `Static` **createError**(`err?`): [`Notification`](RxJS.Notification.md)<`never`\> & [`ErrorNotification`](../interfaces/RxJS.ErrorNotification.md)

A shortcut to create a Notification instance of the type `error` from a
given error.

**`Nocollapse`**

**`Deprecated`**

It is NOT recommended to create instances of `Notification` directly.
Rather, try to create POJOs matching the signature outlined in [ObservableNotification](../modules/RxJS.md#observablenotification).
For example: `{ kind: 'N', value: 1 }`, `{ kind: 'E', error: new Error('bad') }`, or `{ kind: 'C' }`.
Will be removed in v8.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `err?` | `any` | The `error` error. |

#### Returns

[`Notification`](RxJS.Notification.md)<`never`\> & [`ErrorNotification`](../interfaces/RxJS.ErrorNotification.md)

The "error" Notification representing the
argument.

___

### createNext

▸ `Static` **createNext**<`T`\>(`value`): [`Notification`](RxJS.Notification.md)<`T`\> & [`NextNotification`](../interfaces/RxJS.NextNotification.md)<`T`\>

A shortcut to create a Notification instance of the type `next` from a
given value.

**`Nocollapse`**

**`Deprecated`**

It is NOT recommended to create instances of `Notification` directly.
Rather, try to create POJOs matching the signature outlined in [ObservableNotification](../modules/RxJS.md#observablenotification).
For example: `{ kind: 'N', value: 1 }`, `{ kind: 'E', error: new Error('bad') }`, or `{ kind: 'C' }`.
Will be removed in v8.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `T` | The `next` value. |

#### Returns

[`Notification`](RxJS.Notification.md)<`T`\> & [`NextNotification`](../interfaces/RxJS.NextNotification.md)<`T`\>

The "next" Notification representing the
argument.
