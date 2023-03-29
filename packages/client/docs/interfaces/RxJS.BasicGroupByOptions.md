[ode-ts-client](../README.md) / [Exports](../modules.md) / [RxJS](../modules/RxJS.md) / BasicGroupByOptions

# Interface: BasicGroupByOptions<K, T\>

[RxJS](../modules/RxJS.md).BasicGroupByOptions

## Type parameters

| Name |
| :------ |
| `K` |
| `T` |

## Table of contents

### Properties

- [connector](RxJS.BasicGroupByOptions.md#connector)
- [duration](RxJS.BasicGroupByOptions.md#duration)
- [element](RxJS.BasicGroupByOptions.md#element)

## Properties

### connector

• `Optional` **connector**: () => [`SubjectLike`](RxJS.SubjectLike.md)<`T`\>

#### Type declaration

▸ (): [`SubjectLike`](RxJS.SubjectLike.md)<`T`\>

##### Returns

[`SubjectLike`](RxJS.SubjectLike.md)<`T`\>

___

### duration

• `Optional` **duration**: (`grouped`: [`GroupedObservable`](RxJS.GroupedObservable.md)<`K`, `T`\>) => [`ObservableInput`](../modules/RxJS.md#observableinput)<`any`\>

#### Type declaration

▸ (`grouped`): [`ObservableInput`](../modules/RxJS.md#observableinput)<`any`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `grouped` | [`GroupedObservable`](RxJS.GroupedObservable.md)<`K`, `T`\> |

##### Returns

[`ObservableInput`](../modules/RxJS.md#observableinput)<`any`\>

___

### element

• `Optional` **element**: `undefined`
