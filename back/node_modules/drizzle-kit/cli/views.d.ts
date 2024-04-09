import { Prompt, TaskView } from "hanji";
import type { CommonSchema } from "src/schemaValidator";
import type { Named } from "./commands/migrate";
export declare const warning: (msg: string) => void;
export declare const err: (msg: string) => void;
export declare const info: (msg: string, greyMsg?: string) => string;
export declare const error: (error: string, greyMsg?: string) => string;
export declare const schema: (schema: CommonSchema) => string;
export interface RenamePropmtItem<T> {
    from: T;
    to: T;
}
export declare const isRenamePromptItem: <T extends Named>(item: T | RenamePropmtItem<T>) => item is RenamePropmtItem<T>;
export declare class ResolveColumnSelect<T extends Named> extends Prompt<RenamePropmtItem<T> | T> {
    private readonly tableName;
    private readonly base;
    private readonly data;
    constructor(tableName: string, base: Named, data: (RenamePropmtItem<T> | T)[]);
    render(status: "idle" | "submitted" | "aborted"): string;
    result(): RenamePropmtItem<T> | T;
}
export declare class ResolveTableSelect<T extends Named> extends Prompt<RenamePropmtItem<T> | T> {
    private readonly base;
    private readonly state;
    constructor(base: Named, data: (RenamePropmtItem<T> | T)[]);
    render(status: "idle" | "submitted" | "aborted"): string;
    result(): RenamePropmtItem<T> | T;
}
export declare class ResolveSchemasSelect<T extends Named> extends Prompt<RenamePropmtItem<T> | T> {
    private readonly base;
    private readonly state;
    constructor(base: Named, data: (RenamePropmtItem<T> | T)[]);
    render(status: "idle" | "submitted" | "aborted"): string;
    result(): RenamePropmtItem<T> | T;
}
export type IntrospectStatus = "fetching" | "done";
export type IntrospectStage = "tables" | "columns" | "enums" | "indexes" | "fks";
export declare class IntrospectProgress extends TaskView {
    private readonly spinner;
    private timeout;
    private state;
    constructor();
    update(stage: IntrospectStage, count: number, status: IntrospectStatus): void;
    private formatCount;
    private statusText;
    render(): string;
}
export declare class DropMigrationView<T extends {
    tag: string;
}> extends Prompt<T> {
    private readonly data;
    constructor(data: T[]);
    render(status: "idle" | "submitted" | "aborted"): string;
    result(): T;
}
export declare const trimmedRange: <T>(arr: T[], index: number, limitLines: number) => {
    trimmed: T[];
    offset: number;
    startTrimmed: boolean;
    endTrimmed: boolean;
};
