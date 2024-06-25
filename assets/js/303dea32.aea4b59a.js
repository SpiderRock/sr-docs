"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[39838],{37345:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var i=s(74848),n=s(28453);const r={title:"StockDetail"},d="Message: StockDetail (ID: 3250)",a={id:"Schema/Topics/market-statistics/StockDetail",title:"StockDetail",description:"This table contains a ticker level summary of some earnings related information.  This information is also available in other records but is collected here for convenience.",source:"@site/docs/Schema/Topics/3225-market-statistics/StockDetail.md",sourceDirName:"Schema/Topics/3225-market-statistics",slug:"/Schema/Topics/market-statistics/StockDetail",permalink:"/docs/Schema/Topics/market-statistics/StockDetail",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"StockDetail"},sidebar:"schemaSidebar",previous:{title:"StockBetaExt",permalink:"/docs/Schema/Topics/market-statistics/StockBetaExt"},next:{title:"TickerAnalytics",permalink:"/docs/Schema/Topics/market-statistics/TickerAnalytics"}},c={},l=[{value:"META DATA  (Topic: market-statistics )",id:"meta-data--topic-market-statistics-",level:3},{value:"PRIMARY KEY",id:"primary-key",level:3},{value:"BODY",id:"body",level:3}];function o(e){const t={a:"a",h1:"h1",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.h1,{id:"message-stockdetail-id-3250",children:["Message: StockDetail ",(0,i.jsx)("span",{className:"small-text",children:"(ID: 3250)"})]}),"\n",(0,i.jsx)(t.p,{children:"This table contains a ticker level summary of some earnings related information.  This information is also available in other records but is collected here for convenience."}),"\n",(0,i.jsxs)("div",{className:"single-message-meta",children:[(0,i.jsx)(t.h3,{id:"meta-data--topic-market-statistics-",children:"META DATA  (Topic: market-statistics )"}),(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Attribute"}),(0,i.jsx)(t.th,{children:"Value"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"MLink Token"}),(0,i.jsx)(t.td,{children:"SystemData"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"SRSE Product"}),(0,i.jsx)(t.td,{children:"SRAnalytics"})]})]})]})]}),"\n",(0,i.jsxs)("div",{className:"single-message-primarykey",children:[(0,i.jsx)(t.h3,{id:"primary-key",children:"PRIMARY KEY"}),(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Field"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{children:"Comment"})]})}),(0,i.jsx)(t.tbody,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"ticker"}),(0,i.jsx)(t.td,{children:"TickerKey"}),(0,i.jsx)(t.td,{})]})})]})]}),"\n",(0,i.jsxs)("div",{className:"single-message-body",children:[(0,i.jsx)(t.h3,{id:"body",children:"BODY"}),(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Field"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{children:"Comment"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"eMove"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{children:"implied earnings move (from LiveSurfaceTerm.eMove)"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"eMoveHist"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{children:"average historical (trail 8 quarter) earnings move (from LiveSurfaceTerm.eMoveHist)"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"isNextEarnDateConfirmed"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,i.jsx)(t.td,{children:"next date has been confirmed (usually by the company)"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"nearEarnDays"}),(0,i.jsx)(t.td,{children:"int"}),(0,i.jsx)(t.td,{children:"estimated days to next earnings event (resets to next event 2 days after the most recent event has passed)"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"nextDDivAmt"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{children:"next dividend payment amount"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"nextDDivDays"}),(0,i.jsx)(t.td,{children:"int"}),(0,i.jsx)(t.td,{children:"next dividend payment date"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"nextEarnDate"}),(0,i.jsx)(t.td,{children:"DateKey"}),(0,i.jsx)(t.td,{children:"estimated next earnings date (note that implied adjustements to this day are available in LiveSurfaceTerm)"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"nextEarnDays"}),(0,i.jsx)(t.td,{children:"int"}),(0,i.jsx)(t.td,{children:"estimated days to next earnings event (resets to next event immediately after earnings passes)"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"nextEarnTime"}),(0,i.jsx)(t.td,{children:"string(6)"}),(0,i.jsx)(t.td,{children:"estimated time of day of next earnings event"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"numOptions"}),(0,i.jsx)(t.td,{children:"int"}),(0,i.jsx)(t.td,{children:"number of listed options on this underlier (if any)"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"timestamp"}),(0,i.jsx)(t.td,{children:"DateTime"}),(0,i.jsx)(t.td,{})]})]})]})]})]})}function h(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>d,x:()=>a});var i=s(96540);const n={},r=i.createContext(n);function d(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:d(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);