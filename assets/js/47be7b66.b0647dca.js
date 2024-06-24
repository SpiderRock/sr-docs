"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[83920],{46264:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>n,contentTitle:()=>l,default:()=>h,frontMatter:()=>c,metadata:()=>i,toc:()=>a});var r=t(74848),d=t(28453);const c={title:"StockCloseMark"},l="Message: StockCloseMark (ID: 3165)",i={id:"Schema/Topics/market-marks/StockCloseMark",title:"StockCloseMark",description:"StockCloseMark records are created immediately after the market close (clsMarkState=SRClose), when exchanges publish official marks (clsMarkState=ExchClose), and again during top of day rotation (clsMarkState=Final).  These records contain closing quotes and prices as well as markup details for all outright options.StockCloseMark records are published to the SpiderRock elastic cluster when clsMarkState=Final",source:"@site/docs/Schema/Topics/3120-market-marks/StockCloseMark.md",sourceDirName:"Schema/Topics/3120-market-marks",slug:"/Schema/Topics/market-marks/StockCloseMark",permalink:"/sr-docs/docs/Schema/Topics/market-marks/StockCloseMark",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"StockCloseMark"},sidebar:"schemaSidebar",previous:{title:"SpreadOpenMark",permalink:"/sr-docs/docs/Schema/Topics/market-marks/SpreadOpenMark"},next:{title:"StockOpenMark",permalink:"/sr-docs/docs/Schema/Topics/market-marks/StockOpenMark"}},n={},a=[{value:"META DATA  (Topic: market-marks )",id:"meta-data--topic-market-marks-",level:3},{value:"PRIMARY KEY",id:"primary-key",level:3},{value:"BODY",id:"body",level:3}];function o(e){const s={a:"a",h1:"h1",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.h1,{id:"message-stockclosemark-id-3165",children:["Message: StockCloseMark ",(0,r.jsx)("span",{className:"small-text",children:"(ID: 3165)"})]}),"\n",(0,r.jsxs)(s.p,{children:["StockCloseMark records are created immediately after the market close (clsMarkState=SRClose), when exchanges publish official marks (clsMarkState=ExchClose), and again during top of day rotation (clsMarkState=Final).  These records contain closing quotes and prices as well as markup details for all outright options.",(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),"StockCloseMark records are published to the SpiderRock elastic cluster when clsMarkState=Final"]}),"\n",(0,r.jsxs)("div",{className:"single-message-meta",children:[(0,r.jsx)(s.h3,{id:"meta-data--topic-market-marks-",children:"META DATA  (Topic: market-marks )"}),(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Attribute"}),(0,r.jsx)(s.th,{children:"Value"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"MLink Token"}),(0,r.jsx)(s.td,{children:"EqtMarkData"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"SRSE Product"}),(0,r.jsx)(s.td,{children:"SRLive, SRAnalytics"})]})]})]})]}),"\n",(0,r.jsxs)("div",{className:"single-message-primarykey",children:[(0,r.jsx)(s.h3,{id:"primary-key",children:"PRIMARY KEY"}),(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Field"}),(0,r.jsx)(s.th,{children:"Type"}),(0,r.jsx)(s.th,{children:"Comment"})]})}),(0,r.jsx)(s.tbody,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"ticker"}),(0,r.jsx)(s.td,{children:"TickerKey"}),(0,r.jsx)(s.td,{})]})})]})]}),"\n",(0,r.jsxs)("div",{className:"single-message-body",children:[(0,r.jsx)(s.h3,{id:"body",children:"BODY"}),(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Field"}),(0,r.jsx)(s.th,{children:"Type"}),(0,r.jsx)(s.th,{children:"Comment"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"askPrc"}),(0,r.jsx)(s.td,{children:"float"}),(0,r.jsx)(s.td,{children:"ask price (close - 1min)"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"avgMktSize"}),(0,r.jsx)(s.td,{children:"float"}),(0,r.jsx)(s.td,{children:"Average market size"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"avgMktWidth"}),(0,r.jsx)(s.td,{children:"float"}),(0,r.jsx)(s.td,{children:"Average market width"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"bidPrc"}),(0,r.jsx)(s.td,{children:"float"}),(0,r.jsx)(s.td,{children:"bid price (close - 1min)"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"closePrc"}),(0,r.jsx)(s.td,{children:"float"}),(0,r.jsx)(s.td,{children:"official exchange closing mark (last print; then official close)"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"clsMarkState"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"../../Enums/ClsMarkState",children:"enum : ClsMarkState"})}),(0,r.jsx)(s.td,{children:"Close mark state. None; LastPrt; SRClose; ExchClose; Final"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"hasClosePrc"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"../../Enums/YesNo",children:"enum : YesNo"})}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"hasSRClsPrc"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"../../Enums/YesNo",children:"enum : YesNo"})}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"maxPrc"}),(0,r.jsx)(s.td,{children:"float"}),(0,r.jsx)(s.td,{children:"High price"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"minPrc"}),(0,r.jsx)(s.td,{children:"float"}),(0,r.jsx)(s.td,{children:"Low price"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"opnPrc"}),(0,r.jsx)(s.td,{children:"float"}),(0,r.jsx)(s.td,{children:"Open price"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"prtCount"}),(0,r.jsx)(s.td,{children:"int"}),(0,r.jsx)(s.td,{children:"Print count"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"prtVolume"}),(0,r.jsx)(s.td,{children:"int"}),(0,r.jsx)(s.td,{children:"Print volume"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"realizedVol"}),(0,r.jsx)(s.td,{children:"float"}),(0,r.jsx)(s.td,{children:"Realized vol"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"sharesOutstanding"}),(0,r.jsx)(s.td,{children:"long"}),(0,r.jsx)(s.td,{children:"Shares outstanding"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"srCloseMarkDttm"}),(0,r.jsx)(s.td,{children:"DateTime"}),(0,r.jsx)(s.td,{children:"from MarketCloseQuote.srCloseMarkDttm"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"srClsPrc"}),(0,r.jsx)(s.td,{children:"float"}),(0,r.jsx)(s.td,{children:"SR close mark (close - 1min)"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"timestamp"}),(0,r.jsx)(s.td,{children:"DateTime"}),(0,r.jsx)(s.td,{children:"record publish/update timestamp"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"tradeDate"}),(0,r.jsx)(s.td,{children:"DateKey"}),(0,r.jsx)(s.td,{})]})]})]})]})]})}function h(e={}){const{wrapper:s}={...(0,d.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},28453:(e,s,t)=>{t.d(s,{R:()=>l,x:()=>i});var r=t(96540);const d={},c=r.createContext(d);function l(e){const s=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:l(e.components),r.createElement(c.Provider,{value:s},e.children)}}}]);