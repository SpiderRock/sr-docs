"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[36090],{14518:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>h,contentTitle:()=>n,default:()=>x,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var d=s(74848),r=s(28453);const i={title:"StockMinuteBar"},n="Schema: StockMinuteBar (ID: 1175)",c={id:"MessageSchemas/Schema/Topics/archive-data/StockMinuteBar",title:"StockMinuteBar",description:"StockMinuteBar records are created once per minute for each open stock and index market.  These records are visible in SRSE and are published to the SpiderRock elastic cluster at the same time.",source:"@site/docs/MessageSchemas/Schema/Topics/1160-archive-data/StockMinuteBar.md",sourceDirName:"MessageSchemas/Schema/Topics/1160-archive-data",slug:"/MessageSchemas/Schema/Topics/archive-data/StockMinuteBar",permalink:"/docs/MessageSchemas/Schema/Topics/archive-data/StockMinuteBar",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"StockMinuteBar"},sidebar:"messageSchemasSidebar",previous:{title:"FutureMinuteBar",permalink:"/docs/MessageSchemas/Schema/Topics/archive-data/FutureMinuteBar"},next:{title:"SpdrAwayExecution",permalink:"/docs/MessageSchemas/Schema/Topics/away-drop/SpdrAwayExecution"}},h={},l=[{value:"METADATA",id:"metadata",level:3},{value:"PRIMARY KEY",id:"primary-key",level:3},{value:"BODY",id:"body",level:3}];function a(e){const t={a:"a",h1:"h1",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(t.h1,{id:"schema-stockminutebar-id-1175",children:["Schema: StockMinuteBar ",(0,d.jsx)("span",{className:"small-text",children:"(ID: 1175)"})]}),"\n",(0,d.jsx)(t.p,{children:"StockMinuteBar records are created once per minute for each open stock and index market.  These records are visible in SRSE and are published to the SpiderRock elastic cluster at the same time."}),"\n",(0,d.jsxs)("div",{className:"single-message-meta",children:[(0,d.jsx)(t.h3,{id:"metadata",children:"METADATA"}),(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Attribute"}),(0,d.jsx)(t.th,{children:"Value"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"MLink Token"}),(0,d.jsx)(t.td,{children:"EqtSummaryData"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"Topic"}),(0,d.jsx)(t.td,{children:"archive-data"})]})]})]})]}),"\n",(0,d.jsxs)("div",{className:"single-message-primarykey",children:[(0,d.jsx)(t.h3,{id:"primary-key",children:"PRIMARY KEY"}),(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Field"}),(0,d.jsx)(t.th,{children:"Type"}),(0,d.jsx)(t.th,{children:"Comment"})]})}),(0,d.jsx)(t.tbody,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"ticker"}),(0,d.jsx)(t.td,{children:"TickerKey"}),(0,d.jsx)(t.td,{})]})})]})]}),"\n",(0,d.jsxs)("div",{className:"single-message-body",children:[(0,d.jsx)(t.h3,{id:"body",children:"BODY"}),(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Field"}),(0,d.jsx)(t.th,{children:"Type"}),(0,d.jsx)(t.th,{children:"Comment"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"ask"}),(0,d.jsx)(t.td,{children:"double"}),(0,d.jsx)(t.td,{children:"Ask"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"askSz"}),(0,d.jsx)(t.td,{children:"int"}),(0,d.jsx)(t.td,{children:"Ask size"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"bid"}),(0,d.jsx)(t.td,{children:"double"}),(0,d.jsx)(t.td,{children:"Bid"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"bidSz"}),(0,d.jsx)(t.td,{children:"int"}),(0,d.jsx)(t.td,{children:"Bid size"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"date"}),(0,d.jsx)(t.td,{children:"string(10)"}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"isEOB"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,d.jsx)(t.td,{children:"is end-of-bar (every 10 minutes)"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"isEOH"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,d.jsx)(t.td,{children:"is end-of-hour"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"prtCount"}),(0,d.jsx)(t.td,{children:"int"}),(0,d.jsx)(t.td,{children:"Print count"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"prtHigh"}),(0,d.jsx)(t.td,{children:"double"}),(0,d.jsx)(t.td,{children:"High print"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"prtLast"}),(0,d.jsx)(t.td,{children:"double"}),(0,d.jsx)(t.td,{children:"Last print"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"prtLow"}),(0,d.jsx)(t.td,{children:"double"}),(0,d.jsx)(t.td,{children:"Low print"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"prtOpen"}),(0,d.jsx)(t.td,{children:"double"}),(0,d.jsx)(t.td,{children:"Open print"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"prtVWap"}),(0,d.jsx)(t.td,{children:"double"}),(0,d.jsx)(t.td,{children:"VWap (print)"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"prtVolume"}),(0,d.jsx)(t.td,{children:"int"}),(0,d.jsx)(t.td,{children:"Print volume"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"qteCount"}),(0,d.jsx)(t.td,{children:"int"}),(0,d.jsx)(t.td,{children:"Quote count"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"qteHiBid"}),(0,d.jsx)(t.td,{children:"double"}),(0,d.jsx)(t.td,{children:"Quote high bid"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"qteLoAsk"}),(0,d.jsx)(t.td,{children:"double"}),(0,d.jsx)(t.td,{children:"Quote low ask"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"qteTwap"}),(0,d.jsx)(t.td,{children:"double"}),(0,d.jsx)(t.td,{children:"Quote TWap"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"time"}),(0,d.jsx)(t.td,{children:"string(8)"}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"timestamp"}),(0,d.jsx)(t.td,{children:"DateTime"}),(0,d.jsx)(t.td,{children:"same as date + time"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"width"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"Bid/ask spread"})]})]})]})]})]})}function x(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(a,{...e})}):a(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>n,x:()=>c});var d=s(96540);const r={},i=d.createContext(r);function n(e){const t=d.useContext(i);return d.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:n(e.components),d.createElement(i.Provider,{value:t},e.children)}}}]);