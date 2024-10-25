import { PropType } from 'vue';
declare enum ButtonPositionType {
    left = "left",
    right = "right",
    bottom = "bottom",
    top = "top"
}
declare const _default: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    buttonPosition: {
        type: PropType<ButtonPositionType>;
        required: true;
    };
    buttonBackgroundColor: {
        type: StringConstructor;
    };
}>, {
    grabArea: import('vue').Ref<HTMLButtonElement | null, HTMLButtonElement | null>;
    dragArea: import('vue').Ref<HTMLElement | null, HTMLElement | null>;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    buttonPosition: {
        type: PropType<ButtonPositionType>;
        required: true;
    };
    buttonBackgroundColor: {
        type: StringConstructor;
    };
}>> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
export default _default;
