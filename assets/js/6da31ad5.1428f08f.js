"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[44854],{17866:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>d,metadata:()=>a,toc:()=>o});var n=t(74848),i=t(28453);const d={sidebar_position:2,title:"ClientTrading"},s=void 0,a={id:"Schemas/Schema/MLink Tokens/ClientTrading",title:"ClientTrading",description:"| # | Message Name | Description |",source:"@site/docs/Schemas/Schema/MLink Tokens/ClientTrading.md",sourceDirName:"Schemas/Schema/MLink Tokens",slug:"/Schemas/Schema/MLink Tokens/ClientTrading",permalink:"/docs/Schemas/Schema/MLink Tokens/ClientTrading",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"ClientTrading"},sidebar:"schemaSidebar",previous:{title:"ClientRisk",permalink:"/docs/Schemas/Schema/MLink Tokens/ClientRisk"},next:{title:"EqtExchImbalance",permalink:"/docs/Schemas/Schema/MLink Tokens/EqtExchImbalance"}},c={},o=[];function l(e){const r={a:"a",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"#"}),(0,n.jsx)(r.th,{children:"Message Name"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"2270"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"../Topics/execution-engine/ExternAggGroupReport",children:"ExternAggGroupReport"})}),(0,n.jsx)(r.td,{})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"3985"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"../Topics/parent-orders/SpdrAccntCancel",children:"SpdrAccntCancel"})}),(0,n.jsx)(r.td,{children:"Records inserted into this table will result in the cancellation of all active/cancelable orders for the indicated SpiderRock trading accnt."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"1450"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"../Topics/away-drop/SpdrAwayExecution",children:"SpdrAwayExecution"})}),(0,n.jsx)(r.td,{children:"SpdrAwayExecution records are published by ToolServers, SRSE, and FIX drop recv gateways.  They are consumed by AwayExecutionMarkupServer which, in turn, publishes corresponding SpdrParentExecution records, including M1 and M10 updates."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"3990"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"../Topics/parent-orders/SpdrBrokerCancel",children:"SpdrBrokerCancel"})}),(0,n.jsx)(r.td,{children:"Records inserted into this table causes the corresponding parent broker to cancel the current underlying parent order if active and cancellable."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"4025"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"../Topics/parent-orders/SpdrMLegBrkrEvent",children:"SpdrMLegBrkrEvent"})}),(0,n.jsx)(r.td,{children:"SpdrMLegBrkrEvent records are published when a new or clx/replace parent order arrives causes a broker to beging working and again when a parent order terminates and the underlying broker stops working.  The initial version contains state and market data from just after the initial risk check and first attempt at generating child orders."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"4030"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"../Topics/parent-orders/SpdrMLegBrkrState",children:"SpdrMLegBrkrState"})}),(0,n.jsx)(r.td,{children:"SpdrMLegBrkrState records are published by execution engines and describe the current state of a broker that is managing a SpiderRock parent order.  These records include a description of the active child orders managed by the broker.  Records are updated whenever a child order changes and also at other times but are not completely live and may not always reflect current market data or limit levels for working orders."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"4065"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"../Topics/parent-orders/SpdrParentBrkrEvent",children:"SpdrParentBrkrEvent"})}),(0,n.jsx)(r.td,{children:"SpdrParentBrkrEvent records are published when a new or cxl/replace parent order arrives causes a broker to begin working and again when a parent order terminates and the underlying broker stops working.  The initial version contains state and market data from just after the initial risk check and first attempt at generating child orders."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"4070"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"../Topics/parent-orders/SpdrParentBrkrState",children:"SpdrParentBrkrState"})}),(0,n.jsx)(r.td,{children:"SpdrParentBrkrState records are created/published by SpiderRock Execution Engines. Each record describes the current state of one (or more) parent orders. If a parent order is canceled/replaced then entire chain is represented by a single broker state record."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"4080"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"../Topics/parent-orders/SpdrParentCancel",children:"SpdrParentCancel"})}),(0,n.jsxs)(r.td,{children:["Records inserted into this table causes the corresponding parent order to be cancelled if it is active and cancellable.",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"Either put in a custom datasource or deprecate from SRSE (Natively not allowed to be modified via SRSE)"]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"4085"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"../Topics/parent-orders/SpdrParentExecution",children:"SpdrParentExecution"})}),(0,n.jsx)(r.td,{children:"SpdrParentExecution records are published every time a parent order execution is received.  They also update as additional post execution mark information is available at F+1m and F+10m."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"4090"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"../Topics/parent-orders/SpdrParentLimit",children:"SpdrParentLimit"})}),(0,n.jsx)(r.td,{children:"SpdrParentLimit records are supplied by clients (via SRSE) for use with parent orders having orderLimitType=Aux.  This table can be updated either before or after a parent order begins working and will influence the limit(s) used when working child orders.  Updates to this table do not constitute cancel/replace operations for the parent order."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"4095"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"../Topics/parent-orders/SpdrParentOrder",children:"SpdrParentOrder"})}),(0,n.jsxs)(r.td,{children:["SpdrParentOrder records are visible in SRSE immediately after receipt.  Parent orders received via FIX, SRSE or SpiderRock GUI tools, or 3rd party vendor systems are all visible in this table.",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"Parent orders can be for stocks, futures, options or spreads.  And they can be one-sided (agency) or two-sided (facilitation) orders.  Parent order records should be immutable and not update.",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"SpdrParentOrder records are published to the SpiderRock elatic cluster on arrival."]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"1467"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"../Topics/parent-orders/SpdrRiskGroupCancel",children:"SpdrRiskGroupCancel"})}),(0,n.jsx)(r.td,{children:"Records inserted into this table causes the corresponding parent broker to cancel the current underlying parent order if active and cancellable."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"3480"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"../Topics/mlink-custom/ToolCompositeExecution",children:"ToolCompositeExecution"})}),(0,n.jsx)(r.td,{})]})]})]})}function h(e={}){const{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},28453:(e,r,t)=>{t.d(r,{R:()=>s,x:()=>a});var n=t(96540);const i={},d=n.createContext(i);function s(e){const r=n.useContext(d);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),n.createElement(d.Provider,{value:r},e.children)}}}]);