import { type Static } from 'runtypes';
import { CheckOptions } from './data_types';
import type * as returnTypes from '../types/returns';
export declare const is: <O extends {
    allowUndefined?: boolean;
    allowNaN?: boolean;
    allowAnyPrototype?: boolean;
    of?: keyof returnTypes.ArrayElementMap;
}, T extends keyof returnTypes.IsReturnMap<O>>(value: unknown, type_: T, options_?: O & Static<typeof CheckOptions>) => returnTypes.IsReturnMap<O>[T];
export declare const isArray: <O extends {
    allowUndefined?: boolean;
    of?: keyof returnTypes.ArrayElementMap;
}>(options_?: O & Static<typeof CheckOptions>) => returnTypes.ArrayReturn<O>;
export declare const isBigInt: <O extends {
    allowUndefined?: boolean;
}>(options_?: O & Static<typeof CheckOptions>) => returnTypes.BigIntReturn<O>;
export declare const isBigInt64Array: <O extends {
    allowUndefined?: boolean;
}>(options_?: O & Static<typeof CheckOptions>) => returnTypes.BigInt64ArrayReturn<O>;
export declare const isBigUint64Array: <O extends {
    allowUndefined?: boolean;
}>(options_?: O & Static<typeof CheckOptions>) => returnTypes.BigUint64ArrayReturn<O>;
export declare const isBoolean: <O extends {
    allowUndefined?: boolean;
}>(options_?: O & Static<typeof CheckOptions>) => returnTypes.BooleanReturn<O>;
export declare const isDate: <O extends {
    allowUndefined?: boolean;
}>(options_?: O & Static<typeof CheckOptions>) => returnTypes.DateReturn<O>;
export declare const isFloat32Array: <O extends {
    allowUndefined?: boolean;
}>(options_?: O & Static<typeof CheckOptions>) => returnTypes.Float32ArrayReturn<O>;
export declare const isFloat64Array: <O extends {
    allowUndefined?: boolean;
}>(options_?: O & Static<typeof CheckOptions>) => returnTypes.Float64ArrayReturn<O>;
export declare const isFunction: <O extends {
    allowUndefined?: boolean;
}>(options_?: O & Static<typeof CheckOptions>) => returnTypes.FunctionReturn<O>;
export declare const isInt8Array: <O extends {
    allowUndefined?: boolean;
}>(options_?: O & Static<typeof CheckOptions>) => returnTypes.Int8ArrayReturn<O>;
export declare const isInt16Array: <O extends {
    allowUndefined?: boolean;
}>(options_?: O & Static<typeof CheckOptions>) => returnTypes.Int16ArrayReturn<O>;
export declare const isInt32Array: <O extends {
    allowUndefined?: boolean;
}>(options_?: O & Static<typeof CheckOptions>) => returnTypes.Int32ArrayReturn<O>;
export declare const isMap: <O extends {
    allowUndefined?: boolean;
}>(options_?: O & Static<typeof CheckOptions>) => returnTypes.MapReturn<O>;
export declare const isNumber: <O extends {
    allowUndefined?: boolean;
    allowNaN?: boolean;
}>(options_?: O & Static<typeof CheckOptions>) => returnTypes.NumberReturn<O>;
export declare const isObject: <O extends {
    allowUndefined?: boolean;
    allowAnyPrototype?: boolean;
}>(options_?: O & Static<typeof CheckOptions>) => returnTypes.ObjectReturn<O>;
export declare const isRegExp: <O extends {
    allowUndefined?: boolean;
}>(options_?: O & Static<typeof CheckOptions>) => returnTypes.RegExpReturn<O>;
export declare const isSet: <O extends {
    allowUndefined?: boolean;
}>(options_?: O & Static<typeof CheckOptions>) => returnTypes.SetReturn<O>;
export declare const isString: <O extends {
    allowUndefined?: boolean;
}>(options_?: O & Static<typeof CheckOptions>) => returnTypes.StringReturn<O>;
export declare const isSymbol: <O extends {
    allowUndefined?: boolean;
}>(options_?: O & Static<typeof CheckOptions>) => returnTypes.SymbolReturn<O>;
export declare const isUint8Array: <O extends {
    allowUndefined?: boolean;
}>(options_?: O & Static<typeof CheckOptions>) => returnTypes.Uint8ArrayReturn<O>;
export declare const isUint8ClampedArray: <O extends {
    allowUndefined?: boolean;
}>(options_?: O & Static<typeof CheckOptions>) => returnTypes.Uint8ClampedArrayReturn<O>;
export declare const isUint16Array: <O extends {
    allowUndefined?: boolean;
}>(options_?: O & Static<typeof CheckOptions>) => returnTypes.Uint16ArrayReturn<O>;
export declare const isUint32Array: <O extends {
    allowUndefined?: boolean;
}>(options_?: O & Static<typeof CheckOptions>) => returnTypes.Uint32ArrayReturn<O>;
//# sourceMappingURL=check.d.ts.map