import { DATA_CHANGE_VERIFICATION_RESULT_ARGUMENTS_TYPE } from './emits.ts';
declare const _default: import('vue').DefineComponent<{
    href: {
        type: StringConstructor;
        default: null;
    };
    target: {
        type: StringConstructor;
        default: string;
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
    checkFormDataChange: () => boolean;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    'data-change-verification-result': ({ event, result, originalFunc, }: DATA_CHANGE_VERIFICATION_RESULT_ARGUMENTS_TYPE) => boolean;
}, string, Readonly<import('vue').ExtractPropTypes<{
    href: {
        type: StringConstructor;
        default: null;
    };
    target: {
        type: StringConstructor;
        default: string;
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
    originalEventTarget: string;
    originalEventTargetCallback: string;
    href: string;
    target: string;
}>;
export default _default;
