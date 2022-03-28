[ode-ts-client](../README.md) / [Exports](../modules.md) / IPromisified

# Interface: IPromisified<T\>

## Type parameters

| Name |
| :------ |
| `T` |

## Table of contents

### Properties

- [promise](IPromisified.md#promise)

### Methods

- [reject](IPromisified.md#reject)
- [resolve](IPromisified.md#resolve)

## Properties

### promise

• `Readonly` **promise**: `Promise`<`T`\>

## Methods

### reject

▸ **reject**(`reason?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `reason?` | `any` |

#### Returns

`void`

___

### resolve

▸ **resolve**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` \| `PromiseLike`<`T`\> |

#### Returns

`void`
