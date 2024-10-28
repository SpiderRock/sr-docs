"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[48701],{58973:(e,r,a)=>{a.r(r),a.d(r,{assets:()=>o,contentTitle:()=>n,default:()=>h,frontMatter:()=>d,metadata:()=>i,toc:()=>c});var s=a(74848),t=a(28453);const d={sidebar_position:1,title:"SpreadMktData"},n=void 0,i={id:"MessageSchemas/Schema/MLink Tokens/SpreadMktData",title:"SpreadMktData",description:"| # | Message Name | Description |",source:"@site/versioned_docs/version-8.4.10.4/MessageSchemas/Schema/MLink Tokens/SpreadMktData.md",sourceDirName:"MessageSchemas/Schema/MLink Tokens",slug:"/MessageSchemas/Schema/MLink Tokens/SpreadMktData",permalink:"/docs/8.4.10.4/MessageSchemas/Schema/MLink Tokens/SpreadMktData",draft:!1,unlisted:!1,tags:[],version:"8.4.10.4",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"SpreadMktData"},sidebar:"messageSchemasSidebar",previous:{title:"SpreadExchData",permalink:"/docs/8.4.10.4/MessageSchemas/Schema/MLink Tokens/SpreadExchData"},next:{title:"StkProbModel",permalink:"/docs/8.4.10.4/MessageSchemas/Schema/MLink Tokens/StkProbModel"}},o={},c=[];function l(e){const r={a:"a",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"#"}),(0,s.jsx)(r.th,{children:"Message Name"}),(0,s.jsx)(r.th,{children:"Description"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"2895"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"../../Topics/market-data-spreads/SpreadBookMarkup",children:"SpreadBookMarkup"})}),(0,s.jsx)(r.td,{children:"Live spread quotes with SpiderRock markup details for equity and future option spreads."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"2900"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"../../Topics/market-data-spreads/SpreadBookQuote",children:"SpreadBookQuote"})}),(0,s.jsx)(r.td,{children:"This table contains live spread quote records from the individual equity option exchanges.  Each record contains up to two price levels and represents a live snapshot of the book for a specific spread."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"3155"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"../../Topics/market-marks/SpreadCloseMark",children:"SpreadCloseMark"})}),(0,s.jsxs)(r.td,{children:["SpreadCloseMark records are created immediately after the market close (clsMarkState=SRClose), when exchanges publish official marks (clsMarkState=ExchClose), and again during top of day rotation (clsMarkState=Final).  These records contain closing quotes and prices as well as markup details for all exchange spreads",(0,s.jsx)("br",{}),(0,s.jsx)("br",{}),"SpreadCloseMark records are published to the SpiderRock elastic cluster when clsMarkState=Final",(0,s.jsx)("br",{}),(0,s.jsx)("br",{}),"BaseObj",":Spread"]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"2925"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"../../Topics/market-data-spreads/SpreadMarketSummary",children:"SpreadMarketSummary"})}),(0,s.jsx)(r.td,{children:"These records represent live market summary snapshots for each active spread market"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"3160"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"../../Topics/market-marks/SpreadOpenMark",children:"SpreadOpenMark"})}),(0,s.jsxs)(r.td,{children:["SpreadOpenMark records are created during the end-of-day rotation for each ticker and intended for use the following trading day.",(0,s.jsx)("br",{}),(0,s.jsx)("br",{}),"BaseObj",":Spread"]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"2930"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"../../Topics/market-data-spreads/SpreadPrint",children:"SpreadPrint"})}),(0,s.jsx)(r.td,{})]})]})]})}function h(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},28453:(e,r,a)=>{a.d(r,{R:()=>n,x:()=>i});var s=a(96540);const t={},d=s.createContext(t);function n(e){const r=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:n(e.components),s.createElement(d.Provider,{value:r},e.children)}}}]);