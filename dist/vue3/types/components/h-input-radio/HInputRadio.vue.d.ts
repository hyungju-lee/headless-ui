import { CSSProperties } from 'vue';
declare function __VLS_template(): {
    slots: {
        default?(_: {}): any;
    };
    refs: {};
    attrs: Partial<{}>;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<{
    modelValue: unknown;
    name: string;
    data: unknown;
    labelClass?: string;
    labelStyle?: CSSProperties;
    value?: unknown;
    disabled?: boolean;
}, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    "update:modelValue": (value: unknown) => any;
}, string, import('vue').PublicProps, Readonly<{
    modelValue: unknown;
    name: string;
    data: unknown;
    labelClass?: string;
    labelStyle?: CSSProperties;
    value?: unknown;
    disabled?: boolean;
}> & Readonly<{
    "onUpdate:modelValue"?: ((value: unknown) => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
