declare const drawingScreen: (fn: () => void) => void;
declare const topBottomStyle: (top: number, bottom: number, height: number, clientHeight: number) => {
    top: string;
    bottom: string;
    marginBottom: string;
    marginTop?: undefined;
} | {
    top: string;
    bottom: string;
    marginTop: string;
    marginBottom?: undefined;
};
declare const leftRightStyle: (left: number, right: number, width: number, clientWidth: number, minusWidth: number) => {
    left: string;
    right: string;
};
declare function isValidDate(dateStr: string): boolean;
declare function getCurrentDateFormatted(afterDay?: number): string;
declare function isLeapYear(year: number): boolean;
declare function getEndOfSecondSemester(startDate: Date): Date;
export { topBottomStyle, leftRightStyle, isValidDate, getCurrentDateFormatted, isLeapYear, getEndOfSecondSemester, drawingScreen, };
