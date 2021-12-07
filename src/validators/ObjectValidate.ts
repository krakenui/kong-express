export type ObjecType = number | string | boolean | object | Object | void;

export type ObjectValidateOption = {
    value: any;
    required?: boolean;
    type?: ObjecType;
};

export type ObjectValidateOptions = {
    [key: string]: ObjectValidateOption;
};

export const ObjectValidate = (data: ObjectValidateOptions): boolean => {
    const props = Object.keys(data);
    props.forEach((p) => {
        if (data[p].required && !data[p].value) {
            throw new Error(`Validation error, '${p}' is required.`);
        }
    });

    return true;
};
