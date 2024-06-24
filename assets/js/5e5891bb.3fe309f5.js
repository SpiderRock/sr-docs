"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[53124],{25609:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>n,metadata:()=>l,toc:()=>o});var s=t(74848),d=t(28453);const n={title:"GlobalRiskControl"},i="Message: GlobalRiskControl (ID: 4540)",l={id:"Schema/Topics/risk-control/GlobalRiskControl",title:"GlobalRiskControl",description:"GlobalRiskControl records are used to establish ticker specific order size risk control limits",source:"@site/docs/Schema/Topics/4535-risk-control/GlobalRiskControl.md",sourceDirName:"Schema/Topics/4535-risk-control",slug:"/Schema/Topics/risk-control/GlobalRiskControl",permalink:"/sr-docs/docs/Schema/Topics/risk-control/GlobalRiskControl",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"GlobalRiskControl"},sidebar:"schemaSidebar",previous:{title:"TradingSchedule",permalink:"/sr-docs/docs/Schema/Topics/product-status/TradingSchedule"},next:{title:"MarRiskControl",permalink:"/sr-docs/docs/Schema/Topics/risk-control/MarRiskControl"}},c={},o=[{value:"META DATA  (Topic: risk-control )",id:"meta-data--topic-risk-control-",level:3},{value:"PRIMARY KEY",id:"primary-key",level:3},{value:"BODY",id:"body",level:3}];function a(e){const r={a:"a",h1:"h1",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(r.h1,{id:"message-globalriskcontrol-id-4540",children:["Message: GlobalRiskControl ",(0,s.jsx)("span",{className:"small-text",children:"(ID: 4540)"})]}),"\n",(0,s.jsx)(r.p,{children:"GlobalRiskControl records are used to establish ticker specific order size risk control limits"}),"\n",(0,s.jsxs)("div",{className:"single-message-meta",children:[(0,s.jsx)(r.h3,{id:"meta-data--topic-risk-control-",children:"META DATA  (Topic: risk-control )"}),(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Attribute"}),(0,s.jsx)(r.th,{children:"Value"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"MLink Token"}),(0,s.jsx)(r.td,{children:"SystemData"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"SRSE Product"}),(0,s.jsx)(r.td,{children:"SRControl, MIPControl"})]})]})]})]}),"\n",(0,s.jsxs)("div",{className:"single-message-primarykey",children:[(0,s.jsx)(r.h3,{id:"primary-key",children:"PRIMARY KEY"}),(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Field"}),(0,s.jsx)(r.th,{children:"Type"}),(0,s.jsx)(r.th,{children:"Comment"})]})}),(0,s.jsx)(r.tbody,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"ticker"}),(0,s.jsx)(r.td,{children:"TickerKey"}),(0,s.jsx)(r.td,{})]})})]})]}),"\n",(0,s.jsxs)("div",{className:"single-message-body",children:[(0,s.jsx)(r.h3,{id:"body",children:"BODY"}),(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Field"}),(0,s.jsx)(r.th,{children:"Type"}),(0,s.jsx)(r.th,{children:"Comment"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"futCollarPct"}),(0,s.jsx)(r.td,{children:"float"}),(0,s.jsx)(r.td,{children:"maximum user limit vs bid/ask price control"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"futEnabled"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"../../Enums/MarState",children:"enum : MarState"})}),(0,s.jsx)(r.td,{})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"modifiedBy"}),(0,s.jsx)(r.td,{children:"string(24)"}),(0,s.jsx)(r.td,{})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"modifiedIn"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"../../Enums/SysEnvironment",children:"enum : SysEnvironment"})}),(0,s.jsx)(r.td,{})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"optCollarPct"}),(0,s.jsx)(r.td,{children:"float"}),(0,s.jsx)(r.td,{children:"maximum user limit vs bid/ask price control"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"optEnabled"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"../../Enums/MarState",children:"enum : MarState"})}),(0,s.jsx)(r.td,{})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"orderMaxFutDDelta"}),(0,s.jsx)(r.td,{children:"float"}),(0,s.jsx)(r.td,{children:"maximum (abs) mny per future parent order; ddelta = 0.01 * contracts * pointValue * midPrc"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"orderMaxFutQty"}),(0,s.jsx)(r.td,{children:"int"}),(0,s.jsx)(r.td,{children:"number of futures contracts that can be bought or sold by a single parent order"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"orderMaxMargin"}),(0,s.jsx)(r.td,{children:"float"}),(0,s.jsx)(r.td,{children:"maximum (abs) margin per parent order (SR variation margin)"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"orderMaxOptDDelta"}),(0,s.jsx)(r.td,{children:"float"}),(0,s.jsx)(r.td,{children:"maximum (abs) mny per option parent order; ddelta = 0.01 * contracts * pointValue * ABS(de) * uMidPrc"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"orderMaxOptQty"}),(0,s.jsx)(r.td,{children:"int"}),(0,s.jsx)(r.td,{children:"number of option contracts that can be bought or sold by a single parent order"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"orderMaxStkDDelta"}),(0,s.jsx)(r.td,{children:"float"}),(0,s.jsx)(r.td,{children:"maximum (abs) mny per stock parent order; ddelta = 0.01 * shares * pointValue * midPrc"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"orderMaxStkQty"}),(0,s.jsx)(r.td,{children:"int"}),(0,s.jsx)(r.td,{children:"number of equity shares that can be bought or sold by a single parent order"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"stkCollarPct"}),(0,s.jsx)(r.td,{children:"float"}),(0,s.jsx)(r.td,{children:"maximum user limit vs bid/ask price control"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"stkEnabled"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"../../Enums/MarState",children:"enum : MarState"})}),(0,s.jsx)(r.td,{})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"timestamp"}),(0,s.jsx)(r.td,{children:"DateTime"}),(0,s.jsx)(r.td,{})]})]})]})]})]})}function h(e={}){const{wrapper:r}={...(0,d.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},28453:(e,r,t)=>{t.d(r,{R:()=>i,x:()=>l});var s=t(96540);const d={},n=s.createContext(d);function i(e){const r=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:i(e.components),s.createElement(n.Provider,{value:r},e.children)}}}]);