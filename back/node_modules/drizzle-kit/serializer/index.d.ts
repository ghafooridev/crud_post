import type { PgSchemaInternal } from "./pgSchema";
import type { SQLiteSchemaInternal } from "./sqliteSchema";
import type { MySqlSchemaInternal } from "./mysqlSchema";
import type { SQL } from "drizzle-orm";
export declare const sqlToStr: (sql: SQL) => string;
export declare const serializeMySql: (path: string | string[]) => Promise<MySqlSchemaInternal>;
export declare const serializePg: (path: string | string[], schemaFilter?: string[]) => Promise<PgSchemaInternal>;
export declare const serializeSQLite: (path: string | string[]) => Promise<SQLiteSchemaInternal>;
export declare const prepareFilenames: (path: string | string[]) => string[];
