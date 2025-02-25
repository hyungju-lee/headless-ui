import { ReactNode, CSSProperties } from 'react';
interface ChildrenProps {
    startDate: string;
    setStartDate: (date: string) => void;
    endDate: string;
    setEndDate: (date: string) => void;
    startDisableDatesRange: string[];
    endDisabledDatesRange: string[];
}
declare enum setDateRangeFlag {
    START = "START",
    END = "END"
}
interface HSingleDatePickerRangeAreaProps {
    children: ({ startDate, endDate, startDisableDatesRange, endDisabledDatesRange }: ChildrenProps) => ReactNode;
    selectedValue: string[];
    updateSelectedValue: (value: string[]) => void;
    afterUpdate?: (value: string[], flag: setDateRangeFlag) => void;
    className?: string;
    style?: CSSProperties;
}
interface HSingleDatePickerRangeAreaContext {
    setStartDateRange: (date: string) => void;
    setEndDateRange: (date: string) => void;
    selectedRange: string[];
}
declare const HSingleDatePickerRangeAreaContext: import('react').Context<HSingleDatePickerRangeAreaContext | undefined>;
declare const HSingleDatePickerRangeArea: {
    ({ children, selectedValue, updateSelectedValue, afterUpdate, className, style, ...props }: HSingleDatePickerRangeAreaProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
export { HSingleDatePickerRangeAreaContext };
export default HSingleDatePickerRangeArea;
