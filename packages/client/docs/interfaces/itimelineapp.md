[ode-ts-client](../README.md) / [Exports](../modules.md) / ITimelineApp

# Interface: ITimelineApp

## Table of contents

### Properties

- [flashMessages](itimelineapp.md#flashmessages)
- [hasMorePage](itimelineapp.md#hasmorepage)
- [isLoading](itimelineapp.md#isloading)
- [notificationTypes](itimelineapp.md#notificationtypes)
- [notifications](itimelineapp.md#notifications)
- [page](itimelineapp.md#page)
- [preferences](itimelineapp.md#preferences)
- [selectedNotificationTypes](itimelineapp.md#selectednotificationtypes)
- [showMine](itimelineapp.md#showmine)

### Methods

- [initialize](itimelineapp.md#initialize)
- [loadFlashMessages](itimelineapp.md#loadflashmessages)
- [loadNotifications](itimelineapp.md#loadnotifications)
- [markAsRead](itimelineapp.md#markasread)
- [resetPagination](itimelineapp.md#resetpagination)
- [savePreferences](itimelineapp.md#savepreferences)

## Properties

### flashMessages

• `Readonly` **flashMessages**: [*IFlashMessageModel*](iflashmessagemodel.md)[]

___

### hasMorePage

• `Readonly` **hasMorePage**: *boolean*

___

### isLoading

• `Readonly` **isLoading**: *boolean*

___

### notificationTypes

• `Readonly` **notificationTypes**: *string*[]

___

### notifications

• `Readonly` **notifications**: [*ITimelineNotification*](itimelinenotification.md)[]

___

### page

• `Readonly` **page**: *number*

___

### preferences

• `Readonly` **preferences**: *any*

___

### selectedNotificationTypes

• `Readonly` **selectedNotificationTypes**: *string*[]

___

### showMine

• **showMine**: *boolean*

## Methods

### initialize

▸ **initialize**(): *Promise*<void\>

**Returns:** *Promise*<void\>

___

### loadFlashMessages

▸ **loadFlashMessages**(): *Promise*<void\>

**Returns:** *Promise*<void\>

___

### loadNotifications

▸ **loadNotifications**(`force?`: *boolean*): *Promise*<void\>

Load more notifications, or force loading more by virtually incrementing the page.

#### Parameters:

Name | Type |
:------ | :------ |
`force?` | *boolean* |

**Returns:** *Promise*<void\>

___

### markAsRead

▸ **markAsRead**(`msg`: [*IFlashMessageModel*](iflashmessagemodel.md)): *Promise*<void\>

#### Parameters:

Name | Type |
:------ | :------ |
`msg` | [*IFlashMessageModel*](iflashmessagemodel.md) |

**Returns:** *Promise*<void\>

___

### resetPagination

▸ **resetPagination**(): *void*

**Returns:** *void*

___

### savePreferences

▸ **savePreferences**(): *Promise*<void\>

**Returns:** *Promise*<void\>
