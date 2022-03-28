[ode-ts-client](../README.md) / [Exports](../modules.md) / IExplorerFramework

# Interface: IExplorerFramework

Framework exploration capabilities offered to the client.

## Table of contents

### Methods

- [createContext](IExplorerFramework.md#createcontext)
- [getBus](IExplorerFramework.md#getbus)

## Methods

### createContext

▸ **createContext**(`types`, `app`): [`IExplorerContext`](IExplorerContext.md)

Create a new context to explore resources produced by an application.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `types` | [`ResourceType`](../modules.md#resourcetype)[] | Types of resource to be managed in this context. |
| `app` | [`App`](../modules.md#app) | Application which creates the new context. |

#### Returns

[`IExplorerContext`](IExplorerContext.md)

___

### getBus

▸ **getBus**(): [`IBus`](IBus.md)

Retrieve the underlying communication bus.

#### Returns

[`IBus`](IBus.md)
