export type CollusionCheckOutput = {
    success: boolean;
    message?: string;
    action: "config" | "cli" | "error";
};
export type Commands = "push:sqlite" | "introspect:sqlite" | "introspect:pg" | "generate:pg" | "generate:sqlite" | "generate:mysql" | "check:pg" | "check:mysql" | "check:sqlite" | "up:pg" | "up:mysql" | "up:sqlite" | "drop" | "introspect:mysql" | "push:mysql" | "push:pg";
/**
 * This function checks an input from a user and if there are any params together with config path - return true
 * @param options - user input
 * @param inputWhitelist - whitelist some cli options that can be used together with config option
 * @returns true if there was a collision, false if everything is valid
 */
export declare const checkCollisions: (options: Record<string, unknown>, command: Commands, inputWhitelist?: string[]) => CollusionCheckOutput;
