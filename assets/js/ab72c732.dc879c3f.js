"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[80364],{82446:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>n,default:()=>o,frontMatter:()=>i,metadata:()=>c,toc:()=>h});var s=t(74848),d=t(28453);const i={title:"SpdrClientFirmRiskMgmt"},n="Schema: SpdrClientFirmRiskMgmt (ID: 3920)",c={id:"Schemas/Schema/Topics/order-routing-counter/SpdrClientFirmRiskMgmt",title:"SpdrClientFirmRiskMgmt",description:"SpdrClientFirmRiskMgmt records are created/published by SpiderRock Execution Engines and show exchange level risk management child order rejects.",source:"@site/docs/Schemas/Schema/Topics/3895-order-routing-counter/SpdrClientFirmRiskMgmt.md",sourceDirName:"Schemas/Schema/Topics/3895-order-routing-counter",slug:"/Schemas/Schema/Topics/order-routing-counter/SpdrClientFirmRiskMgmt",permalink:"/docs/Schemas/Schema/Topics/order-routing-counter/SpdrClientFirmRiskMgmt",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"SpdrClientFirmRiskMgmt"},sidebar:"schemaSidebar",previous:{title:"SpdrExchRiskReset",permalink:"/docs/Schemas/Schema/Topics/order-routing-control/SpdrExchRiskReset"},next:{title:"SpdrExchRiskMgmt",permalink:"/docs/Schemas/Schema/Topics/order-routing-counter/SpdrExchRiskMgmt"}},l={},h=[{value:"METADATA",id:"metadata",level:3},{value:"PRIMARY KEY",id:"primary-key",level:3},{value:"BODY",id:"body",level:3}];function x(e){const r={a:"a",h1:"h1",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(r.h1,{id:"schema-spdrclientfirmriskmgmt-id-3920",children:["Schema: SpdrClientFirmRiskMgmt ",(0,s.jsx)("span",{className:"small-text",children:"(ID: 3920)"})]}),"\n",(0,s.jsx)(r.p,{children:"SpdrClientFirmRiskMgmt records are created/published by SpiderRock Execution Engines and show exchange level risk management child order rejects."}),"\n",(0,s.jsxs)("div",{className:"single-message-meta",children:[(0,s.jsx)(r.h3,{id:"metadata",children:"METADATA"}),(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Attribute"}),(0,s.jsx)(r.th,{children:"Value"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"MLink Token"}),(0,s.jsx)(r.td,{children:"SystemData"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Topic"}),(0,s.jsx)(r.td,{children:"order-routing-counter"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"SRSE Product"}),(0,s.jsx)(r.td,{children:"SRTrade"})]})]})]})]}),"\n",(0,s.jsxs)("div",{className:"single-message-primarykey",children:[(0,s.jsx)(r.h3,{id:"primary-key",children:"PRIMARY KEY"}),(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Field"}),(0,s.jsx)(r.th,{children:"Type"}),(0,s.jsx)(r.th,{children:"Comment"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"clientFirm"}),(0,s.jsx)(r.td,{children:"string(16)"}),(0,s.jsx)(r.td,{})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"ticker"}),(0,s.jsx)(r.td,{children:"TickerKey"}),(0,s.jsx)(r.td,{children:"will be empty if riskMgmtLevel = ClientFirm"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"orderExDest"}),(0,s.jsx)(r.td,{children:"string(12)"}),(0,s.jsx)(r.td,{})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"riskMgmtLevel"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"../../../Enums/RiskMgmtLevel",children:"enum : RiskMgmtLevel"})}),(0,s.jsx)(r.td,{})]})]})]})]}),"\n",(0,s.jsxs)("div",{className:"single-message-body",children:[(0,s.jsx)(r.h3,{id:"body",children:"BODY"}),(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Field"}),(0,s.jsx)(r.th,{children:"Type"}),(0,s.jsx)(r.th,{children:"Comment"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"accnt"}),(0,s.jsx)(r.td,{children:"string(16)"}),(0,s.jsx)(r.td,{children:"most recently rejected accnt"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"numRejects"}),(0,s.jsx)(r.td,{children:"int"}),(0,s.jsx)(r.td,{})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"rejectText"}),(0,s.jsx)(r.td,{children:"text1"}),(0,s.jsx)(r.td,{children:"most recent rejectText"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"secKey"}),(0,s.jsx)(r.td,{children:"OptionKey"}),(0,s.jsx)(r.td,{children:"most recently rejected secKey"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"secType"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"../../../Enums/SpdrKeyType",children:"enum : SpdrKeyType"})}),(0,s.jsx)(r.td,{})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"spdrSource"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"../../../Enums/SpdrSource",children:"enum : SpdrSource"})}),(0,s.jsx)(r.td,{})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"timestamp"}),(0,s.jsx)(r.td,{children:"DateTime"}),(0,s.jsx)(r.td,{})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"userName"}),(0,s.jsx)(r.td,{children:"string(24)"}),(0,s.jsx)(r.td,{})]})]})]})]})]})}function o(e={}){const{wrapper:r}={...(0,d.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(x,{...e})}):x(e)}},28453:(e,r,t)=>{t.d(r,{R:()=>n,x:()=>c});var s=t(96540);const d={},i=s.createContext(d);function n(e){const r=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:n(e.components),s.createElement(i.Provider,{value:r},e.children)}}}]);