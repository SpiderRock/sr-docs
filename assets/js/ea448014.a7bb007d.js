"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[93634],{86427:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>n,metadata:()=>l,toc:()=>a});var s=t(74848),d=t(28453);const n={title:"GlobalRiskControl"},i="Schema: GlobalRiskControl (ID: 4540)",l={id:"MessageSchemas/Schema/Topics/risk-control/GlobalRiskControl",title:"GlobalRiskControl",description:"GlobalRiskControl records are used to establish ticker specific order size risk control limits",source:"@site/docs/MessageSchemas/Schema/Topics/4535-risk-control/GlobalRiskControl.md",sourceDirName:"MessageSchemas/Schema/Topics/4535-risk-control",slug:"/MessageSchemas/Schema/Topics/risk-control/GlobalRiskControl",permalink:"/docs/MessageSchemas/Schema/Topics/risk-control/GlobalRiskControl",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"GlobalRiskControl"},sidebar:"messageSchemasSidebar",previous:{title:"4535-risk-control",permalink:"/docs/MessageSchemas/Schema/Topics/risk-control/"},next:{title:"MarRiskControl",permalink:"/docs/MessageSchemas/Schema/Topics/risk-control/MarRiskControl"}},c={},a=[{value:"METADATA",id:"metadata",level:3},{value:"PRIMARY KEY",id:"primary-key",level:3},{value:"BODY",id:"body",level:3}];function o(e){const r={a:"a",h1:"h1",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(r.h1,{id:"schema-globalriskcontrol-id-4540",children:["Schema: GlobalRiskControl ",(0,s.jsx)("span",{className:"small-text",children:"(ID: 4540)"})]}),"\n",(0,s.jsx)(r.p,{children:"GlobalRiskControl records are used to establish ticker specific order size risk control limits"}),"\n",(0,s.jsxs)("div",{className:"single-message-meta",children:[(0,s.jsx)(r.h3,{id:"metadata",children:"METADATA"}),(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Attribute"}),(0,s.jsx)(r.th,{children:"Value"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Topic"}),(0,s.jsx)(r.td,{children:"4535-risk-control"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"MLink Token"}),(0,s.jsx)(r.td,{children:"SystemData"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"SRSE Product"}),(0,s.jsx)(r.td,{children:"SRControl, MIPControl"})]})]})]})]}),"\n",(0,s.jsxs)("div",{className:"single-message-primarykey",children:[(0,s.jsx)(r.h3,{id:"primary-key",children:"PRIMARY KEY"}),(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"#"}),(0,s.jsx)(r.th,{children:"Field"}),(0,s.jsx)(r.th,{children:"Type"}),(0,s.jsx)(r.th,{children:"Comment"})]})}),(0,s.jsx)(r.tbody,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"10"}),(0,s.jsx)(r.td,{children:"ticker"}),(0,s.jsx)(r.td,{children:"TickerKey"}),(0,s.jsx)(r.td,{})]})})]})]}),"\n",(0,s.jsxs)("div",{className:"single-message-body",children:[(0,s.jsx)(r.h3,{id:"body",children:"BODY"}),(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"#"}),(0,s.jsx)(r.th,{children:"Field"}),(0,s.jsx)(r.th,{children:"Type"}),(0,s.jsx)(r.th,{children:"Comment"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"111"}),(0,s.jsx)(r.td,{children:"futCollarPct"}),(0,s.jsx)(r.td,{children:"float"}),(0,s.jsx)(r.td,{children:"Maximum user limit vs bid/ask price control - percentage in decimals"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"101"}),(0,s.jsx)(r.td,{children:"futEnabled"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"../../../Enums/MarState",children:"enum : MarState"})}),(0,s.jsx)(r.td,{children:"Enabled or not for futures (None=disabled)"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"113"}),(0,s.jsx)(r.td,{children:"modifiedBy"}),(0,s.jsx)(r.td,{children:"string(24)"}),(0,s.jsx)(r.td,{children:"User that last modified this record"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"114"}),(0,s.jsx)(r.td,{children:"modifiedIn"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"../../../Enums/SysEnvironment",children:"enum : SysEnvironment"})}),(0,s.jsx)(r.td,{children:"Environment this record was last updated in"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"112"}),(0,s.jsx)(r.td,{children:"optCollarPct"}),(0,s.jsx)(r.td,{children:"float"}),(0,s.jsx)(r.td,{children:"Maximum user limit vs bid/ask price control - percentage in decimals"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"102"}),(0,s.jsx)(r.td,{children:"optEnabled"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"../../../Enums/MarState",children:"enum : MarState"})}),(0,s.jsx)(r.td,{children:"Enabled or not for options (None=disabled)"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"108"}),(0,s.jsx)(r.td,{children:"orderMaxFutDDelta"}),(0,s.jsx)(r.td,{children:"float"}),(0,s.jsx)(r.td,{children:"Maximum (abs) mny per future parent order; ddelta = 0.01 * contracts * pointValue * midPrc"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"105"}),(0,s.jsx)(r.td,{children:"orderMaxFutQty"}),(0,s.jsx)(r.td,{children:"int"}),(0,s.jsx)(r.td,{children:"Number of futures contracts that can be bought or sold by a single parent order"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"103"}),(0,s.jsx)(r.td,{children:"orderMaxMargin"}),(0,s.jsx)(r.td,{children:"float"}),(0,s.jsx)(r.td,{children:"Maximum (abs) margin per parent order (SR variation margin)"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"109"}),(0,s.jsx)(r.td,{children:"orderMaxOptDDelta"}),(0,s.jsx)(r.td,{children:"float"}),(0,s.jsx)(r.td,{children:"Maximum (abs) mny per option parent order; ddelta = 0.01 * contracts * pointValue * ABS(de) * uMidPrc"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"106"}),(0,s.jsx)(r.td,{children:"orderMaxOptQty"}),(0,s.jsx)(r.td,{children:"int"}),(0,s.jsx)(r.td,{children:"Number of option contracts that can be bought or sold by a single parent order"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"107"}),(0,s.jsx)(r.td,{children:"orderMaxStkDDelta"}),(0,s.jsx)(r.td,{children:"float"}),(0,s.jsx)(r.td,{children:"Maximum (abs) mny per stock parent order; ddelta = 0.01 * shares * pointValue * midPrc"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"104"}),(0,s.jsx)(r.td,{children:"orderMaxStkQty"}),(0,s.jsx)(r.td,{children:"int"}),(0,s.jsx)(r.td,{children:"Number of equity shares that can be bought or sold by a single parent order"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"110"}),(0,s.jsx)(r.td,{children:"stkCollarPct"}),(0,s.jsx)(r.td,{children:"float"}),(0,s.jsx)(r.td,{children:"Maximum user limit vs bid/ask price control - percentage in decimals"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"100"}),(0,s.jsx)(r.td,{children:"stkEnabled"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"../../../Enums/MarState",children:"enum : MarState"})}),(0,s.jsx)(r.td,{children:"Enabled or not for equities (None=disabled)"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"115"}),(0,s.jsx)(r.td,{children:"timestamp"}),(0,s.jsx)(r.td,{children:"DateTime"}),(0,s.jsx)(r.td,{children:"Timestamp of this record"})]})]})]})]})]})}function h(e={}){const{wrapper:r}={...(0,d.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},28453:(e,r,t)=>{t.d(r,{R:()=>i,x:()=>l});var s=t(96540);const d={},n=s.createContext(d);function i(e){const r=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:i(e.components),s.createElement(n.Provider,{value:r},e.children)}}}]);