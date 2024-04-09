import type { SQLiteSchemaInternal } from "../serializer/sqliteSchema";
import { AnySQLiteTable } from "drizzle-orm/sqlite-core";
import type { IntrospectStage, IntrospectStatus } from "src/cli/views";
import type { DrizzleDbClient } from "src/drivers";
export declare const generateSqliteSnapshot: (tables: AnySQLiteTable[], enums: any[]) => SQLiteSchemaInternal;
export declare const fromDatabase: (db: DrizzleDbClient, tablesFilter?: (table: string) => boolean, progressCallback?: ((stage: IntrospectStage, count: number, status: IntrospectStatus) => void) | undefined) => Promise<SQLiteSchemaInternal>;
