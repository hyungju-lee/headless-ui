type __VLS_Props = {
    modelValue: File[];
    multiple?: boolean;
    maxFiles?: number;
    maxSize?: number;
};
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {
            isDragOver: boolean;
        }): any;
    };
    refs: {
        fileInput: HTMLInputElement;
    };
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    "update:modelValue": (files: File[]) => any;
    "exceed-file-num": () => any;
    "exceed-file-size": () => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    "onUpdate:modelValue"?: ((files: File[]) => any) | undefined;
    "onExceed-file-num"?: (() => any) | undefined;
    "onExceed-file-size"?: (() => any) | undefined;
}>, {
    multiple: boolean;
    maxFiles: number;
    maxSize: number;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    fileInput: HTMLInputElement;
}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
