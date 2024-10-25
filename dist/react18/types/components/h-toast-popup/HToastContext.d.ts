import { ReactNode } from 'react';
interface ToastContextProps {
    handleClose: () => void;
    isVisible: boolean;
    setIsVisible: (isVisible: boolean) => void;
}
declare const HToastContext: import('react').Context<ToastContextProps | undefined>;
declare const HToastPopupProvider: ({ children, onClose, }: {
    children: ReactNode;
    onClose?: () => void;
}) => import("react/jsx-runtime").JSX.Element;
export { HToastPopupProvider, HToastContext };
