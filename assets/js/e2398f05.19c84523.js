"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[99317],{74955:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>n,metadata:()=>d,toc:()=>c});var i=s(74848),t=s(28453);const n={sidebar_position:1,title:"ClientRisk"},o=void 0,d={id:"MessageSchemas/Schema/MLink Tokens/ClientRisk",title:"ClientRisk",description:"| # | Message Name | Description |",source:"@site/docs/MessageSchemas/Schema/MLink Tokens/ClientRisk.md",sourceDirName:"MessageSchemas/Schema/MLink Tokens",slug:"/MessageSchemas/Schema/MLink Tokens/ClientRisk",permalink:"/docs/next/MessageSchemas/Schema/MLink Tokens/ClientRisk",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"ClientRisk"},sidebar:"messageSchemasSidebar",previous:{title:"ClientLive",permalink:"/docs/next/MessageSchemas/Schema/MLink Tokens/ClientLive"},next:{title:"ClientTheo",permalink:"/docs/next/MessageSchemas/Schema/MLink Tokens/ClientTheo"}},a={},c=[];function l(e){const r={a:"a",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,i.jsxs)(r.table,{children:[(0,i.jsx)(r.thead,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.th,{children:"#"}),(0,i.jsx)(r.th,{children:"Message Name"}),(0,i.jsx)(r.th,{children:"Description"})]})}),(0,i.jsxs)(r.tbody,{children:[(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"4745"}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"../../Topics/risk-v5/AccountRiskRecordV5",children:"AccountRiskRecordV5"})}),(0,i.jsx)(r.td,{children:"AccountRiskRecords contain account level position and risk summary detail. These records are published by AggRiskServers throughout the day approximately once per minute."})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"1945"}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"../../Topics/client-theos/ClientBeta",children:"ClientBeta"})}),(0,i.jsx)(r.td,{})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"4750"}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"../../Topics/risk-v5/CurrencyPositionRecordV5",children:"CurrencyPositionRecordV5"})}),(0,i.jsxs)(r.td,{children:["CurrencyPositionRecords are live risk records that contain start-of-day positions and all subsequent transactions.",(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),"These records are published by a CoreRiskServer and represent the position and risk markup detail for a single currency.",(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),"New records are published immediately when a position changes and about once per minute if no position has changed."]})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"4755"}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"../../Topics/risk-v5/CurrencyTransaction",children:"CurrencyTransaction"})}),(0,i.jsx)(r.td,{})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"4760"}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"../../Topics/risk-v5/EquityCorpActionRecordV5",children:"EquityCorpActionRecordV5"})}),(0,i.jsx)(r.td,{children:"corp action record (managed by SR)"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"4765"}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"../../Topics/risk-v5/ExpirationRiskRecordV5",children:"ExpirationRiskRecordV5"})}),(0,i.jsx)(r.td,{children:"ExpirationRiskRecords contain account level position and risk summary detail. These records are published by AggRiskServers throughout the day approximately once per minute."})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"4775"}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"../../Topics/risk-v5/FuturePositionRecordV5",children:"FuturePositionRecordV5"})}),(0,i.jsxs)(r.td,{children:["FuturePositionRecords are live risk records that contain start-of-day positions and all subsequent executions, including executions reported as done away.",(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),"These records are published by a CoreRiskServer and represent the position and risk markup detail for a single futures contract.",(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),"New records are published immediately when a position changes and about once per minute if no position has changed.",(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),"Note that all stock, future and option records for a chain are published simultaneously and records for the same chain should have consistent marks."]})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"4780"}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"../../Topics/risk-v5/FutureRiskDetailV5",children:"FutureRiskDetailV5"})}),(0,i.jsx)(r.td,{children:"FutureRiskDetail records contain semi-static markup detail for FutureRiskSummary records."})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"4785"}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"../../Topics/risk-v5/FutureRiskSummaryV5",children:"FutureRiskSummaryV5"})}),(0,i.jsxs)(r.td,{children:["FutureRiskSummary records contain live future level risk aggregation of OptionPositionRecord and FuturePositionRecord details.",(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),"Records are published if/when positions change and about once per minute otherwise."]})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"4790"}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"../../Topics/risk-v5/IndustryRiskRecordV5",children:"IndustryRiskRecordV5"})}),(0,i.jsx)(r.td,{children:"IndustryRiskRecords contain account level position and risk summary detail. These records are published by AggRiskServers throughout the day approximately once per minute."})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"4795"}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"../../Topics/risk-v5/OptionCorpActionRecordV5",children:"OptionCorpActionRecordV5"})}),(0,i.jsx)(r.td,{})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"4800"}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"../../Topics/risk-v5/OptionExAsRecordV5",children:"OptionExAsRecordV5"})}),(0,i.jsx)(r.td,{children:"Option exercise/assigment records (either from SR clearing loaders or uploaded directly by client)"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"4805"}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"../../Topics/risk-v5/OptionPositionRecordV5",children:"OptionPositionRecordV5"})}),(0,i.jsxs)(r.td,{children:["OptionPositionRecords are live risk records that contain start-of-day positions and all subsequent executions, including executions reported as done away.",(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),"These records are published by a CoreRiskServer and represent the position and risk markup detail for a single option series.",(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),"New records are published immediately when a position changes and about once per minute if no position has changed.",(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),"Note that all records for a single underlier are published simultaneously and records for the same chain should have consistent marks."]})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"4810"}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"../../Topics/risk-v5/ProductRiskDetailV5",children:"ProductRiskDetailV5"})}),(0,i.jsx)(r.td,{children:"ProductRiskDetail records contain semi-static markup detail for FutureRiskSummary records."})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"4815"}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"../../Topics/risk-v5/ProductRiskSummaryV5",children:"ProductRiskSummaryV5"})}),(0,i.jsxs)(r.td,{children:["ProductRiskSummary records contain live risk aggregation of FutureRiskSummaryV5 records.",(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),"Records are published if/when positions change and about once per minute otherwise."]})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"4820"}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"../../Topics/risk-v5/RiskAggGroupStateV5",children:"RiskAggGroupStateV5"})}),(0,i.jsx)(r.td,{children:"RiskAggGroupState records are published by AggRiskServer immediately if/when a position update occurs. These records are consumed by execution engines and influence child order position markup."})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"4825"}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"../../Topics/risk-v5/RiskCubeDetailV5",children:"RiskCubeDetailV5"})}),(0,i.jsxs)(r.td,{children:["RiskCubeDetail records are published by CoreRiskServers and are designed to be aggregated and analyzed over time.",(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),"RiskCubeDetail records are published to the SpiderRock Archive Host data pipeline at the end of each trading period."]})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"4830"}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"../../Topics/risk-v5/SodCashRecordV5",children:"SodCashRecordV5"})}),(0,i.jsxs)(r.td,{children:["SodCashRecords contain a start-of-day currency position that derived from dividend or corporate action being applied to a prior period position.",(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),"These records are computed and published by SR rotation servers."]})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"4835"}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"../../Topics/risk-v5/SodClearingRecordV5",children:"SodClearingRecordV5"})}),(0,i.jsxs)(r.td,{children:["SodClearingRecords contain start-of-day option position and mark details.  They can be source directly from a prime broker by SpiderRock or inserted by clients.",(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),"They can also be modified after the start of trading. These records are the source of the CLR side positions in SR risk records."]})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"4850"}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"../../Topics/risk-v5/StockPositionRecordV5",children:"StockPositionRecordV5"})}),(0,i.jsxs)(r.td,{children:["StockPositionRecords are live risk records that contain start-of-day positions and all subsequent executions, including executions reported as done away.",(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),"These records are published by a CoreRiskServer and represent the position and risk markup detail for a single equity or ETF security.",(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),"New records are published immediately when a position changes and about once per minute if no position has changed.",(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),"Note that all stock, future and option records for a single ticker are published simultaneously and records for the same chain should have consistent marks."]})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"4855"}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"../../Topics/risk-v5/SymbolMarginSummaryV5",children:"SymbolMarginSummaryV5"})}),(0,i.jsx)(r.td,{children:"SymbolMarginSummary records are published by the AggRiskServers and consumed by execution engines"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"4860"}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"../../Topics/risk-v5/SymbolRiskDetailV5",children:"SymbolRiskDetailV5"})}),(0,i.jsx)(r.td,{children:"SymbolRiskDetail records contain semi-static markup detail for SymbolRiskSummary records."})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"4865"}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"../../Topics/risk-v5/SymbolRiskSummaryV5",children:"SymbolRiskSummaryV5"})}),(0,i.jsxs)(r.td,{children:["SymbolRiskSummary records contain live symbol level risk aggregation of StockPositionRecord and OptionPositionRecord values.",(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),"Records are published by AggRiskServers if/when positions change and about once per minute otherwise."]})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"4870"}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"../../Topics/risk-v5/TradeCubeDetailV5",children:"TradeCubeDetailV5"})}),(0,i.jsxs)(r.td,{children:["TradeCubeDetail records are published by CoreRiskServers and are visible in SRSE throughout the day.  They are designed to be aggregated and analyzed over time.",(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),"TradeCubeDetail records are published to the SpiderRock Archive Host data pipeline after all markup detail is complete."]})]})]})]})}function h(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},28453:(e,r,s)=>{s.d(r,{R:()=>o,x:()=>d});var i=s(96540);const t={},n=i.createContext(t);function o(e){const r=i.useContext(n);return i.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),i.createElement(n.Provider,{value:r},e.children)}}}]);