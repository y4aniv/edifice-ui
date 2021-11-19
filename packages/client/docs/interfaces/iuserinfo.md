[ode-ts-client](../README.md) / [Exports](../modules.md) / IUserInfo

# Interface: IUserInfo

## Table of contents

### Properties

- [apps](iuserinfo.md#apps)
- [authorizedActions](iuserinfo.md#authorizedactions)
- [birthDate](iuserinfo.md#birthdate)
- [children](iuserinfo.md#children)
- [childrenIds](iuserinfo.md#childrenids)
- [classNames](iuserinfo.md#classnames)
- [classes](iuserinfo.md#classes)
- [deletePending](iuserinfo.md#deletepending)
- [externalId](iuserinfo.md#externalid)
- [federated](iuserinfo.md#federated)
- [federatedIDP](iuserinfo.md#federatedidp)
- [firstName](iuserinfo.md#firstname)
- [forceChangePassword](iuserinfo.md#forcechangepassword)
- [functions](iuserinfo.md#functions)
- [groupsIds](iuserinfo.md#groupsids)
- [hasApp](iuserinfo.md#hasapp)
- [hasPw](iuserinfo.md#haspw)
- [lastName](iuserinfo.md#lastname)
- [level](iuserinfo.md#level)
- [login](iuserinfo.md#login)
- [needRevalidateTerms](iuserinfo.md#needrevalidateterms)
- [optionEnabled](iuserinfo.md#optionenabled)
- [preferences](iuserinfo.md#preferences)
- [sessionMetadata](iuserinfo.md#sessionmetadata)
- [structureNames](iuserinfo.md#structurenames)
- [structures](iuserinfo.md#structures)
- [type](iuserinfo.md#type)
- [uai](iuserinfo.md#uai)
- [userId](iuserinfo.md#userid)
- [username](iuserinfo.md#username)
- [widgets](iuserinfo.md#widgets)

## Properties

### apps

• **apps**: [*IWebApp*](iwebapp.md)[]

___

### authorizedActions

• **authorizedActions**: [*IWorkflowAuth*](iworkflowauth.md)[]

___

### birthDate

• **birthDate**: *string*

___

### children

• **children**: *any*

___

### childrenIds

• **childrenIds**: *string*[]

___

### classNames

• **classNames**: *string*[]

___

### classes

• **classes**: *any*[]

___

### deletePending

• **deletePending**: *boolean*

___

### externalId

• **externalId**: *string*

___

### federated

• `Optional` **federated**: *any*

___

### federatedIDP

• `Optional` **federatedIDP**: *any*

___

### firstName

• **firstName**: *string*

___

### forceChangePassword

• `Optional` **forceChangePassword**: *any*

___

### functions

• **functions**: *object*

#### Type declaration:

Name | Type |
:------ | :------ |
`ADMIN_LOCAL`? | *object* |
`ADMIN_LOCAL.code` | *string* |
`ADMIN_LOCAL.scope` | *string*[] |
`SUPER_ADMIN` | *object* |
`SUPER_ADMIN.code` | *string* |
`SUPER_ADMIN.scope` | *string*[] |

___

### groupsIds

• **groupsIds**: *string*[]

___

### hasApp

• **hasApp**: *boolean*

___

### hasPw

• **hasPw**: *boolean*

___

### lastName

• **lastName**: *string*

___

### level

• **level**: *string*

___

### login

• **login**: *string*

___

### needRevalidateTerms

• **needRevalidateTerms**: *any*

___

### optionEnabled

• **optionEnabled**: *any*[]

___

### preferences

• `Optional` **preferences**: *object*

#### Type declaration:

Name | Type |
:------ | :------ |
`save` | (`pref`: *any*, `data`: *any*) => *void* |

___

### sessionMetadata

• **sessionMetadata**: *object*

#### Type declaration:

Name | Type |
:------ | :------ |
`_id` | *string* |
`userId` | *string* |

___

### structureNames

• **structureNames**: *string*[]

___

### structures

• **structures**: *string*[]

___

### type

• **type**: *ENSEIGNANT* \| *ELEVE* \| *PERSRELELEVE* \| *SUPERADMIN* \| *PERSEDUCNAT*

___

### uai

• **uai**: *any*[]

___

### userId

• **userId**: *string*

___

### username

• **username**: *string*

___

### widgets

• **widgets**: [*IWidgetModel*](iwidgetmodel.md)[]
