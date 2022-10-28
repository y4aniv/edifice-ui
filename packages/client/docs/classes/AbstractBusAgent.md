[ode-ts-client](../README.md) / [Exports](../modules.md) / AbstractBusAgent

# Class: AbstractBusAgent

Manage a generic RESOURCE

## Implements

- [`IBusAgent`](../interfaces/IBusAgent.md)

## Table of contents

### Constructors

- [constructor](AbstractBusAgent.md#constructor)

### Properties

- [handlerFor](AbstractBusAgent.md#handlerfor)
- [managedResource](AbstractBusAgent.md#managedresource)
- [defaultHandler](AbstractBusAgent.md#defaulthandler)

### Methods

- [activate](AbstractBusAgent.md#activate)
- [getHandler](AbstractBusAgent.md#gethandler)
- [initialize](AbstractBusAgent.md#initialize)
- [registerHandlers](AbstractBusAgent.md#registerhandlers)
- [setHandler](AbstractBusAgent.md#sethandler)

## Constructors

### constructor

• **new AbstractBusAgent**(`managedResource`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `managedResource` | [`ResourceType`](../modules.md#resourcetype) |

## Properties

### handlerFor

• `Protected` **handlerFor**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `comment` | `IHandler` |
| `copy` | `IHandler` |
| `create` | `IHandler` |
| `delete` | `IHandler` |
| `export` | `IHandler` |
| `initialize` | `IHandler` |
| `manage` | `IHandler` |
| `move` | `IHandler` |
| `open` | `IHandler` |
| `print` | `IHandler` |
| `properties` | `IHandler` |
| `publish` | `IHandler` |
| `search` | `IHandler` |
| `share` | `IHandler` |

___

### managedResource

• `Protected` **managedResource**: [`ResourceType`](../modules.md#resourcetype)

Type of resource this agent can manage.

___

### defaultHandler

▪ `Static` `Protected` **defaultHandler**: `IHandler`

## Methods

### activate

▸ **activate**(`res`, `action`, `parameters`): `Promise`<[`IActionResult`](../interfaces/IActionResult.md)\>

Ask this agent to resolve an action.

#### Parameters

| Name | Type |
| :------ | :------ |
| `res` | [`ResourceType`](../modules.md#resourcetype) |
| `action` | [`ActionType`](../modules.md#actiontype) |
| `parameters` | [`IActionParameters`](../interfaces/IActionParameters.md) |

#### Returns

`Promise`<[`IActionResult`](../interfaces/IActionResult.md)\>

#### Implementation of

[IBusAgent](../interfaces/IBusAgent.md).[activate](../interfaces/IBusAgent.md#activate)

___

### getHandler

▸ `Protected` **getHandler**(`action`): `IHandler`

#### Parameters

| Name | Type |
| :------ | :------ |
| `action` | [`ActionType`](../modules.md#actiontype) |

#### Returns

`IHandler`

___

### initialize

▸ `Protected` **initialize**(): `void`

#### Returns

`void`

___

### registerHandlers

▸ `Protected` `Abstract` **registerHandlers**(): `void`

Override to register handlers for actions this agent support.

#### Returns

`void`

___

### setHandler

▸ `Protected` **setHandler**(`action`, `handler`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `action` | [`ActionType`](../modules.md#actiontype) |
| `handler` | `IHandler` |

#### Returns

`void`
