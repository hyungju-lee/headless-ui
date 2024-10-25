declare function __VLS_template(): {
    slots: {
        default?(_: {}): any;
    };
    refs: {};
    attrs: Partial<{}>;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<{
    options?: OverlayScrollbars.Options;
    maxHeight?: number;
}, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    scroll: (info: ScrollInfo) => any;
    "scroll-end-y": (info: ScrollInfo) => any;
    "scroll-end-x": (info: ScrollInfo) => any;
}, string, import('vue').PublicProps, Readonly<{
    options?: OverlayScrollbars.Options;
    maxHeight?: number;
}> & Readonly<{
    onScroll?: ((info: ScrollInfo) => any) | undefined;
    "onScroll-end-y"?: ((info: ScrollInfo) => any) | undefined;
    "onScroll-end-x"?: ((info: ScrollInfo) => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
