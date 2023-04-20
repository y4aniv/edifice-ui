[ode-ts-client](../README.md) / [Exports](../modules.md) / [RxJS](../modules/RxJS.md) / TimeoutError

# Interface: TimeoutError<T, M\>

[RxJS](../modules/RxJS.md).TimeoutError

An error emitted when a timeout occurs.

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |
| `M` | `unknown` |

## Hierarchy

- `Error`

  ↳ **`TimeoutError`**

## Table of contents

### Properties

- [info](RxJS.TimeoutError.md#info)
- [message](RxJS.TimeoutError.md#message)
- [name](RxJS.TimeoutError.md#name)
- [stack](RxJS.TimeoutError.md#stack)

## Properties

### info

• **info**: ``null`` \| `TimeoutInfo`<`T`, `M`\>

The information provided to the error by the timeout
operation that created the error. Will be `null` if
used directly in non-RxJS code with an empty constructor.
(Note that using this constructor directly is not recommended,
you should create your own errors)

___

### message

• **message**: `string`

#### Inherited from

Error.message

___

### name

• **name**: `string`

#### Inherited from

Error.name

___

### stack

• `Optional` **stack**: `string`

#### Inherited from

Error.stack
