import { default as React } from 'react';
import { HModalHandle } from './HModal';
interface HModalCloseButtonProps {
    target: React.RefObject<HModalHandle | null>;
    beforeFunc?: () => Promise<void> | void;
    afterFunc?: () => void;
    children?: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
}
declare const HModalCloseButton: React.FC<HModalCloseButtonProps>;
export default HModalCloseButton;
