"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[82297],{73135:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>o,frontMatter:()=>d,metadata:()=>c,toc:()=>l});var t=r(74848),s=r(28453);const d={title:"StockEarningsCalendar_Extern"},i="Message: StockEarningsCalendar_Extern (ID: 2150)",c={id:"Schema/Topics/core-extern/StockEarningsCalendar_Extern",title:"StockEarningsCalendar_Extern",description:"StockEarningsCalendar records contain a historical (prior 12) earnings dates and future (next 12) projected dates.",source:"@site/docs/Schema/Topics/2120-core-extern/StockEarningsCalendar_Extern.md",sourceDirName:"Schema/Topics/2120-core-extern",slug:"/Schema/Topics/core-extern/StockEarningsCalendar_Extern",permalink:"/sr-docs/docs/Schema/Topics/core-extern/StockEarningsCalendar_Extern",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"StockEarningsCalendar_Extern"},sidebar:"schemaSidebar",previous:{title:"TheoModelConfig",permalink:"/sr-docs/docs/Schema/Topics/client-theos/TheoModelConfig"},next:{title:"ExternAggGroupReport",permalink:"/sr-docs/docs/Schema/Topics/execution-engine/ExternAggGroupReport"}},a={},l=[{value:"META DATA  (Topic: core-extern )",id:"meta-data--topic-core-extern-",level:3},{value:"PRIMARY KEY",id:"primary-key",level:3},{value:"BODY",id:"body",level:3},{value:"REPEATING FIELDS",id:"repeating-fields",level:3}];function h(e){const n={a:"a",h1:"h1",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.h1,{id:"message-stockearningscalendar_extern-id-2150",children:["Message: StockEarningsCalendar_Extern ",(0,t.jsx)("span",{className:"small-text",children:"(ID: 2150)"})]}),"\n",(0,t.jsx)(n.p,{children:"StockEarningsCalendar records contain a historical (prior 12) earnings dates and future (next 12) projected dates."}),"\n",(0,t.jsxs)("div",{className:"single-message-meta",children:[(0,t.jsx)(n.h3,{id:"meta-data--topic-core-extern-",children:"META DATA  (Topic: core-extern )"}),(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Attribute"}),(0,t.jsx)(n.th,{children:"Value"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"MLink Token"}),(0,t.jsx)(n.td,{children:"GlobalDefinition"})]})})]})]}),"\n",(0,t.jsxs)("div",{className:"single-message-primarykey",children:[(0,t.jsx)(n.h3,{id:"primary-key",children:"PRIMARY KEY"}),(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Field"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Comment"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"ticker"}),(0,t.jsx)(n.td,{children:"TickerKey"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"source"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"../../Enums/EventSource",children:"enum : EventSource"})}),(0,t.jsx)(n.td,{children:"Live=currentEarningsDate; priorDay=previousEarningsDate"})]})]})]})]}),"\n",(0,t.jsxs)("div",{className:"single-message-body",children:[(0,t.jsx)(n.h3,{id:"body",children:"BODY"}),(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Field"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Comment"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"eMoveHist"}),(0,t.jsx)(n.td,{children:"float"}),(0,t.jsx)(n.td,{children:"historical average (trailing 8) earnings moves prior to today"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"timestamp"}),(0,t.jsx)(n.td,{children:"DateTime"}),(0,t.jsx)(n.td,{children:"timestamp of record"})]})]})]}),(0,t.jsx)(n.h3,{id:"repeating-fields",children:"REPEATING FIELDS"}),(0,t.jsx)(n.p,{children:"Event"}),(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Field"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Comment"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"close"}),(0,t.jsx)(n.td,{children:"float"}),(0,t.jsx)(n.td,{children:"close price (on moveDate)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"earnChange"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"../../Enums/earnChange",children:"enum : earnChange"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"earnFiscalQtr"}),(0,t.jsx)(n.td,{children:"DateKey"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"earnPctMove"}),(0,t.jsx)(n.td,{children:"float"}),(0,t.jsx)(n.td,{children:"underlying move in the trading period including the event (only available when eventStatus = 'Actual')"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"earnStatus"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"../../Enums/EarnStatus",children:"enum : EarnStatus"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"eventDate"}),(0,t.jsx)(n.td,{children:"DateKey"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"eventTime"}),(0,t.jsx)(n.td,{children:"string(8)"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"guidanceIssued"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"../../Enums/GuidanceIssued",children:"enum : GuidanceIssued"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"hEMove"}),(0,t.jsx)(n.td,{children:"float"}),(0,t.jsx)(n.td,{children:"historical average (trailing 8) earnings moves prior to announcement (historical only)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"high"}),(0,t.jsx)(n.td,{children:"float"}),(0,t.jsx)(n.td,{children:"high price (on moveDate)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"low"}),(0,t.jsx)(n.td,{children:"float"}),(0,t.jsx)(n.td,{children:"low price (on moveDate)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"moveDate"}),(0,t.jsx)(n.td,{children:"DateKey"}),(0,t.jsx)(n.td,{children:"date corresponding to larger daily change (OHLC data taken from the same date or the date following each earnings announcement)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"open"}),(0,t.jsx)(n.td,{children:"float"}),(0,t.jsx)(n.td,{children:"opening price (on moveDate)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"prvClose"}),(0,t.jsx)(n.td,{children:"float"}),(0,t.jsx)(n.td,{children:"closing price prior to earnings announcement"})]})]})]})]})]})}function o(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>c});var t=r(96540);const s={},d=t.createContext(s);function i(e){const n=t.useContext(d);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(d.Provider,{value:n},e.children)}}}]);