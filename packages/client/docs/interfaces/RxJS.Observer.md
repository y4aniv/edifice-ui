[ode-ts-client](../README.md) / [Exports](../modules.md) / [RxJS](../modules/rxjs.md) / Observer

# Interface: Observer<T\>

[RxJS](../modules/rxjs.md).Observer

## Type parameters

Name |
:------ |
`T` |

## Hierarchy

* **Observer**

  ↳ [*SubjectLike*](rxjs.subjectlike.md)

## Implemented by

* [*Subscriber*](../classes/rxjs.subscriber.md)

## Table of contents

### Properties

- [complete](rxjs.observer.md#complete)
- [error](rxjs.observer.md#error)
- [next](rxjs.observer.md#next)

## Properties

### complete

• **complete**: () => *void*

#### Type declaration:

▸ (): *void*

**Returns:** *void*

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
