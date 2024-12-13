"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[53979],{27304:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>a,contentTitle:()=>n,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>o});var d=t(74848),s=t(28453);const i={sidebar_position:1,title:"ClientTrading"},n=void 0,c={id:"MessageSchemas/Schema/MLink Tokens/ClientTrading",title:"ClientTrading",description:"| # | Message Name | Description |",source:"@site/versioned_docs/version-8.4.10.4/MessageSchemas/Schema/MLink Tokens/ClientTrading.md",sourceDirName:"MessageSchemas/Schema/MLink Tokens",slug:"/MessageSchemas/Schema/MLink Tokens/ClientTrading",permalink:"/docs/8.4.10.4/MessageSchemas/Schema/MLink Tokens/ClientTrading",draft:!1,unlisted:!1,tags:[],version:"8.4.10.4",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"ClientTrading"},sidebar:"messageSchemasSidebar",previous:{title:"ClientTheo",permalink:"/docs/8.4.10.4/MessageSchemas/Schema/MLink Tokens/ClientTheo"},next:{title:"EqtAnalytics",permalink:"/docs/8.4.10.4/MessageSchemas/Schema/MLink Tokens/EqtAnalytics"}},a={},o=[];function l(e){const r={a:"a",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,d.jsxs)(r.table,{children:[(0,d.jsx)(r.thead,{children:(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.th,{children:"#"}),(0,d.jsx)(r.th,{children:"Message Name"}),(0,d.jsx)(r.th,{children:"Description"})]})}),(0,d.jsxs)(r.tbody,{children:[(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"5290"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../Topics/strategy-autohedge/AutoHedgeSymbol",children:"AutoHedgeSymbol"})}),(0,d.jsx)(r.td,{children:"AutoHedgeSymbol records are published by autohedge servers and contain all valid hedge target symbols.  Execution engines reject auto-hedge requests for hedgeSecKeys that are not in this set."})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"2270"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../Topics/execution-engine/ExternAggGroupReport",children:"ExternAggGroupReport"})}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"4655"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../Topics/risk-counter/RiskGroupCounter",children:"RiskGroupCounter"})}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"3985"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../Topics/parent-orders/SpdrAccntCancel",children:"SpdrAccntCancel"})}),(0,d.jsx)(r.td,{children:"Records inserted into this table will result in the cancellation of all active/cancelable orders for the indicated SpiderRock trading accnt."})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"3695"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../Topics/order-allocation/SpdrAllocationNotice",children:"SpdrAllocationNotice"})}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"3700"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../Topics/order-allocation/SpdrAllocationNoticeStatus",children:"SpdrAllocationNoticeStatus"})}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"5295"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../Topics/strategy-autohedge/SpdrAutoHedgeControl",children:"SpdrAutoHedgeControl"})}),(0,d.jsxs)(r.td,{children:["SpdrAutoHedgeControl contains autohedge / risk group control details.  Can be uploaded from SRSE, created from ExecutionEngines, or created by SR tools.",(0,d.jsx)("br",{}),(0,d.jsx)("br",{}),"BridgeFromV7",":SpdrRiskGroupControl"]})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"5300"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../Topics/strategy-autohedge/SpdrAutoHedgeState",children:"SpdrAutoHedgeState"})}),(0,d.jsx)(r.td,{children:"SpdrAutoHedgeState records are published by autohedge servers and describe the current state of an autohedge controller that is managing RiskGroup autohedge orders."})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"3705"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../Topics/order-allocation/SpdrAvailExecAllocation",children:"SpdrAvailExecAllocation"})}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"1450"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../Topics/away-drop/SpdrAwayExecution",children:"SpdrAwayExecution"})}),(0,d.jsx)(r.td,{children:"SpdrAwayExecution records are published by ToolServers, SRSE, and FIX drop recv gateways.  They are consumed by AwayExecutionMarkupServer which, in turn, publishes corresponding SpdrParentExecution records, including M1 and M10 updates."})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"3990"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../Topics/parent-orders/SpdrBrokerCancel",children:"SpdrBrokerCancel"})}),(0,d.jsx)(r.td,{children:"Records inserted into this table causes the corresponding parent broker to cancel the current underlying parent order if active and cancellable."})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"3920"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../Topics/order-routing-counter/SpdrClientFirmRiskMgmt",children:"SpdrClientFirmRiskMgmt"})}),(0,d.jsx)(r.td,{children:"SpdrClientFirmRiskMgmt records are created/published by SpiderRock Execution Engines and show exchange level risk management child order rejects."})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"1460"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../Topics/away-drop/SpdrDropExecution",children:"SpdrDropExecution"})}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"1465"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../Topics/away-drop/SpdrDropExecutionAck",children:"SpdrDropExecutionAck"})}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"1470"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../Topics/away-drop/SpdrExchRiskDrop",children:"SpdrExchRiskDrop"})}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"3925"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../Topics/order-routing-counter/SpdrExchRiskMgmt",children:"SpdrExchRiskMgmt"})}),(0,d.jsx)(r.td,{children:"SpdrExchRiskMgmt records are created/published by SpiderRock Execution Engines and show exchange level risk management child order rejects."})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"3835"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../Topics/order-routing-control/SpdrExchRiskReset",children:"SpdrExchRiskReset"})}),(0,d.jsx)(r.td,{children:"SpdrExchRiskMgmt records are created/published by SpiderRock Execution Engines and show exchange level risk management child order rejects."})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"3710"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../Topics/order-allocation/SpdrExecutionAllocation",children:"SpdrExecutionAllocation"})}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"3715"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../Topics/order-allocation/SpdrExecutionAllocationStatus",children:"SpdrExecutionAllocationStatus"})}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"4025"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../Topics/parent-orders/SpdrMLegBrkrEvent",children:"SpdrMLegBrkrEvent"})}),(0,d.jsx)(r.td,{children:"SpdrMLegBrkrEvent records are published when a new or clx/replace parent order arrives causes a broker to beging working and again when a parent order terminates and the underlying broker stops working.  The initial version contains state and market data from just after the initial risk check and first attempt at generating child orders."})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"4030"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../Topics/parent-orders/SpdrMLegBrkrState",children:"SpdrMLegBrkrState"})}),(0,d.jsx)(r.td,{children:"SpdrMLegBrkrState records are published by execution engines and describe the current state of a broker that is managing a SpiderRock parent order.  These records include a description of the active child orders managed by the broker.  Records are updated whenever a child order changes and also at other times but are not completely live and may not always reflect current market data or limit levels for working orders."})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"3720"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../Topics/order-allocation/SpdrOmniOrder",children:"SpdrOmniOrder"})}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"3725"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../Topics/order-allocation/SpdrParentAllocation",children:"SpdrParentAllocation"})}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"3730"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../Topics/order-allocation/SpdrParentAllocationStatus",children:"SpdrParentAllocationStatus"})}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"4065"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../Topics/parent-orders/SpdrParentBrkrEvent",children:"SpdrParentBrkrEvent"})}),(0,d.jsx)(r.td,{children:"SpdrParentBrkrEvent records are published when a new or cxl/replace parent order arrives causes a broker to begin working and again when a parent order terminates and the underlying broker stops working.  The initial version contains state and market data from just after the initial risk check and first attempt at generating child orders."})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"4070"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../Topics/parent-orders/SpdrParentBrkrState",children:"SpdrParentBrkrState"})}),(0,d.jsx)(r.td,{children:"SpdrParentBrkrState records are created/published by SpiderRock Execution Engines. Each record describes the current state of one (or more) parent orders. If a parent order is canceled/replaced then entire chain is represented by a single broker state record."})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"4075"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../Topics/parent-orders/SpdrParentBrokerSummary",children:"SpdrParentBrokerSummary"})}),(0,d.jsx)(r.td,{children:"SpdrParentBrokerSummary records are created at the end of a trading period and contain a summary of trading activity for the period; Summary of Stk/Fut/Opt/MLeg Brkr State records."})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"4080"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../Topics/parent-orders/SpdrParentCancel",children:"SpdrParentCancel"})}),(0,d.jsxs)(r.td,{children:["Records inserted into this table causes the corresponding parent order to be cancelled if it is active and cancellable.",(0,d.jsx)("br",{}),(0,d.jsx)("br",{}),"Either put in a custom datasource or deprecate from SRSE (Natively not allowed to be modified via SRSE)"]})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"4085"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../Topics/parent-orders/SpdrParentExecution",children:"SpdrParentExecution"})}),(0,d.jsx)(r.td,{children:"SpdrParentExecution records are published every time a parent order execution is received.  They also update as additional post execution mark information is available at F+1m and F+10m."})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"4090"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../Topics/parent-orders/SpdrParentLimit",children:"SpdrParentLimit"})}),(0,d.jsx)(r.td,{children:"SpdrParentLimit records are supplied by clients (via SRSE) for use with parent orders having orderLimitType=Aux.  This table can be updated either before or after a parent order begins working and will influence the limit(s) used when working child orders.  Updates to this table do not constitute cancel/replace operations for the parent order."})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"4095"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../Topics/parent-orders/SpdrParentOrder",children:"SpdrParentOrder"})}),(0,d.jsxs)(r.td,{children:["SpdrParentOrder records are visible in SRSE immediately after receipt.  Parent orders received via FIX, SRSE or SpiderRock GUI tools, or 3rd party vendor systems are all visible in this table.",(0,d.jsx)("br",{}),(0,d.jsx)("br",{}),"Parent orders can be for stocks, futures, options or spreads.  And they can be one-sided (agency) or two-sided (facilitation) orders.  Parent order records should be immutable and not update.",(0,d.jsx)("br",{}),(0,d.jsx)("br",{}),"SpdrParentOrder records are published to the SpiderRock elatic cluster on arrival."]})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"4100"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../Topics/parent-orders/SpdrParentReport",children:"SpdrParentReport"})}),(0,d.jsxs)(r.td,{children:["SpdrParentReport records contain the current state of a parent order and update as/when the order state changes.",(0,d.jsx)("br",{}),(0,d.jsx)("br",{}),"SpdrParentReport records are published to the SpiderRock elastic cluster when they reach a terminal state (closed, rejected, filled, etc.)"]})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"4195"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../Topics/parent-review/SpdrParentReviewRequest",children:"SpdrParentReviewRequest"})}),(0,d.jsx)(r.td,{children:"SpdrParentReviewRequest records created when a parent order is submitted with StageType=StageReview.  These records indicate that an external review of the parent order has been requested."})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"4200"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../Topics/parent-review/SpdrParentReviewResponse",children:"SpdrParentReviewResponse"})}),(0,d.jsx)(r.td,{children:"SpdrParentReviewResponse records are created when a parent order review request is completed"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"4105"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../Topics/parent-orders/SpdrReleaseWaitTrigger",children:"SpdrReleaseWaitTrigger"})}),(0,d.jsx)(r.td,{children:"SpdrReleaseWaitTrigger records are used to trigger the release of parent orders submitted with startType=WaitTrigger.  Note that all parent orders in a risk group will be triggered together."})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"2325"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../Topics/execution-engine/SpdrRiskExecution",children:"SpdrRiskExecution"})}),(0,d.jsx)(r.td,{children:"SpdrRiskExecution records are published every time a SpdrParentExecution record is published"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"1467"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../Topics/parent-orders/SpdrRiskGroupCancel",children:"SpdrRiskGroupCancel"})}),(0,d.jsx)(r.td,{children:"Records inserted into this table causes the corresponding parent broker to cancel the current underlying parent order if active and cancellable."})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"4570"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../Topics/risk-control/SpdrRiskGroupControl",children:"SpdrRiskGroupControl"})}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"4110"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../Topics/parent-orders/SpdrRouteCancel",children:"SpdrRouteCancel"})}),(0,d.jsx)(r.td,{children:"Records inserted into this table will result in the cancellation of all active/cancelable orders for the indicated SpiderRock routing code"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"4115"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../Topics/parent-orders/SpdrSecKeyCancel",children:"SpdrSecKeyCancel"})}),(0,d.jsx)(r.td,{children:"Records inserted into this table causes the corresponding parent broker to cancel the current underlying parent order if active and cancellable."})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"4120"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../Topics/parent-orders/SpdrSetActiveSize",children:"SpdrSetActiveSize"})}),(0,d.jsx)(r.td,{children:"SpdrSetActiveSize records control the active working size for parent orders that are locked (have active size controls).  These records can be modified by ClientRiskTrader and ClientStageTrader user types."})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"4135"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../Topics/parent-orders/SpdrStripeTrigger",children:"SpdrStripeTrigger"})}),(0,d.jsx)(r.td,{children:"SpdrStripeTrigger records are used to allocate sweep risk and trigger cross stripe release of parent orders submitted with startType=WaitTrigger.  These records are published by a SR Strategy Server if/when a SpdrReleaseWaitTrigger message is received."})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"2330"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../Topics/execution-engine/SpdrSweepDetail",children:"SpdrSweepDetail"})}),(0,d.jsx)(r.td,{children:"SpdrSweepDetail records are published by execution engines when sweep trigger groups are processed"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"2335"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../Topics/execution-engine/SpdrSweepExchDetail",children:"SpdrSweepExchDetail"})}),(0,d.jsx)(r.td,{children:"SpdrSweepExchDetail records are published by execution engines when sweep trigger groups are processed"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"4140"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../Topics/parent-orders/SpdrUserCancel",children:"SpdrUserCancel"})}),(0,d.jsx)(r.td,{children:"Records inserted into this table cancels all parent orders associated with userName/clientFirm"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"3480"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../Topics/mlink-custom/ToolCompositeExecution",children:"ToolCompositeExecution"})}),(0,d.jsx)(r.td,{})]})]})]})}function h(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,d.jsx)(r,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}},28453:(e,r,t)=>{t.d(r,{R:()=>n,x:()=>c});var d=t(96540);const s={},i=d.createContext(s);function n(e){const r=d.useContext(i);return d.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:n(e.components),d.createElement(i.Provider,{value:r},e.children)}}}]);