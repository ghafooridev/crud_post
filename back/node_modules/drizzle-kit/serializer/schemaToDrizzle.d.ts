import { Relations } from "drizzle-orm";
import { AnyPgTable } from "drizzle-orm/pg-core";
import { AnySQLiteTable } from "drizzle-orm/sqlite-core";
import type { PgSchemaInternal } from "./pgSchema";
import type { SQLiteSchemaInternal } from "./sqliteSchema";
export declare const pgSchemaToDrizzle: (schema: PgSchemaInternal, schemaName: string) => Record<string, AnyPgTable | Relations>;
export declare const sqliteSchemaToDrizzle: (schema: SQLiteSchemaInternal) => Record<string, AnySQLiteTable | Relations>;
