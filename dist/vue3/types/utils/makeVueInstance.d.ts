import { DefineComponent } from 'vue';
type CreateElementFunction = (component: any, props?: Record<string, any>, children?: any) => any;
interface MakeVueInstanceOptions {
    props?: Record<string, unknown>;
    attrs?: Record<string, unknown>;
    on?: Record<string, unknown>;
    scopedSlots?: (hFn: CreateElementFunction) => Record<string, unknown>;
}
declare const makeVueInstance: (component: DefineComponent<any, any, any>, { props, attrs, on, scopedSlots }?: MakeVueInstanceOptions) => import('vue').ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import('vue').ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, import('vue').ComponentProvideOptions>, {}, {}, "", {}, any>;
export default makeVueInstance;
