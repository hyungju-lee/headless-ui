import { default as React, ReactNode, RefObject, CSSProperties } from 'react';
import { CALENDAR_TYPES, DATE_AREA_TYPE, CalendarPositionType } from './types.ts';
type MonthDatesType = {
    year: string;
    month: string;
    date: string;
    isActive: boolean;
    inRange: boolean;
    isDisabled: boolean;
    isCurrentDate: boolean;
    isStartDate: boolean;
    isEndDate: boolean;
}[][];
type MonthsType = {
    year: string;
    month: string;
    isActive: boolean;
    inRange: boolean;
    isDisabled: boolean;
    isCurrentMonth: boolean;
    isStartMonth: boolean;
    isEndMonth: boolean;
}[][];
type YearType = {
    year: string;
    isActive: boolean;
    inRange: boolean;
    isDisabled: boolean;
    isCurrentYear: boolean;
    isStartYear: boolean;
    isEndYear: boolean;
}[][];
interface ChildrenProps {
    isActiveCalendar: boolean;
    isActiveMonthCalendar: boolean;
    isActiveYearCalendar: boolean;
    dayFormat: string[];
    monthDates: MonthDatesType;
    nowYear: number;
    nowMonth: number;
    months: MonthsType;
    years: YearType;
    startYear: number;
    endYear: number;
    yearForYearCalendar: number;
    yearForMonthCalendar: number;
    closeAllCalendar: () => void;
}
interface HSingleDatePickerAreaProps {
    children: ({ isActiveCalendar, isActiveMonthCalendar, isActiveYearCalendar, dayFormat, monthDates, nowYear, nowMonth, months, years, startYear, endYear, yearForYearCalendar, yearForMonthCalendar, closeAllCalendar, }: ChildrenProps) => ReactNode;
    selectedValue: string;
    dayFormat?: string[];
    monthLength?: number;
    yearLength?: number;
    yearBeforeAfterLength?: number;
    type: CALENDAR_TYPES;
    isDisabled?: boolean;
    disabledDates?: string[];
    disabledDatesRange?: string[];
    rangeType?: DATE_AREA_TYPE | '';
    scrollEventRefs?: string[];
    onBlur?: () => void;
    updateSelectedValue?: (value: string) => void;
    className?: string;
    style?: CSSProperties;
}
interface HSingleDatePickerAreaContext {
    selectedDatePickerValue: string;
    clickedDatePickerInput: () => void;
    updateSelectedDatePickerValue: (value: string) => void;
    updateNowMonth: (month: number) => void;
    updateYearForYearCalendar: (year: number) => void;
    updateYearForMonthCalendar: (year: number) => void;
    yearsArrLength: number;
    updateIsActiveYearCalendar: () => void;
    updateIsActiveMonthCalendar: () => void;
    setNowMonthByMonthCalendar: (month: string) => void;
    setNowYearByYearCalendar: (year: string) => void;
    calendarInputButtonRef: RefObject<HTMLInputElement>;
    calendarInputAreaRef: RefObject<HTMLDivElement>;
    calendarPosition: CalendarPositionType;
    calendarAreaRef: RefObject<HTMLDivElement>;
    calendarMonthAreaRef: RefObject<HTMLDivElement>;
    calendarYearAreaRef: RefObject<HTMLDivElement>;
    type: CALENDAR_TYPES;
    focusInDatePickerInput: (e: React.KeyboardEvent<HTMLInputElement>) => void;
    focusOutDatePickerInput: (e: React.FocusEvent<HTMLInputElement, Element>) => void;
    rangeType: DATE_AREA_TYPE | '';
    isDisabledValue: boolean;
}
declare const HSingleDatePickerAreaContext: React.Context<HSingleDatePickerAreaContext | undefined>;
declare const HSingleDatePickerArea: {
    ({ children, selectedValue, dayFormat, monthLength, yearLength, yearBeforeAfterLength, type, isDisabled, disabledDates, disabledDatesRange, rangeType, scrollEventRefs, onBlur, updateSelectedValue, className, style, ...props }: HSingleDatePickerAreaProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
export { HSingleDatePickerAreaContext };
export default HSingleDatePickerArea;
