[ode-ts-client](../README.md) / [Exports](../modules.md) / [RxJS](../modules/rxjs.md) / TimestampProvider

# Interface: TimestampProvider

[RxJS](../modules/rxjs.md).TimestampProvider

This is a type that provides a method to allow RxJS to create a numeric timestamp

## Hierarchy

* **TimestampProvider**

  ↳ [*SchedulerLike*](rxjs.schedulerlike.md)

## Table of contents

### Methods

- [now](rxjs.timestampprovider.md#now)

## Methods

### now

▸ **now**(): *number*

Returns a timestamp as a number.

This is used by types like `ReplaySubject` or operators like `timestamp` to calculate
the amount of time passed between events.

**Returns:** *number*
