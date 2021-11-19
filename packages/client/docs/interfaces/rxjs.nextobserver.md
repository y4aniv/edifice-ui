[ode-ts-client](../README.md) / [Exports](../modules.md) / [RxJS](../modules/rxjs.md) / NextObserver

# Interface: NextObserver<T\>

[RxJS](../modules/rxjs.md).NextObserver

OBSERVER INTERFACES

## Type parameters

Name |
:------ |
`T` |

## Table of contents

### Properties

- [closed](rxjs.nextobserver.md#closed)
- [complete](rxjs.nextobserver.md#complete)
- [error](rxjs.nextobserver.md#error)
- [next](rxjs.nextobserver.md#next)

## Properties

### closed

• `Optional` **closed**: *boolean*

___

### complete

• `Optional` **complete**: () => *void*

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

• **next**: (`value`: T) => *void*

#### Type declaration:

▸ (`value`: T): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`value` | T |

**Returns:** *void*
