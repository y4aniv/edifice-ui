[ode-ts-client](../README.md) / [Exports](../modules.md) / IBus

# Interface: IBus

## Table of contents

### Methods

- [getAgentFor](IBus.md#getagentfor)
- [publish](IBus.md#publish)
- [setAgentFor](IBus.md#setagentfor)
- [subscribe](IBus.md#subscribe)

## Methods

### getAgentFor

▸ **getAgentFor**(`res`, `action`): ``null`` \| [`IBusAgent`](IBusAgent.md)

Retrieve an agent able to resolve an action on a type of resource.

#### Parameters

| Name | Type |
| :------ | :------ |
| `res` | [`ResourceType`](../modules.md#resourcetype) |
| `action` | [`ActionType`](../modules.md#actiontype) |

#### Returns

``null`` \| [`IBusAgent`](IBusAgent.md)

___

### publish

▸ **publish**(`res`, `action`, `parameters`): `Promise`<[`IActionResult`](IActionResult.md)\>

Ask any agent on the bus to perform an action on a type of resource.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `res` | [`ResourceType`](../modules.md#resourcetype) | The type of resource in concern. |
| `action` | [`ActionType`](../modules.md#actiontype) | The action requested on the type of resource. |
| `parameters` | [`IActionParameters`](IActionParameters.md) | The [specific] parameters for the action. |

#### Returns

`Promise`<[`IActionResult`](IActionResult.md)\>

The result of the action from the agent.

___

### setAgentFor

▸ **setAgentFor**(`res`, `action`, `agent`): `void`

Register an agent able to resolve an action on a type of resource.

#### Parameters

| Name | Type |
| :------ | :------ |
| `res` | [`ResourceType`](../modules.md#resourcetype) |
| `action` | [`ActionType`](../modules.md#actiontype) |
| `agent` | [`IBusAgent`](IBusAgent.md) |

#### Returns

`void`

___

### subscribe

▸ **subscribe**(`res`, `action`): [`Observable`](../classes/RxJS.Observable.md)<{ `input`: [`IActionParameters`](IActionParameters.md) ; `output`: [`IActionResult`](IActionResult.md)  }\>

Subscribe to ActionResults any agent produces for a given ResourceType and ActionType.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `res` | [`ResourceType`](../modules.md#resourcetype) | The type of resource in concern. |
| `action` | [`ActionType`](../modules.md#actiontype) | The action in concern. |

#### Returns

[`Observable`](../classes/RxJS.Observable.md)<{ `input`: [`IActionParameters`](IActionParameters.md) ; `output`: [`IActionResult`](IActionResult.md)  }\>

A stream of {input:IActionParameters, output:IActionResult}
