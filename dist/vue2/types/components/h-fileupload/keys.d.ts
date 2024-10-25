import { InjectionKey, Ref } from 'vue';
declare const TRIGGER_FILE_INPUT: InjectionKey<() => void>;
declare const FILES: InjectionKey<Ref<File[]>>;
declare const FORMAT_SIZE: InjectionKey<(size: number) => string>;
declare const REMOVE_FILE: InjectionKey<(num: number) => void>;
export { TRIGGER_FILE_INPUT, FILES, FORMAT_SIZE, REMOVE_FILE };
