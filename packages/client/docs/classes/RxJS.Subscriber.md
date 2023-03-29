[ode-ts-client](../README.md) / [Exports](../modules.md) / [RxJS](../modules/RxJS.md) / Subscriber

# Class: Subscriber<T\>

[RxJS](../modules/RxJS.md).Subscriber

Implements the [Observer](../interfaces/RxJS.Observer.md) interface and extends the
[Subscription](RxJS.Subscription.md) class. While the [Observer](../interfaces/RxJS.Observer.md) is the public API for
consuming the values of an [Observable](RxJS.Observable.md), all Observers get converted to
a Subscriber, in order to provide Subscription-like capabilities such as
`unsubscribe`. Subscriber is a common type in RxJS, and crucial for
implementing operators, but it is rarely used as a public API.

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`Subscription`](RxJS.Subscription.md)

  ↳ **`Subscriber`**

## Implements

- [`Observer`](../interfaces/RxJS.Observer.md)<`T`\>

## Table of contents

### Constructors

- [constructor](RxJS.Subscriber.md#constructor)

### Properties

- [closed](RxJS.Subscriber.md#closed)
- [destination](RxJS.Subscriber.md#destination)
- [isStopped](RxJS.Subscriber.md#isstopped)
- [EMPTY](RxJS.Subscriber.md#empty)

### Methods

- [\_complete](RxJS.Subscriber.md#_complete)
- [\_error](RxJS.Subscriber.md#_error)
- [\_next](RxJS.Subscriber.md#_next)
- [add](RxJS.Subscriber.md#add)
- [complete](RxJS.Subscriber.md#complete)
- [error](RxJS.Subscriber.md#error)
- [next](RxJS.Subscriber.md#next)
- [remove](RxJS.Subscriber.md#remove)
- [unsubscribe](RxJS.Subscriber.md#unsubscribe)
- [create](RxJS.Subscriber.md#create)

## Constructors

### constructor

• **new Subscriber**<`T`\>(`destination?`)

**`Deprecated`**

Internal implementation detail, do not use directly. Will be made internal in v8.
There is no reason to directly create an instance of Subscriber. This type is exported for typings reasons.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `destination?` | [`Subscriber`](RxJS.Subscriber.md)<`any`\> \| [`Observer`](../interfaces/RxJS.Observer.md)<`any`\> |

#### Overrides

[Subscription](RxJS.Subscription.md).[constructor](RxJS.Subscription.md#constructor)

## Properties

### closed

• **closed**: `boolean`

A flag to indicate whether this Subscription has already been unsubscribed.

#### Inherited from

[Subscription](RxJS.Subscription.md).[closed](RxJS.Subscription.md#closed)

___

### destination

• `Protected` **destination**: [`Subscriber`](RxJS.Subscriber.md)<`any`\> \| [`Observer`](../interfaces/RxJS.Observer.md)<`any`\>

**`Deprecated`**

Internal implementation detail, do not use directly. Will be made internal in v8.

___

### isStopped

• `Protected` **isStopped**: `boolean`

**`Deprecated`**

Internal implementation detail, do not use directly. Will be made internal in v8.

___

### EMPTY

▪ `Static` **EMPTY**: [`Subscription`](RxJS.Subscription.md)

**`Nocollapse`**

#### Inherited from

[Subscription](RxJS.Subscription.md).[EMPTY](RxJS.Subscription.md#empty)

## Methods

### \_complete

▸ `Protected` **_complete**(): `void`

#### Returns

`void`

___

### \_error

▸ `Protected` **_error**(`err`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `err` | `any` |

#### Returns

`void`

___

### \_next

▸ `Protected` **_next**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |

#### Returns

`void`

___

### add

▸ **add**(`teardown`): `void`

Adds a finalizer to this subscription, so that finalization will be unsubscribed/called
when this subscription is unsubscribed. If this subscription is already [#closed](../modules/RxJS.md),
because it has already been unsubscribed, then whatever finalizer is passed to it
will automatically be executed (unless the finalizer itself is also a closed subscription).

Closed Subscriptions cannot be added as finalizers to any subscription. Adding a closed
subscription to a any subscription will result in no operation. (A noop).

Adding a subscription to itself, or adding `null` or `undefined` will not perform any
operation at all. (A noop).

`Subscription` instances that are added to this instance will automatically remove themselves
if they are unsubscribed. Functions and [Unsubscribable](../interfaces/RxJS.Unsubscribable.md) objects that you wish to remove
will need to be removed manually with [#remove](../modules/RxJS.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `teardown` | [`TeardownLogic`](../modules/RxJS.md#teardownlogic) | The finalization logic to add to this subscription. |

#### Returns

`void`

#### Inherited from

[Subscription](RxJS.Subscription.md).[add](RxJS.Subscription.md#add)

___

### complete

▸ **complete**(): `void`

The [Observer](../interfaces/RxJS.Observer.md) callback to receive a valueless notification of type
`complete` from the Observable. Notifies the Observer that the Observable
has finished sending push-based notifications.

#### Returns

`void`

#### Implementation of

Observer.complete

___

### error

▸ **error**(`err?`): `void`

The [Observer](../interfaces/RxJS.Observer.md) callback to receive notifications of type `error` from
the Observable, with an attached `Error`. Notifies the Observer that
the Observable has experienced an error condition.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `err?` | `any` | The `error` exception. |

#### Returns

`void`

#### Implementation of

Observer.error

___

### next

▸ **next**(`value?`): `void`

The [Observer](../interfaces/RxJS.Observer.md) callback to receive notifications of type `next` from
the Observable, with a value. The Observable may call this method 0 or more
times.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value?` | `T` | The `next` value. |

#### Returns

`void`

#### Implementation of

Observer.next

___

### remove

▸ **remove**(`teardown`): `void`

Removes a finalizer from this subscription that was previously added with the [#add](../modules/RxJS.md) method.

Note that `Subscription` instances, when unsubscribed, will automatically remove themselves
from every other `Subscription` they have been added to. This means that using the `remove` method
is not a common thing and should be used thoughtfully.

If you add the same finalizer instance of a function or an unsubscribable object to a `Subscription` instance
more than once, you will need to call `remove` the same number of times to remove all instances.

All finalizer instances are removed to free up memory upon unsubscription.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `teardown` | [`Subscription`](RxJS.Subscription.md) \| [`Unsubscribable`](../interfaces/RxJS.Unsubscribable.md) \| () => `void` | The finalizer to remove from this subscription |

#### Returns

`void`

#### Inherited from

[Subscription](RxJS.Subscription.md).[remove](RxJS.Subscription.md#remove)

___

### unsubscribe

▸ **unsubscribe**(): `void`

Disposes the resources held by the subscription. May, for instance, cancel
an ongoing Observable execution or cancel any other type of work that
started when the Subscription was created.

#### Returns

`void`

#### Overrides

[Subscription](RxJS.Subscription.md).[unsubscribe](RxJS.Subscription.md#unsubscribe)

___

### create

▸ `Static` **create**<`T`\>(`next?`, `error?`, `complete?`): [`Subscriber`](RxJS.Subscriber.md)<`T`\>

A static factory for a Subscriber, given a (potentially partial) definition
of an Observer.

**`Nocollapse`**

**`Deprecated`**

Do not use. Will be removed in v8. There is no replacement for this
method, and there is no reason to be creating instances of `Subscriber` directly.
If you have a specific use case, please file an issue.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `next?` | (`x?`: `T`) => `void` | The `next` callback of an Observer. |
| `error?` | (`e?`: `any`) => `void` | The `error` callback of an Observer. |
| `complete?` | () => `void` | The `complete` callback of an Observer. |

#### Returns

[`Subscriber`](RxJS.Subscriber.md)<`T`\>

A Subscriber wrapping the (partially defined)
Observer represented by the given arguments.
