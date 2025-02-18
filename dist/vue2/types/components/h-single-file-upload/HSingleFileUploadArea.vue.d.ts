import { PropType } from 'vue';
declare const _default: import('vue').DefineComponent<{
    image: {
        type: BooleanConstructor;
        default: boolean;
    };
    value: {
        default: null;
    };
    validStatus: {
        type: BooleanConstructor;
        default: boolean;
    };
    validExtensions: {
        type: PropType<Array<string>>;
        default: () => never[];
    };
    limitSize: {
        type: NumberConstructor;
        default: number;
    };
    initImage: {
        type: StringConstructor;
        default: null;
    };
}, {
    fileInput: import('vue').Ref<HTMLInputElement | null>;
    fileName: import('vue').ComputedRef<string | undefined>;
    fileSize: import('vue').ComputedRef<string | 0>;
    deleteFile: () => void;
    inputFileButtonClick: () => void;
    fileAdded: (e: Event) => void;
    fileDragOver: () => void;
    fileDragLeave: () => void;
    fileDrop: (e: DragEvent) => void;
    isActive: import('vue').Ref<boolean>;
    isHover: import('vue').Ref<boolean>;
    isError: import('vue').Ref<boolean>;
    file: import('vue').Ref<{
        readonly lastModified: number;
        readonly name: string;
        readonly webkitRelativePath: string;
        readonly size: number;
        readonly type: string;
        arrayBuffer: () => Promise<ArrayBuffer>;
        bytes: () => Promise<Uint8Array>;
        slice: (start?: number, end?: number, contentType?: string) => Blob;
        stream: () => ReadableStream<Uint8Array>;
        text: () => Promise<string>;
    } | null>;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, ("input" | "exceed-size" | "use-direct-image-before" | "use-direct-image" | "cancel-direct-image" | "no-valid-extensions")[], string, Readonly<import('vue').ExtractPropTypes<{
    image: {
        type: BooleanConstructor;
        default: boolean;
    };
    value: {
        default: null;
    };
    validStatus: {
        type: BooleanConstructor;
        default: boolean;
    };
    validExtensions: {
        type: PropType<Array<string>>;
        default: () => never[];
    };
    limitSize: {
        type: NumberConstructor;
        default: number;
    };
    initImage: {
        type: StringConstructor;
        default: null;
    };
}>>, {
    value: null;
    image: boolean;
    validStatus: boolean;
    validExtensions: string[];
    limitSize: number;
    initImage: string;
}>;
export default _default;
