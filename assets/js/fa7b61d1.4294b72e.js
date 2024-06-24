"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[28213],{56899:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>o,contentTitle:()=>d,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var t=r(74848),n=r(28453);const i={title:"SpdrRiskControl"},d="Message: SpdrRiskControl (ID: 4560)",l={id:"Schema/Topics/risk-control/SpdrRiskControl",title:"SpdrRiskControl",description:"SpdrRiskControl records are used to establish supervisory control of equity, and equity option trading in SpiderRock execution engines.  These records are only viewable and editable by RiskAdmin users with access to the control record ClientFirm",source:"@site/docs/Schema/Topics/4535-risk-control/SpdrRiskControl.md",sourceDirName:"Schema/Topics/4535-risk-control",slug:"/Schema/Topics/risk-control/SpdrRiskControl",permalink:"/sr-docs/docs/Schema/Topics/risk-control/SpdrRiskControl",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"SpdrRiskControl"},sidebar:"schemaSidebar",previous:{title:"MarRiskControlTkOverride",permalink:"/sr-docs/docs/Schema/Topics/risk-control/MarRiskControlTkOverride"},next:{title:"SpdrRiskGroupControl",permalink:"/sr-docs/docs/Schema/Topics/risk-control/SpdrRiskGroupControl"}},o={},c=[{value:"META DATA  (Topic: risk-control )",id:"meta-data--topic-risk-control-",level:3},{value:"PRIMARY KEY",id:"primary-key",level:3},{value:"BODY",id:"body",level:3}];function a(e){const s={a:"a",h1:"h1",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.h1,{id:"message-spdrriskcontrol-id-4560",children:["Message: SpdrRiskControl ",(0,t.jsx)("span",{className:"small-text",children:"(ID: 4560)"})]}),"\n",(0,t.jsx)(s.p,{children:"SpdrRiskControl records are used to establish supervisory control of equity, and equity option trading in SpiderRock execution engines.  These records are only viewable and editable by RiskAdmin users with access to the control record ClientFirm"}),"\n",(0,t.jsxs)("div",{className:"single-message-meta",children:[(0,t.jsx)(s.h3,{id:"meta-data--topic-risk-control-",children:"META DATA  (Topic: risk-control )"}),(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Attribute"}),(0,t.jsx)(s.th,{children:"Value"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"MLink Token"}),(0,t.jsx)(s.td,{children:"SystemData"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"SRSE Product"}),(0,t.jsx)(s.td,{children:"SRControl, MIPControl"})]})]})]})]}),"\n",(0,t.jsxs)("div",{className:"single-message-primarykey",children:[(0,t.jsx)(s.h3,{id:"primary-key",children:"PRIMARY KEY"}),(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Field"}),(0,t.jsx)(s.th,{children:"Type"}),(0,t.jsx)(s.th,{children:"Comment"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"ticker"}),(0,t.jsx)(s.td,{children:"TickerKey"}),(0,t.jsx)(s.td,{children:"'*-ANY-ANY' default (if a more precise ticker control does not exist)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"riskControlKey"}),(0,t.jsx)(s.td,{children:"string(16)"}),(0,t.jsx)(s.td,{children:"must be an SRClientAccnt if riskControlLevel=Accnt; must be an SRUser if riskControlLevel=User; ignored if riskControlLevel=ClientFirm"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"riskControlLevel"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"../../Enums/RiskControlLevel",children:"enum : RiskControlLevel"})}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"riskFirm"}),(0,t.jsx)(s.td,{children:"string(16)"}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"isTestAccnt"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"../../Enums/YesNo",children:"enum : YesNo"})}),(0,t.jsx)(s.td,{children:"if Yes, this control applies only to risk from test accnts"})]})]})]})]}),"\n",(0,t.jsxs)("div",{className:"single-message-body",children:[(0,t.jsx)(s.h3,{id:"body",children:"BODY"}),(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Field"}),(0,t.jsx)(s.th,{children:"Type"}),(0,t.jsx)(s.th,{children:"Comment"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"futEnabled"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"../../Enums/MarState",children:"enum : MarState"})}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"marginLimitDay"}),(0,t.jsx)(s.td,{children:"float"}),(0,t.jsx)(s.td,{children:"maximum net (per symbol/day) day portfolio (day trades only) margin (can include external sources)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"maxDayDDeltaAbs"}),(0,t.jsx)(s.td,{children:"float"}),(0,t.jsx)(s.td,{children:"absolute $Delta,"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"maxDayDDeltaLn"}),(0,t.jsx)(s.td,{children:"float"}),(0,t.jsx)(s.td,{children:"open long $Delta per trading session"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"maxDayDDeltaSh"}),(0,t.jsx)(s.td,{children:"float"}),(0,t.jsx)(s.td,{children:"open short $Delta per trading session"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"maxDayNValueAbs"}),(0,t.jsx)(s.td,{children:"float"}),(0,t.jsx)(s.td,{children:"absolute notional value,"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"maxDayNValueLn"}),(0,t.jsx)(s.td,{children:"float"}),(0,t.jsx)(s.td,{children:"open long notional value per trading session"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"maxDayNValueSh"}),(0,t.jsx)(s.td,{children:"float"}),(0,t.jsx)(s.td,{children:"open short notional value per trading session"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"maxDayWtVegaAbs"}),(0,t.jsx)(s.td,{children:"float"}),(0,t.jsx)(s.td,{children:"open absolute WtVega,"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"maxDayWtVegaLn"}),(0,t.jsx)(s.td,{children:"float"}),(0,t.jsx)(s.td,{children:"open long WtVega per trading session"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"maxDayWtVegaSh"}),(0,t.jsx)(s.td,{children:"float"}),(0,t.jsx)(s.td,{children:"open short WtVega per trading session"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"modifiedBy"}),(0,t.jsx)(s.td,{children:"string(24)"}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"modifiedIn"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"../../Enums/SysEnvironment",children:"enum : SysEnvironment"})}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"openExposureLimit"}),(0,t.jsx)(s.td,{children:"float"}),(0,t.jsx)(s.td,{children:"maximum abs open child order $Delta (no netting) (open child orders only)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"optEnabled"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"../../Enums/MarState",children:"enum : MarState"})}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"stkEnabled"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"../../Enums/MarState",children:"enum : MarState"})}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"timestamp"}),(0,t.jsx)(s.td,{children:"DateTime"}),(0,t.jsx)(s.td,{})]})]})]})]})]})}function h(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},28453:(e,s,r)=>{r.d(s,{R:()=>d,x:()=>l});var t=r(96540);const n={},i=t.createContext(n);function d(e){const s=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:d(e.components),t.createElement(i.Provider,{value:s},e.children)}}}]);