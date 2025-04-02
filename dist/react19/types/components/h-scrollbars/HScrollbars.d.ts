import { default as React, ReactNode } from 'react';
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
    className?: string;
    style?: React.CSSProperties;
}
declare const HScrollbars: {
    ({ children, maxHeight, options, onScroll, onScrollEndX, onScrollEndY, className, style }: HScrollbarsProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
export default HScrollbars;
