import { TypeOf } from "zod";
declare const enumSchema: import("zod").ZodObject<{
    name: import("zod").ZodString;
    values: import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodString>;
}, "strict", import("zod").ZodTypeAny, {
    name: string;
    values: Record<string, string>;
}, {
    name: string;
    values: Record<string, string>;
}>;
export declare const pgSchemaV2: import("zod").ZodObject<{
    version: import("zod").ZodLiteral<"2">;
    tables: import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodObject<{
        name: import("zod").ZodString;
        columns: import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodObject<{
            name: import("zod").ZodString;
            type: import("zod").ZodString;
            primaryKey: import("zod").ZodBoolean;
            notNull: import("zod").ZodBoolean;
            default: import("zod").ZodOptional<import("zod").ZodAny>;
            references: import("zod").ZodOptional<import("zod").ZodString>;
        }, "strict", import("zod").ZodTypeAny, {
            default?: any;
            references?: string | undefined;
            name: string;
            type: string;
            primaryKey: boolean;
            notNull: boolean;
        }, {
            default?: any;
            references?: string | undefined;
            name: string;
            type: string;
            primaryKey: boolean;
            notNull: boolean;
        }>>;
        indexes: import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodObject<{
            name: import("zod").ZodString;
            columns: import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodObject<{
                name: import("zod").ZodString;
            }, "strip", import("zod").ZodTypeAny, {
                name: string;
            }, {
                name: string;
            }>>;
            isUnique: import("zod").ZodBoolean;
        }, "strict", import("zod").ZodTypeAny, {
            name: string;
            columns: Record<string, {
                name: string;
            }>;
            isUnique: boolean;
        }, {
            name: string;
            columns: Record<string, {
                name: string;
            }>;
            isUnique: boolean;
        }>>;
    }, "strict", import("zod").ZodTypeAny, {
        name: string;
        columns: Record<string, {
            default?: any;
            references?: string | undefined;
            name: string;
            type: string;
            primaryKey: boolean;
            notNull: boolean;
        }>;
        indexes: Record<string, {
            name: string;
            columns: Record<string, {
                name: string;
            }>;
            isUnique: boolean;
        }>;
    }, {
        name: string;
        columns: Record<string, {
            default?: any;
            references?: string | undefined;
            name: string;
            type: string;
            primaryKey: boolean;
            notNull: boolean;
        }>;
        indexes: Record<string, {
            name: string;
            columns: Record<string, {
                name: string;
            }>;
            isUnique: boolean;
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
}, "strict", import("zod").ZodTypeAny, {
    version: "2";
    tables: Record<string, {
        name: string;
        columns: Record<string, {
            default?: any;
            references?: string | undefined;
            name: string;
            type: string;
            primaryKey: boolean;
            notNull: boolean;
        }>;
        indexes: Record<string, {
            name: string;
            columns: Record<string, {
                name: string;
            }>;
            isUnique: boolean;
        }>;
    }>;
    enums: Record<string, {
        name: string;
        values: Record<string, string>;
    }>;
}, {
    version: "2";
    tables: Record<string, {
        name: string;
        columns: Record<string, {
            default?: any;
            references?: string | undefined;
            name: string;
            type: string;
            primaryKey: boolean;
            notNull: boolean;
        }>;
        indexes: Record<string, {
            name: string;
            columns: Record<string, {
                name: string;
            }>;
            isUnique: boolean;
        }>;
    }>;
    enums: Record<string, {
        name: string;
        values: Record<string, string>;
    }>;
}>;
export declare const pgSchemaV1: import("zod").ZodObject<{
    version: import("zod").ZodLiteral<"1">;
    tables: import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodObject<{
        name: import("zod").ZodString;
        columns: import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodObject<{
            name: import("zod").ZodString;
            type: import("zod").ZodString;
            primaryKey: import("zod").ZodBoolean;
            notNull: import("zod").ZodBoolean;
            default: import("zod").ZodOptional<import("zod").ZodAny>;
            references: import("zod").ZodOptional<import("zod").ZodObject<{
                foreignKeyName: import("zod").ZodString;
                table: import("zod").ZodString;
                column: import("zod").ZodString;
                onDelete: import("zod").ZodOptional<import("zod").ZodString>;
                onUpdate: import("zod").ZodOptional<import("zod").ZodString>;
            }, "strict", import("zod").ZodTypeAny, {
                onUpdate?: string | undefined;
                onDelete?: string | undefined;
                foreignKeyName: string;
                table: string;
                column: string;
            }, {
                onUpdate?: string | undefined;
                onDelete?: string | undefined;
                foreignKeyName: string;
                table: string;
                column: string;
            }>>;
        }, "strict", import("zod").ZodTypeAny, {
            default?: any;
            references?: {
                onUpdate?: string | undefined;
                onDelete?: string | undefined;
                foreignKeyName: string;
                table: string;
                column: string;
            } | undefined;
            name: string;
            type: string;
            primaryKey: boolean;
            notNull: boolean;
        }, {
            default?: any;
            references?: {
                onUpdate?: string | undefined;
                onDelete?: string | undefined;
                foreignKeyName: string;
                table: string;
                column: string;
            } | undefined;
            name: string;
            type: string;
            primaryKey: boolean;
            notNull: boolean;
        }>>;
        indexes: import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodObject<{
            name: import("zod").ZodString;
            columns: import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodObject<{
                name: import("zod").ZodString;
            }, "strip", import("zod").ZodTypeAny, {
                name: string;
            }, {
                name: string;
            }>>;
            isUnique: import("zod").ZodBoolean;
        }, "strict", import("zod").ZodTypeAny, {
            name: string;
            columns: Record<string, {
                name: string;
            }>;
            isUnique: boolean;
        }, {
            name: string;
            columns: Record<string, {
                name: string;
            }>;
            isUnique: boolean;
        }>>;
    }, "strict", import("zod").ZodTypeAny, {
        name: string;
        columns: Record<string, {
            default?: any;
            references?: {
                onUpdate?: string | undefined;
                onDelete?: string | undefined;
                foreignKeyName: string;
                table: string;
                column: string;
            } | undefined;
            name: string;
            type: string;
            primaryKey: boolean;
            notNull: boolean;
        }>;
        indexes: Record<string, {
            name: string;
            columns: Record<string, {
                name: string;
            }>;
            isUnique: boolean;
        }>;
    }, {
        name: string;
        columns: Record<string, {
            default?: any;
            references?: {
                onUpdate?: string | undefined;
                onDelete?: string | undefined;
                foreignKeyName: string;
                table: string;
                column: string;
            } | undefined;
            name: string;
            type: string;
            primaryKey: boolean;
            notNull: boolean;
        }>;
        indexes: Record<string, {
            name: string;
            columns: Record<string, {
                name: string;
            }>;
            isUnique: boolean;
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
}, "strict", import("zod").ZodTypeAny, {
    version: "1";
    tables: Record<string, {
        name: string;
        columns: Record<string, {
            default?: any;
            references?: {
                onUpdate?: string | undefined;
                onDelete?: string | undefined;
                foreignKeyName: string;
                table: string;
                column: string;
            } | undefined;
            name: string;
            type: string;
            primaryKey: boolean;
            notNull: boolean;
        }>;
        indexes: Record<string, {
            name: string;
            columns: Record<string, {
                name: string;
            }>;
            isUnique: boolean;
        }>;
    }>;
    enums: Record<string, {
        name: string;
        values: Record<string, string>;
    }>;
}, {
    version: "1";
    tables: Record<string, {
        name: string;
        columns: Record<string, {
            default?: any;
            references?: {
                onUpdate?: string | undefined;
                onDelete?: string | undefined;
                foreignKeyName: string;
                table: string;
                column: string;
            } | undefined;
            name: string;
            type: string;
            primaryKey: boolean;
            notNull: boolean;
        }>;
        indexes: Record<string, {
            name: string;
            columns: Record<string, {
                name: string;
            }>;
            isUnique: boolean;
        }>;
    }>;
    enums: Record<string, {
        name: string;
        values: Record<string, string>;
    }>;
}>;
declare const index: import("zod").ZodObject<{
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
}>;
declare const fk: import("zod").ZodObject<{
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
}>;
declare const column: import("zod").ZodObject<{
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
}>;
declare const tableV3: import("zod").ZodObject<{
    name: import("zod").ZodString;
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
    nullsNotDistinct: import("zod").ZodBoolean;
}, "strict", import("zod").ZodTypeAny, {
    name: string;
    columns: string[];
    nullsNotDistinct: boolean;
}, {
    name: string;
    columns: string[];
    nullsNotDistinct: boolean;
}>;
declare const tableV4: import("zod").ZodObject<{
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
}>;
declare const table: import("zod").ZodObject<{
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
}>;
export declare const pgSchemaInternalV3: import("zod").ZodObject<{
    version: import("zod").ZodLiteral<"3">;
    dialect: import("zod").ZodLiteral<"pg">;
    tables: import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodObject<{
        name: import("zod").ZodString;
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
}, "strict", import("zod").ZodTypeAny, {
    version: "3";
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
    }>;
    enums: Record<string, {
        name: string;
        values: Record<string, string>;
    }>;
}, {
    version: "3";
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
    }>;
    enums: Record<string, {
        name: string;
        values: Record<string, string>;
    }>;
}>;
export declare const pgSchemaInternalV4: import("zod").ZodObject<{
    version: import("zod").ZodLiteral<"4">;
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
    version: "4";
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
    }>;
    schemas: Record<string, string>;
    enums: Record<string, {
        name: string;
        values: Record<string, string>;
    }>;
}, {
    version: "4";
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
    }>;
    schemas: Record<string, string>;
    enums: Record<string, {
        name: string;
        values: Record<string, string>;
    }>;
}>;
export declare const pgSchemaExternal: import("zod").ZodObject<{
    version: import("zod").ZodLiteral<"5">;
    dialect: import("zod").ZodLiteral<"pg">;
    tables: import("zod").ZodArray<import("zod").ZodObject<{
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
    }>, "many">;
    enums: import("zod").ZodArray<import("zod").ZodObject<{
        name: import("zod").ZodString;
        values: import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodString>;
    }, "strict", import("zod").ZodTypeAny, {
        name: string;
        values: Record<string, string>;
    }, {
        name: string;
        values: Record<string, string>;
    }>, "many">;
    schemas: import("zod").ZodArray<import("zod").ZodObject<{
        name: import("zod").ZodString;
    }, "strip", import("zod").ZodTypeAny, {
        name: string;
    }, {
        name: string;
    }>, "many">;
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
}, "strict", import("zod").ZodTypeAny, {
    version: "5";
    dialect: "pg";
    tables: {
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
    }[];
    schemas: {
        name: string;
    }[];
    _meta: {
        columns: Record<string, string>;
        tables: Record<string, string>;
        schemas: Record<string, string>;
    };
    enums: {
        name: string;
        values: Record<string, string>;
    }[];
}, {
    version: "5";
    dialect: "pg";
    tables: {
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
    }[];
    schemas: {
        name: string;
    }[];
    _meta: {
        columns: Record<string, string>;
        tables: Record<string, string>;
        schemas: Record<string, string>;
    };
    enums: {
        name: string;
        values: Record<string, string>;
    }[];
}>;
export declare const kitInternals: import("zod").ZodOptional<import("zod").ZodObject<{
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
export declare const pgSchemaInternal: import("zod").ZodObject<{
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
}, "strict", import("zod").ZodTypeAny, {
    internal?: {
        tables: Record<string, {
            columns: Record<string, {
                isArray?: boolean | undefined;
                dimensions?: number | undefined;
                rawType?: string | undefined;
            } | undefined>;
        } | undefined>;
    } | undefined;
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
}>;
export declare const pgSchemaSquashedV4: import("zod").ZodObject<{
    version: import("zod").ZodLiteral<"4">;
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
    version: "4";
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
    }>;
    schemas: Record<string, string>;
    enums: Record<string, {
        name: string;
        values: Record<string, string>;
    }>;
}, {
    version: "4";
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
    }>;
    schemas: Record<string, string>;
    enums: Record<string, {
        name: string;
        values: Record<string, string>;
    }>;
}>;
export declare const pgSchemaSquashed: import("zod").ZodObject<{
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
}>;
export declare const pgSchemaV3: import("zod").ZodObject<import("zod").extendShape<{
    version: import("zod").ZodLiteral<"3">;
    dialect: import("zod").ZodLiteral<"pg">;
    tables: import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodObject<{
        name: import("zod").ZodString;
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
}, {
    id: import("zod").ZodString;
    prevId: import("zod").ZodString;
}>, "strip", import("zod").ZodTypeAny, {
    id: string;
    prevId: string;
    version: "3";
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
    }>;
    enums: Record<string, {
        name: string;
        values: Record<string, string>;
    }>;
}, {
    id: string;
    prevId: string;
    version: "3";
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
    }>;
    enums: Record<string, {
        name: string;
        values: Record<string, string>;
    }>;
}>;
export declare const pgSchemaV4: import("zod").ZodObject<import("zod").extendShape<{
    version: import("zod").ZodLiteral<"4">;
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
}, {
    id: import("zod").ZodString;
    prevId: import("zod").ZodString;
}>, "strip", import("zod").ZodTypeAny, {
    id: string;
    prevId: string;
    version: "4";
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
    }>;
    schemas: Record<string, string>;
    enums: Record<string, {
        name: string;
        values: Record<string, string>;
    }>;
}, {
    id: string;
    prevId: string;
    version: "4";
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
    }>;
    schemas: Record<string, string>;
    enums: Record<string, {
        name: string;
        values: Record<string, string>;
    }>;
}>;
export declare const pgSchema: import("zod").ZodObject<import("zod").extendShape<{
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
}>;
export type Enum = TypeOf<typeof enumSchema>;
export type Column = TypeOf<typeof column>;
export type TableV3 = TypeOf<typeof tableV3>;
export type TableV4 = TypeOf<typeof tableV4>;
export type Table = TypeOf<typeof table>;
export type PgSchema = TypeOf<typeof pgSchema>;
export type PgSchemaInternal = TypeOf<typeof pgSchemaInternal>;
export type PgSchemaExternal = TypeOf<typeof pgSchemaExternal>;
export type PgSchemaSquashed = TypeOf<typeof pgSchemaSquashed>;
export type PgSchemaSquashedV4 = TypeOf<typeof pgSchemaSquashedV4>;
export type Index = TypeOf<typeof index>;
export type ForeignKey = TypeOf<typeof fk>;
export type PrimaryKey = TypeOf<typeof compositePK>;
export type UniqueConstraint = TypeOf<typeof uniqueConstraint>;
export type PgKitInternals = TypeOf<typeof kitInternals>;
export type PgSchemaV1 = TypeOf<typeof pgSchemaV1>;
export type PgSchemaV2 = TypeOf<typeof pgSchemaV2>;
export type PgSchemaV3 = TypeOf<typeof pgSchemaV3>;
export type PgSchemaV4 = TypeOf<typeof pgSchemaV4>;
export declare const backwardCompatiblePgSchema: import("zod").ZodUnion<[import("zod").ZodObject<{
    version: import("zod").ZodLiteral<"1">;
    tables: import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodObject<{
        name: import("zod").ZodString;
        columns: import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodObject<{
            name: import("zod").ZodString;
            type: import("zod").ZodString;
            primaryKey: import("zod").ZodBoolean;
            notNull: import("zod").ZodBoolean;
            default: import("zod").ZodOptional<import("zod").ZodAny>;
            references: import("zod").ZodOptional<import("zod").ZodObject<{
                foreignKeyName: import("zod").ZodString;
                table: import("zod").ZodString;
                column: import("zod").ZodString;
                onDelete: import("zod").ZodOptional<import("zod").ZodString>;
                onUpdate: import("zod").ZodOptional<import("zod").ZodString>;
            }, "strict", import("zod").ZodTypeAny, {
                onUpdate?: string | undefined;
                onDelete?: string | undefined;
                foreignKeyName: string;
                table: string;
                column: string;
            }, {
                onUpdate?: string | undefined;
                onDelete?: string | undefined;
                foreignKeyName: string;
                table: string;
                column: string;
            }>>;
        }, "strict", import("zod").ZodTypeAny, {
            default?: any;
            references?: {
                onUpdate?: string | undefined;
                onDelete?: string | undefined;
                foreignKeyName: string;
                table: string;
                column: string;
            } | undefined;
            name: string;
            type: string;
            primaryKey: boolean;
            notNull: boolean;
        }, {
            default?: any;
            references?: {
                onUpdate?: string | undefined;
                onDelete?: string | undefined;
                foreignKeyName: string;
                table: string;
                column: string;
            } | undefined;
            name: string;
            type: string;
            primaryKey: boolean;
            notNull: boolean;
        }>>;
        indexes: import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodObject<{
            name: import("zod").ZodString;
            columns: import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodObject<{
                name: import("zod").ZodString;
            }, "strip", import("zod").ZodTypeAny, {
                name: string;
            }, {
                name: string;
            }>>;
            isUnique: import("zod").ZodBoolean;
        }, "strict", import("zod").ZodTypeAny, {
            name: string;
            columns: Record<string, {
                name: string;
            }>;
            isUnique: boolean;
        }, {
            name: string;
            columns: Record<string, {
                name: string;
            }>;
            isUnique: boolean;
        }>>;
    }, "strict", import("zod").ZodTypeAny, {
        name: string;
        columns: Record<string, {
            default?: any;
            references?: {
                onUpdate?: string | undefined;
                onDelete?: string | undefined;
                foreignKeyName: string;
                table: string;
                column: string;
            } | undefined;
            name: string;
            type: string;
            primaryKey: boolean;
            notNull: boolean;
        }>;
        indexes: Record<string, {
            name: string;
            columns: Record<string, {
                name: string;
            }>;
            isUnique: boolean;
        }>;
    }, {
        name: string;
        columns: Record<string, {
            default?: any;
            references?: {
                onUpdate?: string | undefined;
                onDelete?: string | undefined;
                foreignKeyName: string;
                table: string;
                column: string;
            } | undefined;
            name: string;
            type: string;
            primaryKey: boolean;
            notNull: boolean;
        }>;
        indexes: Record<string, {
            name: string;
            columns: Record<string, {
                name: string;
            }>;
            isUnique: boolean;
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
}, "strict", import("zod").ZodTypeAny, {
    version: "1";
    tables: Record<string, {
        name: string;
        columns: Record<string, {
            default?: any;
            references?: {
                onUpdate?: string | undefined;
                onDelete?: string | undefined;
                foreignKeyName: string;
                table: string;
                column: string;
            } | undefined;
            name: string;
            type: string;
            primaryKey: boolean;
            notNull: boolean;
        }>;
        indexes: Record<string, {
            name: string;
            columns: Record<string, {
                name: string;
            }>;
            isUnique: boolean;
        }>;
    }>;
    enums: Record<string, {
        name: string;
        values: Record<string, string>;
    }>;
}, {
    version: "1";
    tables: Record<string, {
        name: string;
        columns: Record<string, {
            default?: any;
            references?: {
                onUpdate?: string | undefined;
                onDelete?: string | undefined;
                foreignKeyName: string;
                table: string;
                column: string;
            } | undefined;
            name: string;
            type: string;
            primaryKey: boolean;
            notNull: boolean;
        }>;
        indexes: Record<string, {
            name: string;
            columns: Record<string, {
                name: string;
            }>;
            isUnique: boolean;
        }>;
    }>;
    enums: Record<string, {
        name: string;
        values: Record<string, string>;
    }>;
}>, import("zod").ZodObject<{
    version: import("zod").ZodLiteral<"2">;
    tables: import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodObject<{
        name: import("zod").ZodString;
        columns: import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodObject<{
            name: import("zod").ZodString;
            type: import("zod").ZodString;
            primaryKey: import("zod").ZodBoolean;
            notNull: import("zod").ZodBoolean;
            default: import("zod").ZodOptional<import("zod").ZodAny>;
            references: import("zod").ZodOptional<import("zod").ZodString>;
        }, "strict", import("zod").ZodTypeAny, {
            default?: any;
            references?: string | undefined;
            name: string;
            type: string;
            primaryKey: boolean;
            notNull: boolean;
        }, {
            default?: any;
            references?: string | undefined;
            name: string;
            type: string;
            primaryKey: boolean;
            notNull: boolean;
        }>>;
        indexes: import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodObject<{
            name: import("zod").ZodString;
            columns: import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodObject<{
                name: import("zod").ZodString;
            }, "strip", import("zod").ZodTypeAny, {
                name: string;
            }, {
                name: string;
            }>>;
            isUnique: import("zod").ZodBoolean;
        }, "strict", import("zod").ZodTypeAny, {
            name: string;
            columns: Record<string, {
                name: string;
            }>;
            isUnique: boolean;
        }, {
            name: string;
            columns: Record<string, {
                name: string;
            }>;
            isUnique: boolean;
        }>>;
    }, "strict", import("zod").ZodTypeAny, {
        name: string;
        columns: Record<string, {
            default?: any;
            references?: string | undefined;
            name: string;
            type: string;
            primaryKey: boolean;
            notNull: boolean;
        }>;
        indexes: Record<string, {
            name: string;
            columns: Record<string, {
                name: string;
            }>;
            isUnique: boolean;
        }>;
    }, {
        name: string;
        columns: Record<string, {
            default?: any;
            references?: string | undefined;
            name: string;
            type: string;
            primaryKey: boolean;
            notNull: boolean;
        }>;
        indexes: Record<string, {
            name: string;
            columns: Record<string, {
                name: string;
            }>;
            isUnique: boolean;
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
}, "strict", import("zod").ZodTypeAny, {
    version: "2";
    tables: Record<string, {
        name: string;
        columns: Record<string, {
            default?: any;
            references?: string | undefined;
            name: string;
            type: string;
            primaryKey: boolean;
            notNull: boolean;
        }>;
        indexes: Record<string, {
            name: string;
            columns: Record<string, {
                name: string;
            }>;
            isUnique: boolean;
        }>;
    }>;
    enums: Record<string, {
        name: string;
        values: Record<string, string>;
    }>;
}, {
    version: "2";
    tables: Record<string, {
        name: string;
        columns: Record<string, {
            default?: any;
            references?: string | undefined;
            name: string;
            type: string;
            primaryKey: boolean;
            notNull: boolean;
        }>;
        indexes: Record<string, {
            name: string;
            columns: Record<string, {
                name: string;
            }>;
            isUnique: boolean;
        }>;
    }>;
    enums: Record<string, {
        name: string;
        values: Record<string, string>;
    }>;
}>, import("zod").ZodObject<import("zod").extendShape<{
    version: import("zod").ZodLiteral<"3">;
    dialect: import("zod").ZodLiteral<"pg">;
    tables: import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodObject<{
        name: import("zod").ZodString;
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
}, {
    id: import("zod").ZodString;
    prevId: import("zod").ZodString;
}>, "strip", import("zod").ZodTypeAny, {
    id: string;
    prevId: string;
    version: "3";
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
    }>;
    enums: Record<string, {
        name: string;
        values: Record<string, string>;
    }>;
}, {
    id: string;
    prevId: string;
    version: "3";
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
    }>;
    enums: Record<string, {
        name: string;
        values: Record<string, string>;
    }>;
}>, import("zod").ZodObject<import("zod").extendShape<{
    version: import("zod").ZodLiteral<"4">;
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
}, {
    id: import("zod").ZodString;
    prevId: import("zod").ZodString;
}>, "strip", import("zod").ZodTypeAny, {
    id: string;
    prevId: string;
    version: "4";
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
    }>;
    schemas: Record<string, string>;
    enums: Record<string, {
        name: string;
        values: Record<string, string>;
    }>;
}, {
    id: string;
    prevId: string;
    version: "4";
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
    }>;
    schemas: Record<string, string>;
    enums: Record<string, {
        name: string;
        values: Record<string, string>;
    }>;
}>, import("zod").ZodObject<import("zod").extendShape<{
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
}>]>;
export declare const PgSquasher: {
    squashIdx: (idx: Index) => string;
    unsquashIdx: (input: string) => Index;
    squashFK: (fk: ForeignKey) => string;
    squashPK: (pk: PrimaryKey) => string;
    unsquashPK: (pk: string) => PrimaryKey;
    squashUnique: (unq: UniqueConstraint) => string;
    unsquashUnique: (unq: string) => UniqueConstraint;
    unsquashFK: (input: string) => ForeignKey;
};
export declare const squashPgSchemeV4: (json: PgSchemaV4) => PgSchemaSquashedV4;
export declare const squashPgScheme: (json: PgSchema) => PgSchemaSquashed;
export declare const dryPg: {
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
};
export {};
