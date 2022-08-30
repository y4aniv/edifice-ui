[ode-ts-client](../README.md) / [Exports](../modules.md) / [RxJS](../modules/rxjs.md) / ErrorObserver

# Interface: ErrorObserver<T\>

[RxJS](../modules/rxjs.md).ErrorObserver

## Type parameters

Name |
:------ |
`T` |

## Table of contents

### Properties

- [closed](rxjs.errorobserver.md#closed)
- [complete](rxjs.errorobserver.md#complete)
- [error](rxjs.errorobserver.md#error)
- [next](rxjs.errorobserver.md#next)

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

• `Optional` **next**: (`value`: T) => *void*

#### Type declaration:

▸ (`value`: T): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`value` | T |

**Returns:** *void*
