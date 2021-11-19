[ode-ts-client](../README.md) / [Exports](../modules.md) / IPromisified

# Interface: IPromisified<T\>

## Type parameters

Name |
:------ |
`T` |

## Table of contents

### Properties

- [promise](ipromisified.md#promise)
- [reject](ipromisified.md#reject)
- [resolve](ipromisified.md#resolve)

## Properties

### promise

• `Readonly` **promise**: *Promise*<T\>

___

### reject

• **reject**: (`reason?`: *any*) => *void*

#### Type declaration:

▸ (`reason?`: *any*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`reason?` | *any* |

**Returns:** *void*

___

### resolve

• **resolve**: (`value`: T \| *PromiseLike*<T\>) => *void*

#### Type declaration:

▸ (`value`: T \| *PromiseLike*<T\>): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`value` | T \| *PromiseLike*<T\> |

**Returns:** *void*
