import { PgSchema, PgEnum, AnyPgTable } from "drizzle-orm/pg-core";
export declare const prepareFromExports: (exports: Record<string, unknown>) => {
    tables: AnyPgTable<{}>[];
    enums: PgEnum<any>[];
    schemas: PgSchema<string>[];
};
export declare const prepareFromPgImports: (imports: string[]) => Promise<{
    tables: AnyPgTable<{}>[];
    enums: PgEnum<any>[];
    schemas: PgSchema<string>[];
}>;
