"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[82262],{79047:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>d,default:()=>u,frontMatter:()=>n,metadata:()=>c,toc:()=>a});var s=r(74848),i=r(28453);const n={title:"FuturePrint"},d="Message: FuturePrint (ID: 2595)",c={id:"Schema/Topics/market-data-futures/FuturePrint",title:"FuturePrint",description:"The most recent (last) print record for each active futures market.",source:"@site/docs/Schema/Topics/2580-market-data-futures/FuturePrint.md",sourceDirName:"Schema/Topics/2580-market-data-futures",slug:"/Schema/Topics/market-data-futures/FuturePrint",permalink:"/docs/Schema/Topics/market-data-futures/FuturePrint",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"FuturePrint"},sidebar:"schemaSidebar",previous:{title:"FutureMarketSummary",permalink:"/docs/Schema/Topics/market-data-futures/FutureMarketSummary"},next:{title:"FuturePrintMarkup",permalink:"/docs/Schema/Topics/market-data-futures/FuturePrintMarkup"}},l={},a=[{value:"META DATA  (Topic: market-data-futures )",id:"meta-data--topic-market-data-futures-",level:3},{value:"PRIMARY KEY",id:"primary-key",level:3},{value:"BODY",id:"body",level:3}];function h(e){const t={a:"a",h1:"h1",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.h1,{id:"message-futureprint-id-2595",children:["Message: FuturePrint ",(0,s.jsx)("span",{className:"small-text",children:"(ID: 2595)"})]}),"\n",(0,s.jsx)(t.p,{children:"The most recent (last) print record for each active futures market."}),"\n",(0,s.jsxs)("div",{className:"single-message-meta",children:[(0,s.jsx)(t.h3,{id:"meta-data--topic-market-data-futures-",children:"META DATA  (Topic: market-data-futures )"}),(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Attribute"}),(0,s.jsx)(t.th,{children:"Value"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"MLink Token"}),(0,s.jsx)(t.td,{children:"FutMktData"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"SRSE Product"}),(0,s.jsx)(t.td,{children:"SRLive"})]})]})]})]}),"\n",(0,s.jsxs)("div",{className:"single-message-primarykey",children:[(0,s.jsx)(t.h3,{id:"primary-key",children:"PRIMARY KEY"}),(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Field"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Comment"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"fkey"}),(0,s.jsx)(t.td,{children:"ExpiryKey"}),(0,s.jsx)(t.td,{})]})})]})]}),"\n",(0,s.jsxs)("div",{className:"single-message-body",children:[(0,s.jsx)(t.h3,{id:"body",children:"BODY"}),(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Field"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Comment"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"age"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"age of prevailing quote at time of print"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"ask"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"exchange ask (@ print time)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"asz"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"cumulative ask size (@ print time)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"bid"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"exchange bid (@ print time)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"bsz"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"cumulative bid size (@ print time)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"netTimestamp"}),(0,s.jsx)(t.td,{children:"long"}),(0,s.jsx)(t.td,{children:"inbound packet PTP timestamp from SR gateway switch;usually syncronized with facility grandfather clock"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"prtClusterNum"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"incremental print cluster counter (one counter per fkey; used to group prints into clusters)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"prtClusterSize"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"cumulative size of prints in this sequence (sequence of prints @ same or better price with less than 25 ms elapsing since first print)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"prtExch"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"../../Enums/FutExch",children:"enum : FutExch"})}),(0,s.jsx)(t.td,{children:"print exchange"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"prtOrders"}),(0,s.jsx)(t.td,{children:"ushort"}),(0,s.jsx)(t.td,{children:"number of orders participating in this print"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"prtPrice"}),(0,s.jsx)(t.td,{children:"double"}),(0,s.jsx)(t.td,{children:"print price"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"prtQuan"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"cumulative (electronic) print size at current price level"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"prtSide"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"../../Enums/PrtSide",children:"enum : PrtSide"})}),(0,s.jsx)(t.td,{children:"implied print side (from bid/ask)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"prtSize"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"print size [contracts]"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"prtTimestamp"}),(0,s.jsx)(t.td,{children:"long"}),(0,s.jsx)(t.td,{children:"exchange high precision timestamp (if available)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"prtType"}),(0,s.jsx)(t.td,{children:"byte"}),(0,s.jsx)(t.td,{children:"print type [exchange specific]"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"prtVolume"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"cumulative day (electronic) print volume in contracts"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"timestamp"}),(0,s.jsx)(t.td,{children:"DateTime"}),(0,s.jsx)(t.td,{})]})]})]})]})]})}function u(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},28453:(e,t,r)=>{r.d(t,{R:()=>d,x:()=>c});var s=r(96540);const i={},n=s.createContext(i);function d(e){const t=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),s.createElement(n.Provider,{value:t},e.children)}}}]);