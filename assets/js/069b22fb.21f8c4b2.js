"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[68936],{98931:(e,t,c)=>{c.r(t),c.d(t,{assets:()=>r,contentTitle:()=>d,default:()=>o,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var s=c(74848),n=c(28453);const a={title:"StockImbalance"},d="Schema: StockImbalance (ID: 3035)",i={id:"Schemas/Schema/Topics/market-data-stock/StockImbalance",title:"StockImbalance",description:"StockImbalance records contain live exchange closing auction imbalance details.  Imbalance information in aggregated across exchanges with imbalance feeds.Final StockImbalance records are published to the SpiderRock elastic cluster nightly after the auction close.",source:"@site/docs/Schemas/Schema/Topics/2990-market-data-stock/StockImbalance.md",sourceDirName:"Schemas/Schema/Topics/2990-market-data-stock",slug:"/Schemas/Schema/Topics/market-data-stock/StockImbalance",permalink:"/docs/Schemas/Schema/Topics/market-data-stock/StockImbalance",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"StockImbalance"},sidebar:"schemaSidebar",previous:{title:"StockExchImbalanceV2",permalink:"/docs/Schemas/Schema/Topics/market-data-stock/StockExchImbalanceV2"},next:{title:"StockMarketSummary",permalink:"/docs/Schemas/Schema/Topics/market-data-stock/StockMarketSummary"}},r={},l=[{value:"METADATA",id:"metadata",level:3},{value:"PRIMARY KEY",id:"primary-key",level:3},{value:"BODY",id:"body",level:3}];function h(e){const t={a:"a",h1:"h1",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.h1,{id:"schema-stockimbalance-id-3035",children:["Schema: StockImbalance ",(0,s.jsx)("span",{className:"small-text",children:"(ID: 3035)"})]}),"\n",(0,s.jsxs)(t.p,{children:["StockImbalance records contain live exchange closing auction imbalance details.  Imbalance information in aggregated across exchanges with imbalance feeds.",(0,s.jsx)("br",{}),(0,s.jsx)("br",{}),"Final StockImbalance records are published to the SpiderRock elastic cluster nightly after the auction close."]}),"\n",(0,s.jsxs)("div",{className:"single-message-meta",children:[(0,s.jsx)(t.h3,{id:"metadata",children:"METADATA"}),(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Attribute"}),(0,s.jsx)(t.th,{children:"Value"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"MLink Token"}),(0,s.jsx)(t.td,{children:"SystemData"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Topic"}),(0,s.jsx)(t.td,{children:"market-data-stock"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"SRSE Product"}),(0,s.jsx)(t.td,{children:"SRLive"})]})]})]})]}),"\n",(0,s.jsxs)("div",{className:"single-message-primarykey",children:[(0,s.jsx)(t.h3,{id:"primary-key",children:"PRIMARY KEY"}),(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Field"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Comment"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"ticker"}),(0,s.jsx)(t.td,{children:"TickerKey"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"auctionType"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"../../../Enums/AuctionReason",children:"enum : AuctionReason"})}),(0,s.jsx)(t.td,{children:"Opening/Closing"})]})]})]})]}),"\n",(0,s.jsxs)("div",{className:"single-message-body",children:[(0,s.jsx)(t.h3,{id:"body",children:"BODY"}),(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Field"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Comment"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"auctionTime"}),(0,s.jsx)(t.td,{children:"DateTime"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"cumAskImbalanceMkt"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"cumAskImbalanceTot"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"cumBidImbalanceMkt"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"cumBidImbalanceTot"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"cumPairedQty"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"maxImbalance"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"maxImbalanceExch"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"../../../Enums/StkExch",children:"enum : StkExch"})}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"maxImbalanceMatchPx"}),(0,s.jsx)(t.td,{children:"double"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"maxImbalanceStatus"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"../../../Enums/AuctionStatus",children:"enum : AuctionStatus"})}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"timestamp"}),(0,s.jsx)(t.td,{children:"DateTime"}),(0,s.jsx)(t.td,{})]})]})]})]})]})}function o(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},28453:(e,t,c)=>{c.d(t,{R:()=>d,x:()=>i});var s=c(96540);const n={},a=s.createContext(n);function d(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:d(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);