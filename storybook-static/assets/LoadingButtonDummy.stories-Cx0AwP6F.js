import{f as h}from"./index-BPHu6psy.js";import{j as n}from"./jsx-runtime-DEdD30eg.js";import{P}from"./PulseLoadingAnimation-BSX8o9m5.js";/* empty css              */import"./index-DZLKizrv.js";import"./index-RYns6xqu.js";const y=({text:x,loading:B=!1,className:v="",onClick:N=null,title:C=null,name:T=null,type:q="button",form:L=null,disabled:V=!1})=>n.jsx("button",{className:v,type:q,form:L||void 0,title:C||void 0,name:T||void 0,disabled:V,onClick:N||void 0,children:B?n.jsx(P,{}):n.jsx("span",{className:"text",children:x})});y.__docgenInfo={description:"",methods:[],displayName:"ButtonWithLoading",props:{text:{required:!0,tsType:{name:"string"},description:""},loading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"",defaultValue:{value:"null",computed:!1}},title:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"null",computed:!1}},name:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"null",computed:!1}},form:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"null",computed:!1}},type:{required:!1,tsType:{name:"union",raw:"'button' | 'submit' | 'reset'",elements:[{name:"literal",value:"'button'"},{name:"literal",value:"'submit'"},{name:"literal",value:"'reset'"}]},description:"",defaultValue:{value:"'button'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const E={title:"Example2/LoadingButtonDummy",component:y,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{text:{control:"text"},loading:{control:"boolean"},className:{control:"text"},title:{control:"text"},name:{control:"text"},type:{control:"radio",options:["button","submit","reset"]},disabled:{control:"boolean"}},args:{onClick:h()}},e={args:{text:"Button",loading:!1,className:"",title:"Primary Button",name:"",type:"button",disabled:!1}},t={args:{text:"Button",loading:!0,className:"",title:"Loading Button",name:"",type:"button",disabled:!1}},a={args:{text:"Button",loading:!1,className:"",title:"Disabled Button",name:"",type:"button",disabled:!0}},s={args:{text:"Button",loading:!1,className:"custom-class",title:"Button with Custom Class",name:"",type:"button",disabled:!1}};var o,l,r;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    text: 'Button',
    loading: false,
    className: '',
    title: 'Primary Button',
    name: '',
    type: 'button',
    disabled: false
  }
}`,...(r=(l=e.parameters)==null?void 0:l.docs)==null?void 0:r.source}}};var i,u,d;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    text: 'Button',
    loading: true,
    className: '',
    title: 'Loading Button',
    name: '',
    type: 'button',
    disabled: false
  }
}`,...(d=(u=t.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var m,c,p;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    text: 'Button',
    loading: false,
    className: '',
    title: 'Disabled Button',
    name: '',
    type: 'button',
    disabled: true
  }
}`,...(p=(c=a.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var f,g,b;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    text: 'Button',
    loading: false,
    className: 'custom-class',
    title: 'Button with Custom Class',
    name: '',
    type: 'button',
    disabled: false
  }
}`,...(b=(g=s.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};const W=["Primary","Loading","Disabled","CustomClass"];export{s as CustomClass,a as Disabled,t as Loading,e as Primary,W as __namedExportsOrder,E as default};
