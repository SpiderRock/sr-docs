"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[863],{73707:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>a,contentTitle:()=>d,default:()=>o,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var n=s(74848),i=s(28453);const r={title:"StockDetail"},d="Schema: StockDetail (ID: 3250)",c={id:"MessageSchemas/Schema/Topics/market-statistics/StockDetail",title:"StockDetail",description:"This table contains a ticker level summary of some earnings related information.  This information is also available in other records but is collected here for convenience.",source:"@site/docs/MessageSchemas/Schema/Topics/3225-market-statistics/StockDetail.md",sourceDirName:"MessageSchemas/Schema/Topics/3225-market-statistics",slug:"/MessageSchemas/Schema/Topics/market-statistics/StockDetail",permalink:"/docs/MessageSchemas/Schema/Topics/market-statistics/StockDetail",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"StockDetail"},sidebar:"messageSchemasSidebar",previous:{title:"StockBetaExt",permalink:"/docs/MessageSchemas/Schema/Topics/market-statistics/StockBetaExt"},next:{title:"TickerAnalytics",permalink:"/docs/MessageSchemas/Schema/Topics/market-statistics/TickerAnalytics"}},a={},l=[{value:"METADATA",id:"metadata",level:3},{value:"BODY",id:"body",level:3}];function h(e){const t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h3:"h3",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.h1,{id:"schema-stockdetail-id-3250",children:["Schema: StockDetail ",(0,n.jsx)("span",{className:"small-text",children:"(ID: 3250)"})]}),"\n",(0,n.jsx)(t.p,{children:"This table contains a ticker level summary of some earnings related information.  This information is also available in other records but is collected here for convenience."}),"\n",(0,n.jsx)(t.h3,{id:"metadata",children:"METADATA"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Attribute"}),(0,n.jsx)(t.th,{children:"Value"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Topic"}),(0,n.jsx)(t.td,{children:"3225-market-statistics"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"MLink Token"}),(0,n.jsx)(t.td,{children:"SystemData"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"SRSE Product"}),(0,n.jsx)(t.td,{children:"SRAnalytics"})]})]})]}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Note:"})," The symbol ",(0,n.jsx)(t.code,{children:"="})," next to a field number indicates that it is a primary key."]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"body",children:"BODY"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"#"}),(0,n.jsx)(t.th,{children:"Field"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Comment"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"10="}),(0,n.jsx)(t.td,{children:"ticker"}),(0,n.jsx)(t.td,{children:"TickerKey"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"100"}),(0,n.jsx)(t.td,{children:"eMove"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"implied earnings move (from LiveSurfaceTerm.eMove)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"103"}),(0,n.jsx)(t.td,{children:"eMoveHist"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"average historical (trail 8 quarter) earnings move (from LiveSurfaceTerm.eMoveHist)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"106"}),(0,n.jsx)(t.td,{children:"nextEarnDays"}),(0,n.jsx)(t.td,{children:"int"}),(0,n.jsx)(t.td,{children:"estimated days to next earnings event (resets to next event immediately after earnings passes)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"109"}),(0,n.jsx)(t.td,{children:"nearEarnDays"}),(0,n.jsx)(t.td,{children:"int"}),(0,n.jsx)(t.td,{children:"estimated days to next earnings event (resets to next event 2 days after the most recent event has passed)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"112"}),(0,n.jsx)(t.td,{children:"nextEarnTime"}),(0,n.jsx)(t.td,{children:"string(6)"}),(0,n.jsx)(t.td,{children:"estimated time of day of next earnings event"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"115"}),(0,n.jsx)(t.td,{children:"nextEarnDate"}),(0,n.jsx)(t.td,{children:"DateKey"}),(0,n.jsx)(t.td,{children:"estimated next earnings date (note that implied adjustements to this day are available in LiveSurfaceTerm)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"118"}),(0,n.jsx)(t.td,{children:"isNextEarnDateConfirmed"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,n.jsx)(t.td,{children:"next date has been confirmed (usually by the company)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"121"}),(0,n.jsx)(t.td,{children:"nextDDivAmt"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"next dividend payment amount"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"124"}),(0,n.jsx)(t.td,{children:"nextDDivDays"}),(0,n.jsx)(t.td,{children:"int"}),(0,n.jsx)(t.td,{children:"next dividend payment date"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"127"}),(0,n.jsx)(t.td,{children:"numOptions"}),(0,n.jsx)(t.td,{children:"int"}),(0,n.jsx)(t.td,{children:"number of listed options on this underlier (if any)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"130"}),(0,n.jsx)(t.td,{children:"timestamp"}),(0,n.jsx)(t.td,{children:"DateTime"}),(0,n.jsx)(t.td,{})]})]})]})]})}function o(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>d,x:()=>c});var n=s(96540);const i={},r=n.createContext(i);function d(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);