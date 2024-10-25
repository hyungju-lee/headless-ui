import { ListItemType } from './types';
declare function __VLS_template(): {
    slots: {
        default?(_: {
            isActiveList: boolean;
            listWidth: number;
        }): any;
    };
    refs: {
        dropdownArea: HTMLDivElement;
    };
    attrs: Partial<{}>;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<{
    modelValue: ListItemType | null;
    disabled?: boolean;
    scrollEventRefs?: string[];
}, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    blur: () => any;
    "update:modelValue": (value: ListItemType) => any;
}, string, import('vue').PublicProps, Readonly<{
    modelValue: ListItemType | null;
    disabled?: boolean;
    scrollEventRefs?: string[];
}> & Readonly<{
    onBlur?: (() => any) | undefined;
    "onUpdate:modelValue"?: ((value: ListItemType) => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
