import { InjectionKey, Ref } from 'vue';
declare const MAX_LENGTH: InjectionKey<Ref<number>>;
declare const SET_COUNT_VALUE: InjectionKey<() => void>;
declare const TEXT_REF: InjectionKey<Ref<HTMLInputElement | HTMLTextAreaElement | null>>;
declare const TEXT_COUNTER_AREA: InjectionKey<Ref<HTMLElement | null>>;
export { MAX_LENGTH, SET_COUNT_VALUE, TEXT_REF, TEXT_COUNTER_AREA };
