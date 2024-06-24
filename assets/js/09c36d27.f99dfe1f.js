"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[19231],{92548:(r,e,s)=>{s.r(e),s.d(e,{assets:()=>l,contentTitle:()=>d,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>o});var t=s(74848),n=s(28453);const i={title:"MarRiskCounter"},d="Message: MarRiskCounter (ID: 4670)",c={id:"Schema/Topics/risk-counter/MarRiskCounter",title:"MarRiskCounter",description:"Values in this table represent current (live) SpiderRock MAR risk counters for a risk group/risk firm combination.A risk group is typically a group of client accounts that have a common beneficial owner.  A risk firm is a firm with control of the corresponding risk settings for the risk group.",source:"@site/docs/Schema/Topics/4625-risk-counter/MarRiskCounter.md",sourceDirName:"Schema/Topics/4625-risk-counter",slug:"/Schema/Topics/risk-counter/MarRiskCounter",permalink:"/sr-docs/docs/Schema/Topics/risk-counter/MarRiskCounter",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"MarRiskCounter"},sidebar:"schemaSidebar",previous:{title:"SpdrRiskGroupControl",permalink:"/sr-docs/docs/Schema/Topics/risk-control/SpdrRiskGroupControl"},next:{title:"RiskGroupCounter",permalink:"/sr-docs/docs/Schema/Topics/risk-counter/RiskGroupCounter"}},l={},o=[{value:"META DATA  (Topic: risk-counter )",id:"meta-data--topic-risk-counter-",level:3},{value:"PRIMARY KEY",id:"primary-key",level:3},{value:"BODY",id:"body",level:3}];function a(r){const e={a:"a",h1:"h1",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...r.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(e.h1,{id:"message-marriskcounter-id-4670",children:["Message: MarRiskCounter ",(0,t.jsx)("span",{className:"small-text",children:"(ID: 4670)"})]}),"\n",(0,t.jsxs)(e.p,{children:["Values in this table represent current (live) SpiderRock MAR risk counters for a risk group/risk firm combination.",(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),"A risk group is typically a group of client accounts that have a common beneficial owner.  A risk firm is a firm with control of the corresponding risk settings for the risk group."]}),"\n",(0,t.jsxs)("div",{className:"single-message-meta",children:[(0,t.jsx)(e.h3,{id:"meta-data--topic-risk-counter-",children:"META DATA  (Topic: risk-counter )"}),(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"Attribute"}),(0,t.jsx)(e.th,{children:"Value"})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"MLink Token"}),(0,t.jsx)(e.td,{children:"SystemData"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"SRSE Product"}),(0,t.jsx)(e.td,{children:"SRControl, MIPControl"})]})]})]})]}),"\n",(0,t.jsxs)("div",{className:"single-message-primarykey",children:[(0,t.jsx)(e.h3,{id:"primary-key",children:"PRIMARY KEY"}),(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"Field"}),(0,t.jsx)(e.th,{children:"Type"}),(0,t.jsx)(e.th,{children:"Comment"})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"ticker"}),(0,t.jsx)(e.td,{children:"TickerKey"}),(0,t.jsx)(e.td,{children:"'*-ANY-ANY' represents the entire control group"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"riskGroup"}),(0,t.jsx)(e.td,{children:"string(16)"}),(0,t.jsx)(e.td,{})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"riskFirm"}),(0,t.jsx)(e.td,{children:"string(16)"}),(0,t.jsx)(e.td,{children:"client firm that can view/edit this record"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"isTestAccnt"}),(0,t.jsx)(e.td,{children:(0,t.jsx)(e.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,t.jsx)(e.td,{})]})]})]})]}),"\n",(0,t.jsxs)("div",{className:"single-message-body",children:[(0,t.jsx)(e.h3,{id:"body",children:"BODY"}),(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"Field"}),(0,t.jsx)(e.th,{children:"Type"}),(0,t.jsx)(e.th,{children:"Comment"})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"accFutCnNet"}),(0,t.jsx)(e.td,{children:"int"}),(0,t.jsx)(e.td,{children:"accnt future contracts (net) [can be +/-] (start-of-day positions + day trades)"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"accMarginUDnVDn"}),(0,t.jsx)(e.td,{children:"float"}),(0,t.jsx)(e.td,{children:"acc margin (UPrcDn/VolDn)"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"accMarginUDnVUp"}),(0,t.jsx)(e.td,{children:"float"}),(0,t.jsx)(e.td,{children:"acc margin (UPrcDn/VolUp)"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"accMarginUUpVDn"}),(0,t.jsx)(e.td,{children:"float"}),(0,t.jsx)(e.td,{children:"acc margin (UPrcUp/VolDn)"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"accMarginUUpVUp"}),(0,t.jsx)(e.td,{children:"float"}),(0,t.jsx)(e.td,{children:"acc margin (UPrcUp/VolUp)"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"counter"}),(0,t.jsx)(e.td,{children:"int"}),(0,t.jsx)(e.td,{})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"dayFutCnBot"}),(0,t.jsx)(e.td,{children:"int"}),(0,t.jsx)(e.td,{children:"day future contracts bot"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"dayFutCnSld"}),(0,t.jsx)(e.td,{children:"int"}),(0,t.jsx)(e.td,{children:"day future contracts sld"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"dayMarginUDnVDn"}),(0,t.jsx)(e.td,{children:"float"}),(0,t.jsx)(e.td,{children:"day margin (UPrcDn/VolDn)"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"dayMarginUDnVUp"}),(0,t.jsx)(e.td,{children:"float"}),(0,t.jsx)(e.td,{children:"day margin (UPrcDn/VolUp)"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"dayMarginUUpVDn"}),(0,t.jsx)(e.td,{children:"float"}),(0,t.jsx)(e.td,{children:"day margin (UPrcUp/VolDn)"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"dayMarginUUpVUp"}),(0,t.jsx)(e.td,{children:"float"}),(0,t.jsx)(e.td,{children:"day margin (UPrcUp/VolUp)"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"liveMarginAcc"}),(0,t.jsx)(e.td,{children:"float"}),(0,t.jsx)(e.td,{children:"live net (per symbol) total portfolio (start-of-day positions + day trades) margin (can include external sources)"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"liveMarginDay"}),(0,t.jsx)(e.td,{children:"float"}),(0,t.jsx)(e.td,{children:"live net (per symbol) day portfolio (day trades only) margin (can include external sources)"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"liveOpenExposure"}),(0,t.jsx)(e.td,{children:"float"}),(0,t.jsx)(e.td,{children:"live abs open child order $Delta (no netting) (open child orders only)"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"riskEngine"}),(0,t.jsx)(e.td,{children:"string(32)"}),(0,t.jsx)(e.td,{children:"EE engine name"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"sysEnvironment"}),(0,t.jsx)(e.td,{children:(0,t.jsx)(e.a,{href:"../../../Enums/SysEnvironment",children:"enum : SysEnvironment"})}),(0,t.jsx)(e.td,{children:"original (source) sys environment [Stable, Current, etc]"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"sysRealm"}),(0,t.jsx)(e.td,{children:(0,t.jsx)(e.a,{href:"../../../Enums/SysRealm",children:"enum : SysRealm"})}),(0,t.jsx)(e.td,{})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"timestamp"}),(0,t.jsx)(e.td,{children:"DateTime"}),(0,t.jsx)(e.td,{children:"timestamp of latest change"})]})]})]})]})]})}function h(r={}){const{wrapper:e}={...(0,n.R)(),...r.components};return e?(0,t.jsx)(e,{...r,children:(0,t.jsx)(a,{...r})}):a(r)}},28453:(r,e,s)=>{s.d(e,{R:()=>d,x:()=>c});var t=s(96540);const n={},i=t.createContext(n);function d(r){const e=t.useContext(i);return t.useMemo((function(){return"function"==typeof r?r(e):{...e,...r}}),[e,r])}function c(r){let e;return e=r.disableParentContext?"function"==typeof r.components?r.components(n):r.components||n:d(r.components),t.createElement(i.Provider,{value:e},r.children)}}}]);