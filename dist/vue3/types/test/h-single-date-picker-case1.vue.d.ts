declare const _default: import('vue').DefineComponent<{}, {
    startDate: import('vue').Ref<string, string>;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {
    HSingleDatePickerCalendarYearButton: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
        value: {
            type: StringConstructor;
            required: true;
        };
    }>, {
        clickedYearButton: () => void;
        calendarType: any;
    }, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
        value: {
            type: StringConstructor;
            required: true;
        };
    }>> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
    HSingleDatePickerYearPrevButton: import('vue').DefineComponent<{}, {
        setYearForYearCalendar: (num: number) => void;
        yearsArrLength: import('vue').Ref<number, number>;
        calendarType: any;
    }, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {
        IconArrowLeft: import('vue').DefineComponent<{}, {
            ArrowLeftImage: string;
        }, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
    }, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
    HSingleDatePickerCalendarArea: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
        isActive: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>, {
        calendarArea: import('vue').Ref<HTMLElement | null, HTMLElement | null> | undefined;
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
    }, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
        isActive: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>> & Readonly<{}>, {
        isActive: boolean;
    }, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
    HSingleDatePickerCalendar: import('vue').DefineComponent<{}, {
        calendarType: any;
    }, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
    HSingleDatePickerMonthNextButton: import('vue').DefineComponent<{}, {
        setYearForMonthCalendar: ((num: number) => void) | undefined;
        calendarType: any;
    }, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {
        IconArrowRight: import('vue').DefineComponent<{}, {
            ArrowRightImage: string;
        }, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
    }, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
    HSingleDatePickerArea: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
        modelValue: {
            type: StringConstructor;
            required: false;
            default: () => string;
        };
        dayFormat: {
            type: import('vue').PropType<string[]>;
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
            type: import('vue').PropType<import('../components/h-single-date-picker/types').CALENDAR_TYPES>;
            default: import('../components/h-single-date-picker/types').CALENDAR_TYPES;
        };
        isDisabled: {
            type: BooleanConstructor;
            default: boolean;
        };
        disabledDates: {
            type: import('vue').PropType<string[]>;
            default: () => never[];
        };
        disabledDatesRange: {
            type: import('vue').PropType<string[]>;
            default: () => never[];
        };
        rangeType: {
            type: import('vue').PropType<import('../components/h-single-date-picker/types').DATE_AREA_TYPE>;
            default: string;
        };
        scrollEventRefs: {
            type: import('vue').PropType<string[]>;
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
            type: import('vue').PropType<string[]>;
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
            type: import('vue').PropType<import('../components/h-single-date-picker/types').CALENDAR_TYPES>;
            default: import('../components/h-single-date-picker/types').CALENDAR_TYPES;
        };
        isDisabled: {
            type: BooleanConstructor;
            default: boolean;
        };
        disabledDates: {
            type: import('vue').PropType<string[]>;
            default: () => never[];
        };
        disabledDatesRange: {
            type: import('vue').PropType<string[]>;
            default: () => never[];
        };
        rangeType: {
            type: import('vue').PropType<import('../components/h-single-date-picker/types').DATE_AREA_TYPE>;
            default: string;
        };
        scrollEventRefs: {
            type: import('vue').PropType<string[]>;
            required: false;
        };
    }>> & Readonly<{
        onBlur?: ((...args: any[]) => any) | undefined;
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    }>, {
        type: import('../components/h-single-date-picker/types').CALENDAR_TYPES;
        modelValue: string;
        isDisabled: boolean;
        rangeType: import('../components/h-single-date-picker/types').DATE_AREA_TYPE;
        dayFormat: string[];
        monthLength: number;
        yearLength: number;
        yearBeforeAfterLength: number;
        disabledDates: string[];
        disabledDatesRange: string[];
    }, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
    HSingleDatePickerCalendarMonthArea: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
        isActive: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>, {
        calendarMonthArea: import('vue').Ref<HTMLElement | null, HTMLElement | null> | undefined;
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
    }, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
        isActive: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>> & Readonly<{}>, {
        isActive: boolean;
    }, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
    HSingleDatePickerCalendarMonth: import('vue').DefineComponent<{}, {
        calendarType: any;
    }, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
    HSingleDatePickerCalendarYear: import('vue').DefineComponent<{}, {
        calendarType: any;
    }, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
    HSingleDatePickerCalendarDateButton: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
        value: {
            type: import('vue').PropType<string | null>;
            required: true;
        };
    }>, {
        clickedCalendarDateButton: () => void;
        calendarType: any;
    }, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
        value: {
            type: import('vue').PropType<string | null>;
            required: true;
        };
    }>> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
    HSingleDatePickerInput: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
        reactiveImage: {
            type: BooleanConstructor;
            default: boolean;
        };
        placeholder: {
            type: StringConstructor;
            default: string;
        };
    }>, {
        selectedDatePickerValue: import('vue').Ref<string | null, string | null>;
        clickedDatePickerInput: (e: Event) => void;
        calendarInput: import('vue').Ref<HTMLElement | null, HTMLElement | null> | undefined;
        calendarInputArea: import('vue').Ref<HTMLElement | null, HTMLElement | null> | undefined;
        calendarType: any;
        focusInDatePickerInput: (() => void) | undefined;
        focusOutDatePickerInput: (() => void) | undefined;
        isDisabled: import('vue').ComputedRef<boolean> | undefined;
        imageSrc: import('vue').Ref<string, string>;
        id: string;
    }, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
        reactiveImage: {
            type: BooleanConstructor;
            default: boolean;
        };
        placeholder: {
            type: StringConstructor;
            default: string;
        };
    }>> & Readonly<{}>, {
        reactiveImage: boolean;
        placeholder: string;
    }, {}, {
        IconCalendar: import('vue').DefineComponent<{}, {
            CalendarImage: string;
        }, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
    }, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
    HSingleDatePickerCalendarMonthButton: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
        value: {
            type: StringConstructor;
            required: true;
        };
    }>, {
        clickedNowMonthButton: () => void;
        calendarType: any;
    }, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
        value: {
            type: StringConstructor;
            required: true;
        };
    }>> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
    HSingleDatePickerMonthButton: import('vue').DefineComponent<{}, {
        setIsActiveMonthCalendar: () => void;
        calendarType: any;
    }, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
    HSingleDatePickerCalendarYearArea: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
        isActive: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>, {
        calendarYearArea: import('vue').Ref<HTMLElement | null, HTMLElement | null> | undefined;
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
    }, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
        isActive: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>> & Readonly<{}>, {
        isActive: boolean;
    }, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
    HSingleDatePickerMonthPrevButton: import('vue').DefineComponent<{}, {
        setYearForMonthCalendar: ((num: number) => void) | undefined;
        calendarType: any;
    }, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {
        IconArrowLeft: import('vue').DefineComponent<{}, {
            ArrowLeftImage: string;
        }, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
    }, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
    HSingleDatePickerMonthYearButton: import('vue').DefineComponent<{}, {
        setIsActiveYearCalendar: () => void;
        calendarType: any;
    }, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
    HSingleDatePickerNextButton: import('vue').DefineComponent<{}, {
        setNowMonth: ((num: number) => void) | undefined;
        calendarType: any;
    }, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {
        IconArrowRight: import('vue').DefineComponent<{}, {
            ArrowRightImage: string;
        }, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
    }, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
    HSingleDatePickerPrevButton: import('vue').DefineComponent<{}, {
        setNowMonth: ((num: number) => void) | undefined;
        calendarType: any;
    }, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {
        IconArrowLeft: import('vue').DefineComponent<{}, {
            ArrowLeftImage: string;
        }, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
    }, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
    HSingleDatePickerYearButton: import('vue').DefineComponent<{}, {
        setIsActiveYearCalendar: () => void;
        calendarType: any;
    }, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
    HSingleDatePickerYearNextButton: import('vue').DefineComponent<{}, {
        setYearForYearCalendar: (num: number) => void;
        yearsArrLength: import('vue').Ref<number, number>;
        calendarType: any;
    }, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {
        IconArrowRight: import('vue').DefineComponent<{}, {
            ArrowRightImage: string;
        }, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
    }, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
export default _default;
