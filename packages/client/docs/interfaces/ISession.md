[ode-ts-client](../README.md) / [Exports](../modules.md) / ISession

# Interface: ISession

## Table of contents

### Properties

- [avatarUrl](ISession.md#avatarurl)
- [currentApp](ISession.md#currentapp)
- [currentLanguage](ISession.md#currentlanguage)
- [description](ISession.md#description)
- [latestQuotaAndUsage](ISession.md#latestquotaandusage)
- [notLoggedIn](ISession.md#notloggedin)
- [user](ISession.md#user)

### Methods

- [checkEmail](ISession.md#checkemail)
- [getEmailValidationInfos](ISession.md#getemailvalidationinfos)
- [hasRight](ISession.md#hasright)
- [hasWorkflow](ISession.md#hasworkflow)
- [tryEmailValidation](ISession.md#tryemailvalidation)

## Properties

### avatarUrl

• `Readonly` **avatarUrl**: `string`

Get the connected user's avatar URL, or a default one.
Append a query parameter to this URL for it to get resized, for example "?thumbnail=48x48"

___

### currentApp

• `Readonly` **currentApp**: ``null`` \| [`App`](../modules.md#app)

Retrieve the current main app, @see ConfigureFramework.Platform.apps

___

### currentLanguage

• `Readonly` **currentLanguage**: `string`

Language code (2-letters) actually applied.

___

### description

• `Readonly` **description**: [`IUserDescription`](IUserDescription.md)

Additional information about the connected user.

___

### latestQuotaAndUsage

• `Readonly` **latestQuotaAndUsage**: `Promise`<[`IQuotaAndUsage`](IQuotaAndUsage.md)\>

Retrieve the lastest storage + quota information.

___

### notLoggedIn

• `Readonly` **notLoggedIn**: `boolean`

Truthy when no user is connected.

___

### user

• `Readonly` **user**: [`IUserInfo`](IUserInfo.md)

Basic information about the connected user.

## Methods

### checkEmail

▸ **checkEmail**(`email`): `Promise`<`void`\>

Send a 6-digits code to an email address to validate it.
=> when resolved successfully, the email validation infos will switch to the "pending" state.

#### Parameters

| Name | Type |
| :------ | :------ |
| `email` | `String` |

#### Returns

`Promise`<`void`\>

___

### getEmailValidationInfos

▸ **getEmailValidationInfos**(): `Promise`<[`IEmailValidationInfos`](IEmailValidationInfos.md)\>

Verify if the logged-in user has a valid email address.

#### Returns

`Promise`<[`IEmailValidationInfos`](IEmailValidationInfos.md)\>

___

### hasRight

▸ **hasRight**(`resource`, `right`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `resource` | `any` |
| `right` | `any` |

#### Returns

`boolean`

___

### hasWorkflow

▸ **hasWorkflow**(`workflowName`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `workflowName` | `string` |

#### Returns

`boolean`
<<<<<<< HEAD
=======

___

### tryEmailValidation

▸ **tryEmailValidation**(`code`): `Promise`<[`IEmailValidationState`](IEmailValidationState.md)\>

Send a 6-digits code to the server to try validating the pending email address.

#### Parameters

| Name | Type |
| :------ | :------ |
| `code` | `String` |

#### Returns

`Promise`<[`IEmailValidationState`](IEmailValidationState.md)\>
>>>>>>> d350f58 (feat: #WB-965, #WB-878, email validation)
