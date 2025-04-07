"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([["68321"],{68837:function(e,t,r){r.r(t),r.d(t,{default:()=>h,frontMatter:()=>n,metadata:()=>a,assets:()=>o,toc:()=>d,contentTitle:()=>i});var a=JSON.parse('{"id":"MessageSchemas/Schema/Topics/market-data-stock/market-data-stock","title":"2990-market-data-stock","description":"| # | Message Name | Description |","source":"@site/docs/MessageSchemas/Schema/Topics/2990-market-data-stock/2990-market-data-stock.md","sourceDirName":"MessageSchemas/Schema/Topics/2990-market-data-stock","slug":"/MessageSchemas/Schema/Topics/market-data-stock/","permalink":"/docs/next/MessageSchemas/Schema/Topics/market-data-stock/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1,"title":"2990-market-data-stock"},"sidebar":"messageSchemasSidebar","previous":{"title":"SpreadPrint","permalink":"/docs/next/MessageSchemas/Schema/Topics/market-data-spreads/SpreadPrint"},"next":{"title":"StockAuctionSummary","permalink":"/docs/next/MessageSchemas/Schema/Topics/market-data-stock/StockAuctionSummary"}}'),c=r("52676"),s=r("91503");let n={sidebar_position:1,title:"2990-market-data-stock"},i=void 0,o={},d=[];function l(e){let t={a:"a",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,c.jsxs)(t.table,{children:[(0,c.jsx)(t.thead,{children:(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.th,{children:"#"}),(0,c.jsx)(t.th,{children:"Message Name"}),(0,c.jsx)(t.th,{children:"Description"})]})}),(0,c.jsxs)(t.tbody,{children:[(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:"2995"}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.a,{href:"StockAuctionSummary",children:"StockAuctionSummary"})}),(0,c.jsx)(t.td,{children:"These records represent current and recent trailing market open/close auction results"})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:"3000"}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.a,{href:"StockBookQuote",children:"StockBookQuote"})}),(0,c.jsx)(t.td,{children:"This table contains live equity quote records for all CQS/UQDF securities as well as US OTC equity securities, SpiderRock synthetic markets, and a number of major indexes.  Each record contains up to two price levels and represents a live snapshot of the book for a specific market."})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:"3015"}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.a,{href:"StockExchImbalance",children:"StockExchImbalance"})}),(0,c.jsxs)(t.td,{children:["StockExchImbalance records contain live exchange closing auction imbalance details.  Imbalance information can be available from more than one exchange for each ticker.",(0,c.jsx)("br",{}),(0,c.jsx)("br",{}),"Final StockExchImbalance records are published to the SpiderRock elastic cluster nightly after the auction close."]})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:"3020"}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.a,{href:"StockExchImbalanceV2",children:"StockExchImbalanceV2"})}),(0,c.jsxs)(t.td,{children:["StockExchImbalanceV2 records contain live exchange closing auction imbalance details.  Imbalance information can be available from more than one exchange for each ticker.",(0,c.jsx)("br",{}),(0,c.jsx)("br",{}),"Final StockExchImbalanceV2 records are published to the SpiderRock elastic cluster nightly after the auction close."]})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:"3035"}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.a,{href:"StockImbalance",children:"StockImbalance"})}),(0,c.jsxs)(t.td,{children:["StockImbalance records contain live exchange closing auction imbalance details.  Imbalance information in aggregated across exchanges with imbalance feeds.",(0,c.jsx)("br",{}),(0,c.jsx)("br",{}),"Final StockImbalance records are published to the SpiderRock elastic cluster nightly after the auction close."]})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:"3040"}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.a,{href:"StockMarketSummary",children:"StockMarketSummary"})}),(0,c.jsx)(t.td,{children:"These records represent live market summary snapshots for equity, index, and synthetic markets."})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:"3045"}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.a,{href:"StockPrint",children:"StockPrint"})}),(0,c.jsx)(t.td,{children:"The most recent (last) print record for CTS/UTDF markets as well as SpiderRock synthetic markets.  Records also incorporate some summary detail and closing mark information as well."})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:"3055"}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.a,{href:"StockPrintMarkup",children:"StockPrintMarkup"})}),(0,c.jsx)(t.td,{children:"StockPrintMarkup records are created/published for all stock prints"})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:"3060"}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.a,{href:"StockPrintSet",children:"StockPrintSet"})}),(0,c.jsx)(t.td,{children:"StockPrintSet records are created for each print and published to the SpiderRock elastic cluster 10 minutes later, when T+10M markup detail is available."})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:"3065"}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.a,{href:"StockThreshold",children:"StockThreshold"})}),(0,c.jsx)(t.td,{children:"StockThreshold records contain information about whether and how long a stock has been on the REG SRO threshold list."})]})]})]})}function h(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(l,{...e})}):l(e)}},91503:function(e,t,r){r.d(t,{Z:function(){return i},a:function(){return n}});var a=r(75271);let c={},s=a.createContext(c);function n(e){let t=a.useContext(s);return a.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:n(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);