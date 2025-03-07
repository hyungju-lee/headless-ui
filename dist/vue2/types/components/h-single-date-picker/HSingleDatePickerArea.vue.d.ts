import { PropType } from 'vue';
declare const _default: import('vue').DefineComponent<{
    value: {
        type: StringConstructor;
        required: false;
        default: () => string;
    };
    dayFormat: {
        type: PropType<string[]>;
        default: () => string[];
    };
    monthLength: {
        type: NumberConstructor;
        default: number;
    };
    yearLength: {
        type: NumberConstructor;
        default: number;
    };
    yearBeforeAfterLength: {
        type: NumberConstructor;
        default: number;
    };
    type: {
        type: PropType<"type1" | "default">;
        default: string;
    };
    isDisabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabledDates: {
        type: PropType<string[]>;
        default: () => never[];
    };
    disabledDatesRange: {
        type: PropType<string[]>;
        default: () => never[];
    };
    rangeType: {
        type: PropType<"startDate" | "endDate">;
        default: string;
    };
    scrollEventRefs: {
        type: PropType<string[]>;
        required: false;
    };
}, {
    isActiveCalendar: import('vue').Ref<boolean>;
    monthDates: import('vue').ComputedRef<{
        year: string;
        month: string;
        date: string;
        isActive: boolean;
        inRange: boolean;
        isDisabled: boolean;
        isCurrentDate: boolean;
        isStartDate: boolean;
        isEndDate: boolean;
    }[][]>;
    nowYear: import('vue').Ref<number>;
    nowMonth: import('vue').Ref<number>;
    months: import('vue').ComputedRef<{
        year: string;
        month: string;
        isActive: boolean;
        inRange: boolean;
        isDisabled: boolean;
        isCurrentMonth: boolean;
        isStartMonth: boolean;
        isEndMonth: boolean;
    }[][]>;
    years: import('vue').ComputedRef<{
        year: string;
        isActive: boolean;
        inRange: boolean;
        isDisabled: boolean;
        isCurrentYear: boolean;
        isStartYear: boolean;
        isEndYear: boolean;
    }[][]>;
    startYear: import('vue').Ref<number>;
    endYear: import('vue').Ref<number>;
    isActiveMonthCalendar: import('vue').Ref<boolean>;
    isActiveYearCalendar: import('vue').Ref<boolean>;
    yearForYearCalendar: import('vue').Ref<number>;
    yearForMonthCalendar: import('vue').Ref<number>;
    selectedDatePickerValue: import('vue').Ref<string>;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, ("input" | "blur")[], string, Readonly<import('vue').ExtractPropTypes<{
    value: {
        type: StringConstructor;
        required: false;
        default: () => string;
    };
    dayFormat: {
        type: PropType<string[]>;
        default: () => string[];
    };
    monthLength: {
        type: NumberConstructor;
        default: number;
    };
    yearLength: {
        type: NumberConstructor;
        default: number;
    };
    yearBeforeAfterLength: {
        type: NumberConstructor;
        default: number;
    };
    type: {
        type: PropType<"type1" | "default">;
        default: string;
    };
    isDisabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabledDates: {
        type: PropType<string[]>;
        default: () => never[];
    };
    disabledDatesRange: {
        type: PropType<string[]>;
        default: () => never[];
    };
    rangeType: {
        type: PropType<"startDate" | "endDate">;
        default: string;
    };
    scrollEventRefs: {
        type: PropType<string[]>;
        required: false;
    };
}>>, {
    value: string;
    type: "default" | "type1";
    isDisabled: boolean;
    rangeType: "startDate" | "endDate";
    dayFormat: string[];
    monthLength: number;
    yearLength: number;
    yearBeforeAfterLength: number;
    disabledDates: string[];
    disabledDatesRange: string[];
}>;
export default _default;
