import type { PgConfigIntrospect } from "../validations/pg";
import type { DrizzleDbClient } from "src/drivers";
export declare const pgSchemas: (client: DrizzleDbClient) => Promise<string[]>;
export declare const pgPushIntrospect: (connection: {
    client: DrizzleDbClient;
}, filters: string[], schemaFilters: string[]) => Promise<{
    schema: {
        id: string;
        prevId: string;
        version: "5";
        dialect: "pg";
        tables: Record<string, {
            name: string;
            columns: Record<string, {
                isUnique?: any;
                default?: any;
                uniqueName?: string | undefined;
                nullsNotDistinct?: boolean | undefined;
                name: string;
                type: string;
                primaryKey: boolean;
                notNull: boolean;
            }>;
            indexes: Record<string, {
                name: string;
                columns: string[];
                isUnique: boolean;
            }>;
            foreignKeys: Record<string, {
                onUpdate?: string | undefined;
                onDelete?: string | undefined;
                schemaTo?: string | undefined;
                name: string;
                tableFrom: string;
                columnsFrom: string[];
                tableTo: string;
                columnsTo: string[];
            }>;
            schema: string;
            compositePrimaryKeys: Record<string, {
                name: string;
                columns: string[];
            }>;
            uniqueConstraints: Record<string, {
                name: string;
                columns: string[];
                nullsNotDistinct: boolean;
            }>;
        }>;
        schemas: Record<string, string>;
        _meta: {
            columns: Record<string, string>;
            tables: Record<string, string>;
            schemas: Record<string, string>;
        };
        enums: Record<string, {
            name: string;
            values: Record<string, string>;
        }>;
    };
}>;
export declare const pgIntrospect: (config: PgConfigIntrospect, filters: string[], schemaFilters: string[]) => Promise<{
    schema: {
        id: string;
        prevId: string;
        version: "5";
        dialect: "pg";
        tables: Record<string, {
            name: string;
            columns: Record<string, {
                isUnique?: any;
                default?: any;
                uniqueName?: string | undefined;
                nullsNotDistinct?: boolean | undefined;
                name: string;
                type: string;
                primaryKey: boolean;
                notNull: boolean;
            }>;
            indexes: Record<string, {
                name: string;
                columns: string[];
                isUnique: boolean;
            }>;
            foreignKeys: Record<string, {
                onUpdate?: string | undefined;
                onDelete?: string | undefined;
                schemaTo?: string | undefined;
                name: string;
                tableFrom: string;
                columnsFrom: string[];
                tableTo: string;
                columnsTo: string[];
            }>;
            schema: string;
            compositePrimaryKeys: Record<string, {
                name: string;
                columns: string[];
            }>;
            uniqueConstraints: Record<string, {
                name: string;
                columns: string[];
                nullsNotDistinct: boolean;
            }>;
        }>;
        schemas: Record<string, string>;
        _meta: {
            columns: Record<string, string>;
            tables: Record<string, string>;
            schemas: Record<string, string>;
        };
        enums: Record<string, {
            name: string;
            values: Record<string, string>;
        }>;
    };
    ts: {
        file: string;
        imports: string;
        decalrations: string;
        schemaEntry: string;
    };
}>;
