[ode-ts-client](../README.md) / [Exports](../modules.md) / [RxJS](../modules/RxJS.md) / Observer

# Interface: Observer<T\>

[RxJS](../modules/RxJS.md).Observer

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- **`Observer`**

  ↳ [`SubjectLike`](RxJS.SubjectLike.md)

## Implemented by

- [`Subscriber`](../classes/RxJS.Subscriber.md)

## Table of contents

### Methods

- [complete](RxJS.Observer.md#complete)
- [error](RxJS.Observer.md#error)
- [next](RxJS.Observer.md#next)

## Methods

### complete

▸ **complete**(): `void`

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

▸ **next**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |

#### Returns

`void`
