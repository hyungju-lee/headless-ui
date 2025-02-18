import { default as React } from 'react';
interface HModalOpenButtonProps {
    target: React.RefObject<{
        open: () => void;
    }>;
    beforeFunc?: () => Promise<void> | void;
    afterFunc?: () => void;
    children?: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
    disabled?: boolean;
}
declare const HModalOpenButton: React.FC<HModalOpenButtonProps>;
export default HModalOpenButton;
