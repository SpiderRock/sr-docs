"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[35503],{97880:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>o,contentTitle:()=>d,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var n=r(74848),t=r(28453);const i={title:"CurrencyPositionRecordV5"},d="Schema: CurrencyPositionRecordV5 (ID: 4750)",c={id:"MessageSchemas/Schema/Topics/risk-v5/CurrencyPositionRecordV5",title:"CurrencyPositionRecordV5",description:"CurrencyPositionRecords are live risk records that contain start-of-day positions and all subsequent transactions.These records are published by a CoreRiskServer and represent the position and risk markup detail for a single currency.New records are published immediately when a position changes and about once per minute if no position has changed.",source:"@site/docs/MessageSchemas/Schema/Topics/4740-risk-v5/CurrencyPositionRecordV5.md",sourceDirName:"MessageSchemas/Schema/Topics/4740-risk-v5",slug:"/MessageSchemas/Schema/Topics/risk-v5/CurrencyPositionRecordV5",permalink:"/docs/MessageSchemas/Schema/Topics/risk-v5/CurrencyPositionRecordV5",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"CurrencyPositionRecordV5"},sidebar:"messageSchemasSidebar",previous:{title:"AccountRiskRecordV5",permalink:"/docs/MessageSchemas/Schema/Topics/risk-v5/AccountRiskRecordV5"},next:{title:"CurrencyTransaction",permalink:"/docs/MessageSchemas/Schema/Topics/risk-v5/CurrencyTransaction"}},o={},l=[{value:"METADATA",id:"metadata",level:3},{value:"PRIMARY KEY",id:"primary-key",level:3},{value:"BODY",id:"body",level:3}];function a(e){const s={a:"a",h1:"h1",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s.h1,{id:"schema-currencypositionrecordv5-id-4750",children:["Schema: CurrencyPositionRecordV5 ",(0,n.jsx)("span",{className:"small-text",children:"(ID: 4750)"})]}),"\n",(0,n.jsxs)(s.p,{children:["CurrencyPositionRecords are live risk records that contain start-of-day positions and all subsequent transactions.",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"These records are published by a CoreRiskServer and represent the position and risk markup detail for a single currency.",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"New records are published immediately when a position changes and about once per minute if no position has changed."]}),"\n",(0,n.jsxs)("div",{className:"single-message-meta",children:[(0,n.jsx)(s.h3,{id:"metadata",children:"METADATA"}),(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Attribute"}),(0,n.jsx)(s.th,{children:"Value"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Topic"}),(0,n.jsx)(s.td,{children:"4740-risk-v5"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"MLink Token"}),(0,n.jsx)(s.td,{children:"SystemData"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"SRSE Product"}),(0,n.jsx)(s.td,{children:"SRRisk"})]})]})]})]}),"\n",(0,n.jsxs)("div",{className:"single-message-primarykey",children:[(0,n.jsx)(s.h3,{id:"primary-key",children:"PRIMARY KEY"}),(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"#"}),(0,n.jsx)(s.th,{children:"Field"}),(0,n.jsx)(s.th,{children:"Type"}),(0,n.jsx)(s.th,{children:"Comment"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"10"}),(0,n.jsx)(s.td,{children:"currency"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"../../../Enums/Currency",children:"enum : Currency"})}),(0,n.jsx)(s.td,{})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"11"}),(0,n.jsx)(s.td,{children:"accnt"}),(0,n.jsx)(s.td,{children:"string(16)"}),(0,n.jsx)(s.td,{})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"12"}),(0,n.jsx)(s.td,{children:"tradeDate"}),(0,n.jsx)(s.td,{children:"DateKey"}),(0,n.jsx)(s.td,{})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"13"}),(0,n.jsx)(s.td,{children:"clientFirm"}),(0,n.jsx)(s.td,{children:"string(16)"}),(0,n.jsx)(s.td,{children:"SR assigned client firm"})]})]})]})]}),"\n",(0,n.jsxs)("div",{className:"single-message-body",children:[(0,n.jsx)(s.h3,{id:"body",children:"BODY"}),(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"#"}),(0,n.jsx)(s.th,{children:"Field"}),(0,n.jsx)(s.th,{children:"Type"}),(0,n.jsx)(s.th,{children:"Comment"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"127"}),(0,n.jsx)(s.td,{children:"maxExecDttm"}),(0,n.jsx)(s.td,{children:"DateTime"}),(0,n.jsx)(s.td,{children:"max (timestamp) of included currency transaction records"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"118"}),(0,n.jsx)(s.td,{children:"mnyBot"}),(0,n.jsx)(s.td,{children:"int"}),(0,n.jsx)(s.td,{children:"currency units bot today"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"112"}),(0,n.jsx)(s.td,{children:"mnyOpnPos"}),(0,n.jsx)(s.td,{children:"int"}),(0,n.jsx)(s.td,{children:"start of period currency position (effective; can be from either CLR or SR)"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"109"}),(0,n.jsx)(s.td,{children:"mnyOpnPosClr"}),(0,n.jsx)(s.td,{children:"int"}),(0,n.jsx)(s.td,{children:"start-of-day CLR currency position (supplied by client/clearing firm via clearing position load)"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"106"}),(0,n.jsx)(s.td,{children:"mnyOpnPosPrv"}),(0,n.jsx)(s.td,{children:"int"}),(0,n.jsx)(s.td,{children:"start-of-day SR currency position (rotated from prior day record)"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"115"}),(0,n.jsx)(s.td,{children:"mnyOpnPosSrc"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"../../../Enums/PositionSource",children:"enum : PositionSource"})}),(0,n.jsx)(s.td,{children:"start of period position source"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"121"}),(0,n.jsx)(s.td,{children:"mnySld"}),(0,n.jsx)(s.td,{children:"int"}),(0,n.jsx)(s.td,{children:"currency units sld today"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"124"}),(0,n.jsx)(s.td,{children:"numExecutions"}),(0,n.jsx)(s.td,{children:"int"}),(0,n.jsx)(s.td,{children:"number of currency transactions included in mnyBot and mnySld today"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"103"}),(0,n.jsx)(s.td,{children:"riskServerCode"}),(0,n.jsx)(s.td,{children:"string(6)"}),(0,n.jsx)(s.td,{})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"130"}),(0,n.jsx)(s.td,{children:"timestamp"}),(0,n.jsx)(s.td,{children:"DateTime"}),(0,n.jsx)(s.td,{})]})]})]})]})]})}function h(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},28453:(e,s,r)=>{r.d(s,{R:()=>d,x:()=>c});var n=r(96540);const t={},i=n.createContext(t);function d(e){const s=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),n.createElement(i.Provider,{value:s},e.children)}}}]);