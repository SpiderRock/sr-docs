"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[51112],{47862:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>d,default:()=>o,frontMatter:()=>i,metadata:()=>n,toc:()=>h});var r=s(74848),c=s(28453);const i={title:"StockBookQuote"},d="Schema: StockBookQuote (ID: 3000)",n={id:"Schemas/Schema/Topics/market-data-stock/StockBookQuote",title:"StockBookQuote",description:"This table contains live equity quote records for all CQS/UQDF securities as well as US OTC equity securities, SpiderRock synthetic markets, and a number of major indexes.  Each record contains up to two price levels and represents a live snapshot of the book for a specific market.",source:"@site/docs/Schemas/Schema/Topics/2990-market-data-stock/StockBookQuote.md",sourceDirName:"Schemas/Schema/Topics/2990-market-data-stock",slug:"/Schemas/Schema/Topics/market-data-stock/StockBookQuote",permalink:"/docs/Schemas/Schema/Topics/market-data-stock/StockBookQuote",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"StockBookQuote"},sidebar:"schemaSidebar",previous:{title:"StockAuctionSummary",permalink:"/docs/Schemas/Schema/Topics/market-data-stock/StockAuctionSummary"},next:{title:"StockExchImbalance",permalink:"/docs/Schemas/Schema/Topics/market-data-stock/StockExchImbalance"}},l={},h=[{value:"METADATA",id:"metadata",level:3},{value:"PRIMARY KEY",id:"primary-key",level:3},{value:"BODY",id:"body",level:3}];function a(e){const t={a:"a",h1:"h1",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,c.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.h1,{id:"schema-stockbookquote-id-3000",children:["Schema: StockBookQuote ",(0,r.jsx)("span",{className:"small-text",children:"(ID: 3000)"})]}),"\n",(0,r.jsx)(t.p,{children:"This table contains live equity quote records for all CQS/UQDF securities as well as US OTC equity securities, SpiderRock synthetic markets, and a number of major indexes.  Each record contains up to two price levels and represents a live snapshot of the book for a specific market."}),"\n",(0,r.jsxs)("div",{className:"single-message-meta",children:[(0,r.jsx)(t.h3,{id:"metadata",children:"METADATA"}),(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Attribute"}),(0,r.jsx)(t.th,{children:"Value"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"MLink Token"}),(0,r.jsx)(t.td,{children:"EqtMktData"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Topic"}),(0,r.jsx)(t.td,{children:"market-data-stock"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"SRSE Product"}),(0,r.jsx)(t.td,{children:"SRLive"})]})]})]})]}),"\n",(0,r.jsxs)("div",{className:"single-message-primarykey",children:[(0,r.jsx)(t.h3,{id:"primary-key",children:"PRIMARY KEY"}),(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Field"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Comment"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"ticker"}),(0,r.jsx)(t.td,{children:"TickerKey"}),(0,r.jsx)(t.td,{})]})})]})]}),"\n",(0,r.jsxs)("div",{className:"single-message-body",children:[(0,r.jsx)(t.h3,{id:"body",children:"BODY"}),(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Field"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Comment"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"askExch1"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"../../../Enums/StkExch",children:"enum : StkExch"})}),(0,r.jsx)(t.td,{children:"exchange"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"askExch2"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"../../../Enums/StkExch",children:"enum : StkExch"})}),(0,r.jsx)(t.td,{children:"exchange"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"askMask1"}),(0,r.jsx)(t.td,{children:"uint"}),(0,r.jsx)(t.td,{children:"ask exchange bit mask for best ask price level"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"askMask2"}),(0,r.jsx)(t.td,{children:"uint"}),(0,r.jsx)(t.td,{children:"ask exchange bit mask for next best ask price level"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"askPrice1"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"ask price for best price level"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"askPrice2"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"ask price for next best price level"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"askSize1"}),(0,r.jsx)(t.td,{children:"int"}),(0,r.jsx)(t.td,{children:"ask size for best price level"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"askSize2"}),(0,r.jsx)(t.td,{children:"int"}),(0,r.jsx)(t.td,{children:"ask size for next best price level"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"bidExch1"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"../../../Enums/StkExch",children:"enum : StkExch"})}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"bidExch2"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"../../../Enums/StkExch",children:"enum : StkExch"})}),(0,r.jsx)(t.td,{children:"exchange"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"bidMask1"}),(0,r.jsx)(t.td,{children:"uint"}),(0,r.jsx)(t.td,{children:"bid exchange bit mask for best bid price level"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"bidMask2"}),(0,r.jsx)(t.td,{children:"uint"}),(0,r.jsx)(t.td,{children:"bid exchange bit mask for next best bid price level"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"bidPrice1"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"bid price for best price level"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"bidPrice2"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"bid price for next best price level"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"bidSize1"}),(0,r.jsx)(t.td,{children:"int"}),(0,r.jsx)(t.td,{children:"bid size for best price level"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"bidSize2"}),(0,r.jsx)(t.td,{children:"int"}),(0,r.jsx)(t.td,{children:"bid size for next best price level"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"haltMask"}),(0,r.jsx)(t.td,{children:"uint"}),(0,r.jsx)(t.td,{children:"bit mask of halted exchanges"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"marketStatus"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"../../../Enums/MarketStatus",children:"enum : MarketStatus"})}),(0,r.jsx)(t.td,{children:"market status (open, halted, etc)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"netTimestamp"}),(0,r.jsx)(t.td,{children:"long"}),(0,r.jsx)(t.td,{children:"inbound packet PTP timestamp from SR gateway switch;usually syncronized with facility grandfather clock"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"srcTimestamp"}),(0,r.jsx)(t.td,{children:"long"}),(0,r.jsx)(t.td,{children:"source high precision timestamp (if available)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"updateType"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"../../../Enums/UpdateType",children:"enum : UpdateType"})}),(0,r.jsx)(t.td,{})]})]})]})]})]})}function o(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>d,x:()=>n});var r=s(96540);const c={},i=r.createContext(c);function d(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function n(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:d(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);