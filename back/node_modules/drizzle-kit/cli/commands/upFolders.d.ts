import { Dialect } from "src/schemaValidator";
import { Named, NamedWithSchema } from "./migrate";
export declare const resolveSchemas: <T extends Named>(missingSchemas: T[], newSchemas: T[], predicate: (leftMissing: T[], created: T) => T | undefined) => {
    created: T[];
    renamed: {
        from: T;
        to: T;
    }[];
    deleted: T[];
};
export declare const resolveTables: <T extends NamedWithSchema>(missingTables: T[], newTables: T[], resolver: (leftMissing: T[], created: T) => T | undefined) => {
    created: T[];
    renamed: {
        from: T;
        to: T;
    }[];
    deleted: T[];
};
export declare const resolveColumns: <T extends Named>(missingColumns: T[], newColumns: T[], predicate: (leftMissing: T[], created: T) => T | undefined) => {
    created: T[];
    renamed: {
        from: T;
        to: T;
    }[];
    deleted: T[];
};
export declare const upgradeFolders: (dialect: Dialect, out: string) => void;
