import{j as e}from"./jsx-runtime-CkxqCPlQ.js";import{r as ne}from"./index-DJO9vBfz.js";import{_ as $,V as y,T as Y,N as M,D as f,L as A,O as B,w as R,C as F,E,U as N,k as T,j as I,R as w,M as X,P as V,B as z,z as L,A as W,F as O,b as U,S as te,c as G}from"./headless-ui-react18.es-Cv6l8VMW.js";const ae=()=>{const[c,k]=ne.useState("2023.06.14");return e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:["선택된 날짜: ",c]}),e.jsx($,{selectedValue:c,disabledDatesRange:["~2024.06.10","2024.06.20~"],type:U.TYPE1,isDisabled:!1,updateSelectedValue:k,children:({isActiveCalendar:j,isActiveMonthCalendar:m,isActiveYearCalendar:P,dayFormat:_,monthDates:H,nowYear:v,nowMonth:o,months:g,years:h,startYear:D,endYear:x,yearForMonthCalendar:u})=>e.jsxs(e.Fragment,{children:[e.jsx(y,{}),j&&e.jsxs(Y,{style:{border:"1px solid #ccc",backgroundColor:"#fff"},children:[e.jsxs("div",{children:[e.jsx(M,{children:String(v)}),e.jsxs(f,{children:[".",String(o).padStart(2,"0")]}),e.jsx(A,{children:"이전"}),"/",e.jsx(B,{children:"다음"})]}),e.jsx(R,{childrenTableHead:e.jsx("tr",{children:_.map((i,s)=>e.jsx("th",{children:i},`day_${s}`))}),children:H.map((i,s)=>e.jsx("tr",{children:i.map((a,l)=>e.jsx("td",{className:`${a&&a.isActive?"is_active":""} ${a&&a.isCurrentDate?"is_current":""} ${a&&a.inRange?"in_range":""} ${a&&a.isStartDate?"is_active_start":""} ${a&&a.isEndDate?"is_active_end":""}`,children:a&&e.jsxs(F,{value:`${a.year}.${a.month}.${a.date.padStart(2,"0")}`,disabled:a&&a.isDisabled,children:[a.date," ",e.jsx("br",{}),a&&a.isDisabled?e.jsxs(e.Fragment,{children:['"disabled" ',e.jsx("br",{})]}):"",a&&a.isCurrentDate?e.jsxs(e.Fragment,{children:['"currentDate" ',e.jsx("br",{})]}):"",a&&a.isStartDate?e.jsxs(e.Fragment,{children:['"startDate" ',e.jsx("br",{})]}):"",a&&a.isEndDate?e.jsxs(e.Fragment,{children:['"endDate"',e.jsx("br",{})]}):"",a&&a.isActive?e.jsxs(e.Fragment,{children:['"active"',e.jsx("br",{})]}):"",a&&a.inRange?e.jsxs(e.Fragment,{children:['"inRange"',e.jsx("br",{})]}):""]})},`dateInfo_${l}`))},`week_${s}`))})]}),m&&e.jsxs(E,{style:{border:"1px solid #ccc",backgroundColor:"#fff"},children:[e.jsxs("div",{children:[e.jsx(N,{children:String(u)}),e.jsx(T,{children:"이전"}),"/",e.jsx(I,{children:"다음"})]}),e.jsx(w,{children:g.map((i,s)=>e.jsx("tr",{children:i.map((a,l)=>e.jsx("td",{className:`${a.isCurrentMonth?"is_current":""} ${a.inRange?"in_range":""} ${a.isStartMonth?"is_active_start":""} ${a.isEndMonth?"is_active_end":""}`,children:e.jsxs(X,{value:`${a.year}.${a.month.padStart(2,"0")}`,disabled:a.isDisabled,children:[a.month," ",e.jsx("br",{}),a.inRange?e.jsxs(e.Fragment,{children:['"inRange"',e.jsx("br",{})]}):"",a.isStartMonth?e.jsxs(e.Fragment,{children:['"startMonth"',e.jsx("br",{})]}):"",a.isEndMonth?e.jsxs(e.Fragment,{children:['"endMonth"',e.jsx("br",{})]}):"",a.isCurrentMonth?e.jsxs(e.Fragment,{children:['"currentMonth"',e.jsx("br",{})]}):"",a.isActive?e.jsxs(e.Fragment,{children:['"active"',e.jsx("br",{})]}):"",a.isDisabled?e.jsxs(e.Fragment,{children:['"disabled"',e.jsx("br",{})]}):""]})},`month_${l}`))},`months_${s}`))})]}),P&&e.jsxs(V,{style:{border:"1px solid #ccc",backgroundColor:"#fff"},children:[e.jsxs("div",{children:[e.jsxs("span",{style:{display:"inline-block",fontSize:"14px",color:"#333",fontWeight:"bold"},children:[D+""," ~ ",x+""]}),e.jsx(z,{children:"이전"}),"/",e.jsx(L,{children:"다음"})]}),e.jsx(W,{childrenTableBody:h.map((i,s)=>e.jsx("tr",{children:i.map((a,l)=>e.jsx("td",{className:`${a.isCurrentYear?"is_current":""} ${a.inRange?"in_range":""} ${a.isStartYear?"is_active_start":""} ${a.isEndYear?"is_active_end":""} ${a.isActive?"is_active":""} ${a.isDisabled?"is_disabled":""}`,children:e.jsxs(O,{value:a.year,disabled:a.isDisabled,children:[a.year," ",e.jsx("br",{}),a.inRange?e.jsxs(e.Fragment,{children:['"inRange"',e.jsx("br",{})]}):"",a.isStartYear?e.jsxs(e.Fragment,{children:['"startYear"',e.jsx("br",{})]}):"",a.isEndYear?e.jsxs(e.Fragment,{children:['"endYear"',e.jsx("br",{})]}):"",a.isCurrentYear?e.jsxs(e.Fragment,{children:['"currentYear"',e.jsx("br",{})]}):"",a.isDisabled?e.jsxs(e.Fragment,{children:['"disabled"',e.jsx("br",{})]}):"",a.isActive?e.jsxs(e.Fragment,{children:['"active"',e.jsx("br",{})]}):""]})},`year_${l}`))},`years_${s}`))})]})]})})]})};ae.__docgenInfo={description:"",methods:[],displayName:"HSingleDatePickerCase1"};const ie=`import {useState} from "react";
import {
    HSingleDatePickerArea,
    HSingleDatePickerInput,
    HSingleDatePickerCalendarArea,
    CALENDAR_TYPES,
    HSingleDatePickerYearButton,
    HSingleDatePickerMonthButton,
    HSingleDatePickerPrevButton,
    HSingleDatePickerNextButton,
    HSingleDatePickerCalendar,
    HSingleDatePickerCalendarDateButton,
    HSingleDatePickerCalendarMonthArea,
    HSingleDatePickerMonthYearButton,
    HSingleDatePickerMonthPrevButton,
    HSingleDatePickerMonthNextButton,
    HSingleDatePickerCalendarMonth,
    HSingleDatePickerCalendarMonthButton,
    HSingleDatePickerCalendarYearArea,
    HSingleDatePickerYearPrevButton,
    HSingleDatePickerYearNextButton,
    HSingleDatePickerCalendarYear,
    HSingleDatePickerCalendarYearButton,
} from 'headless-ui/react18'

const HSingleDatePickerCase1 = () => {
    const [startDate, setStartDate] = useState('2023.06.14');

    return (
        <>
            <p>선택된 날짜: {startDate}</p>
            <HSingleDatePickerArea selectedValue={startDate}
                                   disabledDatesRange={['~2024.06.10', '2024.06.20~']}
                                   type={CALENDAR_TYPES.TYPE1}
                                   isDisabled={false}
                                   updateSelectedValue={setStartDate}>
                {
                    ({
                         isActiveCalendar,
                         isActiveMonthCalendar,
                         isActiveYearCalendar,
                         dayFormat,
                         monthDates,
                         nowYear,
                         nowMonth,
                         months,
                         years,
                         startYear,
                         endYear,
                         // yearForYearCalendar,
                         yearForMonthCalendar,
                     }) => (
                        <>
                            <HSingleDatePickerInput/>
                            {
                                isActiveCalendar && (
                                    // 달력
                                    <HSingleDatePickerCalendarArea style={{border: '1px solid #ccc', backgroundColor: '#fff',}}>
                                        <div>
                                            <HSingleDatePickerYearButton>
                                                {String(nowYear)}
                                            </HSingleDatePickerYearButton>
                                            <HSingleDatePickerMonthButton>
                                                .{String(nowMonth).padStart(2, "0")}
                                            </HSingleDatePickerMonthButton>
                                            <HSingleDatePickerPrevButton>
                                                이전
                                            </HSingleDatePickerPrevButton>
                                            /
                                            <HSingleDatePickerNextButton>
                                                다음
                                            </HSingleDatePickerNextButton>
                                        </div>
                                        <HSingleDatePickerCalendar childrenTableHead={(
                                            <tr>
                                                {dayFormat.map((day, index) => (
                                                    <th key={\`day_\${index}\`}>{day}</th>
                                                ))}
                                            </tr>
                                        )}>
                                            {
                                                monthDates.map((week, index) => (
                                                    <tr key={\`week_\${index}\`}>
                                                        {week.map((dateInfo, index) => (
                                                            <td
                                                                key={\`dateInfo_\${index}\`}
                                                                className={\`\${(dateInfo && dateInfo.isActive) ? "is_active" : ""} \${dateInfo && dateInfo.isCurrentDate ? "is_current" : ""} \${dateInfo && dateInfo.inRange ? "in_range" : ""} \${dateInfo && dateInfo.isStartDate ? "is_active_start" : ""} \${dateInfo && dateInfo.isEndDate ? "is_active_end" : ""}\`}
                                                            >{
                                                                dateInfo && (
                                                                    <HSingleDatePickerCalendarDateButton
                                                                        value={\`\${dateInfo.year}.\${dateInfo.month}.\${dateInfo.date.padStart(2, '0')}\`}
                                                                        disabled={dateInfo && dateInfo.isDisabled}
                                                                    >
                                                                        {dateInfo.date} <br/>
                                                                        {dateInfo && dateInfo.isDisabled ? (<>"disabled" <br/></>) : ""}
                                                                        {dateInfo && dateInfo.isCurrentDate ? (<>"currentDate" <br/></>) : ""}
                                                                        {dateInfo && dateInfo.isStartDate ? (<>"startDate" <br/></>) : ""}
                                                                        {dateInfo && dateInfo.isEndDate ? (<>"endDate"<br/></>) : ""}
                                                                        {dateInfo && dateInfo.isActive ? (<>"active"<br/></>) : ""}
                                                                        {dateInfo && dateInfo.inRange ? (<>"inRange"<br/></>) : ""}
                                                                    </HSingleDatePickerCalendarDateButton>
                                                                )
                                                            }</td>
                                                        ))}
                                                    </tr>
                                                ))
                                            }
                                        </HSingleDatePickerCalendar>
                                    </HSingleDatePickerCalendarArea>
                                )
                            }
                            {
                                isActiveMonthCalendar && (
                                    // 월 달력
                                    <HSingleDatePickerCalendarMonthArea style={{border: '1px solid #ccc', backgroundColor: '#fff',}}>
                                        <div>
                                            <HSingleDatePickerMonthYearButton>
                                                {String(yearForMonthCalendar)}
                                            </HSingleDatePickerMonthYearButton>
                                            <HSingleDatePickerMonthPrevButton>
                                                이전
                                            </HSingleDatePickerMonthPrevButton>
                                            /
                                            <HSingleDatePickerMonthNextButton>
                                                다음
                                            </HSingleDatePickerMonthNextButton>
                                        </div>
                                        <HSingleDatePickerCalendarMonth>
                                            {
                                                months.map((monthInfos, index) => {
                                                    return (
                                                        <tr key={\`months_\${index}\`}>
                                                            {
                                                                monthInfos.map((monthInfo, index) => {
                                                                    return (
                                                                        <td key={\`month_\${index}\`}
                                                                            className={\`\${monthInfo.isCurrentMonth ? "is_current" : ""} \${monthInfo.inRange ? "in_range" : ""} \${monthInfo.isStartMonth ? "is_active_start" : ""} \${monthInfo.isEndMonth ? "is_active_end" : ""}\`}>
                                                                            <HSingleDatePickerCalendarMonthButton
                                                                                value={\`\${monthInfo.year}.\${monthInfo.month.padStart(2, '0')}\`}
                                                                                disabled={monthInfo.isDisabled}
                                                                            >
                                                                                {monthInfo.month} <br/>
                                                                                {monthInfo.inRange ? (<>"inRange"<br/></>) : ""}
                                                                                {monthInfo.isStartMonth ? (<>"startMonth"<br/></>) : ""}
                                                                                {monthInfo.isEndMonth ? (<>"endMonth"<br/></>) : ""}
                                                                                {monthInfo.isCurrentMonth ? (<>"currentMonth"<br/></>) : ""}
                                                                                {monthInfo.isActive ? (<>"active"<br/></>) : ""}
                                                                                {monthInfo.isDisabled ? (<>"disabled"<br/></>) : ""}
                                                                            </HSingleDatePickerCalendarMonthButton>
                                                                        </td>
                                                                    )
                                                                })
                                                            }
                                                        </tr>
                                                    )
                                                })
                                            }
                                        </HSingleDatePickerCalendarMonth>
                                    </HSingleDatePickerCalendarMonthArea>
                                )
                            }
                            {
                                // 연도 달력
                                isActiveYearCalendar && (
                                    <HSingleDatePickerCalendarYearArea style={{border: '1px solid #ccc', backgroundColor: '#fff',}}>
                                        <div>
                                        <span style={{
                                            display: 'inline-block',
                                            fontSize: '14px',
                                            color: '#333',
                                            fontWeight: 'bold',
                                        }}>
                                            {startYear + ''} ~ {endYear + ''}
                                        </span>
                                            <HSingleDatePickerYearPrevButton>
                                                이전
                                            </HSingleDatePickerYearPrevButton>
                                            /
                                            <HSingleDatePickerYearNextButton>
                                                다음
                                            </HSingleDatePickerYearNextButton>
                                        </div>
                                        <HSingleDatePickerCalendarYear childrenTableBody={
                                            years.map((yearInfos, index) => {
                                                return (
                                                    <tr key={\`years_\${index}\`}>
                                                        {
                                                            yearInfos.map((yearInfo, index) => {
                                                                return (
                                                                    <td key={\`year_\${index}\`}
                                                                        className={\`\${yearInfo.isCurrentYear ? "is_current" : ""} \${yearInfo.inRange ? "in_range" : ""} \${yearInfo.isStartYear ? "is_active_start" : ""} \${yearInfo.isEndYear ? "is_active_end" : ""} \${yearInfo.isActive ? "is_active" : ""} \${yearInfo.isDisabled ? "is_disabled" : ""}\`}>
                                                                        <HSingleDatePickerCalendarYearButton value={yearInfo.year} disabled={yearInfo.isDisabled}>
                                                                            {yearInfo.year} <br/>
                                                                            {yearInfo.inRange ? (<>"inRange"<br/></>) : ""}
                                                                            {yearInfo.isStartYear ? (<>"startYear"<br/></>) : ""}
                                                                            {yearInfo.isEndYear ? (<>"endYear"<br/></>) : ""}
                                                                            {yearInfo.isCurrentYear ? (<>"currentYear"<br/></>) : ""}
                                                                            {yearInfo.isDisabled ? (<>"disabled"<br/></>) : ""}
                                                                            {yearInfo.isActive ? (<>"active"<br/></>) : ""}
                                                                        </HSingleDatePickerCalendarYearButton>
                                                                    </td>
                                                                )
                                                            })
                                                        }
                                                    </tr>
                                                )
                                            })
                                        }/>
                                    </HSingleDatePickerCalendarYearArea>
                                )
                            }
                        </>
                    )
                }
            </HSingleDatePickerArea>
        </>
    )
}

export default HSingleDatePickerCase1;
`,re=()=>{const[c,k]=ne.useState(["2024.10.01","2024.10.10"]);return e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:["선택된 날짜: ",c.join(" ~ ")]}),e.jsx(te,{selectedValue:c,updateSelectedValue:k,children:({startDate:j,endDate:m,startDisableDatesRange:P,endDisabledDatesRange:_,setStartDate:H,setEndDate:v})=>e.jsxs(e.Fragment,{children:[e.jsx($,{type:U.TYPE1,selectedValue:j,disabledDatesRange:[...P],rangeType:G.START_DATE,updateSelectedValue:H,children:({isActiveCalendar:o,isActiveMonthCalendar:g,isActiveYearCalendar:h,dayFormat:D,monthDates:x,nowYear:u,nowMonth:i,months:s,years:a,startYear:l,endYear:C,yearForMonthCalendar:p})=>e.jsxs(e.Fragment,{children:[e.jsx(y,{}),o&&e.jsxs(Y,{style:{border:"1px solid #ccc",backgroundColor:"#fff"},children:[e.jsxs("div",{children:[e.jsx(M,{children:String(u)}),e.jsxs(f,{children:[".",String(i).padStart(2,"0")]}),e.jsx(A,{children:"이전"}),"/",e.jsx(B,{children:"다음"})]}),e.jsx(R,{childrenTableHead:e.jsx("tr",{children:D.map((r,t)=>e.jsx("th",{children:r},`day_${t}`))}),children:x.map((r,t)=>e.jsx("tr",{children:r.map((n,d)=>e.jsx("td",{className:`${n&&n.isActive?"is_active":""} ${n&&n.isCurrentDate?"is_current":""} ${n&&n.inRange?"in_range":""} ${n&&n.isStartDate?"is_active_start":""} ${n&&n.isEndDate?"is_active_end":""}`,children:n&&e.jsxs(F,{value:`${n.year}.${n.month}.${n.date.padStart(2,"0")}`,disabled:n&&n.isDisabled,children:[n.date," ",e.jsx("br",{}),n&&n.isDisabled?e.jsxs(e.Fragment,{children:['"disabled" ',e.jsx("br",{})]}):"",n&&n.isCurrentDate?e.jsxs(e.Fragment,{children:['"currentDate" ',e.jsx("br",{})]}):"",n&&n.isStartDate?e.jsxs(e.Fragment,{children:['"startDate" ',e.jsx("br",{})]}):"",n&&n.isEndDate?e.jsxs(e.Fragment,{children:['"endDate"',e.jsx("br",{})]}):"",n&&n.isActive?e.jsxs(e.Fragment,{children:['"active"',e.jsx("br",{})]}):"",n&&n.inRange?e.jsxs(e.Fragment,{children:['"inRange"',e.jsx("br",{})]}):""]})},`date_${d}`))},`week_${t}`))})]}),g&&e.jsxs(E,{style:{border:"1px solid #ccc",backgroundColor:"#fff"},children:[e.jsxs("div",{children:[e.jsx(N,{children:String(p)}),e.jsx(T,{children:"이전"}),"/",e.jsx(I,{children:"다음"})]}),e.jsx(w,{children:s.map((r,t)=>e.jsx("tr",{children:r.map((n,d)=>e.jsx("td",{className:`${n.isCurrentMonth?"is_current":""} ${n.inRange?"in_range":""} ${n.isStartMonth?"is_active_start":""} ${n.isEndMonth?"is_active_end":""}`,children:e.jsxs(X,{value:`${n.year}.${n.month.padStart(2,"0")}`,disabled:n.isDisabled,children:[n.month," ",e.jsx("br",{}),n.inRange?e.jsxs(e.Fragment,{children:['"inRange"',e.jsx("br",{})]}):"",n.isStartMonth?e.jsxs(e.Fragment,{children:['"startMonth"',e.jsx("br",{})]}):"",n.isEndMonth?e.jsxs(e.Fragment,{children:['"endMonth"',e.jsx("br",{})]}):"",n.isCurrentMonth?e.jsxs(e.Fragment,{children:['"currentMonth"',e.jsx("br",{})]}):"",n.isActive?e.jsxs(e.Fragment,{children:['"active"',e.jsx("br",{})]}):"",n.isDisabled?e.jsxs(e.Fragment,{children:['"disabled"',e.jsx("br",{})]}):""]})},`month_${d}`))},`months_${t}`))})]}),h&&e.jsxs(V,{style:{border:"1px solid #ccc",backgroundColor:"#fff"},children:[e.jsxs("div",{children:[e.jsxs("span",{style:{display:"inline-block",fontSize:"14px",color:"#333",fontWeight:"bold"},children:[l," ~ ",C]}),e.jsx(z,{children:"이전"}),"/",e.jsx(L,{children:"다음"})]}),e.jsx(W,{childrenTableBody:a.map((r,t)=>e.jsx("tr",{children:r.map((n,d)=>e.jsx("td",{className:`${n.isCurrentYear?"is_current":""} ${n.inRange?"in_range":""} ${n.isStartYear?"is_active_start":""} ${n.isEndYear?"is_active_end":""}`,children:e.jsxs(O,{value:n.year,disabled:n.isDisabled,children:[n.year," ",e.jsx("br",{}),n.inRange?e.jsxs(e.Fragment,{children:['"inRange"',e.jsx("br",{})]}):"",n.isStartYear?e.jsxs(e.Fragment,{children:['"startYear"',e.jsx("br",{})]}):"",n.isEndYear?e.jsxs(e.Fragment,{children:['"endYear"',e.jsx("br",{})]}):"",n.isCurrentYear?e.jsxs(e.Fragment,{children:['"currentYear"',e.jsx("br",{})]}):"",n.isDisabled?e.jsxs(e.Fragment,{children:['"disabled"',e.jsx("br",{})]}):"",n.isActive?e.jsxs(e.Fragment,{children:['"active"',e.jsx("br",{})]}):""]})},`year_${d}`))},`years_${t}`))})]})]})}),e.jsx("span",{className:"range"}),e.jsx($,{type:U.TYPE1,selectedValue:m,disabledDatesRange:[..._],rangeType:G.END_DATE,updateSelectedValue:v,children:({isActiveCalendar:o,isActiveMonthCalendar:g,isActiveYearCalendar:h,dayFormat:D,monthDates:x,nowYear:u,nowMonth:i,months:s,years:a,startYear:l,endYear:C,yearForMonthCalendar:p})=>e.jsxs(e.Fragment,{children:[e.jsx(y,{}),o&&e.jsxs(Y,{style:{border:"1px solid #ccc",backgroundColor:"#fff"},children:[e.jsxs("div",{children:[e.jsx(M,{children:String(u)}),e.jsxs(f,{children:[".",String(i).padStart(2,"0")]}),e.jsx(A,{children:"이전"}),"/",e.jsx(B,{children:"다음"})]}),e.jsx(R,{childrenTableHead:e.jsx("tr",{children:D.map((r,t)=>e.jsx("th",{children:r},`day_${t}`))}),children:x.map((r,t)=>e.jsx("tr",{children:r.map((n,d)=>e.jsx("td",{className:`${n&&n.isActive?"is_active":""} ${n&&n.isCurrentDate?"is_current":""} ${n&&n.inRange?"in_range":""} ${n&&n.isStartDate?"is_active_start":""} ${n&&n.isEndDate?"is_active_end":""}`,children:n&&e.jsxs(F,{value:`${n.year}.${n.month}.${n.date.padStart(2,"0")}`,disabled:n&&n.isDisabled,children:[n.date," ",e.jsx("br",{}),n&&n.isDisabled?e.jsxs(e.Fragment,{children:['"disabled" ',e.jsx("br",{})]}):"",n&&n.isCurrentDate?e.jsxs(e.Fragment,{children:['"currentDate" ',e.jsx("br",{})]}):"",n&&n.isStartDate?e.jsxs(e.Fragment,{children:['"startDate" ',e.jsx("br",{})]}):"",n&&n.isEndDate?e.jsxs(e.Fragment,{children:['"endDate"',e.jsx("br",{})]}):"",n&&n.isActive?e.jsxs(e.Fragment,{children:['"active"',e.jsx("br",{})]}):"",n&&n.inRange?e.jsxs(e.Fragment,{children:['"inRange"',e.jsx("br",{})]}):""]})},`date_${d}`))},`week_${t}`))})]}),g&&e.jsxs(E,{style:{border:"1px solid #ccc",backgroundColor:"#fff"},children:[e.jsxs("div",{children:[e.jsx(N,{children:String(p)}),e.jsx(T,{children:"이전"}),"/",e.jsx(I,{children:"다음"})]}),e.jsx(w,{children:s.map((r,t)=>e.jsx("tr",{children:r.map((n,d)=>e.jsx("td",{className:`${n.isCurrentMonth?"is_current":""} ${n.inRange?"in_range":""} ${n.isStartMonth?"is_active_start":""} ${n.isEndMonth?"is_active_end":""}`,children:e.jsxs(X,{value:`${n.year}.${n.month.padStart(2,"0")}`,disabled:n.isDisabled,children:[n.month," ",e.jsx("br",{}),n.inRange?e.jsxs(e.Fragment,{children:['"inRange"',e.jsx("br",{})]}):"",n.isStartMonth?e.jsxs(e.Fragment,{children:['"startMonth"',e.jsx("br",{})]}):"",n.isEndMonth?e.jsxs(e.Fragment,{children:['"endMonth"',e.jsx("br",{})]}):"",n.isCurrentMonth?e.jsxs(e.Fragment,{children:['"currentMonth"',e.jsx("br",{})]}):"",n.isActive?e.jsxs(e.Fragment,{children:['"active"',e.jsx("br",{})]}):"",n.isDisabled?e.jsxs(e.Fragment,{children:['"disabled"',e.jsx("br",{})]}):""]})},`month_${d}`))},`months_${t}`))})]}),h&&e.jsxs(V,{style:{border:"1px solid #ccc",backgroundColor:"#fff"},children:[e.jsxs("div",{children:[e.jsxs("span",{style:{display:"inline-block",fontSize:"14px",color:"#333",fontWeight:"bold"},children:[l," ~ ",C]}),e.jsx(z,{children:"이전"}),"/",e.jsx(L,{children:"다음"})]}),e.jsx(W,{childrenTableBody:a.map((r,t)=>e.jsx("tr",{children:r.map((n,d)=>e.jsx("td",{className:`${n.isCurrentYear?"is_current":""} ${n.inRange?"in_range":""} ${n.isStartYear?"is_active_start":""} ${n.isEndYear?"is_active_end":""}`,children:e.jsxs(O,{value:n.year,disabled:n.isDisabled,children:[n.year," ",e.jsx("br",{}),n.inRange?e.jsxs(e.Fragment,{children:['"inRange"',e.jsx("br",{})]}):"",n.isStartYear?e.jsxs(e.Fragment,{children:['"startYear"',e.jsx("br",{})]}):"",n.isEndYear?e.jsxs(e.Fragment,{children:['"endYear"',e.jsx("br",{})]}):"",n.isCurrentYear?e.jsxs(e.Fragment,{children:['"currentYear"',e.jsx("br",{})]}):"",n.isDisabled?e.jsxs(e.Fragment,{children:['"disabled"',e.jsx("br",{})]}):"",n.isActive?e.jsxs(e.Fragment,{children:['"active"',e.jsx("br",{})]}):""]})},`year_${d}`))},`years_${t}`))})]})]})})]})})]})};re.__docgenInfo={description:"",methods:[],displayName:"HSingleDatePickerCase2"};const se=`import {useState} from "react";
import {
    HSingleDatePickerArea,
    HSingleDatePickerInput,
    HSingleDatePickerCalendarArea,
    CALENDAR_TYPES,
    HSingleDatePickerYearButton,
    HSingleDatePickerMonthButton,
    HSingleDatePickerPrevButton,
    HSingleDatePickerNextButton,
    HSingleDatePickerCalendar,
    HSingleDatePickerCalendarDateButton,
    HSingleDatePickerCalendarMonthArea,
    HSingleDatePickerMonthYearButton,
    HSingleDatePickerMonthPrevButton,
    HSingleDatePickerMonthNextButton,
    HSingleDatePickerCalendarMonth,
    HSingleDatePickerCalendarMonthButton,
    HSingleDatePickerCalendarYearArea,
    HSingleDatePickerYearPrevButton,
    HSingleDatePickerYearNextButton,
    HSingleDatePickerCalendarYear,
    HSingleDatePickerCalendarYearButton,
    HSingleDatePickerRangeArea,
    DATE_AREA_TYPE,
} from 'headless-ui/react18'

const HSingleDatePickerCase2 = () => {
    const [rangeDate, setRangeDate] = useState(["2024.10.01", "2024.10.10"]);

    return (
        <>
            <p>선택된 날짜: {rangeDate.join(" ~ ")}</p>
            <HSingleDatePickerRangeArea selectedValue={rangeDate} updateSelectedValue={setRangeDate}>
                {
                    ({
                         startDate,
                         endDate,
                         startDisableDatesRange,
                         endDisabledDatesRange,
                         setStartDate,
                         setEndDate,
                     }) => (
                        <>
                            <HSingleDatePickerArea
                                type={CALENDAR_TYPES.TYPE1}
                                selectedValue={startDate}
                                disabledDatesRange={[...startDisableDatesRange]}
                                rangeType={DATE_AREA_TYPE.START_DATE}
                                updateSelectedValue={setStartDate}
                            >
                                {
                                    ({
                                         isActiveCalendar,
                                         isActiveMonthCalendar,
                                         isActiveYearCalendar,
                                         dayFormat,
                                         monthDates,
                                         nowYear,
                                         nowMonth,
                                         months,
                                         years,
                                         startYear,
                                         endYear,
                                         yearForMonthCalendar,
                                     }) => (
                                        <>
                                            <HSingleDatePickerInput/>
                                            {
                                                // 달력
                                                isActiveCalendar && (
                                                    <HSingleDatePickerCalendarArea style={{border: '1px solid #ccc', backgroundColor: '#fff',}}>
                                                        <div>
                                                            <HSingleDatePickerYearButton>
                                                                {String(nowYear)}
                                                            </HSingleDatePickerYearButton>
                                                            <HSingleDatePickerMonthButton>
                                                                .{String(nowMonth).padStart(2, "0")}
                                                            </HSingleDatePickerMonthButton>
                                                            <HSingleDatePickerPrevButton>
                                                                이전
                                                            </HSingleDatePickerPrevButton>
                                                            /
                                                            <HSingleDatePickerNextButton>
                                                                다음
                                                            </HSingleDatePickerNextButton>
                                                        </div>
                                                        <HSingleDatePickerCalendar childrenTableHead={
                                                            <tr>
                                                                {dayFormat.map((day, index) => (
                                                                    <th key={\`day_\${index}\`}>{day}</th>
                                                                ))}
                                                            </tr>
                                                        }>
                                                            {
                                                                monthDates.map((week, index) => {
                                                                    return (
                                                                        <tr key={\`week_\${index}\`}>
                                                                            {
                                                                                week.map((dateInfo, index) => {
                                                                                    return (
                                                                                        <td key={\`date_\${index}\`}
                                                                                            className={\`\${dateInfo && dateInfo.isActive ? "is_active" : ""} \${dateInfo && dateInfo.isCurrentDate ? "is_current" : ""} \${dateInfo && dateInfo.inRange ? "in_range" : ""} \${dateInfo && dateInfo.isStartDate ? "is_active_start" : ""} \${dateInfo && dateInfo.isEndDate ? "is_active_end" : ""}\`}>
                                                                                            {dateInfo && (
                                                                                                <HSingleDatePickerCalendarDateButton
                                                                                                    value={\`\${dateInfo.year}.\${dateInfo.month}.\${dateInfo.date.padStart(2, '0')}\`}
                                                                                                    disabled={dateInfo && dateInfo.isDisabled}
                                                                                                >
                                                                                                    {dateInfo.date} <br/>
                                                                                                    {dateInfo && dateInfo.isDisabled ? (<>"disabled" <br/></>) : ""}
                                                                                                    {dateInfo && dateInfo.isCurrentDate ? (<>"currentDate" <br/></>) : ""}
                                                                                                    {dateInfo && dateInfo.isStartDate ? (<>"startDate" <br/></>) : ""}
                                                                                                    {dateInfo && dateInfo.isEndDate ? (<>"endDate"<br/></>) : ""}
                                                                                                    {dateInfo && dateInfo.isActive ? (<>"active"<br/></>) : ""}
                                                                                                    {dateInfo && dateInfo.inRange ? (<>"inRange"<br/></>) : ""}
                                                                                                </HSingleDatePickerCalendarDateButton>
                                                                                            )}
                                                                                        </td>
                                                                                    )
                                                                                })
                                                                            }
                                                                        </tr>
                                                                    )
                                                                })
                                                            }
                                                        </HSingleDatePickerCalendar>
                                                    </HSingleDatePickerCalendarArea>
                                                )
                                            }
                                            {
                                                // 월 달력
                                                isActiveMonthCalendar && (
                                                    <HSingleDatePickerCalendarMonthArea style={{border: '1px solid #ccc', backgroundColor: '#fff',}}>
                                                        <div>
                                                            <HSingleDatePickerMonthYearButton>
                                                                {String(yearForMonthCalendar)}
                                                            </HSingleDatePickerMonthYearButton>
                                                            <HSingleDatePickerMonthPrevButton>
                                                                이전
                                                            </HSingleDatePickerMonthPrevButton>
                                                            /
                                                            <HSingleDatePickerMonthNextButton>
                                                                다음
                                                            </HSingleDatePickerMonthNextButton>
                                                        </div>
                                                        <HSingleDatePickerCalendarMonth>
                                                            {months.map((monthInfos, index) => {
                                                                return (
                                                                    <tr key={\`months_\${index}\`}>
                                                                        {
                                                                            monthInfos.map((monthInfo, index) => {
                                                                                return (
                                                                                    <td key={\`month_\${index}\`}
                                                                                        className={\`\${monthInfo.isCurrentMonth ? "is_current" : ""} \${monthInfo.inRange ? "in_range" : ""} \${monthInfo.isStartMonth ? "is_active_start" : ""} \${monthInfo.isEndMonth ? "is_active_end" : ""}\`}>
                                                                                        <HSingleDatePickerCalendarMonthButton
                                                                                            value={\`\${monthInfo.year}.\${monthInfo.month.padStart(2, '0')}\`}
                                                                                            disabled={monthInfo.isDisabled}
                                                                                        >
                                                                                            {monthInfo.month} <br/>
                                                                                            {monthInfo.inRange ? (<>"inRange"<br/></>) : ""}
                                                                                            {monthInfo.isStartMonth ? (<>"startMonth"<br/></>) : ""}
                                                                                            {monthInfo.isEndMonth ? (<>"endMonth"<br/></>) : ""}
                                                                                            {monthInfo.isCurrentMonth ? (<>"currentMonth"<br/></>) : ""}
                                                                                            {monthInfo.isActive ? (<>"active"<br/></>) : ""}
                                                                                            {monthInfo.isDisabled ? (<>"disabled"<br/></>) : ""}
                                                                                        </HSingleDatePickerCalendarMonthButton>
                                                                                    </td>
                                                                                )
                                                                            })
                                                                        }
                                                                    </tr>
                                                                )
                                                            })}
                                                        </HSingleDatePickerCalendarMonth>
                                                    </HSingleDatePickerCalendarMonthArea>
                                                )
                                            }
                                            {
                                                // 연도 달력
                                                isActiveYearCalendar && (
                                                    <HSingleDatePickerCalendarYearArea style={{border: '1px solid #ccc', backgroundColor: '#fff',}}>
                                                        <div>
                                                        <span style={{
                                                            display: "inline-block",
                                                            fontSize: "14px",
                                                            color: "#333",
                                                            fontWeight: "bold",
                                                        }}>
                                                            {startYear} ~ {endYear}
                                                        </span>
                                                            <HSingleDatePickerYearPrevButton>
                                                                이전
                                                            </HSingleDatePickerYearPrevButton>
                                                            /
                                                            <HSingleDatePickerYearNextButton>
                                                                다음
                                                            </HSingleDatePickerYearNextButton>
                                                        </div>
                                                        <HSingleDatePickerCalendarYear
                                                            childrenTableBody={years.map((yearInfos, index) => {
                                                                return (
                                                                    <tr key={\`years_\${index}\`}>
                                                                        {
                                                                            yearInfos.map((yearInfo, index) => {
                                                                                return (
                                                                                    <td key={\`year_\${index}\`}
                                                                                        className={\`\${yearInfo.isCurrentYear ? "is_current" : ""} \${yearInfo.inRange ? "in_range" : ""} \${yearInfo.isStartYear ? "is_active_start" : ""} \${yearInfo.isEndYear ? "is_active_end" : ""}\`}>
                                                                                        <HSingleDatePickerCalendarYearButton
                                                                                            value={yearInfo.year}
                                                                                            disabled={yearInfo.isDisabled}
                                                                                        >
                                                                                            {yearInfo.year} <br/>
                                                                                            {yearInfo.inRange ? (<>"inRange"<br/></>) : ""}
                                                                                            {yearInfo.isStartYear ? (<>"startYear"<br/></>) : ""}
                                                                                            {yearInfo.isEndYear ? (<>"endYear"<br/></>) : ""}
                                                                                            {yearInfo.isCurrentYear ? (<>"currentYear"<br/></>) : ""}
                                                                                            {yearInfo.isDisabled ? (<>"disabled"<br/></>) : ""}
                                                                                            {yearInfo.isActive ? (<>"active"<br/></>) : ""}
                                                                                        </HSingleDatePickerCalendarYearButton>
                                                                                    </td>
                                                                                )
                                                                            })
                                                                        }
                                                                    </tr>
                                                                )
                                                            })}>
                                                        </HSingleDatePickerCalendarYear>
                                                    </HSingleDatePickerCalendarYearArea>
                                                )
                                            }
                                        </>
                                    )
                                }
                            </HSingleDatePickerArea>
                            <span className="range"></span>
                            <HSingleDatePickerArea
                                type={CALENDAR_TYPES.TYPE1}
                                selectedValue={endDate}
                                disabledDatesRange={[...endDisabledDatesRange]}
                                rangeType={DATE_AREA_TYPE.END_DATE}
                                updateSelectedValue={setEndDate}
                            >
                                {
                                    ({
                                         isActiveCalendar,
                                         isActiveMonthCalendar,
                                         isActiveYearCalendar,
                                         dayFormat,
                                         monthDates,
                                         nowYear,
                                         nowMonth,
                                         months,
                                         years,
                                         startYear,
                                         endYear,
                                         yearForMonthCalendar,
                                     }) => (
                                        <>
                                            <HSingleDatePickerInput/>
                                            {
                                                // 달력
                                                isActiveCalendar && (
                                                    <HSingleDatePickerCalendarArea style={{border: '1px solid #ccc', backgroundColor: '#fff',}}>
                                                        <div>
                                                            <HSingleDatePickerYearButton>
                                                                {String(nowYear)}
                                                            </HSingleDatePickerYearButton>
                                                            <HSingleDatePickerMonthButton>
                                                                .{String(nowMonth).padStart(2, "0")}
                                                            </HSingleDatePickerMonthButton>
                                                            <HSingleDatePickerPrevButton>
                                                                이전
                                                            </HSingleDatePickerPrevButton>
                                                            /
                                                            <HSingleDatePickerNextButton>
                                                                다음
                                                            </HSingleDatePickerNextButton>
                                                        </div>
                                                        <HSingleDatePickerCalendar childrenTableHead={
                                                            <tr>
                                                                {dayFormat.map((day, index) => (
                                                                    <th key={\`day_\${index}\`}>{day}</th>
                                                                ))}
                                                            </tr>
                                                        }>
                                                            {
                                                                monthDates.map((week, index) => {
                                                                    return (
                                                                        <tr key={\`week_\${index}\`}>
                                                                            {
                                                                                week.map((dateInfo, index) => {
                                                                                    return (
                                                                                        <td key={\`date_\${index}\`}
                                                                                            className={\`\${dateInfo && dateInfo.isActive ? "is_active" : ""} \${dateInfo && dateInfo.isCurrentDate ? "is_current" : ""} \${dateInfo && dateInfo.inRange ? "in_range" : ""} \${dateInfo && dateInfo.isStartDate ? "is_active_start" : ""} \${dateInfo && dateInfo.isEndDate ? "is_active_end" : ""}\`}>
                                                                                            {dateInfo && (
                                                                                                <HSingleDatePickerCalendarDateButton
                                                                                                    value={\`\${dateInfo.year}.\${dateInfo.month}.\${dateInfo.date.padStart(2, '0')}\`}
                                                                                                    disabled={dateInfo && dateInfo.isDisabled}
                                                                                                >
                                                                                                    {dateInfo.date} <br/>
                                                                                                    {dateInfo && dateInfo.isDisabled ? (<>"disabled" <br/></>) : ""}
                                                                                                    {dateInfo && dateInfo.isCurrentDate ? (<>"currentDate" <br/></>) : ""}
                                                                                                    {dateInfo && dateInfo.isStartDate ? (<>"startDate" <br/></>) : ""}
                                                                                                    {dateInfo && dateInfo.isEndDate ? (<>"endDate"<br/></>) : ""}
                                                                                                    {dateInfo && dateInfo.isActive ? (<>"active"<br/></>) : ""}
                                                                                                    {dateInfo && dateInfo.inRange ? (<>"inRange"<br/></>) : ""}
                                                                                                </HSingleDatePickerCalendarDateButton>
                                                                                            )}
                                                                                        </td>
                                                                                    )
                                                                                })
                                                                            }
                                                                        </tr>
                                                                    )
                                                                })
                                                            }
                                                        </HSingleDatePickerCalendar>
                                                    </HSingleDatePickerCalendarArea>
                                                )
                                            }
                                            {
                                                // 월 달력
                                                isActiveMonthCalendar && (
                                                    <HSingleDatePickerCalendarMonthArea style={{border: '1px solid #ccc', backgroundColor: '#fff',}}>
                                                        <div>
                                                            <HSingleDatePickerMonthYearButton>
                                                                {String(yearForMonthCalendar)}
                                                            </HSingleDatePickerMonthYearButton>
                                                            <HSingleDatePickerMonthPrevButton>
                                                                이전
                                                            </HSingleDatePickerMonthPrevButton>
                                                            /
                                                            <HSingleDatePickerMonthNextButton>
                                                                다음
                                                            </HSingleDatePickerMonthNextButton>
                                                        </div>
                                                        <HSingleDatePickerCalendarMonth>
                                                            {months.map((monthInfos, index) => {
                                                                return (
                                                                    <tr key={\`months_\${index}\`}>
                                                                        {
                                                                            monthInfos.map((monthInfo, index) => {
                                                                                return (
                                                                                    <td key={\`month_\${index}\`}
                                                                                        className={\`\${monthInfo.isCurrentMonth ? "is_current" : ""} \${monthInfo.inRange ? "in_range" : ""} \${monthInfo.isStartMonth ? "is_active_start" : ""} \${monthInfo.isEndMonth ? "is_active_end" : ""}\`}>
                                                                                        <HSingleDatePickerCalendarMonthButton
                                                                                            value={\`\${monthInfo.year}.\${monthInfo.month.padStart(2, '0')}\`}
                                                                                            disabled={monthInfo.isDisabled}
                                                                                        >
                                                                                            {monthInfo.month} <br/>
                                                                                            {monthInfo.inRange ? (<>"inRange"<br/></>) : ""}
                                                                                            {monthInfo.isStartMonth ? (<>"startMonth"<br/></>) : ""}
                                                                                            {monthInfo.isEndMonth ? (<>"endMonth"<br/></>) : ""}
                                                                                            {monthInfo.isCurrentMonth ? (<>"currentMonth"<br/></>) : ""}
                                                                                            {monthInfo.isActive ? (<>"active"<br/></>) : ""}
                                                                                            {monthInfo.isDisabled ? (<>"disabled"<br/></>) : ""}
                                                                                        </HSingleDatePickerCalendarMonthButton>
                                                                                    </td>
                                                                                )
                                                                            })
                                                                        }
                                                                    </tr>
                                                                )
                                                            })}
                                                        </HSingleDatePickerCalendarMonth>
                                                    </HSingleDatePickerCalendarMonthArea>
                                                )
                                            }
                                            {
                                                // 연도 달력
                                                isActiveYearCalendar && (
                                                    <HSingleDatePickerCalendarYearArea style={{border: '1px solid #ccc', backgroundColor: '#fff',}}>
                                                        <div>
                                                        <span style={{
                                                            display: "inline-block",
                                                            fontSize: "14px",
                                                            color: "#333",
                                                            fontWeight: "bold",
                                                        }}>
                                                            {startYear} ~ {endYear}
                                                        </span>
                                                            <HSingleDatePickerYearPrevButton>
                                                                이전
                                                            </HSingleDatePickerYearPrevButton>
                                                            /
                                                            <HSingleDatePickerYearNextButton>
                                                                다음
                                                            </HSingleDatePickerYearNextButton>
                                                        </div>
                                                        <HSingleDatePickerCalendarYear
                                                            childrenTableBody={years.map((yearInfos, index) => {
                                                                return (
                                                                    <tr key={\`years_\${index}\`}>
                                                                        {
                                                                            yearInfos.map((yearInfo, index) => {
                                                                                return (
                                                                                    <td key={\`year_\${index}\`}
                                                                                        className={\`\${yearInfo.isCurrentYear ? "is_current" : ""} \${yearInfo.inRange ? "in_range" : ""} \${yearInfo.isStartYear ? "is_active_start" : ""} \${yearInfo.isEndYear ? "is_active_end" : ""}\`}>
                                                                                        <HSingleDatePickerCalendarYearButton
                                                                                            value={yearInfo.year}
                                                                                            disabled={yearInfo.isDisabled}
                                                                                        >
                                                                                            {yearInfo.year} <br/>
                                                                                            {yearInfo.inRange ? (<>"inRange"<br/></>) : ""}
                                                                                            {yearInfo.isStartYear ? (<>"startYear"<br/></>) : ""}
                                                                                            {yearInfo.isEndYear ? (<>"endYear"<br/></>) : ""}
                                                                                            {yearInfo.isCurrentYear ? (<>"currentYear"<br/></>) : ""}
                                                                                            {yearInfo.isDisabled ? (<>"disabled"<br/></>) : ""}
                                                                                            {yearInfo.isActive ? (<>"active"<br/></>) : ""}
                                                                                        </HSingleDatePickerCalendarYearButton>
                                                                                    </td>
                                                                                )
                                                                            })
                                                                        }
                                                                    </tr>
                                                                )
                                                            })}>
                                                        </HSingleDatePickerCalendarYear>
                                                    </HSingleDatePickerCalendarYearArea>
                                                )
                                            }
                                        </>
                                    )
                                }
                            </HSingleDatePickerArea>
                        </>
                    )

                }

            </HSingleDatePickerRangeArea>
        </>
    )
}

export default HSingleDatePickerCase2;
`,oe={title:"headless-ui/HSingleDatePicker",component:ae,parameters:{docs:{description:{component:"HSingleDatePicker 컴포넌트입니다."},source:{code:ie}}}},S={},b={render:()=>e.jsx(re,{}),parameters:{docs:{description:{story:"HSingleDatePicker 컴포넌트입니다."},source:{code:se}}}};var q,J,K;S.parameters={...S.parameters,docs:{...(q=S.parameters)==null?void 0:q.docs,source:{originalSource:"{}",...(K=(J=S.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,Z,ee;b.parameters={...b.parameters,docs:{...(Q=b.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: () => <HSingleDatePickerCase2 />,
  parameters: {
    docs: {
      description: {
        story: 'HSingleDatePicker 컴포넌트입니다.'
      },
      source: {
        code: HSingleDatePickerCase2Source
      }
    }
  }
}`,...(ee=(Z=b.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};const ge=["Case1","Case2"];export{S as Case1,b as Case2,ge as __namedExportsOrder,oe as default};
