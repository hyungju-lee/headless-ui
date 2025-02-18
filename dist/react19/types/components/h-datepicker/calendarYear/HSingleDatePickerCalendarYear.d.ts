import { CSSProperties, ReactNode } from 'react';
interface HSingleDatePickerCalendarYearProps {
    children?: ReactNode;
    childrenTableHead?: ReactNode;
    childrenTableBody: ReactNode;
    className?: string;
    tableClassName?: string;
    style?: CSSProperties;
}
declare const HSingleDatePickerCalendarYear: {
    ({ children, childrenTableHead, childrenTableBody, className, tableClassName, style }: HSingleDatePickerCalendarYearProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
export default HSingleDatePickerCalendarYear;
