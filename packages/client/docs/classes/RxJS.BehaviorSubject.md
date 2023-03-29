[ode-ts-client](../README.md) / [Exports](../modules.md) / [RxJS](../modules/RxJS.md) / BehaviorSubject

# Class: BehaviorSubject<T\>

[RxJS](../modules/RxJS.md).BehaviorSubject

A variant of Subject that requires an initial value and emits its current
value whenever it is subscribed to.

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`Subject`](RxJS.Subject.md)<`T`\>

  ↳ **`BehaviorSubject`**

## Table of contents

### Constructors

- [constructor](RxJS.BehaviorSubject.md#constructor)

### Properties

- [closed](RxJS.BehaviorSubject.md#closed)
- [hasError](RxJS.BehaviorSubject.md#haserror)
- [isStopped](RxJS.BehaviorSubject.md#isstopped)
- [observers](RxJS.BehaviorSubject.md#observers)
- [operator](RxJS.BehaviorSubject.md#operator)
- [source](RxJS.BehaviorSubject.md#source)
- [thrownError](RxJS.BehaviorSubject.md#thrownerror)
- [create](RxJS.BehaviorSubject.md#create)

### Accessors

- [observed](RxJS.BehaviorSubject.md#observed)
- [value](RxJS.BehaviorSubject.md#value)

### Methods

- [asObservable](RxJS.BehaviorSubject.md#asobservable)
- [complete](RxJS.BehaviorSubject.md#complete)
- [error](RxJS.BehaviorSubject.md#error)
- [forEach](RxJS.BehaviorSubject.md#foreach)
- [getValue](RxJS.BehaviorSubject.md#getvalue)
- [lift](RxJS.BehaviorSubject.md#lift)
- [next](RxJS.BehaviorSubject.md#next)
- [pipe](RxJS.BehaviorSubject.md#pipe)
- [subscribe](RxJS.BehaviorSubject.md#subscribe)
- [toPromise](RxJS.BehaviorSubject.md#topromise)
- [unsubscribe](RxJS.BehaviorSubject.md#unsubscribe)

## Constructors

### constructor

• **new BehaviorSubject**<`T`\>(`_value`)

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `_value` | `T` |

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

**`Deprecated`**

Internal implementation detail, do not use directly. Will be made internal in v8.

#### Inherited from

[Subject](RxJS.Subject.md).[hasError](RxJS.Subject.md#haserror)

___

### isStopped

• **isStopped**: `boolean`

**`Deprecated`**

Internal implementation detail, do not use directly. Will be made internal in v8.

#### Inherited from

[Subject](RxJS.Subject.md).[isStopped](RxJS.Subject.md#isstopped)

___

### observers

• **observers**: [`Observer`](../interfaces/RxJS.Observer.md)<`T`\>[]

**`Deprecated`**

Internal implementation detail, do not use directly. Will be made internal in v8.

#### Inherited from

[Subject](RxJS.Subject.md).[observers](RxJS.Subject.md#observers)

___

### operator

• **operator**: `undefined` \| [`Operator`](../interfaces/RxJS.Operator.md)<`any`, `T`\>

**`Deprecated`**

Internal implementation detail, do not use directly. Will be made internal in v8.

#### Inherited from

[Subject](RxJS.Subject.md).[operator](RxJS.Subject.md#operator)

___

### source

• **source**: `undefined` \| [`Observable`](RxJS.Observable.md)<`any`\>

**`Deprecated`**

Internal implementation detail, do not use directly. Will be made internal in v8.

#### Inherited from

[Subject](RxJS.Subject.md).[source](RxJS.Subject.md#source)

___

### thrownError

• **thrownError**: `any`

**`Deprecated`**

Internal implementation detail, do not use directly. Will be made internal in v8.

#### Inherited from

[Subject](RxJS.Subject.md).[thrownError](RxJS.Subject.md#thrownerror)

___

### create

▪ `Static` **create**: (...`args`: `any`[]) => `any`

#### Type declaration

▸ (`...args`): `any`

Creates a "subject" by basically gluing an observer to an observable.

**`Nocollapse`**

**`Deprecated`**

Recommended you do not use. Will be removed at some point in the future. Plans for replacement still under discussion.

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

___

### value

• `get` **value**(): `T`

#### Returns

`T`

## Methods

### asObservable

▸ **asObservable**(): [`Observable`](RxJS.Observable.md)<`T`\>

Creates a new Observable with this Subject as the source. You can do this
to create custom Observer-side logic of the Subject and conceal it from
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

#### Inherited from

[Subject](RxJS.Subject.md).[forEach](RxJS.Subject.md#foreach)

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

#### Inherited from

[Subject](RxJS.Subject.md).[forEach](RxJS.Subject.md#foreach)

___

### getValue

▸ **getValue**(): `T`

#### Returns

`T`

___

### lift

▸ **lift**<`R`\>(`operator`): [`Observable`](RxJS.Observable.md)<`R`\>

**`Deprecated`**

Internal implementation detail, do not use directly. Will be made internal in v8.

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

#### Inherited from

[Subject](RxJS.Subject.md).[pipe](RxJS.Subject.md#pipe)

___

### subscribe

▸ **subscribe**(`observerOrNext?`): [`Subscription`](RxJS.Subscription.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `observerOrNext?` | `Partial`<[`Observer`](../interfaces/RxJS.Observer.md)<`T`\>\> \| (`value`: `T`) => `void` |

#### Returns

[`Subscription`](RxJS.Subscription.md)

#### Inherited from

[Subject](RxJS.Subject.md).[subscribe](RxJS.Subject.md#subscribe)

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

#### Inherited from

[Subject](RxJS.Subject.md).[subscribe](RxJS.Subject.md#subscribe)

___

### toPromise

▸ **toPromise**(): `Promise`<`undefined` \| `T`\>

**`Deprecated`**

Replaced with [firstValueFrom](../modules/RxJS.md#firstvaluefrom) and [lastValueFrom](../modules/RxJS.md#lastvaluefrom). Will be removed in v8. Details: https://rxjs.dev/deprecations/to-promise

#### Returns

`Promise`<`undefined` \| `T`\>

#### Inherited from

[Subject](RxJS.Subject.md).[toPromise](RxJS.Subject.md#topromise)

▸ **toPromise**(`PromiseCtor`): `Promise`<`undefined` \| `T`\>

**`Deprecated`**

Replaced with [firstValueFrom](../modules/RxJS.md#firstvaluefrom) and [lastValueFrom](../modules/RxJS.md#lastvaluefrom). Will be removed in v8. Details: https://rxjs.dev/deprecations/to-promise

#### Parameters

| Name | Type |
| :------ | :------ |
| `PromiseCtor` | `PromiseConstructor` |

#### Returns

`Promise`<`undefined` \| `T`\>

#### Inherited from

[Subject](RxJS.Subject.md).[toPromise](RxJS.Subject.md#topromise)

▸ **toPromise**(`PromiseCtor`): `Promise`<`undefined` \| `T`\>

**`Deprecated`**

Replaced with [firstValueFrom](../modules/RxJS.md#firstvaluefrom) and [lastValueFrom](../modules/RxJS.md#lastvaluefrom). Will be removed in v8. Details: https://rxjs.dev/deprecations/to-promise

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
