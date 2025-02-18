import { default as React, CSSProperties, MouseEvent as ReactMouseEvent } from 'react';
type HTooltipProps = {
    children: React.ReactNode;
    className?: string;
    style?: CSSProperties;
};
export type HTooltipHandle = {
    show: (event: ReactMouseEvent<HTMLDivElement>) => void;
    hide: () => void;
    updatePosition: (event: ReactMouseEvent<HTMLDivElement>) => void;
};
declare const HTooltip: React.ForwardRefExoticComponent<HTooltipProps & React.RefAttributes<HTooltipHandle>>;
export default HTooltip;
