"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[37570],{42207:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>l,contentTitle:()=>c,default:()=>o,frontMatter:()=>i,metadata:()=>n,toc:()=>h});var t=r(74848),d=r(28453);const i={title:"SpdrExchRiskDrop"},c="Schema: SpdrExchRiskDrop (ID: 1470)",n={id:"MessageSchemas/Schema/Topics/away-drop/SpdrExchRiskDrop",title:"SpdrExchRiskDrop",description:"METADATA",source:"@site/docs/MessageSchemas/Schema/Topics/1450-away-drop/SpdrExchRiskDrop.md",sourceDirName:"MessageSchemas/Schema/Topics/1450-away-drop",slug:"/MessageSchemas/Schema/Topics/away-drop/SpdrExchRiskDrop",permalink:"/docs/MessageSchemas/Schema/Topics/away-drop/SpdrExchRiskDrop",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"SpdrExchRiskDrop"},sidebar:"messageSchemasSidebar",previous:{title:"SpdrDropExecutionAck",permalink:"/docs/MessageSchemas/Schema/Topics/away-drop/SpdrDropExecutionAck"},next:{title:"AssetAccountControl",permalink:"/docs/MessageSchemas/Schema/Topics/client-book-risk/AssetAccountControl"}},l={},h=[{value:"METADATA",id:"metadata",level:3},{value:"PRIMARY KEY",id:"primary-key",level:3},{value:"BODY",id:"body",level:3}];function x(e){const s={a:"a",h1:"h1",h3:"h3",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.h1,{id:"schema-spdrexchriskdrop-id-1470",children:["Schema: SpdrExchRiskDrop ",(0,t.jsx)("span",{className:"small-text",children:"(ID: 1470)"})]}),"\n",(0,t.jsxs)("div",{className:"single-message-meta",children:[(0,t.jsx)(s.h3,{id:"metadata",children:"METADATA"}),(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Attribute"}),(0,t.jsx)(s.th,{children:"Value"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"MLink Token"}),(0,t.jsx)(s.td,{children:"SystemData"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Topic"}),(0,t.jsx)(s.td,{children:"away-drop"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"SRSE Product"}),(0,t.jsx)(s.td,{children:"SRTrade"})]})]})]})]}),"\n",(0,t.jsxs)("div",{className:"single-message-primarykey",children:[(0,t.jsx)(s.h3,{id:"primary-key",children:"PRIMARY KEY"}),(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Field"}),(0,t.jsx)(s.th,{children:"Type"}),(0,t.jsx)(s.th,{children:"Comment"})]})}),(0,t.jsx)(s.tbody,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"exchDropNumber"}),(0,t.jsx)(s.td,{children:"long"}),(0,t.jsx)(s.td,{children:"SR Unique ID"})]})})]})]}),"\n",(0,t.jsxs)("div",{className:"single-message-body",children:[(0,t.jsx)(s.h3,{id:"body",children:"BODY"}),(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Field"}),(0,t.jsx)(s.th,{children:"Type"}),(0,t.jsx)(s.th,{children:"Comment"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"account"}),(0,t.jsx)(s.td,{children:"text1"}),(0,t.jsx)(s.td,{children:"FixTag.1"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"clOrdId"}),(0,t.jsx)(s.td,{children:"string(32)"}),(0,t.jsx)(s.td,{children:"child order clOrdId"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"dropData1"}),(0,t.jsx)(s.td,{children:"text1"}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"dropData2"}),(0,t.jsx)(s.td,{children:"text1"}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"fillDttm"}),(0,t.jsx)(s.td,{children:"DateTime"}),(0,t.jsx)(s.td,{children:"fill DateTime (from SRDateTime)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"fillExecId"}),(0,t.jsx)(s.td,{children:"text1"}),(0,t.jsx)(s.td,{children:"fill execution id (from execReport.execId)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"fillExecStatus"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"../../../Enums/ExecStatus",children:"enum : ExecStatus"})}),(0,t.jsx)(s.td,{children:"SpiderRock execution status (Fill,Bust,Correct,Reject,SysRej)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"fillLegRefId"}),(0,t.jsx)(s.td,{children:"long"}),(0,t.jsx)(s.td,{children:"fill leg ref id (from execReport.legRefId)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"fillMarket"}),(0,t.jsx)(s.td,{children:"string(8)"}),(0,t.jsx)(s.td,{children:"fill market (from execReport.lastMarket)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"fillPrice"}),(0,t.jsx)(s.td,{children:"double"}),(0,t.jsx)(s.td,{children:"fill price (from execReport.lastPrice)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"fillQuantity"}),(0,t.jsx)(s.td,{children:"int"}),(0,t.jsx)(s.td,{children:"fill size (from execReport.lastSize)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"fillRefExecId"}),(0,t.jsx)(s.td,{children:"text1"}),(0,t.jsx)(s.td,{children:"fill ref execution id (from execReport.refExecId) [only set on a cancel or correct]"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"fillSide"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"../../../Enums/BuySell",children:"enum : BuySell"})}),(0,t.jsx)(s.td,{children:"fill side (from execReport.side)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"fillStreetText"}),(0,t.jsx)(s.td,{children:"text1"}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"fillTransactDttm"}),(0,t.jsx)(s.td,{children:"DateTime"}),(0,t.jsx)(s.td,{children:"fill DateTime (from execReport.fillDttm)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"fillVersion"}),(0,t.jsx)(s.td,{children:"byte"}),(0,t.jsx)(s.td,{children:"cancel/correct version number (initial fill is version=1)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"netTimestamp"}),(0,t.jsx)(s.td,{children:"long"}),(0,t.jsx)(s.td,{children:"drop gateway arrival timestamp"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"routeRiskGroup"}),(0,t.jsx)(s.td,{children:"string(32)"}),(0,t.jsx)(s.td,{children:"unique code grouping this drop session with 1 or more outbound street sessions"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"routingCode"}),(0,t.jsx)(s.td,{children:"text1"}),(0,t.jsx)(s.td,{children:"drop session routing code"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"routingSeqNum"}),(0,t.jsx)(s.td,{children:"int"}),(0,t.jsx)(s.td,{children:"drop session routingSeqNum"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"secKey"}),(0,t.jsx)(s.td,{children:"OptionKey"}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"secType"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"../../../Enums/SpdrKeyType",children:"enum : SpdrKeyType"})}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"timestamp"}),(0,t.jsx)(s.td,{children:"DateTime"}),(0,t.jsx)(s.td,{})]})]})]})]})]})}function o(e={}){const{wrapper:s}={...(0,d.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(x,{...e})}):x(e)}},28453:(e,s,r)=>{r.d(s,{R:()=>c,x:()=>n});var t=r(96540);const d={},i=t.createContext(d);function c(e){const s=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function n(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:c(e.components),t.createElement(i.Provider,{value:s},e.children)}}}]);