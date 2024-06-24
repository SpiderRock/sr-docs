"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[16231],{43589:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>n,contentTitle:()=>l,default:()=>o,frontMatter:()=>i,metadata:()=>c,toc:()=>a});var t=s(74848),d=s(28453);const i={title:"OptionCloseMark"},l="Message: OptionCloseMark (ID: 3140)",c={id:"Schema/Topics/market-marks/OptionCloseMark",title:"OptionCloseMark",description:"OptionCloseMark records are created immediately after the market close (clsMarkState=SRClose), when exchanges publish official marks (clsMarkState=ExchClose), and again during top of day rotation (clsMarkState=Final).  These records contain closing quotes and prices as well as markup details for all outright options.OptionCloseMark records are published to the SpiderRock elastic cluster when clsMarkState=Final",source:"@site/docs/Schema/Topics/3120-market-marks/OptionCloseMark.md",sourceDirName:"Schema/Topics/3120-market-marks",slug:"/Schema/Topics/market-marks/OptionCloseMark",permalink:"/docs/Schema/Topics/market-marks/OptionCloseMark",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"OptionCloseMark"},sidebar:"schemaSidebar",previous:{title:"FutureSettlementMark",permalink:"/docs/Schema/Topics/market-marks/FutureSettlementMark"},next:{title:"OptionOpenMark",permalink:"/docs/Schema/Topics/market-marks/OptionOpenMark"}},n={},a=[{value:"META DATA  (Topic: market-marks )",id:"meta-data--topic-market-marks-",level:3},{value:"PRIMARY KEY",id:"primary-key",level:3},{value:"BODY",id:"body",level:3}];function h(e){const r={a:"a",h1:"h1",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.h1,{id:"message-optionclosemark-id-3140",children:["Message: OptionCloseMark ",(0,t.jsx)("span",{className:"small-text",children:"(ID: 3140)"})]}),"\n",(0,t.jsxs)(r.p,{children:["OptionCloseMark records are created immediately after the market close (clsMarkState=SRClose), when exchanges publish official marks (clsMarkState=ExchClose), and again during top of day rotation (clsMarkState=Final).  These records contain closing quotes and prices as well as markup details for all outright options.",(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),"OptionCloseMark records are published to the SpiderRock elastic cluster when clsMarkState=Final"]}),"\n",(0,t.jsxs)("div",{className:"single-message-meta",children:[(0,t.jsx)(r.h3,{id:"meta-data--topic-market-marks-",children:"META DATA  (Topic: market-marks )"}),(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Attribute"}),(0,t.jsx)(r.th,{children:"Value"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"MLink Token"}),(0,t.jsx)(r.td,{children:"OptMarkData"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"SRSE Product"}),(0,t.jsx)(r.td,{children:"SRLive, SRAnalytics"})]})]})]})]}),"\n",(0,t.jsxs)("div",{className:"single-message-primarykey",children:[(0,t.jsx)(r.h3,{id:"primary-key",children:"PRIMARY KEY"}),(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Field"}),(0,t.jsx)(r.th,{children:"Type"}),(0,t.jsx)(r.th,{children:"Comment"})]})}),(0,t.jsx)(r.tbody,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"okey"}),(0,t.jsx)(r.td,{children:"OptionKey"}),(0,t.jsx)(r.td,{})]})})]})]}),"\n",(0,t.jsxs)("div",{className:"single-message-body",children:[(0,t.jsx)(r.h3,{id:"body",children:"BODY"}),(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Field"}),(0,t.jsx)(r.th,{children:"Type"}),(0,t.jsx)(r.th,{children:"Comment"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"askIV"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{children:"implied vol of SpiderRock closing ask price (C - 1m)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"askPrc"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{children:"SpiderRock closing option ask (C - 1m)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"bidIV"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{children:"implied vol of SpiderRock closing bid price (C - 1m)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"bidPrc"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{children:"SpiderRock closing option bid (C - 1m)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"closePrc"}),(0,t.jsx)(r.td,{children:"double"}),(0,t.jsx)(r.td,{children:"official exchange closing mark (last print;then official close)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"clsMarkState"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../Enums/ClsMarkState",children:"enum : ClsMarkState"})}),(0,t.jsx)(r.td,{children:"LastPrt = last print received; SRClose = SpiderRock snapshot; ExchClose = official exchange close price; Final = Final close mark"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"ddiv"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{children:"SpiderRock ddiv rate (sum of discrete dividend amounts)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"de"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{children:"delta (SR surface)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"deDecay"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{children:"delta decay (SR surface)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"error"}),(0,t.jsx)(r.td,{children:"byte"}),(0,t.jsx)(r.td,{children:"SpiderRock pricing library calculation error code"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"ga"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{children:"gamma (SR surface)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"hasClosePrc"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../Enums/YesNo",children:"enum : YesNo"})}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"hasSRClsPrc"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../Enums/YesNo",children:"enum : YesNo"})}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"openInterest"}),(0,t.jsx)(r.td,{children:"int"}),(0,t.jsx)(r.td,{children:"Open Interest"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"ph"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{children:"phi (SR surface)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"prtCount"}),(0,t.jsx)(r.td,{children:"int"}),(0,t.jsx)(r.td,{children:"print count"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"prtVolume"}),(0,t.jsx)(r.td,{children:"int"}),(0,t.jsx)(r.td,{children:"total printed volume"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"rate"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{children:"SpiderRock interest rate"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"rh"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{children:"rho (SR surrface)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"sdiv"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{children:"SpiderRock sdiv rate"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"srCloseMarkDttm"}),(0,t.jsx)(r.td,{children:"DateTime"}),(0,t.jsx)(r.td,{children:"from MarketCloseQuote.srCloseMarkDttm"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"srClsPrc"}),(0,t.jsx)(r.td,{children:"double"}),(0,t.jsx)(r.td,{children:"SpiderRock close mark (close - 1min)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"srPrc"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{children:"SpiderRock surface price (always within bidPx/askPx) (C - 1m)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"srSlope"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{children:"surface slope (SR surface)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"srSrc"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../Enums/MarkSource",children:"enum : MarkSource"})}),(0,t.jsx)(r.td,{children:"SpiderRock price source [NbboMid, SRVol, LoBound, HiBound, SRPricer, SRQuote, CloseMark]"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"srVol"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{children:"SpiderRock surface volatility (C - 1m)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"th"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{children:"theta (SR surface)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"timestamp"}),(0,t.jsx)(r.td,{children:"DateTime"}),(0,t.jsx)(r.td,{children:"record timestamp"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"tradeDate"}),(0,t.jsx)(r.td,{children:"DateKey"}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"uAsk"}),(0,t.jsx)(r.td,{children:"double"}),(0,t.jsx)(r.td,{children:"SpiderRock closing underlier ask (C - 1m)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"uBid"}),(0,t.jsx)(r.td,{children:"double"}),(0,t.jsx)(r.td,{children:"SpiderRock closing underlier bid (C - 1m)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"uClose"}),(0,t.jsx)(r.td,{children:"double"}),(0,t.jsx)(r.td,{children:"exchange underlier closing mark"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"uSrCls"}),(0,t.jsx)(r.td,{children:"double"}),(0,t.jsx)(r.td,{children:"SpiderRock underlier closing mark (C - 1m)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"va"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{children:"vanna (SR surface)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"ve"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{children:"vega (SR surface)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"vo"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{children:"volga (SR surface)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"years"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{children:"years to expiration"})]})]})]})]})]})}function o(e={}){const{wrapper:r}={...(0,d.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},28453:(e,r,s)=>{s.d(r,{R:()=>l,x:()=>c});var t=s(96540);const d={},i=t.createContext(d);function l(e){const r=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:l(e.components),t.createElement(i.Provider,{value:r},e.children)}}}]);