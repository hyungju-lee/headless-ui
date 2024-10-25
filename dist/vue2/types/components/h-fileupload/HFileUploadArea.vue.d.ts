import { PropType } from 'vue';
declare const _default: import('vue').DefineComponent<{
    value: {
        type: PropType<File[]>;
        required: true;
    };
    multiple: {
        type: BooleanConstructor;
        default: boolean;
    };
    maxFiles: {
        type: NumberConstructor;
        default: number;
    };
    maxSize: {
        type: NumberConstructor;
        default: number;
    };
}, {
    isDragOver: import('vue').Ref<boolean>;
    dragOver: (event: DragEvent) => void;
    onFileDrop: (event: DragEvent) => void;
    dragLeave: () => void;
    onFileChange: (event: Event) => void;
    fileInput: import('vue').Ref<HTMLInputElement | null>;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, ("input" | "exceed-file-num" | "exceed-file-size")[], string, Readonly<import('vue').ExtractPropTypes<{
    value: {
        type: PropType<File[]>;
        required: true;
    };
    multiple: {
        type: BooleanConstructor;
        default: boolean;
    };
    maxFiles: {
        type: NumberConstructor;
        default: number;
    };
    maxSize: {
        type: NumberConstructor;
        default: number;
    };
}>>, {
    multiple: boolean;
    maxFiles: number;
    maxSize: number;
}>;
export default _default;
