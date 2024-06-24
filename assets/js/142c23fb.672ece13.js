"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[5636],{42379:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>l,contentTitle:()=>d,default:()=>o,frontMatter:()=>n,metadata:()=>c,toc:()=>a});var i=r(74848),t=r(28453);const n={title:"SymbolMarginSummaryV5"},d="Message: SymbolMarginSummaryV5 (ID: 4855)",c={id:"Schema/Topics/risk-v5/SymbolMarginSummaryV5",title:"SymbolMarginSummaryV5",description:"SymbolMarginSummary records are published by the AggRiskServers and consumed by execution engines",source:"@site/docs/Schema/Topics/4740-risk-v5/SymbolMarginSummaryV5.md",sourceDirName:"Schema/Topics/4740-risk-v5",slug:"/Schema/Topics/risk-v5/SymbolMarginSummaryV5",permalink:"/sr-docs/docs/Schema/Topics/risk-v5/SymbolMarginSummaryV5",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"SymbolMarginSummaryV5"},sidebar:"schemaSidebar",previous:{title:"StockPositionRecordV5",permalink:"/sr-docs/docs/Schema/Topics/risk-v5/StockPositionRecordV5"},next:{title:"SymbolRiskDetailV5",permalink:"/sr-docs/docs/Schema/Topics/risk-v5/SymbolRiskDetailV5"}},l={},a=[{value:"META DATA  (Topic: risk-v5 )",id:"meta-data--topic-risk-v5-",level:3},{value:"PRIMARY KEY",id:"primary-key",level:3},{value:"BODY",id:"body",level:3}];function h(e){const s={h1:"h1",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(s.h1,{id:"message-symbolmarginsummaryv5-id-4855",children:["Message: SymbolMarginSummaryV5 ",(0,i.jsx)("span",{className:"small-text",children:"(ID: 4855)"})]}),"\n",(0,i.jsx)(s.p,{children:"SymbolMarginSummary records are published by the AggRiskServers and consumed by execution engines"}),"\n",(0,i.jsxs)("div",{className:"single-message-meta",children:[(0,i.jsx)(s.h3,{id:"meta-data--topic-risk-v5-",children:"META DATA  (Topic: risk-v5 )"}),(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Attribute"}),(0,i.jsx)(s.th,{children:"Value"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"MLink Token"}),(0,i.jsx)(s.td,{children:"SystemData"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"SRSE Product"}),(0,i.jsx)(s.td,{children:"SRRisk"})]})]})]})]}),"\n",(0,i.jsxs)("div",{className:"single-message-primarykey",children:[(0,i.jsx)(s.h3,{id:"primary-key",children:"PRIMARY KEY"}),(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Field"}),(0,i.jsx)(s.th,{children:"Type"}),(0,i.jsx)(s.th,{children:"Comment"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"ticker"}),(0,i.jsx)(s.td,{children:"TickerKey"}),(0,i.jsx)(s.td,{children:"stock ticker (eg MSFT, SPY)"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"accnt"}),(0,i.jsx)(s.td,{children:"string(16)"}),(0,i.jsx)(s.td,{children:"SRAccnt (SR assigned;up to 16 chars)"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"tradeDate"}),(0,i.jsx)(s.td,{children:"DateKey"}),(0,i.jsx)(s.td,{children:"current [live] period trading date"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"clientFirm"}),(0,i.jsx)(s.td,{children:"string(16)"}),(0,i.jsx)(s.td,{children:"SR assigned client firm"})]})]})]})]}),"\n",(0,i.jsxs)("div",{className:"single-message-body",children:[(0,i.jsx)(s.h3,{id:"body",children:"BODY"}),(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Field"}),(0,i.jsx)(s.th,{children:"Type"}),(0,i.jsx)(s.th,{children:"Comment"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"marginUDnVDn"}),(0,i.jsx)(s.td,{children:"float"}),(0,i.jsx)(s.td,{children:"Margin: uPrc Dn / Vol Dn"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"marginUDnVUp"}),(0,i.jsx)(s.td,{children:"float"}),(0,i.jsx)(s.td,{children:"Margin: uPrc Dn / Vol Up"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"marginUUpVDn"}),(0,i.jsx)(s.td,{children:"float"}),(0,i.jsx)(s.td,{children:"Margin: uPrc Up / Vol Dn"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"marginUUpVUp"}),(0,i.jsx)(s.td,{children:"float"}),(0,i.jsx)(s.td,{children:"Margin: uPrc Up / Vol Up"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"riskServerCode"}),(0,i.jsx)(s.td,{children:"string(6)"}),(0,i.jsx)(s.td,{children:"SR risk server code that published this record"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"timestamp"}),(0,i.jsx)(s.td,{children:"DateTime"}),(0,i.jsx)(s.td,{})]})]})]})]})]})}function o(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},28453:(e,s,r)=>{r.d(s,{R:()=>d,x:()=>c});var i=r(96540);const t={},n=i.createContext(t);function d(e){const s=i.useContext(n);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),i.createElement(n.Provider,{value:s},e.children)}}}]);