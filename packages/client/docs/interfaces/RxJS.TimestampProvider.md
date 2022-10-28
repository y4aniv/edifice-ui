[ode-ts-client](../README.md) / [Exports](../modules.md) / [RxJS](../modules/RxJS.md) / TimestampProvider

# Interface: TimestampProvider

[RxJS](../modules/RxJS.md).TimestampProvider

This is a type that provides a method to allow RxJS to create a numeric timestamp

## Hierarchy

- **`TimestampProvider`**

  ↳ [`SchedulerLike`](RxJS.SchedulerLike.md)

## Table of contents

### Methods

- [now](RxJS.TimestampProvider.md#now)

## Methods

### now

▸ **now**(): `number`

Returns a timestamp as a number.

This is used by types like `ReplaySubject` or operators like `timestamp` to calculate
the amount of time passed between events.

#### Returns

`number`
