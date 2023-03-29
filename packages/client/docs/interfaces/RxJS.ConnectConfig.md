[ode-ts-client](../README.md) / [Exports](../modules.md) / [RxJS](../modules/RxJS.md) / ConnectConfig

# Interface: ConnectConfig<T\>

[RxJS](../modules/RxJS.md).ConnectConfig

An object used to configure [connect](../modules/RxJS.md#connect) operator.

## Type parameters

| Name |
| :------ |
| `T` |

## Table of contents

### Properties

- [connector](RxJS.ConnectConfig.md#connector)

## Properties

### connector

• **connector**: () => [`SubjectLike`](RxJS.SubjectLike.md)<`T`\>

#### Type declaration

▸ (): [`SubjectLike`](RxJS.SubjectLike.md)<`T`\>

A factory function used to create the Subject through which the source
is multicast. By default, this creates a [Subject](../classes/RxJS.Subject.md).

##### Returns

[`SubjectLike`](RxJS.SubjectLike.md)<`T`\>
