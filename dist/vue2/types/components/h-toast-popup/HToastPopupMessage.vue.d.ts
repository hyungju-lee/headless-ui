import { StyleValue } from 'vue';
declare const _default: import('vue').DefineComponent<{
    /**
     * 토스트가 자동으로 사라지는 데까지 걸리는 시간(밀리초)
     * 0 이하로 설정하면 자동 닫힘 없음
     */
    timeout: {
        type: NumberConstructor;
        default: number;
    };
}, {
    toastElement: import('vue').Ref<HTMLElement | null>;
    isVisible: import('vue').Ref<boolean>;
    wrapperStyle: import('vue').ComputedRef<StyleValue>;
    onAfterLeave: () => void;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, "close"[], string, Readonly<import('vue').ExtractPropTypes<{
    /**
     * 토스트가 자동으로 사라지는 데까지 걸리는 시간(밀리초)
     * 0 이하로 설정하면 자동 닫힘 없음
     */
    timeout: {
        type: NumberConstructor;
        default: number;
    };
}>>, {
    timeout: number;
}>;
export default _default;
