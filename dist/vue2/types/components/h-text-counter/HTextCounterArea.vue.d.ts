declare const _default: import('vue').DefineComponent<{
    tag: {
        type: StringConstructor;
        default: string;
    };
    maxLength: {
        type: NumberConstructor;
        required: true;
    };
}, {
    currentLength: import('vue').Ref<number>;
    HTextCounterAreaRef: import('vue').Ref<HTMLElement | null>;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, "input"[], string, Readonly<import('vue').ExtractPropTypes<{
    tag: {
        type: StringConstructor;
        default: string;
    };
    maxLength: {
        type: NumberConstructor;
        required: true;
    };
}>>, {
    tag: string;
}>;
export default _default;
