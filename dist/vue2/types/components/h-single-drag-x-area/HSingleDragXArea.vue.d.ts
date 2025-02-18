import { PropType } from 'vue';
declare const _default: import('vue').DefineComponent<{
    buttonPosition: {
        type: PropType<"left" | "right" | "bottom" | "top">;
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
        type: PropType<"left" | "right" | "bottom" | "top">;
        required: true;
    };
    buttonBackgroundColor: {
        type: StringConstructor;
    };
}>>, {}>;
export default _default;
