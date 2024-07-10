"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[95273],{46007:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>c,default:()=>o,frontMatter:()=>n,metadata:()=>a,toc:()=>l});var s=t(74848),d=t(28453);const n={title:"FutureOpenMark"},c="Schema: FutureOpenMark (ID: 3125)",a={id:"MessageSchemas/Schema/Topics/market-marks/FutureOpenMark",title:"FutureOpenMark",description:"FutureOpenMark records are created during the end-of-day rotation for each product and intended for use the following trading day.",source:"@site/docs/MessageSchemas/Schema/Topics/3120-market-marks/FutureOpenMark.md",sourceDirName:"MessageSchemas/Schema/Topics/3120-market-marks",slug:"/MessageSchemas/Schema/Topics/market-marks/FutureOpenMark",permalink:"/docs/MessageSchemas/Schema/Topics/market-marks/FutureOpenMark",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"FutureOpenMark"},sidebar:"messageSchemasSidebar",previous:{title:"FutureCloseMark",permalink:"/docs/MessageSchemas/Schema/Topics/market-marks/FutureCloseMark"},next:{title:"FutureSettlementMark",permalink:"/docs/MessageSchemas/Schema/Topics/market-marks/FutureSettlementMark"}},i={},l=[{value:"METADATA",id:"metadata",level:3},{value:"BODY",id:"body",level:3}];function h(e){const r={blockquote:"blockquote",code:"code",h1:"h1",h3:"h3",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(r.h1,{id:"schema-futureopenmark-id-3125",children:["Schema: FutureOpenMark ",(0,s.jsx)("span",{className:"small-text",children:"(ID: 3125)"})]}),"\n",(0,s.jsx)(r.p,{children:"FutureOpenMark records are created during the end-of-day rotation for each product and intended for use the following trading day."}),"\n",(0,s.jsx)(r.h3,{id:"metadata",children:"METADATA"}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Attribute"}),(0,s.jsx)(r.th,{children:"Value"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Topic"}),(0,s.jsx)(r.td,{children:"3120-market-marks"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"MLink Token"}),(0,s.jsx)(r.td,{children:"FutMarkData"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"SRSE Product"}),(0,s.jsx)(r.td,{children:"SRLive, SRAnalytics"})]})]})]}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsxs)(r.blockquote,{children:["\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"Note:"})," The symbol ",(0,s.jsx)(r.code,{children:"="})," next to a field number indicates that it is a primary key."]}),"\n"]}),"\n",(0,s.jsx)(r.h3,{id:"body",children:"BODY"}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"#"}),(0,s.jsx)(r.th,{children:"Field"}),(0,s.jsx)(r.th,{children:"Type"}),(0,s.jsx)(r.th,{children:"Comment"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"10="}),(0,s.jsx)(r.td,{children:"fkey"}),(0,s.jsx)(r.td,{children:"ExpiryKey"}),(0,s.jsx)(r.td,{})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"100"}),(0,s.jsx)(r.td,{children:"tradeDate"}),(0,s.jsx)(r.td,{children:"DateKey"}),(0,s.jsx)(r.td,{})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"103"}),(0,s.jsx)(r.td,{children:"srClsPrc"}),(0,s.jsx)(r.td,{children:"double"}),(0,s.jsx)(r.td,{children:"SR open mark; [SR close mark (close - 1min) from previous day]"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"106"}),(0,s.jsx)(r.td,{children:"closePrc"}),(0,s.jsx)(r.td,{children:"double"}),(0,s.jsx)(r.td,{children:"exchange open mark; [exchange close mark from previous day]"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"109"}),(0,s.jsx)(r.td,{children:"bidPrc"}),(0,s.jsx)(r.td,{children:"double"}),(0,s.jsx)(r.td,{children:"bid price (SR bid price from previous day)"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"112"}),(0,s.jsx)(r.td,{children:"askPrc"}),(0,s.jsx)(r.td,{children:"double"}),(0,s.jsx)(r.td,{children:"ask price (SR ask price from previous day)"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"115"}),(0,s.jsx)(r.td,{children:"timestamp"}),(0,s.jsx)(r.td,{children:"DateTime"}),(0,s.jsx)(r.td,{})]})]})]})]})}function o(e={}){const{wrapper:r}={...(0,d.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},28453:(e,r,t)=>{t.d(r,{R:()=>c,x:()=>a});var s=t(96540);const d={},n=s.createContext(d);function c(e){const r=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:c(e.components),s.createElement(n.Provider,{value:r},e.children)}}}]);