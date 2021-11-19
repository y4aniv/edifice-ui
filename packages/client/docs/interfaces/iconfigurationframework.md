[ode-ts-client](../README.md) / [Exports](../modules.md) / IConfigurationFramework

# Interface: IConfigurationFramework

## Table of contents

### Properties

- [Platform](iconfigurationframework.md#platform)
- [School](iconfigurationframework.md#school)
- [User](iconfigurationframework.md#user)

### Methods

- [initialize](iconfigurationframework.md#initialize)

## Properties

### Platform

• `Readonly` **Platform**: *object*

#### Type declaration:

Name | Type | Description |
:------ | :------ | :------ |
`analytics` | *object* | Configured tracking.   |
`analytics.status` | [*AnalyticStatus*](../modules.md#analyticstatus) | Check the status, if something goes wrong.   |
`analytics.parameters` | [object Object] | - |
`analytics.xiti` | [object Object] | - |
`apps` | *object* | - |
`apps.getPublicConf` | [object Object] | - |
`apps.initialize` | [object Object] | - |
`apps.loadI18n` | [object Object] | - |
`cdnDomain` | *string* | - |
`deploymentTag` | *string* | - |
`idiom` | [*IIdiom*](iidiom.md) | I18n (port from legacy infra-front)   |
`theme` | [*ITheme*](itheme.md) | Configured theme.   |
`listLanguages` | () => *Promise*<string[]\> | - |

___

### School

• `Readonly` **School**: *object*

#### Type declaration:

___

### User

• `Readonly` **User**: *object*

#### Type declaration:

Name | Type | Description |
:------ | :------ | :------ |
`bookmarkedApps` | [*IWebApp*](iwebapp.md)[] | User's prefered apps.   |
`keepOpenOnLogout` | *boolean* | Legacy option (//FIXME which use ?).   |
`preferences` | [*IUserPreferences*](iuserpreferences.md) | User's preferences.   |
`loadAppPrefs` | (`app`: [*App*](../modules.md#app)) => *Promise*<any\> | - |
`loadLanguage` | () => *Promise*<string\> | - |
`saveAppPrefs` | (`app`: [*App*](../modules.md#app)) => *Promise*<void\> | - |
`saveLanguage` | (`lang`: *string*) => *Promise*<void\> | - |

## Methods

### initialize

▸ **initialize**(`version`: *null* \| *string*, `cdnDomain`: *null* \| *string*): *Promise*<void\>

Framework initialization

#### Parameters:

Name | Type |
:------ | :------ |
`version` | *null* \| *string* |
`cdnDomain` | *null* \| *string* |

**Returns:** *Promise*<void\>
