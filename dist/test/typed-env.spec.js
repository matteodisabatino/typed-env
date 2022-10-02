'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = __importDefault(require("ava"));
const package_json_1 = __importDefault(require("../package.json"));
const index_1 = require("../src/index");
const env = new index_1.TypedEnv();
(0, ava_1.default)('Should return the version', t => {
    t.is(index_1.TypedEnv.version, package_json_1.default.version);
});
(0, ava_1.default)('Should return undefined', t => {
    const toUndefined = env.get('NOT_EXISTS');
    t.is(toUndefined, undefined);
});
(0, ava_1.default)('Should convert to Array', t => {
    const toArray = env.get('TO_ARRAY', 'array');
    t.is(Array.isArray(toArray), true);
    t.is(toArray.length, 2);
    t.is(toArray[0], 10);
    t.is(toArray[1], 20);
});
(0, ava_1.default)('Should convert to BigInt', t => {
    const toBigInt = env.get('TO_BIG_INT', 'bigint');
    t.is(typeof toBigInt, 'bigint');
    t.is(toBigInt, BigInt(42));
});
(0, ava_1.default)('Should convert to BigInt64Array', t => {
    const toBigInt64Array = env.get('TO_BIG_INT_64_ARRAY', 'bigint64array');
    t.is(toBigInt64Array instanceof BigInt64Array, true);
    t.is(toBigInt64Array.length, 2);
    t.is(toBigInt64Array[0], BigInt(22));
    t.is(toBigInt64Array[1], BigInt(33));
});
(0, ava_1.default)('Should convert to BigUint64Array', t => {
    const toBigUint64Array = env.get('TO_BIG_UINT_64_ARRAY', 'biguint64array');
    t.is(toBigUint64Array instanceof BigUint64Array, true);
    t.is(toBigUint64Array.length, 2);
    t.is(toBigUint64Array[0], BigInt(88));
    t.is(toBigUint64Array[1], BigInt(99));
});
(0, ava_1.default)('Should convert to Boolean', t => {
    const toBoolean = env.get('TO_BOOLEAN', 'boolean');
    t.is(typeof toBoolean, 'boolean');
    t.is(toBoolean, false);
});
(0, ava_1.default)('Should convert to Date (from Number)', t => {
    const toDate = env.get('TO_DATE_FROM_NUMBER', 'date');
    t.is(toDate instanceof Date, true);
    t.is(toDate.toISOString(), '2021-12-31T23:00:00.000Z');
});
(0, ava_1.default)('Should convert to Date (from String)', t => {
    const toDate = env.get('TO_DATE_FROM_STRING', 'date');
    t.is(toDate instanceof Date, true);
    t.is(toDate.getTime(), 946681200000);
});
(0, ava_1.default)('Should convert to Float32Array', t => {
    const toFloat32Array = env.get('TO_FLOAT_32_ARRAY', 'float32array');
    t.is(toFloat32Array instanceof Float32Array, true);
    t.is(toFloat32Array.length, 2);
    t.is(toFloat32Array[0], 12.5);
    t.is(toFloat32Array[1], 77);
});
(0, ava_1.default)('Should convert to Float64Array', t => {
    const toFloat64Array = env.get('TO_FLOAT_64_ARRAY', 'float64array');
    t.is(toFloat64Array instanceof Float64Array, true);
    t.is(toFloat64Array.length, 2);
    t.is(toFloat64Array[0], 22.3);
    t.is(toFloat64Array[1], 47.22);
});
(0, ava_1.default)('Should convert to Function', t => {
    const toFunction = env.get('TO_FUNCTION', 'function');
    t.is(typeof toFunction, 'function');
    t.is(toFunction(8), 64);
});
(0, ava_1.default)('Should convert to Int8Array', t => {
    const toInt8Array = env.get('TO_INT_8_ARRAY', 'int8array');
    t.is(toInt8Array instanceof Int8Array, true);
    t.is(toInt8Array.length, 2);
    t.is(toInt8Array[0], 8);
    t.is(toInt8Array[1], 32);
});
(0, ava_1.default)('Should convert to Int16Array', t => {
    const toInt16Array = env.get('TO_INT_16_ARRAY', 'int16array');
    t.is(toInt16Array instanceof Int16Array, true);
    t.is(toInt16Array.length, 2);
    t.is(toInt16Array[0], 64);
    t.is(toInt16Array[1], 128);
});
(0, ava_1.default)('Should convert to Int32Array', t => {
    const toInt32Array = env.get('TO_INT_32_ARRAY', 'int32array');
    t.is(toInt32Array instanceof Int32Array, true);
    t.is(toInt32Array.length, 2);
    t.is(toInt32Array[0], 1024);
    t.is(toInt32Array[1], 3912);
});
(0, ava_1.default)('Should convert to Map', t => {
    const toMap = env.get('TO_MAP', 'map');
    t.is(toMap instanceof Map, true);
    const keys = [...toMap.keys()];
    t.is(keys.length, 1);
    t.is(toMap.get('hello'), 'world');
});
(0, ava_1.default)('Should convert to Number', t => {
    const toNumber = env.get('TO_NUMBER', 'number');
    t.is(typeof toNumber, 'number');
    t.is(toNumber, 5);
});
(0, ava_1.default)('Should convert to Object', t => {
    const toObject = env.get('TO_OBJECT', 'object');
    t.is(Object.prototype.toString.call(toObject), '[object Object]');
    t.deepEqual(toObject, { key: 'value' });
});
(0, ava_1.default)('Should convert to RegExp', t => {
    const toRegExp = env.get('TO_REG_EXP', 'regexp');
    t.is(toRegExp instanceof RegExp, true);
    t.is(toRegExp.toString(), '/^hello$/');
});
(0, ava_1.default)('Should convert to Set', t => {
    const toSet = env.get('TO_SET', 'set');
    t.is(toSet instanceof Set, true);
    const keys = [...toSet.keys()];
    t.is(keys.length, 2);
    t.is(toSet.has(30), true);
    t.is(toSet.has(50), true);
});
(0, ava_1.default)('Should convert to String', t => {
    const toString = env.get('TO_STRING', 'string');
    t.is(typeof toString, 'string');
    t.is(toString, 'test');
});
(0, ava_1.default)('Should convert to Symbol', t => {
    const toSymbol = env.get('TO_SYMBOL', 'symbol');
    t.is(typeof toSymbol, 'symbol');
    t.is(toSymbol.toString(), 'Symbol(foo)');
});
(0, ava_1.default)('Should convert to Uint8Array', t => {
    const toUint8Array = env.get('TO_UINT_8_ARRAY', 'uint8array');
    t.is(toUint8Array instanceof Uint8Array, true);
    t.is(toUint8Array.length, 2);
    t.is(toUint8Array[0], 10);
    t.is(toUint8Array[1], 20);
});
(0, ava_1.default)('Should convert to Uint8ClampedArray', t => {
    const toUint8ClampedArray = env.get('TO_UINT_8_CLAMPED_ARRAY', 'uint8clampedarray');
    t.is(toUint8ClampedArray instanceof Uint8ClampedArray, true);
    t.is(toUint8ClampedArray.length, 2);
    t.is(toUint8ClampedArray[0], 50);
    t.is(toUint8ClampedArray[1], 55);
});
(0, ava_1.default)('Should convert to Uint16Array', t => {
    const toUint16Array = env.get('TO_UINT_16_ARRAY', 'uint16array');
    t.is(toUint16Array instanceof Uint16Array, true);
    t.is(toUint16Array.length, 2);
    t.is(toUint16Array[0], 250);
    t.is(toUint16Array[1], 450);
});
(0, ava_1.default)('Should convert to Uint32Array', t => {
    const toUint32Array = env.get('TO_UINT_32_ARRAY', 'uint32array');
    t.is(toUint32Array instanceof Uint32Array, true);
    t.is(toUint32Array.length, 2);
    t.is(toUint32Array[0], 1200);
    t.is(toUint32Array[1], 3400);
});
(0, ava_1.default)('Should return Array default value', t => {
    const toArray = env.get('TO_ARRAY_NOT_EXISTS', 'array', ['hello', 'world']);
    t.is(Array.isArray(toArray), true);
    t.is(toArray.length, 2);
    t.is(toArray[0], 'hello');
    t.is(toArray[1], 'world');
});
(0, ava_1.default)('Should return BigInt default value', t => {
    const toBigInt = env.get('TO_BIG_INT_NOT_EXISTS', 'bigint', BigInt(99));
    t.is(typeof toBigInt, 'bigint');
    t.is(toBigInt, BigInt(99));
});
(0, ava_1.default)('Should return BigInt64Array default value', t => {
    const toBigInt64Array = env.get('TO_BIG_INT_64_ARRAY_NOT_EXISTS', 'bigint64array', BigInt64Array.of(BigInt(11), BigInt(23)));
    t.is(toBigInt64Array instanceof BigInt64Array, true);
    t.is(toBigInt64Array.length, 2);
    t.is(toBigInt64Array[0], BigInt(11));
    t.is(toBigInt64Array[1], BigInt(23));
});
(0, ava_1.default)('Should return BigUint64Array default value', t => {
    const toBigUint64Array = env.get('TO_BIG_UINT_64_ARRAY_NOT_EXISTS', 'biguint64array', BigUint64Array.of(BigInt(12), BigInt(45)));
    t.is(toBigUint64Array instanceof BigUint64Array, true);
    t.is(toBigUint64Array.length, 2);
    t.is(toBigUint64Array[0], BigInt(12));
    t.is(toBigUint64Array[1], BigInt(45));
});
(0, ava_1.default)('Should return Boolean default value', t => {
    const toBoolean = env.get('TO_BOOLEAN_NOT_EXISTS', 'boolean', true);
    t.is(typeof toBoolean, 'boolean');
    t.is(toBoolean, true);
});
(0, ava_1.default)('Should return Date default value', t => {
    const defaultDate = new Date(2022, 1, 14);
    const toDate = env.get('TO_DATE_NOT_EXISTS', 'date', defaultDate);
    t.is(toDate instanceof Date, true);
    t.is(toDate, defaultDate);
});
(0, ava_1.default)('Should return Float32Array default value', t => {
    const toFloat32Array = env.get('TO_FLOAT_32_ARRAY_NOT_EXISTS', 'float32array', Float32Array.of(15, 0));
    t.is(toFloat32Array instanceof Float32Array, true);
    t.is(toFloat32Array.length, 2);
    t.is(toFloat32Array[0], 15);
    t.is(toFloat32Array[1], 0);
});
(0, ava_1.default)('Should return Float64Array default value', t => {
    const toFloat64Array = env.get('TO_FLOAT_64_ARRAY_NOT_EXISTS', 'float64array', Float64Array.of(85.6, 32.11));
    t.is(toFloat64Array instanceof Float64Array, true);
    t.is(toFloat64Array.length, 2);
    t.is(toFloat64Array[0], 85.6);
    t.is(toFloat64Array[1], 32.11);
});
(0, ava_1.default)('Should return Function default value', t => {
    const fn = (x, y) => x / y;
    const toFunction = env.get('TO_FUNCTION_NOT_EXISTS', 'function', fn);
    t.is(typeof toFunction, 'function');
    t.is(toFunction, fn);
});
(0, ava_1.default)('Should return Int8Array default value', t => {
    const toInt8Array = env.get('TO_INT_8_ARRAY_NOT_EXISTS', 'int8array', Int8Array.of(16, 64));
    t.is(toInt8Array instanceof Int8Array, true);
    t.is(toInt8Array.length, 2);
    t.is(toInt8Array[0], 16);
    t.is(toInt8Array[1], 64);
});
(0, ava_1.default)('Should return Int16Array default value', t => {
    const toInt8Array = env.get('TO_INT_16_ARRAY_NOT_EXISTS', 'int16array', Int16Array.of(-32, 32));
    t.is(toInt8Array instanceof Int16Array, true);
    t.is(toInt8Array.length, 2);
    t.is(toInt8Array[0], -32);
    t.is(toInt8Array[1], 32);
});
(0, ava_1.default)('Should return Int32Array default value', t => {
    const toInt32Array = env.get('TO_INT_32_ARRAY_NOT_EXISTS', 'int32array', Int32Array.of(-3512, 9844));
    t.is(toInt32Array instanceof Int32Array, true);
    t.is(toInt32Array.length, 2);
    t.is(toInt32Array[0], -3512);
    t.is(toInt32Array[1], 9844);
});
(0, ava_1.default)('Should return Map default value', t => {
    const toMap = env.get('TO_MAP_NOT_EXISTS', 'map', new Map([['a', 1], ['b', 2]]));
    t.is(toMap instanceof Map, true);
    const keys = [...toMap.keys()];
    t.is(keys.length, 2);
    t.is(toMap.get('a'), 1);
    t.is(toMap.get('b'), 2);
});
(0, ava_1.default)('Should return Number default value', t => {
    const toNumber = env.get('TO_NUMBER_NOT_EXISTS', 'number', NaN);
    t.is(typeof toNumber, 'number');
    t.is(isNaN(toNumber), true);
});
(0, ava_1.default)('Should return Object default value', t => {
    const toObject = env.get('TO_OBJECT_NOT_EXISTS', 'object', { newKey: 'newValue' });
    t.is(Object.prototype.toString.call(toObject), '[object Object]');
    t.deepEqual(toObject, { newKey: 'newValue' });
});
(0, ava_1.default)('Should return RegExp default value', t => {
    const toRegExp = env.get('TO_REG_EXP_NOT_EXISTS', 'regexp', /^world$/);
    t.is(toRegExp instanceof RegExp, true);
    t.is(toRegExp.toString(), '/^world$/');
});
(0, ava_1.default)('Should return Set default value', t => {
    const toSet = env.get('TO_SET_NOT_EXISTS', 'set', new Set([77]));
    t.is(toSet instanceof Set, true);
    const keys = [...toSet.keys()];
    t.is(keys.length, 1);
    t.is(toSet.has(77), true);
});
(0, ava_1.default)('Should return String default value', t => {
    const toString = env.get('TO_STRING_NOT_EXISTS', 'string', 'foo');
    t.is(typeof toString, 'string');
    t.is(toString, 'foo');
});
(0, ava_1.default)('Should return Symbol default value', t => {
    const toSymbol = env.get('TO_SYMBOL_NOT_EXISTS', 'symbol', Symbol('bar'));
    t.is(typeof toSymbol, 'symbol');
    t.is(toSymbol.toString(), 'Symbol(bar)');
});
(0, ava_1.default)('Should return Uint8Array default value', t => {
    const toUint8Array = env.get('TO_UINT_8_ARRAY_NOT_EXISTS', 'uint8array', Uint8Array.of(90, 80));
    t.is(toUint8Array instanceof Uint8Array, true);
    t.is(toUint8Array.length, 2);
    t.is(toUint8Array[0], 90);
    t.is(toUint8Array[1], 80);
});
(0, ava_1.default)('Should return Uint8ClampedArray default value', t => {
    const toUint8ClampedArray = env.get('TO_UINT_8_CLAMPED_ARRAY_NOT_EXISTS', 'uint8clampedarray', Uint8ClampedArray.of(33, 44));
    t.is(toUint8ClampedArray instanceof Uint8ClampedArray, true);
    t.is(toUint8ClampedArray.length, 2);
    t.is(toUint8ClampedArray[0], 33);
    t.is(toUint8ClampedArray[1], 44);
});
(0, ava_1.default)('Should return Uint16Array default value', t => {
    const toUint16Array = env.get('UINT_16_ARRAY_NOT_EXISTS', 'uint16array', Uint16Array.of(120, 760));
    t.is(toUint16Array instanceof Uint16Array, true);
    t.is(toUint16Array.length, 2);
    t.is(toUint16Array[0], 120);
    t.is(toUint16Array[1], 760);
});
(0, ava_1.default)('Should return Uint32Array default value', t => {
    const toUint32Array = env.get('TO_UINT_32_ARRAY_NOT_EXISTS', 'uint32array', Uint32Array.of(2900, 9700));
    t.is(toUint32Array instanceof Uint32Array, true);
    t.is(toUint32Array.length, 2);
    t.is(toUint32Array[0], 2900);
    t.is(toUint32Array[1], 9700);
});
(0, ava_1.default)('Should throw an exception because of unknown conversion type', t => {
    t.throws(() => {
        env.get('TO_STRING', 'wrongType');
    }, {
        instanceOf: SyntaxError,
        message: 'Unknown type "wrongType"'
    });
});
(0, ava_1.default)('Should throw an exception because "test" cannot be converted to Array', t => {
    t.throws(() => {
        env.get('TO_STRING', 'array');
    }, {
        instanceOf: SyntaxError,
        message: 'Unable to convert "test" to Array'
    });
});
(0, ava_1.default)('Should throw an exception because "test" cannot be converted to BigInt', t => {
    t.throws(() => {
        env.get('TO_STRING', 'bigint');
    }, {
        instanceOf: SyntaxError,
        message: 'Unable to convert "test" to BigInt'
    });
});
(0, ava_1.default)('Should throw an exception because "test" cannot be converted to BigInt64Array', t => {
    t.throws(() => {
        env.get('TO_STRING', 'bigint64array');
    }, {
        instanceOf: SyntaxError,
        message: 'Unable to convert "test" to BigInt64Array'
    });
});
(0, ava_1.default)('Should throw an exception because "test" cannot be converted to BigUint64Array', t => {
    t.throws(() => {
        env.get('TO_STRING', 'biguint64array');
    }, {
        instanceOf: SyntaxError,
        message: 'Unable to convert "test" to BigUint64Array'
    });
});
(0, ava_1.default)('Should throw an exception because "test" cannot be converted to Boolean', t => {
    t.throws(() => {
        env.get('TO_STRING', 'boolean');
    }, {
        instanceOf: SyntaxError,
        message: 'Unable to convert "test" to Boolean'
    });
});
(0, ava_1.default)('Should throw an exception because "test" cannot be converted to Date', t => {
    t.throws(() => {
        env.get('TO_STRING', 'date');
    }, {
        instanceOf: SyntaxError,
        message: 'Unable to convert "test" to Date'
    });
});
(0, ava_1.default)('Should throw an exception because "[20,"bar"]" cannot be converted to Float32Array', t => {
    t.throws(() => {
        env.get('TO_FLOAT_32_ARRAY_WRONG', 'float32array');
    }, {
        instanceOf: SyntaxError,
        message: 'Unable to convert "[10,"foo"]" to Float32Array'
    });
});
(0, ava_1.default)('Should throw an exception because "[20,"bar"]" cannot be converted to Float64Array', t => {
    t.throws(() => {
        env.get('TO_FLOAT_64_ARRAY_WRONG', 'float64array');
    }, {
        instanceOf: SyntaxError,
        message: 'Unable to convert "[20,"bar"]" to Float64Array'
    });
});
(0, ava_1.default)('Should throw an exception because "test" cannot be converted to Function', t => {
    t.throws(() => {
        env.get('TO_STRING', 'function');
    }, {
        instanceOf: SyntaxError,
        message: 'Unable to convert "test" to Function'
    });
});
(0, ava_1.default)('Should throw an exception because "[30,"baz"]" cannot be converted to Int8Array', t => {
    t.throws(() => {
        env.get('TO_INT_8_ARRAY_WRONG', 'int8array');
    }, {
        instanceOf: SyntaxError,
        message: 'Unable to convert "[30,"baz"]" to Int8Array'
    });
});
(0, ava_1.default)('Should throw an exception because "[40,"foo"]" cannot be converted to Int16Array', t => {
    t.throws(() => {
        env.get('TO_INT_16_ARRAY_WRONG', 'int16array');
    }, {
        instanceOf: SyntaxError,
        message: 'Unable to convert "[40,"foo"]" to Int16Array'
    });
});
(0, ava_1.default)('Should throw an exception because "[50,"bar"]" cannot be converted to Int32Array', t => {
    t.throws(() => {
        env.get('TO_INT_32_ARRAY_WRONG', 'int32array');
    }, {
        instanceOf: SyntaxError,
        message: 'Unable to convert "[50,"bar"]" to Int32Array'
    });
});
(0, ava_1.default)('Should throw an exception because "test" cannot be converted to Map', t => {
    t.throws(() => {
        env.get('TO_STRING', 'map');
    }, {
        instanceOf: SyntaxError,
        message: 'Unable to convert "test" to Map'
    });
});
(0, ava_1.default)('Should throw an exception because "test" cannot be converted to Object', t => {
    t.throws(() => {
        env.get('TO_STRING', 'object');
    }, {
        instanceOf: SyntaxError,
        message: 'Unable to convert "test" to Object'
    });
});
(0, ava_1.default)('Should throw an exception because "?:" cannot be converted to RegExp', t => {
    t.throws(() => {
        env.get('TO_REG_EXP_WRONG', 'regexp');
    }, {
        instanceOf: SyntaxError,
        message: 'Unable to convert "?:" to RegExp'
    });
});
(0, ava_1.default)('Should throw an exception because "test" cannot be converted to Set', t => {
    t.throws(() => {
        env.get('TO_STRING', 'set');
    }, {
        instanceOf: SyntaxError,
        message: 'Unable to convert "test" to Set'
    });
});
(0, ava_1.default)('Should throw an exception because "[10,"foo"]" cannot be converted to Uint8Array', t => {
    t.throws(() => {
        env.get('TO_UINT_8_ARRAY_WRONG', 'uint8array');
    }, {
        instanceOf: SyntaxError,
        message: 'Unable to convert "[10,"foo"]" to Uint8Array'
    });
});
(0, ava_1.default)('Should throw an exception because "[50,"bar"]" cannot be converted to Uint8ClampedArray', t => {
    t.throws(() => {
        env.get('TO_UINT_8_CLAMPED_ARRAY_WRONG', 'uint8clampedarray');
    }, {
        instanceOf: SyntaxError,
        message: 'Unable to convert "[50,"bar"]" to Uint8ClampedArray'
    });
});
(0, ava_1.default)('Should throw an exception because "[250,"baz"]" cannot be converted to Uint16Array', t => {
    t.throws(() => {
        env.get('TO_UINT_16_ARRAY_WRONG', 'uint16array');
    }, {
        instanceOf: SyntaxError,
        message: 'Unable to convert "[250,"baz"]" to Uint16Array'
    });
});
(0, ava_1.default)('Should throw an exception because "["foo",3400]" cannot be converted to Uint32Array', t => {
    t.throws(() => {
        env.get('TO_UINT_32_ARRAY_WRONG', 'uint32array');
    }, {
        instanceOf: SyntaxError,
        message: 'Unable to convert "["foo",3400]" to Uint32Array'
    });
});
(0, ava_1.default)('Should check key exists', t => {
    const exists = env.has('TO_STRING');
    t.is(exists, true);
});
(0, ava_1.default)("Should check key doesn't exist", t => {
    const exists = env.has('NOT_EXISTS');
    t.is(exists, false);
});
(0, ava_1.default)('Should return TO_NUMBER since is the firse existing key', t => {
    const toNumberStringed = env.first(['NOT_EXISTS', 'TO_NUMBER', 'TO_STRING']);
    t.is(toNumberStringed, '5');
});
(0, ava_1.default)('Should return default value since no key exists', t => {
    const toNumber = env.first(['NOT_EXISTS', 'NOT_EXISTS_2', 'NOT_EXISTS_3'], 'number', 10);
    t.is(toNumber, 10);
});
(0, ava_1.default)('Should return to TO_REG_EXP since the key exists', t => {
    const toRegExp = env.require('TO_REG_EXP', 'regexp');
    t.is(toRegExp instanceof RegExp, true);
    t.is(toRegExp.toString(), '/^hello$/');
});
(0, ava_1.default)('Should return to TO_OBJECT since is the first key that exists', t => {
    const toObject = env.requireFirst(['TO_OBJECT', 'TO_MAP', 'TO_SET'], 'object');
    t.is(Object.prototype.toString.call(toObject), '[object Object]');
    t.deepEqual(toObject, { key: 'value' });
});
(0, ava_1.default)('Should check that TO_UINT_32_ARRAY exists and return it as a string', t => {
    const { TO_UINT_32_ARRAY } = env.exists;
    t.is(typeof TO_UINT_32_ARRAY, 'string');
    t.is(TO_UINT_32_ARRAY, '[1200,3400]');
});
(0, ava_1.default)("Should throw an exception since TO_BIG_INT_NOT_EXISTS is required but it doesn't exist", t => {
    t.throws(() => {
        // eslint-disable-next-line
        const { TO_BIG_INT_NOT_EXISTS } = env.required;
    }, {
        instanceOf: Error,
        message: "Required environment variable 'TO_BIG_INT_NOT_EXISTS' not found."
    });
});
//# sourceMappingURL=typed-env.spec.js.map