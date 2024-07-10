"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[55609],{42675:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>o,contentTitle:()=>i,default:()=>l,frontMatter:()=>n,metadata:()=>c,toc:()=>h});var d=r(74848),t=r(28453);const n={title:"SodCashRecordV5"},i="Schema: SodCashRecordV5 (ID: 4830)",c={id:"MessageSchemas/Schema/Topics/risk-v5/SodCashRecordV5",title:"SodCashRecordV5",description:"SodCashRecords contain a start-of-day currency position that derived from dividend or corporate action being applied to a prior period position.These records are computed and published by SR rotation servers.",source:"@site/docs/MessageSchemas/Schema/Topics/4740-risk-v5/SodCashRecordV5.md",sourceDirName:"MessageSchemas/Schema/Topics/4740-risk-v5",slug:"/MessageSchemas/Schema/Topics/risk-v5/SodCashRecordV5",permalink:"/docs/MessageSchemas/Schema/Topics/risk-v5/SodCashRecordV5",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"SodCashRecordV5"},sidebar:"messageSchemasSidebar",previous:{title:"RiskCubeDetailV5",permalink:"/docs/MessageSchemas/Schema/Topics/risk-v5/RiskCubeDetailV5"},next:{title:"SodClearingRecordV5",permalink:"/docs/MessageSchemas/Schema/Topics/risk-v5/SodClearingRecordV5"}},o={},h=[{value:"METADATA",id:"metadata",level:3},{value:"BODY",id:"body",level:3}];function a(e){const s={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h3:"h3",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(s.h1,{id:"schema-sodcashrecordv5-id-4830",children:["Schema: SodCashRecordV5 ",(0,d.jsx)("span",{className:"small-text",children:"(ID: 4830)"})]}),"\n",(0,d.jsxs)(s.p,{children:["SodCashRecords contain a start-of-day currency position that derived from dividend or corporate action being applied to a prior period position.",(0,d.jsx)("br",{}),(0,d.jsx)("br",{}),"These records are computed and published by SR rotation servers."]}),"\n",(0,d.jsx)(s.h3,{id:"metadata",children:"METADATA"}),"\n",(0,d.jsxs)(s.table,{children:[(0,d.jsx)(s.thead,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.th,{children:"Attribute"}),(0,d.jsx)(s.th,{children:"Value"})]})}),(0,d.jsxs)(s.tbody,{children:[(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"Topic"}),(0,d.jsx)(s.td,{children:"4740-risk-v5"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"MLink Token"}),(0,d.jsx)(s.td,{children:"SystemData"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"SRSE Product"}),(0,d.jsx)(s.td,{children:"SRRisk"})]})]})]}),"\n",(0,d.jsx)("br",{}),"\n",(0,d.jsxs)(s.blockquote,{children:["\n",(0,d.jsxs)(s.p,{children:[(0,d.jsx)(s.strong,{children:"Note:"})," The symbol ",(0,d.jsx)(s.code,{children:"="})," next to a field number indicates that it is a primary key."]}),"\n"]}),"\n",(0,d.jsx)(s.h3,{id:"body",children:"BODY"}),"\n",(0,d.jsxs)(s.table,{children:[(0,d.jsx)(s.thead,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.th,{children:"#"}),(0,d.jsx)(s.th,{children:"Field"}),(0,d.jsx)(s.th,{children:"Type"}),(0,d.jsx)(s.th,{children:"Comment"})]})}),(0,d.jsxs)(s.tbody,{children:[(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"10="}),(0,d.jsx)(s.td,{children:"accnt"}),(0,d.jsx)(s.td,{children:"string(16)"}),(0,d.jsx)(s.td,{})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"11="}),(0,d.jsx)(s.td,{children:"currency"}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.a,{href:"../../../Enums/Currency",children:"enum : Currency"})}),(0,d.jsx)(s.td,{})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"12="}),(0,d.jsx)(s.td,{children:"tradeDate"}),(0,d.jsx)(s.td,{children:"DateKey"}),(0,d.jsx)(s.td,{})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"13="}),(0,d.jsx)(s.td,{children:"srcTransaction"}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.a,{href:"../../../Enums/SrcTransaction",children:"enum : SrcTransaction"})}),(0,d.jsx)(s.td,{})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"14="}),(0,d.jsx)(s.td,{children:"srcSecKey"}),(0,d.jsx)(s.td,{children:"OptionKey"}),(0,d.jsx)(s.td,{children:"prior period sec key that this position record derived from (if any)"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"15="}),(0,d.jsx)(s.td,{children:"srcSecType"}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.a,{href:"../../../Enums/SpdrKeyType",children:"enum : SpdrKeyType"})}),(0,d.jsx)(s.td,{})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"16="}),(0,d.jsx)(s.td,{children:"srcTradeDate"}),(0,d.jsx)(s.td,{children:"DateKey"}),(0,d.jsx)(s.td,{children:"prior period trade date that this position record derived from"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"17="}),(0,d.jsx)(s.td,{children:"clientFirm"}),(0,d.jsx)(s.td,{children:"string(16)"}),(0,d.jsx)(s.td,{children:"SR assigned client firm"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"100"}),(0,d.jsx)(s.td,{children:"srCashAmount"}),(0,d.jsx)(s.td,{children:"double"}),(0,d.jsx)(s.td,{})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"103"}),(0,d.jsx)(s.td,{children:"clrCashAmount"}),(0,d.jsx)(s.td,{children:"double"}),(0,d.jsx)(s.td,{})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"106"}),(0,d.jsx)(s.td,{children:"comment"}),(0,d.jsx)(s.td,{children:"text1"}),(0,d.jsx)(s.td,{children:"source description (if any)"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"109"}),(0,d.jsx)(s.td,{children:"timestamp"}),(0,d.jsx)(s.td,{children:"DateTime"}),(0,d.jsx)(s.td,{})]})]})]})]})}function l(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,d.jsx)(s,{...e,children:(0,d.jsx)(a,{...e})}):a(e)}},28453:(e,s,r)=>{r.d(s,{R:()=>i,x:()=>c});var d=r(96540);const t={},n=d.createContext(t);function i(e){const s=d.useContext(n);return d.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),d.createElement(n.Provider,{value:s},e.children)}}}]);