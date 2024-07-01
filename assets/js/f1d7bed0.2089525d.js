"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[13496],{55058:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>l,contentTitle:()=>c,default:()=>x,frontMatter:()=>n,metadata:()=>i,toc:()=>a});var t=s(74848),d=s(28453);const n={title:"SpdrFixParentReject"},c="Schema: SpdrFixParentReject (ID: 4010)",i={id:"MessageSchemas/Schema/Topics/parent-orders/SpdrFixParentReject",title:"SpdrFixParentReject",description:"Record indicates that either a SpdrParentOrder (Add or Replace) or FixParentCancel request failed",source:"@site/docs/MessageSchemas/Schema/Topics/3985-parent-orders/SpdrFixParentReject.md",sourceDirName:"MessageSchemas/Schema/Topics/3985-parent-orders",slug:"/MessageSchemas/Schema/Topics/parent-orders/SpdrFixParentReject",permalink:"/docs/MessageSchemas/Schema/Topics/parent-orders/SpdrFixParentReject",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"SpdrFixParentReject"},sidebar:"messageSchemasSidebar",previous:{title:"SpdrFixParentExecution",permalink:"/docs/MessageSchemas/Schema/Topics/parent-orders/SpdrFixParentExecution"},next:{title:"SpdrMLegBrkrEvent",permalink:"/docs/MessageSchemas/Schema/Topics/parent-orders/SpdrMLegBrkrEvent"}},l={},a=[{value:"METADATA",id:"metadata",level:3},{value:"PRIMARY KEY",id:"primary-key",level:3},{value:"BODY",id:"body",level:3}];function h(e){const r={a:"a",h1:"h1",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.h1,{id:"schema-spdrfixparentreject-id-4010",children:["Schema: SpdrFixParentReject ",(0,t.jsx)("span",{className:"small-text",children:"(ID: 4010)"})]}),"\n",(0,t.jsx)(r.p,{children:"Record indicates that either a SpdrParentOrder (Add or Replace) or FixParentCancel request failed"}),"\n",(0,t.jsxs)("div",{className:"single-message-meta",children:[(0,t.jsx)(r.h3,{id:"metadata",children:"METADATA"}),(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Attribute"}),(0,t.jsx)(r.th,{children:"Value"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"MLink Token"}),(0,t.jsx)(r.td,{children:"SystemData"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Topic"}),(0,t.jsx)(r.td,{children:"parent-orders"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"SRSE Product"}),(0,t.jsx)(r.td,{children:"SRTrade"})]})]})]})]}),"\n",(0,t.jsxs)("div",{className:"single-message-primarykey",children:[(0,t.jsx)(r.h3,{id:"primary-key",children:"PRIMARY KEY"}),(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Field"}),(0,t.jsx)(r.th,{children:"Type"}),(0,t.jsx)(r.th,{children:"Comment"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"altOrderId"}),(0,t.jsx)(r.td,{children:"string(24)"}),(0,t.jsx)(r.td,{children:"usually client FIX clOrdId"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"srcRoutingCode"}),(0,t.jsx)(r.td,{children:"string(65)"}),(0,t.jsx)(r.td,{children:"client FIX session"})]})]})]})]}),"\n",(0,t.jsxs)("div",{className:"single-message-body",children:[(0,t.jsx)(r.h3,{id:"body",children:"BODY"}),(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Field"}),(0,t.jsx)(r.th,{children:"Type"}),(0,t.jsx)(r.th,{children:"Comment"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"accnt"}),(0,t.jsx)(r.td,{children:"string(16)"}),(0,t.jsx)(r.td,{children:"accnt"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"altPrevOrderId"}),(0,t.jsx)(r.td,{children:"string(24)"}),(0,t.jsx)(r.td,{children:"usually client FIX origClOrdId"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"clientFirm"}),(0,t.jsx)(r.td,{children:"string(16)"}),(0,t.jsx)(r.td,{children:"SR client firm"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"clientSeqNumIn"}),(0,t.jsx)(r.td,{children:"int"}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"parentNumber"}),(0,t.jsx)(r.td,{children:"long"}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"rejectType"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../../Enums/RejectType",children:"enum : RejectType"})}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"secKey"}),(0,t.jsx)(r.td,{children:"OptionKey"}),(0,t.jsx)(r.td,{children:"security key"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"secType"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../../Enums/SpdrKeyType",children:"enum : SpdrKeyType"})}),(0,t.jsx)(r.td,{children:"security type [Stock, Future, Option]"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"spdrCloseReason"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../../Enums/SpdrCloseReason",children:"enum : SpdrCloseReason"})}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"spdrOrderStatus"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../../Enums/SpdrOrderStatus",children:"enum : SpdrOrderStatus"})}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"spdrRejectLevel"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../../Enums/SpdrRiskLevel",children:"enum : SpdrRiskLevel"})}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"spdrRejectReason"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../../Enums/SpdrRejectReason",children:"enum : SpdrRejectReason"})}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"text"}),(0,t.jsx)(r.td,{children:"text1"}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"timestamp"}),(0,t.jsx)(r.td,{children:"DateTime"}),(0,t.jsx)(r.td,{})]})]})]})]})]})}function x(e={}){const{wrapper:r}={...(0,d.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},28453:(e,r,s)=>{s.d(r,{R:()=>c,x:()=>i});var t=s(96540);const d={},n=t.createContext(d);function c(e){const r=t.useContext(n);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:c(e.components),t.createElement(n.Provider,{value:r},e.children)}}}]);