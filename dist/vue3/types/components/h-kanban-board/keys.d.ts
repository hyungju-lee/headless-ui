import { InjectionKey, Ref } from 'vue';
declare const IS_DRAGGABLE: InjectionKey<Ref<boolean>>;
declare const EVENT_DRAG: InjectionKey<(tg: HTMLElement, xPosition: number, yPosition: number, type: string) => void>;
declare const END_EVENT_DRAG: InjectionKey<(type: string) => void>;
declare const EMIT_VALUE: InjectionKey<(value: unknown, colIndex: number, rowIndex: number, el: HTMLElement) => void>;
export { IS_DRAGGABLE, EVENT_DRAG, END_EVENT_DRAG, EMIT_VALUE };
