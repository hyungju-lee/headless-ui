import { PropType } from 'vue';
declare const _default: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    modelValue: {
        type: PropType<{
            value: Array<{
                value: unknown;
            }>;
        }[]>;
        required: true;
    };
    isDraggable: {
        type: BooleanConstructor;
        default: boolean;
    };
}>, void, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    modelValue: {
        type: PropType<{
            value: Array<{
                value: unknown;
            }>;
        }[]>;
        required: true;
    };
    isDraggable: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & Readonly<{
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}>, {
    isDraggable: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
export default _default;
