import { DrizzleDbClient } from "src/drivers";
import { JsonStatement } from "src/jsonStatements";
export declare const pgSuggestions: ({ connection, statements, }: {
    statements: JsonStatement[];
    connection: DrizzleDbClient;
}) => Promise<{
    statementsToExecute: string[];
    shouldAskForApprove: boolean;
    infoToPrint: string[];
    columnsToRemove: string[];
    schemasToRemove: string[];
    tablesToTruncate: string[];
    tablesToRemove: string[];
}>;
