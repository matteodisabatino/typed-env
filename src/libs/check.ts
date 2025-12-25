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

export const is = (value: unknown, type_: string, options_: Static<typeof CheckOptions> = {}) => {
  const type = isString().check(type_) as string
  const options = CheckOptions.check(options_)
  const lType = String.withGuard((k: string): k is keyof typeof fromLiteral => k in fromLiteral).check(type.toLowerCase())
  const runtype = fromLiteral[lType](options)
  return runtype.check(value)
}

export const isArray = (options_: Static<typeof CheckOptions> = {}) => {
  const options = CheckOptions.check(options_)
  const opts = { ...options }
  const { allowUndefined = false, of } = opts
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

  if (allowUndefined) {
    return Union(Array(arrayElements), Undefined)
  }

  return Array(arrayElements)
}

export const isBigInt = (options_: Static<typeof CheckOptions> = {}) => {
  const options = CheckOptions.check(options_)
  const opts = { ...options }
  const { allowUndefined = false } = opts
  const baseType = BigInt
  if (allowUndefined) {
    return Union(baseType, Undefined)
  }

  return baseType
}

export const isBigInt64Array = (options_: Static<typeof CheckOptions> = {}) => {
  const options = CheckOptions.check(options_)
  const opts = { ...options }
  const { allowUndefined = false } = opts
  const baseType = Unknown.withGuard((obj: unknown): obj is BigInt64Array => obj instanceof BigInt64Array)
  if (allowUndefined) {
    return Union(baseType, Undefined)
  }

  return baseType
}

export const isBigUint64Array = (options_: Static<typeof CheckOptions> = {}) => {
  const options = CheckOptions.check(options_)
  const opts = { ...options }
  const { allowUndefined = false } = opts
  const baseType = Unknown.withGuard((obj: unknown): obj is BigUint64Array => obj instanceof BigUint64Array)
  if (allowUndefined) {
    return Union(baseType, Undefined)
  }

  return baseType
}

export const isBoolean = (options_: Static<typeof CheckOptions> = {}) => {
  const options = CheckOptions.check(options_)
  const opts = { ...options }
  const { allowUndefined = false } = opts
  const baseType = Boolean
  if (allowUndefined) {
    return Union(baseType, Undefined)
  }

  return baseType
}

export const isDate = (options_: Static<typeof CheckOptions> = {}) => {
  const options = CheckOptions.check(options_)
  const opts = { ...options }
  const { allowUndefined = false } = opts
  const baseType = Unknown.withGuard((obj: unknown): obj is Date => !isNaN(new Date(obj as any).getTime()))
  if (allowUndefined) {
    return Union(baseType, Undefined)
  }

  return baseType
}

export const isFloat32Array = (options_: Static<typeof CheckOptions> = {}) => {
  const options = CheckOptions.check(options_)
  const opts = { ...options }
  const { allowUndefined = false } = opts
  const baseType = Unknown.withGuard((obj: unknown): obj is Float32Array => obj instanceof Float32Array)
  if (allowUndefined) {
    return Union(baseType, Undefined)
  }

  return baseType
}

export const isFloat64Array = (options_: Static<typeof CheckOptions> = {}) => {
  const options = CheckOptions.check(options_)
  const opts = { ...options }
  const { allowUndefined = false } = opts
  const baseType = Unknown.withGuard((obj: unknown): obj is Float64Array => obj instanceof Float64Array)
  if (allowUndefined) {
    return Union(baseType, Undefined)
  }

  return baseType
}

export const isFunction = (options_: Static<typeof CheckOptions> = {}) => {
  const options = CheckOptions.check(options_)
  const opts = { ...options }
  const { allowUndefined = false } = opts
  const baseType = Function
  if (allowUndefined) {
    return Union(baseType, Undefined)
  }

  return baseType
}

export const isInt8Array = (options_: Static<typeof CheckOptions> = {}) => {
  const options = CheckOptions.check(options_)
  const opts = { ...options }
  const { allowUndefined = false } = opts
  const baseType = Unknown.withGuard((obj: unknown): obj is Int8Array => obj instanceof Int8Array)
  if (allowUndefined) {
    return Union(baseType, Undefined)
  }

  return baseType
}

export const isInt16Array = (options_: Static<typeof CheckOptions> = {}) => {
  const options = CheckOptions.check(options_)
  const opts = { ...options }
  const { allowUndefined = false } = opts
  const baseType = Unknown.withGuard((obj: unknown): obj is Int16Array => obj instanceof Int16Array)
  if (allowUndefined) {
    return Union(baseType, Undefined)
  }

  return baseType
}

export const isInt32Array = (options_: Static<typeof CheckOptions> = {}) => {
  const options = CheckOptions.check(options_)
  const opts = { ...options }
  const { allowUndefined = false } = opts
  const baseType = Unknown.withGuard((obj: unknown): obj is Int32Array => obj instanceof Int32Array)
  if (allowUndefined) {
    return Union(baseType, Undefined)
  }

  return baseType
}

export const isMap = (options_: Static<typeof CheckOptions> = {}) => {
  const options = CheckOptions.check(options_)
  const opts = { ...options }
  const { allowUndefined = false } = opts
  const baseType = Unknown.withGuard((obj: unknown): obj is Map<unknown, unknown> => obj instanceof Map)
  if (allowUndefined) {
    return Union(baseType, Undefined)
  }

  return baseType
}

export const isNumber = (options_: Static<typeof CheckOptions> = {}) => {
  const options = CheckOptions.check(options_)
  const opts = { ...options }
  const { allowUndefined = false, allowNaN = true } = opts
  const baseType = Number
  if (allowUndefined && !allowNaN) {
    return Union(baseType.withConstraint((obj: unknown) => allowUndefined ? typeof obj === 'undefined' || !isNaN(obj as any) : !isNaN(obj as any)), Undefined)
  }

  if (allowUndefined) {
    return Union(baseType, Undefined)
  }

  if (!allowNaN) {
    return baseType.withConstraint((obj: unknown) => allowUndefined ? typeof obj === 'undefined' || !isNaN(obj as any) : !isNaN(obj as any))
  }

  return baseType
}

export const isObject = (options_: Static<typeof CheckOptions> = {}) => {
  const options = CheckOptions.check(options_)
  const opts = { ...options }
  const { allowUndefined = false, allowAnyPrototype = false } = opts
  const baseType = Unknown.withGuard((obj: unknown): obj is object => allowAnyPrototype ? typeof obj === 'object' : Object.prototype.toString.call(obj) === '[object Object]')
  if (allowUndefined) {
    return Union(baseType, Undefined)
  }

  return baseType
}

export const isRegExp = (options_: Static<typeof CheckOptions> = {}) => {
  const options = CheckOptions.check(options_)
  const opts = { ...options }
  const { allowUndefined = false } = opts
  const baseType = Unknown.withGuard((obj: unknown): obj is RegExp => obj instanceof RegExp)
  if (allowUndefined) {
    return Union(baseType, Undefined)
  }

  return baseType
}

export const isSet = (options_: Static<typeof CheckOptions> = {}) => {
  const options = CheckOptions.check(options_)
  const opts = { ...options }
  const { allowUndefined = false } = opts
  const baseType = Unknown.withGuard((obj: unknown): obj is Set<unknown> => obj instanceof Set)
  if (allowUndefined) {
    return Union(baseType, Undefined)
  }

  return baseType
}

export const isString = (options_: Static<typeof CheckOptions> = {}) => {
  const options = CheckOptions.check(options_)
  const opts = { ...options }
  const { allowUndefined = false } = opts
  const baseType = String
  if (allowUndefined) {
    return Union(baseType, Undefined)
  }

  return baseType
}

export const isSymbol = (options_: Static<typeof CheckOptions> = {}) => {
  const options = CheckOptions.check(options_)
  const opts = { ...options }
  const { allowUndefined = false } = opts
  const baseType = Symbol
  if (allowUndefined) {
    return Union(baseType, Undefined)
  }

  return baseType
}

export const isUint8Array = (options_: Static<typeof CheckOptions> = {}) => {
  const options = CheckOptions.check(options_)
  const opts = { ...options }
  const { allowUndefined = false } = opts
  const baseType = Unknown.withGuard((obj: unknown): obj is Uint8Array => obj instanceof Uint8Array)
  if (allowUndefined) {
    return Union(baseType, Undefined)
  }

  return baseType
}

export const isUint8ClampedArray = (options_: Static<typeof CheckOptions> = {}) => {
  const options = CheckOptions.check(options_)
  const opts = { ...options }
  const { allowUndefined = false } = opts
  const baseType = Unknown.withGuard((obj: unknown): obj is Uint8ClampedArray => obj instanceof Uint8ClampedArray)
  if (allowUndefined) {
    return Union(baseType, Undefined)
  }

  return baseType
}

export const isUint16Array = (options_: Static<typeof CheckOptions> = {}) => {
  const options = CheckOptions.check(options_)
  const opts = { ...options }
  const { allowUndefined = false } = opts
  const baseType = Unknown.withGuard((obj: unknown): obj is Uint16Array => obj instanceof Uint16Array)
  if (allowUndefined) {
    return Union(baseType, Undefined)
  }

  return baseType
}

export const isUint32Array = (options_: Static<typeof CheckOptions> = {}) => {
  const options = CheckOptions.check(options_)
  const opts = { ...options }
  const { allowUndefined = false } = opts
  const baseType = Unknown.withGuard((obj: unknown): obj is Uint32Array => obj instanceof Uint32Array)
  if (allowUndefined) {
    return Union(baseType, Undefined)
  }

  return baseType
}

export const fromLiteral = {
  array: isArray,
  bigint: isBigInt,
  bigint64array: isBigInt64Array,
  biguint64array: isBigUint64Array,
  boolean: isBoolean,
  date: isDate,
  float32array: isFloat32Array,
  float64array: isFloat64Array,
  function: isFunction,
  int8array: isInt8Array,
  int16array: isInt16Array,
  int32array: isInt32Array,
  map: isMap,
  number: isNumber,
  object: isObject,
  regexp: isRegExp,
  set: isSet,
  string: isString,
  symbol: isSymbol,
  uint8array: isUint8Array,
  uint8clampedarray: isUint8ClampedArray,
  uint16array: isUint16Array,
  uint32array: isUint32Array
}
