import{j as t}from"./jsx-runtime-DEdD30eg.js";import{r as o}from"./index-RYns6xqu.js";import{a as g,q as T,Z as P,e as f}from"./headless-ui-react18.es-EP0oh3Zk.js";const m=()=>{const[p,s]=o.useState([]),[r,n]=o.useState(0);o.useEffect(()=>{setTimeout(()=>s(e=>[...e,"Welcome to our website!"]),500),setTimeout(()=>s(e=>[...e,"Your profile has been updated."]),1500),setTimeout(()=>s(e=>[...e,"Please check your internet connection."]),2500)},[]);const d=()=>{n(e=>e+1)};return o.useEffect(()=>{p.length===r&&(s([]),n(0))},[r,p.length]),t.jsx(g,{children:p.map((e,l)=>t.jsx(T,{onClose:d,children:t.jsxs(P,{duration:3e3,children:[e,t.jsx(f,{children:"닫기"})]})},l))})};m.__docgenInfo={description:"",methods:[],displayName:"HToastPopupCase1"};const H=`import {useEffect, useState} from "react";
import {
    HToastPopupContainer,
    HToastPopupArea,
    HToastPopup,
    HToastPopupCloseButton,
} from 'headless-ui/react18'

const HToastPopupCase1 = () => {
    const [message, setMessage] = useState<string[]>([]);
    const [endMessage, setEndMessage] = useState<number>(0);

    useEffect(() => {
        setTimeout(() => setMessage(prevState => [...prevState, 'Welcome to our website!']), 500);
        setTimeout(() => setMessage(prevState => [...prevState, 'Your profile has been updated.']), 1500);
        setTimeout(() => setMessage(prevState => [...prevState, 'Please check your internet connection.']), 2500);
    }, []);

    const onCloseToastPopup = () => {
        setEndMessage(prevState => prevState + 1);
    };

    useEffect(() => {
        if (message.length === endMessage) {
            setMessage([]);
            setEndMessage(0);
        }
    }, [endMessage, message.length]);

    return (
        <HToastPopupContainer>
            {message.map((msg, index) => (
                <HToastPopupArea key={index} onClose={onCloseToastPopup}>
                    <HToastPopup duration={3000}>
                        {msg}
                        <HToastPopupCloseButton>닫기</HToastPopupCloseButton>
                    </HToastPopup>
                </HToastPopupArea>
            ))}
        </HToastPopupContainer>
    )
}

export default HToastPopupCase1;
`,M={title:"headless-ui/HToastPopup",component:m,parameters:{docs:{description:{component:"HToastPopup 컴포넌트입니다."},source:{code:H}}}},a={};var u,c,i;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(i=(c=a.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};const x=["Case1"];export{a as Case1,x as __namedExportsOrder,M as default};
