interface CalendarPositionType {
    top: number;
    bottom: number;
    left: number;
    right: number;
    minusWidth: number;
    clientWidth: number;
    clientHeight: number;
}
declare enum CALENDAR_TYPES {
    DEFAULT = "default",
    TYPE1 = "type1"
}
declare enum DATE_AREA_TYPE {
    START_DATE = "startDate",
    END_DATE = "endDate"
}
export type { CalendarPositionType };
export { CALENDAR_TYPES, DATE_AREA_TYPE };
