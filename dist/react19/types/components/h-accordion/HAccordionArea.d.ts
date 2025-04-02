import { default as React } from 'react';
interface HAccordionAreaProps {
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
}
export declare function HAccordionArea({ children, className, style }: HAccordionAreaProps): import("react/jsx-runtime").JSX.Element;
export declare function useAccordion(): {
    open: boolean;
    toggle: () => void;
};
export {};
