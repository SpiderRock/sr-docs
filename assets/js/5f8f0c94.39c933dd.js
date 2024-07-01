"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[98348],{64704:(e,s,d)=>{d.r(s),d.d(s,{assets:()=>l,contentTitle:()=>i,default:()=>o,frontMatter:()=>n,metadata:()=>c,toc:()=>a});var r=d(74848),t=d(28453);const n={title:"TradingSchedule"},i="Schema: TradingSchedule (ID: 4480)",c={id:"MessageSchemas/Schema/Topics/product-status/TradingSchedule",title:"TradingSchedule",description:"Product trading schedule for the current week.  Includes an expected trading day market schedule for each SpiderRock ticker and day-of-week.  Including schedules for equity and futures markets.  The NMS schedule is the NYSE announced trading calendar.  Other markets are from the listing exchange.",source:"@site/docs/MessageSchemas/Schema/Topics/4440-product-status/TradingSchedule.md",sourceDirName:"MessageSchemas/Schema/Topics/4440-product-status",slug:"/MessageSchemas/Schema/Topics/product-status/TradingSchedule",permalink:"/docs/MessageSchemas/Schema/Topics/product-status/TradingSchedule",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"TradingSchedule"},sidebar:"messageSchemasSidebar",previous:{title:"StockRegSHOStatus",permalink:"/docs/MessageSchemas/Schema/Topics/product-status/StockRegSHOStatus"},next:{title:"GlobalRiskControl",permalink:"/docs/MessageSchemas/Schema/Topics/risk-control/GlobalRiskControl"}},l={},a=[{value:"METADATA",id:"metadata",level:3},{value:"PRIMARY KEY",id:"primary-key",level:3},{value:"BODY",id:"body",level:3}];function h(e){const s={a:"a",h1:"h1",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.h1,{id:"schema-tradingschedule-id-4480",children:["Schema: TradingSchedule ",(0,r.jsx)("span",{className:"small-text",children:"(ID: 4480)"})]}),"\n",(0,r.jsx)(s.p,{children:"Product trading schedule for the current week.  Includes an expected trading day market schedule for each SpiderRock ticker and day-of-week.  Including schedules for equity and futures markets.  The NMS schedule is the NYSE announced trading calendar.  Other markets are from the listing exchange."}),"\n",(0,r.jsxs)("div",{className:"single-message-meta",children:[(0,r.jsx)(s.h3,{id:"metadata",children:"METADATA"}),(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Attribute"}),(0,r.jsx)(s.th,{children:"Value"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"MLink Token"}),(0,r.jsx)(s.td,{children:"SystemData"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Topic"}),(0,r.jsx)(s.td,{children:"product-status"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"SRSE Product"}),(0,r.jsx)(s.td,{children:"SRLive"})]})]})]})]}),"\n",(0,r.jsxs)("div",{className:"single-message-primarykey",children:[(0,r.jsx)(s.h3,{id:"primary-key",children:"PRIMARY KEY"}),(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Field"}),(0,r.jsx)(s.th,{children:"Type"}),(0,r.jsx)(s.th,{children:"Comment"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"ticker"}),(0,r.jsx)(s.td,{children:"TickerKey"}),(0,r.jsx)(s.td,{children:"SR Underlying ticker or product group - SPY, MSFT, @ES, etc."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"weekDay"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"../../../Enums/WeekDay",children:"enum : WeekDay"})}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"secType"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"../../../Enums/SpdrKeyType",children:"enum : SpdrKeyType"})}),(0,r.jsx)(s.td,{})]})]})]})]}),"\n",(0,r.jsxs)("div",{className:"single-message-body",children:[(0,r.jsx)(s.h3,{id:"body",children:"BODY"}),(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Field"}),(0,r.jsx)(s.th,{children:"Type"}),(0,r.jsx)(s.th,{children:"Comment"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"earlyPreOpenTime"}),(0,r.jsx)(s.td,{children:"TimeSpan"}),(0,r.jsx)(s.td,{children:"early session pre-open (orders accepted)"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"earlySessionCloseTime"}),(0,r.jsx)(s.td,{children:"TimeSpan"}),(0,r.jsx)(s.td,{children:"early session market close"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"earlySessionOpenTime"}),(0,r.jsx)(s.td,{children:"TimeSpan"}),(0,r.jsx)(s.td,{children:"early session market open"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"isDefault"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"latePreOpenTime"}),(0,r.jsx)(s.td,{children:"TimeSpan"}),(0,r.jsx)(s.td,{children:"extended session pre-open (orders accepted)"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"lateSessionCloseTime"}),(0,r.jsx)(s.td,{children:"TimeSpan"}),(0,r.jsx)(s.td,{children:"extended session close"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"lateSessionOpenTime"}),(0,r.jsx)(s.td,{children:"TimeSpan"}),(0,r.jsx)(s.td,{children:"extended session open"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"marketDayType"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"../../../Enums/MarketDayType",children:"enum : MarketDayType"})}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"nextDayPreOpenTime"}),(0,r.jsx)(s.td,{children:"TimeSpan"}),(0,r.jsx)(s.td,{children:"next day session pre-open (order accepted for first T+1 session)"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"nextDaySessionOpenTime"}),(0,r.jsx)(s.td,{children:"TimeSpan"}),(0,r.jsx)(s.td,{children:"next day session open (first T+1 session)"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"regPreOpenTime"}),(0,r.jsx)(s.td,{children:"TimeSpan"}),(0,r.jsx)(s.td,{children:"regular session pre-open (order accepted)"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"regSessionCloseTime"}),(0,r.jsx)(s.td,{children:"TimeSpan"}),(0,r.jsx)(s.td,{children:"regular session close"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"regSessionOpenTime"}),(0,r.jsx)(s.td,{children:"TimeSpan"}),(0,r.jsx)(s.td,{children:"regular session open"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"srCloseMarkTime"}),(0,r.jsx)(s.td,{children:"TimeSpan"}),(0,r.jsx)(s.td,{children:"SR Close Mark Time;usually regular market close - 1 minute (C - 1M)"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"timestamp"}),(0,r.jsx)(s.td,{children:"DateTime"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"undTicker"}),(0,r.jsx)(s.td,{children:"TickerKey"}),(0,r.jsx)(s.td,{children:"SR Underlying ticker - SPY, MSFT, @ES, @ZC, @GC, @ED, etc."})]})]})]})]})]})}function o(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},28453:(e,s,d)=>{d.d(s,{R:()=>i,x:()=>c});var r=d(96540);const t={},n=r.createContext(t);function i(e){const s=r.useContext(n);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),r.createElement(n.Provider,{value:s},e.children)}}}]);