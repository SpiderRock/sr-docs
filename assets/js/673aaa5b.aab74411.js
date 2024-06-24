"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[35225],{79067:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>n,default:()=>o,frontMatter:()=>d,metadata:()=>l,toc:()=>a});var i=r(74848),s=r(28453);const d={title:"OptionMarketSummary"},n="Message: OptionMarketSummary (ID: 2780)",l={id:"Schema/Topics/market-data-options/OptionMarketSummary",title:"OptionMarketSummary",description:"These records represent live market summary snapshots for each active option",source:"@site/docs/Schema/Topics/2750-market-data-options/OptionMarketSummary.md",sourceDirName:"Schema/Topics/2750-market-data-options",slug:"/Schema/Topics/market-data-options/OptionMarketSummary",permalink:"/sr-docs/docs/Schema/Topics/market-data-options/OptionMarketSummary",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"OptionMarketSummary"},sidebar:"schemaSidebar",previous:{title:"OptionFlexEvent",permalink:"/sr-docs/docs/Schema/Topics/market-data-options/OptionFlexEvent"},next:{title:"OptionNbboQuote",permalink:"/sr-docs/docs/Schema/Topics/market-data-options/OptionNbboQuote"}},c={},a=[{value:"META DATA  (Topic: market-data-options )",id:"meta-data--topic-market-data-options-",level:3},{value:"PRIMARY KEY",id:"primary-key",level:3},{value:"BODY",id:"body",level:3}];function h(e){const t={h1:"h1",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.h1,{id:"message-optionmarketsummary-id-2780",children:["Message: OptionMarketSummary ",(0,i.jsx)("span",{className:"small-text",children:"(ID: 2780)"})]}),"\n",(0,i.jsx)(t.p,{children:"These records represent live market summary snapshots for each active option"}),"\n",(0,i.jsxs)("div",{className:"single-message-meta",children:[(0,i.jsx)(t.h3,{id:"meta-data--topic-market-data-options-",children:"META DATA  (Topic: market-data-options )"}),(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Attribute"}),(0,i.jsx)(t.th,{children:"Value"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"MLink Token"}),(0,i.jsx)(t.td,{children:"OptSummaryData"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"SRSE Product"}),(0,i.jsx)(t.td,{children:"SRLive"})]})]})]})]}),"\n",(0,i.jsxs)("div",{className:"single-message-primarykey",children:[(0,i.jsx)(t.h3,{id:"primary-key",children:"PRIMARY KEY"}),(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Field"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{children:"Comment"})]})}),(0,i.jsx)(t.tbody,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"okey"}),(0,i.jsx)(t.td,{children:"OptionKey"}),(0,i.jsx)(t.td,{})]})})]})]}),"\n",(0,i.jsxs)("div",{className:"single-message-body",children:[(0,i.jsx)(t.h3,{id:"body",children:"BODY"}),(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Field"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{children:"Comment"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"askCount"}),(0,i.jsx)(t.td,{children:"int"}),(0,i.jsx)(t.td,{children:"num prints >= SR surface mark"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"askVolume"}),(0,i.jsx)(t.td,{children:"int"}),(0,i.jsx)(t.td,{children:"volume when prtPrice >= quote.ask"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"avgAskSize"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{children:"average ask size (time weighted)"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"avgBidSize"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{children:"average bid size (time weighted)"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"avgWidth"}),(0,i.jsx)(t.td,{children:"double"}),(0,i.jsx)(t.td,{children:"average market width (time weighted)"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"bidCount"}),(0,i.jsx)(t.td,{children:"int"}),(0,i.jsx)(t.td,{children:"num prints <= SR surface mark"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"bidVolume"}),(0,i.jsx)(t.td,{children:"int"}),(0,i.jsx)(t.td,{children:"volume when prtPrice <= quote.bid"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"clsPrice"}),(0,i.jsx)(t.td,{children:"double"}),(0,i.jsx)(t.td,{children:"end of day (SR) close mark"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"clsVolatility"}),(0,i.jsx)(t.td,{children:"double"}),(0,i.jsx)(t.td,{children:"end of day (SR) close mark (volatility)"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"lastPrint"}),(0,i.jsx)(t.td,{children:"DateTime"}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"lastPrtPrice"}),(0,i.jsx)(t.td,{children:"double"}),(0,i.jsx)(t.td,{children:"last print price"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"lastPrtVolatility"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{children:"last print volatility"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"maxPrtPrc"}),(0,i.jsx)(t.td,{children:"double"}),(0,i.jsx)(t.td,{children:"maximum print price within market hours"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"maxPrtVol"}),(0,i.jsx)(t.td,{children:"double"}),(0,i.jsx)(t.td,{children:"maximum print volatility within market hours"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"midCount"}),(0,i.jsx)(t.td,{children:"int"}),(0,i.jsx)(t.td,{children:"num prints inside quote.ebid / quote.eask"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"midVolume"}),(0,i.jsx)(t.td,{children:"int"}),(0,i.jsx)(t.td,{children:"volume inside quote.ebid / quote.eask"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"minPrtPrc"}),(0,i.jsx)(t.td,{children:"double"}),(0,i.jsx)(t.td,{children:"minimum print price within market hours"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"minPrtVol"}),(0,i.jsx)(t.td,{children:"double"}),(0,i.jsx)(t.td,{children:"minimum print volatility within market hours"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"openInterest"}),(0,i.jsx)(t.td,{children:"int"}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"opnPrice"}),(0,i.jsx)(t.td,{children:"double"}),(0,i.jsx)(t.td,{children:"start of day (SR) open mark"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"opnVolatility"}),(0,i.jsx)(t.td,{children:"double"}),(0,i.jsx)(t.td,{children:"start of day (SR) open mark (volatility)"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"prtCount"}),(0,i.jsx)(t.td,{children:"int"}),(0,i.jsx)(t.td,{children:"number of distinct print reports"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"timestamp"}),(0,i.jsx)(t.td,{children:"DateTime"}),(0,i.jsx)(t.td,{})]})]})]})]})]})}function o(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},28453:(e,t,r)=>{r.d(t,{R:()=>n,x:()=>l});var i=r(96540);const s={},d=i.createContext(s);function n(e){const t=i.useContext(d);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:n(e.components),i.createElement(d.Provider,{value:t},e.children)}}}]);