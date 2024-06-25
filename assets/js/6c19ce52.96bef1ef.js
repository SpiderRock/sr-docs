"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[76941],{17800:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>o,frontMatter:()=>d,metadata:()=>c,toc:()=>a});var t=n(74848),s=n(28453);const d={title:"SpdrSecKeyCancel"},i="Message: SpdrSecKeyCancel (ID: 4115)",c={id:"Schema/Topics/parent-orders/SpdrSecKeyCancel",title:"SpdrSecKeyCancel",description:"Records inserted into this table causes the corresponding parent broker to cancel the current underlying parent order if active and cancellable.",source:"@site/docs/Schema/Topics/3985-parent-orders/SpdrSecKeyCancel.md",sourceDirName:"Schema/Topics/3985-parent-orders",slug:"/Schema/Topics/parent-orders/SpdrSecKeyCancel",permalink:"/docs/Schema/Topics/parent-orders/SpdrSecKeyCancel",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"SpdrSecKeyCancel"},sidebar:"schemaSidebar",previous:{title:"SpdrRouteCancel",permalink:"/docs/Schema/Topics/parent-orders/SpdrRouteCancel"},next:{title:"SpdrSetActiveSize",permalink:"/docs/Schema/Topics/parent-orders/SpdrSetActiveSize"}},l={},a=[{value:"META DATA  (Topic: parent-orders )",id:"meta-data--topic-parent-orders-",level:3},{value:"PRIMARY KEY",id:"primary-key",level:3},{value:"BODY",id:"body",level:3}];function h(e){const r={a:"a",h1:"h1",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.h1,{id:"message-spdrseckeycancel-id-4115",children:["Message: SpdrSecKeyCancel ",(0,t.jsx)("span",{className:"small-text",children:"(ID: 4115)"})]}),"\n",(0,t.jsx)(r.p,{children:"Records inserted into this table causes the corresponding parent broker to cancel the current underlying parent order if active and cancellable."}),"\n",(0,t.jsxs)("div",{className:"single-message-meta",children:[(0,t.jsx)(r.h3,{id:"meta-data--topic-parent-orders-",children:"META DATA  (Topic: parent-orders )"}),(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Attribute"}),(0,t.jsx)(r.th,{children:"Value"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"MLink Token"}),(0,t.jsx)(r.td,{children:"SystemData"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"SRSE Product"}),(0,t.jsx)(r.td,{children:"SRTrade"})]})]})]})]}),"\n",(0,t.jsxs)("div",{className:"single-message-primarykey",children:[(0,t.jsx)(r.h3,{id:"primary-key",children:"PRIMARY KEY"}),(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Field"}),(0,t.jsx)(r.th,{children:"Type"}),(0,t.jsx)(r.th,{children:"Comment"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"accnt"}),(0,t.jsx)(r.td,{children:"string(16)"}),(0,t.jsx)(r.td,{children:"SR trading account"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"secKey"}),(0,t.jsx)(r.td,{children:"OptionKey"}),(0,t.jsx)(r.td,{children:"Composite Security Key"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"secType"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../../Enums/SpdrKeyType",children:"enum : SpdrKeyType"})}),(0,t.jsx)(r.td,{children:"Security Type [Stock, Future, Option, MLeg]"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"clientFirm"}),(0,t.jsx)(r.td,{children:"string(16)"}),(0,t.jsx)(r.td,{children:"SR client firm"})]})]})]})]}),"\n",(0,t.jsxs)("div",{className:"single-message-body",children:[(0,t.jsx)(r.h3,{id:"body",children:"BODY"}),(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Field"}),(0,t.jsx)(r.th,{children:"Type"}),(0,t.jsx)(r.th,{children:"Comment"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"altCancelId"}),(0,t.jsx)(r.td,{children:"string(24)"}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"cxlReason"}),(0,t.jsx)(r.td,{children:"string(16)"}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"engineName"}),(0,t.jsx)(r.td,{children:"string(32)"}),(0,t.jsx)(r.td,{children:"set by the engine handling event (should be blank on arrival)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"modifiedBy"}),(0,t.jsx)(r.td,{children:"string(24)"}),(0,t.jsx)(r.td,{children:"user who last modified this record"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"modifiedIn"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../../Enums/SysEnvironment",children:"enum : SysEnvironment"})}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"runStatus"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../../Enums/RunStatus",children:"enum : RunStatus"})}),(0,t.jsx)(r.td,{children:"original (source) run status [Prod,Beta]"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"sysEnvironment"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../../Enums/SysEnvironment",children:"enum : SysEnvironment"})}),(0,t.jsx)(r.td,{children:"original (source) sys environment [Stable, Current, etc]"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"timestamp"}),(0,t.jsx)(r.td,{children:"DateTime"}),(0,t.jsx)(r.td,{children:"timestamp of last modification"})]})]})]})]})]})}function o(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},28453:(e,r,n)=>{n.d(r,{R:()=>i,x:()=>c});var t=n(96540);const s={},d=t.createContext(s);function i(e){const r=t.useContext(d);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(d.Provider,{value:r},e.children)}}}]);