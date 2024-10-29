import { PropType } from 'vue';
export declare enum ButtonPositionType {
    left = "left",
    right = "right",
    bottom = "bottom",
    top = "top"
}
declare const _default: import('vue').DefineComponent<{
    buttonPosition: {
        type: PropType<ButtonPositionType>;
        required: true;
    };
    buttonBackgroundColor: {
        type: StringConstructor;
    };
}, {
    grabArea: import('vue').Ref<HTMLButtonElement | null>;
    dragArea: import('vue').Ref<HTMLElement | null>;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, Readonly<import('vue').ExtractPropTypes<{
    buttonPosition: {
        type: PropType<ButtonPositionType>;
        required: true;
    };
    buttonBackgroundColor: {
        type: StringConstructor;
    };
}>>, {}>;
export default _default;
