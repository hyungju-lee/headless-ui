type RESOLVE_OR_REJECT_FUNC_TYPE = null | ((str: string) => void);
declare function usePromise(): {
    promiseInstance: () => Promise<unknown>;
    resolveFunc: import('vue').Ref<RESOLVE_OR_REJECT_FUNC_TYPE>;
    rejectFunc: import('vue').Ref<RESOLVE_OR_REJECT_FUNC_TYPE>;
    clearResolveFunc: () => void;
    clearRejectFunc: () => void;
};
export default usePromise;
