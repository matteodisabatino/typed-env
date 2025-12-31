import {
  isArray,
  isDate,
  isFunction,
  isNumber,
  isObject,
  isString
} from './check'

export const to = (value_: string, type_: string) => {
  const value = isString().check(value_)
  const type = isString().check(type_)
  const lType = isString().withGuard((k: string): k is keyof typeof fromLiteral => k in fromLiteral).check(type.toLowerCase())
  return fromLiteral[lType](value)
}

export const toArray = (value_: string) => {
  const value = isString().check(value_)
  try {
    const arr = JSON.parse(value)
    return isArray().check(arr)
  } catch {
    throw new SyntaxError(`Unable to convert "${value_}" to Array`)
  }
}

export const toBigInt = (value_: string) => {
  const value = isString().check(value_)
  try {
    return BigInt(value)
  } catch {
    throw new SyntaxError(`Unable to convert "${value_}" to BigInt`)
  }
}

export const toBigInt64Array = (value_: string) => {
  const value = isString().check(value_)
  try {
    const arr = toArray(value).map(x => BigInt(x as any))
    return BigInt64Array.of(...arr)
  } catch {
    throw new SyntaxError(`Unable to convert "${value_}" to BigInt64Array`)
  }
}

export const toBigUint64Array = (value_: string) => {
  const value = isString().check(value_)
  try {
    const arr = toArray(value).map(x => BigInt(x as any))
    return BigUint64Array.of(...arr)
  } catch {
    throw new SyntaxError(`Unable to convert "${value_}" to BigUint64Array`)
  }
}

export const toBoolean = (value_: string) => {
  const value = isString().check(value_)
  if (!/^(?:true|false)$/.test(value)) {
    throw new SyntaxError(`Unable to convert "${value_}" to Boolean`)
  }

  return value === 'true'
}

export const toDate = (value_: string) => {
  const value = isString().check(value_)
  try {
    let val: number | string
    try {
      val = toNumber(value)
    } catch {
      val = value
    }

    const date = new Date(val)
    return isDate().check(date)
  } catch {
    throw new SyntaxError(`Unable to convert "${value_}" to Date`)
  }
}

export const toFloat32Array = (value_: string) => {
  const value = isString().check(value_)
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

export const toFloat64Array = (value_: string) => {
  const value = isString().check(value_)
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

export const toFunction = (value_: string) => {
  const value = isString().check(value_)
  try {
    // eslint-disable-next-line
    const fn = eval(value)
    return isFunction().check(fn)
  } catch {
    throw new SyntaxError(`Unable to convert "${value_}" to Function`)
  }
}

export const toInt8Array = (value_: string) => {
  const value = isString().check(value_)
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

export const toInt16Array = (value_: string) => {
  const value = isString().check(value_)
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

export const toInt32Array = (value_: string) => {
  const value = isString().check(value_)
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

export const toMap = (value_: string) => {
  const value = isString().check(value_)
  try {
    const obj_ = JSON.parse(value)
    const obj = isObject({ allowAnyPrototype: true }).check(obj_)
    return new Map(Object.entries(obj))
  } catch {
    throw new SyntaxError(`Unable to convert "${value_}" to Map`)
  }
}

export const toNumber = (value_: string) => {
  const value = isString().check(value_)
  try {
    const num = Number(value)
    return isNumber({ allowNaN: false }).check(num)
  } catch {
    throw new SyntaxError(`Unable to convert "${value_}" to Number`)
  }
}

export const toObject = (value_: string) => {
  const value = isString().check(value_)
  try {
    const obj = JSON.parse(value)
    return isObject().check(obj)
  } catch {
    throw new SyntaxError(`Unable to convert "${value_}" to Object`)
  }
}

export const toRegExp = (value_: string) => {
  const value = isString().check(value_)
  try {
    return new RegExp(value)
  } catch {
    throw new SyntaxError(`Unable to convert "${value_}" to RegExp`)
  }
}

export const toSet = (value_: string) => {
  const value = isString().check(value_)
  try {
    const obj = toArray(value)
    return new Set(obj)
  } catch {
    throw new SyntaxError(`Unable to convert "${value_}" to Set`)
  }
}

export const toString = (value_: string) => {
  const value = isString().check(value_)
  // if value_ passes the check it is per sure a string, so the only thing to
  // do is to returning it
  return value
}

export const toSymbol = (value_: string) => {
  const value = isString().check(value_)
  // if value_ passes the check it is per sure a string, so the only thing to
  // do is to create a Symbol and returning it since is always possibile to
  // create a Symbol from String
  return Symbol(value)
}

export const toUint8Array = (value_: string) => {
  const value = isString().check(value_)
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

export const toUint8ClampedArray = (value_: string) => {
  const value = isString().check(value_)
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

export const toUint16Array = (value_: string) => {
  const value = isString().check(value_)
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

export const toUint32Array = (value_: string) => {
  const value = isString().check(value_)
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

export const fromLiteral = {
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
