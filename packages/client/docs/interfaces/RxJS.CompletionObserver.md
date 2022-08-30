[ode-ts-client](../README.md) / [Exports](../modules.md) / [RxJS](../modules/rxjs.md) / CompletionObserver

# Interface: CompletionObserver<T\>

[RxJS](../modules/rxjs.md).CompletionObserver

## Type parameters

Name |
:------ |
`T` |

## Table of contents

### Properties

- [closed](rxjs.completionobserver.md#closed)
- [complete](rxjs.completionobserver.md#complete)
- [error](rxjs.completionobserver.md#error)
- [next](rxjs.completionobserver.md#next)

## Properties

### closed

• `Optional` **closed**: *boolean*

___

### complete

• **complete**: () => *void*

#### Type declaration:

▸ (): *void*

**Returns:** *void*

___

### error

• `Optional` **error**: (`err`: *any*) => *void*

#### Type declaration:

▸ (`err`: *any*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`err` | *any* |

**Returns:** *void*

___

### next

• `Optional` **next**: (`value`: T) => *void*

#### Type declaration:

▸ (`value`: T): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`value` | T |

**Returns:** *void*
