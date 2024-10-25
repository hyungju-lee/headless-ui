declare const _default: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    modelValue: {
        type: NumberConstructor;
        required: true;
    };
    countPerPage: {
        type: NumberConstructor;
        default: number;
    };
    totalCount: {
        type: NumberConstructor;
        default: number;
    };
    type: {
        type: StringConstructor;
        default: string;
    };
    queryStringKey: {
        type: StringConstructor;
        required: true;
    };
}>, {
    lastPageIndex: import('vue').ComputedRef<number>;
    activePageNum: import('vue').Ref<number, number>;
    classNameValue: import('vue').ComputedRef<string>;
    paginatedItems: import('vue').ComputedRef<number[]>;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, ("update:modelValue" | "click-pagination-button")[], "update:modelValue" | "click-pagination-button", import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    modelValue: {
        type: NumberConstructor;
        required: true;
    };
    countPerPage: {
        type: NumberConstructor;
        default: number;
    };
    totalCount: {
        type: NumberConstructor;
        default: number;
    };
    type: {
        type: StringConstructor;
        default: string;
    };
    queryStringKey: {
        type: StringConstructor;
        required: true;
    };
}>> & Readonly<{
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    "onClick-pagination-button"?: ((...args: any[]) => any) | undefined;
}>, {
    type: string;
    countPerPage: number;
    totalCount: number;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
export default _default;
