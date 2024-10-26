declare const _default: import('vue').DefineComponent<{
    reactiveImage: {
        type: BooleanConstructor;
        default: boolean;
    };
    placeholder: {
        type: StringConstructor;
        default: string;
    };
}, {
    selectedDatePickerValue: import('vue').Ref<string | null>;
    clickedDatePickerInput: (e: Event) => void;
    calendarInput: import('vue').Ref<HTMLElement | null> | undefined;
    calendarInputArea: import('vue').Ref<HTMLElement | null> | undefined;
    calendarType: any;
    focusInDatePickerInput: (() => void) | undefined;
    focusOutDatePickerInput: (() => void) | undefined;
    isDisabled: import('vue').ComputedRef<boolean> | undefined;
    imageSrc: import('vue').Ref<string>;
    id: any;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, Readonly<import('vue').ExtractPropTypes<{
    reactiveImage: {
        type: BooleanConstructor;
        default: boolean;
    };
    placeholder: {
        type: StringConstructor;
        default: string;
    };
}>>, {
    reactiveImage: boolean;
    placeholder: string;
}>;
export default _default;
