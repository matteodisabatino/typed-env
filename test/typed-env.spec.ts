import test from 'node:test'
import assert from 'node:assert/strict'

import manifest from '../package.json'
import { TypedEnv } from '../src/index'

const env = new TypedEnv()

test('Should return the version', () => {
  assert.equal(TypedEnv.version, manifest.version)
})

test('Should return undefined', () => {
  const toUndefined = env.get('NOT_EXISTS')
  assert.equal(toUndefined, undefined)
})

test('Should convert to Array', () => {
  const toArray = env.get('TO_ARRAY', 'array')
  assert.ok(Array.isArray(toArray))
  assert.equal(toArray.length, 2)
  assert.equal(toArray[0], 10)
  assert.equal(toArray[1], 20)
})

test('Should convert to BigInt', () => {
  const toBigInt = env.get('TO_BIG_INT', 'bigint')
  assert.ok(typeof toBigInt === 'bigint')
  assert.equal(toBigInt, BigInt(42))
})

test('Should convert to BigInt64Array', () => {
  const v = env.get('TO_BIG_INT_64_ARRAY', 'bigint64array')
  assert.ok(v instanceof BigInt64Array)
  assert.equal(v.length, 2)
  assert.equal(v[0], BigInt(22))
  assert.equal(v[1], BigInt(33))
})

test('Should convert to BigUint64Array', () => {
  const v = env.get('TO_BIG_UINT_64_ARRAY', 'biguint64array')
  assert.ok(v instanceof BigUint64Array)
  assert.equal(v.length, 2)
  assert.equal(v[0], BigInt(88))
  assert.equal(v[1], BigInt(99))
})

test('Should convert to Boolean', () => {
  const v = env.get('TO_BOOLEAN', 'boolean')
  assert.ok(typeof v === 'boolean')
  assert.equal(v, false)
})

test('Should convert to Date (from Number)', () => {
  const v = env.get('TO_DATE_FROM_NUMBER', 'date')
  assert.ok(v instanceof Date)
  assert.equal(v.toISOString(), '2021-12-31T23:00:00.000Z')
})

test('Should convert to Date (from String)', () => {
  const v = env.get('TO_DATE_FROM_STRING', 'date')
  assert.ok(v instanceof Date)
  assert.equal(v.getTime(), 946681200000)
})

test('Should convert to Float32Array', () => {
  const v = env.get('TO_FLOAT_32_ARRAY', 'float32array')
  assert.ok(v instanceof Float32Array)
  assert.equal(v.length, 2)
  assert.equal(v[0], 12.5)
  assert.equal(v[1], 77)
})

test('Should convert to Float64Array', () => {
  const v = env.get('TO_FLOAT_64_ARRAY', 'float64array')
  assert.ok(v instanceof Float64Array)
  assert.equal(v.length, 2)
  assert.equal(v[0], 22.3)
  assert.equal(v[1], 47.22)
})

test('Should convert to Function', () => {
  const fn = env.get('TO_FUNCTION', 'function')
  assert.ok(typeof fn === 'function')
  assert.equal(fn(8), 64)
})

test('Should convert to Int8Array', () => {
  const v = env.get('TO_INT_8_ARRAY', 'int8array')
  assert.ok(v instanceof Int8Array)
  assert.equal(v.length, 2)
  assert.equal(v[0], 8)
  assert.equal(v[1], 32)
})

test('Should convert to Int16Array', () => {
  const v = env.get('TO_INT_16_ARRAY', 'int16array')
  assert.ok(v instanceof Int16Array)
  assert.equal(v.length, 2)
  assert.equal(v[0], 64)
  assert.equal(v[1], 128)
})

test('Should convert to Int32Array', () => {
  const v = env.get('TO_INT_32_ARRAY', 'int32array')
  assert.ok(v instanceof Int32Array)
  assert.equal(v.length, 2)
  assert.equal(v[0], 1024)
  assert.equal(v[1], 3912)
})

test('Should convert to Map', () => {
  const v = env.get('TO_MAP', 'map')
  assert.ok(v instanceof Map)
  const keys = [...v.keys()]
  assert.equal(keys.length, 1)
  assert.equal(v.get('hello'), 'world')
})

test('Should convert to Number', () => {
  const v = env.get('TO_NUMBER', 'number')
  assert.ok(typeof v === 'number')
  assert.equal(v, 5)
})

test('Should convert to Object', () => {
  const v = env.get('TO_OBJECT', 'object')
  assert.equal(Object.prototype.toString.call(v), '[object Object]')
  assert.deepEqual(v, { key: 'value' })
})

test('Should convert to RegExp', () => {
  const v = env.get('TO_REG_EXP', 'regexp')
  assert.ok(v instanceof RegExp)
  assert.equal(v.toString(), '/^hello$/')
})

test('Should convert to Set', () => {
  const v = env.get('TO_SET', 'set')
  assert.ok(v instanceof Set)
  assert.equal(v.size, 2)
  assert.ok(v.has(30))
  assert.ok(v.has(50))
})

test('Should convert to String', () => {
  const v = env.get('TO_STRING', 'string')
  assert.ok(typeof v === 'string')
  assert.equal(v, 'test')
})

test('Should convert to Symbol', () => {
  const v = env.get('TO_SYMBOL', 'symbol')
  assert.ok(typeof v === 'symbol')
  assert.equal(v.toString(), 'Symbol(foo)')
})

test('Should convert to Uint8Array', () => {
  const v = env.get('TO_UINT_8_ARRAY', 'uint8array')
  assert.ok(v instanceof Uint8Array)
  assert.equal(v.length, 2)
  assert.equal(v[0], 10)
  assert.equal(v[1], 20)
})

test('Should convert to Uint8ClampedArray', () => {
  const v = env.get('TO_UINT_8_CLAMPED_ARRAY', 'uint8clampedarray')
  assert.ok(v instanceof Uint8ClampedArray)
  assert.equal(v.length, 2)
  assert.equal(v[0], 50)
  assert.equal(v[1], 55)
})

test('Should convert to Uint16Array', () => {
  const v = env.get('TO_UINT_16_ARRAY', 'uint16array')
  assert.ok(v instanceof Uint16Array)
  assert.equal(v.length, 2)
  assert.equal(v[0], 250)
  assert.equal(v[1], 450)
})

test('Should convert to Uint32Array', () => {
  const v = env.get('TO_UINT_32_ARRAY', 'uint32array')
  assert.ok(v instanceof Uint32Array)
  assert.equal(v.length, 2)
  assert.equal(v[0], 1200)
  assert.equal(v[1], 3400)
})

test('Should throw an exception because of unknown conversion type', () => {
  assert.throws(
    () => env.get('TO_STRING', 'wrongType'),
    { name: 'SyntaxError', message: 'Unknown type "wrongType"' }
  )
})

test('Should check key exists', () => {
  assert.equal(env.has('TO_STRING'), true)
})

test("Should check key doesn't exist", () => {
  assert.equal(env.has('NOT_EXISTS'), false)
})

test('Should return TO_NUMBER since is the first existing key', () => {
  const v = env.first(['NOT_EXISTS', 'TO_NUMBER', 'TO_STRING'])
  assert.equal(v, '5')
})

test('Should return default value since no key exists', () => {
  const v = env.first(['NOT_EXISTS', 'NOT_EXISTS_2'], 'number', 10)
  assert.equal(v, 10)
})

test('Should throw if required env is missing', () => {
  assert.throws(
    () => {
      // eslint-disable-next-line
      const { TO_BIG_INT_NOT_EXISTS } = env.required
    },
    {
      name: 'EnvKeyNotFoundError',
      message: "Required environment variable 'TO_BIG_INT_NOT_EXISTS' not found."
    }
  )
})
