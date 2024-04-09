export function diffForRenamedTables(pairs: any): any;
export function diffForRenamedColumn(t1: any, t2: any): any;
export function applyJsonDiff(json1: any, json2: any): {
    addedTables?: undefined;
    deletedTables?: undefined;
    alteredTablesWithColumns?: undefined;
    addedEnums?: undefined;
    deletedEnums?: undefined;
    alteredEnums?: undefined;
    addedSchemas?: undefined;
    deletedSchemas?: undefined;
} | {
    addedTables: any[];
    deletedTables: any[];
    alteredTablesWithColumns: {
        name: any;
        schema: {
            type: string;
            value: any;
        };
        deleted: any[];
        added: any[];
        altered: any[];
        addedIndexes: {
            [k: string]: any;
        };
        deletedIndexes: {
            [k: string]: any;
        };
        alteredIndexes: {
            [k: string]: any;
        };
        addedForeignKeys: {
            [k: string]: any;
        };
        deletedForeignKeys: {
            [k: string]: any;
        };
        alteredForeignKeys: {
            [k: string]: any;
        };
        addedCompositePKs: {
            [k: string]: any;
        };
        deletedCompositePKs: {
            [k: string]: any;
        };
        alteredCompositePKs: {
            [k: string]: any;
        };
        addedUniqueConstraints: {
            [k: string]: any;
        };
        deletedUniqueConstraints: {
            [k: string]: any;
        };
        alteredUniqueConstraints: {
            [k: string]: any;
        };
    }[];
    addedEnums: {
        name: any;
        values: any[];
    }[];
    deletedEnums: {
        name: any;
        values: any[];
    }[];
    alteredEnums: {
        name: string;
        addedValues: any[];
        deletedValues: any[];
    }[];
    addedSchemas: any[];
    deletedSchemas: any[];
};
