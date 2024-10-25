declare const useTypeChangeBetweenArrayBufferAndBase64: () => {
    base64ToArrayBuffer: (base64: string) => ArrayBufferLike;
    arrayBufferToBase64: (buffer: ArrayBuffer) => string;
};
export default useTypeChangeBetweenArrayBufferAndBase64;
