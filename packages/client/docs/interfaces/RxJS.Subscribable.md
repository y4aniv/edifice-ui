[ode-ts-client](../README.md) / [Exports](../modules.md) / [RxJS](../modules/RxJS.md) / Subscribable

# Interface: Subscribable<T\>

[RxJS](../modules/RxJS.md).Subscribable

OBSERVABLE INTERFACES

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- **`Subscribable`**

  ↳ [`SubjectLike`](RxJS.SubjectLike.md)

## Implemented by

- [`Observable`](../classes/RxJS.Observable.md)

## Table of contents

### Methods

- [subscribe](RxJS.Subscribable.md#subscribe)

## Methods

### subscribe

▸ **subscribe**(`observer`): [`Unsubscribable`](RxJS.Unsubscribable.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `observer` | `Partial`<[`Observer`](RxJS.Observer.md)<`T`\>\> |

#### Returns

[`Unsubscribable`](RxJS.Unsubscribable.md)
