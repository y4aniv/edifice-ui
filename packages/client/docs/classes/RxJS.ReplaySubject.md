[ode-ts-client](../README.md) / [Exports](../modules.md) / [RxJS](../modules/rxjs.md) / ReplaySubject

# Class: ReplaySubject<T\>

[RxJS](../modules/rxjs.md).ReplaySubject

A variant of [Subject](rxjs.subject.md) that "replays" old values to new subscribers by emitting them when they first subscribe.

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

**`see`** [Subject](rxjs.subject.md)

**`see`** [BehaviorSubject](rxjs.behaviorsubject.md)

**`see`** [shareReplay](../modules/rxjs.md#sharereplay)

## Type parameters

Name |
:------ |
`T` |

## Hierarchy

* [*Subject*](rxjs.subject.md)<T\>

  ↳ **ReplaySubject**

## Table of contents

### Constructors

- [constructor](rxjs.replaysubject.md#constructor)

### Properties

- [closed](rxjs.replaysubject.md#closed)
- [hasError](rxjs.replaysubject.md#haserror)
- [isStopped](rxjs.replaysubject.md#isstopped)
- [observers](rxjs.replaysubject.md#observers)
- [operator](rxjs.replaysubject.md#operator)
- [source](rxjs.replaysubject.md#source)
- [thrownError](rxjs.replaysubject.md#thrownerror)
- [create](rxjs.replaysubject.md#create)

### Accessors

- [observed](rxjs.replaysubject.md#observed)

### Methods

- [asObservable](rxjs.replaysubject.md#asobservable)
- [complete](rxjs.replaysubject.md#complete)
- [error](rxjs.replaysubject.md#error)
- [forEach](rxjs.replaysubject.md#foreach)
- [lift](rxjs.replaysubject.md#lift)
- [next](rxjs.replaysubject.md#next)
- [pipe](rxjs.replaysubject.md#pipe)
- [subscribe](rxjs.replaysubject.md#subscribe)
- [toPromise](rxjs.replaysubject.md#topromise)
- [unsubscribe](rxjs.replaysubject.md#unsubscribe)

## Constructors

### constructor

\+ **new ReplaySubject**<T\>(`_bufferSize?`: *number*, `_windowTime?`: *number*, `_timestampProvider?`: [*TimestampProvider*](../interfaces/rxjs.timestampprovider.md)): [*ReplaySubject*](rxjs.replaysubject.md)<T\>

#### Type parameters:

Name |
:------ |
`T` |

#### Parameters:

Name | Type |
:------ | :------ |
`_bufferSize?` | *number* |
`_windowTime?` | *number* |
`_timestampProvider?` | [*TimestampProvider*](../interfaces/rxjs.timestampprovider.md) |

**Returns:** [*ReplaySubject*](rxjs.replaysubject.md)<T\>

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
