import { PropType } from 'vue';
declare const _default: import('vue').DefineComponent<{
    listWidth: PropType<number>;
}, {
    isActiveList: import('vue').Ref<boolean> | undefined;
    listStyle: import('vue').ComputedRef<{
        position: string;
    } | {
        position?: undefined;
    } | {
        width: string;
        left: string;
        right: string;
        top: string;
        bottom: string;
        marginBottom: string;
        marginTop?: undefined;
        position: string;
        zIndex: string;
    } | {
        width: string;
        left: string;
        right: string;
        top: string;
        bottom: string;
        marginTop: string;
        marginBottom?: undefined;
        position: string;
        zIndex: string;
    }>;
    dropdownList: import('vue').Ref<HTMLElement | null> | undefined;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, Readonly<import('vue').ExtractPropTypes<{
    listWidth: PropType<number>;
}>>, {}>;
export default _default;
