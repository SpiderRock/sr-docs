"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[19129],{56367:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>n,default:()=>x,frontMatter:()=>i,metadata:()=>c,toc:()=>h});var r=s(74848),d=s(28453);const i={title:"StockPrintMarkup"},n="Schema: StockPrintMarkup (ID: 3055)",c={id:"MessageSchemas/Schema/Topics/market-data-stock/StockPrintMarkup",title:"StockPrintMarkup",description:"StockPrintMarkup records are created/published for all stock prints",source:"@site/docs/MessageSchemas/Schema/Topics/2990-market-data-stock/StockPrintMarkup.md",sourceDirName:"MessageSchemas/Schema/Topics/2990-market-data-stock",slug:"/MessageSchemas/Schema/Topics/market-data-stock/StockPrintMarkup",permalink:"/docs/MessageSchemas/Schema/Topics/market-data-stock/StockPrintMarkup",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"StockPrintMarkup"},sidebar:"messageSchemasSidebar",previous:{title:"StockPrint",permalink:"/docs/MessageSchemas/Schema/Topics/market-data-stock/StockPrint"},next:{title:"StockPrintSet",permalink:"/docs/MessageSchemas/Schema/Topics/market-data-stock/StockPrintSet"}},l={},h=[{value:"METADATA",id:"metadata",level:3},{value:"PRIMARY KEY",id:"primary-key",level:3},{value:"BODY",id:"body",level:3}];function a(e){const t={a:"a",h1:"h1",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.h1,{id:"schema-stockprintmarkup-id-3055",children:["Schema: StockPrintMarkup ",(0,r.jsx)("span",{className:"small-text",children:"(ID: 3055)"})]}),"\n",(0,r.jsx)(t.p,{children:"StockPrintMarkup records are created/published for all stock prints"}),"\n",(0,r.jsxs)("div",{className:"single-message-meta",children:[(0,r.jsx)(t.h3,{id:"metadata",children:"METADATA"}),(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Attribute"}),(0,r.jsx)(t.th,{children:"Value"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"MLink Token"}),(0,r.jsx)(t.td,{children:"SystemData"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Topic"}),(0,r.jsx)(t.td,{children:"market-data-stock"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"SRSE Product"}),(0,r.jsx)(t.td,{children:"SRAnalytics"})]})]})]})]}),"\n",(0,r.jsxs)("div",{className:"single-message-primarykey",children:[(0,r.jsx)(t.h3,{id:"primary-key",children:"PRIMARY KEY"}),(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Field"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Comment"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"ticker"}),(0,r.jsx)(t.td,{children:"TickerKey"}),(0,r.jsx)(t.td,{})]})})]})]}),"\n",(0,r.jsxs)("div",{className:"single-message-body",children:[(0,r.jsx)(t.h3,{id:"body",children:"BODY"}),(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Field"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Comment"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"askPrice"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"nbbo ask @ print arrival time"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"askPrice2"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"nbbo 2nd best ask @ print arrival time"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"askSize"}),(0,r.jsx)(t.td,{children:"int"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"askSize2"}),(0,r.jsx)(t.td,{children:"int"}),(0,r.jsx)(t.td,{children:"nbbo 2nd best ask size"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"bidPrice"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"nbbo bid @ print arrival time"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"bidPrice2"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"nbbo 2nd best bid @ print arrival time"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"bidSize"}),(0,r.jsx)(t.td,{children:"int"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"bidSize2"}),(0,r.jsx)(t.td,{children:"int"}),(0,r.jsx)(t.td,{children:"nbbo 2nd best bid size"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"mrkPrice"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"last regular market print price"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"netTimestamp"}),(0,r.jsx)(t.td,{children:"long"}),(0,r.jsx)(t.td,{children:"inbound print packet PTP timestamp from SR gateway switch"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"prtClusterNum"}),(0,r.jsx)(t.td,{children:"int"}),(0,r.jsx)(t.td,{children:"incremental print cluster counter (one counter per ticker; used to group prints into clusters)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"prtClusterSize"}),(0,r.jsx)(t.td,{children:"int"}),(0,r.jsx)(t.td,{children:"cumulative size of prints in this sequence (prints @ same or more aggressive price with less than 25 ms elapsing since first print; can span exchanges)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"prtCond1"}),(0,r.jsx)(t.td,{children:"byte"}),(0,r.jsx)(t.td,{children:"print condition (from SIP feed)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"prtCond2"}),(0,r.jsx)(t.td,{children:"byte"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"prtCond3"}),(0,r.jsx)(t.td,{children:"byte"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"prtCond4"}),(0,r.jsx)(t.td,{children:"byte"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"prtExch"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"../../../Enums/StkExch",children:"enum : StkExch"})}),(0,r.jsx)(t.td,{children:"print exch"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"prtNumber"}),(0,r.jsx)(t.td,{children:"long"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"prtPrice"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"print price level"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"prtSide"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"../../../Enums/PrtSide",children:"enum : PrtSide"})}),(0,r.jsx)(t.td,{children:"Print side: None; Mid; Bid; Ask"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"prtSize"}),(0,r.jsx)(t.td,{children:"int"}),(0,r.jsx)(t.td,{children:"print size"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"prtType"}),(0,r.jsx)(t.td,{children:"byte"}),(0,r.jsx)(t.td,{children:"OPRA message type (from OPRA spec)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"prtVolume"}),(0,r.jsx)(t.td,{children:"int"}),(0,r.jsx)(t.td,{children:"cumulative print size today"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"srcTimestamp"}),(0,r.jsx)(t.td,{children:"long"}),(0,r.jsx)(t.td,{children:"exchange high precision timestamp (if available)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"timestamp"}),(0,r.jsx)(t.td,{children:"DateTime"}),(0,r.jsx)(t.td,{})]})]})]})]})]})}function x(e={}){const{wrapper:t}={...(0,d.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>n,x:()=>c});var r=s(96540);const d={},i=r.createContext(d);function n(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:n(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);