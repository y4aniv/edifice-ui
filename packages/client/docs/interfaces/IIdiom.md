[ode-ts-client](../README.md) / [Exports](../modules.md) / IIdiom

# Interface: IIdiom

## Table of contents

### Methods

- [addAllTranslations](iidiom.md#addalltranslations)
- [addBundle](iidiom.md#addbundle)
- [addBundlePromise](iidiom.md#addbundlepromise)
- [addKeys](iidiom.md#addkeys)
- [addTranslations](iidiom.md#addtranslations)
- [removeAccents](iidiom.md#removeaccents)
- [translate](iidiom.md#translate)

## Methods

### addAllTranslations

▸ **addAllTranslations**(`folders`: *string*[]): *Promise*<void\>

Load the JSON language files from many given folders, using the current user's language, then return a Promise.

#### Parameters:

Name | Type |
:------ | :------ |
`folders` | *string*[] |

**Returns:** *Promise*<void\>

___

### addBundle

▸ **addBundle**(`path`: *string*, `callback?`: [*AddBundleCallback*](../modules.md#addbundlecallback)): *void*

Load a language bundle then call an optional callback.

#### Parameters:

Name | Type |
:------ | :------ |
`path` | *string* |
`callback?` | [*AddBundleCallback*](../modules.md#addbundlecallback) |

**Returns:** *void*

___

### addBundlePromise

▸ **addBundlePromise**(`path`: *string*): *Promise*<void\>

Load a language bundle then return a Promise.

#### Parameters:

Name | Type |
:------ | :------ |
`path` | *string* |

**Returns:** *Promise*<void\>

___

### addKeys

▸ **addKeys**(`keys`: *any*): *void*

Add new key/values translations to the in-memory dictionary, using a key/value map. Existing in-memory keys ARE NOT REPLACED. Only new ones are added.

#### Parameters:

Name | Type |
:------ | :------ |
`keys` | *any* |

**Returns:** *void*

___

### addTranslations

▸ **addTranslations**(`folder`: *string*, `callback?`: [*AddBundleCallback*](../modules.md#addbundlecallback)): *void*

Load the JSON language file from a given folder, using the current user's language, then call an optional callback.

#### Parameters:

Name | Type |
:------ | :------ |
`folder` | *string* |
`callback?` | [*AddBundleCallback*](../modules.md#addbundlecallback) |

**Returns:** *void*

___

### removeAccents

▸ **removeAccents**(`str`: *string*): *string*

#### Parameters:

Name | Type |
:------ | :------ |
`str` | *string* |

**Returns:** *string*

a new string without accentuation.

___

### translate

▸ **translate**(`key`: *string*): *string*

Get the translation of a given key.

#### Parameters:

Name | Type |
:------ | :------ |
`key` | *string* |

**Returns:** *string*

the key itself when no translation exists.
