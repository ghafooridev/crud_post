import { TypeOf } from "zod";
declare const dialect: import("zod").ZodEnum<["pg", "mysql", "sqlite"]>;
export type Dialect = TypeOf<typeof dialect>;
declare const commonSquashedSchema: import("zod").ZodUnion<[import("zod").ZodObject<{
    version: import("zod").ZodLiteral<"5">;
    dialect: import("zod").ZodEnum<["pg"]>;
    tables: import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodObject<{
        name: import("zod").ZodString;
        schema: import("zod").ZodString;
        columns: import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodObject<{
            name: import("zod").ZodString;
            type: import("zod").ZodString;
            primaryKey: import("zod").ZodBoolean;
            notNull: import("zod").ZodBoolean;
            default: import("zod").ZodOptional<import("zod").ZodAny>;
            isUnique: import("zod").ZodOptional<import("zod").ZodAny>;
            uniqueName: import("zod").ZodOptional<import("zod").ZodString>;
            nullsNotDistinct: import("zod").ZodOptional<import("zod").ZodBoolean>;
        }, "strict", import("zod").ZodTypeAny, {
            isUnique?: any;
            default?: any;
            uniqueName?: string | undefined;
            nullsNotDistinct?: boolean | undefined;
            name: string;
            type: string;
            primaryKey: boolean;
            notNull: boolean;
        }, {
            isUnique?: any;
            default?: any;
            uniqueName?: string | undefined;
            nullsNotDistinct?: boolean | undefined;
            name: string;
            type: string;
            primaryKey: boolean;
            notNull: boolean;
        }>>;
        indexes: import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodString>;
        foreignKeys: import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodString>;
        compositePrimaryKeys: import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodString>;
        uniqueConstraints: import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodString>;
    }, "strict", import("zod").ZodTypeAny, {
        name: string;
        columns: Record<string, {
            isUnique?: any;
            default?: any;
            uniqueName?: string | undefined;
            nullsNotDistinct?: boolean | undefined;
            name: string;
            type: string;
            primaryKey: boolean;
            notNull: boolean;
        }>;
        indexes: Record<string, string>;
        foreignKeys: Record<string, string>;
        schema: string;
        compositePrimaryKeys: Record<string, string>;
        uniqueConstraints: Record<string, string>;
    }, {
        name: string;
        columns: Record<string, {
            isUnique?: any;
            default?: any;
            uniqueName?: string | undefined;
            nullsNotDistinct?: boolean | undefined;
            name: string;
            type: string;
            primaryKey: boolean;
            notNull: boolean;
        }>;
        indexes: Record<string, string>;
        foreignKeys: Record<string, string>;
        schema: string;
        compositePrimaryKeys: Record<string, string>;
        uniqueConstraints: Record<string, string>;
    }>>;
    enums: import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodObject<{
        name: import("zod").ZodString;
        values: import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodString>;
    }, "strict", import("zod").ZodTypeAny, {
        name: string;
        values: Record<string, string>;
    }, {
        name: string;
        values: Record<string, string>;
    }>>;
    schemas: import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodString>;
}, "strict", import("zod").ZodTypeAny, {
    version: "5";
    dialect: "pg";
    tables: Record<string, {
        name: string;
        columns: Record<string, {
            isUnique?: any;
            default?: any;
            uniqueName?: string | undefined;
            nullsNotDistinct?: boolean | undefined;
            name: string;
            type: string;
            primaryKey: boolean;
            notNull: boolean;
        }>;
        indexes: Record<string, string>;
        foreignKeys: Record<string, string>;
        schema: string;
        compositePrimaryKeys: Record<string, string>;
        uniqueConstraints: Record<string, string>;
    }>;
    schemas: Record<string, string>;
    enums: Record<string, {
        name: string;
        values: Record<string, string>;
    }>;
}, {
    version: "5";
    dialect: "pg";
    tables: Record<string, {
        name: string;
        columns: Record<string, {
            isUnique?: any;
            default?: any;
            uniqueName?: string | undefined;
            nullsNotDistinct?: boolean | undefined;
            name: string;
            type: string;
            primaryKey: boolean;
            notNull: boolean;
        }>;
        indexes: Record<string, string>;
        foreignKeys: Record<string, string>;
        schema: string;
        compositePrimaryKeys: Record<string, string>;
        uniqueConstraints: Record<string, string>;
    }>;
    schemas: Record<string, string>;
    enums: Record<string, {
        name: string;
        values: Record<string, string>;
    }>;
}>, import("zod").ZodObject<{
    version: import("zod").ZodLiteral<"5">;
    dialect: import("zod").ZodLiteral<"mysql">;
    tables: import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodObject<{
        name: import("zod").ZodString;
        schema: import("zod").ZodOptional<import("zod").ZodString>;
        columns: import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodObject<{
            name: import("zod").ZodString;
            type: import("zod").ZodString;
            primaryKey: import("zod").ZodBoolean;
            notNull: import("zod").ZodBoolean;
            autoincrement: import("zod").ZodOptional<import("zod").ZodBoolean>;
            default: import("zod").ZodOptional<import("zod").ZodAny>;
            onUpdate: import("zod").ZodOptional<import("zod").ZodAny>;
        }, "strict", import("zod").ZodTypeAny, {
            default?: any;
            onUpdate?: any;
            autoincrement?: boolean | undefined;
            name: string;
            type: string;
            primaryKey: boolean;
            notNull: boolean;
        }, {
            default?: any;
            onUpdate?: any;
            autoincrement?: boolean | undefined;
            name: string;
            type: string;
            primaryKey: boolean;
            notNull: boolean;
        }>>;
        indexes: import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodString>;
        foreignKeys: import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodString>;
        compositePrimaryKeys: import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodString>;
        uniqueConstraints: import("zod").ZodDefault<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodString>>;
    }, "strict", import("zod").ZodTypeAny, {
        schema?: string | undefined;
        name: string;
        columns: Record<string, {
            default?: any;
            onUpdate?: any;
            autoincrement?: boolean | undefined;
            name: string;
            type: string;
            primaryKey: boolean;
            notNull: boolean;
        }>;
        indexes: Record<string, string>;
        foreignKeys: Record<string, string>;
        compositePrimaryKeys: Record<string, string>;
        uniqueConstraints: Record<string, string>;
    }, {
        schema?: string | undefined;
        uniqueConstraints?: Record<string, string> | undefined;
        name: string;
        columns: Record<string, {
            default?: any;
            onUpdate?: any;
            autoincrement?: boolean | undefined;
            name: string;
            type: string;
            primaryKey: boolean;
            notNull: boolean;
        }>;
        indexes: Record<string, string>;
        foreignKeys: Record<string, string>;
        compositePrimaryKeys: Record<string, string>;
    }>>;
    schemas: import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodString>;
}, "strict", import("zod").ZodTypeAny, {
    version: "5";
    dialect: "mysql";
    tables: Record<string, {
        schema?: string | undefined;
        name: string;
        columns: Record<string, {
            default?: any;
            onUpdate?: any;
            autoincrement?: boolean | undefined;
            name: string;
            type: string;
            primaryKey: boolean;
            notNull: boolean;
        }>;
        indexes: Record<string, string>;
        foreignKeys: Record<string, string>;
        compositePrimaryKeys: Record<string, string>;
        uniqueConstraints: Record<string, string>;
    }>;
    schemas: Record<string, string>;
}, {
    version: "5";
    dialect: "mysql";
    tables: Record<string, {
        schema?: string | undefined;
        uniqueConstraints?: Record<string, string> | undefined;
        name: string;
        columns: Record<string, {
            default?: any;
            onUpdate?: any;
            autoincrement?: boolean | undefined;
            name: string;
            type: string;
            primaryKey: boolean;
            notNull: boolean;
        }>;
        indexes: Record<string, string>;
        foreignKeys: Record<string, string>;
        compositePrimaryKeys: Record<string, string>;
    }>;
    schemas: Record<string, string>;
}>, import("zod").ZodObject<{
    version: import("zod").ZodLiteral<"5">;
    dialect: import("zod").ZodEnum<["sqlite"]>;
    tables: import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodObject<{
        name: import("zod").ZodString;
        columns: import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodObject<{
            name: import("zod").ZodString;
            type: import("zod").ZodString;
            primaryKey: import("zod").ZodBoolean;
            notNull: import("zod").ZodBoolean;
            autoincrement: import("zod").ZodOptional<import("zod").ZodBoolean>;
            default: import("zod").ZodOptional<import("zod").ZodAny>;
        }, "strict", import("zod").ZodTypeAny, {
            default?: any;
            autoincrement?: boolean | undefined;
            name: string;
            type: string;
            primaryKey: boolean;
            notNull: boolean;
        }, {
            default?: any;
            autoincrement?: boolean | undefined;
            name: string;
            type: string;
            primaryKey: boolean;
            notNull: boolean;
        }>>;
        indexes: import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodString>;
        foreignKeys: import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodString>;
        compositePrimaryKeys: import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodString>;
        uniqueConstraints: import("zod").ZodDefault<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodString>>;
    }, "strict", import("zod").ZodTypeAny, {
        name: string;
        columns: Record<string, {
            default?: any;
            autoincrement?: boolean | undefined;
            name: string;
            type: string;
            primaryKey: boolean;
            notNull: boolean;
        }>;
        indexes: Record<string, string>;
        foreignKeys: Record<string, string>;
        compositePrimaryKeys: Record<string, string>;
        uniqueConstraints: Record<string, string>;
    }, {
        uniqueConstraints?: Record<string, string> | undefined;
        name: string;
        columns: Record<string, {
            default?: any;
            autoincrement?: boolean | undefined;
            name: string;
            type: string;
            primaryKey: boolean;
            notNull: boolean;
        }>;
        indexes: Record<string, string>;
        foreignKeys: Record<string, string>;
        compositePrimaryKeys: Record<string, string>;
    }>>;
    enums: import("zod").ZodAny;
}, "strict", import("zod").ZodTypeAny, {
    enums?: any;
    version: "5";
    dialect: "sqlite";
    tables: Record<string, {
        name: string;
        columns: Record<string, {
            default?: any;
            autoincrement?: boolean | undefined;
            name: string;
            type: string;
            primaryKey: boolean;
            notNull: boolean;
        }>;
        indexes: Record<string, string>;
        foreignKeys: Record<string, string>;
        compositePrimaryKeys: Record<string, string>;
        uniqueConstraints: Record<string, string>;
    }>;
}, {
    enums?: any;
    version: "5";
    dialect: "sqlite";
    tables: Record<string, {
        uniqueConstraints?: Record<string, string> | undefined;
        name: string;
        columns: Record<string, {
            default?: any;
            autoincrement?: boolean | undefined;
            name: string;
            type: string;
            primaryKey: boolean;
            notNull: boolean;
        }>;
        indexes: Record<string, string>;
        foreignKeys: Record<string, string>;
        compositePrimaryKeys: Record<string, string>;
    }>;
}>]>;
declare const commonSchema: import("zod").ZodUnion<[import("zod").ZodObject<import("zod").extendShape<{
    version: import("zod").ZodLiteral<"5">;
    dialect: import("zod").ZodLiteral<"pg">;
    tables: import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodObject<{
        name: import("zod").ZodString;
        schema: import("zod").ZodString;
        columns: import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodObject<{
            name: import("zod").ZodString;
            type: import("zod").ZodString;
            primaryKey: import("zod").ZodBoolean;
            notNull: import("zod").ZodBoolean;
            default: import("zod").ZodOptional<import("zod").ZodAny>;
            isUnique: import("zod").ZodOptional<import("zod").ZodAny>;
            uniqueName: import("zod").ZodOptional<import("zod").ZodString>;
            nullsNotDistinct: import("zod").ZodOptional<import("zod").ZodBoolean>;
        }, "strict", import("zod").ZodTypeAny, {
            isUnique?: any;
            default?: any;
            uniqueName?: string | undefined;
            nullsNotDistinct?: boolean | undefined;
            name: string;
            type: string;
            primaryKey: boolean;
            notNull: boolean;
        }, {
            isUnique?: any;
            default?: any;
            uniqueName?: string | undefined;
            nullsNotDistinct?: boolean | undefined;
            name: string;
            type: string;
            primaryKey: boolean;
            notNull: boolean;
        }>>;
        indexes: import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodObject<{
            name: import("zod").ZodString;
            columns: import("zod").ZodArray<import("zod").ZodString, "many">;
            isUnique: import("zod").ZodBoolean;
        }, "strict", import("zod").ZodTypeAny, {
            name: string;
            columns: string[];
            isUnique: boolean;
        }, {
            name: string;
            columns: string[];
            isUnique: boolean;
        }>>;
        foreignKeys: import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodObject<{
            name: import("zod").ZodString;
            tableFrom: import("zod").ZodString;
            columnsFrom: import("zod").ZodArray<import("zod").ZodString, "many">;
            tableTo: import("zod").ZodString;
            schemaTo: import("zod").ZodOptional<import("zod").ZodString>;
            columnsTo: import("zod").ZodArray<import("zod").ZodString, "many">;
            onUpdate: import("zod").ZodOptional<import("zod").ZodString>;
            onDelete: import("zod").ZodOptional<import("zod").ZodString>;
        }, "strict", import("zod").ZodTypeAny, {
            onUpdate?: string | undefined;
            onDelete?: string | undefined;
            schemaTo?: string | undefined;
            name: string;
            tableFrom: string;
            columnsFrom: string[];
            tableTo: string;
            columnsTo: string[];
        }, {
            onUpdate?: string | undefined;
            onDelete?: string | undefined;
            schemaTo?: string | undefined;
            name: string;
            tableFrom: string;
            columnsFrom: string[];
            tableTo: string;
            columnsTo: string[];
        }>>;
        compositePrimaryKeys: import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodObject<{
            name: import("zod").ZodString;
            columns: import("zod").ZodArray<import("zod").ZodString, "many">;
        }, "strict", import("zod").ZodTypeAny, {
            name: string;
            columns: string[];
        }, {
            name: string;
            columns: string[];
        }>>;
        uniqueConstraints: import("zod").ZodDefault<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodObject<{
            name: import("zod").ZodString;
            columns: import("zod").ZodArray<import("zod").ZodString, "many">;
            nullsNotDistinct: import("zod").ZodBoolean;
        }, "strict", import("zod").ZodTypeAny, {
            name: string;
            columns: string[];
            nullsNotDistinct: boolean;
        }, {
            name: string;
            columns: string[];
            nullsNotDistinct: boolean;
        }>>>;
    }, "strict", import("zod").ZodTypeAny, {
        name: string;
        columns: Record<string, {
            isUnique?: any;
            default?: any;
            uniqueName?: string | undefined;
            nullsNotDistinct?: boolean | undefined;
            name: string;
            type: string;
            primaryKey: boolean;
            notNull: boolean;
        }>;
        indexes: Record<string, {
            name: string;
            columns: string[];
            isUnique: boolean;
        }>;
        foreignKeys: Record<string, {
            onUpdate?: string | undefined;
            onDelete?: string | undefined;
            schemaTo?: string | undefined;
            name: string;
            tableFrom: string;
            columnsFrom: string[];
            tableTo: string;
            columnsTo: string[];
        }>;
        schema: string;
        compositePrimaryKeys: Record<string, {
            name: string;
            columns: string[];
        }>;
        uniqueConstraints: Record<string, {
            name: string;
            columns: string[];
            nullsNotDistinct: boolean;
        }>;
    }, {
        uniqueConstraints?: Record<string, {
            name: string;
            columns: string[];
            nullsNotDistinct: boolean;
        }> | undefined;
        name: string;
        columns: Record<string, {
            isUnique?: any;
            default?: any;
            uniqueName?: string | undefined;
            nullsNotDistinct?: boolean | undefined;
            name: string;
            type: string;
            primaryKey: boolean;
            notNull: boolean;
        }>;
        indexes: Record<string, {
            name: string;
            columns: string[];
            isUnique: boolean;
        }>;
        foreignKeys: Record<string, {
            onUpdate?: string | undefined;
            onDelete?: string | undefined;
            schemaTo?: string | undefined;
            name: string;
            tableFrom: string;
            columnsFrom: string[];
            tableTo: string;
            columnsTo: string[];
        }>;
        schema: string;
        compositePrimaryKeys: Record<string, {
            name: string;
            columns: string[];
        }>;
    }>>;
    enums: import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodObject<{
        name: import("zod").ZodString;
        values: import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodString>;
    }, "strict", import("zod").ZodTypeAny, {
        name: string;
        values: Record<string, string>;
    }, {
        name: string;
        values: Record<string, string>;
    }>>;
    schemas: import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodString>;
    _meta: import("zod").ZodObject<{
        schemas: import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodString>;
        tables: import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodString>;
        columns: import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodString>;
    }, "strip", import("zod").ZodTypeAny, {
        columns: Record<string, string>;
        tables: Record<string, string>;
        schemas: Record<string, string>;
    }, {
        columns: Record<string, string>;
        tables: Record<string, string>;
        schemas: Record<string, string>;
    }>;
    internal: import("zod").ZodOptional<import("zod").ZodObject<{
        tables: import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodOptional<import("zod").ZodObject<{
            columns: import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodOptional<import("zod").ZodObject<{
                isArray: import("zod").ZodOptional<import("zod").ZodBoolean>;
                dimensions: import("zod").ZodOptional<import("zod").ZodNumber>;
                rawType: import("zod").ZodOptional<import("zod").ZodString>;
            }, "strip", import("zod").ZodTypeAny, {
                isArray?: boolean | undefined;
                dimensions?: number | undefined;
                rawType?: string | undefined;
            }, {
                isArray?: boolean | undefined;
                dimensions?: number | undefined;
                rawType?: string | undefined;
            }>>>;
        }, "strip", import("zod").ZodTypeAny, {
            columns: Record<string, {
                isArray?: boolean | undefined;
                dimensions?: number | undefined;
                rawType?: string | undefined;
            } | undefined>;
        }, {
            columns: Record<string, {
                isArray?: boolean | undefined;
                dimensions?: number | undefined;
                rawType?: string | undefined;
            } | undefined>;
        }>>>;
    }, "strip", import("zod").ZodTypeAny, {
        tables: Record<string, {
            columns: Record<string, {
                isArray?: boolean | undefined;
                dimensions?: number | undefined;
                rawType?: string | undefined;
            } | undefined>;
        } | undefined>;
    }, {
        tables: Record<string, {
            columns: Record<string, {
                isArray?: boolean | undefined;
                dimensions?: number | undefined;
                rawType?: string | undefined;
            } | undefined>;
        } | undefined>;
    }>>;
}, {
    id: import("zod").ZodString;
    prevId: import("zod").ZodString;
}>, "strip", import("zod").ZodTypeAny, {
    internal?: {
        tables: Record<string, {
            columns: Record<string, {
                isArray?: boolean | undefined;
                dimensions?: number | undefined;
                rawType?: string | undefined;
            } | undefined>;
        } | undefined>;
    } | undefined;
    id: string;
    prevId: string;
    version: "5";
    dialect: "pg";
    tables: Record<string, {
        name: string;
        columns: Record<string, {
            isUnique?: any;
            default?: any;
            uniqueName?: string | undefined;
            nullsNotDistinct?: boolean | undefined;
            name: string;
            type: string;
            primaryKey: boolean;
            notNull: boolean;
        }>;
        indexes: Record<string, {
            name: string;
            columns: string[];
            isUnique: boolean;
        }>;
        foreignKeys: Record<string, {
            onUpdate?: string | undefined;
            onDelete?: string | undefined;
            schemaTo?: string | undefined;
            name: string;
            tableFrom: string;
            columnsFrom: string[];
            tableTo: string;
            columnsTo: string[];
        }>;
        schema: string;
        compositePrimaryKeys: Record<string, {
            name: string;
            columns: string[];
        }>;
        uniqueConstraints: Record<string, {
            name: string;
            columns: string[];
            nullsNotDistinct: boolean;
        }>;
    }>;
    schemas: Record<string, string>;
    _meta: {
        columns: Record<string, string>;
        tables: Record<string, string>;
        schemas: Record<string, string>;
    };
    enums: Record<string, {
        name: string;
        values: Record<string, string>;
    }>;
}, {
    internal?: {
        tables: Record<string, {
            columns: Record<string, {
                isArray?: boolean | undefined;
                dimensions?: number | undefined;
                rawType?: string | undefined;
            } | undefined>;
        } | undefined>;
    } | undefined;
    id: string;
    prevId: string;
    version: "5";
    dialect: "pg";
    tables: Record<string, {
        uniqueConstraints?: Record<string, {
            name: string;
            columns: string[];
            nullsNotDistinct: boolean;
        }> | undefined;
        name: string;
        columns: Record<string, {
            isUnique?: any;
            default?: any;
            uniqueName?: string | undefined;
            nullsNotDistinct?: boolean | undefined;
            name: string;
            type: string;
            primaryKey: boolean;
            notNull: boolean;
        }>;
        indexes: Record<string, {
            name: string;
            columns: string[];
            isUnique: boolean;
        }>;
        foreignKeys: Record<string, {
            onUpdate?: string | undefined;
            onDelete?: string | undefined;
            schemaTo?: string | undefined;
            name: string;
            tableFrom: string;
            columnsFrom: string[];
            tableTo: string;
            columnsTo: string[];
        }>;
        schema: string;
        compositePrimaryKeys: Record<string, {
            name: string;
            columns: string[];
        }>;
    }>;
    schemas: Record<string, string>;
    _meta: {
        columns: Record<string, string>;
        tables: Record<string, string>;
        schemas: Record<string, string>;
    };
    enums: Record<string, {
        name: string;
        values: Record<string, string>;
    }>;
}>, import("zod").ZodObject<import("zod").extendShape<{
    version: import("zod").ZodLiteral<"5">;
    dialect: import("zod").ZodLiteral<"mysql">;
    tables: import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodObject<{
        name: import("zod").ZodString;
        schema: import("zod").ZodOptional<import("zod").ZodString>;
        columns: import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodObject<{
            name: import("zod").ZodString;
            type: import("zod").ZodString;
            primaryKey: import("zod").ZodBoolean;
            notNull: import("zod").ZodBoolean;
            autoincrement: import("zod").ZodOptional<import("zod").ZodBoolean>;
            default: import("zod").ZodOptional<import("zod").ZodAny>;
            onUpdate: import("zod").ZodOptional<import("zod").ZodAny>;
        }, "strict", import("zod").ZodTypeAny, {
            default?: any;
            onUpdate?: any;
            autoincrement?: boolean | undefined;
            name: string;
            type: string;
            primaryKey: boolean;
            notNull: boolean;
        }, {
            default?: any;
            onUpdate?: any;
            autoincrement?: boolean | undefined;
            name: string;
            type: string;
            primaryKey: boolean;
            notNull: boolean;
        }>>;
        indexes: import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodObject<{
            name: import("zod").ZodString;
            columns: import("zod").ZodArray<import("zod").ZodString, "many">;
            isUnique: import("zod").ZodBoolean;
            using: import("zod").ZodOptional<import("zod").ZodEnum<["btree", "hash"]>>;
            algorithm: import("zod").ZodOptional<import("zod").ZodEnum<["default", "inplace", "copy"]>>;
            lock: import("zod").ZodOptional<import("zod").ZodEnum<["default", "none", "shared", "exclusive"]>>;
        }, "strict", import("zod").ZodTypeAny, {
            using?: "btree" | "hash" | undefined;
            algorithm?: "default" | "inplace" | "copy" | undefined;
            lock?: "default" | "none" | "shared" | "exclusive" | undefined;
            name: string;
            columns: string[];
            isUnique: boolean;
        }, {
            using?: "btree" | "hash" | undefined;
            algorithm?: "default" | "inplace" | "copy" | undefined;
            lock?: "default" | "none" | "shared" | "exclusive" | undefined;
            name: string;
            columns: string[];
            isUnique: boolean;
        }>>;
        foreignKeys: import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodObject<{
            name: import("zod").ZodString;
            tableFrom: import("zod").ZodString;
            columnsFrom: import("zod").ZodArray<import("zod").ZodString, "many">;
            tableTo: import("zod").ZodString;
            columnsTo: import("zod").ZodArray<import("zod").ZodString, "many">;
            onUpdate: import("zod").ZodOptional<import("zod").ZodString>;
            onDelete: import("zod").ZodOptional<import("zod").ZodString>;
        }, "strict", import("zod").ZodTypeAny, {
            onUpdate?: string | undefined;
            onDelete?: string | undefined;
            name: string;
            tableFrom: string;
            columnsFrom: string[];
            tableTo: string;
            columnsTo: string[];
        }, {
            onUpdate?: string | undefined;
            onDelete?: string | undefined;
            name: string;
            tableFrom: string;
            columnsFrom: string[];
            tableTo: string;
            columnsTo: string[];
        }>>;
        compositePrimaryKeys: import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodObject<{
            name: import("zod").ZodString;
            columns: import("zod").ZodArray<import("zod").ZodString, "many">;
        }, "strict", import("zod").ZodTypeAny, {
            name: string;
            columns: string[];
        }, {
            name: string;
            columns: string[];
        }>>;
        uniqueConstraints: import("zod").ZodDefault<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodObject<{
            name: import("zod").ZodString;
            columns: import("zod").ZodArray<import("zod").ZodString, "many">;
        }, "strict", import("zod").ZodTypeAny, {
            name: string;
            columns: string[];
        }, {
            name: string;
            columns: string[];
        }>>>;
    }, "strict", import("zod").ZodTypeAny, {
        schema?: string | undefined;
        name: string;
        columns: Record<string, {
            default?: any;
            onUpdate?: any;
            autoincrement?: boolean | undefined;
            name: string;
            type: string;
            primaryKey: boolean;
            notNull: boolean;
        }>;
        indexes: Record<string, {
            using?: "btree" | "hash" | undefined;
            algorithm?: "default" | "inplace" | "copy" | undefined;
            lock?: "default" | "none" | "shared" | "exclusive" | undefined;
            name: string;
            columns: string[];
            isUnique: boolean;
        }>;
        foreignKeys: Record<string, {
            onUpdate?: string | undefined;
            onDelete?: string | undefined;
            name: string;
            tableFrom: string;
            columnsFrom: string[];
            tableTo: string;
            columnsTo: string[];
        }>;
        compositePrimaryKeys: Record<string, {
            name: string;
            columns: string[];
        }>;
        uniqueConstraints: Record<string, {
            name: string;
            columns: string[];
        }>;
    }, {
        schema?: string | undefined;
        uniqueConstraints?: Record<string, {
            name: string;
            columns: string[];
        }> | undefined;
        name: string;
        columns: Record<string, {
            default?: any;
            onUpdate?: any;
            autoincrement?: boolean | undefined;
            name: string;
            type: string;
            primaryKey: boolean;
            notNull: boolean;
        }>;
        indexes: Record<string, {
            using?: "btree" | "hash" | undefined;
            algorithm?: "default" | "inplace" | "copy" | undefined;
            lock?: "default" | "none" | "shared" | "exclusive" | undefined;
            name: string;
            columns: string[];
            isUnique: boolean;
        }>;
        foreignKeys: Record<string, {
            onUpdate?: string | undefined;
            onDelete?: string | undefined;
            name: string;
            tableFrom: string;
            columnsFrom: string[];
            tableTo: string;
            columnsTo: string[];
        }>;
        compositePrimaryKeys: Record<string, {
            name: string;
            columns: string[];
        }>;
    }>>;
    schemas: import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodString>;
    _meta: import("zod").ZodObject<{
        schemas: import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodString>;
        tables: import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodString>;
        columns: import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodString>;
    }, "strip", import("zod").ZodTypeAny, {
        columns: Record<string, string>;
        tables: Record<string, string>;
        schemas: Record<string, string>;
    }, {
        columns: Record<string, string>;
        tables: Record<string, string>;
        schemas: Record<string, string>;
    }>;
    internal: import("zod").ZodOptional<import("zod").ZodObject<{
        tables: import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodOptional<import("zod").ZodObject<{
            columns: import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodOptional<import("zod").ZodObject<{
                isDefaultAnExpression: import("zod").ZodOptional<import("zod").ZodBoolean>;
            }, "strip", import("zod").ZodTypeAny, {
                isDefaultAnExpression?: boolean | undefined;
            }, {
                isDefaultAnExpression?: boolean | undefined;
            }>>>;
        }, "strip", import("zod").ZodTypeAny, {
            columns: Record<string, {
                isDefaultAnExpression?: boolean | undefined;
            } | undefined>;
        }, {
            columns: Record<string, {
                isDefaultAnExpression?: boolean | undefined;
            } | undefined>;
        }>>>;
    }, "strip", import("zod").ZodTypeAny, {
        tables: Record<string, {
            columns: Record<string, {
                isDefaultAnExpression?: boolean | undefined;
            } | undefined>;
        } | undefined>;
    }, {
        tables: Record<string, {
            columns: Record<string, {
                isDefaultAnExpression?: boolean | undefined;
            } | undefined>;
        } | undefined>;
    }>>;
}, {
    id: import("zod").ZodString;
    prevId: import("zod").ZodString;
}>, "strip", import("zod").ZodTypeAny, {
    internal?: {
        tables: Record<string, {
            columns: Record<string, {
                isDefaultAnExpression?: boolean | undefined;
            } | undefined>;
        } | undefined>;
    } | undefined;
    id: string;
    prevId: string;
    version: "5";
    dialect: "mysql";
    tables: Record<string, {
        schema?: string | undefined;
        name: string;
        columns: Record<string, {
            default?: any;
            onUpdate?: any;
            autoincrement?: boolean | undefined;
            name: string;
            type: string;
            primaryKey: boolean;
            notNull: boolean;
        }>;
        indexes: Record<string, {
            using?: "btree" | "hash" | undefined;
            algorithm?: "default" | "inplace" | "copy" | undefined;
            lock?: "default" | "none" | "shared" | "exclusive" | undefined;
            name: string;
            columns: string[];
            isUnique: boolean;
        }>;
        foreignKeys: Record<string, {
            onUpdate?: string | undefined;
            onDelete?: string | undefined;
            name: string;
            tableFrom: string;
            columnsFrom: string[];
            tableTo: string;
            columnsTo: string[];
        }>;
        compositePrimaryKeys: Record<string, {
            name: string;
            columns: string[];
        }>;
        uniqueConstraints: Record<string, {
            name: string;
            columns: string[];
        }>;
    }>;
    schemas: Record<string, string>;
    _meta: {
        columns: Record<string, string>;
        tables: Record<string, string>;
        schemas: Record<string, string>;
    };
}, {
    internal?: {
        tables: Record<string, {
            columns: Record<string, {
                isDefaultAnExpression?: boolean | undefined;
            } | undefined>;
        } | undefined>;
    } | undefined;
    id: string;
    prevId: string;
    version: "5";
    dialect: "mysql";
    tables: Record<string, {
        schema?: string | undefined;
        uniqueConstraints?: Record<string, {
            name: string;
            columns: string[];
        }> | undefined;
        name: string;
        columns: Record<string, {
            default?: any;
            onUpdate?: any;
            autoincrement?: boolean | undefined;
            name: string;
            type: string;
            primaryKey: boolean;
            notNull: boolean;
        }>;
        indexes: Record<string, {
            using?: "btree" | "hash" | undefined;
            algorithm?: "default" | "inplace" | "copy" | undefined;
            lock?: "default" | "none" | "shared" | "exclusive" | undefined;
            name: string;
            columns: string[];
            isUnique: boolean;
        }>;
        foreignKeys: Record<string, {
            onUpdate?: string | undefined;
            onDelete?: string | undefined;
            name: string;
            tableFrom: string;
            columnsFrom: string[];
            tableTo: string;
            columnsTo: string[];
        }>;
        compositePrimaryKeys: Record<string, {
            name: string;
            columns: string[];
        }>;
    }>;
    schemas: Record<string, string>;
    _meta: {
        columns: Record<string, string>;
        tables: Record<string, string>;
        schemas: Record<string, string>;
    };
}>, import("zod").ZodObject<import("zod").extendShape<{
    version: import("zod").ZodLiteral<"5">;
    dialect: import("zod").ZodEnum<["sqlite"]>;
    tables: import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodObject<{
        name: import("zod").ZodString;
        columns: import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodObject<{
            name: import("zod").ZodString;
            type: import("zod").ZodString;
            primaryKey: import("zod").ZodBoolean;
            notNull: import("zod").ZodBoolean;
            autoincrement: import("zod").ZodOptional<import("zod").ZodBoolean>;
            default: import("zod").ZodOptional<import("zod").ZodAny>;
        }, "strict", import("zod").ZodTypeAny, {
            default?: any;
            autoincrement?: boolean | undefined;
            name: string;
            type: string;
            primaryKey: boolean;
            notNull: boolean;
        }, {
            default?: any;
            autoincrement?: boolean | undefined;
            name: string;
            type: string;
            primaryKey: boolean;
            notNull: boolean;
        }>>;
        indexes: import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodObject<{
            name: import("zod").ZodString;
            columns: import("zod").ZodArray<import("zod").ZodString, "many">;
            where: import("zod").ZodOptional<import("zod").ZodString>;
            isUnique: import("zod").ZodBoolean;
        }, "strict", import("zod").ZodTypeAny, {
            where?: string | undefined;
            name: string;
            columns: string[];
            isUnique: boolean;
        }, {
            where?: string | undefined;
            name: string;
            columns: string[];
            isUnique: boolean;
        }>>;
        foreignKeys: import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodObject<{
            name: import("zod").ZodString;
            tableFrom: import("zod").ZodString;
            columnsFrom: import("zod").ZodArray<import("zod").ZodString, "many">;
            tableTo: import("zod").ZodString;
            columnsTo: import("zod").ZodArray<import("zod").ZodString, "many">;
            onUpdate: import("zod").ZodOptional<import("zod").ZodString>;
            onDelete: import("zod").ZodOptional<import("zod").ZodString>;
        }, "strict", import("zod").ZodTypeAny, {
            onUpdate?: string | undefined;
            onDelete?: string | undefined;
            name: string;
            tableFrom: string;
            columnsFrom: string[];
            tableTo: string;
            columnsTo: string[];
        }, {
            onUpdate?: string | undefined;
            onDelete?: string | undefined;
            name: string;
            tableFrom: string;
            columnsFrom: string[];
            tableTo: string;
            columnsTo: string[];
        }>>;
        compositePrimaryKeys: import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodObject<{
            columns: import("zod").ZodArray<import("zod").ZodString, "many">;
            name: import("zod").ZodOptional<import("zod").ZodString>;
        }, "strict", import("zod").ZodTypeAny, {
            name?: string | undefined;
            columns: string[];
        }, {
            name?: string | undefined;
            columns: string[];
        }>>;
        uniqueConstraints: import("zod").ZodDefault<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodObject<{
            name: import("zod").ZodString;
            columns: import("zod").ZodArray<import("zod").ZodString, "many">;
        }, "strict", import("zod").ZodTypeAny, {
            name: string;
            columns: string[];
        }, {
            name: string;
            columns: string[];
        }>>>;
    }, "strict", import("zod").ZodTypeAny, {
        name: string;
        columns: Record<string, {
            default?: any;
            autoincrement?: boolean | undefined;
            name: string;
            type: string;
            primaryKey: boolean;
            notNull: boolean;
        }>;
        indexes: Record<string, {
            where?: string | undefined;
            name: string;
            columns: string[];
            isUnique: boolean;
        }>;
        foreignKeys: Record<string, {
            onUpdate?: string | undefined;
            onDelete?: string | undefined;
            name: string;
            tableFrom: string;
            columnsFrom: string[];
            tableTo: string;
            columnsTo: string[];
        }>;
        compositePrimaryKeys: Record<string, {
            name?: string | undefined;
            columns: string[];
        }>;
        uniqueConstraints: Record<string, {
            name: string;
            columns: string[];
        }>;
    }, {
        uniqueConstraints?: Record<string, {
            name: string;
            columns: string[];
        }> | undefined;
        name: string;
        columns: Record<string, {
            default?: any;
            autoincrement?: boolean | undefined;
            name: string;
            type: string;
            primaryKey: boolean;
            notNull: boolean;
        }>;
        indexes: Record<string, {
            where?: string | undefined;
            name: string;
            columns: string[];
            isUnique: boolean;
        }>;
        foreignKeys: Record<string, {
            onUpdate?: string | undefined;
            onDelete?: string | undefined;
            name: string;
            tableFrom: string;
            columnsFrom: string[];
            tableTo: string;
            columnsTo: string[];
        }>;
        compositePrimaryKeys: Record<string, {
            name?: string | undefined;
            columns: string[];
        }>;
    }>>;
    enums: import("zod").ZodObject<{}, "strip", import("zod").ZodTypeAny, {}, {}>;
    _meta: import("zod").ZodObject<{
        tables: import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodString>;
        columns: import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodString>;
    }, "strip", import("zod").ZodTypeAny, {
        columns: Record<string, string>;
        tables: Record<string, string>;
    }, {
        columns: Record<string, string>;
        tables: Record<string, string>;
    }>;
}, {
    id: import("zod").ZodString;
    prevId: import("zod").ZodString;
}>, "strict", import("zod").ZodTypeAny, {
    id: string;
    prevId: string;
    version: "5";
    dialect: "sqlite";
    tables: Record<string, {
        name: string;
        columns: Record<string, {
            default?: any;
            autoincrement?: boolean | undefined;
            name: string;
            type: string;
            primaryKey: boolean;
            notNull: boolean;
        }>;
        indexes: Record<string, {
            where?: string | undefined;
            name: string;
            columns: string[];
            isUnique: boolean;
        }>;
        foreignKeys: Record<string, {
            onUpdate?: string | undefined;
            onDelete?: string | undefined;
            name: string;
            tableFrom: string;
            columnsFrom: string[];
            tableTo: string;
            columnsTo: string[];
        }>;
        compositePrimaryKeys: Record<string, {
            name?: string | undefined;
            columns: string[];
        }>;
        uniqueConstraints: Record<string, {
            name: string;
            columns: string[];
        }>;
    }>;
    _meta: {
        columns: Record<string, string>;
        tables: Record<string, string>;
    };
    enums: {};
}, {
    id: string;
    prevId: string;
    version: "5";
    dialect: "sqlite";
    tables: Record<string, {
        uniqueConstraints?: Record<string, {
            name: string;
            columns: string[];
        }> | undefined;
        name: string;
        columns: Record<string, {
            default?: any;
            autoincrement?: boolean | undefined;
            name: string;
            type: string;
            primaryKey: boolean;
            notNull: boolean;
        }>;
        indexes: Record<string, {
            where?: string | undefined;
            name: string;
            columns: string[];
            isUnique: boolean;
        }>;
        foreignKeys: Record<string, {
            onUpdate?: string | undefined;
            onDelete?: string | undefined;
            name: string;
            tableFrom: string;
            columnsFrom: string[];
            tableTo: string;
            columnsTo: string[];
        }>;
        compositePrimaryKeys: Record<string, {
            name?: string | undefined;
            columns: string[];
        }>;
    }>;
    _meta: {
        columns: Record<string, string>;
        tables: Record<string, string>;
    };
    enums: {};
}>]>;
export type CommonSquashedSchema = TypeOf<typeof commonSquashedSchema>;
export type CommonSchema = TypeOf<typeof commonSchema>;
export {};
