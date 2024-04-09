import { TypeOf } from "zod";
export declare const pgConnectionCli: import("zod").ZodUnion<[import("zod").ZodObject<{
    driver: import("zod").ZodLiteral<"pg">;
    host: import("zod").ZodString;
    port: import("zod").ZodOptional<import("zod").ZodNumber>;
    user: import("zod").ZodDefault<import("zod").ZodString>;
    password: import("zod").ZodOptional<import("zod").ZodString>;
    database: import("zod").ZodString;
    ssl: import("zod").ZodOptional<import("zod").ZodBoolean>;
    type: import("zod").ZodDefault<import("zod").ZodLiteral<"params">>;
}, "strip", import("zod").ZodTypeAny, {
    port?: number | undefined;
    password?: string | undefined;
    ssl?: boolean | undefined;
    type: "params";
    driver: "pg";
    host: string;
    user: string;
    database: string;
}, {
    type?: "params" | undefined;
    port?: number | undefined;
    user?: string | undefined;
    password?: string | undefined;
    ssl?: boolean | undefined;
    driver: "pg";
    host: string;
    database: string;
}>, import("zod").ZodObject<{
    driver: import("zod").ZodLiteral<"pg">;
    connectionString: import("zod").ZodString;
    type: import("zod").ZodDefault<import("zod").ZodLiteral<"url">>;
}, "strip", import("zod").ZodTypeAny, {
    type: "url";
    driver: "pg";
    connectionString: string;
}, {
    type?: "url" | undefined;
    driver: "pg";
    connectionString: string;
}>]>;
export declare const pgConnectionConfig: import("zod").ZodUnion<[import("zod").ZodObject<{
    driver: import("zod").ZodLiteral<"pg">;
    dbCredentials: import("zod").ZodObject<{
        host: import("zod").ZodString;
        port: import("zod").ZodOptional<import("zod").ZodNumber>;
        user: import("zod").ZodDefault<import("zod").ZodString>;
        password: import("zod").ZodOptional<import("zod").ZodString>;
        database: import("zod").ZodString;
        ssl: import("zod").ZodOptional<import("zod").ZodBoolean>;
        type: import("zod").ZodOptional<import("zod").ZodDefault<import("zod").ZodLiteral<"params">>>;
    }, "strip", import("zod").ZodTypeAny, {
        type?: "params" | undefined;
        port?: number | undefined;
        password?: string | undefined;
        ssl?: boolean | undefined;
        host: string;
        user: string;
        database: string;
    }, {
        type?: "params" | undefined;
        port?: number | undefined;
        user?: string | undefined;
        password?: string | undefined;
        ssl?: boolean | undefined;
        host: string;
        database: string;
    }>;
}, "strip", import("zod").ZodTypeAny, {
    driver: "pg";
    dbCredentials: {
        type?: "params" | undefined;
        port?: number | undefined;
        password?: string | undefined;
        ssl?: boolean | undefined;
        host: string;
        user: string;
        database: string;
    };
}, {
    driver: "pg";
    dbCredentials: {
        type?: "params" | undefined;
        port?: number | undefined;
        user?: string | undefined;
        password?: string | undefined;
        ssl?: boolean | undefined;
        host: string;
        database: string;
    };
}>, import("zod").ZodObject<{
    driver: import("zod").ZodLiteral<"pg">;
    dbCredentials: import("zod").ZodObject<{
        connectionString: import("zod").ZodString;
        type: import("zod").ZodOptional<import("zod").ZodDefault<import("zod").ZodLiteral<"url">>>;
    }, "strip", import("zod").ZodTypeAny, {
        type?: "url" | undefined;
        connectionString: string;
    }, {
        type?: "url" | undefined;
        connectionString: string;
    }>;
}, "strip", import("zod").ZodTypeAny, {
    driver: "pg";
    dbCredentials: {
        type?: "url" | undefined;
        connectionString: string;
    };
}, {
    driver: "pg";
    dbCredentials: {
        type?: "url" | undefined;
        connectionString: string;
    };
}>]>;
export declare const pgConfigIntrospectSchema: import("zod").ZodIntersection<import("zod").ZodObject<{
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
    driver: import("zod").ZodLiteral<"pg">;
    dbCredentials: import("zod").ZodObject<{
        host: import("zod").ZodString;
        port: import("zod").ZodOptional<import("zod").ZodNumber>;
        user: import("zod").ZodDefault<import("zod").ZodString>;
        password: import("zod").ZodOptional<import("zod").ZodString>;
        database: import("zod").ZodString;
        ssl: import("zod").ZodOptional<import("zod").ZodBoolean>;
        type: import("zod").ZodOptional<import("zod").ZodDefault<import("zod").ZodLiteral<"params">>>;
    }, "strip", import("zod").ZodTypeAny, {
        type?: "params" | undefined;
        port?: number | undefined;
        password?: string | undefined;
        ssl?: boolean | undefined;
        host: string;
        user: string;
        database: string;
    }, {
        type?: "params" | undefined;
        port?: number | undefined;
        user?: string | undefined;
        password?: string | undefined;
        ssl?: boolean | undefined;
        host: string;
        database: string;
    }>;
}, "strip", import("zod").ZodTypeAny, {
    driver: "pg";
    dbCredentials: {
        type?: "params" | undefined;
        port?: number | undefined;
        password?: string | undefined;
        ssl?: boolean | undefined;
        host: string;
        user: string;
        database: string;
    };
}, {
    driver: "pg";
    dbCredentials: {
        type?: "params" | undefined;
        port?: number | undefined;
        user?: string | undefined;
        password?: string | undefined;
        ssl?: boolean | undefined;
        host: string;
        database: string;
    };
}>, import("zod").ZodObject<{
    driver: import("zod").ZodLiteral<"pg">;
    dbCredentials: import("zod").ZodObject<{
        connectionString: import("zod").ZodString;
        type: import("zod").ZodOptional<import("zod").ZodDefault<import("zod").ZodLiteral<"url">>>;
    }, "strip", import("zod").ZodTypeAny, {
        type?: "url" | undefined;
        connectionString: string;
    }, {
        type?: "url" | undefined;
        connectionString: string;
    }>;
}, "strip", import("zod").ZodTypeAny, {
    driver: "pg";
    dbCredentials: {
        type?: "url" | undefined;
        connectionString: string;
    };
}, {
    driver: "pg";
    dbCredentials: {
        type?: "url" | undefined;
        connectionString: string;
    };
}>]>>;
export declare const pgCliIntrospectParams: import("zod").ZodIntersection<import("zod").ZodObject<{
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
    driver: import("zod").ZodLiteral<"pg">;
    host: import("zod").ZodString;
    port: import("zod").ZodOptional<import("zod").ZodNumber>;
    user: import("zod").ZodDefault<import("zod").ZodString>;
    password: import("zod").ZodOptional<import("zod").ZodString>;
    database: import("zod").ZodString;
    ssl: import("zod").ZodOptional<import("zod").ZodBoolean>;
    type: import("zod").ZodDefault<import("zod").ZodLiteral<"params">>;
}, "strip", import("zod").ZodTypeAny, {
    port?: number | undefined;
    password?: string | undefined;
    ssl?: boolean | undefined;
    type: "params";
    driver: "pg";
    host: string;
    user: string;
    database: string;
}, {
    type?: "params" | undefined;
    port?: number | undefined;
    user?: string | undefined;
    password?: string | undefined;
    ssl?: boolean | undefined;
    driver: "pg";
    host: string;
    database: string;
}>, import("zod").ZodObject<{
    driver: import("zod").ZodLiteral<"pg">;
    connectionString: import("zod").ZodString;
    type: import("zod").ZodDefault<import("zod").ZodLiteral<"url">>;
}, "strip", import("zod").ZodTypeAny, {
    type: "url";
    driver: "pg";
    connectionString: string;
}, {
    type?: "url" | undefined;
    driver: "pg";
    connectionString: string;
}>]>>;
export declare const pgCliPushParams: import("zod").ZodIntersection<import("zod").ZodObject<{
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
    driver: import("zod").ZodLiteral<"pg">;
    host: import("zod").ZodString;
    port: import("zod").ZodOptional<import("zod").ZodNumber>;
    user: import("zod").ZodDefault<import("zod").ZodString>;
    password: import("zod").ZodOptional<import("zod").ZodString>;
    database: import("zod").ZodString;
    ssl: import("zod").ZodOptional<import("zod").ZodBoolean>;
    type: import("zod").ZodDefault<import("zod").ZodLiteral<"params">>;
}, "strip", import("zod").ZodTypeAny, {
    port?: number | undefined;
    password?: string | undefined;
    ssl?: boolean | undefined;
    type: "params";
    driver: "pg";
    host: string;
    user: string;
    database: string;
}, {
    type?: "params" | undefined;
    port?: number | undefined;
    user?: string | undefined;
    password?: string | undefined;
    ssl?: boolean | undefined;
    driver: "pg";
    host: string;
    database: string;
}>, import("zod").ZodObject<{
    driver: import("zod").ZodLiteral<"pg">;
    connectionString: import("zod").ZodString;
    type: import("zod").ZodDefault<import("zod").ZodLiteral<"url">>;
}, "strip", import("zod").ZodTypeAny, {
    type: "url";
    driver: "pg";
    connectionString: string;
}, {
    type?: "url" | undefined;
    driver: "pg";
    connectionString: string;
}>]>>;
export declare const pgConfigPushParams: import("zod").ZodIntersection<import("zod").ZodObject<{
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
    driver: import("zod").ZodLiteral<"pg">;
    dbCredentials: import("zod").ZodObject<{
        host: import("zod").ZodString;
        port: import("zod").ZodOptional<import("zod").ZodNumber>;
        user: import("zod").ZodDefault<import("zod").ZodString>;
        password: import("zod").ZodOptional<import("zod").ZodString>;
        database: import("zod").ZodString;
        ssl: import("zod").ZodOptional<import("zod").ZodBoolean>;
        type: import("zod").ZodOptional<import("zod").ZodDefault<import("zod").ZodLiteral<"params">>>;
    }, "strip", import("zod").ZodTypeAny, {
        type?: "params" | undefined;
        port?: number | undefined;
        password?: string | undefined;
        ssl?: boolean | undefined;
        host: string;
        user: string;
        database: string;
    }, {
        type?: "params" | undefined;
        port?: number | undefined;
        user?: string | undefined;
        password?: string | undefined;
        ssl?: boolean | undefined;
        host: string;
        database: string;
    }>;
}, "strip", import("zod").ZodTypeAny, {
    driver: "pg";
    dbCredentials: {
        type?: "params" | undefined;
        port?: number | undefined;
        password?: string | undefined;
        ssl?: boolean | undefined;
        host: string;
        user: string;
        database: string;
    };
}, {
    driver: "pg";
    dbCredentials: {
        type?: "params" | undefined;
        port?: number | undefined;
        user?: string | undefined;
        password?: string | undefined;
        ssl?: boolean | undefined;
        host: string;
        database: string;
    };
}>, import("zod").ZodObject<{
    driver: import("zod").ZodLiteral<"pg">;
    dbCredentials: import("zod").ZodObject<{
        connectionString: import("zod").ZodString;
        type: import("zod").ZodOptional<import("zod").ZodDefault<import("zod").ZodLiteral<"url">>>;
    }, "strip", import("zod").ZodTypeAny, {
        type?: "url" | undefined;
        connectionString: string;
    }, {
        type?: "url" | undefined;
        connectionString: string;
    }>;
}, "strip", import("zod").ZodTypeAny, {
    driver: "pg";
    dbCredentials: {
        type?: "url" | undefined;
        connectionString: string;
    };
}, {
    driver: "pg";
    dbCredentials: {
        type?: "url" | undefined;
        connectionString: string;
    };
}>]>>;
export type PgPushConfig = TypeOf<typeof pgConfigPushParams>;
export type PgConfigIntrospect = TypeOf<typeof pgConfigIntrospectSchema>;
export type PgCliIntrospect = TypeOf<typeof pgCliIntrospectParams>;
export type PgConnectionConfig = TypeOf<typeof pgConnectionConfig>;
export declare const printConfigConnectionIssues: (options: any) => void;
export declare const validatePgIntrospect: (options: Record<string, any>) => Promise<PgConfigIntrospect>;
export declare const validatePgPush: (options: Record<string, unknown>) => Promise<PgPushConfig>;
