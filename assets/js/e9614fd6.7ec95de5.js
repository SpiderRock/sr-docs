"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[33982],{46695:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>d,metadata:()=>c,toc:()=>a});var n=t(74848),s=t(28453);const d={title:"SpdrRouteCancel"},i="Message: SpdrRouteCancel (ID: 4110)",c={id:"Schema/Topics/parent-orders/SpdrRouteCancel",title:"SpdrRouteCancel",description:"Records inserted into this table will result in the cancellation of all active/cancelable orders for the indicated SpiderRock routing code",source:"@site/docs/Schema/Topics/3985-parent-orders/SpdrRouteCancel.md",sourceDirName:"Schema/Topics/3985-parent-orders",slug:"/Schema/Topics/parent-orders/SpdrRouteCancel",permalink:"/sr-docs/docs/Schema/Topics/parent-orders/SpdrRouteCancel",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"SpdrRouteCancel"},sidebar:"schemaSidebar",previous:{title:"SpdrRiskGroupCancel",permalink:"/sr-docs/docs/Schema/Topics/parent-orders/SpdrRiskGroupCancel"},next:{title:"SpdrSecKeyCancel",permalink:"/sr-docs/docs/Schema/Topics/parent-orders/SpdrSecKeyCancel"}},l={},a=[{value:"META DATA  (Topic: parent-orders )",id:"meta-data--topic-parent-orders-",level:3},{value:"PRIMARY KEY",id:"primary-key",level:3},{value:"BODY",id:"body",level:3}];function o(e){const r={a:"a",h1:"h1",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.h1,{id:"message-spdrroutecancel-id-4110",children:["Message: SpdrRouteCancel ",(0,n.jsx)("span",{className:"small-text",children:"(ID: 4110)"})]}),"\n",(0,n.jsx)(r.p,{children:"Records inserted into this table will result in the cancellation of all active/cancelable orders for the indicated SpiderRock routing code"}),"\n",(0,n.jsxs)("div",{className:"single-message-meta",children:[(0,n.jsx)(r.h3,{id:"meta-data--topic-parent-orders-",children:"META DATA  (Topic: parent-orders )"}),(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Attribute"}),(0,n.jsx)(r.th,{children:"Value"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"MLink Token"}),(0,n.jsx)(r.td,{children:"SystemData"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"SRSE Product"}),(0,n.jsx)(r.td,{children:"SRTrade"})]})]})]})]}),"\n",(0,n.jsxs)("div",{className:"single-message-primarykey",children:[(0,n.jsx)(r.h3,{id:"primary-key",children:"PRIMARY KEY"}),(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Field"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Comment"})]})}),(0,n.jsx)(r.tbody,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"routingCode"}),(0,n.jsx)(r.td,{children:"string(65)"}),(0,n.jsx)(r.td,{children:"SR routing code"})]})})]})]}),"\n",(0,n.jsxs)("div",{className:"single-message-body",children:[(0,n.jsx)(r.h3,{id:"body",children:"BODY"}),(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Field"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Comment"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"altCancelId"}),(0,n.jsx)(r.td,{children:"string(24)"}),(0,n.jsx)(r.td,{children:"usually client FIX clOrdId of the inbound OrderCancel request"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"cxlReason"}),(0,n.jsx)(r.td,{children:"string(16)"}),(0,n.jsx)(r.td,{})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"engineName"}),(0,n.jsx)(r.td,{children:"string(32)"}),(0,n.jsx)(r.td,{children:"set by the engine handling event (should be blank on arrival)"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"modifiedBy"}),(0,n.jsx)(r.td,{children:"string(24)"}),(0,n.jsx)(r.td,{children:"user who last modified this record"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"modifiedIn"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"../../Enums/SysEnvironment",children:"enum : SysEnvironment"})}),(0,n.jsx)(r.td,{})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"runStatus"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"../../Enums/RunStatus",children:"enum : RunStatus"})}),(0,n.jsx)(r.td,{children:"original (source) run status [Prod,Beta]"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"sysEnvironment"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"../../Enums/SysEnvironment",children:"enum : SysEnvironment"})}),(0,n.jsx)(r.td,{children:"original (source) sys environment [Stable, Current, etc]"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"timestamp"}),(0,n.jsx)(r.td,{children:"DateTime"}),(0,n.jsx)(r.td,{children:"timestamp of last modification"})]})]})]})]})]})}function h(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(o,{...e})}):o(e)}},28453:(e,r,t)=>{t.d(r,{R:()=>i,x:()=>c});var n=t(96540);const s={},d=n.createContext(s);function i(e){const r=n.useContext(d);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(d.Provider,{value:r},e.children)}}}]);