"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[85088],{41207:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>n,default:()=>x,frontMatter:()=>s,metadata:()=>c,toc:()=>h});var i=r(74848),d=r(28453);const s={title:"FuturePrintSet"},n="Schema: FuturePrintSet (ID: 2610)",c={id:"Schema/Topics/market-data-futures/FuturePrintSet",title:"FuturePrintSet",description:"FuturePrintSet records are created for all future prints (outrights and spreads) and published to the SpiderRock elastic cluster when markup detail is complete (F+10M)",source:"@site/docs/Schema/Topics/2580-market-data-futures/FuturePrintSet.md",sourceDirName:"Schema/Topics/2580-market-data-futures",slug:"/Schema/Topics/market-data-futures/FuturePrintSet",permalink:"/docs/Schema/Topics/market-data-futures/FuturePrintSet",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"FuturePrintSet"},sidebar:"schemaSidebar",previous:{title:"FuturePrintMarkup",permalink:"/docs/Schema/Topics/market-data-futures/FuturePrintMarkup"},next:{title:"IndexQuote",permalink:"/docs/Schema/Topics/market-data-index/IndexQuote"}},l={},h=[{value:"META DATA",id:"meta-data",level:3},{value:"PRIMARY KEY",id:"primary-key",level:3},{value:"BODY",id:"body",level:3}];function a(e){const t={a:"a",h1:"h1",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.h1,{id:"schema-futureprintset-id-2610",children:["Schema: FuturePrintSet ",(0,i.jsx)("span",{className:"small-text",children:"(ID: 2610)"})]}),"\n",(0,i.jsx)(t.p,{children:"FuturePrintSet records are created for all future prints (outrights and spreads) and published to the SpiderRock elastic cluster when markup detail is complete (F+10M)"}),"\n",(0,i.jsxs)("div",{className:"single-message-meta",children:[(0,i.jsx)(t.h3,{id:"meta-data",children:"META DATA"}),(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Attribute"}),(0,i.jsx)(t.th,{children:"Value"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"MLink Token"}),(0,i.jsx)(t.td,{children:"SystemData"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Topic"}),(0,i.jsx)(t.td,{children:"market-data-futures"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"SRSE Product"}),(0,i.jsx)(t.td,{children:"SRAnalytics"})]})]})]})]}),"\n",(0,i.jsxs)("div",{className:"single-message-primarykey",children:[(0,i.jsx)(t.h3,{id:"primary-key",children:"PRIMARY KEY"}),(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Field"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{children:"Comment"})]})}),(0,i.jsx)(t.tbody,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"fkey"}),(0,i.jsx)(t.td,{children:"ExpiryKey"}),(0,i.jsx)(t.td,{})]})})]})]}),"\n",(0,i.jsxs)("div",{className:"single-message-body",children:[(0,i.jsx)(t.h3,{id:"body",children:"BODY"}),(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Field"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{children:"Comment"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"askPrice"}),(0,i.jsx)(t.td,{children:"double"}),(0,i.jsx)(t.td,{children:"exch best ask @ print arrival time"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"askPrice2"}),(0,i.jsx)(t.td,{children:"double"}),(0,i.jsx)(t.td,{children:"exch 2nd best ask @ print arrival time"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"askPriceM1"}),(0,i.jsx)(t.td,{children:"double"}),(0,i.jsx)(t.td,{children:"ask price +1 minute"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"askPriceM10"}),(0,i.jsx)(t.td,{children:"double"}),(0,i.jsx)(t.td,{children:"bid price +10 minutes"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"askSize"}),(0,i.jsx)(t.td,{children:"int"}),(0,i.jsx)(t.td,{children:"ask size @ print arrival time"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"askSize2"}),(0,i.jsx)(t.td,{children:"int"}),(0,i.jsx)(t.td,{children:"2nd best ask @ print arrival time"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"bidPrice"}),(0,i.jsx)(t.td,{children:"double"}),(0,i.jsx)(t.td,{children:"exch best bid @ print arrival time"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"bidPrice2"}),(0,i.jsx)(t.td,{children:"double"}),(0,i.jsx)(t.td,{children:"exch 2nd best bid @ print arrival time"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"bidPriceM1"}),(0,i.jsx)(t.td,{children:"double"}),(0,i.jsx)(t.td,{children:"bid price +1 minute"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"bidPriceM10"}),(0,i.jsx)(t.td,{children:"double"}),(0,i.jsx)(t.td,{children:"bid price +10 minutes"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"bidSize"}),(0,i.jsx)(t.td,{children:"int"}),(0,i.jsx)(t.td,{children:"bid size @ print arrival time"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"bidSize2"}),(0,i.jsx)(t.td,{children:"int"}),(0,i.jsx)(t.td,{children:"2nd best bid @ print arrival time"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"netTimestamp"}),(0,i.jsx)(t.td,{children:"long"}),(0,i.jsx)(t.td,{children:"inbound packet PTP timestamp from SR gateway switch;usually syncronized with facility grandfather clock"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"pnlM1"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{children:"pnl after 1 minute"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"pnlM10"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{children:"pnl after 10 minutes"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"pnlM10Err"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"pnlM1Err"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"prtClusterNum"}),(0,i.jsx)(t.td,{children:"int"}),(0,i.jsx)(t.td,{children:"incremental print cluster counter (one counter per fkey; used to group prints into clusters)"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"prtClusterSize"}),(0,i.jsx)(t.td,{children:"int"}),(0,i.jsx)(t.td,{children:"cumulative size of prints in this sequence (prints @ same or more aggressive price with less than 25 ms elapsing since first print; can span exchanges)"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"prtExch"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"../../../Enums/FutExch",children:"enum : FutExch"})}),(0,i.jsx)(t.td,{children:"print exchange"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"prtNumber"}),(0,i.jsx)(t.td,{children:"long"}),(0,i.jsx)(t.td,{children:"Unique print set identifier; will increment but not guaranteed to be sequential."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"prtOrders"}),(0,i.jsx)(t.td,{children:"ushort"}),(0,i.jsx)(t.td,{children:"number of orders participating in this print"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"prtPrice"}),(0,i.jsx)(t.td,{children:"double"}),(0,i.jsx)(t.td,{children:"print price"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"prtPriceM1"}),(0,i.jsx)(t.td,{children:"double"}),(0,i.jsx)(t.td,{children:"market price +1 minute [mid-quote if not intervening prints;most recent print otherwise]"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"prtPriceM10"}),(0,i.jsx)(t.td,{children:"double"}),(0,i.jsx)(t.td,{children:"market price +10 minutes [most recent print (if any) otherwise mid-quote]"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"prtProbability"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{children:"[M1] probability that buying prtQuan contracts @ prtPrice will have positive m1 pnl (prtPriceM1 >= prtPrice) [recorded at time of print]"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"prtProbabilityM2"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{children:"alternate probability model"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"prtProbabilityM3"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{children:"alternate probability model"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"prtSide"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"../../../Enums/PrtSide",children:"enum : PrtSide"})}),(0,i.jsx)(t.td,{children:"Print side: None; Mid; Bid; Ask"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"prtSize"}),(0,i.jsx)(t.td,{children:"int"}),(0,i.jsx)(t.td,{children:"print size [contracts]"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"prtTimestamp"}),(0,i.jsx)(t.td,{children:"long"}),(0,i.jsx)(t.td,{children:"exchange high precision timestamp (if available)"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"prtType"}),(0,i.jsx)(t.td,{children:"byte"}),(0,i.jsx)(t.td,{children:"print type [exchange specific]"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"prtVolume"}),(0,i.jsx)(t.td,{children:"int"}),(0,i.jsx)(t.td,{children:"cumulative day (electronic) print volume in contracts"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"ticker"}),(0,i.jsx)(t.td,{children:"TickerKey"}),(0,i.jsx)(t.td,{children:"underlying stock key"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"timestamp"}),(0,i.jsx)(t.td,{children:"DateTime"}),(0,i.jsx)(t.td,{})]})]})]})]})]})}function x(e={}){const{wrapper:t}={...(0,d.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},28453:(e,t,r)=>{r.d(t,{R:()=>n,x:()=>c});var i=r(96540);const d={},s=i.createContext(d);function n(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:n(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);