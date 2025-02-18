import { default as React, ReactNode, RefObject } from 'react';
import { HTooltipHandle } from './HTooltip';
type HTooltipAreaProps = {
    target: RefObject<HTooltipHandle | null>;
    children: ReactNode;
    className?: string;
    style?: React.CSSProperties;
};
declare const HTooltipArea: React.FC<HTooltipAreaProps>;
export default HTooltipArea;
