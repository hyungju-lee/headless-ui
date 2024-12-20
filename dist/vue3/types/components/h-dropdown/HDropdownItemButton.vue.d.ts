declare function __VLS_template(): {
    slots: {
        default?(_: {}): any;
    };
    refs: {};
    attrs: Partial<{}>;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<{
    value: string | number | Record<string, any> | unknown[];
    name: string;
    disabled: boolean;
}, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    click: (event: Event, value: string | number | Record<string, any> | unknown[], name: string) => any;
}, string, import('vue').PublicProps, Readonly<{
    value: string | number | Record<string, any> | unknown[];
    name: string;
    disabled: boolean;
}> & Readonly<{
    onClick?: ((event: Event, value: string | number | Record<string, any> | unknown[], name: string) => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
