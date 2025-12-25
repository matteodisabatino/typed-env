"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _TypedEnv_env;
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypedEnv = void 0;
const env_1 = require("@humanwhocodes/env");
const check_1 = require("./libs/check");
const convert_1 = require("./libs/convert");
const package_json_1 = __importDefault(require("../package.json"));
class TypedEnv {
    constructor(source_) {
        _TypedEnv_env.set(this, void 0);
        const source = (0, check_1.is)(source_, 'object', { allowUndefined: true });
        __classPrivateFieldSet(this, _TypedEnv_env, new env_1.Env(source), "f");
    }
    static get version() {
        return package_json_1.default.version;
    }
    get(key_, toType_ = 'string', defaultValue_) {
        const key = (0, check_1.is)(key_, 'string');
        const toType = (0, check_1.is)(toType_, 'string');
        const defaultValue = (0, check_1.is)(defaultValue_, toType, { allowUndefined: true });
        const val = __classPrivateFieldGet(this, _TypedEnv_env, "f").get(key);
        if (typeof val === 'undefined') {
            return defaultValue;
        }
        return (0, convert_1.to)(val, toType);
    }
    has(key_) {
        const key = (0, check_1.is)(key_, 'string');
        return __classPrivateFieldGet(this, _TypedEnv_env, "f").has(key);
    }
    first(keys_, toType_ = 'string', defaultValue_) {
        const keys = (0, check_1.is)(keys_, 'array', { of: 'string' });
        const toType = (0, check_1.is)(toType_, 'string');
        const defaultValue = (0, check_1.is)(defaultValue_, toType, { allowUndefined: true });
        const val = __classPrivateFieldGet(this, _TypedEnv_env, "f").first(keys);
        if (typeof val === 'undefined') {
            return defaultValue;
        }
        return (0, convert_1.to)(val, toType);
    }
    require(key_, toType_ = 'string') {
        const key = (0, check_1.is)(key_, 'string');
        const toType = (0, check_1.is)(toType_, 'string');
        const val = __classPrivateFieldGet(this, _TypedEnv_env, "f").require(key);
        return (0, convert_1.to)(val, toType);
    }
    requireFirst(keys_, toType_ = 'string') {
        const keys = (0, check_1.is)(keys_, 'array', { of: 'string' });
        const toType = (0, check_1.is)(toType_, 'string');
        const val = __classPrivateFieldGet(this, _TypedEnv_env, "f").requireFirst(keys);
        return (0, convert_1.to)(val, toType);
    }
    get exists() {
        return __classPrivateFieldGet(this, _TypedEnv_env, "f").exists;
    }
    get required() {
        return __classPrivateFieldGet(this, _TypedEnv_env, "f").required;
    }
}
exports.TypedEnv = TypedEnv;
_TypedEnv_env = new WeakMap();
//# sourceMappingURL=index.js.map