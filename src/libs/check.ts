'use strict'
import {
  Array,
  BigInt,
  Boolean,
  Function,
  Guard,
  Never,
  Null,
  Nullish,
  Number,
  type Runtype,
  type Static,
  String,
  Symbol,
  Undefined,
  Unknown
} from 'runtypes'

import { CheckOptions } from './data_types'

export const is = (value: unknown, type_: string, options_: Static<typeof CheckOptions> = {}): any => {
  const type = isString().check(type_) as string
  const options = CheckOptions.check(options_)
  const lType = type.toLowerCase()
  if (!(lType in fromLiteral)) {
    throw new SyntaxError(`Unknown type "${type_}"`)
  }

  const runtype = fromLiteral[lType](options)
  return runtype.check(value)
}

export const isArray = (options_: Static<typeof CheckOptions> = {}): Runtype => {
  const options = CheckOptions.check(options_)
  const opts = { ...options }
  const { allowUndefined = false, of } = opts
  let arrayElements: Runtype
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

  let fn: Runtype = Array(arrayElements)
  if (allowUndefined) {
    fn = fn.Or(Undefined)
  }

  return fn
}

export const isBigInt = (options_: Static<typeof CheckOptions> = {}): Runtype => {
  const options = CheckOptions.check(options_)
  const opts = { ...options }
  const { allowUndefined = false } = opts
  let fn: Runtype = BigInt
  if (allowUndefined) {
    fn = fn.Or(Undefined)
  }

  return fn
}

export const isBigInt64Array = (options_: Static<typeof CheckOptions> = {}): Runtype => {
  const options = CheckOptions.check(options_)
  const opts = { ...options }
  const { allowUndefined = false } = opts
  let fn: Runtype = Guard((obj: unknown): obj is BigInt64Array => obj instanceof BigInt64Array)
  if (allowUndefined) {
    fn = fn.Or(Undefined)
  }

  return fn
}

export const isBigUint64Array = (options_: Static<typeof CheckOptions> = {}): Runtype => {
  const options = CheckOptions.check(options_)
  const opts = { ...options }
  const { allowUndefined = false } = opts
  let fn: Runtype = Guard((obj: unknown): obj is BigUint64Array => obj instanceof BigUint64Array)
  if (allowUndefined) {
    fn = fn.Or(Undefined)
  }

  return fn
}

export const isBoolean = (options_: Static<typeof CheckOptions> = {}): Runtype => {
  const options = CheckOptions.check(options_)
  const opts = { ...options }
  const { allowUndefined = false } = opts
  let fn: Runtype = Boolean
  if (allowUndefined) {
    fn = fn.Or(Undefined)
  }

  return fn
}

export const isDate = (options_: Static<typeof CheckOptions> = {}): Runtype => {
  const options = CheckOptions.check(options_)
  const opts = { ...options }
  const { allowUndefined = false } = opts
  let fn: Runtype = Guard((obj: unknown): obj is Date => !isNaN(new Date(obj as any).getTime()))
  if (allowUndefined) {
    fn = fn.Or(Undefined)
  }

  return fn
}

export const isFloat32Array = (options_: Static<typeof CheckOptions> = {}): Runtype => {
  const options = CheckOptions.check(options_)
  const opts = { ...options }
  const { allowUndefined = false } = opts
  let fn: Runtype = Guard((obj: unknown): obj is Float32Array => obj instanceof Float32Array)
  if (allowUndefined) {
    fn = fn.Or(Undefined)
  }

  return fn
}

export const isFloat64Array = (options_: Static<typeof CheckOptions> = {}): Runtype => {
  const options = CheckOptions.check(options_)
  const opts = { ...options }
  const { allowUndefined = false } = opts
  let fn: Runtype = Guard((obj: unknown): obj is Float64Array => obj instanceof Float64Array)
  if (allowUndefined) {
    fn = fn.Or(Undefined)
  }

  return fn
}

export const isFunction = (options_: Static<typeof CheckOptions> = {}): Runtype => {
  const options = CheckOptions.check(options_)
  const opts = { ...options }
  const { allowUndefined = false } = opts
  let fn: Runtype = Function
  if (allowUndefined) {
    fn = fn.Or(Undefined)
  }

  return fn
}

export const isInt8Array = (options_: Static<typeof CheckOptions> = {}): Runtype => {
  const options = CheckOptions.check(options_)
  const opts = { ...options }
  const { allowUndefined = false } = opts
  let fn: Runtype = Guard((obj: unknown): obj is Int8Array => obj instanceof Int8Array)
  if (allowUndefined) {
    fn = fn.Or(Undefined)
  }

  return fn
}

export const isInt16Array = (options_: Static<typeof CheckOptions> = {}): Runtype => {
  const options = CheckOptions.check(options_)
  const opts = { ...options }
  const { allowUndefined = false } = opts
  let fn: Runtype = Guard((obj: unknown): obj is Int16Array => obj instanceof Int16Array)
  if (allowUndefined) {
    fn = fn.Or(Undefined)
  }

  return fn
}

export const isInt32Array = (options_: Static<typeof CheckOptions> = {}): Runtype => {
  const options = CheckOptions.check(options_)
  const opts = { ...options }
  const { allowUndefined = false } = opts
  let fn: Runtype = Guard((obj: unknown): obj is Int32Array => obj instanceof Int32Array)
  if (allowUndefined) {
    fn = fn.Or(Undefined)
  }

  return fn
}

export const isMap = (options_: Static<typeof CheckOptions> = {}): Runtype => {
  const options = CheckOptions.check(options_)
  const opts = { ...options }
  const { allowUndefined = false } = opts
  let fn: Runtype = Guard((obj: unknown): obj is Map<unknown, unknown> => obj instanceof Map)
  if (allowUndefined) {
    fn = fn.Or(Undefined)
  }

  return fn
}

export const isNumber = (options_: Static<typeof CheckOptions> = {}): Runtype => {
  const options = CheckOptions.check(options_)
  const opts = { ...options }
  const { allowUndefined = false, allowNaN = true } = opts
  let fn: Runtype = Number
  if (allowUndefined) {
    fn = fn.Or(Undefined)
  }

  if (!allowNaN) {
    fn = fn.withConstraint((obj: unknown) => allowUndefined ? typeof obj === 'undefined' || !isNaN(obj as any) : !isNaN(obj as any))
  }

  return fn
}

export const isObject = (options_: Static<typeof CheckOptions> = {}): Runtype => {
  const options = CheckOptions.check(options_)
  const opts = { ...options }
  const { allowUndefined = false, allowAnyPrototype = false } = opts
  let fn: Runtype = Guard((obj: unknown): obj is object => allowAnyPrototype ? typeof obj === 'object' : Object.prototype.toString.call(obj) === '[object Object]')
  if (allowUndefined) {
    fn = fn.Or(Undefined)
  }

  return fn
}

export const isRegExp = (options_: Static<typeof CheckOptions> = {}): Runtype => {
  const options = CheckOptions.check(options_)
  const opts = { ...options }
  const { allowUndefined = false } = opts
  let fn: Runtype = Guard((obj: unknown): obj is RegExp => obj instanceof RegExp)
  if (allowUndefined) {
    fn = fn.Or(Undefined)
  }

  return fn
}

export const isSet = (options_: Static<typeof CheckOptions> = {}): Runtype => {
  const options = CheckOptions.check(options_)
  const opts = { ...options }
  const { allowUndefined = false } = opts
  let fn: Runtype = Guard((obj: unknown): obj is Set<unknown> => obj instanceof Set)
  if (allowUndefined) {
    fn = fn.Or(Undefined)
  }

  return fn
}

export const isString = (options_: Static<typeof CheckOptions> = {}): Runtype => {
  const options = CheckOptions.check(options_)
  const opts = { ...options }
  const { allowUndefined = false } = opts
  let fn: Runtype = String
  if (allowUndefined) {
    fn = fn.Or(Undefined)
  }

  return fn
}

export const isSymbol = (options_: Static<typeof CheckOptions> = {}): Runtype => {
  const options = CheckOptions.check(options_)
  const opts = { ...options }
  const { allowUndefined = false } = opts
  let fn: Runtype = Symbol
  if (allowUndefined) {
    fn = fn.Or(Undefined)
  }

  return fn
}

export const isUint8Array = (options_: Static<typeof CheckOptions> = {}): Runtype => {
  const options = CheckOptions.check(options_)
  const opts = { ...options }
  const { allowUndefined = false } = opts
  let fn: Runtype = Guard((obj: unknown): obj is Uint8Array => obj instanceof Uint8Array)
  if (allowUndefined) {
    fn = fn.Or(Undefined)
  }

  return fn
}

export const isUint8ClampedArray = (options_: Static<typeof CheckOptions> = {}): Runtype => {
  const options = CheckOptions.check(options_)
  const opts = { ...options }
  const { allowUndefined = false } = opts
  let fn: Runtype = Guard((obj: unknown): obj is Uint8ClampedArray => obj instanceof Uint8ClampedArray)
  if (allowUndefined) {
    fn = fn.Or(Undefined)
  }

  return fn
}

export const isUint16Array = (options_: Static<typeof CheckOptions> = {}): Runtype => {
  const options = CheckOptions.check(options_)
  const opts = { ...options }
  const { allowUndefined = false } = opts
  let fn: Runtype = Guard((obj: unknown): obj is Uint16Array => obj instanceof Uint16Array)
  if (allowUndefined) {
    fn = fn.Or(Undefined)
  }

  return fn
}

export const isUint32Array = (options_: Static<typeof CheckOptions> = {}): Runtype => {
  const options = CheckOptions.check(options_)
  const opts = { ...options }
  const { allowUndefined = false } = opts
  let fn: Runtype = Guard((obj: unknown): obj is Uint32Array => obj instanceof Uint32Array)
  if (allowUndefined) {
    fn = fn.Or(Undefined)
  }

  return fn
}

export const fromLiteral: Record<string, (options: Static<typeof CheckOptions>) => Runtype> = {
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
