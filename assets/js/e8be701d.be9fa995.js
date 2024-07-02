"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[79481],{98126:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>l,contentTitle:()=>d,default:()=>o,frontMatter:()=>i,metadata:()=>c,toc:()=>a});var t=s(74848),n=s(28453);const i={title:"MarRiskCounter"},d="Schema: MarRiskCounter (ID: 4670)",c={id:"MessageSchemas/Schema/Topics/risk-counter/MarRiskCounter",title:"MarRiskCounter",description:"Values in this table represent current (live) SpiderRock MAR risk counters for a risk group/risk firm combination.A risk group is typically a group of client accounts that have a common beneficial owner.  A risk firm is a firm with control of the corresponding risk settings for the risk group.",source:"@site/docs/MessageSchemas/Schema/Topics/4625-risk-counter/MarRiskCounter.md",sourceDirName:"MessageSchemas/Schema/Topics/4625-risk-counter",slug:"/MessageSchemas/Schema/Topics/risk-counter/MarRiskCounter",permalink:"/docs/MessageSchemas/Schema/Topics/risk-counter/MarRiskCounter",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"MarRiskCounter"},sidebar:"messageSchemasSidebar",previous:{title:"4625-risk-counter",permalink:"/docs/MessageSchemas/Schema/Topics/risk-counter/"},next:{title:"RiskGroupCounter",permalink:"/docs/MessageSchemas/Schema/Topics/risk-counter/RiskGroupCounter"}},l={},a=[{value:"METADATA",id:"metadata",level:3},{value:"PRIMARY KEY",id:"primary-key",level:3},{value:"BODY",id:"body",level:3}];function h(e){const r={a:"a",h1:"h1",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.h1,{id:"schema-marriskcounter-id-4670",children:["Schema: MarRiskCounter ",(0,t.jsx)("span",{className:"small-text",children:"(ID: 4670)"})]}),"\n",(0,t.jsxs)(r.p,{children:["Values in this table represent current (live) SpiderRock MAR risk counters for a risk group/risk firm combination.",(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),"A risk group is typically a group of client accounts that have a common beneficial owner.  A risk firm is a firm with control of the corresponding risk settings for the risk group."]}),"\n",(0,t.jsxs)("div",{className:"single-message-meta",children:[(0,t.jsx)(r.h3,{id:"metadata",children:"METADATA"}),(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Attribute"}),(0,t.jsx)(r.th,{children:"Value"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"MLink Token"}),(0,t.jsx)(r.td,{children:"SystemData"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Topic"}),(0,t.jsx)(r.td,{children:"risk-counter"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"SRSE Product"}),(0,t.jsx)(r.td,{children:"SRControl, MIPControl"})]})]})]})]}),"\n",(0,t.jsxs)("div",{className:"single-message-primarykey",children:[(0,t.jsx)(r.h3,{id:"primary-key",children:"PRIMARY KEY"}),(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Field"}),(0,t.jsx)(r.th,{children:"Type"}),(0,t.jsx)(r.th,{children:"Comment"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"ticker"}),(0,t.jsx)(r.td,{children:"TickerKey"}),(0,t.jsx)(r.td,{children:"'*-ANY-ANY' represents the entire control group"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"riskGroup"}),(0,t.jsx)(r.td,{children:"string(16)"}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"riskFirm"}),(0,t.jsx)(r.td,{children:"string(16)"}),(0,t.jsx)(r.td,{children:"client firm that can view/edit this record"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"isTestAccnt"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,t.jsx)(r.td,{})]})]})]})]}),"\n",(0,t.jsxs)("div",{className:"single-message-body",children:[(0,t.jsx)(r.h3,{id:"body",children:"BODY"}),(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Field"}),(0,t.jsx)(r.th,{children:"Type"}),(0,t.jsx)(r.th,{children:"Comment"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"accFutCnNet"}),(0,t.jsx)(r.td,{children:"int"}),(0,t.jsx)(r.td,{children:"accnt future contracts (net) [can be +/-] (start-of-day positions + day trades)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"accMarginUDnVDn"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{children:"acc margin (UPrcDn/VolDn)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"accMarginUDnVUp"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{children:"acc margin (UPrcDn/VolUp)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"accMarginUUpVDn"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{children:"acc margin (UPrcUp/VolDn)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"accMarginUUpVUp"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{children:"acc margin (UPrcUp/VolUp)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"counter"}),(0,t.jsx)(r.td,{children:"int"}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"dayFutCnBot"}),(0,t.jsx)(r.td,{children:"int"}),(0,t.jsx)(r.td,{children:"day future contracts bot"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"dayFutCnSld"}),(0,t.jsx)(r.td,{children:"int"}),(0,t.jsx)(r.td,{children:"day future contracts sld"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"dayMarginUDnVDn"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{children:"day margin (UPrcDn/VolDn)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"dayMarginUDnVUp"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{children:"day margin (UPrcDn/VolUp)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"dayMarginUUpVDn"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{children:"day margin (UPrcUp/VolDn)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"dayMarginUUpVUp"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{children:"day margin (UPrcUp/VolUp)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"liveMarginAcc"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{children:"live net (per symbol) total portfolio (start-of-day positions + day trades) margin (can include external sources)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"liveMarginDay"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{children:"live net (per symbol) day portfolio (day trades only) margin (can include external sources)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"liveOpenExposure"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{children:"live abs open child order $Delta (no netting) (open child orders only)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"riskEngine"}),(0,t.jsx)(r.td,{children:"string(32)"}),(0,t.jsx)(r.td,{children:"EE engine name"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"sysEnvironment"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../../Enums/SysEnvironment",children:"enum : SysEnvironment"})}),(0,t.jsx)(r.td,{children:"original (source) sys environment [Stable, Current, etc]"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"sysRealm"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../../Enums/SysRealm",children:"enum : SysRealm"})}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"timestamp"}),(0,t.jsx)(r.td,{children:"DateTime"}),(0,t.jsx)(r.td,{children:"timestamp of latest change"})]})]})]})]})]})}function o(e={}){const{wrapper:r}={...(0,n.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},28453:(e,r,s)=>{s.d(r,{R:()=>d,x:()=>c});var t=s(96540);const n={},i=t.createContext(n);function d(e){const r=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:d(e.components),t.createElement(i.Provider,{value:r},e.children)}}}]);