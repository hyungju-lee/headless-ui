import { PropType } from 'vue';
import { default as VueSignature } from 'vue-signature';
interface SignatureRef extends Signature {
    $el: HTMLElement;
}
declare const _default: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    naturalWidth: {
        type: NumberConstructor;
        default: number;
    };
    naturalHeight: {
        type: NumberConstructor;
        default: number;
    };
    ratio: {
        type: NumberConstructor;
        default: number;
    };
    sigOption: {
        type: PropType<{
            penColor: string;
            backgroundColor: string;
        }>;
        default: () => {
            penColor: string;
            backgroundColor: string;
        };
    };
    modelValue: {
        type: StringConstructor;
        required: true;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    placeHolderImage: {
        type: StringConstructor;
        default: string;
    };
}>, {
    signatureArea: import('vue').Ref<HTMLElement | null, HTMLElement | null>;
    signature: import('vue').Ref<{
        $el: HTMLElement;
        save: (str?: string) => string;
        undo: () => void;
        clear: () => void;
        addWaterMark: (obj: {
            text: string;
            font: string;
            style: string;
            fillStyle: string;
            strokeStyle: string;
            x: number;
            y: number;
            sx: number;
            sy: number;
        }) => void;
        fromDataURL: (url: string) => void;
    } | null, SignatureRef | {
        $el: HTMLElement;
        save: (str?: string) => string;
        undo: () => void;
        clear: () => void;
        addWaterMark: (obj: {
            text: string;
            font: string;
            style: string;
            fillStyle: string;
            strokeStyle: string;
            x: number;
            y: number;
            sx: number;
            sy: number;
        }) => void;
        fromDataURL: (url: string) => void;
    } | null>;
    dataUrl: import('vue').ComputedRef<string>;
    signatureKey: import('vue').Ref<string, string>;
    save: () => Promise<void>;
    width: import('vue').Ref<number, number>;
    height: import('vue').ComputedRef<number>;
    sigOptionData: import('vue').ComputedRef<{
        penColor: string;
        backgroundColor: string;
    }>;
    defaultUrl: import('vue').Ref<string, string>;
    initDefaultUrl: () => void;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, "update:modelValue", import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    naturalWidth: {
        type: NumberConstructor;
        default: number;
    };
    naturalHeight: {
        type: NumberConstructor;
        default: number;
    };
    ratio: {
        type: NumberConstructor;
        default: number;
    };
    sigOption: {
        type: PropType<{
            penColor: string;
            backgroundColor: string;
        }>;
        default: () => {
            penColor: string;
            backgroundColor: string;
        };
    };
    modelValue: {
        type: StringConstructor;
        required: true;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    placeHolderImage: {
        type: StringConstructor;
        default: string;
    };
}>> & Readonly<{}>, {
    disabled: boolean;
    naturalWidth: number;
    naturalHeight: number;
    ratio: number;
    sigOption: {
        penColor: string;
        backgroundColor: string;
    };
    placeHolderImage: string;
}, {}, {
    VueSignature: typeof VueSignature;
}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
export default _default;
