declare function __VLS_template(): {
    slots: {
        default?(_: {}): any;
    };
    refs: {
        fileInput: HTMLInputElement;
    };
    attrs: Partial<{}>;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<{
    modelValue: File[];
    multiple?: boolean;
    maxFiles?: number;
    maxSize?: number;
}, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    "update:modelValue": (files: File[]) => any;
    "exceed-file-num": () => any;
    "exceed-file-size": () => any;
}, string, import('vue').PublicProps, Readonly<{
    modelValue: File[];
    multiple?: boolean;
    maxFiles?: number;
    maxSize?: number;
}> & Readonly<{
    "onUpdate:modelValue"?: ((files: File[]) => any) | undefined;
    "onExceed-file-num"?: (() => any) | undefined;
    "onExceed-file-size"?: (() => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
