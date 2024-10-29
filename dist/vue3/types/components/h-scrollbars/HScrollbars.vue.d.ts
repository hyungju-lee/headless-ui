declare function __VLS_template(): {
    slots: {
        default?(_: {}): any;
    };
    refs: {};
    attrs: Partial<{}>;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<{
    options?: false | {
        paddingAbsolute?: boolean | undefined;
        showNativeOverlaidScrollbars?: boolean | undefined;
        update?: {
            elementEvents?: [elementSelector: string, eventNames: string][] | null | undefined;
            debounce?: number | [timeout: number, maxWait: number] | null | undefined;
            attributes?: string[] | null | undefined;
            ignoreMutation?: ((mutation: MutationRecord) => any) | null | undefined;
        } | undefined;
        overflow?: {
            x?: import('overlayscrollbars').OverflowBehavior | undefined;
            y?: import('overlayscrollbars').OverflowBehavior | undefined;
        } | undefined;
        scrollbars?: {
            theme?: string | null | undefined;
            visibility?: import('overlayscrollbars').ScrollbarsVisibilityBehavior | undefined;
            autoHide?: import('overlayscrollbars').ScrollbarsAutoHideBehavior | undefined;
            autoHideDelay?: number | undefined;
            autoHideSuspend?: boolean | undefined;
            dragScroll?: boolean | undefined;
            clickScroll?: boolean | undefined;
            pointers?: string[] | null | undefined;
        } | undefined;
    };
    maxHeight?: number;
}, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    scroll: (info: any) => any;
    "scroll-end-y": (info: any) => any;
    "scroll-end-x": (info: any) => any;
}, string, import('vue').PublicProps, Readonly<{
    options?: false | {
        paddingAbsolute?: boolean | undefined;
        showNativeOverlaidScrollbars?: boolean | undefined;
        update?: {
            elementEvents?: [elementSelector: string, eventNames: string][] | null | undefined;
            debounce?: number | [timeout: number, maxWait: number] | null | undefined;
            attributes?: string[] | null | undefined;
            ignoreMutation?: ((mutation: MutationRecord) => any) | null | undefined;
        } | undefined;
        overflow?: {
            x?: import('overlayscrollbars').OverflowBehavior | undefined;
            y?: import('overlayscrollbars').OverflowBehavior | undefined;
        } | undefined;
        scrollbars?: {
            theme?: string | null | undefined;
            visibility?: import('overlayscrollbars').ScrollbarsVisibilityBehavior | undefined;
            autoHide?: import('overlayscrollbars').ScrollbarsAutoHideBehavior | undefined;
            autoHideDelay?: number | undefined;
            autoHideSuspend?: boolean | undefined;
            dragScroll?: boolean | undefined;
            clickScroll?: boolean | undefined;
            pointers?: string[] | null | undefined;
        } | undefined;
    };
    maxHeight?: number;
}> & Readonly<{
    onScroll?: ((info: any) => any) | undefined;
    "onScroll-end-y"?: ((info: any) => any) | undefined;
    "onScroll-end-x"?: ((info: any) => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
