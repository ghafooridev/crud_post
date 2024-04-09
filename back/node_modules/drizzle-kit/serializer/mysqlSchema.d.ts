import { TypeOf } from "zod";
declare const index: import("zod").ZodObject<{
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
declare const column: import("zod").ZodObject<{
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
}>;
declare const compositePK: import("zod").ZodObject<{
    name: import("zod").ZodString;
    columns: import("zod").ZodArray<import("zod").ZodString, "many">;
}, "strict", import("zod").ZodTypeAny, {
    name: string;
    columns: string[];
}, {
    name: string;
    columns: string[];
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
declare const tableV4: import("zod").ZodObject<{
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
}, {
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
}>;
declare const table: import("zod").ZodObject<{
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
}>;
declare const dialect: import("zod").ZodLiteral<"mysql">;
export declare const schemaInternalV3: import("zod").ZodObject<{
    version: import("zod").ZodLiteral<"3">;
    dialect: import("zod").ZodLiteral<"mysql">;
    tables: import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodObject<{
        name: import("zod").ZodString;
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
    }, "strict", import("zod").ZodTypeAny, {
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
    }, {
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
    }>>;
}, "strict", import("zod").ZodTypeAny, {
    version: "3";
    dialect: "mysql";
    tables: Record<string, {
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
    }>;
}, {
    version: "3";
    dialect: "mysql";
    tables: Record<string, {
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
    }>;
}>;
export declare const schemaInternalV4: import("zod").ZodObject<{
    version: import("zod").ZodLiteral<"4">;
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
    }, {
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
    }>>;
    schemas: import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodString>;
}, "strict", import("zod").ZodTypeAny, {
    version: "4";
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
    }>;
    schemas: Record<string, string>;
}, {
    version: "4";
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
    }>;
    schemas: Record<string, string>;
}>;
export declare const kitInternals: import("zod").ZodOptional<import("zod").ZodObject<{
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
export declare const schemaInternal: import("zod").ZodObject<{
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
}, "strict", import("zod").ZodTypeAny, {
    internal?: {
        tables: Record<string, {
            columns: Record<string, {
                isDefaultAnExpression?: boolean | undefined;
            } | undefined>;
        } | undefined>;
    } | undefined;
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
}>;
export declare const schemaV3: import("zod").ZodObject<import("zod").extendShape<{
    version: import("zod").ZodLiteral<"3">;
    dialect: import("zod").ZodLiteral<"mysql">;
    tables: import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodObject<{
        name: import("zod").ZodString;
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
    }, "strict", import("zod").ZodTypeAny, {
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
    }, {
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
    }>>;
}, {
    id: import("zod").ZodString;
    prevId: import("zod").ZodString;
}>, "strip", import("zod").ZodTypeAny, {
    id: string;
    prevId: string;
    version: "3";
    dialect: "mysql";
    tables: Record<string, {
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
    }>;
}, {
    id: string;
    prevId: string;
    version: "3";
    dialect: "mysql";
    tables: Record<string, {
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
    }>;
}>;
export declare const schemaV4: import("zod").ZodObject<import("zod").extendShape<{
    version: import("zod").ZodLiteral<"4">;
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
    }, {
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
    }>>;
    schemas: import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodString>;
}, {
    id: import("zod").ZodString;
    prevId: import("zod").ZodString;
}>, "strip", import("zod").ZodTypeAny, {
    id: string;
    prevId: string;
    version: "4";
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
    }>;
    schemas: Record<string, string>;
}, {
    id: string;
    prevId: string;
    version: "4";
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
    }>;
    schemas: Record<string, string>;
}>;
export declare const schema: import("zod").ZodObject<import("zod").extendShape<{
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
}>;
export declare const schemaSquashed: import("zod").ZodObject<{
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
}>;
export declare const schemaSquashedV4: import("zod").ZodObject<{
    version: import("zod").ZodLiteral<"4">;
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
    }, {
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
    }>>;
    schemas: import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodString>;
}, "strict", import("zod").ZodTypeAny, {
    version: "4";
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
    }>;
    schemas: Record<string, string>;
}, {
    version: "4";
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
    }>;
    schemas: Record<string, string>;
}>;
export type Dialect = TypeOf<typeof dialect>;
export type Column = TypeOf<typeof column>;
export type Table = TypeOf<typeof table>;
export type TableV4 = TypeOf<typeof tableV4>;
export type MySqlSchema = TypeOf<typeof schema>;
export type MySqlSchemaV3 = TypeOf<typeof schemaV3>;
export type MySqlSchemaV4 = TypeOf<typeof schemaV4>;
export type MySqlSchemaInternal = TypeOf<typeof schemaInternal>;
export type MySqlKitInternals = TypeOf<typeof kitInternals>;
export type MySqlSchemaSquashed = TypeOf<typeof schemaSquashed>;
export type MySqlSchemaSquashedV4 = TypeOf<typeof schemaSquashedV4>;
export type Index = TypeOf<typeof index>;
export type ForeignKey = TypeOf<typeof fk>;
export type PrimaryKey = TypeOf<typeof compositePK>;
export type UniqueConstraint = TypeOf<typeof uniqueConstraint>;
export declare const MySqlSquasher: {
    squashIdx: (idx: Index) => string;
    unsquashIdx: (input: string) => Index;
    squashPK: (pk: PrimaryKey) => string;
    unsquashPK: (pk: string) => PrimaryKey;
    squashUnique: (unq: UniqueConstraint) => string;
    unsquashUnique: (unq: string) => UniqueConstraint;
    squashFK: (fk: ForeignKey) => string;
    unsquashFK: (input: string) => ForeignKey;
};
export declare const squashMysqlSchemeV4: (json: MySqlSchemaV4) => MySqlSchemaSquashedV4;
export declare const squashMysqlScheme: (json: MySqlSchema) => MySqlSchemaSquashed;
export declare const mysqlSchema: import("zod").ZodObject<import("zod").extendShape<{
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
}>;
export declare const mysqlSchemaV4: import("zod").ZodObject<import("zod").extendShape<{
    version: import("zod").ZodLiteral<"4">;
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
    }, {
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
    }>>;
    schemas: import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodString>;
}, {
    id: import("zod").ZodString;
    prevId: import("zod").ZodString;
}>, "strip", import("zod").ZodTypeAny, {
    id: string;
    prevId: string;
    version: "4";
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
    }>;
    schemas: Record<string, string>;
}, {
    id: string;
    prevId: string;
    version: "4";
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
    }>;
    schemas: Record<string, string>;
}>;
export declare const mysqlSchemaV3: import("zod").ZodObject<import("zod").extendShape<{
    version: import("zod").ZodLiteral<"3">;
    dialect: import("zod").ZodLiteral<"mysql">;
    tables: import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodObject<{
        name: import("zod").ZodString;
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
    }, "strict", import("zod").ZodTypeAny, {
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
    }, {
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
    }>>;
}, {
    id: import("zod").ZodString;
    prevId: import("zod").ZodString;
}>, "strip", import("zod").ZodTypeAny, {
    id: string;
    prevId: string;
    version: "3";
    dialect: "mysql";
    tables: Record<string, {
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
    }>;
}, {
    id: string;
    prevId: string;
    version: "3";
    dialect: "mysql";
    tables: Record<string, {
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
    }>;
}>;
export declare const mysqlSchemaSquashed: import("zod").ZodObject<{
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
}>;
export declare const backwardCompatibleMysqlSchema: import("zod").ZodUnion<[import("zod").ZodObject<import("zod").extendShape<{
    version: import("zod").ZodLiteral<"3">;
    dialect: import("zod").ZodLiteral<"mysql">;
    tables: import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodObject<{
        name: import("zod").ZodString;
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
    }, "strict", import("zod").ZodTypeAny, {
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
    }, {
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
    }>>;
}, {
    id: import("zod").ZodString;
    prevId: import("zod").ZodString;
}>, "strip", import("zod").ZodTypeAny, {
    id: string;
    prevId: string;
    version: "3";
    dialect: "mysql";
    tables: Record<string, {
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
    }>;
}, {
    id: string;
    prevId: string;
    version: "3";
    dialect: "mysql";
    tables: Record<string, {
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
    }>;
}>, import("zod").ZodObject<import("zod").extendShape<{
    version: import("zod").ZodLiteral<"4">;
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
    }, {
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
    }>>;
    schemas: import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodString>;
}, {
    id: import("zod").ZodString;
    prevId: import("zod").ZodString;
}>, "strip", import("zod").ZodTypeAny, {
    id: string;
    prevId: string;
    version: "4";
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
    }>;
    schemas: Record<string, string>;
}, {
    id: string;
    prevId: string;
    version: "4";
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
    }>;
    schemas: Record<string, string>;
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
}>]>;
export declare const dryMySql: {
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
};
export {};
