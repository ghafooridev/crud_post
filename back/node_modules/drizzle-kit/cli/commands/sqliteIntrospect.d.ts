import type { SQLiteCliConfig, SQLiteConnectionConfig } from "./sqliteUtils";
import type { DrizzleDbClient } from "../../drivers";
export declare const connectToSQLite: (config: SQLiteConnectionConfig) => Promise<{
    client: import("../../drivers").BetterSqlite;
} | {
    client?: undefined;
}>;
export declare const sqliteIntrospect: (config: SQLiteCliConfig, filters: string[]) => Promise<{
    schema: {
        id: string;
        prevId: string;
        version: "5";
        dialect: "sqlite";
        tables: Record<string, {
            name: string;
            columns: Record<string, {
                default?: any;
                autoincrement?: boolean | undefined;
                name: string;
                type: string;
                primaryKey: boolean;
                notNull: boolean;
            }>;
            indexes: Record<string, {
                where?: string | undefined;
                name: string;
                columns: string[];
                isUnique: boolean;
            }>;
            foreignKeys: Record<string, {
                onUpdate?: string | undefined;
                onDelete?: string | undefined;
                name: string;
                tableFrom: string;
                columnsFrom: string[];
                tableTo: string;
                columnsTo: string[];
            }>;
            compositePrimaryKeys: Record<string, {
                name?: string | undefined;
                columns: string[];
            }>;
            uniqueConstraints: Record<string, {
                name: string;
                columns: string[];
            }>;
        }>;
        _meta: {
            columns: Record<string, string>;
            tables: Record<string, string>;
        };
        enums: {};
    };
    ts: {
        file: string;
        imports: string;
        decalrations: string;
        schemaEntry: string;
    };
}>;
export declare const sqlitePushIntrospect: (client: DrizzleDbClient, filters: string[]) => Promise<{
    schema: {
        id: string;
        prevId: string;
        version: "5";
        dialect: "sqlite";
        tables: Record<string, {
            name: string;
            columns: Record<string, {
                default?: any;
                autoincrement?: boolean | undefined;
                name: string;
                type: string;
                primaryKey: boolean;
                notNull: boolean;
            }>;
            indexes: Record<string, {
                where?: string | undefined;
                name: string;
                columns: string[];
                isUnique: boolean;
            }>;
            foreignKeys: Record<string, {
                onUpdate?: string | undefined;
                onDelete?: string | undefined;
                name: string;
                tableFrom: string;
                columnsFrom: string[];
                tableTo: string;
                columnsTo: string[];
            }>;
            compositePrimaryKeys: Record<string, {
                name?: string | undefined;
                columns: string[];
            }>;
            uniqueConstraints: Record<string, {
                name: string;
                columns: string[];
            }>;
        }>;
        _meta: {
            columns: Record<string, string>;
            tables: Record<string, string>;
        };
        enums: {};
    };
}>;
