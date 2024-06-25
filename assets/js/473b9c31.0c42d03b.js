"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[4339],{4029:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>c,contentTitle:()=>n,default:()=>o,frontMatter:()=>i,metadata:()=>l,toc:()=>a});var r=t(74848),d=t(28453);const i={title:"VolTimeCalculator"},n="Message: VolTimeCalculator (ID: 5065)",l={id:"Schema/Topics/srse-calculators/VolTimeCalculator",title:"VolTimeCalculator",description:"This table allows custom span risk calculations based on either user or SR supplied input values.",source:"@site/docs/Schema/Topics/5030-srse-calculators/VolTimeCalculator.md",sourceDirName:"Schema/Topics/5030-srse-calculators",slug:"/Schema/Topics/srse-calculators/VolTimeCalculator",permalink:"/docs/Schema/Topics/srse-calculators/VolTimeCalculator",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"VolTimeCalculator"},sidebar:"schemaSidebar",previous:{title:"SpanRiskCalculator",permalink:"/docs/Schema/Topics/srse-calculators/SpanRiskCalculator"},next:{title:"AccountConfigGateway",permalink:"/docs/Schema/Topics/srse-gateway/AccountConfigGateway"}},c={},a=[{value:"META DATA  (Topic: srse-calculators )",id:"meta-data--topic-srse-calculators-",level:3},{value:"PRIMARY KEY",id:"primary-key",level:3},{value:"BODY",id:"body",level:3}];function h(e){const s={a:"a",h1:"h1",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.h1,{id:"message-voltimecalculator-id-5065",children:["Message: VolTimeCalculator ",(0,r.jsx)("span",{className:"small-text",children:"(ID: 5065)"})]}),"\n",(0,r.jsx)(s.p,{children:"This table allows custom span risk calculations based on either user or SR supplied input values."}),"\n",(0,r.jsxs)("div",{className:"single-message-meta",children:[(0,r.jsx)(s.h3,{id:"meta-data--topic-srse-calculators-",children:"META DATA  (Topic: srse-calculators )"}),(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Attribute"}),(0,r.jsx)(s.th,{children:"Value"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"MLink Token"}),(0,r.jsx)(s.td,{children:"SystemData"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"SRSE Product"}),(0,r.jsx)(s.td,{children:"SRAnalytics"})]})]})]})]}),"\n",(0,r.jsxs)("div",{className:"single-message-primarykey",children:[(0,r.jsx)(s.h3,{id:"primary-key",children:"PRIMARY KEY"}),(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Field"}),(0,r.jsx)(s.th,{children:"Type"}),(0,r.jsx)(s.th,{children:"Comment"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"ticker"}),(0,r.jsx)(s.td,{children:"TickerKey"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"secType"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"../../../Enums/SpdrKeyType",children:"enum : SpdrKeyType"})}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"endDate"}),(0,r.jsx)(s.td,{children:"DateKey"}),(0,r.jsx)(s.td,{children:"period end date (CST)"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"userName"}),(0,r.jsx)(s.td,{children:"string(24)"}),(0,r.jsx)(s.td,{})]})]})]})]}),"\n",(0,r.jsxs)("div",{className:"single-message-body",children:[(0,r.jsx)(s.h3,{id:"body",children:"BODY"}),(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Field"}),(0,r.jsx)(s.th,{children:"Type"}),(0,r.jsx)(s.th,{children:"Comment"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"clkMeasure"}),(0,r.jsx)(s.td,{children:"double"}),(0,r.jsx)(s.td,{children:"volatility years per clkMinute"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"clkMinutes"}),(0,r.jsx)(s.td,{children:"int"}),(0,r.jsx)(s.td,{children:"number of non-market trading minutes between endpoints."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"completeDays"}),(0,r.jsx)(s.td,{children:"int"}),(0,r.jsx)(s.td,{children:"number of complete trading days between endpoints."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"endTime"}),(0,r.jsx)(s.td,{children:"TimeSpan"}),(0,r.jsx)(s.td,{children:"period end time (CST)"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"error"}),(0,r.jsx)(s.td,{children:"string(32)"}),(0,r.jsx)(s.td,{children:"calculation error"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"holidayCalendar"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"../../../Enums/CalendarCode",children:"enum : CalendarCode"})}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"holidayCalendarSrc"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"../../../Enums/FieldSrc",children:"enum : FieldSrc"})}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"holidayDays"}),(0,r.jsx)(s.td,{children:"int"}),(0,r.jsx)(s.td,{children:"number of holidays (days that would otherwise be trading days) between endpoints."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"nowDttm"}),(0,r.jsx)(s.td,{children:"DateTime"}),(0,r.jsx)(s.td,{children:"period start time (CST)"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"nowSrc"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"../../../Enums/FieldSrc",children:"enum : FieldSrc"})}),(0,r.jsx)(s.td,{children:"default is clock time when selecting"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"partialDays"}),(0,r.jsx)(s.td,{children:"int"}),(0,r.jsx)(s.td,{children:"number of partial trading days (half-days) between endpoints."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"timeMetric"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"../../../Enums/TimeMetric",children:"enum : TimeMetric"})}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"timeMetricSrc"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"../../../Enums/FieldSrc",children:"enum : FieldSrc"})}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"timestamp"}),(0,r.jsx)(s.td,{children:"DateTime"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"trdMeasure"}),(0,r.jsx)(s.td,{children:"double"}),(0,r.jsx)(s.td,{children:"volatility years per trdMinute"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"trdMinutes"}),(0,r.jsx)(s.td,{children:"int"}),(0,r.jsx)(s.td,{children:"number of market trading minutes between endpoints."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"years"}),(0,r.jsx)(s.td,{children:"double"}),(0,r.jsx)(s.td,{children:"volatility years from nowDttm to endDttm using TradingCalendar (SR NMS Trading/Volatility Calendar)"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"years365"}),(0,r.jsx)(s.td,{children:"double"}),(0,r.jsx)(s.td,{})]})]})]})]})]})}function o(e={}){const{wrapper:s}={...(0,d.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},28453:(e,s,t)=>{t.d(s,{R:()=>n,x:()=>l});var r=t(96540);const d={},i=r.createContext(d);function n(e){const s=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:n(e.components),r.createElement(i.Provider,{value:s},e.children)}}}]);