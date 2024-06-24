"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[55820],{22584:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>o,frontMatter:()=>n,metadata:()=>c,toc:()=>h});var d=s(74848),r=s(28453);const n={title:"AutoHedgeSymbol"},i="Message: AutoHedgeSymbol (ID: 5290)",c={id:"Schema/Topics/strategy-autohedge/AutoHedgeSymbol",title:"AutoHedgeSymbol",description:"AutoHedgeSymbol records are published by autohedge servers and contain all valid hedge target symbols.  Execution engines reject auto-hedge requests for hedgeSecKeys that are not in this set.",source:"@site/docs/Schema/Topics/5290-strategy-autohedge/AutoHedgeSymbol.md",sourceDirName:"Schema/Topics/5290-strategy-autohedge",slug:"/Schema/Topics/strategy-autohedge/AutoHedgeSymbol",permalink:"/sr-docs/docs/Schema/Topics/strategy-autohedge/AutoHedgeSymbol",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"AutoHedgeSymbol"},sidebar:"schemaSidebar",previous:{title:"ULinkContextGateway",permalink:"/sr-docs/docs/Schema/Topics/srse-gateway/ULinkContextGateway"},next:{title:"SpdrAutoHedgeControl",permalink:"/sr-docs/docs/Schema/Topics/strategy-autohedge/SpdrAutoHedgeControl"}},l={},h=[{value:"META DATA  (Topic: strategy-autohedge )",id:"meta-data--topic-strategy-autohedge-",level:3},{value:"PRIMARY KEY",id:"primary-key",level:3},{value:"BODY",id:"body",level:3}];function a(e){const t={a:"a",h1:"h1",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(t.h1,{id:"message-autohedgesymbol-id-5290",children:["Message: AutoHedgeSymbol ",(0,d.jsx)("span",{className:"small-text",children:"(ID: 5290)"})]}),"\n",(0,d.jsx)(t.p,{children:"AutoHedgeSymbol records are published by autohedge servers and contain all valid hedge target symbols.  Execution engines reject auto-hedge requests for hedgeSecKeys that are not in this set."}),"\n",(0,d.jsxs)("div",{className:"single-message-meta",children:[(0,d.jsx)(t.h3,{id:"meta-data--topic-strategy-autohedge-",children:"META DATA  (Topic: strategy-autohedge )"}),(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Attribute"}),(0,d.jsx)(t.th,{children:"Value"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"MLink Token"}),(0,d.jsx)(t.td,{children:"SystemData"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"SRSE Product"}),(0,d.jsx)(t.td,{children:"SRTrade"})]})]})]})]}),"\n",(0,d.jsxs)("div",{className:"single-message-primarykey",children:[(0,d.jsx)(t.h3,{id:"primary-key",children:"PRIMARY KEY"}),(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Field"}),(0,d.jsx)(t.th,{children:"Type"}),(0,d.jsx)(t.th,{children:"Comment"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"targetSecKey"}),(0,d.jsx)(t.td,{children:"ExpiryKey"}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"targetSecType"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.a,{href:"../../Enums/SpdrKeyType",children:"enum : SpdrKeyType"})}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"hedgeTargetType"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.a,{href:"../../Enums/HedgeTargetType",children:"enum : HedgeTargetType"})}),(0,d.jsx)(t.td,{})]})]})]})]}),"\n",(0,d.jsxs)("div",{className:"single-message-body",children:[(0,d.jsx)(t.h3,{id:"body",children:"BODY"}),(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Field"}),(0,d.jsx)(t.th,{children:"Type"}),(0,d.jsx)(t.th,{children:"Comment"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"earlySessionCloseTime"}),(0,d.jsx)(t.td,{children:"TimeSpan"}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"hedgeSecError"}),(0,d.jsx)(t.td,{children:"text1"}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"hedgeSecKey"}),(0,d.jsx)(t.td,{children:"ExpiryKey"}),(0,d.jsx)(t.td,{children:"Execution Hedge SecKey"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"hedgeSecType"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.a,{href:"../../Enums/SpdrKeyType",children:"enum : SpdrKeyType"})}),(0,d.jsx)(t.td,{children:"Execution Hedge SecType"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"hedgeUMidPrc"}),(0,d.jsx)(t.td,{children:"double"}),(0,d.jsx)(t.td,{children:"current market mid-price of the hedge instrument, used to calculate approximate hedge sizes for pre-order checks"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"isHedgeSecOK"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.a,{href:"../../Enums/YesNo",children:"enum : YesNo"})}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"lateSessionCloseTime"}),(0,d.jsx)(t.td,{children:"TimeSpan"}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"regSessionCloseTime"}),(0,d.jsx)(t.td,{children:"TimeSpan"}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"ticker"}),(0,d.jsx)(t.td,{children:"TickerKey"}),(0,d.jsx)(t.td,{children:"Ticker"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"tickerDesc"}),(0,d.jsx)(t.td,{children:"text1"}),(0,d.jsx)(t.td,{children:"Ticker Description"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"timestamp"}),(0,d.jsx)(t.td,{children:"DateTime"}),(0,d.jsx)(t.td,{children:"SR system timestamp"})]})]})]})]})]})}function o(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(a,{...e})}):a(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>i,x:()=>c});var d=s(96540);const r={},n=d.createContext(r);function i(e){const t=d.useContext(n);return d.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),d.createElement(n.Provider,{value:t},e.children)}}}]);