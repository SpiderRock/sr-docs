"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[92685],{6917:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>n,contentTitle:()=>l,default:()=>a,frontMatter:()=>r,metadata:()=>c,toc:()=>o});var d=s(74848),i=s(28453);const r={title:"OptionImpliedVol"},l="Message: OptionImpliedVol (ID: 5045)",c={id:"Schema/Topics/srse-calculators/OptionImpliedVol",title:"OptionImpliedVol",description:"This table contains option implied volatilities computed using fast/accurate calcuation methods while the SELECT is processing.  Note that if you need even faster queries that cover a large number of strikes you may be better off using the OptionImpliedQuoteAdj table as it is pre-computed.",source:"@site/docs/Schema/Topics/5030-srse-calculators/OptionImpliedVol.md",sourceDirName:"Schema/Topics/5030-srse-calculators",slug:"/Schema/Topics/srse-calculators/OptionImpliedVol",permalink:"/sr-docs/docs/Schema/Topics/srse-calculators/OptionImpliedVol",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"OptionImpliedVol"},sidebar:"schemaSidebar",previous:{title:"OptionImpliedPair",permalink:"/sr-docs/docs/Schema/Topics/srse-calculators/OptionImpliedPair"},next:{title:"OptionTheoVol",permalink:"/sr-docs/docs/Schema/Topics/srse-calculators/OptionTheoVol"}},n={},o=[{value:"META DATA  (Topic: srse-calculators )",id:"meta-data--topic-srse-calculators-",level:3},{value:"PRIMARY KEY",id:"primary-key",level:3},{value:"BODY",id:"body",level:3}];function h(e){const t={h1:"h1",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(t.h1,{id:"message-optionimpliedvol-id-5045",children:["Message: OptionImpliedVol ",(0,d.jsx)("span",{className:"small-text",children:"(ID: 5045)"})]}),"\n",(0,d.jsx)(t.p,{children:"This table contains option implied volatilities computed using fast/accurate calcuation methods while the SELECT is processing.  Note that if you need even faster queries that cover a large number of strikes you may be better off using the OptionImpliedQuoteAdj table as it is pre-computed."}),"\n",(0,d.jsxs)("div",{className:"single-message-meta",children:[(0,d.jsx)(t.h3,{id:"meta-data--topic-srse-calculators-",children:"META DATA  (Topic: srse-calculators )"}),(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Attribute"}),(0,d.jsx)(t.th,{children:"Value"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"MLink Token"}),(0,d.jsx)(t.td,{children:"SystemData"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"SRSE Product"}),(0,d.jsx)(t.td,{children:"SRAnalytics"})]})]})]})]}),"\n",(0,d.jsxs)("div",{className:"single-message-primarykey",children:[(0,d.jsx)(t.h3,{id:"primary-key",children:"PRIMARY KEY"}),(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Field"}),(0,d.jsx)(t.th,{children:"Type"}),(0,d.jsx)(t.th,{children:"Comment"})]})}),(0,d.jsx)(t.tbody,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"okey"}),(0,d.jsx)(t.td,{children:"OptionKey"}),(0,d.jsx)(t.td,{})]})})]})]}),"\n",(0,d.jsxs)("div",{className:"single-message-body",children:[(0,d.jsx)(t.h3,{id:"body",children:"BODY"}),(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Field"}),(0,d.jsx)(t.th,{children:"Type"}),(0,d.jsx)(t.th,{children:"Comment"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"calcErr"}),(0,d.jsx)(t.td,{children:"string(24)"}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"cash"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"ddiv"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"de"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"deDecay"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"err"}),(0,d.jsx)(t.td,{children:"byte"}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"ga"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"oaiv"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"volatility implied by option ask price"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"oask"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"obid"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"obiv"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"volatility implied by option bid price"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"okeyOSI"}),(0,d.jsx)(t.td,{children:"string(21)"}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"rate"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"ro"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"sdiv"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"sprc"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"svol"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"th"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"theoErr"}),(0,d.jsx)(t.td,{children:"string(24)"}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"ticker"}),(0,d.jsx)(t.td,{children:"TickerKey"}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"timestamp"}),(0,d.jsx)(t.td,{children:"DateTime"}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"uask"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"ubid"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"uprc"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"va"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"ve"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"vo"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"yrs"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{})]})]})]})]})]})}function a(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(h,{...e})}):h(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>l,x:()=>c});var d=s(96540);const i={},r=d.createContext(i);function l(e){const t=d.useContext(r);return d.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),d.createElement(r.Provider,{value:t},e.children)}}}]);