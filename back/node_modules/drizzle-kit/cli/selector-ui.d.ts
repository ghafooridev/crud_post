import { Prompt } from "hanji";
export declare class Select extends Prompt<{
    index: number;
    value: string;
}> {
    private readonly data;
    constructor(items: string[]);
    render(status: "idle" | "submitted" | "aborted"): string;
    result(): {
        index: number;
        value: string;
    };
}
