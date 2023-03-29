[ode-ts-client](../README.md) / [Exports](../modules.md) / [RxJS](../modules/RxJS.md) / RepeatConfig

# Interface: RepeatConfig

[RxJS](../modules/RxJS.md).RepeatConfig

## Table of contents

### Properties

- [count](RxJS.RepeatConfig.md#count)
- [delay](RxJS.RepeatConfig.md#delay)

## Properties

### count

• `Optional` **count**: `number`

The number of times to repeat the source. Defaults to `Infinity`.

___

### delay

• `Optional` **delay**: `number` \| (`count`: `number`) => [`ObservableInput`](../modules/RxJS.md#observableinput)<`any`\>

If a `number`, will delay the repeat of the source by that number of milliseconds.
If a function, it will provide the number of times the source has been subscribed to,
and the return value should be a valid observable input that will notify when the source
should be repeated. If the notifier observable is empty, the result will complete.
