"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[8471],{21254:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>o,frontMatter:()=>d,metadata:()=>c,toc:()=>a});var i=s(74848),n=s(28453);const d={title:"OptionNbboQuote"},r="Message: OptionNbboQuote (ID: 2785)",c={id:"Schema/Topics/market-data-options/OptionNbboQuote",title:"OptionNbboQuote",description:"This table contains live option quote records from OPRA (equities) or the listing exchange (futures).  Each record contains up to two price levels and represents a live snapshot of the book for a specific option series.  There are typically 1mm+ records in this table if all ticker sources are enabled.",source:"@site/docs/Schema/Topics/2750-market-data-options/OptionNbboQuote.md",sourceDirName:"Schema/Topics/2750-market-data-options",slug:"/Schema/Topics/market-data-options/OptionNbboQuote",permalink:"/docs/Schema/Topics/market-data-options/OptionNbboQuote",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"OptionNbboQuote"},sidebar:"schemaSidebar",previous:{title:"OptionMarketSummary",permalink:"/docs/Schema/Topics/market-data-options/OptionMarketSummary"},next:{title:"OptionOpenAuction",permalink:"/docs/Schema/Topics/market-data-options/OptionOpenAuction"}},l={},a=[{value:"META DATA  (Topic: market-data-options )",id:"meta-data--topic-market-data-options-",level:3},{value:"PRIMARY KEY",id:"primary-key",level:3},{value:"BODY",id:"body",level:3}];function h(e){const t={a:"a",h1:"h1",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.h1,{id:"message-optionnbboquote-id-2785",children:["Message: OptionNbboQuote ",(0,i.jsx)("span",{className:"small-text",children:"(ID: 2785)"})]}),"\n",(0,i.jsx)(t.p,{children:"This table contains live option quote records from OPRA (equities) or the listing exchange (futures).  Each record contains up to two price levels and represents a live snapshot of the book for a specific option series.  There are typically 1mm+ records in this table if all ticker sources are enabled."}),"\n",(0,i.jsxs)("div",{className:"single-message-meta",children:[(0,i.jsx)(t.h3,{id:"meta-data--topic-market-data-options-",children:"META DATA  (Topic: market-data-options )"}),(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Attribute"}),(0,i.jsx)(t.th,{children:"Value"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"MLink Token"}),(0,i.jsx)(t.td,{children:"OptMktData"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"SRSE Product"}),(0,i.jsx)(t.td,{children:"SRLive"})]})]})]})]}),"\n",(0,i.jsxs)("div",{className:"single-message-primarykey",children:[(0,i.jsx)(t.h3,{id:"primary-key",children:"PRIMARY KEY"}),(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Field"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{children:"Comment"})]})}),(0,i.jsx)(t.tbody,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"okey"}),(0,i.jsx)(t.td,{children:"OptionKey"}),(0,i.jsx)(t.td,{})]})})]})]}),"\n",(0,i.jsxs)("div",{className:"single-message-body",children:[(0,i.jsx)(t.h3,{id:"body",children:"BODY"}),(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Field"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{children:"Comment"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"askExch"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"../../Enums/OptExch",children:"enum : OptExch"})}),(0,i.jsx)(t.td,{children:"first (or largest remaining) exchange at ask price"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"askMask"}),(0,i.jsx)(t.td,{children:"uint"}),(0,i.jsx)(t.td,{children:"exchange ask bit mask"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"askMktType"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"../../Enums/OptMktType",children:"flag : OptMktType"})}),(0,i.jsx)(t.td,{children:"ask side quote flags (if any)"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"askPrice"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{children:"ask price"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"askPrice2"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{children:"2nd best ask price"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"askSize"}),(0,i.jsx)(t.td,{children:"int"}),(0,i.jsx)(t.td,{children:"ask size in contracts (largest exch quote)"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"askTime"}),(0,i.jsx)(t.td,{children:"int"}),(0,i.jsx)(t.td,{children:"last ask price change (milliseconds since midnight) calculated from the srcTimestamp"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"bidExch"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"../../Enums/OptExch",children:"enum : OptExch"})}),(0,i.jsx)(t.td,{children:"first (or largest remaining) exchange at bid price"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"bidMask"}),(0,i.jsx)(t.td,{children:"uint"}),(0,i.jsx)(t.td,{children:"exchange bid bit mask"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"bidMktType"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"../../Enums/OptMktType",children:"flag : OptMktType"})}),(0,i.jsx)(t.td,{children:"bid side quote flags (if any)"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"bidPrice"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{children:"bid price"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"bidPrice2"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{children:"2nd best bid price"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"bidSize"}),(0,i.jsx)(t.td,{children:"int"}),(0,i.jsx)(t.td,{children:"bid size in contracts (largest exch quote)"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"bidTime"}),(0,i.jsx)(t.td,{children:"int"}),(0,i.jsx)(t.td,{children:"last bid price change (milliseconds since midnight) calculated from the srcTimestamp"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"cumAskSize"}),(0,i.jsx)(t.td,{children:"int"}),(0,i.jsx)(t.td,{children:"ask size in contracts (total nbbo size)"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"cumAskSize2"}),(0,i.jsx)(t.td,{children:"int"}),(0,i.jsx)(t.td,{children:"cumulative size at 2nd price"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"cumBidSize"}),(0,i.jsx)(t.td,{children:"int"}),(0,i.jsx)(t.td,{children:"bid size in contracts (total nbbo size)"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"cumBidSize2"}),(0,i.jsx)(t.td,{children:"int"}),(0,i.jsx)(t.td,{children:"cumulative size at 2nd price"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"netTimestamp"}),(0,i.jsx)(t.td,{children:"long"}),(0,i.jsx)(t.td,{children:"inbound packet PTP timestamp from SR gateway switch;usually syncronized with facility grandfather clock"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"srcTimestamp"}),(0,i.jsx)(t.td,{children:"long"}),(0,i.jsx)(t.td,{children:"source high precision timestamp (if available)"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"updateType"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"../../Enums/UpdateType",children:"enum : UpdateType"})}),(0,i.jsx)(t.td,{})]})]})]})]})]})}function o(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>r,x:()=>c});var i=s(96540);const n={},d=i.createContext(n);function r(e){const t=i.useContext(d);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),i.createElement(d.Provider,{value:t},e.children)}}}]);