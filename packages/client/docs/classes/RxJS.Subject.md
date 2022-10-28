[ode-ts-client](../README.md) / [Exports](../modules.md) / [RxJS](../modules/RxJS.md) / Subject

# Class: Subject<T\>

[RxJS](../modules/RxJS.md).Subject

A Subject is a special type of Observable that allows values to be
multicasted to many Observers. Subjects are like EventEmitters.

Every Subject is an Observable and an Observer. You can subscribe to a
Subject, and you can call next to feed values as well as error and complete.

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`Observable`](RxJS.Observable.md)<`T`\>

  ↳ **`Subject`**

  ↳↳ [`BehaviorSubject`](RxJS.BehaviorSubject.md)

  ↳↳ [`ReplaySubject`](RxJS.ReplaySubject.md)

  ↳↳ [`AsyncSubject`](RxJS.AsyncSubject.md)

## Implements

- [`SubscriptionLike`](../interfaces/RxJS.SubscriptionLike.md)

## Table of contents

### Constructors

- [constructor](RxJS.Subject.md#constructor)

### Properties

- [closed](RxJS.Subject.md#closed)
- [hasError](RxJS.Subject.md#haserror)
- [isStopped](RxJS.Subject.md#isstopped)
- [observers](RxJS.Subject.md#observers)
- [operator](RxJS.Subject.md#operator)
- [source](RxJS.Subject.md#source)
- [thrownError](RxJS.Subject.md#thrownerror)
- [create](RxJS.Subject.md#create)

### Accessors

- [observed](RxJS.Subject.md#observed)

### Methods

- [asObservable](RxJS.Subject.md#asobservable)
- [complete](RxJS.Subject.md#complete)
- [error](RxJS.Subject.md#error)
- [forEach](RxJS.Subject.md#foreach)
- [lift](RxJS.Subject.md#lift)
- [next](RxJS.Subject.md#next)
- [pipe](RxJS.Subject.md#pipe)
- [subscribe](RxJS.Subject.md#subscribe)
- [toPromise](RxJS.Subject.md#topromise)
- [unsubscribe](RxJS.Subject.md#unsubscribe)

## Constructors

### constructor

• **new Subject**<`T`\>()

#### Type parameters

| Name |
| :------ |
| `T` |

#### Overrides

[Observable](RxJS.Observable.md).[constructor](RxJS.Observable.md#constructor)

## Properties

### closed

• **closed**: `boolean`

#### Implementation of

[SubscriptionLike](../interfaces/RxJS.SubscriptionLike.md).[closed](../interfaces/RxJS.SubscriptionLike.md#closed)

___

### hasError

• **hasError**: `boolean`

**`deprecated`** Internal implementation detail, do not use directly. Will be made internal in v8.

___

### isStopped

• **isStopped**: `boolean`

**`deprecated`** Internal implementation detail, do not use directly. Will be made internal in v8.

___

### observers

• **observers**: [`Observer`](../interfaces/RxJS.Observer.md)<`T`\>[]

**`deprecated`** Internal implementation detail, do not use directly. Will be made internal in v8.

___

### operator

• **operator**: `undefined` \| [`Operator`](../interfaces/RxJS.Operator.md)<`any`, `T`\>

**`deprecated`** Internal implementation detail, do not use directly. Will be made internal in v8.

#### Inherited from

[Observable](RxJS.Observable.md).[operator](RxJS.Observable.md#operator)

___

### source

• **source**: `undefined` \| [`Observable`](RxJS.Observable.md)<`any`\>

**`deprecated`** Internal implementation detail, do not use directly. Will be made internal in v8.

#### Inherited from

[Observable](RxJS.Observable.md).[source](RxJS.Observable.md#source)

___

### thrownError

• **thrownError**: `any`

**`deprecated`** Internal implementation detail, do not use directly. Will be made internal in v8.

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

#### Overrides

[Observable](RxJS.Observable.md).[create](RxJS.Observable.md#create)

## Accessors

### observed

• `get` **observed**(): `boolean`

#### Returns

`boolean`

## Methods

### asObservable

▸ **asObservable**(): [`Observable`](RxJS.Observable.md)<`T`\>

Creates a new Observable with this Subject as the source. You can do this
to create customize Observer-side logic of the Subject and conceal it from
code that uses the Observable.

#### Returns

[`Observable`](RxJS.Observable.md)<`T`\>

Observable that the Subject casts to

___

### complete

▸ **complete**(): `void`

#### Returns

`void`

___

### error

▸ **error**(`err`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `err` | `any` |

#### Returns

`void`

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

[Observable](RxJS.Observable.md).[forEach](RxJS.Observable.md#foreach)

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

[Observable](RxJS.Observable.md).[forEach](RxJS.Observable.md#foreach)

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

#### Overrides

[Observable](RxJS.Observable.md).[lift](RxJS.Observable.md#lift)

___

### next

▸ **next**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |

#### Returns

`void`

___

### pipe

▸ **pipe**(): [`Observable`](RxJS.Observable.md)<`T`\>

#### Returns

[`Observable`](RxJS.Observable.md)<`T`\>

#### Inherited from

[Observable](RxJS.Observable.md).[pipe](RxJS.Observable.md#pipe)

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

[Observable](RxJS.Observable.md).[pipe](RxJS.Observable.md#pipe)

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

[Observable](RxJS.Observable.md).[pipe](RxJS.Observable.md#pipe)

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

[Observable](RxJS.Observable.md).[pipe](RxJS.Observable.md#pipe)

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

[Observable](RxJS.Observable.md).[pipe](RxJS.Observable.md#pipe)

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

[Observable](RxJS.Observable.md).[pipe](RxJS.Observable.md#pipe)

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

[Observable](RxJS.Observable.md).[pipe](RxJS.Observable.md#pipe)

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

[Observable](RxJS.Observable.md).[pipe](RxJS.Observable.md#pipe)

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

[Observable](RxJS.Observable.md).[pipe](RxJS.Observable.md#pipe)

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

[Observable](RxJS.Observable.md).[pipe](RxJS.Observable.md#pipe)

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

[Observable](RxJS.Observable.md).[pipe](RxJS.Observable.md#pipe)

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

[Observable](RxJS.Observable.md).[subscribe](RxJS.Observable.md#subscribe)

▸ **subscribe**(`next`): [`Subscription`](RxJS.Subscription.md)

**`deprecated`** Instead of passing separate callback arguments, use an observer argument. Signatures taking separate callback arguments will be removed in v8. Details: https://rxjs.dev/deprecations/subscribe-arguments

#### Parameters

| Name | Type |
| :------ | :------ |
| `next` | (`value`: `T`) => `void` |

#### Returns

[`Subscription`](RxJS.Subscription.md)

#### Inherited from

[Observable](RxJS.Observable.md).[subscribe](RxJS.Observable.md#subscribe)

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

[Observable](RxJS.Observable.md).[subscribe](RxJS.Observable.md#subscribe)

___

### toPromise

▸ **toPromise**(): `Promise`<`undefined` \| `T`\>

**`deprecated`** Replaced with [firstValueFrom](../modules/RxJS.md#firstvaluefrom) and [lastValueFrom](../modules/RxJS.md#lastvaluefrom). Will be removed in v8. Details: https://rxjs.dev/deprecations/to-promise

#### Returns

`Promise`<`undefined` \| `T`\>

#### Inherited from

[Observable](RxJS.Observable.md).[toPromise](RxJS.Observable.md#topromise)

▸ **toPromise**(`PromiseCtor`): `Promise`<`undefined` \| `T`\>

**`deprecated`** Replaced with [firstValueFrom](../modules/RxJS.md#firstvaluefrom) and [lastValueFrom](../modules/RxJS.md#lastvaluefrom). Will be removed in v8. Details: https://rxjs.dev/deprecations/to-promise

#### Parameters

| Name | Type |
| :------ | :------ |
| `PromiseCtor` | `PromiseConstructor` |

#### Returns

`Promise`<`undefined` \| `T`\>

#### Inherited from

[Observable](RxJS.Observable.md).[toPromise](RxJS.Observable.md#topromise)

▸ **toPromise**(`PromiseCtor`): `Promise`<`undefined` \| `T`\>

**`deprecated`** Replaced with [firstValueFrom](../modules/RxJS.md#firstvaluefrom) and [lastValueFrom](../modules/RxJS.md#lastvaluefrom). Will be removed in v8. Details: https://rxjs.dev/deprecations/to-promise

#### Parameters

| Name | Type |
| :------ | :------ |
| `PromiseCtor` | `PromiseConstructorLike` |

#### Returns

`Promise`<`undefined` \| `T`\>

#### Inherited from

[Observable](RxJS.Observable.md).[toPromise](RxJS.Observable.md#topromise)

___

### unsubscribe

▸ **unsubscribe**(): `void`

#### Returns

`void`

#### Implementation of

[SubscriptionLike](../interfaces/RxJS.SubscriptionLike.md).[unsubscribe](../interfaces/RxJS.SubscriptionLike.md#unsubscribe)
