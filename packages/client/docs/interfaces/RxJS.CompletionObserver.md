[ode-ts-client](../README.md) / [Exports](../modules.md) / [RxJS](../modules/RxJS.md) / CompletionObserver

# Interface: CompletionObserver<T\>

[RxJS](../modules/RxJS.md).CompletionObserver

## Type parameters

| Name |
| :------ |
| `T` |

## Table of contents

### Properties

- [closed](RxJS.CompletionObserver.md#closed)

### Methods

- [complete](RxJS.CompletionObserver.md#complete)
- [error](RxJS.CompletionObserver.md#error)
- [next](RxJS.CompletionObserver.md#next)

## Properties

### closed

• `Optional` **closed**: `boolean`

## Methods

### complete

▸ **complete**(): `void`

#### Returns

`void`

___

### error

▸ `Optional` **error**(`err`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `err` | `any` |

#### Returns

`void`

___

### next

▸ `Optional` **next**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |

#### Returns

`void`
