"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[14575],{22629:(e,s,d)=>{d.r(s),d.d(s,{assets:()=>l,contentTitle:()=>i,default:()=>o,frontMatter:()=>n,metadata:()=>c,toc:()=>a});var r=d(74848),t=d(28453);const n={title:"OptionOpenMark"},i="Schema: OptionOpenMark (ID: 3145)",c={id:"MessageSchemas/Schema/Topics/market-marks/OptionOpenMark",title:"OptionOpenMark",description:"OptionOpenMark records are created during the end-of-day rotation for each product and intended for use the following trading day.",source:"@site/docs/MessageSchemas/Schema/Topics/3120-market-marks/OptionOpenMark.md",sourceDirName:"MessageSchemas/Schema/Topics/3120-market-marks",slug:"/MessageSchemas/Schema/Topics/market-marks/OptionOpenMark",permalink:"/docs/MessageSchemas/Schema/Topics/market-marks/OptionOpenMark",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"OptionOpenMark"},sidebar:"messageSchemasSidebar",previous:{title:"OptionCloseMark",permalink:"/docs/MessageSchemas/Schema/Topics/market-marks/OptionCloseMark"},next:{title:"OptionSettlementMark",permalink:"/docs/MessageSchemas/Schema/Topics/market-marks/OptionSettlementMark"}},l={},a=[{value:"METADATA",id:"metadata",level:3},{value:"PRIMARY KEY",id:"primary-key",level:3},{value:"BODY",id:"body",level:3}];function h(e){const s={a:"a",h1:"h1",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.h1,{id:"schema-optionopenmark-id-3145",children:["Schema: OptionOpenMark ",(0,r.jsx)("span",{className:"small-text",children:"(ID: 3145)"})]}),"\n",(0,r.jsx)(s.p,{children:"OptionOpenMark records are created during the end-of-day rotation for each product and intended for use the following trading day."}),"\n",(0,r.jsxs)("div",{className:"single-message-meta",children:[(0,r.jsx)(s.h3,{id:"metadata",children:"METADATA"}),(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Attribute"}),(0,r.jsx)(s.th,{children:"Value"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"MLink Token"}),(0,r.jsx)(s.td,{children:"OptMarkData"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Topic"}),(0,r.jsx)(s.td,{children:"market-marks"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"SRSE Product"}),(0,r.jsx)(s.td,{children:"SRLive, SRAnalytics"})]})]})]})]}),"\n",(0,r.jsxs)("div",{className:"single-message-primarykey",children:[(0,r.jsx)(s.h3,{id:"primary-key",children:"PRIMARY KEY"}),(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Field"}),(0,r.jsx)(s.th,{children:"Type"}),(0,r.jsx)(s.th,{children:"Comment"})]})}),(0,r.jsx)(s.tbody,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"okey"}),(0,r.jsx)(s.td,{children:"OptionKey"}),(0,r.jsx)(s.td,{})]})})]})]}),"\n",(0,r.jsxs)("div",{className:"single-message-body",children:[(0,r.jsx)(s.h3,{id:"body",children:"BODY"}),(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Field"}),(0,r.jsx)(s.th,{children:"Type"}),(0,r.jsx)(s.th,{children:"Comment"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"askIV"}),(0,r.jsx)(s.td,{children:"float"}),(0,r.jsx)(s.td,{children:"implied vol of SR closing ask price"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"askPrc"}),(0,r.jsx)(s.td,{children:"float"}),(0,r.jsx)(s.td,{children:"SR open ask; [SR close ask overnight adjusted]"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"bidIV"}),(0,r.jsx)(s.td,{children:"float"}),(0,r.jsx)(s.td,{children:"implied vol of SR closing bid price"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"bidPrc"}),(0,r.jsx)(s.td,{children:"float"}),(0,r.jsx)(s.td,{children:"SR open bid; [SR close bid overnight adjusted]"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"closePrc"}),(0,r.jsx)(s.td,{children:"double"}),(0,r.jsx)(s.td,{children:"exchange open mark; [exchange close mark overnight adjusted] [if available]"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"corpAction"}),(0,r.jsx)(s.td,{children:"text1"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"ddiv"}),(0,r.jsx)(s.td,{children:"float"}),(0,r.jsx)(s.td,{children:"SR live ddiv rate"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"de"}),(0,r.jsx)(s.td,{children:"float"}),(0,r.jsx)(s.td,{children:"greeks from SR surface volatility"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"deDecay"}),(0,r.jsx)(s.td,{children:"float"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"error"}),(0,r.jsx)(s.td,{children:"byte"}),(0,r.jsx)(s.td,{children:"SRPricingLib.CalcError"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"ga"}),(0,r.jsx)(s.td,{children:"float"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"ph"}),(0,r.jsx)(s.td,{children:"float"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"rate"}),(0,r.jsx)(s.td,{children:"float"}),(0,r.jsx)(s.td,{children:"SR live int rate"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"rh"}),(0,r.jsx)(s.td,{children:"float"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"sdiv"}),(0,r.jsx)(s.td,{children:"float"}),(0,r.jsx)(s.td,{children:"SR live sdiv rate"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"srClsPrc"}),(0,r.jsx)(s.td,{children:"double"}),(0,r.jsx)(s.td,{children:"SR open mark; [SR close mark (close - 1min) overnight adjusted]"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"srPrc"}),(0,r.jsx)(s.td,{children:"float"}),(0,r.jsx)(s.td,{children:"SR open surface price; [SR close surface price overnight adjusted]"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"srSlope"}),(0,r.jsx)(s.td,{children:"float"}),(0,r.jsx)(s.td,{children:"surface slope (SR surface)"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"srSrc"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"../../../Enums/MarkSource",children:"enum : MarkSource"})}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"srVol"}),(0,r.jsx)(s.td,{children:"float"}),(0,r.jsx)(s.td,{children:"SR surface volatility"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"th"}),(0,r.jsx)(s.td,{children:"float"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"timestamp"}),(0,r.jsx)(s.td,{children:"DateTime"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"tradeDate"}),(0,r.jsx)(s.td,{children:"DateKey"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"uAsk"}),(0,r.jsx)(s.td,{children:"double"}),(0,r.jsx)(s.td,{children:"SR open uAsk; (SR close uAsk overnight adjusted)"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"uBid"}),(0,r.jsx)(s.td,{children:"double"}),(0,r.jsx)(s.td,{children:"SR open uBid; (SR close uBid overnight adjusted)"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"uClose"}),(0,r.jsx)(s.td,{children:"double"}),(0,r.jsx)(s.td,{children:"exchange open uMark; [exchange close uMark overnight adjusted]"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"uSrCls"}),(0,r.jsx)(s.td,{children:"double"}),(0,r.jsx)(s.td,{children:"SR open uMark; [SR close uMark (C - 1m) overnight adjusted]"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"va"}),(0,r.jsx)(s.td,{children:"float"}),(0,r.jsx)(s.td,{children:"vanna (SR surface)"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"ve"}),(0,r.jsx)(s.td,{children:"float"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"vo"}),(0,r.jsx)(s.td,{children:"float"}),(0,r.jsx)(s.td,{children:"volga (SR surface)"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"years"}),(0,r.jsx)(s.td,{children:"float"}),(0,r.jsx)(s.td,{children:"years to expiration"})]})]})]})]})]})}function o(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},28453:(e,s,d)=>{d.d(s,{R:()=>i,x:()=>c});var r=d(96540);const t={},n=r.createContext(t);function i(e){const s=r.useContext(n);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),r.createElement(n.Provider,{value:s},e.children)}}}]);