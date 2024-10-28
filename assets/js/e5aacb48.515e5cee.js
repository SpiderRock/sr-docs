"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[83024],{13208:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>n,metadata:()=>i,toc:()=>o});var s=t(74848),a=t(28453);const n={sidebar_position:1,title:"3120-market-marks"},d=void 0,i={id:"MessageSchemas/Schema/Topics/market-marks/market-marks",title:"3120-market-marks",description:"| # | Message Name | Description |",source:"@site/versioned_docs/version-8.4.10.4/MessageSchemas/Schema/Topics/3120-market-marks/3120-market-marks.md",sourceDirName:"MessageSchemas/Schema/Topics/3120-market-marks",slug:"/MessageSchemas/Schema/Topics/market-marks/",permalink:"/docs/8.4.10.4/MessageSchemas/Schema/Topics/market-marks/",draft:!1,unlisted:!1,tags:[],version:"8.4.10.4",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"3120-market-marks"},sidebar:"messageSchemasSidebar",previous:{title:"StockThreshold",permalink:"/docs/8.4.10.4/MessageSchemas/Schema/Topics/market-data-stock/StockThreshold"},next:{title:"FutureCloseMark",permalink:"/docs/8.4.10.4/MessageSchemas/Schema/Topics/market-marks/FutureCloseMark"}},c={},o=[];function l(e){const r={a:"a",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.R)(),...e.components};return(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"#"}),(0,s.jsx)(r.th,{children:"Message Name"}),(0,s.jsx)(r.th,{children:"Description"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"3120"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"FutureCloseMark",children:"FutureCloseMark"})}),(0,s.jsxs)(r.td,{children:["FutureCloseMark records are published immediately after the market close - 5 min and again when exchanges publish official marks.",(0,s.jsx)("br",{}),(0,s.jsx)("br",{}),"FutureCloseMark records are published to the SpiderRock elastic cluster when clsMarkState=Final"]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"3125"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"FutureOpenMark",children:"FutureOpenMark"})}),(0,s.jsx)(r.td,{children:"FutureOpenMark records are created during the end-of-day rotation for each product and intended for use the following trading day."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"3130"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"FutureSettlementMark",children:"FutureSettlementMark"})}),(0,s.jsx)(r.td,{children:"Future settlement marks from the listing exchange"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"3140"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"OptionCloseMark",children:"OptionCloseMark"})}),(0,s.jsxs)(r.td,{children:["OptionCloseMark records are published immediately after the market close - 5 min and again when exchanges publish official marks.",(0,s.jsx)("br",{}),(0,s.jsx)("br",{}),"OptionCloseMark records are published to the SpiderRock elastic cluster when clsMarkState=Final"]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"3145"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"OptionOpenMark",children:"OptionOpenMark"})}),(0,s.jsx)(r.td,{children:"OptionOpenMark records are created during the end-of-day rotation for each product and intended for use the following trading day."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"3150"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"OptionSettlementMark",children:"OptionSettlementMark"})}),(0,s.jsx)(r.td,{children:"Option settlement marks from the listing exchange."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"3155"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"SpreadCloseMark",children:"SpreadCloseMark"})}),(0,s.jsxs)(r.td,{children:["SpreadCloseMark records are created immediately after the market close (clsMarkState=SRClose), when exchanges publish official marks (clsMarkState=ExchClose), and again during top of day rotation (clsMarkState=Final).  These records contain closing quotes and prices as well as markup details for all exchange spreads",(0,s.jsx)("br",{}),(0,s.jsx)("br",{}),"SpreadCloseMark records are published to the SpiderRock elastic cluster when clsMarkState=Final",(0,s.jsx)("br",{}),(0,s.jsx)("br",{}),"BaseObj",":Spread"]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"3160"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"SpreadOpenMark",children:"SpreadOpenMark"})}),(0,s.jsxs)(r.td,{children:["SpreadOpenMark records are created during the end-of-day rotation for each ticker and intended for use the following trading day.",(0,s.jsx)("br",{}),(0,s.jsx)("br",{}),"BaseObj",":Spread"]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"3165"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"StockCloseMark",children:"StockCloseMark"})}),(0,s.jsxs)(r.td,{children:["StockCloseMark records are published immediately after the market close - 5 min and again when exchanges publish official marks.",(0,s.jsx)("br",{}),(0,s.jsx)("br",{}),"StockCloseMark records are published to the SpiderRock elastic cluster when clsMarkState=Final"]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"3170"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"StockOpenMark",children:"StockOpenMark"})}),(0,s.jsx)(r.td,{children:"StockOpenMark records are created during the end-of-day rotation for each ticker and intended for use the following trading day."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"3175"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"SyntheticExpiryCloseMark",children:"SyntheticExpiryCloseMark"})}),(0,s.jsx)(r.td,{})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"3180"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"SyntheticExpiryOpenMark",children:"SyntheticExpiryOpenMark"})}),(0,s.jsx)(r.td,{})]})]})]})}function h(e={}){const{wrapper:r}={...(0,a.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},28453:(e,r,t)=>{t.d(r,{R:()=>d,x:()=>i});var s=t(96540);const a={},n=s.createContext(a);function d(e){const r=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:d(e.components),s.createElement(n.Provider,{value:r},e.children)}}}]);