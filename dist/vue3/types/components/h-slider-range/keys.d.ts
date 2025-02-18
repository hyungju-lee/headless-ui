import { InjectionKey, Ref } from 'vue';
declare const SLIDER_RANGE_CONTAINER: InjectionKey<Ref<HTMLElement | null>>;
declare const START_RANGE_DRAG: InjectionKey<(event: MouseEvent) => void>;
declare const CLICK_RANGE_SLIDER: InjectionKey<(event: MouseEvent) => void>;
declare const LEFT_THUMB_POSITION: InjectionKey<Ref<number>>;
declare const RIGHT_THUMB_POSITION: InjectionKey<Ref<number>>;
export { SLIDER_RANGE_CONTAINER, START_RANGE_DRAG, CLICK_RANGE_SLIDER, LEFT_THUMB_POSITION, RIGHT_THUMB_POSITION, };
