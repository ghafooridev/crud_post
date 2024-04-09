import { AnyPgTable, PgEnum, PgSchema } from "drizzle-orm/pg-core";
import type { IntrospectStage, IntrospectStatus } from "../cli/views";
import type { PgSchemaInternal } from "../serializer/pgSchema";
import type { DrizzleDbClient } from "../drivers";
export declare const indexName: (tableName: string, columns: string[]) => string;
export declare const generatePgSnapshot: (tables: AnyPgTable[], enums: PgEnum<any>[], schemas: PgSchema[], schemaFilter?: string[]) => PgSchemaInternal;
export declare const fromDatabase: (db: DrizzleDbClient, tablesFilter: ((table: string) => boolean) | undefined, schemaFilters: string[], progressCallback?: ((stage: IntrospectStage, count: number, status: IntrospectStatus) => void) | undefined) => Promise<PgSchemaInternal>;
