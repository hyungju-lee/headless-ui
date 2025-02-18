declare const _default: import('vue').DefineComponent<{}, {
    value1: import('vue').Ref<number[], number[]>;
    value2: import('vue').Ref<number[], number[]>;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {
    HSliderRangeArea: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
        modelValue: {
            type: import('vue').PropType<number[]>;
            default: () => number[];
        };
    }>, {
        leftThumbPosition: import('vue').Ref<number, number>;
        rightThumbPosition: import('vue').Ref<number, number>;
    }, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
        modelValue: {
            type: import('vue').PropType<number[]>;
            default: () => number[];
        };
    }>> & Readonly<{
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    }>, {
        modelValue: number[];
    }, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
    HSliderRangeTrack: import('vue').DefineComponent<{}, {
        rangeStickStyle: import('vue').ComputedRef<import('vue').StyleValue>;
    }, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
    HSliderRangeContainer: import('vue').DefineComponent<{}, {
        sliderRangeContainer: import('vue').Ref<HTMLElement | null, HTMLElement | null>;
        startRangeDrag: (event: MouseEvent) => void;
        clickRangeSlider: (e: MouseEvent) => void;
    }, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
    HSliderRangeLeftThumb: import('vue').DefineComponent<{}, {
        leftThumbPosition: import('vue').Ref<number, number>;
    }, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
    HSliderRangeRightThumb: import('vue').DefineComponent<{}, {
        rightThumbPosition: import('vue').Ref<number, number>;
    }, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
export default _default;
