"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[45715],{50160:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>o,contentTitle:()=>d,default:()=>h,frontMatter:()=>n,metadata:()=>c,toc:()=>a});var r=t(74848),i=t(28453);const n={title:"OptionExAsRecordV5"},d="Schema: OptionExAsRecordV5 (ID: 4800)",c={id:"MessageSchemas/Schema/Topics/risk-v5/OptionExAsRecordV5",title:"OptionExAsRecordV5",description:"Option exercise/assigment records (either from SR clearing loaders or uploaded directly by client)",source:"@site/docs/MessageSchemas/Schema/Topics/4740-risk-v5/OptionExAsRecordV5.md",sourceDirName:"MessageSchemas/Schema/Topics/4740-risk-v5",slug:"/MessageSchemas/Schema/Topics/risk-v5/OptionExAsRecordV5",permalink:"/docs/MessageSchemas/Schema/Topics/risk-v5/OptionExAsRecordV5",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"OptionExAsRecordV5"},sidebar:"messageSchemasSidebar",previous:{title:"OptionCorpActionRecordV5",permalink:"/docs/MessageSchemas/Schema/Topics/risk-v5/OptionCorpActionRecordV5"},next:{title:"OptionPositionRecordV5",permalink:"/docs/MessageSchemas/Schema/Topics/risk-v5/OptionPositionRecordV5"}},o={},a=[{value:"METADATA",id:"metadata",level:3},{value:"PRIMARY KEY",id:"primary-key",level:3},{value:"BODY",id:"body",level:3}];function l(e){const s={h1:"h1",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.h1,{id:"schema-optionexasrecordv5-id-4800",children:["Schema: OptionExAsRecordV5 ",(0,r.jsx)("span",{className:"small-text",children:"(ID: 4800)"})]}),"\n",(0,r.jsx)(s.p,{children:"Option exercise/assigment records (either from SR clearing loaders or uploaded directly by client)"}),"\n",(0,r.jsxs)("div",{className:"single-message-meta",children:[(0,r.jsx)(s.h3,{id:"metadata",children:"METADATA"}),(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Attribute"}),(0,r.jsx)(s.th,{children:"Value"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"MLink Token"}),(0,r.jsx)(s.td,{children:"SystemData"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Topic"}),(0,r.jsx)(s.td,{children:"risk-v5"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"SRSE Product"}),(0,r.jsx)(s.td,{children:"SRRisk"})]})]})]})]}),"\n",(0,r.jsxs)("div",{className:"single-message-primarykey",children:[(0,r.jsx)(s.h3,{id:"primary-key",children:"PRIMARY KEY"}),(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Field"}),(0,r.jsx)(s.th,{children:"Type"}),(0,r.jsx)(s.th,{children:"Comment"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"okey"}),(0,r.jsx)(s.td,{children:"OptionKey"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"accnt"}),(0,r.jsx)(s.td,{children:"string(16)"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"tradeDate"}),(0,r.jsx)(s.td,{children:"DateKey"}),(0,r.jsx)(s.td,{children:"trading date immediately prior to ex-date of the action"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"clientFirm"}),(0,r.jsx)(s.td,{children:"string(16)"}),(0,r.jsx)(s.td,{children:"SR assigned client firm"})]})]})]})]}),"\n",(0,r.jsxs)("div",{className:"single-message-body",children:[(0,r.jsx)(s.h3,{id:"body",children:"BODY"}),(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Field"}),(0,r.jsx)(s.th,{children:"Type"}),(0,r.jsx)(s.th,{children:"Comment"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"exAsContracts"}),(0,r.jsx)(s.td,{children:"int"}),(0,r.jsx)(s.td,{children:"note: override the normal automatic ex/as rules for up to this number of contracts. The balance (if any) will be presumed to ex/as according to default rules"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"exAsTransId"}),(0,r.jsx)(s.td,{children:"text1"}),(0,r.jsx)(s.td,{children:"exercise/assigment transaction Id [optiona] (used to reference away sytem records)"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"timestamp"}),(0,r.jsx)(s.td,{children:"DateTime"}),(0,r.jsx)(s.td,{})]})]})]})]})]})}function h(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},28453:(e,s,t)=>{t.d(s,{R:()=>d,x:()=>c});var r=t(96540);const i={},n=r.createContext(i);function d(e){const s=r.useContext(n);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),r.createElement(n.Provider,{value:s},e.children)}}}]);