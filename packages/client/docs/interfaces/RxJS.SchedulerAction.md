[ode-ts-client](../README.md) / [Exports](../modules.md) / [RxJS](../modules/RxJS.md) / SchedulerAction

# Interface: SchedulerAction<T\>

[RxJS](../modules/RxJS.md).SchedulerAction

Represents a disposable resource, such as the execution of an Observable. A
Subscription has one important method, `unsubscribe`, that takes no argument
and just disposes the resource held by the subscription.

Additionally, subscriptions may be grouped together through the `add()`
method, which will attach a child Subscription to the current Subscription.
When a Subscription is unsubscribed, all its children (and its grandchildren)
will be unsubscribed as well.

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`Subscription`](../classes/RxJS.Subscription.md)

  ↳ **`SchedulerAction`**

## Table of contents

### Properties

- [closed](RxJS.SchedulerAction.md#closed)

### Methods

- [add](RxJS.SchedulerAction.md#add)
- [remove](RxJS.SchedulerAction.md#remove)
- [schedule](RxJS.SchedulerAction.md#schedule)
- [unsubscribe](RxJS.SchedulerAction.md#unsubscribe)

## Properties

### closed

• **closed**: `boolean`

A flag to indicate whether this Subscription has already been unsubscribed.

#### Inherited from

[Subscription](../classes/RxJS.Subscription.md).[closed](../classes/RxJS.Subscription.md#closed)

## Methods

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
if they are unsubscribed. Functions and [Unsubscribable](RxJS.Unsubscribable.md) objects that you wish to remove
will need to be removed manually with [#remove](../modules/RxJS.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `teardown` | [`TeardownLogic`](../modules/RxJS.md#teardownlogic) | The finalization logic to add to this subscription. |

#### Returns

`void`

#### Inherited from

[Subscription](../classes/RxJS.Subscription.md).[add](../classes/RxJS.Subscription.md#add)

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
| `teardown` | [`Subscription`](../classes/RxJS.Subscription.md) \| [`Unsubscribable`](RxJS.Unsubscribable.md) \| () => `void` | The finalizer to remove from this subscription |

#### Returns

`void`

#### Inherited from

[Subscription](../classes/RxJS.Subscription.md).[remove](../classes/RxJS.Subscription.md#remove)

___

### schedule

▸ **schedule**(`state?`, `delay?`): [`Subscription`](../classes/RxJS.Subscription.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `state?` | `T` |
| `delay?` | `number` |

#### Returns

[`Subscription`](../classes/RxJS.Subscription.md)

___

### unsubscribe

▸ **unsubscribe**(): `void`

Disposes the resources held by the subscription. May, for instance, cancel
an ongoing Observable execution or cancel any other type of work that
started when the Subscription was created.

#### Returns

`void`

#### Inherited from

[Subscription](../classes/RxJS.Subscription.md).[unsubscribe](../classes/RxJS.Subscription.md#unsubscribe)
