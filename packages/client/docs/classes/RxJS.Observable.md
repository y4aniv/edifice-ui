[ode-ts-client](../README.md) / [Exports](../modules.md) / [RxJS](../modules/RxJS.md) / Observable

# Class: Observable<T\>

[RxJS](../modules/RxJS.md).Observable

A representation of any set of values over any amount of time. This is the most basic building block
of RxJS.

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- **`Observable`**

  ↳ [`ConnectableObservable`](RxJS.ConnectableObservable.md)

  ↳ [`GroupedObservable`](../interfaces/RxJS.GroupedObservable.md)

  ↳ [`Subject`](RxJS.Subject.md)

  ↳ [`Connectable`](../interfaces/RxJS.Connectable.md)

## Implements

- [`Subscribable`](../interfaces/RxJS.Subscribable.md)<`T`\>

## Table of contents

### Constructors

- [constructor](RxJS.Observable.md#constructor)

### Properties

- [operator](RxJS.Observable.md#operator)
- [source](RxJS.Observable.md#source)
- [create](RxJS.Observable.md#create)

### Methods

- [forEach](RxJS.Observable.md#foreach)
- [lift](RxJS.Observable.md#lift)
- [pipe](RxJS.Observable.md#pipe)
- [subscribe](RxJS.Observable.md#subscribe)
- [toPromise](RxJS.Observable.md#topromise)

## Constructors

### constructor

• **new Observable**<`T`\>(`subscribe?`)

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `subscribe?` | (`this`: [`Observable`](RxJS.Observable.md)<`T`\>, `subscriber`: [`Subscriber`](RxJS.Subscriber.md)<`T`\>) => [`TeardownLogic`](../modules/RxJS.md#teardownlogic) | the function that is called when the Observable is initially subscribed to. This function is given a Subscriber, to which new values can be `next`ed, or an `error` method can be called to raise an error, or `complete` can be called to notify of a successful completion. |

## Properties

### operator

• **operator**: `undefined` \| [`Operator`](../interfaces/RxJS.Operator.md)<`any`, `T`\>

**`Deprecated`**

Internal implementation detail, do not use directly. Will be made internal in v8.

___

### source

• **source**: `undefined` \| [`Observable`](RxJS.Observable.md)<`any`\>

**`Deprecated`**

Internal implementation detail, do not use directly. Will be made internal in v8.

___

### create

▪ `Static` **create**: (...`args`: `any`[]) => `any`

#### Type declaration

▸ (`...args`): `any`

Creates a new Observable by calling the Observable constructor

**`Owner`**

Observable

**`Method`**

create

**`Nocollapse`**

**`Deprecated`**

Use `new Observable()` instead. Will be removed in v8.

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any`[] |

##### Returns

`any`

a new observable

## Methods

### forEach

▸ **forEach**(`next`): `Promise`<`void`\>

Used as a NON-CANCELLABLE means of subscribing to an observable, for use with
APIs that expect promises, like `async/await`. You cannot unsubscribe from this.

**WARNING**: Only use this with observables you *know* will complete. If the source
observable does not complete, you will end up with a promise that is hung up, and
potentially all of the state of an async function hanging out in memory. To avoid
this situation, look into adding something like [timeout](../modules/RxJS.md#timeout), [take](../modules/RxJS.md#take),
[takeWhile](../modules/RxJS.md#takewhile), or [takeUntil](../modules/RxJS.md#takeuntil) amongst others.

#### Example

```ts
import { interval, take } from 'rxjs';

const source$ = interval(1000).pipe(take(4));

async function getTotal() {
  let total = 0;

  await source$.forEach(value => {
    total += value;
    console.log('observable -> ' + value);
  });

  return total;
}

getTotal().then(
  total => console.log('Total: ' + total)
);

// Expected:
// 'observable -> 0'
// 'observable -> 1'
// 'observable -> 2'
// 'observable -> 3'
// 'Total: 6'
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `next` | (`value`: `T`) => `void` | a handler for each value emitted by the observable |

#### Returns

`Promise`<`void`\>

a promise that either resolves on observable completion or
 rejects with the handled error

▸ **forEach**(`next`, `promiseCtor`): `Promise`<`void`\>

**`Deprecated`**

Passing a Promise constructor will no longer be available
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

___

### lift

▸ **lift**<`R`\>(`operator?`): [`Observable`](RxJS.Observable.md)<`R`\>

Creates a new Observable, with this Observable instance as the source, and the passed
operator defined as the new observable's operator.

**`Method`**

lift

**`Deprecated`**

Internal implementation detail, do not use directly. Will be made internal in v8.
If you have implemented an operator using `lift`, it is recommended that you create an
operator by simply returning `new Observable()` directly. See "Creating new operators from
scratch" section here: https://rxjs.dev/guide/operators

#### Type parameters

| Name |
| :------ |
| `R` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `operator?` | [`Operator`](../interfaces/RxJS.Operator.md)<`T`, `R`\> | the operator defining the operation to take on the observable |

#### Returns

[`Observable`](RxJS.Observable.md)<`R`\>

a new observable with the Operator applied

___

### pipe

▸ **pipe**(): [`Observable`](RxJS.Observable.md)<`T`\>

#### Returns

[`Observable`](RxJS.Observable.md)<`T`\>

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

▸ **pipe**<`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`\>(`op1`, `op2`, `op3`, `op4`, `op5`, `op6`, `op7`, `op8`, `op9`, `...operations`): [`Observable`](RxJS.Observable.md)<`unknown`\>

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

___

### subscribe

▸ **subscribe**(`observerOrNext?`): [`Subscription`](RxJS.Subscription.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `observerOrNext?` | `Partial`<[`Observer`](../interfaces/RxJS.Observer.md)<`T`\>\> \| (`value`: `T`) => `void` |

#### Returns

[`Subscription`](RxJS.Subscription.md)

#### Implementation of

[Subscribable](../interfaces/RxJS.Subscribable.md).[subscribe](../interfaces/RxJS.Subscribable.md#subscribe)

▸ **subscribe**(`next?`, `error?`, `complete?`): [`Subscription`](RxJS.Subscription.md)

**`Deprecated`**

Instead of passing separate callback arguments, use an observer argument. Signatures taking separate callback arguments will be removed in v8. Details: https://rxjs.dev/deprecations/subscribe-arguments

#### Parameters

| Name | Type |
| :------ | :------ |
| `next?` | ``null`` \| (`value`: `T`) => `void` |
| `error?` | ``null`` \| (`error`: `any`) => `void` |
| `complete?` | ``null`` \| () => `void` |

#### Returns

[`Subscription`](RxJS.Subscription.md)

#### Implementation of

Subscribable.subscribe

___

### toPromise

▸ **toPromise**(): `Promise`<`undefined` \| `T`\>

**`Deprecated`**

Replaced with [firstValueFrom](../modules/RxJS.md#firstvaluefrom) and [lastValueFrom](../modules/RxJS.md#lastvaluefrom). Will be removed in v8. Details: https://rxjs.dev/deprecations/to-promise

#### Returns

`Promise`<`undefined` \| `T`\>

▸ **toPromise**(`PromiseCtor`): `Promise`<`undefined` \| `T`\>

**`Deprecated`**

Replaced with [firstValueFrom](../modules/RxJS.md#firstvaluefrom) and [lastValueFrom](../modules/RxJS.md#lastvaluefrom). Will be removed in v8. Details: https://rxjs.dev/deprecations/to-promise

#### Parameters

| Name | Type |
| :------ | :------ |
| `PromiseCtor` | `PromiseConstructor` |

#### Returns

`Promise`<`undefined` \| `T`\>

▸ **toPromise**(`PromiseCtor`): `Promise`<`undefined` \| `T`\>

**`Deprecated`**

Replaced with [firstValueFrom](../modules/RxJS.md#firstvaluefrom) and [lastValueFrom](../modules/RxJS.md#lastvaluefrom). Will be removed in v8. Details: https://rxjs.dev/deprecations/to-promise

#### Parameters

| Name | Type |
| :------ | :------ |
| `PromiseCtor` | `PromiseConstructorLike` |

#### Returns

`Promise`<`undefined` \| `T`\>
