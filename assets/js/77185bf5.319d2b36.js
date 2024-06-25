"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[32116],{99412:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>n,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>a});var s=r(74848),d=r(28453);const i={title:"FutureMarketSummary"},n="Message: FutureMarketSummary (ID: 2590)",c={id:"Schema/Topics/market-data-futures/FutureMarketSummary",title:"FutureMarketSummary",description:"These records represent live market summary snapshots for each active futures markets.",source:"@site/docs/Schema/Topics/2580-market-data-futures/FutureMarketSummary.md",sourceDirName:"Schema/Topics/2580-market-data-futures",slug:"/Schema/Topics/market-data-futures/FutureMarketSummary",permalink:"/docs/Schema/Topics/market-data-futures/FutureMarketSummary",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"FutureMarketSummary"},sidebar:"schemaSidebar",previous:{title:"FutureBookQuote",permalink:"/docs/Schema/Topics/market-data-futures/FutureBookQuote"},next:{title:"FuturePrint",permalink:"/docs/Schema/Topics/market-data-futures/FuturePrint"}},l={},a=[{value:"META DATA  (Topic: market-data-futures )",id:"meta-data--topic-market-data-futures-",level:3},{value:"PRIMARY KEY",id:"primary-key",level:3},{value:"BODY",id:"body",level:3}];function h(e){const t={h1:"h1",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.h1,{id:"message-futuremarketsummary-id-2590",children:["Message: FutureMarketSummary ",(0,s.jsx)("span",{className:"small-text",children:"(ID: 2590)"})]}),"\n",(0,s.jsx)(t.p,{children:"These records represent live market summary snapshots for each active futures markets."}),"\n",(0,s.jsxs)("div",{className:"single-message-meta",children:[(0,s.jsx)(t.h3,{id:"meta-data--topic-market-data-futures-",children:"META DATA  (Topic: market-data-futures )"}),(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Attribute"}),(0,s.jsx)(t.th,{children:"Value"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"MLink Token"}),(0,s.jsx)(t.td,{children:"FutSummaryData"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"SRSE Product"}),(0,s.jsx)(t.td,{children:"SRLive"})]})]})]})]}),"\n",(0,s.jsxs)("div",{className:"single-message-primarykey",children:[(0,s.jsx)(t.h3,{id:"primary-key",children:"PRIMARY KEY"}),(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Field"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Comment"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"fkey"}),(0,s.jsx)(t.td,{children:"ExpiryKey"}),(0,s.jsx)(t.td,{})]})})]})]}),"\n",(0,s.jsxs)("div",{className:"single-message-body",children:[(0,s.jsx)(t.h3,{id:"body",children:"BODY"}),(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Field"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Comment"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"askCount"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"num prints >= quote.ask"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"askVolume"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"volume when prtPrice >= quote.ask"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"bidCount"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"num prints <= quote.bid"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"bidVolume"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"volume when prtPrice <= quote.bid"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"clsPrice"}),(0,s.jsx)(t.td,{children:"double"}),(0,s.jsx)(t.td,{children:"official exchange closing price"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"expAskSize"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"exponential average ask size (10 minute 1/2 life)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"expBidSize"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"exponential average bid size (10 minute 1/2 life)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"expCount"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"number of updates included in exponential average"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"expWidth"}),(0,s.jsx)(t.td,{children:"double"}),(0,s.jsx)(t.td,{children:"exponential average market width (10 minute 1/2 life)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"lastPrint"}),(0,s.jsx)(t.td,{children:"DateTime"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"maxPrice"}),(0,s.jsx)(t.td,{children:"double"}),(0,s.jsx)(t.td,{children:"maximum print price within market hours"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"midCount"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"num prints inside quote.bid / quote.ask"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"midVolume"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"volume inside quote.bid / quote.ask"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"minPrice"}),(0,s.jsx)(t.td,{children:"double"}),(0,s.jsx)(t.td,{children:"minimum print price within market hours"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"mrkPrice"}),(0,s.jsx)(t.td,{children:"double"}),(0,s.jsx)(t.td,{children:"last print handled during regular market hours"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"openInt"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"open interest"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"opnPrice"}),(0,s.jsx)(t.td,{children:"double"}),(0,s.jsx)(t.td,{children:"first print price of the day during regular market hours"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"prtCount"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"number of distinct print reports"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"prtPrice"}),(0,s.jsx)(t.td,{children:"double"}),(0,s.jsx)(t.td,{children:"last print price"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"timestamp"}),(0,s.jsx)(t.td,{children:"DateTime"}),(0,s.jsx)(t.td,{})]})]})]})]})]})}function u(e={}){const{wrapper:t}={...(0,d.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},28453:(e,t,r)=>{r.d(t,{R:()=>n,x:()=>c});var s=r(96540);const d={},i=s.createContext(d);function n(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:n(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);