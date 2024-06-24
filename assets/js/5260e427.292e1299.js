"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[88238],{39705:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>o,contentTitle:()=>n,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>a});var d=s(74848),t=s(28453);const i={title:"SodClearingRecordV5"},n="Message: SodClearingRecordV5 (ID: 4835)",c={id:"Schema/Topics/risk-v5/SodClearingRecordV5",title:"SodClearingRecordV5",description:"SodClearingRecords contain start-of-day option position and mark details.  They can be source directly from a prime broker by SpiderRock or inserted by clients.They can also be modified after the start of trading. These records are the source of the CLR side positions in SR risk records.",source:"@site/docs/Schema/Topics/4740-risk-v5/SodClearingRecordV5.md",sourceDirName:"Schema/Topics/4740-risk-v5",slug:"/Schema/Topics/risk-v5/SodClearingRecordV5",permalink:"/docs/Schema/Topics/risk-v5/SodClearingRecordV5",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"SodClearingRecordV5"},sidebar:"schemaSidebar",previous:{title:"SodCashRecordV5",permalink:"/docs/Schema/Topics/risk-v5/SodCashRecordV5"},next:{title:"StockPositionRecordV5",permalink:"/docs/Schema/Topics/risk-v5/StockPositionRecordV5"}},o={},a=[{value:"META DATA  (Topic: risk-v5 )",id:"meta-data--topic-risk-v5-",level:3},{value:"PRIMARY KEY",id:"primary-key",level:3},{value:"BODY",id:"body",level:3}];function l(e){const r={a:"a",h1:"h1",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(r.h1,{id:"message-sodclearingrecordv5-id-4835",children:["Message: SodClearingRecordV5 ",(0,d.jsx)("span",{className:"small-text",children:"(ID: 4835)"})]}),"\n",(0,d.jsxs)(r.p,{children:["SodClearingRecords contain start-of-day option position and mark details.  They can be source directly from a prime broker by SpiderRock or inserted by clients.",(0,d.jsx)("br",{}),(0,d.jsx)("br",{}),"They can also be modified after the start of trading. These records are the source of the CLR side positions in SR risk records."]}),"\n",(0,d.jsxs)("div",{className:"single-message-meta",children:[(0,d.jsx)(r.h3,{id:"meta-data--topic-risk-v5-",children:"META DATA  (Topic: risk-v5 )"}),(0,d.jsxs)(r.table,{children:[(0,d.jsx)(r.thead,{children:(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.th,{children:"Attribute"}),(0,d.jsx)(r.th,{children:"Value"})]})}),(0,d.jsxs)(r.tbody,{children:[(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"MLink Token"}),(0,d.jsx)(r.td,{children:"SystemData"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"SRSE Product"}),(0,d.jsx)(r.td,{children:"SRRisk"})]})]})]})]}),"\n",(0,d.jsxs)("div",{className:"single-message-primarykey",children:[(0,d.jsx)(r.h3,{id:"primary-key",children:"PRIMARY KEY"}),(0,d.jsxs)(r.table,{children:[(0,d.jsx)(r.thead,{children:(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.th,{children:"Field"}),(0,d.jsx)(r.th,{children:"Type"}),(0,d.jsx)(r.th,{children:"Comment"})]})}),(0,d.jsxs)(r.tbody,{children:[(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"accnt"}),(0,d.jsx)(r.td,{children:"string(16)"}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"secKey"}),(0,d.jsx)(r.td,{children:"OptionKey"}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"secType"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../Enums/SpdrKeyType",children:"enum : SpdrKeyType"})}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"tradeDate"}),(0,d.jsx)(r.td,{children:"DateKey"}),(0,d.jsx)(r.td,{children:"effective tradeDate of this clearing record"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"clientFirm"}),(0,d.jsx)(r.td,{children:"string(16)"}),(0,d.jsx)(r.td,{children:"SR assigned client firm"})]})]})]})]}),"\n",(0,d.jsxs)("div",{className:"single-message-body",children:[(0,d.jsx)(r.h3,{id:"body",children:"BODY"}),(0,d.jsxs)(r.table,{children:[(0,d.jsx)(r.thead,{children:(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.th,{children:"Field"}),(0,d.jsx)(r.th,{children:"Type"}),(0,d.jsx)(r.th,{children:"Comment"})]})}),(0,d.jsxs)(r.tbody,{children:[(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"clrMark"}),(0,d.jsx)(r.td,{children:"double"}),(0,d.jsx)(r.td,{children:"clearing mark @ daySide"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"clrPosition"}),(0,d.jsx)(r.td,{children:"int"}),(0,d.jsx)(r.td,{children:"clearing position @ daySide"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"comment"}),(0,d.jsx)(r.td,{children:"text1"}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"daySide"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../Enums/DaySide",children:"enum : DaySide"})}),(0,d.jsx)(r.td,{children:"start-of-day or prev weekday's end-of-day; i.e. corpaction adjusted or not"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"timestamp"}),(0,d.jsx)(r.td,{children:"DateTime"}),(0,d.jsx)(r.td,{children:"upload timestamp; will be identical per accnt"})]})]})]})]})]})}function h(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,d.jsx)(r,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}},28453:(e,r,s)=>{s.d(r,{R:()=>n,x:()=>c});var d=s(96540);const t={},i=d.createContext(t);function n(e){const r=d.useContext(i);return d.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:n(e.components),d.createElement(i.Provider,{value:r},e.children)}}}]);