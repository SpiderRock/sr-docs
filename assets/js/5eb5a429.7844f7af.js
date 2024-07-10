"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[36090],{14518:(e,t,d)=>{d.r(t),d.d(t,{assets:()=>h,contentTitle:()=>n,default:()=>x,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var s=d(74848),r=d(28453);const i={title:"StockMinuteBar"},n="Schema: StockMinuteBar (ID: 1175)",c={id:"MessageSchemas/Schema/Topics/archive-data/StockMinuteBar",title:"StockMinuteBar",description:"StockMinuteBar records are created once per minute for each open stock and index market.  These records are visible in SRSE and are published to the SpiderRock elastic cluster at the same time.",source:"@site/docs/MessageSchemas/Schema/Topics/1160-archive-data/StockMinuteBar.md",sourceDirName:"MessageSchemas/Schema/Topics/1160-archive-data",slug:"/MessageSchemas/Schema/Topics/archive-data/StockMinuteBar",permalink:"/docs/MessageSchemas/Schema/Topics/archive-data/StockMinuteBar",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"StockMinuteBar"},sidebar:"messageSchemasSidebar",previous:{title:"FutureMinuteBar",permalink:"/docs/MessageSchemas/Schema/Topics/archive-data/FutureMinuteBar"},next:{title:"1450-away-drop",permalink:"/docs/MessageSchemas/Schema/Topics/away-drop/"}},h={},l=[{value:"METADATA",id:"metadata",level:3},{value:"BODY",id:"body",level:3}];function a(e){const t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h3:"h3",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.h1,{id:"schema-stockminutebar-id-1175",children:["Schema: StockMinuteBar ",(0,s.jsx)("span",{className:"small-text",children:"(ID: 1175)"})]}),"\n",(0,s.jsx)(t.p,{children:"StockMinuteBar records are created once per minute for each open stock and index market.  These records are visible in SRSE and are published to the SpiderRock elastic cluster at the same time."}),"\n",(0,s.jsx)(t.h3,{id:"metadata",children:"METADATA"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Attribute"}),(0,s.jsx)(t.th,{children:"Value"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Topic"}),(0,s.jsx)(t.td,{children:"1160-archive-data"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"MLink Token"}),(0,s.jsx)(t.td,{children:"EqtSummaryData"})]})]})]}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Note:"})," The symbol ",(0,s.jsx)(t.code,{children:"="})," next to a field number indicates that it is a primary key."]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"body",children:"BODY"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"#"}),(0,s.jsx)(t.th,{children:"Field"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Comment"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"10="}),(0,s.jsx)(t.td,{children:"ticker"}),(0,s.jsx)(t.td,{children:"TickerKey"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"100"}),(0,s.jsx)(t.td,{children:"date"}),(0,s.jsx)(t.td,{children:"string(10)"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"103"}),(0,s.jsx)(t.td,{children:"time"}),(0,s.jsx)(t.td,{children:"string(8)"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"106"}),(0,s.jsx)(t.td,{children:"prtOpen"}),(0,s.jsx)(t.td,{children:"double"}),(0,s.jsx)(t.td,{children:"Open print"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"109"}),(0,s.jsx)(t.td,{children:"prtHigh"}),(0,s.jsx)(t.td,{children:"double"}),(0,s.jsx)(t.td,{children:"High print"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"112"}),(0,s.jsx)(t.td,{children:"prtLow"}),(0,s.jsx)(t.td,{children:"double"}),(0,s.jsx)(t.td,{children:"Low print"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"115"}),(0,s.jsx)(t.td,{children:"prtLast"}),(0,s.jsx)(t.td,{children:"double"}),(0,s.jsx)(t.td,{children:"Last print"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"118"}),(0,s.jsx)(t.td,{children:"prtVWap"}),(0,s.jsx)(t.td,{children:"double"}),(0,s.jsx)(t.td,{children:"VWap (print)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"121"}),(0,s.jsx)(t.td,{children:"prtVolume"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"Print volume"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"124"}),(0,s.jsx)(t.td,{children:"prtCount"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"Print count"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"127"}),(0,s.jsx)(t.td,{children:"qteHiBid"}),(0,s.jsx)(t.td,{children:"double"}),(0,s.jsx)(t.td,{children:"Quote high bid"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"130"}),(0,s.jsx)(t.td,{children:"qteLoAsk"}),(0,s.jsx)(t.td,{children:"double"}),(0,s.jsx)(t.td,{children:"Quote low ask"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"133"}),(0,s.jsx)(t.td,{children:"qteTwap"}),(0,s.jsx)(t.td,{children:"double"}),(0,s.jsx)(t.td,{children:"Quote TWap"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"136"}),(0,s.jsx)(t.td,{children:"qteCount"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"Quote count"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"139"}),(0,s.jsx)(t.td,{children:"bid"}),(0,s.jsx)(t.td,{children:"double"}),(0,s.jsx)(t.td,{children:"Bid"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"142"}),(0,s.jsx)(t.td,{children:"ask"}),(0,s.jsx)(t.td,{children:"double"}),(0,s.jsx)(t.td,{children:"Ask"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"145"}),(0,s.jsx)(t.td,{children:"bidSz"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"Bid size"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"148"}),(0,s.jsx)(t.td,{children:"askSz"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"Ask size"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"151"}),(0,s.jsx)(t.td,{children:"width"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"Bid/ask spread"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"154"}),(0,s.jsx)(t.td,{children:"isEOB"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,s.jsx)(t.td,{children:"is end-of-bar (every 10 minutes)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"157"}),(0,s.jsx)(t.td,{children:"isEOH"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,s.jsx)(t.td,{children:"is end-of-hour"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"160"}),(0,s.jsx)(t.td,{children:"timestamp"}),(0,s.jsx)(t.td,{children:"DateTime"}),(0,s.jsx)(t.td,{children:"same as date + time"})]})]})]})]})}function x(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},28453:(e,t,d)=>{d.d(t,{R:()=>n,x:()=>c});var s=d(96540);const r={},i=s.createContext(r);function n(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:n(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);