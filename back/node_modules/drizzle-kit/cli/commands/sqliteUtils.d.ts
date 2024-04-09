import { TypeOf } from "zod";
import { configIntrospectSchema } from "./utils";
export declare const sqliteConnectionSchema: import("zod").ZodUnion<[import("zod").ZodObject<{
    driver: import("zod").ZodLiteral<"turso">;
    dbCredentials: import("zod").ZodObject<{
        url: import("zod").ZodString;
        authToken: import("zod").ZodOptional<import("zod").ZodString>;
    }, "strip", import("zod").ZodTypeAny, {
        authToken?: string | undefined;
        url: string;
    }, {
        authToken?: string | undefined;
        url: string;
    }>;
}, "strip", import("zod").ZodTypeAny, {
    driver: "turso";
    dbCredentials: {
        authToken?: string | undefined;
        url: string;
    };
}, {
    driver: "turso";
    dbCredentials: {
        authToken?: string | undefined;
        url: string;
    };
}>, import("zod").ZodObject<{
    driver: import("zod").ZodLiteral<"libsql">;
    dbCredentials: import("zod").ZodObject<{
        url: import("zod").ZodString;
    }, "strip", import("zod").ZodTypeAny, {
        url: string;
    }, {
        url: string;
    }>;
}, "strip", import("zod").ZodTypeAny, {
    driver: "libsql";
    dbCredentials: {
        url: string;
    };
}, {
    driver: "libsql";
    dbCredentials: {
        url: string;
    };
}>, import("zod").ZodObject<{
    driver: import("zod").ZodLiteral<"better-sqlite">;
    dbCredentials: import("zod").ZodObject<{
        url: import("zod").ZodString;
    }, "strip", import("zod").ZodTypeAny, {
        url: string;
    }, {
        url: string;
    }>;
}, "strip", import("zod").ZodTypeAny, {
    driver: "better-sqlite";
    dbCredentials: {
        url: string;
    };
}, {
    driver: "better-sqlite";
    dbCredentials: {
        url: string;
    };
}>]>;
export declare const sqliteCliConfigSchema: import("zod").ZodIntersection<import("zod").ZodObject<{
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
    driver: import("zod").ZodLiteral<"turso">;
    dbCredentials: import("zod").ZodObject<{
        url: import("zod").ZodString;
        authToken: import("zod").ZodOptional<import("zod").ZodString>;
    }, "strip", import("zod").ZodTypeAny, {
        authToken?: string | undefined;
        url: string;
    }, {
        authToken?: string | undefined;
        url: string;
    }>;
}, "strip", import("zod").ZodTypeAny, {
    driver: "turso";
    dbCredentials: {
        authToken?: string | undefined;
        url: string;
    };
}, {
    driver: "turso";
    dbCredentials: {
        authToken?: string | undefined;
        url: string;
    };
}>, import("zod").ZodObject<{
    driver: import("zod").ZodLiteral<"libsql">;
    dbCredentials: import("zod").ZodObject<{
        url: import("zod").ZodString;
    }, "strip", import("zod").ZodTypeAny, {
        url: string;
    }, {
        url: string;
    }>;
}, "strip", import("zod").ZodTypeAny, {
    driver: "libsql";
    dbCredentials: {
        url: string;
    };
}, {
    driver: "libsql";
    dbCredentials: {
        url: string;
    };
}>, import("zod").ZodObject<{
    driver: import("zod").ZodLiteral<"better-sqlite">;
    dbCredentials: import("zod").ZodObject<{
        url: import("zod").ZodString;
    }, "strip", import("zod").ZodTypeAny, {
        url: string;
    }, {
        url: string;
    }>;
}, "strip", import("zod").ZodTypeAny, {
    driver: "better-sqlite";
    dbCredentials: {
        url: string;
    };
}, {
    driver: "better-sqlite";
    dbCredentials: {
        url: string;
    };
}>]>>;
export type SQLiteCliConfig = TypeOf<typeof sqliteCliConfigSchema>;
export type SQLiteConnectionConfig = TypeOf<typeof sqliteConnectionSchema>;
export { configIntrospectSchema };
