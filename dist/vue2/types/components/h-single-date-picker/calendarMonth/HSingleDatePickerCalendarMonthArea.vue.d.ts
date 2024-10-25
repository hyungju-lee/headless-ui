declare const _default: import('vue').DefineComponent<{
    isActive: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    calendarMonthArea: import('vue').Ref<HTMLElement | null> | undefined;
    calendarStyle: import('vue').ComputedRef<{
        position: string;
    } | {
        position?: undefined;
    } | {
        left: string;
        right: string;
        top: string;
        bottom: string;
        marginBottom: string;
        marginTop?: undefined;
        position: string;
        zIndex: string;
    } | {
        left: string;
        right: string;
        top: string;
        bottom: string;
        marginTop: string;
        marginBottom?: undefined;
        position: string;
        zIndex: string;
    }>;
    calendarType: any;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, Readonly<import('vue').ExtractPropTypes<{
    isActive: {
        type: BooleanConstructor;
        default: boolean;
    };
}>>, {
    isActive: boolean;
}>;
export default _default;
