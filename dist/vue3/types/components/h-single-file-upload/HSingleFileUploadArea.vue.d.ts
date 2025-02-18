import { PropType } from 'vue';
declare const _default: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    image: {
        type: BooleanConstructor;
        default: boolean;
    };
    modelValue: {
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
}>, {
    fileInput: import('vue').Ref<HTMLInputElement | null, HTMLInputElement | null>;
    fileName: import('vue').ComputedRef<string | undefined>;
    fileSize: import('vue').ComputedRef<string | 0>;
    deleteFile: () => void;
    inputFileButtonClick: () => void;
    fileAdded: (e: Event) => void;
    fileDragOver: () => void;
    fileDragLeave: () => void;
    fileDrop: (e: DragEvent) => void;
    isActive: import('vue').Ref<boolean, boolean>;
    isHover: import('vue').Ref<boolean, boolean>;
    isError: import('vue').Ref<boolean, boolean>;
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
    } | null, File | {
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
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, ("update:modelValue" | "exceed-size" | "use-direct-image-before" | "use-direct-image" | "cancel-direct-image" | "no-valid-extensions")[], "update:modelValue" | "exceed-size" | "use-direct-image-before" | "use-direct-image" | "cancel-direct-image" | "no-valid-extensions", import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    image: {
        type: BooleanConstructor;
        default: boolean;
    };
    modelValue: {
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
}>> & Readonly<{
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    "onExceed-size"?: ((...args: any[]) => any) | undefined;
    "onUse-direct-image-before"?: ((...args: any[]) => any) | undefined;
    "onUse-direct-image"?: ((...args: any[]) => any) | undefined;
    "onCancel-direct-image"?: ((...args: any[]) => any) | undefined;
    "onNo-valid-extensions"?: ((...args: any[]) => any) | undefined;
}>, {
    image: boolean;
    modelValue: null;
    validStatus: boolean;
    validExtensions: string[];
    limitSize: number;
    initImage: string;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
export default _default;
