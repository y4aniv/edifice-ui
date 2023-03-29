[ode-ts-client](../README.md) / [Exports](../modules.md) / [RxJS](../modules/RxJS.md) / RetryConfig

# Interface: RetryConfig

[RxJS](../modules/RxJS.md).RetryConfig

The [retry](../modules/RxJS.md#retry) operator configuration object. `retry` either accepts a `number`
or an object described by this interface.

## Table of contents

### Properties

- [count](RxJS.RetryConfig.md#count)
- [delay](RxJS.RetryConfig.md#delay)
- [resetOnSuccess](RxJS.RetryConfig.md#resetonsuccess)

## Properties

### count

• `Optional` **count**: `number`

The maximum number of times to retry. If `count` is omitted, `retry` will try to
resubscribe on errors infinite number of times.

___

### delay

• `Optional` **delay**: `number` \| (`error`: `any`, `retryCount`: `number`) => [`ObservableInput`](../modules/RxJS.md#observableinput)<`any`\>

The number of milliseconds to delay before retrying, OR a function to
return a notifier for delaying. If a function is given, that function should
return a notifier that, when it emits will retry the source. If the notifier
completes _without_ emitting, the resulting observable will complete without error,
if the notifier errors, the error will be pushed to the result.

___

### resetOnSuccess

• `Optional` **resetOnSuccess**: `boolean`

Whether or not to reset the retry counter when the retried subscription
emits its first value.
