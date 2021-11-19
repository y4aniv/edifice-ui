[ode-ts-client](../README.md) / [Exports](../modules.md) / [RxJS](../modules/rxjs.md) / BehaviorSubject

# Class: BehaviorSubject<T\>

[RxJS](../modules/rxjs.md).BehaviorSubject

A variant of Subject that requires an initial value and emits its current
value whenever it is subscribed to.

## Type parameters

Name |
:------ |
`T` |

## Hierarchy

* [*Subject*](rxjs.subject.md)<T\>

  ↳ **BehaviorSubject**

## Table of contents

### Constructors

- [constructor](rxjs.behaviorsubject.md#constructor)

### Properties

- [closed](rxjs.behaviorsubject.md#closed)
- [hasError](rxjs.behaviorsubject.md#haserror)
- [isStopped](rxjs.behaviorsubject.md#isstopped)
- [observers](rxjs.behaviorsubject.md#observers)
- [operator](rxjs.behaviorsubject.md#operator)
- [source](rxjs.behaviorsubject.md#source)
- [thrownError](rxjs.behaviorsubject.md#thrownerror)
- [create](rxjs.behaviorsubject.md#create)

### Accessors

- [observed](rxjs.behaviorsubject.md#observed)
- [value](rxjs.behaviorsubject.md#value)

### Methods

- [asObservable](rxjs.behaviorsubject.md#asobservable)
- [complete](rxjs.behaviorsubject.md#complete)
- [error](rxjs.behaviorsubject.md#error)
- [forEach](rxjs.behaviorsubject.md#foreach)
- [getValue](rxjs.behaviorsubject.md#getvalue)
- [lift](rxjs.behaviorsubject.md#lift)
- [next](rxjs.behaviorsubject.md#next)
- [pipe](rxjs.behaviorsubject.md#pipe)
- [subscribe](rxjs.behaviorsubject.md#subscribe)
- [toPromise](rxjs.behaviorsubject.md#topromise)
- [unsubscribe](rxjs.behaviorsubject.md#unsubscribe)

## Constructors

### constructor

\+ **new BehaviorSubject**<T\>(`_value`: T): [*BehaviorSubject*](rxjs.behaviorsubject.md)<T\>

#### Type parameters:

Name |
:------ |
`T` |

#### Parameters:

Name | Type |
:------ | :------ |
`_value` | T |

**Returns:** [*BehaviorSubject*](rxjs.behaviorsubject.md)<T\>

Overrides: [Subject](rxjs.subject.md)

## Properties

### closed

• **closed**: *boolean*

Inherited from: [Subject](rxjs.subject.md).[closed](rxjs.subject.md#closed)

___

### hasError

• **hasError**: *boolean*

**`deprecated`** Internal implementation detail, do not use directly. Will be made internal in v8.

Inherited from: [Subject](rxjs.subject.md).[hasError](rxjs.subject.md#haserror)

___

### isStopped

• **isStopped**: *boolean*

**`deprecated`** Internal implementation detail, do not use directly. Will be made internal in v8.

Inherited from: [Subject](rxjs.subject.md).[isStopped](rxjs.subject.md#isstopped)

___

### observers

• **observers**: [*Observer*](../interfaces/rxjs.observer.md)<T\>[]

**`deprecated`** Internal implementation detail, do not use directly. Will be made internal in v8.

Inherited from: [Subject](rxjs.subject.md).[observers](rxjs.subject.md#observers)

___

### operator

• **operator**: *undefined* \| [*Operator*](../interfaces/rxjs.operator.md)<any, T\>

**`deprecated`** Internal implementation detail, do not use directly. Will be made internal in v8.

Inherited from: [Subject](rxjs.subject.md).[operator](rxjs.subject.md#operator)

___

### source

• **source**: *undefined* \| [*Observable*](rxjs.observable.md)<any\>

**`deprecated`** Internal implementation detail, do not use directly. Will be made internal in v8.

Inherited from: [Subject](rxjs.subject.md).[source](rxjs.subject.md#source)

___

### thrownError

• **thrownError**: *any*

**`deprecated`** Internal implementation detail, do not use directly. Will be made internal in v8.

Inherited from: [Subject](rxjs.subject.md).[thrownError](rxjs.subject.md#thrownerror)

___

### create

▪ `Static` **create**: (...`args`: *any*[]) => *any*

Creates a "subject" by basically gluing an observer to an observable.

**`nocollapse`** 

**`deprecated`** Recommended you do not use. Will be removed at some point in the future. Plans for replacement still under discussion.

#### Type declaration:

▸ (...`args`: *any*[]): *any*

#### Parameters:

Name | Type |
:------ | :------ |
`...args` | *any*[] |

**Returns:** *any*

Inherited from: [Subject](rxjs.subject.md).[create](rxjs.subject.md#create)

## Accessors

### observed

• get **observed**(): *boolean*

**Returns:** *boolean*

___

### value

• get **value**(): T

**Returns:** T

## Methods

### asObservable

▸ **asObservable**(): [*Observable*](rxjs.observable.md)<T\>

Creates a new Observable with this Subject as the source. You can do this
to create customize Observer-side logic of the Subject and conceal it from
code that uses the Observable.

**Returns:** [*Observable*](rxjs.observable.md)<T\>

Observable that the Subject casts to

Inherited from: [Subject](rxjs.subject.md)

___

### complete

▸ **complete**(): *void*

**Returns:** *void*

Inherited from: [Subject](rxjs.subject.md)

___

### error

▸ **error**(`err`: *any*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`err` | *any* |

**Returns:** *void*

Inherited from: [Subject](rxjs.subject.md)

___

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

Inherited from: [Subject](rxjs.subject.md)

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

Inherited from: [Subject](rxjs.subject.md)

___

### getValue

▸ **getValue**(): T

**Returns:** T

___

### lift

▸ **lift**<R\>(`operator`: [*Operator*](../interfaces/rxjs.operator.md)<T, R\>): [*Observable*](rxjs.observable.md)<R\>

**`deprecated`** Internal implementation detail, do not use directly. Will be made internal in v8.

#### Type parameters:

Name |
:------ |
`R` |

#### Parameters:

Name | Type |
:------ | :------ |
`operator` | [*Operator*](../interfaces/rxjs.operator.md)<T, R\> |

**Returns:** [*Observable*](rxjs.observable.md)<R\>

Inherited from: [Subject](rxjs.subject.md)

___

### next

▸ **next**(`value`: T): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`value` | T |

**Returns:** *void*

Overrides: [Subject](rxjs.subject.md)

___

### pipe

▸ **pipe**(): [*Observable*](rxjs.observable.md)<T\>

**Returns:** [*Observable*](rxjs.observable.md)<T\>

Inherited from: [Subject](rxjs.subject.md)

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

Inherited from: [Subject](rxjs.subject.md)

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

Inherited from: [Subject](rxjs.subject.md)

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

Inherited from: [Subject](rxjs.subject.md)

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

Inherited from: [Subject](rxjs.subject.md)

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

Inherited from: [Subject](rxjs.subject.md)

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

Inherited from: [Subject](rxjs.subject.md)

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

Inherited from: [Subject](rxjs.subject.md)

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

Inherited from: [Subject](rxjs.subject.md)

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

Inherited from: [Subject](rxjs.subject.md)

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

Inherited from: [Subject](rxjs.subject.md)

___

### subscribe

▸ **subscribe**(`observer?`: *Partial*<[*Observer*](../interfaces/rxjs.observer.md)<T\>\>): [*Subscription*](rxjs.subscription.md)

#### Parameters:

Name | Type |
:------ | :------ |
`observer?` | *Partial*<[*Observer*](../interfaces/rxjs.observer.md)<T\>\> |

**Returns:** [*Subscription*](rxjs.subscription.md)

Inherited from: [Subject](rxjs.subject.md)

▸ **subscribe**(`next`: (`value`: T) => *void*): [*Subscription*](rxjs.subscription.md)

#### Parameters:

Name | Type |
:------ | :------ |
`next` | (`value`: T) => *void* |

**Returns:** [*Subscription*](rxjs.subscription.md)

Inherited from: [Subject](rxjs.subject.md)

▸ **subscribe**(`next?`: *null* \| (`value`: T) => *void*, `error?`: *null* \| (`error`: *any*) => *void*, `complete?`: *null* \| () => *void*): [*Subscription*](rxjs.subscription.md)

**`deprecated`** Instead of passing separate callback arguments, use an observer argument. Signatures taking separate callback arguments will be removed in v8. Details: https://rxjs.dev/deprecations/subscribe-arguments

#### Parameters:

Name | Type |
:------ | :------ |
`next?` | *null* \| (`value`: T) => *void* |
`error?` | *null* \| (`error`: *any*) => *void* |
`complete?` | *null* \| () => *void* |

**Returns:** [*Subscription*](rxjs.subscription.md)

Inherited from: [Subject](rxjs.subject.md)

___

### toPromise

▸ **toPromise**(): *Promise*<undefined \| T\>

**`deprecated`** Replaced with [firstValueFrom](../modules/rxjs.md#firstvaluefrom) and [lastValueFrom](../modules/rxjs.md#lastvaluefrom). Will be removed in v8. Details: https://rxjs.dev/deprecations/to-promise

**Returns:** *Promise*<undefined \| T\>

Inherited from: [Subject](rxjs.subject.md)

▸ **toPromise**(`PromiseCtor`: PromiseConstructor): *Promise*<undefined \| T\>

**`deprecated`** Replaced with [firstValueFrom](../modules/rxjs.md#firstvaluefrom) and [lastValueFrom](../modules/rxjs.md#lastvaluefrom). Will be removed in v8. Details: https://rxjs.dev/deprecations/to-promise

#### Parameters:

Name | Type |
:------ | :------ |
`PromiseCtor` | PromiseConstructor |

**Returns:** *Promise*<undefined \| T\>

Inherited from: [Subject](rxjs.subject.md)

▸ **toPromise**(`PromiseCtor`: PromiseConstructorLike): *Promise*<undefined \| T\>

**`deprecated`** Replaced with [firstValueFrom](../modules/rxjs.md#firstvaluefrom) and [lastValueFrom](../modules/rxjs.md#lastvaluefrom). Will be removed in v8. Details: https://rxjs.dev/deprecations/to-promise

#### Parameters:

Name | Type |
:------ | :------ |
`PromiseCtor` | PromiseConstructorLike |

**Returns:** *Promise*<undefined \| T\>

Inherited from: [Subject](rxjs.subject.md)

___

### unsubscribe

▸ **unsubscribe**(): *void*

**Returns:** *void*

Inherited from: [Subject](rxjs.subject.md)
