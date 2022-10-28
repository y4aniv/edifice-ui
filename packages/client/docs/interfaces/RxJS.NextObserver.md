[ode-ts-client](../README.md) / [Exports](../modules.md) / [RxJS](../modules/RxJS.md) / NextObserver

# Interface: NextObserver<T\>

[RxJS](../modules/RxJS.md).NextObserver

OBSERVER INTERFACES

## Type parameters

| Name |
| :------ |
| `T` |

## Table of contents

### Properties

- [closed](RxJS.NextObserver.md#closed)

### Methods

- [complete](RxJS.NextObserver.md#complete)
- [error](RxJS.NextObserver.md#error)
- [next](RxJS.NextObserver.md#next)

## Properties

### closed

• `Optional` **closed**: `boolean`

## Methods

### complete

▸ `Optional` **complete**(): `void`

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

▸ **next**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |

#### Returns

`void`
