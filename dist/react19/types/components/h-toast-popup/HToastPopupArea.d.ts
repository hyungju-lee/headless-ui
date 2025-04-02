import { default as React, ReactNode } from 'react';
interface ToastPopupAreaProps {
    children: ReactNode;
    onClose?: () => void;
    className?: string;
    style?: React.CSSProperties;
}
declare const HToastPopupArea: {
    ({ children, onClose, className, style }: ToastPopupAreaProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
export default HToastPopupArea;
