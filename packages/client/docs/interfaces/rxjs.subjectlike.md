[ode-ts-client](../README.md) / [Exports](../modules.md) / [RxJS](../modules/rxjs.md) / SubjectLike

# Interface: SubjectLike<T\>

[RxJS](../modules/rxjs.md).SubjectLike

## Type parameters

Name |
:------ |
`T` |

## Hierarchy

* [*Observer*](rxjs.observer.md)<T\>

* [*Subscribable*](rxjs.subscribable.md)<T\>

  ↳ **SubjectLike**

## Table of contents

### Properties

- [complete](rxjs.subjectlike.md#complete)
- [error](rxjs.subjectlike.md#error)
- [next](rxjs.subjectlike.md#next)

### Methods

- [subscribe](rxjs.subjectlike.md#subscribe)

## Properties

### complete

• **complete**: () => *void*

#### Type declaration:

▸ (): *void*

**Returns:** *void*

Inherited from: [Observer](rxjs.observer.md).[complete](rxjs.observer.md#complete)

___

### error

• **error**: (`err`: *any*) => *void*

#### Type declaration:

▸ (`err`: *any*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`err` | *any* |

**Returns:** *void*

Inherited from: [Observer](rxjs.observer.md).[error](rxjs.observer.md#error)

___

### next

• **next**: (`value`: T) => *void*

#### Type declaration:

▸ (`value`: T): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`value` | T |

**Returns:** *void*

Inherited from: [Observer](rxjs.observer.md).[next](rxjs.observer.md#next)

## Methods

### subscribe

▸ **subscribe**(`observer`: *Partial*<[*Observer*](rxjs.observer.md)<T\>\>): [*Unsubscribable*](rxjs.unsubscribable.md)

#### Parameters:

Name | Type |
:------ | :------ |
`observer` | *Partial*<[*Observer*](rxjs.observer.md)<T\>\> |

**Returns:** [*Unsubscribable*](rxjs.unsubscribable.md)

Inherited from: [Subscribable](rxjs.subscribable.md)
