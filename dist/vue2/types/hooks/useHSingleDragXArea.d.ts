interface DragAreaXStyleProps {
    minWidth: string;
    backgroundColor: string;
}
declare const useHSingleDragXArea: ({ minWidth, backgroundColor }: DragAreaXStyleProps) => {
    scrollArea: import('vue').Ref<HTMLElement | null>;
    dragAreaXStyle: import('vue').ComputedRef<{
        position: string;
        top: string;
        right: number;
        width: string;
        maxWidth: string;
        height: string;
        backgroundColor: string;
        minWidth: string;
    }>;
};
export default useHSingleDragXArea;
