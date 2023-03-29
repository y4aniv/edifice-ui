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
- [complete](RxJS.ErrorObserver.md#complete)
- [error](RxJS.ErrorObserver.md#error)
- [next](RxJS.ErrorObserver.md#next)

## Properties

### closed

• `Optional` **closed**: `boolean`

___

### complete

• `Optional` **complete**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

___

### error

• **error**: (`err`: `any`) => `void`

#### Type declaration

▸ (`err`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `err` | `any` |

##### Returns

`void`

___

### next

• `Optional` **next**: (`value`: `T`) => `void`

#### Type declaration

▸ (`value`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |

##### Returns

`void`
