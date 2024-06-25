"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[1784],{93088:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>a,contentTitle:()=>i,default:()=>o,frontMatter:()=>d,metadata:()=>c,toc:()=>l});var n=t(74848),s=t(28453);const d={title:"SpdrParentCancel"},i="Schema: SpdrParentCancel (ID: 4080)",c={id:"Schema/Topics/parent-orders/SpdrParentCancel",title:"SpdrParentCancel",description:"Records inserted into this table causes the corresponding parent order to be cancelled if it is active and cancellable.Either put in a custom datasource or deprecate from SRSE (Natively not allowed to be modified via SRSE)",source:"@site/docs/Schema/Topics/3985-parent-orders/SpdrParentCancel.md",sourceDirName:"Schema/Topics/3985-parent-orders",slug:"/Schema/Topics/parent-orders/SpdrParentCancel",permalink:"/docs/Schema/Topics/parent-orders/SpdrParentCancel",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"SpdrParentCancel"},sidebar:"schemaSidebar",previous:{title:"SpdrParentBrokerSummary",permalink:"/docs/Schema/Topics/parent-orders/SpdrParentBrokerSummary"},next:{title:"SpdrParentExecution",permalink:"/docs/Schema/Topics/parent-orders/SpdrParentExecution"}},a={},l=[{value:"META DATA",id:"meta-data",level:3},{value:"PRIMARY KEY",id:"primary-key",level:3},{value:"BODY",id:"body",level:3}];function h(e){const r={a:"a",h1:"h1",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.h1,{id:"schema-spdrparentcancel-id-4080",children:["Schema: SpdrParentCancel ",(0,n.jsx)("span",{className:"small-text",children:"(ID: 4080)"})]}),"\n",(0,n.jsxs)(r.p,{children:["Records inserted into this table causes the corresponding parent order to be cancelled if it is active and cancellable.",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"Either put in a custom datasource or deprecate from SRSE (Natively not allowed to be modified via SRSE)"]}),"\n",(0,n.jsxs)("div",{className:"single-message-meta",children:[(0,n.jsx)(r.h3,{id:"meta-data",children:"META DATA"}),(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Attribute"}),(0,n.jsx)(r.th,{children:"Value"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"MLink Token"}),(0,n.jsx)(r.td,{children:"ClientTrading"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Topic"}),(0,n.jsx)(r.td,{children:"parent-orders"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"SRSE Product"}),(0,n.jsx)(r.td,{children:"SRTrade"})]})]})]})]}),"\n",(0,n.jsxs)("div",{className:"single-message-primarykey",children:[(0,n.jsx)(r.h3,{id:"primary-key",children:"PRIMARY KEY"}),(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Field"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Comment"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"accnt"}),(0,n.jsx)(r.td,{children:"string(16)"}),(0,n.jsx)(r.td,{})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"parentNumber"}),(0,n.jsx)(r.td,{children:"long"}),(0,n.jsx)(r.td,{})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"clientFirm"}),(0,n.jsx)(r.td,{children:"string(16)"}),(0,n.jsx)(r.td,{children:"SR client firm"})]})]})]})]}),"\n",(0,n.jsxs)("div",{className:"single-message-body",children:[(0,n.jsx)(r.h3,{id:"body",children:"BODY"}),(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Field"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Comment"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"altCancelId"}),(0,n.jsx)(r.td,{children:"string(24)"}),(0,n.jsx)(r.td,{})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"cxlReason"}),(0,n.jsx)(r.td,{children:"string(16)"}),(0,n.jsx)(r.td,{})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"engineName"}),(0,n.jsx)(r.td,{children:"string(32)"}),(0,n.jsx)(r.td,{children:"set by the engine handling event (should be blank on arrival)"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"modifiedBy"}),(0,n.jsx)(r.td,{children:"string(24)"}),(0,n.jsx)(r.td,{children:"user who last modified this record"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"modifiedIn"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"../../../Enums/SysEnvironment",children:"enum : SysEnvironment"})}),(0,n.jsx)(r.td,{})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"runStatus"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"../../../Enums/RunStatus",children:"enum : RunStatus"})}),(0,n.jsx)(r.td,{children:"original (source) run status [Prod,Beta]"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"sysEnvironment"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"../../../Enums/SysEnvironment",children:"enum : SysEnvironment"})}),(0,n.jsx)(r.td,{children:"original (source) sys environment [Stable, Current, etc]"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"timestamp"}),(0,n.jsx)(r.td,{children:"DateTime"}),(0,n.jsx)(r.td,{children:"timestamp of last modification"})]})]})]})]})]})}function o(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},28453:(e,r,t)=>{t.d(r,{R:()=>i,x:()=>c});var n=t(96540);const s={},d=n.createContext(s);function i(e){const r=n.useContext(d);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(d.Provider,{value:r},e.children)}}}]);