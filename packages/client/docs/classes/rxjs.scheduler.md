[ode-ts-client](../README.md) / [Exports](../modules.md) / [RxJS](../modules/rxjs.md) / Scheduler

# Class: Scheduler

[RxJS](../modules/rxjs.md).Scheduler

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

**`deprecated`** Scheduler is an internal implementation detail of RxJS, and
should not be used directly. Rather, create your own class and implement
[SchedulerLike](../interfaces/rxjs.schedulerlike.md). Will be made internal in v8.

## Implements

* [*SchedulerLike*](../interfaces/rxjs.schedulerlike.md)

## Table of contents

### Constructors

- [constructor](rxjs.scheduler.md#constructor)

### Properties

- [now](rxjs.scheduler.md#now)
- [now](rxjs.scheduler.md#now)

### Methods

- [schedule](rxjs.scheduler.md#schedule)

## Constructors

### constructor

\+ **new Scheduler**(`schedulerActionCtor`: *typeof* Action, `now?`: () => *number*): [*Scheduler*](rxjs.scheduler.md)

#### Parameters:

Name | Type |
:------ | :------ |
`schedulerActionCtor` | *typeof* Action |
`now?` | () => *number* |

**Returns:** [*Scheduler*](rxjs.scheduler.md)

## Properties

### now

• **now**: () => *number*

A getter method that returns a number representing the current time
(at the time this function was called) according to the scheduler's own
internal clock.

**`returns`** A number that represents the current time. May or may not
have a relation to wall-clock time. May or may not refer to a time unit
(e.g. milliseconds).

#### Type declaration:

▸ (): *number*

**Returns:** *number*

Implementation of: [SchedulerLike](../interfaces/rxjs.schedulerlike.md).[now](../interfaces/rxjs.schedulerlike.md#now)

___

### now

▪ `Static` **now**: () => *number*

#### Type declaration:

▸ (): *number*

**Returns:** *number*

## Methods

### schedule

▸ **schedule**<T\>(`work`: (`state?`: T) => *void*, `delay?`: *number*, `state?`: T): [*Subscription*](rxjs.subscription.md)

Schedules a function, `work`, for execution. May happen at some point in
the future, according to the `delay` parameter, if specified. May be passed
some context object, `state`, which will be passed to the `work` function.

The given arguments will be processed an stored as an Action object in a
queue of actions.

#### Type parameters:

Name |
:------ |
`T` |

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`work` | (`state?`: T) => *void* | A function representing a task, or some unit of work to be executed by the Scheduler.   |
`delay?` | *number* | - |
`state?` | T | - |

**Returns:** [*Subscription*](rxjs.subscription.md)

A subscription in order to be able to unsubscribe
the scheduled work.

Implementation of: [SchedulerLike](../interfaces/rxjs.schedulerlike.md)
