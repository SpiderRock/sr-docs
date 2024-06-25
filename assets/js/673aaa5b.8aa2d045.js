"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[35225],{79067:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>n,default:()=>o,frontMatter:()=>d,metadata:()=>l,toc:()=>a});var r=i(74848),s=i(28453);const d={title:"OptionMarketSummary"},n="Message: OptionMarketSummary (ID: 2780)",l={id:"Schema/Topics/market-data-options/OptionMarketSummary",title:"OptionMarketSummary",description:"These records represent live market summary snapshots for each active option",source:"@site/docs/Schema/Topics/2750-market-data-options/OptionMarketSummary.md",sourceDirName:"Schema/Topics/2750-market-data-options",slug:"/Schema/Topics/market-data-options/OptionMarketSummary",permalink:"/docs/Schema/Topics/market-data-options/OptionMarketSummary",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"OptionMarketSummary"},sidebar:"schemaSidebar",previous:{title:"OptionFlexEvent",permalink:"/docs/Schema/Topics/market-data-options/OptionFlexEvent"},next:{title:"OptionNbboQuote",permalink:"/docs/Schema/Topics/market-data-options/OptionNbboQuote"}},c={},a=[{value:"META DATA  (Topic: market-data-options )",id:"meta-data--topic-market-data-options-",level:3},{value:"PRIMARY KEY",id:"primary-key",level:3},{value:"BODY",id:"body",level:3}];function h(e){const t={h1:"h1",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.h1,{id:"message-optionmarketsummary-id-2780",children:["Message: OptionMarketSummary ",(0,r.jsx)("span",{className:"small-text",children:"(ID: 2780)"})]}),"\n",(0,r.jsx)(t.p,{children:"These records represent live market summary snapshots for each active option"}),"\n",(0,r.jsxs)("div",{className:"single-message-meta",children:[(0,r.jsx)(t.h3,{id:"meta-data--topic-market-data-options-",children:"META DATA  (Topic: market-data-options )"}),(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Attribute"}),(0,r.jsx)(t.th,{children:"Value"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"MLink Token"}),(0,r.jsx)(t.td,{children:"OptSummaryData"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"SRSE Product"}),(0,r.jsx)(t.td,{children:"SRLive"})]})]})]})]}),"\n",(0,r.jsxs)("div",{className:"single-message-primarykey",children:[(0,r.jsx)(t.h3,{id:"primary-key",children:"PRIMARY KEY"}),(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Field"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Comment"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"okey"}),(0,r.jsx)(t.td,{children:"OptionKey"}),(0,r.jsx)(t.td,{})]})})]})]}),"\n",(0,r.jsxs)("div",{className:"single-message-body",children:[(0,r.jsx)(t.h3,{id:"body",children:"BODY"}),(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Field"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Comment"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"askCount"}),(0,r.jsx)(t.td,{children:"int"}),(0,r.jsx)(t.td,{children:"num prints >= SR surface mark"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"askVolume"}),(0,r.jsx)(t.td,{children:"int"}),(0,r.jsx)(t.td,{children:"volume when prtPrice >= quote.ask"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"avgAskSize"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"average ask size (time weighted)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"avgBidSize"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"average bid size (time weighted)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"avgWidth"}),(0,r.jsx)(t.td,{children:"double"}),(0,r.jsx)(t.td,{children:"average market width (time weighted)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"bidCount"}),(0,r.jsx)(t.td,{children:"int"}),(0,r.jsx)(t.td,{children:"num prints <= SR surface mark"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"bidVolume"}),(0,r.jsx)(t.td,{children:"int"}),(0,r.jsx)(t.td,{children:"volume when prtPrice <= quote.bid"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"clsPrice"}),(0,r.jsx)(t.td,{children:"double"}),(0,r.jsx)(t.td,{children:"end of day (SR) close mark"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"clsVolatility"}),(0,r.jsx)(t.td,{children:"double"}),(0,r.jsx)(t.td,{children:"end of day (SR) close mark (volatility)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"lastPrint"}),(0,r.jsx)(t.td,{children:"DateTime"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"lastPrtPrice"}),(0,r.jsx)(t.td,{children:"double"}),(0,r.jsx)(t.td,{children:"last print price"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"lastPrtVolatility"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"last print volatility"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"maxPrtPrc"}),(0,r.jsx)(t.td,{children:"double"}),(0,r.jsx)(t.td,{children:"maximum print price within market hours"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"maxPrtVol"}),(0,r.jsx)(t.td,{children:"double"}),(0,r.jsx)(t.td,{children:"maximum print volatility within market hours"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"midCount"}),(0,r.jsx)(t.td,{children:"int"}),(0,r.jsx)(t.td,{children:"num prints inside quote.ebid / quote.eask"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"midVolume"}),(0,r.jsx)(t.td,{children:"int"}),(0,r.jsx)(t.td,{children:"volume inside quote.ebid / quote.eask"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"minPrtPrc"}),(0,r.jsx)(t.td,{children:"double"}),(0,r.jsx)(t.td,{children:"minimum print price within market hours"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"minPrtVol"}),(0,r.jsx)(t.td,{children:"double"}),(0,r.jsx)(t.td,{children:"minimum print volatility within market hours"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"openInterest"}),(0,r.jsx)(t.td,{children:"int"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"opnPrice"}),(0,r.jsx)(t.td,{children:"double"}),(0,r.jsx)(t.td,{children:"start of day (SR) open mark"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"opnVolatility"}),(0,r.jsx)(t.td,{children:"double"}),(0,r.jsx)(t.td,{children:"start of day (SR) open mark (volatility)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"prtCount"}),(0,r.jsx)(t.td,{children:"int"}),(0,r.jsx)(t.td,{children:"number of distinct print reports"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"timestamp"}),(0,r.jsx)(t.td,{children:"DateTime"}),(0,r.jsx)(t.td,{})]})]})]})]})]})}function o(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},28453:(e,t,i)=>{i.d(t,{R:()=>n,x:()=>l});var r=i(96540);const s={},d=r.createContext(s);function n(e){const t=r.useContext(d);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:n(e.components),r.createElement(d.Provider,{value:t},e.children)}}}]);