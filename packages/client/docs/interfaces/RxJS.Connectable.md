[ode-ts-client](../README.md) / [Exports](../modules.md) / [RxJS](../modules/RxJS.md) / Connectable

# Interface: Connectable<T\>

[RxJS](../modules/RxJS.md).Connectable

An observable with a `connect` method that is used to create a subscription
to an underlying source, connecting it with all consumers via a multicast.

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`Observable`](../classes/RxJS.Observable.md)<`T`\>

  ↳ **`Connectable`**

## Table of contents

### Properties

- [operator](RxJS.Connectable.md#operator)
- [source](RxJS.Connectable.md#source)

### Methods

- [connect](RxJS.Connectable.md#connect)
- [forEach](RxJS.Connectable.md#foreach)
- [lift](RxJS.Connectable.md#lift)
- [pipe](RxJS.Connectable.md#pipe)
- [subscribe](RxJS.Connectable.md#subscribe)
- [toPromise](RxJS.Connectable.md#topromise)

## Properties

### operator

• **operator**: `undefined` \| [`Operator`](RxJS.Operator.md)<`any`, `T`\>

**`deprecated`** Internal implementation detail, do not use directly. Will be made internal in v8.

#### Inherited from

[Observable](../classes/RxJS.Observable.md).[operator](../classes/RxJS.Observable.md#operator)

___

### source

• **source**: `undefined` \| [`Observable`](../classes/RxJS.Observable.md)<`any`\>

**`deprecated`** Internal implementation detail, do not use directly. Will be made internal in v8.

#### Inherited from

[Observable](../classes/RxJS.Observable.md).[source](../classes/RxJS.Observable.md#source)

## Methods

### connect

▸ **connect**(): [`Subscription`](../classes/RxJS.Subscription.md)

(Idempotent) Calling this method will connect the underlying source observable to all subscribed consumers
through an underlying [Subject](../classes/RxJS.Subject.md).

#### Returns

[`Subscription`](../classes/RxJS.Subscription.md)

A subscription, that when unsubscribed, will "disconnect" the source from the connector subject,
severing notifications to all consumers.

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

[Observable](../classes/RxJS.Observable.md).[forEach](../classes/RxJS.Observable.md#foreach)

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

[Observable](../classes/RxJS.Observable.md).[forEach](../classes/RxJS.Observable.md#foreach)

___

### lift

▸ **lift**<`R`\>(`operator?`): [`Observable`](../classes/RxJS.Observable.md)<`R`\>

Creates a new Observable, with this Observable instance as the source, and the passed
operator defined as the new observable's operator.

**`method`** lift

**`deprecated`** Internal implementation detail, do not use directly. Will be made internal in v8.
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
| `operator?` | [`Operator`](RxJS.Operator.md)<`T`, `R`\> | the operator defining the operation to take on the observable |

#### Returns

[`Observable`](../classes/RxJS.Observable.md)<`R`\>

a new observable with the Operator applied

#### Inherited from

[Observable](../classes/RxJS.Observable.md).[lift](../classes/RxJS.Observable.md#lift)

___

### pipe

▸ **pipe**(): [`Observable`](../classes/RxJS.Observable.md)<`T`\>

#### Returns

[`Observable`](../classes/RxJS.Observable.md)<`T`\>

#### Inherited from

[Observable](../classes/RxJS.Observable.md).[pipe](../classes/RxJS.Observable.md#pipe)

▸ **pipe**<`A`\>(`op1`): [`Observable`](../classes/RxJS.Observable.md)<`A`\>

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `op1` | [`OperatorFunction`](RxJS.OperatorFunction.md)<`T`, `A`\> |

#### Returns

[`Observable`](../classes/RxJS.Observable.md)<`A`\>

#### Inherited from

[Observable](../classes/RxJS.Observable.md).[pipe](../classes/RxJS.Observable.md#pipe)

▸ **pipe**<`A`, `B`\>(`op1`, `op2`): [`Observable`](../classes/RxJS.Observable.md)<`B`\>

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `op1` | [`OperatorFunction`](RxJS.OperatorFunction.md)<`T`, `A`\> |
| `op2` | [`OperatorFunction`](RxJS.OperatorFunction.md)<`A`, `B`\> |

#### Returns

[`Observable`](../classes/RxJS.Observable.md)<`B`\>

#### Inherited from

[Observable](../classes/RxJS.Observable.md).[pipe](../classes/RxJS.Observable.md#pipe)

▸ **pipe**<`A`, `B`, `C`\>(`op1`, `op2`, `op3`): [`Observable`](../classes/RxJS.Observable.md)<`C`\>

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |
| `C` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `op1` | [`OperatorFunction`](RxJS.OperatorFunction.md)<`T`, `A`\> |
| `op2` | [`OperatorFunction`](RxJS.OperatorFunction.md)<`A`, `B`\> |
| `op3` | [`OperatorFunction`](RxJS.OperatorFunction.md)<`B`, `C`\> |

#### Returns

[`Observable`](../classes/RxJS.Observable.md)<`C`\>

#### Inherited from

[Observable](../classes/RxJS.Observable.md).[pipe](../classes/RxJS.Observable.md#pipe)

▸ **pipe**<`A`, `B`, `C`, `D`\>(`op1`, `op2`, `op3`, `op4`): [`Observable`](../classes/RxJS.Observable.md)<`D`\>

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
| `op1` | [`OperatorFunction`](RxJS.OperatorFunction.md)<`T`, `A`\> |
| `op2` | [`OperatorFunction`](RxJS.OperatorFunction.md)<`A`, `B`\> |
| `op3` | [`OperatorFunction`](RxJS.OperatorFunction.md)<`B`, `C`\> |
| `op4` | [`OperatorFunction`](RxJS.OperatorFunction.md)<`C`, `D`\> |

#### Returns

[`Observable`](../classes/RxJS.Observable.md)<`D`\>

#### Inherited from

[Observable](../classes/RxJS.Observable.md).[pipe](../classes/RxJS.Observable.md#pipe)

▸ **pipe**<`A`, `B`, `C`, `D`, `E`\>(`op1`, `op2`, `op3`, `op4`, `op5`): [`Observable`](../classes/RxJS.Observable.md)<`E`\>

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
| `op1` | [`OperatorFunction`](RxJS.OperatorFunction.md)<`T`, `A`\> |
| `op2` | [`OperatorFunction`](RxJS.OperatorFunction.md)<`A`, `B`\> |
| `op3` | [`OperatorFunction`](RxJS.OperatorFunction.md)<`B`, `C`\> |
| `op4` | [`OperatorFunction`](RxJS.OperatorFunction.md)<`C`, `D`\> |
| `op5` | [`OperatorFunction`](RxJS.OperatorFunction.md)<`D`, `E`\> |

#### Returns

[`Observable`](../classes/RxJS.Observable.md)<`E`\>

#### Inherited from

[Observable](../classes/RxJS.Observable.md).[pipe](../classes/RxJS.Observable.md#pipe)

▸ **pipe**<`A`, `B`, `C`, `D`, `E`, `F`\>(`op1`, `op2`, `op3`, `op4`, `op5`, `op6`): [`Observable`](../classes/RxJS.Observable.md)<`F`\>

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
| `op1` | [`OperatorFunction`](RxJS.OperatorFunction.md)<`T`, `A`\> |
| `op2` | [`OperatorFunction`](RxJS.OperatorFunction.md)<`A`, `B`\> |
| `op3` | [`OperatorFunction`](RxJS.OperatorFunction.md)<`B`, `C`\> |
| `op4` | [`OperatorFunction`](RxJS.OperatorFunction.md)<`C`, `D`\> |
| `op5` | [`OperatorFunction`](RxJS.OperatorFunction.md)<`D`, `E`\> |
| `op6` | [`OperatorFunction`](RxJS.OperatorFunction.md)<`E`, `F`\> |

#### Returns

[`Observable`](../classes/RxJS.Observable.md)<`F`\>

#### Inherited from

[Observable](../classes/RxJS.Observable.md).[pipe](../classes/RxJS.Observable.md#pipe)

▸ **pipe**<`A`, `B`, `C`, `D`, `E`, `F`, `G`\>(`op1`, `op2`, `op3`, `op4`, `op5`, `op6`, `op7`): [`Observable`](../classes/RxJS.Observable.md)<`G`\>

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
| `op1` | [`OperatorFunction`](RxJS.OperatorFunction.md)<`T`, `A`\> |
| `op2` | [`OperatorFunction`](RxJS.OperatorFunction.md)<`A`, `B`\> |
| `op3` | [`OperatorFunction`](RxJS.OperatorFunction.md)<`B`, `C`\> |
| `op4` | [`OperatorFunction`](RxJS.OperatorFunction.md)<`C`, `D`\> |
| `op5` | [`OperatorFunction`](RxJS.OperatorFunction.md)<`D`, `E`\> |
| `op6` | [`OperatorFunction`](RxJS.OperatorFunction.md)<`E`, `F`\> |
| `op7` | [`OperatorFunction`](RxJS.OperatorFunction.md)<`F`, `G`\> |

#### Returns

[`Observable`](../classes/RxJS.Observable.md)<`G`\>

#### Inherited from

[Observable](../classes/RxJS.Observable.md).[pipe](../classes/RxJS.Observable.md#pipe)

▸ **pipe**<`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`\>(`op1`, `op2`, `op3`, `op4`, `op5`, `op6`, `op7`, `op8`): [`Observable`](../classes/RxJS.Observable.md)<`H`\>

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
| `op1` | [`OperatorFunction`](RxJS.OperatorFunction.md)<`T`, `A`\> |
| `op2` | [`OperatorFunction`](RxJS.OperatorFunction.md)<`A`, `B`\> |
| `op3` | [`OperatorFunction`](RxJS.OperatorFunction.md)<`B`, `C`\> |
| `op4` | [`OperatorFunction`](RxJS.OperatorFunction.md)<`C`, `D`\> |
| `op5` | [`OperatorFunction`](RxJS.OperatorFunction.md)<`D`, `E`\> |
| `op6` | [`OperatorFunction`](RxJS.OperatorFunction.md)<`E`, `F`\> |
| `op7` | [`OperatorFunction`](RxJS.OperatorFunction.md)<`F`, `G`\> |
| `op8` | [`OperatorFunction`](RxJS.OperatorFunction.md)<`G`, `H`\> |

#### Returns

[`Observable`](../classes/RxJS.Observable.md)<`H`\>

#### Inherited from

[Observable](../classes/RxJS.Observable.md).[pipe](../classes/RxJS.Observable.md#pipe)

▸ **pipe**<`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`\>(`op1`, `op2`, `op3`, `op4`, `op5`, `op6`, `op7`, `op8`, `op9`): [`Observable`](../classes/RxJS.Observable.md)<`I`\>

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
| `op1` | [`OperatorFunction`](RxJS.OperatorFunction.md)<`T`, `A`\> |
| `op2` | [`OperatorFunction`](RxJS.OperatorFunction.md)<`A`, `B`\> |
| `op3` | [`OperatorFunction`](RxJS.OperatorFunction.md)<`B`, `C`\> |
| `op4` | [`OperatorFunction`](RxJS.OperatorFunction.md)<`C`, `D`\> |
| `op5` | [`OperatorFunction`](RxJS.OperatorFunction.md)<`D`, `E`\> |
| `op6` | [`OperatorFunction`](RxJS.OperatorFunction.md)<`E`, `F`\> |
| `op7` | [`OperatorFunction`](RxJS.OperatorFunction.md)<`F`, `G`\> |
| `op8` | [`OperatorFunction`](RxJS.OperatorFunction.md)<`G`, `H`\> |
| `op9` | [`OperatorFunction`](RxJS.OperatorFunction.md)<`H`, `I`\> |

#### Returns

[`Observable`](../classes/RxJS.Observable.md)<`I`\>

#### Inherited from

[Observable](../classes/RxJS.Observable.md).[pipe](../classes/RxJS.Observable.md#pipe)

▸ **pipe**<`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`\>(`op1`, `op2`, `op3`, `op4`, `op5`, `op6`, `op7`, `op8`, `op9`, ...`operations`): [`Observable`](../classes/RxJS.Observable.md)<`unknown`\>

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
| `op1` | [`OperatorFunction`](RxJS.OperatorFunction.md)<`T`, `A`\> |
| `op2` | [`OperatorFunction`](RxJS.OperatorFunction.md)<`A`, `B`\> |
| `op3` | [`OperatorFunction`](RxJS.OperatorFunction.md)<`B`, `C`\> |
| `op4` | [`OperatorFunction`](RxJS.OperatorFunction.md)<`C`, `D`\> |
| `op5` | [`OperatorFunction`](RxJS.OperatorFunction.md)<`D`, `E`\> |
| `op6` | [`OperatorFunction`](RxJS.OperatorFunction.md)<`E`, `F`\> |
| `op7` | [`OperatorFunction`](RxJS.OperatorFunction.md)<`F`, `G`\> |
| `op8` | [`OperatorFunction`](RxJS.OperatorFunction.md)<`G`, `H`\> |
| `op9` | [`OperatorFunction`](RxJS.OperatorFunction.md)<`H`, `I`\> |
| `...operations` | [`OperatorFunction`](RxJS.OperatorFunction.md)<`any`, `any`\>[] |

#### Returns

[`Observable`](../classes/RxJS.Observable.md)<`unknown`\>

#### Inherited from

[Observable](../classes/RxJS.Observable.md).[pipe](../classes/RxJS.Observable.md#pipe)

___

### subscribe

▸ **subscribe**(`observer?`): [`Subscription`](../classes/RxJS.Subscription.md)

**`deprecated`** Instead of passing separate callback arguments, use an observer argument. Signatures taking separate callback arguments will be removed in v8. Details: https://rxjs.dev/deprecations/subscribe-arguments

#### Parameters

| Name | Type |
| :------ | :------ |
| `observer?` | `Partial`<[`Observer`](RxJS.Observer.md)<`T`\>\> |

#### Returns

[`Subscription`](../classes/RxJS.Subscription.md)

#### Inherited from

[Observable](../classes/RxJS.Observable.md).[subscribe](../classes/RxJS.Observable.md#subscribe)

▸ **subscribe**(`next`): [`Subscription`](../classes/RxJS.Subscription.md)

**`deprecated`** Instead of passing separate callback arguments, use an observer argument. Signatures taking separate callback arguments will be removed in v8. Details: https://rxjs.dev/deprecations/subscribe-arguments

#### Parameters

| Name | Type |
| :------ | :------ |
| `next` | (`value`: `T`) => `void` |

#### Returns

[`Subscription`](../classes/RxJS.Subscription.md)

#### Inherited from

[Observable](../classes/RxJS.Observable.md).[subscribe](../classes/RxJS.Observable.md#subscribe)

▸ **subscribe**(`next?`, `error?`, `complete?`): [`Subscription`](../classes/RxJS.Subscription.md)

**`deprecated`** Instead of passing separate callback arguments, use an observer argument. Signatures taking separate callback arguments will be removed in v8. Details: https://rxjs.dev/deprecations/subscribe-arguments

#### Parameters

| Name | Type |
| :------ | :------ |
| `next?` | ``null`` \| (`value`: `T`) => `void` |
| `error?` | ``null`` \| (`error`: `any`) => `void` |
| `complete?` | ``null`` \| () => `void` |

#### Returns

[`Subscription`](../classes/RxJS.Subscription.md)

#### Inherited from

[Observable](../classes/RxJS.Observable.md).[subscribe](../classes/RxJS.Observable.md#subscribe)

___

### toPromise

▸ **toPromise**(): `Promise`<`undefined` \| `T`\>

**`deprecated`** Replaced with [firstValueFrom](../modules/RxJS.md#firstvaluefrom) and [lastValueFrom](../modules/RxJS.md#lastvaluefrom). Will be removed in v8. Details: https://rxjs.dev/deprecations/to-promise

#### Returns

`Promise`<`undefined` \| `T`\>

#### Inherited from

[Observable](../classes/RxJS.Observable.md).[toPromise](../classes/RxJS.Observable.md#topromise)

▸ **toPromise**(`PromiseCtor`): `Promise`<`undefined` \| `T`\>

**`deprecated`** Replaced with [firstValueFrom](../modules/RxJS.md#firstvaluefrom) and [lastValueFrom](../modules/RxJS.md#lastvaluefrom). Will be removed in v8. Details: https://rxjs.dev/deprecations/to-promise

#### Parameters

| Name | Type |
| :------ | :------ |
| `PromiseCtor` | `PromiseConstructor` |

#### Returns

`Promise`<`undefined` \| `T`\>

#### Inherited from

[Observable](../classes/RxJS.Observable.md).[toPromise](../classes/RxJS.Observable.md#topromise)

▸ **toPromise**(`PromiseCtor`): `Promise`<`undefined` \| `T`\>

**`deprecated`** Replaced with [firstValueFrom](../modules/RxJS.md#firstvaluefrom) and [lastValueFrom](../modules/RxJS.md#lastvaluefrom). Will be removed in v8. Details: https://rxjs.dev/deprecations/to-promise

#### Parameters

| Name | Type |
| :------ | :------ |
| `PromiseCtor` | `PromiseConstructorLike` |

#### Returns

`Promise`<`undefined` \| `T`\>

#### Inherited from

[Observable](../classes/RxJS.Observable.md).[toPromise](../classes/RxJS.Observable.md#topromise)
