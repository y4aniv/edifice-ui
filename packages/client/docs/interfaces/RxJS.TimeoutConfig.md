[ode-ts-client](../README.md) / [Exports](../modules.md) / [RxJS](../modules/RxJS.md) / TimeoutConfig

# Interface: TimeoutConfig<T, O, M\>

[RxJS](../modules/RxJS.md).TimeoutConfig

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `O` | extends [`ObservableInput`](../modules/RxJS.md#observableinput)<`unknown`\> = [`ObservableInput`](../modules/RxJS.md#observableinput)<`T`\> |
| `M` | `unknown` |

## Table of contents

### Properties

- [each](RxJS.TimeoutConfig.md#each)
- [first](RxJS.TimeoutConfig.md#first)
- [meta](RxJS.TimeoutConfig.md#meta)
- [scheduler](RxJS.TimeoutConfig.md#scheduler)
- [with](RxJS.TimeoutConfig.md#with)

## Properties

### each

• `Optional` **each**: `number`

The time allowed between values from the source before timeout is triggered.

___

### first

• `Optional` **first**: `number` \| `Date`

The relative time as a `number` in milliseconds, or a specific time as a `Date` object,
by which the first value must arrive from the source before timeout is triggered.

___

### meta

• `Optional` **meta**: `M`

Optional additional metadata you can provide to code that handles
the timeout, will be provided through the [TimeoutError](RxJS.TimeoutError.md).
This can be used to help identify the source of a timeout or pass along
other information related to the timeout.

___

### scheduler

• `Optional` **scheduler**: [`SchedulerLike`](RxJS.SchedulerLike.md)

The scheduler to use with time-related operations within this operator. Defaults to [asyncScheduler](../modules/RxJS.md#asyncscheduler)

___

### with

• `Optional` **with**: (`info`: [`TimeoutInfo`](RxJS.TimeoutInfo.md)<`T`, `M`\>) => `O`

#### Type declaration

▸ (`info`): `O`

A factory used to create observable to switch to when timeout occurs. Provides
a [TimeoutInfo](RxJS.TimeoutInfo.md) about the source observable's emissions and what delay or
exact time triggered the timeout.

##### Parameters

| Name | Type |
| :------ | :------ |
| `info` | [`TimeoutInfo`](RxJS.TimeoutInfo.md)<`T`, `M`\> |

##### Returns

`O`
