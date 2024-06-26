"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[95064],{10510:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>a,contentTitle:()=>i,default:()=>o,frontMatter:()=>n,metadata:()=>c,toc:()=>l});var d=t(74848),s=t(28453);const n={title:"SpdrParentBrokerSummary"},i="Schema: SpdrParentBrokerSummary (ID: 4075)",c={id:"Schemas/Schema/Topics/parent-orders/SpdrParentBrokerSummary",title:"SpdrParentBrokerSummary",description:"SpdrParentBrokerSummary records are created at the end of a trading period and contain a summary of trading activity for the period; Summary of Stk/Fut/Opt/MLeg Brkr State records.",source:"@site/docs/Schemas/Schema/Topics/3985-parent-orders/SpdrParentBrokerSummary.md",sourceDirName:"Schemas/Schema/Topics/3985-parent-orders",slug:"/Schemas/Schema/Topics/parent-orders/SpdrParentBrokerSummary",permalink:"/docs/Schemas/Schema/Topics/parent-orders/SpdrParentBrokerSummary",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"SpdrParentBrokerSummary"},sidebar:"schemaSidebar",previous:{title:"SpdrParentBrkrState",permalink:"/docs/Schemas/Schema/Topics/parent-orders/SpdrParentBrkrState"},next:{title:"SpdrParentCancel",permalink:"/docs/Schemas/Schema/Topics/parent-orders/SpdrParentCancel"}},a={},l=[{value:"METADATA",id:"metadata",level:3},{value:"PRIMARY KEY",id:"primary-key",level:3},{value:"BODY",id:"body",level:3}];function h(e){const r={a:"a",h1:"h1",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(r.h1,{id:"schema-spdrparentbrokersummary-id-4075",children:["Schema: SpdrParentBrokerSummary ",(0,d.jsx)("span",{className:"small-text",children:"(ID: 4075)"})]}),"\n",(0,d.jsx)(r.p,{children:"SpdrParentBrokerSummary records are created at the end of a trading period and contain a summary of trading activity for the period; Summary of Stk/Fut/Opt/MLeg Brkr State records."}),"\n",(0,d.jsxs)("div",{className:"single-message-meta",children:[(0,d.jsx)(r.h3,{id:"metadata",children:"METADATA"}),(0,d.jsxs)(r.table,{children:[(0,d.jsx)(r.thead,{children:(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.th,{children:"Attribute"}),(0,d.jsx)(r.th,{children:"Value"})]})}),(0,d.jsxs)(r.tbody,{children:[(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"MLink Token"}),(0,d.jsx)(r.td,{children:"SystemData"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"Topic"}),(0,d.jsx)(r.td,{children:"parent-orders"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"SRSE Product"}),(0,d.jsx)(r.td,{children:"SRTrade"})]})]})]})]}),"\n",(0,d.jsxs)("div",{className:"single-message-primarykey",children:[(0,d.jsx)(r.h3,{id:"primary-key",children:"PRIMARY KEY"}),(0,d.jsxs)(r.table,{children:[(0,d.jsx)(r.thead,{children:(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.th,{children:"Field"}),(0,d.jsx)(r.th,{children:"Type"}),(0,d.jsx)(r.th,{children:"Comment"})]})}),(0,d.jsxs)(r.tbody,{children:[(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"accnt"}),(0,d.jsx)(r.td,{children:"string(16)"}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"secType"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../../Enums/SpdrKeyType",children:"enum : SpdrKeyType"})}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"tickerSrc"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../../Enums/TickerSrc",children:"enum : TickerSrc"})}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"spdrSource"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../../Enums/SpdrSource",children:"enum : SpdrSource"})}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"parentOrderHandling"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../../Enums/ParentOrderHandling",children:"enum : ParentOrderHandling"})}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"tradingPeriod"}),(0,d.jsx)(r.td,{children:"DateKey"}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"clientFirm"}),(0,d.jsx)(r.td,{children:"string(16)"}),(0,d.jsx)(r.td,{children:"SR client firm"})]})]})]})]}),"\n",(0,d.jsxs)("div",{className:"single-message-body",children:[(0,d.jsx)(r.h3,{id:"body",children:"BODY"}),(0,d.jsxs)(r.table,{children:[(0,d.jsx)(r.thead,{children:(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.th,{children:"Field"}),(0,d.jsx)(r.th,{children:"Type"}),(0,d.jsx)(r.th,{children:"Comment"})]})}),(0,d.jsxs)(r.tbody,{children:[(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"cumFillQty"}),(0,d.jsx)(r.td,{children:"int"}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"numBrokers"}),(0,d.jsx)(r.td,{children:"int"}),(0,d.jsx)(r.td,{children:"number of parent brokers"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"numChildOrders"}),(0,d.jsx)(r.td,{children:"int"}),(0,d.jsx)(r.td,{children:"total number of child orders generated"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"numOrders"}),(0,d.jsx)(r.td,{children:"int"}),(0,d.jsx)(r.td,{children:"number of parent orders"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"numSecKeys"}),(0,d.jsx)(r.td,{children:"int"}),(0,d.jsx)(r.td,{children:"number of unique secKeys"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"numUnderliers"}),(0,d.jsx)(r.td,{children:"int"}),(0,d.jsx)(r.td,{children:"number of unique underlier secKeys"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"sumActiveSeconds"}),(0,d.jsx)(r.td,{children:"float"}),(0,d.jsx)(r.td,{children:"total seconds parent order is active"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"sumOrderSize"}),(0,d.jsx)(r.td,{children:"int"}),(0,d.jsx)(r.td,{children:"total parent order size"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"sumSweepFillQty"}),(0,d.jsx)(r.td,{children:"int"}),(0,d.jsx)(r.td,{children:"size that filled as a result of an initial sweep"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"sumSweepMktSize"}),(0,d.jsx)(r.td,{children:"int"}),(0,d.jsx)(r.td,{children:"size that would be expected to fill immediately after parent order arrival"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"sumVwapPnL"}),(0,d.jsx)(r.td,{children:"float"}),(0,d.jsx)(r.td,{children:"SUM: (avgVWapPrice - avgFillPrice) * cumFillQty [if avgVwapPrice exists] (stock and futures only)"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"sumVwapQty"}),(0,d.jsx)(r.td,{children:"int"}),(0,d.jsx)(r.td,{children:"SUM: cumFillQty [if avgVwapPrice exists] (stock and futures only)"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"sumWorkingSeconds"}),(0,d.jsx)(r.td,{children:"float"}),(0,d.jsx)(r.td,{children:"total seconds with at least one working child order"})]})]})]})]})]})}function o(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,d.jsx)(r,{...e,children:(0,d.jsx)(h,{...e})}):h(e)}},28453:(e,r,t)=>{t.d(r,{R:()=>i,x:()=>c});var d=t(96540);const s={},n=d.createContext(s);function i(e){const r=d.useContext(n);return d.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),d.createElement(n.Provider,{value:r},e.children)}}}]);