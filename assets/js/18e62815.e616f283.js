"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[12817],{71209:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>c,contentTitle:()=>i,default:()=>a,frontMatter:()=>d,metadata:()=>l,toc:()=>o});var r=t(74848),n=t(28453);const d={title:"SpdrRiskControl"},i="Schema: SpdrRiskControl (ID: 4560)",l={id:"MessageSchemas/Schema/Topics/risk-control/SpdrRiskControl",title:"SpdrRiskControl",description:"SpdrRiskControl records are used to establish supervisory control of equity, and equity option trading in SpiderRock execution engines.  These records are only viewable and editable by RiskAdmin users with access to the control record ClientFirm",source:"@site/docs/MessageSchemas/Schema/Topics/4535-risk-control/SpdrRiskControl.md",sourceDirName:"MessageSchemas/Schema/Topics/4535-risk-control",slug:"/MessageSchemas/Schema/Topics/risk-control/SpdrRiskControl",permalink:"/docs/MessageSchemas/Schema/Topics/risk-control/SpdrRiskControl",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"SpdrRiskControl"},sidebar:"messageSchemasSidebar",previous:{title:"MarRiskControlTkOverride",permalink:"/docs/MessageSchemas/Schema/Topics/risk-control/MarRiskControlTkOverride"},next:{title:"SpdrRiskGroupControl",permalink:"/docs/MessageSchemas/Schema/Topics/risk-control/SpdrRiskGroupControl"}},c={},o=[{value:"METADATA",id:"metadata",level:3},{value:"BODY",id:"body",level:3}];function h(e){const s={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h3:"h3",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.h1,{id:"schema-spdrriskcontrol-id-4560",children:["Schema: SpdrRiskControl ",(0,r.jsx)("span",{className:"small-text",children:"(ID: 4560)"})]}),"\n",(0,r.jsx)(s.p,{children:"SpdrRiskControl records are used to establish supervisory control of equity, and equity option trading in SpiderRock execution engines.  These records are only viewable and editable by RiskAdmin users with access to the control record ClientFirm"}),"\n",(0,r.jsx)(s.h3,{id:"metadata",children:"METADATA"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Attribute"}),(0,r.jsx)(s.th,{children:"Value"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Topic"}),(0,r.jsx)(s.td,{children:"4535-risk-control"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"MLink Token"}),(0,r.jsx)(s.td,{children:"SystemData"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"SRSE Product"}),(0,r.jsx)(s.td,{children:"SRControl"})]})]})]}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Note:"})," The symbol ",(0,r.jsx)(s.code,{children:"="})," next to a field number indicates that it is a primary key."]}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"body",children:"BODY"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"#"}),(0,r.jsx)(s.th,{children:"Field"}),(0,r.jsx)(s.th,{children:"Type"}),(0,r.jsx)(s.th,{children:"Comment"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"12="}),(0,r.jsx)(s.td,{children:"ticker"}),(0,r.jsx)(s.td,{children:"TickerKey"}),(0,r.jsx)(s.td,{children:"'*-ANY-ANY' default (if a more precise ticker control does not exist)"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"13="}),(0,r.jsx)(s.td,{children:"riskControlKey"}),(0,r.jsx)(s.td,{children:"string(16)"}),(0,r.jsx)(s.td,{children:"must be an SRClientAccnt if riskControlLevel=Accnt; must be an SRUser if riskControlLevel=User; ignored if riskControlLevel=ClientFirm"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"14="}),(0,r.jsx)(s.td,{children:"riskControlLevel"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"../../../Enums/RiskControlLevel",children:"enum : RiskControlLevel"})}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"15="}),(0,r.jsx)(s.td,{children:"riskFirm"}),(0,r.jsx)(s.td,{children:"string(16)"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"16="}),(0,r.jsx)(s.td,{children:"isTestAccnt"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,r.jsx)(s.td,{children:"if Yes, this control applies only to risk from test accnts"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"197"}),(0,r.jsx)(s.td,{children:"stkEnabled"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"../../../Enums/MarState",children:"enum : MarState"})}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"198"}),(0,r.jsx)(s.td,{children:"futEnabled"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"../../../Enums/MarState",children:"enum : MarState"})}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"199"}),(0,r.jsx)(s.td,{children:"optEnabled"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"../../../Enums/MarState",children:"enum : MarState"})}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"200"}),(0,r.jsx)(s.td,{children:"marginLimitDay"}),(0,r.jsx)(s.td,{children:"float"}),(0,r.jsx)(s.td,{children:"maximum net (per symbol/day) day portfolio (day trades only) margin (can include external sources)"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"201"}),(0,r.jsx)(s.td,{children:"openExposureLimit"}),(0,r.jsx)(s.td,{children:"float"}),(0,r.jsx)(s.td,{children:"maximum abs open child order $Delta (no netting) (open child orders only)"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"127"}),(0,r.jsx)(s.td,{children:"maxDayDDeltaLn"}),(0,r.jsx)(s.td,{children:"float"}),(0,r.jsx)(s.td,{children:"open long $Delta per trading session"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"130"}),(0,r.jsx)(s.td,{children:"maxDayDDeltaSh"}),(0,r.jsx)(s.td,{children:"float"}),(0,r.jsx)(s.td,{children:"open short $Delta per trading session"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"133"}),(0,r.jsx)(s.td,{children:"maxDayDDeltaAbs"}),(0,r.jsx)(s.td,{children:"float"}),(0,r.jsx)(s.td,{children:"absolute $Delta,"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"145"}),(0,r.jsx)(s.td,{children:"maxDayWtVegaLn"}),(0,r.jsx)(s.td,{children:"float"}),(0,r.jsx)(s.td,{children:"open long WtVega per trading session"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"148"}),(0,r.jsx)(s.td,{children:"maxDayWtVegaSh"}),(0,r.jsx)(s.td,{children:"float"}),(0,r.jsx)(s.td,{children:"open short WtVega per trading session"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"151"}),(0,r.jsx)(s.td,{children:"maxDayWtVegaAbs"}),(0,r.jsx)(s.td,{children:"float"}),(0,r.jsx)(s.td,{children:"open absolute WtVega,"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"202"}),(0,r.jsx)(s.td,{children:"maxDayNValueLn"}),(0,r.jsx)(s.td,{children:"float"}),(0,r.jsx)(s.td,{children:"open long notional value per trading session"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"203"}),(0,r.jsx)(s.td,{children:"maxDayNValueSh"}),(0,r.jsx)(s.td,{children:"float"}),(0,r.jsx)(s.td,{children:"open short notional value per trading session"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"204"}),(0,r.jsx)(s.td,{children:"maxDayNValueAbs"}),(0,r.jsx)(s.td,{children:"float"}),(0,r.jsx)(s.td,{children:"absolute notional value,"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"172"}),(0,r.jsx)(s.td,{children:"modifiedBy"}),(0,r.jsx)(s.td,{children:"string(24)"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"175"}),(0,r.jsx)(s.td,{children:"modifiedIn"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"../../../Enums/SysEnvironment",children:"enum : SysEnvironment"})}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"178"}),(0,r.jsx)(s.td,{children:"timestamp"}),(0,r.jsx)(s.td,{children:"DateTime"}),(0,r.jsx)(s.td,{})]})]})]})]})}function a(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},28453:(e,s,t)=>{t.d(s,{R:()=>i,x:()=>l});var r=t(96540);const n={},d=r.createContext(n);function i(e){const s=r.useContext(d);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),r.createElement(d.Provider,{value:s},e.children)}}}]);