"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[87983],{24111:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>i,contentTitle:()=>n,default:()=>o,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var d=s(74848),t=s(28453);const a={title:"SpreadOpenMark"},n="Schema: SpreadOpenMark (ID: 3160)",c={id:"MessageSchemas/Schema/Topics/market-marks/SpreadOpenMark",title:"SpreadOpenMark",description:"SpreadOpenMark records are created during the end-of-day rotation for each ticker and intended for use the following trading day.BaseObj:Spread",source:"@site/docs/MessageSchemas/Schema/Topics/3120-market-marks/SpreadOpenMark.md",sourceDirName:"MessageSchemas/Schema/Topics/3120-market-marks",slug:"/MessageSchemas/Schema/Topics/market-marks/SpreadOpenMark",permalink:"/docs/MessageSchemas/Schema/Topics/market-marks/SpreadOpenMark",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"SpreadOpenMark"},sidebar:"messageSchemasSidebar",previous:{title:"SpreadCloseMark",permalink:"/docs/MessageSchemas/Schema/Topics/market-marks/SpreadCloseMark"},next:{title:"StockCloseMark",permalink:"/docs/MessageSchemas/Schema/Topics/market-marks/StockCloseMark"}},i={},l=[{value:"METADATA",id:"metadata",level:3},{value:"PRIMARY KEY",id:"primary-key",level:3},{value:"BODY",id:"body",level:3}];function h(e){const r={h1:"h1",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(r.h1,{id:"schema-spreadopenmark-id-3160",children:["Schema: SpreadOpenMark ",(0,d.jsx)("span",{className:"small-text",children:"(ID: 3160)"})]}),"\n",(0,d.jsxs)(r.p,{children:["SpreadOpenMark records are created during the end-of-day rotation for each ticker and intended for use the following trading day.",(0,d.jsx)("br",{}),(0,d.jsx)("br",{}),"BaseObj",":Spread"]}),"\n",(0,d.jsxs)("div",{className:"single-message-meta",children:[(0,d.jsx)(r.h3,{id:"metadata",children:"METADATA"}),(0,d.jsxs)(r.table,{children:[(0,d.jsx)(r.thead,{children:(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.th,{children:"Attribute"}),(0,d.jsx)(r.th,{children:"Value"})]})}),(0,d.jsxs)(r.tbody,{children:[(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"Topic"}),(0,d.jsx)(r.td,{children:"3120-market-marks"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"MLink Token"}),(0,d.jsx)(r.td,{children:"SystemData"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"SRSE Product"}),(0,d.jsx)(r.td,{children:"SRSpread, SRAnalytics"})]})]})]})]}),"\n",(0,d.jsxs)("div",{className:"single-message-primarykey",children:[(0,d.jsx)(r.h3,{id:"primary-key",children:"PRIMARY KEY"}),(0,d.jsxs)(r.table,{children:[(0,d.jsx)(r.thead,{children:(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.th,{children:"#"}),(0,d.jsx)(r.th,{children:"Field"}),(0,d.jsx)(r.th,{children:"Type"}),(0,d.jsx)(r.th,{children:"Comment"})]})}),(0,d.jsx)(r.tbody,{children:(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"10"}),(0,d.jsx)(r.td,{children:"skey"}),(0,d.jsx)(r.td,{children:"TickerKey"}),(0,d.jsx)(r.td,{})]})})]})]}),"\n",(0,d.jsxs)("div",{className:"single-message-body",children:[(0,d.jsx)(r.h3,{id:"body",children:"BODY"}),(0,d.jsxs)(r.table,{children:[(0,d.jsx)(r.thead,{children:(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.th,{children:"#"}),(0,d.jsx)(r.th,{children:"Field"}),(0,d.jsx)(r.th,{children:"Type"}),(0,d.jsx)(r.th,{children:"Comment"})]})}),(0,d.jsxs)(r.tbody,{children:[(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"109"}),(0,d.jsx)(r.td,{children:"askPrc"}),(0,d.jsx)(r.td,{children:"double"}),(0,d.jsx)(r.td,{children:"ask price (SR mark from previous day)"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"106"}),(0,d.jsx)(r.td,{children:"bidPrc"}),(0,d.jsx)(r.td,{children:"double"}),(0,d.jsx)(r.td,{children:"bid price (SR mark from previous day)"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"103"}),(0,d.jsx)(r.td,{children:"closePrc"}),(0,d.jsx)(r.td,{children:"double"}),(0,d.jsx)(r.td,{children:"official exchange closing mark  (from previous day)"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"100"}),(0,d.jsx)(r.td,{children:"srClsPrc"}),(0,d.jsx)(r.td,{children:"double"}),(0,d.jsx)(r.td,{children:"SR close mark (close - 1min) (from previous day)"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"112"}),(0,d.jsx)(r.td,{children:"timestamp"}),(0,d.jsx)(r.td,{children:"DateTime"}),(0,d.jsx)(r.td,{})]})]})]})]})]})}function o(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,d.jsx)(r,{...e,children:(0,d.jsx)(h,{...e})}):h(e)}},28453:(e,r,s)=>{s.d(r,{R:()=>n,x:()=>c});var d=s(96540);const t={},a=d.createContext(t);function n(e){const r=d.useContext(a);return d.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:n(e.components),d.createElement(a.Provider,{value:r},e.children)}}}]);