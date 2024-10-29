declare const _default: import('vue').DefineComponent<{
    value: {
        type: StringConstructor;
        required: true;
    };
    autoHeight: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    attrs: import('vue').Data;
    model: import('vue').WritableComputedRef<string>;
    maxLength: import('vue').Ref<number> | undefined;
    setCountValue: () => void;
    textAreaRef: import('vue').Ref<HTMLTextAreaElement | null>;
    onInputTextarea: (_: Event) => void;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, "input"[], string, Readonly<import('vue').ExtractPropTypes<{
    value: {
        type: StringConstructor;
        required: true;
    };
    autoHeight: {
        type: BooleanConstructor;
        default: boolean;
    };
}>>, {
    autoHeight: boolean;
}>;
export default _default;
