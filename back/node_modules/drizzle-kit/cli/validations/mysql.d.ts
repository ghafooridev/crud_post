import { TypeOf } from "zod";
export declare const mysqlConnectionCli: import("zod").ZodUnion<[import("zod").ZodObject<{
    driver: import("zod").ZodLiteral<"mysql2">;
    host: import("zod").ZodString;
    port: import("zod").ZodOptional<import("zod").ZodNumber>;
    user: import("zod").ZodDefault<import("zod").ZodString>;
    password: import("zod").ZodOptional<import("zod").ZodString>;
    database: import("zod").ZodString;
}, "strip", import("zod").ZodTypeAny, {
    port?: number | undefined;
    password?: string | undefined;
    driver: "mysql2";
    host: string;
    user: string;
    database: string;
}, {
    port?: number | undefined;
    user?: string | undefined;
    password?: string | undefined;
    driver: "mysql2";
    host: string;
    database: string;
}>, import("zod").ZodObject<{
    driver: import("zod").ZodLiteral<"mysql2">;
    uri: import("zod").ZodString;
}, "strip", import("zod").ZodTypeAny, {
    driver: "mysql2";
    uri: string;
}, {
    driver: "mysql2";
    uri: string;
}>]>;
export declare const mysql2credentials: import("zod").ZodUnion<[import("zod").ZodObject<{
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
    uri: import("zod").ZodString;
}, "strip", import("zod").ZodTypeAny, {
    uri: string;
}, {
    uri: string;
}>]>;
export declare const mysqlConnectionConfig: import("zod").ZodObject<{
    driver: import("zod").ZodLiteral<"mysql2">;
    dbCredentials: import("zod").ZodUnion<[import("zod").ZodObject<{
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
        uri: import("zod").ZodString;
    }, "strip", import("zod").ZodTypeAny, {
        uri: string;
    }, {
        uri: string;
    }>]>;
}, "strip", import("zod").ZodTypeAny, {
    driver: "mysql2";
    dbCredentials: {
        port?: number | undefined;
        password?: string | undefined;
        host: string;
        user: string;
        database: string;
    } | {
        uri: string;
    };
}, {
    driver: "mysql2";
    dbCredentials: {
        port?: number | undefined;
        user?: string | undefined;
        password?: string | undefined;
        host: string;
        database: string;
    } | {
        uri: string;
    };
}>;
export declare const mysqlConfigIntrospectSchema: import("zod").ZodIntersection<import("zod").ZodObject<{
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
}>, import("zod").ZodObject<{
    driver: import("zod").ZodLiteral<"mysql2">;
    dbCredentials: import("zod").ZodUnion<[import("zod").ZodObject<{
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
        uri: import("zod").ZodString;
    }, "strip", import("zod").ZodTypeAny, {
        uri: string;
    }, {
        uri: string;
    }>]>;
}, "strip", import("zod").ZodTypeAny, {
    driver: "mysql2";
    dbCredentials: {
        port?: number | undefined;
        password?: string | undefined;
        host: string;
        user: string;
        database: string;
    } | {
        uri: string;
    };
}, {
    driver: "mysql2";
    dbCredentials: {
        port?: number | undefined;
        user?: string | undefined;
        password?: string | undefined;
        host: string;
        database: string;
    } | {
        uri: string;
    };
}>>;
export declare const mysqlCliIntrospectParams: import("zod").ZodIntersection<import("zod").ZodObject<{
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
}>, import("zod").ZodUnion<[import("zod").ZodObject<{
    driver: import("zod").ZodLiteral<"mysql2">;
    host: import("zod").ZodString;
    port: import("zod").ZodOptional<import("zod").ZodNumber>;
    user: import("zod").ZodDefault<import("zod").ZodString>;
    password: import("zod").ZodOptional<import("zod").ZodString>;
    database: import("zod").ZodString;
}, "strip", import("zod").ZodTypeAny, {
    port?: number | undefined;
    password?: string | undefined;
    driver: "mysql2";
    host: string;
    user: string;
    database: string;
}, {
    port?: number | undefined;
    user?: string | undefined;
    password?: string | undefined;
    driver: "mysql2";
    host: string;
    database: string;
}>, import("zod").ZodObject<{
    driver: import("zod").ZodLiteral<"mysql2">;
    uri: import("zod").ZodString;
}, "strip", import("zod").ZodTypeAny, {
    driver: "mysql2";
    uri: string;
}, {
    driver: "mysql2";
    uri: string;
}>]>>;
export declare const mysqlCliPushParams: import("zod").ZodIntersection<import("zod").ZodObject<{
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
}>, import("zod").ZodUnion<[import("zod").ZodObject<{
    driver: import("zod").ZodLiteral<"mysql2">;
    host: import("zod").ZodString;
    port: import("zod").ZodOptional<import("zod").ZodNumber>;
    user: import("zod").ZodDefault<import("zod").ZodString>;
    password: import("zod").ZodOptional<import("zod").ZodString>;
    database: import("zod").ZodString;
}, "strip", import("zod").ZodTypeAny, {
    port?: number | undefined;
    password?: string | undefined;
    driver: "mysql2";
    host: string;
    user: string;
    database: string;
}, {
    port?: number | undefined;
    user?: string | undefined;
    password?: string | undefined;
    driver: "mysql2";
    host: string;
    database: string;
}>, import("zod").ZodObject<{
    driver: import("zod").ZodLiteral<"mysql2">;
    uri: import("zod").ZodString;
}, "strip", import("zod").ZodTypeAny, {
    driver: "mysql2";
    uri: string;
}, {
    driver: "mysql2";
    uri: string;
}>]>>;
export declare const mysqlConfigPushParams: import("zod").ZodIntersection<import("zod").ZodObject<{
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
}>, import("zod").ZodObject<{
    driver: import("zod").ZodLiteral<"mysql2">;
    dbCredentials: import("zod").ZodUnion<[import("zod").ZodObject<{
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
        uri: import("zod").ZodString;
    }, "strip", import("zod").ZodTypeAny, {
        uri: string;
    }, {
        uri: string;
    }>]>;
}, "strip", import("zod").ZodTypeAny, {
    driver: "mysql2";
    dbCredentials: {
        port?: number | undefined;
        password?: string | undefined;
        host: string;
        user: string;
        database: string;
    } | {
        uri: string;
    };
}, {
    driver: "mysql2";
    dbCredentials: {
        port?: number | undefined;
        user?: string | undefined;
        password?: string | undefined;
        host: string;
        database: string;
    } | {
        uri: string;
    };
}>>;
export type MySQLPushConfig = TypeOf<typeof mysqlConfigPushParams>;
export type MySQLConfigIntrospect = TypeOf<typeof mysqlConfigIntrospectSchema>;
export type MySQLCliIntrospect = TypeOf<typeof mysqlCliIntrospectParams>;
export type MySQLConnectionConfig = TypeOf<typeof mysqlConnectionConfig>;
export declare const printCliConnectionIssues: (options: any) => void;
export declare const printConfigConnectionIssues: (options: any) => void;
export declare const validateMySqlIntrospect: (options: Record<string, any>) => Promise<MySQLConfigIntrospect>;
export declare const validateMySqlPush: (options: Record<string, unknown>) => Promise<MySQLPushConfig>;
