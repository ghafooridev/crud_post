import "./@types/utils";
import type { ConfigIntrospectCasing } from "./cli/commands/utils";
import type { SQLiteSchemaInternal } from "./serializer/sqliteSchema";
export declare const indexName: (tableName: string, columns: string[]) => string;
export declare const schemaToTypeScript: (schema: SQLiteSchemaInternal, casing: ConfigIntrospectCasing["casing"]) => {
    file: string;
    imports: string;
    decalrations: string;
    schemaEntry: string;
};
