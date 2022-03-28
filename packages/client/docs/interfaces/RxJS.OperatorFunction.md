[ode-ts-client](../README.md) / [Exports](../modules.md) / [RxJS](../modules/RxJS.md) / OperatorFunction

# Interface: OperatorFunction<T, R\>

[RxJS](../modules/RxJS.md).OperatorFunction

## Type parameters

| Name |
| :------ |
| `T` |
| `R` |

## Hierarchy

- [`UnaryFunction`](RxJS.UnaryFunction.md)<[`Observable`](../classes/RxJS.Observable.md)<`T`\>, [`Observable`](../classes/RxJS.Observable.md)<`R`\>\>

  ↳ **`OperatorFunction`**

  ↳↳ [`MonoTypeOperatorFunction`](RxJS.MonoTypeOperatorFunction.md)

## Callable

### OperatorFunction

▸ **OperatorFunction**(`source`): [`Observable`](../classes/RxJS.Observable.md)<`R`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | [`Observable`](../classes/RxJS.Observable.md)<`T`\> |

#### Returns

[`Observable`](../classes/RxJS.Observable.md)<`R`\>
