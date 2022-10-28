[ode-ts-client](../README.md) / [Exports](../modules.md) / [RxJS](../modules/RxJS.md) / ReplaySubject

# Class: ReplaySubject<T\>

[RxJS](../modules/RxJS.md).ReplaySubject

A variant of [Subject](RxJS.Subject.md) that "replays" old values to new subscribers by emitting them when they first subscribe.

`ReplaySubject` has an internal buffer that will store a specified number of values that it has observed. Like `Subject`,
`ReplaySubject` "observes" values by having them passed to its `next` method. When it observes a value, it will store that
value for a time determined by the configuration of the `ReplaySubject`, as passed to its constructor.

When a new subscriber subscribes to the `ReplaySubject` instance, it will synchronously emit all values in its buffer in
a First-In-First-Out (FIFO) manner. The `ReplaySubject` will also complete, if it has observed completion; and it will
error if it has observed an error.

There are two main configuration items to be concerned with:

1. `bufferSize` - This will determine how many items are stored in the buffer, defaults to infinite.
2. `windowTime` - The amount of time to hold a value in the buffer before removing it from the buffer.

Both configurations may exist simultaneously. So if you would like to buffer a maximum of 3 values, as long as the values
are less than 2 seconds old, you could do so with a `new ReplaySubject(3, 2000)`.

### Differences with BehaviorSubject

`BehaviorSubject` is similar to `new ReplaySubject(1)`, with a couple fo exceptions:

1. `BehaviorSubject` comes "primed" with a single value upon construction.
2. `ReplaySubject` will replay values, even after observing an error, where `BehaviorSubject` will not.

**`see`** [Subject](RxJS.Subject.md)

**`see`** [BehaviorSubject](RxJS.BehaviorSubject.md)

**`see`** [shareReplay](../modules/RxJS.md#sharereplay)

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`Subject`](RxJS.Subject.md)<`T`\>

  ↳ **`ReplaySubject`**

## Table of contents

### Constructors

- [constructor](RxJS.ReplaySubject.md#constructor)

### Properties

- [closed](RxJS.ReplaySubject.md#closed)
- [hasError](RxJS.ReplaySubject.md#haserror)
- [isStopped](RxJS.ReplaySubject.md#isstopped)
- [observers](RxJS.ReplaySubject.md#observers)
- [operator](RxJS.ReplaySubject.md#operator)
- [source](RxJS.ReplaySubject.md#source)
- [thrownError](RxJS.ReplaySubject.md#thrownerror)
- [create](RxJS.ReplaySubject.md#create)

### Accessors

- [observed](RxJS.ReplaySubject.md#observed)

### Methods

- [asObservable](RxJS.ReplaySubject.md#asobservable)
- [complete](RxJS.ReplaySubject.md#complete)
- [error](RxJS.ReplaySubject.md#error)
- [forEach](RxJS.ReplaySubject.md#foreach)
- [lift](RxJS.ReplaySubject.md#lift)
- [next](RxJS.ReplaySubject.md#next)
- [pipe](RxJS.ReplaySubject.md#pipe)
- [subscribe](RxJS.ReplaySubject.md#subscribe)
- [toPromise](RxJS.ReplaySubject.md#topromise)
- [unsubscribe](RxJS.ReplaySubject.md#unsubscribe)

## Constructors

### constructor

• **new ReplaySubject**<`T`\>(`_bufferSize?`, `_windowTime?`, `_timestampProvider?`)

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `_bufferSize?` | `number` |
| `_windowTime?` | `number` |
| `_timestampProvider?` | [`TimestampProvider`](../interfaces/RxJS.TimestampProvider.md) |

#### Overrides

[Subject](RxJS.Subject.md).[constructor](RxJS.Subject.md#constructor)

## Properties

### closed

• **closed**: `boolean`

#### Inherited from

[Subject](RxJS.Subject.md).[closed](RxJS.Subject.md#closed)

___

### hasError

• **hasError**: `boolean`

**`deprecated`** Internal implementation detail, do not use directly. Will be made internal in v8.

#### Inherited from

[Subject](RxJS.Subject.md).[hasError](RxJS.Subject.md#haserror)

___

### isStopped

• **isStopped**: `boolean`

**`deprecated`** Internal implementation detail, do not use directly. Will be made internal in v8.

#### Inherited from

[Subject](RxJS.Subject.md).[isStopped](RxJS.Subject.md#isstopped)

___

### observers

• **observers**: [`Observer`](../interfaces/RxJS.Observer.md)<`T`\>[]

**`deprecated`** Internal implementation detail, do not use directly. Will be made internal in v8.

#### Inherited from

[Subject](RxJS.Subject.md).[observers](RxJS.Subject.md#observers)

___

### operator

• **operator**: `undefined` \| [`Operator`](../interfaces/RxJS.Operator.md)<`any`, `T`\>

**`deprecated`** Internal implementation detail, do not use directly. Will be made internal in v8.

#### Inherited from

[Subject](RxJS.Subject.md).[operator](RxJS.Subject.md#operator)

___

### source

• **source**: `undefined` \| [`Observable`](RxJS.Observable.md)<`any`\>

**`deprecated`** Internal implementation detail, do not use directly. Will be made internal in v8.

#### Inherited from

[Subject](RxJS.Subject.md).[source](RxJS.Subject.md#source)

___

### thrownError

• **thrownError**: `any`

**`deprecated`** Internal implementation detail, do not use directly. Will be made internal in v8.

#### Inherited from

[Subject](RxJS.Subject.md).[thrownError](RxJS.Subject.md#thrownerror)

___

### create

▪ `Static` **create**: (...`args`: `any`[]) => `any`

#### Type declaration

▸ (...`args`): `any`

Creates a "subject" by basically gluing an observer to an observable.

**`nocollapse`**

**`deprecated`** Recommended you do not use. Will be removed at some point in the future. Plans for replacement still under discussion.

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any`[] |

##### Returns

`any`

#### Inherited from

[Subject](RxJS.Subject.md).[create](RxJS.Subject.md#create)

## Accessors

### observed

• `get` **observed**(): `boolean`

#### Returns

`boolean`

#### Inherited from

Subject.observed

## Methods

### asObservable

▸ **asObservable**(): [`Observable`](RxJS.Observable.md)<`T`\>

Creates a new Observable with this Subject as the source. You can do this
to create customize Observer-side logic of the Subject and conceal it from
code that uses the Observable.

#### Returns

[`Observable`](RxJS.Observable.md)<`T`\>

Observable that the Subject casts to

#### Inherited from

[Subject](RxJS.Subject.md).[asObservable](RxJS.Subject.md#asobservable)

___

### complete

▸ **complete**(): `void`

#### Returns

`void`

#### Inherited from

[Subject](RxJS.Subject.md).[complete](RxJS.Subject.md#complete)

___

### error

▸ **error**(`err`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `err` | `any` |

#### Returns

`void`

#### Inherited from

[Subject](RxJS.Subject.md).[error](RxJS.Subject.md#error)

___

### forEach

▸ **forEach**(`next`): `Promise`<`void`\>

Used as a NON-CANCELLABLE means of subscribing to an observable, for use with
APIs that expect promises, like `async/await`. You cannot unsubscribe from this.

**WARNING**: Only use this with observables you *know* will complete. If the source
observable does not complete, you will end up with a promise that is hung up, and
potentially all of the state of an async function hanging out in memory. To avoid
this situation, look into adding something like [timeout](../modules/RxJS.md#timeout), [take](../modules/RxJS.md#take),
[takeWhile](../modules/RxJS.md#takewhile), or [takeUntil](../modules/RxJS.md#takeuntil) amongst others.

### Example:

```ts
import { interval } from 'rxjs';
import { take } from 'rxjs/operators';

const source$ = interval(1000).pipe(take(4));

async function getTotal() {
   let total = 0;

   await source$.forEach(value => {
     total += value;
     console.log('observable -> ', value);
   });

   return total;
}

getTotal().then(
   total => console.log('Total:', total)
)

// Expected:
// "observable -> 0"
// "observable -> 1"
// "observable -> 2"
// "observable -> 3"
// "Total: 6"
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `next` | (`value`: `T`) => `void` | a handler for each value emitted by the observable |

#### Returns

`Promise`<`void`\>

a promise that either resolves on observable completion or
 rejects with the handled error

#### Inherited from

[Subject](RxJS.Subject.md).[forEach](RxJS.Subject.md#foreach)

▸ **forEach**(`next`, `promiseCtor`): `Promise`<`void`\>

**`deprecated`** Passing a Promise constructor will no longer be available
in upcoming versions of RxJS. This is because it adds weight to the library, for very
little benefit. If you need this functionality, it is recommended that you either
polyfill Promise, or you create an adapter to convert the returned native promise
to whatever promise implementation you wanted. Will be removed in v8.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `next` | (`value`: `T`) => `void` | a handler for each value emitted by the observable |
| `promiseCtor` | `PromiseConstructorLike` | a constructor function used to instantiate the Promise |

#### Returns

`Promise`<`void`\>

a promise that either resolves on observable completion or
 rejects with the handled error

#### Inherited from

[Subject](RxJS.Subject.md).[forEach](RxJS.Subject.md#foreach)

___

### lift

▸ **lift**<`R`\>(`operator`): [`Observable`](RxJS.Observable.md)<`R`\>

**`deprecated`** Internal implementation detail, do not use directly. Will be made internal in v8.

#### Type parameters

| Name |
| :------ |
| `R` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `operator` | [`Operator`](../interfaces/RxJS.Operator.md)<`T`, `R`\> |

#### Returns

[`Observable`](RxJS.Observable.md)<`R`\>

#### Inherited from

[Subject](RxJS.Subject.md).[lift](RxJS.Subject.md#lift)

___

### next

▸ **next**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |

#### Returns

`void`

#### Overrides

[Subject](RxJS.Subject.md).[next](RxJS.Subject.md#next)

___

### pipe

▸ **pipe**(): [`Observable`](RxJS.Observable.md)<`T`\>

#### Returns

[`Observable`](RxJS.Observable.md)<`T`\>

#### Inherited from

[Subject](RxJS.Subject.md).[pipe](RxJS.Subject.md#pipe)

▸ **pipe**<`A`\>(`op1`): [`Observable`](RxJS.Observable.md)<`A`\>

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `op1` | [`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, `A`\> |

#### Returns

[`Observable`](RxJS.Observable.md)<`A`\>

#### Inherited from

[Subject](RxJS.Subject.md).[pipe](RxJS.Subject.md#pipe)

▸ **pipe**<`A`, `B`\>(`op1`, `op2`): [`Observable`](RxJS.Observable.md)<`B`\>

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `op1` | [`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, `A`\> |
| `op2` | [`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`A`, `B`\> |

#### Returns

[`Observable`](RxJS.Observable.md)<`B`\>

#### Inherited from

[Subject](RxJS.Subject.md).[pipe](RxJS.Subject.md#pipe)

▸ **pipe**<`A`, `B`, `C`\>(`op1`, `op2`, `op3`): [`Observable`](RxJS.Observable.md)<`C`\>

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |
| `C` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `op1` | [`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, `A`\> |
| `op2` | [`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`A`, `B`\> |
| `op3` | [`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`B`, `C`\> |

#### Returns

[`Observable`](RxJS.Observable.md)<`C`\>

#### Inherited from

[Subject](RxJS.Subject.md).[pipe](RxJS.Subject.md#pipe)

▸ **pipe**<`A`, `B`, `C`, `D`\>(`op1`, `op2`, `op3`, `op4`): [`Observable`](RxJS.Observable.md)<`D`\>

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |
| `C` |
| `D` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `op1` | [`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, `A`\> |
| `op2` | [`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`A`, `B`\> |
| `op3` | [`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`B`, `C`\> |
| `op4` | [`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`C`, `D`\> |

#### Returns

[`Observable`](RxJS.Observable.md)<`D`\>

#### Inherited from

[Subject](RxJS.Subject.md).[pipe](RxJS.Subject.md#pipe)

▸ **pipe**<`A`, `B`, `C`, `D`, `E`\>(`op1`, `op2`, `op3`, `op4`, `op5`): [`Observable`](RxJS.Observable.md)<`E`\>

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |
| `C` |
| `D` |
| `E` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `op1` | [`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, `A`\> |
| `op2` | [`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`A`, `B`\> |
| `op3` | [`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`B`, `C`\> |
| `op4` | [`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`C`, `D`\> |
| `op5` | [`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`D`, `E`\> |

#### Returns

[`Observable`](RxJS.Observable.md)<`E`\>

#### Inherited from

[Subject](RxJS.Subject.md).[pipe](RxJS.Subject.md#pipe)

▸ **pipe**<`A`, `B`, `C`, `D`, `E`, `F`\>(`op1`, `op2`, `op3`, `op4`, `op5`, `op6`): [`Observable`](RxJS.Observable.md)<`F`\>

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |
| `C` |
| `D` |
| `E` |
| `F` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `op1` | [`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, `A`\> |
| `op2` | [`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`A`, `B`\> |
| `op3` | [`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`B`, `C`\> |
| `op4` | [`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`C`, `D`\> |
| `op5` | [`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`D`, `E`\> |
| `op6` | [`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`E`, `F`\> |

#### Returns

[`Observable`](RxJS.Observable.md)<`F`\>

#### Inherited from

[Subject](RxJS.Subject.md).[pipe](RxJS.Subject.md#pipe)

▸ **pipe**<`A`, `B`, `C`, `D`, `E`, `F`, `G`\>(`op1`, `op2`, `op3`, `op4`, `op5`, `op6`, `op7`): [`Observable`](RxJS.Observable.md)<`G`\>

#### Type parameters

| Name |
| :------ |
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
| `op1` | [`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, `A`\> |
| `op2` | [`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`A`, `B`\> |
| `op3` | [`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`B`, `C`\> |
| `op4` | [`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`C`, `D`\> |
| `op5` | [`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`D`, `E`\> |
| `op6` | [`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`E`, `F`\> |
| `op7` | [`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`F`, `G`\> |

#### Returns

[`Observable`](RxJS.Observable.md)<`G`\>

#### Inherited from

[Subject](RxJS.Subject.md).[pipe](RxJS.Subject.md#pipe)

▸ **pipe**<`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`\>(`op1`, `op2`, `op3`, `op4`, `op5`, `op6`, `op7`, `op8`): [`Observable`](RxJS.Observable.md)<`H`\>

#### Type parameters

| Name |
| :------ |
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
| `op1` | [`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, `A`\> |
| `op2` | [`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`A`, `B`\> |
| `op3` | [`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`B`, `C`\> |
| `op4` | [`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`C`, `D`\> |
| `op5` | [`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`D`, `E`\> |
| `op6` | [`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`E`, `F`\> |
| `op7` | [`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`F`, `G`\> |
| `op8` | [`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`G`, `H`\> |

#### Returns

[`Observable`](RxJS.Observable.md)<`H`\>

#### Inherited from

[Subject](RxJS.Subject.md).[pipe](RxJS.Subject.md#pipe)

▸ **pipe**<`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`\>(`op1`, `op2`, `op3`, `op4`, `op5`, `op6`, `op7`, `op8`, `op9`): [`Observable`](RxJS.Observable.md)<`I`\>

#### Type parameters

| Name |
| :------ |
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
| `op1` | [`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, `A`\> |
| `op2` | [`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`A`, `B`\> |
| `op3` | [`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`B`, `C`\> |
| `op4` | [`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`C`, `D`\> |
| `op5` | [`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`D`, `E`\> |
| `op6` | [`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`E`, `F`\> |
| `op7` | [`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`F`, `G`\> |
| `op8` | [`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`G`, `H`\> |
| `op9` | [`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`H`, `I`\> |

#### Returns

[`Observable`](RxJS.Observable.md)<`I`\>

#### Inherited from

[Subject](RxJS.Subject.md).[pipe](RxJS.Subject.md#pipe)

▸ **pipe**<`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`\>(`op1`, `op2`, `op3`, `op4`, `op5`, `op6`, `op7`, `op8`, `op9`, ...`operations`): [`Observable`](RxJS.Observable.md)<`unknown`\>

#### Type parameters

| Name |
| :------ |
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
| `op1` | [`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`T`, `A`\> |
| `op2` | [`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`A`, `B`\> |
| `op3` | [`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`B`, `C`\> |
| `op4` | [`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`C`, `D`\> |
| `op5` | [`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`D`, `E`\> |
| `op6` | [`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`E`, `F`\> |
| `op7` | [`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`F`, `G`\> |
| `op8` | [`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`G`, `H`\> |
| `op9` | [`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`H`, `I`\> |
| `...operations` | [`OperatorFunction`](../interfaces/RxJS.OperatorFunction.md)<`any`, `any`\>[] |

#### Returns

[`Observable`](RxJS.Observable.md)<`unknown`\>

#### Inherited from

[Subject](RxJS.Subject.md).[pipe](RxJS.Subject.md#pipe)

___

### subscribe

▸ **subscribe**(`observer?`): [`Subscription`](RxJS.Subscription.md)

**`deprecated`** Instead of passing separate callback arguments, use an observer argument. Signatures taking separate callback arguments will be removed in v8. Details: https://rxjs.dev/deprecations/subscribe-arguments

#### Parameters

| Name | Type |
| :------ | :------ |
| `observer?` | `Partial`<[`Observer`](../interfaces/RxJS.Observer.md)<`T`\>\> |

#### Returns

[`Subscription`](RxJS.Subscription.md)

#### Inherited from

[Subject](RxJS.Subject.md).[subscribe](RxJS.Subject.md#subscribe)

▸ **subscribe**(`next`): [`Subscription`](RxJS.Subscription.md)

**`deprecated`** Instead of passing separate callback arguments, use an observer argument. Signatures taking separate callback arguments will be removed in v8. Details: https://rxjs.dev/deprecations/subscribe-arguments

#### Parameters

| Name | Type |
| :------ | :------ |
| `next` | (`value`: `T`) => `void` |

#### Returns

[`Subscription`](RxJS.Subscription.md)

#### Inherited from

[Subject](RxJS.Subject.md).[subscribe](RxJS.Subject.md#subscribe)

▸ **subscribe**(`next?`, `error?`, `complete?`): [`Subscription`](RxJS.Subscription.md)

**`deprecated`** Instead of passing separate callback arguments, use an observer argument. Signatures taking separate callback arguments will be removed in v8. Details: https://rxjs.dev/deprecations/subscribe-arguments

#### Parameters

| Name | Type |
| :------ | :------ |
| `next?` | ``null`` \| (`value`: `T`) => `void` |
| `error?` | ``null`` \| (`error`: `any`) => `void` |
| `complete?` | ``null`` \| () => `void` |

#### Returns

[`Subscription`](RxJS.Subscription.md)

#### Inherited from

[Subject](RxJS.Subject.md).[subscribe](RxJS.Subject.md#subscribe)

___

### toPromise

▸ **toPromise**(): `Promise`<`undefined` \| `T`\>

**`deprecated`** Replaced with [firstValueFrom](../modules/RxJS.md#firstvaluefrom) and [lastValueFrom](../modules/RxJS.md#lastvaluefrom). Will be removed in v8. Details: https://rxjs.dev/deprecations/to-promise

#### Returns

`Promise`<`undefined` \| `T`\>

#### Inherited from

[Subject](RxJS.Subject.md).[toPromise](RxJS.Subject.md#topromise)

▸ **toPromise**(`PromiseCtor`): `Promise`<`undefined` \| `T`\>

**`deprecated`** Replaced with [firstValueFrom](../modules/RxJS.md#firstvaluefrom) and [lastValueFrom](../modules/RxJS.md#lastvaluefrom). Will be removed in v8. Details: https://rxjs.dev/deprecations/to-promise

#### Parameters

| Name | Type |
| :------ | :------ |
| `PromiseCtor` | `PromiseConstructor` |

#### Returns

`Promise`<`undefined` \| `T`\>

#### Inherited from

[Subject](RxJS.Subject.md).[toPromise](RxJS.Subject.md#topromise)

▸ **toPromise**(`PromiseCtor`): `Promise`<`undefined` \| `T`\>

**`deprecated`** Replaced with [firstValueFrom](../modules/RxJS.md#firstvaluefrom) and [lastValueFrom](../modules/RxJS.md#lastvaluefrom). Will be removed in v8. Details: https://rxjs.dev/deprecations/to-promise

#### Parameters

| Name | Type |
| :------ | :------ |
| `PromiseCtor` | `PromiseConstructorLike` |

#### Returns

`Promise`<`undefined` \| `T`\>

#### Inherited from

[Subject](RxJS.Subject.md).[toPromise](RxJS.Subject.md#topromise)

___

### unsubscribe

▸ **unsubscribe**(): `void`

#### Returns

`void`

#### Inherited from

[Subject](RxJS.Subject.md).[unsubscribe](RxJS.Subject.md#unsubscribe)
