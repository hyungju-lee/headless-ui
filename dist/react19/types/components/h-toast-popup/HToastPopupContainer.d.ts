import { ReactNode, CSSProperties } from 'react';
type ValidReactNode = Exclude<ReactNode, bigint>;
declare const HToastPopupContainer: {
    ({ className, children, style, }: {
        className?: string;
        children: ValidReactNode;
        style?: CSSProperties;
    }): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
export default HToastPopupContainer;
