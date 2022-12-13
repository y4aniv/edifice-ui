[ode-ts-client](../README.md) / [Exports](../modules.md) / IBusAgent

# Interface: IBusAgent

## Table of contents

### Methods

- [activate](IBusAgent.md#activate)

## Methods

### activate

▸ **activate**(`res`, `action`, `parameters`): `Promise`<[`IActionResult`](IActionResult.md)\>

Ask this agent to resolve an action.

#### Parameters

| Name | Type |
| :------ | :------ |
| `res` | [`ResourceType`](../modules.md#resourcetype) |
| `action` | [`ActionType`](../modules.md#actiontype) |
| `parameters` | [`IActionParameters`](IActionParameters.md) |

#### Returns

`Promise`<[`IActionResult`](IActionResult.md)\>
