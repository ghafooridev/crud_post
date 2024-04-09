export declare const withStyle: {
    error: (str: string) => string;
    warning: (str: string) => string;
    errorWarning: (str: string) => string;
    fullWarning: (str: string) => string;
    suggestion: (str: string) => string;
};
export declare const outputs: {
    studio: {
        drivers: (param: string) => string;
        noCredentials: () => string;
        noDriver: () => string;
    };
    common: {
        ambiguousParams: (command: string) => string;
        schema: (command: string) => string;
        schemaConfig: (command: string) => string;
    };
    postgres: {
        connection: {
            driver: () => string;
            required: () => string;
        };
    };
    mysql: {
        connection: {
            driver: () => string;
            required: () => string;
        };
    };
    sqlite: {
        connection: {
            driver: () => string;
            url: (driver: string) => string;
            authToken: (driver: string) => string;
        };
        introspect: {};
        push: {};
    };
};
