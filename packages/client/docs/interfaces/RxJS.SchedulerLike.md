[ode-ts-client](../README.md) / [Exports](../modules.md) / [RxJS](../modules/rxjs.md) / SchedulerLike

# Interface: SchedulerLike

[RxJS](../modules/rxjs.md).SchedulerLike

SCHEDULER INTERFACES

## Hierarchy

* [*TimestampProvider*](rxjs.timestampprovider.md)

  ↳ **SchedulerLike**

## Implemented by

* [*Scheduler*](../classes/rxjs.scheduler.md)

## Table of contents

### Methods

- [now](rxjs.schedulerlike.md#now)
- [schedule](rxjs.schedulerlike.md#schedule)

## Methods

### now

▸ **now**(): *number*

Returns a timestamp as a number.

This is used by types like `ReplaySubject` or operators like `timestamp` to calculate
the amount of time passed between events.

**Returns:** *number*

Inherited from: [TimestampProvider](rxjs.timestampprovider.md)

___

### schedule

▸ **schedule**<T\>(`work`: (`state?`: T) => *void*, `delay?`: *number*, `state?`: T): [*Subscription*](../classes/rxjs.subscription.md)

#### Type parameters:

Name |
:------ |
`T` |

#### Parameters:

Name | Type |
:------ | :------ |
`work` | (`state?`: T) => *void* |
`delay?` | *number* |
`state?` | T |

**Returns:** [*Subscription*](../classes/rxjs.subscription.md)
