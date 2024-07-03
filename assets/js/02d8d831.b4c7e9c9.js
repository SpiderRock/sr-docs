"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[76373],{65987:(e,s,d)=>{d.r(s),d.d(s,{assets:()=>c,contentTitle:()=>n,default:()=>x,frontMatter:()=>i,metadata:()=>l,toc:()=>a});var t=d(74848),r=d(28453);const i={title:"VolTimeCalculator"},n="Schema: VolTimeCalculator (ID: 5065)",l={id:"MessageSchemas/Schema/Topics/srse-calculators/VolTimeCalculator",title:"VolTimeCalculator",description:"This table allows custom span risk calculations based on either user or SR supplied input values.",source:"@site/docs/MessageSchemas/Schema/Topics/5030-srse-calculators/VolTimeCalculator.md",sourceDirName:"MessageSchemas/Schema/Topics/5030-srse-calculators",slug:"/MessageSchemas/Schema/Topics/srse-calculators/VolTimeCalculator",permalink:"/docs/MessageSchemas/Schema/Topics/srse-calculators/VolTimeCalculator",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"VolTimeCalculator"},sidebar:"messageSchemasSidebar",previous:{title:"SpanRiskCalculator",permalink:"/docs/MessageSchemas/Schema/Topics/srse-calculators/SpanRiskCalculator"},next:{title:"5120-srse-gateway",permalink:"/docs/MessageSchemas/Schema/Topics/srse-gateway/"}},c={},a=[{value:"METADATA",id:"metadata",level:3},{value:"PRIMARY KEY",id:"primary-key",level:3},{value:"BODY",id:"body",level:3}];function h(e){const s={a:"a",h1:"h1",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.h1,{id:"schema-voltimecalculator-id-5065",children:["Schema: VolTimeCalculator ",(0,t.jsx)("span",{className:"small-text",children:"(ID: 5065)"})]}),"\n",(0,t.jsx)(s.p,{children:"This table allows custom span risk calculations based on either user or SR supplied input values."}),"\n",(0,t.jsxs)("div",{className:"single-message-meta",children:[(0,t.jsx)(s.h3,{id:"metadata",children:"METADATA"}),(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Attribute"}),(0,t.jsx)(s.th,{children:"Value"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Topic"}),(0,t.jsx)(s.td,{children:"5030-srse-calculators"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"MLink Token"}),(0,t.jsx)(s.td,{children:"SystemData"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"SRSE Product"}),(0,t.jsx)(s.td,{children:"SRAnalytics"})]})]})]})]}),"\n",(0,t.jsxs)("div",{className:"single-message-primarykey",children:[(0,t.jsx)(s.h3,{id:"primary-key",children:"PRIMARY KEY"}),(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"#"}),(0,t.jsx)(s.th,{children:"Field"}),(0,t.jsx)(s.th,{children:"Type"}),(0,t.jsx)(s.th,{children:"Comment"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"10"}),(0,t.jsx)(s.td,{children:"ticker"}),(0,t.jsx)(s.td,{children:"TickerKey"}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"11"}),(0,t.jsx)(s.td,{children:"secType"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"../../../Enums/SpdrKeyType",children:"enum : SpdrKeyType"})}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"12"}),(0,t.jsx)(s.td,{children:"endDate"}),(0,t.jsx)(s.td,{children:"DateKey"}),(0,t.jsx)(s.td,{children:"period end date (CST)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"13"}),(0,t.jsx)(s.td,{children:"userName"}),(0,t.jsx)(s.td,{children:"string(24)"}),(0,t.jsx)(s.td,{})]})]})]})]}),"\n",(0,t.jsxs)("div",{className:"single-message-body",children:[(0,t.jsx)(s.h3,{id:"body",children:"BODY"}),(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"#"}),(0,t.jsx)(s.th,{children:"Field"}),(0,t.jsx)(s.th,{children:"Type"}),(0,t.jsx)(s.th,{children:"Comment"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"145"}),(0,t.jsx)(s.td,{children:"clkMeasure"}),(0,t.jsx)(s.td,{children:"double"}),(0,t.jsx)(s.td,{children:"volatility years per clkMinute"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"139"}),(0,t.jsx)(s.td,{children:"clkMinutes"}),(0,t.jsx)(s.td,{children:"int"}),(0,t.jsx)(s.td,{children:"number of non-market trading minutes between endpoints."})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"133"}),(0,t.jsx)(s.td,{children:"completeDays"}),(0,t.jsx)(s.td,{children:"int"}),(0,t.jsx)(s.td,{children:"number of complete trading days between endpoints."})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"100"}),(0,t.jsx)(s.td,{children:"endTime"}),(0,t.jsx)(s.td,{children:"TimeSpan"}),(0,t.jsx)(s.td,{children:"period end time (CST)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"148"}),(0,t.jsx)(s.td,{children:"error"}),(0,t.jsx)(s.td,{children:"string(32)"}),(0,t.jsx)(s.td,{children:"calculation error"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"115"}),(0,t.jsx)(s.td,{children:"holidayCalendar"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"../../../Enums/CalendarCode",children:"enum : CalendarCode"})}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"118"}),(0,t.jsx)(s.td,{children:"holidayCalendarSrc"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"../../../Enums/FieldSrc",children:"enum : FieldSrc"})}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"130"}),(0,t.jsx)(s.td,{children:"holidayDays"}),(0,t.jsx)(s.td,{children:"int"}),(0,t.jsx)(s.td,{children:"number of holidays (days that would otherwise be trading days) between endpoints."})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"103"}),(0,t.jsx)(s.td,{children:"nowDttm"}),(0,t.jsx)(s.td,{children:"DateTime"}),(0,t.jsx)(s.td,{children:"period start time (CST)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"106"}),(0,t.jsx)(s.td,{children:"nowSrc"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"../../../Enums/FieldSrc",children:"enum : FieldSrc"})}),(0,t.jsx)(s.td,{children:"default is clock time when selecting"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"127"}),(0,t.jsx)(s.td,{children:"partialDays"}),(0,t.jsx)(s.td,{children:"int"}),(0,t.jsx)(s.td,{children:"number of partial trading days (half-days) between endpoints."})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"109"}),(0,t.jsx)(s.td,{children:"timeMetric"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"../../../Enums/TimeMetric",children:"enum : TimeMetric"})}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"112"}),(0,t.jsx)(s.td,{children:"timeMetricSrc"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"../../../Enums/FieldSrc",children:"enum : FieldSrc"})}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"151"}),(0,t.jsx)(s.td,{children:"timestamp"}),(0,t.jsx)(s.td,{children:"DateTime"}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"142"}),(0,t.jsx)(s.td,{children:"trdMeasure"}),(0,t.jsx)(s.td,{children:"double"}),(0,t.jsx)(s.td,{children:"volatility years per trdMinute"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"136"}),(0,t.jsx)(s.td,{children:"trdMinutes"}),(0,t.jsx)(s.td,{children:"int"}),(0,t.jsx)(s.td,{children:"number of market trading minutes between endpoints."})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"121"}),(0,t.jsx)(s.td,{children:"years"}),(0,t.jsx)(s.td,{children:"double"}),(0,t.jsx)(s.td,{children:"volatility years from nowDttm to endDttm using TradingCalendar (SR NMS Trading/Volatility Calendar)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"124"}),(0,t.jsx)(s.td,{children:"years365"}),(0,t.jsx)(s.td,{children:"double"}),(0,t.jsx)(s.td,{})]})]})]})]})]})}function x(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},28453:(e,s,d)=>{d.d(s,{R:()=>n,x:()=>l});var t=d(96540);const r={},i=t.createContext(r);function n(e){const s=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:n(e.components),t.createElement(i.Provider,{value:s},e.children)}}}]);