[ode-ts-client](../README.md) / [Exports](../modules.md) / [RxJS](../modules/rxjs.md) / GroupedObservable

# Interface: GroupedObservable<K, T\>

[RxJS](../modules/rxjs.md).GroupedObservable

An observable of values that is the emitted by the result of a [groupBy](../modules/rxjs.md#groupby) operator,
contains a `key` property for the grouping.

## Type parameters

Name |
:------ |
`K` |
`T` |

## Hierarchy

* [*Observable*](../classes/rxjs.observable.md)<T\>

  ↳ **GroupedObservable**

## Table of contents

### Properties

- [key](rxjs.groupedobservable.md#key)
- [operator](rxjs.groupedobservable.md#operator)
- [source](rxjs.groupedobservable.md#source)

### Methods

- [forEach](rxjs.groupedobservable.md#foreach)
- [lift](rxjs.groupedobservable.md#lift)
- [pipe](rxjs.groupedobservable.md#pipe)
- [subscribe](rxjs.groupedobservable.md#subscribe)
- [toPromise](rxjs.groupedobservable.md#topromise)

## Properties

### key

• `Readonly` **key**: K

The key value for the grouped notifications.

___

### operator

• **operator**: *undefined* \| [*Operator*](rxjs.operator.md)<any, T\>

**`deprecated`** Internal implementation detail, do not use directly. Will be made internal in v8.

Inherited from: [Observable](../classes/rxjs.observable.md).[operator](../classes/rxjs.observable.md#operator)

___

### source

• **source**: *undefined* \| [*Observable*](../classes/rxjs.observable.md)<any\>

**`deprecated`** Internal implementation detail, do not use directly. Will be made internal in v8.

Inherited from: [Observable](../classes/rxjs.observable.md).[source](../classes/rxjs.observable.md#source)

## Methods

### forEach

▸ **forEach**(`next`: (`value`: T) => *void*): *Promise*<void\>

Used as a NON-CANCELLABLE means of subscribing to an observable, for use with
APIs that expect promises, like `async/await`. You cannot unsubscribe from this.

**WARNING**: Only use this with observables you *know* will complete. If the source
observable does not complete, you will end up with a promise that is hung up, and
potentially all of the state of an async function hanging out in memory. To avoid
this situation, look into adding something like [timeout](../modules/rxjs.md#timeout), [take](../modules/rxjs.md#take),
[takeWhile](../modules/rxjs.md#takewhile), or [takeUntil](../modules/rxjs.md#takeuntil) amongst others.

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

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`next` | (`value`: T) => *void* | a handler for each value emitted by the observable   |

**Returns:** *Promise*<void\>

a promise that either resolves on observable completion or
 rejects with the handled error

Inherited from: [Observable](../classes/rxjs.observable.md)

▸ **forEach**(`next`: (`value`: T) => *void*, `promiseCtor`: PromiseConstructorLike): *Promise*<void\>

**`deprecated`** Passing a Promise constructor will no longer be available
in upcoming versions of RxJS. This is because it adds weight to the library, for very
little benefit. If you need this functionality, it is recommended that you either
polyfill Promise, or you create an adapter to convert the returned native promise
to whatever promise implementation you wanted. Will be removed in v8.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`next` | (`value`: T) => *void* | a handler for each value emitted by the observable   |
`promiseCtor` | PromiseConstructorLike | a constructor function used to instantiate the Promise   |

**Returns:** *Promise*<void\>

a promise that either resolves on observable completion or
 rejects with the handled error

Inherited from: [Observable](../classes/rxjs.observable.md)

___

### lift

▸ **lift**<R\>(`operator?`: [*Operator*](rxjs.operator.md)<T, R\>): [*Observable*](../classes/rxjs.observable.md)<R\>

Creates a new Observable, with this Observable instance as the source, and the passed
operator defined as the new observable's operator.

**`method`** lift

**`deprecated`** Internal implementation detail, do not use directly. Will be made internal in v8.
If you have implemented an operator using `lift`, it is recommended that you create an
operator by simply returning `new Observable()` directly. See "Creating new operators from
scratch" section here: https://rxjs.dev/guide/operators

#### Type parameters:

Name |
:------ |
`R` |

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`operator?` | [*Operator*](rxjs.operator.md)<T, R\> | the operator defining the operation to take on the observable   |

**Returns:** [*Observable*](../classes/rxjs.observable.md)<R\>

a new observable with the Operator applied

Inherited from: [Observable](../classes/rxjs.observable.md)

___

### pipe

▸ **pipe**(): [*Observable*](../classes/rxjs.observable.md)<T\>

**Returns:** [*Observable*](../classes/rxjs.observable.md)<T\>

Inherited from: [Observable](../classes/rxjs.observable.md)

▸ **pipe**<A\>(`op1`: [*OperatorFunction*](rxjs.operatorfunction.md)<T, A\>): [*Observable*](../classes/rxjs.observable.md)<A\>

#### Type parameters:

Name |
:------ |
`A` |

#### Parameters:

Name | Type |
:------ | :------ |
`op1` | [*OperatorFunction*](rxjs.operatorfunction.md)<T, A\> |

**Returns:** [*Observable*](../classes/rxjs.observable.md)<A\>

Inherited from: [Observable](../classes/rxjs.observable.md)

▸ **pipe**<A, B\>(`op1`: [*OperatorFunction*](rxjs.operatorfunction.md)<T, A\>, `op2`: [*OperatorFunction*](rxjs.operatorfunction.md)<A, B\>): [*Observable*](../classes/rxjs.observable.md)<B\>

#### Type parameters:

Name |
:------ |
`A` |
`B` |

#### Parameters:

Name | Type |
:------ | :------ |
`op1` | [*OperatorFunction*](rxjs.operatorfunction.md)<T, A\> |
`op2` | [*OperatorFunction*](rxjs.operatorfunction.md)<A, B\> |

**Returns:** [*Observable*](../classes/rxjs.observable.md)<B\>

Inherited from: [Observable](../classes/rxjs.observable.md)

▸ **pipe**<A, B, C\>(`op1`: [*OperatorFunction*](rxjs.operatorfunction.md)<T, A\>, `op2`: [*OperatorFunction*](rxjs.operatorfunction.md)<A, B\>, `op3`: [*OperatorFunction*](rxjs.operatorfunction.md)<B, C\>): [*Observable*](../classes/rxjs.observable.md)<C\>

#### Type parameters:

Name |
:------ |
`A` |
`B` |
`C` |

#### Parameters:

Name | Type |
:------ | :------ |
`op1` | [*OperatorFunction*](rxjs.operatorfunction.md)<T, A\> |
`op2` | [*OperatorFunction*](rxjs.operatorfunction.md)<A, B\> |
`op3` | [*OperatorFunction*](rxjs.operatorfunction.md)<B, C\> |

**Returns:** [*Observable*](../classes/rxjs.observable.md)<C\>

Inherited from: [Observable](../classes/rxjs.observable.md)

▸ **pipe**<A, B, C, D\>(`op1`: [*OperatorFunction*](rxjs.operatorfunction.md)<T, A\>, `op2`: [*OperatorFunction*](rxjs.operatorfunction.md)<A, B\>, `op3`: [*OperatorFunction*](rxjs.operatorfunction.md)<B, C\>, `op4`: [*OperatorFunction*](rxjs.operatorfunction.md)<C, D\>): [*Observable*](../classes/rxjs.observable.md)<D\>

#### Type parameters:

Name |
:------ |
`A` |
`B` |
`C` |
`D` |

#### Parameters:

Name | Type |
:------ | :------ |
`op1` | [*OperatorFunction*](rxjs.operatorfunction.md)<T, A\> |
`op2` | [*OperatorFunction*](rxjs.operatorfunction.md)<A, B\> |
`op3` | [*OperatorFunction*](rxjs.operatorfunction.md)<B, C\> |
`op4` | [*OperatorFunction*](rxjs.operatorfunction.md)<C, D\> |

**Returns:** [*Observable*](../classes/rxjs.observable.md)<D\>

Inherited from: [Observable](../classes/rxjs.observable.md)

▸ **pipe**<A, B, C, D, E\>(`op1`: [*OperatorFunction*](rxjs.operatorfunction.md)<T, A\>, `op2`: [*OperatorFunction*](rxjs.operatorfunction.md)<A, B\>, `op3`: [*OperatorFunction*](rxjs.operatorfunction.md)<B, C\>, `op4`: [*OperatorFunction*](rxjs.operatorfunction.md)<C, D\>, `op5`: [*OperatorFunction*](rxjs.operatorfunction.md)<D, E\>): [*Observable*](../classes/rxjs.observable.md)<E\>

#### Type parameters:

Name |
:------ |
`A` |
`B` |
`C` |
`D` |
`E` |

#### Parameters:

Name | Type |
:------ | :------ |
`op1` | [*OperatorFunction*](rxjs.operatorfunction.md)<T, A\> |
`op2` | [*OperatorFunction*](rxjs.operatorfunction.md)<A, B\> |
`op3` | [*OperatorFunction*](rxjs.operatorfunction.md)<B, C\> |
`op4` | [*OperatorFunction*](rxjs.operatorfunction.md)<C, D\> |
`op5` | [*OperatorFunction*](rxjs.operatorfunction.md)<D, E\> |

**Returns:** [*Observable*](../classes/rxjs.observable.md)<E\>

Inherited from: [Observable](../classes/rxjs.observable.md)

▸ **pipe**<A, B, C, D, E, F\>(`op1`: [*OperatorFunction*](rxjs.operatorfunction.md)<T, A\>, `op2`: [*OperatorFunction*](rxjs.operatorfunction.md)<A, B\>, `op3`: [*OperatorFunction*](rxjs.operatorfunction.md)<B, C\>, `op4`: [*OperatorFunction*](rxjs.operatorfunction.md)<C, D\>, `op5`: [*OperatorFunction*](rxjs.operatorfunction.md)<D, E\>, `op6`: [*OperatorFunction*](rxjs.operatorfunction.md)<E, F\>): [*Observable*](../classes/rxjs.observable.md)<F\>

#### Type parameters:

Name |
:------ |
`A` |
`B` |
`C` |
`D` |
`E` |
`F` |

#### Parameters:

Name | Type |
:------ | :------ |
`op1` | [*OperatorFunction*](rxjs.operatorfunction.md)<T, A\> |
`op2` | [*OperatorFunction*](rxjs.operatorfunction.md)<A, B\> |
`op3` | [*OperatorFunction*](rxjs.operatorfunction.md)<B, C\> |
`op4` | [*OperatorFunction*](rxjs.operatorfunction.md)<C, D\> |
`op5` | [*OperatorFunction*](rxjs.operatorfunction.md)<D, E\> |
`op6` | [*OperatorFunction*](rxjs.operatorfunction.md)<E, F\> |

**Returns:** [*Observable*](../classes/rxjs.observable.md)<F\>

Inherited from: [Observable](../classes/rxjs.observable.md)

▸ **pipe**<A, B, C, D, E, F, G\>(`op1`: [*OperatorFunction*](rxjs.operatorfunction.md)<T, A\>, `op2`: [*OperatorFunction*](rxjs.operatorfunction.md)<A, B\>, `op3`: [*OperatorFunction*](rxjs.operatorfunction.md)<B, C\>, `op4`: [*OperatorFunction*](rxjs.operatorfunction.md)<C, D\>, `op5`: [*OperatorFunction*](rxjs.operatorfunction.md)<D, E\>, `op6`: [*OperatorFunction*](rxjs.operatorfunction.md)<E, F\>, `op7`: [*OperatorFunction*](rxjs.operatorfunction.md)<F, G\>): [*Observable*](../classes/rxjs.observable.md)<G\>

#### Type parameters:

Name |
:------ |
`A` |
`B` |
`C` |
`D` |
`E` |
`F` |
`G` |

#### Parameters:

Name | Type |
:------ | :------ |
`op1` | [*OperatorFunction*](rxjs.operatorfunction.md)<T, A\> |
`op2` | [*OperatorFunction*](rxjs.operatorfunction.md)<A, B\> |
`op3` | [*OperatorFunction*](rxjs.operatorfunction.md)<B, C\> |
`op4` | [*OperatorFunction*](rxjs.operatorfunction.md)<C, D\> |
`op5` | [*OperatorFunction*](rxjs.operatorfunction.md)<D, E\> |
`op6` | [*OperatorFunction*](rxjs.operatorfunction.md)<E, F\> |
`op7` | [*OperatorFunction*](rxjs.operatorfunction.md)<F, G\> |

**Returns:** [*Observable*](../classes/rxjs.observable.md)<G\>

Inherited from: [Observable](../classes/rxjs.observable.md)

▸ **pipe**<A, B, C, D, E, F, G, H\>(`op1`: [*OperatorFunction*](rxjs.operatorfunction.md)<T, A\>, `op2`: [*OperatorFunction*](rxjs.operatorfunction.md)<A, B\>, `op3`: [*OperatorFunction*](rxjs.operatorfunction.md)<B, C\>, `op4`: [*OperatorFunction*](rxjs.operatorfunction.md)<C, D\>, `op5`: [*OperatorFunction*](rxjs.operatorfunction.md)<D, E\>, `op6`: [*OperatorFunction*](rxjs.operatorfunction.md)<E, F\>, `op7`: [*OperatorFunction*](rxjs.operatorfunction.md)<F, G\>, `op8`: [*OperatorFunction*](rxjs.operatorfunction.md)<G, H\>): [*Observable*](../classes/rxjs.observable.md)<H\>

#### Type parameters:

Name |
:------ |
`A` |
`B` |
`C` |
`D` |
`E` |
`F` |
`G` |
`H` |

#### Parameters:

Name | Type |
:------ | :------ |
`op1` | [*OperatorFunction*](rxjs.operatorfunction.md)<T, A\> |
`op2` | [*OperatorFunction*](rxjs.operatorfunction.md)<A, B\> |
`op3` | [*OperatorFunction*](rxjs.operatorfunction.md)<B, C\> |
`op4` | [*OperatorFunction*](rxjs.operatorfunction.md)<C, D\> |
`op5` | [*OperatorFunction*](rxjs.operatorfunction.md)<D, E\> |
`op6` | [*OperatorFunction*](rxjs.operatorfunction.md)<E, F\> |
`op7` | [*OperatorFunction*](rxjs.operatorfunction.md)<F, G\> |
`op8` | [*OperatorFunction*](rxjs.operatorfunction.md)<G, H\> |

**Returns:** [*Observable*](../classes/rxjs.observable.md)<H\>

Inherited from: [Observable](../classes/rxjs.observable.md)

▸ **pipe**<A, B, C, D, E, F, G, H, I\>(`op1`: [*OperatorFunction*](rxjs.operatorfunction.md)<T, A\>, `op2`: [*OperatorFunction*](rxjs.operatorfunction.md)<A, B\>, `op3`: [*OperatorFunction*](rxjs.operatorfunction.md)<B, C\>, `op4`: [*OperatorFunction*](rxjs.operatorfunction.md)<C, D\>, `op5`: [*OperatorFunction*](rxjs.operatorfunction.md)<D, E\>, `op6`: [*OperatorFunction*](rxjs.operatorfunction.md)<E, F\>, `op7`: [*OperatorFunction*](rxjs.operatorfunction.md)<F, G\>, `op8`: [*OperatorFunction*](rxjs.operatorfunction.md)<G, H\>, `op9`: [*OperatorFunction*](rxjs.operatorfunction.md)<H, I\>): [*Observable*](../classes/rxjs.observable.md)<I\>

#### Type parameters:

Name |
:------ |
`A` |
`B` |
`C` |
`D` |
`E` |
`F` |
`G` |
`H` |
`I` |

#### Parameters:

Name | Type |
:------ | :------ |
`op1` | [*OperatorFunction*](rxjs.operatorfunction.md)<T, A\> |
`op2` | [*OperatorFunction*](rxjs.operatorfunction.md)<A, B\> |
`op3` | [*OperatorFunction*](rxjs.operatorfunction.md)<B, C\> |
`op4` | [*OperatorFunction*](rxjs.operatorfunction.md)<C, D\> |
`op5` | [*OperatorFunction*](rxjs.operatorfunction.md)<D, E\> |
`op6` | [*OperatorFunction*](rxjs.operatorfunction.md)<E, F\> |
`op7` | [*OperatorFunction*](rxjs.operatorfunction.md)<F, G\> |
`op8` | [*OperatorFunction*](rxjs.operatorfunction.md)<G, H\> |
`op9` | [*OperatorFunction*](rxjs.operatorfunction.md)<H, I\> |

**Returns:** [*Observable*](../classes/rxjs.observable.md)<I\>

Inherited from: [Observable](../classes/rxjs.observable.md)

▸ **pipe**<A, B, C, D, E, F, G, H, I\>(`op1`: [*OperatorFunction*](rxjs.operatorfunction.md)<T, A\>, `op2`: [*OperatorFunction*](rxjs.operatorfunction.md)<A, B\>, `op3`: [*OperatorFunction*](rxjs.operatorfunction.md)<B, C\>, `op4`: [*OperatorFunction*](rxjs.operatorfunction.md)<C, D\>, `op5`: [*OperatorFunction*](rxjs.operatorfunction.md)<D, E\>, `op6`: [*OperatorFunction*](rxjs.operatorfunction.md)<E, F\>, `op7`: [*OperatorFunction*](rxjs.operatorfunction.md)<F, G\>, `op8`: [*OperatorFunction*](rxjs.operatorfunction.md)<G, H\>, `op9`: [*OperatorFunction*](rxjs.operatorfunction.md)<H, I\>, ...`operations`: [*OperatorFunction*](rxjs.operatorfunction.md)<any, any\>[]): [*Observable*](../classes/rxjs.observable.md)<unknown\>

#### Type parameters:

Name |
:------ |
`A` |
`B` |
`C` |
`D` |
`E` |
`F` |
`G` |
`H` |
`I` |

#### Parameters:

Name | Type |
:------ | :------ |
`op1` | [*OperatorFunction*](rxjs.operatorfunction.md)<T, A\> |
`op2` | [*OperatorFunction*](rxjs.operatorfunction.md)<A, B\> |
`op3` | [*OperatorFunction*](rxjs.operatorfunction.md)<B, C\> |
`op4` | [*OperatorFunction*](rxjs.operatorfunction.md)<C, D\> |
`op5` | [*OperatorFunction*](rxjs.operatorfunction.md)<D, E\> |
`op6` | [*OperatorFunction*](rxjs.operatorfunction.md)<E, F\> |
`op7` | [*OperatorFunction*](rxjs.operatorfunction.md)<F, G\> |
`op8` | [*OperatorFunction*](rxjs.operatorfunction.md)<G, H\> |
`op9` | [*OperatorFunction*](rxjs.operatorfunction.md)<H, I\> |
`...operations` | [*OperatorFunction*](rxjs.operatorfunction.md)<any, any\>[] |

**Returns:** [*Observable*](../classes/rxjs.observable.md)<unknown\>

Inherited from: [Observable](../classes/rxjs.observable.md)

___

### subscribe

▸ **subscribe**(`observer?`: *Partial*<[*Observer*](rxjs.observer.md)<T\>\>): [*Subscription*](../classes/rxjs.subscription.md)

#### Parameters:

Name | Type |
:------ | :------ |
`observer?` | *Partial*<[*Observer*](rxjs.observer.md)<T\>\> |

**Returns:** [*Subscription*](../classes/rxjs.subscription.md)

Inherited from: [Observable](../classes/rxjs.observable.md)

▸ **subscribe**(`next`: (`value`: T) => *void*): [*Subscription*](../classes/rxjs.subscription.md)

#### Parameters:

Name | Type |
:------ | :------ |
`next` | (`value`: T) => *void* |

**Returns:** [*Subscription*](../classes/rxjs.subscription.md)

Inherited from: [Observable](../classes/rxjs.observable.md)

▸ **subscribe**(`next?`: *null* \| (`value`: T) => *void*, `error?`: *null* \| (`error`: *any*) => *void*, `complete?`: *null* \| () => *void*): [*Subscription*](../classes/rxjs.subscription.md)

**`deprecated`** Instead of passing separate callback arguments, use an observer argument. Signatures taking separate callback arguments will be removed in v8. Details: https://rxjs.dev/deprecations/subscribe-arguments

#### Parameters:

Name | Type |
:------ | :------ |
`next?` | *null* \| (`value`: T) => *void* |
`error?` | *null* \| (`error`: *any*) => *void* |
`complete?` | *null* \| () => *void* |

**Returns:** [*Subscription*](../classes/rxjs.subscription.md)

Inherited from: [Observable](../classes/rxjs.observable.md)

___

### toPromise

▸ **toPromise**(): *Promise*<undefined \| T\>

**`deprecated`** Replaced with [firstValueFrom](../modules/rxjs.md#firstvaluefrom) and [lastValueFrom](../modules/rxjs.md#lastvaluefrom). Will be removed in v8. Details: https://rxjs.dev/deprecations/to-promise

**Returns:** *Promise*<undefined \| T\>

Inherited from: [Observable](../classes/rxjs.observable.md)

▸ **toPromise**(`PromiseCtor`: PromiseConstructor): *Promise*<undefined \| T\>

**`deprecated`** Replaced with [firstValueFrom](../modules/rxjs.md#firstvaluefrom) and [lastValueFrom](../modules/rxjs.md#lastvaluefrom). Will be removed in v8. Details: https://rxjs.dev/deprecations/to-promise

#### Parameters:

Name | Type |
:------ | :------ |
`PromiseCtor` | PromiseConstructor |

**Returns:** *Promise*<undefined \| T\>

Inherited from: [Observable](../classes/rxjs.observable.md)

▸ **toPromise**(`PromiseCtor`: PromiseConstructorLike): *Promise*<undefined \| T\>

**`deprecated`** Replaced with [firstValueFrom](../modules/rxjs.md#firstvaluefrom) and [lastValueFrom](../modules/rxjs.md#lastvaluefrom). Will be removed in v8. Details: https://rxjs.dev/deprecations/to-promise

#### Parameters:

Name | Type |
:------ | :------ |
`PromiseCtor` | PromiseConstructorLike |

**Returns:** *Promise*<undefined \| T\>

Inherited from: [Observable](../classes/rxjs.observable.md)
