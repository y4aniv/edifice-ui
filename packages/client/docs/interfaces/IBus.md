[ode-ts-client](../README.md) / [Exports](../modules.md) / IBus

# Interface: IBus

## Table of contents

### Methods

- [getAgentFor](ibus.md#getagentfor)
- [publish](ibus.md#publish)
- [setAgentFor](ibus.md#setagentfor)
- [subscribe](ibus.md#subscribe)

## Methods

### getAgentFor

▸ **getAgentFor**(`res`: [*ResourceType*](../modules.md#resourcetype), `action`: [*ActionType*](../modules.md#actiontype)): *null* \| [*IBusAgent*](ibusagent.md)

Retrieve an agent able to resolve an action on a type of resource.

#### Parameters:

Name | Type |
:------ | :------ |
`res` | [*ResourceType*](../modules.md#resourcetype) |
`action` | [*ActionType*](../modules.md#actiontype) |

**Returns:** *null* \| [*IBusAgent*](ibusagent.md)

___

### publish

▸ **publish**(`res`: [*ResourceType*](../modules.md#resourcetype), `action`: [*ActionType*](../modules.md#actiontype), `parameters`: [*IActionParameters*](iactionparameters.md)): *Promise*<[*IActionResult*](iactionresult.md)\>

Ask any agent on the bus to perform an action on a type of resource.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`res` | [*ResourceType*](../modules.md#resourcetype) | The type of resource in concern.   |
`action` | [*ActionType*](../modules.md#actiontype) | The action requested on the type of resource.   |
`parameters` | [*IActionParameters*](iactionparameters.md) | The [specific] parameters for the action.   |

**Returns:** *Promise*<[*IActionResult*](iactionresult.md)\>

The result of the action from the agent.

___

### setAgentFor

▸ **setAgentFor**(`res`: [*ResourceType*](../modules.md#resourcetype), `action`: [*ActionType*](../modules.md#actiontype), `agent`: [*IBusAgent*](ibusagent.md)): *void*

Register an agent able to resolve an action on a type of resource.

#### Parameters:

Name | Type |
:------ | :------ |
`res` | [*ResourceType*](../modules.md#resourcetype) |
`action` | [*ActionType*](../modules.md#actiontype) |
`agent` | [*IBusAgent*](ibusagent.md) |

**Returns:** *void*

___

### subscribe

▸ **subscribe**(`res`: [*ResourceType*](../modules.md#resourcetype), `action`: [*ActionType*](../modules.md#actiontype)): [*Observable*](../classes/rxjs.observable.md)<{ `input`: [*IActionParameters*](iactionparameters.md) ; `output`: [*IActionResult*](iactionresult.md)  }\>

Subscribe to ActionResults any agent produces for a given ResourceType and ActionType.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`res` | [*ResourceType*](../modules.md#resourcetype) | The type of resource in concern.   |
`action` | [*ActionType*](../modules.md#actiontype) | The action in concern.   |

**Returns:** [*Observable*](../classes/rxjs.observable.md)<{ `input`: [*IActionParameters*](iactionparameters.md) ; `output`: [*IActionResult*](iactionresult.md)  }\>

A stream of {input:IActionParameters, output:IActionResult}
