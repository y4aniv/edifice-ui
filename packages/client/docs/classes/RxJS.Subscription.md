[ode-ts-client](../README.md) / [Exports](../modules.md) / [RxJS](../modules/RxJS.md) / Subscription

# Class: Subscription

[RxJS](../modules/RxJS.md).Subscription

Represents a disposable resource, such as the execution of an Observable. A
Subscription has one important method, `unsubscribe`, that takes no argument
and just disposes the resource held by the subscription.

Additionally, subscriptions may be grouped together through the `add()`
method, which will attach a child Subscription to the current Subscription.
When a Subscription is unsubscribed, all its children (and its grandchildren)
will be unsubscribed as well.

## Hierarchy

- **`Subscription`**

  ↳ [`Subscriber`](RxJS.Subscriber.md)

  ↳ [`SchedulerAction`](../interfaces/RxJS.SchedulerAction.md)

## Implements

- [`SubscriptionLike`](../interfaces/RxJS.SubscriptionLike.md)

## Table of contents

### Constructors

- [constructor](RxJS.Subscription.md#constructor)

### Properties

- [closed](RxJS.Subscription.md#closed)
- [EMPTY](RxJS.Subscription.md#empty)

### Methods

- [add](RxJS.Subscription.md#add)
- [remove](RxJS.Subscription.md#remove)
- [unsubscribe](RxJS.Subscription.md#unsubscribe)

## Constructors

### constructor

• **new Subscription**(`initialTeardown?`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `initialTeardown?` | () => `void` | A function executed first as part of the teardown process that is kicked off when {@link #unsubscribe} is called. |

## Properties

### closed

• **closed**: `boolean`

A flag to indicate whether this Subscription has already been unsubscribed.

#### Implementation of

[SubscriptionLike](../interfaces/RxJS.SubscriptionLike.md).[closed](../interfaces/RxJS.SubscriptionLike.md#closed)

___

### EMPTY

▪ `Static` **EMPTY**: [`Subscription`](RxJS.Subscription.md)

**`nocollapse`**

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
if they are unsubscribed. Functions and [Unsubscribable](../interfaces/RxJS.Unsubscribable.md) objects that you wish to remove
will need to be removed manually with {@link #remove}

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `teardown` | [`TeardownLogic`](../modules/RxJS.md#teardownlogic) | The teardown logic to add to this subscription. |

#### Returns

`void`

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
| `teardown` | [`Subscription`](RxJS.Subscription.md) \| [`Unsubscribable`](../interfaces/RxJS.Unsubscribable.md) \| () => `void` | The teardown to remove from this subscription |

#### Returns

`void`

___

### unsubscribe

▸ **unsubscribe**(): `void`

Disposes the resources held by the subscription. May, for instance, cancel
an ongoing Observable execution or cancel any other type of work that
started when the Subscription was created.

#### Returns

`void`

#### Implementation of

[SubscriptionLike](../interfaces/RxJS.SubscriptionLike.md).[unsubscribe](../interfaces/RxJS.SubscriptionLike.md#unsubscribe)
