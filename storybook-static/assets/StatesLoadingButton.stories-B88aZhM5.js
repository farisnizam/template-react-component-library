import{f as v}from"./index-BPHu6psy.js";import{j as s}from"./jsx-runtime-DEdD30eg.js";import{r as l}from"./index-RYns6xqu.js";/* empty css              */import"./index-DZLKizrv.js";const k=({className:o="states-loading-button-default",title:B,idleText:C,loadingText:q,successText:N,onClickAsync:h,disabled:j=!1})=>{const[e,t]=l.useState("idle");return l.useEffect(()=>{if(e==="success"){const c=setTimeout(()=>{t("idle")},2e3);return()=>{clearTimeout(c)}}},[e]),s.jsxs("button",{className:`states-loading-button ${e} ${o}`,title:B,onClick:c=>{c.currentTarget.blur(),e==="idle"&&(t("loading"),h().then(()=>{t("success")},()=>{t("idle")}))},disabled:j,children:[s.jsx("span",{className:`text ${e==="idle"?"active":""}`,children:C}),s.jsx("span",{className:`text ${e==="loading"?"active":""}`,children:q}),s.jsx("span",{className:`text ${e==="success"?"active":""}`,children:N})]})};k.__docgenInfo={description:"",methods:[],displayName:"StatesLoadingButton",props:{className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'states-loading-button-default'",computed:!1}},title:{required:!0,tsType:{name:"string"},description:""},idleText:{required:!0,tsType:{name:"string"},description:""},loadingText:{required:!0,tsType:{name:"string"},description:""},successText:{required:!0,tsType:{name:"string"},description:""},onClickAsync:{required:!0,tsType:{name:"signature",type:"function",raw:"() => Promise<any>",signature:{arguments:[],return:{name:"Promise",elements:[{name:"any"}],raw:"Promise<any>"}}},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const _={title:"Example2/StatesLoadingButton",component:k,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{className:{control:"text"},title:{control:"text"},idleText:{control:"text"},loadingText:{control:"text"},successText:{control:"text"},disabled:{control:"boolean"}},args:{onClickAsync:v(()=>new Promise(o=>setTimeout(o,2e3)))}},a={args:{title:"Idle Button",idleText:"Click me",loadingText:"Loading...",successText:"Success!",disabled:!1}},n={args:{title:"Loading Button",idleText:"Click me",loadingText:"Loading...",successText:"Success!",disabled:!1}},r={args:{title:"Success Button",idleText:"Click me",loadingText:"Loading...",successText:"Success!",disabled:!1}},i={args:{title:"Disabled Button",idleText:"Click me",loadingText:"Loading...",successText:"Success!",disabled:!0}};var d,u,m;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    title: 'Idle Button',
    idleText: 'Click me',
    loadingText: 'Loading...',
    successText: 'Success!',
    disabled: false
  }
}`,...(m=(u=a.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var g,p,x;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    title: 'Loading Button',
    idleText: 'Click me',
    loadingText: 'Loading...',
    successText: 'Success!',
    disabled: false
  }
}`,...(x=(p=n.parameters)==null?void 0:p.docs)==null?void 0:x.source}}};var T,f,b;r.parameters={...r.parameters,docs:{...(T=r.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    title: 'Success Button',
    idleText: 'Click me',
    loadingText: 'Loading...',
    successText: 'Success!',
    disabled: false
  }
}`,...(b=(f=r.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var S,y,L;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    title: 'Disabled Button',
    idleText: 'Click me',
    loadingText: 'Loading...',
    successText: 'Success!',
    disabled: true
  }
}`,...(L=(y=i.parameters)==null?void 0:y.docs)==null?void 0:L.source}}};const w=["Idle","Loading","Success","Disabled"];export{i as Disabled,a as Idle,n as Loading,r as Success,w as __namedExportsOrder,_ as default};
