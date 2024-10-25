import { ComputedRef, InjectionKey, Ref } from 'vue';
import { CalendarPositionType, CALENDAR_TYPES, DATE_AREA_TYPE } from '@/components/renew/common/singleDatePicker/types';
declare const SELECTED_DATEPICKER_VALUE: InjectionKey<Ref<string | null>>;
declare const CLICKED_DATEPICKER_INPUT: InjectionKey<(e: Event) => void>;
declare const SET_SELECTED_DATEPICKER_VALUE: InjectionKey<(val: string | null) => void>;
declare const SET_NOW_MONTH: InjectionKey<(num: number) => void>;
declare const SET_YEAR_FOR_YEAR_CALENDAR: InjectionKey<(num: number) => void>;
declare const SET_YEAR_FOR_MONTH_CALENDAR: InjectionKey<(num: number) => void>;
declare const YEARS_ARR_LENGTH: InjectionKey<Ref<number>>;
declare const SET_IS_ACTIVE_MONTH_CALENDAR: InjectionKey<() => void>;
declare const SET_IS_ACTIVE_YEAR_CALENDAR: InjectionKey<() => void>;
declare const SET_NOW_MONTH_BY_MONTH_CALENDAR: InjectionKey<() => void>;
declare const SET_NOW_YEAR_BY_YEAR_CALENDAR: InjectionKey<() => void>;
declare const CALENDAR_INPUT: InjectionKey<Ref<HTMLElement | null>>;
declare const CALENDAR_INPUT_AREA: InjectionKey<Ref<HTMLElement | null>>;
declare const CALENDAR_POSITION: InjectionKey<Ref<CalendarPositionType>>;
declare const CALENDAR_AREA: InjectionKey<Ref<HTMLElement | null>>;
declare const CALENDAR_MONTH_AREA: InjectionKey<Ref<HTMLElement | null>>;
declare const CALENDAR_YEAR_AREA: InjectionKey<Ref<HTMLElement | null>>;
declare const CALENDAR_DEFINE_TYPES: InjectionKey<CALENDAR_TYPES>;
declare const FOCUSIN_DATEPICKER_INPUT: InjectionKey<() => void>;
declare const FOCUSOUT_DATEPICKER_INPUT: InjectionKey<() => void>;
declare const IS_DISABLED: InjectionKey<ComputedRef<boolean>>;
declare const SET_START_DATE_FOR_RANGE: InjectionKey<(val: string) => void>;
declare const SET_END_DATE_FOR_RANGE: InjectionKey<(val: string) => void>;
declare const SELECTED_RANGE_FOR_RANGE: InjectionKey<ComputedRef<string[]>>;
declare const RANGE_TYPE: InjectionKey<ComputedRef<DATE_AREA_TYPE>>;
export { SELECTED_DATEPICKER_VALUE, CLICKED_DATEPICKER_INPUT, SET_SELECTED_DATEPICKER_VALUE, SET_NOW_MONTH, SET_YEAR_FOR_YEAR_CALENDAR, YEARS_ARR_LENGTH, SET_IS_ACTIVE_MONTH_CALENDAR, SET_IS_ACTIVE_YEAR_CALENDAR, SET_YEAR_FOR_MONTH_CALENDAR, SET_NOW_MONTH_BY_MONTH_CALENDAR, SET_NOW_YEAR_BY_YEAR_CALENDAR, CALENDAR_INPUT, CALENDAR_INPUT_AREA, CALENDAR_POSITION, CALENDAR_AREA, CALENDAR_MONTH_AREA, CALENDAR_YEAR_AREA, CALENDAR_DEFINE_TYPES, FOCUSIN_DATEPICKER_INPUT, FOCUSOUT_DATEPICKER_INPUT, IS_DISABLED, SET_START_DATE_FOR_RANGE, SET_END_DATE_FOR_RANGE, SELECTED_RANGE_FOR_RANGE, RANGE_TYPE, };