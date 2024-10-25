import { PropType } from 'vue';
import { CALENDAR_TYPES, DATE_AREA_TYPE } from './types';
declare const _default: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    modelValue: {
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
        type: PropType<CALENDAR_TYPES>;
        default: CALENDAR_TYPES;
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
        type: PropType<DATE_AREA_TYPE>;
        default: string;
    };
    scrollEventRefs: {
        type: PropType<string[]>;
        required: false;
    };
}>, {
    isActiveCalendar: import('vue').Ref<boolean, boolean>;
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
    nowYear: import('vue').Ref<number, number>;
    nowMonth: import('vue').Ref<number, number>;
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
    startYear: import('vue').Ref<number, number>;
    endYear: import('vue').Ref<number, number>;
    isActiveMonthCalendar: import('vue').Ref<boolean, boolean>;
    isActiveYearCalendar: import('vue').Ref<boolean, boolean>;
    yearForYearCalendar: import('vue').Ref<number, number>;
    yearForMonthCalendar: import('vue').Ref<number, number>;
    selectedDatePickerValue: import('vue').Ref<string, string>;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, ("blur" | "update:modelValue")[], "blur" | "update:modelValue", import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    modelValue: {
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
        type: PropType<CALENDAR_TYPES>;
        default: CALENDAR_TYPES;
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
        type: PropType<DATE_AREA_TYPE>;
        default: string;
    };
    scrollEventRefs: {
        type: PropType<string[]>;
        required: false;
    };
}>> & Readonly<{
    onBlur?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}>, {
    type: CALENDAR_TYPES;
    modelValue: string;
    isDisabled: boolean;
    rangeType: DATE_AREA_TYPE;
    dayFormat: string[];
    monthLength: number;
    yearLength: number;
    yearBeforeAfterLength: number;
    disabledDates: string[];
    disabledDatesRange: string[];
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
export default _default;
