import { ComputedRef, InjectionKey, Ref } from 'vue';
declare const MOVE_PAGE: InjectionKey<(pageIndex: number) => void>;
declare const LAST_PAGE_INDEX: InjectionKey<ComputedRef<number>>;
declare const ACTIVE_PAGE_INDEX: InjectionKey<Ref<number>>;
declare const CLICK_PAGINATION_BUTTON_HANDLER: InjectionKey<() => void>;
declare const CLASS_NAME_VALUE: InjectionKey<ComputedRef<string>>;
export { MOVE_PAGE, LAST_PAGE_INDEX, ACTIVE_PAGE_INDEX, CLICK_PAGINATION_BUTTON_HANDLER, CLASS_NAME_VALUE, };
