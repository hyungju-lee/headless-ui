import { default as React } from 'react';
export interface HChatBubbleProps {
    type: 'me' | 'other';
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
    arrowClassName?: string;
    arrowStyle?: React.CSSProperties;
}
declare function HChatBubble({ type, children, className, style, arrowClassName, arrowStyle }: HChatBubbleProps): import("react/jsx-runtime").JSX.Element;
declare namespace HChatBubble {
    var displayName: string;
}
export default HChatBubble;
