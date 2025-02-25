import { ReactNode } from 'react';
interface ToastPopupAreaProps {
    children: ReactNode;
    onClose?: () => void;
}
declare const HToastPopupArea: {
    ({ children, onClose }: ToastPopupAreaProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
export default HToastPopupArea;
