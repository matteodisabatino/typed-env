declare class TypedEnv {
    #private;
    constructor(source_?: object);
    static get version(): string;
    get(key_: string, toType_?: string, defaultValue_?: unknown): string | number | bigint | boolean | symbol | object | undefined;
    has(key_: string): boolean;
    first(keys_: string[], toType_?: string, defaultValue_?: unknown): string | number | bigint | boolean | symbol | object | undefined;
    require(key_: string, toType_?: string): string | number | bigint | boolean | symbol | object;
    requireFirst(keys_: string[], toType_?: string): string | number | bigint | boolean | symbol | object;
    get exists(): Record<string, string | undefined>;
    get required(): Record<string, string | undefined>;
}
export { TypedEnv };
//# sourceMappingURL=index.d.ts.map