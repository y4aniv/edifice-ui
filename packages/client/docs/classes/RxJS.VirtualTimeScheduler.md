[ode-ts-client](../README.md) / [Exports](../modules.md) / [RxJS](../modules/rxjs.md) / VirtualTimeScheduler

# Class: VirtualTimeScheduler

[RxJS](../modules/rxjs.md).VirtualTimeScheduler

## Hierarchy

* *AsyncScheduler*

  ↳ **VirtualTimeScheduler**

## Table of contents

### Constructors

- [constructor](rxjs.virtualtimescheduler.md#constructor)

### Properties

- [actions](rxjs.virtualtimescheduler.md#actions)
- [frame](rxjs.virtualtimescheduler.md#frame)
- [index](rxjs.virtualtimescheduler.md#index)
- [maxFrames](rxjs.virtualtimescheduler.md#maxframes)
- [now](rxjs.virtualtimescheduler.md#now)
- [frameTimeFactor](rxjs.virtualtimescheduler.md#frametimefactor)
- [now](rxjs.virtualtimescheduler.md#now)

### Methods

- [flush](rxjs.virtualtimescheduler.md#flush)
- [schedule](rxjs.virtualtimescheduler.md#schedule)

## Constructors

### constructor

\+ **new VirtualTimeScheduler**(`schedulerActionCtor?`: *typeof* AsyncAction, `maxFrames?`: *number*): [*VirtualTimeScheduler*](rxjs.virtualtimescheduler.md)

This creates an instance of a `VirtualTimeScheduler`. Experts only. The signature of
this constructor is likely to change in the long run.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`schedulerActionCtor?` | *typeof* AsyncAction | The type of Action to initialize when initializing actions during scheduling.   |
`maxFrames?` | *number* | The maximum number of frames to process before stopping. Used to prevent endless flush cycles.    |

**Returns:** [*VirtualTimeScheduler*](rxjs.virtualtimescheduler.md)

Overrides: void

## Properties

### actions

• **actions**: *AsyncAction*<any\>[]

Inherited from: void

___

### frame

• **frame**: *number*

The current frame for the state of the virtual scheduler instance. The the difference
between two "frames" is synonymous with the passage of "virtual time units". So if
you record `scheduler.frame` to be `1`, then later, observe `scheduler.frame` to be at `11`,
that means `10` virtual time units have passed.

___

### index

• **index**: *number*

Used internally to examine the current virtual action index being processed.

**`deprecated`** Internal implementation detail, do not use directly. Will be made internal in v8.

___

### maxFrames

• **maxFrames**: *number*

___

### now

• **now**: () => *number*

A getter method that returns a number representing the current time
(at the time this function was called) according to the scheduler's own
internal clock.

**`returns`** A number that represents the current time. May or may not
have a relation to wall-clock time. May or may not refer to a time unit
(e.g. milliseconds).

#### Type declaration:

▸ (): *number*

**Returns:** *number*

Inherited from: void

___

### frameTimeFactor

▪ `Static` **frameTimeFactor**: *number*

**`deprecated`** Not used in VirtualTimeScheduler directly. Will be removed in v8.

___

### now

▪ `Static` **now**: () => *number*

#### Type declaration:

▸ (): *number*

**Returns:** *number*

Inherited from: void

## Methods

### flush

▸ **flush**(): *void*

Prompt the Scheduler to execute all of its queued actions, therefore
clearing its queue.

**Returns:** *void*

Overrides: void

___

### schedule

▸ **schedule**<T\>(`work`: (`state?`: T) => *void*, `delay?`: *number*, `state?`: T): [*Subscription*](rxjs.subscription.md)

Schedules a function, `work`, for execution. May happen at some point in
the future, according to the `delay` parameter, if specified. May be passed
some context object, `state`, which will be passed to the `work` function.

The given arguments will be processed an stored as an Action object in a
queue of actions.

#### Type parameters:

Name |
:------ |
`T` |

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`work` | (`state?`: T) => *void* | A function representing a task, or some unit of work to be executed by the Scheduler.   |
`delay?` | *number* | - |
`state?` | T | - |

**Returns:** [*Subscription*](rxjs.subscription.md)

A subscription in order to be able to unsubscribe
the scheduled work.

Inherited from: void
