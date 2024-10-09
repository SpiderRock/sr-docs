"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[74460],{7239:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>n,default:()=>h,frontMatter:()=>d,metadata:()=>i,toc:()=>c});var a=r(74848),s=r(28453);const d={sidebar_position:1,title:"5120-srse-gateway"},n=void 0,i={id:"MessageSchemas/Schema/Topics/srse-gateway/srse-gateway",title:"5120-srse-gateway",description:"| # | Message Name | Description |",source:"@site/docs/MessageSchemas/Schema/Topics/5120-srse-gateway/5120-srse-gateway.md",sourceDirName:"MessageSchemas/Schema/Topics/5120-srse-gateway",slug:"/MessageSchemas/Schema/Topics/srse-gateway/",permalink:"/docs/next/MessageSchemas/Schema/Topics/srse-gateway/",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"5120-srse-gateway"},sidebar:"messageSchemasSidebar",previous:{title:"VolTimeCalculator",permalink:"/docs/next/MessageSchemas/Schema/Topics/srse-calculators/VolTimeCalculator"},next:{title:"AutoHedgeControlGateway",permalink:"/docs/next/MessageSchemas/Schema/Topics/srse-gateway/AutoHedgeControlGateway"}},o={},c=[];function l(e){const t={a:"a",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"#"}),(0,a.jsx)(t.th,{children:"Message Name"}),(0,a.jsx)(t.th,{children:"Description"})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"5130"}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.a,{href:"AutoHedgeControlGateway",children:"AutoHedgeControlGateway"})}),(0,a.jsx)(t.td,{children:"SpdrAutoHedgeControl contains autohedge / risk group control details.  Can be uploaded from SRSE, created from ExecutionEngines, or created by SR tools."})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"5135"}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.a,{href:"AwayStockLocateGateway",children:"AwayStockLocateGateway"})}),(0,a.jsx)(t.td,{children:"Records inserted into this table represent locates that clients have received away from SpiderRock.  After validation, any away locate inserted into this table is turned into a StockLocateResponse record and appears in the StockLocateResponse table."})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"5140"}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.a,{href:"ExternAggGroupGateway",children:"ExternAggGroupGateway"})}),(0,a.jsx)(t.td,{children:"This table allows clients to enter start-of-day positions, and quantity bot/sld today for each market.  AggGroup is a code issued by SpiderRock to indentify the aggregation group that the reported positions and trades belong to. This will usually be your SpiderRock assigned ClientFirm code unless your firm has more than one aggregation unit.  Note that start-of-day positions can be truncated if the truncation will not affect order marking.  Contact SpiderRock support for details if this is what you intend."})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"5145"}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.a,{href:"FutAwayTktGateway",children:"FutAwayTktGateway"})}),(0,a.jsxs)(t.td,{children:["FutAwayTktGateway inserts are validated and convered to away SpdrParentExecution records and published. If successfully published they will be visible in the SpdrParentExecution table and on SpiderRock GUI tools.",(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),"Replaces are allowed but they are functionally identical to updates in that only the fillPrice and fillQuantity fields are actually changed."]})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"5150"}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.a,{href:"FutOrderGateway",children:"FutOrderGateway"})}),(0,a.jsxs)(t.td,{children:["Records inserted, updated, or replaced into the FutureOrderGateway table are validated and then converted to SpdrParentOrder records and forwarded to the appropriate execution engine for futher processing.  Parent orders can be inserted as either active/ready or in a wait start mode that requires subsequent release.",(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),"See the SpiderRock Execution Engine concept guide for more details."]})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"5155"}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.a,{href:"MLegOrderGateway",children:"MLegOrderGateway"})}),(0,a.jsxs)(t.td,{children:["Records inserted, updated, or replaced into the MLegOrderGateway table are validated and then converted to SpdrParentOrder records and forwarded to the appropriate execution engine for futher processing.  Parent orders can be inserted as either active/ready or in a wait start mode that requires subsequent release.",(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),"See the SpiderRock Execution Engine concept guide for more details."]})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"5160"}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.a,{href:"OptAwayTktGateway",children:"OptAwayTktGateway"})}),(0,a.jsxs)(t.td,{children:["OptAwayTktGateway inserts are validated and convered to away SpdrParentExecution records and published. If successfully published they will be visible in the SpdrParentExecution table and on SpiderRock GUI tools.",(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),"Replaces are allowed but they are functionally identical to updates in that only the fillPrice and fillQuantity fields are actually changed."]})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"5165"}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.a,{href:"OptOrderGateway",children:"OptOrderGateway"})}),(0,a.jsxs)(t.td,{children:["Records inserted, updated, or replaced into the OptionOrderGateway table are validated and then converted to SpdrParentOrder records and forwarded to the appropriate execution engine for futher processing.  Parent orders can be inserted as either active/ready or in a wait start mode that requires subsequent release.",(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),"See the SpiderRock Execution Engine concept guide for more details."]})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"5180"}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.a,{href:"ParentOrderGateway",children:"ParentOrderGateway"})}),(0,a.jsxs)(t.td,{children:["Records inserted, updated, or replaced into the ParentOrderGateway table are validated and then converted to SpdrParentOrder records and forwarded to the appropriate execution engine for futher processing.  Parent orders can be inserted as either active/ready or in a wait start mode that requires subsequent release.",(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),"See the SpiderRock Execution Engine concept guide for more details."]})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"5185"}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.a,{href:"ParentOrderGatewayExt",children:"ParentOrderGatewayExt"})}),(0,a.jsxs)(t.td,{children:["Records inserted, updated, or replaced into the ParentOrderGatewayExt table are validated and then converted to SpdrParentOrder records and forwarded to the appropriate execution engine for futher processing.  Parent orders can be inserted as either active/ready or in a wait start mode that requires subsequent release.",(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),"See the SpiderRock Execution Engine concept guide for more details."]})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"5190"}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.a,{href:"SecDefRequestGateway",children:"SecDefRequestGateway"})}),(0,a.jsx)(t.td,{})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"5220"}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.a,{href:"StkAwayTktGateway",children:"StkAwayTktGateway"})}),(0,a.jsxs)(t.td,{children:["StkAwayTktGateway inserts are validated and convered to away SpdrParentExecution records and published. If successfully published they will be visible in the SpdrParentExecution table and on SpiderRock GUI tools.",(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),"Replaces are allowed but they are functionally identical to updates in that only the fillPrice and fillQuantity fields are actually changed."]})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"5225"}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.a,{href:"StkOrderGateway",children:"StkOrderGateway"})}),(0,a.jsxs)(t.td,{children:["Records inserted, updated, or replaced into the StockOrderGateway table are validated and then converted to SpdrParentOrder records and forwarded to the appropriate execution engine for futher processing.  Parent orders can be inserted as either active/ready or in a wait start mode that requires subsequent release.",(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),"See the SpiderRock Execution Engine concept guide for more details."]})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"5230"}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.a,{href:"StockLocateRequestGateway",children:"StockLocateRequestGateway"})}),(0,a.jsx)(t.td,{children:"Records inserted into this gateway become locate requests and are visible in the StockLocateRequest table."})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"5235"}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.a,{href:"ULinkContextGateway",children:"ULinkContextGateway"})}),(0,a.jsx)(t.td,{})]})]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},28453:(e,t,r)=>{r.d(t,{R:()=>n,x:()=>i});var a=r(96540);const s={},d=a.createContext(s);function n(e){const t=a.useContext(d);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:n(e.components),a.createElement(d.Provider,{value:t},e.children)}}}]);