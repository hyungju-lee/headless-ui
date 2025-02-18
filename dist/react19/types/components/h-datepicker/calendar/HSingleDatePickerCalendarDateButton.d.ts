import { CSSProperties, ReactNode } from 'react';
interface HSingleDatePickerCalendarDateButtonProps {
    value: string;
    children: ReactNode;
    className?: string;
    disabled?: boolean;
    style?: CSSProperties;
}
declare const HSingleDatePickerCalendarDateButton: {
    ({ value, children, className, style, disabled }: HSingleDatePickerCalendarDateButtonProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
export default HSingleDatePickerCalendarDateButton;
