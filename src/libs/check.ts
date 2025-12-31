import {
  Array,
  BigInt,
  Boolean,
  Function,
  Never,
  Null,
  Nullish,
  Number,
  type Static,
  String,
  Symbol,
  Undefined,
  Union,
  Unknown
} from 'runtypes'

import { CheckOptions } from './data_types'

import type * as returnTypes from '../types/returns'

export const is = <O extends { allowUndefined?: boolean, allowNaN?: boolean, allowAnyPrototype?: boolean, of?: keyof returnTypes.ArrayElementMap }, T extends keyof returnTypes.IsReturnMap<O>>(value: unknown, type_: T, options_: O & Static<typeof CheckOptions> = {} as O & Static<typeof CheckOptions>): returnTypes.IsReturnMap<O>[T] => {
  const type = isString().check(type_)
  const options = CheckOptions.check(options_)
  const lType = type.toLowerCase()

  let checker
  if (lType === 'array') {
    checker = isArray({ allowUndefined: options.allowUndefined, of: options.of as keyof returnTypes.ArrayElementMap | undefined })
  } else if (lType === 'bigint') {
    checker = isBigInt(options)
  } else if (lType === 'bigint64array') {
    checker = isBigInt64Array(options)
  } else if (lType === 'biguint64array') {
    checker = isBigUint64Array(options)
  } else if (lType === 'boolean') {
    checker = isBoolean(options)
  } else if (lType === 'date') {
    checker = isDate(options)
  } else if (lType === 'float32array') {
    checker = isFloat32Array(options)
  } else if (lType === 'float64array') {
    checker = isFloat64Array(options)
  } else if (lType === 'function') {
    checker = isFunction(options)
  } else if (lType === 'int8array') {
    checker = isInt8Array(options)
  } else if (lType === 'int16array') {
    checker = isInt16Array(options)
  } else if (lType === 'int32array') {
    checker = isInt32Array(options)
  } else if (lType === 'map') {
    checker = isMap(options)
  } else if (lType === 'number') {
    checker = isNumber(options)
  } else if (lType === 'object') {
    checker = isObject(options)
  } else if (lType === 'regexp') {
    checker = isRegExp(options)
  } else if (lType === 'set') {
    checker = isSet(options)
  } else if (lType === 'string') {
    checker = isString(options)
  } else if (lType === 'symbol') {
    checker = isSymbol(options)
  } else if (lType === 'uint8array') {
    checker = isUint8Array(options)
  } else if (lType === 'uint8clampedarray') {
    checker = isUint8ClampedArray(options)
  } else if (lType === 'uint16array') {
    checker = isUint16Array(options)
  } else if (lType === 'uint32array') {
    checker = isUint32Array(options)
  } else {
    throw new SyntaxError(`Unknown type "${type_}"`)
  }

  return checker.check(value as any) as returnTypes.IsReturnMap<O>[T]
}

export const isArray = <O extends { allowUndefined?: boolean, of?: keyof returnTypes.ArrayElementMap }>(options_: O & Static<typeof CheckOptions> = {} as O & Static<typeof CheckOptions>): returnTypes.ArrayReturn<O> => {
  const options = CheckOptions.check(options_)
  const { allowUndefined = false, of } = options
  let arrayElements
  if (of === 'bigint') {
    arrayElements = BigInt
  } else if (of === 'boolean') {
    arrayElements = Boolean
  } else if (of === 'function') {
    arrayElements = Function
  } else if (of === 'never') {
    arrayElements = Never
  } else if (of === 'null') {
    arrayElements = Null
  } else if (of === 'nullish') {
    arrayElements = Nullish
  } else if (of === 'number') {
    arrayElements = Number
  } else if (of === 'string') {
    arrayElements = String
  } else if (of === 'undefined') {
    arrayElements = Undefined
  } else {
    arrayElements = Unknown
  }

  return (
    allowUndefined
      ? Union(Array(arrayElements), Undefined)
      : Array(arrayElements)
  ) as unknown as returnTypes.ArrayReturn<O>
}

export const isBigInt = <O extends { allowUndefined?: boolean }>(options_: O & Static<typeof CheckOptions> = {} as O & Static<typeof CheckOptions>): returnTypes.BigIntReturn<O> => {
  const options = CheckOptions.check(options_)
  const { allowUndefined = false } = options
  return (
    allowUndefined
      ? Union(BigInt, Undefined)
      : BigInt
  ) as returnTypes.BigIntReturn<O>
}

export const isBigInt64Array = <O extends { allowUndefined?: boolean }>(options_: O & Static<typeof CheckOptions> = {} as O & Static<typeof CheckOptions>): returnTypes.BigInt64ArrayReturn<O> => {
  const options = CheckOptions.check(options_)
  const { allowUndefined = false } = options
  const neededType = Unknown.withGuard((obj: unknown): obj is BigInt64Array => obj instanceof BigInt64Array)
  return (
    allowUndefined
      ? Union(neededType, Undefined)
      : neededType
  ) as returnTypes.BigInt64ArrayReturn<O>
}

export const isBigUint64Array = <O extends { allowUndefined?: boolean }>(options_: O & Static<typeof CheckOptions> = {} as O & Static<typeof CheckOptions>): returnTypes.BigUint64ArrayReturn<O> => {
  const options = CheckOptions.check(options_)
  const { allowUndefined = false } = options
  const neededType = Unknown.withGuard((obj: unknown): obj is BigUint64Array => obj instanceof BigUint64Array)
  return (
    allowUndefined
      ? Union(neededType, Undefined)
      : neededType
  ) as returnTypes.BigUint64ArrayReturn<O>
}

export const isBoolean = <O extends { allowUndefined?: boolean }>(options_: O & Static<typeof CheckOptions> = {} as O & Static<typeof CheckOptions>): returnTypes.BooleanReturn<O> => {
  const options = CheckOptions.check(options_)
  const { allowUndefined = false } = options
  return (
    allowUndefined
      ? Union(Boolean, Undefined)
      : Boolean
  ) as returnTypes.BooleanReturn<O>
}

export const isDate = <O extends { allowUndefined?: boolean }>(options_: O & Static<typeof CheckOptions> = {} as O & Static<typeof CheckOptions>): returnTypes.DateReturn<O> => {
  const options = CheckOptions.check(options_)
  const { allowUndefined = false } = options
  const neededType = Unknown.withGuard((obj: unknown): obj is Date => !isNaN(new Date(obj as any).getTime()))
  return (
    allowUndefined
      ? Union(neededType, Undefined)
      : neededType
  ) as returnTypes.DateReturn<O>
}

export const isFloat32Array = <O extends { allowUndefined?: boolean }>(options_: O & Static<typeof CheckOptions> = {} as O & Static<typeof CheckOptions>): returnTypes.Float32ArrayReturn<O> => {
  const options = CheckOptions.check(options_)
  const { allowUndefined = false } = options
  const neededType = Unknown.withGuard((obj: unknown): obj is Float32Array => obj instanceof Float32Array)
  return (
    allowUndefined
      ? Union(neededType, Undefined)
      : neededType
  ) as returnTypes.Float32ArrayReturn<O>
}

export const isFloat64Array = <O extends { allowUndefined?: boolean }>(options_: O & Static<typeof CheckOptions> = {} as O & Static<typeof CheckOptions>): returnTypes.Float64ArrayReturn<O> => {
  const options = CheckOptions.check(options_)
  const { allowUndefined = false } = options
  const neededType = Unknown.withGuard((obj: unknown): obj is Float64Array => obj instanceof Float64Array)
  return (
    allowUndefined
      ? Union(neededType, Undefined)
      : neededType
  ) as returnTypes.Float64ArrayReturn<O>
}

export const isFunction = <O extends { allowUndefined?: boolean }>(options_: O & Static<typeof CheckOptions> = {} as O & Static<typeof CheckOptions>): returnTypes.FunctionReturn<O> => {
  const options = CheckOptions.check(options_)
  const { allowUndefined = false } = options
  return (
    allowUndefined
      ? Union(Function, Undefined)
      : Function
  ) as returnTypes.FunctionReturn<O>
}

export const isInt8Array = <O extends { allowUndefined?: boolean }>(options_: O & Static<typeof CheckOptions> = {} as O & Static<typeof CheckOptions>): returnTypes.Int8ArrayReturn<O> => {
  const options = CheckOptions.check(options_)
  const { allowUndefined = false } = options
  const neededType = Unknown.withGuard((obj: unknown): obj is Int8Array => obj instanceof Int8Array)
  return (
    allowUndefined
      ? Union(neededType, Undefined)
      : neededType
  ) as returnTypes.Int8ArrayReturn<O>
}

export const isInt16Array = <O extends { allowUndefined?: boolean }>(options_: O & Static<typeof CheckOptions> = {} as O & Static<typeof CheckOptions>): returnTypes.Int16ArrayReturn<O> => {
  const options = CheckOptions.check(options_)
  const { allowUndefined = false } = options
  const neededType = Unknown.withGuard((obj: unknown): obj is Int16Array => obj instanceof Int16Array)
  return (
    allowUndefined
      ? Union(neededType, Undefined)
      : neededType
  ) as returnTypes.Int16ArrayReturn<O>
}

export const isInt32Array = <O extends { allowUndefined?: boolean }>(options_: O & Static<typeof CheckOptions> = {} as O & Static<typeof CheckOptions>): returnTypes.Int32ArrayReturn<O> => {
  const options = CheckOptions.check(options_)
  const { allowUndefined = false } = options
  const neededType = Unknown.withGuard((obj: unknown): obj is Int32Array => obj instanceof Int32Array)
  return (
    allowUndefined
      ? Union(neededType, Undefined)
      : neededType
  ) as returnTypes.Int32ArrayReturn<O>
}

export const isMap = <O extends { allowUndefined?: boolean }>(options_: O & Static<typeof CheckOptions> = {} as O & Static<typeof CheckOptions>): returnTypes.MapReturn<O> => {
  const options = CheckOptions.check(options_)
  const { allowUndefined = false } = options
  const neededType = Unknown.withGuard((obj: unknown): obj is Map<unknown, unknown> => obj instanceof Map)
  return (
    allowUndefined
      ? Union(neededType, Undefined)
      : neededType
  ) as returnTypes.MapReturn<O>
}

export const isNumber = <O extends { allowUndefined?: boolean, allowNaN?: boolean }>(options_: O & Static<typeof CheckOptions> = {} as O & Static<typeof CheckOptions>): returnTypes.NumberReturn<O> => {
  const options = CheckOptions.check(options_)
  const { allowUndefined = false, allowNaN = true } = options
  const neededType = allowNaN
    ? Number
    : Number.withConstraint((obj: number) => !isNaN(obj))

  return (
    allowUndefined
      ? Union(neededType, Undefined)
      : neededType
  ) as returnTypes.NumberReturn<O>
}

export const isObject = <O extends { allowUndefined?: boolean, allowAnyPrototype?: boolean }>(options_: O & Static<typeof CheckOptions> = {} as O & Static<typeof CheckOptions>): returnTypes.ObjectReturn<O> => {
  const options = CheckOptions.check(options_)
  const { allowUndefined = false, allowAnyPrototype = false } = options
  const neededType = Unknown.withGuard((obj: unknown): obj is object =>
    allowAnyPrototype
      ? typeof obj === 'object'
      : Object.prototype.toString.call(obj) === '[object Object]'
  )

  return (
    allowUndefined
      ? Union(neededType, Undefined)
      : neededType
  ) as returnTypes.ObjectReturn<O>
}

export const isRegExp = <O extends { allowUndefined?: boolean }>(options_: O & Static<typeof CheckOptions> = {} as O & Static<typeof CheckOptions>): returnTypes.RegExpReturn<O> => {
  const options = CheckOptions.check(options_)
  const { allowUndefined = false } = options
  const neededType = Unknown.withGuard((obj: unknown): obj is RegExp => obj instanceof RegExp)
  return (
    allowUndefined
      ? Union(neededType, Undefined)
      : neededType
  ) as returnTypes.RegExpReturn<O>
}

export const isSet = <O extends { allowUndefined?: boolean }>(options_: O & Static<typeof CheckOptions> = {} as O & Static<typeof CheckOptions>): returnTypes.SetReturn<O> => {
  const options = CheckOptions.check(options_)
  const { allowUndefined = false } = options
  const neededType = Unknown.withGuard((obj: unknown): obj is Set<unknown> => obj instanceof Set)
  return (
    allowUndefined
      ? Union(neededType, Undefined)
      : neededType
  ) as returnTypes.SetReturn<O>
}

export const isString = <O extends { allowUndefined?: boolean }>(options_: O & Static<typeof CheckOptions> = {} as O & Static<typeof CheckOptions>): returnTypes.StringReturn<O> => {
  const options = CheckOptions.check(options_)
  const { allowUndefined = false } = options
  return (
    allowUndefined
      ? Union(String, Undefined)
      : String
  ) as returnTypes.StringReturn<O>
}

export const isSymbol = <O extends { allowUndefined?: boolean }>(options_: O & Static<typeof CheckOptions> = {} as O & Static<typeof CheckOptions>): returnTypes.SymbolReturn<O> => {
  const options = CheckOptions.check(options_)
  const { allowUndefined = false } = options
  return (
    allowUndefined
      ? Union(Symbol, Undefined)
      : Symbol
  ) as returnTypes.SymbolReturn<O>
}

export const isUint8Array = <O extends { allowUndefined?: boolean }>(options_: O & Static<typeof CheckOptions> = {} as O & Static<typeof CheckOptions>): returnTypes.Uint8ArrayReturn<O> => {
  const options = CheckOptions.check(options_)
  const { allowUndefined = false } = options
  const neededType = Unknown.withGuard((obj: unknown): obj is Uint8Array => obj instanceof Uint8Array)
  return (
    allowUndefined
      ? Union(neededType, Undefined)
      : neededType
  ) as returnTypes.Uint8ArrayReturn<O>
}
export const isUint8ClampedArray = <O extends { allowUndefined?: boolean }>(options_: O & Static<typeof CheckOptions> = {} as O & Static<typeof CheckOptions>): returnTypes.Uint8ClampedArrayReturn<O> => {
  const options = CheckOptions.check(options_)
  const { allowUndefined = false } = options
  const neededType = Unknown.withGuard((obj: unknown): obj is Uint8ClampedArray => obj instanceof Uint8ClampedArray)
  return (
    allowUndefined
      ? Union(neededType, Undefined)
      : neededType
  ) as returnTypes.Uint8ClampedArrayReturn<O>
}

export const isUint16Array = <O extends { allowUndefined?: boolean }>(options_: O & Static<typeof CheckOptions> = {} as O & Static<typeof CheckOptions>): returnTypes.Uint16ArrayReturn<O> => {
  const options = CheckOptions.check(options_)
  const { allowUndefined = false } = options
  const neededType = Unknown.withGuard((obj: unknown): obj is Uint16Array => obj instanceof Uint16Array)
  return (
    allowUndefined
      ? Union(neededType, Undefined)
      : neededType
  ) as returnTypes.Uint16ArrayReturn<O>
}

export const isUint32Array = <O extends { allowUndefined?: boolean }>(options_: O & Static<typeof CheckOptions> = {} as O & Static<typeof CheckOptions>): returnTypes.Uint32ArrayReturn<O> => {
  const options = CheckOptions.check(options_)
  const { allowUndefined = false } = options
  const neededType = Unknown.withGuard((obj: unknown): obj is Uint32Array => obj instanceof Uint32Array)
  return (
    allowUndefined
      ? Union(neededType, Undefined)
      : neededType
  ) as returnTypes.Uint32ArrayReturn<O>
}
