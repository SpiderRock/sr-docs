"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([["48176"],{2765:function(e,t,r){r.r(t),r.d(t,{default:()=>h,frontMatter:()=>d,metadata:()=>s,assets:()=>c,toc:()=>o,contentTitle:()=>n});var s=JSON.parse('{"id":"MessageSchemas/Schema/MLink Tokens/Internal","title":"Internal","description":"| # | Message Name | Description |","source":"@site/versioned_docs/version-8.5.3.3/MessageSchemas/Schema/MLink Tokens/Internal.md","sourceDirName":"MessageSchemas/Schema/MLink Tokens","slug":"/MessageSchemas/Schema/MLink Tokens/Internal","permalink":"/docs/8.5.3.3/MessageSchemas/Schema/MLink Tokens/Internal","draft":false,"unlisted":false,"tags":[],"version":"8.5.3.3","sidebarPosition":1,"frontMatter":{"sidebar_position":1,"title":"Internal"},"sidebar":"messageSchemasSidebar","previous":{"title":"GlobalDefinition","permalink":"/docs/8.5.3.3/MessageSchemas/Schema/MLink Tokens/GlobalDefinition"},"next":{"title":"MLinkRest","permalink":"/docs/8.5.3.3/MessageSchemas/Schema/MLink Tokens/MLinkRest"}}'),a=r("52676"),i=r("91503");let d={sidebar_position:1,title:"Internal"},n=void 0,c={},o=[];function l(e){let t={a:"a",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"#"}),(0,a.jsx)(t.th,{children:"Message Name"}),(0,a.jsx)(t.th,{children:"Description"})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"5130"}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.a,{href:"../../Topics/srse-gateway/AutoHedgeControlGateway",children:"AutoHedgeControlGateway"})}),(0,a.jsx)(t.td,{children:"SpdrAutoHedgeControl contains autohedge / risk group control details.  Can be uploaded from SRSE, created from ExecutionEngines, or created by SR tools."})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"5135"}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.a,{href:"../../Topics/srse-gateway/AwayStockLocateGateway",children:"AwayStockLocateGateway"})}),(0,a.jsx)(t.td,{children:"Records inserted into this table represent locates that clients have received away from SpiderRock.  After validation, any away locate inserted into this table is turned into a ClientStockLocate record"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"5140"}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.a,{href:"../../Topics/srse-gateway/ExternAggGroupGateway",children:"ExternAggGroupGateway"})}),(0,a.jsx)(t.td,{children:"This table allows clients to enter start-of-day positions, and quantity bot/sld today for each market.  AggGroup is a code issued by SpiderRock to indentify the aggregation group that the reported positions and trades belong to. This will usually be your SpiderRock assigned ClientFirm code unless your firm has more than one aggregation unit.  Note that start-of-day positions can be truncated if the truncation will not affect order marking.  Contact SpiderRock support for details if this is what you intend."})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"5145"}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.a,{href:"../../Topics/srse-gateway/FutAwayTktGateway",children:"FutAwayTktGateway"})}),(0,a.jsxs)(t.td,{children:["FutAwayTktGateway inserts are validated and convered to away SpdrParentExecution records and published. If successfully published they will be visible in the SpdrParentExecution table and on SpiderRock GUI tools.",(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),"Replaces are allowed but they are functionally identical to updates in that only the fillPrice and fillQuantity fields are actually changed."]})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"5150"}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.a,{href:"../../Topics/srse-gateway/FutOrderGateway",children:"FutOrderGateway"})}),(0,a.jsxs)(t.td,{children:["Records inserted, updated, or replaced into the FutureOrderGateway table are validated and then converted to SpdrParentOrder records and forwarded to the appropriate execution engine for futher processing.  Parent orders can be inserted as either active/ready or in a wait start mode that requires subsequent release.",(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),"See the SpiderRock Execution Engine concept guide for more details."]})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"5155"}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.a,{href:"../../Topics/srse-gateway/MLegOrderGateway",children:"MLegOrderGateway"})}),(0,a.jsxs)(t.td,{children:["Records inserted, updated, or replaced into the MLegOrderGateway table are validated and then converted to SpdrParentOrder records and forwarded to the appropriate execution engine for futher processing.  Parent orders can be inserted as either active/ready or in a wait start mode that requires subsequent release.",(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),"See the SpiderRock Execution Engine concept guide for more details."]})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"3355"}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.a,{href:"../../Topics/mlink/MLinkCacheRequest",children:"MLinkCacheRequest"})}),(0,a.jsx)(t.td,{})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"5900"}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.a,{href:"../../Topics/tool-link/NetPulse",children:"NetPulse"})}),(0,a.jsx)(t.td,{})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"5160"}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.a,{href:"../../Topics/srse-gateway/OptAwayTktGateway",children:"OptAwayTktGateway"})}),(0,a.jsxs)(t.td,{children:["OptAwayTktGateway inserts are validated and convered to away SpdrParentExecution records and published. If successfully published they will be visible in the SpdrParentExecution table and on SpiderRock GUI tools.",(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),"Replaces are allowed but they are functionally identical to updates in that only the fillPrice and fillQuantity fields are actually changed."]})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"5165"}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.a,{href:"../../Topics/srse-gateway/OptOrderGateway",children:"OptOrderGateway"})}),(0,a.jsxs)(t.td,{children:["Records inserted, updated, or replaced into the OptionOrderGateway table are validated and then converted to SpdrParentOrder records and forwarded to the appropriate execution engine for futher processing.  Parent orders can be inserted as either active/ready or in a wait start mode that requires subsequent release.",(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),"See the SpiderRock Execution Engine concept guide for more details."]})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"5030"}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.a,{href:"../../Topics/srse-calculators/OptionCalculator",children:"OptionCalculator"})}),(0,a.jsx)(t.td,{children:"This table allows custom option pricing based on either user or SR supplied input values."})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"2765"}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.a,{href:"../../Topics/market-data-options/OptionExchOrder",children:"OptionExchOrder"})}),(0,a.jsx)(t.td,{})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"2770"}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.a,{href:"../../Topics/market-data-options/OptionExchPrint",children:"OptionExchPrint"})}),(0,a.jsx)(t.td,{})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"5035"}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.a,{href:"../../Topics/srse-calculators/OptionImpliedPair",children:"OptionImpliedPair"})}),(0,a.jsx)(t.td,{children:"This table contains current live NBBO prices and implied volatilites as well as greeks and SpiderRock surface volatilities/prices for all call/put pairs in the market."})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"5045"}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.a,{href:"../../Topics/srse-calculators/OptionImpliedVol",children:"OptionImpliedVol"})}),(0,a.jsx)(t.td,{children:"This table contains option implied volatilities computed using fast/accurate calcuation methods while the SELECT is processing.  Note that if you need even faster queries that cover a large number of strikes you may be better off using the OptionImpliedQuoteAdj table as it is pre-computed."})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"5046"}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.a,{href:"../../Topics/srse-calculators/OptionImpliedVolV4",children:"OptionImpliedVolV4"})}),(0,a.jsx)(t.td,{children:"This table contains option implied volatilities computed using fast/accurate calcuation methods while the SELECT is processing.  Note that if you need even faster queries that cover a large number of strikes you may be better off using the OptionImpliedQuoteAdj table as it is pre-computed."})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"2810"}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.a,{href:"../../Topics/market-data-options/OptionPrintMarkup",children:"OptionPrintMarkup"})}),(0,a.jsx)(t.td,{children:"OptionPrintMarkup records contain every option print along with quote, surface details at print time"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"5180"}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.a,{href:"../../Topics/srse-gateway/ParentOrderGateway",children:"ParentOrderGateway"})}),(0,a.jsxs)(t.td,{children:["Records inserted, updated, or replaced into the ParentOrderGateway table are validated and then converted to SpdrParentOrder records and forwarded to the appropriate execution engine for futher processing.  Parent orders can be inserted as either active/ready or in a wait start mode that requires subsequent release.",(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),"See the SpiderRock Execution Engine concept guide for more details."]})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"5185"}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.a,{href:"../../Topics/srse-gateway/ParentOrderGatewayExt",children:"ParentOrderGatewayExt"})}),(0,a.jsxs)(t.td,{children:["Records inserted, updated, or replaced into the ParentOrderGatewayExt table are validated and then converted to SpdrParentOrder records and forwarded to the appropriate execution engine for futher processing.  Parent orders can be inserted as either active/ready or in a wait start mode that requires subsequent release.",(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),"See the SpiderRock Execution Engine concept guide for more details."]})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"5190"}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.a,{href:"../../Topics/srse-gateway/SecDefRequestGateway",children:"SecDefRequestGateway"})}),(0,a.jsx)(t.td,{})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"4000"}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.a,{href:"../../Topics/parent-orders/SpdrFixParentCancel",children:"SpdrFixParentCancel"})}),(0,a.jsx)(t.td,{children:"Records inserted into this table causes the corresponding parent order to be cancelled if it is active and cancellable."})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"4005"}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.a,{href:"../../Topics/parent-orders/SpdrFixParentExecution",children:"SpdrFixParentExecution"})}),(0,a.jsx)(t.td,{})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"4010"}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.a,{href:"../../Topics/parent-orders/SpdrFixParentReject",children:"SpdrFixParentReject"})}),(0,a.jsx)(t.td,{children:"Record indicates that either a SpdrParentOrder (Add or Replace) or FixParentCancel request failed"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"4060"}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.a,{href:"../../Topics/parent-orders/SpdrParentBrkrDetail",children:"SpdrParentBrkrDetail"})}),(0,a.jsx)(t.td,{children:"SpdrParentBrkrDetail records are created/published by SpiderRock Execution Engines. Each record describes the current active detail of a single parent broker."})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"5355"}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.a,{href:"../../Topics/strategy-legger/SpdrStrategyOrderLeggerX",children:"SpdrStrategyOrderLeggerX"})}),(0,a.jsx)(t.td,{})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"5365"}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.a,{href:"../../Topics/strategy-legger/SpdrStrategyReportLegX",children:"SpdrStrategyReportLegX"})}),(0,a.jsx)(t.td,{})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"5360"}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.a,{href:"../../Topics/strategy-legger/SpdrStrategyReportLeggerX",children:"SpdrStrategyReportLeggerX"})}),(0,a.jsx)(t.td,{})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"5375"}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.a,{href:"../../Topics/strategy-legger/SpdrStrategyStateLegX",children:"SpdrStrategyStateLegX"})}),(0,a.jsx)(t.td,{})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"5370"}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.a,{href:"../../Topics/strategy-legger/SpdrStrategyStateLeggerX",children:"SpdrStrategyStateLeggerX"})}),(0,a.jsx)(t.td,{})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"2920"}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.a,{href:"../../Topics/market-data-spreads/SpreadExchPrint",children:"SpreadExchPrint"})}),(0,a.jsx)(t.td,{})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"5220"}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.a,{href:"../../Topics/srse-gateway/StkAwayTktGateway",children:"StkAwayTktGateway"})}),(0,a.jsxs)(t.td,{children:["StkAwayTktGateway inserts are validated and convered to away SpdrParentExecution records and published. If successfully published they will be visible in the SpdrParentExecution table and on SpiderRock GUI tools.",(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),"Replaces are allowed but they are functionally identical to updates in that only the fillPrice and fillQuantity fields are actually changed."]})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"5225"}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.a,{href:"../../Topics/srse-gateway/StkOrderGateway",children:"StkOrderGateway"})}),(0,a.jsxs)(t.td,{children:["Records inserted, updated, or replaced into the StockOrderGateway table are validated and then converted to SpdrParentOrder records and forwarded to the appropriate execution engine for futher processing.  Parent orders can be inserted as either active/ready or in a wait start mode that requires subsequent release.",(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),"See the SpiderRock Execution Engine concept guide for more details."]})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"5230"}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.a,{href:"../../Topics/srse-gateway/StockLocateRequestGateway",children:"StockLocateRequestGateway"})}),(0,a.jsx)(t.td,{children:"Records inserted into this gateway become locate requests and are visible in the StockLocateRequest table."})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"5750"}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.a,{href:"../../Topics/tool-core/ULinkContextEvent",children:"ULinkContextEvent"})}),(0,a.jsx)(t.td,{})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"5235"}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.a,{href:"../../Topics/srse-gateway/ULinkContextGateway",children:"ULinkContextGateway"})}),(0,a.jsx)(t.td,{})]})]})]})}function h(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},91503:function(e,t,r){r.d(t,{Z:function(){return n},a:function(){return d}});var s=r(75271);let a={},i=s.createContext(a);function d(e){let t=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function n(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:d(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);