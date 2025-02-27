import { ReactNode, MouseEvent, CSSProperties } from 'react';
interface HModalProps {
    backdrop?: string;
    escBeforeFunc?: () => Promise<void> | void;
    escAfterFunc?: () => void;
    onBackdropClick?: (e: MouseEvent<HTMLDialogElement>) => void;
    children?: (closeFunc: () => void) => ReactNode;
    className?: string;
    style?: CSSProperties;
}
export interface HModalHandle {
    open: () => void;
    closeFunc: () => void;
}
declare const HModal: import('react').ForwardRefExoticComponent<HModalProps & import('react').RefAttributes<HModalHandle>>;
export default HModal;
