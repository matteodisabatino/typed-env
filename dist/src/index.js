'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypedEnv = void 0;
const env_1 = require("@humanwhocodes/env");
const check_1 = require("./libs/check");
const convert_1 = require("./libs/convert");
const package_json_1 = __importDefault(require("../package.json"));
const privates = new WeakMap();
class TypedEnvPrivates {
    constructor(env) {
        this.env = env;
    }
}
class TypedEnv {
    constructor(source_) {
        const source = (0, check_1.is)(source_, 'object', { allowUndefined: true });
        const env = new env_1.Env(source);
        privates.set(this, new TypedEnvPrivates(env));
    }
    static get version() {
        return package_json_1.default.version;
    }
    get(key_, toType_ = 'string', defaultValue_) {
        const key = (0, check_1.is)(key_, 'string');
        const toType = (0, check_1.is)(toType_, 'string');
        const defaultValue = (0, check_1.is)(defaultValue_, toType, { allowUndefined: true });
        const { env } = privates.get(this);
        const val = env.get(key);
        if (typeof val === 'undefined') {
            return defaultValue;
        }
        return (0, convert_1.to)(val, toType);
    }
    has(key_) {
        const key = (0, check_1.is)(key_, 'string');
        const { env } = privates.get(this);
        return env.has(key);
    }
    first(keys_, toType_ = 'string', defaultValue_) {
        const keys = (0, check_1.is)(keys_, 'array', { of: 'string' });
        const toType = (0, check_1.is)(toType_, 'string');
        const defaultValue = (0, check_1.is)(defaultValue_, toType, { allowUndefined: true });
        const { env } = privates.get(this);
        const val = env.first(keys);
        if (typeof val === 'undefined') {
            return defaultValue;
        }
        return (0, convert_1.to)(val, toType);
    }
    require(key_, toType_ = 'string') {
        const key = (0, check_1.is)(key_, 'string');
        const toType = (0, check_1.is)(toType_, 'string');
        const { env } = privates.get(this);
        const val = env.require(key);
        return (0, convert_1.to)(val, toType);
    }
    requireFirst(keys_, toType_ = 'string') {
        const keys = (0, check_1.is)(keys_, 'array', { of: 'string' });
        const toType = (0, check_1.is)(toType_, 'string');
        const { env } = privates.get(this);
        const val = env.requireFirst(keys);
        return (0, convert_1.to)(val, toType);
    }
    get exists() {
        const { env } = privates.get(this);
        return env.exists;
    }
    get required() {
        const { env } = privates.get(this);
        return env.required;
    }
}
exports.TypedEnv = TypedEnv;
//# sourceMappingURL=index.js.map