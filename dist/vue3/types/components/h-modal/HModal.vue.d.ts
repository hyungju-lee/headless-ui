interface HModalProps {
    backdrop?: string;
    escBeforeFunc?: () => Promise<void> | void;
    escAfterFunc?: () => void;
}
declare function __VLS_template(): {
    slots: {
        default?(_: {
            closeFunc: () => Promise<void>;
        }): any;
    };
    refs: {
        dialogRef: HTMLDialogElement;
    };
    attrs: Partial<{}>;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<HModalProps, {
    open: () => void;
    closeFunc: () => Promise<void>;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<HModalProps> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
