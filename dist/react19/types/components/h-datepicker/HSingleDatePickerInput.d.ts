import { CSSProperties } from 'react';
interface HSingleDatePickerInputProps {
    reactiveImage?: boolean;
    placeholder?: string;
    className?: string;
    inputClassName?: string;
    iconClassName?: string;
    style?: CSSProperties;
    inputName?: string;
}
declare const HSingleDatePickerInput: {
    ({ reactiveImage, placeholder, className, inputClassName, iconClassName, style, inputName, ...props }: HSingleDatePickerInputProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
export default HSingleDatePickerInput;
