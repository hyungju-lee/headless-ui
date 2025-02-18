import { default as React } from 'react';
import { HModalHandle } from './HModal';
interface HModalOpenButtonProps {
    target: React.RefObject<HModalHandle | null>;
    beforeFunc?: () => Promise<void> | void;
    afterFunc?: () => void;
    children?: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
    disabled?: boolean;
}
declare const HModalOpenButton: React.FC<HModalOpenButtonProps>;
export default HModalOpenButton;
