declare global {
    interface String {
        trimChar(char: string): string;
        squashSpaces(): string;
        camelCase(): string;
        concatIf(it: string, condition: boolean): string;
    }
    interface Array<T> {
        random(): T;
    }
}
export {};
