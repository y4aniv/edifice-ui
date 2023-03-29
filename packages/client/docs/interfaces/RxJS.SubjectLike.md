[ode-ts-client](../README.md) / [Exports](../modules.md) / [RxJS](../modules/RxJS.md) / SubjectLike

# Interface: SubjectLike<T\>

[RxJS](../modules/RxJS.md).SubjectLike

OBSERVABLE INTERFACES

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`Observer`](RxJS.Observer.md)<`T`\>

- [`Subscribable`](RxJS.Subscribable.md)<`T`\>

  ↳ **`SubjectLike`**

## Table of contents

### Properties

- [complete](RxJS.SubjectLike.md#complete)
- [error](RxJS.SubjectLike.md#error)
- [next](RxJS.SubjectLike.md#next)

### Methods

- [subscribe](RxJS.SubjectLike.md#subscribe)

## Properties

### complete

• **complete**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Inherited from

[Observer](RxJS.Observer.md).[complete](RxJS.Observer.md#complete)

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

#### Inherited from

[Observer](RxJS.Observer.md).[error](RxJS.Observer.md#error)

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

#### Inherited from

[Observer](RxJS.Observer.md).[next](RxJS.Observer.md#next)

## Methods

### subscribe

▸ **subscribe**(`observer`): [`Unsubscribable`](RxJS.Unsubscribable.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `observer` | `Partial`<[`Observer`](RxJS.Observer.md)<`T`\>\> |

#### Returns

[`Unsubscribable`](RxJS.Unsubscribable.md)

#### Inherited from

[Subscribable](RxJS.Subscribable.md).[subscribe](RxJS.Subscribable.md#subscribe)
