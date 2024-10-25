import { PropType } from 'vue';
declare const _default: import('vue').DefineComponent<{
    value: {
        type: PropType<string[]>;
        default: () => string[];
    };
}, {
    startDate: import('vue').Ref<string>;
    endDate: import('vue').Ref<string>;
    startDisableDatesRange: import('vue').ComputedRef<string[]>;
    endDisabledDatesRange: import('vue').ComputedRef<string[]>;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, "input"[], string, Readonly<import('vue').ExtractPropTypes<{
    value: {
        type: PropType<string[]>;
        default: () => string[];
    };
}>>, {
    value: string[];
}>;
export default _default;
