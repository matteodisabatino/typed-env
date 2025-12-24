'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_test_1 = __importDefault(require("node:test"));
const strict_1 = __importDefault(require("node:assert/strict"));
const package_json_1 = __importDefault(require("../package.json"));
const index_1 = require("../src/index");
const env = new index_1.TypedEnv();
(0, node_test_1.default)('Should return the version', () => {
    strict_1.default.equal(index_1.TypedEnv.version, package_json_1.default.version);
});
(0, node_test_1.default)('Should return undefined', () => {
    const toUndefined = env.get('NOT_EXISTS');
    strict_1.default.equal(toUndefined, undefined);
});
(0, node_test_1.default)('Should convert to Array', () => {
    const toArray = env.get('TO_ARRAY', 'array');
    strict_1.default.ok(Array.isArray(toArray));
    strict_1.default.equal(toArray.length, 2);
    strict_1.default.equal(toArray[0], 10);
    strict_1.default.equal(toArray[1], 20);
});
(0, node_test_1.default)('Should convert to BigInt', () => {
    const toBigInt = env.get('TO_BIG_INT', 'bigint');
    strict_1.default.equal(typeof toBigInt, 'bigint');
    strict_1.default.equal(toBigInt, BigInt(42));
});
(0, node_test_1.default)('Should convert to BigInt64Array', () => {
    const v = env.get('TO_BIG_INT_64_ARRAY', 'bigint64array');
    strict_1.default.ok(v instanceof BigInt64Array);
    strict_1.default.equal(v.length, 2);
    strict_1.default.equal(v[0], BigInt(22));
    strict_1.default.equal(v[1], BigInt(33));
});
(0, node_test_1.default)('Should convert to BigUint64Array', () => {
    const v = env.get('TO_BIG_UINT_64_ARRAY', 'biguint64array');
    strict_1.default.ok(v instanceof BigUint64Array);
    strict_1.default.equal(v.length, 2);
    strict_1.default.equal(v[0], BigInt(88));
    strict_1.default.equal(v[1], BigInt(99));
});
(0, node_test_1.default)('Should convert to Boolean', () => {
    const v = env.get('TO_BOOLEAN', 'boolean');
    strict_1.default.equal(typeof v, 'boolean');
    strict_1.default.equal(v, false);
});
(0, node_test_1.default)('Should convert to Date (from Number)', () => {
    const v = env.get('TO_DATE_FROM_NUMBER', 'date');
    strict_1.default.ok(v instanceof Date);
    strict_1.default.equal(v.toISOString(), '2021-12-31T23:00:00.000Z');
});
(0, node_test_1.default)('Should convert to Date (from String)', () => {
    const v = env.get('TO_DATE_FROM_STRING', 'date');
    strict_1.default.ok(v instanceof Date);
    strict_1.default.equal(v.getTime(), 946681200000);
});
(0, node_test_1.default)('Should convert to Float32Array', () => {
    const v = env.get('TO_FLOAT_32_ARRAY', 'float32array');
    strict_1.default.ok(v instanceof Float32Array);
    strict_1.default.equal(v.length, 2);
    strict_1.default.equal(v[0], 12.5);
    strict_1.default.equal(v[1], 77);
});
(0, node_test_1.default)('Should convert to Float64Array', () => {
    const v = env.get('TO_FLOAT_64_ARRAY', 'float64array');
    strict_1.default.ok(v instanceof Float64Array);
    strict_1.default.equal(v.length, 2);
    strict_1.default.equal(v[0], 22.3);
    strict_1.default.equal(v[1], 47.22);
});
(0, node_test_1.default)('Should convert to Function', () => {
    const fn = env.get('TO_FUNCTION', 'function');
    strict_1.default.equal(typeof fn, 'function');
    strict_1.default.equal(fn(8), 64);
});
(0, node_test_1.default)('Should convert to Int8Array', () => {
    const v = env.get('TO_INT_8_ARRAY', 'int8array');
    strict_1.default.ok(v instanceof Int8Array);
    strict_1.default.equal(v.length, 2);
    strict_1.default.equal(v[0], 8);
    strict_1.default.equal(v[1], 32);
});
(0, node_test_1.default)('Should convert to Int16Array', () => {
    const v = env.get('TO_INT_16_ARRAY', 'int16array');
    strict_1.default.ok(v instanceof Int16Array);
    strict_1.default.equal(v.length, 2);
    strict_1.default.equal(v[0], 64);
    strict_1.default.equal(v[1], 128);
});
(0, node_test_1.default)('Should convert to Int32Array', () => {
    const v = env.get('TO_INT_32_ARRAY', 'int32array');
    strict_1.default.ok(v instanceof Int32Array);
    strict_1.default.equal(v.length, 2);
    strict_1.default.equal(v[0], 1024);
    strict_1.default.equal(v[1], 3912);
});
(0, node_test_1.default)('Should convert to Map', () => {
    const v = env.get('TO_MAP', 'map');
    strict_1.default.ok(v instanceof Map);
    const keys = [...v.keys()];
    strict_1.default.equal(keys.length, 1);
    strict_1.default.equal(v.get('hello'), 'world');
});
(0, node_test_1.default)('Should convert to Number', () => {
    const v = env.get('TO_NUMBER', 'number');
    strict_1.default.equal(typeof v, 'number');
    strict_1.default.equal(v, 5);
});
(0, node_test_1.default)('Should convert to Object', () => {
    const v = env.get('TO_OBJECT', 'object');
    strict_1.default.equal(Object.prototype.toString.call(v), '[object Object]');
    strict_1.default.deepEqual(v, { key: 'value' });
});
(0, node_test_1.default)('Should convert to RegExp', () => {
    const v = env.get('TO_REG_EXP', 'regexp');
    strict_1.default.ok(v instanceof RegExp);
    strict_1.default.equal(v.toString(), '/^hello$/');
});
(0, node_test_1.default)('Should convert to Set', () => {
    const v = env.get('TO_SET', 'set');
    strict_1.default.ok(v instanceof Set);
    strict_1.default.equal(v.size, 2);
    strict_1.default.ok(v.has(30));
    strict_1.default.ok(v.has(50));
});
(0, node_test_1.default)('Should convert to String', () => {
    const v = env.get('TO_STRING', 'string');
    strict_1.default.equal(typeof v, 'string');
    strict_1.default.equal(v, 'test');
});
(0, node_test_1.default)('Should convert to Symbol', () => {
    const v = env.get('TO_SYMBOL', 'symbol');
    strict_1.default.equal(typeof v, 'symbol');
    strict_1.default.equal(v.toString(), 'Symbol(foo)');
});
(0, node_test_1.default)('Should convert to Uint8Array', () => {
    const v = env.get('TO_UINT_8_ARRAY', 'uint8array');
    strict_1.default.ok(v instanceof Uint8Array);
    strict_1.default.equal(v.length, 2);
    strict_1.default.equal(v[0], 10);
    strict_1.default.equal(v[1], 20);
});
(0, node_test_1.default)('Should convert to Uint8ClampedArray', () => {
    const v = env.get('TO_UINT_8_CLAMPED_ARRAY', 'uint8clampedarray');
    strict_1.default.ok(v instanceof Uint8ClampedArray);
    strict_1.default.equal(v.length, 2);
    strict_1.default.equal(v[0], 50);
    strict_1.default.equal(v[1], 55);
});
(0, node_test_1.default)('Should convert to Uint16Array', () => {
    const v = env.get('TO_UINT_16_ARRAY', 'uint16array');
    strict_1.default.ok(v instanceof Uint16Array);
    strict_1.default.equal(v.length, 2);
    strict_1.default.equal(v[0], 250);
    strict_1.default.equal(v[1], 450);
});
(0, node_test_1.default)('Should convert to Uint32Array', () => {
    const v = env.get('TO_UINT_32_ARRAY', 'uint32array');
    strict_1.default.ok(v instanceof Uint32Array);
    strict_1.default.equal(v.length, 2);
    strict_1.default.equal(v[0], 1200);
    strict_1.default.equal(v[1], 3400);
});
(0, node_test_1.default)('Should throw an exception because of unknown conversion type', () => {
    strict_1.default.throws(() => env.get('TO_STRING', 'wrongType'), { name: 'SyntaxError', message: 'Unknown type "wrongType"' });
});
(0, node_test_1.default)('Should check key exists', () => {
    strict_1.default.equal(env.has('TO_STRING'), true);
});
(0, node_test_1.default)("Should check key doesn't exist", () => {
    strict_1.default.equal(env.has('NOT_EXISTS'), false);
});
(0, node_test_1.default)('Should return TO_NUMBER since is the first existing key', () => {
    const v = env.first(['NOT_EXISTS', 'TO_NUMBER', 'TO_STRING']);
    strict_1.default.equal(v, '5');
});
(0, node_test_1.default)('Should return default value since no key exists', () => {
    const v = env.first(['NOT_EXISTS', 'NOT_EXISTS_2'], 'number', 10);
    strict_1.default.equal(v, 10);
});
(0, node_test_1.default)('Should throw if required env is missing', () => {
    strict_1.default.throws(() => {
        // eslint-disable-next-line
        const { TO_BIG_INT_NOT_EXISTS } = env.required;
    }, {
        name: 'EnvKeyNotFoundError',
        message: "Required environment variable 'TO_BIG_INT_NOT_EXISTS' not found."
    });
});
//# sourceMappingURL=typed-env.spec.js.map