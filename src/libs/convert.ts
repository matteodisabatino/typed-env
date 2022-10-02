'use strict'
import {
  isArray,
  isDate,
  isFunction,
  isNumber,
  isObject,
  isString
} from './check'

export const to = (value_: string, type_: string): any => {
  const value = isString().check(value_) as string
  const type = isString().check(type_) as string
  const lType = type.toLowerCase()
  if (!(lType in fromLiteral)) {
    throw new SyntaxError(`Unknown type "${type_}"`)
  }

  return fromLiteral[type](value)
}

export const toArray = (value_: string): any[] => {
  const value = isString().check(value_) as string
  try {
    const arr = JSON.parse(value)
    return isArray().check(arr) as any[]
  } catch {
    throw new SyntaxError(`Unable to convert "${value_}" to Array`)
  }
}

export const toBigInt = (value_: string): bigint => {
  const value = isString().check(value_) as string
  try {
    return BigInt(value)
  } catch {
    throw new SyntaxError(`Unable to convert "${value_}" to BigInt`)
  }
}

export const toBigInt64Array = (value_: string): BigInt64Array => {
  const value = isString().check(value_) as string
  try {
    const arr = toArray(value).map(BigInt)
    return BigInt64Array.of(...arr)
  } catch {
    throw new SyntaxError(`Unable to convert "${value_}" to BigInt64Array`)
  }
}

export const toBigUint64Array = (value_: string): BigUint64Array => {
  const value = isString().check(value_) as string
  try {
    const arr = toArray(value).map(BigInt)
    return BigUint64Array.of(...arr)
  } catch {
    throw new SyntaxError(`Unable to convert "${value_}" to BigUint64Array`)
  }
}

export const toBoolean = (value_: string): boolean => {
  const value = isString().check(value_) as string
  if (!/^(?:true|false)$/.test(value)) {
    throw new SyntaxError(`Unable to convert "${value_}" to Boolean`)
  }

  return value === 'true'
}

export const toDate = (value_: string): Date => {
  const value = isString().check(value_) as string
  try {
    let val: number | string
    try {
      val = toNumber(value)
    } catch {
      val = value
    }

    const date = new Date(val)
    return isDate().check(date) as Date
  } catch {
    throw new SyntaxError(`Unable to convert "${value_}" to Date`)
  }
}

export const toFloat32Array = (value_: string): Float32Array => {
  const value = isString().check(value_) as string
  try {
    const arr = toArray(value).map(Number)
    if (arr.some(isNaN)) {
      throw new TypeError('One or more values are invalid')
    }

    return Float32Array.of(...arr)
  } catch {
    throw new SyntaxError(`Unable to convert "${value_}" to Float32Array`)
  }
}

export const toFloat64Array = (value_: string): Float64Array => {
  const value = isString().check(value_) as string
  try {
    const arr = toArray(value).map(Number)
    if (arr.some(isNaN)) {
      throw new TypeError('One or more values are invalid')
    }

    return Float64Array.of(...arr)
  } catch {
    throw new SyntaxError(`Unable to convert "${value_}" to Float64Array`)
  }
}

export const toFunction = (value_: string): Function => {
  const value = isString().check(value_) as string
  try {
    const fn = eval(value)
    return isFunction().check(fn) as Function
  } catch {
    throw new SyntaxError(`Unable to convert "${value_}" to Function`)
  }
}

export const toInt8Array = (value_: string): Int8Array => {
  const value = isString().check(value_) as string
  try {
    const arr = toArray(value).map(Number)
    if (arr.some(isNaN)) {
      throw new TypeError('One or more values are invalid')
    }

    return Int8Array.of(...arr)
  } catch {
    throw new SyntaxError(`Unable to convert "${value_}" to Int8Array`)
  }
}

export const toInt16Array = (value_: string): Int16Array => {
  const value = isString().check(value_) as string
  try {
    const arr = toArray(value).map(Number)
    if (arr.some(isNaN)) {
      throw new TypeError('One or more values are invalid')
    }

    return Int16Array.of(...arr)
  } catch {
    throw new SyntaxError(`Unable to convert "${value_}" to Int16Array`)
  }
}

export const toInt32Array = (value_: string): Int32Array => {
  const value = isString().check(value_) as string
  try {
    const arr = toArray(value).map(Number)
    if (arr.some(isNaN)) {
      throw new TypeError('One or more values are invalid')
    }

    return Int32Array.of(...arr)
  } catch {
    throw new SyntaxError(`Unable to convert "${value_}" to Int32Array`)
  }
}

export const toMap = (value_: string): Map<string, unknown> => {
  const value = isString().check(value_) as string
  try {
    const obj_ = JSON.parse(value)
    const obj = isObject({ allowAnyPrototype: true }).check(obj_) as object
    return new Map(Object.entries(obj))
  } catch {
    throw new SyntaxError(`Unable to convert "${value_}" to Map`)
  }
}

export const toNumber = (value_: string): number => {
  const value = isString().check(value_) as string
  try {
    const num = Number(value)
    return isNumber({ allowNaN: false }).check(num) as number
  } catch {
    throw new SyntaxError(`Unable to convert "${value_}" to Number`)
  }
}

export const toObject = (value_: string): object => {
  const value = isString().check(value_) as string
  try {
    const obj = JSON.parse(value)
    return isObject().check(obj) as object
  } catch {
    throw new SyntaxError(`Unable to convert "${value_}" to Object`)
  }
}

export const toRegExp = (value_: string): RegExp => {
  const value = isString().check(value_) as string
  try {
    return new RegExp(value)
  } catch {
    throw new SyntaxError(`Unable to convert "${value_}" to RegExp`)
  }
}

export const toSet = (value_: string): Set<unknown> => {
  const value = isString().check(value_) as string
  try {
    const obj = toArray(value)
    return new Set(obj)
  } catch {
    throw new SyntaxError(`Unable to convert "${value_}" to Set`)
  }
}

export const toString = (value_: string): string => {
  const value = isString().check(value_) as string
  // if value_ passes the check it is per sure a string, so the only thing to
  // do is to returning it
  return value
}

export const toSymbol = (value_: string): Symbol => {
  const value = isString().check(value_) as string
  // if value_ passes the check it is per sure a string, so the only thing to
  // do is to create a Symbol and returning it since is always possibile to
  // create a Symbol from String
  return Symbol(value)
}

export const toUint8Array = (value_: string): Uint8Array => {
  const value = isString().check(value_) as string
  try {
    const arr = toArray(value).map(Number)
    if (arr.some(isNaN)) {
      throw new TypeError('One or more values are invalid')
    }

    return Uint8Array.of(...arr)
  } catch {
    throw new SyntaxError(`Unable to convert "${value_}" to Uint8Array`)
  }
}

export const toUint8ClampedArray = (value_: string): Uint8ClampedArray => {
  const value = isString().check(value_) as string
  try {
    const arr = toArray(value).map(Number)
    if (arr.some(isNaN)) {
      throw new TypeError('One or more values are invalid')
    }

    return Uint8ClampedArray.of(...arr)
  } catch {
    throw new SyntaxError(`Unable to convert "${value_}" to Uint8ClampedArray`)
  }
}

export const toUint16Array = (value_: string): Uint16Array => {
  const value = isString().check(value_) as string
  try {
    const arr = toArray(value).map(Number)
    if (arr.some(isNaN)) {
      throw new TypeError('One or more values are invalid')
    }

    return Uint16Array.of(...arr)
  } catch {
    throw new SyntaxError(`Unable to convert "${value_}" to Uint16Array`)
  }
}

export const toUint32Array = (value_: string): Uint32Array => {
  const value = isString().check(value_) as string
  try {
    const arr = toArray(value).map(Number)
    if (arr.some(isNaN)) {
      throw new TypeError('One or more values are invalid')
    }

    return Uint32Array.of(...arr)
  } catch {
    throw new SyntaxError(`Unable to convert "${value_}" to Uint32Array`)
  }
}

export const fromLiteral: { [type: string]: (value: string) => any } = {
  array: toArray,
  bigint: toBigInt,
  bigint64array: toBigInt64Array,
  biguint64array: toBigUint64Array,
  boolean: toBoolean,
  date: toDate,
  float32array: toFloat32Array,
  float64array: toFloat64Array,
  function: toFunction,
  int8array: toInt8Array,
  int16array: toInt16Array,
  int32array: toInt32Array,
  map: toMap,
  number: toNumber,
  object: toObject,
  regexp: toRegExp,
  set: toSet,
  string: toString,
  symbol: toSymbol,
  uint8array: toUint8Array,
  uint8clampedarray: toUint8ClampedArray,
  uint16array: toUint16Array,
  uint32array: toUint32Array
}
