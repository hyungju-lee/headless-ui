import { AUTH_VERIFICATION_RESULT_ARGUMENTS_TYPE } from './emits';
declare const _default: import('vue').DefineComponent<{
    isAuth: {
        type: StringConstructor;
        required: true;
    };
    noAuthList: {
        type: ArrayConstructor;
        default: () => never[];
    };
    originalEventTarget: {
        type: StringConstructor;
        default: null;
    };
    originalEventTargetCallback: {
        type: StringConstructor;
        default: null;
    };
}, {
    checkAuth: (e: Event) => boolean;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    'auth-verification-result': ({ event, result, originalFunc, }: AUTH_VERIFICATION_RESULT_ARGUMENTS_TYPE) => boolean;
}, string, Readonly<import('vue').ExtractPropTypes<{
    isAuth: {
        type: StringConstructor;
        required: true;
    };
    noAuthList: {
        type: ArrayConstructor;
        default: () => never[];
    };
    originalEventTarget: {
        type: StringConstructor;
        default: null;
    };
    originalEventTargetCallback: {
        type: StringConstructor;
        default: null;
    };
}>>, {
    noAuthList: unknown[];
    originalEventTarget: string;
    originalEventTargetCallback: string;
}>;
export default _default;
