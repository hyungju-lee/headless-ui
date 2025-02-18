import { default as React } from 'react';
interface HModalCloseButtonProps {
    target: React.RefObject<{
        closeFunc: () => void;
    }>;
    beforeFunc?: () => Promise<void> | void;
    afterFunc?: () => void;
    children?: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
}
declare const HModalCloseButton: React.FC<HModalCloseButtonProps>;
export default HModalCloseButton;
