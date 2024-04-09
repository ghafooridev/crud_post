import { AnyPgTable } from "drizzle-orm/pg-core";
import { Relation, Relations } from "drizzle-orm/relations";
import "./@types/utils";
import { ConfigIntrospectCasing } from "./cli/commands/utils";
import { PgSchemaInternal } from "./serializer/pgSchema";
export declare const relationsToTypeScript: (schema: Record<string, Record<string, AnyPgTable<{}>>>, relations: Record<string, Relations<string, Record<string, Relation<string>>>>) => string;
export declare const schemaToTypeScript: (schema: PgSchemaInternal, casing: ConfigIntrospectCasing) => {
    file: string;
    imports: string;
    decalrations: string;
    schemaEntry: string;
};
