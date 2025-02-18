import { Ref } from 'vue';
declare const _default: import('vue').DefineComponent<{}, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {
    inputRef: (({
        $: import('vue').ComponentInternalInstance;
        $data: {};
        $props: {
            readonly modelValue: unknown;
            readonly name: string;
            readonly data: unknown;
            readonly labelClass?: string | undefined;
            readonly labelStyle?: import('vue').CSSProperties | undefined;
            readonly value?: unknown;
            readonly disabled?: boolean | undefined;
            readonly readonly?: boolean | undefined;
            readonly required?: boolean | undefined;
            readonly "onUpdate:modelValue"?: ((value: unknown) => any) | undefined;
        } & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        } & {
            inputRef: HTMLInputElement;
        };
        $slots: Readonly<{
            [name: string]: import('vue').Slot<any> | undefined;
        }>;
        $root: import('vue').ComponentPublicInstance | null;
        $parent: import('vue').ComponentPublicInstance | null;
        $host: Element | null;
        $emit: (event: "update:modelValue", value: unknown) => void;
        $el: HTMLDivElement;
        $options: import('vue').ComponentOptionsBase<Readonly<{
            modelValue: unknown;
            name: string;
            data: unknown;
            labelClass?: string;
            labelStyle?: import('vue').CSSProperties;
            value?: unknown;
            disabled?: boolean;
            readonly?: boolean;
            required?: boolean;
        }> & Readonly<{
            "onUpdate:modelValue"?: ((value: unknown) => any) | undefined;
        }>, {
            inputRef: Ref<HTMLInputElement | null>;
        }, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
            "update:modelValue": (value: unknown) => any;
        }, string, {}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & {
            beforeCreate?: (() => void) | (() => void)[];
            created?: (() => void) | (() => void)[];
            beforeMount?: (() => void) | (() => void)[];
            mounted?: (() => void) | (() => void)[];
            beforeUpdate?: (() => void) | (() => void)[];
            updated?: (() => void) | (() => void)[];
            activated?: (() => void) | (() => void)[];
            deactivated?: (() => void) | (() => void)[];
            beforeDestroy?: (() => void) | (() => void)[];
            beforeUnmount?: (() => void) | (() => void)[];
            destroyed?: (() => void) | (() => void)[];
            unmounted?: (() => void) | (() => void)[];
            renderTracked?: ((e: import('vue').DebuggerEvent) => void) | ((e: import('vue').DebuggerEvent) => void)[];
            renderTriggered?: ((e: import('vue').DebuggerEvent) => void) | ((e: import('vue').DebuggerEvent) => void)[];
            errorCaptured?: ((err: unknown, instance: import('vue').ComponentPublicInstance | null, info: string) => boolean | void) | ((err: unknown, instance: import('vue').ComponentPublicInstance | null, info: string) => boolean | void)[];
        };
        $forceUpdate: () => void;
        $nextTick: typeof import('vue').nextTick;
        $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (...args: [R, R, import('@vue/reactivity').OnCleanup]) => any : (...args: [any, any, import('@vue/reactivity').OnCleanup]) => any, options?: import('vue').WatchOptions): import('vue').WatchStopHandle;
    } & Readonly<{}> & Omit<Readonly<{
        modelValue: unknown;
        name: string;
        data: unknown;
        labelClass?: string;
        labelStyle?: import('vue').CSSProperties;
        value?: unknown;
        disabled?: boolean;
        readonly?: boolean;
        required?: boolean;
    }> & Readonly<{
        "onUpdate:modelValue"?: ((value: unknown) => any) | undefined;
    }>, "inputRef"> & import('vue').ShallowUnwrapRef<{
        inputRef: Ref<HTMLInputElement | null>;
    }> & {} & import('vue').ComponentCustomProperties & {} & {
        $slots: {
            default?(_: {}): any;
        };
    }) | null)[];
}, any>;
export default _default;
