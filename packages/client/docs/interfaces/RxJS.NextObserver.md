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
- [complete](RxJS.NextObserver.md#complete)
- [error](RxJS.NextObserver.md#error)
- [next](RxJS.NextObserver.md#next)

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

• `Optional` **error**: (`err`: `any`) => `void`

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

• **next**: (`value`: `T`) => `void`

#### Type declaration

▸ (`value`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |

##### Returns

`void`
