import { ReactNode } from 'react';
import { Options } from 'overlayscrollbars';
interface HScrollbarsProps {
    children: ReactNode;
    maxHeight?: number;
    options?: Options;
    onScroll?: (value: {
        x: number;
        y: number;
    }) => void;
    onScrollEndX?: (value: unknown) => void;
    onScrollEndY?: (value: unknown) => void;
}
declare const HScrollbars: ({ children, maxHeight, options, onScroll, onScrollEndX, onScrollEndY, }: HScrollbarsProps) => import("react/jsx-runtime").JSX.Element;
export default HScrollbars;
