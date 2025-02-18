import { CSSProperties, ReactNode } from 'react';
interface HSingleDatePickerCalendarMonthProps {
    children: ReactNode;
    className?: string;
    tableClassName?: string;
    childrenTableHead?: ReactNode;
    style?: CSSProperties;
}
declare const HSingleDatePickerCalendarMonth: {
    ({ children, className, tableClassName, style, childrenTableHead }: HSingleDatePickerCalendarMonthProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
export default HSingleDatePickerCalendarMonth;
