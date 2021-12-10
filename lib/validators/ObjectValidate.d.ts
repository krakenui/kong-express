export declare type ObjecType = number | string | boolean | object | Object | void;
export declare type ObjectValidateOption = {
    value: any;
    required?: boolean;
    type?: ObjecType;
};
export declare type ObjectValidateOptions = {
    [key: string]: ObjectValidateOption;
};
export declare const ObjectValidate: (data: ObjectValidateOptions) => boolean;
//# sourceMappingURL=ObjectValidate.d.ts.map