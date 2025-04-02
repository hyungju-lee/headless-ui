import { default as React, ReactNode } from 'react';
interface PaginationAreaProps {
    modelValue: number;
    countPerPage?: number;
    totalCount?: number;
    type?: string;
    queryStringKey: string;
    onPageChange?: (newPage: number) => void;
    children: (slotProps: {
        lastPageIndex: number;
        paginatedItems: number[];
    }) => ReactNode;
    className?: string;
    style?: React.CSSProperties;
}
export interface PaginationContextType {
    movePage: (pageIndex: number) => void;
    lastPageIndex: number;
    activePageIndex: number;
    clickPaginationButtonHandler: (page: number) => void;
    classNameValue: string;
}
export declare const PaginationContext: React.Context<PaginationContextType | null>;
declare const HPaginationArea: React.FC<PaginationAreaProps>;
export default HPaginationArea;
