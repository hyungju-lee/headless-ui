declare const _default: import('vue').DefineComponent<{}, {
    tableData: import('vue').Ref<{
        name: string;
        value: string;
        id: string;
    }[], {
        name: string;
        value: string;
        id: string;
    }[] | {
        name: string;
        value: string;
        id: string;
    }[]>;
    clickButton: () => void;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {
    HTableArea: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
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
                options?: OverlayScrollbars.Options;
                maxHeight?: number;
            }> & Readonly<{
                onScroll?: ((info: ScrollInfo) => any) | undefined;
                "onScroll-end-y"?: ((info: ScrollInfo) => any) | undefined;
                "onScroll-end-x"?: ((info: ScrollInfo) => any) | undefined;
            }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
                scroll: (info: ScrollInfo) => any;
                "scroll-end-y": (info: ScrollInfo) => any;
                "scroll-end-x": (info: ScrollInfo) => any;
            }, import('vue').PublicProps, {}, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, any, import('vue').ComponentProvideOptions, {
                P: {};
                B: {};
                D: {};
                C: {};
                M: {};
                Defaults: {};
            }, Readonly<{
                options?: OverlayScrollbars.Options;
                maxHeight?: number;
            }> & Readonly<{
                onScroll?: ((info: ScrollInfo) => any) | undefined;
                "onScroll-end-y"?: ((info: ScrollInfo) => any) | undefined;
                "onScroll-end-x"?: ((info: ScrollInfo) => any) | undefined;
            }>, {}, {}, {}, {}, {}>;
            __isFragment?: never;
            __isTeleport?: never;
            __isSuspense?: never;
        } & import('vue').ComponentOptionsBase<Readonly<{
            options?: OverlayScrollbars.Options;
            maxHeight?: number;
        }> & Readonly<{
            onScroll?: ((info: ScrollInfo) => any) | undefined;
            "onScroll-end-y"?: ((info: ScrollInfo) => any) | undefined;
            "onScroll-end-x"?: ((info: ScrollInfo) => any) | undefined;
        }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
            scroll: (info: ScrollInfo) => any;
            "scroll-end-y": (info: ScrollInfo) => any;
            "scroll-end-x": (info: ScrollInfo) => any;
        }, string, {}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
            $slots: {
                default?(_: {}): any;
            };
        });
    }, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
export default _default;
