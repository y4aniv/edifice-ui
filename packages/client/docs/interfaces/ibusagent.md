[ode-ts-client](../README.md) / [Exports](../modules.md) / IBusAgent

# Interface: IBusAgent

## Implemented by

* [*AbstractBusAgent*](../classes/abstractbusagent.md)

## Table of contents

### Methods

- [activate](ibusagent.md#activate)

## Methods

### activate

▸ **activate**(`res`: [*ResourceType*](../modules.md#resourcetype), `action`: [*ActionType*](../modules.md#actiontype), `parameters`: [*IActionParameters*](iactionparameters.md)): *Promise*<[*IActionResult*](iactionresult.md)\>

Ask this agent to resolve an action.

#### Parameters:

Name | Type |
:------ | :------ |
`res` | [*ResourceType*](../modules.md#resourcetype) |
`action` | [*ActionType*](../modules.md#actiontype) |
`parameters` | [*IActionParameters*](iactionparameters.md) |

**Returns:** *Promise*<[*IActionResult*](iactionresult.md)\>
