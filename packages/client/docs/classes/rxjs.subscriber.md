[ode-ts-client](../README.md) / [Exports](../modules.md) / [RxJS](../modules/rxjs.md) / Subscriber

# Class: Subscriber<T\>

[RxJS](../modules/rxjs.md).Subscriber

Implements the [Observer](../interfaces/rxjs.observer.md) interface and extends the
[Subscription](rxjs.subscription.md) class. While the [Observer](../interfaces/rxjs.observer.md) is the public API for
consuming the values of an [Observable](rxjs.observable.md), all Observers get converted to
a Subscriber, in order to provide Subscription-like capabilities such as
`unsubscribe`. Subscriber is a common type in RxJS, and crucial for
implementing operators, but it is rarely used as a public API.

## Type parameters

Name |
:------ |
`T` |

## Hierarchy

* [*Subscription*](rxjs.subscription.md)

  ↳ **Subscriber**

## Implements

* [*Observer*](../interfaces/rxjs.observer.md)<T\>

## Table of contents

### Constructors

- [constructor](rxjs.subscriber.md#constructor)

### Properties

- [closed](rxjs.subscriber.md#closed)
- [destination](rxjs.subscriber.md#destination)
- [isStopped](rxjs.subscriber.md#isstopped)
- [EMPTY](rxjs.subscriber.md#empty)

### Methods

- [\_complete](rxjs.subscriber.md#_complete)
- [\_error](rxjs.subscriber.md#_error)
- [\_next](rxjs.subscriber.md#_next)
- [add](rxjs.subscriber.md#add)
- [complete](rxjs.subscriber.md#complete)
- [error](rxjs.subscriber.md#error)
- [next](rxjs.subscriber.md#next)
- [remove](rxjs.subscriber.md#remove)
- [unsubscribe](rxjs.subscriber.md#unsubscribe)
- [create](rxjs.subscriber.md#create)

## Constructors

### constructor

\+ **new Subscriber**<T\>(`destination?`: [*Subscriber*](rxjs.subscriber.md)<any\> \| [*Observer*](../interfaces/rxjs.observer.md)<any\>): [*Subscriber*](rxjs.subscriber.md)<T\>

**`deprecated`** Internal implementation detail, do not use directly. Will be made internal in v8.
There is no reason to directly create an instance of Subscriber. This type is exported for typings reasons.

#### Type parameters:

Name |
:------ |
`T` |

#### Parameters:

Name | Type |
:------ | :------ |
`destination?` | [*Subscriber*](rxjs.subscriber.md)<any\> \| [*Observer*](../interfaces/rxjs.observer.md)<any\> |

**Returns:** [*Subscriber*](rxjs.subscriber.md)<T\>

Overrides: [Subscription](rxjs.subscription.md)

## Properties

### closed

• **closed**: *boolean*

A flag to indicate whether this Subscription has already been unsubscribed.

Inherited from: [Subscription](rxjs.subscription.md).[closed](rxjs.subscription.md#closed)

___

### destination

• `Protected` **destination**: [*Subscriber*](rxjs.subscriber.md)<any\> \| [*Observer*](../interfaces/rxjs.observer.md)<any\>

**`deprecated`** Internal implementation detail, do not use directly. Will be made internal in v8.

___

### isStopped

• `Protected` **isStopped**: *boolean*

**`deprecated`** Internal implementation detail, do not use directly. Will be made internal in v8.

___

### EMPTY

▪ `Static` **EMPTY**: [*Subscription*](rxjs.subscription.md)

**`nocollapse`** 

Inherited from: [Subscription](rxjs.subscription.md).[EMPTY](rxjs.subscription.md#empty)

## Methods

### \_complete

▸ `Protected`**_complete**(): *void*

**Returns:** *void*

___

### \_error

▸ `Protected`**_error**(`err`: *any*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`err` | *any* |

**Returns:** *void*

___

### \_next

▸ `Protected`**_next**(`value`: T): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`value` | T |

**Returns:** *void*

___

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
if they are unsubscribed. Functions and [Unsubscribable](../interfaces/rxjs.unsubscribable.md) objects that you wish to remove
will need to be removed manually with {@link #remove}

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`teardown` | [*TeardownLogic*](../modules/rxjs.md#teardownlogic) | The teardown logic to add to this subscription.    |

**Returns:** *void*

Inherited from: [Subscription](rxjs.subscription.md)

___

### complete

▸ **complete**(): *void*

The [Observer](../interfaces/rxjs.observer.md) callback to receive a valueless notification of type
`complete` from the Observable. Notifies the Observer that the Observable
has finished sending push-based notifications.

**Returns:** *void*

Implementation of: void

___

### error

▸ **error**(`err?`: *any*): *void*

The [Observer](../interfaces/rxjs.observer.md) callback to receive notifications of type `error` from
the Observable, with an attached `Error`. Notifies the Observer that
the Observable has experienced an error condition.

#### Parameters:

Name | Type |
:------ | :------ |
`err?` | *any* |

**Returns:** *void*

Implementation of: void

___

### next

▸ **next**(`value?`: T): *void*

The [Observer](../interfaces/rxjs.observer.md) callback to receive notifications of type `next` from
the Observable, with a value. The Observable may call this method 0 or more
times.

#### Parameters:

Name | Type |
:------ | :------ |
`value?` | T |

**Returns:** *void*

Implementation of: void

___

### remove

▸ **remove**(`teardown`: [*Subscription*](rxjs.subscription.md) \| [*Unsubscribable*](../interfaces/rxjs.unsubscribable.md) \| () => *void*): *void*

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
`teardown` | [*Subscription*](rxjs.subscription.md) \| [*Unsubscribable*](../interfaces/rxjs.unsubscribable.md) \| () => *void* | The teardown to remove from this subscription    |

**Returns:** *void*

Inherited from: [Subscription](rxjs.subscription.md)

___

### unsubscribe

▸ **unsubscribe**(): *void*

**Returns:** *void*

Overrides: [Subscription](rxjs.subscription.md)

___

### create

▸ `Static`**create**<T\>(`next?`: (`x?`: T) => *void*, `error?`: (`e?`: *any*) => *void*, `complete?`: () => *void*): [*Subscriber*](rxjs.subscriber.md)<T\>

A static factory for a Subscriber, given a (potentially partial) definition
of an Observer.

**`nocollapse`** 

**`deprecated`** Do not use. Will be removed in v8. There is no replacement for this
method, and there is no reason to be creating instances of `Subscriber` directly.
If you have a specific use case, please file an issue.

#### Type parameters:

Name |
:------ |
`T` |

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`next?` | (`x?`: T) => *void* | The `next` callback of an Observer.   |
`error?` | (`e?`: *any*) => *void* | The `error` callback of an Observer.   |
`complete?` | () => *void* | The `complete` callback of an Observer.   |

**Returns:** [*Subscriber*](rxjs.subscriber.md)<T\>

A Subscriber wrapping the (partially defined)
Observer represented by the given arguments.
