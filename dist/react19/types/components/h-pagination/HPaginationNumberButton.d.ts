import { default as React, ReactNode } from 'react';
interface PaginationNumberButtonProps {
    pageIndex: number;
    children: (slotProps: {
        isActive: boolean;
    }) => ReactNode;
    className?: string;
    style?: React.CSSProperties;
}
declare const HPaginationNumberButton: React.FC<PaginationNumberButtonProps>;
export default HPaginationNumberButton;
