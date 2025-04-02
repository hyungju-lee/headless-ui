import { default as React, CSSProperties } from 'react';
interface HInputCheckboxProps<T> {
    data: T;
    value: T[];
    inputValue?: string;
    onChange: (value: T[]) => void;
    name?: string;
    className?: string;
    labelClassName?: string;
    inputClassName?: string;
    labelStyle?: CSSProperties;
    disabled?: boolean;
    readOnly?: boolean;
    required?: boolean;
    children?: React.ReactNode | ((props: {
        isActive: boolean;
    }) => React.ReactNode);
    style?: CSSProperties;
}
declare function HInputCheckbox<T>(props: HInputCheckboxProps<T>): import("react/jsx-runtime").JSX.Element;
declare namespace HInputCheckbox {
    var displayName: string;
}
export default HInputCheckbox;
