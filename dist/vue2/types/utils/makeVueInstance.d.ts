import { default as Vue, Component, VNode } from 'vue';
import { CreateElement } from 'vue/types/vue';
interface OPTIONS_TYPE {
    props?: {
        [key: string]: unknown;
    };
    attrs?: {
        [key: string]: unknown;
    };
    scopedSlots?: (h?: CreateElement) => {
        [key: string]: () => VNode;
    };
    on?: {
        [key: string]: (e: Event) => void;
    };
}
declare const makeVueInstance: (component: Component | string, { props, attrs, on, scopedSlots }: OPTIONS_TYPE) => import('vue/types/vue').CombinedVueInstance<import('vue/types/v3-component-options').ExtractComputedReturns<{}> & Record<never, any> & Vue<Record<string, any>, Record<string, any>, never, never, (event: string, ...args: any[]) => Vue> & import('vue').ShallowUnwrapRef<{}> & Vue<Record<string, any>, Record<string, any>, never, never, (event: string, ...args: any[]) => Vue>, object, object, object, Record<never, any>, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, import('vue/types/v3-component-public-instance').OptionTypesType<{}, {}, {}, {}, {}, {}>>;
export default makeVueInstance;
