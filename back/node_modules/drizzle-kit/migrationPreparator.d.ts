import { PgSchema, PgSchemaInternal } from "./serializer/pgSchema";
import { SQLiteSchema } from "./serializer/sqliteSchema";
import { MySqlSchema } from "./serializer/mysqlSchema";
export declare const prepareMySqlDbPushSnapshot: (prev: MySqlSchema, schemaPath: string | string[]) => Promise<{
    prev: MySqlSchema;
    cur: MySqlSchema;
}>;
export declare const prepareSQLiteDbPushSnapshot: (prev: SQLiteSchema, schemaPath: string | string[]) => Promise<{
    prev: SQLiteSchema;
    cur: SQLiteSchema;
}>;
export declare const preparePgDbPushSnapshot: (prev: PgSchema, schemaPath: string | string[], schemaFilter?: string[]) => Promise<{
    prev: PgSchema;
    cur: PgSchema;
}>;
export declare const prepareMySqlMigrationSnapshot: (migrationFolders: string[], schemaPath: string | string[]) => Promise<{
    prev: MySqlSchema;
    cur: MySqlSchema;
    custom: MySqlSchema;
}>;
export declare const prepareSqliteMigrationSnapshot: (snapshots: string[], schemaPath: string | string[]) => Promise<{
    prev: SQLiteSchema;
    cur: SQLiteSchema;
    custom: SQLiteSchema;
}>;
export declare const fillPgSnapshot: ({ serialized, id, idPrev, }: {
    serialized: PgSchemaInternal;
    id: string;
    idPrev: string;
}) => PgSchema;
export declare const preparePgMigrationSnapshot: (snapshots: string[], schemaPath: string | string[]) => Promise<{
    prev: PgSchema;
    cur: PgSchema;
    custom: PgSchema;
}>;
