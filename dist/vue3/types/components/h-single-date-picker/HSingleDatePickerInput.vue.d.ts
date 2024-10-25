declare const _default: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
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
export default _default;
