import { CSSProperties, ReactNode } from 'react';
interface HSingleDatePickerCalendarProps {
    children: ReactNode;
    childrenTableHead: ReactNode;
    className?: string;
    tableClassName?: string;
    tableHeadClassName?: string;
    tableBodyClassName?: string;
    style?: CSSProperties;
}
declare const HSingleDatePickerCalendar: {
    ({ children, childrenTableHead, className, tableClassName, tableHeadClassName, tableBodyClassName, style, ...props }: HSingleDatePickerCalendarProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
export default HSingleDatePickerCalendar;
