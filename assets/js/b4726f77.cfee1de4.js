"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[72436],{65488:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>x,frontMatter:()=>n,metadata:()=>c,toc:()=>a});var s=t(74848),d=t(28453);const n={title:"SpdrFixParentReject"},i="Message: SpdrFixParentReject (ID: 4010)",c={id:"Schema/Topics/parent-orders/SpdrFixParentReject",title:"SpdrFixParentReject",description:"Record indicates that either a SpdrParentOrder (Add or Replace) or FixParentCancel request failed",source:"@site/docs/Schema/Topics/3985-parent-orders/SpdrFixParentReject.md",sourceDirName:"Schema/Topics/3985-parent-orders",slug:"/Schema/Topics/parent-orders/SpdrFixParentReject",permalink:"/docs/Schema/Topics/parent-orders/SpdrFixParentReject",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"SpdrFixParentReject"},sidebar:"schemaSidebar",previous:{title:"SpdrFixParentExecution",permalink:"/docs/Schema/Topics/parent-orders/SpdrFixParentExecution"},next:{title:"SpdrMLegBrkrEvent",permalink:"/docs/Schema/Topics/parent-orders/SpdrMLegBrkrEvent"}},l={},a=[{value:"META DATA  (Topic: parent-orders )",id:"meta-data--topic-parent-orders-",level:3},{value:"PRIMARY KEY",id:"primary-key",level:3},{value:"BODY",id:"body",level:3}];function h(e){const r={a:"a",h1:"h1",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(r.h1,{id:"message-spdrfixparentreject-id-4010",children:["Message: SpdrFixParentReject ",(0,s.jsx)("span",{className:"small-text",children:"(ID: 4010)"})]}),"\n",(0,s.jsx)(r.p,{children:"Record indicates that either a SpdrParentOrder (Add or Replace) or FixParentCancel request failed"}),"\n",(0,s.jsxs)("div",{className:"single-message-meta",children:[(0,s.jsx)(r.h3,{id:"meta-data--topic-parent-orders-",children:"META DATA  (Topic: parent-orders )"}),(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Attribute"}),(0,s.jsx)(r.th,{children:"Value"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"MLink Token"}),(0,s.jsx)(r.td,{children:"SystemData"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"SRSE Product"}),(0,s.jsx)(r.td,{children:"SRTrade"})]})]})]})]}),"\n",(0,s.jsxs)("div",{className:"single-message-primarykey",children:[(0,s.jsx)(r.h3,{id:"primary-key",children:"PRIMARY KEY"}),(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Field"}),(0,s.jsx)(r.th,{children:"Type"}),(0,s.jsx)(r.th,{children:"Comment"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"altOrderId"}),(0,s.jsx)(r.td,{children:"string(24)"}),(0,s.jsx)(r.td,{children:"usually client FIX clOrdId"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"srcRoutingCode"}),(0,s.jsx)(r.td,{children:"string(65)"}),(0,s.jsx)(r.td,{children:"client FIX session"})]})]})]})]}),"\n",(0,s.jsxs)("div",{className:"single-message-body",children:[(0,s.jsx)(r.h3,{id:"body",children:"BODY"}),(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Field"}),(0,s.jsx)(r.th,{children:"Type"}),(0,s.jsx)(r.th,{children:"Comment"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"accnt"}),(0,s.jsx)(r.td,{children:"string(16)"}),(0,s.jsx)(r.td,{children:"accnt"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"altPrevOrderId"}),(0,s.jsx)(r.td,{children:"string(24)"}),(0,s.jsx)(r.td,{children:"usually client FIX origClOrdId"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"clientFirm"}),(0,s.jsx)(r.td,{children:"string(16)"}),(0,s.jsx)(r.td,{children:"SR client firm"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"clientSeqNumIn"}),(0,s.jsx)(r.td,{children:"int"}),(0,s.jsx)(r.td,{})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"parentNumber"}),(0,s.jsx)(r.td,{children:"long"}),(0,s.jsx)(r.td,{})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"rejectType"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"../../../Enums/RejectType",children:"enum : RejectType"})}),(0,s.jsx)(r.td,{})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"secKey"}),(0,s.jsx)(r.td,{children:"OptionKey"}),(0,s.jsx)(r.td,{children:"security key"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"secType"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"../../../Enums/SpdrKeyType",children:"enum : SpdrKeyType"})}),(0,s.jsx)(r.td,{children:"security type [Stock, Future, Option]"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"spdrCloseReason"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"../../../Enums/SpdrCloseReason",children:"enum : SpdrCloseReason"})}),(0,s.jsx)(r.td,{})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"spdrOrderStatus"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"../../../Enums/SpdrOrderStatus",children:"enum : SpdrOrderStatus"})}),(0,s.jsx)(r.td,{})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"spdrRejectLevel"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"../../../Enums/SpdrRiskLevel",children:"enum : SpdrRiskLevel"})}),(0,s.jsx)(r.td,{})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"spdrRejectReason"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"../../../Enums/SpdrRejectReason",children:"enum : SpdrRejectReason"})}),(0,s.jsx)(r.td,{})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"text"}),(0,s.jsx)(r.td,{children:"text1"}),(0,s.jsx)(r.td,{})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"timestamp"}),(0,s.jsx)(r.td,{children:"DateTime"}),(0,s.jsx)(r.td,{})]})]})]})]})]})}function x(e={}){const{wrapper:r}={...(0,d.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},28453:(e,r,t)=>{t.d(r,{R:()=>i,x:()=>c});var s=t(96540);const d={},n=s.createContext(d);function i(e){const r=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:i(e.components),s.createElement(n.Provider,{value:r},e.children)}}}]);