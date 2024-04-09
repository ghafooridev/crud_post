export type DbConnection = {
    driver: "turso";
    dbCredentials: {
        url: string;
        authToken?: string;
    };
} | {
    driver: "better-sqlite";
    dbCredentials: {
        url: string;
    };
} | {
    driver: "libsql";
    dbCredentials: {
        url: string;
    };
} | {
    driver: "d1";
    dbCredentials: {
        wranglerConfigPath: string;
        dbName: string;
    };
} | {
    driver: "pg";
    dbCredentials: {
        host: string;
        port?: number;
        user?: string;
        password?: string;
        database: string;
        ssl?: boolean;
    } | {
        connectionString: string;
    };
} | {
    driver: "mysql2";
    dbCredentials: {
        host: string;
        port?: number;
        user?: string;
        password?: string;
        database: string;
    } | {
        uri: string;
    };
};
export type Config = {
    out?: string | undefined;
    breakpoints?: boolean | undefined;
    tablesFilter?: string | string[] | undefined;
    schemaFilter?: string | string[] | undefined;
    schema?: string | string[];
    verbose?: boolean | undefined;
    strict?: boolean | undefined;
} & {
    introspect?: {
        casing: "camel" | "preserve";
    };
} & ({
    driver: "turso";
    dbCredentials: {
        url: string;
        authToken?: string;
    };
} | {
    driver: "better-sqlite";
    dbCredentials: {
        url: string;
    };
} | {
    driver: "libsql";
    dbCredentials: {
        url: string;
    };
} | {
    driver: "pg";
    dbCredentials: {
        host: string;
        port?: number;
        user?: string;
        password?: string;
        database: string;
        ssl?: boolean;
    } | {
        connectionString: string;
    };
} | {
    driver: "mysql2";
    dbCredentials: {
        host: string;
        port?: number;
        user?: string;
        password?: string;
        database: string;
    } | {
        uri: string;
    };
} | {
    driver: "d1";
    dbCredentials: {
        wranglerConfigPath: string;
        dbName: string;
    };
} | {
    driver: "expo";
} | {});
export declare function defineConfig(config: Config): Config;
