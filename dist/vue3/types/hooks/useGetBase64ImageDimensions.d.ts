declare const useGetBase64ImageDimensions: () => {
    isLoading: import('vue').Ref<boolean, boolean>;
    getBase64ImageDimensions: (base64: string, callback: ({ width, height, }: {
        width: number;
        height: number;
    }) => void) => Promise<HTMLImageElement>;
};
export default useGetBase64ImageDimensions;
