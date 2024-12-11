"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[31246],{51268:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>n,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var s=r(74848),c=r(28453);const a={sidebar_position:1,title:"2990-market-data-stock"},n=void 0,i={id:"MessageSchemas/Schema/Topics/market-data-stock/market-data-stock",title:"2990-market-data-stock",description:"| # | Message Name | Description |",source:"@site/versioned_docs/version-8.4.10.4/MessageSchemas/Schema/Topics/2990-market-data-stock/2990-market-data-stock.md",sourceDirName:"MessageSchemas/Schema/Topics/2990-market-data-stock",slug:"/MessageSchemas/Schema/Topics/market-data-stock/",permalink:"/docs/8.4.10.4/MessageSchemas/Schema/Topics/market-data-stock/",draft:!1,unlisted:!1,tags:[],version:"8.4.10.4",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"2990-market-data-stock"},sidebar:"messageSchemasSidebar",previous:{title:"SpreadPrint",permalink:"/docs/8.4.10.4/MessageSchemas/Schema/Topics/market-data-spreads/SpreadPrint"},next:{title:"StockAuctionSummary",permalink:"/docs/8.4.10.4/MessageSchemas/Schema/Topics/market-data-stock/StockAuctionSummary"}},o={},d=[];function l(e){const t={a:"a",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,c.R)(),...e.components};return(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"#"}),(0,s.jsx)(t.th,{children:"Message Name"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"2995"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"StockAuctionSummary",children:"StockAuctionSummary"})}),(0,s.jsx)(t.td,{children:"These records represent current and recent trailing market open/close auction results"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"3000"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"StockBookQuote",children:"StockBookQuote"})}),(0,s.jsx)(t.td,{children:"This table contains live equity quote records for all CQS/UQDF securities as well as US OTC equity securities, SpiderRock synthetic markets, and a number of major indexes.  Each record contains up to two price levels and represents a live snapshot of the book for a specific market."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"3015"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"StockExchImbalance",children:"StockExchImbalance"})}),(0,s.jsxs)(t.td,{children:["StockExchImbalance records contain live exchange closing auction imbalance details.  Imbalance information can be available from more than one exchange for each ticker.",(0,s.jsx)("br",{}),(0,s.jsx)("br",{}),"Final StockExchImbalance records are published to the SpiderRock elastic cluster nightly after the auction close."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"3020"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"StockExchImbalanceV2",children:"StockExchImbalanceV2"})}),(0,s.jsxs)(t.td,{children:["StockExchImbalanceV2 records contain live exchange closing auction imbalance details.  Imbalance information can be available from more than one exchange for each ticker.",(0,s.jsx)("br",{}),(0,s.jsx)("br",{}),"Final StockExchImbalanceV2 records are published to the SpiderRock elastic cluster nightly after the auction close."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"3035"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"StockImbalance",children:"StockImbalance"})}),(0,s.jsxs)(t.td,{children:["StockImbalance records contain live exchange closing auction imbalance details.  Imbalance information in aggregated across exchanges with imbalance feeds.",(0,s.jsx)("br",{}),(0,s.jsx)("br",{}),"Final StockImbalance records are published to the SpiderRock elastic cluster nightly after the auction close."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"3040"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"StockMarketSummary",children:"StockMarketSummary"})}),(0,s.jsx)(t.td,{children:"These records represent live market summary snapshots for equity, index, and synthetic markets."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"3045"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"StockPrint",children:"StockPrint"})}),(0,s.jsx)(t.td,{children:"The most recent (last) print record for CTS/UTDF markets as well as SpiderRock synthetic markets.  Records also incorporate some summary detail and closing mark information as well."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"3055"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"StockPrintMarkup",children:"StockPrintMarkup"})}),(0,s.jsx)(t.td,{children:"StockPrintMarkup records are created/published for all stock prints"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"3060"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"StockPrintSet",children:"StockPrintSet"})}),(0,s.jsx)(t.td,{children:"StockPrintSet records are created for each print and published to the SpiderRock elastic cluster 10 minutes later, when T+10M markup detail is available."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"3065"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"StockThreshold",children:"StockThreshold"})}),(0,s.jsx)(t.td,{children:"StockThreshold records contain information about whether and how long a stock has been on the REG SRO threshold list."})]})]})]})}function h(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},28453:(e,t,r)=>{r.d(t,{R:()=>n,x:()=>i});var s=r(96540);const c={},a=s.createContext(c);function n(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:n(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);