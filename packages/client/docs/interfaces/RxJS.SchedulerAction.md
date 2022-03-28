[ode-ts-client](../README.md) / [Exports](../modules.md) / [RxJS](../modules/RxJS.md) / SchedulerAction

# Interface: SchedulerAction<T\>

[RxJS](../modules/RxJS.md).SchedulerAction

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

Adds a teardown to this subscription, so that teardown will be unsubscribed/called
when this subscription is unsubscribed. If this subscription is already {@link #closed},
because it has already been unsubscribed, then whatever teardown is passed to it
will automatically be executed (unless the teardown itself is also a closed subscription).

Closed Subscriptions cannot be added as teardowns to any subscription. Adding a closed
subscription to a any subscription will result in no operation. (A noop).

Adding a subscription to itself, or adding `null` or `undefined` will not perform any
operation at all. (A noop).

`Subscription` instances that are added to this instance will automatically remove themselves
if they are unsubscribed. Functions and [Unsubscribable](RxJS.Unsubscribable.md) objects that you wish to remove
will need to be removed manually with {@link #remove}

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `teardown` | [`TeardownLogic`](../modules/RxJS.md#teardownlogic) | The teardown logic to add to this subscription. |

#### Returns

`void`

#### Inherited from

[Subscription](../classes/RxJS.Subscription.md).[add](../classes/RxJS.Subscription.md#add)

___

### remove

▸ **remove**(`teardown`): `void`

Removes a teardown from this subscription that was previously added with the {@link #add} method.

Note that `Subscription` instances, when unsubscribed, will automatically remove themselves
from every other `Subscription` they have been added to. This means that using the `remove` method
is not a common thing and should be used thoughtfully.

If you add the same teardown instance of a function or an unsubscribable object to a `Subcription` instance
more than once, you will need to call `remove` the same number of times to remove all instances.

All teardown instances are removed to free up memory upon unsubscription.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `teardown` | [`Subscription`](../classes/RxJS.Subscription.md) \| [`Unsubscribable`](RxJS.Unsubscribable.md) \| () => `void` | The teardown to remove from this subscription |

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
