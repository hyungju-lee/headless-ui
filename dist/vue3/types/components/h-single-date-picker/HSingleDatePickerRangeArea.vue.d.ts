import { PropType } from 'vue';
declare const _default: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    modelValue: {
        type: PropType<string[]>;
        default: () => string[];
    };
}>, {
    startDate: import('vue').Ref<string, string>;
    endDate: import('vue').Ref<string, string>;
    startDisableDatesRange: import('vue').ComputedRef<string[]>;
    endDisabledDatesRange: import('vue').ComputedRef<string[]>;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    modelValue: {
        type: PropType<string[]>;
        default: () => string[];
    };
}>> & Readonly<{
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}>, {
    modelValue: string[];
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
export default _default;
