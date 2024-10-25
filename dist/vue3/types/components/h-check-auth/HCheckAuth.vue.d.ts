import { AUTH_VERIFICATION_RESULT_ARGUMENTS_TYPE } from './emits';
declare function __VLS_template(): {
    slots: {
        default?(_: {
            ref: string;
        }): any;
    };
    refs: {};
    attrs: Partial<{}>;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<{
    isAuth?: string;
    noAuthList?: string[];
    originalEventTarget?: string;
    originalEventTargetEvent?: string | null;
}, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    "auth-verification-result": (payload: AUTH_VERIFICATION_RESULT_ARGUMENTS_TYPE) => any;
}, string, import('vue').PublicProps, Readonly<{
    isAuth?: string;
    noAuthList?: string[];
    originalEventTarget?: string;
    originalEventTargetEvent?: string | null;
}> & Readonly<{
    "onAuth-verification-result"?: ((payload: AUTH_VERIFICATION_RESULT_ARGUMENTS_TYPE) => any) | undefined;
}>, {
    originalEventTarget: string;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
