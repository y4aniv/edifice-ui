[ode-ts-client](../README.md) / [Exports](../modules.md) / [RxJS](../modules/rxjs.md) / SchedulerAction

# Interface: SchedulerAction<T\>

[RxJS](../modules/rxjs.md).SchedulerAction

## Type parameters

Name |
:------ |
`T` |

## Hierarchy

* [*Subscription*](../classes/rxjs.subscription.md)

  ↳ **SchedulerAction**

## Table of contents

### Properties

- [closed](rxjs.scheduleraction.md#closed)

### Methods

- [add](rxjs.scheduleraction.md#add)
- [remove](rxjs.scheduleraction.md#remove)
- [schedule](rxjs.scheduleraction.md#schedule)
- [unsubscribe](rxjs.scheduleraction.md#unsubscribe)

## Properties

### closed

• **closed**: *boolean*

A flag to indicate whether this Subscription has already been unsubscribed.

Inherited from: [Subscription](../classes/rxjs.subscription.md).[closed](../classes/rxjs.subscription.md#closed)

## Methods

### add

▸ **add**(`teardown`: [*TeardownLogic*](../modules/rxjs.md#teardownlogic)): *void*

Adds a teardown to this subscription, so that teardown will be unsubscribed/called
when this subscription is unsubscribed. If this subscription is already {@link #closed},
because it has already been unsubscribed, then whatever teardown is passed to it
will automatically be executed (unless the teardown itself is also a closed subscription).

Closed Subscriptions cannot be added as teardowns to any subscription. Adding a closed
subscription to a any subscription will result in no operation. (A noop).

Adding a subscription to itself, or adding `null` or `undefined` will not perform any
operation at all. (A noop).

`Subscription` instances that are added to this instance will automatically remove themselves
if they are unsubscribed. Functions and [Unsubscribable](rxjs.unsubscribable.md) objects that you wish to remove
will need to be removed manually with {@link #remove}

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`teardown` | [*TeardownLogic*](../modules/rxjs.md#teardownlogic) | The teardown logic to add to this subscription.    |

**Returns:** *void*

Inherited from: [Subscription](../classes/rxjs.subscription.md)

___

### remove

▸ **remove**(`teardown`: [*Subscription*](../classes/rxjs.subscription.md) \| [*Unsubscribable*](rxjs.unsubscribable.md) \| () => *void*): *void*

Removes a teardown from this subscription that was previously added with the {@link #add} method.

Note that `Subscription` instances, when unsubscribed, will automatically remove themselves
from every other `Subscription` they have been added to. This means that using the `remove` method
is not a common thing and should be used thoughtfully.

If you add the same teardown instance of a function or an unsubscribable object to a `Subcription` instance
more than once, you will need to call `remove` the same number of times to remove all instances.

All teardown instances are removed to free up memory upon unsubscription.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`teardown` | [*Subscription*](../classes/rxjs.subscription.md) \| [*Unsubscribable*](rxjs.unsubscribable.md) \| () => *void* | The teardown to remove from this subscription    |

**Returns:** *void*

Inherited from: [Subscription](../classes/rxjs.subscription.md)

___

### schedule

▸ **schedule**(`state?`: T, `delay?`: *number*): [*Subscription*](../classes/rxjs.subscription.md)

#### Parameters:

Name | Type |
:------ | :------ |
`state?` | T |
`delay?` | *number* |

**Returns:** [*Subscription*](../classes/rxjs.subscription.md)

___

### unsubscribe

▸ **unsubscribe**(): *void*

Disposes the resources held by the subscription. May, for instance, cancel
an ongoing Observable execution or cancel any other type of work that
started when the Subscription was created.

**Returns:** *void*

Inherited from: [Subscription](../classes/rxjs.subscription.md)
