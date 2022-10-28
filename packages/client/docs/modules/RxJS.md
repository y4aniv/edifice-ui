[ode-ts-client](../README.md) / [Exports](../modules.md) / RxJS

# Namespace: RxJS

## Table of contents

### Enumerations

- [NotificationKind](../enums/RxJS.NotificationKind.md)

### Classes

- [AsyncSubject](../classes/RxJS.AsyncSubject.md)
- [BehaviorSubject](../classes/RxJS.BehaviorSubject.md)
- [ConnectableObservable](../classes/RxJS.ConnectableObservable.md)
- [Notification](../classes/RxJS.Notification.md)
- [Observable](../classes/RxJS.Observable.md)
- [ReplaySubject](../classes/RxJS.ReplaySubject.md)
- [Scheduler](../classes/RxJS.Scheduler.md)
- [Subject](../classes/RxJS.Subject.md)
- [Subscriber](../classes/RxJS.Subscriber.md)
- [Subscription](../classes/RxJS.Subscription.md)
- [VirtualAction](../classes/RxJS.VirtualAction.md)
- [VirtualTimeScheduler](../classes/RxJS.VirtualTimeScheduler.md)

### Interfaces

- [ArgumentOutOfRangeError](../interfaces/RxJS.ArgumentOutOfRangeError.md)
- [CompleteNotification](../interfaces/RxJS.CompleteNotification.md)
- [CompletionObserver](../interfaces/RxJS.CompletionObserver.md)
- [Connectable](../interfaces/RxJS.Connectable.md)
- [EmptyError](../interfaces/RxJS.EmptyError.md)
- [ErrorNotification](../interfaces/RxJS.ErrorNotification.md)
- [ErrorObserver](../interfaces/RxJS.ErrorObserver.md)
- [GlobalConfig](../interfaces/RxJS.GlobalConfig.md)
- [GroupedObservable](../interfaces/RxJS.GroupedObservable.md)
- [InteropObservable](../interfaces/RxJS.InteropObservable.md)
- [MonoTypeOperatorFunction](../interfaces/RxJS.MonoTypeOperatorFunction.md)
- [NextNotification](../interfaces/RxJS.NextNotification.md)
- [NextObserver](../interfaces/RxJS.NextObserver.md)
- [NotFoundError](../interfaces/RxJS.NotFoundError.md)
- [ObjectUnsubscribedError](../interfaces/RxJS.ObjectUnsubscribedError.md)
- [Observer](../interfaces/RxJS.Observer.md)
- [Operator](../interfaces/RxJS.Operator.md)
- [OperatorFunction](../interfaces/RxJS.OperatorFunction.md)
- [ReadableStreamLike](../interfaces/RxJS.ReadableStreamLike.md)
- [SchedulerAction](../interfaces/RxJS.SchedulerAction.md)
- [SchedulerLike](../interfaces/RxJS.SchedulerLike.md)
- [SequenceError](../interfaces/RxJS.SequenceError.md)
- [SubjectLike](../interfaces/RxJS.SubjectLike.md)
- [Subscribable](../interfaces/RxJS.Subscribable.md)
- [SubscriptionLike](../interfaces/RxJS.SubscriptionLike.md)
- [TimeInterval](../interfaces/RxJS.TimeInterval.md)
- [TimeoutError](../interfaces/RxJS.TimeoutError.md)
- [Timestamp](../interfaces/RxJS.Timestamp.md)
- [TimestampProvider](../interfaces/RxJS.TimestampProvider.md)
- [UnaryFunction](../interfaces/RxJS.UnaryFunction.md)
- [Unsubscribable](../interfaces/RxJS.Unsubscribable.md)
- [UnsubscriptionError](../interfaces/RxJS.UnsubscriptionError.md)

### Type aliases

- [Cons](RxJS.md#cons)
- [FactoryOrValue](RxJS.md#factoryorvalue)
- [Falsy](RxJS.md#falsy)
- [Head](RxJS.md#head)
- [ObservableInput](RxJS.md#observableinput)
- [ObservableInputTuple](RxJS.md#observableinputtuple)
- [ObservableLike](RxJS.md#observablelike)
- [ObservableNotification](RxJS.md#observablenotification)
- [ObservedValueOf](RxJS.md#observedvalueof)
- [ObservedValueTupleFromArray](RxJS.md#observedvaluetuplefromarray)
- [ObservedValueUnionFromArray](RxJS.md#observedvalueunionfromarray)
- [ObservedValuesFromArray](RxJS.md#observedvaluesfromarray)
- [PartialObserver](RxJS.md#partialobserver)
- [SubscribableOrPromise](RxJS.md#subscribableorpromise)
- [Tail](RxJS.md#tail)
- [TeardownLogic](RxJS.md#teardownlogic)
- [TruthyTypesOf](RxJS.md#truthytypesof)
- [ValueFromArray](RxJS.md#valuefromarray)
- [ValueFromNotification](RxJS.md#valuefromnotification)

### Variables

- [ArgumentOutOfRangeError](RxJS.md#argumentoutofrangeerror)
- [EMPTY](RxJS.md#empty)
- [EmptyError](RxJS.md#emptyerror)
- [NEVER](RxJS.md#never)
- [NotFoundError](RxJS.md#notfounderror)
- [ObjectUnsubscribedError](RxJS.md#objectunsubscribederror)
- [SequenceError](RxJS.md#sequenceerror)
- [TimeoutError](RxJS.md#timeouterror)
- [UnsubscriptionError](RxJS.md#unsubscriptionerror)
- [animationFrame](RxJS.md#animationframe)
- [animationFrameScheduler](RxJS.md#animationframescheduler)
- [asap](RxJS.md#asap)
- [asapScheduler](RxJS.md#asapscheduler)
- [async](RxJS.md#async)
- [asyncScheduler](RxJS.md#asyncscheduler)
- [config](RxJS.md#config)
- [observable](RxJS.md#observable)
- [queue](RxJS.md#queue)
- [queueScheduler](RxJS.md#queuescheduler)

### Functions

- [animationFrames](RxJS.md#animationframes)
- [audit](RxJS.md#audit)
- [auditTime](RxJS.md#audittime)
- [bindCallback](RxJS.md#bindcallback)
- [bindNodeCallback](RxJS.md#bindnodecallback)
- [buffer](RxJS.md#buffer)
- [bufferCount](RxJS.md#buffercount)
- [bufferTime](RxJS.md#buffertime)
- [bufferToggle](RxJS.md#buffertoggle)
- [bufferWhen](RxJS.md#bufferwhen)
- [catchError](RxJS.md#catcherror)
- [combineAll](RxJS.md#combineall)
- [combineLatest](RxJS.md#combinelatest)
- [combineLatestAll](RxJS.md#combinelatestall)
- [combineLatestWith](RxJS.md#combinelatestwith)
- [concat](RxJS.md#concat)
- [concatAll](RxJS.md#concatall)
- [concatMap](RxJS.md#concatmap)
- [concatMapTo](RxJS.md#concatmapto)
- [concatWith](RxJS.md#concatwith)
- [connect](RxJS.md#connect)
- [connectable](RxJS.md#connectable)
- [count](RxJS.md#count)
- [debounce](RxJS.md#debounce)
- [debounceTime](RxJS.md#debouncetime)
- [defaultIfEmpty](RxJS.md#defaultifempty)
- [defer](RxJS.md#defer)
- [delay](RxJS.md#delay)
- [delayWhen](RxJS.md#delaywhen)
- [dematerialize](RxJS.md#dematerialize)
- [distinct](RxJS.md#distinct)
- [distinctUntilChanged](RxJS.md#distinctuntilchanged)
- [distinctUntilKeyChanged](RxJS.md#distinctuntilkeychanged)
- [elementAt](RxJS.md#elementat)
- [empty](RxJS.md#empty)
- [endWith](RxJS.md#endwith)
- [every](RxJS.md#every)
- [exhaust](RxJS.md#exhaust)
- [exhaustAll](RxJS.md#exhaustall)
- [exhaustMap](RxJS.md#exhaustmap)
- [expand](RxJS.md#expand)
- [filter](RxJS.md#filter)
- [finalize](RxJS.md#finalize)
- [find](RxJS.md#find)
- [findIndex](RxJS.md#findindex)
- [first](RxJS.md#first)
- [firstValueFrom](RxJS.md#firstvaluefrom)
- [flatMap](RxJS.md#flatmap)
- [forkJoin](RxJS.md#forkjoin)
- [from](RxJS.md#from)
- [fromEvent](RxJS.md#fromevent)
- [fromEventPattern](RxJS.md#fromeventpattern)
- [generate](RxJS.md#generate)
- [groupBy](RxJS.md#groupby)
- [identity](RxJS.md#identity)
- [ignoreElements](RxJS.md#ignoreelements)
- [iif](RxJS.md#iif)
- [interval](RxJS.md#interval)
- [isEmpty](RxJS.md#isempty)
- [isObservable](RxJS.md#isobservable)
- [last](RxJS.md#last)
- [lastValueFrom](RxJS.md#lastvaluefrom)
- [map](RxJS.md#map)
- [mapTo](RxJS.md#mapto)
- [materialize](RxJS.md#materialize)
- [max](RxJS.md#max)
- [merge](RxJS.md#merge)
- [mergeAll](RxJS.md#mergeall)
- [mergeMap](RxJS.md#mergemap)
- [mergeMapTo](RxJS.md#mergemapto)
- [mergeScan](RxJS.md#mergescan)
- [mergeWith](RxJS.md#mergewith)
- [min](RxJS.md#min)
- [multicast](RxJS.md#multicast)
- [never](RxJS.md#never)
- [noop](RxJS.md#noop)
- [observeOn](RxJS.md#observeon)
- [of](RxJS.md#of)
- [onErrorResumeNext](RxJS.md#onerrorresumenext)
- [pairs](RxJS.md#pairs)
- [pairwise](RxJS.md#pairwise)
- [partition](RxJS.md#partition)
- [pipe](RxJS.md#pipe)
- [pluck](RxJS.md#pluck)
- [publish](RxJS.md#publish)
- [publishBehavior](RxJS.md#publishbehavior)
- [publishLast](RxJS.md#publishlast)
- [publishReplay](RxJS.md#publishreplay)
- [race](RxJS.md#race)
- [raceWith](RxJS.md#racewith)
- [range](RxJS.md#range)
- [reduce](RxJS.md#reduce)
- [refCount](RxJS.md#refcount)
- [repeat](RxJS.md#repeat)
- [repeatWhen](RxJS.md#repeatwhen)
- [retry](RxJS.md#retry)
- [retryWhen](RxJS.md#retrywhen)
- [sample](RxJS.md#sample)
- [sampleTime](RxJS.md#sampletime)
- [scan](RxJS.md#scan)
- [scheduled](RxJS.md#scheduled)
- [sequenceEqual](RxJS.md#sequenceequal)
- [share](RxJS.md#share)
- [shareReplay](RxJS.md#sharereplay)
- [single](RxJS.md#single)
- [skip](RxJS.md#skip)
- [skipLast](RxJS.md#skiplast)
- [skipUntil](RxJS.md#skipuntil)
- [skipWhile](RxJS.md#skipwhile)
- [startWith](RxJS.md#startwith)
- [subscribeOn](RxJS.md#subscribeon)
- [switchAll](RxJS.md#switchall)
- [switchMap](RxJS.md#switchmap)
- [switchMapTo](RxJS.md#switchmapto)
- [switchScan](RxJS.md#switchscan)
- [take](RxJS.md#take)
- [takeLast](RxJS.md#takelast)
- [takeUntil](RxJS.md#takeuntil)
- [takeWhile](RxJS.md#takewhile)
- [tap](RxJS.md#tap)
- [throttle](RxJS.md#throttle)
- [throttleTime](RxJS.md#throttletime)
- [throwError](RxJS.md#throwerror)
- [throwIfEmpty](RxJS.md#throwifempty)
- [timeInterval](RxJS.md#timeinterval)
- [timeout](RxJS.md#timeout)
- [timeoutWith](RxJS.md#timeoutwith)
- [timer](RxJS.md#timer)
- [timestamp](RxJS.md#timestamp)
- [toArray](RxJS.md#toarray)
- [using](RxJS.md#using)
- [window](RxJS.md#window)
- [windowCount](RxJS.md#windowcount)
- [windowTime](RxJS.md#windowtime)
- [windowToggle](RxJS.md#windowtoggle)
- [windowWhen](RxJS.md#windowwhen)
- [withLatestFrom](RxJS.md#withlatestfrom)
- [zip](RxJS.md#zip)
- [zipAll](RxJS.md#zipall)
- [zipWith](RxJS.md#zipwith)

## Type aliases

### Cons

Ƭ **Cons**<`X`, `Y`\>: (`arg`: `X`, ...`rest`: `Y`) => `any` extends (...`args`: infer U) => `any` ? `U` : `never`

Constructs a new tuple with the specified type at the head.
If you declare `Cons<A, [B, C]>` you will get back `[A, B, C]`.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `X` | `X` |
| `Y` | extends readonly `any`[] |

___

### FactoryOrValue

Ƭ **FactoryOrValue**<`T`\>: `T` \| () => `T`

#### Type parameters

| Name |
| :------ |
| `T` |

___

### Falsy

Ƭ **Falsy**: ``null`` \| `undefined` \| ``false`` \| ``0`` \| ``0`` \| `0n` \| ``""``

A simple type to represent a gamut of "falsy" values... with a notable exception:
`NaN` is "falsy" however, it is not and cannot be typed via TypeScript. See
comments here: https://github.com/microsoft/TypeScript/issues/28682#issuecomment-707142417

___

### Head

Ƭ **Head**<`X`\>: (...`args`: `X`) => `any` extends (`arg`: infer U, ...`rest`: `any`[]) => `any` ? `U` : `never`

Extracts the head of a tuple.
If you declare `Head<[A, B, C]>` you will get back `A`.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `X` | extends readonly `any`[] |

___

### ObservableInput

Ƭ **ObservableInput**<`T`\>: [`Observable`](../classes/RxJS.Observable.md)<`T`\> \| [`InteropObservable`](../interfaces/RxJS.InteropObservable.md)<`T`\> \| `AsyncIterable`<`T`\> \| `PromiseLike`<`T`\> \| `ArrayLike`<`T`\> \| `Iterable`<`T`\> \| [`ReadableStreamLike`](../interfaces/RxJS.ReadableStreamLike.md)<`T`\>

Valid types that can be converted to observables.

#### Type parameters

| Name |
| :------ |
| `T` |

___

### ObservableInputTuple

Ƭ **ObservableInputTuple**<`T`\>: { [K in keyof T]: ObservableInput<T[K]\> }

Used to infer types from arguments to functions like [forkJoin](RxJS.md#forkjoin).
So that you can have `forkJoin([Observable<A>, PromiseLike<B>]): Observable<[A, B]>`
et al.

#### Type parameters

| Name |
| :------ |
| `T` |

___

### ObservableLike

Ƭ **ObservableLike**<`T`\>: [`InteropObservable`](../interfaces/RxJS.InteropObservable.md)<`T`\>

**`deprecated`** Renamed to [](../interfaces/RxJS.InteropObservable.md). Will be removed in v8.

#### Type parameters

| Name |
| :------ |
| `T` |

___

### ObservableNotification

Ƭ **ObservableNotification**<`T`\>: [`NextNotification`](../interfaces/RxJS.NextNotification.md)<`T`\> \| [`ErrorNotification`](../interfaces/RxJS.ErrorNotification.md) \| [`CompleteNotification`](../interfaces/RxJS.CompleteNotification.md)

Valid observable notification types.

#### Type parameters

| Name |
| :------ |
| `T` |

___

### ObservedValueOf

Ƭ **ObservedValueOf**<`O`\>: `O` extends [`ObservableInput`](RxJS.md#observableinput)<infer T\> ? `T` : `never`

Extracts the type from an `ObservableInput<any>`. If you have
`O extends ObservableInput<any>` and you pass in `Observable<number>`, or
`Promise<number>`, etc, it will type as `number`.

#### Type parameters

| Name |
| :------ |
| `O` |

___

### ObservedValueTupleFromArray

Ƭ **ObservedValueTupleFromArray**<`X`\>: { [K in keyof X]: ObservedValueOf<X[K]\> }

Extracts a tuple of element types from an `ObservableInput<any>[]`.
If you have `O extends ObservableInput<any>[]` and you pass in
`[Observable<string>, Observable<number>]` you would get back a type
of `[string, number]`.

#### Type parameters

| Name |
| :------ |
| `X` |

___

### ObservedValueUnionFromArray

Ƭ **ObservedValueUnionFromArray**<`X`\>: `X` extends [`ObservableInput`](RxJS.md#observableinput)<infer T\>[] ? `T` : `never`

Extracts a union of element types from an `ObservableInput<any>[]`.
If you have `O extends ObservableInput<any>[]` and you pass in
`Observable<string>[]` or `Promise<string>[]` you would get
back a type of `string`.
If you pass in `[Observable<string>, Observable<number>]` you would
get back a type of `string | number`.

#### Type parameters

| Name |
| :------ |
| `X` |

___

### ObservedValuesFromArray

Ƭ **ObservedValuesFromArray**<`X`\>: [`ObservedValueUnionFromArray`](RxJS.md#observedvalueunionfromarray)<`X`\>

**`deprecated`** Renamed to [ObservedValueUnionFromArray](RxJS.md#observedvalueunionfromarray). Will be removed in v8.

#### Type parameters

| Name |
| :------ |
| `X` |

___

### PartialObserver

Ƭ **PartialObserver**<`T`\>: [`NextObserver`](../interfaces/RxJS.NextObserver.md)<`T`\> \| [`ErrorObserver`](../interfaces/RxJS.ErrorObserver.md)<`T`\> \| [`CompletionObserver`](../interfaces/RxJS.CompletionObserver.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

___

### SubscribableOrPromise

Ƭ **SubscribableOrPromise**<`T`\>: [`Subscribable`](../interfaces/RxJS.Subscribable.md)<`T`\> \| [`Subscribable`](../interfaces/RxJS.Subscribable.md)<`never`\> \| `PromiseLike`<`T`\> \| [`InteropObservable`](../interfaces/RxJS.InteropObservable.md)<`T`\>

**`deprecated`** Do not use. Most likely you want to use `ObservableInput`. Will be removed in v8.

#### Type parameters

| Name |
| :------ |
| `T` |

___

### Tail

Ƭ **Tail**<`X`\>: (...`args`: `X`) => `any` extends (`arg`: `any`, ...`rest`: infer U) => `any` ? `U` : `never`

Extracts the tail of a tuple.
If you declare `Tail<[A, B, C]>` you will get back `[B, C]`.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `X` | extends readonly `any`[] |

___

### TeardownLogic

Ƭ **TeardownLogic**: [`Subscription`](../classes/RxJS.Subscription.md) \| [`Unsubscribable`](../interfaces/RxJS.Unsubscribable.md) \| () => `void` \| `void`

___

### TruthyTypesOf

Ƭ **TruthyTypesOf**<`T`\>: `T` extends [`Falsy`](RxJS.md#falsy) ? `never` : `T`

#### Type parameters

| Name |
| :------ |
| `T` |

___

### ValueFromArray

Ƭ **ValueFromArray**<`A`\>: `A` extends infer T[] ? `T` : `never`

Extracts the generic value from an Array type.
If you have `T extends Array<any>`, and pass a `string[]` to it,
`ValueFromArray<T>` will return the actual type of `string`.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends readonly `unknown`[] |

___

### ValueFromNotification

Ƭ **ValueFromNotification**<`T`\>: `T` extends { `kind`: ``"N"`` \| ``"E"`` \| ``"C"``  } ? `T` extends [`NextNotification`](../interfaces/RxJS.NextNotification.md)<`any`\> ? `T` extends { `value`: infer V  } ? `V` : `undefined` : `never` : `never`

Gets the value type from an [ObservableNotification](RxJS.md#observablenotification), if possible.

#### Type parameters

| Name |
| :------ |
| `T` |

## Variables

### ArgumentOutOfRangeError

• **ArgumentOutOfRangeError**: `ArgumentOutOfRangeErrorCtor`

An error thrown when an element was queried at a certain index of an
Observable, but no such index or position exists in that sequence.

**`see`** [elementAt](RxJS.md#elementat)

**`see`** [take](RxJS.md#take)

**`see`** [takeLast](RxJS.md#takelast)

___

### EMPTY

• `Const` **EMPTY**: [`Observable`](../classes/RxJS.Observable.md)<`never`\>

The same Observable instance returned by any call to [empty](RxJS.md#empty) without a
`scheduler`. It is preferable to use this over `empty()`.

<span class="informal">Just emits 'complete', and nothing else.</span>

![](empty.png)

## Examples

### Log complete notification

```ts
import { EMPTY } from 'rxjs';

EMPTY.subscribe({
  next: () => console.log('Next'),
  complete: () => console.log('Complete!')
});

// Outputs
// Complete!
```

___

### EmptyError

• **EmptyError**: `EmptyErrorCtor`

An error thrown when an Observable or a sequence was queried but has no
elements.

**`see`** [first](RxJS.md#first)

**`see`** [last](RxJS.md#last)

**`see`** [single](RxJS.md#single)

**`see`** [firstValueFrom](RxJS.md#firstvaluefrom)

**`see`** [lastValueFrom](RxJS.md#lastvaluefrom)

___

### NEVER

• `Const` **NEVER**: [`Observable`](../classes/RxJS.Observable.md)<`never`\>

An Observable that emits no items to the Observer and never completes.

![](never.png)

A simple Observable that emits neither values nor errors nor the completion
notification. It can be used for testing purposes or for composing with other
Observables. Please note that by never emitting a complete notification, this
Observable keeps the subscription from being disposed automatically.
Subscriptions need to be manually disposed.

##  Example
### Emit the number 7, then never emit anything else (not even complete)
```ts
import { NEVER } from 'rxjs';
import { startWith } from 'rxjs/operators';

function info() {
  console.log('Will not be called');
}
const result = NEVER.pipe(startWith(7));
result.subscribe(x => console.log(x), info, info);

```

**`see`** [Observable](../classes/RxJS.Observable.md)

**`see`** {@link index/EMPTY}

**`see`** [of](RxJS.md#of)

**`see`** [throwError](RxJS.md#throwerror)

___

### NotFoundError

• **NotFoundError**: `NotFoundErrorCtor`

An error thrown when a value or values are missing from an
observable sequence.

**`see`** {@link operators/single}

___

### ObjectUnsubscribedError

• **ObjectUnsubscribedError**: `ObjectUnsubscribedErrorCtor`

An error thrown when an action is invalid because the object has been
unsubscribed.

**`see`** [Subject](../classes/RxJS.Subject.md)

**`see`** [BehaviorSubject](../classes/RxJS.BehaviorSubject.md)

___

### SequenceError

• **SequenceError**: `SequenceErrorCtor`

An error thrown when something is wrong with the sequence of
values arriving on the observable.

**`see`** {@link operators/single}

___

### TimeoutError

• **TimeoutError**: `TimeoutErrorCtor`

An error thrown by the {@link operators/timeout} operator.

Provided so users can use as a type and do quality comparisons.
We recommend you do not subclass this or create instances of this class directly.
If you have need of a error representing a timeout, you should
create your own error class and use that.

**`see`** {@link operators/timeout}

___

### UnsubscriptionError

• **UnsubscriptionError**: `UnsubscriptionErrorCtor`

An error thrown when one or more errors have occurred during the
`unsubscribe` of a [Subscription](../classes/RxJS.Subscription.md).

___

### animationFrame

• `Const` **animationFrame**: `AnimationFrameScheduler`

**`deprecated`** Renamed to [animationFrameScheduler](RxJS.md#animationframescheduler). Will be removed in v8.

___

### animationFrameScheduler

• `Const` **animationFrameScheduler**: `AnimationFrameScheduler`

Animation Frame Scheduler

<span class="informal">Perform task when `window.requestAnimationFrame` would fire</span>

When `animationFrame` scheduler is used with delay, it will fall back to [asyncScheduler](RxJS.md#asyncscheduler) scheduler
behaviour.

Without delay, `animationFrame` scheduler can be used to create smooth browser animations.
It makes sure scheduled task will happen just before next browser content repaint,
thus performing animations as efficiently as possible.

## Example
Schedule div height animation
```ts
// html: <div style="background: #0ff;"></div>
import { animationFrameScheduler } from 'rxjs';

const div = document.querySelector('div');

animationFrameScheduler.schedule(function(height) {
  div.style.height = height + "px";

  this.schedule(height + 1);  // `this` references currently executing Action,
                              // which we reschedule with new state
}, 0, 0);

// You will see a div element growing in height
```

___

### asap

• `Const` **asap**: `AsapScheduler`

**`deprecated`** Renamed to [asapScheduler](RxJS.md#asapscheduler). Will be removed in v8.

___

### asapScheduler

• `Const` **asapScheduler**: `AsapScheduler`

Asap Scheduler

<span class="informal">Perform task as fast as it can be performed asynchronously</span>

`asap` scheduler behaves the same as [asyncScheduler](RxJS.md#asyncscheduler) scheduler when you use it to delay task
in time. If however you set delay to `0`, `asap` will wait for current synchronously executing
code to end and then it will try to execute given task as fast as possible.

`asap` scheduler will do its best to minimize time between end of currently executing code
and start of scheduled task. This makes it best candidate for performing so called "deferring".
Traditionally this was achieved by calling `setTimeout(deferredTask, 0)`, but that technique involves
some (although minimal) unwanted delay.

Note that using `asap` scheduler does not necessarily mean that your task will be first to process
after currently executing code. In particular, if some task was also scheduled with `asap` before,
that task will execute first. That being said, if you need to schedule task asynchronously, but
as soon as possible, `asap` scheduler is your best bet.

## Example
Compare async and asap scheduler<
```ts
import { asapScheduler, asyncScheduler } from 'rxjs';

asyncScheduler.schedule(() => console.log('async')); // scheduling 'async' first...
asapScheduler.schedule(() => console.log('asap'));

// Logs:
// "asap"
// "async"
// ... but 'asap' goes first!
```

___

### async

• `Const` **async**: `AsyncScheduler`

**`deprecated`** Renamed to [asyncScheduler](RxJS.md#asyncscheduler). Will be removed in v8.

___

### asyncScheduler

• `Const` **asyncScheduler**: `AsyncScheduler`

Async Scheduler

<span class="informal">Schedule task as if you used setTimeout(task, duration)</span>

`async` scheduler schedules tasks asynchronously, by putting them on the JavaScript
event loop queue. It is best used to delay tasks in time or to schedule tasks repeating
in intervals.

If you just want to "defer" task, that is to perform it right after currently
executing synchronous code ends (commonly achieved by `setTimeout(deferredTask, 0)`),
better choice will be the [asapScheduler](RxJS.md#asapscheduler) scheduler.

## Examples
Use async scheduler to delay task
```ts
import { asyncScheduler } from 'rxjs';

const task = () => console.log('it works!');

asyncScheduler.schedule(task, 2000);

// After 2 seconds logs:
// "it works!"
```

Use async scheduler to repeat task in intervals
```ts
import { asyncScheduler } from 'rxjs';

function task(state) {
  console.log(state);
  this.schedule(state + 1, 1000); // `this` references currently executing Action,
                                  // which we reschedule with new state and delay
}

asyncScheduler.schedule(task, 3000, 0);

// Logs:
// 0 after 3s
// 1 after 4s
// 2 after 5s
// 3 after 6s
```

___

### config

• `Const` **config**: [`GlobalConfig`](../interfaces/RxJS.GlobalConfig.md)

The [GlobalConfig](../interfaces/RxJS.GlobalConfig.md) object for RxJS. It is used to configure things
like how to react on unhandled errors.

___

### observable

• `Const` **observable**: `string` \| `symbol`

Symbol.observable or a string "@@observable". Used for interop

___

### queue

• `Const` **queue**: `QueueScheduler`

**`deprecated`** Renamed to [queueScheduler](RxJS.md#queuescheduler). Will be removed in v8.

___

### queueScheduler

• `Const` **queueScheduler**: `QueueScheduler`

Queue Scheduler

<span class="informal">Put every next task on a queue, instead of executing it immediately</span>

`queue` scheduler, when used with delay, behaves the same as [asyncScheduler](RxJS.md#asyncscheduler) scheduler.

When used without delay, it schedules given task synchronously - executes it right when
it is scheduled. However when called recursively, that is when inside the scheduled task,
another task is scheduled with queue scheduler, instead of executing immediately as well,
that task will be put on a queue and wait for current one to finish.

This means that when you execute task with `queue` scheduler, you are sure it will end
before any other task scheduled with that scheduler will start.

## Examples
Schedule recursively first, then do something
```ts
import { queueScheduler } from 'rxjs';

queueScheduler.schedule(() => {
  queueScheduler.schedule(() => console.log('second')); // will not happen now, but will be put on a queue

  console.log('first');
});

// Logs:
// "first"
// "second"
```

Reschedule itself recursively
```ts
import { queueScheduler } from 'rxjs';

queueScheduler.schedule(function(state) {
  if (state !== 0) {
    console.log('before', state);
    this.schedule(state - 1); // `this` references currently executing Action,
                              // which we reschedule with new state
    console.log('after', state);
  }
}, 0, 3);

// In scheduler that runs recursively, you would expect:
// "before", 3
// "before", 2
// "before", 1
// "after", 1
// "after", 2
// "after", 3

// But with queue it logs:
// "before", 3
// "after", 3
// "before", 2
// "after", 2
// "before", 1
// "after", 1
```

## Functions

### animationFrames

▸ **animationFrames**(`timestampProvider?`): [`Observable`](../classes/RxJS.Observable.md)<{ `elapsed`: `number` ; `timestamp`: `number`  }\>

An observable of animation frames

Emits the the amount of time elapsed since subscription and the timestamp on each animation frame.
Defaults to milliseconds provided to the requestAnimationFrame's callback. Does not end on its own.

Every subscription will start a separate animation loop. Since animation frames are always scheduled
by the browser to occur directly before a repaint, scheduling more than one animation frame synchronously
should not be much different or have more overhead than looping over an array of events during
a single animation frame. However, if for some reason the developer would like to ensure the
execution of animation-related handlers are all executed during the same task by the engine,
the `share` operator can be used.

This is useful for setting up animations with RxJS.

### Example

Tweening a div to move it on the screen

```ts
import { animationFrames } from 'rxjs';
import { map, takeWhile, endWith } from 'rxjs/operators';

function tween(start: number, end: number, duration: number) {
  const diff = end - start;
  return animationFrames().pipe(
    // Figure out what percentage of time has passed
    map(({elapsed}) => elapsed / duration),
    // Take the vector while less than 100%
    takeWhile(v => v < 1),
    // Finish with 100%
    endWith(1),
    // Calculate the distance traveled between start and end
    map(v => v * diff + start)
  );
}

// Setup a div for us to move around
const div = document.createElement('div');
document.body.appendChild(div);
div.style.position = 'absolute';
div.style.width = '40px';
div.style.height = '40px';
div.style.backgroundColor = 'lime';
div.style.transform = 'translate3d(10px, 0, 0)';

tween(10, 200, 4000).subscribe(x => {
  div.style.transform = `translate3d(${x}px, 0, 0)`;
});
```

### Example

Providing a custom timestamp provider

```ts
import { animationFrames, TimestampProvider } from 'rxjs';

// A custom timestamp provider
let now = 0;
const customTSProvider: TimestampProvider = {
  now() { return now++; }
};

const source$ = animationFrames(customTSProvider);

// Log increasing numbers 0...1...2... on every animation frame.
source$.subscribe(({ elapsed }) => console.log(elapsed));
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `timestampProvider?` | [`TimestampProvider`](../interfaces/RxJS.TimestampProvider.md) | An object with a `now` method that provides a numeric timestamp |

#### Returns

[`Observable`](../classes/RxJS.Observable.md)<{ `elapsed`: `number` ; `timestamp`: `number`  }\>

___

### audit

▸ **audit**<`T`\>(`durationSelector`): [`MonoTypeOperatorFunction`](../interfaces/RxJS.MonoTypeOperatorFunction.md)<`T`\>

Ignores source values for a duration determined by another Observable, then
emits the most recent value from the source Observable, then repeats this
process.

<span class="informal">It's like [auditTime](RxJS.md#audittime), but the silencing
duration is determined by a second Observable.</span>

![](audit.png)

`audit` is similar to `throttle`, but emits the last value from the silenced
time window, instead of the first value. `audit` emits the most recent value
from the source Observable on the output Observable as soon as its internal
timer becomes disabled, and ignores source values while the timer is enabled.
Initially, the timer is disabled. As soon as the first source value arrives,
the timer is enabled by calling the `durationSelector` function with the
source value, which returns the "duration" Observable. When the duration
Observable emits a value, the timer is disabled, then the most
recent source value is emitted on the output Observable, and this process
repeats for the next source value.

## Example

Emit clicks at a rate of at most one click per second
```ts
import { fromEvent, interval } from 'rxjs';
import { audit } from 'rxjs/operators'

const clicks = fromEvent(document, 'click');
const result = clicks.pipe(audit(ev => interval(1000)));
result.subscribe(x => console.log(x));
```

**`see`** [auditTime](RxJS.md#audittime)

**`see`** [debounce](RxJS.md#debounce)

**`see`** [delayWhen](RxJS.md#delaywhen)

**`see`** [sample](RxJS.md#sample)

**`see`** [throttle](RxJS.md#throttle)

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `durationSelector` | (`value`: `T`) => [`ObservableInput`](RxJS.md#observableinput)<`any`\> | A function that receives a value from the source Observable, for computing the silencing duration, returned as an Observable or a Promise. |

#### Returns

[`MonoTypeOperatorFunction`](../interfaces/RxJS.MonoTypeOperatorFunction.md)<`T`\>

A function that returns an Observable that performs rate-limiting of
emissions from the source Observable.

___

### auditTime

▸ **auditTime**<`T`\>(`duration`, `scheduler?`): [`MonoTypeOperatorFunction`](../interfaces/RxJS.MonoTypeOperatorFunction.md)<`T`\>

Ignores source values for `duration` milliseconds, then emits the most recent
value from the source Observable, then repeats this process.

<span class="informal">When it sees a source value, it ignores that plus
the next ones for `duration` milliseconds, and then it emits the most recent
value from the source.</span>

![](auditTime.png)

`auditTime` is similar to `throttleTime`, but emits the last value from the
silenced time window, instead of the first value. `auditTime` emits the most
recent value from the source Observable on the output Observable as soon as
its internal timer becomes disabled, and ignores source values while the
timer is enabled. Initially, the timer is disabled. As soon as the first
source value arrives, the timer is enabled. After `duration` milliseconds (or
the time unit determined internally by the optional `scheduler`) has passed,
the timer is disabled, then the most recent source value is emitted on the
output Observable, and this process repeats for the next source value.
Optionally takes a [SchedulerLike](../interfaces/RxJS.SchedulerLike.md) for managing timers.

## Example

Emit clicks at a rate of at most one click per second
```ts
import { fromEvent } from 'rxjs';
import { auditTime } from 'rxjs/operators';

const clicks = fromEvent(document, 'click');
const result = clicks.pipe(auditTime(1000));
result.subscribe(x => console.log(x));
```

**`see`** [audit](RxJS.md#audit)

**`see`** [debounceTime](RxJS.md#debouncetime)

**`see`** [delay](RxJS.md#delay)

**`see`** [sampleTime](RxJS.md#sampletime)

**`see`** [throttleTime](RxJS.md#throttletime)

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `duration` | `number` | Time to wait before emitting the most recent source value, measured in milliseconds or the time unit determined internally by the optional `scheduler`. |
| `scheduler?` | [`SchedulerLike`](../interfaces/RxJS.SchedulerLike.md) | - |

#### Returns

[`MonoTypeOperatorFunction`](../interfaces/RxJS.MonoTypeOperatorFunction.md)<`T`\>

A function that returns an Observable that performs rate-limiting of
emissions from the source Observable.

___

### bindCallback

▸ **bindCallback**(`callbackFunc`, `resultSelector`, `scheduler?`): (...`args`: `any`[]) => [`Observable`](../classes/RxJS.Observable.md)<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `callbackFunc` | (...`args`: `any`[]) => `void` |
| `resultSelector` | (...`args`: `any`[]) => `any` |
| `scheduler?` | [`SchedulerLike`](../interfaces/RxJS.SchedulerLike.md) |

#### Returns

`fn`

▸ (...`args`): [`Observable`](../classes/RxJS.Observable.md)<`any`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any`[] |

##### Returns

[`Observable`](../classes/RxJS.Observable.md)<`any`\>

▸ **bindCallback**<`A`, `R`\>(`callbackFunc`, `schedulerLike?`): (...`arg`: `A`) => [`Observable`](../classes/RxJS.Observable.md)<`R` extends [] ? `void` : `R` extends [`any`] ? `R`[``0``] : `R`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends readonly `unknown`[] |
| `R` | extends readonly `unknown`[] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `callbackFunc` | (...`args`: [...A[], (...`res`: `R`) => `void`]) => `void` |
| `schedulerLike?` | [`SchedulerLike`](../interfaces/RxJS.SchedulerLike.md) |

#### Returns

`fn`

▸ (...`arg`): [`Observable`](../classes/RxJS.Observable.md)<`R` extends [] ? `void` : `R` extends [`any`] ? `R`[``0``] : `R`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `...arg` | `A` |

##### Returns

[`Observable`](../classes/RxJS.Observable.md)<`R` extends [] ? `void` : `R` extends [`any`] ? `R`[``0``] : `R`\>

___

### bindNodeCallback

▸ **bindNodeCallback**(`callbackFunc`, `resultSelector`, `scheduler?`): (...`args`: `any`[]) => [`Observable`](../classes/RxJS.Observable.md)<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `callbackFunc` | (...`args`: `any`[]) => `void` |
| `resultSelector` | (...`args`: `any`[]) => `any` |
| `scheduler?` | [`SchedulerLike`](../interfaces/RxJS.SchedulerLike.md) |

#### Returns

`fn`

▸ (...`args`): [`Observable`](../classes/RxJS.Observable.md)<`any`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any`[] |

##### Returns

[`Observable`](../classes/RxJS.Observable.md)<`any`\>

▸ **bindNodeCallback**<`A`, `R`\>(`callbackFunc`, `schedulerLike?`): (...`arg`: `A`) => [`Observable`](../classes/RxJS.Observable.md)<`R` extends [] ? `void` : `R` extends [`any`] ? `R`[``0``] : `R`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends readonly `unknown`[] |
| `R` | extends readonly `unknown`[] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `callbackFunc` | (...`args`: [...A[], (`err`: `any`, ...`res`: `R`) => `void`]) => `void` |
| `schedulerLike?` | [`SchedulerLike`](../interfaces/RxJS.SchedulerLike.md) |

#### Returns

`fn`

▸ (...`arg`): [`Observable`](../classes/RxJS.Observable.md)<`R` extends [] ? `void` : `R` extends [`any`] ? `R`[``0``] : `R`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `...arg` | `A` |

##### Returns

[`Observable`](../classes/RxJS.Observable.md)<`R` extends [] ? `void` : `R` extends [`any`] ? `R`[``0``] : `R`\>

___

### buffer

▸ **buffer**<`T`\>(`closingNotifier`): [`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, `T`[]\>

Buffers the source Observable values until `closingNotifier` emits.

<span class="informal">Collects values from the past as an array, and emits
that array only when another Observable emits.</span>

![](buffer.png)

Buffers the incoming Observable values until the given `closingNotifier`
Observable emits a value, at which point it emits the buffer on the output
Observable and starts a new buffer internally, awaiting the next time
`closingNotifier` emits.

## Example

On every click, emit array of most recent interval events

```ts
import { fromEvent, interval } from 'rxjs';
import { buffer } from 'rxjs/operators';

const clicks = fromEvent(document, 'click');
const intervalEvents = interval(1000);
const buffered = intervalEvents.pipe(buffer(clicks));
buffered.subscribe(x => console.log(x));
```

**`see`** [bufferCount](RxJS.md#buffercount)

**`see`** [bufferTime](RxJS.md#buffertime)

**`see`** [bufferToggle](RxJS.md#buffertoggle)

**`see`** [bufferWhen](RxJS.md#bufferwhen)

**`see`** [window](RxJS.md#window)

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `closingNotifier` | [`Observable`](../classes/RxJS.Observable.md)<`any`\> | An Observable that signals the buffer to be emitted on the output Observable. |

#### Returns

[`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, `T`[]\>

A function that returns an Observable of buffers, which are arrays
of values.

___

### bufferCount

▸ **bufferCount**<`T`\>(`bufferSize`, `startBufferEvery?`): [`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, `T`[]\>

Buffers the source Observable values until the size hits the maximum
`bufferSize` given.

<span class="informal">Collects values from the past as an array, and emits
that array only when its size reaches `bufferSize`.</span>

![](bufferCount.png)

Buffers a number of values from the source Observable by `bufferSize` then
emits the buffer and clears it, and starts a new buffer each
`startBufferEvery` values. If `startBufferEvery` is not provided or is
`null`, then new buffers are started immediately at the start of the source
and when each buffer closes and is emitted.

## Examples

Emit the last two click events as an array

```ts
import { fromEvent } from 'rxjs';
import { bufferCount } from 'rxjs/operators';

const clicks = fromEvent(document, 'click');
const buffered = clicks.pipe(bufferCount(2));
buffered.subscribe(x => console.log(x));
```

On every click, emit the last two click events as an array

```ts
import { fromEvent } from 'rxjs';
import { bufferCount } from 'rxjs/operators';

const clicks = fromEvent(document, 'click');
const buffered = clicks.pipe(bufferCount(2, 1));
buffered.subscribe(x => console.log(x));
```

**`see`** [buffer](RxJS.md#buffer)

**`see`** [bufferTime](RxJS.md#buffertime)

**`see`** [bufferToggle](RxJS.md#buffertoggle)

**`see`** [bufferWhen](RxJS.md#bufferwhen)

**`see`** [pairwise](RxJS.md#pairwise)

**`see`** [windowCount](RxJS.md#windowcount)

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `bufferSize` | `number` | The maximum size of the buffer emitted. |
| `startBufferEvery?` | ``null`` \| `number` | - |

#### Returns

[`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, `T`[]\>

A function that returns an Observable of arrays of buffered values.

___

### bufferTime

▸ **bufferTime**<`T`\>(`bufferTimeSpan`, `scheduler?`): [`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, `T`[]\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `bufferTimeSpan` | `number` |
| `scheduler?` | [`SchedulerLike`](../interfaces/RxJS.SchedulerLike.md) |

#### Returns

[`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, `T`[]\>

▸ **bufferTime**<`T`\>(`bufferTimeSpan`, `bufferCreationInterval`, `scheduler?`): [`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, `T`[]\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `bufferTimeSpan` | `number` |
| `bufferCreationInterval` | `undefined` \| ``null`` \| `number` |
| `scheduler?` | [`SchedulerLike`](../interfaces/RxJS.SchedulerLike.md) |

#### Returns

[`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, `T`[]\>

▸ **bufferTime**<`T`\>(`bufferTimeSpan`, `bufferCreationInterval`, `maxBufferSize`, `scheduler?`): [`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, `T`[]\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `bufferTimeSpan` | `number` |
| `bufferCreationInterval` | `undefined` \| ``null`` \| `number` |
| `maxBufferSize` | `number` |
| `scheduler?` | [`SchedulerLike`](../interfaces/RxJS.SchedulerLike.md) |

#### Returns

[`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, `T`[]\>

___

### bufferToggle

▸ **bufferToggle**<`T`, `O`\>(`openings`, `closingSelector`): [`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, `T`[]\>

Buffers the source Observable values starting from an emission from
`openings` and ending when the output of `closingSelector` emits.

<span class="informal">Collects values from the past as an array. Starts
collecting only when `opening` emits, and calls the `closingSelector`
function to get an Observable that tells when to close the buffer.</span>

![](bufferToggle.png)

Buffers values from the source by opening the buffer via signals from an
Observable provided to `openings`, and closing and sending the buffers when
a Subscribable or Promise returned by the `closingSelector` function emits.

## Example

Every other second, emit the click events from the next 500ms

```ts
import { fromEvent, interval, EMPTY } from 'rxjs';
import { bufferToggle } from 'rxjs/operators';

const clicks = fromEvent(document, 'click');
const openings = interval(1000);
const buffered = clicks.pipe(bufferToggle(openings, i =>
  i % 2 ? interval(500) : EMPTY
));
buffered.subscribe(x => console.log(x));
```

**`see`** [buffer](RxJS.md#buffer)

**`see`** [bufferCount](RxJS.md#buffercount)

**`see`** [bufferTime](RxJS.md#buffertime)

**`see`** [bufferWhen](RxJS.md#bufferwhen)

**`see`** [windowToggle](RxJS.md#windowtoggle)

#### Type parameters

| Name |
| :------ |
| `T` |
| `O` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `openings` | [`ObservableInput`](RxJS.md#observableinput)<`O`\> | A Subscribable or Promise of notifications to start new buffers. |
| `closingSelector` | (`value`: `O`) => [`ObservableInput`](RxJS.md#observableinput)<`any`\> | A function that takes the value emitted by the `openings` observable and returns a Subscribable or Promise, which, when it emits, signals that the associated buffer should be emitted and cleared. |

#### Returns

[`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, `T`[]\>

A function that returns an Observable of arrays of buffered values.

___

### bufferWhen

▸ **bufferWhen**<`T`\>(`closingSelector`): [`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, `T`[]\>

Buffers the source Observable values, using a factory function of closing
Observables to determine when to close, emit, and reset the buffer.

<span class="informal">Collects values from the past as an array. When it
starts collecting values, it calls a function that returns an Observable that
tells when to close the buffer and restart collecting.</span>

![](bufferWhen.png)

Opens a buffer immediately, then closes the buffer when the observable
returned by calling `closingSelector` function emits a value. When it closes
the buffer, it immediately opens a new buffer and repeats the process.

## Example

Emit an array of the last clicks every [1-5] random seconds

```ts
import { fromEvent, interval } from 'rxjs';
import { bufferWhen } from 'rxjs/operators';

const clicks = fromEvent(document, 'click');
const buffered = clicks.pipe(bufferWhen(() =>
  interval(1000 + Math.random() * 4000)
));
buffered.subscribe(x => console.log(x));
```

**`see`** [buffer](RxJS.md#buffer)

**`see`** [bufferCount](RxJS.md#buffercount)

**`see`** [bufferTime](RxJS.md#buffertime)

**`see`** [bufferToggle](RxJS.md#buffertoggle)

**`see`** [windowWhen](RxJS.md#windowwhen)

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `closingSelector` | () => [`ObservableInput`](RxJS.md#observableinput)<`any`\> | A function that takes no arguments and returns an Observable that signals buffer closure. |

#### Returns

[`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, `T`[]\>

A function that returns an Observable of arrays of buffered values.

___

### catchError

▸ **catchError**<`T`, `O`\>(`selector`): [`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, `T` \| [`ObservedValueOf`](RxJS.md#observedvalueof)<`O`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `O` | extends [`ObservableInput`](RxJS.md#observableinput)<`any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | (`err`: `any`, `caught`: [`Observable`](../classes/RxJS.Observable.md)<`T`\>) => `O` |

#### Returns

[`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, `T` \| [`ObservedValueOf`](RxJS.md#observedvalueof)<`O`\>\>

___

### combineAll

▸ **combineAll**<`T`\>(): [`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<[`ObservableInput`](RxJS.md#observableinput)<`T`\>, `T`[]\>

**`deprecated`** Renamed to [combineLatestAll](RxJS.md#combinelatestall). Will be removed in v8.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<[`ObservableInput`](RxJS.md#observableinput)<`T`\>, `T`[]\>

▸ **combineAll**<`T`\>(): [`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`any`, `T`[]\>

**`deprecated`** Renamed to [combineLatestAll](RxJS.md#combinelatestall). Will be removed in v8.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`any`, `T`[]\>

▸ **combineAll**<`T`, `R`\>(`project`): [`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<[`ObservableInput`](RxJS.md#observableinput)<`T`\>, `R`\>

**`deprecated`** Renamed to [combineLatestAll](RxJS.md#combinelatestall). Will be removed in v8.

#### Type parameters

| Name |
| :------ |
| `T` |
| `R` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `project` | (...`values`: `T`[]) => `R` |

#### Returns

[`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<[`ObservableInput`](RxJS.md#observableinput)<`T`\>, `R`\>

▸ **combineAll**<`R`\>(`project`): [`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`any`, `R`\>

**`deprecated`** Renamed to [combineLatestAll](RxJS.md#combinelatestall). Will be removed in v8.

#### Type parameters

| Name |
| :------ |
| `R` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `project` | (...`values`: `any`[]) => `R` |

#### Returns

[`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`any`, `R`\>

___

### combineLatest

▸ **combineLatest**<`T`\>(`arg`): [`Observable`](../classes/RxJS.Observable.md)<`unknown`\>

You have passed `any` here, we can't figure out if it is
an array or an object, so you're getting `unknown`. Use better types.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends typeof `anyCatcherSymbol` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg` | `T` | Something typed as `any` |

#### Returns

[`Observable`](../classes/RxJS.Observable.md)<`unknown`\>

▸ **combineLatest**(`sources`): [`Observable`](../classes/RxJS.Observable.md)<`never`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `sources` | [] |

#### Returns

[`Observable`](../classes/RxJS.Observable.md)<`never`\>

▸ **combineLatest**<`A`\>(`sources`): [`Observable`](../classes/RxJS.Observable.md)<`A`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends readonly `unknown`[] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `sources` | readonly [[`ObservableInputTuple`](RxJS.md#observableinputtuple)<`A`\>] |

#### Returns

[`Observable`](../classes/RxJS.Observable.md)<`A`\>

▸ **combineLatest**<`A`, `R`\>(`sources`, `resultSelector`, `scheduler`): [`Observable`](../classes/RxJS.Observable.md)<`R`\>

**`deprecated`** The `scheduler` parameter will be removed in v8. Use `scheduled` and `combineLatestAll`. Details: https://rxjs.dev/deprecations/scheduler-argument

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends readonly `unknown`[] |
| `R` | `R` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `sources` | readonly [[`ObservableInputTuple`](RxJS.md#observableinputtuple)<`A`\>] |
| `resultSelector` | (...`values`: `A`) => `R` |
| `scheduler` | [`SchedulerLike`](../interfaces/RxJS.SchedulerLike.md) |

#### Returns

[`Observable`](../classes/RxJS.Observable.md)<`R`\>

▸ **combineLatest**<`A`, `R`\>(`sources`, `resultSelector`): [`Observable`](../classes/RxJS.Observable.md)<`R`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends readonly `unknown`[] |
| `R` | `R` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `sources` | readonly [[`ObservableInputTuple`](RxJS.md#observableinputtuple)<`A`\>] |
| `resultSelector` | (...`values`: `A`) => `R` |

#### Returns

[`Observable`](../classes/RxJS.Observable.md)<`R`\>

▸ **combineLatest**<`A`\>(`sources`, `scheduler`): [`Observable`](../classes/RxJS.Observable.md)<`A`\>

**`deprecated`** The `scheduler` parameter will be removed in v8. Use `scheduled` and `combineLatestAll`. Details: https://rxjs.dev/deprecations/scheduler-argument

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends readonly `unknown`[] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `sources` | readonly [[`ObservableInputTuple`](RxJS.md#observableinputtuple)<`A`\>] |
| `scheduler` | [`SchedulerLike`](../interfaces/RxJS.SchedulerLike.md) |

#### Returns

[`Observable`](../classes/RxJS.Observable.md)<`A`\>

▸ **combineLatest**<`A`\>(...`sources`): [`Observable`](../classes/RxJS.Observable.md)<`A`\>

**`deprecated`** Pass an array of sources instead. The rest-parameters signature will be removed in v8. Details: https://rxjs.dev/deprecations/array-argument

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends readonly `unknown`[] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...sources` | [...ObservableInputTuple<A\>[]] |

#### Returns

[`Observable`](../classes/RxJS.Observable.md)<`A`\>

▸ **combineLatest**<`A`, `R`\>(...`sourcesAndResultSelectorAndScheduler`): [`Observable`](../classes/RxJS.Observable.md)<`R`\>

**`deprecated`** The `scheduler` parameter will be removed in v8. Use `scheduled` and `combineLatestAll`. Details: https://rxjs.dev/deprecations/scheduler-argument

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends readonly `unknown`[] |
| `R` | `R` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...sourcesAndResultSelectorAndScheduler` | [...ObservableInputTuple<A\>[], (...`values`: `A`) => `R`, [`SchedulerLike`](../interfaces/RxJS.SchedulerLike.md)] |

#### Returns

[`Observable`](../classes/RxJS.Observable.md)<`R`\>

▸ **combineLatest**<`A`, `R`\>(...`sourcesAndResultSelector`): [`Observable`](../classes/RxJS.Observable.md)<`R`\>

**`deprecated`** Pass an array of sources instead. The rest-parameters signature will be removed in v8. Details: https://rxjs.dev/deprecations/array-argument

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends readonly `unknown`[] |
| `R` | `R` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...sourcesAndResultSelector` | [...ObservableInputTuple<A\>[], (...`values`: `A`) => `R`] |

#### Returns

[`Observable`](../classes/RxJS.Observable.md)<`R`\>

▸ **combineLatest**<`A`\>(...`sourcesAndScheduler`): [`Observable`](../classes/RxJS.Observable.md)<`A`\>

**`deprecated`** The `scheduler` parameter will be removed in v8. Use `scheduled` and `combineLatestAll`. Details: https://rxjs.dev/deprecations/scheduler-argument

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends readonly `unknown`[] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...sourcesAndScheduler` | [...ObservableInputTuple<A\>[], [`SchedulerLike`](../interfaces/RxJS.SchedulerLike.md)] |

#### Returns

[`Observable`](../classes/RxJS.Observable.md)<`A`\>

▸ **combineLatest**(`sourcesObject`): [`Observable`](../classes/RxJS.Observable.md)<`never`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `sourcesObject` | `Object` |

#### Returns

[`Observable`](../classes/RxJS.Observable.md)<`never`\>

▸ **combineLatest**<`T`\>(`sourcesObject`): [`Observable`](../classes/RxJS.Observable.md)<{ [K in keyof T]: ObservedValueOf<T[K]\> }\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Record`<`string`, [`ObservableInput`](RxJS.md#observableinput)<`any`\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `sourcesObject` | `T` |

#### Returns

[`Observable`](../classes/RxJS.Observable.md)<{ [K in keyof T]: ObservedValueOf<T[K]\> }\>

___

### combineLatestAll

▸ **combineLatestAll**<`T`\>(): [`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<[`ObservableInput`](RxJS.md#observableinput)<`T`\>, `T`[]\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<[`ObservableInput`](RxJS.md#observableinput)<`T`\>, `T`[]\>

▸ **combineLatestAll**<`T`\>(): [`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`any`, `T`[]\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`any`, `T`[]\>

▸ **combineLatestAll**<`T`, `R`\>(`project`): [`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<[`ObservableInput`](RxJS.md#observableinput)<`T`\>, `R`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `R` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `project` | (...`values`: `T`[]) => `R` |

#### Returns

[`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<[`ObservableInput`](RxJS.md#observableinput)<`T`\>, `R`\>

▸ **combineLatestAll**<`R`\>(`project`): [`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`any`, `R`\>

#### Type parameters

| Name |
| :------ |
| `R` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `project` | (...`values`: `any`[]) => `R` |

#### Returns

[`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`any`, `R`\>

___

### combineLatestWith

▸ **combineLatestWith**<`T`, `A`\>(...`otherSources`): [`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, [`Cons`](RxJS.md#cons)<`T`, `A`\>\>

Create an observable that combines the latest values from all passed observables and the source
into arrays and emits them.

Returns an observable, that when subscribed to, will subscribe to the source observable and all
sources provided as arguments. Once all sources emit at least one value, all of the latest values
will be emitted as an array. After that, every time any source emits a value, all of the latest values
will be emitted as an array.

This is a useful operator for eagerly calculating values based off of changed inputs.

### Example

Simple calculation from two inputs.

```
// Setup: Add two inputs to the page
const input1 = document.createElement('input');
document.body.appendChild(input1);
const input2 = document.createElement('input');
document.body.appendChild(input2);

// Get streams of changes
const input1Changes$ = fromEvent(input1, 'change');
const input2Changes$ = fromEvent(input2, 'change');

// Combine the changes by adding them together
input1Changes$.pipe(
  combineLatestWith(input2Changes$),
  map(([e1, e2]) => Number(e1.target.value) + Number(e2.target.value)),
)
.subscribe(x => console.log(x));

```

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `A` | extends readonly `unknown`[] |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...otherSources` | [...ObservableInputTuple<A\>[]] | the other sources to subscribe to. |

#### Returns

[`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, [`Cons`](RxJS.md#cons)<`T`, `A`\>\>

A function that returns an Observable that emits the latest
emissions from both source and provided Observables.

___

### concat

▸ **concat**<`T`\>(...`inputs`): [`Observable`](../classes/RxJS.Observable.md)<`T`[`number`]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends readonly `unknown`[] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...inputs` | [...ObservableInputTuple<T\>[]] |

#### Returns

[`Observable`](../classes/RxJS.Observable.md)<`T`[`number`]\>

▸ **concat**<`T`\>(...`inputsAndScheduler`): [`Observable`](../classes/RxJS.Observable.md)<`T`[`number`]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends readonly `unknown`[] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...inputsAndScheduler` | [...ObservableInputTuple<T\>[], [`SchedulerLike`](../interfaces/RxJS.SchedulerLike.md)] |

#### Returns

[`Observable`](../classes/RxJS.Observable.md)<`T`[`number`]\>

___

### concatAll

▸ **concatAll**<`O`\>(): [`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`O`, [`ObservedValueOf`](RxJS.md#observedvalueof)<`O`\>\>

Converts a higher-order Observable into a first-order Observable by
concatenating the inner Observables in order.

<span class="informal">Flattens an Observable-of-Observables by putting one
inner Observable after the other.</span>

![](concatAll.svg)

Joins every Observable emitted by the source (a higher-order Observable), in
a serial fashion. It subscribes to each inner Observable only after the
previous inner Observable has completed, and merges all of their values into
the returned observable.

__Warning:__ If the source Observable emits Observables quickly and
endlessly, and the inner Observables it emits generally complete slower than
the source emits, you can run into memory issues as the incoming Observables
collect in an unbounded buffer.

Note: `concatAll` is equivalent to `mergeAll` with concurrency parameter set
to `1`.

## Example

For each click event, tick every second from 0 to 3, with no concurrency
```ts
import { fromEvent, interval } from 'rxjs';
import { map, take, concatAll } from 'rxjs/operators';

const clicks = fromEvent(document, 'click');
const higherOrder = clicks.pipe(
  map(ev => interval(1000).pipe(take(4))),
);
const firstOrder = higherOrder.pipe(concatAll());
firstOrder.subscribe(x => console.log(x));

// Results in the following:
// (results are not concurrent)
// For every click on the "document" it will emit values 0 to 3 spaced
// on a 1000ms interval
// one click = 1000ms-> 0 -1000ms-> 1 -1000ms-> 2 -1000ms-> 3
```

**`see`** [combineLatestAll](RxJS.md#combinelatestall)

**`see`** [concat](RxJS.md#concat)

**`see`** [concatMap](RxJS.md#concatmap)

**`see`** [concatMapTo](RxJS.md#concatmapto)

**`see`** [exhaustAll](RxJS.md#exhaustall)

**`see`** [mergeAll](RxJS.md#mergeall)

**`see`** [switchAll](RxJS.md#switchall)

**`see`** [switchMap](RxJS.md#switchmap)

**`see`** [zipAll](RxJS.md#zipall)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `O` | extends [`ObservableInput`](RxJS.md#observableinput)<`any`\> |

#### Returns

[`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`O`, [`ObservedValueOf`](RxJS.md#observedvalueof)<`O`\>\>

A function that returns an Observable emitting values from all the
inner Observables concatenated.

___

### concatMap

▸ **concatMap**<`T`, `O`\>(`project`): [`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, [`ObservedValueOf`](RxJS.md#observedvalueof)<`O`\>\>

**`deprecated`** The `resultSelector` parameter will be removed in v8. Use an inner `map` instead. Details: https://rxjs.dev/deprecations/resultSelector

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `O` | extends [`ObservableInput`](RxJS.md#observableinput)<`any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `project` | (`value`: `T`, `index`: `number`) => `O` |

#### Returns

[`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, [`ObservedValueOf`](RxJS.md#observedvalueof)<`O`\>\>

▸ **concatMap**<`T`, `O`\>(`project`, `resultSelector`): [`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, [`ObservedValueOf`](RxJS.md#observedvalueof)<`O`\>\>

**`deprecated`** The `resultSelector` parameter will be removed in v8. Use an inner `map` instead. Details: https://rxjs.dev/deprecations/resultSelector

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `O` | extends [`ObservableInput`](RxJS.md#observableinput)<`any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `project` | (`value`: `T`, `index`: `number`) => `O` |
| `resultSelector` | `undefined` |

#### Returns

[`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, [`ObservedValueOf`](RxJS.md#observedvalueof)<`O`\>\>

▸ **concatMap**<`T`, `R`, `O`\>(`project`, `resultSelector`): [`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, `R`\>

**`deprecated`** The `resultSelector` parameter will be removed in v8. Use an inner `map` instead. Details: https://rxjs.dev/deprecations/resultSelector

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `R` | `R` |
| `O` | extends [`ObservableInput`](RxJS.md#observableinput)<`any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `project` | (`value`: `T`, `index`: `number`) => `O` |
| `resultSelector` | (`outerValue`: `T`, `innerValue`: [`ObservedValueOf`](RxJS.md#observedvalueof)<`O`\>, `outerIndex`: `number`, `innerIndex`: `number`) => `R` |

#### Returns

[`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, `R`\>

___

### concatMapTo

▸ **concatMapTo**<`O`\>(`observable`): [`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`any`, [`ObservedValueOf`](RxJS.md#observedvalueof)<`O`\>\>

**`deprecated`** The `resultSelector` parameter will be removed in v8. Use an inner `map` instead. Details: https://rxjs.dev/deprecations/resultSelector

#### Type parameters

| Name | Type |
| :------ | :------ |
| `O` | extends [`ObservableInput`](RxJS.md#observableinput)<`unknown`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `observable` | `O` |

#### Returns

[`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`any`, [`ObservedValueOf`](RxJS.md#observedvalueof)<`O`\>\>

▸ **concatMapTo**<`O`\>(`observable`, `resultSelector`): [`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`any`, [`ObservedValueOf`](RxJS.md#observedvalueof)<`O`\>\>

**`deprecated`** The `resultSelector` parameter will be removed in v8. Use an inner `map` instead. Details: https://rxjs.dev/deprecations/resultSelector

#### Type parameters

| Name | Type |
| :------ | :------ |
| `O` | extends [`ObservableInput`](RxJS.md#observableinput)<`unknown`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `observable` | `O` |
| `resultSelector` | `undefined` |

#### Returns

[`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`any`, [`ObservedValueOf`](RxJS.md#observedvalueof)<`O`\>\>

▸ **concatMapTo**<`T`, `R`, `O`\>(`observable`, `resultSelector`): [`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, `R`\>

**`deprecated`** The `resultSelector` parameter will be removed in v8. Use an inner `map` instead. Details: https://rxjs.dev/deprecations/resultSelector

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `R` | `R` |
| `O` | extends [`ObservableInput`](RxJS.md#observableinput)<`unknown`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `observable` | `O` |
| `resultSelector` | (`outerValue`: `T`, `innerValue`: [`ObservedValueOf`](RxJS.md#observedvalueof)<`O`\>, `outerIndex`: `number`, `innerIndex`: `number`) => `R` |

#### Returns

[`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, `R`\>

___

### concatWith

▸ **concatWith**<`T`, `A`\>(...`otherSources`): [`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, `T` \| `A`[`number`]\>

Emits all of the values from the source observable, then, once it completes, subscribes
to each observable source provided, one at a time, emitting all of their values, and not subscribing
to the next one until it completes.

`concat(a$, b$, c$)` is the same as `a$.pipe(concatWith(b$, c$))`.

## Example

Listen for one mouse click, then listen for all mouse moves.

```ts
import { fromEvent } from 'rxjs';
import { concatWith } from 'rxjs/operators';

const clicks$ = fromEvent(document, 'click');
const moves$ = fromEvent(document, 'mousemove');

clicks$.pipe(
  map(() => 'click'),
  take(1),
  concatWith(
    moves$.pipe(
      map(() => 'move')
    )
  )
)
.subscribe(x => console.log(x));

// 'click'
// 'move'
// 'move'
// 'move'
// ...
```

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `A` | extends readonly `unknown`[] |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...otherSources` | [...ObservableInputTuple<A\>[]] | Other observable sources to subscribe to, in sequence, after the original source is complete. |

#### Returns

[`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, `T` \| `A`[`number`]\>

A function that returns an Observable that concatenates
subscriptions to the source and provided Observables subscribing to the next
only once the current subscription completes.

___

### connect

▸ **connect**<`T`, `O`\>(`selector`, `config?`): [`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, [`ObservedValueOf`](RxJS.md#observedvalueof)<`O`\>\>

Creates an observable by multicasting the source within a function that
allows the developer to define the usage of the multicast prior to connection.

This is particularly useful if the observable source you wish to multicast could
be synchronous or asynchronous. This sets it apart from [share](RxJS.md#share), which, in the
case of totally synchronous sources will fail to share a single subscription with
multiple consumers, as by the time the subscription to the result of [share](RxJS.md#share)
has returned, if the source is synchronous its internal reference count will jump from
0 to 1 back to 0 and reset.

To use `connect`, you provide a `selector` function that will give you
a multicast observable that is not yet connected. You then use that multicast observable
to create a resulting observable that, when subscribed, will set up your multicast. This is
generally, but not always, accomplished with [merge](RxJS.md#merge).

Note that using a [takeUntil](RxJS.md#takeuntil) inside of `connect`'s `selector` _might_ mean you were looking
to use the [takeWhile](RxJS.md#takewhile) operator instead.

When you subscribe to the result of `connect`, the `selector` function will be called. After
the `selector` function returns, the observable it returns will be subscribed to, _then_ the
multicast will be connected to the source.

### Example

Sharing a totally synchronous observable

```ts
import { defer, of } from 'rxjs';
import { tap, connect } from 'rxjs/operators';

const source$ = defer(() => {
 console.log('subscription started');
 return of(1, 2, 3, 4, 5).pipe(
   tap(n => console.log(`source emitted ${n}`))
 );
});

source$.pipe(
 // Notice in here we're merging 3 subscriptions to `shared$`.
 connect((shared$) => merge(
     shared$.pipe(map(n => `all ${n}`)),
     shared$.pipe(filter(n => n % 2 === 0), map(n => `even ${n}`)),
     shared$.pipe(filter(n => n % 2 === 1), map(n => `odd ${n}`)),
 ))
)
.subscribe(console.log);

// Expected output: (notice only one subscription)
"subscription started"
"source emitted 1"
"all 1"
"odd 1"
"source emitted 2"
"all 2"
"even 2"
"source emitted 3"
"all 3"
"odd 3"
"source emitted 4"
"all 4"
"even 4"
"source emitted 5"
"all 5"
"odd 5"
```

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `O` | extends [`ObservableInput`](RxJS.md#observableinput)<`unknown`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `selector` | (`shared`: [`Observable`](../classes/RxJS.Observable.md)<`T`\>) => `O` | A function used to set up the multicast. Gives you a multicast observable that is not yet connected. With that, you're expected to create and return and Observable, that when subscribed to, will utilize the multicast observable. After this function is executed -- and its return value subscribed to -- the the operator will subscribe to the source, and the connection will be made. |
| `config?` | `ConnectConfig`<`T`\> | The configuration object for `connect`. |

#### Returns

[`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, [`ObservedValueOf`](RxJS.md#observedvalueof)<`O`\>\>

___

### connectable

▸ **connectable**<`T`\>(`source`, `config?`): [`Connectable`](../interfaces/RxJS.Connectable.md)<`T`\>

Creates an observable that multicasts once `connect()` is called on it.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `source` | [`ObservableInput`](RxJS.md#observableinput)<`T`\> | The observable source to make connectable. |
| `config?` | `ConnectableConfig`<`T`\> | The configuration object for `connectable`. |

#### Returns

[`Connectable`](../interfaces/RxJS.Connectable.md)<`T`\>

A "connectable" observable, that has a `connect()` method, that you must call to
connect the source to all consumers through the subject provided as the connector.

___

### count

▸ **count**<`T`\>(`predicate?`): [`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, `number`\>

Counts the number of emissions on the source and emits that number when the
source completes.

<span class="informal">Tells how many values were emitted, when the source
completes.</span>

![](count.png)

`count` transforms an Observable that emits values into an Observable that
emits a single value that represents the number of values emitted by the
source Observable. If the source Observable terminates with an error, `count`
will pass this error notification along without emitting a value first. If
the source Observable does not terminate at all, `count` will neither emit
a value nor terminate. This operator takes an optional `predicate` function
as argument, in which case the output emission will represent the number of
source values that matched `true` with the `predicate`.

## Examples

Counts how many seconds have passed before the first click happened
```ts
import { fromEvent, interval } from 'rxjs';
import { count, takeUntil } from 'rxjs/operators';

const seconds = interval(1000);
const clicks = fromEvent(document, 'click');
const secondsBeforeClick = seconds.pipe(takeUntil(clicks));
const result = secondsBeforeClick.pipe(count());
result.subscribe(x => console.log(x));
```

Counts how many odd numbers are there between 1 and 7
```ts
import { range } from 'rxjs';
import { count } from 'rxjs/operators';

const numbers = range(1, 7);
const result = numbers.pipe(count(i => i % 2 === 1));
result.subscribe(x => console.log(x));
// Results in:
// 4
```

**`see`** [max](RxJS.md#max)

**`see`** [min](RxJS.md#min)

**`see`** [reduce](RxJS.md#reduce)

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate?` | (`value`: `T`, `index`: `number`) => `boolean` | A function that is used to analyze the value and the index and determine whether or not to increment the count. Return `true` to increment the count, and return `false` to keep the count the same. If the predicate is not provided, every value will be counted. |

#### Returns

[`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, `number`\>

A function that returns an Observable that emits one number that
represents the count of emissions.

___

### debounce

▸ **debounce**<`T`\>(`durationSelector`): [`MonoTypeOperatorFunction`](../interfaces/RxJS.MonoTypeOperatorFunction.md)<`T`\>

Emits a notification from the source Observable only after a particular time span
determined by another Observable has passed without another source emission.

<span class="informal">It's like [debounceTime](RxJS.md#debouncetime), but the time span of
emission silence is determined by a second Observable.</span>

![](debounce.png)

`debounce` delays notifications emitted by the source Observable, but drops previous
pending delayed emissions if a new notification arrives on the source Observable.
This operator keeps track of the most recent notification from the source
Observable, and spawns a duration Observable by calling the
`durationSelector` function. The notification is emitted only when the duration
Observable emits a next notification, and if no other notification was emitted on
the source Observable since the duration Observable was spawned. If a new
notification appears before the duration Observable emits, the previous notification will
not be emitted and a new duration is scheduled from `durationSelector` is scheduled.
If the completing event happens during the scheduled duration the last cached notification
is emitted before the completion event is forwarded to the output observable.
If the error event happens during the scheduled duration or after it only the error event is
forwarded to the output observable. The cache notification is not emitted in this case.

Like [debounceTime](RxJS.md#debouncetime), this is a rate-limiting operator, and also a
delay-like operator since output emissions do not necessarily occur at the
same time as they did on the source Observable.

## Example
Emit the most recent click after a burst of clicks
```ts
import { fromEvent, interval } from 'rxjs';
import { scan, debounce } from 'rxjs/operators';

const clicks = fromEvent(document, 'click');
const result = clicks.pipe(
  scan((i) => ++i, 1),
  debounce((i) => interval(200 * i))
);
result.subscribe(x => console.log(x));
```

**`see`** [audit](RxJS.md#audit)

**`see`** [auditTime](RxJS.md#audittime)

**`see`** [debounce](RxJS.md#debounce)

**`see`** [delay](RxJS.md#delay)

**`see`** [sample](RxJS.md#sample)

**`see`** [sampleTime](RxJS.md#sampletime)

**`see`** [throttle](RxJS.md#throttle)

**`see`** [throttleTime](RxJS.md#throttletime)

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `durationSelector` | (`value`: `T`) => [`ObservableInput`](RxJS.md#observableinput)<`any`\> | A function that receives a value from the source Observable, for computing the timeout duration for each source value, returned as an Observable or a Promise. |

#### Returns

[`MonoTypeOperatorFunction`](../interfaces/RxJS.MonoTypeOperatorFunction.md)<`T`\>

A function that returns an Observable that delays the emissions of
the source Observable by the specified duration Observable returned by
`durationSelector`, and may drop some values if they occur too frequently.

___

### debounceTime

▸ **debounceTime**<`T`\>(`dueTime`, `scheduler?`): [`MonoTypeOperatorFunction`](../interfaces/RxJS.MonoTypeOperatorFunction.md)<`T`\>

Emits a notification from the source Observable only after a particular time span
has passed without another source emission.

<span class="informal">It's like [delay](RxJS.md#delay), but passes only the most
recent notification from each burst of emissions.</span>

![](debounceTime.png)

`debounceTime` delays notifications emitted by the source Observable, but drops
previous pending delayed emissions if a new notification arrives on the source
Observable. This operator keeps track of the most recent notification from the
source Observable, and emits that only when `dueTime` has passed
without any other notification appearing on the source Observable. If a new value
appears before `dueTime` silence occurs, the previous notification will be dropped
and will not be emitted and a new `dueTime` is scheduled.
If the completing event happens during `dueTime` the last cached notification
is emitted before the completion event is forwarded to the output observable.
If the error event happens during `dueTime` or after it only the error event is
forwarded to the output observable. The cache notification is not emitted in this case.

This is a rate-limiting operator, because it is impossible for more than one
notification to be emitted in any time window of duration `dueTime`, but it is also
a delay-like operator since output emissions do not occur at the same time as
they did on the source Observable. Optionally takes a [SchedulerLike](../interfaces/RxJS.SchedulerLike.md) for
managing timers.

## Example
Emit the most recent click after a burst of clicks
```ts
import { fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

const clicks = fromEvent(document, 'click');
const result = clicks.pipe(debounceTime(1000));
result.subscribe(x => console.log(x));
```

**`see`** [audit](RxJS.md#audit)

**`see`** [auditTime](RxJS.md#audittime)

**`see`** [debounce](RxJS.md#debounce)

**`see`** [debounceTime](RxJS.md#debouncetime)

**`see`** [sample](RxJS.md#sample)

**`see`** [sampleTime](RxJS.md#sampletime)

**`see`** [throttle](RxJS.md#throttle)

**`see`** [throttleTime](RxJS.md#throttletime)

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dueTime` | `number` | The timeout duration in milliseconds (or the time unit determined internally by the optional `scheduler`) for the window of time required to wait for emission silence before emitting the most recent source value. |
| `scheduler?` | [`SchedulerLike`](../interfaces/RxJS.SchedulerLike.md) | - |

#### Returns

[`MonoTypeOperatorFunction`](../interfaces/RxJS.MonoTypeOperatorFunction.md)<`T`\>

A function that returns an Observable that delays the emissions of
the source Observable by the specified `dueTime`, and may drop some values
if they occur too frequently.

___

### defaultIfEmpty

▸ **defaultIfEmpty**<`T`, `R`\>(`defaultValue`): [`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, `T` \| `R`\>

Emits a given value if the source Observable completes without emitting any
`next` value, otherwise mirrors the source Observable.

<span class="informal">If the source Observable turns out to be empty, then
this operator will emit a default value.</span>

![](defaultIfEmpty.png)

`defaultIfEmpty` emits the values emitted by the source Observable or a
specified default value if the source Observable is empty (completes without
having emitted any `next` value).

## Example
If no clicks happen in 5 seconds, then emit "no clicks"
```ts
import { fromEvent, interval } from 'rxjs';
import { defaultIfEmpty, takeUntil } from 'rxjs/operators';

const clicks = fromEvent(document, 'click');
const clicksBeforeFive = clicks.pipe(takeUntil(interval(5000)));
const result = clicksBeforeFive.pipe(defaultIfEmpty('no clicks'));
result.subscribe(x => console.log(x));
```

**`see`** [empty](RxJS.md#empty)

**`see`** [last](RxJS.md#last)

#### Type parameters

| Name |
| :------ |
| `T` |
| `R` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `defaultValue` | `R` | The default value used if the source Observable is empty. |

#### Returns

[`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, `T` \| `R`\>

A function that returns an Observable that emits either the
specified `defaultValue` if the source Observable emits no items, or the
values emitted by the source Observable.

___

### defer

▸ **defer**<`R`\>(`observableFactory`): [`Observable`](../classes/RxJS.Observable.md)<[`ObservedValueOf`](RxJS.md#observedvalueof)<`R`\>\>

Creates an Observable that, on subscribe, calls an Observable factory to
make an Observable for each new Observer.

<span class="informal">Creates the Observable lazily, that is, only when it
is subscribed.
</span>

![](defer.png)

`defer` allows you to create an Observable only when the Observer
subscribes. It waits until an Observer subscribes to it, calls the given
factory function to get an Observable -- where a factory function typically
generates a new Observable -- and subscribes the Observer to this Observable.
In case the factory function returns a falsy value, then EMPTY is used as
Observable instead. Last but not least, an exception during the factory
function call is transferred to the Observer by calling `error`.

## Example
### Subscribe to either an Observable of clicks or an Observable of interval, at random
```ts
import { defer, fromEvent, interval } from 'rxjs';

const clicksOrInterval = defer(function () {
  return Math.random() > 0.5
    ? fromEvent(document, 'click')
    : interval(1000);
});
clicksOrInterval.subscribe(x => console.log(x));

// Results in the following behavior:
// If the result of Math.random() is greater than 0.5 it will listen
// for clicks anywhere on the "document"; when document is clicked it
// will log a MouseEvent object to the console. If the result is less
// than 0.5 it will emit ascending numbers, one every second(1000ms).
```

**`see`** [Observable](../classes/RxJS.Observable.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `R` | extends [`ObservableInput`](RxJS.md#observableinput)<`any`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `observableFactory` | () => `R` | The Observable factory function to invoke for each Observer that subscribes to the output Observable. May also return a Promise, which will be converted on the fly to an Observable. |

#### Returns

[`Observable`](../classes/RxJS.Observable.md)<[`ObservedValueOf`](RxJS.md#observedvalueof)<`R`\>\>

An Observable whose Observers' subscriptions trigger
an invocation of the given Observable factory function.

___

### delay

▸ **delay**<`T`\>(`due`, `scheduler?`): [`MonoTypeOperatorFunction`](../interfaces/RxJS.MonoTypeOperatorFunction.md)<`T`\>

Delays the emission of items from the source Observable by a given timeout or
until a given Date.

<span class="informal">Time shifts each item by some specified amount of
milliseconds.</span>

![](delay.png)

If the delay argument is a Number, this operator time shifts the source
Observable by that amount of time expressed in milliseconds. The relative
time intervals between the values are preserved.

If the delay argument is a Date, this operator time shifts the start of the
Observable execution until the given date occurs.

## Examples
Delay each click by one second
```ts
import { fromEvent } from 'rxjs';
import { delay } from 'rxjs/operators';

const clicks = fromEvent(document, 'click');
const delayedClicks = clicks.pipe(delay(1000)); // each click emitted after 1 second
delayedClicks.subscribe(x => console.log(x));
```

Delay all clicks until a future date happens
```ts
import { fromEvent } from 'rxjs';
import { delay } from 'rxjs/operators';

const clicks = fromEvent(document, 'click');
const date = new Date('March 15, 2050 12:00:00'); // in the future
const delayedClicks = clicks.pipe(delay(date)); // click emitted only after that date
delayedClicks.subscribe(x => console.log(x));
```

**`see`** [delayWhen](RxJS.md#delaywhen)

**`see`** [throttle](RxJS.md#throttle)

**`see`** [throttleTime](RxJS.md#throttletime)

**`see`** [debounce](RxJS.md#debounce)

**`see`** [debounceTime](RxJS.md#debouncetime)

**`see`** [sample](RxJS.md#sample)

**`see`** [sampleTime](RxJS.md#sampletime)

**`see`** [audit](RxJS.md#audit)

**`see`** [auditTime](RxJS.md#audittime)

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `due` | `number` \| `Date` | The delay duration in milliseconds (a `number`) or a `Date` until which the emission of the source items is delayed. |
| `scheduler?` | [`SchedulerLike`](../interfaces/RxJS.SchedulerLike.md) | - |

#### Returns

[`MonoTypeOperatorFunction`](../interfaces/RxJS.MonoTypeOperatorFunction.md)<`T`\>

A function that returns an Observable that delays the emissions of
the source Observable by the specified timeout or Date.

___

### delayWhen

▸ **delayWhen**<`T`\>(`delayDurationSelector`, `subscriptionDelay`): [`MonoTypeOperatorFunction`](../interfaces/RxJS.MonoTypeOperatorFunction.md)<`T`\>

**`deprecated`** The `subscriptionDelay` parameter will be removed in v8.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `delayDurationSelector` | (`value`: `T`, `index`: `number`) => [`Observable`](../classes/RxJS.Observable.md)<`any`\> |
| `subscriptionDelay` | [`Observable`](../classes/RxJS.Observable.md)<`any`\> |

#### Returns

[`MonoTypeOperatorFunction`](../interfaces/RxJS.MonoTypeOperatorFunction.md)<`T`\>

▸ **delayWhen**<`T`\>(`delayDurationSelector`): [`MonoTypeOperatorFunction`](../interfaces/RxJS.MonoTypeOperatorFunction.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `delayDurationSelector` | (`value`: `T`, `index`: `number`) => [`Observable`](../classes/RxJS.Observable.md)<`any`\> |

#### Returns

[`MonoTypeOperatorFunction`](../interfaces/RxJS.MonoTypeOperatorFunction.md)<`T`\>

___

### dematerialize

▸ **dematerialize**<`N`\>(): [`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`N`, [`ValueFromNotification`](RxJS.md#valuefromnotification)<`N`\>\>

Converts an Observable of [ObservableNotification](RxJS.md#observablenotification) objects into the emissions
that they represent.

<span class="informal">Unwraps [ObservableNotification](RxJS.md#observablenotification) objects as actual `next`,
`error` and `complete` emissions. The opposite of [materialize](RxJS.md#materialize).</span>

![](dematerialize.png)

`dematerialize` is assumed to operate an Observable that only emits
[ObservableNotification](RxJS.md#observablenotification) objects as `next` emissions, and does not emit any
`error`. Such Observable is the output of a `materialize` operation. Those
notifications are then unwrapped using the metadata they contain, and emitted
as `next`, `error`, and `complete` on the output Observable.

Use this operator in conjunction with [materialize](RxJS.md#materialize).

## Example

Convert an Observable of Notifications to an actual Observable

```ts
import { of } from 'rxjs';
import { dematerialize } from 'rxjs/operators';

const notifA = { kind: 'N', value: 'A' };
const notifB = { kind: 'N', value: 'B' };
const notifE = { kind: 'E', error: new TypeError('x.toUpperCase is not a function') }

const materialized = of(notifA, notifB, notifE);

const upperCase = materialized.pipe(dematerialize());
upperCase.subscribe({
   next: x => console.log(x),
   error: e => console.error(e)
});

// Results in:
// A
// B
// TypeError: x.toUpperCase is not a function
```

**`see`** [materialize](RxJS.md#materialize)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `N` | extends [`ObservableNotification`](RxJS.md#observablenotification)<`any`\> |

#### Returns

[`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`N`, [`ValueFromNotification`](RxJS.md#valuefromnotification)<`N`\>\>

A function that returns an Observable that emits items and
notifications embedded in Notification objects emitted by the source
Observable.

___

### distinct

▸ **distinct**<`T`, `K`\>(`keySelector?`, `flushes?`): [`MonoTypeOperatorFunction`](../interfaces/RxJS.MonoTypeOperatorFunction.md)<`T`\>

Returns an Observable that emits all items emitted by the source Observable that are distinct by comparison from previous items.

If a keySelector function is provided, then it will project each value from the source observable into a new value that it will
check for equality with previously projected values. If a keySelector function is not provided, it will use each value from the
source observable directly with an equality check against previous values.

In JavaScript runtimes that support `Set`, this operator will use a `Set` to improve performance of the distinct value checking.

In other runtimes, this operator will use a minimal implementation of `Set` that relies on an `Array` and `indexOf` under the
hood, so performance will degrade as more values are checked for distinction. Even in newer browsers, a long-running `distinct`
use might result in memory leaks. To help alleviate this in some scenarios, an optional `flushes` parameter is also provided so
that the internal `Set` can be "flushed", basically clearing it of values.

## Examples

A simple example with numbers

```ts
import { of } from 'rxjs';
import { distinct } from 'rxjs/operators';

of(1, 1, 2, 2, 2, 1, 2, 3, 4, 3, 2, 1)
  .pipe(
    distinct()
  )
  .subscribe(x => console.log(x));

// Outputs
// 1
// 2
// 3
// 4
```

An example using a keySelector function

```ts
import { of } from 'rxjs';
import { distinct } from 'rxjs/operators';

interface Person {
   age: number,
   name: string
}

of(
    { age: 4, name: 'Foo'},
    { age: 7, name: 'Bar'},
    { age: 5, name: 'Foo'}
  ).pipe(
    distinct((p: Person) => p.name)
  )
  .subscribe(x => console.log(x));

// Outputs
// { age: 4, name: 'Foo' }
// { age: 7, name: 'Bar' }
```

**`see`** [distinctUntilChanged](RxJS.md#distinctuntilchanged)

**`see`** [distinctUntilKeyChanged](RxJS.md#distinctuntilkeychanged)

#### Type parameters

| Name |
| :------ |
| `T` |
| `K` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `keySelector?` | (`value`: `T`) => `K` |
| `flushes?` | [`Observable`](../classes/RxJS.Observable.md)<`any`\> |

#### Returns

[`MonoTypeOperatorFunction`](../interfaces/RxJS.MonoTypeOperatorFunction.md)<`T`\>

A function that returns an Observable that emits items from the
source Observable with distinct values.

___

### distinctUntilChanged

▸ **distinctUntilChanged**<`T`\>(`comparator?`): [`MonoTypeOperatorFunction`](../interfaces/RxJS.MonoTypeOperatorFunction.md)<`T`\>

Returns a result [Observable](../classes/RxJS.Observable.md) that emits all values pushed by the source observable if they
are distinct in comparison to the last value the result observable emitted.

1. It will always emit the first value from the source.
2. For all subsequent values pushed by the source, they will be compared to the previously emitted values
   using the provided `comparator` or an `===` equality check.
3. If the value pushed by the source is determined to be unequal by this check, that value is emitted and
   becomes the new "previously emitted value" internally.

## Example

A very basic example with no `comparator`. Note that `1` is emitted more than once,
because it's distinct in comparison to the _previously emitted_ value,
not in comparison to _all other emitted values_.

```ts
import { of } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';

of(1, 1, 1, 2, 2, 2, 1, 1, 3, 3).pipe(
 distinctUntilChanged()
)
.subscribe(console.log);
// Logs: 1, 2, 1, 3
```

## Example

With a `comparator`, you can do custom comparisons. Let's say
you only want to emit a value when all of its components have
changed:

```ts
import { of } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';

const totallyDifferentBuilds$ = of(
  { engineVersion: '1.1.0', transmissionVersion: '1.2.0' },
  { engineVersion: '1.1.0', transmissionVersion: '1.4.0' },
  { engineVersion: '1.3.0', transmissionVersion: '1.4.0' },
  { engineVersion: '1.3.0', transmissionVersion: '1.5.0' },
  { engineVersion: '2.0.0', transmissionVersion: '1.5.0' }
).pipe(
  distinctUntilChanged((prev, curr) => {
    return (
      prev.engineVersion === curr.engineVersion ||
      prev.transmissionVersion === curr.transmissionVersion
    );
  })
);

totallyDifferentBuilds$.subscribe(console.log);

// Logs:
// {engineVersion: "1.1.0", transmissionVersion: "1.2.0"}
// {engineVersion: "1.3.0", transmissionVersion: "1.4.0"}
// {engineVersion: "2.0.0", transmissionVersion: "1.5.0"}
```

## Example

You can also provide a custom `comparator` to check that emitted
changes are only in one direction. Let's say you only want to get
the next record temperature:

```ts
import { of } from "rxjs";
import { distinctUntilChanged } from "rxjs/operators";

const temps$ = of(30, 31, 20, 34, 33, 29, 35, 20);

const recordHighs$ = temps$.pipe(
  distinctUntilChanged((prevHigh, temp) => {
    // If the current temp is less than
    // or the same as the previous record,
    // the record hasn't changed.
    return temp <= prevHigh;
  })
);

recordHighs$.subscribe(console.log);
// Logs: 30, 31, 34, 35
```

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `comparator?` | (`previous`: `T`, `current`: `T`) => `boolean` | A function used to compare the previous and current values for equality. Defaults to a `===` check. |

#### Returns

[`MonoTypeOperatorFunction`](../interfaces/RxJS.MonoTypeOperatorFunction.md)<`T`\>

A function that returns an Observable that emits items from the
source Observable with distinct values.

▸ **distinctUntilChanged**<`T`, `K`\>(`comparator`, `keySelector`): [`MonoTypeOperatorFunction`](../interfaces/RxJS.MonoTypeOperatorFunction.md)<`T`\>

Returns a result [Observable](../classes/RxJS.Observable.md) that emits all values pushed by the source observable if they
are distinct in comparison to the last value the result observable emitted.

1. It will always emit the first value from the source.
2. The `keySelector` will be run against all values, including the first value.
3. For all values after the first, the selected key will be compared against the key selected from
   the previously emitted value using the `comparator`.
4. If the keys are determined to be unequal by this check, the value (not the key), is emitted
   and the selected key from that value is saved for future comparisons against other keys.

## Example

Selecting update events only when the `updatedBy` field shows
the account changed hands...

```ts
// A stream of updates to a given account
const accountUpdates$ = of(
  { updatedBy: "blesh", data: [] },
  { updatedBy: "blesh", data: [] },
  { updatedBy: "ncjamieson", data: [] },
  { updatedBy: "ncjamieson", data: [] },
  { updatedBy: "blesh", data: [] }
);

// We only want the events where it changed hands
const changedHands$ = accountUpdates$.pipe(
  distinctUntilChanged(undefined, update => update.updatedBy)
);

changedHands$.subscribe(console.log);
// Logs:
// {updatedBy: "blesh", data: Array[0]}
// {updatedBy: "ncjamieson", data: Array[0]}
// {updatedBy: "blesh", data: Array[0]}
```

#### Type parameters

| Name |
| :------ |
| `T` |
| `K` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `comparator` | (`previous`: `K`, `current`: `K`) => `boolean` | A function used to compare the previous and current keys for equality. Defaults to a `===` check. |
| `keySelector` | (`value`: `T`) => `K` | Used to select a key value to be passed to the `comparator`. |

#### Returns

[`MonoTypeOperatorFunction`](../interfaces/RxJS.MonoTypeOperatorFunction.md)<`T`\>

A function that returns an Observable that emits items from the
source Observable with distinct values.

___

### distinctUntilKeyChanged

▸ **distinctUntilKeyChanged**<`T`\>(`key`): [`MonoTypeOperatorFunction`](../interfaces/RxJS.MonoTypeOperatorFunction.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | keyof `T` |

#### Returns

[`MonoTypeOperatorFunction`](../interfaces/RxJS.MonoTypeOperatorFunction.md)<`T`\>

▸ **distinctUntilKeyChanged**<`T`, `K`\>(`key`, `compare`): [`MonoTypeOperatorFunction`](../interfaces/RxJS.MonoTypeOperatorFunction.md)<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `K` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `K` |
| `compare` | (`x`: `T`[`K`], `y`: `T`[`K`]) => `boolean` |

#### Returns

[`MonoTypeOperatorFunction`](../interfaces/RxJS.MonoTypeOperatorFunction.md)<`T`\>

___

### elementAt

▸ **elementAt**<`T`, `D`\>(`index`, `defaultValue?`): [`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, `T` \| `D`\>

Emits the single value at the specified `index` in a sequence of emissions
from the source Observable.

<span class="informal">Emits only the i-th value, then completes.</span>

![](elementAt.png)

`elementAt` returns an Observable that emits the item at the specified
`index` in the source Observable, or a default value if that `index` is out
of range and the `default` argument is provided. If the `default` argument is
not given and the `index` is out of range, the output Observable will emit an
`ArgumentOutOfRangeError` error.

## Example
Emit only the third click event
```ts
import { fromEvent } from 'rxjs';
import { elementAt } from 'rxjs/operators';

const clicks = fromEvent(document, 'click');
const result = clicks.pipe(elementAt(2));
result.subscribe(x => console.log(x));

// Results in:
// click 1 = nothing
// click 2 = nothing
// click 3 = MouseEvent object logged to console
```

**`see`** [first](RxJS.md#first)

**`see`** [last](RxJS.md#last)

**`see`** [skip](RxJS.md#skip)

**`see`** [single](RxJS.md#single)

**`see`** [take](RxJS.md#take)

**`throws`** {ArgumentOutOfRangeError} When using `elementAt(i)`, it delivers an
ArgumentOutOfRangeError to the Observer's `error` callback if `i < 0` or the
Observable has completed before emitting the i-th `next` notification.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `D` | `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | Is the number `i` for the i-th source emission that has happened since the subscription, starting from the number `0`. |
| `defaultValue?` | `D` | - |

#### Returns

[`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, `T` \| `D`\>

A function that returns an Observable that emits a single item, if
it is found. Otherwise, it will emit the default value if given. If not, it
emits an error.

___

### empty

▸ **empty**(`scheduler?`): [`Observable`](../classes/RxJS.Observable.md)<`never`\>

Creates an Observable that emits no items to the Observer and immediately
emits a complete notification.

<span class="informal">Just emits 'complete', and nothing else.</span>

![](empty.png)

This static operator is useful for creating a simple Observable that only
emits the complete notification. It can be used for composing with other
Observables, such as in a [mergeMap](RxJS.md#mergemap).

## Examples

### Emit the number 7, then complete

```ts
import { empty } from 'rxjs';
import { startWith } from 'rxjs/operators';

const result = empty().pipe(startWith(7));
result.subscribe(x => console.log(x));

// Outputs
// 7
```

### Map and flatten only odd numbers to the sequence 'a', 'b', 'c'

```ts
import { empty, interval, of } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

const interval$ = interval(1000);
const result = interval$.pipe(
  mergeMap(x => x % 2 === 1 ? of('a', 'b', 'c') : empty()),
);
result.subscribe(x => console.log(x));

// Results in the following to the console:
// x is equal to the count on the interval, e.g. (0, 1, 2, 3, ...)
// x will occur every 1000ms
// if x % 2 is equal to 1, print a, b, c (each on its own)
// if x % 2 is not equal to 1, nothing will be output
```

**`see`** [Observable](../classes/RxJS.Observable.md)

**`see`** [never](RxJS.md#never)

**`see`** [of](RxJS.md#of)

**`see`** [throwError](RxJS.md#throwerror)

**`deprecated`** Replaced with the [EMPTY](RxJS.md#empty) constant or [scheduled](RxJS.md#scheduled) (e.g. `scheduled([], scheduler)`). Will be removed in v8.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `scheduler?` | [`SchedulerLike`](../interfaces/RxJS.SchedulerLike.md) | A [SchedulerLike](../interfaces/RxJS.SchedulerLike.md) to use for scheduling the emission of the complete notification. |

#### Returns

[`Observable`](../classes/RxJS.Observable.md)<`never`\>

An "empty" Observable: emits only the complete
notification.

___

### endWith

▸ **endWith**<`T`\>(`scheduler`): [`MonoTypeOperatorFunction`](../interfaces/RxJS.MonoTypeOperatorFunction.md)<`T`\>

**`deprecated`** The `scheduler` parameter will be removed in v8. Use `scheduled` and `concatAll`. Details: https://rxjs.dev/deprecations/scheduler-argument

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `scheduler` | [`SchedulerLike`](../interfaces/RxJS.SchedulerLike.md) |

#### Returns

[`MonoTypeOperatorFunction`](../interfaces/RxJS.MonoTypeOperatorFunction.md)<`T`\>

▸ **endWith**<`T`, `A`\>(...`valuesAndScheduler`): [`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, `T` \| [`ValueFromArray`](RxJS.md#valuefromarray)<`A`\>\>

**`deprecated`** The `scheduler` parameter will be removed in v8. Use `scheduled` and `concatAll`. Details: https://rxjs.dev/deprecations/scheduler-argument

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `A` | extends `unknown`[] = `T`[] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...valuesAndScheduler` | [...A[], [`SchedulerLike`](../interfaces/RxJS.SchedulerLike.md)] |

#### Returns

[`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, `T` \| [`ValueFromArray`](RxJS.md#valuefromarray)<`A`\>\>

▸ **endWith**<`T`, `A`\>(...`values`): [`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, `T` \| [`ValueFromArray`](RxJS.md#valuefromarray)<`A`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `A` | extends `unknown`[] = `T`[] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...values` | `A` |

#### Returns

[`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, `T` \| [`ValueFromArray`](RxJS.md#valuefromarray)<`A`\>\>

___

### every

▸ **every**<`T`\>(`predicate`): [`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, `Exclude`<`T`, [`Falsy`](RxJS.md#falsy)\> extends `never` ? ``false`` : `boolean`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | `BooleanConstructor` |

#### Returns

[`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, `Exclude`<`T`, [`Falsy`](RxJS.md#falsy)\> extends `never` ? ``false`` : `boolean`\>

▸ **every**<`T`\>(`predicate`, `thisArg`): [`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, `Exclude`<`T`, [`Falsy`](RxJS.md#falsy)\> extends `never` ? ``false`` : `boolean`\>

**`deprecated`** Use a closure instead of a `thisArg`. Signatures accepting a `thisArg` will be removed in v8.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | `BooleanConstructor` |
| `thisArg` | `any` |

#### Returns

[`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, `Exclude`<`T`, [`Falsy`](RxJS.md#falsy)\> extends `never` ? ``false`` : `boolean`\>

▸ **every**<`T`, `A`\>(`predicate`, `thisArg`): [`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, `boolean`\>

**`deprecated`** Use a closure instead of a `thisArg`. Signatures accepting a `thisArg` will be removed in v8.

#### Type parameters

| Name |
| :------ |
| `T` |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | (`this`: `A`, `value`: `T`, `index`: `number`, `source`: [`Observable`](../classes/RxJS.Observable.md)<`T`\>) => `boolean` |
| `thisArg` | `A` |

#### Returns

[`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, `boolean`\>

▸ **every**<`T`\>(`predicate`): [`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, `boolean`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | (`value`: `T`, `index`: `number`, `source`: [`Observable`](../classes/RxJS.Observable.md)<`T`\>) => `boolean` |

#### Returns

[`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, `boolean`\>

___

### exhaust

▸ **exhaust**<`O`\>(): [`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`O`, [`ObservedValueOf`](RxJS.md#observedvalueof)<`O`\>\>

**`deprecated`** Renamed to [exhaustAll](RxJS.md#exhaustall). Will be removed in v8.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `O` | extends [`ObservableInput`](RxJS.md#observableinput)<`any`\> |

#### Returns

[`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`O`, [`ObservedValueOf`](RxJS.md#observedvalueof)<`O`\>\>

___

### exhaustAll

▸ **exhaustAll**<`O`\>(): [`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`O`, [`ObservedValueOf`](RxJS.md#observedvalueof)<`O`\>\>

Converts a higher-order Observable into a first-order Observable by dropping
inner Observables while the previous inner Observable has not yet completed.

<span class="informal">Flattens an Observable-of-Observables by dropping the
next inner Observables while the current inner is still executing.</span>

![](exhaust.png)

`exhaust` subscribes to an Observable that emits Observables, also known as a
higher-order Observable. Each time it observes one of these emitted inner
Observables, the output Observable begins emitting the items emitted by that
inner Observable. So far, it behaves like [mergeAll](RxJS.md#mergeall). However,
`exhaust` ignores every new inner Observable if the previous Observable has
not yet completed. Once that one completes, it will accept and flatten the
next inner Observable and repeat this process.

## Example
Run a finite timer for each click, only if there is no currently active timer
```ts
import { fromEvent, interval } from 'rxjs';
import { exhaustAll, map, take } from 'rxjs/operators';

const clicks = fromEvent(document, 'click');
const higherOrder = clicks.pipe(
  map((ev) => interval(1000).pipe(take(5))),
);
const result = higherOrder.pipe(exhaustAll());
result.subscribe(x => console.log(x));
```

**`see`** [combineLatestAll](RxJS.md#combinelatestall)

**`see`** [concatAll](RxJS.md#concatall)

**`see`** [switchAll](RxJS.md#switchall)

**`see`** [switchMap](RxJS.md#switchmap)

**`see`** [mergeAll](RxJS.md#mergeall)

**`see`** [exhaustMap](RxJS.md#exhaustmap)

**`see`** [zipAll](RxJS.md#zipall)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `O` | extends [`ObservableInput`](RxJS.md#observableinput)<`any`\> |

#### Returns

[`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`O`, [`ObservedValueOf`](RxJS.md#observedvalueof)<`O`\>\>

A function that returns an Observable that takes a source of
Observables and propagates the first Observable exclusively until it
completes before subscribing to the next.

___

### exhaustMap

▸ **exhaustMap**<`T`, `O`\>(`project`): [`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, [`ObservedValueOf`](RxJS.md#observedvalueof)<`O`\>\>

**`deprecated`** The `resultSelector` parameter will be removed in v8. Use an inner `map` instead. Details: https://rxjs.dev/deprecations/resultSelector

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `O` | extends [`ObservableInput`](RxJS.md#observableinput)<`any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `project` | (`value`: `T`, `index`: `number`) => `O` |

#### Returns

[`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, [`ObservedValueOf`](RxJS.md#observedvalueof)<`O`\>\>

▸ **exhaustMap**<`T`, `O`\>(`project`, `resultSelector`): [`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, [`ObservedValueOf`](RxJS.md#observedvalueof)<`O`\>\>

**`deprecated`** The `resultSelector` parameter will be removed in v8. Use an inner `map` instead. Details: https://rxjs.dev/deprecations/resultSelector

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `O` | extends [`ObservableInput`](RxJS.md#observableinput)<`any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `project` | (`value`: `T`, `index`: `number`) => `O` |
| `resultSelector` | `undefined` |

#### Returns

[`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, [`ObservedValueOf`](RxJS.md#observedvalueof)<`O`\>\>

▸ **exhaustMap**<`T`, `I`, `R`\>(`project`, `resultSelector`): [`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, `R`\>

**`deprecated`** The `resultSelector` parameter will be removed in v8. Use an inner `map` instead. Details: https://rxjs.dev/deprecations/resultSelector

#### Type parameters

| Name |
| :------ |
| `T` |
| `I` |
| `R` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `project` | (`value`: `T`, `index`: `number`) => [`ObservableInput`](RxJS.md#observableinput)<`I`\> |
| `resultSelector` | (`outerValue`: `T`, `innerValue`: `I`, `outerIndex`: `number`, `innerIndex`: `number`) => `R` |

#### Returns

[`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, `R`\>

___

### expand

▸ **expand**<`T`, `O`\>(`project`, `concurrent?`, `scheduler?`): [`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, [`ObservedValueOf`](RxJS.md#observedvalueof)<`O`\>\>

**`deprecated`** The `scheduler` parameter will be removed in v8. If you need to schedule the inner subscription,
use `subscribeOn` within the projection function: `expand((value) => fn(value).pipe(subscribeOn(scheduler)))`.
Details: Details: https://rxjs.dev/deprecations/scheduler-argument

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `O` | extends [`ObservableInput`](RxJS.md#observableinput)<`unknown`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `project` | (`value`: `T`, `index`: `number`) => `O` |
| `concurrent?` | `number` |
| `scheduler?` | [`SchedulerLike`](../interfaces/RxJS.SchedulerLike.md) |

#### Returns

[`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, [`ObservedValueOf`](RxJS.md#observedvalueof)<`O`\>\>

▸ **expand**<`T`, `O`\>(`project`, `concurrent`, `scheduler`): [`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, [`ObservedValueOf`](RxJS.md#observedvalueof)<`O`\>\>

**`deprecated`** The `scheduler` parameter will be removed in v8. If you need to schedule the inner subscription,
use `subscribeOn` within the projection function: `expand((value) => fn(value).pipe(subscribeOn(scheduler)))`.
Details: Details: https://rxjs.dev/deprecations/scheduler-argument

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `O` | extends [`ObservableInput`](RxJS.md#observableinput)<`unknown`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `project` | (`value`: `T`, `index`: `number`) => `O` |
| `concurrent` | `undefined` \| `number` |
| `scheduler` | [`SchedulerLike`](../interfaces/RxJS.SchedulerLike.md) |

#### Returns

[`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, [`ObservedValueOf`](RxJS.md#observedvalueof)<`O`\>\>

___

### filter

▸ **filter**<`T`, `S`, `A`\>(`predicate`, `thisArg`): [`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, `S`\>

**`deprecated`** Use a closure instead of a `thisArg`. Signatures accepting a `thisArg` will be removed in v8.

#### Type parameters

| Name |
| :------ |
| `T` |
| `S` |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | (`this`: `A`, `value`: `T`, `index`: `number`) => value is S |
| `thisArg` | `A` |

#### Returns

[`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, `S`\>

▸ **filter**<`T`, `S`\>(`predicate`): [`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, `S`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `S` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | (`value`: `T`, `index`: `number`) => value is S |

#### Returns

[`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, `S`\>

▸ **filter**<`T`\>(`predicate`): [`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, [`TruthyTypesOf`](RxJS.md#truthytypesof)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | `BooleanConstructor` |

#### Returns

[`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, [`TruthyTypesOf`](RxJS.md#truthytypesof)<`T`\>\>

▸ **filter**<`T`, `A`\>(`predicate`, `thisArg`): [`MonoTypeOperatorFunction`](../interfaces/RxJS.MonoTypeOperatorFunction.md)<`T`\>

**`deprecated`** Use a closure instead of a `thisArg`. Signatures accepting a `thisArg` will be removed in v8.

#### Type parameters

| Name |
| :------ |
| `T` |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | (`this`: `A`, `value`: `T`, `index`: `number`) => `boolean` |
| `thisArg` | `A` |

#### Returns

[`MonoTypeOperatorFunction`](../interfaces/RxJS.MonoTypeOperatorFunction.md)<`T`\>

▸ **filter**<`T`\>(`predicate`): [`MonoTypeOperatorFunction`](../interfaces/RxJS.MonoTypeOperatorFunction.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | (`value`: `T`, `index`: `number`) => `boolean` |

#### Returns

[`MonoTypeOperatorFunction`](../interfaces/RxJS.MonoTypeOperatorFunction.md)<`T`\>

___

### finalize

▸ **finalize**<`T`\>(`callback`): [`MonoTypeOperatorFunction`](../interfaces/RxJS.MonoTypeOperatorFunction.md)<`T`\>

Returns an Observable that mirrors the source Observable, but will call a specified function when
the source terminates on complete or error.
The specified function will also be called when the subscriber explicitly unsubscribes.

## Examples
Execute callback function when the observable completes

```ts
import { interval } from 'rxjs';
import { take, finalize } from 'rxjs/operators';

// emit value in sequence every 1 second
const source = interval(1000);
const example = source.pipe(
  take(5), //take only the first 5 values
  finalize(() => console.log('Sequence complete')) // Execute when the observable completes
)
const subscribe = example.subscribe(val => console.log(val));

// results:
//   0
//   1
//   2
//   3
//   4
//   'Sequence complete'
```

Execute callback function when the subscriber explicitly unsubscribes

```ts
import { interval, timer, noop } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';

const source = interval(100).pipe(
  finalize(() => console.log('[finalize] Called')),
   tap(() => console.log('[next] Called'),
     () => console.log('[error] Not called'),
     () => console.log('[tap] Not called')),
);

const sub = source.subscribe(x => console.log(x), noop, () => console.log('[complete] Not called'));

timer(150).subscribe(() => sub.unsubscribe());

// results:
//   '[next] Called'
//   0
//   '[finalize] Called'
```

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callback` | () => `void` | Function to be called when source terminates. |

#### Returns

[`MonoTypeOperatorFunction`](../interfaces/RxJS.MonoTypeOperatorFunction.md)<`T`\>

A function that returns an Observable that mirrors the source, but
will call the specified function on termination.

___

### find

▸ **find**<`T`\>(`predicate`): [`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, [`TruthyTypesOf`](RxJS.md#truthytypesof)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | `BooleanConstructor` |

#### Returns

[`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, [`TruthyTypesOf`](RxJS.md#truthytypesof)<`T`\>\>

▸ **find**<`T`, `S`, `A`\>(`predicate`, `thisArg`): [`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, `S` \| `undefined`\>

**`deprecated`** Use a closure instead of a `thisArg`. Signatures accepting a `thisArg` will be removed in v8.

#### Type parameters

| Name |
| :------ |
| `T` |
| `S` |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | (`this`: `A`, `value`: `T`, `index`: `number`, `source`: [`Observable`](../classes/RxJS.Observable.md)<`T`\>) => value is S |
| `thisArg` | `A` |

#### Returns

[`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, `S` \| `undefined`\>

▸ **find**<`T`, `S`\>(`predicate`): [`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, `S` \| `undefined`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `S` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | (`value`: `T`, `index`: `number`, `source`: [`Observable`](../classes/RxJS.Observable.md)<`T`\>) => value is S |

#### Returns

[`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, `S` \| `undefined`\>

▸ **find**<`T`, `A`\>(`predicate`, `thisArg`): [`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, `T` \| `undefined`\>

**`deprecated`** Use a closure instead of a `thisArg`. Signatures accepting a `thisArg` will be removed in v8.

#### Type parameters

| Name |
| :------ |
| `T` |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | (`this`: `A`, `value`: `T`, `index`: `number`, `source`: [`Observable`](../classes/RxJS.Observable.md)<`T`\>) => `boolean` |
| `thisArg` | `A` |

#### Returns

[`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, `T` \| `undefined`\>

▸ **find**<`T`\>(`predicate`): [`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, `T` \| `undefined`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | (`value`: `T`, `index`: `number`, `source`: [`Observable`](../classes/RxJS.Observable.md)<`T`\>) => `boolean` |

#### Returns

[`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, `T` \| `undefined`\>

___

### findIndex

▸ **findIndex**<`T`\>(`predicate`): [`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, `T` extends [`Falsy`](RxJS.md#falsy) ? ``-1`` : `number`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | `BooleanConstructor` |

#### Returns

[`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, `T` extends [`Falsy`](RxJS.md#falsy) ? ``-1`` : `number`\>

▸ **findIndex**<`T`\>(`predicate`, `thisArg`): [`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, `T` extends [`Falsy`](RxJS.md#falsy) ? ``-1`` : `number`\>

**`deprecated`** Use a closure instead of a `thisArg`. Signatures accepting a `thisArg` will be removed in v8.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | `BooleanConstructor` |
| `thisArg` | `any` |

#### Returns

[`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, `T` extends [`Falsy`](RxJS.md#falsy) ? ``-1`` : `number`\>

▸ **findIndex**<`T`, `A`\>(`predicate`, `thisArg`): [`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, `number`\>

**`deprecated`** Use a closure instead of a `thisArg`. Signatures accepting a `thisArg` will be removed in v8.

#### Type parameters

| Name |
| :------ |
| `T` |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | (`this`: `A`, `value`: `T`, `index`: `number`, `source`: [`Observable`](../classes/RxJS.Observable.md)<`T`\>) => `boolean` |
| `thisArg` | `A` |

#### Returns

[`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, `number`\>

▸ **findIndex**<`T`\>(`predicate`): [`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, `number`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | (`value`: `T`, `index`: `number`, `source`: [`Observable`](../classes/RxJS.Observable.md)<`T`\>) => `boolean` |

#### Returns

[`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, `number`\>

___

### first

▸ **first**<`T`, `D`\>(`predicate?`, `defaultValue?`): [`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, `T` \| `D`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `D` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate?` | ``null`` |
| `defaultValue?` | `D` |

#### Returns

[`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, `T` \| `D`\>

▸ **first**<`T`\>(`predicate`): [`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, [`TruthyTypesOf`](RxJS.md#truthytypesof)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | `BooleanConstructor` |

#### Returns

[`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, [`TruthyTypesOf`](RxJS.md#truthytypesof)<`T`\>\>

▸ **first**<`T`, `D`\>(`predicate`, `defaultValue`): [`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, [`TruthyTypesOf`](RxJS.md#truthytypesof)<`T`\> \| `D`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `D` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | `BooleanConstructor` |
| `defaultValue` | `D` |

#### Returns

[`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, [`TruthyTypesOf`](RxJS.md#truthytypesof)<`T`\> \| `D`\>

▸ **first**<`T`, `S`\>(`predicate`, `defaultValue?`): [`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, `S`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `S` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | (`value`: `T`, `index`: `number`, `source`: [`Observable`](../classes/RxJS.Observable.md)<`T`\>) => value is S |
| `defaultValue?` | `S` |

#### Returns

[`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, `S`\>

▸ **first**<`T`, `S`, `D`\>(`predicate`, `defaultValue`): [`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, `S` \| `D`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `S` |
| `D` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | (`value`: `T`, `index`: `number`, `source`: [`Observable`](../classes/RxJS.Observable.md)<`T`\>) => value is S |
| `defaultValue` | `D` |

#### Returns

[`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, `S` \| `D`\>

▸ **first**<`T`, `D`\>(`predicate`, `defaultValue?`): [`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, `T` \| `D`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `D` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | (`value`: `T`, `index`: `number`, `source`: [`Observable`](../classes/RxJS.Observable.md)<`T`\>) => `boolean` |
| `defaultValue?` | `D` |

#### Returns

[`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, `T` \| `D`\>

___

### firstValueFrom

▸ **firstValueFrom**<`T`, `D`\>(`source`, `config`): `Promise`<`T` \| `D`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `D` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | [`Observable`](../classes/RxJS.Observable.md)<`T`\> |
| `config` | `FirstValueFromConfig`<`D`\> |

#### Returns

`Promise`<`T` \| `D`\>

▸ **firstValueFrom**<`T`\>(`source`): `Promise`<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | [`Observable`](../classes/RxJS.Observable.md)<`T`\> |

#### Returns

`Promise`<`T`\>

___

### flatMap

▸ **flatMap**<`T`, `O`\>(`project`, `concurrent?`): [`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, [`ObservedValueOf`](RxJS.md#observedvalueof)<`O`\>\>

**`deprecated`** Renamed to [mergeMap](RxJS.md#mergemap). Will be removed in v8.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `O` | extends [`ObservableInput`](RxJS.md#observableinput)<`any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `project` | (`value`: `T`, `index`: `number`) => `O` |
| `concurrent?` | `number` |

#### Returns

[`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, [`ObservedValueOf`](RxJS.md#observedvalueof)<`O`\>\>

▸ **flatMap**<`T`, `O`\>(`project`, `resultSelector`, `concurrent?`): [`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, [`ObservedValueOf`](RxJS.md#observedvalueof)<`O`\>\>

**`deprecated`** Renamed to [mergeMap](RxJS.md#mergemap). Will be removed in v8.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `O` | extends [`ObservableInput`](RxJS.md#observableinput)<`any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `project` | (`value`: `T`, `index`: `number`) => `O` |
| `resultSelector` | `undefined` |
| `concurrent?` | `number` |

#### Returns

[`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, [`ObservedValueOf`](RxJS.md#observedvalueof)<`O`\>\>

▸ **flatMap**<`T`, `R`, `O`\>(`project`, `resultSelector`, `concurrent?`): [`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, `R`\>

**`deprecated`** Renamed to [mergeMap](RxJS.md#mergemap). Will be removed in v8.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `R` | `R` |
| `O` | extends [`ObservableInput`](RxJS.md#observableinput)<`any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `project` | (`value`: `T`, `index`: `number`) => `O` |
| `resultSelector` | (`outerValue`: `T`, `innerValue`: [`ObservedValueOf`](RxJS.md#observedvalueof)<`O`\>, `outerIndex`: `number`, `innerIndex`: `number`) => `R` |
| `concurrent?` | `number` |

#### Returns

[`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, `R`\>

___

### forkJoin

▸ **forkJoin**<`T`\>(`arg`): [`Observable`](../classes/RxJS.Observable.md)<`unknown`\>

You have passed `any` here, we can't figure out if it is
an array or an object, so you're getting `unknown`. Use better types.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends typeof `anyCatcherSymbol` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg` | `T` | Something typed as `any` |

#### Returns

[`Observable`](../classes/RxJS.Observable.md)<`unknown`\>

▸ **forkJoin**(`scheduler`): [`Observable`](../classes/RxJS.Observable.md)<`never`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `scheduler` | `undefined` \| ``null`` |

#### Returns

[`Observable`](../classes/RxJS.Observable.md)<`never`\>

▸ **forkJoin**(`sources`): [`Observable`](../classes/RxJS.Observable.md)<`never`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `sources` | readonly [] |

#### Returns

[`Observable`](../classes/RxJS.Observable.md)<`never`\>

▸ **forkJoin**<`A`\>(`sources`): [`Observable`](../classes/RxJS.Observable.md)<`A`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends readonly `unknown`[] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `sources` | readonly [[`ObservableInputTuple`](RxJS.md#observableinputtuple)<`A`\>] |

#### Returns

[`Observable`](../classes/RxJS.Observable.md)<`A`\>

▸ **forkJoin**<`A`, `R`\>(`sources`, `resultSelector`): [`Observable`](../classes/RxJS.Observable.md)<`R`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends readonly `unknown`[] |
| `R` | `R` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `sources` | readonly [[`ObservableInputTuple`](RxJS.md#observableinputtuple)<`A`\>] |
| `resultSelector` | (...`values`: `A`) => `R` |

#### Returns

[`Observable`](../classes/RxJS.Observable.md)<`R`\>

▸ **forkJoin**<`A`\>(...`sources`): [`Observable`](../classes/RxJS.Observable.md)<`A`\>

**`deprecated`** Pass an array of sources instead. The rest-parameters signature will be removed in v8. Details: https://rxjs.dev/deprecations/array-argument

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends readonly `unknown`[] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...sources` | [...ObservableInputTuple<A\>[]] |

#### Returns

[`Observable`](../classes/RxJS.Observable.md)<`A`\>

▸ **forkJoin**<`A`, `R`\>(...`sourcesAndResultSelector`): [`Observable`](../classes/RxJS.Observable.md)<`R`\>

**`deprecated`** Pass an array of sources instead. The rest-parameters signature will be removed in v8. Details: https://rxjs.dev/deprecations/array-argument

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends readonly `unknown`[] |
| `R` | `R` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...sourcesAndResultSelector` | [...ObservableInputTuple<A\>[], (...`values`: `A`) => `R`] |

#### Returns

[`Observable`](../classes/RxJS.Observable.md)<`R`\>

▸ **forkJoin**(`sourcesObject`): [`Observable`](../classes/RxJS.Observable.md)<`never`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `sourcesObject` | `Object` |

#### Returns

[`Observable`](../classes/RxJS.Observable.md)<`never`\>

▸ **forkJoin**<`T`\>(`sourcesObject`): [`Observable`](../classes/RxJS.Observable.md)<{ [K in keyof T]: ObservedValueOf<T[K]\> }\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Record`<`string`, [`ObservableInput`](RxJS.md#observableinput)<`any`\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `sourcesObject` | `T` |

#### Returns

[`Observable`](../classes/RxJS.Observable.md)<{ [K in keyof T]: ObservedValueOf<T[K]\> }\>

___

### from

▸ **from**<`O`\>(`input`): [`Observable`](../classes/RxJS.Observable.md)<[`ObservedValueOf`](RxJS.md#observedvalueof)<`O`\>\>

**`deprecated`** The `scheduler` parameter will be removed in v8. Use `scheduled`. Details: https://rxjs.dev/deprecations/scheduler-argument

#### Type parameters

| Name | Type |
| :------ | :------ |
| `O` | extends [`ObservableInput`](RxJS.md#observableinput)<`any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `O` |

#### Returns

[`Observable`](../classes/RxJS.Observable.md)<[`ObservedValueOf`](RxJS.md#observedvalueof)<`O`\>\>

▸ **from**<`O`\>(`input`, `scheduler`): [`Observable`](../classes/RxJS.Observable.md)<[`ObservedValueOf`](RxJS.md#observedvalueof)<`O`\>\>

**`deprecated`** The `scheduler` parameter will be removed in v8. Use `scheduled`. Details: https://rxjs.dev/deprecations/scheduler-argument

#### Type parameters

| Name | Type |
| :------ | :------ |
| `O` | extends [`ObservableInput`](RxJS.md#observableinput)<`any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `O` |
| `scheduler` | [`SchedulerLike`](../interfaces/RxJS.SchedulerLike.md) |

#### Returns

[`Observable`](../classes/RxJS.Observable.md)<[`ObservedValueOf`](RxJS.md#observedvalueof)<`O`\>\>

___

### fromEvent

▸ **fromEvent**<`T`\>(`target`, `eventName`): [`Observable`](../classes/RxJS.Observable.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `HasEventTargetAddRemove`<`T`\> \| `ArrayLike`<`HasEventTargetAddRemove`<`T`\>\> |
| `eventName` | `string` |

#### Returns

[`Observable`](../classes/RxJS.Observable.md)<`T`\>

▸ **fromEvent**<`T`, `R`\>(`target`, `eventName`, `resultSelector`): [`Observable`](../classes/RxJS.Observable.md)<`R`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `R` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `HasEventTargetAddRemove`<`T`\> \| `ArrayLike`<`HasEventTargetAddRemove`<`T`\>\> |
| `eventName` | `string` |
| `resultSelector` | (`event`: `T`) => `R` |

#### Returns

[`Observable`](../classes/RxJS.Observable.md)<`R`\>

▸ **fromEvent**<`T`\>(`target`, `eventName`, `options`): [`Observable`](../classes/RxJS.Observable.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `HasEventTargetAddRemove`<`T`\> \| `ArrayLike`<`HasEventTargetAddRemove`<`T`\>\> |
| `eventName` | `string` |
| `options` | `EventListenerOptions` |

#### Returns

[`Observable`](../classes/RxJS.Observable.md)<`T`\>

▸ **fromEvent**<`T`, `R`\>(`target`, `eventName`, `options`, `resultSelector`): [`Observable`](../classes/RxJS.Observable.md)<`R`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `R` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `HasEventTargetAddRemove`<`T`\> \| `ArrayLike`<`HasEventTargetAddRemove`<`T`\>\> |
| `eventName` | `string` |
| `options` | `EventListenerOptions` |
| `resultSelector` | (`event`: `T`) => `R` |

#### Returns

[`Observable`](../classes/RxJS.Observable.md)<`R`\>

▸ **fromEvent**(`target`, `eventName`): [`Observable`](../classes/RxJS.Observable.md)<`unknown`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `NodeStyleEventEmitter` \| `ArrayLike`<`NodeStyleEventEmitter`\> |
| `eventName` | `string` |

#### Returns

[`Observable`](../classes/RxJS.Observable.md)<`unknown`\>

▸ **fromEvent**<`T`\>(`target`, `eventName`): [`Observable`](../classes/RxJS.Observable.md)<`T`\>

**`deprecated`** Do not specify explicit type parameters. Signatures with type parameters that cannot be inferred will be removed in v8.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `NodeStyleEventEmitter` \| `ArrayLike`<`NodeStyleEventEmitter`\> |
| `eventName` | `string` |

#### Returns

[`Observable`](../classes/RxJS.Observable.md)<`T`\>

▸ **fromEvent**<`R`\>(`target`, `eventName`, `resultSelector`): [`Observable`](../classes/RxJS.Observable.md)<`R`\>

#### Type parameters

| Name |
| :------ |
| `R` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `NodeStyleEventEmitter` \| `ArrayLike`<`NodeStyleEventEmitter`\> |
| `eventName` | `string` |
| `resultSelector` | (...`args`: `any`[]) => `R` |

#### Returns

[`Observable`](../classes/RxJS.Observable.md)<`R`\>

▸ **fromEvent**(`target`, `eventName`): [`Observable`](../classes/RxJS.Observable.md)<`unknown`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `NodeCompatibleEventEmitter` \| `ArrayLike`<`NodeCompatibleEventEmitter`\> |
| `eventName` | `string` |

#### Returns

[`Observable`](../classes/RxJS.Observable.md)<`unknown`\>

▸ **fromEvent**<`T`\>(`target`, `eventName`): [`Observable`](../classes/RxJS.Observable.md)<`T`\>

**`deprecated`** Do not specify explicit type parameters. Signatures with type parameters that cannot be inferred will be removed in v8.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `NodeCompatibleEventEmitter` \| `ArrayLike`<`NodeCompatibleEventEmitter`\> |
| `eventName` | `string` |

#### Returns

[`Observable`](../classes/RxJS.Observable.md)<`T`\>

▸ **fromEvent**<`R`\>(`target`, `eventName`, `resultSelector`): [`Observable`](../classes/RxJS.Observable.md)<`R`\>

#### Type parameters

| Name |
| :------ |
| `R` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `NodeCompatibleEventEmitter` \| `ArrayLike`<`NodeCompatibleEventEmitter`\> |
| `eventName` | `string` |
| `resultSelector` | (...`args`: `any`[]) => `R` |

#### Returns

[`Observable`](../classes/RxJS.Observable.md)<`R`\>

▸ **fromEvent**<`T`\>(`target`, `eventName`): [`Observable`](../classes/RxJS.Observable.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `JQueryStyleEventEmitter`<`any`, `T`\> \| `ArrayLike`<`JQueryStyleEventEmitter`<`any`, `T`\>\> |
| `eventName` | `string` |

#### Returns

[`Observable`](../classes/RxJS.Observable.md)<`T`\>

▸ **fromEvent**<`T`, `R`\>(`target`, `eventName`, `resultSelector`): [`Observable`](../classes/RxJS.Observable.md)<`R`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `R` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `JQueryStyleEventEmitter`<`any`, `T`\> \| `ArrayLike`<`JQueryStyleEventEmitter`<`any`, `T`\>\> |
| `eventName` | `string` |
| `resultSelector` | (`value`: `T`, ...`args`: `any`[]) => `R` |

#### Returns

[`Observable`](../classes/RxJS.Observable.md)<`R`\>

___

### fromEventPattern

▸ **fromEventPattern**<`T`\>(`addHandler`, `removeHandler?`): [`Observable`](../classes/RxJS.Observable.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `addHandler` | (`handler`: `NodeEventHandler`) => `any` |
| `removeHandler?` | (`handler`: `NodeEventHandler`, `signal?`: `any`) => `void` |

#### Returns

[`Observable`](../classes/RxJS.Observable.md)<`T`\>

▸ **fromEventPattern**<`T`\>(`addHandler`, `removeHandler?`, `resultSelector?`): [`Observable`](../classes/RxJS.Observable.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `addHandler` | (`handler`: `NodeEventHandler`) => `any` |
| `removeHandler?` | (`handler`: `NodeEventHandler`, `signal?`: `any`) => `void` |
| `resultSelector?` | (...`args`: `any`[]) => `T` |

#### Returns

[`Observable`](../classes/RxJS.Observable.md)<`T`\>

___

### generate

▸ **generate**<`T`, `S`\>(`initialState`, `condition`, `iterate`, `resultSelector`, `scheduler?`): [`Observable`](../classes/RxJS.Observable.md)<`T`\>

Generates an observable sequence by running a state-driven loop
producing the sequence's elements, using the specified scheduler
to send out observer messages.

![](generate.png)

## Examples

### Produces sequences of number

```ts
import { generate } from 'rxjs';

const result = generate(0, x => x < 3, x => x + 1, x => x);

result.subscribe(x => console.log(x));

// Logs:
// 0
// 1
// 2
```

### Use asap scheduler

```ts
import { generate } from 'rxjs';

const result = generate(1, x => x < 5, x => x * 2, x => x + 1, asap);

result.subscribe(x => console.log(x));

// Logs:
// 2
// 3
// 5
```

**`see`** [from](RxJS.md#from)

**`see`** [Observable](../classes/RxJS.Observable.md)

**`deprecated`** Instead of passing separate arguments, use the options argument. Signatures taking separate arguments will be removed in v8.

#### Type parameters

| Name |
| :------ |
| `T` |
| `S` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `initialState` | `S` | Initial state. |
| `condition` | `ConditionFunc`<`S`\> | Condition to terminate generation (upon returning false). |
| `iterate` | `IterateFunc`<`S`\> | Iteration step function. |
| `resultSelector` | `ResultFunc`<`S`, `T`\> | Selector function for results produced in the sequence. (deprecated) |
| `scheduler?` | [`SchedulerLike`](../interfaces/RxJS.SchedulerLike.md) | - |

#### Returns

[`Observable`](../classes/RxJS.Observable.md)<`T`\>

The generated sequence.

▸ **generate**<`S`\>(`initialState`, `condition`, `iterate`, `scheduler?`): [`Observable`](../classes/RxJS.Observable.md)<`S`\>

Generates an Observable by running a state-driven loop
that emits an element on each iteration.

<span class="informal">Use it instead of nexting values in a for loop.</span>

![](generate.png)

`generate` allows you to create a stream of values generated with a loop very similar to
a traditional for loop. The first argument of `generate` is a beginning value. The second argument
is a function that accepts this value and tests if some condition still holds. If it does,
then the loop continues, if not, it stops. The third value is a function which takes the
previously defined value and modifies it in some way on each iteration. Note how these three parameters
are direct equivalents of three expressions in a traditional for loop: the first expression
initializes some state (for example, a numeric index), the second tests if the loop can perform the next
iteration (for example, if the index is lower than 10) and the third states how the defined value
will be modified on every step (for example, the index will be incremented by one).

Return value of a `generate` operator is an Observable that on each loop iteration
emits a value. First of all, the condition function is ran. If it returns true, then the Observable
emits the currently stored value (initial value at the first iteration) and finally updates
that value with iterate function. If at some point the condition returns false, then the Observable
completes at that moment.

Optionally you can pass a fourth parameter to `generate` - a result selector function which allows you
to immediately map the value that would normally be emitted by an Observable.

If you find three anonymous functions in `generate` call hard to read, you can provide
a single object to the operator instead where the object has the properties: `initialState`,
`condition`, `iterate` and `resultSelector`, which should have respective values that you
would normally pass to `generate`. `resultSelector` is still optional, but that form
of calling `generate` allows you to omit `condition` as well. If you omit it, that means
condition always holds, or in other words the resulting Observable will never complete.

Both forms of `generate` can optionally accept a scheduler. In case of a multi-parameter call,
scheduler simply comes as a last argument (no matter if there is a `resultSelector`
function or not). In case of a single-parameter call, you can provide it as a
`scheduler` property on the object passed to the operator. In both cases, a scheduler decides when
the next iteration of the loop will happen and therefore when the next value will be emitted
by the Observable. For example, to ensure that each value is pushed to the Observer
on a separate task in the event loop, you could use the `async` scheduler. Note that
by default (when no scheduler is passed) values are simply emitted synchronously.

## Examples

### Use with condition and iterate functions

```ts
import { generate } from 'rxjs';

const result = generate(0, x => x < 3, x => x + 1);

result.subscribe({
  next: value => console.log(value),
  complete: () => console.log('Complete!')
});

// Logs:
// 0
// 1
// 2
// "Complete!"
```

### Use with condition, iterate and resultSelector functions

```ts
import { generate } from 'rxjs';

const result = generate(0, x => x < 3, x => x + 1, x => x * 1000);

result.subscribe({
  next: value => console.log(value),
  complete: () => console.log('complete!')
});

// Logs:
// 0
// 1000
// 2000
// "complete!"
```

### Use with options object

```ts
import { generate } from 'rxjs';

const result = generate({
  initialState: 0,
  condition(value) { return value < 3; },
  iterate(value) { return value + 1; },
  resultSelector(value) { return value * 1000; }
});

result.subscribe({
  next: value => console.log(value),
  complete: () => console.log('complete!')
});

// Logs:
// 0
// 1000
// 2000
// "Complete!"
```

### Use options object without condition function

```ts
import { generate } from 'rxjs';

const result = generate({
  initialState: 0,
  iterate(value) { return value + 1; },
  resultSelector(value) { return value * 1000; }
});

result.subscribe({
  next: value => console.log(value),
  complete: () => console.log('complete!') // This will never run
});

// Logs:
// 0
// 1000
// 2000
// 3000
// ...and never stops.
```

**`see`** [from](RxJS.md#from)

**`see`** {@link index/Observable.create}

**`deprecated`** Instead of passing separate arguments, use the options argument. Signatures taking separate arguments will be removed in v8.

#### Type parameters

| Name |
| :------ |
| `S` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `initialState` | `S` | Initial state. |
| `condition` | `ConditionFunc`<`S`\> | Condition to terminate generation (upon returning false). |
| `iterate` | `IterateFunc`<`S`\> | Iteration step function. |
| `scheduler?` | [`SchedulerLike`](../interfaces/RxJS.SchedulerLike.md) | - |

#### Returns

[`Observable`](../classes/RxJS.Observable.md)<`S`\>

The generated sequence.

▸ **generate**<`S`\>(`options`): [`Observable`](../classes/RxJS.Observable.md)<`S`\>

Generates an observable sequence by running a state-driven loop
producing the sequence's elements, using the specified scheduler
to send out observer messages.
The overload accepts options object that might contain initial state, iterate,
condition and scheduler.

![](generate.png)

## Examples

### Use options object with condition function

```ts
import { generate } from 'rxjs';

const result = generate({
  initialState: 0,
  condition: x => x < 3,
  iterate: x => x + 1,
});

result.subscribe({
  next: value => console.log(value),
  complete: () => console.log('complete!')
});

// Logs:
// 0
// 1
// 2
// "Complete!".
```

**`see`** [from](RxJS.md#from)

**`see`** [Observable](../classes/RxJS.Observable.md)

#### Type parameters

| Name |
| :------ |
| `S` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `GenerateBaseOptions`<`S`\> | Object that must contain initialState, iterate and might contain condition and scheduler. |

#### Returns

[`Observable`](../classes/RxJS.Observable.md)<`S`\>

The generated sequence.

▸ **generate**<`T`, `S`\>(`options`): [`Observable`](../classes/RxJS.Observable.md)<`T`\>

Generates an observable sequence by running a state-driven loop
producing the sequence's elements, using the specified scheduler
to send out observer messages.
The overload accepts options object that might contain initial state, iterate,
condition, result selector and scheduler.

![](generate.png)

## Examples

### Use options object with condition and iterate function

```ts
import { generate } from 'rxjs';

const result = generate({
  initialState: 0,
  condition: x => x < 3,
  iterate: x => x + 1,
  resultSelector: x => x,
});

result.subscribe({
  next: value => console.log(value),
  complete: () => console.log('complete!')
});

// Logs:
// 0
// 1
// 2
// "Complete!".
```

**`see`** [from](RxJS.md#from)

**`see`** [Observable](../classes/RxJS.Observable.md)

#### Type parameters

| Name |
| :------ |
| `T` |
| `S` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `GenerateOptions`<`T`, `S`\> | Object that must contain initialState, iterate, resultSelector and might contain condition and scheduler. |

#### Returns

[`Observable`](../classes/RxJS.Observable.md)<`T`\>

The generated sequence.

___

### groupBy

▸ **groupBy**<`T`, `K`\>(`key`, `options`): [`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, [`GroupedObservable`](../interfaces/RxJS.GroupedObservable.md)<`K`, `T`\>\>

Groups the items emitted by an Observable according to a specified criterion,
and emits these grouped items as `GroupedObservables`, one
[GroupedObservable](../interfaces/RxJS.GroupedObservable.md) per group.

![](groupBy.png)

When the Observable emits an item, a key is computed for this item with the key function.

If a [GroupedObservable](../interfaces/RxJS.GroupedObservable.md) for this key exists, this [GroupedObservable](../interfaces/RxJS.GroupedObservable.md) emits. Otherwise, a new
[GroupedObservable](../interfaces/RxJS.GroupedObservable.md) for this key is created and emits.

A [GroupedObservable](../interfaces/RxJS.GroupedObservable.md) represents values belonging to the same group represented by a common key. The common
key is available as the `key` field of a [GroupedObservable](../interfaces/RxJS.GroupedObservable.md) instance.

The elements emitted by [GroupedObservable](../interfaces/RxJS.GroupedObservable.md)s are by default the items emitted by the Observable, or elements
returned by the element function.

## Examples

### Group objects by id and return as array

```ts
import { of } from 'rxjs';
import { mergeMap, groupBy, reduce } from 'rxjs/operators';

of(
  {id: 1, name: 'JavaScript'},
  {id: 2, name: 'Parcel'},
  {id: 2, name: 'webpack'},
  {id: 1, name: 'TypeScript'},
  {id: 3, name: 'TSLint'}
).pipe(
  groupBy(p => p.id),
  mergeMap((group$) => group$.pipe(reduce((acc, cur) => [...acc, cur], [])))
)
.subscribe(p => console.log(p));

// displays:
// [ { id: 1, name: 'JavaScript'},
//   { id: 1, name: 'TypeScript'} ]
//
// [ { id: 2, name: 'Parcel'},
//   { id: 2, name: 'webpack'} ]
//
// [ { id: 3, name: 'TSLint'} ]
```

### Pivot data on the id field

```ts
import { of } from 'rxjs';
import { groupBy, map, mergeMap, reduce } from 'rxjs/operators';

of(
  { id: 1, name: 'JavaScript' },
  { id: 2, name: 'Parcel' },
  { id: 2, name: 'webpack' },
  { id: 1, name: 'TypeScript' },
  { id: 3, name: 'TSLint' }
)
  .pipe(
    groupBy(p => p.id, p => p.name),
    mergeMap(group$ =>
      group$.pipe(reduce((acc, cur) => [...acc, cur], [`${group$.key}`]))
    ),
    map(arr => ({ id: parseInt(arr[0], 10), values: arr.slice(1) }))
 )
 .subscribe(p => console.log(p));

// displays:
// { id: 1, values: [ 'JavaScript', 'TypeScript' ] }
// { id: 2, values: [ 'Parcel', 'webpack' ] }
// { id: 3, values: [ 'TSLint' ] }
```

**`deprecated`** Use the options parameter instead.

#### Type parameters

| Name |
| :------ |
| `T` |
| `K` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | (`value`: `T`) => `K` | A function that extracts the key for each item. |
| `options` | `BasicGroupByOptions`<`K`, `T`\> | - |

#### Returns

[`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, [`GroupedObservable`](../interfaces/RxJS.GroupedObservable.md)<`K`, `T`\>\>

A function that returns an Observable that emits GroupedObservables,
each of which corresponds to a unique key value and each of which emits
those items from the source Observable that share that key value.

▸ **groupBy**<`T`, `K`, `E`\>(`key`, `options`): [`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, [`GroupedObservable`](../interfaces/RxJS.GroupedObservable.md)<`K`, `E`\>\>

Groups the items emitted by an Observable according to a specified criterion,
and emits these grouped items as `GroupedObservables`, one
[GroupedObservable](../interfaces/RxJS.GroupedObservable.md) per group.

![](groupBy.png)

When the Observable emits an item, a key is computed for this item with the key function.

If a [GroupedObservable](../interfaces/RxJS.GroupedObservable.md) for this key exists, this [GroupedObservable](../interfaces/RxJS.GroupedObservable.md) emits. Otherwise, a new
[GroupedObservable](../interfaces/RxJS.GroupedObservable.md) for this key is created and emits.

A [GroupedObservable](../interfaces/RxJS.GroupedObservable.md) represents values belonging to the same group represented by a common key. The common
key is available as the `key` field of a [GroupedObservable](../interfaces/RxJS.GroupedObservable.md) instance.

The elements emitted by [GroupedObservable](../interfaces/RxJS.GroupedObservable.md)s are by default the items emitted by the Observable, or elements
returned by the element function.

## Examples

### Group objects by id and return as array

```ts
import { of } from 'rxjs';
import { mergeMap, groupBy, reduce } from 'rxjs/operators';

of(
  {id: 1, name: 'JavaScript'},
  {id: 2, name: 'Parcel'},
  {id: 2, name: 'webpack'},
  {id: 1, name: 'TypeScript'},
  {id: 3, name: 'TSLint'}
).pipe(
  groupBy(p => p.id),
  mergeMap((group$) => group$.pipe(reduce((acc, cur) => [...acc, cur], [])))
)
.subscribe(p => console.log(p));

// displays:
// [ { id: 1, name: 'JavaScript'},
//   { id: 1, name: 'TypeScript'} ]
//
// [ { id: 2, name: 'Parcel'},
//   { id: 2, name: 'webpack'} ]
//
// [ { id: 3, name: 'TSLint'} ]
```

### Pivot data on the id field

```ts
import { of } from 'rxjs';
import { groupBy, map, mergeMap, reduce } from 'rxjs/operators';

of(
  { id: 1, name: 'JavaScript' },
  { id: 2, name: 'Parcel' },
  { id: 2, name: 'webpack' },
  { id: 1, name: 'TypeScript' },
  { id: 3, name: 'TSLint' }
)
  .pipe(
    groupBy(p => p.id, p => p.name),
    mergeMap(group$ =>
      group$.pipe(reduce((acc, cur) => [...acc, cur], [`${group$.key}`]))
    ),
    map(arr => ({ id: parseInt(arr[0], 10), values: arr.slice(1) }))
 )
 .subscribe(p => console.log(p));

// displays:
// { id: 1, values: [ 'JavaScript', 'TypeScript' ] }
// { id: 2, values: [ 'Parcel', 'webpack' ] }
// { id: 3, values: [ 'TSLint' ] }
```

**`deprecated`** Use the options parameter instead.

#### Type parameters

| Name |
| :------ |
| `T` |
| `K` |
| `E` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | (`value`: `T`) => `K` | A function that extracts the key for each item. |
| `options` | `GroupByOptionsWithElement`<`K`, `E`, `T`\> | - |

#### Returns

[`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, [`GroupedObservable`](../interfaces/RxJS.GroupedObservable.md)<`K`, `E`\>\>

A function that returns an Observable that emits GroupedObservables,
each of which corresponds to a unique key value and each of which emits
those items from the source Observable that share that key value.

▸ **groupBy**<`T`, `K`\>(`key`): [`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, [`GroupedObservable`](../interfaces/RxJS.GroupedObservable.md)<``true``, `K`\> \| [`GroupedObservable`](../interfaces/RxJS.GroupedObservable.md)<``false``, `Exclude`<`T`, `K`\>\>\>

Groups the items emitted by an Observable according to a specified criterion,
and emits these grouped items as `GroupedObservables`, one
[GroupedObservable](../interfaces/RxJS.GroupedObservable.md) per group.

![](groupBy.png)

When the Observable emits an item, a key is computed for this item with the key function.

If a [GroupedObservable](../interfaces/RxJS.GroupedObservable.md) for this key exists, this [GroupedObservable](../interfaces/RxJS.GroupedObservable.md) emits. Otherwise, a new
[GroupedObservable](../interfaces/RxJS.GroupedObservable.md) for this key is created and emits.

A [GroupedObservable](../interfaces/RxJS.GroupedObservable.md) represents values belonging to the same group represented by a common key. The common
key is available as the `key` field of a [GroupedObservable](../interfaces/RxJS.GroupedObservable.md) instance.

The elements emitted by [GroupedObservable](../interfaces/RxJS.GroupedObservable.md)s are by default the items emitted by the Observable, or elements
returned by the element function.

## Examples

### Group objects by id and return as array

```ts
import { of } from 'rxjs';
import { mergeMap, groupBy, reduce } from 'rxjs/operators';

of(
  {id: 1, name: 'JavaScript'},
  {id: 2, name: 'Parcel'},
  {id: 2, name: 'webpack'},
  {id: 1, name: 'TypeScript'},
  {id: 3, name: 'TSLint'}
).pipe(
  groupBy(p => p.id),
  mergeMap((group$) => group$.pipe(reduce((acc, cur) => [...acc, cur], [])))
)
.subscribe(p => console.log(p));

// displays:
// [ { id: 1, name: 'JavaScript'},
//   { id: 1, name: 'TypeScript'} ]
//
// [ { id: 2, name: 'Parcel'},
//   { id: 2, name: 'webpack'} ]
//
// [ { id: 3, name: 'TSLint'} ]
```

### Pivot data on the id field

```ts
import { of } from 'rxjs';
import { groupBy, map, mergeMap, reduce } from 'rxjs/operators';

of(
  { id: 1, name: 'JavaScript' },
  { id: 2, name: 'Parcel' },
  { id: 2, name: 'webpack' },
  { id: 1, name: 'TypeScript' },
  { id: 3, name: 'TSLint' }
)
  .pipe(
    groupBy(p => p.id, p => p.name),
    mergeMap(group$ =>
      group$.pipe(reduce((acc, cur) => [...acc, cur], [`${group$.key}`]))
    ),
    map(arr => ({ id: parseInt(arr[0], 10), values: arr.slice(1) }))
 )
 .subscribe(p => console.log(p));

// displays:
// { id: 1, values: [ 'JavaScript', 'TypeScript' ] }
// { id: 2, values: [ 'Parcel', 'webpack' ] }
// { id: 3, values: [ 'TSLint' ] }
```

**`deprecated`** Use the options parameter instead.

#### Type parameters

| Name |
| :------ |
| `T` |
| `K` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | (`value`: `T`) => value is K | A function that extracts the key for each item. |

#### Returns

[`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, [`GroupedObservable`](../interfaces/RxJS.GroupedObservable.md)<``true``, `K`\> \| [`GroupedObservable`](../interfaces/RxJS.GroupedObservable.md)<``false``, `Exclude`<`T`, `K`\>\>\>

A function that returns an Observable that emits GroupedObservables,
each of which corresponds to a unique key value and each of which emits
those items from the source Observable that share that key value.

▸ **groupBy**<`T`, `K`\>(`key`): [`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, [`GroupedObservable`](../interfaces/RxJS.GroupedObservable.md)<`K`, `T`\>\>

Groups the items emitted by an Observable according to a specified criterion,
and emits these grouped items as `GroupedObservables`, one
[GroupedObservable](../interfaces/RxJS.GroupedObservable.md) per group.

![](groupBy.png)

When the Observable emits an item, a key is computed for this item with the key function.

If a [GroupedObservable](../interfaces/RxJS.GroupedObservable.md) for this key exists, this [GroupedObservable](../interfaces/RxJS.GroupedObservable.md) emits. Otherwise, a new
[GroupedObservable](../interfaces/RxJS.GroupedObservable.md) for this key is created and emits.

A [GroupedObservable](../interfaces/RxJS.GroupedObservable.md) represents values belonging to the same group represented by a common key. The common
key is available as the `key` field of a [GroupedObservable](../interfaces/RxJS.GroupedObservable.md) instance.

The elements emitted by [GroupedObservable](../interfaces/RxJS.GroupedObservable.md)s are by default the items emitted by the Observable, or elements
returned by the element function.

## Examples

### Group objects by id and return as array

```ts
import { of } from 'rxjs';
import { mergeMap, groupBy, reduce } from 'rxjs/operators';

of(
  {id: 1, name: 'JavaScript'},
  {id: 2, name: 'Parcel'},
  {id: 2, name: 'webpack'},
  {id: 1, name: 'TypeScript'},
  {id: 3, name: 'TSLint'}
).pipe(
  groupBy(p => p.id),
  mergeMap((group$) => group$.pipe(reduce((acc, cur) => [...acc, cur], [])))
)
.subscribe(p => console.log(p));

// displays:
// [ { id: 1, name: 'JavaScript'},
//   { id: 1, name: 'TypeScript'} ]
//
// [ { id: 2, name: 'Parcel'},
//   { id: 2, name: 'webpack'} ]
//
// [ { id: 3, name: 'TSLint'} ]
```

### Pivot data on the id field

```ts
import { of } from 'rxjs';
import { groupBy, map, mergeMap, reduce } from 'rxjs/operators';

of(
  { id: 1, name: 'JavaScript' },
  { id: 2, name: 'Parcel' },
  { id: 2, name: 'webpack' },
  { id: 1, name: 'TypeScript' },
  { id: 3, name: 'TSLint' }
)
  .pipe(
    groupBy(p => p.id, p => p.name),
    mergeMap(group$ =>
      group$.pipe(reduce((acc, cur) => [...acc, cur], [`${group$.key}`]))
    ),
    map(arr => ({ id: parseInt(arr[0], 10), values: arr.slice(1) }))
 )
 .subscribe(p => console.log(p));

// displays:
// { id: 1, values: [ 'JavaScript', 'TypeScript' ] }
// { id: 2, values: [ 'Parcel', 'webpack' ] }
// { id: 3, values: [ 'TSLint' ] }
```

**`deprecated`** Use the options parameter instead.

#### Type parameters

| Name |
| :------ |
| `T` |
| `K` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | (`value`: `T`) => `K` | A function that extracts the key for each item. |

#### Returns

[`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, [`GroupedObservable`](../interfaces/RxJS.GroupedObservable.md)<`K`, `T`\>\>

A function that returns an Observable that emits GroupedObservables,
each of which corresponds to a unique key value and each of which emits
those items from the source Observable that share that key value.

▸ **groupBy**<`T`, `K`\>(`key`, `element`, `duration`): [`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, [`GroupedObservable`](../interfaces/RxJS.GroupedObservable.md)<`K`, `T`\>\>

Groups the items emitted by an Observable according to a specified criterion,
and emits these grouped items as `GroupedObservables`, one
[GroupedObservable](../interfaces/RxJS.GroupedObservable.md) per group.

![](groupBy.png)

When the Observable emits an item, a key is computed for this item with the key function.

If a [GroupedObservable](../interfaces/RxJS.GroupedObservable.md) for this key exists, this [GroupedObservable](../interfaces/RxJS.GroupedObservable.md) emits. Otherwise, a new
[GroupedObservable](../interfaces/RxJS.GroupedObservable.md) for this key is created and emits.

A [GroupedObservable](../interfaces/RxJS.GroupedObservable.md) represents values belonging to the same group represented by a common key. The common
key is available as the `key` field of a [GroupedObservable](../interfaces/RxJS.GroupedObservable.md) instance.

The elements emitted by [GroupedObservable](../interfaces/RxJS.GroupedObservable.md)s are by default the items emitted by the Observable, or elements
returned by the element function.

## Examples

### Group objects by id and return as array

```ts
import { of } from 'rxjs';
import { mergeMap, groupBy, reduce } from 'rxjs/operators';

of(
  {id: 1, name: 'JavaScript'},
  {id: 2, name: 'Parcel'},
  {id: 2, name: 'webpack'},
  {id: 1, name: 'TypeScript'},
  {id: 3, name: 'TSLint'}
).pipe(
  groupBy(p => p.id),
  mergeMap((group$) => group$.pipe(reduce((acc, cur) => [...acc, cur], [])))
)
.subscribe(p => console.log(p));

// displays:
// [ { id: 1, name: 'JavaScript'},
//   { id: 1, name: 'TypeScript'} ]
//
// [ { id: 2, name: 'Parcel'},
//   { id: 2, name: 'webpack'} ]
//
// [ { id: 3, name: 'TSLint'} ]
```

### Pivot data on the id field

```ts
import { of } from 'rxjs';
import { groupBy, map, mergeMap, reduce } from 'rxjs/operators';

of(
  { id: 1, name: 'JavaScript' },
  { id: 2, name: 'Parcel' },
  { id: 2, name: 'webpack' },
  { id: 1, name: 'TypeScript' },
  { id: 3, name: 'TSLint' }
)
  .pipe(
    groupBy(p => p.id, p => p.name),
    mergeMap(group$ =>
      group$.pipe(reduce((acc, cur) => [...acc, cur], [`${group$.key}`]))
    ),
    map(arr => ({ id: parseInt(arr[0], 10), values: arr.slice(1) }))
 )
 .subscribe(p => console.log(p));

// displays:
// { id: 1, values: [ 'JavaScript', 'TypeScript' ] }
// { id: 2, values: [ 'Parcel', 'webpack' ] }
// { id: 3, values: [ 'TSLint' ] }
```

**`deprecated`** use the options parameter instead.

#### Type parameters

| Name |
| :------ |
| `T` |
| `K` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | (`value`: `T`) => `K` | A function that extracts the key for each item. |
| `element` | `void` | A function that extracts the return element for each item. |
| `duration` | (`grouped`: [`GroupedObservable`](../interfaces/RxJS.GroupedObservable.md)<`K`, `T`\>) => [`Observable`](../classes/RxJS.Observable.md)<`any`\> | A function that returns an Observable to determine how long each group should exist. |

#### Returns

[`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, [`GroupedObservable`](../interfaces/RxJS.GroupedObservable.md)<`K`, `T`\>\>

A function that returns an Observable that emits GroupedObservables,
each of which corresponds to a unique key value and each of which emits
those items from the source Observable that share that key value.

▸ **groupBy**<`T`, `K`, `R`\>(`key`, `element?`, `duration?`): [`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, [`GroupedObservable`](../interfaces/RxJS.GroupedObservable.md)<`K`, `R`\>\>

Groups the items emitted by an Observable according to a specified criterion,
and emits these grouped items as `GroupedObservables`, one
[GroupedObservable](../interfaces/RxJS.GroupedObservable.md) per group.

![](groupBy.png)

When the Observable emits an item, a key is computed for this item with the key function.

If a [GroupedObservable](../interfaces/RxJS.GroupedObservable.md) for this key exists, this [GroupedObservable](../interfaces/RxJS.GroupedObservable.md) emits. Otherwise, a new
[GroupedObservable](../interfaces/RxJS.GroupedObservable.md) for this key is created and emits.

A [GroupedObservable](../interfaces/RxJS.GroupedObservable.md) represents values belonging to the same group represented by a common key. The common
key is available as the `key` field of a [GroupedObservable](../interfaces/RxJS.GroupedObservable.md) instance.

The elements emitted by [GroupedObservable](../interfaces/RxJS.GroupedObservable.md)s are by default the items emitted by the Observable, or elements
returned by the element function.

## Examples

### Group objects by id and return as array

```ts
import { of } from 'rxjs';
import { mergeMap, groupBy, reduce } from 'rxjs/operators';

of(
  {id: 1, name: 'JavaScript'},
  {id: 2, name: 'Parcel'},
  {id: 2, name: 'webpack'},
  {id: 1, name: 'TypeScript'},
  {id: 3, name: 'TSLint'}
).pipe(
  groupBy(p => p.id),
  mergeMap((group$) => group$.pipe(reduce((acc, cur) => [...acc, cur], [])))
)
.subscribe(p => console.log(p));

// displays:
// [ { id: 1, name: 'JavaScript'},
//   { id: 1, name: 'TypeScript'} ]
//
// [ { id: 2, name: 'Parcel'},
//   { id: 2, name: 'webpack'} ]
//
// [ { id: 3, name: 'TSLint'} ]
```

### Pivot data on the id field

```ts
import { of } from 'rxjs';
import { groupBy, map, mergeMap, reduce } from 'rxjs/operators';

of(
  { id: 1, name: 'JavaScript' },
  { id: 2, name: 'Parcel' },
  { id: 2, name: 'webpack' },
  { id: 1, name: 'TypeScript' },
  { id: 3, name: 'TSLint' }
)
  .pipe(
    groupBy(p => p.id, p => p.name),
    mergeMap(group$ =>
      group$.pipe(reduce((acc, cur) => [...acc, cur], [`${group$.key}`]))
    ),
    map(arr => ({ id: parseInt(arr[0], 10), values: arr.slice(1) }))
 )
 .subscribe(p => console.log(p));

// displays:
// { id: 1, values: [ 'JavaScript', 'TypeScript' ] }
// { id: 2, values: [ 'Parcel', 'webpack' ] }
// { id: 3, values: [ 'TSLint' ] }
```

**`deprecated`** use the options parameter instead.

#### Type parameters

| Name |
| :------ |
| `T` |
| `K` |
| `R` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | (`value`: `T`) => `K` | A function that extracts the key for each item. |
| `element?` | (`value`: `T`) => `R` | A function that extracts the return element for each item. |
| `duration?` | (`grouped`: [`GroupedObservable`](../interfaces/RxJS.GroupedObservable.md)<`K`, `R`\>) => [`Observable`](../classes/RxJS.Observable.md)<`any`\> | A function that returns an Observable to determine how long each group should exist. |

#### Returns

[`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, [`GroupedObservable`](../interfaces/RxJS.GroupedObservable.md)<`K`, `R`\>\>

A function that returns an Observable that emits GroupedObservables,
each of which corresponds to a unique key value and each of which emits
those items from the source Observable that share that key value.

▸ **groupBy**<`T`, `K`, `R`\>(`key`, `element?`, `duration?`, `connector?`): [`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, [`GroupedObservable`](../interfaces/RxJS.GroupedObservable.md)<`K`, `R`\>\>

Groups the items emitted by an Observable according to a specified criterion,
and emits these grouped items as `GroupedObservables`, one
[GroupedObservable](../interfaces/RxJS.GroupedObservable.md) per group.

![](groupBy.png)

When the Observable emits an item, a key is computed for this item with the key function.

If a [GroupedObservable](../interfaces/RxJS.GroupedObservable.md) for this key exists, this [GroupedObservable](../interfaces/RxJS.GroupedObservable.md) emits. Otherwise, a new
[GroupedObservable](../interfaces/RxJS.GroupedObservable.md) for this key is created and emits.

A [GroupedObservable](../interfaces/RxJS.GroupedObservable.md) represents values belonging to the same group represented by a common key. The common
key is available as the `key` field of a [GroupedObservable](../interfaces/RxJS.GroupedObservable.md) instance.

The elements emitted by [GroupedObservable](../interfaces/RxJS.GroupedObservable.md)s are by default the items emitted by the Observable, or elements
returned by the element function.

## Examples

### Group objects by id and return as array

```ts
import { of } from 'rxjs';
import { mergeMap, groupBy, reduce } from 'rxjs/operators';

of(
  {id: 1, name: 'JavaScript'},
  {id: 2, name: 'Parcel'},
  {id: 2, name: 'webpack'},
  {id: 1, name: 'TypeScript'},
  {id: 3, name: 'TSLint'}
).pipe(
  groupBy(p => p.id),
  mergeMap((group$) => group$.pipe(reduce((acc, cur) => [...acc, cur], [])))
)
.subscribe(p => console.log(p));

// displays:
// [ { id: 1, name: 'JavaScript'},
//   { id: 1, name: 'TypeScript'} ]
//
// [ { id: 2, name: 'Parcel'},
//   { id: 2, name: 'webpack'} ]
//
// [ { id: 3, name: 'TSLint'} ]
```

### Pivot data on the id field

```ts
import { of } from 'rxjs';
import { groupBy, map, mergeMap, reduce } from 'rxjs/operators';

of(
  { id: 1, name: 'JavaScript' },
  { id: 2, name: 'Parcel' },
  { id: 2, name: 'webpack' },
  { id: 1, name: 'TypeScript' },
  { id: 3, name: 'TSLint' }
)
  .pipe(
    groupBy(p => p.id, p => p.name),
    mergeMap(group$ =>
      group$.pipe(reduce((acc, cur) => [...acc, cur], [`${group$.key}`]))
    ),
    map(arr => ({ id: parseInt(arr[0], 10), values: arr.slice(1) }))
 )
 .subscribe(p => console.log(p));

// displays:
// { id: 1, values: [ 'JavaScript', 'TypeScript' ] }
// { id: 2, values: [ 'Parcel', 'webpack' ] }
// { id: 3, values: [ 'TSLint' ] }
```

**`deprecated`** Use the options parameter instead.

#### Type parameters

| Name |
| :------ |
| `T` |
| `K` |
| `R` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | (`value`: `T`) => `K` | A function that extracts the key for each item. |
| `element?` | (`value`: `T`) => `R` | A function that extracts the return element for each item. |
| `duration?` | (`grouped`: [`GroupedObservable`](../interfaces/RxJS.GroupedObservable.md)<`K`, `R`\>) => [`Observable`](../classes/RxJS.Observable.md)<`any`\> | A function that returns an Observable to determine how long each group should exist. |
| `connector?` | () => [`Subject`](../classes/RxJS.Subject.md)<`R`\> | Factory function to create an intermediate Subject through which grouped elements are emitted. |

#### Returns

[`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, [`GroupedObservable`](../interfaces/RxJS.GroupedObservable.md)<`K`, `R`\>\>

A function that returns an Observable that emits GroupedObservables,
each of which corresponds to a unique key value and each of which emits
those items from the source Observable that share that key value.

___

### identity

▸ **identity**<`T`\>(`x`): `T`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `T` |

#### Returns

`T`

___

### ignoreElements

▸ **ignoreElements**(): [`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`any`, `never`\>

Ignores all items emitted by the source Observable and only passes calls of `complete` or `error`.

![](ignoreElements.png)

The _IgnoreElements_ operator suppresses all of the items emitted by the source Observable,
but allows its termination notification (either `error` or `complete`) to pass through unchanged.

If you do not care about the items being emitted by an Observable, but you do want to be notified
when it completes or when it terminates with an error, you can apply the `ignoreElements` operator
to the Observable, which will ensure that it will never call its observers’ `next` handlers.

## Examples
```ts
import { of } from 'rxjs';
import { ignoreElements } from 'rxjs/operators';

of('you', 'talking', 'to', 'me').pipe(
  ignoreElements(),
)
.subscribe(
  word => console.log(word),
  err => console.log('error:', err),
  () => console.log('the end'),
);
// result:
// 'the end'
```

#### Returns

[`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`any`, `never`\>

A function that returns an empty Observable that only calls
`complete` or `error`, based on which one is called by the source
Observable.

___

### iif

▸ **iif**<`T`, `F`\>(`condition`, `trueResult`, `falseResult`): [`Observable`](../classes/RxJS.Observable.md)<`T` \| `F`\>

Checks a boolean at subscription time, and chooses between one of two observable sources

`iif` excepts a function that returns a boolean (the `condition` function), and two sources,
the `trueResult` and the `falseResult`, and returns an Observable.

At the moment of subscription, the `condition` function is called. If the result is `true`, the
subscription will be to the source passed as the `trueResult`, otherwise, the subscription will be
to the source passed as the `falseResult`.

If you need to check more than two options to choose between more than one observable, have a look at the [defer](RxJS.md#defer) creation method.

## Examples

### Change at runtime which Observable will be subscribed

```ts
import { iif, of } from 'rxjs';

let subscribeToFirst;
const firstOrSecond = iif(
  () => subscribeToFirst,
  of('first'),
  of('second'),
);

subscribeToFirst = true;
firstOrSecond.subscribe(value => console.log(value));

// Logs:
// "first"

subscribeToFirst = false;
firstOrSecond.subscribe(value => console.log(value));

// Logs:
// "second"

```

### Control an access to an Observable

```ts
let accessGranted;
const observableIfYouHaveAccess = iif(
  () => accessGranted,
  of('It seems you have an access...'), // Note that only one Observable is passed to the operator.
);

accessGranted = true;
observableIfYouHaveAccess.subscribe(
  value => console.log(value),
  err => {},
  () => console.log('The end'),
);

// Logs:
// "It seems you have an access..."
// "The end"

accessGranted = false;
observableIfYouHaveAccess.subscribe(
  value => console.log(value),
  err => {},
  () => console.log('The end'),
);

// Logs:
// "The end"
```

**`see`** [defer](RxJS.md#defer)

#### Type parameters

| Name |
| :------ |
| `T` |
| `F` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `condition` | () => `boolean` | Condition which Observable should be chosen. |
| `trueResult` | [`ObservableInput`](RxJS.md#observableinput)<`T`\> | An Observable that will be subscribed if condition is true. |
| `falseResult` | [`ObservableInput`](RxJS.md#observableinput)<`F`\> | An Observable that will be subscribed if condition is false. |

#### Returns

[`Observable`](../classes/RxJS.Observable.md)<`T` \| `F`\>

An observable that proxies to `trueResult` or `falseResult`, depending on the result of the `condition` function.

___

### interval

▸ **interval**(`period?`, `scheduler?`): [`Observable`](../classes/RxJS.Observable.md)<`number`\>

Creates an Observable that emits sequential numbers every specified
interval of time, on a specified [SchedulerLike](../interfaces/RxJS.SchedulerLike.md).

<span class="informal">Emits incremental numbers periodically in time.
</span>

![](interval.png)

`interval` returns an Observable that emits an infinite sequence of
ascending integers, with a constant interval of time of your choosing
between those emissions. The first emission is not sent immediately, but
only after the first period has passed. By default, this operator uses the
`async` [SchedulerLike](../interfaces/RxJS.SchedulerLike.md) to provide a notion of time, but you may pass any
[SchedulerLike](../interfaces/RxJS.SchedulerLike.md) to it.

## Example
Emits ascending numbers, one every second (1000ms) up to the number 3
```ts
import { interval } from 'rxjs';
import { take } from 'rxjs/operators';

const numbers = interval(1000);

const takeFourNumbers = numbers.pipe(take(4));

takeFourNumbers.subscribe(x => console.log('Next: ', x));

// Logs:
// Next: 0
// Next: 1
// Next: 2
// Next: 3
```

**`see`** [timer](RxJS.md#timer)

**`see`** [delay](RxJS.md#delay)

#### Parameters

| Name | Type |
| :------ | :------ |
| `period?` | `number` |
| `scheduler?` | [`SchedulerLike`](../interfaces/RxJS.SchedulerLike.md) |

#### Returns

[`Observable`](../classes/RxJS.Observable.md)<`number`\>

An Observable that emits a sequential number each time
interval.

___

### isEmpty

▸ **isEmpty**<`T`\>(): [`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, `boolean`\>

Emits `false` if the input Observable emits any values, or emits `true` if the
input Observable completes without emitting any values.

<span class="informal">Tells whether any values are emitted by an Observable.</span>

![](isEmpty.png)

`isEmpty` transforms an Observable that emits values into an Observable that
emits a single boolean value representing whether or not any values were
emitted by the source Observable. As soon as the source Observable emits a
value, `isEmpty` will emit a `false` and complete.  If the source Observable
completes having not emitted anything, `isEmpty` will emit a `true` and
complete.

A similar effect could be achieved with [count](RxJS.md#count), but `isEmpty` can emit
a `false` value sooner.

## Examples

Emit `false` for a non-empty Observable.

```ts
import { Subject } from 'rxjs';
import { isEmpty } from 'rxjs/operators';

const source = new Subject<string>();
const result = source.pipe(isEmpty());

source.subscribe(x => console.log(x));
result.subscribe(x => console.log(x));

source.next('a');
source.next('b');
source.next('c');
source.complete();

// Outputs
// a
// false
// b
// c
```

Emit `true` for an empty Observable.

```ts
import { EMPTY } from 'rxjs';
import { isEmpty } from 'rxjs/operators';

const result = EMPTY.pipe(isEmpty());
result.subscribe(x => console.log(x));

// Outputs
// true
```

**`see`** [count](RxJS.md#count)

**`see`** {@link index/EMPTY}

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, `boolean`\>

A function that returns an Observable that emits boolean value
indicating whether the source Observable was empty or not.

___

### isObservable

▸ **isObservable**(`obj`): obj is Observable<unknown\>

Tests to see if the object is an RxJS [Observable](../classes/RxJS.Observable.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `obj` | `any` | the object to test |

#### Returns

obj is Observable<unknown\>

___

### last

▸ **last**<`T`\>(`predicate`): [`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, [`TruthyTypesOf`](RxJS.md#truthytypesof)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | `BooleanConstructor` |

#### Returns

[`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, [`TruthyTypesOf`](RxJS.md#truthytypesof)<`T`\>\>

▸ **last**<`T`, `D`\>(`predicate`, `defaultValue`): [`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, [`TruthyTypesOf`](RxJS.md#truthytypesof)<`T`\> \| `D`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `D` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | `BooleanConstructor` |
| `defaultValue` | `D` |

#### Returns

[`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, [`TruthyTypesOf`](RxJS.md#truthytypesof)<`T`\> \| `D`\>

▸ **last**<`T`, `D`\>(`predicate?`, `defaultValue?`): [`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, `T` \| `D`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `D` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate?` | ``null`` |
| `defaultValue?` | `D` |

#### Returns

[`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, `T` \| `D`\>

▸ **last**<`T`, `S`\>(`predicate`, `defaultValue?`): [`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, `S`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `S` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | (`value`: `T`, `index`: `number`, `source`: [`Observable`](../classes/RxJS.Observable.md)<`T`\>) => value is S |
| `defaultValue?` | `S` |

#### Returns

[`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, `S`\>

▸ **last**<`T`, `D`\>(`predicate`, `defaultValue?`): [`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, `T` \| `D`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `D` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | (`value`: `T`, `index`: `number`, `source`: [`Observable`](../classes/RxJS.Observable.md)<`T`\>) => `boolean` |
| `defaultValue?` | `D` |

#### Returns

[`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, `T` \| `D`\>

___

### lastValueFrom

▸ **lastValueFrom**<`T`, `D`\>(`source`, `config`): `Promise`<`T` \| `D`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `D` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | [`Observable`](../classes/RxJS.Observable.md)<`T`\> |
| `config` | `LastValueFromConfig`<`D`\> |

#### Returns

`Promise`<`T` \| `D`\>

▸ **lastValueFrom**<`T`\>(`source`): `Promise`<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | [`Observable`](../classes/RxJS.Observable.md)<`T`\> |

#### Returns

`Promise`<`T`\>

___

### map

▸ **map**<`T`, `R`\>(`project`): [`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, `R`\>

**`deprecated`** Use a closure instead of a `thisArg`. Signatures accepting a `thisArg` will be removed in v8.

#### Type parameters

| Name |
| :------ |
| `T` |
| `R` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `project` | (`value`: `T`, `index`: `number`) => `R` |

#### Returns

[`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, `R`\>

▸ **map**<`T`, `R`, `A`\>(`project`, `thisArg`): [`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, `R`\>

**`deprecated`** Use a closure instead of a `thisArg`. Signatures accepting a `thisArg` will be removed in v8.

#### Type parameters

| Name |
| :------ |
| `T` |
| `R` |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `project` | (`this`: `A`, `value`: `T`, `index`: `number`) => `R` |
| `thisArg` | `A` |

#### Returns

[`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, `R`\>

___

### mapTo

▸ **mapTo**<`R`\>(`value`): [`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`any`, `R`\>

**`deprecated`** Do not specify explicit type parameters. Signatures with type parameters that cannot be inferred will be removed in v8.

#### Type parameters

| Name |
| :------ |
| `R` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `R` |

#### Returns

[`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`any`, `R`\>

▸ **mapTo**<`T`, `R`\>(`value`): [`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, `R`\>

**`deprecated`** Do not specify explicit type parameters. Signatures with type parameters that cannot be inferred will be removed in v8.

#### Type parameters

| Name |
| :------ |
| `T` |
| `R` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `R` |

#### Returns

[`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, `R`\>

___

### materialize

▸ **materialize**<`T`\>(): [`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, [`Notification`](../classes/RxJS.Notification.md)<`T`\> & [`ObservableNotification`](RxJS.md#observablenotification)<`T`\>\>

Represents all of the notifications from the source Observable as `next`
emissions marked with their original types within [Notification](../classes/RxJS.Notification.md)
objects.

<span class="informal">Wraps `next`, `error` and `complete` emissions in
[Notification](../classes/RxJS.Notification.md) objects, emitted as `next` on the output Observable.
</span>

![](materialize.png)

`materialize` returns an Observable that emits a `next` notification for each
`next`, `error`, or `complete` emission of the source Observable. When the
source Observable emits `complete`, the output Observable will emit `next` as
a Notification of type "complete", and then it will emit `complete` as well.
When the source Observable emits `error`, the output will emit `next` as a
Notification of type "error", and then `complete`.

This operator is useful for producing metadata of the source Observable, to
be consumed as `next` emissions. Use it in conjunction with
[dematerialize](RxJS.md#dematerialize).

## Example

Convert a faulty Observable to an Observable of Notifications

```ts
import { of } from 'rxjs';
import { materialize, map } from 'rxjs/operators';

const letters = of('a', 'b', 13, 'd');
const upperCase = letters.pipe(map(x => x.toUpperCase()));
const materialized = upperCase.pipe(materialize());
materialized.subscribe(x => console.log(x));

// Results in the following:
// - Notification {kind: "N", value: "A", error: undefined, hasValue: true}
// - Notification {kind: "N", value: "B", error: undefined, hasValue: true}
// - Notification {kind: "E", value: undefined, error: TypeError:
//   x.toUpperCase is not a function at MapSubscriber.letters.map.x
//   [as project] (http://1…, hasValue: false}
```

**`see`** [Notification](../classes/RxJS.Notification.md)

**`see`** [dematerialize](RxJS.md#dematerialize)

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, [`Notification`](../classes/RxJS.Notification.md)<`T`\> & [`ObservableNotification`](RxJS.md#observablenotification)<`T`\>\>

A function that returns an Observable that emits
[Notification](../classes/RxJS.Notification.md) objects that wrap the original emissions from the
source Observable with metadata.

___

### max

▸ **max**<`T`\>(`comparer?`): [`MonoTypeOperatorFunction`](../interfaces/RxJS.MonoTypeOperatorFunction.md)<`T`\>

The Max operator operates on an Observable that emits numbers (or items that can be compared with a provided function),
and when source Observable completes it emits a single item: the item with the largest value.

![](max.png)

## Examples
Get the maximal value of a series of numbers
```ts
import { of } from 'rxjs';
import { max } from 'rxjs/operators';

of(5, 4, 7, 2, 8).pipe(
  max(),
)
.subscribe(x => console.log(x)); // -> 8
```

Use a comparer function to get the maximal item
```typescript
import { of } from 'rxjs';
import { max } from 'rxjs/operators';

interface Person {
  age: number,
  name: string
}
of(
  {age: 7, name: 'Foo'},
  {age: 5, name: 'Bar'},
  {age: 9, name: 'Beer'},
).pipe(
  max<Person>((a: Person, b: Person) => a.age < b.age ? -1 : 1),
)
.subscribe((x: Person) => console.log(x.name)); // -> 'Beer'
```

**`see`** [min](RxJS.md#min)

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `comparer?` | (`x`: `T`, `y`: `T`) => `number` |

#### Returns

[`MonoTypeOperatorFunction`](../interfaces/RxJS.MonoTypeOperatorFunction.md)<`T`\>

A function that returns an Observable that emits item with the
largest value.

___

### merge

▸ **merge**<`A`\>(...`sources`): [`Observable`](../classes/RxJS.Observable.md)<`A`[`number`]\>

**`deprecated`** The `scheduler` parameter will be removed in v8. Use `scheduled` and `mergeAll`. Details: https://rxjs.dev/deprecations/scheduler-argument

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends readonly `unknown`[] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...sources` | [...ObservableInputTuple<A\>[]] |

#### Returns

[`Observable`](../classes/RxJS.Observable.md)<`A`[`number`]\>

▸ **merge**<`A`\>(...`sourcesAndConcurrency`): [`Observable`](../classes/RxJS.Observable.md)<`A`[`number`]\>

**`deprecated`** The `scheduler` parameter will be removed in v8. Use `scheduled` and `mergeAll`. Details: https://rxjs.dev/deprecations/scheduler-argument

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends readonly `unknown`[] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...sourcesAndConcurrency` | [...ObservableInputTuple<A\>[], number?] |

#### Returns

[`Observable`](../classes/RxJS.Observable.md)<`A`[`number`]\>

▸ **merge**<`A`\>(...`sourcesAndScheduler`): [`Observable`](../classes/RxJS.Observable.md)<`A`[`number`]\>

**`deprecated`** The `scheduler` parameter will be removed in v8. Use `scheduled` and `mergeAll`. Details: https://rxjs.dev/deprecations/scheduler-argument

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends readonly `unknown`[] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...sourcesAndScheduler` | [...ObservableInputTuple<A\>[], SchedulerLike?] |

#### Returns

[`Observable`](../classes/RxJS.Observable.md)<`A`[`number`]\>

▸ **merge**<`A`\>(...`sourcesAndConcurrencyAndScheduler`): [`Observable`](../classes/RxJS.Observable.md)<`A`[`number`]\>

**`deprecated`** The `scheduler` parameter will be removed in v8. Use `scheduled` and `mergeAll`. Details: https://rxjs.dev/deprecations/scheduler-argument

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends readonly `unknown`[] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...sourcesAndConcurrencyAndScheduler` | [...ObservableInputTuple<A\>[], number?, SchedulerLike?] |

#### Returns

[`Observable`](../classes/RxJS.Observable.md)<`A`[`number`]\>

___

### mergeAll

▸ **mergeAll**<`O`\>(`concurrent?`): [`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`O`, [`ObservedValueOf`](RxJS.md#observedvalueof)<`O`\>\>

Converts a higher-order Observable into a first-order Observable which
concurrently delivers all values that are emitted on the inner Observables.

<span class="informal">Flattens an Observable-of-Observables.</span>

![](mergeAll.png)

`mergeAll` subscribes to an Observable that emits Observables, also known as
a higher-order Observable. Each time it observes one of these emitted inner
Observables, it subscribes to that and delivers all the values from the
inner Observable on the output Observable. The output Observable only
completes once all inner Observables have completed. Any error delivered by
a inner Observable will be immediately emitted on the output Observable.

## Examples
Spawn a new interval Observable for each click event, and blend their outputs as one Observable
```ts
import { fromEvent, interval } from 'rxjs';
import { map, mergeAll } from 'rxjs/operators';

const clicks = fromEvent(document, 'click');
const higherOrder = clicks.pipe(map((ev) => interval(1000)));
const firstOrder = higherOrder.pipe(mergeAll());
firstOrder.subscribe(x => console.log(x));
```

Count from 0 to 9 every second for each click, but only allow 2 concurrent timers
```ts
import { fromEvent, interval } from 'rxjs';
import { take, map, mergeAll } from 'rxjs/operators';

const clicks = fromEvent(document, 'click');
const higherOrder = clicks.pipe(
  map((ev) => interval(1000).pipe(take(10))),
);
const firstOrder = higherOrder.pipe(mergeAll(2));
firstOrder.subscribe(x => console.log(x));
```

**`see`** [combineLatestAll](RxJS.md#combinelatestall)

**`see`** [concatAll](RxJS.md#concatall)

**`see`** [exhaustAll](RxJS.md#exhaustall)

**`see`** [merge](RxJS.md#merge)

**`see`** [mergeMap](RxJS.md#mergemap)

**`see`** [mergeMapTo](RxJS.md#mergemapto)

**`see`** [mergeScan](RxJS.md#mergescan)

**`see`** [switchAll](RxJS.md#switchall)

**`see`** [switchMap](RxJS.md#switchmap)

**`see`** [zipAll](RxJS.md#zipall)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `O` | extends [`ObservableInput`](RxJS.md#observableinput)<`any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `concurrent?` | `number` |

#### Returns

[`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`O`, [`ObservedValueOf`](RxJS.md#observedvalueof)<`O`\>\>

A function that returns an Observable that emits values coming from
all the inner Observables emitted by the source Observable.

___

### mergeMap

▸ **mergeMap**<`T`, `O`\>(`project`, `concurrent?`): [`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, [`ObservedValueOf`](RxJS.md#observedvalueof)<`O`\>\>

**`deprecated`** The `resultSelector` parameter will be removed in v8. Use an inner `map` instead. Details: https://rxjs.dev/deprecations/resultSelector

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `O` | extends [`ObservableInput`](RxJS.md#observableinput)<`any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `project` | (`value`: `T`, `index`: `number`) => `O` |
| `concurrent?` | `number` |

#### Returns

[`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, [`ObservedValueOf`](RxJS.md#observedvalueof)<`O`\>\>

▸ **mergeMap**<`T`, `O`\>(`project`, `resultSelector`, `concurrent?`): [`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, [`ObservedValueOf`](RxJS.md#observedvalueof)<`O`\>\>

**`deprecated`** The `resultSelector` parameter will be removed in v8. Use an inner `map` instead. Details: https://rxjs.dev/deprecations/resultSelector

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `O` | extends [`ObservableInput`](RxJS.md#observableinput)<`any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `project` | (`value`: `T`, `index`: `number`) => `O` |
| `resultSelector` | `undefined` |
| `concurrent?` | `number` |

#### Returns

[`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, [`ObservedValueOf`](RxJS.md#observedvalueof)<`O`\>\>

▸ **mergeMap**<`T`, `R`, `O`\>(`project`, `resultSelector`, `concurrent?`): [`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, `R`\>

**`deprecated`** The `resultSelector` parameter will be removed in v8. Use an inner `map` instead. Details: https://rxjs.dev/deprecations/resultSelector

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `R` | `R` |
| `O` | extends [`ObservableInput`](RxJS.md#observableinput)<`any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `project` | (`value`: `T`, `index`: `number`) => `O` |
| `resultSelector` | (`outerValue`: `T`, `innerValue`: [`ObservedValueOf`](RxJS.md#observedvalueof)<`O`\>, `outerIndex`: `number`, `innerIndex`: `number`) => `R` |
| `concurrent?` | `number` |

#### Returns

[`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, `R`\>

___

### mergeMapTo

▸ **mergeMapTo**<`O`\>(`innerObservable`, `concurrent?`): [`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`any`, [`ObservedValueOf`](RxJS.md#observedvalueof)<`O`\>\>

**`deprecated`** The `resultSelector` parameter will be removed in v8. Use an inner `map` instead. Details: https://rxjs.dev/deprecations/resultSelector

#### Type parameters

| Name | Type |
| :------ | :------ |
| `O` | extends [`ObservableInput`](RxJS.md#observableinput)<`unknown`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `innerObservable` | `O` |
| `concurrent?` | `number` |

#### Returns

[`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`any`, [`ObservedValueOf`](RxJS.md#observedvalueof)<`O`\>\>

▸ **mergeMapTo**<`T`, `R`, `O`\>(`innerObservable`, `resultSelector`, `concurrent?`): [`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, `R`\>

**`deprecated`** The `resultSelector` parameter will be removed in v8. Use an inner `map` instead. Details: https://rxjs.dev/deprecations/resultSelector

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `R` | `R` |
| `O` | extends [`ObservableInput`](RxJS.md#observableinput)<`unknown`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `innerObservable` | `O` |
| `resultSelector` | (`outerValue`: `T`, `innerValue`: [`ObservedValueOf`](RxJS.md#observedvalueof)<`O`\>, `outerIndex`: `number`, `innerIndex`: `number`) => `R` |
| `concurrent?` | `number` |

#### Returns

[`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, `R`\>

___

### mergeScan

▸ **mergeScan**<`T`, `R`\>(`accumulator`, `seed`, `concurrent?`): [`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, `R`\>

Applies an accumulator function over the source Observable where the
accumulator function itself returns an Observable, then each intermediate
Observable returned is merged into the output Observable.

<span class="informal">It's like [scan](RxJS.md#scan), but the Observables returned
by the accumulator are merged into the outer Observable.</span>

The first parameter of the `mergeScan` is an `accumulator` function which is
being called every time the source Observable emits a value. `mergeScan` will
subscribe to the value returned by the `accumulator` function and will emit
values to the subscriber emitted by inner Observable.

The `accumulator` function is being called with three parameters passed to it:
`acc`, `value` and `index`. The `acc` parameter is used as the state parameter
whose value is initially set to the `seed` parameter (the second parameter
passed to the `mergeScan` operator).

`mergeScan` internally keeps the value of the `acc` parameter: as long as the
source Observable emits without inner Observable emitting, the `acc` will be
set to `seed`. The next time the inner Observable emits a value, `mergeScan`
will internally remember it and it will be passed to the `accumulator`
function as `acc` parameter the next time source emits.

The `value` parameter of the `accumulator` function is the value emitted by the
source Observable, while the `index` is a number which represent the order of the
current emission by the source Observable. It starts with 0.

The last parameter to the `mergeScan` is the `concurrent` value which defaults
to Infinity. It represent the maximum number of inner Observable subscriptions
at a time.

## Example
Count the number of click events
```ts
import { fromEvent, of } from 'rxjs';
import { mapTo, mergeScan } from 'rxjs/operators';

const click$ = fromEvent(document, 'click');
const one$ = click$.pipe(mapTo(1));
const seed = 0;
const count$ = one$.pipe(
  mergeScan((acc, one) => of(acc + one), seed),
);
count$.subscribe(x => console.log(x));

// Results:
// 1
// 2
// 3
// 4
// ...and so on for each click
```

**`see`** [scan](RxJS.md#scan)

**`see`** [switchScan](RxJS.md#switchscan)

#### Type parameters

| Name |
| :------ |
| `T` |
| `R` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `accumulator` | (`acc`: `R`, `value`: `T`, `index`: `number`) => [`ObservableInput`](RxJS.md#observableinput)<`R`\> | The accumulator function called on each source value. |
| `seed` | `R` | The initial accumulation value. |
| `concurrent?` | `number` | - |

#### Returns

[`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, `R`\>

A function that returns an Observable of the accumulated values.

___

### mergeWith

▸ **mergeWith**<`T`, `A`\>(...`otherSources`): [`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, `T` \| `A`[`number`]\>

Merge the values from all observables to an single observable result.

Creates an observable, that when subscribed to, subscribes to the source
observable, and all other sources provided as arguments. All values from
every source are emitted from the resulting subscription.

When all sources complete, the resulting observable will complete.

When any one source errors, the resulting observable will error.

### Example

Joining all outputs from multiple user input event streams:

```ts
import { fromEvent } from 'rxjs';
import { map, mergeWith } from 'rxjs/operators';

const clicks$ = fromEvent(document, 'click').pipe(map(() => 'click'));
const mousemoves$ = fromEvent(document, 'mousemove').pipe(map(() => 'mousemove'));
const dblclicks$ = fromEvent(document, 'dblclick').pipe(map(() => 'dblclick'));

mousemoves$.pipe(
  mergeWith(clicks$, dblclicks$),
)
.subscribe(x => console.log(x));

// result (assuming user interactions)
// "mousemove"
// "mousemove"
// "mousemove"
// "click"
// "click"
// "dblclick"
```

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `A` | extends readonly `unknown`[] |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...otherSources` | [...ObservableInputTuple<A\>[]] | the sources to combine the current source with. |

#### Returns

[`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, `T` \| `A`[`number`]\>

A function that returns an Observable that merges the values from
all given Observables.

___

### min

▸ **min**<`T`\>(`comparer?`): [`MonoTypeOperatorFunction`](../interfaces/RxJS.MonoTypeOperatorFunction.md)<`T`\>

The Min operator operates on an Observable that emits numbers (or items that can be compared with a provided function),
and when source Observable completes it emits a single item: the item with the smallest value.

![](min.png)

## Examples
Get the minimal value of a series of numbers
```ts
import { of } from 'rxjs';
import { min } from 'rxjs/operators';

of(5, 4, 7, 2, 8).pipe(
  min(),
)
.subscribe(x => console.log(x)); // -> 2
```

Use a comparer function to get the minimal item
```typescript
import { of } from 'rxjs';
import { min } from 'rxjs/operators';

interface Person {
  age: number,
  name: string
}
of(
  {age: 7, name: 'Foo'},
  {age: 5, name: 'Bar'},
  {age: 9, name: 'Beer'},
).pipe(
  min<Person>( (a: Person, b: Person) => a.age < b.age ? -1 : 1),
)
.subscribe((x: Person) => console.log(x.name)); // -> 'Bar'
```

**`see`** [max](RxJS.md#max)

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `comparer?` | (`x`: `T`, `y`: `T`) => `number` |

#### Returns

[`MonoTypeOperatorFunction`](../interfaces/RxJS.MonoTypeOperatorFunction.md)<`T`\>

A function that returns an Observable that emits item with the
smallest value.

___

### multicast

▸ **multicast**<`T`\>(`subject`): [`UnaryFunction`](../interfaces/RxJS.UnaryFunction.md)<[`Observable`](../classes/RxJS.Observable.md)<`T`\>, [`ConnectableObservable`](../classes/RxJS.ConnectableObservable.md)<`T`\>\>

An operator that creates a [ConnectableObservable](../classes/RxJS.ConnectableObservable.md), that when connected,
with the `connect` method, will use the provided subject to multicast the values
from the source to all consumers.

**`deprecated`** Will be removed in v8. To create a connectable observable, use [connectable](RxJS.md#connectable).
If you're using [refCount](RxJS.md#refcount) after `multicast`, use the [share](RxJS.md#share) operator instead.
`multicast(subject), refCount()` is equivalent to
`share({ connector: () => subject, resetOnError: false, resetOnComplete: false, resetOnRefCountZero: false })`.
Details: https://rxjs.dev/deprecations/multicasting

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `subject` | [`Subject`](../classes/RxJS.Subject.md)<`T`\> | The subject to multicast through. |

#### Returns

[`UnaryFunction`](../interfaces/RxJS.UnaryFunction.md)<[`Observable`](../classes/RxJS.Observable.md)<`T`\>, [`ConnectableObservable`](../classes/RxJS.ConnectableObservable.md)<`T`\>\>

A function that returns a [ConnectableObservable](../classes/RxJS.ConnectableObservable.md)

▸ **multicast**<`T`, `O`\>(`subject`, `selector`): [`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, [`ObservedValueOf`](RxJS.md#observedvalueof)<`O`\>\>

Because this is deprecated in favor of the [connect](RxJS.md#connect) operator, and was otherwise poorly documented,
rather than duplicate the effort of documenting the same behavior, please see documentation for the
[connect](RxJS.md#connect) operator.

**`deprecated`** Will be removed in v8. Use the [connect](RxJS.md#connect) operator instead.
`multicast(subject, selector)` is equivalent to
`connect(selector, { connector: () => subject })`.
Details: https://rxjs.dev/deprecations/multicasting

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `O` | extends [`ObservableInput`](RxJS.md#observableinput)<`any`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `subject` | [`Subject`](../classes/RxJS.Subject.md)<`T`\> | The subject used to multicast. |
| `selector` | (`shared`: [`Observable`](../classes/RxJS.Observable.md)<`T`\>) => `O` | A setup function to setup the multicast |

#### Returns

[`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, [`ObservedValueOf`](RxJS.md#observedvalueof)<`O`\>\>

A function that returns an observable that mirrors the observable returned by the selector.

▸ **multicast**<`T`\>(`subjectFactory`): [`UnaryFunction`](../interfaces/RxJS.UnaryFunction.md)<[`Observable`](../classes/RxJS.Observable.md)<`T`\>, [`ConnectableObservable`](../classes/RxJS.ConnectableObservable.md)<`T`\>\>

An operator that creates a [ConnectableObservable](../classes/RxJS.ConnectableObservable.md), that when connected,
with the `connect` method, will use the provided subject to multicast the values
from the source to all consumers.

**`deprecated`** Will be removed in v8. To create a connectable observable, use [connectable](RxJS.md#connectable).
If you're using [refCount](RxJS.md#refcount) after `multicast`, use the [share](RxJS.md#share) operator instead.
`multicast(() => new BehaviorSubject('test')), refCount()` is equivalent to
`share({ connector: () => new BehaviorSubject('test') })`.
Details: https://rxjs.dev/deprecations/multicasting

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `subjectFactory` | () => [`Subject`](../classes/RxJS.Subject.md)<`T`\> | A factory that will be called to create the subject. Passing a function here will cause the underlying subject to be "reset" on error, completion, or refCounted unsubscription of the source. |

#### Returns

[`UnaryFunction`](../interfaces/RxJS.UnaryFunction.md)<[`Observable`](../classes/RxJS.Observable.md)<`T`\>, [`ConnectableObservable`](../classes/RxJS.ConnectableObservable.md)<`T`\>\>

A function that returns a [ConnectableObservable](../classes/RxJS.ConnectableObservable.md)

▸ **multicast**<`T`, `O`\>(`subjectFactory`, `selector`): [`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, [`ObservedValueOf`](RxJS.md#observedvalueof)<`O`\>\>

Because this is deprecated in favor of the [connect](RxJS.md#connect) operator, and was otherwise poorly documented,
rather than duplicate the effort of documenting the same behavior, please see documentation for the
[connect](RxJS.md#connect) operator.

**`deprecated`** Will be removed in v8. Use the [connect](RxJS.md#connect) operator instead.
`multicast(subjectFactory, selector)` is equivalent to
`connect(selector, { connector: subjectFactory })`.
Details: https://rxjs.dev/deprecations/multicasting

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `O` | extends [`ObservableInput`](RxJS.md#observableinput)<`any`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `subjectFactory` | () => [`Subject`](../classes/RxJS.Subject.md)<`T`\> | A factory that creates the subject used to multicast. |
| `selector` | (`shared`: [`Observable`](../classes/RxJS.Observable.md)<`T`\>) => `O` | A function to setup the multicast and select the output. |

#### Returns

[`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, [`ObservedValueOf`](RxJS.md#observedvalueof)<`O`\>\>

A function that returns an observable that mirrors the observable returned by the selector.

___

### never

▸ **never**(): [`Observable`](../classes/RxJS.Observable.md)<`never`\>

**`deprecated`** Replaced with the [NEVER](RxJS.md#never) constant. Will be removed in v8.

#### Returns

[`Observable`](../classes/RxJS.Observable.md)<`never`\>

___

### noop

▸ **noop**(): `void`

#### Returns

`void`

___

### observeOn

▸ **observeOn**<`T`\>(`scheduler`, `delay?`): [`MonoTypeOperatorFunction`](../interfaces/RxJS.MonoTypeOperatorFunction.md)<`T`\>

Re-emits all notifications from source Observable with specified scheduler.

<span class="informal">Ensure a specific scheduler is used, from outside of an Observable.</span>

`observeOn` is an operator that accepts a scheduler as a first parameter, which will be used to reschedule
notifications emitted by the source Observable. It might be useful, if you do not have control over
internal scheduler of a given Observable, but want to control when its values are emitted nevertheless.

Returned Observable emits the same notifications (nexted values, complete and error events) as the source Observable,
but rescheduled with provided scheduler. Note that this doesn't mean that source Observables internal
scheduler will be replaced in any way. Original scheduler still will be used, but when the source Observable emits
notification, it will be immediately scheduled again - this time with scheduler passed to `observeOn`.
An anti-pattern would be calling `observeOn` on Observable that emits lots of values synchronously, to split
that emissions into asynchronous chunks. For this to happen, scheduler would have to be passed into the source
Observable directly (usually into the operator that creates it). `observeOn` simply delays notifications a
little bit more, to ensure that they are emitted at expected moments.

As a matter of fact, `observeOn` accepts second parameter, which specifies in milliseconds with what delay notifications
will be emitted. The main difference between [delay](RxJS.md#delay) operator and `observeOn` is that `observeOn`
will delay all notifications - including error notifications - while `delay` will pass through error
from source Observable immediately when it is emitted. In general it is highly recommended to use `delay` operator
for any kind of delaying of values in the stream, while using `observeOn` to specify which scheduler should be used
for notification emissions in general.

## Example

Ensure values in subscribe are called just before browser repaint.

```ts
import { interval, animationFrameScheduler } from 'rxjs';
import { observeOn } from 'rxjs/operators';

const someDiv = document.querySelector("#someDiv");
const intervals = interval(10);                // Intervals are scheduled
                                               // with async scheduler by default...
intervals.pipe(
  observeOn(animationFrameScheduler),          // ...but we will observe on animationFrame
)                                              // scheduler to ensure smooth animation.
.subscribe(val => {
  someDiv.style.height = val + 'px';
});
```

**`see`** [delay](RxJS.md#delay)

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `scheduler` | [`SchedulerLike`](../interfaces/RxJS.SchedulerLike.md) | Scheduler that will be used to reschedule notifications from source Observable. |
| `delay?` | `number` | - |

#### Returns

[`MonoTypeOperatorFunction`](../interfaces/RxJS.MonoTypeOperatorFunction.md)<`T`\>

A function that returns an Observable that emits the same
notifications as the source Observable, but with provided scheduler.

___

### of

▸ **of**(`value`): [`Observable`](../classes/RxJS.Observable.md)<``null``\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | ``null`` |

#### Returns

[`Observable`](../classes/RxJS.Observable.md)<``null``\>

▸ **of**(`value`): [`Observable`](../classes/RxJS.Observable.md)<`undefined`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `undefined` |

#### Returns

[`Observable`](../classes/RxJS.Observable.md)<`undefined`\>

▸ **of**(`scheduler`): [`Observable`](../classes/RxJS.Observable.md)<`never`\>

**`deprecated`** The `scheduler` parameter will be removed in v8. Use `scheduled`. Details: https://rxjs.dev/deprecations/scheduler-argument

#### Parameters

| Name | Type |
| :------ | :------ |
| `scheduler` | [`SchedulerLike`](../interfaces/RxJS.SchedulerLike.md) |

#### Returns

[`Observable`](../classes/RxJS.Observable.md)<`never`\>

▸ **of**<`A`\>(...`valuesAndScheduler`): [`Observable`](../classes/RxJS.Observable.md)<[`ValueFromArray`](RxJS.md#valuefromarray)<`A`\>\>

**`deprecated`** The `scheduler` parameter will be removed in v8. Use `scheduled`. Details: https://rxjs.dev/deprecations/scheduler-argument

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends readonly `unknown`[] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...valuesAndScheduler` | [...A[], [`SchedulerLike`](../interfaces/RxJS.SchedulerLike.md)] |

#### Returns

[`Observable`](../classes/RxJS.Observable.md)<[`ValueFromArray`](RxJS.md#valuefromarray)<`A`\>\>

▸ **of**(): [`Observable`](../classes/RxJS.Observable.md)<`never`\>

#### Returns

[`Observable`](../classes/RxJS.Observable.md)<`never`\>

▸ **of**<`T`\>(): [`Observable`](../classes/RxJS.Observable.md)<`T`\>

**`deprecated`** Do not specify explicit type parameters. Signatures with type parameters that cannot be inferred will be removed in v8.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Observable`](../classes/RxJS.Observable.md)<`T`\>

▸ **of**<`T`\>(`value`): [`Observable`](../classes/RxJS.Observable.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |

#### Returns

[`Observable`](../classes/RxJS.Observable.md)<`T`\>

▸ **of**<`A`\>(...`values`): [`Observable`](../classes/RxJS.Observable.md)<[`ValueFromArray`](RxJS.md#valuefromarray)<`A`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends readonly `unknown`[] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...values` | `A` |

#### Returns

[`Observable`](../classes/RxJS.Observable.md)<[`ValueFromArray`](RxJS.md#valuefromarray)<`A`\>\>

___

### onErrorResumeNext

▸ **onErrorResumeNext**<`A`\>(`sources`): [`Observable`](../classes/RxJS.Observable.md)<`A`[`number`]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends readonly `unknown`[] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `sources` | [...ObservableInputTuple<A\>[]] |

#### Returns

[`Observable`](../classes/RxJS.Observable.md)<`A`[`number`]\>

▸ **onErrorResumeNext**<`A`\>(...`sources`): [`Observable`](../classes/RxJS.Observable.md)<`A`[`number`]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends readonly `unknown`[] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...sources` | [...ObservableInputTuple<A\>[]] |

#### Returns

[`Observable`](../classes/RxJS.Observable.md)<`A`[`number`]\>

___

### pairs

▸ **pairs**<`T`\>(`arr`, `scheduler?`): [`Observable`](../classes/RxJS.Observable.md)<[`string`, `T`]\>

**`deprecated`** Use `from(Object.entries(obj))` instead. Will be removed in v8.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `arr` | readonly `T`[] |
| `scheduler?` | [`SchedulerLike`](../interfaces/RxJS.SchedulerLike.md) |

#### Returns

[`Observable`](../classes/RxJS.Observable.md)<[`string`, `T`]\>

▸ **pairs**<`O`\>(`obj`, `scheduler?`): [`Observable`](../classes/RxJS.Observable.md)<[keyof `O`, `O`[keyof `O`]]\>

**`deprecated`** Use `from(Object.entries(obj))` instead. Will be removed in v8.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `O` | extends `Record`<`string`, `unknown`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `O` |
| `scheduler?` | [`SchedulerLike`](../interfaces/RxJS.SchedulerLike.md) |

#### Returns

[`Observable`](../classes/RxJS.Observable.md)<[keyof `O`, `O`[keyof `O`]]\>

▸ **pairs**<`T`\>(`iterable`, `scheduler?`): [`Observable`](../classes/RxJS.Observable.md)<[`string`, `T`]\>

**`deprecated`** Use `from(Object.entries(obj))` instead. Will be removed in v8.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `iterable` | `Iterable`<`T`\> |
| `scheduler?` | [`SchedulerLike`](../interfaces/RxJS.SchedulerLike.md) |

#### Returns

[`Observable`](../classes/RxJS.Observable.md)<[`string`, `T`]\>

▸ **pairs**(`n`, `scheduler?`): [`Observable`](../classes/RxJS.Observable.md)<[`never`, `never`]\>

**`deprecated`** Use `from(Object.entries(obj))` instead. Will be removed in v8.

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` \| `bigint` \| `boolean` \| `symbol` \| (...`args`: `any`[]) => `any` |
| `scheduler?` | [`SchedulerLike`](../interfaces/RxJS.SchedulerLike.md) |

#### Returns

[`Observable`](../classes/RxJS.Observable.md)<[`never`, `never`]\>

___

### pairwise

▸ **pairwise**<`T`\>(): [`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, [`T`, `T`]\>

Groups pairs of consecutive emissions together and emits them as an array of
two values.

<span class="informal">Puts the current value and previous value together as
an array, and emits that.</span>

![](pairwise.png)

The Nth emission from the source Observable will cause the output Observable
to emit an array [(N-1)th, Nth] of the previous and the current value, as a
pair. For this reason, `pairwise` emits on the second and subsequent
emissions from the source Observable, but not on the first emission, because
there is no previous value in that case.

## Example
On every click (starting from the second), emit the relative distance to the previous click
```ts
import { fromEvent } from 'rxjs';
import { pairwise, map } from 'rxjs/operators';

const clicks = fromEvent(document, 'click');
const pairs = clicks.pipe(pairwise());
const distance = pairs.pipe(
  map(pair => {
    const x0 = pair[0].clientX;
    const y0 = pair[0].clientY;
    const x1 = pair[1].clientX;
    const y1 = pair[1].clientY;
    return Math.sqrt(Math.pow(x0 - x1, 2) + Math.pow(y0 - y1, 2));
  }),
);
distance.subscribe(x => console.log(x));
```

**`see`** [buffer](RxJS.md#buffer)

**`see`** [bufferCount](RxJS.md#buffercount)

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, [`T`, `T`]\>

A function that returns an Observable of pairs (as arrays) of
consecutive values from the source Observable.

___

### partition

▸ **partition**<`T`, `U`, `A`\>(`source`, `predicate`, `thisArg`): [[`Observable`](../classes/RxJS.Observable.md)<`U`\>, [`Observable`](../classes/RxJS.Observable.md)<`Exclude`<`T`, `U`\>\>]

**`deprecated`** Use a closure instead of a `thisArg`. Signatures accepting a `thisArg` will be removed in v8.

#### Type parameters

| Name |
| :------ |
| `T` |
| `U` |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | [`ObservableInput`](RxJS.md#observableinput)<`T`\> |
| `predicate` | (`this`: `A`, `value`: `T`, `index`: `number`) => value is U |
| `thisArg` | `A` |

#### Returns

[[`Observable`](../classes/RxJS.Observable.md)<`U`\>, [`Observable`](../classes/RxJS.Observable.md)<`Exclude`<`T`, `U`\>\>]

▸ **partition**<`T`, `U`\>(`source`, `predicate`): [[`Observable`](../classes/RxJS.Observable.md)<`U`\>, [`Observable`](../classes/RxJS.Observable.md)<`Exclude`<`T`, `U`\>\>]

#### Type parameters

| Name |
| :------ |
| `T` |
| `U` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | [`ObservableInput`](RxJS.md#observableinput)<`T`\> |
| `predicate` | (`value`: `T`, `index`: `number`) => value is U |

#### Returns

[[`Observable`](../classes/RxJS.Observable.md)<`U`\>, [`Observable`](../classes/RxJS.Observable.md)<`Exclude`<`T`, `U`\>\>]

▸ **partition**<`T`, `A`\>(`source`, `predicate`, `thisArg`): [[`Observable`](../classes/RxJS.Observable.md)<`T`\>, [`Observable`](../classes/RxJS.Observable.md)<`T`\>]

**`deprecated`** Use a closure instead of a `thisArg`. Signatures accepting a `thisArg` will be removed in v8.

#### Type parameters

| Name |
| :------ |
| `T` |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | [`ObservableInput`](RxJS.md#observableinput)<`T`\> |
| `predicate` | (`this`: `A`, `value`: `T`, `index`: `number`) => `boolean` |
| `thisArg` | `A` |

#### Returns

[[`Observable`](../classes/RxJS.Observable.md)<`T`\>, [`Observable`](../classes/RxJS.Observable.md)<`T`\>]

▸ **partition**<`T`\>(`source`, `predicate`): [[`Observable`](../classes/RxJS.Observable.md)<`T`\>, [`Observable`](../classes/RxJS.Observable.md)<`T`\>]

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | [`ObservableInput`](RxJS.md#observableinput)<`T`\> |
| `predicate` | (`value`: `T`, `index`: `number`) => `boolean` |

#### Returns

[[`Observable`](../classes/RxJS.Observable.md)<`T`\>, [`Observable`](../classes/RxJS.Observable.md)<`T`\>]

___

### pipe

▸ **pipe**(): typeof [`identity`](RxJS.md#identity)

#### Returns

typeof [`identity`](RxJS.md#identity)

▸ **pipe**<`T`, `A`\>(`fn1`): [`UnaryFunction`](../interfaces/RxJS.UnaryFunction.md)<`T`, `A`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn1` | [`UnaryFunction`](../interfaces/RxJS.UnaryFunction.md)<`T`, `A`\> |

#### Returns

[`UnaryFunction`](../interfaces/RxJS.UnaryFunction.md)<`T`, `A`\>

▸ **pipe**<`T`, `A`, `B`\>(`fn1`, `fn2`): [`UnaryFunction`](../interfaces/RxJS.UnaryFunction.md)<`T`, `B`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `A` |
| `B` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn1` | [`UnaryFunction`](../interfaces/RxJS.UnaryFunction.md)<`T`, `A`\> |
| `fn2` | [`UnaryFunction`](../interfaces/RxJS.UnaryFunction.md)<`A`, `B`\> |

#### Returns

[`UnaryFunction`](../interfaces/RxJS.UnaryFunction.md)<`T`, `B`\>

▸ **pipe**<`T`, `A`, `B`, `C`\>(`fn1`, `fn2`, `fn3`): [`UnaryFunction`](../interfaces/RxJS.UnaryFunction.md)<`T`, `C`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `A` |
| `B` |
| `C` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn1` | [`UnaryFunction`](../interfaces/RxJS.UnaryFunction.md)<`T`, `A`\> |
| `fn2` | [`UnaryFunction`](../interfaces/RxJS.UnaryFunction.md)<`A`, `B`\> |
| `fn3` | [`UnaryFunction`](../interfaces/RxJS.UnaryFunction.md)<`B`, `C`\> |

#### Returns

[`UnaryFunction`](../interfaces/RxJS.UnaryFunction.md)<`T`, `C`\>

▸ **pipe**<`T`, `A`, `B`, `C`, `D`\>(`fn1`, `fn2`, `fn3`, `fn4`): [`UnaryFunction`](../interfaces/RxJS.UnaryFunction.md)<`T`, `D`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `A` |
| `B` |
| `C` |
| `D` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn1` | [`UnaryFunction`](../interfaces/RxJS.UnaryFunction.md)<`T`, `A`\> |
| `fn2` | [`UnaryFunction`](../interfaces/RxJS.UnaryFunction.md)<`A`, `B`\> |
| `fn3` | [`UnaryFunction`](../interfaces/RxJS.UnaryFunction.md)<`B`, `C`\> |
| `fn4` | [`UnaryFunction`](../interfaces/RxJS.UnaryFunction.md)<`C`, `D`\> |

#### Returns

[`UnaryFunction`](../interfaces/RxJS.UnaryFunction.md)<`T`, `D`\>

▸ **pipe**<`T`, `A`, `B`, `C`, `D`, `E`\>(`fn1`, `fn2`, `fn3`, `fn4`, `fn5`): [`UnaryFunction`](../interfaces/RxJS.UnaryFunction.md)<`T`, `E`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `A` |
| `B` |
| `C` |
| `D` |
| `E` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn1` | [`UnaryFunction`](../interfaces/RxJS.UnaryFunction.md)<`T`, `A`\> |
| `fn2` | [`UnaryFunction`](../interfaces/RxJS.UnaryFunction.md)<`A`, `B`\> |
| `fn3` | [`UnaryFunction`](../interfaces/RxJS.UnaryFunction.md)<`B`, `C`\> |
| `fn4` | [`UnaryFunction`](../interfaces/RxJS.UnaryFunction.md)<`C`, `D`\> |
| `fn5` | [`UnaryFunction`](../interfaces/RxJS.UnaryFunction.md)<`D`, `E`\> |

#### Returns

[`UnaryFunction`](../interfaces/RxJS.UnaryFunction.md)<`T`, `E`\>

▸ **pipe**<`T`, `A`, `B`, `C`, `D`, `E`, `F`\>(`fn1`, `fn2`, `fn3`, `fn4`, `fn5`, `fn6`): [`UnaryFunction`](../interfaces/RxJS.UnaryFunction.md)<`T`, `F`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `A` |
| `B` |
| `C` |
| `D` |
| `E` |
| `F` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn1` | [`UnaryFunction`](../interfaces/RxJS.UnaryFunction.md)<`T`, `A`\> |
| `fn2` | [`UnaryFunction`](../interfaces/RxJS.UnaryFunction.md)<`A`, `B`\> |
| `fn3` | [`UnaryFunction`](../interfaces/RxJS.UnaryFunction.md)<`B`, `C`\> |
| `fn4` | [`UnaryFunction`](../interfaces/RxJS.UnaryFunction.md)<`C`, `D`\> |
| `fn5` | [`UnaryFunction`](../interfaces/RxJS.UnaryFunction.md)<`D`, `E`\> |
| `fn6` | [`UnaryFunction`](../interfaces/RxJS.UnaryFunction.md)<`E`, `F`\> |

#### Returns

[`UnaryFunction`](../interfaces/RxJS.UnaryFunction.md)<`T`, `F`\>

▸ **pipe**<`T`, `A`, `B`, `C`, `D`, `E`, `F`, `G`\>(`fn1`, `fn2`, `fn3`, `fn4`, `fn5`, `fn6`, `fn7`): [`UnaryFunction`](../interfaces/RxJS.UnaryFunction.md)<`T`, `G`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `A` |
| `B` |
| `C` |
| `D` |
| `E` |
| `F` |
| `G` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn1` | [`UnaryFunction`](../interfaces/RxJS.UnaryFunction.md)<`T`, `A`\> |
| `fn2` | [`UnaryFunction`](../interfaces/RxJS.UnaryFunction.md)<`A`, `B`\> |
| `fn3` | [`UnaryFunction`](../interfaces/RxJS.UnaryFunction.md)<`B`, `C`\> |
| `fn4` | [`UnaryFunction`](../interfaces/RxJS.UnaryFunction.md)<`C`, `D`\> |
| `fn5` | [`UnaryFunction`](../interfaces/RxJS.UnaryFunction.md)<`D`, `E`\> |
| `fn6` | [`UnaryFunction`](../interfaces/RxJS.UnaryFunction.md)<`E`, `F`\> |
| `fn7` | [`UnaryFunction`](../interfaces/RxJS.UnaryFunction.md)<`F`, `G`\> |

#### Returns

[`UnaryFunction`](../interfaces/RxJS.UnaryFunction.md)<`T`, `G`\>

▸ **pipe**<`T`, `A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`\>(`fn1`, `fn2`, `fn3`, `fn4`, `fn5`, `fn6`, `fn7`, `fn8`): [`UnaryFunction`](../interfaces/RxJS.UnaryFunction.md)<`T`, `H`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `A` |
| `B` |
| `C` |
| `D` |
| `E` |
| `F` |
| `G` |
| `H` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn1` | [`UnaryFunction`](../interfaces/RxJS.UnaryFunction.md)<`T`, `A`\> |
| `fn2` | [`UnaryFunction`](../interfaces/RxJS.UnaryFunction.md)<`A`, `B`\> |
| `fn3` | [`UnaryFunction`](../interfaces/RxJS.UnaryFunction.md)<`B`, `C`\> |
| `fn4` | [`UnaryFunction`](../interfaces/RxJS.UnaryFunction.md)<`C`, `D`\> |
| `fn5` | [`UnaryFunction`](../interfaces/RxJS.UnaryFunction.md)<`D`, `E`\> |
| `fn6` | [`UnaryFunction`](../interfaces/RxJS.UnaryFunction.md)<`E`, `F`\> |
| `fn7` | [`UnaryFunction`](../interfaces/RxJS.UnaryFunction.md)<`F`, `G`\> |
| `fn8` | [`UnaryFunction`](../interfaces/RxJS.UnaryFunction.md)<`G`, `H`\> |

#### Returns

[`UnaryFunction`](../interfaces/RxJS.UnaryFunction.md)<`T`, `H`\>

▸ **pipe**<`T`, `A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`\>(`fn1`, `fn2`, `fn3`, `fn4`, `fn5`, `fn6`, `fn7`, `fn8`, `fn9`): [`UnaryFunction`](../interfaces/RxJS.UnaryFunction.md)<`T`, `I`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `A` |
| `B` |
| `C` |
| `D` |
| `E` |
| `F` |
| `G` |
| `H` |
| `I` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn1` | [`UnaryFunction`](../interfaces/RxJS.UnaryFunction.md)<`T`, `A`\> |
| `fn2` | [`UnaryFunction`](../interfaces/RxJS.UnaryFunction.md)<`A`, `B`\> |
| `fn3` | [`UnaryFunction`](../interfaces/RxJS.UnaryFunction.md)<`B`, `C`\> |
| `fn4` | [`UnaryFunction`](../interfaces/RxJS.UnaryFunction.md)<`C`, `D`\> |
| `fn5` | [`UnaryFunction`](../interfaces/RxJS.UnaryFunction.md)<`D`, `E`\> |
| `fn6` | [`UnaryFunction`](../interfaces/RxJS.UnaryFunction.md)<`E`, `F`\> |
| `fn7` | [`UnaryFunction`](../interfaces/RxJS.UnaryFunction.md)<`F`, `G`\> |
| `fn8` | [`UnaryFunction`](../interfaces/RxJS.UnaryFunction.md)<`G`, `H`\> |
| `fn9` | [`UnaryFunction`](../interfaces/RxJS.UnaryFunction.md)<`H`, `I`\> |

#### Returns

[`UnaryFunction`](../interfaces/RxJS.UnaryFunction.md)<`T`, `I`\>

▸ **pipe**<`T`, `A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`\>(`fn1`, `fn2`, `fn3`, `fn4`, `fn5`, `fn6`, `fn7`, `fn8`, `fn9`, ...`fns`): [`UnaryFunction`](../interfaces/RxJS.UnaryFunction.md)<`T`, `unknown`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `A` |
| `B` |
| `C` |
| `D` |
| `E` |
| `F` |
| `G` |
| `H` |
| `I` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn1` | [`UnaryFunction`](../interfaces/RxJS.UnaryFunction.md)<`T`, `A`\> |
| `fn2` | [`UnaryFunction`](../interfaces/RxJS.UnaryFunction.md)<`A`, `B`\> |
| `fn3` | [`UnaryFunction`](../interfaces/RxJS.UnaryFunction.md)<`B`, `C`\> |
| `fn4` | [`UnaryFunction`](../interfaces/RxJS.UnaryFunction.md)<`C`, `D`\> |
| `fn5` | [`UnaryFunction`](../interfaces/RxJS.UnaryFunction.md)<`D`, `E`\> |
| `fn6` | [`UnaryFunction`](../interfaces/RxJS.UnaryFunction.md)<`E`, `F`\> |
| `fn7` | [`UnaryFunction`](../interfaces/RxJS.UnaryFunction.md)<`F`, `G`\> |
| `fn8` | [`UnaryFunction`](../interfaces/RxJS.UnaryFunction.md)<`G`, `H`\> |
| `fn9` | [`UnaryFunction`](../interfaces/RxJS.UnaryFunction.md)<`H`, `I`\> |
| `...fns` | [`UnaryFunction`](../interfaces/RxJS.UnaryFunction.md)<`any`, `any`\>[] |

#### Returns

[`UnaryFunction`](../interfaces/RxJS.UnaryFunction.md)<`T`, `unknown`\>

___

### pluck

▸ **pluck**<`T`, `K1`\>(`k1`): [`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, `T`[`K1`]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `K1` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `k1` | `K1` |

#### Returns

[`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, `T`[`K1`]\>

▸ **pluck**<`T`, `K1`, `K2`\>(`k1`, `k2`): [`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, `T`[`K1`][`K2`]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `K1` | extends `string` \| `number` \| `symbol` |
| `K2` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `k1` | `K1` |
| `k2` | `K2` |

#### Returns

[`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, `T`[`K1`][`K2`]\>

▸ **pluck**<`T`, `K1`, `K2`, `K3`\>(`k1`, `k2`, `k3`): [`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, `T`[`K1`][`K2`][`K3`]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `K1` | extends `string` \| `number` \| `symbol` |
| `K2` | extends `string` \| `number` \| `symbol` |
| `K3` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `k1` | `K1` |
| `k2` | `K2` |
| `k3` | `K3` |

#### Returns

[`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, `T`[`K1`][`K2`][`K3`]\>

▸ **pluck**<`T`, `K1`, `K2`, `K3`, `K4`\>(`k1`, `k2`, `k3`, `k4`): [`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, `T`[`K1`][`K2`][`K3`][`K4`]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `K1` | extends `string` \| `number` \| `symbol` |
| `K2` | extends `string` \| `number` \| `symbol` |
| `K3` | extends `string` \| `number` \| `symbol` |
| `K4` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `k1` | `K1` |
| `k2` | `K2` |
| `k3` | `K3` |
| `k4` | `K4` |

#### Returns

[`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, `T`[`K1`][`K2`][`K3`][`K4`]\>

▸ **pluck**<`T`, `K1`, `K2`, `K3`, `K4`, `K5`\>(`k1`, `k2`, `k3`, `k4`, `k5`): [`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, `T`[`K1`][`K2`][`K3`][`K4`][`K5`]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `K1` | extends `string` \| `number` \| `symbol` |
| `K2` | extends `string` \| `number` \| `symbol` |
| `K3` | extends `string` \| `number` \| `symbol` |
| `K4` | extends `string` \| `number` \| `symbol` |
| `K5` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `k1` | `K1` |
| `k2` | `K2` |
| `k3` | `K3` |
| `k4` | `K4` |
| `k5` | `K5` |

#### Returns

[`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, `T`[`K1`][`K2`][`K3`][`K4`][`K5`]\>

▸ **pluck**<`T`, `K1`, `K2`, `K3`, `K4`, `K5`, `K6`\>(`k1`, `k2`, `k3`, `k4`, `k5`, `k6`): [`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, `T`[`K1`][`K2`][`K3`][`K4`][`K5`][`K6`]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `K1` | extends `string` \| `number` \| `symbol` |
| `K2` | extends `string` \| `number` \| `symbol` |
| `K3` | extends `string` \| `number` \| `symbol` |
| `K4` | extends `string` \| `number` \| `symbol` |
| `K5` | extends `string` \| `number` \| `symbol` |
| `K6` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `k1` | `K1` |
| `k2` | `K2` |
| `k3` | `K3` |
| `k4` | `K4` |
| `k5` | `K5` |
| `k6` | `K6` |

#### Returns

[`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, `T`[`K1`][`K2`][`K3`][`K4`][`K5`][`K6`]\>

▸ **pluck**<`T`, `K1`, `K2`, `K3`, `K4`, `K5`, `K6`\>(`k1`, `k2`, `k3`, `k4`, `k5`, `k6`, ...`rest`): [`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, `unknown`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `K1` | extends `string` \| `number` \| `symbol` |
| `K2` | extends `string` \| `number` \| `symbol` |
| `K3` | extends `string` \| `number` \| `symbol` |
| `K4` | extends `string` \| `number` \| `symbol` |
| `K5` | extends `string` \| `number` \| `symbol` |
| `K6` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `k1` | `K1` |
| `k2` | `K2` |
| `k3` | `K3` |
| `k4` | `K4` |
| `k5` | `K5` |
| `k6` | `K6` |
| `...rest` | `string`[] |

#### Returns

[`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, `unknown`\>

▸ **pluck**<`T`\>(...`properties`): [`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, `unknown`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...properties` | `string`[] |

#### Returns

[`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, `unknown`\>

___

### publish

▸ **publish**<`T`\>(): [`UnaryFunction`](../interfaces/RxJS.UnaryFunction.md)<[`Observable`](../classes/RxJS.Observable.md)<`T`\>, [`ConnectableObservable`](../classes/RxJS.ConnectableObservable.md)<`T`\>\>

Returns a connectable observable that, when connected, will multicast
all values through a single underlying [Subject](../classes/RxJS.Subject.md) instance.

**`deprecated`** Will be removed in v8. To create a connectable observable, use [connectable](RxJS.md#connectable).
`source.pipe(publish())` is equivalent to
`connectable(source, { connector: () => new Subject(), resetOnDisconnect: false })`.
If you're using [refCount](RxJS.md#refcount) after `publish`, use [share](RxJS.md#share) operator instead.
`source.pipe(publish(), refCount())` is equivalent to
`source.pipe(share({ resetOnError: false, resetOnComplete: false, resetOnRefCountZero: false }))`.
Details: https://rxjs.dev/deprecations/multicasting

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`UnaryFunction`](../interfaces/RxJS.UnaryFunction.md)<[`Observable`](../classes/RxJS.Observable.md)<`T`\>, [`ConnectableObservable`](../classes/RxJS.ConnectableObservable.md)<`T`\>\>

▸ **publish**<`T`, `O`\>(`selector`): [`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, [`ObservedValueOf`](RxJS.md#observedvalueof)<`O`\>\>

Returns an observable, that when subscribed to, creates an underlying [Subject](../classes/RxJS.Subject.md),
provides an observable view of it to a `selector` function, takes the observable result of
that selector function and subscribes to it, sending its values to the consumer, _then_ connects
the subject to the original source.

**`deprecated`** Will be removed in v8. Use the [connect](RxJS.md#connect) operator instead.
`publish(selector)` is equivalent to `connect(selector)`.
Details: https://rxjs.dev/deprecations/multicasting

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `O` | extends [`ObservableInput`](RxJS.md#observableinput)<`any`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `selector` | (`shared`: [`Observable`](../classes/RxJS.Observable.md)<`T`\>) => `O` | A function used to setup multicasting prior to automatic connection. |

#### Returns

[`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, [`ObservedValueOf`](RxJS.md#observedvalueof)<`O`\>\>

___

### publishBehavior

▸ **publishBehavior**<`T`\>(`initialValue`): [`UnaryFunction`](../interfaces/RxJS.UnaryFunction.md)<[`Observable`](../classes/RxJS.Observable.md)<`T`\>, [`ConnectableObservable`](../classes/RxJS.ConnectableObservable.md)<`T`\>\>

Creates a [ConnectableObservable](../classes/RxJS.ConnectableObservable.md) that utilizes a [BehaviorSubject](../classes/RxJS.BehaviorSubject.md).

**`deprecated`** Will be removed in v8. To create a connectable observable that uses a
[BehaviorSubject](../classes/RxJS.BehaviorSubject.md) under the hood, use [connectable](RxJS.md#connectable).
`source.pipe(publishBehavior(initValue))` is equivalent to
`connectable(source, { connector: () => new BehaviorSubject(initValue), resetOnDisconnect: false })`.
If you're using [refCount](RxJS.md#refcount) after `publishBehavior`, use the [share](RxJS.md#share) operator instead.
`source.pipe(publishBehavior(initValue), refCount())` is equivalent to
`source.pipe(share({ connector: () => new BehaviorSubject(initValue), resetOnError: false, resetOnComplete: false, resetOnRefCountZero: false  }))`.
Details: https://rxjs.dev/deprecations/multicasting

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `initialValue` | `T` | The initial value passed to the [BehaviorSubject](../classes/RxJS.BehaviorSubject.md). |

#### Returns

[`UnaryFunction`](../interfaces/RxJS.UnaryFunction.md)<[`Observable`](../classes/RxJS.Observable.md)<`T`\>, [`ConnectableObservable`](../classes/RxJS.ConnectableObservable.md)<`T`\>\>

A function that returns a [ConnectableObservable](../classes/RxJS.ConnectableObservable.md)

___

### publishLast

▸ **publishLast**<`T`\>(): [`UnaryFunction`](../interfaces/RxJS.UnaryFunction.md)<[`Observable`](../classes/RxJS.Observable.md)<`T`\>, [`ConnectableObservable`](../classes/RxJS.ConnectableObservable.md)<`T`\>\>

Returns a connectable observable sequence that shares a single subscription to the
underlying sequence containing only the last notification.

![](publishLast.png)

Similar to [publish](RxJS.md#publish), but it waits until the source observable completes and stores
the last emitted value.
Similarly to [publishReplay](RxJS.md#publishreplay) and [publishBehavior](RxJS.md#publishbehavior), this keeps storing the last
value even if it has no more subscribers. If subsequent subscriptions happen, they will
immediately get that last stored value and complete.

## Example

```ts
import { interval } from 'rxjs';
import { publishLast, tap, take } from 'rxjs/operators';

const connectable =
  interval(1000)
    .pipe(
      tap(x => console.log("side effect", x)),
      take(3),
      publishLast());

connectable.subscribe(
  x => console.log(  "Sub. A", x),
  err => console.log("Sub. A Error", err),
  () => console.log( "Sub. A Complete"));

connectable.subscribe(
  x => console.log(  "Sub. B", x),
  err => console.log("Sub. B Error", err),
  () => console.log( "Sub. B Complete"));

connectable.connect();

// Results:
//    "side effect 0"
//    "side effect 1"
//    "side effect 2"
//    "Sub. A 2"
//    "Sub. B 2"
//    "Sub. A Complete"
//    "Sub. B Complete"
```

**`see`** [ConnectableObservable](../classes/RxJS.ConnectableObservable.md)

**`see`** [publish](RxJS.md#publish)

**`see`** [publishReplay](RxJS.md#publishreplay)

**`see`** [publishBehavior](RxJS.md#publishbehavior)

**`deprecated`** Will be removed in v8. To create a connectable observable with an
[AsyncSubject](../classes/RxJS.AsyncSubject.md) under the hood, use [connectable](RxJS.md#connectable).
`source.pipe(publishLast())` is equivalent to
`connectable(source, { connector: () => new AsyncSubject(), resetOnDisconnect: false })`.
If you're using [refCount](RxJS.md#refcount) after `publishLast`, use the [share](RxJS.md#share) operator instead.
`source.pipe(publishLast(), refCount())` is equivalent to
`source.pipe(share({ connector: () => new AsyncSubject(), resetOnError: false, resetOnComplete: false, resetOnRefCountZero: false }))`.
Details: https://rxjs.dev/deprecations/multicasting

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`UnaryFunction`](../interfaces/RxJS.UnaryFunction.md)<[`Observable`](../classes/RxJS.Observable.md)<`T`\>, [`ConnectableObservable`](../classes/RxJS.ConnectableObservable.md)<`T`\>\>

A function that returns an Observable that emits elements of a
sequence produced by multicasting the source sequence.

___

### publishReplay

▸ **publishReplay**<`T`\>(`bufferSize?`, `windowTime?`, `timestampProvider?`): [`MonoTypeOperatorFunction`](../interfaces/RxJS.MonoTypeOperatorFunction.md)<`T`\>

Creates a [ConnectableObservable](../classes/RxJS.ConnectableObservable.md) that uses a [ReplaySubject](../classes/RxJS.ReplaySubject.md)
internally.

**`deprecated`** Will be removed in v8. To create a connectable observable that uses a
[ReplaySubject](../classes/RxJS.ReplaySubject.md) under the hood, use [connectable](RxJS.md#connectable).
`source.pipe(publishReplay(size, time, scheduler))` is equivalent to
`connectable(source, { connector: () => new ReplaySubject(size, time, scheduler), resetOnDisconnect: false })`.
If you're using [refCount](RxJS.md#refcount) after `publishReplay`, use the [share](RxJS.md#share) operator instead.
`publishReplay(size, time, scheduler), refCount()` is equivalent to
`share({ connector: () => new ReplaySubject(size, time, scheduler), resetOnError: false, resetOnComplete: false, resetOnRefCountZero: false })`.
Details: https://rxjs.dev/deprecations/multicasting

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `bufferSize?` | `number` | The buffer size for the underlying [ReplaySubject](../classes/RxJS.ReplaySubject.md). |
| `windowTime?` | `number` | The window time for the underlying [ReplaySubject](../classes/RxJS.ReplaySubject.md). |
| `timestampProvider?` | [`TimestampProvider`](../interfaces/RxJS.TimestampProvider.md) | The timestamp provider for the underlying [ReplaySubject](../classes/RxJS.ReplaySubject.md). |

#### Returns

[`MonoTypeOperatorFunction`](../interfaces/RxJS.MonoTypeOperatorFunction.md)<`T`\>

▸ **publishReplay**<`T`, `O`\>(`bufferSize`, `windowTime`, `selector`, `timestampProvider?`): [`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, [`ObservedValueOf`](RxJS.md#observedvalueof)<`O`\>\>

Creates an observable, that when subscribed to, will create a [ReplaySubject](../classes/RxJS.ReplaySubject.md),
and pass an observable from it (using [asObservable](api/index/class/Subject#asObservable)) to
the `selector` function, which then returns an observable that is subscribed to before
"connecting" the source to the internal `ReplaySubject`.

Since this is deprecated, for additional details see the documentation for [connect](RxJS.md#connect).

**`deprecated`** Will be removed in v8. Use the [connect](RxJS.md#connect) operator instead.
`source.pipe(publishReplay(size, window, selector, scheduler))` is equivalent to
`source.pipe(connect(selector, { connector: () => new ReplaySubject(size, window, scheduler) }))`.
Details: https://rxjs.dev/deprecations/multicasting

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `O` | extends [`ObservableInput`](RxJS.md#observableinput)<`any`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `bufferSize` | `undefined` \| `number` | The buffer size for the underlying [ReplaySubject](../classes/RxJS.ReplaySubject.md). |
| `windowTime` | `undefined` \| `number` | The window time for the underlying [ReplaySubject](../classes/RxJS.ReplaySubject.md). |
| `selector` | (`shared`: [`Observable`](../classes/RxJS.Observable.md)<`T`\>) => `O` | A function used to setup the multicast. |
| `timestampProvider?` | [`TimestampProvider`](../interfaces/RxJS.TimestampProvider.md) | The timestamp provider for the underlying [ReplaySubject](../classes/RxJS.ReplaySubject.md). |

#### Returns

[`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, [`ObservedValueOf`](RxJS.md#observedvalueof)<`O`\>\>

▸ **publishReplay**<`T`, `O`\>(`bufferSize`, `windowTime`, `selector`, `timestampProvider`): [`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, [`ObservedValueOf`](RxJS.md#observedvalueof)<`O`\>\>

Creates a [ConnectableObservable](../classes/RxJS.ConnectableObservable.md) that uses a [ReplaySubject](../classes/RxJS.ReplaySubject.md)
internally.

**`deprecated`** Will be removed in v8. To create a connectable observable that uses a
[ReplaySubject](../classes/RxJS.ReplaySubject.md) under the hood, use [connectable](RxJS.md#connectable).
`source.pipe(publishReplay(size, time, scheduler))` is equivalent to
`connectable(source, { connector: () => new ReplaySubject(size, time, scheduler), resetOnDisconnect: false })`.
If you're using [refCount](RxJS.md#refcount) after `publishReplay`, use the [share](RxJS.md#share) operator instead.
`publishReplay(size, time, scheduler), refCount()` is equivalent to
`share({ connector: () => new ReplaySubject(size, time, scheduler), resetOnError: false, resetOnComplete: false, resetOnRefCountZero: false })`.
Details: https://rxjs.dev/deprecations/multicasting

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `O` | extends [`ObservableInput`](RxJS.md#observableinput)<`any`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `bufferSize` | `undefined` \| `number` | The buffer size for the underlying [ReplaySubject](../classes/RxJS.ReplaySubject.md). |
| `windowTime` | `undefined` \| `number` | The window time for the underlying [ReplaySubject](../classes/RxJS.ReplaySubject.md). |
| `selector` | `undefined` | Passing `undefined` here determines that this operator will return a [ConnectableObservable](../classes/RxJS.ConnectableObservable.md). |
| `timestampProvider` | [`TimestampProvider`](../interfaces/RxJS.TimestampProvider.md) | The timestamp provider for the underlying [ReplaySubject](../classes/RxJS.ReplaySubject.md). |

#### Returns

[`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, [`ObservedValueOf`](RxJS.md#observedvalueof)<`O`\>\>

___

### race

▸ **race**<`T`\>(`inputs`): [`Observable`](../classes/RxJS.Observable.md)<`T`[`number`]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends readonly `unknown`[] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `inputs` | [...ObservableInputTuple<T\>[]] |

#### Returns

[`Observable`](../classes/RxJS.Observable.md)<`T`[`number`]\>

▸ **race**<`T`\>(...`inputs`): [`Observable`](../classes/RxJS.Observable.md)<`T`[`number`]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends readonly `unknown`[] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...inputs` | [...ObservableInputTuple<T\>[]] |

#### Returns

[`Observable`](../classes/RxJS.Observable.md)<`T`[`number`]\>

___

### raceWith

▸ **raceWith**<`T`, `A`\>(...`otherSources`): [`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, `T` \| `A`[`number`]\>

Creates an Observable that mirrors the first source Observable to emit a next,
error or complete notification from the combination of the Observable to which
the operator is applied and supplied Observables.

## Example

```ts
import { interval } from 'rxjs';
import { mapTo, raceWith } from 'rxjs/operators';

const obs1 = interval(1000).pipe(mapTo('fast one'));
const obs2 = interval(3000).pipe(mapTo('medium one'));
const obs3 = interval(5000).pipe(mapTo('slow one'));

obs2.pipe(
  raceWith(obs3, obs1)
).subscribe(
  winner => console.log(winner)
);

// Outputs
// a series of 'fast one'
```

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `A` | extends readonly `unknown`[] |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...otherSources` | [...ObservableInputTuple<A\>[]] | Sources used to race for which Observable emits first. |

#### Returns

[`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, `T` \| `A`[`number`]\>

A function that returns an Observable that mirrors the output of the
first Observable to emit an item.

___

### range

▸ **range**(`start`, `count?`): [`Observable`](../classes/RxJS.Observable.md)<`number`\>

**`deprecated`** The `scheduler` parameter will be removed in v8. Use `range(start, count).pipe(observeOn(scheduler))` instead. Details: Details: https://rxjs.dev/deprecations/scheduler-argument

#### Parameters

| Name | Type |
| :------ | :------ |
| `start` | `number` |
| `count?` | `number` |

#### Returns

[`Observable`](../classes/RxJS.Observable.md)<`number`\>

▸ **range**(`start`, `count`, `scheduler`): [`Observable`](../classes/RxJS.Observable.md)<`number`\>

**`deprecated`** The `scheduler` parameter will be removed in v8. Use `range(start, count).pipe(observeOn(scheduler))` instead. Details: Details: https://rxjs.dev/deprecations/scheduler-argument

#### Parameters

| Name | Type |
| :------ | :------ |
| `start` | `number` |
| `count` | `undefined` \| `number` |
| `scheduler` | [`SchedulerLike`](../interfaces/RxJS.SchedulerLike.md) |

#### Returns

[`Observable`](../classes/RxJS.Observable.md)<`number`\>

___

### reduce

▸ **reduce**<`V`, `A`\>(`accumulator`): [`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`V`, `V` \| `A`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `V` | `V` |
| `A` | `V` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `accumulator` | (`acc`: `V` \| `A`, `value`: `V`, `index`: `number`) => `A` |

#### Returns

[`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`V`, `V` \| `A`\>

▸ **reduce**<`V`, `A`\>(`accumulator`, `seed`): [`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`V`, `A`\>

#### Type parameters

| Name |
| :------ |
| `V` |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `accumulator` | (`acc`: `A`, `value`: `V`, `index`: `number`) => `A` |
| `seed` | `A` |

#### Returns

[`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`V`, `A`\>

▸ **reduce**<`V`, `A`, `S`\>(`accumulator`, `seed`): [`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`V`, `A`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `V` | `V` |
| `A` | `A` |
| `S` | `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `accumulator` | (`acc`: `A` \| `S`, `value`: `V`, `index`: `number`) => `A` |
| `seed` | `S` |

#### Returns

[`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`V`, `A`\>

___

### refCount

▸ **refCount**<`T`\>(): [`MonoTypeOperatorFunction`](../interfaces/RxJS.MonoTypeOperatorFunction.md)<`T`\>

Make a [ConnectableObservable](../classes/RxJS.ConnectableObservable.md) behave like a ordinary observable and automates the way
you can connect to it.

Internally it counts the subscriptions to the observable and subscribes (only once) to the source if
the number of subscriptions is larger than 0. If the number of subscriptions is smaller than 1, it
unsubscribes from the source. This way you can make sure that everything before the *published*
refCount has only a single subscription independently of the number of subscribers to the target
observable.

Note that using the [share](RxJS.md#share) operator is exactly the same as using the `multicast(() => new Subject())` operator
(making the observable hot) and the *refCount* operator in a sequence.

![](refCount.png)

## Example

In the following example there are two intervals turned into connectable observables
by using the *publish* operator. The first one uses the *refCount* operator, the
second one does not use it. You will notice that a connectable observable does nothing
until you call its connect function.

```ts
import { interval } from 'rxjs';
import { tap, publish, refCount } from 'rxjs/operators';

// Turn the interval observable into a ConnectableObservable (hot)
const refCountInterval = interval(400).pipe(
  tap((num) => console.log(`refCount ${num}`)),
  publish(),
  refCount()
);

const publishedInterval = interval(400).pipe(
  tap((num) => console.log(`publish ${num}`)),
  publish()
);

refCountInterval.subscribe();
refCountInterval.subscribe();
// 'refCount 0' -----> 'refCount 1' -----> etc
// All subscriptions will receive the same value and the tap (and
// every other operator) before the publish operator will be executed
// only once per event independently of the number of subscriptions.

publishedInterval.subscribe();
// Nothing happens until you call .connect() on the observable.
```

**`see`** [ConnectableObservable](../classes/RxJS.ConnectableObservable.md)

**`see`** [share](RxJS.md#share)

**`see`** [publish](RxJS.md#publish)

**`deprecated`** Replaced with the [share](RxJS.md#share) operator. How `share` is used
will depend on the connectable observable you created just prior to the
`refCount` operator.
Details: https://rxjs.dev/deprecations/multicasting

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`MonoTypeOperatorFunction`](../interfaces/RxJS.MonoTypeOperatorFunction.md)<`T`\>

A function that returns an Observable that automates the connection
to ConnectableObservable.

___

### repeat

▸ **repeat**<`T`\>(`count?`): [`MonoTypeOperatorFunction`](../interfaces/RxJS.MonoTypeOperatorFunction.md)<`T`\>

Returns an Observable that will resubscribe to the source stream when the source stream completes, at most count times.

<span class="informal">Repeats all values emitted on the source. It's like [retry](RxJS.md#retry), but for non error cases.</span>

![](repeat.png)

Similar to [retry](RxJS.md#retry), this operator repeats the stream of items emitted by the source for non error cases.
Repeat can be useful for creating observables that are meant to have some repeated pattern or rhythm.

Note: `repeat(0)` returns an empty observable and `repeat()` will repeat forever

## Example
Repeat a message stream
```ts
import { of } from 'rxjs';
import { repeat, delay } from 'rxjs/operators';

const source = of('Repeat message');
const example = source.pipe(repeat(3));
example.subscribe(x => console.log(x));

// Results
// Repeat message
// Repeat message
// Repeat message
```

Repeat 3 values, 2 times
```ts
import { interval } from 'rxjs';
import { repeat, take } from 'rxjs/operators';

const source = interval(1000);
const example = source.pipe(take(3), repeat(2));
example.subscribe(x => console.log(x));

// Results every second
// 0
// 1
// 2
// 0
// 1
// 2
```

**`see`** [repeatWhen](RxJS.md#repeatwhen)

**`see`** [retry](RxJS.md#retry)

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `count?` | `number` |

#### Returns

[`MonoTypeOperatorFunction`](../interfaces/RxJS.MonoTypeOperatorFunction.md)<`T`\>

A function that returns an Observable that will resubscribe to the
source stream when the source stream completes, at most `count` times.

___

### repeatWhen

▸ **repeatWhen**<`T`\>(`notifier`): [`MonoTypeOperatorFunction`](../interfaces/RxJS.MonoTypeOperatorFunction.md)<`T`\>

Returns an Observable that mirrors the source Observable with the exception of a `complete`. If the source
Observable calls `complete`, this method will emit to the Observable returned from `notifier`. If that Observable
calls `complete` or `error`, then this method will call `complete` or `error` on the child subscription. Otherwise
this method will resubscribe to the source Observable.

![](repeatWhen.png)

## Example
Repeat a message stream on click
```ts
import { of, fromEvent } from 'rxjs';
import { repeatWhen } from 'rxjs/operators';

const source = of('Repeat message');
const documentClick$ = fromEvent(document, 'click');

source.pipe(repeatWhen(() => documentClick$)
).subscribe(data => console.log(data))
```

**`see`** [repeat](RxJS.md#repeat)

**`see`** [retry](RxJS.md#retry)

**`see`** [retryWhen](RxJS.md#retrywhen)

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `notifier` | (`notifications`: [`Observable`](../classes/RxJS.Observable.md)<`void`\>) => [`Observable`](../classes/RxJS.Observable.md)<`any`\> | Receives an Observable of notifications with which a user can `complete` or `error`, aborting the repetition. |

#### Returns

[`MonoTypeOperatorFunction`](../interfaces/RxJS.MonoTypeOperatorFunction.md)<`T`\>

A function that returns an Observable that that mirrors the source
Observable with the exception of a `complete`.

___

### retry

▸ **retry**<`T`\>(`count?`): [`MonoTypeOperatorFunction`](../interfaces/RxJS.MonoTypeOperatorFunction.md)<`T`\>

Returns an Observable that mirrors the source Observable with the exception of an `error`. If the source Observable
calls `error`, this method will resubscribe to the source Observable for a maximum of `count` resubscriptions (given
as a number parameter) rather than propagating the `error` call.

![](retry.png)

Any and all items emitted by the source Observable will be emitted by the resulting Observable, even those emitted
during failed subscriptions. For example, if an Observable fails at first but emits [1, 2] then succeeds the second
time and emits: [1, 2, 3, 4, 5] then the complete stream of emissions and notifications
would be: [1, 2, 1, 2, 3, 4, 5, `complete`].

## Example
```ts
import { interval, of, throwError } from 'rxjs';
import { mergeMap, retry } from 'rxjs/operators';

const source = interval(1000);
const example = source.pipe(
  mergeMap(val => {
    if(val > 5){
      return throwError('Error!');
    }
    return of(val);
  }),
  //retry 2 times on error
  retry(2)
);

const subscribe = example.subscribe({
  next: val => console.log(val),
  error: val => console.log(`${val}: Retried 2 times then quit!`)
});

// Output:
// 0..1..2..3..4..5..
// 0..1..2..3..4..5..
// 0..1..2..3..4..5..
// "Error!: Retried 2 times then quit!"
```

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `count?` | `number` | Number of retry attempts before failing. |

#### Returns

[`MonoTypeOperatorFunction`](../interfaces/RxJS.MonoTypeOperatorFunction.md)<`T`\>

A function that returns an Observable that will resubscribe to the
source stream when the source stream errors, at most `count` times.

▸ **retry**<`T`\>(`config`): [`MonoTypeOperatorFunction`](../interfaces/RxJS.MonoTypeOperatorFunction.md)<`T`\>

Returns an observable that mirrors the source observable unless it errors. If it errors, the source observable
will be resubscribed to (or "retried") based on the configuration passed here. See documentation
for {@link RetryConfig} for more details.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `config` | `RetryConfig` | The retry configuration |

#### Returns

[`MonoTypeOperatorFunction`](../interfaces/RxJS.MonoTypeOperatorFunction.md)<`T`\>

___

### retryWhen

▸ **retryWhen**<`T`\>(`notifier`): [`MonoTypeOperatorFunction`](../interfaces/RxJS.MonoTypeOperatorFunction.md)<`T`\>

Returns an Observable that mirrors the source Observable with the exception of an `error`. If the source Observable
calls `error`, this method will emit the Throwable that caused the error to the Observable returned from `notifier`.
If that Observable calls `complete` or `error` then this method will call `complete` or `error` on the child
subscription. Otherwise this method will resubscribe to the source Observable.

![](retryWhen.png)

Retry an observable sequence on error based on custom criteria.

## Example
```ts
import { timer, interval } from 'rxjs';
import { map, tap, retryWhen, delayWhen } from 'rxjs/operators';

const source = interval(1000);
const example = source.pipe(
  map(val => {
    if (val > 5) {
      // error will be picked up by retryWhen
      throw val;
    }
    return val;
  }),
  retryWhen(errors =>
    errors.pipe(
      // log error message
      tap(val => console.log(`Value ${val} was too high!`)),
      // restart in 5 seconds
      delayWhen(val => timer(val * 1000))
    )
  )
);

const subscribe = example.subscribe(val => console.log(val));

// results:
//   0
//   1
//   2
//   3
//   4
//   5
//   "Value 6 was too high!"
//  --Wait 5 seconds then repeat
```

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `notifier` | (`errors`: [`Observable`](../classes/RxJS.Observable.md)<`any`\>) => [`Observable`](../classes/RxJS.Observable.md)<`any`\> | Receives an Observable of notifications with which a user can `complete` or `error`, aborting the retry. |

#### Returns

[`MonoTypeOperatorFunction`](../interfaces/RxJS.MonoTypeOperatorFunction.md)<`T`\>

A function that returns an Observable that mirrors the source
Observable with the exception of an `error`.

___

### sample

▸ **sample**<`T`\>(`notifier`): [`MonoTypeOperatorFunction`](../interfaces/RxJS.MonoTypeOperatorFunction.md)<`T`\>

Emits the most recently emitted value from the source Observable whenever
another Observable, the `notifier`, emits.

<span class="informal">It's like [sampleTime](RxJS.md#sampletime), but samples whenever
the `notifier` Observable emits something.</span>

![](sample.png)

Whenever the `notifier` Observable emits a value, `sample`
looks at the source Observable and emits whichever value it has most recently
emitted since the previous sampling, unless the source has not emitted
anything since the previous sampling. The `notifier` is subscribed to as soon
as the output Observable is subscribed.

## Example
On every click, sample the most recent "seconds" timer
```ts
import { fromEvent, interval } from 'rxjs';
import { sample } from 'rxjs/operators';

const seconds = interval(1000);
const clicks = fromEvent(document, 'click');
const result = seconds.pipe(sample(clicks));
result.subscribe(x => console.log(x));
```

**`see`** [audit](RxJS.md#audit)

**`see`** [debounce](RxJS.md#debounce)

**`see`** [sampleTime](RxJS.md#sampletime)

**`see`** [throttle](RxJS.md#throttle)

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `notifier` | [`Observable`](../classes/RxJS.Observable.md)<`any`\> | The Observable to use for sampling the source Observable. |

#### Returns

[`MonoTypeOperatorFunction`](../interfaces/RxJS.MonoTypeOperatorFunction.md)<`T`\>

A function that returns an Observable that emits the results of
sampling the values emitted by the source Observable whenever the notifier
Observable emits value or completes.

___

### sampleTime

▸ **sampleTime**<`T`\>(`period`, `scheduler?`): [`MonoTypeOperatorFunction`](../interfaces/RxJS.MonoTypeOperatorFunction.md)<`T`\>

Emits the most recently emitted value from the source Observable within
periodic time intervals.

<span class="informal">Samples the source Observable at periodic time
intervals, emitting what it samples.</span>

![](sampleTime.png)

`sampleTime` periodically looks at the source Observable and emits whichever
value it has most recently emitted since the previous sampling, unless the
source has not emitted anything since the previous sampling. The sampling
happens periodically in time every `period` milliseconds (or the time unit
defined by the optional `scheduler` argument). The sampling starts as soon as
the output Observable is subscribed.

## Example
Every second, emit the most recent click at most once
```ts
import { fromEvent } from 'rxjs';
import { sampleTime } from 'rxjs/operators';

const clicks = fromEvent(document, 'click');
const result = clicks.pipe(sampleTime(1000));
result.subscribe(x => console.log(x));
```

**`see`** [auditTime](RxJS.md#audittime)

**`see`** [debounceTime](RxJS.md#debouncetime)

**`see`** [delay](RxJS.md#delay)

**`see`** [sample](RxJS.md#sample)

**`see`** [throttleTime](RxJS.md#throttletime)

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `period` | `number` | The sampling period expressed in milliseconds or the time unit determined internally by the optional `scheduler`. |
| `scheduler?` | [`SchedulerLike`](../interfaces/RxJS.SchedulerLike.md) | - |

#### Returns

[`MonoTypeOperatorFunction`](../interfaces/RxJS.MonoTypeOperatorFunction.md)<`T`\>

A function that returns an Observable that emits the results of
sampling the values emitted by the source Observable at the specified time
interval.

___

### scan

▸ **scan**<`V`, `A`\>(`accumulator`): [`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`V`, `V` \| `A`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `V` | `V` |
| `A` | `V` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `accumulator` | (`acc`: `V` \| `A`, `value`: `V`, `index`: `number`) => `A` |

#### Returns

[`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`V`, `V` \| `A`\>

▸ **scan**<`V`, `A`\>(`accumulator`, `seed`): [`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`V`, `A`\>

#### Type parameters

| Name |
| :------ |
| `V` |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `accumulator` | (`acc`: `A`, `value`: `V`, `index`: `number`) => `A` |
| `seed` | `A` |

#### Returns

[`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`V`, `A`\>

▸ **scan**<`V`, `A`, `S`\>(`accumulator`, `seed`): [`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`V`, `A`\>

#### Type parameters

| Name |
| :------ |
| `V` |
| `A` |
| `S` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `accumulator` | (`acc`: `A` \| `S`, `value`: `V`, `index`: `number`) => `A` |
| `seed` | `S` |

#### Returns

[`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`V`, `A`\>

___

### scheduled

▸ **scheduled**<`T`\>(`input`, `scheduler`): [`Observable`](../classes/RxJS.Observable.md)<`T`\>

Converts from a common [ObservableInput](RxJS.md#observableinput) type to an observable where subscription and emissions
are scheduled on the provided scheduler.

**`see`** [from](RxJS.md#from)

**`see`** [of](RxJS.md#of)

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | [`ObservableInput`](RxJS.md#observableinput)<`T`\> | The observable, array, promise, iterable, etc you would like to schedule |
| `scheduler` | [`SchedulerLike`](../interfaces/RxJS.SchedulerLike.md) | The scheduler to use to schedule the subscription and emissions from the returned observable. |

#### Returns

[`Observable`](../classes/RxJS.Observable.md)<`T`\>

___

### sequenceEqual

▸ **sequenceEqual**<`T`\>(`compareTo`, `comparator?`): [`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, `boolean`\>

Compares all values of two observables in sequence using an optional comparator function
and returns an observable of a single boolean value representing whether or not the two sequences
are equal.

<span class="informal">Checks to see of all values emitted by both observables are equal, in order.</span>

![](sequenceEqual.png)

`sequenceEqual` subscribes to two observables and buffers incoming values from each observable. Whenever either
observable emits a value, the value is buffered and the buffers are shifted and compared from the bottom
up; If any value pair doesn't match, the returned observable will emit `false` and complete. If one of the
observables completes, the operator will wait for the other observable to complete; If the other
observable emits before completing, the returned observable will emit `false` and complete. If one observable never
completes or emits after the other completes, the returned observable will never complete.

## Example
figure out if the Konami code matches
```ts
import { from, fromEvent } from 'rxjs';
import { sequenceEqual, bufferCount, mergeMap, map } from 'rxjs/operators';

const codes = from([
  'ArrowUp',
  'ArrowUp',
  'ArrowDown',
  'ArrowDown',
  'ArrowLeft',
  'ArrowRight',
  'ArrowLeft',
  'ArrowRight',
  'KeyB',
  'KeyA',
  'Enter', // no start key, clearly.
]);

const keys = fromEvent(document, 'keyup').pipe(map(e => e.code));
const matches = keys.pipe(
  bufferCount(11, 1),
  mergeMap(
    last11 => from(last11).pipe(sequenceEqual(codes)),
  ),
);
matches.subscribe(matched => console.log('Successful cheat at Contra? ', matched));
```

**`see`** [combineLatest](RxJS.md#combinelatest)

**`see`** [zip](RxJS.md#zip)

**`see`** [withLatestFrom](RxJS.md#withlatestfrom)

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `compareTo` | [`Observable`](../classes/RxJS.Observable.md)<`T`\> | The observable sequence to compare the source sequence to. |
| `comparator?` | (`a`: `T`, `b`: `T`) => `boolean` | - |

#### Returns

[`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, `boolean`\>

A function that returns an Observable that emits a single boolean
value representing whether or not the values emitted by the source
Observable and provided Observable were equal in sequence.

___

### share

▸ **share**<`T`\>(): [`MonoTypeOperatorFunction`](../interfaces/RxJS.MonoTypeOperatorFunction.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`MonoTypeOperatorFunction`](../interfaces/RxJS.MonoTypeOperatorFunction.md)<`T`\>

▸ **share**<`T`\>(`options`): [`MonoTypeOperatorFunction`](../interfaces/RxJS.MonoTypeOperatorFunction.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `ShareConfig`<`T`\> |

#### Returns

[`MonoTypeOperatorFunction`](../interfaces/RxJS.MonoTypeOperatorFunction.md)<`T`\>

___

### shareReplay

▸ **shareReplay**<`T`\>(`config`): [`MonoTypeOperatorFunction`](../interfaces/RxJS.MonoTypeOperatorFunction.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | `ShareReplayConfig` |

#### Returns

[`MonoTypeOperatorFunction`](../interfaces/RxJS.MonoTypeOperatorFunction.md)<`T`\>

▸ **shareReplay**<`T`\>(`bufferSize?`, `windowTime?`, `scheduler?`): [`MonoTypeOperatorFunction`](../interfaces/RxJS.MonoTypeOperatorFunction.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `bufferSize?` | `number` |
| `windowTime?` | `number` |
| `scheduler?` | [`SchedulerLike`](../interfaces/RxJS.SchedulerLike.md) |

#### Returns

[`MonoTypeOperatorFunction`](../interfaces/RxJS.MonoTypeOperatorFunction.md)<`T`\>

___

### single

▸ **single**<`T`\>(`predicate`): [`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, [`TruthyTypesOf`](RxJS.md#truthytypesof)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | `BooleanConstructor` |

#### Returns

[`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, [`TruthyTypesOf`](RxJS.md#truthytypesof)<`T`\>\>

▸ **single**<`T`\>(`predicate?`): [`MonoTypeOperatorFunction`](../interfaces/RxJS.MonoTypeOperatorFunction.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate?` | (`value`: `T`, `index`: `number`, `source`: [`Observable`](../classes/RxJS.Observable.md)<`T`\>) => `boolean` |

#### Returns

[`MonoTypeOperatorFunction`](../interfaces/RxJS.MonoTypeOperatorFunction.md)<`T`\>

___

### skip

▸ **skip**<`T`\>(`count`): [`MonoTypeOperatorFunction`](../interfaces/RxJS.MonoTypeOperatorFunction.md)<`T`\>

Returns an Observable that skips the first `count` items emitted by the source Observable.

![](skip.png)

Skips the values until the sent notifications are equal or less than provided skip count. It raises
an error if skip count is equal or more than the actual number of emits and source raises an error.

## Example
Skip the values before the emission
```ts
import { interval } from 'rxjs';
import { skip } from 'rxjs/operators';

//emit every half second
const source = interval(500);
//skip the first 10 emitted values
const example = source.pipe(skip(10));
//output: 10...11...12...13........
const subscribe = example.subscribe(val => console.log(val));
```

**`see`** [last](RxJS.md#last)

**`see`** [skipWhile](RxJS.md#skipwhile)

**`see`** [skipUntil](RxJS.md#skipuntil)

**`see`** [skipLast](RxJS.md#skiplast)

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `count` | `number` | The number of times, items emitted by source Observable should be skipped. |

#### Returns

[`MonoTypeOperatorFunction`](../interfaces/RxJS.MonoTypeOperatorFunction.md)<`T`\>

A function that returns an Observable that skips the first `count`
values emitted by the source Observable.

___

### skipLast

▸ **skipLast**<`T`\>(`skipCount`): [`MonoTypeOperatorFunction`](../interfaces/RxJS.MonoTypeOperatorFunction.md)<`T`\>

Skip a specified number of values before the completion of an observable.

![](skipLast.png)

Returns an observable that will emit values as soon as it can, given a number of
skipped values. For example, if you `skipLast(3)` on a source, when the source
emits its fourth value, the first value the source emitted will finally be emitted
from the returned observable, as it is no longer part of what needs to be skipped.

All values emitted by the result of `skipLast(N)` will be delayed by `N` emissions,
as each value is held in a buffer until enough values have been emitted that that
the buffered value may finally be sent to the consumer.

After subscribing, unsubscribing will not result in the emission of the buffered
skipped values.

## Example

Skip the last 2 values of an observable with many values

```ts
import { of } from 'rxjs';
import { skipLast } from 'rxjs/operators';

const numbers = of(1, 2, 3, 4, 5);
const skipLastTwo = numbers.pipe(skipLast(2));
skipLastTwo.subscribe(x => console.log(x));

// Results in:
// 1 2 3
// (4 and 5 are skipped)
```

**`see`** [skip](RxJS.md#skip)

**`see`** [skipUntil](RxJS.md#skipuntil)

**`see`** [skipWhile](RxJS.md#skipwhile)

**`see`** [take](RxJS.md#take)

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `skipCount` | `number` | Number of elements to skip from the end of the source Observable. |

#### Returns

[`MonoTypeOperatorFunction`](../interfaces/RxJS.MonoTypeOperatorFunction.md)<`T`\>

A function that returns an Observable that skips the last `count`
values emitted by the source Observable.

___

### skipUntil

▸ **skipUntil**<`T`\>(`notifier`): [`MonoTypeOperatorFunction`](../interfaces/RxJS.MonoTypeOperatorFunction.md)<`T`\>

Returns an Observable that skips items emitted by the source Observable until a second Observable emits an item.

The `skipUntil` operator causes the observable stream to skip the emission of values ​​until the passed in observable emits the first value.
This can be particularly useful in combination with user interactions, responses of http requests or waiting for specific times to pass by.

![](skipUntil.png)

Internally the `skipUntil` operator subscribes to the passed in observable (in the following called *notifier*) in order to recognize the emission
of its first value. When this happens, the operator unsubscribes from the *notifier* and starts emitting the values of the *source*
observable. It will never let the *source* observable emit any values if the *notifier* completes or throws an error without emitting
a value before.

## Example

In the following example, all emitted values ​​of the interval observable are skipped until the user clicks anywhere within the page.

```ts
import { interval, fromEvent } from 'rxjs';
import { skipUntil } from 'rxjs/operators';

const intervalObservable = interval(1000);
const click = fromEvent(document, 'click');

const emitAfterClick = intervalObservable.pipe(
  skipUntil(click)
);
// clicked at 4.6s. output: 5...6...7...8........ or
// clicked at 7.3s. output: 8...9...10..11.......
const subscribe = emitAfterClick.subscribe(value => console.log(value));
```

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `notifier` | [`Observable`](../classes/RxJS.Observable.md)<`any`\> | The second Observable that has to emit an item before the source Observable's elements begin to be mirrored by the resulting Observable. |

#### Returns

[`MonoTypeOperatorFunction`](../interfaces/RxJS.MonoTypeOperatorFunction.md)<`T`\>

A function that returns an Observable that skips items from the
source Observable until the second Observable emits an item, then emits the
remaining items.

___

### skipWhile

▸ **skipWhile**<`T`\>(`predicate`): [`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, `Extract`<`T`, [`Falsy`](RxJS.md#falsy)\> extends `never` ? `never` : `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | `BooleanConstructor` |

#### Returns

[`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, `Extract`<`T`, [`Falsy`](RxJS.md#falsy)\> extends `never` ? `never` : `T`\>

▸ **skipWhile**<`T`\>(`predicate`): [`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, `never`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | (`value`: `T`, `index`: `number`) => ``true`` |

#### Returns

[`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, `never`\>

▸ **skipWhile**<`T`\>(`predicate`): [`MonoTypeOperatorFunction`](../interfaces/RxJS.MonoTypeOperatorFunction.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | (`value`: `T`, `index`: `number`) => `boolean` |

#### Returns

[`MonoTypeOperatorFunction`](../interfaces/RxJS.MonoTypeOperatorFunction.md)<`T`\>

___

### startWith

▸ **startWith**<`T`\>(`value`): [`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, `T` \| ``null``\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | ``null`` |

#### Returns

[`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, `T` \| ``null``\>

▸ **startWith**<`T`\>(`value`): [`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, `T` \| `undefined`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `undefined` |

#### Returns

[`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, `T` \| `undefined`\>

▸ **startWith**<`T`, `A`\>(...`valuesAndScheduler`): [`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, `T` \| [`ValueFromArray`](RxJS.md#valuefromarray)<`A`\>\>

**`deprecated`** The `scheduler` parameter will be removed in v8. Use `scheduled` and `concatAll`. Details: https://rxjs.dev/deprecations/scheduler-argument

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `A` | extends readonly `unknown`[] = `T`[] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...valuesAndScheduler` | [...A[], [`SchedulerLike`](../interfaces/RxJS.SchedulerLike.md)] |

#### Returns

[`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, `T` \| [`ValueFromArray`](RxJS.md#valuefromarray)<`A`\>\>

▸ **startWith**<`T`, `A`\>(...`values`): [`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, `T` \| [`ValueFromArray`](RxJS.md#valuefromarray)<`A`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `A` | extends readonly `unknown`[] = `T`[] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...values` | `A` |

#### Returns

[`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, `T` \| [`ValueFromArray`](RxJS.md#valuefromarray)<`A`\>\>

___

### subscribeOn

▸ **subscribeOn**<`T`\>(`scheduler`, `delay?`): [`MonoTypeOperatorFunction`](../interfaces/RxJS.MonoTypeOperatorFunction.md)<`T`\>

Asynchronously subscribes Observers to this Observable on the specified [SchedulerLike](../interfaces/RxJS.SchedulerLike.md).

With `subscribeOn` you can decide what type of scheduler a specific Observable will be using when it is subscribed to.

Schedulers control the speed and order of emissions to observers from an Observable stream.

![](subscribeOn.png)

## Example

Given the following code:

```ts
import { of, merge } from 'rxjs';

const a = of(1, 2, 3);
const b = of(4, 5, 6);

merge(a, b).subscribe(console.log);

// Outputs
// 1
// 2
// 3
// 4
// 5
// 6
```

Both Observable `a` and `b` will emit their values directly and synchronously once they are subscribed to.

If we instead use the `subscribeOn` operator declaring that we want to use the [asyncScheduler](RxJS.md#asyncscheduler) for values emited by Observable `a`:

```ts
import { of, merge, asyncScheduler } from 'rxjs';
import { subscribeOn } from 'rxjs/operators';

const a = of(1, 2, 3).pipe(subscribeOn(asyncScheduler));
const b = of(4, 5, 6);

merge(a, b).subscribe(console.log);

// Outputs
// 4
// 5
// 6
// 1
// 2
// 3
```

The reason for this is that Observable `b` emits its values directly and synchronously like before
but the emissions from `a` are scheduled on the event loop because we are now using the [asyncScheduler](RxJS.md#asyncscheduler) for that specific Observable.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `scheduler` | [`SchedulerLike`](../interfaces/RxJS.SchedulerLike.md) | The [SchedulerLike](../interfaces/RxJS.SchedulerLike.md) to perform subscription actions on. |
| `delay?` | `number` | A delay to pass to the scheduler to delay subscriptions |

#### Returns

[`MonoTypeOperatorFunction`](../interfaces/RxJS.MonoTypeOperatorFunction.md)<`T`\>

A function that returns an Observable modified so that its
subscriptions happen on the specified [SchedulerLike](../interfaces/RxJS.SchedulerLike.md).

___

### switchAll

▸ **switchAll**<`O`\>(): [`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`O`, [`ObservedValueOf`](RxJS.md#observedvalueof)<`O`\>\>

Converts a higher-order Observable into a first-order Observable
producing values only from the most recent observable sequence

<span class="informal">Flattens an Observable-of-Observables.</span>

![](switchAll.png)

`switchAll` subscribes to a source that is an observable of observables, also known as a
"higher-order observable" (or `Observable<Observable<T>>`). It subscribes to the most recently
provided "inner observable" emitted by the source, unsubscribing from any previously subscribed
to inner observable, such that only the most recent inner observable may be subscribed to at
any point in time. The resulting observable returned by `switchAll` will only complete if the
source observable completes, *and* any currently subscribed to inner observable also has completed,
if there are any.

## Examples
Spawn a new interval observable for each click event, but for every new
click, cancel the previous interval and subscribe to the new one.

```ts
import { fromEvent, interval } from 'rxjs';
import { switchAll, map, tap } from 'rxjs/operators';

const clicks = fromEvent(document, 'click').pipe(tap(() => console.log('click')));
const source = clicks.pipe(map((ev) => interval(1000)));

source.pipe(
  switchAll()
).subscribe(x => console.log(x));

// Output
// click
// 1
// 2
// 3
// 4
// ...
// click
// 1
// 2
// 3
// ...
// click
// ...
```

**`see`** [combineLatestAll](RxJS.md#combinelatestall)

**`see`** [concatAll](RxJS.md#concatall)

**`see`** [exhaustAll](RxJS.md#exhaustall)

**`see`** [switchMap](RxJS.md#switchmap)

**`see`** [switchMapTo](RxJS.md#switchmapto)

**`see`** [mergeAll](RxJS.md#mergeall)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `O` | extends [`ObservableInput`](RxJS.md#observableinput)<`any`\> |

#### Returns

[`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`O`, [`ObservedValueOf`](RxJS.md#observedvalueof)<`O`\>\>

A function that returns an Observable that converts a higher-order
Observable into a first-order Observable producing values only from the most
recent Observable sequence.

___

### switchMap

▸ **switchMap**<`T`, `O`\>(`project`): [`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, [`ObservedValueOf`](RxJS.md#observedvalueof)<`O`\>\>

**`deprecated`** The `resultSelector` parameter will be removed in v8. Use an inner `map` instead. Details: https://rxjs.dev/deprecations/resultSelector

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `O` | extends [`ObservableInput`](RxJS.md#observableinput)<`any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `project` | (`value`: `T`, `index`: `number`) => `O` |

#### Returns

[`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, [`ObservedValueOf`](RxJS.md#observedvalueof)<`O`\>\>

▸ **switchMap**<`T`, `O`\>(`project`, `resultSelector`): [`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, [`ObservedValueOf`](RxJS.md#observedvalueof)<`O`\>\>

**`deprecated`** The `resultSelector` parameter will be removed in v8. Use an inner `map` instead. Details: https://rxjs.dev/deprecations/resultSelector

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `O` | extends [`ObservableInput`](RxJS.md#observableinput)<`any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `project` | (`value`: `T`, `index`: `number`) => `O` |
| `resultSelector` | `undefined` |

#### Returns

[`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, [`ObservedValueOf`](RxJS.md#observedvalueof)<`O`\>\>

▸ **switchMap**<`T`, `R`, `O`\>(`project`, `resultSelector`): [`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, `R`\>

**`deprecated`** The `resultSelector` parameter will be removed in v8. Use an inner `map` instead. Details: https://rxjs.dev/deprecations/resultSelector

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `R` | `R` |
| `O` | extends [`ObservableInput`](RxJS.md#observableinput)<`any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `project` | (`value`: `T`, `index`: `number`) => `O` |
| `resultSelector` | (`outerValue`: `T`, `innerValue`: [`ObservedValueOf`](RxJS.md#observedvalueof)<`O`\>, `outerIndex`: `number`, `innerIndex`: `number`) => `R` |

#### Returns

[`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, `R`\>

___

### switchMapTo

▸ **switchMapTo**<`O`\>(`observable`): [`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`any`, [`ObservedValueOf`](RxJS.md#observedvalueof)<`O`\>\>

**`deprecated`** The `resultSelector` parameter will be removed in v8. Use an inner `map` instead. Details: https://rxjs.dev/deprecations/resultSelector

#### Type parameters

| Name | Type |
| :------ | :------ |
| `O` | extends [`ObservableInput`](RxJS.md#observableinput)<`unknown`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `observable` | `O` |

#### Returns

[`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`any`, [`ObservedValueOf`](RxJS.md#observedvalueof)<`O`\>\>

▸ **switchMapTo**<`O`\>(`observable`, `resultSelector`): [`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`any`, [`ObservedValueOf`](RxJS.md#observedvalueof)<`O`\>\>

**`deprecated`** The `resultSelector` parameter will be removed in v8. Use an inner `map` instead. Details: https://rxjs.dev/deprecations/resultSelector

#### Type parameters

| Name | Type |
| :------ | :------ |
| `O` | extends [`ObservableInput`](RxJS.md#observableinput)<`unknown`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `observable` | `O` |
| `resultSelector` | `undefined` |

#### Returns

[`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`any`, [`ObservedValueOf`](RxJS.md#observedvalueof)<`O`\>\>

▸ **switchMapTo**<`T`, `R`, `O`\>(`observable`, `resultSelector`): [`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, `R`\>

**`deprecated`** The `resultSelector` parameter will be removed in v8. Use an inner `map` instead. Details: https://rxjs.dev/deprecations/resultSelector

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `R` | `R` |
| `O` | extends [`ObservableInput`](RxJS.md#observableinput)<`unknown`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `observable` | `O` |
| `resultSelector` | (`outerValue`: `T`, `innerValue`: [`ObservedValueOf`](RxJS.md#observedvalueof)<`O`\>, `outerIndex`: `number`, `innerIndex`: `number`) => `R` |

#### Returns

[`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, `R`\>

___

### switchScan

▸ **switchScan**<`T`, `R`, `O`\>(`accumulator`, `seed`): [`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, [`ObservedValueOf`](RxJS.md#observedvalueof)<`O`\>\>

Applies an accumulator function over the source Observable where the
accumulator function itself returns an Observable, emitting values
only from the most recently returned Observable.

<span class="informal">It's like [scan](RxJS.md#scan), but only the most recent
Observable returned by the accumulator is merged into the outer Observable.</span>

**`see`** [scan](RxJS.md#scan)

**`see`** [mergeScan](RxJS.md#mergescan)

**`see`** [switchMap](RxJS.md#switchmap)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `R` | `R` |
| `O` | extends [`ObservableInput`](RxJS.md#observableinput)<`any`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `accumulator` | (`acc`: `R`, `value`: `T`, `index`: `number`) => `O` | The accumulator function called on each source value. |
| `seed` | `R` | The initial accumulation value. |

#### Returns

[`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, [`ObservedValueOf`](RxJS.md#observedvalueof)<`O`\>\>

A function that returns an observable of the accumulated values.

___

### take

▸ **take**<`T`\>(`count`): [`MonoTypeOperatorFunction`](../interfaces/RxJS.MonoTypeOperatorFunction.md)<`T`\>

Emits only the first `count` values emitted by the source Observable.

<span class="informal">Takes the first `count` values from the source, then
completes.</span>

![](take.png)

`take` returns an Observable that emits only the first `count` values emitted
by the source Observable. If the source emits fewer than `count` values then
all of its values are emitted. After that, it completes, regardless if the
source completes.

## Example
Take the first 5 seconds of an infinite 1-second interval Observable
```ts
import { interval } from 'rxjs';
import { take } from 'rxjs/operators';

const intervalCount = interval(1000);
const takeFive = intervalCount.pipe(take(5));
takeFive.subscribe(x => console.log(x));

// Logs:
// 0
// 1
// 2
// 3
// 4
```

**`see`** [takeLast](RxJS.md#takelast)

**`see`** [takeUntil](RxJS.md#takeuntil)

**`see`** [takeWhile](RxJS.md#takewhile)

**`see`** [skip](RxJS.md#skip)

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `count` | `number` | The maximum number of `next` values to emit. |

#### Returns

[`MonoTypeOperatorFunction`](../interfaces/RxJS.MonoTypeOperatorFunction.md)<`T`\>

A function that returns an Observable that emits only the first
`count` values emitted by the source Observable, or all of the values from
the source if the source emits fewer than `count` values.

___

### takeLast

▸ **takeLast**<`T`\>(`count`): [`MonoTypeOperatorFunction`](../interfaces/RxJS.MonoTypeOperatorFunction.md)<`T`\>

Waits for the source to complete, then emits the last N values from the source,
as specified by the `count` argument.

![](takeLast.png)

`takeLast` results in an observable that will hold values up to `count` values in memory,
until the source completes. It then pushes all values in memory to the consumer, in the
order they were received from the source, then notifies the consumer that it is
complete.

If for some reason the source completes before the `count` supplied to `takeLast` is reached,
all values received until that point are emitted, and then completion is notified.

**Warning**: Using `takeLast` with an observable that never completes will result
in an observable that never emits a value.

## Example

Take the last 3 values of an Observable with many values

```ts
import { range } from 'rxjs';
import { takeLast } from 'rxjs/operators';

const many = range(1, 100);
const lastThree = many.pipe(takeLast(3));
lastThree.subscribe(x => console.log(x));
```

**`see`** [take](RxJS.md#take)

**`see`** [takeUntil](RxJS.md#takeuntil)

**`see`** [takeWhile](RxJS.md#takewhile)

**`see`** [skip](RxJS.md#skip)

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `count` | `number` | The maximum number of values to emit from the end of the sequence of values emitted by the source Observable. |

#### Returns

[`MonoTypeOperatorFunction`](../interfaces/RxJS.MonoTypeOperatorFunction.md)<`T`\>

A function that returns an Observable that emits at most the last
`count` values emitted by the source Observable.

___

### takeUntil

▸ **takeUntil**<`T`\>(`notifier`): [`MonoTypeOperatorFunction`](../interfaces/RxJS.MonoTypeOperatorFunction.md)<`T`\>

Emits the values emitted by the source Observable until a `notifier`
Observable emits a value.

<span class="informal">Lets values pass until a second Observable,
`notifier`, emits a value. Then, it completes.</span>

![](takeUntil.png)

`takeUntil` subscribes and begins mirroring the source Observable. It also
monitors a second Observable, `notifier` that you provide. If the `notifier`
emits a value, the output Observable stops mirroring the source Observable
and completes. If the `notifier` doesn't emit any value and completes
then `takeUntil` will pass all values.

## Example
Tick every second until the first click happens
```ts
import { fromEvent, interval } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

const source = interval(1000);
const clicks = fromEvent(document, 'click');
const result = source.pipe(takeUntil(clicks));
result.subscribe(x => console.log(x));
```

**`see`** [take](RxJS.md#take)

**`see`** [takeLast](RxJS.md#takelast)

**`see`** [takeWhile](RxJS.md#takewhile)

**`see`** [skip](RxJS.md#skip)

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `notifier` | [`ObservableInput`](RxJS.md#observableinput)<`any`\> | The Observable whose first emitted value will cause the output Observable of `takeUntil` to stop emitting values from the source Observable. |

#### Returns

[`MonoTypeOperatorFunction`](../interfaces/RxJS.MonoTypeOperatorFunction.md)<`T`\>

A function that returns an Observable that emits the values from the
source Observable until `notifier` emits its first value.

___

### takeWhile

▸ **takeWhile**<`T`\>(`predicate`): [`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, `Exclude`<`T`, [`Falsy`](RxJS.md#falsy)\> extends `never` ? `never` : `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | `BooleanConstructor` |

#### Returns

[`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, `Exclude`<`T`, [`Falsy`](RxJS.md#falsy)\> extends `never` ? `never` : `T`\>

▸ **takeWhile**<`T`\>(`predicate`, `inclusive`): [`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, `Exclude`<`T`, [`Falsy`](RxJS.md#falsy)\> extends `never` ? `never` : `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | `BooleanConstructor` |
| `inclusive` | ``false`` |

#### Returns

[`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, `Exclude`<`T`, [`Falsy`](RxJS.md#falsy)\> extends `never` ? `never` : `T`\>

▸ **takeWhile**<`T`\>(`predicate`, `inclusive`): [`MonoTypeOperatorFunction`](../interfaces/RxJS.MonoTypeOperatorFunction.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | `BooleanConstructor` |
| `inclusive` | ``true`` |

#### Returns

[`MonoTypeOperatorFunction`](../interfaces/RxJS.MonoTypeOperatorFunction.md)<`T`\>

▸ **takeWhile**<`T`, `S`\>(`predicate`): [`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, `S`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `S` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | (`value`: `T`, `index`: `number`) => value is S |

#### Returns

[`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, `S`\>

▸ **takeWhile**<`T`, `S`\>(`predicate`, `inclusive`): [`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, `S`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `S` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | (`value`: `T`, `index`: `number`) => value is S |
| `inclusive` | ``false`` |

#### Returns

[`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, `S`\>

▸ **takeWhile**<`T`\>(`predicate`, `inclusive?`): [`MonoTypeOperatorFunction`](../interfaces/RxJS.MonoTypeOperatorFunction.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | (`value`: `T`, `index`: `number`) => `boolean` |
| `inclusive?` | `boolean` |

#### Returns

[`MonoTypeOperatorFunction`](../interfaces/RxJS.MonoTypeOperatorFunction.md)<`T`\>

___

### tap

▸ **tap**<`T`\>(`observer?`): [`MonoTypeOperatorFunction`](../interfaces/RxJS.MonoTypeOperatorFunction.md)<`T`\>

**`deprecated`** Instead of passing separate callback arguments, use an observer argument. Signatures taking separate callback arguments will be removed in v8. Details: https://rxjs.dev/deprecations/subscribe-arguments

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `observer?` | `Partial`<`TapObserver`<`T`\>\> |

#### Returns

[`MonoTypeOperatorFunction`](../interfaces/RxJS.MonoTypeOperatorFunction.md)<`T`\>

▸ **tap**<`T`\>(`next`): [`MonoTypeOperatorFunction`](../interfaces/RxJS.MonoTypeOperatorFunction.md)<`T`\>

**`deprecated`** Instead of passing separate callback arguments, use an observer argument. Signatures taking separate callback arguments will be removed in v8. Details: https://rxjs.dev/deprecations/subscribe-arguments

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `next` | (`value`: `T`) => `void` |

#### Returns

[`MonoTypeOperatorFunction`](../interfaces/RxJS.MonoTypeOperatorFunction.md)<`T`\>

▸ **tap**<`T`\>(`next?`, `error?`, `complete?`): [`MonoTypeOperatorFunction`](../interfaces/RxJS.MonoTypeOperatorFunction.md)<`T`\>

**`deprecated`** Instead of passing separate callback arguments, use an observer argument. Signatures taking separate callback arguments will be removed in v8. Details: https://rxjs.dev/deprecations/subscribe-arguments

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `next?` | ``null`` \| (`value`: `T`) => `void` |
| `error?` | ``null`` \| (`error`: `any`) => `void` |
| `complete?` | ``null`` \| () => `void` |

#### Returns

[`MonoTypeOperatorFunction`](../interfaces/RxJS.MonoTypeOperatorFunction.md)<`T`\>

___

### throttle

▸ **throttle**<`T`\>(`durationSelector`, `config?`): [`MonoTypeOperatorFunction`](../interfaces/RxJS.MonoTypeOperatorFunction.md)<`T`\>

Emits a value from the source Observable, then ignores subsequent source
values for a duration determined by another Observable, then repeats this
process.

<span class="informal">It's like [throttleTime](RxJS.md#throttletime), but the silencing
duration is determined by a second Observable.</span>

![](throttle.png)

`throttle` emits the source Observable values on the output Observable
when its internal timer is disabled, and ignores source values when the timer
is enabled. Initially, the timer is disabled. As soon as the first source
value arrives, it is forwarded to the output Observable, and then the timer
is enabled by calling the `durationSelector` function with the source value,
which returns the "duration" Observable. When the duration Observable emits a
value, the timer is disabled, and this process repeats for the
next source value.

## Example
Emit clicks at a rate of at most one click per second
```ts
import { fromEvent, interval } from 'rxjs';
import { throttle } from 'rxjs/operators';

const clicks = fromEvent(document, 'click');
const result = clicks.pipe(throttle(ev => interval(1000)));
result.subscribe(x => console.log(x));
```

**`see`** [audit](RxJS.md#audit)

**`see`** [debounce](RxJS.md#debounce)

**`see`** [delayWhen](RxJS.md#delaywhen)

**`see`** [sample](RxJS.md#sample)

**`see`** [throttleTime](RxJS.md#throttletime)

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `durationSelector` | (`value`: `T`) => [`ObservableInput`](RxJS.md#observableinput)<`any`\> | A function that receives a value from the source Observable, for computing the silencing duration for each source value, returned as an Observable or a Promise. |
| `config?` | `ThrottleConfig` | a configuration object to define `leading` and `trailing` behavior. Defaults to `{ leading: true, trailing: false }`. |

#### Returns

[`MonoTypeOperatorFunction`](../interfaces/RxJS.MonoTypeOperatorFunction.md)<`T`\>

A function that returns an Observable that performs the throttle
operation to limit the rate of emissions from the source.

___

### throttleTime

▸ **throttleTime**<`T`\>(`duration`, `scheduler?`, `config?`): [`MonoTypeOperatorFunction`](../interfaces/RxJS.MonoTypeOperatorFunction.md)<`T`\>

Emits a value from the source Observable, then ignores subsequent source
values for `duration` milliseconds, then repeats this process.

<span class="informal">Lets a value pass, then ignores source values for the
next `duration` milliseconds.</span>

![](throttleTime.png)

`throttleTime` emits the source Observable values on the output Observable
when its internal timer is disabled, and ignores source values when the timer
is enabled. Initially, the timer is disabled. As soon as the first source
value arrives, it is forwarded to the output Observable, and then the timer
is enabled. After `duration` milliseconds (or the time unit determined
internally by the optional `scheduler`) has passed, the timer is disabled,
and this process repeats for the next source value. Optionally takes a
[SchedulerLike](../interfaces/RxJS.SchedulerLike.md) for managing timers.

## Examples

#### Limit click rate

Emit clicks at a rate of at most one click per second
```ts
import { fromEvent } from 'rxjs';
import { throttleTime } from 'rxjs/operators';

const clicks = fromEvent(document, 'click');
const result = clicks.pipe(throttleTime(1000));
result.subscribe(x => console.log(x));
```

#### Double Click

The following example only emits clicks which happen within a subsequent
delay of 400ms of the previous click. This for example can emulate a double
click. It makes use of the `trailing` parameter of the throttle configuration.

```ts
import { fromEvent, asyncScheduler } from 'rxjs';
import { throttleTime, withLatestFrom } from 'rxjs/operators';

// defaultThottleConfig = { leading: true, trailing: false }
const throttleConfig = {
  leading: false,
  trailing: true
}

const click = fromEvent(document, 'click');
const doubleClick = click.pipe(
  throttleTime(400, asyncScheduler, throttleConfig)
);

doubleClick.subscribe((throttleValue: Event) => {
  console.log(`Double-clicked! Timestamp: ${throttleValue.timeStamp}`);
});
```

If you enable the `leading` parameter in this example, the output would be the primary click and
the double click, but restricts additional clicks within 400ms.

**`see`** [auditTime](RxJS.md#audittime)

**`see`** [debounceTime](RxJS.md#debouncetime)

**`see`** [delay](RxJS.md#delay)

**`see`** [sampleTime](RxJS.md#sampletime)

**`see`** [throttle](RxJS.md#throttle)

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `duration` | `number` | Time to wait before emitting another value after emitting the last value, measured in milliseconds or the time unit determined internally by the optional `scheduler`. |
| `scheduler?` | [`SchedulerLike`](../interfaces/RxJS.SchedulerLike.md) | The [SchedulerLike](../interfaces/RxJS.SchedulerLike.md) to use for managing the timers that handle the throttling. Defaults to [asyncScheduler](RxJS.md#asyncscheduler). |
| `config?` | `ThrottleConfig` | a configuration object to define `leading` and `trailing` behavior. Defaults to `{ leading: true, trailing: false }`. |

#### Returns

[`MonoTypeOperatorFunction`](../interfaces/RxJS.MonoTypeOperatorFunction.md)<`T`\>

A function that returns an Observable that performs the throttle
operation to limit the rate of emissions from the source.

___

### throwError

▸ **throwError**(`errorFactory`): [`Observable`](../classes/RxJS.Observable.md)<`never`\>

Creates an observable that will create an error instance and push it to the consumer as an error
immediately upon subscription.

<span class="informal">Just errors and does nothing else</span>

![](throw.png)

This creation function is useful for creating an observable that will create an error and error every
time it is subscribed to. Generally, inside of most operators when you might want to return an errored
observable, this is unnecessary. In most cases, such as in the inner return of [concatMap](RxJS.md#concatmap),
[mergeMap](RxJS.md#mergemap), [defer](RxJS.md#defer), and many others, you can simply throw the error, and RxJS will pick
that up and notify the consumer of the error.

## Example

Create a simple observable that will create a new error with a timestamp and log it
and the message every time you subscribe to it.

```ts
import { throwError } from 'rxjs';

let errorCount = 0;

const errorWithTimestamp$ = throwError(() => {
   const error: any = new Error(`This is error number ${++errorCount}`);
   error.timestamp = Date.now();
   return error;
});

errorWithTimestamp$.subscribe({
   error: err => console.log(err.timestamp, err.message)
});

errorWithTimestamp$.subscribe({
   error: err => console.log(err.timestamp, err.message)
});

// Logs the timestamp and a new error message each subscription;
```

## Unnecessary usage

Using `throwError` inside of an operator or creation function
with a callback, is usually not necessary:

```ts
import { throwError, timer, of } from 'rxjs';
import { concatMap } from 'rxjs/operators';

const delays$ = of(1000, 2000, Infinity, 3000);

delays$.pipe(
   concatMap(ms => {
     if (ms < 10000) {
       return timer(ms);
     } else {
       // This is probably overkill.
       return throwError(() => new Error(`Invalid time ${ms}`));
     }
   })
)
.subscribe({
   next: console.log,
   error: console.error
});
```

You can just throw the error instead:

```ts
import { throwError, timer, of } from 'rxjs';
import { concatMap } from 'rxjs/operators';

const delays$ = of(1000, 2000, Infinity, 3000);

delays$.pipe(
   concatMap(ms => {
     if (ms < 10000) {
       return timer(ms);
     } else {
       // Cleaner and easier to read for most folks.
       throw new Error(`Invalid time ${ms}`);
     }
   })
)
.subscribe({
   next: console.log,
   error: console.error
});
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `errorFactory` | () => `any` | A factory function that will create the error instance that is pushed. |

#### Returns

[`Observable`](../classes/RxJS.Observable.md)<`never`\>

▸ **throwError**(`error`): [`Observable`](../classes/RxJS.Observable.md)<`never`\>

Returns an observable that will error with the specified error immediately upon subscription.

**`deprecated`** Support for passing an error value will be removed in v8. Instead, pass a factory function to `throwError(() => new Error('test'))`. This is
because it will create the error at the moment it should be created and capture a more appropriate stack trace. If
for some reason you need to create the error ahead of time, you can still do that: `const err = new Error('test'); throwError(() => err);`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `error` | `any` | The error instance to emit |

#### Returns

[`Observable`](../classes/RxJS.Observable.md)<`never`\>

▸ **throwError**(`errorOrErrorFactory`, `scheduler`): [`Observable`](../classes/RxJS.Observable.md)<`never`\>

Notifies the consumer of an error using a given scheduler by scheduling it at delay `0` upon subscription.

**`deprecated`** The `scheduler` parameter will be removed in v8.
Use `throwError` in combination with [observeOn](RxJS.md#observeon): `throwError(() => new Error('test')).pipe(observeOn(scheduler));`.
Details: https://rxjs.dev/deprecations/scheduler-argument

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `errorOrErrorFactory` | `any` | An error instance or error factory |
| `scheduler` | [`SchedulerLike`](../interfaces/RxJS.SchedulerLike.md) | A scheduler to use to schedule the error notification |

#### Returns

[`Observable`](../classes/RxJS.Observable.md)<`never`\>

___

### throwIfEmpty

▸ **throwIfEmpty**<`T`\>(`errorFactory?`): [`MonoTypeOperatorFunction`](../interfaces/RxJS.MonoTypeOperatorFunction.md)<`T`\>

If the source observable completes without emitting a value, it will emit
an error. The error will be created at that time by the optional
`errorFactory` argument, otherwise, the error will be [EmptyError](../interfaces/RxJS.EmptyError.md).

![](throwIfEmpty.png)

## Example
```ts
import { fromEvent, timer } from 'rxjs';
import { throwIfEmpty, takeUntil } from 'rxjs/operators';

const click$ = fromEvent(document, 'click');

click$.pipe(
  takeUntil(timer(1000)),
  throwIfEmpty(
    () => new Error('the document was not clicked within 1 second')
  ),
)
.subscribe({
  next() { console.log('The button was clicked'); },
  error(err) { console.error(err); }
});
```

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `errorFactory?` | () => `any` | A factory function called to produce the error to be thrown when the source observable completes without emitting a value. |

#### Returns

[`MonoTypeOperatorFunction`](../interfaces/RxJS.MonoTypeOperatorFunction.md)<`T`\>

A function that returns an Observable that throws an error if the
source Observable completed without emitting.

___

### timeInterval

▸ **timeInterval**<`T`\>(`scheduler?`): [`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, `TimeInterval`<`T`\>\>

Emits an object containing the current value, and the time that has
passed between emitting the current value and the previous value, which is
calculated by using the provided `scheduler`'s `now()` method to retrieve
the current time at each emission, then calculating the difference. The `scheduler`
defaults to [asyncScheduler](RxJS.md#asyncscheduler), so by default, the `interval` will be in
milliseconds.

<span class="informal">Convert an Observable that emits items into one that
emits indications of the amount of time elapsed between those emissions.</span>

![](timeInterval.png)

## Examples
Emit interval between current value with the last value

```ts
const seconds = interval(1000);

seconds.pipe(timeInterval())
.subscribe(
    value => console.log(value),
    err => console.log(err),
);

seconds.pipe(timeout(900))
.subscribe(
    value => console.log(value),
    err => console.log(err),
);

// NOTE: The values will never be this precise,
// intervals created with `interval` or `setInterval`
// are non-deterministic.

// {value: 0, interval: 1000}
// {value: 1, interval: 1000}
// {value: 2, interval: 1000}
```

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `scheduler?` | [`SchedulerLike`](../interfaces/RxJS.SchedulerLike.md) |

#### Returns

[`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, `TimeInterval`<`T`\>\>

A function that returns an Observable that emits information about
value and interval.

___

### timeout

▸ **timeout**<`T`, `O`, `M`\>(`config`): [`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, `T` \| [`ObservedValueOf`](RxJS.md#observedvalueof)<`O`\>\>

If `with` is provided, this will return an observable that will switch to a different observable if the source
does not push values within the specified time parameters.

<span class="informal">The most flexible option for creating a timeout behavior.</span>

The first thing to know about the configuration is if you do not provide a `with` property to the configuration,
when timeout conditions are met, this operator will emit a [TimeoutError](../interfaces/RxJS.TimeoutError.md). Otherwise, it will use the factory
function provided by `with`, and switch your subscription to the result of that. Timeout conditions are provided by
the settings in `first` and `each`.

The `first` property can be either a `Date` for a specific time, a `number` for a time period relative to the
point of subscription, or it can be skipped. This property is to check timeout conditions for the arrival of
the first value from the source _only_. The timings of all subsequent values  from the source will be checked
against the time period provided by `each`, if it was provided.

The `each` property can be either a `number` or skipped. If a value for `each` is provided, it represents the amount of
time the resulting observable will wait between the arrival of values from the source before timing out. Note that if
`first` is _not_ provided, the value from `each` will be used to check timeout conditions for the arrival of the first
value and all subsequent values. If `first` _is_ provided, `each` will only be use to check all values after the first.

### Example

Emit a custom error if there is too much time between values

```ts
import { interval, throwError } from 'rxjs';
import { timeout } from 'rxjs/operators';

class CustomTimeoutError extends Error {
  constructor() {
     super('It was too slow');
     this.name = 'CustomTimeoutError';
  }
}

const slow$ = interval(900);

slow$.pipe(
   timeout({
     each: 1000,
     with: () => throwError(new CustomTimeoutError())
   })
)
.subscribe({
   error: console.error
})
```

### Example

Switch to a faster observable if your source is slow.

```ts
import { interval, throwError } from 'rxjs';
import { timeout } from 'rxjs/operators';

const slow$ = interval(900);
const fast$ = interval(500);

slow$.pipe(
   timeout({
     each: 1000,
     with: () => fast$,
   })
)
.subscribe(console.log)
```

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `O` | extends [`ObservableInput`](RxJS.md#observableinput)<`unknown`\> |
| `M` | `unknown` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `config` | `TimeoutConfig`<`T`, `O`, `M`\> & { `with`: (`info`: `TimeoutInfo`<`T`, `M`\>) => `O`  } | The configuration for the timeout. |

#### Returns

[`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, `T` \| [`ObservedValueOf`](RxJS.md#observedvalueof)<`O`\>\>

▸ **timeout**<`T`, `M`\>(`config`): [`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, `T`\>

Returns an observable that will error or switch to a different observable if the source does not push values
within the specified time parameters.

<span class="informal">The most flexible option for creating a timeout behavior.</span>

The first thing to know about the configuration is if you do not provide a `with` property to the configuration,
when timeout conditions are met, this operator will emit a [TimeoutError](../interfaces/RxJS.TimeoutError.md). Otherwise, it will use the factory
function provided by `with`, and switch your subscription to the result of that. Timeout conditions are provided by
the settings in `first` and `each`.

The `first` property can be either a `Date` for a specific time, a `number` for a time period relative to the
point of subscription, or it can be skipped. This property is to check timeout conditions for the arrival of
the first value from the source _only_. The timings of all subsequent values  from the source will be checked
against the time period provided by `each`, if it was provided.

The `each` property can be either a `number` or skipped. If a value for `each` is provided, it represents the amount of
time the resulting observable will wait between the arrival of values from the source before timing out. Note that if
`first` is _not_ provided, the value from `each` will be used to check timeout conditions for the arrival of the first
value and all subsequent values. If `first` _is_ provided, `each` will only be use to check all values after the first.

### Handling TimeoutErrors

If no `with` property was provided, subscriptions to the resulting observable may emit an error of [TimeoutError](../interfaces/RxJS.TimeoutError.md).
The timeout error provides useful information you can examine when you're handling the error. The most common way to handle
the error would be with [catchError](RxJS.md#catcherror), although you could use [tap](RxJS.md#tap) or just the error handler in your `subscribe` call
directly, if your error handling is only a side effect (such as notifying the user, or logging).

In this case, you would check the error for `instanceof TimeoutError` to validate that the error was indeed from `timeout`, and
not from some other source. If it's not from `timeout`, you should probably rethrow it if you're in a `catchError`.

### Example

Emit a [TimeoutError](../interfaces/RxJS.TimeoutError.md) if the first value, and _only_ the first value, does not arrive within 5 seconds

```ts
import { interval } from 'rxjs';
import { timeout } from 'rxjs/operators';

// A random interval that lasts between 0 and 10 seconds per tick
const source$ = interval(Math.round(Math.random() * 10000));

source$.pipe(
   timeout({ first: 5000 })
)
.subscribe(console.log);
```

### Example

Emit a [TimeoutError](../interfaces/RxJS.TimeoutError.md) if the source waits longer than 5 seconds between any two values or the first value
and subscription.

```ts
import { timer } from 'rxjs';
import { timeout, expand } from 'rxjs/operators';

const getRandomTime = () => Math.round(Math.random() * 10000);

// An observable that waits a random amount of time between each delivered value
const source$ = timer(getRandomTime()).pipe(
 expand(() => timer(getRandomTime()))
)

source$.pipe(
   timeout({ each: 5000 })
)
.subscribe(console.log);
```

### Example

Emit a [TimeoutError](../interfaces/RxJS.TimeoutError.md) if the the source does not emit before 7 seconds, _or_ if the source waits longer than
5 seconds between any two values after the first.

```ts
import { timer } from 'rxjs';
import { timeout, expand } from 'rxjs/operators';

const getRandomTime = () => Math.round(Math.random() * 10000);

// An observable that waits a random amount of time between each delivered value
const source$ = timer(getRandomTime()).pipe(
 expand(() => timer(getRandomTime()))
)

source$.pipe(
   timeout({ first: 7000, each: 5000 })
)
.subscribe(console.log);
```

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `M` | `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | `Omit`<`TimeoutConfig`<`T`, `any`, `M`\>, ``"with"``\> |

#### Returns

[`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, `T`\>

▸ **timeout**<`T`\>(`first`, `scheduler?`): [`MonoTypeOperatorFunction`](../interfaces/RxJS.MonoTypeOperatorFunction.md)<`T`\>

Returns an observable that will error if the source does not push its first value before the specified time passed as a `Date`.
This is functionally the same as `timeout({ first: someDate })`.

<span class="informal">Errors if the first value doesn't show up before the given date and time</span>

![](timeout.png)

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `first` | `Date` | The date to at which the resulting observable will timeout if the source observable does not emit at least one value. |
| `scheduler?` | [`SchedulerLike`](../interfaces/RxJS.SchedulerLike.md) | The scheduler to use. Defaults to [asyncScheduler](RxJS.md#asyncscheduler). |

#### Returns

[`MonoTypeOperatorFunction`](../interfaces/RxJS.MonoTypeOperatorFunction.md)<`T`\>

▸ **timeout**<`T`\>(`each`, `scheduler?`): [`MonoTypeOperatorFunction`](../interfaces/RxJS.MonoTypeOperatorFunction.md)<`T`\>

Returns an observable that will error if the source does not push a value within the specified time in milliseconds.
This is functionally the same as `timeout({ each: milliseconds })`.

<span class="informal">Errors if it waits too long between any value</span>

![](timeout.png)

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `each` | `number` | The time allowed between each pushed value from the source before the resulting observable will timeout. |
| `scheduler?` | [`SchedulerLike`](../interfaces/RxJS.SchedulerLike.md) | The scheduler to use. Defaults to [asyncScheduler](RxJS.md#asyncscheduler). |

#### Returns

[`MonoTypeOperatorFunction`](../interfaces/RxJS.MonoTypeOperatorFunction.md)<`T`\>

___

### timeoutWith

▸ **timeoutWith**<`T`, `R`\>(`dueBy`, `switchTo`, `scheduler?`): [`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, `T` \| `R`\>

If the time of the Date object passed arrives before the first value arrives from the source, it will unsubscribe
from the source and switch the subscription to another observable.

<span class="informal">Use to switch to a different observable if the first value doesn't arrive by a specific time</span>

Can be used to set a timeout only for the first value, however it's recommended to use the [timeout](RxJS.md#timeout) operator with
the `first` configuration to get that effect.

**`deprecated`** Replaced with [timeout](RxJS.md#timeout). Instead of `timeoutWith(someDate, a$, scheduler)`, use the configuration object `timeout({ first: someDate, with: () => a$, scheduler })`. Will be removed in v8.

#### Type parameters

| Name |
| :------ |
| `T` |
| `R` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dueBy` | `Date` | The exact time, as a `Date`, at which the timeout will be triggered if the first value does not arrive. |
| `switchTo` | [`ObservableInput`](RxJS.md#observableinput)<`R`\> | The observable to switch to when timeout occurs. |
| `scheduler?` | [`SchedulerLike`](../interfaces/RxJS.SchedulerLike.md) | The scheduler to use with time-related operations within this operator. Defaults to [asyncScheduler](RxJS.md#asyncscheduler) |

#### Returns

[`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, `T` \| `R`\>

A function that returns an Observable that mirrors behaviour of the
source Observable, unless timeout happens when it starts emitting values
from the Observable passed as a second parameter.

▸ **timeoutWith**<`T`, `R`\>(`waitFor`, `switchTo`, `scheduler?`): [`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, `T` \| `R`\>

When the passed timespan ellapses before the source emits any given value, it will unsubscribe from the source,
and switch the subscription to another observable.

<span class="informal">Used to switch to a different observable if your source is being slow</span>

Useful in cases where:

- You want to switch to a different source that may be faster
- You want to notify a user that the data stream is slow
- You want to emit a custom error rather than the [TimeoutError](../interfaces/RxJS.TimeoutError.md) emitted
  by the default usage of [timeout](RxJS.md#timeout).

## Example

Fallback to a faster observable

```ts
import { interval } from 'rxjs';
import { timeoutWith } from 'rxjs/operators';

const slow$ = interval(1000);
const faster$ = interval(500);

slow$.pipe(
   timeoutWith(900, faster$)
)
.subscribe(console.log)
```

### Example

Emit your own custom timeout error

```ts
import { interval, throwError } from 'rxjs';
import { timeoutWith } from 'rxjs/operators';

class CustomTimeoutError extends Error {
  constructor() {
     super('It was too slow');
     this.name = 'CustomTimeoutError';
  }
}

const slow = interval(1000);

slow$.pipe(
   timeoutWith(900, throwError(new CustomTimeoutError()))
)
.subscribe({
   error: console.error
})
```

**`deprecated`** Replaced with [timeout](RxJS.md#timeout). Instead of `timeoutWith(100, a$, scheduler)`, use the configuration object `timeout({ each: 100, with: () => a$, scheduler })`. Will be removed in v8.

#### Type parameters

| Name |
| :------ |
| `T` |
| `R` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `waitFor` | `number` | The time allowed between values from the source before timeout is triggered. |
| `switchTo` | [`ObservableInput`](RxJS.md#observableinput)<`R`\> | The observable to switch to when timeout occurs. |
| `scheduler?` | [`SchedulerLike`](../interfaces/RxJS.SchedulerLike.md) | The scheduler to use with time-related operations within this operator. Defaults to [asyncScheduler](RxJS.md#asyncscheduler) |

#### Returns

[`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, `T` \| `R`\>

A function that returns an Observable that mirrors behaviour of the
source Observable, unless timeout happens when it starts emitting values
from the Observable passed as a second parameter.

___

### timer

▸ **timer**(`due`, `scheduler?`): [`Observable`](../classes/RxJS.Observable.md)<``0``\>

Creates an observable that will wait for a specified time period, or exact date, before
emitting the number 0.

<span class="informal">Used to emit a notification after a delay.</span>

This observable is useful for creating delays in code, or racing against other values
for ad-hoc timeouts.

The `delay` is specified by default in milliseconds, however providing a custom scheduler could
create a different behavior.

## Examples

### Wait 3 seconds and start another observable

You might want to use `timer` to delay subscription to an
observable by a set amount of time. Here we use a timer with
[concatMapTo](RxJS.md#concatmapto) or [concatMap](RxJS.md#concatmap) in order to wait
a few seconds and start a subscription to a source.

```ts
import { timer, of } from 'rxjs';
import { concatMapTo } from 'rxjs/operators';

// This could be any observable
const source = of(1, 2, 3);

const result = timer(3000).pipe(
  concatMapTo(source)
)
.subscribe(console.log);
```

### Take all of the values until the start of the next minute

Using the a date as the trigger for the first emission, you can
do things like wait until midnight to fire an event, or in this case,
wait until a new minute starts (chosen so the example wouldn't take
too long to run) in order to stop watching a stream. Leveraging
[takeUntil](RxJS.md#takeuntil).

```ts
import { interval, timer } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

// Build a Date object that marks the
// next minute.
const currentDate = new Date();
const startOfNextMinute = new Date(
  currentDate.getFullYear(),
  currentDate.getMonth(),
  currentDate.getDate(),
  currentDate.getHours(),
  currentDate.getMinutes() + 1,
)

// This could be any observable stream
const source = interval(1000);

const result = source.pipe(
  takeUntil(timer(startOfNextMinute))
);

result.subscribe(console.log);
```

### Known Limitations

- The [asyncScheduler](RxJS.md#asyncscheduler) uses `setTimeout` which has limitations for how far in the future it can be scheduled.

- If a `scheduler` is provided that returns a timestamp other than an epoch from `now()`, and
a `Date` object is passed to the `dueTime` argument, the calculation for when the first emission
should occur will be incorrect. In this case, it would be best to do your own calculations
ahead of time, and pass a `number` in as the `dueTime`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `due` | `number` \| `Date` | If a `number`, the amount of time in milliseconds to wait before emitting. If a `Date`, the exact time at which to emit. |
| `scheduler?` | [`SchedulerLike`](../interfaces/RxJS.SchedulerLike.md) | The scheduler to use to schedule the delay. Defaults to [asyncScheduler](RxJS.md#asyncscheduler). |

#### Returns

[`Observable`](../classes/RxJS.Observable.md)<``0``\>

▸ **timer**(`startDue`, `intervalDuration`, `scheduler?`): [`Observable`](../classes/RxJS.Observable.md)<`number`\>

Creates an observable that starts an interval after a specified delay, emitting incrementing numbers -- starting at `0` --
on each interval after words.

The `delay` and `intervalDuration` are specified by default in milliseconds, however providing a custom scheduler could
create a different behavior.

## Example

### Start an interval that starts right away

Since {@link index/interval} waits for the passed delay before starting,
sometimes that's not ideal. You may want to start an interval immediately.
`timer` works well for this. Here we have both side-by-side so you can
see them in comparison.

Note that this observable will never complete.

```ts
import { timer, interval } from 'rxjs';

timer(0, 1000).subscribe(n => console.log('timer', n));
interval(1000).subscribe(n => console.log('interval', n));
```

### Known Limitations

- The [asyncScheduler](RxJS.md#asyncscheduler) uses `setTimeout` which has limitations for how far in the future it can be scheduled.

- If a `scheduler` is provided that returns a timestamp other than an epoch from `now()`, and
a `Date` object is passed to the `dueTime` argument, the calculation for when the first emission
should occur will be incorrect. In this case, it would be best to do your own calculations
ahead of time, and pass a `number` in as the `startDue`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `startDue` | `number` \| `Date` | If a `number`, is the time to wait before starting the interval. If a `Date`, is the exact time at which to start the interval. |
| `intervalDuration` | `number` | The delay between each value emitted in the interval. Passing a negative number here will result in immediate completion after the first value is emitted, as though no `intervalDuration` was passed at all. |
| `scheduler?` | [`SchedulerLike`](../interfaces/RxJS.SchedulerLike.md) | The scheduler to use to schedule the delay. Defaults to [asyncScheduler](RxJS.md#asyncscheduler). |

#### Returns

[`Observable`](../classes/RxJS.Observable.md)<`number`\>

▸ **timer**(`dueTime`, `unused`, `scheduler?`): [`Observable`](../classes/RxJS.Observable.md)<``0``\>

**`deprecated`** The signature allowing `undefined` to be passed for `intervalDuration` will be removed in v8. Use the `timer(dueTime, scheduler?)` signature instead.

#### Parameters

| Name | Type |
| :------ | :------ |
| `dueTime` | `number` \| `Date` |
| `unused` | `undefined` |
| `scheduler?` | [`SchedulerLike`](../interfaces/RxJS.SchedulerLike.md) |

#### Returns

[`Observable`](../classes/RxJS.Observable.md)<``0``\>

___

### timestamp

▸ **timestamp**<`T`\>(`timestampProvider?`): [`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, [`Timestamp`](../interfaces/RxJS.Timestamp.md)<`T`\>\>

Attaches a timestamp to each item emitted by an observable indicating when it was emitted

The `timestamp` operator maps the *source* observable stream to an object of type
`{value: T, timestamp: R}`. The properties are generically typed. The `value` property contains the value
and type of the *source* observable. The `timestamp` is generated by the schedulers `now` function. By
default it uses the *async* scheduler which simply returns `Date.now()` (milliseconds since 1970/01/01
00:00:00:000) and therefore is of type `number`.

![](timestamp.png)

## Example

In this example there is a timestamp attached to the documents click event.

```ts
import { fromEvent } from 'rxjs';
import { timestamp } from 'rxjs/operators';

const clickWithTimestamp = fromEvent(document, 'click').pipe(
  timestamp()
);

// Emits data of type {value: MouseEvent, timestamp: number}
clickWithTimestamp.subscribe(data => {
  console.log(data);
});
```

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `timestampProvider?` | [`TimestampProvider`](../interfaces/RxJS.TimestampProvider.md) | An object with a `now()` method used to get the current timestamp. |

#### Returns

[`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, [`Timestamp`](../interfaces/RxJS.Timestamp.md)<`T`\>\>

A function that returns an Observable that attaches a timestamp to
each item emitted by the source Observable indicating when it was emitted.

___

### toArray

▸ **toArray**<`T`\>(): [`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, `T`[]\>

Collects all source emissions and emits them as an array when the source completes.

<span class="informal">Get all values inside an array when the source completes</span>

![](toArray.png)

`toArray` will wait until the source Observable completes before emitting
the array containing all emissions. When the source Observable errors no
array will be emitted.

 ## Example
```ts
import { interval } from 'rxjs';
import { toArray, take } from 'rxjs/operators';

const source = interval(1000);
const example = source.pipe(
  take(10),
  toArray()
);

const subscribe = example.subscribe(val => console.log(val));

// output: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
```

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, `T`[]\>

A function that returns an Observable that emits an array of items
emitted by the source Observable when source completes.

___

### using

▸ **using**<`T`\>(`resourceFactory`, `observableFactory`): [`Observable`](../classes/RxJS.Observable.md)<[`ObservedValueOf`](RxJS.md#observedvalueof)<`T`\>\>

Creates an Observable that uses a resource which will be disposed at the same time as the Observable.

<span class="informal">Use it when you catch yourself cleaning up after an Observable.</span>

`using` is a factory operator, which accepts two functions. First function returns a disposable resource.
It can be an arbitrary object that implements `unsubscribe` method. Second function will be injected with
that object and should return an Observable. That Observable can use resource object during its execution.
Both functions passed to `using` will be called every time someone subscribes - neither an Observable nor
resource object will be shared in any way between subscriptions.

When Observable returned by `using` is subscribed, Observable returned from the second function will be subscribed
as well. All its notifications (nexted values, completion and error events) will be emitted unchanged by the output
Observable. If however someone unsubscribes from the Observable or source Observable completes or errors by itself,
the `unsubscribe` method on resource object will be called. This can be used to do any necessary clean up, which
otherwise would have to be handled by hand. Note that complete or error notifications are not emitted when someone
cancels subscription to an Observable via `unsubscribe`, so `using` can be used as a hook, allowing you to make
sure that all resources which need to exist during an Observable execution will be disposed at appropriate time.

**`see`** [defer](RxJS.md#defer)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ObservableInput`](RxJS.md#observableinput)<`any`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `resourceFactory` | () => `void` \| [`Unsubscribable`](../interfaces/RxJS.Unsubscribable.md) | A function which creates any resource object that implements `unsubscribe` method. |
| `observableFactory` | (`resource`: `void` \| [`Unsubscribable`](../interfaces/RxJS.Unsubscribable.md)) => `void` \| `T` | A function which creates an Observable, that can use injected resource object. |

#### Returns

[`Observable`](../classes/RxJS.Observable.md)<[`ObservedValueOf`](RxJS.md#observedvalueof)<`T`\>\>

An Observable that behaves the same as Observable returned by `observableFactory`, but
which - when completed, errored or unsubscribed - will also call `unsubscribe` on created resource object.

___

### window

▸ **window**<`T`\>(`windowBoundaries`): [`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, [`Observable`](../classes/RxJS.Observable.md)<`T`\>\>

Branch out the source Observable values as a nested Observable whenever
`windowBoundaries` emits.

<span class="informal">It's like [buffer](RxJS.md#buffer), but emits a nested Observable
instead of an array.</span>

![](window.png)

Returns an Observable that emits windows of items it collects from the source
Observable. The output Observable emits connected, non-overlapping
windows. It emits the current window and opens a new one whenever the
Observable `windowBoundaries` emits an item. Because each window is an
Observable, the output is a higher-order Observable.

## Example
In every window of 1 second each, emit at most 2 click events
```ts
import { fromEvent, interval } from 'rxjs';
import { window, mergeAll, map, take } from 'rxjs/operators';

 const clicks = fromEvent(document, 'click');
 const sec = interval(1000);
 const result = clicks.pipe(
     window(sec),
     map(win => win.pipe(take(2))), // each window has at most 2 emissions
     mergeAll(),              // flatten the Observable-of-Observables
 );
 result.subscribe(x => console.log(x));
```

**`see`** [windowCount](RxJS.md#windowcount)

**`see`** [windowTime](RxJS.md#windowtime)

**`see`** [windowToggle](RxJS.md#windowtoggle)

**`see`** [windowWhen](RxJS.md#windowwhen)

**`see`** [buffer](RxJS.md#buffer)

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `windowBoundaries` | [`Observable`](../classes/RxJS.Observable.md)<`any`\> | An Observable that completes the previous window and starts a new window. |

#### Returns

[`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, [`Observable`](../classes/RxJS.Observable.md)<`T`\>\>

A function that returns an Observable of windows, which are
Observables emitting values of the source Observable.

___

### windowCount

▸ **windowCount**<`T`\>(`windowSize`, `startWindowEvery?`): [`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, [`Observable`](../classes/RxJS.Observable.md)<`T`\>\>

Branch out the source Observable values as a nested Observable with each
nested Observable emitting at most `windowSize` values.

<span class="informal">It's like [bufferCount](RxJS.md#buffercount), but emits a nested
Observable instead of an array.</span>

![](windowCount.png)

Returns an Observable that emits windows of items it collects from the source
Observable. The output Observable emits windows every `startWindowEvery`
items, each containing no more than `windowSize` items. When the source
Observable completes or encounters an error, the output Observable emits
the current window and propagates the notification from the source
Observable. If `startWindowEvery` is not provided, then new windows are
started immediately at the start of the source and when each window completes
with size `windowSize`.

## Examples
Ignore every 3rd click event, starting from the first one
```ts
import { fromEvent } from 'rxjs';
import { windowCount, map, mergeAll, skip } from 'rxjs/operators';

const clicks = fromEvent(document, 'click');
const result = clicks.pipe(
  windowCount(3),
  map(win => win.pipe(skip(1))), // skip first of every 3 clicks
  mergeAll()                     // flatten the Observable-of-Observables
);
result.subscribe(x => console.log(x));
```

Ignore every 3rd click event, starting from the third one
```ts
import { fromEvent } from 'rxjs';
import { windowCount, mergeAll } from 'rxjs/operators';

const clicks = fromEvent(document, 'click');
const result = clicks.pipe(
  windowCount(2, 3),
  mergeAll(),              // flatten the Observable-of-Observables
);
result.subscribe(x => console.log(x));
```

**`see`** [window](RxJS.md#window)

**`see`** [windowTime](RxJS.md#windowtime)

**`see`** [windowToggle](RxJS.md#windowtoggle)

**`see`** [windowWhen](RxJS.md#windowwhen)

**`see`** [bufferCount](RxJS.md#buffercount)

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `windowSize` | `number` | The maximum number of values emitted by each window. |
| `startWindowEvery?` | `number` | - |

#### Returns

[`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, [`Observable`](../classes/RxJS.Observable.md)<`T`\>\>

A function that returns an Observable of windows, which in turn are
Observable of values.

___

### windowTime

▸ **windowTime**<`T`\>(`windowTimeSpan`, `scheduler?`): [`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, [`Observable`](../classes/RxJS.Observable.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `windowTimeSpan` | `number` |
| `scheduler?` | [`SchedulerLike`](../interfaces/RxJS.SchedulerLike.md) |

#### Returns

[`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, [`Observable`](../classes/RxJS.Observable.md)<`T`\>\>

▸ **windowTime**<`T`\>(`windowTimeSpan`, `windowCreationInterval`, `scheduler?`): [`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, [`Observable`](../classes/RxJS.Observable.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `windowTimeSpan` | `number` |
| `windowCreationInterval` | `number` |
| `scheduler?` | [`SchedulerLike`](../interfaces/RxJS.SchedulerLike.md) |

#### Returns

[`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, [`Observable`](../classes/RxJS.Observable.md)<`T`\>\>

▸ **windowTime**<`T`\>(`windowTimeSpan`, `windowCreationInterval`, `maxWindowSize`, `scheduler?`): [`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, [`Observable`](../classes/RxJS.Observable.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `windowTimeSpan` | `number` |
| `windowCreationInterval` | ``null`` \| `number` \| `void` |
| `maxWindowSize` | `number` |
| `scheduler?` | [`SchedulerLike`](../interfaces/RxJS.SchedulerLike.md) |

#### Returns

[`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, [`Observable`](../classes/RxJS.Observable.md)<`T`\>\>

___

### windowToggle

▸ **windowToggle**<`T`, `O`\>(`openings`, `closingSelector`): [`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, [`Observable`](../classes/RxJS.Observable.md)<`T`\>\>

Branch out the source Observable values as a nested Observable starting from
an emission from `openings` and ending when the output of `closingSelector`
emits.

<span class="informal">It's like [bufferToggle](RxJS.md#buffertoggle), but emits a nested
Observable instead of an array.</span>

![](windowToggle.png)

Returns an Observable that emits windows of items it collects from the source
Observable. The output Observable emits windows that contain those items
emitted by the source Observable between the time when the `openings`
Observable emits an item and when the Observable returned by
`closingSelector` emits an item.

## Example
Every other second, emit the click events from the next 500ms
```ts
import { fromEvent, interval, EMPTY } from 'rxjs';
import { windowToggle, mergeAll } from 'rxjs/operators';

const clicks = fromEvent(document, 'click');
const openings = interval(1000);
const result = clicks.pipe(
  windowToggle(openings, i => i % 2 ? interval(500) : EMPTY),
  mergeAll()
);
result.subscribe(x => console.log(x));
```

**`see`** [window](RxJS.md#window)

**`see`** [windowCount](RxJS.md#windowcount)

**`see`** [windowTime](RxJS.md#windowtime)

**`see`** [windowWhen](RxJS.md#windowwhen)

**`see`** [bufferToggle](RxJS.md#buffertoggle)

#### Type parameters

| Name |
| :------ |
| `T` |
| `O` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `openings` | [`ObservableInput`](RxJS.md#observableinput)<`O`\> | An observable of notifications to start new windows. |
| `closingSelector` | (`openValue`: `O`) => [`ObservableInput`](RxJS.md#observableinput)<`any`\> | A function that takes the value emitted by the `openings` observable and returns an Observable, which, when it emits a next notification, signals that the associated window should complete. |

#### Returns

[`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, [`Observable`](../classes/RxJS.Observable.md)<`T`\>\>

A function that returns an Observable of windows, which in turn are
Observables.

___

### windowWhen

▸ **windowWhen**<`T`\>(`closingSelector`): [`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, [`Observable`](../classes/RxJS.Observable.md)<`T`\>\>

Branch out the source Observable values as a nested Observable using a
factory function of closing Observables to determine when to start a new
window.

<span class="informal">It's like [bufferWhen](RxJS.md#bufferwhen), but emits a nested
Observable instead of an array.</span>

![](windowWhen.png)

Returns an Observable that emits windows of items it collects from the source
Observable. The output Observable emits connected, non-overlapping windows.
It emits the current window and opens a new one whenever the Observable
produced by the specified `closingSelector` function emits an item. The first
window is opened immediately when subscribing to the output Observable.

## Example
Emit only the first two clicks events in every window of [1-5] random seconds
```ts
import { fromEvent, interval } from 'rxjs';
import { windowWhen, map, mergeAll, take } from 'rxjs/operators';

const clicks = fromEvent(document, 'click');
const result = clicks.pipe(
  windowWhen(() => interval(1000 + Math.random() * 4000)),
  map(win => win.pipe(take(2))),     // each window has at most 2 emissions
  mergeAll()                         // flatten the Observable-of-Observables
);
result.subscribe(x => console.log(x));
```

**`see`** [window](RxJS.md#window)

**`see`** [windowCount](RxJS.md#windowcount)

**`see`** [windowTime](RxJS.md#windowtime)

**`see`** [windowToggle](RxJS.md#windowtoggle)

**`see`** [bufferWhen](RxJS.md#bufferwhen)

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `closingSelector` | () => [`ObservableInput`](RxJS.md#observableinput)<`any`\> | A function that takes no arguments and returns an Observable that signals (on either `next` or `complete`) when to close the previous window and start a new one. |

#### Returns

[`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, [`Observable`](../classes/RxJS.Observable.md)<`T`\>\>

A function that returns an Observable of windows, which in turn are
Observables.

___

### withLatestFrom

▸ **withLatestFrom**<`T`, `O`\>(...`inputs`): [`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, [`T`, ...O]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `O` | extends `unknown`[] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...inputs` | [...ObservableInputTuple<O\>[]] |

#### Returns

[`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, [`T`, ...O]\>

▸ **withLatestFrom**<`T`, `O`, `R`\>(...`inputs`): [`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, `R`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `O` | extends `unknown`[] |
| `R` | `R` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...inputs` | [...ObservableInputTuple<O\>[], (...`value`: [`T`, ...O[]]) => `R`] |

#### Returns

[`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, `R`\>

___

### zip

▸ **zip**<`A`\>(`sources`): [`Observable`](../classes/RxJS.Observable.md)<`A`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends readonly `unknown`[] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `sources` | [...ObservableInputTuple<A\>[]] |

#### Returns

[`Observable`](../classes/RxJS.Observable.md)<`A`\>

▸ **zip**<`A`, `R`\>(`sources`, `resultSelector`): [`Observable`](../classes/RxJS.Observable.md)<`R`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends readonly `unknown`[] |
| `R` | `R` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `sources` | [...ObservableInputTuple<A\>[]] |
| `resultSelector` | (...`values`: `A`) => `R` |

#### Returns

[`Observable`](../classes/RxJS.Observable.md)<`R`\>

▸ **zip**<`A`\>(...`sources`): [`Observable`](../classes/RxJS.Observable.md)<`A`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends readonly `unknown`[] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...sources` | [...ObservableInputTuple<A\>[]] |

#### Returns

[`Observable`](../classes/RxJS.Observable.md)<`A`\>

▸ **zip**<`A`, `R`\>(...`sourcesAndResultSelector`): [`Observable`](../classes/RxJS.Observable.md)<`R`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends readonly `unknown`[] |
| `R` | `R` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...sourcesAndResultSelector` | [...ObservableInputTuple<A\>[], (...`values`: `A`) => `R`] |

#### Returns

[`Observable`](../classes/RxJS.Observable.md)<`R`\>

___

### zipAll

▸ **zipAll**<`T`\>(): [`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<[`ObservableInput`](RxJS.md#observableinput)<`T`\>, `T`[]\>

Collects all observable inner sources from the source, once the source completes,
it will subscribe to all inner sources, combining their values by index and emitting
them.

**`see`** [zipWith](RxJS.md#zipwith)

**`see`** [zip](RxJS.md#zip)

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<[`ObservableInput`](RxJS.md#observableinput)<`T`\>, `T`[]\>

▸ **zipAll**<`T`\>(): [`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`any`, `T`[]\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`any`, `T`[]\>

▸ **zipAll**<`T`, `R`\>(`project`): [`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<[`ObservableInput`](RxJS.md#observableinput)<`T`\>, `R`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `R` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `project` | (...`values`: `T`[]) => `R` |

#### Returns

[`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<[`ObservableInput`](RxJS.md#observableinput)<`T`\>, `R`\>

▸ **zipAll**<`R`\>(`project`): [`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`any`, `R`\>

#### Type parameters

| Name |
| :------ |
| `R` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `project` | (...`values`: `any`[]) => `R` |

#### Returns

[`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`any`, `R`\>

___

### zipWith

▸ **zipWith**<`T`, `A`\>(...`otherInputs`): [`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, [`Cons`](RxJS.md#cons)<`T`, `A`\>\>

Subscribes to the source, and the observable inputs provided as arguments, and combines their values, by index, into arrays.

What is meant by "combine by index": The first value from each will be made into a single array, then emitted,
then the second value from each will be combined into a single array and emitted, then the third value
from each will be combined into a single array and emitted, and so on.

This will continue until it is no longer able to combine values of the same index into an array.

After the last value from any one completed source is emitted in an array, the resulting observable will complete,
as there is no way to continue "zipping" values together by index.

Use-cases for this operator are limited. There are memory concerns if one of the streams is emitting
values at a much faster rate than the others. Usage should likely be limited to streams that emit
at a similar pace, or finite streams of known length.

In many cases, authors want `combineLatestWith` and not `zipWith`.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `A` | extends readonly `unknown`[] |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...otherInputs` | [...ObservableInputTuple<A\>[]] | other observable inputs to collate values from. |

#### Returns

[`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, [`Cons`](RxJS.md#cons)<`T`, `A`\>\>

A function that returns an Observable that emits items by index
combined from the source Observable and provided Observables, in form of an
array.
