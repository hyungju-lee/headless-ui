import { CSSProperties, ReactNode } from 'react';
interface HSingleDatePickerCalendarYearButtonProps {
    children: ReactNode;
    className?: string;
    value: string;
    disabled?: boolean;
    style?: CSSProperties;
}
declare const HSingleDatePickerCalendarYearButton: {
    ({ children, className, value, disabled, style }: HSingleDatePickerCalendarYearButtonProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
export default HSingleDatePickerCalendarYearButton;
