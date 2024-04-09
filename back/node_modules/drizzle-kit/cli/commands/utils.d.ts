import { TypeOf } from "zod";
export declare const safeRegister: () => Promise<{
    unregister: () => void;
}>;
export type GenerateConfig = {
    schema: string | string[];
    out: string;
    breakpoints: boolean;
    custom: boolean;
    bundle: boolean;
};
export declare const prepareGenerateConfig: (options: {
    schema?: string | string[];
    out?: string;
    config?: string;
    breakpoints: boolean;
    custom: boolean;
}) => Promise<GenerateConfig>;
export declare const assertOutFolder: (it: {
    config?: string;
} | {
    out: string;
}) => Promise<string>;
export declare const driver: import("zod").ZodUnion<[import("zod").ZodLiteral<"better-sqlite">, import("zod").ZodLiteral<"turso">, import("zod").ZodLiteral<"libsql">, import("zod").ZodLiteral<"d1">, import("zod").ZodLiteral<"expo">, import("zod").ZodLiteral<"pg">, import("zod").ZodLiteral<"mysql2">]>;
export declare const configCommonSchema: import("zod").ZodObject<{
    schema: import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodArray<import("zod").ZodString, "many">]>;
    out: import("zod").ZodOptional<import("zod").ZodString>;
    breakpoints: import("zod").ZodDefault<import("zod").ZodBoolean>;
    driver: import("zod").ZodOptional<import("zod").ZodUnion<[import("zod").ZodLiteral<"better-sqlite">, import("zod").ZodLiteral<"turso">, import("zod").ZodLiteral<"libsql">, import("zod").ZodLiteral<"d1">, import("zod").ZodLiteral<"expo">, import("zod").ZodLiteral<"pg">, import("zod").ZodLiteral<"mysql2">]>>;
    tablesFilter: import("zod").ZodOptional<import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodArray<import("zod").ZodString, "many">]>>;
    schemaFilter: import("zod").ZodDefault<import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodArray<import("zod").ZodString, "many">]>>;
}, "strip", import("zod").ZodTypeAny, {
    out?: string | undefined;
    driver?: "turso" | "better-sqlite" | "libsql" | "d1" | "pg" | "mysql2" | "expo" | undefined;
    tablesFilter?: string | string[] | undefined;
    schema: string | string[];
    breakpoints: boolean;
    schemaFilter: string | string[];
}, {
    out?: string | undefined;
    breakpoints?: boolean | undefined;
    driver?: "turso" | "better-sqlite" | "libsql" | "d1" | "pg" | "mysql2" | "expo" | undefined;
    tablesFilter?: string | string[] | undefined;
    schemaFilter?: string | string[] | undefined;
    schema: string | string[];
}>;
export declare const introspectCasing: import("zod").ZodDefault<import("zod").ZodObject<{
    casing: import("zod").ZodDefault<import("zod").ZodUnion<[import("zod").ZodLiteral<"camel">, import("zod").ZodLiteral<"preserve">]>>;
}, "strip", import("zod").ZodTypeAny, {
    casing: "camel" | "preserve";
}, {
    casing?: "camel" | "preserve" | undefined;
}>>;
export declare const configIntrospectSchema: import("zod").ZodObject<{
    schema: import("zod").ZodOptional<import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodArray<import("zod").ZodString, "many">]>>;
    out: import("zod").ZodDefault<import("zod").ZodOptional<import("zod").ZodString>>;
    breakpoints: import("zod").ZodDefault<import("zod").ZodBoolean>;
    tablesFilter: import("zod").ZodOptional<import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodArray<import("zod").ZodString, "many">]>>;
    schemaFilter: import("zod").ZodDefault<import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodArray<import("zod").ZodString, "many">]>>;
    introspect: import("zod").ZodDefault<import("zod").ZodObject<{
        casing: import("zod").ZodDefault<import("zod").ZodUnion<[import("zod").ZodLiteral<"camel">, import("zod").ZodLiteral<"preserve">]>>;
    }, "strip", import("zod").ZodTypeAny, {
        casing: "camel" | "preserve";
    }, {
        casing?: "camel" | "preserve" | undefined;
    }>>;
}, "strip", import("zod").ZodTypeAny, {
    schema?: string | string[] | undefined;
    tablesFilter?: string | string[] | undefined;
    out: string;
    breakpoints: boolean;
    schemaFilter: string | string[];
    introspect: {
        casing: "camel" | "preserve";
    };
}, {
    schema?: string | string[] | undefined;
    out?: string | undefined;
    breakpoints?: boolean | undefined;
    tablesFilter?: string | string[] | undefined;
    schemaFilter?: string | string[] | undefined;
    introspect?: {
        casing?: "camel" | "preserve" | undefined;
    } | undefined;
}>;
export type ConfigIntrospectSchema = TypeOf<typeof configIntrospectSchema>;
export type ConfigIntrospectCasing = TypeOf<typeof introspectCasing>;
export declare const configIntrospectCliSchema: import("zod").ZodObject<{
    schema: import("zod").ZodOptional<import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodArray<import("zod").ZodString, "many">]>>;
    out: import("zod").ZodDefault<import("zod").ZodOptional<import("zod").ZodString>>;
    breakpoints: import("zod").ZodDefault<import("zod").ZodBoolean>;
    tablesFilter: import("zod").ZodOptional<import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodArray<import("zod").ZodString, "many">]>>;
    schemaFilter: import("zod").ZodDefault<import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodArray<import("zod").ZodString, "many">]>>;
    introspectCasing: import("zod").ZodDefault<import("zod").ZodUnion<[import("zod").ZodLiteral<"camel">, import("zod").ZodLiteral<"preserve">]>>;
}, "strip", import("zod").ZodTypeAny, {
    schema?: string | string[] | undefined;
    tablesFilter?: string | string[] | undefined;
    out: string;
    breakpoints: boolean;
    schemaFilter: string | string[];
    introspectCasing: "camel" | "preserve";
}, {
    schema?: string | string[] | undefined;
    out?: string | undefined;
    breakpoints?: boolean | undefined;
    tablesFilter?: string | string[] | undefined;
    schemaFilter?: string | string[] | undefined;
    introspectCasing?: "camel" | "preserve" | undefined;
}>;
export declare const configGenerateSchema: import("zod").ZodObject<{
    schema: import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodArray<import("zod").ZodString, "many">]>;
    out: import("zod").ZodDefault<import("zod").ZodOptional<import("zod").ZodString>>;
    breakpoints: import("zod").ZodDefault<import("zod").ZodBoolean>;
}, "strip", import("zod").ZodTypeAny, {
    schema: string | string[];
    out: string;
    breakpoints: boolean;
}, {
    out?: string | undefined;
    breakpoints?: boolean | undefined;
    schema: string | string[];
}>;
export type GenerateSchema = TypeOf<typeof configGenerateSchema>;
export declare const configPushSchema: import("zod").ZodObject<{
    schema: import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodArray<import("zod").ZodString, "many">]>;
    tablesFilter: import("zod").ZodOptional<import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodArray<import("zod").ZodString, "many">]>>;
    schemaFilter: import("zod").ZodDefault<import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodArray<import("zod").ZodString, "many">]>>;
    verbose: import("zod").ZodDefault<import("zod").ZodBoolean>;
    strict: import("zod").ZodDefault<import("zod").ZodBoolean>;
}, "strip", import("zod").ZodTypeAny, {
    tablesFilter?: string | string[] | undefined;
    strict: boolean;
    schema: string | string[];
    schemaFilter: string | string[];
    verbose: boolean;
}, {
    strict?: boolean | undefined;
    tablesFilter?: string | string[] | undefined;
    schemaFilter?: string | string[] | undefined;
    verbose?: boolean | undefined;
    schema: string | string[];
}>;
export declare const mysqlConnectionSchema: import("zod").ZodUnion<[import("zod").ZodObject<{
    host: import("zod").ZodString;
    port: import("zod").ZodOptional<import("zod").ZodNumber>;
    user: import("zod").ZodDefault<import("zod").ZodString>;
    password: import("zod").ZodOptional<import("zod").ZodString>;
    database: import("zod").ZodString;
}, "strip", import("zod").ZodTypeAny, {
    port?: number | undefined;
    password?: string | undefined;
    host: string;
    user: string;
    database: string;
}, {
    port?: number | undefined;
    user?: string | undefined;
    password?: string | undefined;
    host: string;
    database: string;
}>, import("zod").ZodObject<{
    connectionString: import("zod").ZodString;
}, "strip", import("zod").ZodTypeAny, {
    connectionString: string;
}, {
    connectionString: string;
}>, import("zod").ZodObject<{}, "strip", import("zod").ZodTypeAny, {}, {}>]>;
export declare const mySqlCliConfigSchema: import("zod").ZodIntersection<import("zod").ZodObject<{
    schema: import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodArray<import("zod").ZodString, "many">]>;
    out: import("zod").ZodOptional<import("zod").ZodString>;
    breakpoints: import("zod").ZodDefault<import("zod").ZodBoolean>;
    driver: import("zod").ZodOptional<import("zod").ZodUnion<[import("zod").ZodLiteral<"better-sqlite">, import("zod").ZodLiteral<"turso">, import("zod").ZodLiteral<"libsql">, import("zod").ZodLiteral<"d1">, import("zod").ZodLiteral<"expo">, import("zod").ZodLiteral<"pg">, import("zod").ZodLiteral<"mysql2">]>>;
    tablesFilter: import("zod").ZodOptional<import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodArray<import("zod").ZodString, "many">]>>;
    schemaFilter: import("zod").ZodDefault<import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodArray<import("zod").ZodString, "many">]>>;
}, "strip", import("zod").ZodTypeAny, {
    out?: string | undefined;
    driver?: "turso" | "better-sqlite" | "libsql" | "d1" | "pg" | "mysql2" | "expo" | undefined;
    tablesFilter?: string | string[] | undefined;
    schema: string | string[];
    breakpoints: boolean;
    schemaFilter: string | string[];
}, {
    out?: string | undefined;
    breakpoints?: boolean | undefined;
    driver?: "turso" | "better-sqlite" | "libsql" | "d1" | "pg" | "mysql2" | "expo" | undefined;
    tablesFilter?: string | string[] | undefined;
    schemaFilter?: string | string[] | undefined;
    schema: string | string[];
}>, import("zod").ZodUnion<[import("zod").ZodObject<{
    host: import("zod").ZodString;
    port: import("zod").ZodOptional<import("zod").ZodNumber>;
    user: import("zod").ZodDefault<import("zod").ZodString>;
    password: import("zod").ZodOptional<import("zod").ZodString>;
    database: import("zod").ZodString;
}, "strip", import("zod").ZodTypeAny, {
    port?: number | undefined;
    password?: string | undefined;
    host: string;
    user: string;
    database: string;
}, {
    port?: number | undefined;
    user?: string | undefined;
    password?: string | undefined;
    host: string;
    database: string;
}>, import("zod").ZodObject<{
    connectionString: import("zod").ZodString;
}, "strip", import("zod").ZodTypeAny, {
    connectionString: string;
}, {
    connectionString: string;
}>, import("zod").ZodObject<{}, "strip", import("zod").ZodTypeAny, {}, {}>]>>;
export declare const mySqlIntrospectConfigSchema: import("zod").ZodIntersection<import("zod").ZodObject<{
    schema: import("zod").ZodOptional<import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodArray<import("zod").ZodString, "many">]>>;
    out: import("zod").ZodDefault<import("zod").ZodOptional<import("zod").ZodString>>;
    breakpoints: import("zod").ZodDefault<import("zod").ZodBoolean>;
    tablesFilter: import("zod").ZodOptional<import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodArray<import("zod").ZodString, "many">]>>;
    schemaFilter: import("zod").ZodDefault<import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodArray<import("zod").ZodString, "many">]>>;
    introspect: import("zod").ZodDefault<import("zod").ZodObject<{
        casing: import("zod").ZodDefault<import("zod").ZodUnion<[import("zod").ZodLiteral<"camel">, import("zod").ZodLiteral<"preserve">]>>;
    }, "strip", import("zod").ZodTypeAny, {
        casing: "camel" | "preserve";
    }, {
        casing?: "camel" | "preserve" | undefined;
    }>>;
}, "strip", import("zod").ZodTypeAny, {
    schema?: string | string[] | undefined;
    tablesFilter?: string | string[] | undefined;
    out: string;
    breakpoints: boolean;
    schemaFilter: string | string[];
    introspect: {
        casing: "camel" | "preserve";
    };
}, {
    schema?: string | string[] | undefined;
    out?: string | undefined;
    breakpoints?: boolean | undefined;
    tablesFilter?: string | string[] | undefined;
    schemaFilter?: string | string[] | undefined;
    introspect?: {
        casing?: "camel" | "preserve" | undefined;
    } | undefined;
}>, import("zod").ZodUnion<[import("zod").ZodObject<{
    host: import("zod").ZodString;
    port: import("zod").ZodOptional<import("zod").ZodNumber>;
    user: import("zod").ZodDefault<import("zod").ZodString>;
    password: import("zod").ZodOptional<import("zod").ZodString>;
    database: import("zod").ZodString;
}, "strip", import("zod").ZodTypeAny, {
    port?: number | undefined;
    password?: string | undefined;
    host: string;
    user: string;
    database: string;
}, {
    port?: number | undefined;
    user?: string | undefined;
    password?: string | undefined;
    host: string;
    database: string;
}>, import("zod").ZodObject<{
    connectionString: import("zod").ZodString;
}, "strip", import("zod").ZodTypeAny, {
    connectionString: string;
}, {
    connectionString: string;
}>, import("zod").ZodObject<{}, "strip", import("zod").ZodTypeAny, {}, {}>]>>;
export type MySqlCliConfig = TypeOf<typeof mySqlCliConfigSchema>;
export type CliConfig = MySqlCliConfig;
export type Driver = TypeOf<typeof driver>;
export declare const drizzleConfigFromFile: (configPath?: string) => Promise<CliConfig>;
export declare const readDrizzleConfig: (configPath?: string) => Promise<any>;
