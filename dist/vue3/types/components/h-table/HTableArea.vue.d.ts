declare const _default: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    caption: {
        type: StringConstructor;
        default: string;
    };
    tableContentMaxHeight: {
        type: StringConstructor;
        default: string;
    };
    isScroll: {
        type: BooleanConstructor;
        default: boolean;
    };
    defaultStyle: {
        type: BooleanConstructor;
        default: boolean;
    };
}>, {
    contArea: any;
    tableContentHeight: import('vue').ComputedRef<string>;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    caption: {
        type: StringConstructor;
        default: string;
    };
    tableContentMaxHeight: {
        type: StringConstructor;
        default: string;
    };
    isScroll: {
        type: BooleanConstructor;
        default: boolean;
    };
    defaultStyle: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & Readonly<{}>, {
    caption: string;
    tableContentMaxHeight: string;
    isScroll: boolean;
    defaultStyle: boolean;
}, {}, {
    HScrollbars: {
        new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<{
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
        }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
            scroll: (info: any) => any;
            "scroll-end-y": (info: any) => any;
            "scroll-end-x": (info: any) => any;
        }, import('vue').PublicProps, {}, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, any, import('vue').ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<{
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
        }>, {}, {}, {}, {}, {}>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import('vue').ComponentOptionsBase<Readonly<{
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
    }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
        scroll: (info: any) => any;
        "scroll-end-y": (info: any) => any;
        "scroll-end-x": (info: any) => any;
    }, string, {}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
        $slots: {
            default?(_: {}): any;
        };
    });
}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
export default _default;
