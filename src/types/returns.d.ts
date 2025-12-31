import {
  Array,
  BigInt,
  Boolean,
  Constraint,
  Function,
  Literal,
  Never,
  Number,
  Runtype,
  type Static,
  String,
  Symbol,
  Union,
  Unknown
} from 'runtypes'

export type ArrayElementMap = {
  bigint: BigInt
  boolean: Boolean
  function: Function
  never: Never
  null: Literal<null>
  nullish: Union<[Literal<null>, Literal<undefined>]>
  number: Number
  string: String
  undefined: Literal<undefined>
  unknown: Unknown
}

type ArrayElement<O> =
  O extends { of: keyof ArrayElementMap }
    ? ArrayElementMap[O['of']]
    : ArrayElementMap['unknown']

export type IsReturnMap<O> = {
  array: Static<ArrayReturn<O>>
  bigint: Static<BigIntReturn<O>>
  bigint64array: Static<BigInt64ArrayReturn<O>>
  biguint64array: Static<BigUint64ArrayReturn<O>>
  boolean: Static<BooleanReturn<O>>
  date: Static<DateReturn<O>>
  float32array: Static<Float32ArrayReturn<O>>
  float64array: Static<Float64ArrayReturn<O>>
  function: Static<FunctionReturn<O>>
  int8array: Static<Int8ArrayReturn<O>>
  int16array: Static<Int16ArrayReturn<O>>
  int32array: Static<Int32ArrayReturn<O>>
  map: Static<MapReturn<O>>
  number: Static<NumberReturn<O>>
  object: Static<ObjectReturn<O>>
  regexp: Static<SetReturn<O>>
  set: Static<StringReturn<O>>
  string: Static<StringReturn<O>>
  symbol: Static<SymbolReturn<O>>
  uint8array: Static<Uint8ArrayReturn<O>>
  uint8clampedarray: Static<Uint8ClampedArrayReturn<O>>
  uint16array: Static<Uint16ArrayReturn<O>>
  uint32array: Static<Uint32ArrayReturn<O>>
}

type NumberType<O> =
  O extends { allowNaN: false }
    ? Constraint<Number, number>
    : Number

type WithAllowUndefined<O, T extends Runtype.Core<any, any>> =
  O extends { allowUndefined: true }
    ? Union<[T, Literal<undefined>]>
    : T

export type ArrayReturn<O> = WithAllowUndefined<O, Array<ArrayElement<O>>>
export type BigIntReturn<O> = WithAllowUndefined<O, BigInt>
export type BigInt64ArrayReturn<O> = WithAllowUndefined<O, Constraint<Unknown, BigInt64Array<ArrayBufferLike>>>
export type BigUint64ArrayReturn<O> = WithAllowUndefined<O, Constraint<Unknown, BigUint64Array<ArrayBufferLike>>>
export type BooleanReturn<O> = WithAllowUndefined<O, Boolean>
export type DateReturn<O> = WithAllowUndefined<O, Constraint<Unknown, Date>>
export type Float32ArrayReturn<O> = WithAllowUndefined<O, Constraint<Unknown, Float32Array<ArrayBufferLike>>>
export type Float64ArrayReturn<O> = WithAllowUndefined<O, Constraint<Unknown, Float64Array<ArrayBufferLike>>>
export type FunctionReturn<O> = WithAllowUndefined<O, Function>
export type Int8ArrayReturn<O> = WithAllowUndefined<O, Constraint<Unknown, Int8Array<ArrayBufferLike>>>
export type Int16ArrayReturn<O> = WithAllowUndefined<O, Constraint<Unknown, Int16Array<ArrayBufferLike>>>
export type Int32ArrayReturn<O> = WithAllowUndefined<O, Constraint<Unknown, Int32Array<ArrayBufferLike>>>
export type MapReturn<O> = WithAllowUndefined<O, Constraint<Unknown, Map<unknown, unknown>>>
export type NumberReturn<O> = WithAllowUndefined<O, NumberType<O>>
export type ObjectReturn<O> = WithAllowUndefined<O, Constraint<Unknown, object>>
export type RegExpReturn<O> = WithAllowUndefined<O, Constraint<Unknown, RegExp>>
export type SetReturn<O> = WithAllowUndefined<O, Constraint<Unknown, Set<unknown>>>
export type StringReturn<O> = WithAllowUndefined<O, String>
export type SymbolReturn<O> = WithAllowUndefined<O, Symbol>
export type Uint8ArrayReturn<O> = WithAllowUndefined<O, Constraint<Unknown, Uint8Array<ArrayBufferLike>>>
export type Uint8ClampedArrayReturn<O> = WithAllowUndefined<O, Constraint<Unknown, Uint8ClampedArray<ArrayBufferLike>>>
export type Uint16ArrayReturn<O> = WithAllowUndefined<O, Constraint<Unknown, Uint16Array<ArrayBufferLike>>>
export type Uint32ArrayReturn<O> = WithAllowUndefined<O, Constraint<Unknown, Uint32Array<ArrayBufferLike>>>
