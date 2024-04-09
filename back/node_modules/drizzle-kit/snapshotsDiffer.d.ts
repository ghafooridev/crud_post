import { TypeOf, ZodTypeAny, z } from "zod";
import { JsonStatement } from "./jsonStatements";
import { CommonSquashedSchema, Dialect } from "./schemaValidator";
export declare const makePatched: <T extends ZodTypeAny>(schema: T) => z.ZodUnion<[z.ZodObject<{
    type: z.ZodLiteral<"added">;
    value: T;
}, "strip", ZodTypeAny, z.objectUtil.addQuestionMarks<{
    type: "added";
    value: T["_output"];
}> extends infer T_1 ? { [k_1 in keyof T_1]: z.objectUtil.addQuestionMarks<{
    type: "added";
    value: T["_output"];
}>[k_1]; } : never, z.objectUtil.addQuestionMarks<{
    type: "added";
    value: T["_input"];
}> extends infer T_2 ? { [k_3 in keyof T_2]: z.objectUtil.addQuestionMarks<{
    type: "added";
    value: T["_input"];
}>[k_3]; } : never>, z.ZodObject<{
    type: z.ZodLiteral<"deleted">;
    value: T;
}, "strip", ZodTypeAny, z.objectUtil.addQuestionMarks<{
    type: "deleted";
    value: T["_output"];
}> extends infer T_3 ? { [k_1_1 in keyof T_3]: z.objectUtil.addQuestionMarks<{
    type: "deleted";
    value: T["_output"];
}>[k_1_1]; } : never, z.objectUtil.addQuestionMarks<{
    type: "deleted";
    value: T["_input"];
}> extends infer T_4 ? { [k_3_1 in keyof T_4]: z.objectUtil.addQuestionMarks<{
    type: "deleted";
    value: T["_input"];
}>[k_3_1]; } : never>, z.ZodObject<{
    type: z.ZodLiteral<"changed">;
    old: T;
    new: T;
}, "strip", ZodTypeAny, z.objectUtil.addQuestionMarks<{
    type: "changed";
    old: T["_output"];
    new: T["_output"];
}> extends infer T_5 ? { [k_1_2 in keyof T_5]: z.objectUtil.addQuestionMarks<{
    type: "changed";
    old: T["_output"];
    new: T["_output"];
}>[k_1_2]; } : never, z.objectUtil.addQuestionMarks<{
    type: "changed";
    old: T["_input"];
    new: T["_input"];
}> extends infer T_6 ? { [k_3_2 in keyof T_6]: z.objectUtil.addQuestionMarks<{
    type: "changed";
    old: T["_input"];
    new: T["_input"];
}>[k_3_2]; } : never>]>;
export declare const makeSelfOrPatched: <T extends ZodTypeAny>(schema: T) => z.ZodUnion<[z.ZodObject<{
    type: z.ZodLiteral<"none">;
    value: z.ZodOptional<T>;
}, "strip", ZodTypeAny, z.objectUtil.addQuestionMarks<{
    type: "none";
    value: T["_output"] | undefined;
}> extends infer T_1 ? { [k_1 in keyof T_1]: z.objectUtil.addQuestionMarks<{
    type: "none";
    value: T["_output"] | undefined;
}>[k_1]; } : never, z.objectUtil.addQuestionMarks<{
    type: "none";
    value: T["_input"] | undefined;
}> extends infer T_2 ? { [k_3 in keyof T_2]: z.objectUtil.addQuestionMarks<{
    type: "none";
    value: T["_input"] | undefined;
}>[k_3]; } : never>, z.ZodObject<{
    type: z.ZodLiteral<"added">;
    value: T;
}, "strip", ZodTypeAny, z.objectUtil.addQuestionMarks<{
    type: "added";
    value: T["_output"];
}> extends infer T_3 ? { [k_1_1 in keyof T_3]: z.objectUtil.addQuestionMarks<{
    type: "added";
    value: T["_output"];
}>[k_1_1]; } : never, z.objectUtil.addQuestionMarks<{
    type: "added";
    value: T["_input"];
}> extends infer T_4 ? { [k_3_1 in keyof T_4]: z.objectUtil.addQuestionMarks<{
    type: "added";
    value: T["_input"];
}>[k_3_1]; } : never>, z.ZodObject<{
    type: z.ZodLiteral<"deleted">;
    value: T;
}, "strip", ZodTypeAny, z.objectUtil.addQuestionMarks<{
    type: "deleted";
    value: T["_output"];
}> extends infer T_5 ? { [k_1_2 in keyof T_5]: z.objectUtil.addQuestionMarks<{
    type: "deleted";
    value: T["_output"];
}>[k_1_2]; } : never, z.objectUtil.addQuestionMarks<{
    type: "deleted";
    value: T["_input"];
}> extends infer T_6 ? { [k_3_2 in keyof T_6]: z.objectUtil.addQuestionMarks<{
    type: "deleted";
    value: T["_input"];
}>[k_3_2]; } : never>, z.ZodObject<{
    type: z.ZodLiteral<"changed">;
    old: T;
    new: T;
}, "strip", ZodTypeAny, z.objectUtil.addQuestionMarks<{
    type: "changed";
    old: T["_output"];
    new: T["_output"];
}> extends infer T_7 ? { [k_1_3 in keyof T_7]: z.objectUtil.addQuestionMarks<{
    type: "changed";
    old: T["_output"];
    new: T["_output"];
}>[k_1_3]; } : never, z.objectUtil.addQuestionMarks<{
    type: "changed";
    old: T["_input"];
    new: T["_input"];
}> extends infer T_8 ? { [k_3_3 in keyof T_8]: z.objectUtil.addQuestionMarks<{
    type: "changed";
    old: T["_input"];
    new: T["_input"];
}>[k_3_3]; } : never>]>;
declare const columnSchema: z.ZodObject<{
    name: z.ZodString;
    type: z.ZodString;
    primaryKey: z.ZodOptional<z.ZodBoolean>;
    default: z.ZodOptional<z.ZodAny>;
    notNull: z.ZodOptional<z.ZodBoolean>;
    autoincrement: z.ZodOptional<z.ZodBoolean>;
    onUpdate: z.ZodOptional<z.ZodBoolean>;
    isUnique: z.ZodOptional<z.ZodAny>;
    uniqueName: z.ZodOptional<z.ZodString>;
    nullsNotDistinct: z.ZodOptional<z.ZodBoolean>;
}, "strict", ZodTypeAny, {
    isUnique?: any;
    default?: any;
    onUpdate?: boolean | undefined;
    primaryKey?: boolean | undefined;
    notNull?: boolean | undefined;
    autoincrement?: boolean | undefined;
    uniqueName?: string | undefined;
    nullsNotDistinct?: boolean | undefined;
    name: string;
    type: string;
}, {
    isUnique?: any;
    default?: any;
    onUpdate?: boolean | undefined;
    primaryKey?: boolean | undefined;
    notNull?: boolean | undefined;
    autoincrement?: boolean | undefined;
    uniqueName?: string | undefined;
    nullsNotDistinct?: boolean | undefined;
    name: string;
    type: string;
}>;
declare const alteredColumnSchema: z.ZodObject<{
    name: z.ZodUnion<[z.ZodString, z.ZodObject<{
        type: z.ZodEnum<["changed"]>;
        old: z.ZodString;
        new: z.ZodString;
    }, "strip", ZodTypeAny, {
        type: "changed";
        old: string;
        new: string;
    }, {
        type: "changed";
        old: string;
        new: string;
    }>]>;
    type: z.ZodOptional<z.ZodObject<{
        type: z.ZodEnum<["changed"]>;
        old: z.ZodString;
        new: z.ZodString;
    }, "strip", ZodTypeAny, {
        type: "changed";
        old: string;
        new: string;
    }, {
        type: "changed";
        old: string;
        new: string;
    }>>;
    default: z.ZodOptional<z.ZodUnion<[z.ZodObject<{
        type: z.ZodLiteral<"added">;
        value: z.ZodAny;
    }, "strip", ZodTypeAny, {
        value?: any;
        type: "added";
    }, {
        value?: any;
        type: "added";
    }>, z.ZodObject<{
        type: z.ZodLiteral<"deleted">;
        value: z.ZodAny;
    }, "strip", ZodTypeAny, {
        value?: any;
        type: "deleted";
    }, {
        value?: any;
        type: "deleted";
    }>, z.ZodObject<{
        type: z.ZodLiteral<"changed">;
        old: z.ZodAny;
        new: z.ZodAny;
    }, "strip", ZodTypeAny, {
        old?: any;
        new?: any;
        type: "changed";
    }, {
        old?: any;
        new?: any;
        type: "changed";
    }>]>>;
    primaryKey: z.ZodOptional<z.ZodUnion<[z.ZodObject<{
        type: z.ZodLiteral<"added">;
        value: z.ZodBoolean;
    }, "strip", ZodTypeAny, {
        type: "added";
        value: boolean;
    }, {
        type: "added";
        value: boolean;
    }>, z.ZodObject<{
        type: z.ZodLiteral<"deleted">;
        value: z.ZodBoolean;
    }, "strip", ZodTypeAny, {
        type: "deleted";
        value: boolean;
    }, {
        type: "deleted";
        value: boolean;
    }>, z.ZodObject<{
        type: z.ZodLiteral<"changed">;
        old: z.ZodBoolean;
        new: z.ZodBoolean;
    }, "strip", ZodTypeAny, {
        type: "changed";
        old: boolean;
        new: boolean;
    }, {
        type: "changed";
        old: boolean;
        new: boolean;
    }>]>>;
    notNull: z.ZodOptional<z.ZodUnion<[z.ZodObject<{
        type: z.ZodLiteral<"added">;
        value: z.ZodBoolean;
    }, "strip", ZodTypeAny, {
        type: "added";
        value: boolean;
    }, {
        type: "added";
        value: boolean;
    }>, z.ZodObject<{
        type: z.ZodLiteral<"deleted">;
        value: z.ZodBoolean;
    }, "strip", ZodTypeAny, {
        type: "deleted";
        value: boolean;
    }, {
        type: "deleted";
        value: boolean;
    }>, z.ZodObject<{
        type: z.ZodLiteral<"changed">;
        old: z.ZodBoolean;
        new: z.ZodBoolean;
    }, "strip", ZodTypeAny, {
        type: "changed";
        old: boolean;
        new: boolean;
    }, {
        type: "changed";
        old: boolean;
        new: boolean;
    }>]>>;
    onUpdate: z.ZodOptional<z.ZodUnion<[z.ZodObject<{
        type: z.ZodLiteral<"added">;
        value: z.ZodBoolean;
    }, "strip", ZodTypeAny, {
        type: "added";
        value: boolean;
    }, {
        type: "added";
        value: boolean;
    }>, z.ZodObject<{
        type: z.ZodLiteral<"deleted">;
        value: z.ZodBoolean;
    }, "strip", ZodTypeAny, {
        type: "deleted";
        value: boolean;
    }, {
        type: "deleted";
        value: boolean;
    }>, z.ZodObject<{
        type: z.ZodLiteral<"changed">;
        old: z.ZodBoolean;
        new: z.ZodBoolean;
    }, "strip", ZodTypeAny, {
        type: "changed";
        old: boolean;
        new: boolean;
    }, {
        type: "changed";
        old: boolean;
        new: boolean;
    }>]>>;
    autoincrement: z.ZodOptional<z.ZodUnion<[z.ZodObject<{
        type: z.ZodLiteral<"added">;
        value: z.ZodBoolean;
    }, "strip", ZodTypeAny, {
        type: "added";
        value: boolean;
    }, {
        type: "added";
        value: boolean;
    }>, z.ZodObject<{
        type: z.ZodLiteral<"deleted">;
        value: z.ZodBoolean;
    }, "strip", ZodTypeAny, {
        type: "deleted";
        value: boolean;
    }, {
        type: "deleted";
        value: boolean;
    }>, z.ZodObject<{
        type: z.ZodLiteral<"changed">;
        old: z.ZodBoolean;
        new: z.ZodBoolean;
    }, "strip", ZodTypeAny, {
        type: "changed";
        old: boolean;
        new: boolean;
    }, {
        type: "changed";
        old: boolean;
        new: boolean;
    }>]>>;
}, "strict", ZodTypeAny, {
    default?: {
        value?: any;
        type: "added";
    } | {
        value?: any;
        type: "deleted";
    } | {
        old?: any;
        new?: any;
        type: "changed";
    } | undefined;
    type?: {
        type: "changed";
        old: string;
        new: string;
    } | undefined;
    onUpdate?: {
        type: "added";
        value: boolean;
    } | {
        type: "deleted";
        value: boolean;
    } | {
        type: "changed";
        old: boolean;
        new: boolean;
    } | undefined;
    primaryKey?: {
        type: "added";
        value: boolean;
    } | {
        type: "deleted";
        value: boolean;
    } | {
        type: "changed";
        old: boolean;
        new: boolean;
    } | undefined;
    notNull?: {
        type: "added";
        value: boolean;
    } | {
        type: "deleted";
        value: boolean;
    } | {
        type: "changed";
        old: boolean;
        new: boolean;
    } | undefined;
    autoincrement?: {
        type: "added";
        value: boolean;
    } | {
        type: "deleted";
        value: boolean;
    } | {
        type: "changed";
        old: boolean;
        new: boolean;
    } | undefined;
    name: string | {
        type: "changed";
        old: string;
        new: string;
    };
}, {
    default?: {
        value?: any;
        type: "added";
    } | {
        value?: any;
        type: "deleted";
    } | {
        old?: any;
        new?: any;
        type: "changed";
    } | undefined;
    type?: {
        type: "changed";
        old: string;
        new: string;
    } | undefined;
    onUpdate?: {
        type: "added";
        value: boolean;
    } | {
        type: "deleted";
        value: boolean;
    } | {
        type: "changed";
        old: boolean;
        new: boolean;
    } | undefined;
    primaryKey?: {
        type: "added";
        value: boolean;
    } | {
        type: "deleted";
        value: boolean;
    } | {
        type: "changed";
        old: boolean;
        new: boolean;
    } | undefined;
    notNull?: {
        type: "added";
        value: boolean;
    } | {
        type: "deleted";
        value: boolean;
    } | {
        type: "changed";
        old: boolean;
        new: boolean;
    } | undefined;
    autoincrement?: {
        type: "added";
        value: boolean;
    } | {
        type: "deleted";
        value: boolean;
    } | {
        type: "changed";
        old: boolean;
        new: boolean;
    } | undefined;
    name: string | {
        type: "changed";
        old: string;
        new: string;
    };
}>;
declare const enumSchema: z.ZodObject<{
    name: z.ZodString;
    values: z.ZodArray<z.ZodString, "many">;
}, "strict", ZodTypeAny, {
    name: string;
    values: string[];
}, {
    name: string;
    values: string[];
}>;
declare const tableScheme: z.ZodObject<{
    name: z.ZodString;
    schema: z.ZodDefault<z.ZodString>;
    columns: z.ZodRecord<z.ZodString, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodString;
        primaryKey: z.ZodOptional<z.ZodBoolean>;
        default: z.ZodOptional<z.ZodAny>;
        notNull: z.ZodOptional<z.ZodBoolean>;
        autoincrement: z.ZodOptional<z.ZodBoolean>;
        onUpdate: z.ZodOptional<z.ZodBoolean>;
        isUnique: z.ZodOptional<z.ZodAny>;
        uniqueName: z.ZodOptional<z.ZodString>;
        nullsNotDistinct: z.ZodOptional<z.ZodBoolean>;
    }, "strict", ZodTypeAny, {
        isUnique?: any;
        default?: any;
        onUpdate?: boolean | undefined;
        primaryKey?: boolean | undefined;
        notNull?: boolean | undefined;
        autoincrement?: boolean | undefined;
        uniqueName?: string | undefined;
        nullsNotDistinct?: boolean | undefined;
        name: string;
        type: string;
    }, {
        isUnique?: any;
        default?: any;
        onUpdate?: boolean | undefined;
        primaryKey?: boolean | undefined;
        notNull?: boolean | undefined;
        autoincrement?: boolean | undefined;
        uniqueName?: string | undefined;
        nullsNotDistinct?: boolean | undefined;
        name: string;
        type: string;
    }>>;
    indexes: z.ZodRecord<z.ZodString, z.ZodString>;
    foreignKeys: z.ZodRecord<z.ZodString, z.ZodString>;
    compositePrimaryKeys: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodString>>;
    uniqueConstraints: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodString>>;
}, "strict", ZodTypeAny, {
    name: string;
    columns: Record<string, {
        isUnique?: any;
        default?: any;
        onUpdate?: boolean | undefined;
        primaryKey?: boolean | undefined;
        notNull?: boolean | undefined;
        autoincrement?: boolean | undefined;
        uniqueName?: string | undefined;
        nullsNotDistinct?: boolean | undefined;
        name: string;
        type: string;
    }>;
    indexes: Record<string, string>;
    foreignKeys: Record<string, string>;
    schema: string;
    compositePrimaryKeys: Record<string, string>;
    uniqueConstraints: Record<string, string>;
}, {
    schema?: string | undefined;
    compositePrimaryKeys?: Record<string, string> | undefined;
    uniqueConstraints?: Record<string, string> | undefined;
    name: string;
    columns: Record<string, {
        isUnique?: any;
        default?: any;
        onUpdate?: boolean | undefined;
        primaryKey?: boolean | undefined;
        notNull?: boolean | undefined;
        autoincrement?: boolean | undefined;
        uniqueName?: string | undefined;
        nullsNotDistinct?: boolean | undefined;
        name: string;
        type: string;
    }>;
    indexes: Record<string, string>;
    foreignKeys: Record<string, string>;
}>;
export declare const alteredTableScheme: z.ZodObject<{
    name: z.ZodString;
    schema: z.ZodUnion<[z.ZodObject<{
        type: z.ZodLiteral<"none">;
        value: z.ZodOptional<z.ZodString>;
    }, "strip", ZodTypeAny, {
        value?: string | undefined;
        type: "none";
    }, {
        value?: string | undefined;
        type: "none";
    }>, z.ZodObject<{
        type: z.ZodLiteral<"added">;
        value: z.ZodString;
    }, "strip", ZodTypeAny, {
        type: "added";
        value: string;
    }, {
        type: "added";
        value: string;
    }>, z.ZodObject<{
        type: z.ZodLiteral<"deleted">;
        value: z.ZodString;
    }, "strip", ZodTypeAny, {
        type: "deleted";
        value: string;
    }, {
        type: "deleted";
        value: string;
    }>, z.ZodObject<{
        type: z.ZodLiteral<"changed">;
        old: z.ZodString;
        new: z.ZodString;
    }, "strip", ZodTypeAny, {
        type: "changed";
        old: string;
        new: string;
    }, {
        type: "changed";
        old: string;
        new: string;
    }>]>;
    deleted: z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        type: z.ZodString;
        primaryKey: z.ZodOptional<z.ZodBoolean>;
        default: z.ZodOptional<z.ZodAny>;
        notNull: z.ZodOptional<z.ZodBoolean>;
        autoincrement: z.ZodOptional<z.ZodBoolean>;
        onUpdate: z.ZodOptional<z.ZodBoolean>;
        isUnique: z.ZodOptional<z.ZodAny>;
        uniqueName: z.ZodOptional<z.ZodString>;
        nullsNotDistinct: z.ZodOptional<z.ZodBoolean>;
    }, "strict", ZodTypeAny, {
        isUnique?: any;
        default?: any;
        onUpdate?: boolean | undefined;
        primaryKey?: boolean | undefined;
        notNull?: boolean | undefined;
        autoincrement?: boolean | undefined;
        uniqueName?: string | undefined;
        nullsNotDistinct?: boolean | undefined;
        name: string;
        type: string;
    }, {
        isUnique?: any;
        default?: any;
        onUpdate?: boolean | undefined;
        primaryKey?: boolean | undefined;
        notNull?: boolean | undefined;
        autoincrement?: boolean | undefined;
        uniqueName?: string | undefined;
        nullsNotDistinct?: boolean | undefined;
        name: string;
        type: string;
    }>, "many">;
    added: z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        type: z.ZodString;
        primaryKey: z.ZodOptional<z.ZodBoolean>;
        default: z.ZodOptional<z.ZodAny>;
        notNull: z.ZodOptional<z.ZodBoolean>;
        autoincrement: z.ZodOptional<z.ZodBoolean>;
        onUpdate: z.ZodOptional<z.ZodBoolean>;
        isUnique: z.ZodOptional<z.ZodAny>;
        uniqueName: z.ZodOptional<z.ZodString>;
        nullsNotDistinct: z.ZodOptional<z.ZodBoolean>;
    }, "strict", ZodTypeAny, {
        isUnique?: any;
        default?: any;
        onUpdate?: boolean | undefined;
        primaryKey?: boolean | undefined;
        notNull?: boolean | undefined;
        autoincrement?: boolean | undefined;
        uniqueName?: string | undefined;
        nullsNotDistinct?: boolean | undefined;
        name: string;
        type: string;
    }, {
        isUnique?: any;
        default?: any;
        onUpdate?: boolean | undefined;
        primaryKey?: boolean | undefined;
        notNull?: boolean | undefined;
        autoincrement?: boolean | undefined;
        uniqueName?: string | undefined;
        nullsNotDistinct?: boolean | undefined;
        name: string;
        type: string;
    }>, "many">;
    altered: z.ZodArray<z.ZodObject<{
        name: z.ZodUnion<[z.ZodString, z.ZodObject<{
            type: z.ZodEnum<["changed"]>;
            old: z.ZodString;
            new: z.ZodString;
        }, "strip", ZodTypeAny, {
            type: "changed";
            old: string;
            new: string;
        }, {
            type: "changed";
            old: string;
            new: string;
        }>]>;
        type: z.ZodOptional<z.ZodObject<{
            type: z.ZodEnum<["changed"]>;
            old: z.ZodString;
            new: z.ZodString;
        }, "strip", ZodTypeAny, {
            type: "changed";
            old: string;
            new: string;
        }, {
            type: "changed";
            old: string;
            new: string;
        }>>;
        default: z.ZodOptional<z.ZodUnion<[z.ZodObject<{
            type: z.ZodLiteral<"added">;
            value: z.ZodAny;
        }, "strip", ZodTypeAny, {
            value?: any;
            type: "added";
        }, {
            value?: any;
            type: "added";
        }>, z.ZodObject<{
            type: z.ZodLiteral<"deleted">;
            value: z.ZodAny;
        }, "strip", ZodTypeAny, {
            value?: any;
            type: "deleted";
        }, {
            value?: any;
            type: "deleted";
        }>, z.ZodObject<{
            type: z.ZodLiteral<"changed">;
            old: z.ZodAny;
            new: z.ZodAny;
        }, "strip", ZodTypeAny, {
            old?: any;
            new?: any;
            type: "changed";
        }, {
            old?: any;
            new?: any;
            type: "changed";
        }>]>>;
        primaryKey: z.ZodOptional<z.ZodUnion<[z.ZodObject<{
            type: z.ZodLiteral<"added">;
            value: z.ZodBoolean;
        }, "strip", ZodTypeAny, {
            type: "added";
            value: boolean;
        }, {
            type: "added";
            value: boolean;
        }>, z.ZodObject<{
            type: z.ZodLiteral<"deleted">;
            value: z.ZodBoolean;
        }, "strip", ZodTypeAny, {
            type: "deleted";
            value: boolean;
        }, {
            type: "deleted";
            value: boolean;
        }>, z.ZodObject<{
            type: z.ZodLiteral<"changed">;
            old: z.ZodBoolean;
            new: z.ZodBoolean;
        }, "strip", ZodTypeAny, {
            type: "changed";
            old: boolean;
            new: boolean;
        }, {
            type: "changed";
            old: boolean;
            new: boolean;
        }>]>>;
        notNull: z.ZodOptional<z.ZodUnion<[z.ZodObject<{
            type: z.ZodLiteral<"added">;
            value: z.ZodBoolean;
        }, "strip", ZodTypeAny, {
            type: "added";
            value: boolean;
        }, {
            type: "added";
            value: boolean;
        }>, z.ZodObject<{
            type: z.ZodLiteral<"deleted">;
            value: z.ZodBoolean;
        }, "strip", ZodTypeAny, {
            type: "deleted";
            value: boolean;
        }, {
            type: "deleted";
            value: boolean;
        }>, z.ZodObject<{
            type: z.ZodLiteral<"changed">;
            old: z.ZodBoolean;
            new: z.ZodBoolean;
        }, "strip", ZodTypeAny, {
            type: "changed";
            old: boolean;
            new: boolean;
        }, {
            type: "changed";
            old: boolean;
            new: boolean;
        }>]>>;
        onUpdate: z.ZodOptional<z.ZodUnion<[z.ZodObject<{
            type: z.ZodLiteral<"added">;
            value: z.ZodBoolean;
        }, "strip", ZodTypeAny, {
            type: "added";
            value: boolean;
        }, {
            type: "added";
            value: boolean;
        }>, z.ZodObject<{
            type: z.ZodLiteral<"deleted">;
            value: z.ZodBoolean;
        }, "strip", ZodTypeAny, {
            type: "deleted";
            value: boolean;
        }, {
            type: "deleted";
            value: boolean;
        }>, z.ZodObject<{
            type: z.ZodLiteral<"changed">;
            old: z.ZodBoolean;
            new: z.ZodBoolean;
        }, "strip", ZodTypeAny, {
            type: "changed";
            old: boolean;
            new: boolean;
        }, {
            type: "changed";
            old: boolean;
            new: boolean;
        }>]>>;
        autoincrement: z.ZodOptional<z.ZodUnion<[z.ZodObject<{
            type: z.ZodLiteral<"added">;
            value: z.ZodBoolean;
        }, "strip", ZodTypeAny, {
            type: "added";
            value: boolean;
        }, {
            type: "added";
            value: boolean;
        }>, z.ZodObject<{
            type: z.ZodLiteral<"deleted">;
            value: z.ZodBoolean;
        }, "strip", ZodTypeAny, {
            type: "deleted";
            value: boolean;
        }, {
            type: "deleted";
            value: boolean;
        }>, z.ZodObject<{
            type: z.ZodLiteral<"changed">;
            old: z.ZodBoolean;
            new: z.ZodBoolean;
        }, "strip", ZodTypeAny, {
            type: "changed";
            old: boolean;
            new: boolean;
        }, {
            type: "changed";
            old: boolean;
            new: boolean;
        }>]>>;
    }, "strict", ZodTypeAny, {
        default?: {
            value?: any;
            type: "added";
        } | {
            value?: any;
            type: "deleted";
        } | {
            old?: any;
            new?: any;
            type: "changed";
        } | undefined;
        type?: {
            type: "changed";
            old: string;
            new: string;
        } | undefined;
        onUpdate?: {
            type: "added";
            value: boolean;
        } | {
            type: "deleted";
            value: boolean;
        } | {
            type: "changed";
            old: boolean;
            new: boolean;
        } | undefined;
        primaryKey?: {
            type: "added";
            value: boolean;
        } | {
            type: "deleted";
            value: boolean;
        } | {
            type: "changed";
            old: boolean;
            new: boolean;
        } | undefined;
        notNull?: {
            type: "added";
            value: boolean;
        } | {
            type: "deleted";
            value: boolean;
        } | {
            type: "changed";
            old: boolean;
            new: boolean;
        } | undefined;
        autoincrement?: {
            type: "added";
            value: boolean;
        } | {
            type: "deleted";
            value: boolean;
        } | {
            type: "changed";
            old: boolean;
            new: boolean;
        } | undefined;
        name: string | {
            type: "changed";
            old: string;
            new: string;
        };
    }, {
        default?: {
            value?: any;
            type: "added";
        } | {
            value?: any;
            type: "deleted";
        } | {
            old?: any;
            new?: any;
            type: "changed";
        } | undefined;
        type?: {
            type: "changed";
            old: string;
            new: string;
        } | undefined;
        onUpdate?: {
            type: "added";
            value: boolean;
        } | {
            type: "deleted";
            value: boolean;
        } | {
            type: "changed";
            old: boolean;
            new: boolean;
        } | undefined;
        primaryKey?: {
            type: "added";
            value: boolean;
        } | {
            type: "deleted";
            value: boolean;
        } | {
            type: "changed";
            old: boolean;
            new: boolean;
        } | undefined;
        notNull?: {
            type: "added";
            value: boolean;
        } | {
            type: "deleted";
            value: boolean;
        } | {
            type: "changed";
            old: boolean;
            new: boolean;
        } | undefined;
        autoincrement?: {
            type: "added";
            value: boolean;
        } | {
            type: "deleted";
            value: boolean;
        } | {
            type: "changed";
            old: boolean;
            new: boolean;
        } | undefined;
        name: string | {
            type: "changed";
            old: string;
            new: string;
        };
    }>, "many">;
    addedIndexes: z.ZodRecord<z.ZodString, z.ZodString>;
    deletedIndexes: z.ZodRecord<z.ZodString, z.ZodString>;
    alteredIndexes: z.ZodRecord<z.ZodString, z.ZodObject<{
        __new: z.ZodString;
        __old: z.ZodString;
    }, "strict", ZodTypeAny, {
        __old: string;
        __new: string;
    }, {
        __old: string;
        __new: string;
    }>>;
    addedForeignKeys: z.ZodRecord<z.ZodString, z.ZodString>;
    deletedForeignKeys: z.ZodRecord<z.ZodString, z.ZodString>;
    alteredForeignKeys: z.ZodRecord<z.ZodString, z.ZodObject<{
        __new: z.ZodString;
        __old: z.ZodString;
    }, "strict", ZodTypeAny, {
        __old: string;
        __new: string;
    }, {
        __old: string;
        __new: string;
    }>>;
    addedCompositePKs: z.ZodRecord<z.ZodString, z.ZodString>;
    deletedCompositePKs: z.ZodRecord<z.ZodString, z.ZodString>;
    alteredCompositePKs: z.ZodRecord<z.ZodString, z.ZodObject<{
        __new: z.ZodString;
        __old: z.ZodString;
    }, "strip", ZodTypeAny, {
        __old: string;
        __new: string;
    }, {
        __old: string;
        __new: string;
    }>>;
    addedUniqueConstraints: z.ZodRecord<z.ZodString, z.ZodString>;
    deletedUniqueConstraints: z.ZodRecord<z.ZodString, z.ZodString>;
    alteredUniqueConstraints: z.ZodRecord<z.ZodString, z.ZodObject<{
        __new: z.ZodString;
        __old: z.ZodString;
    }, "strip", ZodTypeAny, {
        __old: string;
        __new: string;
    }, {
        __old: string;
        __new: string;
    }>>;
}, "strict", ZodTypeAny, {
    name: string;
    schema: {
        value?: string | undefined;
        type: "none";
    } | {
        type: "added";
        value: string;
    } | {
        type: "deleted";
        value: string;
    } | {
        type: "changed";
        old: string;
        new: string;
    };
    added: {
        isUnique?: any;
        default?: any;
        onUpdate?: boolean | undefined;
        primaryKey?: boolean | undefined;
        notNull?: boolean | undefined;
        autoincrement?: boolean | undefined;
        uniqueName?: string | undefined;
        nullsNotDistinct?: boolean | undefined;
        name: string;
        type: string;
    }[];
    deleted: {
        isUnique?: any;
        default?: any;
        onUpdate?: boolean | undefined;
        primaryKey?: boolean | undefined;
        notNull?: boolean | undefined;
        autoincrement?: boolean | undefined;
        uniqueName?: string | undefined;
        nullsNotDistinct?: boolean | undefined;
        name: string;
        type: string;
    }[];
    altered: {
        default?: {
            value?: any;
            type: "added";
        } | {
            value?: any;
            type: "deleted";
        } | {
            old?: any;
            new?: any;
            type: "changed";
        } | undefined;
        type?: {
            type: "changed";
            old: string;
            new: string;
        } | undefined;
        onUpdate?: {
            type: "added";
            value: boolean;
        } | {
            type: "deleted";
            value: boolean;
        } | {
            type: "changed";
            old: boolean;
            new: boolean;
        } | undefined;
        primaryKey?: {
            type: "added";
            value: boolean;
        } | {
            type: "deleted";
            value: boolean;
        } | {
            type: "changed";
            old: boolean;
            new: boolean;
        } | undefined;
        notNull?: {
            type: "added";
            value: boolean;
        } | {
            type: "deleted";
            value: boolean;
        } | {
            type: "changed";
            old: boolean;
            new: boolean;
        } | undefined;
        autoincrement?: {
            type: "added";
            value: boolean;
        } | {
            type: "deleted";
            value: boolean;
        } | {
            type: "changed";
            old: boolean;
            new: boolean;
        } | undefined;
        name: string | {
            type: "changed";
            old: string;
            new: string;
        };
    }[];
    addedIndexes: Record<string, string>;
    deletedIndexes: Record<string, string>;
    alteredIndexes: Record<string, {
        __old: string;
        __new: string;
    }>;
    addedForeignKeys: Record<string, string>;
    deletedForeignKeys: Record<string, string>;
    alteredForeignKeys: Record<string, {
        __old: string;
        __new: string;
    }>;
    addedCompositePKs: Record<string, string>;
    deletedCompositePKs: Record<string, string>;
    alteredCompositePKs: Record<string, {
        __old: string;
        __new: string;
    }>;
    addedUniqueConstraints: Record<string, string>;
    deletedUniqueConstraints: Record<string, string>;
    alteredUniqueConstraints: Record<string, {
        __old: string;
        __new: string;
    }>;
}, {
    name: string;
    schema: {
        value?: string | undefined;
        type: "none";
    } | {
        type: "added";
        value: string;
    } | {
        type: "deleted";
        value: string;
    } | {
        type: "changed";
        old: string;
        new: string;
    };
    added: {
        isUnique?: any;
        default?: any;
        onUpdate?: boolean | undefined;
        primaryKey?: boolean | undefined;
        notNull?: boolean | undefined;
        autoincrement?: boolean | undefined;
        uniqueName?: string | undefined;
        nullsNotDistinct?: boolean | undefined;
        name: string;
        type: string;
    }[];
    deleted: {
        isUnique?: any;
        default?: any;
        onUpdate?: boolean | undefined;
        primaryKey?: boolean | undefined;
        notNull?: boolean | undefined;
        autoincrement?: boolean | undefined;
        uniqueName?: string | undefined;
        nullsNotDistinct?: boolean | undefined;
        name: string;
        type: string;
    }[];
    altered: {
        default?: {
            value?: any;
            type: "added";
        } | {
            value?: any;
            type: "deleted";
        } | {
            old?: any;
            new?: any;
            type: "changed";
        } | undefined;
        type?: {
            type: "changed";
            old: string;
            new: string;
        } | undefined;
        onUpdate?: {
            type: "added";
            value: boolean;
        } | {
            type: "deleted";
            value: boolean;
        } | {
            type: "changed";
            old: boolean;
            new: boolean;
        } | undefined;
        primaryKey?: {
            type: "added";
            value: boolean;
        } | {
            type: "deleted";
            value: boolean;
        } | {
            type: "changed";
            old: boolean;
            new: boolean;
        } | undefined;
        notNull?: {
            type: "added";
            value: boolean;
        } | {
            type: "deleted";
            value: boolean;
        } | {
            type: "changed";
            old: boolean;
            new: boolean;
        } | undefined;
        autoincrement?: {
            type: "added";
            value: boolean;
        } | {
            type: "deleted";
            value: boolean;
        } | {
            type: "changed";
            old: boolean;
            new: boolean;
        } | undefined;
        name: string | {
            type: "changed";
            old: string;
            new: string;
        };
    }[];
    addedIndexes: Record<string, string>;
    deletedIndexes: Record<string, string>;
    alteredIndexes: Record<string, {
        __old: string;
        __new: string;
    }>;
    addedForeignKeys: Record<string, string>;
    deletedForeignKeys: Record<string, string>;
    alteredForeignKeys: Record<string, {
        __old: string;
        __new: string;
    }>;
    addedCompositePKs: Record<string, string>;
    deletedCompositePKs: Record<string, string>;
    alteredCompositePKs: Record<string, {
        __old: string;
        __new: string;
    }>;
    addedUniqueConstraints: Record<string, string>;
    deletedUniqueConstraints: Record<string, string>;
    alteredUniqueConstraints: Record<string, {
        __old: string;
        __new: string;
    }>;
}>;
export declare const diffResultScheme: z.ZodObject<{
    addedTables: z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        schema: z.ZodDefault<z.ZodString>;
        columns: z.ZodRecord<z.ZodString, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodString;
            primaryKey: z.ZodOptional<z.ZodBoolean>;
            default: z.ZodOptional<z.ZodAny>;
            notNull: z.ZodOptional<z.ZodBoolean>;
            autoincrement: z.ZodOptional<z.ZodBoolean>;
            onUpdate: z.ZodOptional<z.ZodBoolean>;
            isUnique: z.ZodOptional<z.ZodAny>;
            uniqueName: z.ZodOptional<z.ZodString>;
            nullsNotDistinct: z.ZodOptional<z.ZodBoolean>;
        }, "strict", ZodTypeAny, {
            isUnique?: any;
            default?: any;
            onUpdate?: boolean | undefined;
            primaryKey?: boolean | undefined;
            notNull?: boolean | undefined;
            autoincrement?: boolean | undefined;
            uniqueName?: string | undefined;
            nullsNotDistinct?: boolean | undefined;
            name: string;
            type: string;
        }, {
            isUnique?: any;
            default?: any;
            onUpdate?: boolean | undefined;
            primaryKey?: boolean | undefined;
            notNull?: boolean | undefined;
            autoincrement?: boolean | undefined;
            uniqueName?: string | undefined;
            nullsNotDistinct?: boolean | undefined;
            name: string;
            type: string;
        }>>;
        indexes: z.ZodRecord<z.ZodString, z.ZodString>;
        foreignKeys: z.ZodRecord<z.ZodString, z.ZodString>;
        compositePrimaryKeys: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodString>>;
        uniqueConstraints: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodString>>;
    }, "strict", ZodTypeAny, {
        name: string;
        columns: Record<string, {
            isUnique?: any;
            default?: any;
            onUpdate?: boolean | undefined;
            primaryKey?: boolean | undefined;
            notNull?: boolean | undefined;
            autoincrement?: boolean | undefined;
            uniqueName?: string | undefined;
            nullsNotDistinct?: boolean | undefined;
            name: string;
            type: string;
        }>;
        indexes: Record<string, string>;
        foreignKeys: Record<string, string>;
        schema: string;
        compositePrimaryKeys: Record<string, string>;
        uniqueConstraints: Record<string, string>;
    }, {
        schema?: string | undefined;
        compositePrimaryKeys?: Record<string, string> | undefined;
        uniqueConstraints?: Record<string, string> | undefined;
        name: string;
        columns: Record<string, {
            isUnique?: any;
            default?: any;
            onUpdate?: boolean | undefined;
            primaryKey?: boolean | undefined;
            notNull?: boolean | undefined;
            autoincrement?: boolean | undefined;
            uniqueName?: string | undefined;
            nullsNotDistinct?: boolean | undefined;
            name: string;
            type: string;
        }>;
        indexes: Record<string, string>;
        foreignKeys: Record<string, string>;
    }>, "many">;
    deletedTables: z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        schema: z.ZodDefault<z.ZodString>;
        columns: z.ZodRecord<z.ZodString, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodString;
            primaryKey: z.ZodOptional<z.ZodBoolean>;
            default: z.ZodOptional<z.ZodAny>;
            notNull: z.ZodOptional<z.ZodBoolean>;
            autoincrement: z.ZodOptional<z.ZodBoolean>;
            onUpdate: z.ZodOptional<z.ZodBoolean>;
            isUnique: z.ZodOptional<z.ZodAny>;
            uniqueName: z.ZodOptional<z.ZodString>;
            nullsNotDistinct: z.ZodOptional<z.ZodBoolean>;
        }, "strict", ZodTypeAny, {
            isUnique?: any;
            default?: any;
            onUpdate?: boolean | undefined;
            primaryKey?: boolean | undefined;
            notNull?: boolean | undefined;
            autoincrement?: boolean | undefined;
            uniqueName?: string | undefined;
            nullsNotDistinct?: boolean | undefined;
            name: string;
            type: string;
        }, {
            isUnique?: any;
            default?: any;
            onUpdate?: boolean | undefined;
            primaryKey?: boolean | undefined;
            notNull?: boolean | undefined;
            autoincrement?: boolean | undefined;
            uniqueName?: string | undefined;
            nullsNotDistinct?: boolean | undefined;
            name: string;
            type: string;
        }>>;
        indexes: z.ZodRecord<z.ZodString, z.ZodString>;
        foreignKeys: z.ZodRecord<z.ZodString, z.ZodString>;
        compositePrimaryKeys: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodString>>;
        uniqueConstraints: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodString>>;
    }, "strict", ZodTypeAny, {
        name: string;
        columns: Record<string, {
            isUnique?: any;
            default?: any;
            onUpdate?: boolean | undefined;
            primaryKey?: boolean | undefined;
            notNull?: boolean | undefined;
            autoincrement?: boolean | undefined;
            uniqueName?: string | undefined;
            nullsNotDistinct?: boolean | undefined;
            name: string;
            type: string;
        }>;
        indexes: Record<string, string>;
        foreignKeys: Record<string, string>;
        schema: string;
        compositePrimaryKeys: Record<string, string>;
        uniqueConstraints: Record<string, string>;
    }, {
        schema?: string | undefined;
        compositePrimaryKeys?: Record<string, string> | undefined;
        uniqueConstraints?: Record<string, string> | undefined;
        name: string;
        columns: Record<string, {
            isUnique?: any;
            default?: any;
            onUpdate?: boolean | undefined;
            primaryKey?: boolean | undefined;
            notNull?: boolean | undefined;
            autoincrement?: boolean | undefined;
            uniqueName?: string | undefined;
            nullsNotDistinct?: boolean | undefined;
            name: string;
            type: string;
        }>;
        indexes: Record<string, string>;
        foreignKeys: Record<string, string>;
    }>, "many">;
    alteredTablesWithColumns: z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        schema: z.ZodUnion<[z.ZodObject<{
            type: z.ZodLiteral<"none">;
            value: z.ZodOptional<z.ZodString>;
        }, "strip", ZodTypeAny, {
            value?: string | undefined;
            type: "none";
        }, {
            value?: string | undefined;
            type: "none";
        }>, z.ZodObject<{
            type: z.ZodLiteral<"added">;
            value: z.ZodString;
        }, "strip", ZodTypeAny, {
            type: "added";
            value: string;
        }, {
            type: "added";
            value: string;
        }>, z.ZodObject<{
            type: z.ZodLiteral<"deleted">;
            value: z.ZodString;
        }, "strip", ZodTypeAny, {
            type: "deleted";
            value: string;
        }, {
            type: "deleted";
            value: string;
        }>, z.ZodObject<{
            type: z.ZodLiteral<"changed">;
            old: z.ZodString;
            new: z.ZodString;
        }, "strip", ZodTypeAny, {
            type: "changed";
            old: string;
            new: string;
        }, {
            type: "changed";
            old: string;
            new: string;
        }>]>;
        deleted: z.ZodArray<z.ZodObject<{
            name: z.ZodString;
            type: z.ZodString;
            primaryKey: z.ZodOptional<z.ZodBoolean>;
            default: z.ZodOptional<z.ZodAny>;
            notNull: z.ZodOptional<z.ZodBoolean>;
            autoincrement: z.ZodOptional<z.ZodBoolean>;
            onUpdate: z.ZodOptional<z.ZodBoolean>;
            isUnique: z.ZodOptional<z.ZodAny>;
            uniqueName: z.ZodOptional<z.ZodString>;
            nullsNotDistinct: z.ZodOptional<z.ZodBoolean>;
        }, "strict", ZodTypeAny, {
            isUnique?: any;
            default?: any;
            onUpdate?: boolean | undefined;
            primaryKey?: boolean | undefined;
            notNull?: boolean | undefined;
            autoincrement?: boolean | undefined;
            uniqueName?: string | undefined;
            nullsNotDistinct?: boolean | undefined;
            name: string;
            type: string;
        }, {
            isUnique?: any;
            default?: any;
            onUpdate?: boolean | undefined;
            primaryKey?: boolean | undefined;
            notNull?: boolean | undefined;
            autoincrement?: boolean | undefined;
            uniqueName?: string | undefined;
            nullsNotDistinct?: boolean | undefined;
            name: string;
            type: string;
        }>, "many">;
        added: z.ZodArray<z.ZodObject<{
            name: z.ZodString;
            type: z.ZodString;
            primaryKey: z.ZodOptional<z.ZodBoolean>;
            default: z.ZodOptional<z.ZodAny>;
            notNull: z.ZodOptional<z.ZodBoolean>;
            autoincrement: z.ZodOptional<z.ZodBoolean>;
            onUpdate: z.ZodOptional<z.ZodBoolean>;
            isUnique: z.ZodOptional<z.ZodAny>;
            uniqueName: z.ZodOptional<z.ZodString>;
            nullsNotDistinct: z.ZodOptional<z.ZodBoolean>;
        }, "strict", ZodTypeAny, {
            isUnique?: any;
            default?: any;
            onUpdate?: boolean | undefined;
            primaryKey?: boolean | undefined;
            notNull?: boolean | undefined;
            autoincrement?: boolean | undefined;
            uniqueName?: string | undefined;
            nullsNotDistinct?: boolean | undefined;
            name: string;
            type: string;
        }, {
            isUnique?: any;
            default?: any;
            onUpdate?: boolean | undefined;
            primaryKey?: boolean | undefined;
            notNull?: boolean | undefined;
            autoincrement?: boolean | undefined;
            uniqueName?: string | undefined;
            nullsNotDistinct?: boolean | undefined;
            name: string;
            type: string;
        }>, "many">;
        altered: z.ZodArray<z.ZodObject<{
            name: z.ZodUnion<[z.ZodString, z.ZodObject<{
                type: z.ZodEnum<["changed"]>;
                old: z.ZodString;
                new: z.ZodString;
            }, "strip", ZodTypeAny, {
                type: "changed";
                old: string;
                new: string;
            }, {
                type: "changed";
                old: string;
                new: string;
            }>]>;
            type: z.ZodOptional<z.ZodObject<{
                type: z.ZodEnum<["changed"]>;
                old: z.ZodString;
                new: z.ZodString;
            }, "strip", ZodTypeAny, {
                type: "changed";
                old: string;
                new: string;
            }, {
                type: "changed";
                old: string;
                new: string;
            }>>;
            default: z.ZodOptional<z.ZodUnion<[z.ZodObject<{
                type: z.ZodLiteral<"added">;
                value: z.ZodAny;
            }, "strip", ZodTypeAny, {
                value?: any;
                type: "added";
            }, {
                value?: any;
                type: "added";
            }>, z.ZodObject<{
                type: z.ZodLiteral<"deleted">;
                value: z.ZodAny;
            }, "strip", ZodTypeAny, {
                value?: any;
                type: "deleted";
            }, {
                value?: any;
                type: "deleted";
            }>, z.ZodObject<{
                type: z.ZodLiteral<"changed">;
                old: z.ZodAny;
                new: z.ZodAny;
            }, "strip", ZodTypeAny, {
                old?: any;
                new?: any;
                type: "changed";
            }, {
                old?: any;
                new?: any;
                type: "changed";
            }>]>>;
            primaryKey: z.ZodOptional<z.ZodUnion<[z.ZodObject<{
                type: z.ZodLiteral<"added">;
                value: z.ZodBoolean;
            }, "strip", ZodTypeAny, {
                type: "added";
                value: boolean;
            }, {
                type: "added";
                value: boolean;
            }>, z.ZodObject<{
                type: z.ZodLiteral<"deleted">;
                value: z.ZodBoolean;
            }, "strip", ZodTypeAny, {
                type: "deleted";
                value: boolean;
            }, {
                type: "deleted";
                value: boolean;
            }>, z.ZodObject<{
                type: z.ZodLiteral<"changed">;
                old: z.ZodBoolean;
                new: z.ZodBoolean;
            }, "strip", ZodTypeAny, {
                type: "changed";
                old: boolean;
                new: boolean;
            }, {
                type: "changed";
                old: boolean;
                new: boolean;
            }>]>>;
            notNull: z.ZodOptional<z.ZodUnion<[z.ZodObject<{
                type: z.ZodLiteral<"added">;
                value: z.ZodBoolean;
            }, "strip", ZodTypeAny, {
                type: "added";
                value: boolean;
            }, {
                type: "added";
                value: boolean;
            }>, z.ZodObject<{
                type: z.ZodLiteral<"deleted">;
                value: z.ZodBoolean;
            }, "strip", ZodTypeAny, {
                type: "deleted";
                value: boolean;
            }, {
                type: "deleted";
                value: boolean;
            }>, z.ZodObject<{
                type: z.ZodLiteral<"changed">;
                old: z.ZodBoolean;
                new: z.ZodBoolean;
            }, "strip", ZodTypeAny, {
                type: "changed";
                old: boolean;
                new: boolean;
            }, {
                type: "changed";
                old: boolean;
                new: boolean;
            }>]>>;
            onUpdate: z.ZodOptional<z.ZodUnion<[z.ZodObject<{
                type: z.ZodLiteral<"added">;
                value: z.ZodBoolean;
            }, "strip", ZodTypeAny, {
                type: "added";
                value: boolean;
            }, {
                type: "added";
                value: boolean;
            }>, z.ZodObject<{
                type: z.ZodLiteral<"deleted">;
                value: z.ZodBoolean;
            }, "strip", ZodTypeAny, {
                type: "deleted";
                value: boolean;
            }, {
                type: "deleted";
                value: boolean;
            }>, z.ZodObject<{
                type: z.ZodLiteral<"changed">;
                old: z.ZodBoolean;
                new: z.ZodBoolean;
            }, "strip", ZodTypeAny, {
                type: "changed";
                old: boolean;
                new: boolean;
            }, {
                type: "changed";
                old: boolean;
                new: boolean;
            }>]>>;
            autoincrement: z.ZodOptional<z.ZodUnion<[z.ZodObject<{
                type: z.ZodLiteral<"added">;
                value: z.ZodBoolean;
            }, "strip", ZodTypeAny, {
                type: "added";
                value: boolean;
            }, {
                type: "added";
                value: boolean;
            }>, z.ZodObject<{
                type: z.ZodLiteral<"deleted">;
                value: z.ZodBoolean;
            }, "strip", ZodTypeAny, {
                type: "deleted";
                value: boolean;
            }, {
                type: "deleted";
                value: boolean;
            }>, z.ZodObject<{
                type: z.ZodLiteral<"changed">;
                old: z.ZodBoolean;
                new: z.ZodBoolean;
            }, "strip", ZodTypeAny, {
                type: "changed";
                old: boolean;
                new: boolean;
            }, {
                type: "changed";
                old: boolean;
                new: boolean;
            }>]>>;
        }, "strict", ZodTypeAny, {
            default?: {
                value?: any;
                type: "added";
            } | {
                value?: any;
                type: "deleted";
            } | {
                old?: any;
                new?: any;
                type: "changed";
            } | undefined;
            type?: {
                type: "changed";
                old: string;
                new: string;
            } | undefined;
            onUpdate?: {
                type: "added";
                value: boolean;
            } | {
                type: "deleted";
                value: boolean;
            } | {
                type: "changed";
                old: boolean;
                new: boolean;
            } | undefined;
            primaryKey?: {
                type: "added";
                value: boolean;
            } | {
                type: "deleted";
                value: boolean;
            } | {
                type: "changed";
                old: boolean;
                new: boolean;
            } | undefined;
            notNull?: {
                type: "added";
                value: boolean;
            } | {
                type: "deleted";
                value: boolean;
            } | {
                type: "changed";
                old: boolean;
                new: boolean;
            } | undefined;
            autoincrement?: {
                type: "added";
                value: boolean;
            } | {
                type: "deleted";
                value: boolean;
            } | {
                type: "changed";
                old: boolean;
                new: boolean;
            } | undefined;
            name: string | {
                type: "changed";
                old: string;
                new: string;
            };
        }, {
            default?: {
                value?: any;
                type: "added";
            } | {
                value?: any;
                type: "deleted";
            } | {
                old?: any;
                new?: any;
                type: "changed";
            } | undefined;
            type?: {
                type: "changed";
                old: string;
                new: string;
            } | undefined;
            onUpdate?: {
                type: "added";
                value: boolean;
            } | {
                type: "deleted";
                value: boolean;
            } | {
                type: "changed";
                old: boolean;
                new: boolean;
            } | undefined;
            primaryKey?: {
                type: "added";
                value: boolean;
            } | {
                type: "deleted";
                value: boolean;
            } | {
                type: "changed";
                old: boolean;
                new: boolean;
            } | undefined;
            notNull?: {
                type: "added";
                value: boolean;
            } | {
                type: "deleted";
                value: boolean;
            } | {
                type: "changed";
                old: boolean;
                new: boolean;
            } | undefined;
            autoincrement?: {
                type: "added";
                value: boolean;
            } | {
                type: "deleted";
                value: boolean;
            } | {
                type: "changed";
                old: boolean;
                new: boolean;
            } | undefined;
            name: string | {
                type: "changed";
                old: string;
                new: string;
            };
        }>, "many">;
        addedIndexes: z.ZodRecord<z.ZodString, z.ZodString>;
        deletedIndexes: z.ZodRecord<z.ZodString, z.ZodString>;
        alteredIndexes: z.ZodRecord<z.ZodString, z.ZodObject<{
            __new: z.ZodString;
            __old: z.ZodString;
        }, "strict", ZodTypeAny, {
            __old: string;
            __new: string;
        }, {
            __old: string;
            __new: string;
        }>>;
        addedForeignKeys: z.ZodRecord<z.ZodString, z.ZodString>;
        deletedForeignKeys: z.ZodRecord<z.ZodString, z.ZodString>;
        alteredForeignKeys: z.ZodRecord<z.ZodString, z.ZodObject<{
            __new: z.ZodString;
            __old: z.ZodString;
        }, "strict", ZodTypeAny, {
            __old: string;
            __new: string;
        }, {
            __old: string;
            __new: string;
        }>>;
        addedCompositePKs: z.ZodRecord<z.ZodString, z.ZodString>;
        deletedCompositePKs: z.ZodRecord<z.ZodString, z.ZodString>;
        alteredCompositePKs: z.ZodRecord<z.ZodString, z.ZodObject<{
            __new: z.ZodString;
            __old: z.ZodString;
        }, "strip", ZodTypeAny, {
            __old: string;
            __new: string;
        }, {
            __old: string;
            __new: string;
        }>>;
        addedUniqueConstraints: z.ZodRecord<z.ZodString, z.ZodString>;
        deletedUniqueConstraints: z.ZodRecord<z.ZodString, z.ZodString>;
        alteredUniqueConstraints: z.ZodRecord<z.ZodString, z.ZodObject<{
            __new: z.ZodString;
            __old: z.ZodString;
        }, "strip", ZodTypeAny, {
            __old: string;
            __new: string;
        }, {
            __old: string;
            __new: string;
        }>>;
    }, "strict", ZodTypeAny, {
        name: string;
        schema: {
            value?: string | undefined;
            type: "none";
        } | {
            type: "added";
            value: string;
        } | {
            type: "deleted";
            value: string;
        } | {
            type: "changed";
            old: string;
            new: string;
        };
        added: {
            isUnique?: any;
            default?: any;
            onUpdate?: boolean | undefined;
            primaryKey?: boolean | undefined;
            notNull?: boolean | undefined;
            autoincrement?: boolean | undefined;
            uniqueName?: string | undefined;
            nullsNotDistinct?: boolean | undefined;
            name: string;
            type: string;
        }[];
        deleted: {
            isUnique?: any;
            default?: any;
            onUpdate?: boolean | undefined;
            primaryKey?: boolean | undefined;
            notNull?: boolean | undefined;
            autoincrement?: boolean | undefined;
            uniqueName?: string | undefined;
            nullsNotDistinct?: boolean | undefined;
            name: string;
            type: string;
        }[];
        altered: {
            default?: {
                value?: any;
                type: "added";
            } | {
                value?: any;
                type: "deleted";
            } | {
                old?: any;
                new?: any;
                type: "changed";
            } | undefined;
            type?: {
                type: "changed";
                old: string;
                new: string;
            } | undefined;
            onUpdate?: {
                type: "added";
                value: boolean;
            } | {
                type: "deleted";
                value: boolean;
            } | {
                type: "changed";
                old: boolean;
                new: boolean;
            } | undefined;
            primaryKey?: {
                type: "added";
                value: boolean;
            } | {
                type: "deleted";
                value: boolean;
            } | {
                type: "changed";
                old: boolean;
                new: boolean;
            } | undefined;
            notNull?: {
                type: "added";
                value: boolean;
            } | {
                type: "deleted";
                value: boolean;
            } | {
                type: "changed";
                old: boolean;
                new: boolean;
            } | undefined;
            autoincrement?: {
                type: "added";
                value: boolean;
            } | {
                type: "deleted";
                value: boolean;
            } | {
                type: "changed";
                old: boolean;
                new: boolean;
            } | undefined;
            name: string | {
                type: "changed";
                old: string;
                new: string;
            };
        }[];
        addedIndexes: Record<string, string>;
        deletedIndexes: Record<string, string>;
        alteredIndexes: Record<string, {
            __old: string;
            __new: string;
        }>;
        addedForeignKeys: Record<string, string>;
        deletedForeignKeys: Record<string, string>;
        alteredForeignKeys: Record<string, {
            __old: string;
            __new: string;
        }>;
        addedCompositePKs: Record<string, string>;
        deletedCompositePKs: Record<string, string>;
        alteredCompositePKs: Record<string, {
            __old: string;
            __new: string;
        }>;
        addedUniqueConstraints: Record<string, string>;
        deletedUniqueConstraints: Record<string, string>;
        alteredUniqueConstraints: Record<string, {
            __old: string;
            __new: string;
        }>;
    }, {
        name: string;
        schema: {
            value?: string | undefined;
            type: "none";
        } | {
            type: "added";
            value: string;
        } | {
            type: "deleted";
            value: string;
        } | {
            type: "changed";
            old: string;
            new: string;
        };
        added: {
            isUnique?: any;
            default?: any;
            onUpdate?: boolean | undefined;
            primaryKey?: boolean | undefined;
            notNull?: boolean | undefined;
            autoincrement?: boolean | undefined;
            uniqueName?: string | undefined;
            nullsNotDistinct?: boolean | undefined;
            name: string;
            type: string;
        }[];
        deleted: {
            isUnique?: any;
            default?: any;
            onUpdate?: boolean | undefined;
            primaryKey?: boolean | undefined;
            notNull?: boolean | undefined;
            autoincrement?: boolean | undefined;
            uniqueName?: string | undefined;
            nullsNotDistinct?: boolean | undefined;
            name: string;
            type: string;
        }[];
        altered: {
            default?: {
                value?: any;
                type: "added";
            } | {
                value?: any;
                type: "deleted";
            } | {
                old?: any;
                new?: any;
                type: "changed";
            } | undefined;
            type?: {
                type: "changed";
                old: string;
                new: string;
            } | undefined;
            onUpdate?: {
                type: "added";
                value: boolean;
            } | {
                type: "deleted";
                value: boolean;
            } | {
                type: "changed";
                old: boolean;
                new: boolean;
            } | undefined;
            primaryKey?: {
                type: "added";
                value: boolean;
            } | {
                type: "deleted";
                value: boolean;
            } | {
                type: "changed";
                old: boolean;
                new: boolean;
            } | undefined;
            notNull?: {
                type: "added";
                value: boolean;
            } | {
                type: "deleted";
                value: boolean;
            } | {
                type: "changed";
                old: boolean;
                new: boolean;
            } | undefined;
            autoincrement?: {
                type: "added";
                value: boolean;
            } | {
                type: "deleted";
                value: boolean;
            } | {
                type: "changed";
                old: boolean;
                new: boolean;
            } | undefined;
            name: string | {
                type: "changed";
                old: string;
                new: string;
            };
        }[];
        addedIndexes: Record<string, string>;
        deletedIndexes: Record<string, string>;
        alteredIndexes: Record<string, {
            __old: string;
            __new: string;
        }>;
        addedForeignKeys: Record<string, string>;
        deletedForeignKeys: Record<string, string>;
        alteredForeignKeys: Record<string, {
            __old: string;
            __new: string;
        }>;
        addedCompositePKs: Record<string, string>;
        deletedCompositePKs: Record<string, string>;
        alteredCompositePKs: Record<string, {
            __old: string;
            __new: string;
        }>;
        addedUniqueConstraints: Record<string, string>;
        deletedUniqueConstraints: Record<string, string>;
        alteredUniqueConstraints: Record<string, {
            __old: string;
            __new: string;
        }>;
    }>, "many">;
    addedEnums: z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        values: z.ZodArray<z.ZodString, "many">;
    }, "strict", ZodTypeAny, {
        name: string;
        values: string[];
    }, {
        name: string;
        values: string[];
    }>, "many">;
    deletedEnums: z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        values: z.ZodArray<z.ZodString, "many">;
    }, "strict", ZodTypeAny, {
        name: string;
        values: string[];
    }, {
        name: string;
        values: string[];
    }>, "many">;
    alteredEnums: z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        addedValues: z.ZodArray<z.ZodString, "many">;
        deletedValues: z.ZodArray<z.ZodString, "many">;
    }, "strict", ZodTypeAny, {
        name: string;
        addedValues: string[];
        deletedValues: string[];
    }, {
        name: string;
        addedValues: string[];
        deletedValues: string[];
    }>, "many">;
    addedSchemas: z.ZodArray<z.ZodString, "many">;
    deletedSchemas: z.ZodArray<z.ZodString, "many">;
}, "strict", ZodTypeAny, {
    addedTables: {
        name: string;
        columns: Record<string, {
            isUnique?: any;
            default?: any;
            onUpdate?: boolean | undefined;
            primaryKey?: boolean | undefined;
            notNull?: boolean | undefined;
            autoincrement?: boolean | undefined;
            uniqueName?: string | undefined;
            nullsNotDistinct?: boolean | undefined;
            name: string;
            type: string;
        }>;
        indexes: Record<string, string>;
        foreignKeys: Record<string, string>;
        schema: string;
        compositePrimaryKeys: Record<string, string>;
        uniqueConstraints: Record<string, string>;
    }[];
    deletedTables: {
        name: string;
        columns: Record<string, {
            isUnique?: any;
            default?: any;
            onUpdate?: boolean | undefined;
            primaryKey?: boolean | undefined;
            notNull?: boolean | undefined;
            autoincrement?: boolean | undefined;
            uniqueName?: string | undefined;
            nullsNotDistinct?: boolean | undefined;
            name: string;
            type: string;
        }>;
        indexes: Record<string, string>;
        foreignKeys: Record<string, string>;
        schema: string;
        compositePrimaryKeys: Record<string, string>;
        uniqueConstraints: Record<string, string>;
    }[];
    alteredTablesWithColumns: {
        name: string;
        schema: {
            value?: string | undefined;
            type: "none";
        } | {
            type: "added";
            value: string;
        } | {
            type: "deleted";
            value: string;
        } | {
            type: "changed";
            old: string;
            new: string;
        };
        added: {
            isUnique?: any;
            default?: any;
            onUpdate?: boolean | undefined;
            primaryKey?: boolean | undefined;
            notNull?: boolean | undefined;
            autoincrement?: boolean | undefined;
            uniqueName?: string | undefined;
            nullsNotDistinct?: boolean | undefined;
            name: string;
            type: string;
        }[];
        deleted: {
            isUnique?: any;
            default?: any;
            onUpdate?: boolean | undefined;
            primaryKey?: boolean | undefined;
            notNull?: boolean | undefined;
            autoincrement?: boolean | undefined;
            uniqueName?: string | undefined;
            nullsNotDistinct?: boolean | undefined;
            name: string;
            type: string;
        }[];
        altered: {
            default?: {
                value?: any;
                type: "added";
            } | {
                value?: any;
                type: "deleted";
            } | {
                old?: any;
                new?: any;
                type: "changed";
            } | undefined;
            type?: {
                type: "changed";
                old: string;
                new: string;
            } | undefined;
            onUpdate?: {
                type: "added";
                value: boolean;
            } | {
                type: "deleted";
                value: boolean;
            } | {
                type: "changed";
                old: boolean;
                new: boolean;
            } | undefined;
            primaryKey?: {
                type: "added";
                value: boolean;
            } | {
                type: "deleted";
                value: boolean;
            } | {
                type: "changed";
                old: boolean;
                new: boolean;
            } | undefined;
            notNull?: {
                type: "added";
                value: boolean;
            } | {
                type: "deleted";
                value: boolean;
            } | {
                type: "changed";
                old: boolean;
                new: boolean;
            } | undefined;
            autoincrement?: {
                type: "added";
                value: boolean;
            } | {
                type: "deleted";
                value: boolean;
            } | {
                type: "changed";
                old: boolean;
                new: boolean;
            } | undefined;
            name: string | {
                type: "changed";
                old: string;
                new: string;
            };
        }[];
        addedIndexes: Record<string, string>;
        deletedIndexes: Record<string, string>;
        alteredIndexes: Record<string, {
            __old: string;
            __new: string;
        }>;
        addedForeignKeys: Record<string, string>;
        deletedForeignKeys: Record<string, string>;
        alteredForeignKeys: Record<string, {
            __old: string;
            __new: string;
        }>;
        addedCompositePKs: Record<string, string>;
        deletedCompositePKs: Record<string, string>;
        alteredCompositePKs: Record<string, {
            __old: string;
            __new: string;
        }>;
        addedUniqueConstraints: Record<string, string>;
        deletedUniqueConstraints: Record<string, string>;
        alteredUniqueConstraints: Record<string, {
            __old: string;
            __new: string;
        }>;
    }[];
    addedEnums: {
        name: string;
        values: string[];
    }[];
    deletedEnums: {
        name: string;
        values: string[];
    }[];
    alteredEnums: {
        name: string;
        addedValues: string[];
        deletedValues: string[];
    }[];
    addedSchemas: string[];
    deletedSchemas: string[];
}, {
    addedTables: {
        schema?: string | undefined;
        compositePrimaryKeys?: Record<string, string> | undefined;
        uniqueConstraints?: Record<string, string> | undefined;
        name: string;
        columns: Record<string, {
            isUnique?: any;
            default?: any;
            onUpdate?: boolean | undefined;
            primaryKey?: boolean | undefined;
            notNull?: boolean | undefined;
            autoincrement?: boolean | undefined;
            uniqueName?: string | undefined;
            nullsNotDistinct?: boolean | undefined;
            name: string;
            type: string;
        }>;
        indexes: Record<string, string>;
        foreignKeys: Record<string, string>;
    }[];
    deletedTables: {
        schema?: string | undefined;
        compositePrimaryKeys?: Record<string, string> | undefined;
        uniqueConstraints?: Record<string, string> | undefined;
        name: string;
        columns: Record<string, {
            isUnique?: any;
            default?: any;
            onUpdate?: boolean | undefined;
            primaryKey?: boolean | undefined;
            notNull?: boolean | undefined;
            autoincrement?: boolean | undefined;
            uniqueName?: string | undefined;
            nullsNotDistinct?: boolean | undefined;
            name: string;
            type: string;
        }>;
        indexes: Record<string, string>;
        foreignKeys: Record<string, string>;
    }[];
    alteredTablesWithColumns: {
        name: string;
        schema: {
            value?: string | undefined;
            type: "none";
        } | {
            type: "added";
            value: string;
        } | {
            type: "deleted";
            value: string;
        } | {
            type: "changed";
            old: string;
            new: string;
        };
        added: {
            isUnique?: any;
            default?: any;
            onUpdate?: boolean | undefined;
            primaryKey?: boolean | undefined;
            notNull?: boolean | undefined;
            autoincrement?: boolean | undefined;
            uniqueName?: string | undefined;
            nullsNotDistinct?: boolean | undefined;
            name: string;
            type: string;
        }[];
        deleted: {
            isUnique?: any;
            default?: any;
            onUpdate?: boolean | undefined;
            primaryKey?: boolean | undefined;
            notNull?: boolean | undefined;
            autoincrement?: boolean | undefined;
            uniqueName?: string | undefined;
            nullsNotDistinct?: boolean | undefined;
            name: string;
            type: string;
        }[];
        altered: {
            default?: {
                value?: any;
                type: "added";
            } | {
                value?: any;
                type: "deleted";
            } | {
                old?: any;
                new?: any;
                type: "changed";
            } | undefined;
            type?: {
                type: "changed";
                old: string;
                new: string;
            } | undefined;
            onUpdate?: {
                type: "added";
                value: boolean;
            } | {
                type: "deleted";
                value: boolean;
            } | {
                type: "changed";
                old: boolean;
                new: boolean;
            } | undefined;
            primaryKey?: {
                type: "added";
                value: boolean;
            } | {
                type: "deleted";
                value: boolean;
            } | {
                type: "changed";
                old: boolean;
                new: boolean;
            } | undefined;
            notNull?: {
                type: "added";
                value: boolean;
            } | {
                type: "deleted";
                value: boolean;
            } | {
                type: "changed";
                old: boolean;
                new: boolean;
            } | undefined;
            autoincrement?: {
                type: "added";
                value: boolean;
            } | {
                type: "deleted";
                value: boolean;
            } | {
                type: "changed";
                old: boolean;
                new: boolean;
            } | undefined;
            name: string | {
                type: "changed";
                old: string;
                new: string;
            };
        }[];
        addedIndexes: Record<string, string>;
        deletedIndexes: Record<string, string>;
        alteredIndexes: Record<string, {
            __old: string;
            __new: string;
        }>;
        addedForeignKeys: Record<string, string>;
        deletedForeignKeys: Record<string, string>;
        alteredForeignKeys: Record<string, {
            __old: string;
            __new: string;
        }>;
        addedCompositePKs: Record<string, string>;
        deletedCompositePKs: Record<string, string>;
        alteredCompositePKs: Record<string, {
            __old: string;
            __new: string;
        }>;
        addedUniqueConstraints: Record<string, string>;
        deletedUniqueConstraints: Record<string, string>;
        alteredUniqueConstraints: Record<string, {
            __old: string;
            __new: string;
        }>;
    }[];
    addedEnums: {
        name: string;
        values: string[];
    }[];
    deletedEnums: {
        name: string;
        values: string[];
    }[];
    alteredEnums: {
        name: string;
        addedValues: string[];
        deletedValues: string[];
    }[];
    addedSchemas: string[];
    deletedSchemas: string[];
}>;
export type Column = TypeOf<typeof columnSchema>;
export type AlteredColumn = TypeOf<typeof alteredColumnSchema>;
export type Enum = TypeOf<typeof enumSchema>;
export type Table = TypeOf<typeof tableScheme>;
export type AlteredTable = TypeOf<typeof alteredTableScheme>;
export type DiffResult = TypeOf<typeof diffResultScheme>;
export interface TablesResolverInput<T extends {
    name: string;
}> {
    created: T[];
    deleted: T[];
}
export interface TablesResolverOutput<T extends {
    name: string;
}> {
    created: T[];
    renamed: {
        from: T;
        to: T;
    }[];
    deleted: T[];
}
export interface ColumnsResolverInput<T extends {
    name: string;
}> {
    tableName: string;
    schema: string;
    created: T[];
    deleted: T[];
}
export interface ColumnsResolverOutput<T extends {
    name: string;
}> {
    tableName: string;
    schema: string;
    created: T[];
    renamed: {
        from: T;
        to: T;
    }[];
    deleted: T[];
}
export declare const applySnapshotsDiff: (json1: CommonSquashedSchema, json2: CommonSquashedSchema, dialect: Dialect, schemasResolver: (input: TablesResolverInput<{
    name: string;
}>) => Promise<TablesResolverOutput<{
    name: string;
}>>, tablesResolver: (input: TablesResolverInput<Table>) => Promise<TablesResolverOutput<Table>>, columnsResolver: (input: ColumnsResolverInput<Column>) => Promise<ColumnsResolverOutput<Column>>, prevFull?: any, curFull?: any) => Promise<{
    statements: JsonStatement[];
    sqlStatements: string[];
    _meta: {
        schemas: {};
        tables: {};
        columns: {};
    } | undefined;
}>;
export {};
