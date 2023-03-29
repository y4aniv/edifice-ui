[ode-ts-client](../README.md) / [Exports](../modules.md) / [RxJS](../modules/RxJS.md) / GroupByOptionsWithElement

# Interface: GroupByOptionsWithElement<K, E, T\>

[RxJS](../modules/RxJS.md).GroupByOptionsWithElement

## Type parameters

| Name |
| :------ |
| `K` |
| `E` |
| `T` |

## Table of contents

### Properties

- [connector](RxJS.GroupByOptionsWithElement.md#connector)
- [duration](RxJS.GroupByOptionsWithElement.md#duration)
- [element](RxJS.GroupByOptionsWithElement.md#element)

## Properties

### connector

• `Optional` **connector**: () => [`SubjectLike`](RxJS.SubjectLike.md)<`E`\>

#### Type declaration

▸ (): [`SubjectLike`](RxJS.SubjectLike.md)<`E`\>

##### Returns

[`SubjectLike`](RxJS.SubjectLike.md)<`E`\>

___

### duration

• `Optional` **duration**: (`grouped`: [`GroupedObservable`](RxJS.GroupedObservable.md)<`K`, `E`\>) => [`ObservableInput`](../modules/RxJS.md#observableinput)<`any`\>

#### Type declaration

▸ (`grouped`): [`ObservableInput`](../modules/RxJS.md#observableinput)<`any`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `grouped` | [`GroupedObservable`](RxJS.GroupedObservable.md)<`K`, `E`\> |

##### Returns

[`ObservableInput`](../modules/RxJS.md#observableinput)<`any`\>

___

### element

• **element**: (`value`: `T`) => `E`

#### Type declaration

▸ (`value`): `E`

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |

##### Returns

`E`
