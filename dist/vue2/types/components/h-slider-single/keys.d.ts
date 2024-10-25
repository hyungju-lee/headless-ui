import { InjectionKey, Ref } from 'vue';
declare const THUMB_POSITION: InjectionKey<Ref<number>>;
declare const SLIDER_CONTAINER: InjectionKey<Ref<HTMLElement | null>>;
declare const START_DRAG: InjectionKey<() => void>;
declare const CLICK_SLIDER: InjectionKey<(event: MouseEvent) => void>;
export { THUMB_POSITION, SLIDER_CONTAINER, START_DRAG, CLICK_SLIDER };
