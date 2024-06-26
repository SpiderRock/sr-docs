"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[81800],{84963:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var n=i(74848),r=i(28453);const s={sidebar_position:2,title:"OptAnalytics"},a=void 0,o={id:"Schemas/Schema/MLink Tokens/OptAnalytics",title:"OptAnalytics",description:"| # | Message Name | Description |",source:"@site/docs/Schemas/Schema/MLink Tokens/OptAnalytics.md",sourceDirName:"Schemas/Schema/MLink Tokens",slug:"/Schemas/Schema/MLink Tokens/OptAnalytics",permalink:"/docs/Schemas/Schema/MLink Tokens/OptAnalytics",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"OptAnalytics"},sidebar:"schemaSidebar",previous:{title:"NationsIndex",permalink:"/docs/Schemas/Schema/MLink Tokens/NationsIndex"},next:{title:"OptExchAuction",permalink:"/docs/Schemas/Schema/MLink Tokens/OptExchAuction"}},c={},d=[];function l(e){const t={a:"a",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"#"}),(0,n.jsx)(t.th,{children:"Message Name"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"1015"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"../../Topics/analytics/LiveImpliedQuote",children:"LiveImpliedQuote"})}),(0,n.jsxs)(t.td,{children:["CalcSource=Tick records are computed and published each time an option NBBO price changes.  CalcSource=Loop records are computed in a 2-3 minute background loop.",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"Note that the underlier price (uPrc) will be the same for all options an underlier when CalcSource=Loop.  This is not true for CalcSource=Tick where uPrc will be the underlier price that prevailed when the option price changed.",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"If you are consuming multicast data and only want records with consistent uPrc values for all options you should ignore Tick records. Alternatively, you can use an independent underlier price source (our StockBookQuote feed or some other) and 'adjust' the values in this table to the new underlier value.",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"If you are selecting records from SRSE you should note that OptionImpliedQuoteAdj table is a proxy implementation of this table that automatically applies the appropriate underlier adjustments as records are being returned."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"1020"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"../../Topics/analytics/LiveImpliedQuoteAdj",children:"LiveImpliedQuoteAdj"})}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"1125"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"../../Topics/analytics/LiveRevConQuote",children:"LiveRevConQuote"})}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"2815"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"../../Topics/market-data-options/OptionPrintSet",children:"OptionPrintSet"})}),(0,n.jsx)(t.td,{children:"OptionPrintSet records contain every option print along with quote, surface, and SR probability details at print time.  These records also contain T+1M and T+10M forward mark details.   These records are created for every print at the time of print and are published to the SpiderRock elastic cluster 10 minutes later when T + 10M forward marks are available."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"1095"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"../../Topics/analytics/OptionRiskFactor",children:"OptionRiskFactor"})}),(0,n.jsx)(t.td,{children:"This table contains the up/dn underlier price slides used in OCC risk calculations.  Note that these values are computed by SpiderRock using similar methods but may not exactly match OCC values."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"3240"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"../../Topics/market-statistics/StockBeta",children:"StockBeta"})}),(0,n.jsx)(t.td,{children:"Beta values are computed weekly for a few different ETFs."})]})]})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},28453:(e,t,i)=>{i.d(t,{R:()=>a,x:()=>o});var n=i(96540);const r={},s=n.createContext(r);function a(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);