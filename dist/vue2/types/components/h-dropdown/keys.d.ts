import { InjectionKey, Ref } from 'vue';
import { ListPositionType } from './types';
declare const LIST_POSITION: InjectionKey<Ref<ListPositionType>>;
declare const CLICKED_BUTTON: InjectionKey<(e: Event) => void>;
declare const IS_ACTIVE_LIST: InjectionKey<Ref<boolean>>;
declare const DROPDOWN_LIST: InjectionKey<Ref<HTMLElement | null>>;
declare const DROPDOWN_BUTTON: InjectionKey<Ref<HTMLElement | null>>;
declare const CLICKED_DROPDOWN_ITEM_BUTTON: InjectionKey<(e: Event, value: string | number | Record<string, any> | unknown[], name: string) => void>;
declare const BUTTON_DISABLED: InjectionKey<Ref<boolean>>;
export { LIST_POSITION, CLICKED_BUTTON, IS_ACTIVE_LIST, DROPDOWN_LIST, DROPDOWN_BUTTON, CLICKED_DROPDOWN_ITEM_BUTTON, BUTTON_DISABLED, };
