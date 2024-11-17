import{j as e}from"./jsx-runtime-CkxqCPlQ.js";import{r as n}from"./index-DJO9vBfz.js";import{H as h,$ as H,Y as D,I as f,W as A,G as l}from"./headless-ui-react18.es-Cv6l8VMW.js";const V=()=>{const d=n.useRef(null),c=[{name:"테스트1",value:"test1"},{name:"테스트2",value:"test2"},{name:"테스트3",value:"test3"},{name:"테스트4",value:"test4"},{name:"테스트5",value:"test5"},{name:"테스트6",value:"test6"},{name:"테스트7",value:"test7"},{name:"테스트8",value:"test8"},{name:"테스트9",value:"test9"},{name:"테스트10",value:"test10"},{name:"테스트11",value:"test11"}],[r,u]=n.useState({name:"테스트11",value:"test11"}),s=`scrollAreaId_${Math.floor(Math.random()*1e3)}`;return e.jsxs("div",{id:s,style:{overflow:"auto",width:"100%",height:"300px",fontSize:"14px"},children:["컨텐츠 ",e.jsx("br",{}),"컨텐츠 ",e.jsx("br",{}),"컨텐츠 ",e.jsx("br",{}),"컨텐츠 ",e.jsx("br",{}),"컨텐츠 ",e.jsx("br",{}),"컨텐츠 ",e.jsx("br",{}),"컨텐츠 ",e.jsx("br",{}),"컨텐츠 ",e.jsx("br",{}),"컨텐츠 ",e.jsx("br",{}),"컨텐츠 ",e.jsx("br",{}),"컨텐츠 ",e.jsx("br",{}),"컨텐츠 ",e.jsx("br",{}),e.jsx(h,{ref:d,initialSelectedValue:r,style:{minWidth:"150px"},scrollEventRefs:[`#${s}`],onChangeSelectedValue:u,children:({isActiveList:i,dropdownAreaWidth:p})=>e.jsxs(e.Fragment,{children:[e.jsxs(H,{children:[r.name,i?"▲":"▼"]}),e.jsx(D,{listWidth:p,children:c.map(t=>e.jsx(f,{children:e.jsx(A,{optionValue:t,className:l(t,r)?"is_selected":"",disabled:l(t,r),children:t.name})},t.value))})]})}),e.jsx("br",{}),"컨텐츠 ",e.jsx("br",{}),"컨텐츠 ",e.jsx("br",{}),"컨텐츠 ",e.jsx("br",{}),"컨텐츠 ",e.jsx("br",{}),"컨텐츠 ",e.jsx("br",{}),"컨텐츠 ",e.jsx("br",{}),"컨텐츠 ",e.jsx("br",{}),"컨텐츠 ",e.jsx("br",{}),"컨텐츠 ",e.jsx("br",{}),"컨텐츠 ",e.jsx("br",{}),"컨텐츠 ",e.jsx("br",{}),"컨텐츠 ",e.jsx("br",{})]})};V.__docgenInfo={description:"",methods:[],displayName:"HDropdownCase1"};const I=`import {useRef, useState} from "react";
import {
    HDropdownItemButton,
    HDropdownArea,
    HDropdownButton,
    HDropdownItem,
    HDropdownList,
    HDropdownAreaProviderRef,
    checkEqual,
} from 'headless-ui/react18'

const HDropdownCase1 = () => {
    const HDropdownAreaRef = useRef<HDropdownAreaProviderRef | null>(null);
    const selectedOptions = [
        {
            name: "테스트1",
            value: "test1",
        },
        {
            name: "테스트2",
            value: "test2",
        },
        {
            name: "테스트3",
            value: "test3",
        },
        {
            name: "테스트4",
            value: "test4",
        },
        {
            name: "테스트5",
            value: "test5",
        },
        {
            name: "테스트6",
            value: "test6",
        },
        {
            name: "테스트7",
            value: "test7",
        },
        {
            name: "테스트8",
            value: "test8",
        },
        {
            name: "테스트9",
            value: "test9",
        },
        {
            name: "테스트10",
            value: "test10",
        },
        {
            name: "테스트11",
            value: "test11",
        },
    ];
    const [selectedValue, setSelectedValue] = useState({
        name: "테스트11",
        value: "test11",
    });

    const scrollAreaId = \`scrollAreaId_\${Math.floor(Math.random() * 1000)}\`;

    return (
        <div id={scrollAreaId} style={{
            overflow: 'auto',
            width: '100%',
            height: '300px',
            fontSize: '14px',
        }}>
            컨텐츠 <br/>
            컨텐츠 <br/>
            컨텐츠 <br/>
            컨텐츠 <br/>
            컨텐츠 <br/>
            컨텐츠 <br/>
            컨텐츠 <br/>
            컨텐츠 <br/>
            컨텐츠 <br/>
            컨텐츠 <br/>
            컨텐츠 <br/>
            컨텐츠 <br/>
            <HDropdownArea
                ref={HDropdownAreaRef}
                initialSelectedValue={selectedValue}
                style={{
                    minWidth: '150px',
                }}
                scrollEventRefs={[\`#\${scrollAreaId}\`]}
                onChangeSelectedValue={setSelectedValue}
            >
                {({isActiveList, dropdownAreaWidth}) => (
                    <>
                        <HDropdownButton>
                            {selectedValue.name}
                            {isActiveList ? "▲" : "▼"}
                        </HDropdownButton>
                        <HDropdownList listWidth={dropdownAreaWidth}>
                            {selectedOptions.map((option) => (
                                <HDropdownItem key={option.value}>
                                    <HDropdownItemButton
                                        optionValue={option}
                                        className={checkEqual(option, selectedValue) ? "is_selected" : ""}
                                        disabled={checkEqual(option, selectedValue)}
                                    >
                                        {option.name}
                                    </HDropdownItemButton>
                                </HDropdownItem>
                            ))}
                        </HDropdownList>
                    </>
                )}
            </HDropdownArea>

            <br/>
            컨텐츠 <br/>
            컨텐츠 <br/>
            컨텐츠 <br/>
            컨텐츠 <br/>
            컨텐츠 <br/>
            컨텐츠 <br/>
            컨텐츠 <br/>
            컨텐츠 <br/>
            컨텐츠 <br/>
            컨텐츠 <br/>
            컨텐츠 <br/>
            컨텐츠 <br/>
        </div>
    )
}

export default HDropdownCase1;
`,S=()=>{const d=n.useRef(null),c=[{name:"테스트1",value:"test1"},{name:"테스트2",value:"test2"},{name:"테스트3",value:"test3"},{name:"테스트4",value:"test4"},{name:"테스트5",value:"test5"},{name:"테스트6",value:"test6"},{name:"테스트7",value:"test7"},{name:"테스트8",value:"test8"},{name:"테스트9",value:"test9"},{name:"테스트10",value:"test10"},{name:"테스트11",value:"test11"}],[r,u]=n.useState({name:"테스트11",value:"test11"}),s=`scrollAreaId_${Math.floor(Math.random()*1e3)}`;return e.jsxs("div",{id:s,style:{overflow:"auto",width:"100%",height:"300px",fontSize:"14px"},children:["컨텐츠 ",e.jsx("br",{}),"컨텐츠 ",e.jsx("br",{}),"컨텐츠 ",e.jsx("br",{}),"컨텐츠 ",e.jsx("br",{}),"컨텐츠 ",e.jsx("br",{}),"컨텐츠 ",e.jsx("br",{}),"컨텐츠 ",e.jsx("br",{}),"컨텐츠 ",e.jsx("br",{}),"컨텐츠 ",e.jsx("br",{}),"컨텐츠 ",e.jsx("br",{}),"컨텐츠 ",e.jsx("br",{}),"컨텐츠 ",e.jsx("br",{}),e.jsx(h,{ref:d,initialSelectedValue:r,style:{minWidth:"150px"},scrollEventRefs:[`#${s}`],onChangeSelectedValue:u,children:({isActiveList:i,dropdownAreaWidth:p})=>e.jsxs(e.Fragment,{children:[e.jsxs(H,{children:[r.name,i?"▲":"▼"]}),e.jsx(D,{listWidth:p,children:c.map(t=>e.jsx(f,{children:e.jsx(A,{optionValue:t,className:l(t,r)?"is_selected":"",disabled:l(t,r),children:t.name})},t.value))})]})}),e.jsx("br",{}),"컨텐츠 ",e.jsx("br",{}),"컨텐츠 ",e.jsx("br",{}),"컨텐츠 ",e.jsx("br",{}),"컨텐츠 ",e.jsx("br",{}),"컨텐츠 ",e.jsx("br",{}),"컨텐츠 ",e.jsx("br",{}),"컨텐츠 ",e.jsx("br",{}),"컨텐츠 ",e.jsx("br",{}),"컨텐츠 ",e.jsx("br",{}),"컨텐츠 ",e.jsx("br",{}),"컨텐츠 ",e.jsx("br",{}),"컨텐츠 ",e.jsx("br",{})]})};S.__docgenInfo={description:"",methods:[],displayName:"HDropdownCase2"};const R=`import {useRef, useState} from "react";
import {
    HDropdownItemButton,
    HDropdownArea,
    HDropdownButton,
    HDropdownItem,
    HDropdownList,
    HDropdownAreaProviderRef,
    checkEqual,
} from 'headless-ui/react18'

const HDropdownCase2 = () => {
    const HDropdownAreaRef = useRef<HDropdownAreaProviderRef | null>(null);
    const selectedOptions = [
        {
            name: "테스트1",
            value: "test1",
        },
        {
            name: "테스트2",
            value: "test2",
        },
        {
            name: "테스트3",
            value: "test3",
        },
        {
            name: "테스트4",
            value: "test4",
        },
        {
            name: "테스트5",
            value: "test5",
        },
        {
            name: "테스트6",
            value: "test6",
        },
        {
            name: "테스트7",
            value: "test7",
        },
        {
            name: "테스트8",
            value: "test8",
        },
        {
            name: "테스트9",
            value: "test9",
        },
        {
            name: "테스트10",
            value: "test10",
        },
        {
            name: "테스트11",
            value: "test11",
        },
    ];
    const [selectedValue, setSelectedValue] = useState({
        name: "테스트11",
        value: "test11",
    });

    const scrollAreaId = \`scrollAreaId_\${Math.floor(Math.random() * 1000)}\`;

    return (
        <div id={scrollAreaId} style={{
            overflow: 'auto',
            width: '100%',
            height: '300px',
            fontSize: '14px',
        }}>
            컨텐츠 <br/>
            컨텐츠 <br/>
            컨텐츠 <br/>
            컨텐츠 <br/>
            컨텐츠 <br/>
            컨텐츠 <br/>
            컨텐츠 <br/>
            컨텐츠 <br/>
            컨텐츠 <br/>
            컨텐츠 <br/>
            컨텐츠 <br/>
            컨텐츠 <br/>
            <HDropdownArea
                ref={HDropdownAreaRef}
                initialSelectedValue={selectedValue}
                style={{
                    minWidth: '150px',
                }}
                scrollEventRefs={[\`#\${scrollAreaId}\`]}
                onChangeSelectedValue={setSelectedValue}
            >
                {({isActiveList, dropdownAreaWidth}) => (
                    <>
                        <HDropdownButton>
                            {selectedValue.name}
                            {isActiveList ? "▲" : "▼"}
                        </HDropdownButton>
                        <HDropdownList listWidth={dropdownAreaWidth}>
                            {selectedOptions.map((option) => (
                                <HDropdownItem key={option.value}>
                                    <HDropdownItemButton
                                        optionValue={option}
                                        className={checkEqual(option, selectedValue) ? "is_selected" : ""}
                                        disabled={checkEqual(option, selectedValue)}
                                    >
                                        {option.name}
                                    </HDropdownItemButton>
                                </HDropdownItem>
                            ))}
                        </HDropdownList>
                    </>
                )}
            </HDropdownArea>

            <br/>
            컨텐츠 <br/>
            컨텐츠 <br/>
            컨텐츠 <br/>
            컨텐츠 <br/>
            컨텐츠 <br/>
            컨텐츠 <br/>
            컨텐츠 <br/>
            컨텐츠 <br/>
            컨텐츠 <br/>
            컨텐츠 <br/>
            컨텐츠 <br/>
            컨텐츠 <br/>
        </div>
    )
}

export default HDropdownCase2;
`,W={title:"headless-ui/HDropdown",component:V,parameters:{docs:{description:{component:"드롭다운을 표시하는 `HDropdown` 컴포넌트입니다."},source:{code:I}}}},o={},a={render:()=>e.jsx(S,{}),parameters:{docs:{description:{story:"드롭다운을 표시하는 `HDropdown` 컴포넌트입니다."},source:{code:R}}}};var m,b,x;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:"{}",...(x=(b=o.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};var v,w,j;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <HDropdownCase2 />,
  parameters: {
    docs: {
      description: {
        story: '드롭다운을 표시하는 \`HDropdown\` 컴포넌트입니다.'
      },
      source: {
        code: HDropdownCase2Source
      }
    }
  }
}`,...(j=(w=a.parameters)==null?void 0:w.docs)==null?void 0:j.source}}};const _=["Case1","Case2"];export{o as Case1,a as Case2,_ as __namedExportsOrder,W as default};
