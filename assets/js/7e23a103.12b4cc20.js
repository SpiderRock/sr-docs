"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[14575],{22629:(e,d,s)=>{s.r(d),s.d(d,{assets:()=>l,contentTitle:()=>i,default:()=>x,frontMatter:()=>n,metadata:()=>c,toc:()=>h});var r=s(74848),t=s(28453);const n={title:"OptionOpenMark"},i="Schema: OptionOpenMark (ID: 3145)",c={id:"MessageSchemas/Schema/Topics/market-marks/OptionOpenMark",title:"OptionOpenMark",description:"OptionOpenMark records are created during the end-of-day rotation for each product and intended for use the following trading day.",source:"@site/docs/MessageSchemas/Schema/Topics/3120-market-marks/OptionOpenMark.md",sourceDirName:"MessageSchemas/Schema/Topics/3120-market-marks",slug:"/MessageSchemas/Schema/Topics/market-marks/OptionOpenMark",permalink:"/docs/MessageSchemas/Schema/Topics/market-marks/OptionOpenMark",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"OptionOpenMark"},sidebar:"messageSchemasSidebar",previous:{title:"OptionCloseMark",permalink:"/docs/MessageSchemas/Schema/Topics/market-marks/OptionCloseMark"},next:{title:"OptionSettlementMark",permalink:"/docs/MessageSchemas/Schema/Topics/market-marks/OptionSettlementMark"}},l={},h=[{value:"METADATA",id:"metadata",level:3},{value:"PRIMARY KEY",id:"primary-key",level:3},{value:"BODY",id:"body",level:3}];function a(e){const d={a:"a",h1:"h1",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(d.h1,{id:"schema-optionopenmark-id-3145",children:["Schema: OptionOpenMark ",(0,r.jsx)("span",{className:"small-text",children:"(ID: 3145)"})]}),"\n",(0,r.jsx)(d.p,{children:"OptionOpenMark records are created during the end-of-day rotation for each product and intended for use the following trading day."}),"\n",(0,r.jsxs)("div",{className:"single-message-meta",children:[(0,r.jsx)(d.h3,{id:"metadata",children:"METADATA"}),(0,r.jsxs)(d.table,{children:[(0,r.jsx)(d.thead,{children:(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.th,{children:"Attribute"}),(0,r.jsx)(d.th,{children:"Value"})]})}),(0,r.jsxs)(d.tbody,{children:[(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"Topic"}),(0,r.jsx)(d.td,{children:"3120-market-marks"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"MLink Token"}),(0,r.jsx)(d.td,{children:"OptMarkData"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"SRSE Product"}),(0,r.jsx)(d.td,{children:"SRLive, SRAnalytics"})]})]})]})]}),"\n",(0,r.jsxs)("div",{className:"single-message-primarykey",children:[(0,r.jsx)(d.h3,{id:"primary-key",children:"PRIMARY KEY"}),(0,r.jsxs)(d.table,{children:[(0,r.jsx)(d.thead,{children:(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.th,{children:"#"}),(0,r.jsx)(d.th,{children:"Field"}),(0,r.jsx)(d.th,{children:"Type"}),(0,r.jsx)(d.th,{children:"Comment"})]})}),(0,r.jsx)(d.tbody,{children:(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"10"}),(0,r.jsx)(d.td,{children:"okey"}),(0,r.jsx)(d.td,{children:"OptionKey"}),(0,r.jsx)(d.td,{})]})})]})]}),"\n",(0,r.jsxs)("div",{className:"single-message-body",children:[(0,r.jsx)(d.h3,{id:"body",children:"BODY"}),(0,r.jsxs)(d.table,{children:[(0,r.jsx)(d.thead,{children:(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.th,{children:"#"}),(0,r.jsx)(d.th,{children:"Field"}),(0,r.jsx)(d.th,{children:"Type"}),(0,r.jsx)(d.th,{children:"Comment"})]})}),(0,r.jsxs)(d.tbody,{children:[(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"100"}),(0,r.jsx)(d.td,{children:"tradeDate"}),(0,r.jsx)(d.td,{children:"DateKey"}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"103"}),(0,r.jsx)(d.td,{children:"uBid"}),(0,r.jsx)(d.td,{children:"double"}),(0,r.jsx)(d.td,{children:"SR open uBid; (SR close uBid overnight adjusted)"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"106"}),(0,r.jsx)(d.td,{children:"uAsk"}),(0,r.jsx)(d.td,{children:"double"}),(0,r.jsx)(d.td,{children:"SR open uAsk; (SR close uAsk overnight adjusted)"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"109"}),(0,r.jsx)(d.td,{children:"uSrCls"}),(0,r.jsx)(d.td,{children:"double"}),(0,r.jsx)(d.td,{children:"SR open uMark; [SR close uMark (C - 1m) overnight adjusted]"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"112"}),(0,r.jsx)(d.td,{children:"uClose"}),(0,r.jsx)(d.td,{children:"double"}),(0,r.jsx)(d.td,{children:"exchange open uMark; [exchange close uMark overnight adjusted]"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"115"}),(0,r.jsx)(d.td,{children:"bidPrc"}),(0,r.jsx)(d.td,{children:"float"}),(0,r.jsx)(d.td,{children:"SR open bid; [SR close bid overnight adjusted]"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"118"}),(0,r.jsx)(d.td,{children:"askPrc"}),(0,r.jsx)(d.td,{children:"float"}),(0,r.jsx)(d.td,{children:"SR open ask; [SR close ask overnight adjusted]"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"121"}),(0,r.jsx)(d.td,{children:"srClsPrc"}),(0,r.jsx)(d.td,{children:"double"}),(0,r.jsx)(d.td,{children:"SR open mark; [SR close mark (close - 1min) overnight adjusted]"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"124"}),(0,r.jsx)(d.td,{children:"closePrc"}),(0,r.jsx)(d.td,{children:"double"}),(0,r.jsx)(d.td,{children:"exchange open mark; [exchange close mark overnight adjusted] [if available]"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"127"}),(0,r.jsx)(d.td,{children:"bidIV"}),(0,r.jsx)(d.td,{children:"float"}),(0,r.jsx)(d.td,{children:"implied vol of SR closing bid price"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"130"}),(0,r.jsx)(d.td,{children:"askIV"}),(0,r.jsx)(d.td,{children:"float"}),(0,r.jsx)(d.td,{children:"implied vol of SR closing ask price"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"133"}),(0,r.jsx)(d.td,{children:"srPrc"}),(0,r.jsx)(d.td,{children:"float"}),(0,r.jsx)(d.td,{children:"SR open surface price; [SR close surface price overnight adjusted]"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"136"}),(0,r.jsx)(d.td,{children:"srVol"}),(0,r.jsx)(d.td,{children:"float"}),(0,r.jsx)(d.td,{children:"SR surface volatility"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"139"}),(0,r.jsx)(d.td,{children:"srSrc"}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.a,{href:"../../../Enums/MarkSource",children:"enum : MarkSource"})}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"142"}),(0,r.jsx)(d.td,{children:"de"}),(0,r.jsx)(d.td,{children:"float"}),(0,r.jsx)(d.td,{children:"greeks from SR surface volatility"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"145"}),(0,r.jsx)(d.td,{children:"ga"}),(0,r.jsx)(d.td,{children:"float"}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"148"}),(0,r.jsx)(d.td,{children:"th"}),(0,r.jsx)(d.td,{children:"float"}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"151"}),(0,r.jsx)(d.td,{children:"ve"}),(0,r.jsx)(d.td,{children:"float"}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"154"}),(0,r.jsx)(d.td,{children:"vo"}),(0,r.jsx)(d.td,{children:"float"}),(0,r.jsx)(d.td,{children:"volga (SR surface)"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"157"}),(0,r.jsx)(d.td,{children:"va"}),(0,r.jsx)(d.td,{children:"float"}),(0,r.jsx)(d.td,{children:"vanna (SR surface)"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"160"}),(0,r.jsx)(d.td,{children:"rh"}),(0,r.jsx)(d.td,{children:"float"}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"163"}),(0,r.jsx)(d.td,{children:"ph"}),(0,r.jsx)(d.td,{children:"float"}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"166"}),(0,r.jsx)(d.td,{children:"srSlope"}),(0,r.jsx)(d.td,{children:"float"}),(0,r.jsx)(d.td,{children:"surface slope (SR surface)"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"169"}),(0,r.jsx)(d.td,{children:"deDecay"}),(0,r.jsx)(d.td,{children:"float"}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"172"}),(0,r.jsx)(d.td,{children:"sdiv"}),(0,r.jsx)(d.td,{children:"float"}),(0,r.jsx)(d.td,{children:"SR live sdiv rate"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"175"}),(0,r.jsx)(d.td,{children:"ddiv"}),(0,r.jsx)(d.td,{children:"float"}),(0,r.jsx)(d.td,{children:"SR live ddiv rate"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"178"}),(0,r.jsx)(d.td,{children:"rate"}),(0,r.jsx)(d.td,{children:"float"}),(0,r.jsx)(d.td,{children:"SR live int rate"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"181"}),(0,r.jsx)(d.td,{children:"years"}),(0,r.jsx)(d.td,{children:"float"}),(0,r.jsx)(d.td,{children:"years to expiration"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"184"}),(0,r.jsx)(d.td,{children:"error"}),(0,r.jsx)(d.td,{children:"byte"}),(0,r.jsx)(d.td,{children:"SRPricingLib.CalcError"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"187"}),(0,r.jsx)(d.td,{children:"corpAction"}),(0,r.jsx)(d.td,{children:"text1"}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"190"}),(0,r.jsx)(d.td,{children:"timestamp"}),(0,r.jsx)(d.td,{children:"DateTime"}),(0,r.jsx)(d.td,{})]})]})]})]})]})}function x(e={}){const{wrapper:d}={...(0,t.R)(),...e.components};return d?(0,r.jsx)(d,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},28453:(e,d,s)=>{s.d(d,{R:()=>i,x:()=>c});var r=s(96540);const t={},n=r.createContext(t);function i(e){const d=r.useContext(n);return r.useMemo((function(){return"function"==typeof e?e(d):{...d,...e}}),[d,e])}function c(e){let d;return d=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),r.createElement(n.Provider,{value:d},e.children)}}}]);