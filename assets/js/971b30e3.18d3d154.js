"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[6859],{15642:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>a,contentTitle:()=>r,default:()=>o,frontMatter:()=>d,metadata:()=>c,toc:()=>l});var n=s(74848),i=s(28453);const d={title:"OptionOpenVega"},r="Schema: OptionOpenVega (ID: 3235)",c={id:"MessageSchemas/Schema/Topics/market-statistics/OptionOpenVega",title:"OptionOpenVega",description:"This table contains cumulative open interest, day trading volume in terms of both contracts and vega.",source:"@site/docs/MessageSchemas/Schema/Topics/3225-market-statistics/OptionOpenVega.md",sourceDirName:"MessageSchemas/Schema/Topics/3225-market-statistics",slug:"/MessageSchemas/Schema/Topics/market-statistics/OptionOpenVega",permalink:"/docs/MessageSchemas/Schema/Topics/market-statistics/OptionOpenVega",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"OptionOpenVega"},sidebar:"messageSchemasSidebar",previous:{title:"OptionOpenInterest",permalink:"/docs/MessageSchemas/Schema/Topics/market-statistics/OptionOpenInterest"},next:{title:"StockBeta",permalink:"/docs/MessageSchemas/Schema/Topics/market-statistics/StockBeta"}},a={},l=[{value:"METADATA",id:"metadata",level:3},{value:"PRIMARY KEY",id:"primary-key",level:3},{value:"BODY",id:"body",level:3}];function h(e){const t={h1:"h1",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.h1,{id:"schema-optionopenvega-id-3235",children:["Schema: OptionOpenVega ",(0,n.jsx)("span",{className:"small-text",children:"(ID: 3235)"})]}),"\n",(0,n.jsx)(t.p,{children:"This table contains cumulative open interest, day trading volume in terms of both contracts and vega."}),"\n",(0,n.jsxs)("div",{className:"single-message-meta",children:[(0,n.jsx)(t.h3,{id:"metadata",children:"METADATA"}),(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Attribute"}),(0,n.jsx)(t.th,{children:"Value"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Topic"}),(0,n.jsx)(t.td,{children:"3225-market-statistics"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"MLink Token"}),(0,n.jsx)(t.td,{children:"SystemData"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"SRSE Product"}),(0,n.jsx)(t.td,{children:"SRAnalytics"})]})]})]})]}),"\n",(0,n.jsxs)("div",{className:"single-message-primarykey",children:[(0,n.jsx)(t.h3,{id:"primary-key",children:"PRIMARY KEY"}),(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"#"}),(0,n.jsx)(t.th,{children:"Field"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Comment"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"10"}),(0,n.jsx)(t.td,{children:"ekey"}),(0,n.jsx)(t.td,{children:"ExpiryKey"}),(0,n.jsx)(t.td,{})]})})]})]}),"\n",(0,n.jsxs)("div",{className:"single-message-body",children:[(0,n.jsx)(t.h3,{id:"body",children:"BODY"}),(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"#"}),(0,n.jsx)(t.th,{children:"Field"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Comment"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"118"}),(0,n.jsx)(t.td,{children:"numOptions"}),(0,n.jsx)(t.td,{children:"int"}),(0,n.jsx)(t.td,{children:"number of strikes in this expiration month"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"106"}),(0,n.jsx)(t.td,{children:"openInt"}),(0,n.jsx)(t.td,{children:"int"}),(0,n.jsx)(t.td,{children:"open interest"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"112"}),(0,n.jsx)(t.td,{children:"openVega"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"open vega (sum of vega * open interest)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"103"}),(0,n.jsx)(t.td,{children:"ticker"}),(0,n.jsx)(t.td,{children:"TickerKey"}),(0,n.jsx)(t.td,{children:"ticker"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"121"}),(0,n.jsx)(t.td,{children:"timestamp"}),(0,n.jsx)(t.td,{children:"DateTime"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"100"}),(0,n.jsx)(t.td,{children:"tradingDate"}),(0,n.jsx)(t.td,{children:"DateKey"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"115"}),(0,n.jsx)(t.td,{children:"vegaVolume"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"sum of vega * volume"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"109"}),(0,n.jsx)(t.td,{children:"volume"}),(0,n.jsx)(t.td,{children:"int"}),(0,n.jsx)(t.td,{children:"option volume"})]})]})]})]})]})}function o(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>r,x:()=>c});var n=s(96540);const i={},d=n.createContext(i);function r(e){const t=n.useContext(d);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),n.createElement(d.Provider,{value:t},e.children)}}}]);