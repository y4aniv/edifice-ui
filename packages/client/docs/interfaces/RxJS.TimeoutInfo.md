[ode-ts-client](../README.md) / [Exports](../modules.md) / [RxJS](../modules/RxJS.md) / TimeoutInfo

# Interface: TimeoutInfo<T, M\>

[RxJS](../modules/RxJS.md).TimeoutInfo

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `M` | `unknown` |

## Table of contents

### Properties

- [lastValue](RxJS.TimeoutInfo.md#lastvalue)
- [meta](RxJS.TimeoutInfo.md#meta)
- [seen](RxJS.TimeoutInfo.md#seen)

## Properties

### lastValue

• `Readonly` **lastValue**: ``null`` \| `T`

The last message seen

___

### meta

• `Readonly` **meta**: `M`

Optional metadata that was provided to the timeout configuration.

___

### seen

• `Readonly` **seen**: `number`

The number of messages seen before the timeout
