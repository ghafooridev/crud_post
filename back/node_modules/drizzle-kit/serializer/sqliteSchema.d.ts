import { TypeOf } from "zod";
declare const index: import("zod").ZodObject<{
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
}>;
declare const fk: import("zod").ZodObject<{
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
}>;
declare const compositePK: import("zod").ZodObject<{
    columns: import("zod").ZodArray<import("zod").ZodString, "many">;
    name: import("zod").ZodOptional<import("zod").ZodString>;
}, "strict", import("zod").ZodTypeAny, {
    name?: string | undefined;
    columns: string[];
}, {
    name?: string | undefined;
    columns: string[];
}>;
declare const column: import("zod").ZodObject<{
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
}>;
declare const uniqueConstraint: import("zod").ZodObject<{
    name: import("zod").ZodString;
    columns: import("zod").ZodArray<import("zod").ZodString, "many">;
}, "strict", import("zod").ZodTypeAny, {
    name: string;
    columns: string[];
}, {
    name: string;
    columns: string[];
}>;
declare const table: import("zod").ZodObject<{
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
}>;
declare const dialect: import("zod").ZodEnum<["sqlite"]>;
export declare const schemaInternalV3: import("zod").ZodObject<{
    version: import("zod").ZodLiteral<"3">;
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
    }, {
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
    }>>;
    enums: import("zod").ZodObject<{}, "strip", import("zod").ZodTypeAny, {}, {}>;
}, "strict", import("zod").ZodTypeAny, {
    version: "3";
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
    }>;
    enums: {};
}, {
    version: "3";
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
    }>;
    enums: {};
}>;
export declare const schemaInternalV4: import("zod").ZodObject<{
    version: import("zod").ZodLiteral<"4">;
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
}, "strict", import("zod").ZodTypeAny, {
    version: "4";
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
    enums: {};
}, {
    version: "4";
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
    enums: {};
}>;
export declare const schemaInternal: import("zod").ZodObject<{
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
}, "strict", import("zod").ZodTypeAny, {
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
}>;
export declare const schemaV3: import("zod").ZodObject<import("zod").extendShape<{
    version: import("zod").ZodLiteral<"3">;
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
    }, {
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
    }>>;
    enums: import("zod").ZodObject<{}, "strip", import("zod").ZodTypeAny, {}, {}>;
}, {
    id: import("zod").ZodString;
    prevId: import("zod").ZodString;
}>, "strict", import("zod").ZodTypeAny, {
    id: string;
    prevId: string;
    version: "3";
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
    }>;
    enums: {};
}, {
    id: string;
    prevId: string;
    version: "3";
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
    }>;
    enums: {};
}>;
export declare const schemaV4: import("zod").ZodObject<import("zod").extendShape<{
    version: import("zod").ZodLiteral<"4">;
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
}, {
    id: import("zod").ZodString;
    prevId: import("zod").ZodString;
}>, "strict", import("zod").ZodTypeAny, {
    id: string;
    prevId: string;
    version: "4";
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
    enums: {};
}, {
    id: string;
    prevId: string;
    version: "4";
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
    enums: {};
}>;
export declare const schema: import("zod").ZodObject<import("zod").extendShape<{
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
}>;
export declare const schemaSquashed: import("zod").ZodObject<{
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
}>;
export type Dialect = TypeOf<typeof dialect>;
export type Column = TypeOf<typeof column>;
export type Table = TypeOf<typeof table>;
export type SQLiteSchema = TypeOf<typeof schema>;
export type SQLiteSchemaV3 = TypeOf<typeof schemaV3>;
export type SQLiteSchemaV4 = TypeOf<typeof schemaV4>;
export type SQLiteSchemaInternal = TypeOf<typeof schemaInternal>;
export type SQLiteSchemaSquashed = TypeOf<typeof schemaSquashed>;
export type Index = TypeOf<typeof index>;
export type ForeignKey = TypeOf<typeof fk>;
export type PrimaryKey = TypeOf<typeof compositePK>;
export type UniqueConstraint = TypeOf<typeof uniqueConstraint>;
export declare const SQLiteSquasher: {
    squashIdx: (idx: Index) => string;
    unsquashIdx: (input: string) => Index;
    squashUnique: (unq: UniqueConstraint) => string;
    unsquashUnique: (unq: string) => UniqueConstraint;
    squashFK: (fk: ForeignKey) => string;
    unsquashFK: (input: string) => ForeignKey;
    squashPK: (pk: PrimaryKey) => string;
    unsquashPK: (pk: string) => string[];
};
export declare const squashSqliteScheme: (json: SQLiteSchema | SQLiteSchemaV4) => SQLiteSchemaSquashed;
export declare const drySQLite: {
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
};
export declare const sqliteSchemaV3: import("zod").ZodObject<import("zod").extendShape<{
    version: import("zod").ZodLiteral<"3">;
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
    }, {
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
    }>>;
    enums: import("zod").ZodObject<{}, "strip", import("zod").ZodTypeAny, {}, {}>;
}, {
    id: import("zod").ZodString;
    prevId: import("zod").ZodString;
}>, "strict", import("zod").ZodTypeAny, {
    id: string;
    prevId: string;
    version: "3";
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
    }>;
    enums: {};
}, {
    id: string;
    prevId: string;
    version: "3";
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
    }>;
    enums: {};
}>;
export declare const sqliteSchemaV4: import("zod").ZodObject<import("zod").extendShape<{
    version: import("zod").ZodLiteral<"4">;
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
}, {
    id: import("zod").ZodString;
    prevId: import("zod").ZodString;
}>, "strict", import("zod").ZodTypeAny, {
    id: string;
    prevId: string;
    version: "4";
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
    enums: {};
}, {
    id: string;
    prevId: string;
    version: "4";
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
    enums: {};
}>;
export declare const sqliteSchema: import("zod").ZodObject<import("zod").extendShape<{
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
}>;
export declare const SQLiteSchemaSquashed: import("zod").ZodObject<{
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
}>;
export declare const backwardCompatibleSqliteSchema: import("zod").ZodUnion<[import("zod").ZodObject<import("zod").extendShape<{
    version: import("zod").ZodLiteral<"3">;
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
    }, {
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
    }>>;
    enums: import("zod").ZodObject<{}, "strip", import("zod").ZodTypeAny, {}, {}>;
}, {
    id: import("zod").ZodString;
    prevId: import("zod").ZodString;
}>, "strict", import("zod").ZodTypeAny, {
    id: string;
    prevId: string;
    version: "3";
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
    }>;
    enums: {};
}, {
    id: string;
    prevId: string;
    version: "3";
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
    }>;
    enums: {};
}>, import("zod").ZodObject<import("zod").extendShape<{
    version: import("zod").ZodLiteral<"4">;
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
}, {
    id: import("zod").ZodString;
    prevId: import("zod").ZodString;
}>, "strict", import("zod").ZodTypeAny, {
    id: string;
    prevId: string;
    version: "4";
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
    enums: {};
}, {
    id: string;
    prevId: string;
    version: "4";
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
    enums: {};
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
export {};
