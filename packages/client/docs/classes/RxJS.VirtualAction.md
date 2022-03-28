[ode-ts-client](../README.md) / [Exports](../modules.md) / [RxJS](../modules/RxJS.md) / VirtualAction

# Class: VirtualAction<T\>

[RxJS](../modules/RxJS.md).VirtualAction

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- `AsyncAction`<`T`\>

  ↳ **`VirtualAction`**

## Table of contents

### Constructors

- [constructor](RxJS.VirtualAction.md#constructor)

### Properties

- [active](RxJS.VirtualAction.md#active)
- [closed](RxJS.VirtualAction.md#closed)
- [delay](RxJS.VirtualAction.md#delay)
- [id](RxJS.VirtualAction.md#id)
- [index](RxJS.VirtualAction.md#index)
- [pending](RxJS.VirtualAction.md#pending)
- [scheduler](RxJS.VirtualAction.md#scheduler)
- [state](RxJS.VirtualAction.md#state)
- [work](RxJS.VirtualAction.md#work)
- [EMPTY](RxJS.VirtualAction.md#empty)

### Methods

- [\_execute](RxJS.VirtualAction.md#_execute)
- [add](RxJS.VirtualAction.md#add)
- [execute](RxJS.VirtualAction.md#execute)
- [recycleAsyncId](RxJS.VirtualAction.md#recycleasyncid)
- [remove](RxJS.VirtualAction.md#remove)
- [requestAsyncId](RxJS.VirtualAction.md#requestasyncid)
- [schedule](RxJS.VirtualAction.md#schedule)
- [unsubscribe](RxJS.VirtualAction.md#unsubscribe)

## Constructors

### constructor

• **new VirtualAction**<`T`\>(`scheduler`, `work`, `index?`)

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `scheduler` | [`VirtualTimeScheduler`](RxJS.VirtualTimeScheduler.md) |
| `work` | (`this`: [`SchedulerAction`](../interfaces/RxJS.SchedulerAction.md)<`T`\>, `state?`: `T`) => `void` |
| `index?` | `number` |

#### Overrides

AsyncAction&lt;T\&gt;.constructor

## Properties

### active

• `Protected` **active**: `boolean`

___

### closed

• **closed**: `boolean`

A flag to indicate whether this Subscription has already been unsubscribed.

#### Inherited from

AsyncAction.closed

___

### delay

• **delay**: `number`

#### Inherited from

AsyncAction.delay

___

### id

• **id**: `any`

#### Inherited from

AsyncAction.id

___

### index

• `Protected` **index**: `number`

___

### pending

• `Protected` **pending**: `boolean`

#### Inherited from

AsyncAction.pending

___

### scheduler

• `Protected` **scheduler**: [`VirtualTimeScheduler`](RxJS.VirtualTimeScheduler.md)

#### Overrides

AsyncAction.scheduler

___

### state

• `Optional` **state**: `T`

#### Inherited from

AsyncAction.state

___

### work

• `Protected` **work**: (`this`: [`SchedulerAction`](../interfaces/RxJS.SchedulerAction.md)<`T`\>, `state?`: `T`) => `void`

#### Type declaration

▸ (`this`, `state?`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`SchedulerAction`](../interfaces/RxJS.SchedulerAction.md)<`T`\> |
| `state?` | `T` |

##### Returns

`void`

#### Overrides

AsyncAction.work

___

### EMPTY

▪ `Static` **EMPTY**: [`Subscription`](RxJS.Subscription.md)

**`nocollapse`**

#### Inherited from

AsyncAction.EMPTY

## Methods

### \_execute

▸ `Protected` **_execute**(`state`, `delay`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | `T` |
| `delay` | `number` |

#### Returns

`any`

#### Overrides

AsyncAction.\_execute

___

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

#### Inherited from

AsyncAction.add

___

### execute

▸ **execute**(`state`, `delay`): `any`

Immediately executes this action and the `work` it contains.

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | `T` |
| `delay` | `number` |

#### Returns

`any`

#### Inherited from

AsyncAction.execute

___

### recycleAsyncId

▸ `Protected` **recycleAsyncId**(`scheduler`, `id?`, `delay?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `scheduler` | [`VirtualTimeScheduler`](RxJS.VirtualTimeScheduler.md) |
| `id?` | `any` |
| `delay?` | `number` |

#### Returns

`any`

#### Overrides

AsyncAction.recycleAsyncId

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

#### Inherited from

AsyncAction.remove

___

### requestAsyncId

▸ `Protected` **requestAsyncId**(`scheduler`, `id?`, `delay?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `scheduler` | [`VirtualTimeScheduler`](RxJS.VirtualTimeScheduler.md) |
| `id?` | `any` |
| `delay?` | `number` |

#### Returns

`any`

#### Overrides

AsyncAction.requestAsyncId

___

### schedule

▸ **schedule**(`state?`, `delay?`): [`Subscription`](RxJS.Subscription.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `state?` | `T` |
| `delay?` | `number` |

#### Returns

[`Subscription`](RxJS.Subscription.md)

#### Overrides

AsyncAction.schedule

___

### unsubscribe

▸ **unsubscribe**(): `void`

#### Returns

`void`

#### Inherited from

AsyncAction.unsubscribe
