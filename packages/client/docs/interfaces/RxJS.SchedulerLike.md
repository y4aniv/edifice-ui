[ode-ts-client](../README.md) / [Exports](../modules.md) / [RxJS](../modules/RxJS.md) / SchedulerLike

# Interface: SchedulerLike

[RxJS](../modules/RxJS.md).SchedulerLike

SCHEDULER INTERFACES

## Hierarchy

- [`TimestampProvider`](RxJS.TimestampProvider.md)

  ↳ **`SchedulerLike`**

## Implemented by

- [`Scheduler`](../classes/RxJS.Scheduler.md)

## Table of contents

### Methods

- [now](RxJS.SchedulerLike.md#now)
- [schedule](RxJS.SchedulerLike.md#schedule)

## Methods

### now

▸ **now**(): `number`

Returns a timestamp as a number.

This is used by types like `ReplaySubject` or operators like `timestamp` to calculate
the amount of time passed between events.

#### Returns

`number`

#### Inherited from

[TimestampProvider](RxJS.TimestampProvider.md).[now](RxJS.TimestampProvider.md#now)

___

### schedule

▸ **schedule**<`T`\>(`work`, `delay?`, `state?`): [`Subscription`](../classes/RxJS.Subscription.md)

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `work` | (`this`: [`SchedulerAction`](RxJS.SchedulerAction.md)<`T`\>, `state?`: `T`) => `void` |
| `delay?` | `number` |
| `state?` | `T` |

#### Returns

[`Subscription`](../classes/RxJS.Subscription.md)
