[ode-ts-client](../README.md) / [Exports](../modules.md) / [RxJS](../modules/RxJS.md) / Scheduler

# Class: Scheduler

[RxJS](../modules/RxJS.md).Scheduler

An execution context and a data structure to order tasks and schedule their
execution. Provides a notion of (potentially virtual) time, through the
`now()` getter method.

Each unit of work in a Scheduler is called an `Action`.

```ts
class Scheduler {
  now(): number;
  schedule(work, delay?, state?): Subscription;
}
```

**`Deprecated`**

Scheduler is an internal implementation detail of RxJS, and
should not be used directly. Rather, create your own class and implement
[SchedulerLike](../interfaces/RxJS.SchedulerLike.md). Will be made internal in v8.

## Implements

- [`SchedulerLike`](../interfaces/RxJS.SchedulerLike.md)

## Table of contents

### Constructors

- [constructor](RxJS.Scheduler.md#constructor)

### Properties

- [now](RxJS.Scheduler.md#now)
- [now](RxJS.Scheduler.md#now-1)

### Methods

- [schedule](RxJS.Scheduler.md#schedule)

## Constructors

### constructor

• **new Scheduler**(`schedulerActionCtor`, `now?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `schedulerActionCtor` | typeof `Action` |
| `now?` | () => `number` |

## Properties

### now

• **now**: () => `number`

#### Type declaration

▸ (): `number`

A getter method that returns a number representing the current time
(at the time this function was called) according to the scheduler's own
internal clock.

##### Returns

`number`

A number that represents the current time. May or may not
have a relation to wall-clock time. May or may not refer to a time unit
(e.g. milliseconds).

#### Implementation of

[SchedulerLike](../interfaces/RxJS.SchedulerLike.md).[now](../interfaces/RxJS.SchedulerLike.md#now)

___

### now

▪ `Static` **now**: () => `number`

#### Type declaration

▸ (): `number`

##### Returns

`number`

## Methods

### schedule

▸ **schedule**<`T`\>(`work`, `delay?`, `state?`): [`Subscription`](RxJS.Subscription.md)

Schedules a function, `work`, for execution. May happen at some point in
the future, according to the `delay` parameter, if specified. May be passed
some context object, `state`, which will be passed to the `work` function.

The given arguments will be processed an stored as an Action object in a
queue of actions.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `work` | (`this`: [`SchedulerAction`](../interfaces/RxJS.SchedulerAction.md)<`T`\>, `state?`: `T`) => `void` | A function representing a task, or some unit of work to be executed by the Scheduler. |
| `delay?` | `number` | Time to wait before executing the work, where the time unit is implicit and defined by the Scheduler itself. |
| `state?` | `T` | Some contextual data that the `work` function uses when called by the Scheduler. |

#### Returns

[`Subscription`](RxJS.Subscription.md)

A subscription in order to be able to unsubscribe
the scheduled work.

#### Implementation of

[SchedulerLike](../interfaces/RxJS.SchedulerLike.md).[schedule](../interfaces/RxJS.SchedulerLike.md#schedule)
