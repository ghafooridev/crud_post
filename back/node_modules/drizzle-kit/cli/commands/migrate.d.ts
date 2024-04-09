import { CommonSchema, CommonSquashedSchema, Dialect } from "../../schemaValidator";
import { schema } from "../views";
import { PgSchema } from "src/serializer/pgSchema";
import { SQLiteSchema } from "src/serializer/sqliteSchema";
import { MySqlSchema } from "src/serializer/mysqlSchema";
import { Journal } from "src/utils";
import { GenerateConfig } from "./utils";
export type Named = {
    name: string;
};
export type NamedWithSchema = {
    name: string;
    schema?: string;
};
export declare const prepareAndMigratePg: (config: GenerateConfig) => Promise<void>;
export declare const prepareMySQLPush: (config: {
    schema: string | string[];
}, snapshot: MySqlSchema) => Promise<{
    sqlStatements: string[];
    statements: import("../../jsonStatements").JsonStatement[];
    validatedCur: {
        internal?: {
            tables: Record<string, {
                columns: Record<string, {
                    isDefaultAnExpression?: boolean | undefined;
                } | undefined>;
            } | undefined>;
        } | undefined;
        id: string;
        prevId: string;
        version: "5";
        dialect: "mysql";
        tables: Record<string, {
            schema?: string | undefined;
            name: string;
            columns: Record<string, {
                default?: any;
                onUpdate?: any;
                autoincrement?: boolean | undefined;
                name: string;
                type: string;
                primaryKey: boolean;
                notNull: boolean;
            }>;
            indexes: Record<string, {
                using?: "btree" | "hash" | undefined;
                algorithm?: "default" | "inplace" | "copy" | undefined;
                lock?: "default" | "none" | "shared" | "exclusive" | undefined;
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
                name: string;
                columns: string[];
            }>;
            uniqueConstraints: Record<string, {
                name: string;
                columns: string[];
            }>;
        }>;
        schemas: Record<string, string>;
        _meta: {
            columns: Record<string, string>;
            tables: Record<string, string>;
            schemas: Record<string, string>;
        };
    };
    validatedPrev: {
        internal?: {
            tables: Record<string, {
                columns: Record<string, {
                    isDefaultAnExpression?: boolean | undefined;
                } | undefined>;
            } | undefined>;
        } | undefined;
        id: string;
        prevId: string;
        version: "5";
        dialect: "mysql";
        tables: Record<string, {
            schema?: string | undefined;
            name: string;
            columns: Record<string, {
                default?: any;
                onUpdate?: any;
                autoincrement?: boolean | undefined;
                name: string;
                type: string;
                primaryKey: boolean;
                notNull: boolean;
            }>;
            indexes: Record<string, {
                using?: "btree" | "hash" | undefined;
                algorithm?: "default" | "inplace" | "copy" | undefined;
                lock?: "default" | "none" | "shared" | "exclusive" | undefined;
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
                name: string;
                columns: string[];
            }>;
            uniqueConstraints: Record<string, {
                name: string;
                columns: string[];
            }>;
        }>;
        schemas: Record<string, string>;
        _meta: {
            columns: Record<string, string>;
            tables: Record<string, string>;
            schemas: Record<string, string>;
        };
    };
} | undefined>;
export declare const prepareSQLitePush: (config: {
    schema: string | string[];
}, snapshot: SQLiteSchema) => Promise<{
    sqlStatements: string[];
    statements: import("../../jsonStatements").JsonStatement[];
    squashedPrev: {
        enums?: any;
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
            indexes: Record<string, string>;
            foreignKeys: Record<string, string>;
            compositePrimaryKeys: Record<string, string>;
            uniqueConstraints: Record<string, string>;
        }>;
    };
    squashedCur: {
        enums?: any;
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
            indexes: Record<string, string>;
            foreignKeys: Record<string, string>;
            compositePrimaryKeys: Record<string, string>;
            uniqueConstraints: Record<string, string>;
        }>;
    };
    meta: {
        schemas: {};
        tables: {};
        columns: {};
    } | undefined;
} | undefined>;
export declare const preparePgPush: (config: {
    schema: string | string[];
}, snapshot: PgSchema, schemaFilter: string[]) => Promise<{
    sqlStatements: string[];
    statements: import("../../jsonStatements").JsonStatement[];
    squashedPrev: {
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
            indexes: Record<string, string>;
            foreignKeys: Record<string, string>;
            schema: string;
            compositePrimaryKeys: Record<string, string>;
            uniqueConstraints: Record<string, string>;
        }>;
        schemas: Record<string, string>;
        enums: Record<string, {
            name: string;
            values: Record<string, string>;
        }>;
    };
    squashedCur: {
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
            indexes: Record<string, string>;
            foreignKeys: Record<string, string>;
            schema: string;
            compositePrimaryKeys: Record<string, string>;
            uniqueConstraints: Record<string, string>;
        }>;
        schemas: Record<string, string>;
        enums: Record<string, {
            name: string;
            values: Record<string, string>;
        }>;
    };
} | undefined>;
export declare const prepareAndMigrateMySql: (config: GenerateConfig) => Promise<void>;
export declare const prepareAndMigrateSqlite: (config: GenerateConfig) => Promise<void>;
export declare const prepareSQL: (prev: CommonSquashedSchema, cur: CommonSquashedSchema, dialect: Dialect, prevFull?: any, curFull?: any) => Promise<{
    statements: import("../../jsonStatements").JsonStatement[];
    sqlStatements: string[];
    _meta: {
        schemas: {};
        tables: {};
        columns: {};
    } | undefined;
}>;
export declare const BREAKPOINT = "--> statement-breakpoint\n";
export declare const writeResult: ({ cur, sqlStatements, journal, _meta, outFolder, breakpoints, bundle, type, }: {
    cur: CommonSchema;
    sqlStatements: string[];
    journal: Journal;
    _meta?: any;
    outFolder: string;
    breakpoints: boolean;
    bundle?: boolean | undefined;
    type?: "none" | "custom" | "introspect" | undefined;
}) => void;
export declare const embeddedMigrations: (journal: Journal) => string;
export declare const prepareSnapshotFolderName: () => string;
