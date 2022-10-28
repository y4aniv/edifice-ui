[ode-ts-client](../README.md) / [Exports](../modules.md) / [RxJS](../modules/RxJS.md) / NextNotification

# Interface: NextNotification<T\>

[RxJS](../modules/RxJS.md).NextNotification

A notification representing a "next" from an observable.
Can be used with [dematerialize](../modules/RxJS.md#dematerialize).

## Type parameters

| Name |
| :------ |
| `T` |

## Table of contents

### Properties

- [kind](RxJS.NextNotification.md#kind)
- [value](RxJS.NextNotification.md#value)

## Properties

### kind

• **kind**: ``"N"``

The kind of notification. Always "N"

___

### value

• **value**: `T`

The value of the notification.
