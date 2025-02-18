import { DefineComponent } from 'vue';
interface HSignatureAreaProps {
    naturalWidth?: number;
    naturalHeight?: number;
    ratio?: number;
    sigOption?: {
        penColor: string;
        backgroundColor: string;
    };
    value: string;
    disabled?: boolean;
    placeHolderImage?: string;
}
declare const _default: DefineComponent<HSignatureAreaProps>;
export default _default;
