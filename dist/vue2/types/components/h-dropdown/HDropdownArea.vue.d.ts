import { PropType } from 'vue';
import { ListItemType } from './types';
declare const _default: import('vue').DefineComponent<{
    value: {
        type: PropType<ListItemType | null>;
        required: false;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    scrollEventRefs: {
        type: PropType<string[]>;
        required: false;
    };
}, {
    dropdownArea: import('vue').Ref<HTMLElement | null>;
    isActiveList: import('vue').Ref<boolean>;
    dropdownAreaWidth: import('vue').Ref<number>;
    selectedValue: import('vue').Ref<{
        value: string;
        name: string;
    } | null>;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, ("input" | "blur")[], string, Readonly<import('vue').ExtractPropTypes<{
    value: {
        type: PropType<ListItemType | null>;
        required: false;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    scrollEventRefs: {
        type: PropType<string[]>;
        required: false;
    };
}>>, {
    disabled: boolean;
}>;
export default _default;
