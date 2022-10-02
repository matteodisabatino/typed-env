declare class TypedEnv {
    constructor(source_?: object);
    static get version(): string;
    get(key_: string, toType_?: string, defaultValue_?: unknown): any;
    has(key_: string): boolean;
    first(keys_: string[], toType_?: string, defaultValue_?: unknown): any;
    require(key_: string, toType_?: string): any;
    requireFirst(keys_: string[], toType_?: string): any;
    get exists(): any;
    get required(): any;
}
export { TypedEnv };
//# sourceMappingURL=index.d.ts.map