"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isUint32Array = exports.isUint16Array = exports.isUint8ClampedArray = exports.isUint8Array = exports.isSymbol = exports.isString = exports.isSet = exports.isRegExp = exports.isObject = exports.isNumber = exports.isMap = exports.isInt32Array = exports.isInt16Array = exports.isInt8Array = exports.isFunction = exports.isFloat64Array = exports.isFloat32Array = exports.isDate = exports.isBoolean = exports.isBigUint64Array = exports.isBigInt64Array = exports.isBigInt = exports.isArray = exports.is = void 0;
const runtypes_1 = require("runtypes");
const data_types_1 = require("./data_types");
const is = (value, type_, options_ = {}) => {
    const type = (0, exports.isString)().check(type_);
    const options = data_types_1.CheckOptions.check(options_);
    const lType = type.toLowerCase();
    let checker;
    if (lType === 'array') {
        checker = (0, exports.isArray)({ allowUndefined: options.allowUndefined, of: options.of });
    }
    else if (lType === 'bigint') {
        checker = (0, exports.isBigInt)(options);
    }
    else if (lType === 'bigint64array') {
        checker = (0, exports.isBigInt64Array)(options);
    }
    else if (lType === 'biguint64array') {
        checker = (0, exports.isBigUint64Array)(options);
    }
    else if (lType === 'boolean') {
        checker = (0, exports.isBoolean)(options);
    }
    else if (lType === 'date') {
        checker = (0, exports.isDate)(options);
    }
    else if (lType === 'float32array') {
        checker = (0, exports.isFloat32Array)(options);
    }
    else if (lType === 'float64array') {
        checker = (0, exports.isFloat64Array)(options);
    }
    else if (lType === 'function') {
        checker = (0, exports.isFunction)(options);
    }
    else if (lType === 'int8array') {
        checker = (0, exports.isInt8Array)(options);
    }
    else if (lType === 'int16array') {
        checker = (0, exports.isInt16Array)(options);
    }
    else if (lType === 'int32array') {
        checker = (0, exports.isInt32Array)(options);
    }
    else if (lType === 'map') {
        checker = (0, exports.isMap)(options);
    }
    else if (lType === 'number') {
        checker = (0, exports.isNumber)(options);
    }
    else if (lType === 'object') {
        checker = (0, exports.isObject)(options);
    }
    else if (lType === 'regexp') {
        checker = (0, exports.isRegExp)(options);
    }
    else if (lType === 'set') {
        checker = (0, exports.isSet)(options);
    }
    else if (lType === 'string') {
        checker = (0, exports.isString)(options);
    }
    else if (lType === 'symbol') {
        checker = (0, exports.isSymbol)(options);
    }
    else if (lType === 'uint8array') {
        checker = (0, exports.isUint8Array)(options);
    }
    else if (lType === 'uint8clampedarray') {
        checker = (0, exports.isUint8ClampedArray)(options);
    }
    else if (lType === 'uint16array') {
        checker = (0, exports.isUint16Array)(options);
    }
    else if (lType === 'uint32array') {
        checker = (0, exports.isUint32Array)(options);
    }
    else {
        throw new SyntaxError(`Unknown type "${type_}"`);
    }
    return checker.check(value);
};
exports.is = is;
const isArray = (options_ = {}) => {
    const options = data_types_1.CheckOptions.check(options_);
    const { allowUndefined = false, of } = options;
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
    return (allowUndefined
        ? (0, runtypes_1.Union)((0, runtypes_1.Array)(arrayElements), runtypes_1.Undefined)
        : (0, runtypes_1.Array)(arrayElements));
};
exports.isArray = isArray;
const isBigInt = (options_ = {}) => {
    const options = data_types_1.CheckOptions.check(options_);
    const { allowUndefined = false } = options;
    return (allowUndefined
        ? (0, runtypes_1.Union)(runtypes_1.BigInt, runtypes_1.Undefined)
        : runtypes_1.BigInt);
};
exports.isBigInt = isBigInt;
const isBigInt64Array = (options_ = {}) => {
    const options = data_types_1.CheckOptions.check(options_);
    const { allowUndefined = false } = options;
    const neededType = runtypes_1.Unknown.withGuard((obj) => obj instanceof BigInt64Array);
    return (allowUndefined
        ? (0, runtypes_1.Union)(neededType, runtypes_1.Undefined)
        : neededType);
};
exports.isBigInt64Array = isBigInt64Array;
const isBigUint64Array = (options_ = {}) => {
    const options = data_types_1.CheckOptions.check(options_);
    const { allowUndefined = false } = options;
    const neededType = runtypes_1.Unknown.withGuard((obj) => obj instanceof BigUint64Array);
    return (allowUndefined
        ? (0, runtypes_1.Union)(neededType, runtypes_1.Undefined)
        : neededType);
};
exports.isBigUint64Array = isBigUint64Array;
const isBoolean = (options_ = {}) => {
    const options = data_types_1.CheckOptions.check(options_);
    const { allowUndefined = false } = options;
    return (allowUndefined
        ? (0, runtypes_1.Union)(runtypes_1.Boolean, runtypes_1.Undefined)
        : runtypes_1.Boolean);
};
exports.isBoolean = isBoolean;
const isDate = (options_ = {}) => {
    const options = data_types_1.CheckOptions.check(options_);
    const { allowUndefined = false } = options;
    const neededType = runtypes_1.Unknown.withGuard((obj) => !isNaN(new Date(obj).getTime()));
    return (allowUndefined
        ? (0, runtypes_1.Union)(neededType, runtypes_1.Undefined)
        : neededType);
};
exports.isDate = isDate;
const isFloat32Array = (options_ = {}) => {
    const options = data_types_1.CheckOptions.check(options_);
    const { allowUndefined = false } = options;
    const neededType = runtypes_1.Unknown.withGuard((obj) => obj instanceof Float32Array);
    return (allowUndefined
        ? (0, runtypes_1.Union)(neededType, runtypes_1.Undefined)
        : neededType);
};
exports.isFloat32Array = isFloat32Array;
const isFloat64Array = (options_ = {}) => {
    const options = data_types_1.CheckOptions.check(options_);
    const { allowUndefined = false } = options;
    const neededType = runtypes_1.Unknown.withGuard((obj) => obj instanceof Float64Array);
    return (allowUndefined
        ? (0, runtypes_1.Union)(neededType, runtypes_1.Undefined)
        : neededType);
};
exports.isFloat64Array = isFloat64Array;
const isFunction = (options_ = {}) => {
    const options = data_types_1.CheckOptions.check(options_);
    const { allowUndefined = false } = options;
    return (allowUndefined
        ? (0, runtypes_1.Union)(runtypes_1.Function, runtypes_1.Undefined)
        : runtypes_1.Function);
};
exports.isFunction = isFunction;
const isInt8Array = (options_ = {}) => {
    const options = data_types_1.CheckOptions.check(options_);
    const { allowUndefined = false } = options;
    const neededType = runtypes_1.Unknown.withGuard((obj) => obj instanceof Int8Array);
    return (allowUndefined
        ? (0, runtypes_1.Union)(neededType, runtypes_1.Undefined)
        : neededType);
};
exports.isInt8Array = isInt8Array;
const isInt16Array = (options_ = {}) => {
    const options = data_types_1.CheckOptions.check(options_);
    const { allowUndefined = false } = options;
    const neededType = runtypes_1.Unknown.withGuard((obj) => obj instanceof Int16Array);
    return (allowUndefined
        ? (0, runtypes_1.Union)(neededType, runtypes_1.Undefined)
        : neededType);
};
exports.isInt16Array = isInt16Array;
const isInt32Array = (options_ = {}) => {
    const options = data_types_1.CheckOptions.check(options_);
    const { allowUndefined = false } = options;
    const neededType = runtypes_1.Unknown.withGuard((obj) => obj instanceof Int32Array);
    return (allowUndefined
        ? (0, runtypes_1.Union)(neededType, runtypes_1.Undefined)
        : neededType);
};
exports.isInt32Array = isInt32Array;
const isMap = (options_ = {}) => {
    const options = data_types_1.CheckOptions.check(options_);
    const { allowUndefined = false } = options;
    const neededType = runtypes_1.Unknown.withGuard((obj) => obj instanceof Map);
    return (allowUndefined
        ? (0, runtypes_1.Union)(neededType, runtypes_1.Undefined)
        : neededType);
};
exports.isMap = isMap;
const isNumber = (options_ = {}) => {
    const options = data_types_1.CheckOptions.check(options_);
    const { allowUndefined = false, allowNaN = true } = options;
    const neededType = allowNaN
        ? runtypes_1.Number
        : runtypes_1.Number.withConstraint((obj) => !isNaN(obj));
    return (allowUndefined
        ? (0, runtypes_1.Union)(neededType, runtypes_1.Undefined)
        : neededType);
};
exports.isNumber = isNumber;
const isObject = (options_ = {}) => {
    const options = data_types_1.CheckOptions.check(options_);
    const { allowUndefined = false, allowAnyPrototype = false } = options;
    const neededType = runtypes_1.Unknown.withGuard((obj) => allowAnyPrototype
        ? typeof obj === 'object'
        : Object.prototype.toString.call(obj) === '[object Object]');
    return (allowUndefined
        ? (0, runtypes_1.Union)(neededType, runtypes_1.Undefined)
        : neededType);
};
exports.isObject = isObject;
const isRegExp = (options_ = {}) => {
    const options = data_types_1.CheckOptions.check(options_);
    const { allowUndefined = false } = options;
    const neededType = runtypes_1.Unknown.withGuard((obj) => obj instanceof RegExp);
    return (allowUndefined
        ? (0, runtypes_1.Union)(neededType, runtypes_1.Undefined)
        : neededType);
};
exports.isRegExp = isRegExp;
const isSet = (options_ = {}) => {
    const options = data_types_1.CheckOptions.check(options_);
    const { allowUndefined = false } = options;
    const neededType = runtypes_1.Unknown.withGuard((obj) => obj instanceof Set);
    return (allowUndefined
        ? (0, runtypes_1.Union)(neededType, runtypes_1.Undefined)
        : neededType);
};
exports.isSet = isSet;
const isString = (options_ = {}) => {
    const options = data_types_1.CheckOptions.check(options_);
    const { allowUndefined = false } = options;
    return (allowUndefined
        ? (0, runtypes_1.Union)(runtypes_1.String, runtypes_1.Undefined)
        : runtypes_1.String);
};
exports.isString = isString;
const isSymbol = (options_ = {}) => {
    const options = data_types_1.CheckOptions.check(options_);
    const { allowUndefined = false } = options;
    return (allowUndefined
        ? (0, runtypes_1.Union)(runtypes_1.Symbol, runtypes_1.Undefined)
        : runtypes_1.Symbol);
};
exports.isSymbol = isSymbol;
const isUint8Array = (options_ = {}) => {
    const options = data_types_1.CheckOptions.check(options_);
    const { allowUndefined = false } = options;
    const neededType = runtypes_1.Unknown.withGuard((obj) => obj instanceof Uint8Array);
    return (allowUndefined
        ? (0, runtypes_1.Union)(neededType, runtypes_1.Undefined)
        : neededType);
};
exports.isUint8Array = isUint8Array;
const isUint8ClampedArray = (options_ = {}) => {
    const options = data_types_1.CheckOptions.check(options_);
    const { allowUndefined = false } = options;
    const neededType = runtypes_1.Unknown.withGuard((obj) => obj instanceof Uint8ClampedArray);
    return (allowUndefined
        ? (0, runtypes_1.Union)(neededType, runtypes_1.Undefined)
        : neededType);
};
exports.isUint8ClampedArray = isUint8ClampedArray;
const isUint16Array = (options_ = {}) => {
    const options = data_types_1.CheckOptions.check(options_);
    const { allowUndefined = false } = options;
    const neededType = runtypes_1.Unknown.withGuard((obj) => obj instanceof Uint16Array);
    return (allowUndefined
        ? (0, runtypes_1.Union)(neededType, runtypes_1.Undefined)
        : neededType);
};
exports.isUint16Array = isUint16Array;
const isUint32Array = (options_ = {}) => {
    const options = data_types_1.CheckOptions.check(options_);
    const { allowUndefined = false } = options;
    const neededType = runtypes_1.Unknown.withGuard((obj) => obj instanceof Uint32Array);
    return (allowUndefined
        ? (0, runtypes_1.Union)(neededType, runtypes_1.Undefined)
        : neededType);
};
exports.isUint32Array = isUint32Array;
//# sourceMappingURL=check.js.map