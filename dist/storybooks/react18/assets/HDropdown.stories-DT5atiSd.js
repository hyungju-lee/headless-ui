import{j as e}from"./jsx-runtime-DEdD30eg.js";import{r as n}from"./index-RYns6xqu.js";import{B as H,I as D,W as f,H as A,$ as V,Y as l}from"./headless-ui-react18.es-DSuXmQ1A.js";const S=()=>{const d=n.useRef(null),c=[{name:"테스트1",value:"test1"},{name:"테스트2",value:"test2"},{name:"테스트3",value:"test3"},{name:"테스트4",value:"test4"},{name:"테스트5",value:"test5"},{name:"테스트6",value:"test6"},{name:"테스트7",value:"test7"},{name:"테스트8",value:"test8"},{name:"테스트9",value:"test9"},{name:"테스트10",value:"test10"},{name:"테스트11",value:"test11"}],[t,i]=n.useState({name:"테스트11",value:"test11"}),s=`scrollAreaId_${Math.floor(Math.random()*1e3)}`;return e.jsxs("div",{id:s,style:{overflow:"auto",width:"100%",height:"300px",fontSize:"14px"},children:["컨텐츠 ",e.jsx("br",{}),"컨텐츠 ",e.jsx("br",{}),"컨텐츠 ",e.jsx("br",{}),"컨텐츠 ",e.jsx("br",{}),"컨텐츠 ",e.jsx("br",{}),"컨텐츠 ",e.jsx("br",{}),"컨텐츠 ",e.jsx("br",{}),"컨텐츠 ",e.jsx("br",{}),"컨텐츠 ",e.jsx("br",{}),"컨텐츠 ",e.jsx("br",{}),"컨텐츠 ",e.jsx("br",{}),"컨텐츠 ",e.jsx("br",{}),e.jsx(H,{ref:d,initialSelectedValue:t,style:{minWidth:"150px"},scrollEventRefs:[`#${s}`],onChangeSelectedValue:i,children:({isActiveList:u,dropdownAreaWidth:p})=>e.jsxs(e.Fragment,{children:[e.jsxs(D,{children:[t.name,u?"▲":"▼"]}),e.jsx(f,{listWidth:p,children:c.map((r,m)=>e.jsx(A,{children:e.jsx(V,{optionValue:r,className:l(r,t)?"is_selected":"",disabled:l(r,t),children:r.name})},m))})]})}),e.jsx("br",{}),"컨텐츠 ",e.jsx("br",{}),"컨텐츠 ",e.jsx("br",{}),"컨텐츠 ",e.jsx("br",{}),"컨텐츠 ",e.jsx("br",{}),"컨텐츠 ",e.jsx("br",{}),"컨텐츠 ",e.jsx("br",{}),"컨텐츠 ",e.jsx("br",{}),"컨텐츠 ",e.jsx("br",{}),"컨텐츠 ",e.jsx("br",{}),"컨텐츠 ",e.jsx("br",{}),"컨텐츠 ",e.jsx("br",{}),"컨텐츠 ",e.jsx("br",{})]})};S.__docgenInfo={description:"",methods:[],displayName:"HDropdownCase1"};const R=`import {useRef, useState} from "react";
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
                            {selectedOptions.map((option, index) => (
                                <HDropdownItem key={index}>
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
`,I=()=>{const d=n.useRef(null),c=[{name:"테스트1",value:"test1"},{name:"테스트2",value:"test2"},{name:"테스트3",value:"test3"},{name:"테스트4",value:"test4"},{name:"테스트5",value:"test5"},{name:"테스트6",value:"test6"},{name:"테스트7",value:"test7"},{name:"테스트8",value:"test8"},{name:"테스트9",value:"test9"},{name:"테스트10",value:"test10"},{name:"테스트11",value:"test11"}],[t,i]=n.useState({name:"테스트11",value:"test11"}),s=`scrollAreaId_${Math.floor(Math.random()*1e3)}`;return e.jsxs("div",{id:s,style:{overflow:"auto",width:"100%",height:"300px",fontSize:"14px"},children:["컨텐츠 ",e.jsx("br",{}),"컨텐츠 ",e.jsx("br",{}),"컨텐츠 ",e.jsx("br",{}),"컨텐츠 ",e.jsx("br",{}),"컨텐츠 ",e.jsx("br",{}),"컨텐츠 ",e.jsx("br",{}),"컨텐츠 ",e.jsx("br",{}),"컨텐츠 ",e.jsx("br",{}),"컨텐츠 ",e.jsx("br",{}),"컨텐츠 ",e.jsx("br",{}),"컨텐츠 ",e.jsx("br",{}),"컨텐츠 ",e.jsx("br",{}),e.jsx(H,{ref:d,initialSelectedValue:t,style:{minWidth:"150px"},scrollEventRefs:[`#${s}`],onChangeSelectedValue:i,children:({isActiveList:u,dropdownAreaWidth:p})=>e.jsxs(e.Fragment,{children:[e.jsxs(D,{children:[t.name,u?"▲":"▼"]}),e.jsx(f,{listWidth:p,children:c.map((r,m)=>e.jsx(A,{children:e.jsx(V,{optionValue:r,className:l(r,t)?"is_selected":"",disabled:l(r,t),children:r.name})},m))})]})}),e.jsx("br",{}),"컨텐츠 ",e.jsx("br",{}),"컨텐츠 ",e.jsx("br",{}),"컨텐츠 ",e.jsx("br",{}),"컨텐츠 ",e.jsx("br",{}),"컨텐츠 ",e.jsx("br",{}),"컨텐츠 ",e.jsx("br",{}),"컨텐츠 ",e.jsx("br",{}),"컨텐츠 ",e.jsx("br",{}),"컨텐츠 ",e.jsx("br",{}),"컨텐츠 ",e.jsx("br",{}),"컨텐츠 ",e.jsx("br",{}),"컨텐츠 ",e.jsx("br",{})]})};I.__docgenInfo={description:"",methods:[],displayName:"HDropdownCase2"};const C=`import {useRef, useState} from "react";
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
                            {selectedOptions.map((option, index) => (
                                <HDropdownItem key={index}>
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
`,W={title:"headless-ui/HDropdown",component:S,parameters:{docs:{description:{component:"드롭다운을 표시하는 `HDropdown` 컴포넌트입니다."},source:{code:R}}}},o={},a={render:()=>e.jsx(I,{}),parameters:{docs:{description:{story:"드롭다운을 표시하는 `HDropdown` 컴포넌트입니다."},source:{code:C}}}};var b,x,v;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:"{}",...(v=(x=o.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};var w,j,h;a.parameters={...a.parameters,docs:{...(w=a.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(h=(j=a.parameters)==null?void 0:j.docs)==null?void 0:h.source}}};const _=["Case1","Case2"];export{o as Case1,a as Case2,_ as __namedExportsOrder,W as default};
