import { CSSProperties } from 'vue';
declare const _default: import('vue').DefineComponent<{
    isActive: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    calendarMonthArea: import('vue').Ref<HTMLElement | null> | undefined;
    calendarStyle: import('vue').ComputedRef<CSSProperties>;
    calendarType: import('../types').CALENDAR_TYPES | undefined;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, Readonly<import('vue').ExtractPropTypes<{
    isActive: {
        type: BooleanConstructor;
        default: boolean;
    };
}>>, {
    isActive: boolean;
}>;
export default _default;
