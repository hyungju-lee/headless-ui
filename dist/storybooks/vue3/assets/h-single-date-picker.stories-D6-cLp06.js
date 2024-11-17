import{d as te,r as ae,N as u,f as t,l as a,O as g,P as s,t as n,j as r,A as S,F as d,D as c,B as p,g as b,v as M,u as i}from"./vue.esm-bundler-Cp0jskqx.js";import{a5 as x,a6 as $,a7 as A,a8 as I,a9 as N,aa as w,ab as R,ac as E,ad as F,ae as V,af as z,ag as j,ah as U,ai as O,aj as T,ak as q,al as G,am as J,an as K,ao as L,ap as ye}from"./headless-ui-vue3.es-B45te3_K.js";import{_ as Ce}from"./plugin-vue_export-helper-DlAUqK2U.js";const re=te({name:"HSingleDatePickerCase1",components:{HSingleDatePickerCalendarYearButton:x,HSingleDatePickerYearPrevButton:$,HSingleDatePickerCalendarArea:A,HSingleDatePickerCalendar:I,HSingleDatePickerMonthNextButton:N,HSingleDatePickerArea:w,HSingleDatePickerCalendarMonthArea:R,HSingleDatePickerCalendarMonth:E,HSingleDatePickerCalendarYear:F,HSingleDatePickerCalendarDateButton:V,HSingleDatePickerInput:z,HSingleDatePickerCalendarMonthButton:j,HSingleDatePickerMonthButton:U,HSingleDatePickerCalendarYearArea:O,HSingleDatePickerMonthPrevButton:T,HSingleDatePickerMonthYearButton:q,HSingleDatePickerNextButton:G,HSingleDatePickerPrevButton:J,HSingleDatePickerYearButton:K,HSingleDatePickerYearNextButton:L},setup(){return{startDate:ae("2023.06.11")}}}),fe={style:{display:"inline-block","font-size":"14px",color:"#171717","font-weight":"700"}};function Be(H,y,le,C,m,o){const D=u("HSingleDatePickerInput"),k=u("HSingleDatePickerYearButton"),e=u("HSingleDatePickerMonthButton"),P=u("HSingleDatePickerPrevButton"),se=u("HSingleDatePickerNextButton"),oe=u("HSingleDatePickerCalendarDateButton"),de=u("HSingleDatePickerCalendar"),ce=u("HSingleDatePickerCalendarArea"),ue=u("HSingleDatePickerMonthYearButton"),ge=u("HSingleDatePickerMonthPrevButton"),De=u("HSingleDatePickerMonthNextButton"),ke=u("HSingleDatePickerCalendarMonthButton"),Se=u("HSingleDatePickerCalendarMonth"),_e=u("HSingleDatePickerCalendarMonthArea"),Pe=u("HSingleDatePickerYearPrevButton"),pe=u("HSingleDatePickerYearNextButton"),He=u("HSingleDatePickerCalendarYearButton"),me=u("HSingleDatePickerCalendarYear"),ve=u("HSingleDatePickerCalendarYearArea"),he=u("HSingleDatePickerArea");return t(),a(d,null,[g(s(H.startDate)+" ",1),n(he,{modelValue:H.startDate,"onUpdate:modelValue":y[0]||(y[0]=_=>H.startDate=_),type:"type1","is-disabled":!1,"disabled-dates-range":["~2024.06.10","2024.06.20~"]},{default:r(_=>[n(D),n(ce,{"is-active":_.isActiveCalendar},{default:r(()=>[S("div",null,[n(k,null,{default:r(()=>[g(s(String(_.nowYear)),1)]),_:2},1024),n(e,null,{default:r(()=>[g(" ."+s(String(_.nowMonth).padStart(2,"0")),1)]),_:2},1024),n(P,{style:{"margin-left":"8px"}}),n(se,{style:{"margin-left":"-1px"}})]),n(de,null,{table_head:r(()=>[S("tr",null,[(t(!0),a(d,null,c(_.dayFormat,(v,h)=>(t(),a("th",{key:`day_${h}`},s(v),1))),128))])]),table_body:r(()=>[(t(!0),a(d,null,c(_.monthDates,(v,h)=>(t(),a("tr",{key:`week_${h}`},[(t(!0),a(d,null,c(v,(l,f)=>(t(),a("td",{key:`date_${f}`,class:p({is_active:l&&l.isActive,is_current:l&&l.isCurrentDate,in_range:l&&l.inRange,is_active_start:l&&l.isStartDate,is_active_end:l&&l.isEndDate})},[l?(t(),b(oe,{key:0,value:`${l.year}.${l.month}.${l.date.padStart(2,"0")}`,disabled:l&&l.isDisabled},{default:r(()=>[g(s(l.date),1)]),_:2},1032,["value","disabled"])):M("",!0)],2))),128))]))),128))]),_:2},1024)]),_:2},1032,["is-active"]),n(_e,{"is-active":_.isActiveMonthCalendar},{default:r(()=>[S("div",null,[n(ue,null,{default:r(()=>[g(s(String(_.yearForMonthCalendar)),1)]),_:2},1024),n(ge,{style:{"margin-left":"8px"}}),n(De)]),n(Se,null,{table_body:r(()=>[(t(!0),a(d,null,c(_.months,(v,h)=>(t(),a("tr",{key:`months_${h}`},[(t(!0),a(d,null,c(v,(l,f)=>(t(),a("td",{key:`month_${f}`,class:p({is_current:l.isCurrentMonth,in_range:l.inRange,is_active_start:l.isStartMonth,is_active_end:l.isEndMonth})},[n(ke,{value:`${l.year}.${l.month.padStart(2,"0")}`,disabled:l.isDisabled},{default:r(()=>[g(s(l.month),1)]),_:2},1032,["value","disabled"])],2))),128))]))),128))]),_:2},1024)]),_:2},1032,["is-active"]),n(ve,{"is-active":_.isActiveYearCalendar},{default:r(()=>[S("div",null,[S("span",fe,s(String(_.startYear))+" - "+s(String(_.endYear)),1),n(Pe,{style:{"margin-left":"8px"}}),n(pe)]),n(me,null,{table_body:r(()=>[(t(!0),a(d,null,c(_.years,(v,h)=>(t(),a("tr",{key:`years_${h}`},[(t(!0),a(d,null,c(v,(l,f)=>(t(),a("td",{key:`year_${f}`,class:p({is_current:l.isCurrentYear,in_range:l.inRange,is_active_start:l.isStartYear,is_active_end:l.isEndYear})},[n(He,{value:l.year,disabled:l.isDisabled},{default:r(()=>[g(s(l.year),1)]),_:2},1032,["value","disabled"])],2))),128))]))),128))]),_:2},1024)]),_:2},1032,["is-active"])]),_:1},8,["modelValue"])],64)}const Ye=Ce(re,[["render",Be]]);re.__docgenInfo={displayName:"HSingleDatePickerCase1",exportName:"default",description:"",tags:{},sourceFiles:["/Users/nhn/study_headless_ui/ui-storybook/vue3/src/stories/h-single-date-picker/h-single-date-picker-case1.vue"]};const be=`<template>
  {{ startDate }}
  <HSingleDatePickerArea
      #default="slotProps"
      v-model="startDate"
      type="type1"
      :is-disabled="false"
      :disabled-dates-range="['~2024.06.10', '2024.06.20~']"
  >
    <HSingleDatePickerInput/>
    <!-- 달력 -->
    <HSingleDatePickerCalendarArea :is-active="slotProps.isActiveCalendar">
      <div>
        <HSingleDatePickerYearButton>
          {{ String(slotProps.nowYear) }}
        </HSingleDatePickerYearButton>
        <HSingleDatePickerMonthButton>
          .{{ String(slotProps.nowMonth).padStart(2, "0") }}
        </HSingleDatePickerMonthButton>
        <HSingleDatePickerPrevButton style="margin-left: 8px"/>
        <HSingleDatePickerNextButton style="margin-left: -1px"/>
      </div>
      <HSingleDatePickerCalendar>
        <template #table_head>
          <tr>
            <th
                v-for="(day, index) in slotProps.dayFormat"
                :key="\`day_\${index}\`"
            >
              {{ day }}
            </th>
          </tr>
        </template>
        <template #table_body>
          <tr
              v-for="(week, index) in slotProps.monthDates"
              :key="\`week_\${index}\`"
          >
            <td
                v-for="(dateInfo, index) in week"
                :key="\`date_\${index}\`"
                :class="{
                is_active: dateInfo && dateInfo.isActive,
                is_current: dateInfo && dateInfo.isCurrentDate,
                in_range: dateInfo && dateInfo.inRange,
                is_active_start: dateInfo && dateInfo.isStartDate,
                is_active_end: dateInfo && dateInfo.isEndDate,
              }"
            >
              <template v-if="dateInfo">
                <HSingleDatePickerCalendarDateButton
                    :value="\`\${dateInfo.year}.\${
                    dateInfo.month
                  }.\${dateInfo.date.padStart(2, '0')}\`"
                    :disabled="dateInfo && dateInfo.isDisabled"
                >
                  {{ dateInfo.date }}
                </HSingleDatePickerCalendarDateButton>
              </template>
            </td>
          </tr>
        </template>
      </HSingleDatePickerCalendar>
    </HSingleDatePickerCalendarArea>
    <!-- 월 달력 -->
    <HSingleDatePickerCalendarMonthArea
        :is-active="slotProps.isActiveMonthCalendar"
    >
      <div>
        <HSingleDatePickerMonthYearButton>
          {{ String(slotProps.yearForMonthCalendar) }}
        </HSingleDatePickerMonthYearButton>
        <HSingleDatePickerMonthPrevButton style="margin-left: 8px"/>
        <HSingleDatePickerMonthNextButton/>
      </div>
      <HSingleDatePickerCalendarMonth>
        <template #table_body>
          <tr
              v-for="(monthInfos, index) in slotProps.months"
              :key="\`months_\${index}\`"
          >
            <td
                v-for="(monthInfo, index) in monthInfos"
                :key="\`month_\${index}\`"
                :class="{
                is_current: monthInfo.isCurrentMonth,
                in_range: monthInfo.inRange,
                is_active_start: monthInfo.isStartMonth,
                is_active_end: monthInfo.isEndMonth,
              }"
            >
              <HSingleDatePickerCalendarMonthButton
                  :value="\`\${monthInfo.year}.\${monthInfo.month.padStart(2, '0')}\`"
                  :disabled="monthInfo.isDisabled"
              >
                {{ monthInfo.month }}
              </HSingleDatePickerCalendarMonthButton>
            </td>
          </tr>
        </template>
      </HSingleDatePickerCalendarMonth>
    </HSingleDatePickerCalendarMonthArea>
    <!-- 연도 달력 -->
    <HSingleDatePickerCalendarYearArea
        :is-active="slotProps.isActiveYearCalendar"
    >
      <div>
        <span
            style="
            display: inline-block;
            font-size: 14px;
            color: #171717;
            font-weight: 700;
          "
        >
          {{ String(slotProps.startYear) }}
          -
          {{ String(slotProps.endYear) }}
        </span>
        <HSingleDatePickerYearPrevButton style="margin-left: 8px"/>
        <HSingleDatePickerYearNextButton/>
      </div>
      <HSingleDatePickerCalendarYear>
        <template #table_body>
          <tr
              v-for="(yearInfos, index) in slotProps.years"
              :key="\`years_\${index}\`"
          >
            <td
                v-for="(yearInfo, index) in yearInfos"
                :key="\`year_\${index}\`"
                :class="{
                is_current: yearInfo.isCurrentYear,
                in_range: yearInfo.inRange,
                is_active_start: yearInfo.isStartYear,
                is_active_end: yearInfo.isEndYear,
              }"
            >
              <HSingleDatePickerCalendarYearButton
                  :value="yearInfo.year"
                  :disabled="yearInfo.isDisabled"
              >
                {{ yearInfo.year }}
              </HSingleDatePickerCalendarYearButton>
            </td>
          </tr>
        </template>
      </HSingleDatePickerCalendarYear>
    </HSingleDatePickerCalendarYearArea>
  </HSingleDatePickerArea>
</template>

<script lang="ts">
import {defineComponent, ref} from "vue";
import {
  HSingleDatePickerCalendarYearButton,
  HSingleDatePickerYearPrevButton,
  HSingleDatePickerCalendarArea,
  HSingleDatePickerCalendar,
  HSingleDatePickerMonthNextButton,
  HSingleDatePickerArea,
  HSingleDatePickerCalendarMonthArea,
  HSingleDatePickerCalendarMonth,
  HSingleDatePickerCalendarYear,
  HSingleDatePickerCalendarDateButton,
  HSingleDatePickerInput,
  HSingleDatePickerCalendarMonthButton,
  HSingleDatePickerMonthButton,
  HSingleDatePickerCalendarYearArea,
  HSingleDatePickerMonthPrevButton,
  HSingleDatePickerMonthYearButton,
  HSingleDatePickerNextButton,
  HSingleDatePickerPrevButton,
  HSingleDatePickerYearButton,
  HSingleDatePickerYearNextButton,
} from 'headless-ui/vue3'

export default defineComponent({
  name: "HSingleDatePickerCase1",
  components: {
    HSingleDatePickerCalendarYearButton,
    HSingleDatePickerYearPrevButton,
    HSingleDatePickerCalendarArea,
    HSingleDatePickerCalendar,
    HSingleDatePickerMonthNextButton,
    HSingleDatePickerArea,
    HSingleDatePickerCalendarMonthArea,
    HSingleDatePickerCalendarMonth,
    HSingleDatePickerCalendarYear,
    HSingleDatePickerCalendarDateButton,
    HSingleDatePickerInput,
    HSingleDatePickerCalendarMonthButton,
    HSingleDatePickerMonthButton,
    HSingleDatePickerCalendarYearArea,
    HSingleDatePickerMonthPrevButton,
    HSingleDatePickerMonthYearButton,
    HSingleDatePickerNextButton,
    HSingleDatePickerPrevButton,
    HSingleDatePickerYearButton,
    HSingleDatePickerYearNextButton,
  },
  setup() {
    const startDate = ref("2023.06.11");

    return {
      startDate,
    };
  },
});
<\/script>

<style scoped></style>
`,Me={style:{display:"inline-block","font-size":"14px",color:"#171717","font-weight":"700"}},xe={style:{display:"inline-block","font-size":"14px",color:"#171717","font-weight":"700"}},ie=te({__name:"h-single-date-picker-case2",setup(H){const y=ae(["2023.10.01","2023.10.10"]);return(le,C)=>(t(),a(d,null,[g(s(y.value.join(" ~ "))+" ",1),n(i(ye),{modelValue:y.value,"onUpdate:modelValue":C[0]||(C[0]=m=>y.value=m)},{default:r(m=>[n(i(w),{type:"type1","model-value":m.startDate,"disabled-dates-range":[...m.startDisableDatesRange],"range-type":"startDate"},{default:r(o=>[n(i(z)),n(i(A),{"is-active":o.isActiveCalendar},{default:r(()=>[S("div",null,[n(i(K),null,{default:r(()=>[g(s(String(o.nowYear)),1)]),_:2},1024),n(i(U),null,{default:r(()=>[g(" ."+s(String(o.nowMonth).padStart(2,"0")),1)]),_:2},1024),n(i(J),{style:{"margin-left":"8px"}}),n(i(G),{style:{"margin-left":"-1px"}})]),n(i(I),null,{table_head:r(()=>[S("tr",null,[(t(!0),a(d,null,c(o.dayFormat,(D,k)=>(t(),a("th",{key:`day_${k}`},s(D),1))),128))])]),table_body:r(()=>[(t(!0),a(d,null,c(o.monthDates,(D,k)=>(t(),a("tr",{key:`week_${k}`},[(t(!0),a(d,null,c(D,(e,P)=>(t(),a("td",{key:`date_${P}`,class:p({is_active:e&&e.isActive,is_current:e&&e.isCurrentDate,in_range:e&&e.inRange,is_active_start:e&&e.isStartDate,is_active_end:e&&e.isEndDate})},[e?(t(),b(i(V),{key:0,value:`${e.year}.${e.month}.${e.date.padStart(2,"0")}`,disabled:e&&e.isDisabled},{default:r(()=>[g(s(e.date),1)]),_:2},1032,["value","disabled"])):M("",!0)],2))),128))]))),128))]),_:2},1024)]),_:2},1032,["is-active"]),n(i(R),{"is-active":o.isActiveMonthCalendar},{default:r(()=>[S("div",null,[n(i(q),null,{default:r(()=>[g(s(String(o.yearForMonthCalendar)),1)]),_:2},1024),n(i(T),{style:{"margin-left":"8px"}}),n(i(N))]),n(i(E),null,{table_body:r(()=>[(t(!0),a(d,null,c(o.months,(D,k)=>(t(),a("tr",{key:`months_${k}`},[(t(!0),a(d,null,c(D,(e,P)=>(t(),a("td",{key:`month_${P}`,class:p({is_current:e.isCurrentMonth,in_range:e.inRange,is_active_start:e.isStartMonth,is_active_end:e.isEndMonth})},[n(i(j),{value:`${e.year}.${e.month.padStart(2,"0")}`,disabled:e.isDisabled},{default:r(()=>[g(s(e.month),1)]),_:2},1032,["value","disabled"])],2))),128))]))),128))]),_:2},1024)]),_:2},1032,["is-active"]),n(i(O),{"is-active":o.isActiveYearCalendar},{default:r(()=>[S("div",null,[S("span",Me,s(String(o.startYear))+" - "+s(String(o.endYear)),1),n(i($),{style:{"margin-left":"8px"}}),n(i(L))]),n(i(F),null,{table_body:r(()=>[(t(!0),a(d,null,c(o.years,(D,k)=>(t(),a("tr",{key:`years_${k}`},[(t(!0),a(d,null,c(D,(e,P)=>(t(),a("td",{key:`year_${P}`,class:p({is_current:e.isCurrentYear,in_range:e.inRange,is_active_start:e.isStartYear,is_active_end:e.isEndYear})},[n(i(x),{value:e.year,disabled:e.isDisabled},{default:r(()=>[g(s(e.year),1)]),_:2},1032,["value","disabled"])],2))),128))]))),128))]),_:2},1024)]),_:2},1032,["is-active"])]),_:2},1032,["model-value","disabled-dates-range"]),C[1]||(C[1]=S("span",{class:"range"},null,-1)),n(i(w),{type:"type1","model-value":m.endDate,"disabled-dates-range":[...m.endDisabledDatesRange],"range-type":"endDate"},{default:r(o=>[n(i(z)),n(i(A),{"is-active":o.isActiveCalendar},{default:r(()=>[S("div",null,[n(i(K),null,{default:r(()=>[g(s(String(o.nowYear)),1)]),_:2},1024),n(i(U),null,{default:r(()=>[g(" ."+s(String(o.nowMonth).padStart(2,"0")),1)]),_:2},1024),n(i(J),{style:{"margin-left":"8px"}}),n(i(G),{style:{"margin-left":"-1px"}})]),n(i(I),null,{table_head:r(()=>[S("tr",null,[(t(!0),a(d,null,c(o.dayFormat,(D,k)=>(t(),a("th",{key:`day_${k}`},s(D),1))),128))])]),table_body:r(()=>[(t(!0),a(d,null,c(o.monthDates,(D,k)=>(t(),a("tr",{key:`week_${k}`},[(t(!0),a(d,null,c(D,(e,P)=>(t(),a("td",{key:`date_${P}`,class:p({is_active:e&&e.isActive,is_current:e&&e.isCurrentDate,in_range:e&&e.inRange,is_active_start:e&&e.isStartDate,is_active_end:e&&e.isEndDate})},[e?(t(),b(i(V),{key:0,value:`${e.year}.${e.month}.${e.date.padStart(2,"0")}`,disabled:e&&e.isDisabled},{default:r(()=>[g(s(e.date),1)]),_:2},1032,["value","disabled"])):M("",!0)],2))),128))]))),128))]),_:2},1024)]),_:2},1032,["is-active"]),n(i(R),{"is-active":o.isActiveMonthCalendar},{default:r(()=>[S("div",null,[n(i(q),null,{default:r(()=>[g(s(String(o.yearForMonthCalendar)),1)]),_:2},1024),n(i(T),{style:{"margin-left":"8px"}}),n(i(N))]),n(i(E),null,{table_body:r(()=>[(t(!0),a(d,null,c(o.months,(D,k)=>(t(),a("tr",{key:`months_${k}`},[(t(!0),a(d,null,c(D,(e,P)=>(t(),a("td",{key:`month_${P}`,class:p({is_current:e.isCurrentMonth,in_range:e.inRange,is_active_start:e.isStartMonth,is_active_end:e.isEndMonth})},[n(i(j),{value:`${e.year}.${e.month.padStart(2,"0")}`,disabled:e.isDisabled},{default:r(()=>[g(s(e.month),1)]),_:2},1032,["value","disabled"])],2))),128))]))),128))]),_:2},1024)]),_:2},1032,["is-active"]),n(i(O),{"is-active":o.isActiveYearCalendar},{default:r(()=>[S("div",null,[S("span",xe,s(String(o.startYear))+" - "+s(String(o.endYear)),1),n(i($),{style:{"margin-left":"8px"}}),n(i(L))]),n(i(F),null,{table_body:r(()=>[(t(!0),a(d,null,c(o.years,(D,k)=>(t(),a("tr",{key:`years_${k}`},[(t(!0),a(d,null,c(D,(e,P)=>(t(),a("td",{key:`year_${P}`,class:p({is_current:e.isCurrentYear,in_range:e.inRange,is_active_start:e.isStartYear,is_active_end:e.isEndYear})},[n(i(x),{value:e.year,disabled:e.isDisabled},{default:r(()=>[g(s(e.year),1)]),_:2},1032,["value","disabled"])],2))),128))]))),128))]),_:2},1024)]),_:2},1032,["is-active"])]),_:2},1032,["model-value","disabled-dates-range"])]),_:1},8,["modelValue"])],64))}});ie.__docgenInfo={exportName:"default",displayName:"h-single-date-picker-case2",description:"",tags:{},sourceFiles:["/Users/nhn/study_headless_ui/ui-storybook/vue3/src/stories/h-single-date-picker/h-single-date-picker-case2.vue"]};const $e=`<script setup lang="ts">
import {ref} from 'vue'
import {
  HSingleDatePickerCalendarYearButton,
  HSingleDatePickerYearPrevButton,
  HSingleDatePickerCalendarArea,
  HSingleDatePickerCalendar,
  HSingleDatePickerMonthNextButton,
  HSingleDatePickerArea,
  HSingleDatePickerCalendarMonthArea,
  HSingleDatePickerCalendarMonth,
  HSingleDatePickerCalendarYear,
  HSingleDatePickerCalendarDateButton,
  HSingleDatePickerInput,
  HSingleDatePickerCalendarMonthButton,
  HSingleDatePickerMonthButton,
  HSingleDatePickerCalendarYearArea,
  HSingleDatePickerMonthPrevButton,
  HSingleDatePickerMonthYearButton,
  HSingleDatePickerNextButton,
  HSingleDatePickerPrevButton,
  HSingleDatePickerYearButton,
  HSingleDatePickerYearNextButton,
  HSingleDatePickerRangeArea,
} from 'headless-ui/vue3'

const rangeDate = ref(["2023.10.01", "2023.10.10"]);
<\/script>

<template>
  {{ rangeDate.join(' ~ ') }}
  <HSingleDatePickerRangeArea #default="rangeSlotProps" v-model="rangeDate">
    <!-- 달력 컴포넌트 -->
    <!-- v-model="startDate" -->
    <!-- range 컴포넌트를 사용할 때, disabled 날짜 범위를 여러개 적용하고싶을 때, 아래와 같이 spread 연산자 사용하면 여러 disabled 범위 적용 가능 -->
    <HSingleDatePickerArea
        #default="slotProps"
        type="type1"
        :model-value="rangeSlotProps.startDate"
        :disabled-dates-range="[...rangeSlotProps.startDisableDatesRange]"
        range-type="startDate"
    >
      <HSingleDatePickerInput/>
      <!-- 달력 -->
      <HSingleDatePickerCalendarArea :is-active="slotProps.isActiveCalendar">
        <div>
          <HSingleDatePickerYearButton>
            {{ String(slotProps.nowYear) }}
          </HSingleDatePickerYearButton>
          <HSingleDatePickerMonthButton>
            .{{ String(slotProps.nowMonth).padStart(2, "0") }}
          </HSingleDatePickerMonthButton>
          <HSingleDatePickerPrevButton style="margin-left: 8px"/>
          <HSingleDatePickerNextButton style="margin-left: -1px"/>
        </div>
        <HSingleDatePickerCalendar>
          <template #table_head>
            <tr>
              <th
                  v-for="(day, index) in slotProps.dayFormat"
                  :key="\`day_\${index}\`"
              >
                {{ day }}
              </th>
            </tr>
          </template>
          <template #table_body>
            <tr
                v-for="(week, index) in slotProps.monthDates"
                :key="\`week_\${index}\`"
            >
              <td
                  v-for="(dateInfo, index) in week"
                  :key="\`date_\${index}\`"
                  :class="{
                  is_active: dateInfo && dateInfo.isActive,
                  is_current: dateInfo && dateInfo.isCurrentDate,
                  in_range: dateInfo && dateInfo.inRange,
                  is_active_start: dateInfo && dateInfo.isStartDate,
                  is_active_end: dateInfo && dateInfo.isEndDate,
                }"
              >
                <template v-if="dateInfo">
                  <HSingleDatePickerCalendarDateButton
                      :value="\`\${dateInfo.year}.\${
                      dateInfo.month
                    }.\${dateInfo.date.padStart(2, '0')}\`"
                      :disabled="dateInfo && dateInfo.isDisabled"
                  >
                    {{ dateInfo.date }}
                  </HSingleDatePickerCalendarDateButton>
                </template>
              </td>
            </tr>
          </template>
        </HSingleDatePickerCalendar>
      </HSingleDatePickerCalendarArea>
      <!-- 월 달력 -->
      <HSingleDatePickerCalendarMonthArea
          :is-active="slotProps.isActiveMonthCalendar"
      >
        <div>
          <HSingleDatePickerMonthYearButton>
            {{ String(slotProps.yearForMonthCalendar) }}
          </HSingleDatePickerMonthYearButton>
          <HSingleDatePickerMonthPrevButton style="margin-left: 8px"/>
          <HSingleDatePickerMonthNextButton/>
        </div>
        <HSingleDatePickerCalendarMonth>
          <template #table_body>
            <tr
                v-for="(monthInfos, index) in slotProps.months"
                :key="\`months_\${index}\`"
            >
              <td
                  v-for="(monthInfo, index) in monthInfos"
                  :key="\`month_\${index}\`"
                  :class="{
                  is_current: monthInfo.isCurrentMonth,
                  in_range: monthInfo.inRange,
                  is_active_start: monthInfo.isStartMonth,
                  is_active_end: monthInfo.isEndMonth,
                }"
              >
                <HSingleDatePickerCalendarMonthButton
                    :value="\`\${monthInfo.year}.\${monthInfo.month.padStart(
                    2,
                    '0'
                  )}\`"
                    :disabled="monthInfo.isDisabled"
                >
                  {{ monthInfo.month }}
                </HSingleDatePickerCalendarMonthButton>
              </td>
            </tr>
          </template>
        </HSingleDatePickerCalendarMonth>
      </HSingleDatePickerCalendarMonthArea>
      <!-- 연도 달력 -->
      <HSingleDatePickerCalendarYearArea
          :is-active="slotProps.isActiveYearCalendar"
      >
        <div>
          <span
              style="
              display: inline-block;
              font-size: 14px;
              color: #171717;
              font-weight: 700;
            "
          >
            {{ String(slotProps.startYear) }}
            -
            {{ String(slotProps.endYear) }}
          </span>
          <HSingleDatePickerYearPrevButton style="margin-left: 8px"/>
          <HSingleDatePickerYearNextButton/>
        </div>
        <HSingleDatePickerCalendarYear>
          <template #table_body>
            <tr
                v-for="(yearInfos, index) in slotProps.years"
                :key="\`years_\${index}\`"
            >
              <td
                  v-for="(yearInfo, index) in yearInfos"
                  :key="\`year_\${index}\`"
                  :class="{
                  is_current: yearInfo.isCurrentYear,
                  in_range: yearInfo.inRange,
                  is_active_start: yearInfo.isStartYear,
                  is_active_end: yearInfo.isEndYear,
                }"
              >
                <HSingleDatePickerCalendarYearButton
                    :value="yearInfo.year"
                    :disabled="yearInfo.isDisabled"
                >
                  {{ yearInfo.year }}
                </HSingleDatePickerCalendarYearButton>
              </td>
            </tr>
          </template>
        </HSingleDatePickerCalendarYear>
      </HSingleDatePickerCalendarYearArea>
    </HSingleDatePickerArea>
    <span class="range"></span>
    <!-- 달력 컴포넌트 -->
    <!-- v-model="endDate" -->
    <!-- range 컴포넌트를 사용할 때, disabled 날짜 범위를 여러개 적용하고싶을 때, 아래와 같이 spread 연산자 사용하면 여러 disabled 범위 적용 가능 -->
    <HSingleDatePickerArea
        #default="slotProps"
        type="type1"
        :model-value="rangeSlotProps.endDate"
        :disabled-dates-range="[...rangeSlotProps.endDisabledDatesRange]"
        range-type="endDate"
    >
      <HSingleDatePickerInput/>
      <!-- 달력 -->
      <HSingleDatePickerCalendarArea :is-active="slotProps.isActiveCalendar">
        <div>
          <HSingleDatePickerYearButton>
            {{ String(slotProps.nowYear) }}
          </HSingleDatePickerYearButton>
          <HSingleDatePickerMonthButton>
            .{{ String(slotProps.nowMonth).padStart(2, "0") }}
          </HSingleDatePickerMonthButton>
          <HSingleDatePickerPrevButton style="margin-left: 8px"/>
          <HSingleDatePickerNextButton style="margin-left: -1px"/>
        </div>
        <HSingleDatePickerCalendar>
          <template #table_head>
            <tr>
              <th
                  v-for="(day, index) in slotProps.dayFormat"
                  :key="\`day_\${index}\`"
              >
                {{ day }}
              </th>
            </tr>
          </template>
          <template #table_body>
            <tr
                v-for="(week, index) in slotProps.monthDates"
                :key="\`week_\${index}\`"
            >
              <td
                  v-for="(dateInfo, index) in week"
                  :key="\`date_\${index}\`"
                  :class="{
                  is_active: dateInfo && dateInfo.isActive,
                  is_current: dateInfo && dateInfo.isCurrentDate,
                  in_range: dateInfo && dateInfo.inRange,
                  is_active_start: dateInfo && dateInfo.isStartDate,
                  is_active_end: dateInfo && dateInfo.isEndDate,
                }"
              >
                <template v-if="dateInfo">
                  <HSingleDatePickerCalendarDateButton
                      :value="\`\${dateInfo.year}.\${
                      dateInfo.month
                    }.\${dateInfo.date.padStart(2, '0')}\`"
                      :disabled="dateInfo && dateInfo.isDisabled"
                  >
                    {{ dateInfo.date }}
                  </HSingleDatePickerCalendarDateButton>
                </template>
              </td>
            </tr>
          </template>
        </HSingleDatePickerCalendar>
      </HSingleDatePickerCalendarArea>
      <!-- 월 달력 -->
      <HSingleDatePickerCalendarMonthArea
          :is-active="slotProps.isActiveMonthCalendar"
      >
        <div>
          <HSingleDatePickerMonthYearButton>
            {{ String(slotProps.yearForMonthCalendar) }}
          </HSingleDatePickerMonthYearButton>
          <HSingleDatePickerMonthPrevButton style="margin-left: 8px"/>
          <HSingleDatePickerMonthNextButton/>
        </div>
        <HSingleDatePickerCalendarMonth>
          <template #table_body>
            <tr
                v-for="(monthInfos, index) in slotProps.months"
                :key="\`months_\${index}\`"
            >
              <td
                  v-for="(monthInfo, index) in monthInfos"
                  :key="\`month_\${index}\`"
                  :class="{
                  is_current: monthInfo.isCurrentMonth,
                  in_range: monthInfo.inRange,
                  is_active_start: monthInfo.isStartMonth,
                  is_active_end: monthInfo.isEndMonth,
                }"
              >
                <HSingleDatePickerCalendarMonthButton
                    :value="\`\${monthInfo.year}.\${monthInfo.month.padStart(
                    2,
                    '0'
                  )}\`"
                    :disabled="monthInfo.isDisabled"
                >
                  {{ monthInfo.month }}
                </HSingleDatePickerCalendarMonthButton>
              </td>
            </tr>
          </template>
        </HSingleDatePickerCalendarMonth>
      </HSingleDatePickerCalendarMonthArea>
      <!-- 연도 달력 -->
      <HSingleDatePickerCalendarYearArea
          :is-active="slotProps.isActiveYearCalendar"
      >
        <div>
          <span
              style="
              display: inline-block;
              font-size: 14px;
              color: #171717;
              font-weight: 700;
            "
          >
            {{ String(slotProps.startYear) }}
            -
            {{ String(slotProps.endYear) }}
          </span>
          <HSingleDatePickerYearPrevButton style="margin-left: 8px"/>
          <HSingleDatePickerYearNextButton/>
        </div>
        <HSingleDatePickerCalendarYear>
          <template #table_body>
            <tr
                v-for="(yearInfos, index) in slotProps.years"
                :key="\`years_\${index}\`"
            >
              <td
                  v-for="(yearInfo, index) in yearInfos"
                  :key="\`year_\${index}\`"
                  :class="{
                  is_current: yearInfo.isCurrentYear,
                  in_range: yearInfo.inRange,
                  is_active_start: yearInfo.isStartYear,
                  is_active_end: yearInfo.isEndYear,
                }"
              >
                <HSingleDatePickerCalendarYearButton
                    :value="yearInfo.year"
                    :disabled="yearInfo.isDisabled"
                >
                  {{ yearInfo.year }}
                </HSingleDatePickerCalendarYearButton>
              </td>
            </tr>
          </template>
        </HSingleDatePickerCalendarYear>
      </HSingleDatePickerCalendarYearArea>
    </HSingleDatePickerArea>
  </HSingleDatePickerRangeArea>
</template>

<style scoped lang="scss">

</style>
`,we={title:"headless-ui/h-single-date-picker",component:Ye,parameters:{docs:{description:{component:"달력 컴포넌트입니다."},source:{code:be}}},argTypes:{}},B={},Y={render:H=>({components:{HSingleDatePickerCase2:ie},setup(){return{args:H}},template:'<HSingleDatePickerCase2 v-bind="args" />'}),parameters:{docs:{description:{component:"두 번째 예시로서 `h-single-date-picker-case2` 컴포넌트를 보여줍니다."},source:{code:$e}}}};var Q,W,X;B.parameters={...B.parameters,docs:{...(Q=B.parameters)==null?void 0:Q.docs,source:{originalSource:"{}",...(X=(W=B.parameters)==null?void 0:W.docs)==null?void 0:X.source}}};var Z,ee,ne;Y.parameters={...Y.parameters,docs:{...(Z=Y.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: args => ({
    components: {
      HSingleDatePickerCase2
    },
    setup() {
      return {
        args
      };
    },
    template: \`<HSingleDatePickerCase2 v-bind="args" />\`
  }),
  parameters: {
    docs: {
      description: {
        component: '두 번째 예시로서 \`h-single-date-picker-case2\` 컴포넌트를 보여줍니다.'
      },
      source: {
        code: HSingleDatePickerCase2Source
      }
    }
  }
}`,...(ne=(ee=Y.parameters)==null?void 0:ee.docs)==null?void 0:ne.source}}};const Re=["Case1","Case2"];export{B as Case1,Y as Case2,Re as __namedExportsOrder,we as default};
