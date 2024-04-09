import { JsonCreateIndexStatement, JsonDropIndexStatement, JsonDropTableStatement, JsonRenameTableStatement, JsonSqliteAddColumnStatement, JsonSqliteCreateTableStatement, JsonStatement } from "./jsonStatements";
import { Dialect } from "./schemaValidator";
export declare const pgNativeTypes: Set<string>;
declare abstract class Convertor {
    abstract can(statement: JsonStatement, dialect: Dialect): boolean;
    abstract convert(statement: JsonStatement): string;
}
export declare class SQLiteCreateTableConvertor extends Convertor {
    can(statement: JsonStatement, dialect: Dialect): boolean;
    convert(st: JsonSqliteCreateTableStatement): string;
}
export declare class SQLiteDropTableConvertor extends Convertor {
    can(statement: JsonStatement, dialect: Dialect): boolean;
    convert(statement: JsonDropTableStatement): string;
}
export declare class SqliteRenameTableConvertor extends Convertor {
    can(statement: JsonStatement, dialect: Dialect): boolean;
    convert(statement: JsonRenameTableStatement): string;
}
export declare class SQLiteAlterTableAddColumnConvertor extends Convertor {
    can(statement: JsonStatement, dialect: Dialect): boolean;
    convert(statement: JsonSqliteAddColumnStatement): string;
}
export declare class CreateSqliteIndexConvertor extends Convertor {
    can(statement: JsonStatement, dialect: Dialect): boolean;
    convert(statement: JsonCreateIndexStatement): string;
}
export declare class SqliteDropIndexConvertor extends Convertor {
    can(statement: JsonStatement, dialect: Dialect): boolean;
    convert(statement: JsonDropIndexStatement): string;
}
export declare const fromJson: (statements: JsonStatement[], dialect: Dialect) => string[];
export {};
