"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[77908],{1270:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>o});var d=t(74848),n=t(28453);const s={sidebar_position:1,title:"3985-parent-orders"},a=void 0,i={id:"MessageSchemas/Schema/Topics/parent-orders/parent-orders",title:"3985-parent-orders",description:"| # | Message Name | Description |",source:"@site/versioned_docs/version-8.5.3.3/MessageSchemas/Schema/Topics/3985-parent-orders/3985-parent-orders.md",sourceDirName:"MessageSchemas/Schema/Topics/3985-parent-orders",slug:"/MessageSchemas/Schema/Topics/parent-orders/",permalink:"/docs/8.5.3.3/MessageSchemas/Schema/Topics/parent-orders/",draft:!1,unlisted:!1,tags:[],version:"8.5.3.3",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"3985-parent-orders"},sidebar:"messageSchemasSidebar",previous:{title:"SpdrExchRiskMgmt",permalink:"/docs/8.5.3.3/MessageSchemas/Schema/Topics/order-routing-counter/SpdrExchRiskMgmt"},next:{title:"SpdrAccntCancel",permalink:"/docs/8.5.3.3/MessageSchemas/Schema/Topics/parent-orders/SpdrAccntCancel"}},c={},o=[];function l(e){const r={a:"a",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,d.jsxs)(r.table,{children:[(0,d.jsx)(r.thead,{children:(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.th,{children:"#"}),(0,d.jsx)(r.th,{children:"Message Name"}),(0,d.jsx)(r.th,{children:"Description"})]})}),(0,d.jsxs)(r.tbody,{children:[(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"3985"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"SpdrAccntCancel",children:"SpdrAccntCancel"})}),(0,d.jsx)(r.td,{children:"Records inserted into this table will result in the cancellation of all active/cancelable orders for the indicated SpiderRock trading accnt."})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"3990"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"SpdrBrokerCancel",children:"SpdrBrokerCancel"})}),(0,d.jsx)(r.td,{children:"Records inserted into this table causes the corresponding parent broker to cancel the current underlying parent order if active and cancellable."})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"4025"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"SpdrMLegBrkrEvent",children:"SpdrMLegBrkrEvent"})}),(0,d.jsx)(r.td,{children:"SpdrMLegBrkrEvent records are published when a new or clx/replace parent order arrives causes a broker to beging working and again when a parent order terminates and the underlying broker stops working.  The initial version contains state and market data from just after the initial risk check and first attempt at generating child orders."})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"4030"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"SpdrMLegBrkrState",children:"SpdrMLegBrkrState"})}),(0,d.jsx)(r.td,{children:"SpdrMLegBrkrState records are published by execution engines and describe the current state of a broker that is managing a SpiderRock parent order.  These records include a description of the active child orders managed by the broker.  Records are updated whenever a child order changes and also at other times but are not completely live and may not always reflect current market data or limit levels for working orders."})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"4065"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"SpdrParentBrkrEvent",children:"SpdrParentBrkrEvent"})}),(0,d.jsx)(r.td,{children:"SpdrParentBrkrEvent records are published when a new or cxl/replace parent order arrives causes a broker to begin working and again when a parent order terminates and the underlying broker stops working.  The initial version contains state and market data from just after the initial risk check and first attempt at generating child orders."})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"4070"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"SpdrParentBrkrState",children:"SpdrParentBrkrState"})}),(0,d.jsx)(r.td,{children:"SpdrParentBrkrState records are created/published by SpiderRock Execution Engines. Each record describes the current state of one (or more) parent orders. If a parent order is canceled/replaced then entire chain is represented by a single broker state record."})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"4075"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"SpdrParentBrokerSummary",children:"SpdrParentBrokerSummary"})}),(0,d.jsx)(r.td,{children:"SpdrParentBrokerSummary records are created at the end of a trading period and contain a summary of trading activity for the period; Summary of Stk/Fut/Opt/MLeg Brkr State records."})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"4080"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"SpdrParentCancel",children:"SpdrParentCancel"})}),(0,d.jsxs)(r.td,{children:["Records inserted into this table causes the corresponding parent order to be cancelled if it is active and cancellable.",(0,d.jsx)("br",{}),(0,d.jsx)("br",{}),"Either put in a custom datasource or deprecate from SRSE (Natively not allowed to be modified via SRSE)"]})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"4085"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"SpdrParentExecution",children:"SpdrParentExecution"})}),(0,d.jsx)(r.td,{children:"SpdrParentExecution records are published every time a parent order execution is received.  They also update as additional post execution mark information is available at F+1m and F+10m."})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"4090"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"SpdrParentLimit",children:"SpdrParentLimit"})}),(0,d.jsx)(r.td,{children:"SpdrParentLimit records are supplied by clients (via SRSE) for use with parent orders having orderLimitType=Aux.  This table can be updated either before or after a parent order begins working and will influence the limit(s) used when working child orders.  Updates to this table do not constitute cancel/replace operations for the parent order."})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"4095"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"SpdrParentOrder",children:"SpdrParentOrder"})}),(0,d.jsxs)(r.td,{children:["SpdrParentOrder records are visible in SRSE immediately after receipt.  Parent orders received via FIX, SRSE or SpiderRock GUI tools, or 3rd party vendor systems are all visible in this table.",(0,d.jsx)("br",{}),(0,d.jsx)("br",{}),"Parent orders can be for stocks, futures, options or spreads.  And they can be one-sided (agency) or two-sided (facilitation) orders.  Parent order records should be immutable and not update.",(0,d.jsx)("br",{}),(0,d.jsx)("br",{}),"SpdrParentOrder records are published to the SpiderRock elatic cluster on arrival."]})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"4100"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"SpdrParentReport",children:"SpdrParentReport"})}),(0,d.jsxs)(r.td,{children:["SpdrParentReport records contain the current state of a parent order and update as/when the order state changes.",(0,d.jsx)("br",{}),(0,d.jsx)("br",{}),"SpdrParentReport records are published to the SpiderRock elastic cluster when they reach a terminal state (closed, rejected, filled, etc.)"]})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"4105"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"SpdrReleaseWaitTrigger",children:"SpdrReleaseWaitTrigger"})}),(0,d.jsx)(r.td,{children:"SpdrReleaseWaitTrigger records are used to trigger the release of parent orders submitted with startType=WaitTrigger.  Note that all parent orders in a risk group will be triggered together."})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"1467"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"SpdrRiskGroupCancel",children:"SpdrRiskGroupCancel"})}),(0,d.jsx)(r.td,{children:"Records inserted into this table causes the corresponding parent broker to cancel the current underlying parent order if active and cancellable."})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"4110"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"SpdrRouteCancel",children:"SpdrRouteCancel"})}),(0,d.jsx)(r.td,{children:"Records inserted into this table will result in the cancellation of all active/cancelable orders for the indicated SpiderRock routing code"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"4115"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"SpdrSecKeyCancel",children:"SpdrSecKeyCancel"})}),(0,d.jsx)(r.td,{children:"Records inserted into this table causes the corresponding parent broker to cancel the current underlying parent order if active and cancellable."})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"4135"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"SpdrStripeTrigger",children:"SpdrStripeTrigger"})}),(0,d.jsx)(r.td,{children:"SpdrStripeTrigger records are used to allocate sweep risk and trigger cross stripe release of parent orders submitted with startType=WaitTrigger.  These records are published by a SR Strategy Server if/when a SpdrReleaseWaitTrigger message is received."})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"4140"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"SpdrUserCancel",children:"SpdrUserCancel"})}),(0,d.jsx)(r.td,{children:"Records inserted into this table cancels all parent orders associated with userName/clientFirm"})]})]})]})}function h(e={}){const{wrapper:r}={...(0,n.R)(),...e.components};return r?(0,d.jsx)(r,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}},28453:(e,r,t)=>{t.d(r,{R:()=>a,x:()=>i});var d=t(96540);const n={},s=d.createContext(n);function a(e){const r=d.useContext(s);return d.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),d.createElement(s.Provider,{value:r},e.children)}}}]);