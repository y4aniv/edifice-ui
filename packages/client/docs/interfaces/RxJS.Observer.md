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

### Properties

- [complete](RxJS.Observer.md#complete)
- [error](RxJS.Observer.md#error)
- [next](RxJS.Observer.md#next)

## Properties

### complete

• **complete**: () => `void`

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

• **next**: (`value`: `T`) => `void`

#### Type declaration

▸ (`value`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |

##### Returns

`void`
