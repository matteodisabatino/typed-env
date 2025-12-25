"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fromLiteral = exports.isUint32Array = exports.isUint16Array = exports.isUint8ClampedArray = exports.isUint8Array = exports.isSymbol = exports.isString = exports.isSet = exports.isRegExp = exports.isObject = exports.isNumber = exports.isMap = exports.isInt32Array = exports.isInt16Array = exports.isInt8Array = exports.isFunction = exports.isFloat64Array = exports.isFloat32Array = exports.isDate = exports.isBoolean = exports.isBigUint64Array = exports.isBigInt64Array = exports.isBigInt = exports.isArray = exports.is = void 0;
const runtypes_1 = require("runtypes");
const data_types_1 = require("./data_types");
const is = (value, type_, options_ = {}) => {
    const type = (0, exports.isString)().check(type_);
    const options = data_types_1.CheckOptions.check(options_);
    const lType = type.toLowerCase();
    if (!(lType in exports.fromLiteral)) {
        throw new SyntaxError(`Unknown type "${type_}"`);
    }
    const runtype = exports.fromLiteral[lType](options);
    return runtype.check(value);
};
exports.is = is;
const isArray = (options_ = {}) => {
    const options = data_types_1.CheckOptions.check(options_);
    const opts = { ...options };
    const { allowUndefined = false, of } = opts;
    let arrayElements;
    if (of === 'bigint') {
        arrayElements = runtypes_1.BigInt;
    }
    else if (of === 'boolean') {
        arrayElements = runtypes_1.Boolean;
    }
    else if (of === 'function') {
        arrayElements = runtypes_1.Function;
    }
    else if (of === 'never') {
        arrayElements = runtypes_1.Never;
    }
    else if (of === 'null') {
        arrayElements = runtypes_1.Null;
    }
    else if (of === 'nullish') {
        arrayElements = runtypes_1.Nullish;
    }
    else if (of === 'number') {
        arrayElements = runtypes_1.Number;
    }
    else if (of === 'string') {
        arrayElements = runtypes_1.String;
    }
    else if (of === 'undefined') {
        arrayElements = runtypes_1.Undefined;
    }
    else {
        arrayElements = runtypes_1.Unknown;
    }
    let fn = (0, runtypes_1.Array)(arrayElements);
    if (allowUndefined) {
        fn = fn.Or(runtypes_1.Undefined);
    }
    return fn;
};
exports.isArray = isArray;
const isBigInt = (options_ = {}) => {
    const options = data_types_1.CheckOptions.check(options_);
    const opts = { ...options };
    const { allowUndefined = false } = opts;
    let fn = runtypes_1.BigInt;
    if (allowUndefined) {
        fn = fn.Or(runtypes_1.Undefined);
    }
    return fn;
};
exports.isBigInt = isBigInt;
const isBigInt64Array = (options_ = {}) => {
    const options = data_types_1.CheckOptions.check(options_);
    const opts = { ...options };
    const { allowUndefined = false } = opts;
    let fn = (0, runtypes_1.Guard)((obj) => obj instanceof BigInt64Array);
    if (allowUndefined) {
        fn = fn.Or(runtypes_1.Undefined);
    }
    return fn;
};
exports.isBigInt64Array = isBigInt64Array;
const isBigUint64Array = (options_ = {}) => {
    const options = data_types_1.CheckOptions.check(options_);
    const opts = { ...options };
    const { allowUndefined = false } = opts;
    let fn = (0, runtypes_1.Guard)((obj) => obj instanceof BigUint64Array);
    if (allowUndefined) {
        fn = fn.Or(runtypes_1.Undefined);
    }
    return fn;
};
exports.isBigUint64Array = isBigUint64Array;
const isBoolean = (options_ = {}) => {
    const options = data_types_1.CheckOptions.check(options_);
    const opts = { ...options };
    const { allowUndefined = false } = opts;
    let fn = runtypes_1.Boolean;
    if (allowUndefined) {
        fn = fn.Or(runtypes_1.Undefined);
    }
    return fn;
};
exports.isBoolean = isBoolean;
const isDate = (options_ = {}) => {
    const options = data_types_1.CheckOptions.check(options_);
    const opts = { ...options };
    const { allowUndefined = false } = opts;
    let fn = (0, runtypes_1.Guard)((obj) => !isNaN(new Date(obj).getTime()));
    if (allowUndefined) {
        fn = fn.Or(runtypes_1.Undefined);
    }
    return fn;
};
exports.isDate = isDate;
const isFloat32Array = (options_ = {}) => {
    const options = data_types_1.CheckOptions.check(options_);
    const opts = { ...options };
    const { allowUndefined = false } = opts;
    let fn = (0, runtypes_1.Guard)((obj) => obj instanceof Float32Array);
    if (allowUndefined) {
        fn = fn.Or(runtypes_1.Undefined);
    }
    return fn;
};
exports.isFloat32Array = isFloat32Array;
const isFloat64Array = (options_ = {}) => {
    const options = data_types_1.CheckOptions.check(options_);
    const opts = { ...options };
    const { allowUndefined = false } = opts;
    let fn = (0, runtypes_1.Guard)((obj) => obj instanceof Float64Array);
    if (allowUndefined) {
        fn = fn.Or(runtypes_1.Undefined);
    }
    return fn;
};
exports.isFloat64Array = isFloat64Array;
const isFunction = (options_ = {}) => {
    const options = data_types_1.CheckOptions.check(options_);
    const opts = { ...options };
    const { allowUndefined = false } = opts;
    let fn = runtypes_1.Function;
    if (allowUndefined) {
        fn = fn.Or(runtypes_1.Undefined);
    }
    return fn;
};
exports.isFunction = isFunction;
const isInt8Array = (options_ = {}) => {
    const options = data_types_1.CheckOptions.check(options_);
    const opts = { ...options };
    const { allowUndefined = false } = opts;
    let fn = (0, runtypes_1.Guard)((obj) => obj instanceof Int8Array);
    if (allowUndefined) {
        fn = fn.Or(runtypes_1.Undefined);
    }
    return fn;
};
exports.isInt8Array = isInt8Array;
const isInt16Array = (options_ = {}) => {
    const options = data_types_1.CheckOptions.check(options_);
    const opts = { ...options };
    const { allowUndefined = false } = opts;
    let fn = (0, runtypes_1.Guard)((obj) => obj instanceof Int16Array);
    if (allowUndefined) {
        fn = fn.Or(runtypes_1.Undefined);
    }
    return fn;
};
exports.isInt16Array = isInt16Array;
const isInt32Array = (options_ = {}) => {
    const options = data_types_1.CheckOptions.check(options_);
    const opts = { ...options };
    const { allowUndefined = false } = opts;
    let fn = (0, runtypes_1.Guard)((obj) => obj instanceof Int32Array);
    if (allowUndefined) {
        fn = fn.Or(runtypes_1.Undefined);
    }
    return fn;
};
exports.isInt32Array = isInt32Array;
const isMap = (options_ = {}) => {
    const options = data_types_1.CheckOptions.check(options_);
    const opts = { ...options };
    const { allowUndefined = false } = opts;
    let fn = (0, runtypes_1.Guard)((obj) => obj instanceof Map);
    if (allowUndefined) {
        fn = fn.Or(runtypes_1.Undefined);
    }
    return fn;
};
exports.isMap = isMap;
const isNumber = (options_ = {}) => {
    const options = data_types_1.CheckOptions.check(options_);
    const opts = { ...options };
    const { allowUndefined = false, allowNaN = true } = opts;
    let fn = runtypes_1.Number;
    if (allowUndefined) {
        fn = fn.Or(runtypes_1.Undefined);
    }
    if (!allowNaN) {
        fn = fn.withConstraint((obj) => allowUndefined ? typeof obj === 'undefined' || !isNaN(obj) : !isNaN(obj));
    }
    return fn;
};
exports.isNumber = isNumber;
const isObject = (options_ = {}) => {
    const options = data_types_1.CheckOptions.check(options_);
    const opts = { ...options };
    const { allowUndefined = false, allowAnyPrototype = false } = opts;
    let fn = (0, runtypes_1.Guard)((obj) => allowAnyPrototype ? typeof obj === 'object' : Object.prototype.toString.call(obj) === '[object Object]');
    if (allowUndefined) {
        fn = fn.Or(runtypes_1.Undefined);
    }
    return fn;
};
exports.isObject = isObject;
const isRegExp = (options_ = {}) => {
    const options = data_types_1.CheckOptions.check(options_);
    const opts = { ...options };
    const { allowUndefined = false } = opts;
    let fn = (0, runtypes_1.Guard)((obj) => obj instanceof RegExp);
    if (allowUndefined) {
        fn = fn.Or(runtypes_1.Undefined);
    }
    return fn;
};
exports.isRegExp = isRegExp;
const isSet = (options_ = {}) => {
    const options = data_types_1.CheckOptions.check(options_);
    const opts = { ...options };
    const { allowUndefined = false } = opts;
    let fn = (0, runtypes_1.Guard)((obj) => obj instanceof Set);
    if (allowUndefined) {
        fn = fn.Or(runtypes_1.Undefined);
    }
    return fn;
};
exports.isSet = isSet;
const isString = (options_ = {}) => {
    const options = data_types_1.CheckOptions.check(options_);
    const opts = { ...options };
    const { allowUndefined = false } = opts;
    let fn = runtypes_1.String;
    if (allowUndefined) {
        fn = fn.Or(runtypes_1.Undefined);
    }
    return fn;
};
exports.isString = isString;
const isSymbol = (options_ = {}) => {
    const options = data_types_1.CheckOptions.check(options_);
    const opts = { ...options };
    const { allowUndefined = false } = opts;
    let fn = runtypes_1.Symbol;
    if (allowUndefined) {
        fn = fn.Or(runtypes_1.Undefined);
    }
    return fn;
};
exports.isSymbol = isSymbol;
const isUint8Array = (options_ = {}) => {
    const options = data_types_1.CheckOptions.check(options_);
    const opts = { ...options };
    const { allowUndefined = false } = opts;
    let fn = (0, runtypes_1.Guard)((obj) => obj instanceof Uint8Array);
    if (allowUndefined) {
        fn = fn.Or(runtypes_1.Undefined);
    }
    return fn;
};
exports.isUint8Array = isUint8Array;
const isUint8ClampedArray = (options_ = {}) => {
    const options = data_types_1.CheckOptions.check(options_);
    const opts = { ...options };
    const { allowUndefined = false } = opts;
    let fn = (0, runtypes_1.Guard)((obj) => obj instanceof Uint8ClampedArray);
    if (allowUndefined) {
        fn = fn.Or(runtypes_1.Undefined);
    }
    return fn;
};
exports.isUint8ClampedArray = isUint8ClampedArray;
const isUint16Array = (options_ = {}) => {
    const options = data_types_1.CheckOptions.check(options_);
    const opts = { ...options };
    const { allowUndefined = false } = opts;
    let fn = (0, runtypes_1.Guard)((obj) => obj instanceof Uint16Array);
    if (allowUndefined) {
        fn = fn.Or(runtypes_1.Undefined);
    }
    return fn;
};
exports.isUint16Array = isUint16Array;
const isUint32Array = (options_ = {}) => {
    const options = data_types_1.CheckOptions.check(options_);
    const opts = { ...options };
    const { allowUndefined = false } = opts;
    let fn = (0, runtypes_1.Guard)((obj) => obj instanceof Uint32Array);
    if (allowUndefined) {
        fn = fn.Or(runtypes_1.Undefined);
    }
    return fn;
};
exports.isUint32Array = isUint32Array;
exports.fromLiteral = {
    array: exports.isArray,
    bigint: exports.isBigInt,
    bigint64array: exports.isBigInt64Array,
    biguint64array: exports.isBigUint64Array,
    boolean: exports.isBoolean,
    date: exports.isDate,
    float32array: exports.isFloat32Array,
    float64array: exports.isFloat64Array,
    function: exports.isFunction,
    int8array: exports.isInt8Array,
    int16array: exports.isInt16Array,
    int32array: exports.isInt32Array,
    map: exports.isMap,
    number: exports.isNumber,
    object: exports.isObject,
    regexp: exports.isRegExp,
    set: exports.isSet,
    string: exports.isString,
    symbol: exports.isSymbol,
    uint8array: exports.isUint8Array,
    uint8clampedarray: exports.isUint8ClampedArray,
    uint16array: exports.isUint16Array,
    uint32array: exports.isUint32Array
};
//# sourceMappingURL=check.js.map