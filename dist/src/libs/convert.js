"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fromLiteral = exports.toUint32Array = exports.toUint16Array = exports.toUint8ClampedArray = exports.toUint8Array = exports.toSymbol = exports.toString = exports.toSet = exports.toRegExp = exports.toObject = exports.toNumber = exports.toMap = exports.toInt32Array = exports.toInt16Array = exports.toInt8Array = exports.toFunction = exports.toFloat64Array = exports.toFloat32Array = exports.toDate = exports.toBoolean = exports.toBigUint64Array = exports.toBigInt64Array = exports.toBigInt = exports.toArray = exports.to = void 0;
const check_1 = require("./check");
const to = (value_, type_) => {
    const value = (0, check_1.isString)().check(value_);
    const type = (0, check_1.isString)().check(type_);
    const lType = (0, check_1.isString)().withGuard((k) => k in exports.fromLiteral).check(type.toLowerCase());
    return exports.fromLiteral[lType](value);
};
exports.to = to;
const toArray = (value_) => {
    const value = (0, check_1.isString)().check(value_);
    try {
        const arr = JSON.parse(value);
        return (0, check_1.isArray)().check(arr);
    }
    catch {
        throw new SyntaxError(`Unable to convert "${value_}" to Array`);
    }
};
exports.toArray = toArray;
const toBigInt = (value_) => {
    const value = (0, check_1.isString)().check(value_);
    try {
        return BigInt(value);
    }
    catch {
        throw new SyntaxError(`Unable to convert "${value_}" to BigInt`);
    }
};
exports.toBigInt = toBigInt;
const toBigInt64Array = (value_) => {
    const value = (0, check_1.isString)().check(value_);
    try {
        const arr = (0, exports.toArray)(value).map(x => BigInt(x));
        return BigInt64Array.of(...arr);
    }
    catch {
        throw new SyntaxError(`Unable to convert "${value_}" to BigInt64Array`);
    }
};
exports.toBigInt64Array = toBigInt64Array;
const toBigUint64Array = (value_) => {
    const value = (0, check_1.isString)().check(value_);
    try {
        const arr = (0, exports.toArray)(value).map(x => BigInt(x));
        return BigUint64Array.of(...arr);
    }
    catch {
        throw new SyntaxError(`Unable to convert "${value_}" to BigUint64Array`);
    }
};
exports.toBigUint64Array = toBigUint64Array;
const toBoolean = (value_) => {
    const value = (0, check_1.isString)().check(value_);
    if (!/^(?:true|false)$/.test(value)) {
        throw new SyntaxError(`Unable to convert "${value_}" to Boolean`);
    }
    return value === 'true';
};
exports.toBoolean = toBoolean;
const toDate = (value_) => {
    const value = (0, check_1.isString)().check(value_);
    try {
        let val;
        try {
            val = (0, exports.toNumber)(value);
        }
        catch {
            val = value;
        }
        const date = new Date(val);
        return (0, check_1.isDate)().check(date);
    }
    catch {
        throw new SyntaxError(`Unable to convert "${value_}" to Date`);
    }
};
exports.toDate = toDate;
const toFloat32Array = (value_) => {
    const value = (0, check_1.isString)().check(value_);
    try {
        const arr = (0, exports.toArray)(value).map(Number);
        if (arr.some(isNaN)) {
            throw new TypeError('One or more values are invalid');
        }
        return Float32Array.of(...arr);
    }
    catch {
        throw new SyntaxError(`Unable to convert "${value_}" to Float32Array`);
    }
};
exports.toFloat32Array = toFloat32Array;
const toFloat64Array = (value_) => {
    const value = (0, check_1.isString)().check(value_);
    try {
        const arr = (0, exports.toArray)(value).map(Number);
        if (arr.some(isNaN)) {
            throw new TypeError('One or more values are invalid');
        }
        return Float64Array.of(...arr);
    }
    catch {
        throw new SyntaxError(`Unable to convert "${value_}" to Float64Array`);
    }
};
exports.toFloat64Array = toFloat64Array;
const toFunction = (value_) => {
    const value = (0, check_1.isString)().check(value_);
    try {
        // eslint-disable-next-line
        const fn = eval(value);
        return (0, check_1.isFunction)().check(fn);
    }
    catch {
        throw new SyntaxError(`Unable to convert "${value_}" to Function`);
    }
};
exports.toFunction = toFunction;
const toInt8Array = (value_) => {
    const value = (0, check_1.isString)().check(value_);
    try {
        const arr = (0, exports.toArray)(value).map(Number);
        if (arr.some(isNaN)) {
            throw new TypeError('One or more values are invalid');
        }
        return Int8Array.of(...arr);
    }
    catch {
        throw new SyntaxError(`Unable to convert "${value_}" to Int8Array`);
    }
};
exports.toInt8Array = toInt8Array;
const toInt16Array = (value_) => {
    const value = (0, check_1.isString)().check(value_);
    try {
        const arr = (0, exports.toArray)(value).map(Number);
        if (arr.some(isNaN)) {
            throw new TypeError('One or more values are invalid');
        }
        return Int16Array.of(...arr);
    }
    catch {
        throw new SyntaxError(`Unable to convert "${value_}" to Int16Array`);
    }
};
exports.toInt16Array = toInt16Array;
const toInt32Array = (value_) => {
    const value = (0, check_1.isString)().check(value_);
    try {
        const arr = (0, exports.toArray)(value).map(Number);
        if (arr.some(isNaN)) {
            throw new TypeError('One or more values are invalid');
        }
        return Int32Array.of(...arr);
    }
    catch {
        throw new SyntaxError(`Unable to convert "${value_}" to Int32Array`);
    }
};
exports.toInt32Array = toInt32Array;
const toMap = (value_) => {
    const value = (0, check_1.isString)().check(value_);
    try {
        const obj_ = JSON.parse(value);
        const obj = (0, check_1.isObject)({ allowAnyPrototype: true }).check(obj_);
        return new Map(Object.entries(obj));
    }
    catch {
        throw new SyntaxError(`Unable to convert "${value_}" to Map`);
    }
};
exports.toMap = toMap;
const toNumber = (value_) => {
    const value = (0, check_1.isString)().check(value_);
    try {
        const num = Number(value);
        return (0, check_1.isNumber)({ allowNaN: false }).check(num);
    }
    catch {
        throw new SyntaxError(`Unable to convert "${value_}" to Number`);
    }
};
exports.toNumber = toNumber;
const toObject = (value_) => {
    const value = (0, check_1.isString)().check(value_);
    try {
        const obj = JSON.parse(value);
        return (0, check_1.isObject)().check(obj);
    }
    catch {
        throw new SyntaxError(`Unable to convert "${value_}" to Object`);
    }
};
exports.toObject = toObject;
const toRegExp = (value_) => {
    const value = (0, check_1.isString)().check(value_);
    try {
        return new RegExp(value);
    }
    catch {
        throw new SyntaxError(`Unable to convert "${value_}" to RegExp`);
    }
};
exports.toRegExp = toRegExp;
const toSet = (value_) => {
    const value = (0, check_1.isString)().check(value_);
    try {
        const obj = (0, exports.toArray)(value);
        return new Set(obj);
    }
    catch {
        throw new SyntaxError(`Unable to convert "${value_}" to Set`);
    }
};
exports.toSet = toSet;
const toString = (value_) => {
    const value = (0, check_1.isString)().check(value_);
    // if value_ passes the check it is per sure a string, so the only thing to
    // do is to returning it
    return value;
};
exports.toString = toString;
const toSymbol = (value_) => {
    const value = (0, check_1.isString)().check(value_);
    // if value_ passes the check it is per sure a string, so the only thing to
    // do is to create a Symbol and returning it since is always possibile to
    // create a Symbol from String
    return Symbol(value);
};
exports.toSymbol = toSymbol;
const toUint8Array = (value_) => {
    const value = (0, check_1.isString)().check(value_);
    try {
        const arr = (0, exports.toArray)(value).map(Number);
        if (arr.some(isNaN)) {
            throw new TypeError('One or more values are invalid');
        }
        return Uint8Array.of(...arr);
    }
    catch {
        throw new SyntaxError(`Unable to convert "${value_}" to Uint8Array`);
    }
};
exports.toUint8Array = toUint8Array;
const toUint8ClampedArray = (value_) => {
    const value = (0, check_1.isString)().check(value_);
    try {
        const arr = (0, exports.toArray)(value).map(Number);
        if (arr.some(isNaN)) {
            throw new TypeError('One or more values are invalid');
        }
        return Uint8ClampedArray.of(...arr);
    }
    catch {
        throw new SyntaxError(`Unable to convert "${value_}" to Uint8ClampedArray`);
    }
};
exports.toUint8ClampedArray = toUint8ClampedArray;
const toUint16Array = (value_) => {
    const value = (0, check_1.isString)().check(value_);
    try {
        const arr = (0, exports.toArray)(value).map(Number);
        if (arr.some(isNaN)) {
            throw new TypeError('One or more values are invalid');
        }
        return Uint16Array.of(...arr);
    }
    catch {
        throw new SyntaxError(`Unable to convert "${value_}" to Uint16Array`);
    }
};
exports.toUint16Array = toUint16Array;
const toUint32Array = (value_) => {
    const value = (0, check_1.isString)().check(value_);
    try {
        const arr = (0, exports.toArray)(value).map(Number);
        if (arr.some(isNaN)) {
            throw new TypeError('One or more values are invalid');
        }
        return Uint32Array.of(...arr);
    }
    catch {
        throw new SyntaxError(`Unable to convert "${value_}" to Uint32Array`);
    }
};
exports.toUint32Array = toUint32Array;
exports.fromLiteral = {
    array: exports.toArray,
    bigint: exports.toBigInt,
    bigint64array: exports.toBigInt64Array,
    biguint64array: exports.toBigUint64Array,
    boolean: exports.toBoolean,
    date: exports.toDate,
    float32array: exports.toFloat32Array,
    float64array: exports.toFloat64Array,
    function: exports.toFunction,
    int8array: exports.toInt8Array,
    int16array: exports.toInt16Array,
    int32array: exports.toInt32Array,
    map: exports.toMap,
    number: exports.toNumber,
    object: exports.toObject,
    regexp: exports.toRegExp,
    set: exports.toSet,
    string: exports.toString,
    symbol: exports.toSymbol,
    uint8array: exports.toUint8Array,
    uint8clampedarray: exports.toUint8ClampedArray,
    uint16array: exports.toUint16Array,
    uint32array: exports.toUint32Array
};
//# sourceMappingURL=convert.js.map