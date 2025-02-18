import { DefineComponent } from 'vue';
import { ScrollInfo } from 'overlayscrollbars';
export type ScrollInfoType = ScrollInfo;
declare const _default: DefineComponent<{
    options?: OverlayScrollbars.Options;
    maxHeight?: number;
}, {
    scrollFunc: () => void;
    overlayScrollbars: import('vue').Ref<import('overlayscrollbars-vue').OverlayScrollbarsComponent | null>;
}>;
export default _default;
