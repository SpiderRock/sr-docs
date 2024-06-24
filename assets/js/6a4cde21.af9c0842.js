"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[40409],{14661:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>n,default:()=>o,frontMatter:()=>d,metadata:()=>c,toc:()=>a});var s=r(74848),i=r(28453);const d={title:"StockPrint"},n="Message: StockPrint (ID: 3045)",c={id:"Schema/Topics/market-data-stock/StockPrint",title:"StockPrint",description:"The most recent (last) print record for CTS/UTDF markets as well as SpiderRock synthetic markets.  Records also incorporate some summary detail and closing mark information as well.",source:"@site/docs/Schema/Topics/2990-market-data-stock/StockPrint.md",sourceDirName:"Schema/Topics/2990-market-data-stock",slug:"/Schema/Topics/market-data-stock/StockPrint",permalink:"/sr-docs/docs/Schema/Topics/market-data-stock/StockPrint",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"StockPrint"},sidebar:"schemaSidebar",previous:{title:"StockMarketSummary",permalink:"/sr-docs/docs/Schema/Topics/market-data-stock/StockMarketSummary"},next:{title:"StockPrintMarkup",permalink:"/sr-docs/docs/Schema/Topics/market-data-stock/StockPrintMarkup"}},l={},a=[{value:"META DATA  (Topic: market-data-stock )",id:"meta-data--topic-market-data-stock-",level:3},{value:"PRIMARY KEY",id:"primary-key",level:3},{value:"BODY",id:"body",level:3}];function h(e){const t={a:"a",h1:"h1",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.h1,{id:"message-stockprint-id-3045",children:["Message: StockPrint ",(0,s.jsx)("span",{className:"small-text",children:"(ID: 3045)"})]}),"\n",(0,s.jsx)(t.p,{children:"The most recent (last) print record for CTS/UTDF markets as well as SpiderRock synthetic markets.  Records also incorporate some summary detail and closing mark information as well."}),"\n",(0,s.jsxs)("div",{className:"single-message-meta",children:[(0,s.jsx)(t.h3,{id:"meta-data--topic-market-data-stock-",children:"META DATA  (Topic: market-data-stock )"}),(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Attribute"}),(0,s.jsx)(t.th,{children:"Value"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"MLink Token"}),(0,s.jsx)(t.td,{children:"EqtMktData"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"SRSE Product"}),(0,s.jsx)(t.td,{children:"SRLive"})]})]})]})]}),"\n",(0,s.jsxs)("div",{className:"single-message-primarykey",children:[(0,s.jsx)(t.h3,{id:"primary-key",children:"PRIMARY KEY"}),(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Field"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Comment"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"ticker"}),(0,s.jsx)(t.td,{children:"TickerKey"}),(0,s.jsx)(t.td,{})]})})]})]}),"\n",(0,s.jsxs)("div",{className:"single-message-body",children:[(0,s.jsx)(t.h3,{id:"body",children:"BODY"}),(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Field"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Comment"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"clsPrice"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"official closing price (if available)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"eage"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"age of prevailing quote at time of print"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"eask"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"exchange ask (@ print time) [SIP feed]"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"easz"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"exchange ask size"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"ebid"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"exchange bid (@ print time) [SIP feed]"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"ebsz"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"exchange bid size"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"mrkPrice"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"last regular market print price"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"netTimestamp"}),(0,s.jsx)(t.td,{children:"long"}),(0,s.jsx)(t.td,{children:"inbound packet PTP timestamp from SR gateway switch; usually syncronized with facility grandfather clock"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"printCodes"}),(0,s.jsx)(t.td,{children:"string(18)"}),(0,s.jsx)(t.td,{children:"European trade condition codes"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"prtClusterNum"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"incremental print cluster counter (one counter per ticker; used to group prints into clusters)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"prtClusterSize"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"cumulative size of prints in this sequence (prints @ same or more aggressive price with less than 25 ms elapsing since first print; can span exchanges)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"prtCond1"}),(0,s.jsx)(t.td,{children:"byte"}),(0,s.jsx)(t.td,{children:"print condition (from SIP feed)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"prtCond2"}),(0,s.jsx)(t.td,{children:"byte"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"prtCond3"}),(0,s.jsx)(t.td,{children:"byte"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"prtCond4"}),(0,s.jsx)(t.td,{children:"byte"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"prtExch"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"../../Enums/StkExch",children:"enum : StkExch"})}),(0,s.jsx)(t.td,{children:"print exch"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"prtPrice"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"print price level"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"prtSide"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"../../Enums/PrtSide",children:"enum : PrtSide"})}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"prtSize"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"print size"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"prtTimestamp"}),(0,s.jsx)(t.td,{children:"long"}),(0,s.jsx)(t.td,{children:"exchange high precision timestamp (if available)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"prtType"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"../../Enums/StkPrintType",children:"enum : StkPrintType"})}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"prtVolume"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"cumulative print size today"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"timestamp"}),(0,s.jsx)(t.td,{children:"DateTime"}),(0,s.jsx)(t.td,{})]})]})]})]})]})}function o(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},28453:(e,t,r)=>{r.d(t,{R:()=>n,x:()=>c});var s=r(96540);const i={},d=s.createContext(i);function n(e){const t=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:n(e.components),s.createElement(d.Provider,{value:t},e.children)}}}]);