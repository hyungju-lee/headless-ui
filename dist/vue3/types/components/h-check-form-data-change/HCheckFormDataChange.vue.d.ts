type __VLS_Props = {
    href?: string | null;
    target?: string;
    originalEventTarget?: string | null;
    originalEventTargetEvent?: string | null;
};
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    "data-change-verification-result": (payload: {
        event: Event;
        result: boolean;
        originalFunc: Function;
        href?: string | null;
        target?: string;
    }) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    "onData-change-verification-result"?: ((payload: {
        event: Event;
        result: boolean;
        originalFunc: Function;
        href?: string | null;
        target?: string;
    }) => any) | undefined;
}>, {
    originalEventTarget: string | null;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
