[ode-ts-client](../README.md) / [Exports](../modules.md) / [RxJS](../modules/rxjs.md) / Observable

# Class: Observable<T\>

[RxJS](../modules/rxjs.md).Observable

A representation of any set of values over any amount of time. This is the most basic building block
of RxJS.

## Type parameters

Name |
:------ |
`T` |

## Hierarchy

* **Observable**

  ↳ [*ConnectableObservable*](rxjs.connectableobservable.md)

  ↳ [*GroupedObservable*](../interfaces/rxjs.groupedobservable.md)

  ↳ [*Subject*](rxjs.subject.md)

  ↳ [*Connectable*](../interfaces/rxjs.connectable.md)

## Implements

* [*Subscribable*](../interfaces/rxjs.subscribable.md)<T\>

## Table of contents

### Constructors

- [constructor](rxjs.observable.md#constructor)

### Properties

- [operator](rxjs.observable.md#operator)
- [source](rxjs.observable.md#source)
- [create](rxjs.observable.md#create)

### Methods

- [forEach](rxjs.observable.md#foreach)
- [lift](rxjs.observable.md#lift)
- [pipe](rxjs.observable.md#pipe)
- [subscribe](rxjs.observable.md#subscribe)
- [toPromise](rxjs.observable.md#topromise)

## Constructors

### constructor

\+ **new Observable**<T\>(`subscribe?`: (`subscriber`: [*Subscriber*](rxjs.subscriber.md)<T\>) => [*TeardownLogic*](../modules/rxjs.md#teardownlogic)): [*Observable*](rxjs.observable.md)<T\>

#### Type parameters:

Name |
:------ |
`T` |

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`subscribe?` | (`subscriber`: [*Subscriber*](rxjs.subscriber.md)<T\>) => [*TeardownLogic*](../modules/rxjs.md#teardownlogic) | the function that is called when the Observable is initially subscribed to. This function is given a Subscriber, to which new values can be `next`ed, or an `error` method can be called to raise an error, or `complete` can be called to notify of a successful completion.    |

**Returns:** [*Observable*](rxjs.observable.md)<T\>

## Properties

### operator

• **operator**: *undefined* \| [*Operator*](../interfaces/rxjs.operator.md)<any, T\>

**`deprecated`** Internal implementation detail, do not use directly. Will be made internal in v8.

___

### source

• **source**: *undefined* \| [*Observable*](rxjs.observable.md)<any\>

**`deprecated`** Internal implementation detail, do not use directly. Will be made internal in v8.

___

### create

▪ `Static` **create**: (...`args`: *any*[]) => *any*

Creates a new Observable by calling the Observable constructor

**`owner`** Observable

**`method`** create

**`param`** the subscriber function to be passed to the Observable constructor

**`returns`** a new observable

**`nocollapse`** 

**`deprecated`** Use `new Observable()` instead. Will be removed in v8.

#### Type declaration:

▸ (...`args`: *any*[]): *any*

#### Parameters:

Name | Type |
:------ | :------ |
`...args` | *any*[] |

**Returns:** *any*

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

___

### lift

▸ **lift**<R\>(`operator?`: [*Operator*](../interfaces/rxjs.operator.md)<T, R\>): [*Observable*](rxjs.observable.md)<R\>

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
`operator?` | [*Operator*](../interfaces/rxjs.operator.md)<T, R\> | the operator defining the operation to take on the observable   |

**Returns:** [*Observable*](rxjs.observable.md)<R\>

a new observable with the Operator applied

___

### pipe

▸ **pipe**(): [*Observable*](rxjs.observable.md)<T\>

**Returns:** [*Observable*](rxjs.observable.md)<T\>

▸ **pipe**<A\>(`op1`: [*OperatorFunction*](../interfaces/rxjs.operatorfunction.md)<T, A\>): [*Observable*](rxjs.observable.md)<A\>

#### Type parameters:

Name |
:------ |
`A` |

#### Parameters:

Name | Type |
:------ | :------ |
`op1` | [*OperatorFunction*](../interfaces/rxjs.operatorfunction.md)<T, A\> |

**Returns:** [*Observable*](rxjs.observable.md)<A\>

▸ **pipe**<A, B\>(`op1`: [*OperatorFunction*](../interfaces/rxjs.operatorfunction.md)<T, A\>, `op2`: [*OperatorFunction*](../interfaces/rxjs.operatorfunction.md)<A, B\>): [*Observable*](rxjs.observable.md)<B\>

#### Type parameters:

Name |
:------ |
`A` |
`B` |

#### Parameters:

Name | Type |
:------ | :------ |
`op1` | [*OperatorFunction*](../interfaces/rxjs.operatorfunction.md)<T, A\> |
`op2` | [*OperatorFunction*](../interfaces/rxjs.operatorfunction.md)<A, B\> |

**Returns:** [*Observable*](rxjs.observable.md)<B\>

▸ **pipe**<A, B, C\>(`op1`: [*OperatorFunction*](../interfaces/rxjs.operatorfunction.md)<T, A\>, `op2`: [*OperatorFunction*](../interfaces/rxjs.operatorfunction.md)<A, B\>, `op3`: [*OperatorFunction*](../interfaces/rxjs.operatorfunction.md)<B, C\>): [*Observable*](rxjs.observable.md)<C\>

#### Type parameters:

Name |
:------ |
`A` |
`B` |
`C` |

#### Parameters:

Name | Type |
:------ | :------ |
`op1` | [*OperatorFunction*](../interfaces/rxjs.operatorfunction.md)<T, A\> |
`op2` | [*OperatorFunction*](../interfaces/rxjs.operatorfunction.md)<A, B\> |
`op3` | [*OperatorFunction*](../interfaces/rxjs.operatorfunction.md)<B, C\> |

**Returns:** [*Observable*](rxjs.observable.md)<C\>

▸ **pipe**<A, B, C, D\>(`op1`: [*OperatorFunction*](../interfaces/rxjs.operatorfunction.md)<T, A\>, `op2`: [*OperatorFunction*](../interfaces/rxjs.operatorfunction.md)<A, B\>, `op3`: [*OperatorFunction*](../interfaces/rxjs.operatorfunction.md)<B, C\>, `op4`: [*OperatorFunction*](../interfaces/rxjs.operatorfunction.md)<C, D\>): [*Observable*](rxjs.observable.md)<D\>

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
`op1` | [*OperatorFunction*](../interfaces/rxjs.operatorfunction.md)<T, A\> |
`op2` | [*OperatorFunction*](../interfaces/rxjs.operatorfunction.md)<A, B\> |
`op3` | [*OperatorFunction*](../interfaces/rxjs.operatorfunction.md)<B, C\> |
`op4` | [*OperatorFunction*](../interfaces/rxjs.operatorfunction.md)<C, D\> |

**Returns:** [*Observable*](rxjs.observable.md)<D\>

▸ **pipe**<A, B, C, D, E\>(`op1`: [*OperatorFunction*](../interfaces/rxjs.operatorfunction.md)<T, A\>, `op2`: [*OperatorFunction*](../interfaces/rxjs.operatorfunction.md)<A, B\>, `op3`: [*OperatorFunction*](../interfaces/rxjs.operatorfunction.md)<B, C\>, `op4`: [*OperatorFunction*](../interfaces/rxjs.operatorfunction.md)<C, D\>, `op5`: [*OperatorFunction*](../interfaces/rxjs.operatorfunction.md)<D, E\>): [*Observable*](rxjs.observable.md)<E\>

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
`op1` | [*OperatorFunction*](../interfaces/rxjs.operatorfunction.md)<T, A\> |
`op2` | [*OperatorFunction*](../interfaces/rxjs.operatorfunction.md)<A, B\> |
`op3` | [*OperatorFunction*](../interfaces/rxjs.operatorfunction.md)<B, C\> |
`op4` | [*OperatorFunction*](../interfaces/rxjs.operatorfunction.md)<C, D\> |
`op5` | [*OperatorFunction*](../interfaces/rxjs.operatorfunction.md)<D, E\> |

**Returns:** [*Observable*](rxjs.observable.md)<E\>

▸ **pipe**<A, B, C, D, E, F\>(`op1`: [*OperatorFunction*](../interfaces/rxjs.operatorfunction.md)<T, A\>, `op2`: [*OperatorFunction*](../interfaces/rxjs.operatorfunction.md)<A, B\>, `op3`: [*OperatorFunction*](../interfaces/rxjs.operatorfunction.md)<B, C\>, `op4`: [*OperatorFunction*](../interfaces/rxjs.operatorfunction.md)<C, D\>, `op5`: [*OperatorFunction*](../interfaces/rxjs.operatorfunction.md)<D, E\>, `op6`: [*OperatorFunction*](../interfaces/rxjs.operatorfunction.md)<E, F\>): [*Observable*](rxjs.observable.md)<F\>

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
`op1` | [*OperatorFunction*](../interfaces/rxjs.operatorfunction.md)<T, A\> |
`op2` | [*OperatorFunction*](../interfaces/rxjs.operatorfunction.md)<A, B\> |
`op3` | [*OperatorFunction*](../interfaces/rxjs.operatorfunction.md)<B, C\> |
`op4` | [*OperatorFunction*](../interfaces/rxjs.operatorfunction.md)<C, D\> |
`op5` | [*OperatorFunction*](../interfaces/rxjs.operatorfunction.md)<D, E\> |
`op6` | [*OperatorFunction*](../interfaces/rxjs.operatorfunction.md)<E, F\> |

**Returns:** [*Observable*](rxjs.observable.md)<F\>

▸ **pipe**<A, B, C, D, E, F, G\>(`op1`: [*OperatorFunction*](../interfaces/rxjs.operatorfunction.md)<T, A\>, `op2`: [*OperatorFunction*](../interfaces/rxjs.operatorfunction.md)<A, B\>, `op3`: [*OperatorFunction*](../interfaces/rxjs.operatorfunction.md)<B, C\>, `op4`: [*OperatorFunction*](../interfaces/rxjs.operatorfunction.md)<C, D\>, `op5`: [*OperatorFunction*](../interfaces/rxjs.operatorfunction.md)<D, E\>, `op6`: [*OperatorFunction*](../interfaces/rxjs.operatorfunction.md)<E, F\>, `op7`: [*OperatorFunction*](../interfaces/rxjs.operatorfunction.md)<F, G\>): [*Observable*](rxjs.observable.md)<G\>

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
`op1` | [*OperatorFunction*](../interfaces/rxjs.operatorfunction.md)<T, A\> |
`op2` | [*OperatorFunction*](../interfaces/rxjs.operatorfunction.md)<A, B\> |
`op3` | [*OperatorFunction*](../interfaces/rxjs.operatorfunction.md)<B, C\> |
`op4` | [*OperatorFunction*](../interfaces/rxjs.operatorfunction.md)<C, D\> |
`op5` | [*OperatorFunction*](../interfaces/rxjs.operatorfunction.md)<D, E\> |
`op6` | [*OperatorFunction*](../interfaces/rxjs.operatorfunction.md)<E, F\> |
`op7` | [*OperatorFunction*](../interfaces/rxjs.operatorfunction.md)<F, G\> |

**Returns:** [*Observable*](rxjs.observable.md)<G\>

▸ **pipe**<A, B, C, D, E, F, G, H\>(`op1`: [*OperatorFunction*](../interfaces/rxjs.operatorfunction.md)<T, A\>, `op2`: [*OperatorFunction*](../interfaces/rxjs.operatorfunction.md)<A, B\>, `op3`: [*OperatorFunction*](../interfaces/rxjs.operatorfunction.md)<B, C\>, `op4`: [*OperatorFunction*](../interfaces/rxjs.operatorfunction.md)<C, D\>, `op5`: [*OperatorFunction*](../interfaces/rxjs.operatorfunction.md)<D, E\>, `op6`: [*OperatorFunction*](../interfaces/rxjs.operatorfunction.md)<E, F\>, `op7`: [*OperatorFunction*](../interfaces/rxjs.operatorfunction.md)<F, G\>, `op8`: [*OperatorFunction*](../interfaces/rxjs.operatorfunction.md)<G, H\>): [*Observable*](rxjs.observable.md)<H\>

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
`op1` | [*OperatorFunction*](../interfaces/rxjs.operatorfunction.md)<T, A\> |
`op2` | [*OperatorFunction*](../interfaces/rxjs.operatorfunction.md)<A, B\> |
`op3` | [*OperatorFunction*](../interfaces/rxjs.operatorfunction.md)<B, C\> |
`op4` | [*OperatorFunction*](../interfaces/rxjs.operatorfunction.md)<C, D\> |
`op5` | [*OperatorFunction*](../interfaces/rxjs.operatorfunction.md)<D, E\> |
`op6` | [*OperatorFunction*](../interfaces/rxjs.operatorfunction.md)<E, F\> |
`op7` | [*OperatorFunction*](../interfaces/rxjs.operatorfunction.md)<F, G\> |
`op8` | [*OperatorFunction*](../interfaces/rxjs.operatorfunction.md)<G, H\> |

**Returns:** [*Observable*](rxjs.observable.md)<H\>

▸ **pipe**<A, B, C, D, E, F, G, H, I\>(`op1`: [*OperatorFunction*](../interfaces/rxjs.operatorfunction.md)<T, A\>, `op2`: [*OperatorFunction*](../interfaces/rxjs.operatorfunction.md)<A, B\>, `op3`: [*OperatorFunction*](../interfaces/rxjs.operatorfunction.md)<B, C\>, `op4`: [*OperatorFunction*](../interfaces/rxjs.operatorfunction.md)<C, D\>, `op5`: [*OperatorFunction*](../interfaces/rxjs.operatorfunction.md)<D, E\>, `op6`: [*OperatorFunction*](../interfaces/rxjs.operatorfunction.md)<E, F\>, `op7`: [*OperatorFunction*](../interfaces/rxjs.operatorfunction.md)<F, G\>, `op8`: [*OperatorFunction*](../interfaces/rxjs.operatorfunction.md)<G, H\>, `op9`: [*OperatorFunction*](../interfaces/rxjs.operatorfunction.md)<H, I\>): [*Observable*](rxjs.observable.md)<I\>

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
`op1` | [*OperatorFunction*](../interfaces/rxjs.operatorfunction.md)<T, A\> |
`op2` | [*OperatorFunction*](../interfaces/rxjs.operatorfunction.md)<A, B\> |
`op3` | [*OperatorFunction*](../interfaces/rxjs.operatorfunction.md)<B, C\> |
`op4` | [*OperatorFunction*](../interfaces/rxjs.operatorfunction.md)<C, D\> |
`op5` | [*OperatorFunction*](../interfaces/rxjs.operatorfunction.md)<D, E\> |
`op6` | [*OperatorFunction*](../interfaces/rxjs.operatorfunction.md)<E, F\> |
`op7` | [*OperatorFunction*](../interfaces/rxjs.operatorfunction.md)<F, G\> |
`op8` | [*OperatorFunction*](../interfaces/rxjs.operatorfunction.md)<G, H\> |
`op9` | [*OperatorFunction*](../interfaces/rxjs.operatorfunction.md)<H, I\> |

**Returns:** [*Observable*](rxjs.observable.md)<I\>

▸ **pipe**<A, B, C, D, E, F, G, H, I\>(`op1`: [*OperatorFunction*](../interfaces/rxjs.operatorfunction.md)<T, A\>, `op2`: [*OperatorFunction*](../interfaces/rxjs.operatorfunction.md)<A, B\>, `op3`: [*OperatorFunction*](../interfaces/rxjs.operatorfunction.md)<B, C\>, `op4`: [*OperatorFunction*](../interfaces/rxjs.operatorfunction.md)<C, D\>, `op5`: [*OperatorFunction*](../interfaces/rxjs.operatorfunction.md)<D, E\>, `op6`: [*OperatorFunction*](../interfaces/rxjs.operatorfunction.md)<E, F\>, `op7`: [*OperatorFunction*](../interfaces/rxjs.operatorfunction.md)<F, G\>, `op8`: [*OperatorFunction*](../interfaces/rxjs.operatorfunction.md)<G, H\>, `op9`: [*OperatorFunction*](../interfaces/rxjs.operatorfunction.md)<H, I\>, ...`operations`: [*OperatorFunction*](../interfaces/rxjs.operatorfunction.md)<any, any\>[]): [*Observable*](rxjs.observable.md)<unknown\>

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
`op1` | [*OperatorFunction*](../interfaces/rxjs.operatorfunction.md)<T, A\> |
`op2` | [*OperatorFunction*](../interfaces/rxjs.operatorfunction.md)<A, B\> |
`op3` | [*OperatorFunction*](../interfaces/rxjs.operatorfunction.md)<B, C\> |
`op4` | [*OperatorFunction*](../interfaces/rxjs.operatorfunction.md)<C, D\> |
`op5` | [*OperatorFunction*](../interfaces/rxjs.operatorfunction.md)<D, E\> |
`op6` | [*OperatorFunction*](../interfaces/rxjs.operatorfunction.md)<E, F\> |
`op7` | [*OperatorFunction*](../interfaces/rxjs.operatorfunction.md)<F, G\> |
`op8` | [*OperatorFunction*](../interfaces/rxjs.operatorfunction.md)<G, H\> |
`op9` | [*OperatorFunction*](../interfaces/rxjs.operatorfunction.md)<H, I\> |
`...operations` | [*OperatorFunction*](../interfaces/rxjs.operatorfunction.md)<any, any\>[] |

**Returns:** [*Observable*](rxjs.observable.md)<unknown\>

___

### subscribe

▸ **subscribe**(`observer?`: *Partial*<[*Observer*](../interfaces/rxjs.observer.md)<T\>\>): [*Subscription*](rxjs.subscription.md)

#### Parameters:

Name | Type |
:------ | :------ |
`observer?` | *Partial*<[*Observer*](../interfaces/rxjs.observer.md)<T\>\> |

**Returns:** [*Subscription*](rxjs.subscription.md)

Implementation of: [Subscribable](../interfaces/rxjs.subscribable.md)

▸ **subscribe**(`next`: (`value`: T) => *void*): [*Subscription*](rxjs.subscription.md)

#### Parameters:

Name | Type |
:------ | :------ |
`next` | (`value`: T) => *void* |

**Returns:** [*Subscription*](rxjs.subscription.md)

Implementation of: void

▸ **subscribe**(`next?`: *null* \| (`value`: T) => *void*, `error?`: *null* \| (`error`: *any*) => *void*, `complete?`: *null* \| () => *void*): [*Subscription*](rxjs.subscription.md)

**`deprecated`** Instead of passing separate callback arguments, use an observer argument. Signatures taking separate callback arguments will be removed in v8. Details: https://rxjs.dev/deprecations/subscribe-arguments

#### Parameters:

Name | Type |
:------ | :------ |
`next?` | *null* \| (`value`: T) => *void* |
`error?` | *null* \| (`error`: *any*) => *void* |
`complete?` | *null* \| () => *void* |

**Returns:** [*Subscription*](rxjs.subscription.md)

Implementation of: void

___

### toPromise

▸ **toPromise**(): *Promise*<undefined \| T\>

**`deprecated`** Replaced with [firstValueFrom](../modules/rxjs.md#firstvaluefrom) and [lastValueFrom](../modules/rxjs.md#lastvaluefrom). Will be removed in v8. Details: https://rxjs.dev/deprecations/to-promise

**Returns:** *Promise*<undefined \| T\>

▸ **toPromise**(`PromiseCtor`: PromiseConstructor): *Promise*<undefined \| T\>

**`deprecated`** Replaced with [firstValueFrom](../modules/rxjs.md#firstvaluefrom) and [lastValueFrom](../modules/rxjs.md#lastvaluefrom). Will be removed in v8. Details: https://rxjs.dev/deprecations/to-promise

#### Parameters:

Name | Type |
:------ | :------ |
`PromiseCtor` | PromiseConstructor |

**Returns:** *Promise*<undefined \| T\>

▸ **toPromise**(`PromiseCtor`: PromiseConstructorLike): *Promise*<undefined \| T\>

**`deprecated`** Replaced with [firstValueFrom](../modules/rxjs.md#firstvaluefrom) and [lastValueFrom](../modules/rxjs.md#lastvaluefrom). Will be removed in v8. Details: https://rxjs.dev/deprecations/to-promise

#### Parameters:

Name | Type |
:------ | :------ |
`PromiseCtor` | PromiseConstructorLike |

**Returns:** *Promise*<undefined \| T\>
