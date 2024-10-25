import { Ref } from 'vue';
declare const useFormChangeCheck: (ref: Ref<HTMLFormElement | null>, url: string) => {
    deleteComponentState: () => void;
};
export declare const getFormDataStatus: () => {
    [key: string]: boolean | null;
};
export default useFormChangeCheck;
