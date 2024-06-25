"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[33557],{90703:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>h,contentTitle:()=>n,default:()=>o,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var d=r(74848),s=r(28453);const i={title:"FutureMinuteBar"},n="Message: FutureMinuteBar (ID: 1160)",c={id:"Schema/Topics/archive-data/FutureMinuteBar",title:"FutureMinuteBar",description:"FutureMinuteBar records are created once per minute for all future markets (outrights and spreads).  These records are visible in SRSE and are published to the SpiderRock elastic cluster at the same time.",source:"@site/docs/Schema/Topics/1160-archive-data/FutureMinuteBar.md",sourceDirName:"Schema/Topics/1160-archive-data",slug:"/Schema/Topics/archive-data/FutureMinuteBar",permalink:"/docs/Schema/Topics/archive-data/FutureMinuteBar",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"FutureMinuteBar"},sidebar:"schemaSidebar",previous:{title:"TheoSurfacePerf",permalink:"/docs/Schema/Topics/analytics/TheoSurfacePerf"},next:{title:"StockMinuteBar",permalink:"/docs/Schema/Topics/archive-data/StockMinuteBar"}},h={},l=[{value:"META DATA  (Topic: archive-data )",id:"meta-data--topic-archive-data-",level:3},{value:"PRIMARY KEY",id:"primary-key",level:3},{value:"BODY",id:"body",level:3}];function a(e){const t={a:"a",h1:"h1",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(t.h1,{id:"message-futureminutebar-id-1160",children:["Message: FutureMinuteBar ",(0,d.jsx)("span",{className:"small-text",children:"(ID: 1160)"})]}),"\n",(0,d.jsx)(t.p,{children:"FutureMinuteBar records are created once per minute for all future markets (outrights and spreads).  These records are visible in SRSE and are published to the SpiderRock elastic cluster at the same time."}),"\n",(0,d.jsxs)("div",{className:"single-message-meta",children:[(0,d.jsx)(t.h3,{id:"meta-data--topic-archive-data-",children:"META DATA  (Topic: archive-data )"}),(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Attribute"}),(0,d.jsx)(t.th,{children:"Value"})]})}),(0,d.jsx)(t.tbody,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"MLink Token"}),(0,d.jsx)(t.td,{children:"FutSummaryData"})]})})]})]}),"\n",(0,d.jsxs)("div",{className:"single-message-primarykey",children:[(0,d.jsx)(t.h3,{id:"primary-key",children:"PRIMARY KEY"}),(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Field"}),(0,d.jsx)(t.th,{children:"Type"}),(0,d.jsx)(t.th,{children:"Comment"})]})}),(0,d.jsx)(t.tbody,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"fkey"}),(0,d.jsx)(t.td,{children:"ExpiryKey"}),(0,d.jsx)(t.td,{})]})})]})]}),"\n",(0,d.jsxs)("div",{className:"single-message-body",children:[(0,d.jsx)(t.h3,{id:"body",children:"BODY"}),(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Field"}),(0,d.jsx)(t.th,{children:"Type"}),(0,d.jsx)(t.th,{children:"Comment"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"ask"}),(0,d.jsx)(t.td,{children:"double"}),(0,d.jsx)(t.td,{children:"Ask at the time of the print"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"askSz"}),(0,d.jsx)(t.td,{children:"int"}),(0,d.jsx)(t.td,{children:"Ask size at the time of print"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"bid"}),(0,d.jsx)(t.td,{children:"double"}),(0,d.jsx)(t.td,{children:"Bid at the time of the print"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"bidSz"}),(0,d.jsx)(t.td,{children:"int"}),(0,d.jsx)(t.td,{children:"Bid size at the time of print"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"date"}),(0,d.jsx)(t.td,{children:"string(10)"}),(0,d.jsx)(t.td,{children:"Trade Date"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"isEOB"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,d.jsx)(t.td,{children:"is end-of-bar (every 10 minutes)"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"isEOH"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,d.jsx)(t.td,{children:"is end-of-hour"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"prtCount"}),(0,d.jsx)(t.td,{children:"int"}),(0,d.jsx)(t.td,{children:"Number of prints during the period"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"prtHigh"}),(0,d.jsx)(t.td,{children:"double"}),(0,d.jsx)(t.td,{children:"High price during period (Bar)"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"prtLast"}),(0,d.jsx)(t.td,{children:"double"}),(0,d.jsx)(t.td,{children:"Print at close of period (Bar)"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"prtLow"}),(0,d.jsx)(t.td,{children:"double"}),(0,d.jsx)(t.td,{children:"Low price during period (Bar)"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"prtOpen"}),(0,d.jsx)(t.td,{children:"double"}),(0,d.jsx)(t.td,{children:"Print at open of period (Bar)"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"prtVWap"}),(0,d.jsx)(t.td,{children:"double"}),(0,d.jsx)(t.td,{children:"Period (Bar) VWap"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"prtVolume"}),(0,d.jsx)(t.td,{children:"int"}),(0,d.jsx)(t.td,{children:"Period (Bar) number of contracts"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"qteCount"}),(0,d.jsx)(t.td,{children:"int"}),(0,d.jsx)(t.td,{children:"Quote number of contracts"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"qteHiBid"}),(0,d.jsx)(t.td,{children:"double"}),(0,d.jsx)(t.td,{children:"Quote bid high"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"qteLoAsk"}),(0,d.jsx)(t.td,{children:"double"}),(0,d.jsx)(t.td,{children:"Quote ask low"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"qteTwap"}),(0,d.jsx)(t.td,{children:"double"}),(0,d.jsx)(t.td,{children:"Quote Twap"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"time"}),(0,d.jsx)(t.td,{children:"string(8)"}),(0,d.jsx)(t.td,{children:"Trade Time end of period (Bar)"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"timestamp"}),(0,d.jsx)(t.td,{children:"DateTime"}),(0,d.jsx)(t.td,{children:"same as date + time"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"width"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"reference point for expWidth (SR debug use)"})]})]})]})]})]})}function o(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(a,{...e})}):a(e)}},28453:(e,t,r)=>{r.d(t,{R:()=>n,x:()=>c});var d=r(96540);const s={},i=d.createContext(s);function n(e){const t=d.useContext(i);return d.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:n(e.components),d.createElement(i.Provider,{value:t},e.children)}}}]);