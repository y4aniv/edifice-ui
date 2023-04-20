[ode-ts-client](../README.md) / [Exports](../modules.md) / [RxJS](../modules/RxJS.md) / ErrorObserver

# Interface: ErrorObserver<T\>

[RxJS](../modules/RxJS.md).ErrorObserver

## Type parameters

| Name |
| :------ |
| `T` |

## Table of contents

### Properties

- [closed](RxJS.ErrorObserver.md#closed)

### Methods

- [complete](RxJS.ErrorObserver.md#complete)
- [error](RxJS.ErrorObserver.md#error)
- [next](RxJS.ErrorObserver.md#next)

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

▸ **error**(`err`): `void`

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
