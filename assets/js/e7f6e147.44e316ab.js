"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[72314],{19218:(t,e,s)=>{s.r(e),s.d(e,{assets:()=>l,contentTitle:()=>i,default:()=>o,frontMatter:()=>n,metadata:()=>c,toc:()=>a});var d=s(74848),r=s(28453);const n={title:"OptionPrintSummary"},i="Message: OptionPrintSummary (ID: 2825)",c={id:"Schema/Topics/market-data-options/OptionPrintSummary",title:"OptionPrintSummary",description:"Root/Expiration trading summaries.  Includes contracts and vega trade in total and on the public bid or offer.  Records update live as public trades occur.",source:"@site/docs/Schema/Topics/2750-market-data-options/OptionPrintSummary.md",sourceDirName:"Schema/Topics/2750-market-data-options",slug:"/Schema/Topics/market-data-options/OptionPrintSummary",permalink:"/docs/Schema/Topics/market-data-options/OptionPrintSummary",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"OptionPrintSummary"},sidebar:"schemaSidebar",previous:{title:"OptionPrintSetSummary",permalink:"/docs/Schema/Topics/market-data-options/OptionPrintSetSummary"},next:{title:"SOQConstituentSymbolMap",permalink:"/docs/Schema/Topics/market-data-options/SOQConstituentSymbolMap"}},l={},a=[{value:"META DATA  (Topic: market-data-options )",id:"meta-data--topic-market-data-options-",level:3},{value:"PRIMARY KEY",id:"primary-key",level:3},{value:"BODY",id:"body",level:3}];function h(t){const e={a:"a",h1:"h1",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...t.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(e.h1,{id:"message-optionprintsummary-id-2825",children:["Message: OptionPrintSummary ",(0,d.jsx)("span",{className:"small-text",children:"(ID: 2825)"})]}),"\n",(0,d.jsx)(e.p,{children:"Root/Expiration trading summaries.  Includes contracts and vega trade in total and on the public bid or offer.  Records update live as public trades occur."}),"\n",(0,d.jsxs)("div",{className:"single-message-meta",children:[(0,d.jsx)(e.h3,{id:"meta-data--topic-market-data-options-",children:"META DATA  (Topic: market-data-options )"}),(0,d.jsxs)(e.table,{children:[(0,d.jsx)(e.thead,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.th,{children:"Attribute"}),(0,d.jsx)(e.th,{children:"Value"})]})}),(0,d.jsxs)(e.tbody,{children:[(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"MLink Token"}),(0,d.jsx)(e.td,{children:"SystemData"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"SRSE Product"}),(0,d.jsx)(e.td,{children:"SRLive"})]})]})]})]}),"\n",(0,d.jsxs)("div",{className:"single-message-primarykey",children:[(0,d.jsx)(e.h3,{id:"primary-key",children:"PRIMARY KEY"}),(0,d.jsxs)(e.table,{children:[(0,d.jsx)(e.thead,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.th,{children:"Field"}),(0,d.jsx)(e.th,{children:"Type"}),(0,d.jsx)(e.th,{children:"Comment"})]})}),(0,d.jsxs)(e.tbody,{children:[(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"ekey"}),(0,d.jsx)(e.td,{children:"ExpiryKey"}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"prtSummaryType"}),(0,d.jsx)(e.td,{children:(0,d.jsx)(e.a,{href:"../../../Enums/PrtSummaryType",children:"enum : PrtSummaryType"})}),(0,d.jsx)(e.td,{})]})]})]})]}),"\n",(0,d.jsxs)("div",{className:"single-message-body",children:[(0,d.jsx)(e.h3,{id:"body",children:"BODY"}),(0,d.jsxs)(e.table,{children:[(0,d.jsx)(e.thead,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.th,{children:"Field"}),(0,d.jsx)(e.th,{children:"Type"}),(0,d.jsx)(e.th,{children:"Comment"})]})}),(0,d.jsxs)(e.tbody,{children:[(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"cnBot"}),(0,d.jsx)(e.td,{children:"int"}),(0,d.jsx)(e.td,{children:"total contracts bot (print price closer to bid)"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"cnPrt"}),(0,d.jsx)(e.td,{children:"int"}),(0,d.jsx)(e.td,{children:"total contracts printed"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"cnSld"}),(0,d.jsx)(e.td,{children:"int"}),(0,d.jsx)(e.td,{children:"total contracts sld (print price closer to ask)"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"netTimestamp"}),(0,d.jsx)(e.td,{children:"long"}),(0,d.jsx)(e.td,{children:"inbound packet PTP timestamp from SR gateway switch;usually syncronized with facility grandfather clock"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"recCnt"}),(0,d.jsx)(e.td,{children:"int"}),(0,d.jsx)(e.td,{children:"number of print reports included in totals"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"ticker"}),(0,d.jsx)(e.td,{children:"TickerKey"}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"veAtBot"}),(0,d.jsx)(e.td,{children:"float"}),(0,d.jsx)(e.td,{children:"sum(abs(cn * upc * ve))"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"veAtPrt"}),(0,d.jsx)(e.td,{children:"float"}),(0,d.jsx)(e.td,{children:"sum(abs(cn * upc * ve)) & fuzzy bucket"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"veAtSld"}),(0,d.jsx)(e.td,{children:"float"}),(0,d.jsx)(e.td,{children:"sum(abs(cn * upc * ve))"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"veBot"}),(0,d.jsx)(e.td,{children:"float"}),(0,d.jsx)(e.td,{children:"sum(abs(cn * upc * ve))"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"veDdBot"}),(0,d.jsx)(e.td,{children:"float"}),(0,d.jsx)(e.td,{children:"sum(abs(cn * upc * ve))"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"veDdPrt"}),(0,d.jsx)(e.td,{children:"float"}),(0,d.jsx)(e.td,{children:"sum(abs(cn * upc * ve)) & fuzzy bucket"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"veDdSld"}),(0,d.jsx)(e.td,{children:"float"}),(0,d.jsx)(e.td,{children:"sum(abs(cn * upc * ve))"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"veDnBot"}),(0,d.jsx)(e.td,{children:"float"}),(0,d.jsx)(e.td,{children:"sum(abs(cn * upc * ve))"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"veDnPrt"}),(0,d.jsx)(e.td,{children:"float"}),(0,d.jsx)(e.td,{children:"sum(abs(cn * upc * ve)) & fuzzy bucket"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"veDnSld"}),(0,d.jsx)(e.td,{children:"float"}),(0,d.jsx)(e.td,{children:"sum(abs(cn * upc * ve))"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"veDuBot"}),(0,d.jsx)(e.td,{children:"float"}),(0,d.jsx)(e.td,{children:"sum(abs(cn * upc * ve))"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"veDuPrt"}),(0,d.jsx)(e.td,{children:"float"}),(0,d.jsx)(e.td,{children:"sum(abs(cn * upc * ve)) & fuzzy bucket"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"veDuSld"}),(0,d.jsx)(e.td,{children:"float"}),(0,d.jsx)(e.td,{children:"sum(abs(cn * upc * ve))"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"vePrt"}),(0,d.jsx)(e.td,{children:"float"}),(0,d.jsx)(e.td,{children:"sum(abs(cn * upc * ve))"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"veSld"}),(0,d.jsx)(e.td,{children:"float"}),(0,d.jsx)(e.td,{children:"sum(abs(cn * upc * ve))"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"veUpBot"}),(0,d.jsx)(e.td,{children:"float"}),(0,d.jsx)(e.td,{children:"sum(abs(cn * upc * ve))"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"veUpPrt"}),(0,d.jsx)(e.td,{children:"float"}),(0,d.jsx)(e.td,{children:"sum(abs(cn * upc * ve)) & fuzzy bucket"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"veUpSld"}),(0,d.jsx)(e.td,{children:"float"}),(0,d.jsx)(e.td,{children:"sum(abs(cn * upc * ve))"})]})]})]})]})]})}function o(t={}){const{wrapper:e}={...(0,r.R)(),...t.components};return e?(0,d.jsx)(e,{...t,children:(0,d.jsx)(h,{...t})}):h(t)}},28453:(t,e,s)=>{s.d(e,{R:()=>i,x:()=>c});var d=s(96540);const r={},n=d.createContext(r);function i(t){const e=d.useContext(n);return d.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function c(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(r):t.components||r:i(t.components),d.createElement(n.Provider,{value:e},t.children)}}}]);