interface ITEM_TYPE {
    name: string;
    value: string;
    id: string;
}
declare const _default: import('vue').DefineComponent<{}, {
    checkedSubItems: import('vue').Ref<{
        name: string;
        value: string;
        id: string;
    }[], ITEM_TYPE[] | {
        name: string;
        value: string;
        id: string;
    }[]>;
    checkedAllSubItems: import('vue').WritableComputedRef<boolean, boolean>;
    items: import('vue').Ref<{
        name: string;
        value: string;
        id: string;
    }[], ITEM_TYPE[] | {
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
        contArea: import('vue').Ref<({
            new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('vue').ExtractPropTypes<{
                element: {
                    type: import('vue').PropType<string | import('vue').Component>;
                    default: string;
                };
                options: {
                    type: import('vue').PropType<false | {
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
                    } | null | undefined>;
                };
                events: {
                    type: import('vue').PropType<false | {
                        initialized?: ((instance: import('overlayscrollbars').OverlayScrollbars) => void) | ((instance: import('overlayscrollbars').OverlayScrollbars) => void)[] | null | undefined;
                        updated?: ((instance: import('overlayscrollbars').OverlayScrollbars, onUpdatedArgs: import('overlayscrollbars').OnUpdatedEventListenerArgs) => void) | ((instance: import('overlayscrollbars').OverlayScrollbars, onUpdatedArgs: import('overlayscrollbars').OnUpdatedEventListenerArgs) => void)[] | null | undefined;
                        destroyed?: ((instance: import('overlayscrollbars').OverlayScrollbars, canceled: boolean) => void) | ((instance: import('overlayscrollbars').OverlayScrollbars, canceled: boolean) => void)[] | null | undefined;
                        scroll?: ((instance: import('overlayscrollbars').OverlayScrollbars, event: Event) => void) | ((instance: import('overlayscrollbars').OverlayScrollbars, event: Event) => void)[] | null | undefined;
                    } | null | undefined>;
                };
                defer: {
                    type: import('vue').PropType<boolean | IdleRequestOptions | undefined>;
                };
            }>> & {
                onOsInitialized?: ((instance: import('overlayscrollbars').OverlayScrollbars) => any) | undefined;
                onOsUpdated?: ((instance: import('overlayscrollbars').OverlayScrollbars, onUpdatedArgs: import('overlayscrollbars').OnUpdatedEventListenerArgs) => any) | undefined;
                onOsDestroyed?: ((instance: import('overlayscrollbars').OverlayScrollbars, canceled: boolean) => any) | undefined;
                onOsScroll?: ((instance: import('overlayscrollbars').OverlayScrollbars, event: Event) => any) | undefined;
            }, {
                osInstance(): import('overlayscrollbars').OverlayScrollbars | null;
                getElement(): HTMLElement | null;
            }, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
                osInitialized: (instance: import('overlayscrollbars').OverlayScrollbars) => void;
                osUpdated: (instance: import('overlayscrollbars').OverlayScrollbars, onUpdatedArgs: import('overlayscrollbars').OnUpdatedEventListenerArgs) => void;
                osDestroyed: (instance: import('overlayscrollbars').OverlayScrollbars, canceled: boolean) => void;
                osScroll: (instance: import('overlayscrollbars').OverlayScrollbars, event: Event) => void;
            }, import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps, {
                element: string | import('vue').Component;
            }, true, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, any, import('vue').ComponentProvideOptions, {
                P: {};
                B: {};
                D: {};
                C: {};
                M: {};
                Defaults: {};
            }, Readonly<import('vue').ExtractPropTypes<{
                element: {
                    type: import('vue').PropType<string | import('vue').Component>;
                    default: string;
                };
                options: {
                    type: import('vue').PropType<false | {
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
                    } | null | undefined>;
                };
                events: {
                    type: import('vue').PropType<false | {
                        initialized?: ((instance: import('overlayscrollbars').OverlayScrollbars) => void) | ((instance: import('overlayscrollbars').OverlayScrollbars) => void)[] | null | undefined;
                        updated?: ((instance: import('overlayscrollbars').OverlayScrollbars, onUpdatedArgs: import('overlayscrollbars').OnUpdatedEventListenerArgs) => void) | ((instance: import('overlayscrollbars').OverlayScrollbars, onUpdatedArgs: import('overlayscrollbars').OnUpdatedEventListenerArgs) => void)[] | null | undefined;
                        destroyed?: ((instance: import('overlayscrollbars').OverlayScrollbars, canceled: boolean) => void) | ((instance: import('overlayscrollbars').OverlayScrollbars, canceled: boolean) => void)[] | null | undefined;
                        scroll?: ((instance: import('overlayscrollbars').OverlayScrollbars, event: Event) => void) | ((instance: import('overlayscrollbars').OverlayScrollbars, event: Event) => void)[] | null | undefined;
                    } | null | undefined>;
                };
                defer: {
                    type: import('vue').PropType<boolean | IdleRequestOptions | undefined>;
                };
            }>> & {
                onOsInitialized?: ((instance: import('overlayscrollbars').OverlayScrollbars) => any) | undefined;
                onOsUpdated?: ((instance: import('overlayscrollbars').OverlayScrollbars, onUpdatedArgs: import('overlayscrollbars').OnUpdatedEventListenerArgs) => any) | undefined;
                onOsDestroyed?: ((instance: import('overlayscrollbars').OverlayScrollbars, canceled: boolean) => any) | undefined;
                onOsScroll?: ((instance: import('overlayscrollbars').OverlayScrollbars, event: Event) => any) | undefined;
            }, {
                osInstance(): import('overlayscrollbars').OverlayScrollbars | null;
                getElement(): HTMLElement | null;
            }, {}, {}, {}, {
                element: string | import('vue').Component;
            }>;
            __isFragment?: never;
            __isTeleport?: never;
            __isSuspense?: never;
        } & import('vue').ComponentOptionsBase<Readonly<import('vue').ExtractPropTypes<{
            element: {
                type: import('vue').PropType<string | import('vue').Component>;
                default: string;
            };
            options: {
                type: import('vue').PropType<false | {
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
                } | null | undefined>;
            };
            events: {
                type: import('vue').PropType<false | {
                    initialized?: ((instance: import('overlayscrollbars').OverlayScrollbars) => void) | ((instance: import('overlayscrollbars').OverlayScrollbars) => void)[] | null | undefined;
                    updated?: ((instance: import('overlayscrollbars').OverlayScrollbars, onUpdatedArgs: import('overlayscrollbars').OnUpdatedEventListenerArgs) => void) | ((instance: import('overlayscrollbars').OverlayScrollbars, onUpdatedArgs: import('overlayscrollbars').OnUpdatedEventListenerArgs) => void)[] | null | undefined;
                    destroyed?: ((instance: import('overlayscrollbars').OverlayScrollbars, canceled: boolean) => void) | ((instance: import('overlayscrollbars').OverlayScrollbars, canceled: boolean) => void)[] | null | undefined;
                    scroll?: ((instance: import('overlayscrollbars').OverlayScrollbars, event: Event) => void) | ((instance: import('overlayscrollbars').OverlayScrollbars, event: Event) => void)[] | null | undefined;
                } | null | undefined>;
            };
            defer: {
                type: import('vue').PropType<boolean | IdleRequestOptions | undefined>;
            };
        }>> & {
            onOsInitialized?: ((instance: import('overlayscrollbars').OverlayScrollbars) => any) | undefined;
            onOsUpdated?: ((instance: import('overlayscrollbars').OverlayScrollbars, onUpdatedArgs: import('overlayscrollbars').OnUpdatedEventListenerArgs) => any) | undefined;
            onOsDestroyed?: ((instance: import('overlayscrollbars').OverlayScrollbars, canceled: boolean) => any) | undefined;
            onOsScroll?: ((instance: import('overlayscrollbars').OverlayScrollbars, event: Event) => any) | undefined;
        }, {
            osInstance(): import('overlayscrollbars').OverlayScrollbars | null;
            getElement(): HTMLElement | null;
        }, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
            osInitialized: (instance: import('overlayscrollbars').OverlayScrollbars) => void;
            osUpdated: (instance: import('overlayscrollbars').OverlayScrollbars, onUpdatedArgs: import('overlayscrollbars').OnUpdatedEventListenerArgs) => void;
            osDestroyed: (instance: import('overlayscrollbars').OverlayScrollbars, canceled: boolean) => void;
            osScroll: (instance: import('overlayscrollbars').OverlayScrollbars, event: Event) => void;
        }, string, {
            element: string | import('vue').Component;
        }, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
            $slots: {
                default?(_: {}): any;
            };
        })) | null, ({
            new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('vue').ExtractPropTypes<{
                element: {
                    type: import('vue').PropType<string | import('vue').Component>;
                    default: string;
                };
                options: {
                    type: import('vue').PropType<false | {
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
                    } | null | undefined>;
                };
                events: {
                    type: import('vue').PropType<false | {
                        initialized?: ((instance: import('overlayscrollbars').OverlayScrollbars) => void) | ((instance: import('overlayscrollbars').OverlayScrollbars) => void)[] | null | undefined;
                        updated?: ((instance: import('overlayscrollbars').OverlayScrollbars, onUpdatedArgs: import('overlayscrollbars').OnUpdatedEventListenerArgs) => void) | ((instance: import('overlayscrollbars').OverlayScrollbars, onUpdatedArgs: import('overlayscrollbars').OnUpdatedEventListenerArgs) => void)[] | null | undefined;
                        destroyed?: ((instance: import('overlayscrollbars').OverlayScrollbars, canceled: boolean) => void) | ((instance: import('overlayscrollbars').OverlayScrollbars, canceled: boolean) => void)[] | null | undefined;
                        scroll?: ((instance: import('overlayscrollbars').OverlayScrollbars, event: Event) => void) | ((instance: import('overlayscrollbars').OverlayScrollbars, event: Event) => void)[] | null | undefined;
                    } | null | undefined>;
                };
                defer: {
                    type: import('vue').PropType<boolean | IdleRequestOptions | undefined>;
                };
            }>> & {
                onOsInitialized?: ((instance: import('overlayscrollbars').OverlayScrollbars) => any) | undefined;
                onOsUpdated?: ((instance: import('overlayscrollbars').OverlayScrollbars, onUpdatedArgs: import('overlayscrollbars').OnUpdatedEventListenerArgs) => any) | undefined;
                onOsDestroyed?: ((instance: import('overlayscrollbars').OverlayScrollbars, canceled: boolean) => any) | undefined;
                onOsScroll?: ((instance: import('overlayscrollbars').OverlayScrollbars, event: Event) => any) | undefined;
            }, {
                osInstance(): import('overlayscrollbars').OverlayScrollbars | null;
                getElement(): HTMLElement | null;
            }, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
                osInitialized: (instance: import('overlayscrollbars').OverlayScrollbars) => void;
                osUpdated: (instance: import('overlayscrollbars').OverlayScrollbars, onUpdatedArgs: import('overlayscrollbars').OnUpdatedEventListenerArgs) => void;
                osDestroyed: (instance: import('overlayscrollbars').OverlayScrollbars, canceled: boolean) => void;
                osScroll: (instance: import('overlayscrollbars').OverlayScrollbars, event: Event) => void;
            }, import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps, {
                element: string | import('vue').Component;
            }, true, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, any, import('vue').ComponentProvideOptions, {
                P: {};
                B: {};
                D: {};
                C: {};
                M: {};
                Defaults: {};
            }, Readonly<import('vue').ExtractPropTypes<{
                element: {
                    type: import('vue').PropType<string | import('vue').Component>;
                    default: string;
                };
                options: {
                    type: import('vue').PropType<false | {
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
                    } | null | undefined>;
                };
                events: {
                    type: import('vue').PropType<false | {
                        initialized?: ((instance: import('overlayscrollbars').OverlayScrollbars) => void) | ((instance: import('overlayscrollbars').OverlayScrollbars) => void)[] | null | undefined;
                        updated?: ((instance: import('overlayscrollbars').OverlayScrollbars, onUpdatedArgs: import('overlayscrollbars').OnUpdatedEventListenerArgs) => void) | ((instance: import('overlayscrollbars').OverlayScrollbars, onUpdatedArgs: import('overlayscrollbars').OnUpdatedEventListenerArgs) => void)[] | null | undefined;
                        destroyed?: ((instance: import('overlayscrollbars').OverlayScrollbars, canceled: boolean) => void) | ((instance: import('overlayscrollbars').OverlayScrollbars, canceled: boolean) => void)[] | null | undefined;
                        scroll?: ((instance: import('overlayscrollbars').OverlayScrollbars, event: Event) => void) | ((instance: import('overlayscrollbars').OverlayScrollbars, event: Event) => void)[] | null | undefined;
                    } | null | undefined>;
                };
                defer: {
                    type: import('vue').PropType<boolean | IdleRequestOptions | undefined>;
                };
            }>> & {
                onOsInitialized?: ((instance: import('overlayscrollbars').OverlayScrollbars) => any) | undefined;
                onOsUpdated?: ((instance: import('overlayscrollbars').OverlayScrollbars, onUpdatedArgs: import('overlayscrollbars').OnUpdatedEventListenerArgs) => any) | undefined;
                onOsDestroyed?: ((instance: import('overlayscrollbars').OverlayScrollbars, canceled: boolean) => any) | undefined;
                onOsScroll?: ((instance: import('overlayscrollbars').OverlayScrollbars, event: Event) => any) | undefined;
            }, {
                osInstance(): import('overlayscrollbars').OverlayScrollbars | null;
                getElement(): HTMLElement | null;
            }, {}, {}, {}, {
                element: string | import('vue').Component;
            }>;
            __isFragment?: never;
            __isTeleport?: never;
            __isSuspense?: never;
        } & import('vue').ComponentOptionsBase<Readonly<import('vue').ExtractPropTypes<{
            element: {
                type: import('vue').PropType<string | import('vue').Component>;
                default: string;
            };
            options: {
                type: import('vue').PropType<false | {
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
                } | null | undefined>;
            };
            events: {
                type: import('vue').PropType<false | {
                    initialized?: ((instance: import('overlayscrollbars').OverlayScrollbars) => void) | ((instance: import('overlayscrollbars').OverlayScrollbars) => void)[] | null | undefined;
                    updated?: ((instance: import('overlayscrollbars').OverlayScrollbars, onUpdatedArgs: import('overlayscrollbars').OnUpdatedEventListenerArgs) => void) | ((instance: import('overlayscrollbars').OverlayScrollbars, onUpdatedArgs: import('overlayscrollbars').OnUpdatedEventListenerArgs) => void)[] | null | undefined;
                    destroyed?: ((instance: import('overlayscrollbars').OverlayScrollbars, canceled: boolean) => void) | ((instance: import('overlayscrollbars').OverlayScrollbars, canceled: boolean) => void)[] | null | undefined;
                    scroll?: ((instance: import('overlayscrollbars').OverlayScrollbars, event: Event) => void) | ((instance: import('overlayscrollbars').OverlayScrollbars, event: Event) => void)[] | null | undefined;
                } | null | undefined>;
            };
            defer: {
                type: import('vue').PropType<boolean | IdleRequestOptions | undefined>;
            };
        }>> & {
            onOsInitialized?: ((instance: import('overlayscrollbars').OverlayScrollbars) => any) | undefined;
            onOsUpdated?: ((instance: import('overlayscrollbars').OverlayScrollbars, onUpdatedArgs: import('overlayscrollbars').OnUpdatedEventListenerArgs) => any) | undefined;
            onOsDestroyed?: ((instance: import('overlayscrollbars').OverlayScrollbars, canceled: boolean) => any) | undefined;
            onOsScroll?: ((instance: import('overlayscrollbars').OverlayScrollbars, event: Event) => any) | undefined;
        }, {
            osInstance(): import('overlayscrollbars').OverlayScrollbars | null;
            getElement(): HTMLElement | null;
        }, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
            osInitialized: (instance: import('overlayscrollbars').OverlayScrollbars) => void;
            osUpdated: (instance: import('overlayscrollbars').OverlayScrollbars, onUpdatedArgs: import('overlayscrollbars').OnUpdatedEventListenerArgs) => void;
            osDestroyed: (instance: import('overlayscrollbars').OverlayScrollbars, canceled: boolean) => void;
            osScroll: (instance: import('overlayscrollbars').OverlayScrollbars, event: Event) => void;
        }, string, {
            element: string | import('vue').Component;
        }, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
            $slots: {
                default?(_: {}): any;
            };
        })) | null>;
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
}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
export default _default;
