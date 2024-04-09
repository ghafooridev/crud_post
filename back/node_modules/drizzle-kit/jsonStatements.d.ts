import { CommonSquashedSchema, Dialect } from "./schemaValidator";
import { MySqlSchema } from "./serializer/mysqlSchema";
import { PgSchema } from "./serializer/pgSchema";
import { AlteredColumn, Column, Table } from "./snapshotsDiffer";
export interface JsonSqliteCreateTableStatement {
    type: "sqlite_create_table";
    tableName: string;
    columns: Column[];
    referenceData: string[];
    compositePKs: string[][];
    uniqueConstraints?: string[];
}
export interface JsonCreateTableStatement {
    type: "create_table";
    tableName: string;
    schema: string;
    columns: Column[];
    compositePKs: string[];
    compositePkName?: string;
    uniqueConstraints?: string[];
}
export interface JsonDropTableStatement {
    type: "drop_table";
    tableName: string;
    schema: string;
}
export interface JsonRenameTableStatement {
    type: "rename_table";
    fromSchema: string;
    toSchema: string;
    tableNameFrom: string;
    tableNameTo: string;
}
export interface JsonCreateEnumStatement {
    type: "create_type_enum";
    name: string;
    values: string[];
}
export interface JsonAddValueToEnumStatement {
    type: "alter_type_add_value";
    name: string;
    value: string;
}
export interface JsonDropColumnStatement {
    type: "alter_table_drop_column";
    tableName: string;
    columnName: string;
    schema: string;
}
export interface JsonAddColumnStatement {
    type: "alter_table_add_column";
    tableName: string;
    column: Column;
    schema: string;
}
export interface JsonSqliteAddColumnStatement {
    type: "sqlite_alter_table_add_column";
    tableName: string;
    column: Column;
    referenceData?: string;
}
export interface JsonCreateIndexStatement {
    type: "create_index";
    tableName: string;
    data: string;
    schema: string;
}
export interface JsonReferenceStatement {
    type: "create_reference" | "alter_reference" | "delete_reference";
    data: string;
    schema: string;
    tableName: string;
}
export interface JsonCreateUniqueConstraint {
    type: "create_unique_constraint";
    tableName: string;
    data: string;
    schema?: string;
    constraintName?: string;
}
export interface JsonDeleteUniqueConstraint {
    type: "delete_unique_constraint";
    tableName: string;
    data: string;
    schema?: string;
    constraintName?: string;
}
export interface JsonAlterUniqueConstraint {
    type: "alter_unique_constraint";
    tableName: string;
    old: string;
    new: string;
    schema?: string;
    oldConstraintName?: string;
    newConstraintName?: string;
}
export interface JsonCreateCompositePK {
    type: "create_composite_pk";
    tableName: string;
    data: string;
    schema?: string;
    constraintName?: string;
}
export interface JsonDeleteCompositePK {
    type: "delete_composite_pk";
    tableName: string;
    data: string;
    schema?: string;
    constraintName?: string;
}
export interface JsonAlterCompositePK {
    type: "alter_composite_pk";
    tableName: string;
    old: string;
    new: string;
    schema?: string;
    oldConstraintName?: string;
    newConstraintName?: string;
}
export interface JsonAlterTableSetSchema {
    type: "alter_table_set_schema";
    tableName: string;
    schema: string;
}
export interface JsonAlterTableRemoveFromSchema {
    type: "alter_table_remove_from_schema";
    tableName: string;
    schema: string;
}
export interface JsonAlterTableSetNewSchema {
    type: "alter_table_set_new_schema";
    tableName: string;
    from: string;
    to: string;
}
export interface JsonCreateReferenceStatement extends JsonReferenceStatement {
    type: "create_reference";
}
export interface JsonAlterReferenceStatement extends JsonReferenceStatement {
    type: "alter_reference";
    oldFkey: string;
}
export interface JsonDeleteReferenceStatement extends JsonReferenceStatement {
    type: "delete_reference";
}
export interface JsonDropIndexStatement {
    type: "drop_index";
    tableName: string;
    data: string;
    schema: string;
}
export interface JsonRenameColumnStatement {
    type: "alter_table_rename_column";
    tableName: string;
    oldColumnName: string;
    newColumnName: string;
    schema: string;
}
export interface JsonAlterColumnTypeStatement {
    type: "alter_table_alter_column_set_type";
    tableName: string;
    columnName: string;
    newDataType: string;
    oldDataType: string;
    schema: string;
    columnDefault: string;
    columnOnUpdate: boolean;
    columnNotNull: boolean;
    columnAutoIncrement: boolean;
    columnPk: boolean;
}
export interface JsonAlterColumnSetPrimaryKeyStatement {
    type: "alter_table_alter_column_set_pk";
    tableName: string;
    schema: string;
    columnName: string;
}
export interface JsonAlterColumnDropPrimaryKeyStatement {
    type: "alter_table_alter_column_drop_pk";
    tableName: string;
    columnName: string;
    schema: string;
}
export interface JsonAlterColumnSetDefaultStatement {
    type: "alter_table_alter_column_set_default";
    tableName: string;
    columnName: string;
    newDefaultValue: any;
    oldDefaultValue?: any;
    schema: string;
    newDataType: string;
    columnOnUpdate: boolean;
    columnNotNull: boolean;
    columnAutoIncrement: boolean;
    columnPk: boolean;
}
export interface JsonAlterColumnDropDefaultStatement {
    type: "alter_table_alter_column_drop_default";
    tableName: string;
    columnName: string;
    schema: string;
    newDataType: string;
    columnDefault: string;
    columnOnUpdate: boolean;
    columnNotNull: boolean;
    columnAutoIncrement: boolean;
    columnPk: boolean;
}
export interface JsonAlterColumnSetNotNullStatement {
    type: "alter_table_alter_column_set_notnull";
    tableName: string;
    columnName: string;
    schema: string;
    newDataType: string;
    columnDefault: string;
    columnOnUpdate: boolean;
    columnNotNull: boolean;
    columnAutoIncrement: boolean;
    columnPk: boolean;
}
export interface JsonAlterColumnDropNotNullStatement {
    type: "alter_table_alter_column_drop_notnull";
    tableName: string;
    columnName: string;
    schema: string;
    newDataType: string;
    columnDefault: string;
    columnOnUpdate: boolean;
    columnNotNull: boolean;
    columnAutoIncrement: boolean;
    columnPk: boolean;
}
export interface JsonAlterColumnSetOnUpdateStatement {
    type: "alter_table_alter_column_set_on_update";
    tableName: string;
    columnName: string;
    schema: string;
    newDataType: string;
    columnDefault: string;
    columnOnUpdate: boolean;
    columnNotNull: boolean;
    columnAutoIncrement: boolean;
    columnPk: boolean;
}
export interface JsonAlterColumnDropOnUpdateStatement {
    type: "alter_table_alter_column_drop_on_update";
    tableName: string;
    columnName: string;
    schema: string;
    newDataType: string;
    columnDefault: string;
    columnOnUpdate: boolean;
    columnNotNull: boolean;
    columnAutoIncrement: boolean;
    columnPk: boolean;
}
export interface JsonAlterColumnSetAutoincrementStatement {
    type: "alter_table_alter_column_set_autoincrement";
    tableName: string;
    columnName: string;
    schema: string;
    newDataType: string;
    columnDefault: string;
    columnOnUpdate: boolean;
    columnNotNull: boolean;
    columnAutoIncrement: boolean;
    columnPk: boolean;
}
export interface JsonAlterColumnDropAutoincrementStatement {
    type: "alter_table_alter_column_drop_autoincrement";
    tableName: string;
    columnName: string;
    schema: string;
    newDataType: string;
    columnDefault: string;
    columnOnUpdate: boolean;
    columnNotNull: boolean;
    columnAutoIncrement: boolean;
    columnPk: boolean;
}
export interface JsonCreateSchema {
    type: "create_schema";
    name: string;
}
export interface JsonDropSchema {
    type: "drop_schema";
    name: string;
}
export interface JsonRenameSchema {
    type: "rename_schema";
    from: string;
    to: string;
}
export type JsonAlterColumnStatement = JsonRenameColumnStatement | JsonAlterColumnTypeStatement | JsonAlterColumnSetDefaultStatement | JsonAlterColumnDropDefaultStatement | JsonAlterColumnSetNotNullStatement | JsonAlterColumnDropNotNullStatement | JsonAlterColumnDropOnUpdateStatement | JsonAlterColumnSetOnUpdateStatement | JsonAlterColumnDropAutoincrementStatement | JsonAlterColumnSetAutoincrementStatement | JsonAlterColumnSetPrimaryKeyStatement | JsonAlterColumnDropPrimaryKeyStatement;
export type JsonStatement = JsonAlterColumnStatement | JsonCreateTableStatement | JsonDropTableStatement | JsonRenameTableStatement | JsonCreateEnumStatement | JsonAddValueToEnumStatement | JsonDropColumnStatement | JsonAddColumnStatement | JsonCreateIndexStatement | JsonCreateReferenceStatement | JsonAlterReferenceStatement | JsonDeleteReferenceStatement | JsonDropIndexStatement | JsonReferenceStatement | JsonSqliteCreateTableStatement | JsonSqliteAddColumnStatement | JsonCreateCompositePK | JsonDeleteCompositePK | JsonAlterCompositePK | JsonCreateUniqueConstraint | JsonDeleteUniqueConstraint | JsonAlterUniqueConstraint | JsonCreateSchema | JsonDropSchema | JsonRenameSchema | JsonAlterTableSetSchema | JsonAlterTableRemoveFromSchema | JsonAlterTableSetNewSchema;
export declare const preparePgCreateTableJson: (table: Table, json2: PgSchema) => JsonCreateTableStatement;
export declare const prepareMySqlCreateTableJson: (table: Table, json2: PgSchema) => JsonCreateTableStatement;
export declare const prepareSQLiteCreateTable: (table: Table) => JsonSqliteCreateTableStatement;
export declare const prepareDropTableJson: (table: Table) => JsonDropTableStatement;
export declare const prepareRenameTableJson: (tableFrom: Table, tableTo: Table) => JsonRenameTableStatement;
export declare const prepareCreateEnumJson: (name: string, values: string[]) => JsonCreateEnumStatement;
export declare const prepareAddValuesToEnumJson: (name: string, values: string[]) => JsonAddValueToEnumStatement[];
export declare const prepareCreateSchemasJson: (values: string[]) => JsonCreateSchema[];
export declare const prepareRenameSchemasJson: (values: {
    from: string;
    to: string;
}[]) => JsonRenameSchema[];
export declare const prepareDeleteSchemasJson: (values: string[]) => JsonDropSchema[];
export declare const prepareRenameColumns: (tableName: string, schema: string, pairs: {
    from: Column;
    to: Column;
}[]) => JsonRenameColumnStatement[];
export declare const prepareAlterTableColumnsJson: (tableName: string, schema: string, deleted: Column[], added: Column[], altered: AlteredColumn[], addedFk: Record<string, string>, json2: CommonSquashedSchema, dialect?: Dialect) => {
    addColumns: JsonStatement[];
    dropColumns: JsonDropColumnStatement[];
    alterColumns: JsonAlterColumnStatement[];
};
export declare const prepareCreateIndexesJson: (tableName: string, schema: string, indexes: Record<string, string>) => JsonCreateIndexStatement[];
export declare const prepareCreateReferencesJson: (tableName: string, schema: string, foreignKeys: Record<string, string>) => JsonCreateReferenceStatement[];
export declare const prepareDropReferencesJson: (tableName: string, schema: string, foreignKeys: Record<string, string>) => JsonDeleteReferenceStatement[];
export declare const prepareAlterReferencesJson: (tableName: string, schema: string, foreignKeys: Record<string, {
    __old: string;
    __new: string;
}>) => JsonReferenceStatement[];
export declare const prepareDropIndexesJson: (tableName: string, schema: string, indexes: Record<string, string>) => JsonDropIndexStatement[];
export declare const prepareAddCompositePrimaryKeySqlite: (tableName: string, pks: Record<string, string>) => JsonCreateCompositePK[];
export declare const prepareDeleteCompositePrimaryKeySqlite: (tableName: string, pks: Record<string, string>) => JsonDeleteCompositePK[];
export declare const prepareAlterCompositePrimaryKeySqlite: (tableName: string, pks: Record<string, {
    __old: string;
    __new: string;
}>) => JsonAlterCompositePK[];
export declare const prepareAddCompositePrimaryKeyPg: (tableName: string, schema: string, pks: Record<string, string>, json2: PgSchema) => JsonCreateCompositePK[];
export declare const prepareDeleteCompositePrimaryKeyPg: (tableName: string, schema: string, pks: Record<string, string>, json1: PgSchema) => JsonDeleteCompositePK[];
export declare const prepareAlterCompositePrimaryKeyPg: (tableName: string, schema: string, pks: Record<string, {
    __old: string;
    __new: string;
}>, json1: PgSchema, json2: PgSchema) => JsonAlterCompositePK[];
export declare const prepareAddUniqueConstraintPg: (tableName: string, schema: string, unqs: Record<string, string>) => JsonCreateUniqueConstraint[];
export declare const prepareDeleteUniqueConstraintPg: (tableName: string, schema: string, unqs: Record<string, string>) => JsonDeleteUniqueConstraint[];
export declare const prepareAlterUniqueConstraintPg: (tableName: string, schema: string, unqs: Record<string, {
    __old: string;
    __new: string;
}>) => JsonAlterUniqueConstraint[];
export declare const prepareAddCompositePrimaryKeyMySql: (tableName: string, pks: Record<string, string>, json1: MySqlSchema, json2: MySqlSchema) => JsonCreateCompositePK[];
export declare const prepareDeleteCompositePrimaryKeyMySql: (tableName: string, pks: Record<string, string>, json1: MySqlSchema) => JsonDeleteCompositePK[];
export declare const prepareAlterCompositePrimaryKeyMySql: (tableName: string, pks: Record<string, {
    __old: string;
    __new: string;
}>, json1: MySqlSchema, json2: MySqlSchema) => JsonAlterCompositePK[];
