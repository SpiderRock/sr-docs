"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[2146],{88804:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>n,metadata:()=>l,toc:()=>o});var t=s(74848),d=s(28453);const n={title:"MarRiskControl"},i="Schema: MarRiskControl (ID: 4550)",l={id:"MessageSchemas/Schema/Topics/risk-control/MarRiskControl",title:"MarRiskControl",description:"MarRiskControl records are used to establish risk controls within SpiderRock execution engines.  These records are only viewable and editable by users belonging to the same riskFirm as the control records.",source:"@site/docs/MessageSchemas/Schema/Topics/4535-risk-control/MarRiskControl.md",sourceDirName:"MessageSchemas/Schema/Topics/4535-risk-control",slug:"/MessageSchemas/Schema/Topics/risk-control/MarRiskControl",permalink:"/docs/MessageSchemas/Schema/Topics/risk-control/MarRiskControl",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"MarRiskControl"},sidebar:"messageSchemasSidebar",previous:{title:"GlobalRiskControl",permalink:"/docs/MessageSchemas/Schema/Topics/risk-control/GlobalRiskControl"},next:{title:"MarRiskControlTkOverride",permalink:"/docs/MessageSchemas/Schema/Topics/risk-control/MarRiskControlTkOverride"}},c={},o=[{value:"METADATA",id:"metadata",level:3},{value:"PRIMARY KEY",id:"primary-key",level:3},{value:"BODY",id:"body",level:3}];function a(e){const r={a:"a",h1:"h1",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.h1,{id:"schema-marriskcontrol-id-4550",children:["Schema: MarRiskControl ",(0,t.jsx)("span",{className:"small-text",children:"(ID: 4550)"})]}),"\n",(0,t.jsx)(r.p,{children:"MarRiskControl records are used to establish risk controls within SpiderRock execution engines.  These records are only viewable and editable by users belonging to the same riskFirm as the control records."}),"\n",(0,t.jsxs)("div",{className:"single-message-meta",children:[(0,t.jsx)(r.h3,{id:"metadata",children:"METADATA"}),(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Attribute"}),(0,t.jsx)(r.th,{children:"Value"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Topic"}),(0,t.jsx)(r.td,{children:"4535-risk-control"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"MLink Token"}),(0,t.jsx)(r.td,{children:"SystemData"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"SRSE Product"}),(0,t.jsx)(r.td,{children:"SRControl, MIPControl"})]})]})]})]}),"\n",(0,t.jsxs)("div",{className:"single-message-primarykey",children:[(0,t.jsx)(r.h3,{id:"primary-key",children:"PRIMARY KEY"}),(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"#"}),(0,t.jsx)(r.th,{children:"Field"}),(0,t.jsx)(r.th,{children:"Type"}),(0,t.jsx)(r.th,{children:"Comment"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"12"}),(0,t.jsx)(r.td,{children:"riskFirm"}),(0,t.jsx)(r.td,{children:"string(16)"}),(0,t.jsx)(r.td,{children:"If exists, a client firm imposing risk controls (should be an existing SR client ID)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"11"}),(0,t.jsx)(r.td,{children:"riskGroup"}),(0,t.jsx)(r.td,{children:"string(16)"}),(0,t.jsx)(r.td,{children:"The ID of the risk group these rules will apply to"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"14"}),(0,t.jsx)(r.td,{children:"isTestAccnt"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,t.jsx)(r.td,{children:"If Yes, this control applies only to risk for test accounts"})]})]})]})]}),"\n",(0,t.jsxs)("div",{className:"single-message-body",children:[(0,t.jsx)(r.h3,{id:"body",children:"BODY"}),(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"#"}),(0,t.jsx)(r.th,{children:"Field"}),(0,t.jsx)(r.th,{children:"Type"}),(0,t.jsx)(r.th,{children:"Comment"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"115"}),(0,t.jsx)(r.td,{children:"allowInterMarketSweep"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,t.jsx)(r.td,{children:"Allow intermarket sweep orders"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"109"}),(0,t.jsx)(r.td,{children:"allowLimitOnClose"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,t.jsx)(r.td,{children:"Allow limit on close orders - similar to MOC order, with the addition of a price limit"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"106"}),(0,t.jsx)(r.td,{children:"allowMarketOnClose"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,t.jsx)(r.td,{children:"Allow market on close orders - special order type which is executed as close to the close of trading as possible"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"112"}),(0,t.jsx)(r.td,{children:"allowShortSaleExempt"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,t.jsx)(r.td,{children:"Allow short sale option orders to be marked exempt, as per Rule 201"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"174"}),(0,t.jsx)(r.td,{children:"allowStkOddLots"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,t.jsx)(r.td,{children:"Allow parent stock orders with an order size below 100"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"175"}),(0,t.jsx)(r.td,{children:"blockShortSales"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,t.jsx)(r.td,{children:"Block all short sales"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"172"}),(0,t.jsx)(r.td,{children:"futCollarPct"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{children:"Maximum user limit vs bid/ask price control - percentage in decimals"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"159"}),(0,t.jsx)(r.td,{children:"futEnabled"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../../Enums/MarState",children:"enum : MarState"})}),(0,t.jsx)(r.td,{children:"Enabled or not for futures (None=disabled)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"161"}),(0,t.jsx)(r.td,{children:"marginLimitAcc"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{children:"Maximum net (per symbol) total portfolio (start-of-day positions + day trades) margin (can include external sources)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"162"}),(0,t.jsx)(r.td,{children:"marginLimitDay"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{children:"Maximum net (per symbol/day) day portfolio (day trades only) margin (can include external sources)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"176"}),(0,t.jsx)(r.td,{children:"maxAccFutCnAbs"}),(0,t.jsx)(r.td,{children:"int"}),(0,t.jsx)(r.td,{children:"Maximum absolute (net) account future contracts"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"179"}),(0,t.jsx)(r.td,{children:"maxDayFutCnAbs"}),(0,t.jsx)(r.td,{children:"int"}),(0,t.jsx)(r.td,{children:"Maximum absolute (net) day future contracts"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"177"}),(0,t.jsx)(r.td,{children:"maxDayFutCnBot"}),(0,t.jsx)(r.td,{children:"int"}),(0,t.jsx)(r.td,{children:"Day future contracts bot"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"178"}),(0,t.jsx)(r.td,{children:"maxDayFutCnSld"}),(0,t.jsx)(r.td,{children:"int"}),(0,t.jsx)(r.td,{children:"Day future contracts sld"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"151"}),(0,t.jsx)(r.td,{children:"modifiedBy"}),(0,t.jsx)(r.td,{children:"string(24)"}),(0,t.jsx)(r.td,{children:"User that last modified this record"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"154"}),(0,t.jsx)(r.td,{children:"modifiedIn"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../../Enums/SysEnvironment",children:"enum : SysEnvironment"})}),(0,t.jsx)(r.td,{children:"Environment this record was last updated in"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"163"}),(0,t.jsx)(r.td,{children:"openExposureLimit"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{children:"Maximum abs open child order $Delta (no netting) (open child orders only)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"173"}),(0,t.jsx)(r.td,{children:"optCollarPct"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{children:"Maximum user limit vs bid/ask price control - percentage in decimals"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"160"}),(0,t.jsx)(r.td,{children:"optEnabled"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../../Enums/MarState",children:"enum : MarState"})}),(0,t.jsx)(r.td,{children:"Enabled or not for options (None=disabled)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"169"}),(0,t.jsx)(r.td,{children:"orderMaxFutDDelta"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{children:"Maximum (abs) mny per future parent order; ddelta = 0.01 * contracts * pointValue * midPrc"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"166"}),(0,t.jsx)(r.td,{children:"orderMaxFutQty"}),(0,t.jsx)(r.td,{children:"int"}),(0,t.jsx)(r.td,{children:"Number of futures contracts that can be bought or sold by a single parent order"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"164"}),(0,t.jsx)(r.td,{children:"orderMaxMargin"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{children:"Maximum (abs) margin per parent order (SR variation margin)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"170"}),(0,t.jsx)(r.td,{children:"orderMaxOptDDelta"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{children:"Maximum (abs) mny per option parent order; ddelta = 0.01 * contracts * pointValue * ABS(de) * uMidPrc"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"167"}),(0,t.jsx)(r.td,{children:"orderMaxOptQty"}),(0,t.jsx)(r.td,{children:"int"}),(0,t.jsx)(r.td,{children:"Number of option contracts that can be bought or sold by a single parent order"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"168"}),(0,t.jsx)(r.td,{children:"orderMaxStkDDelta"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{children:"Maximum (abs) mny per stock parent order; ddelta = 0.01 * shares * pointValue * midPrc"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"165"}),(0,t.jsx)(r.td,{children:"orderMaxStkQty"}),(0,t.jsx)(r.td,{children:"int"}),(0,t.jsx)(r.td,{children:"Number of equity shares that can be bought or sold by a single parent order"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"171"}),(0,t.jsx)(r.td,{children:"stkCollarPct"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{children:"Maximum user limit vs bid/ask price control - percentage in decimals"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"158"}),(0,t.jsx)(r.td,{children:"stkEnabled"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../../Enums/MarState",children:"enum : MarState"})}),(0,t.jsx)(r.td,{children:"Enabled or not for equities (None=disabled)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"157"}),(0,t.jsx)(r.td,{children:"timestamp"}),(0,t.jsx)(r.td,{children:"DateTime"}),(0,t.jsx)(r.td,{children:"Timestamp of this record"})]})]})]})]})]})}function h(e={}){const{wrapper:r}={...(0,d.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},28453:(e,r,s)=>{s.d(r,{R:()=>i,x:()=>l});var t=s(96540);const d={},n=t.createContext(d);function i(e){const r=t.useContext(n);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:i(e.components),t.createElement(n.Provider,{value:r},e.children)}}}]);