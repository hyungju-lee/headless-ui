declare const _default: import('vue').DefineComponent<{
    value: {
        type: StringConstructor;
        required: true;
    };
}, {
    attrs: import('vue').Data;
    model: import('vue').WritableComputedRef<string>;
    maxLength: import('vue').Ref<number | undefined>;
    setCountValue: () => void;
    inputRef: import('vue').Ref<HTMLTextAreaElement | null> | null;
    blurHandler: () => void;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, Readonly<import('vue').ExtractPropTypes<{
    value: {
        type: StringConstructor;
        required: true;
    };
}>>, {}>;
export default _default;
