[ode-ts-client](../README.md) / [Exports](../modules.md) / [RxJS](../modules/RxJS.md) / GlobalConfig

# Interface: GlobalConfig

[RxJS](../modules/RxJS.md).GlobalConfig

The global configuration object for RxJS, used to configure things
like how to react on unhandled errors. Accessible via [config](../modules/RxJS.md#config)
object.

## Table of contents

### Properties

- [Promise](RxJS.GlobalConfig.md#promise)
- [onStoppedNotification](RxJS.GlobalConfig.md#onstoppednotification)
- [onUnhandledError](RxJS.GlobalConfig.md#onunhandlederror)
- [useDeprecatedNextContext](RxJS.GlobalConfig.md#usedeprecatednextcontext)
- [useDeprecatedSynchronousErrorHandling](RxJS.GlobalConfig.md#usedeprecatedsynchronouserrorhandling)

## Properties

### Promise

• `Optional` **Promise**: `PromiseConstructorLike`

The promise constructor used by default for {@link Observable#toPromise toPromise} and {@link Observable#forEach forEach}
methods.

**`deprecated`** As of version 8, RxJS will no longer support this sort of injection of a
Promise constructor. If you need a Promise implementation other than native promises,
please polyfill/patch Promise as you see appropriate. Will be removed in v8.

___

### onStoppedNotification

• **onStoppedNotification**: ``null`` \| (`notification`: [`ObservableNotification`](../modules/RxJS.md#observablenotification)<`any`\>, `subscriber`: [`Subscriber`](../classes/RxJS.Subscriber.md)<`any`\>) => `void`

A registration point for notifications that cannot be sent to subscribers because they
have completed, errored or have been explicitly unsubscribed. By default, next, complete
and error notifications sent to stopped subscribers are noops. However, sometimes callers
might want a different behavior. For example, with sources that attempt to report errors
to stopped subscribers, a caller can configure RxJS to throw an unhandled error instead.
This will _always_ be called asynchronously on another job in the runtime. This is because
we do not want errors thrown in this user-configured handler to interfere with the
behavior of the library.

___

### onUnhandledError

• **onUnhandledError**: ``null`` \| (`err`: `any`) => `void`

A registration point for unhandled errors from RxJS. These are errors that
cannot were not handled by consuming code in the usual subscription path. For
example, if you have this configured, and you subscribe to an observable without
providing an error handler, errors from that subscription will end up here. This
will _always_ be called asynchronously on another job in the runtime. This is because
we do not want errors thrown in this user-configured handler to interfere with the
behavior of the library.

___

### useDeprecatedNextContext

• **useDeprecatedNextContext**: `boolean`

If true, enables an as-of-yet undocumented feature from v5: The ability to access
`unsubscribe()` via `this` context in `next` functions created in observers passed
to `subscribe`.

This is being removed because the performance was severely problematic, and it could also cause
issues when types other than POJOs are passed to subscribe as subscribers, as they will likely have
their `this` context overwritten.

**`deprecated`** As of version 8, RxJS will no longer support altering the
context of next functions provided as part of an observer to Subscribe. Instead,
you will have access to a subscription or a signal or token that will allow you to do things like
unsubscribe and test closed status. Will be removed in v8.

___

### useDeprecatedSynchronousErrorHandling

• **useDeprecatedSynchronousErrorHandling**: `boolean`

If true, turns on synchronous error rethrowing, which is a deprecated behavior
in v6 and higher. This behavior enables bad patterns like wrapping a subscribe
call in a try/catch block. It also enables producer interference, a nasty bug
where a multicast can be broken for all observers by a downstream consumer with
an unhandled error. DO NOT USE THIS FLAG UNLESS IT'S NEEDED TO BUY TIME
FOR MIGRATION REASONS.

**`deprecated`** As of version 8, RxJS will no longer support synchronous throwing
of unhandled errors. All errors will be thrown on a separate call stack to prevent bad
behaviors described above. Will be removed in v8.
