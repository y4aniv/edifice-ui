[ode-ts-client](../README.md) / [Exports](../modules.md) / [RxJS](../modules/RxJS.md) / TimeInterval

# Interface: TimeInterval<T\>

[RxJS](../modules/RxJS.md).TimeInterval

A value emitted and the amount of time since the last value was emitted.

Emitted by the `timeInterval` operator.

**`see`** [timeInterval](../modules/RxJS.md#timeinterval)

## Type parameters

| Name |
| :------ |
| `T` |

## Table of contents

### Properties

- [interval](RxJS.TimeInterval.md#interval)
- [value](RxJS.TimeInterval.md#value)

## Properties

### interval

• **interval**: `number`

The amount of time between this value's emission and the previous value's emission.
If this is the first emitted value, then it will be the amount of time since subscription
started.

___

### value

• **value**: `T`
