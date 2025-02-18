import { InjectionKey, Ref } from 'vue';
import { ToastItem } from './HToastPopup.vue';
declare const ACTIVE_TOASTS: InjectionKey<Ref<ToastItem[]>>;
declare const GET_NEXTID: InjectionKey<() => number>;
declare const RECALC_OFFSETS: InjectionKey<() => void>;
export { ACTIVE_TOASTS, GET_NEXTID, RECALC_OFFSETS };
