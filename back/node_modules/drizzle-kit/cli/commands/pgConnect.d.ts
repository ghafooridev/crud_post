import type { PgConnectionConfig } from "../validations/pg";
import { PgPostgres } from "src/drivers";
export declare const connectToPg: (config: PgConnectionConfig) => Promise<{
    client: PgPostgres;
}>;
