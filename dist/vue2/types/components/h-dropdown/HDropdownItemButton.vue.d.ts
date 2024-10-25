declare const _default: import('vue').DefineComponent<{
    value: {
        type: (ArrayConstructor | StringConstructor | ObjectConstructor | NumberConstructor)[];
        default: string;
    };
    name: {
        type: StringConstructor;
        default: string;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    clickedDropdownItemButton: (e: Event, value: string, name: string) => void;
    attrs: import('vue').Data;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, Readonly<import('vue').ExtractPropTypes<{
    value: {
        type: (ArrayConstructor | StringConstructor | ObjectConstructor | NumberConstructor)[];
        default: string;
    };
    name: {
        type: StringConstructor;
        default: string;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
}>>, {
    name: string;
    value: string | number | Record<string, any> | unknown[];
    disabled: boolean;
}>;
export default _default;
