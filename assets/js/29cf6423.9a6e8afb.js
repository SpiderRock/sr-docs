"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[29656],{7125:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>o,frontMatter:()=>n,metadata:()=>c,toc:()=>h});var t=s(74848),d=s(28453);const n={title:"MarRiskControlTkOverride"},i="Schema: MarRiskControlTkOverride (ID: 4551)",c={id:"MessageSchemas/Schema/Topics/risk-control/MarRiskControlTkOverride",title:"MarRiskControlTkOverride",description:"MarRiskControlTkOverride records are used to establish ticker-specific risk controls SpiderRock execution engines.  These records are only viewable and editable by users belonging to the same riskFirm as the control records.",source:"@site/docs/MessageSchemas/Schema/Topics/4535-risk-control/MarRiskControlTkOverride.md",sourceDirName:"MessageSchemas/Schema/Topics/4535-risk-control",slug:"/MessageSchemas/Schema/Topics/risk-control/MarRiskControlTkOverride",permalink:"/docs/MessageSchemas/Schema/Topics/risk-control/MarRiskControlTkOverride",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"MarRiskControlTkOverride"},sidebar:"messageSchemasSidebar",previous:{title:"MarRiskControl",permalink:"/docs/MessageSchemas/Schema/Topics/risk-control/MarRiskControl"},next:{title:"SpdrRiskControl",permalink:"/docs/MessageSchemas/Schema/Topics/risk-control/SpdrRiskControl"}},l={},h=[{value:"METADATA",id:"metadata",level:3},{value:"PRIMARY KEY",id:"primary-key",level:3},{value:"BODY",id:"body",level:3}];function a(e){const r={a:"a",h1:"h1",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.h1,{id:"schema-marriskcontroltkoverride-id-4551",children:["Schema: MarRiskControlTkOverride ",(0,t.jsx)("span",{className:"small-text",children:"(ID: 4551)"})]}),"\n",(0,t.jsx)(r.p,{children:"MarRiskControlTkOverride records are used to establish ticker-specific risk controls SpiderRock execution engines.  These records are only viewable and editable by users belonging to the same riskFirm as the control records."}),"\n",(0,t.jsxs)("div",{className:"single-message-meta",children:[(0,t.jsx)(r.h3,{id:"metadata",children:"METADATA"}),(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Attribute"}),(0,t.jsx)(r.th,{children:"Value"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Topic"}),(0,t.jsx)(r.td,{children:"4535-risk-control"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"MLink Token"}),(0,t.jsx)(r.td,{children:"SystemData"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"SRSE Product"}),(0,t.jsx)(r.td,{children:"SRControl, MIPControl"})]})]})]})]}),"\n",(0,t.jsxs)("div",{className:"single-message-primarykey",children:[(0,t.jsx)(r.h3,{id:"primary-key",children:"PRIMARY KEY"}),(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"#"}),(0,t.jsx)(r.th,{children:"Field"}),(0,t.jsx)(r.th,{children:"Type"}),(0,t.jsx)(r.th,{children:"Comment"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"12"}),(0,t.jsx)(r.td,{children:"riskFirm"}),(0,t.jsx)(r.td,{children:"string(16)"}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"11"}),(0,t.jsx)(r.td,{children:"riskGroup"}),(0,t.jsx)(r.td,{children:"string(16)"}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"13"}),(0,t.jsx)(r.td,{children:"ticker"}),(0,t.jsx)(r.td,{children:"TickerKey"}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"14"}),(0,t.jsx)(r.td,{children:"isTestAccnt"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,t.jsx)(r.td,{children:"if Yes, this control applies only to risk from test accnts"})]})]})]})]}),"\n",(0,t.jsxs)("div",{className:"single-message-body",children:[(0,t.jsx)(r.h3,{id:"body",children:"BODY"}),(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"#"}),(0,t.jsx)(r.th,{children:"Field"}),(0,t.jsx)(r.th,{children:"Type"}),(0,t.jsx)(r.th,{children:"Comment"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"158"}),(0,t.jsx)(r.td,{children:"stkEnabled"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../../Enums/MarState",children:"enum : MarState"})}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"159"}),(0,t.jsx)(r.td,{children:"futEnabled"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../../Enums/MarState",children:"enum : MarState"})}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"160"}),(0,t.jsx)(r.td,{children:"optEnabled"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../../Enums/MarState",children:"enum : MarState"})}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"175"}),(0,t.jsx)(r.td,{children:"blockShortSales"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,t.jsx)(r.td,{children:"block all short sales"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"165"}),(0,t.jsx)(r.td,{children:"orderMaxStkQty"}),(0,t.jsx)(r.td,{children:"int"}),(0,t.jsx)(r.td,{children:"number of equity shares that can be bought or sold by a single parent order"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"166"}),(0,t.jsx)(r.td,{children:"orderMaxFutQty"}),(0,t.jsx)(r.td,{children:"int"}),(0,t.jsx)(r.td,{children:"number of futures contracts that can be bought or sold by a single parent order"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"167"}),(0,t.jsx)(r.td,{children:"orderMaxOptQty"}),(0,t.jsx)(r.td,{children:"int"}),(0,t.jsx)(r.td,{children:"number of option contracts that can be bought or sold by a single parent order"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"168"}),(0,t.jsx)(r.td,{children:"orderMaxStkDDelta"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{children:"maximum (abs) mny per stock parent order; ddelta = 0.01 * shares * pointValue * midPrc"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"169"}),(0,t.jsx)(r.td,{children:"orderMaxFutDDelta"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{children:"maximum (abs) mny per future parent order; ddelta = 0.01 * contracts * pointValue * midPrc"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"170"}),(0,t.jsx)(r.td,{children:"orderMaxOptDDelta"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{children:"maximum (abs) mny per option parent order; ddelta = 0.01 * contracts * pointValue * ABS(de) * uMidPrc"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"171"}),(0,t.jsx)(r.td,{children:"stkCollarPct"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{children:"maximum user limit vs bid/ask price control"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"172"}),(0,t.jsx)(r.td,{children:"futCollarPct"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{children:"maximum user limit vs bid/ask price control"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"173"}),(0,t.jsx)(r.td,{children:"optCollarPct"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{children:"maximum user limit vs bid/ask price control"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"176"}),(0,t.jsx)(r.td,{children:"maxAccFutCnAbs"}),(0,t.jsx)(r.td,{children:"int"}),(0,t.jsx)(r.td,{children:"max absolute (net) accnt future contracts"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"177"}),(0,t.jsx)(r.td,{children:"maxDayFutCnBot"}),(0,t.jsx)(r.td,{children:"int"}),(0,t.jsx)(r.td,{children:"day future contracts bot"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"178"}),(0,t.jsx)(r.td,{children:"maxDayFutCnSld"}),(0,t.jsx)(r.td,{children:"int"}),(0,t.jsx)(r.td,{children:"day future contracts sld"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"179"}),(0,t.jsx)(r.td,{children:"maxDayFutCnAbs"}),(0,t.jsx)(r.td,{children:"int"}),(0,t.jsx)(r.td,{children:"max absolute (net) day future contracts"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"151"}),(0,t.jsx)(r.td,{children:"modifiedBy"}),(0,t.jsx)(r.td,{children:"string(24)"}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"154"}),(0,t.jsx)(r.td,{children:"modifiedIn"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../../Enums/SysEnvironment",children:"enum : SysEnvironment"})}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"157"}),(0,t.jsx)(r.td,{children:"timestamp"}),(0,t.jsx)(r.td,{children:"DateTime"}),(0,t.jsx)(r.td,{})]})]})]})]})]})}function o(e={}){const{wrapper:r}={...(0,d.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},28453:(e,r,s)=>{s.d(r,{R:()=>i,x:()=>c});var t=s(96540);const d={},n=t.createContext(d);function i(e){const r=t.useContext(n);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:i(e.components),t.createElement(n.Provider,{value:r},e.children)}}}]);