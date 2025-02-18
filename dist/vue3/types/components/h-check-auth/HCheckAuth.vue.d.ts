import { AUTH_VERIFICATION_RESULT_ARGUMENTS_TYPE } from './emits';
type __VLS_Props = {
    isAuth?: string;
    noAuthList?: string[];
    originalEventTarget?: string;
    originalEventTargetEvent?: string | null;
};
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {
            ref: string;
        }): any;
    };
    refs: {};
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    "auth-verification-result": (payload: AUTH_VERIFICATION_RESULT_ARGUMENTS_TYPE) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    "onAuth-verification-result"?: ((payload: AUTH_VERIFICATION_RESULT_ARGUMENTS_TYPE) => any) | undefined;
}>, {
    originalEventTarget: string;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
