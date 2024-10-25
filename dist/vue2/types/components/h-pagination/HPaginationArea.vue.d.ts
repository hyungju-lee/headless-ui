declare const _default: import('vue').DefineComponent<{
    value: {
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
}, {
    lastPageIndex: import('vue').ComputedRef<number>;
    activePageNum: import('vue').Ref<number>;
    classNameValue: import('vue').ComputedRef<string>;
    paginatedItems: import('vue').ComputedRef<number[]>;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, ("input" | "click-pagination-button")[], string, Readonly<import('vue').ExtractPropTypes<{
    value: {
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
}>>, {
    type: string;
    countPerPage: number;
    totalCount: number;
}>;
export default _default;
