[ode-ts-client](../README.md) / [Exports](../modules.md) / IHttp

# Interface: IHttp

## Table of contents

### Properties

- [latestResponse](ihttp.md#latestresponse)

### Methods

- [delete](ihttp.md#delete)
- [deleteJson](ihttp.md#deletejson)
- [get](ihttp.md#get)
- [getScript](ihttp.md#getscript)
- [loadScript](ihttp.md#loadscript)
- [post](ihttp.md#post)
- [postFile](ihttp.md#postfile)
- [postJson](ihttp.md#postjson)
- [put](ihttp.md#put)
- [putJson](ihttp.md#putjson)

## Properties

### latestResponse

• `Readonly` **latestResponse**: [*IHttpResponse*](../modules.md#ihttpresponse)

Latest available HTTP response, valid during your get|post|put...then() and catch() handlers.

## Methods

### delete

▸ **delete**<T, R\>(`url`: *string*, `params?`: [*IHttpParams*](../modules.md#ihttpparams)): *Promise*<R\>

HTTP DELETE

#### Type parameters:

Name | Default |
:------ | :------ |
`T` | *any* |
`R` | *any* |

#### Parameters:

Name | Type |
:------ | :------ |
`url` | *string* |
`params?` | [*IHttpParams*](../modules.md#ihttpparams) |

**Returns:** *Promise*<R\>

___

### deleteJson

▸ **deleteJson**<T, R\>(`url`: *string*, `json`: *any*): *Promise*<R\>

HTTP DELETE, Accept: application/json

#### Type parameters:

Name | Default |
:------ | :------ |
`T` | *any* |
`R` | *any* |

#### Parameters:

Name | Type |
:------ | :------ |
`url` | *string* |
`json` | *any* |

**Returns:** *Promise*<R\>

___

### get

▸ **get**<R\>(`url`: *string*, `params?`: [*IHttpParams*](../modules.md#ihttpparams)): *Promise*<R\>

HTTP GET Accept: application/json

#### Type parameters:

Name | Default |
:------ | :------ |
`R` | *any* |

#### Parameters:

Name | Type |
:------ | :------ |
`url` | *string* |
`params?` | [*IHttpParams*](../modules.md#ihttpparams) |

**Returns:** *Promise*<R\>

___

### getScript

▸ **getScript**<R\>(`url`: *string*, `params?`: [*IHttpParams*](../modules.md#ihttpparams), `exportedVariableName?`: *string*): *Promise*<R\>

HTTP GET, Accept: application/javascript

#### Type parameters:

Name | Default |
:------ | :------ |
`R` | *any* |

#### Parameters:

Name | Type |
:------ | :------ |
`url` | *string* |
`params?` | [*IHttpParams*](../modules.md#ihttpparams) |
`exportedVariableName?` | *string* |

**Returns:** *Promise*<R\>

___

### loadScript

▸ **loadScript**(`url`: *string*, `params?`: [*IHttpParams*](../modules.md#ihttpparams)): *Promise*<void\>

HTTP GET, Accept: application/javascript

#### Parameters:

Name | Type |
:------ | :------ |
`url` | *string* |
`params?` | [*IHttpParams*](../modules.md#ihttpparams) |

**Returns:** *Promise*<void\>

___

### post

▸ **post**<R\>(`url`: *string*, `data?`: *any*, `params?`: [*IHttpParams*](../modules.md#ihttpparams)): *Promise*<R\>

HTTP POST, Accept: application/json

#### Type parameters:

Name | Default |
:------ | :------ |
`R` | *any* |

#### Parameters:

Name | Type |
:------ | :------ |
`url` | *string* |
`data?` | *any* |
`params?` | [*IHttpParams*](../modules.md#ihttpparams) |

**Returns:** *Promise*<R\>

___

### postFile

▸ **postFile**<R\>(`url`: *string*, `data`: *any*, `params?`: [*IHttpParams*](../modules.md#ihttpparams)): *Promise*<R\>

HTTP POST

#### Type parameters:

Name | Default |
:------ | :------ |
`R` | *any* |

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`url` | *string* | - |
`data` | *any* | must be of one of the following types: string, plain object, ArrayBuffer, ArrayBufferView, URLSearchParams Browser only: FormData, File, Blob Node only: Stream, Buffer    |
`params?` | [*IHttpParams*](../modules.md#ihttpparams) | - |

**Returns:** *Promise*<R\>

___

### postJson

▸ **postJson**<T, R\>(`url`: *string*, `json`: *any*, `params?`: [*IHttpParams*](../modules.md#ihttpparams)): *Promise*<R\>

HTTP POST, Accept: application/json, Content-type: application/json

#### Type parameters:

Name | Default |
:------ | :------ |
`T` | *any* |
`R` | *any* |

#### Parameters:

Name | Type |
:------ | :------ |
`url` | *string* |
`json` | *any* |
`params?` | [*IHttpParams*](../modules.md#ihttpparams) |

**Returns:** *Promise*<R\>

___

### put

▸ **put**<T, R\>(`url`: *string*, `data?`: *any*, `params?`: [*IHttpParams*](../modules.md#ihttpparams)): *Promise*<R\>

HTTP PUT, Accept: application/json

#### Type parameters:

Name | Default |
:------ | :------ |
`T` | *any* |
`R` | *any* |

#### Parameters:

Name | Type |
:------ | :------ |
`url` | *string* |
`data?` | *any* |
`params?` | [*IHttpParams*](../modules.md#ihttpparams) |

**Returns:** *Promise*<R\>

___

### putJson

▸ **putJson**<T, R\>(`url`: *string*, `json`: *any*, `params?`: [*IHttpParams*](../modules.md#ihttpparams)): *Promise*<R\>

HTTP PUT, Accept: application/json, Content-type: application/json

#### Type parameters:

Name | Default |
:------ | :------ |
`T` | *any* |
`R` | *any* |

#### Parameters:

Name | Type |
:------ | :------ |
`url` | *string* |
`json` | *any* |
`params?` | [*IHttpParams*](../modules.md#ihttpparams) |

**Returns:** *Promise*<R\>
