"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[471],{66322:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>a,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var d=t(74848),n=t(28453);const s={},i=void 0,l={id:"MessageSchemas/Schema/SRSE Products/SRTrade/SRMLegBrkrEvent/SRMLegBrkrEvent",title:"SRMLegBrkrEvent",description:"V8 Message Definiton",source:"@site/docs/MessageSchemas/Schema/SRSE Products/SRTrade/SRMLegBrkrEvent/SRMLegBrkrEvent.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRTrade/SRMLegBrkrEvent",slug:"/MessageSchemas/Schema/SRSE Products/SRTrade/SRMLegBrkrEvent/",permalink:"/docs/next/MessageSchemas/Schema/SRSE Products/SRTrade/SRMLegBrkrEvent/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"messageSchemasSidebar",previous:{title:"SRFixParentReject",permalink:"/docs/next/MessageSchemas/Schema/SRSE Products/SRTrade/SRFixParentReject/"},next:{title:"SRMLegBrkrState",permalink:"/docs/next/MessageSchemas/Schema/SRSE Products/SRTrade/SRMLegBrkrState/"}},a={},c=[{value:"METADATA",id:"metadata",level:3},{value:"Table Definition",id:"table-definition",level:3},{value:"PRIMARY KEY DEFINITION (Unique)",id:"primary-key-definition-unique",level:3},{value:"CREATE TABLE EXAMPLE QUERY",id:"create-table-example-query",level:3},{value:"SELECT TABLE EXAMPLE QUERY",id:"select-table-example-query",level:3},{value:"Doc Columns Query",id:"doc-columns-query",level:3}];function o(e){const r={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(r.p,{children:(0,d.jsx)(r.a,{href:"../../../Topics/parent-orders/SpdrMLegBrkrEvent",children:"V8 Message Definiton"})}),"\n",(0,d.jsx)(r.p,{children:"SpdrMLegBrkrEvent records are published when a new or clx/replace parent order arrives causes a broker to beging working and again when a parent order terminates and the underlying broker stops working.  The initial version contains state and market data from just after the initial risk check and first attempt at generating child orders."}),"\n",(0,d.jsx)(r.h3,{id:"metadata",children:"METADATA"}),"\n",(0,d.jsxs)(r.table,{children:[(0,d.jsx)(r.thead,{children:(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.th,{children:"Attribute"}),(0,d.jsx)(r.th,{children:"Value"})]})}),(0,d.jsxs)(r.tbody,{children:[(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"Topic"}),(0,d.jsx)(r.td,{children:"3985-parent-orders"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"MLink Token"}),(0,d.jsx)(r.td,{children:"ClientTrading"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"Product"}),(0,d.jsx)(r.td,{children:"SRTrade"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"accessType"}),(0,d.jsx)(r.td,{children:"SELECT"})]})]})]}),"\n",(0,d.jsx)(r.h3,{id:"table-definition",children:"Table Definition"}),"\n",(0,d.jsxs)(r.table,{children:[(0,d.jsx)(r.thead,{children:(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.th,{children:"Field"}),(0,d.jsx)(r.th,{children:"Type"}),(0,d.jsx)(r.th,{children:"Key"}),(0,d.jsx)(r.th,{children:"Default Value"}),(0,d.jsx)(r.th,{children:"Comment"})]})}),(0,d.jsxs)(r.tbody,{children:[(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"parentNumber"}),(0,d.jsx)(r.td,{children:"CHAR(19)"}),(0,d.jsx)(r.td,{children:"PRI"}),(0,d.jsx)(r.td,{children:"'0000-0000-0000-0000'"}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"recType"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../../Enums/EventRecType",children:"enum - EventRecType"})}),(0,d.jsx)(r.td,{children:"PRI"}),(0,d.jsx)(r.td,{children:"'New'"}),(0,d.jsx)(r.td,{children:"type of record NewReplClose"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"ticker_at"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../../Enums/AssetType",children:"enum - AssetType"})}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"'None'"}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"ticker_ts"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../../Enums/TickerSrc",children:"enum - TickerSrc"})}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"'None'"}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"ticker_tk"}),(0,d.jsx)(r.td,{children:"VARCHAR(12)"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"''"}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"accnt"}),(0,d.jsx)(r.td,{children:"VARCHAR(16)"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"''"}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"spdrSource"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../../Enums/SpdrSource",children:"enum - SpdrSource"})}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"'None'"}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"groupingCode"}),(0,d.jsx)(r.td,{children:"CHAR(19)"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"'0000-0000-0000-0000'"}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"orderSide"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../../Enums/BuySell",children:"enum - BuySell"})}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"'None'"}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"clientFirm"}),(0,d.jsx)(r.td,{children:"VARCHAR(16)"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"''"}),(0,d.jsx)(r.td,{children:"SR client firm code"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"altAccnt"}),(0,d.jsx)(r.td,{children:"VARCHAR(32)"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"''"}),(0,d.jsx)(r.td,{children:"alternate client assigned long account string optional"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"altUserName"}),(0,d.jsx)(r.td,{children:"VARCHAR(24)"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"''"}),(0,d.jsx)(r.td,{children:"alternate client assigned user name optional"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"eventNumber"}),(0,d.jsx)(r.td,{children:"SMALLINT UNSIGNED"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"0"}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"stageType"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../../Enums/SpdrStageType",children:"enum - SpdrStageType"})}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"'None'"}),(0,d.jsx)(r.td,{children:"parent is a staged order ToolVisible"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"stageReview"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../../Enums/StageReview",children:"enum - StageReview"})}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"'None'"}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"baseParentNumber"}),(0,d.jsx)(r.td,{children:"CHAR(19)"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"'0000-0000-0000-0000'"}),(0,d.jsx)(r.td,{children:"SPDR order number initial number in cancelreplace sequence also source parent for dynamically generated orderseg autohedges"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"prevParentNumber"}),(0,d.jsx)(r.td,{children:"BIGINT"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"0"}),(0,d.jsx)(r.td,{children:"SPDR order number order being cancelledreplaced zero if none"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"engineName"}),(0,d.jsx)(r.td,{children:"VARCHAR(32)"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"''"}),(0,d.jsx)(r.td,{children:"server stripe"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"spdrBrokerStatus"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../../Enums/SpdrBrokerStatus",children:"enum - SpdrBrokerStatus"})}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"'None'"}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"spdrOrderStatus"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../../Enums/SpdrOrderStatus",children:"enum - SpdrOrderStatus"})}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"'PendNew'"}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"spdrCloseReason"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../../Enums/SpdrCloseReason",children:"enum - SpdrCloseReason"})}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"'None'"}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"spdrRejectReason"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../../Enums/SpdrRejectReason",children:"enum - SpdrRejectReason"})}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"'None'"}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"spdrComment"}),(0,d.jsx)(r.td,{children:"TINYTEXT"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"''"}),(0,d.jsx)(r.td,{children:"additional detail if parent closed or rejected"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"cumSquareQty"}),(0,d.jsx)(r.td,{children:"INT"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"0"}),(0,d.jsx)(r.td,{children:"cum spread quantity filled all legs received"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"avgSquarePrc"}),(0,d.jsx)(r.td,{children:"DOUBLE"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"0"}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"cumPartialQty"}),(0,d.jsx)(r.td,{children:"INT"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"0"}),(0,d.jsx)(r.td,{children:"cum spread quantity partially filled at least one leg received expected cumFilledQty if all legs square up"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"uBid"}),(0,d.jsx)(r.td,{children:"DOUBLE"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"0"}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"uAsk"}),(0,d.jsx)(r.td,{children:"DOUBLE"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"0"}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"bidPrc"}),(0,d.jsx)(r.td,{children:"FLOAT"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"0"}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"askPrc"}),(0,d.jsx)(r.td,{children:"FLOAT"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"0"}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"bidSize"}),(0,d.jsx)(r.td,{children:"INT"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"0"}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"askSize"}),(0,d.jsx)(r.td,{children:"INT"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"0"}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"openOrderSize"}),(0,d.jsx)(r.td,{children:"INT"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"0"}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"hedgeSecKey_at"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../../Enums/AssetType",children:"enum - AssetType"})}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"'None'"}),(0,d.jsx)(r.td,{children:"autohedge sec key"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"hedgeSecKey_ts"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../../Enums/TickerSrc",children:"enum - TickerSrc"})}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"'None'"}),(0,d.jsx)(r.td,{children:"autohedge sec key"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"hedgeSecKey_tk"}),(0,d.jsx)(r.td,{children:"VARCHAR(12)"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"''"}),(0,d.jsx)(r.td,{children:"autohedge sec key"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"hedgeSecKey_yr"}),(0,d.jsx)(r.td,{children:"SMALLINT UNSIGNED"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"0"}),(0,d.jsx)(r.td,{children:"autohedge sec key"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"hedgeSecKey_mn"}),(0,d.jsx)(r.td,{children:"TINYINT UNSIGNED"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"0"}),(0,d.jsx)(r.td,{children:"autohedge sec key"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"hedgeSecKey_dy"}),(0,d.jsx)(r.td,{children:"TINYINT UNSIGNED"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"0"}),(0,d.jsx)(r.td,{children:"autohedge sec key"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"hedgeSecType"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../../Enums/SpdrKeyType",children:"enum - SpdrKeyType"})}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"'None'"}),(0,d.jsx)(r.td,{children:"autohedge sec type"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"riskLimitSize"}),(0,d.jsx)(r.td,{children:"INT"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"0"}),(0,d.jsx)(r.td,{children:"risk limit size"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"riskLimitDesc"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../../Enums/SpdrRisk",children:"enum - SpdrRisk"})}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"'None'"}),(0,d.jsx)(r.td,{children:"reason for size reduction"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"riskLimitLevel"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../../Enums/SpdrRiskLevel",children:"enum - SpdrRiskLevel"})}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"'None'"}),(0,d.jsx)(r.td,{children:"risk limit level responsible for reduction"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"riskLimitDetail"}),(0,d.jsx)(r.td,{children:"TINYTEXT"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"''"}),(0,d.jsx)(r.td,{children:"risk limit detail"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"limitPrice"}),(0,d.jsx)(r.td,{children:"DOUBLE"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"0"}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"limitErr"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../../Enums/LimitError",children:"enum - LimitError"})}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"'None'"}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"limitErrDesc"}),(0,d.jsx)(r.td,{children:"TINYTEXT"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"''"}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"algoState"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../../Enums/AlgoState",children:"enum - AlgoState"})}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"'None'"}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"algoCounter"}),(0,d.jsx)(r.td,{children:"INT"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"0"}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"makeState"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../../Enums/AlgoState",children:"enum - AlgoState"})}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"'None'"}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"makeCounter"}),(0,d.jsx)(r.td,{children:"INT"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"0"}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"brokerState"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../../Enums/BrokerState",children:"enum - BrokerState"})}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"'None'"}),(0,d.jsx)(r.td,{children:"broker monitor state"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"spdrMktState"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../../Enums/SpdrMarketState",children:"enum - SpdrMarketState"})}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"'None'"}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"childOrderMask"}),(0,d.jsx)(r.td,{children:"INT UNSIGNED"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"0"}),(0,d.jsx)(r.td,{children:"bitmask of all exchange for which a child order was generated"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"numChildOrders"}),(0,d.jsx)(r.td,{children:"SMALLINT UNSIGNED"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"0"}),(0,d.jsx)(r.td,{children:"total number of child orders generated by this parent broker parent number"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"numDayChildOrders"}),(0,d.jsx)(r.td,{children:"SMALLINT UNSIGNED"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"0"}),(0,d.jsx)(r.td,{children:"total number of child orders generated by this parent broker all day base parent number"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"modifiedBy"}),(0,d.jsx)(r.td,{children:"VARCHAR(24)"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"''"}),(0,d.jsx)(r.td,{children:"user who last modified this record"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"modifiedIn"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../../Enums/SysEnvironment",children:"enum - SysEnvironment"})}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"'None'"}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"timestamp"}),(0,d.jsx)(r.td,{children:"DATETIME(6)"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"'1900-01-01 00:00:00.000000'"}),(0,d.jsx)(r.td,{children:"timestamp of last modification"})]})]})]}),"\n",(0,d.jsx)(r.h3,{id:"primary-key-definition-unique",children:"PRIMARY KEY DEFINITION (Unique)"}),"\n",(0,d.jsxs)(r.table,{children:[(0,d.jsx)(r.thead,{children:(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.th,{children:"Field"}),(0,d.jsx)(r.th,{children:"Sequence"})]})}),(0,d.jsxs)(r.tbody,{children:[(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"parentNumber"}),(0,d.jsx)(r.td,{children:"1"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"recType"}),(0,d.jsx)(r.td,{children:"2"})]})]})]}),"\n",(0,d.jsx)(r.h3,{id:"create-table-example-query",children:"CREATE TABLE EXAMPLE QUERY"}),"\n",(0,d.jsx)(r.pre,{children:(0,d.jsx)(r.code,{className:"language-sql",children:"CREATE TABLE `SRTrade`.`MsgSRMLegBrkrEvent` (\n    `parentNumber` CHAR(19) NOT NULL DEFAULT '0000-0000-0000-0000',\n    `recType` ENUM('New','Modify','Replace','Close','Reject') NOT NULL DEFAULT 'New' COMMENT 'type of record [New,Repl,Close]',\n    `ticker_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None',\n    `ticker_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','EUX','ANY','CXE','DXE','NXAM','NXBR','NXLS','NXML','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None',\n    `ticker_tk` VARCHAR(12) NOT NULL DEFAULT '',\n    `accnt` VARCHAR(16) NOT NULL DEFAULT '',\n    `spdrSource` ENUM('None','SpdrTicket','SpdrSingle','SRSE','FIX','HedgeTool','TradeHedge','OpenHedge','AutoHedge','Orphan','RiskManager','OrderManager','ManagedOrder','RFQRespSrvr','Legger','SRSEDrop','FixDrop','TicketDrop','SysTest','RFRResponse','AllocOmni','AllocClient','CertGateway','MLegResponse','LeggerX','DropManager','AutoHedgeSrvr','AuctionStrategySrvr','AllocBlockFace','AllocBlockCust','IceChatGateway','EXS2SRC','MLinkResponse','AutoResponderVD','AutoResponderRC','AutoResponderSN','AutoResponderBX','MLink') NOT NULL DEFAULT 'None',\n    `groupingCode` CHAR(19) NOT NULL DEFAULT '0000-0000-0000-0000',\n    `orderSide` ENUM('None','Buy','Sell') NOT NULL DEFAULT 'None',\n    `clientFirm` VARCHAR(16) NOT NULL DEFAULT '' COMMENT 'SR client firm code',\n    `altAccnt` VARCHAR(32) NOT NULL DEFAULT '' COMMENT 'alternate (client assigned) \"long\" account string (optional)',\n    `altUserName` VARCHAR(24) NOT NULL DEFAULT '' COMMENT 'alternate (client assigned) user name (optional)',\n    `eventNumber` SMALLINT UNSIGNED NOT NULL DEFAULT 0,\n    `stageType` ENUM('None','ModifyAny','ModifyAlgo') NOT NULL DEFAULT 'None' COMMENT 'parent is a staged order [ToolVisible]',\n    `stageReview` ENUM('None','Strict','Normal') NOT NULL DEFAULT 'None',\n    `baseParentNumber` CHAR(19) NOT NULL DEFAULT '0000-0000-0000-0000' COMMENT 'SPDR order number (initial number in cancel/replace sequence) (also, source parent for dynamically generated orders;eg auto-hedges)',\n    `prevParentNumber` BIGINT NOT NULL DEFAULT 0 COMMENT 'SPDR order number (order being cancelled/replaced) (zero if none)',\n    `engineName` VARCHAR(32) NOT NULL DEFAULT '' COMMENT 'server stripe',\n    `spdrBrokerStatus` ENUM('None','Updating','Active','Closing','Closed','Rejected','ActiveHold') NOT NULL DEFAULT 'None',\n    `spdrOrderStatus` ENUM('PendNew','New','PendClose','Closed','Rejected','SendReject') NOT NULL DEFAULT 'PendNew',\n    `spdrCloseReason` ENUM('None','Cancelled','Filled','Replaced','Expired','Limit','System','LegReject','DoneForDay','IOCExpire','UserCxl','NoProgress','TooManyRej','ReplReject','AlgoClose','Restart','InvldParentLimit','FilledRepl','ForceClose','DmaReject','DmaExpire','DmaBrkrCxl','ReviewReject','MarketState','AlgoReject','ReviewTimeout','ChildReject','ChildCancel','ReviewClose','UPrcRange','LegBrkrClosed','ExchRisk','CrossFailed') NOT NULL DEFAULT 'None',\n    `spdrRejectReason` ENUM('None','AccntHold','UnknwnOpt','UnknwnStk','Expired','BadSize','BadOrdNum','DupOrdNum','BadVolPx','BadLmtType','BadMktPrc','BadLimit','SysReject','TestOrder','CustType','NoFirmPos','BadCent','NoSurface','UnknwnAcc','UnknwnRoot','OrdSpacing','BadOptMkt','BadStkMkt','SendFailed','BadExpose','BadPrem','NoOptLeg','Min2Leg','Max6Leg','BadStkSz','BadRatio','BadLegID','DupLegID','MixedRoots','OffMkt','CentVol','CentLeg','CentRng','CentSAtm','CentSpln','CentErr','NoRiskGrp','BadDDivs','NoPricer','CalcErr','TwapLate','TwapTime','NoAcctMap','UserUnk','UserHold','GTCHold','SysException','StkCrossed','BadOrdType','BadSSaleFlag','NoBorrow','NoFacilitateAccnt','UnknwnFut','MktNotOpen','NoRoutes','NoLocate','SSaleRstr','NoLegs','BadSide','BadLegKeyType','UnknwnRefStk','BadRefMktPrc','UnknwnRefFut','UnknwnRefAtm','BadRefVe','BadProdDef','StkOddLot','RiskException','MaxParticipation','MarExemptHold','NoMarRec','NullCounter','StkQty','FutQty','OptQty','StkDDelta','FutDDelta','OptDDelta','StkClsOnly','StkDisabled','FutClsOnly','FutDisabled','OptClsOnly','OptDisabled','OrderMargin','AccMargin','DayMargin','OpenExpose','DayLnDDelta','DayShDDelta','DayAbsDDelta','DayLnWtVega','DayShWtVega','DayAbsWtVega','DayLnNValue','DayShNValue','DayAbsNValue','AccFrozen','ConfigErr','NoFMFuture','NoLinkage','NoProdDef','BadRiskID','InvldAutoH','LegChange','CxlSpacing','BadHedgeInst','TooLateToReduce','PendCxlRepl','InvldCxlRepl','InvldCxl','DmaReject','NoUPrc','TwapSteps','UnknwnFirm','NoSSaleFlg','AccntNotMM','BadSource','VwapLate','AlreadyFilled','UnknownSecKey','InvldGTD','NotSupported','CutoffTime','ParentShape','NoFaceSide','NoFaceLegs','AuctionSize','InvldClFirm','BadLegBrkr','NoLegBrkr','StkLegNotAllowed','BadLeadSide','UnknwnRefUnd','ExecEngineType','NoExchAvail','SelfTrade','PointValueErr','PointCurrencyErr','StkCollar','FutCollar','OptCollar','LmtCollar','RefUPrcErr','InvldUser','InvldAccnt','UnknownCrossId','WidUMkt','UMktCls','UPrcRange','RiskCollarRng') NOT NULL DEFAULT 'None',\n    `spdrComment` TINYTEXT NOT NULL DEFAULT '' COMMENT 'additional detail if parent closed or rejected',\n    `cumSquareQty` INT NOT NULL DEFAULT 0 COMMENT 'cum spread quantity filled (all legs received)',\n    `avgSquarePrc` DOUBLE NOT NULL DEFAULT 0,\n    `cumPartialQty` INT NOT NULL DEFAULT 0 COMMENT 'cum spread quantity partially filled (at least one leg received) [expected cumFilledQty if all legs square up]',\n    `uBid` DOUBLE NOT NULL DEFAULT 0,\n    `uAsk` DOUBLE NOT NULL DEFAULT 0,\n    `bidPrc` FLOAT NOT NULL DEFAULT 0,\n    `askPrc` FLOAT NOT NULL DEFAULT 0,\n    `bidSize` INT NOT NULL DEFAULT 0,\n    `askSize` INT NOT NULL DEFAULT 0,\n    `openOrderSize` INT NOT NULL DEFAULT 0,\n    `hedgeSecKey_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None' COMMENT 'auto-hedge sec key',\n    `hedgeSecKey_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','EUX','ANY','CXE','DXE','NXAM','NXBR','NXLS','NXML','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None' COMMENT 'auto-hedge sec key',\n    `hedgeSecKey_tk` VARCHAR(12) NOT NULL DEFAULT '' COMMENT 'auto-hedge sec key',\n    `hedgeSecKey_yr` SMALLINT UNSIGNED NOT NULL DEFAULT 0 COMMENT 'auto-hedge sec key',\n    `hedgeSecKey_mn` TINYINT UNSIGNED NOT NULL DEFAULT 0 COMMENT 'auto-hedge sec key',\n    `hedgeSecKey_dy` TINYINT UNSIGNED NOT NULL DEFAULT 0 COMMENT 'auto-hedge sec key',\n    `hedgeSecType` ENUM('None','Stock','Future','Option','MLeg') NOT NULL DEFAULT 'None' COMMENT 'auto-hedge sec type',\n    `riskLimitSize` INT NOT NULL DEFAULT 0 COMMENT 'risk limit size',\n    `riskLimitDesc` ENUM('None','NullCounter','StkClsOnly','StkDisabled','FutClsOnly','FutDisabled','OptClsOnly','OptDisabled','OrderMargin','AccMargin','DayMargin','OpenExpose','DayLnDDelta','DayShDDelta','DayAbsDDelta','DayLnWtVe','DayShWtVe','DayAbsWtVe','DayLnNValue','DayShNValue','DayAbsNValue','StkImpact','FutImpact','OptImpact','NullMRC','NullSRC','DDeltaLn','DDeltaSh','DDeltaAbs','WtVegaLn','WtVegaSh','WtVegaAbs','NValueLn','NValueSh','NValueAbs','CtrlDisable','AccEmaDdLn','AccEmaDdSh','AccEmaWvLn','AccEmaWvSh','SymEmaDdLn','SymEmaDdSh','SymEmaWvLn','SymEmaWvSh','ExpDDeltaLn','ExpDDeltaSh','ExpWtVegaLn','ExpWtVegaSh','ExpRm6Ln','ExpRm6Sh','SymDDeltaLn','SymDDeltaSh','SymVegaLn','SymVegaSh','SymWtVegaLn','SymWtVegaSh','SymRm7Ln','SymRm7Sh','GrpDdLn','GrpDdSh','GrpOptQtyLn','GrpOptQtySh','GrpOptQtyAbs','GrpVegaLn','GrpVegaSh','GrpVegaAbs','GrpRm1Ln','GrpRm1Sh','GrpRm1Abs','GrpRm2Ln','GrpRm2Sh','GrpRm3Ln','GrpRm3Sh','GrpRm4Ln','GrpRm4Sh','GrpRm5Ln','GrpRm5Sh','UDn50','UUp50','UDn15','UUp15','OrderSize','SysErr','StkErr','FutErr','OptErr','SSaleErr','SSaleRstr','StkSellLmt','Locate','StkRstct','SizeCap','ZeroCross','PreOpnQ','TrgWait','WaitStart','WaitTrigger','LegStep','TwapStep','MktNotReady','MaxRisk','NoStkBrw','BadMkt','BadLmt','NoAltOrdId','InvldBrkr','MaxChildOrders','MktHalted','UPrcErr','MinUBid','MaxUAsk','PreStart','ClntRteDn','ActiveSize','MktClosed','NoDDeltaMult','InvldDelta','RiskCollarRng','DayFutCnBot','DayFutCnSld','DayFutCnAbs','AccFutCnAbs') NOT NULL DEFAULT 'None' COMMENT 'reason for size reduction',\n    `riskLimitLevel` ENUM('None','MarExsOnSponsLvl','MarExsOnSponsTkLvl','MarExsOnCoreLvl','MarExsOnCoreTkLvl','MarSponsOnCoreLvl','MarSponsOnCoreTkLvl','MarCoreOnCoreLvl','MarCoreOnCoreTkLvl','MarCoreOnSubLvl','MarCoreOnSubTkLvl','MarCoreOnAccntLvl','MarCoreOnAccntTkLvl','MarSubOnAccntLvl','MarSubOnAccntTkLvl','MarCoreOnCustomLvl','MarCoreOnCustomTkLvl','MarSubOnCustomLvl','MarSubOnCustomTkLvl','UserLvl','UserTkLvl','AccntLvl','AccntTkLvl','CFirmLvl','CFirmTkLvl','RiskGroup','HardLvl','SoftLvl','GblTkLvl') NOT NULL DEFAULT 'None' COMMENT 'risk limit level responsible for reduction',\n    `riskLimitDetail` TINYTEXT NOT NULL DEFAULT '' COMMENT 'risk limit detail',\n    `limitPrice` DOUBLE NOT NULL DEFAULT 0,\n    `limitErr` ENUM('None','LmtPrcRng','NoStkNbbo','LowStkNbbo','WideStkNbbo','CrossStkNbbo','VolCalcErr','RefUPrcErr','RefDeltaRng','dUPrcRng','BadLmtType','LmtPrcErr','BadCent','CentVolLmt','BadSurf','CentPrcLmt','NoOptNbbo','WideOptNbbo','dYrsRng','BadRefDelta','BadStkNbbo','InvldMkt','BadVolLmt','CrossOptNbbo','NoFutNbbo','LowFutNbbo','WideFutNbbo','CrossFutNbbo','InvldRefMkt','TiedRtnRng','InvldAdjType','ProdDefErr','PrcBandViol','SysErr','NoQteProb','ProbRng','LmtClass','NoAlphaLvl','SurfErr','ProbErr','BadMult','NoUPrc','BadAlphaLvl','LegLimitErr','AuxLimit','NoFutMktSz','FutMktNotOpn','StaleProb','NoStkObj','NoFutObj','NoOptObj','dOpxGaRng','FadeProb','SurfNoTrd','SurfAge','SurfMktSess','SurfVolRng','SurfPrc','NoSurface','SurfLowCCnt','SurfLowPCnt','SurfFitPrcErr','SurfBidAskMiss','SurfLowCounter','SurfDefaultSkew','SurfSessionMiss','SurfBaseErr','SurfSwitchDelay','SurfWideMktV','SurfWideMktP','SurfUWidthEma','SurfCCntEma','SurfPCntEma','SurfVWidthEma','SurfPWidthEma','SurfWideUMkt','LowOptPrc','LegURng','WideMarket','dOpxThRng','NA','InvldMktWidth','Except','BadProbRecord','InterpErr','SurfImprErr','JoinImprErr','JoinItrpErr','JoinFadeErr','NoLimit') NOT NULL DEFAULT 'None',\n    `limitErrDesc` TINYTEXT NOT NULL DEFAULT '',\n    `algoState` ENUM('None','Posting','PendPost','OffMkt','BadFirmType','NoExchSet','BadOrder','NoPostSize','MaxActive','ActWait','SendHold','LmtErr','LmtRng','LmtPx','PendAct','MaxSize','OddLot','IWait','Quiet','Fade','InVld','MaxPSz','MaxOrd','MaxPxLv','MaxPec1','MaxPec2','MaxPec3','TryPxLvl1','TryPxLvl2','TryPxLvl3','DonePxLvl1','DonePxLvl2','DonePxLvl3','SendPxLvl1','SendPxLvl2','SendPxLvl3','NoExchQte','CrtErr','SizeWait','NbboHold','ExchHold','CxlRpl','SndErr','OldMdl','ExchRte','PrcHold','ModelErr','LowProb','PostWith','PostBhnd','NoModel','NoOptQte','NoStkQte','RiskHold','SurfHold','NoFutQte','NoStkPrt','PostClr','NoQte','PHold','StkEnv','OptEnv','FutEnv','TryExch','CkSend','PredMiss','SysEnv','NoExchAvail','PostWide','ZeroLmt','LockSkip','ProbLmt','PrcLmt','NoActSz','CkAdd','Locked','PendCxl','NewWait','EnterLimit','EnterPost','EnterFlow','EnterMake','EnterSeeker','EnterMatrix','EnterLegger','SendOK','SendFail','Except','Filled','TrySend','BadMkt','SysError','MktDataErr','TickSizeErr','NullParent','NoUPrc','TryTake','NoProb','SendThrtl','ProbErr','PendClear','MaxExCnt','MaxExpose','NoExDest','ReachDelay','ReachWait','ClearWait','CxlWait','LeavesErr','FeeWait','ActMaker','WthFade','SyncHold','AuctionDone','BadUDefKey','UDefReject','PendUDef','ExchRej','TrySendSprd','Working','RejDelay','NoStepSz','UpdtLegBrkr','LegNewWait','LegNoChng','LegBadMkt','LegImprvDelay','LegUpdtLmt','LegUpdtErr','NoExchList','PendTake','LeggerDone','MaxChildren','RiskCxlThrtl','FlashWait','NoImpRm','RollVlm','MoveVlm','AccelTake','NoMassQte','MktNotOpen','CreateSprd','InvldExch','RFQTimeout','TrySendRFQ','EnterResponder','CreateErr','LockFail','NoRoute','UnkCrossId','SelfTrade','ImpactHold','LegWait','TwapWait','InvalidSpread','PegHold','OffPeg','ChildCxlHold','CheckBrkr','FaceDone','CtrlSize','FacePromote','MatrixDone','TakeVlmHold','NoExchRoute','ExchNoMake','ExchWrking','ExchSingle','ExchMakeHold','ExchBrkrSkip','ExchNoQte','ExchMaxFee','ExchOffMkt','ExchNoImprv','FlashInitErr','FlashCalcErr','MarketClosed','ExchActOrd','ExchMaxFeeP','ExchNoRte','TakeFail','BestPxLmt','PennyProtected','WaitSquare','NotActive','RteOpnLmt','NoTiedMaker','WaitTrigger','CrossPending','NoResponders','SendThrtlHiLat','SendThrtlNewWin','SendThrtlRteQGap','SendThrtlRteQSz','SendThrtlRteQAge','ExRiskMgmt','RouteDayMax','ZeroChildSize','ExchTakeSkip','ExchNoSzSkip','ExchNoQteSkip','ExchNullRte','ExchRteFail','CxlCntWait','TryGetRoutes','GetMakePrice','MktPreOpen','MktClosed','MktHalted','PendCross','PendSweep','CrossMkt','Sweeping','SweepMiss','NoCrossSize','NoFace','ConfigErr','NExchOffMkt','CrossClear','LiqReqPend','CxlThrottle','RouteSafeMode','Crossing','CrossComplete','CrossExpired') NOT NULL DEFAULT 'None',\n    `algoCounter` INT NOT NULL DEFAULT 0,\n    `makeState` ENUM('None','Posting','PendPost','OffMkt','BadFirmType','NoExchSet','BadOrder','NoPostSize','MaxActive','ActWait','SendHold','LmtErr','LmtRng','LmtPx','PendAct','MaxSize','OddLot','IWait','Quiet','Fade','InVld','MaxPSz','MaxOrd','MaxPxLv','MaxPec1','MaxPec2','MaxPec3','TryPxLvl1','TryPxLvl2','TryPxLvl3','DonePxLvl1','DonePxLvl2','DonePxLvl3','SendPxLvl1','SendPxLvl2','SendPxLvl3','NoExchQte','CrtErr','SizeWait','NbboHold','ExchHold','CxlRpl','SndErr','OldMdl','ExchRte','PrcHold','ModelErr','LowProb','PostWith','PostBhnd','NoModel','NoOptQte','NoStkQte','RiskHold','SurfHold','NoFutQte','NoStkPrt','PostClr','NoQte','PHold','StkEnv','OptEnv','FutEnv','TryExch','CkSend','PredMiss','SysEnv','NoExchAvail','PostWide','ZeroLmt','LockSkip','ProbLmt','PrcLmt','NoActSz','CkAdd','Locked','PendCxl','NewWait','EnterLimit','EnterPost','EnterFlow','EnterMake','EnterSeeker','EnterMatrix','EnterLegger','SendOK','SendFail','Except','Filled','TrySend','BadMkt','SysError','MktDataErr','TickSizeErr','NullParent','NoUPrc','TryTake','NoProb','SendThrtl','ProbErr','PendClear','MaxExCnt','MaxExpose','NoExDest','ReachDelay','ReachWait','ClearWait','CxlWait','LeavesErr','FeeWait','ActMaker','WthFade','SyncHold','AuctionDone','BadUDefKey','UDefReject','PendUDef','ExchRej','TrySendSprd','Working','RejDelay','NoStepSz','UpdtLegBrkr','LegNewWait','LegNoChng','LegBadMkt','LegImprvDelay','LegUpdtLmt','LegUpdtErr','NoExchList','PendTake','LeggerDone','MaxChildren','RiskCxlThrtl','FlashWait','NoImpRm','RollVlm','MoveVlm','AccelTake','NoMassQte','MktNotOpen','CreateSprd','InvldExch','RFQTimeout','TrySendRFQ','EnterResponder','CreateErr','LockFail','NoRoute','UnkCrossId','SelfTrade','ImpactHold','LegWait','TwapWait','InvalidSpread','PegHold','OffPeg','ChildCxlHold','CheckBrkr','FaceDone','CtrlSize','FacePromote','MatrixDone','TakeVlmHold','NoExchRoute','ExchNoMake','ExchWrking','ExchSingle','ExchMakeHold','ExchBrkrSkip','ExchNoQte','ExchMaxFee','ExchOffMkt','ExchNoImprv','FlashInitErr','FlashCalcErr','MarketClosed','ExchActOrd','ExchMaxFeeP','ExchNoRte','TakeFail','BestPxLmt','PennyProtected','WaitSquare','NotActive','RteOpnLmt','NoTiedMaker','WaitTrigger','CrossPending','NoResponders','SendThrtlHiLat','SendThrtlNewWin','SendThrtlRteQGap','SendThrtlRteQSz','SendThrtlRteQAge','ExRiskMgmt','RouteDayMax','ZeroChildSize','ExchTakeSkip','ExchNoSzSkip','ExchNoQteSkip','ExchNullRte','ExchRteFail','CxlCntWait','TryGetRoutes','GetMakePrice','MktPreOpen','MktClosed','MktHalted','PendCross','PendSweep','CrossMkt','Sweeping','SweepMiss','NoCrossSize','NoFace','ConfigErr','NExchOffMkt','CrossClear','LiqReqPend','CxlThrottle','RouteSafeMode','Crossing','CrossComplete','CrossExpired') NOT NULL DEFAULT 'None',\n    `makeCounter` INT NOT NULL DEFAULT 0,\n    `brokerState` ENUM('None','Start','MarNotEnabled','CloseRequest','WaitTrigger','ChkBrkrFail','NotValid','StepChk','ResetOff','ResetOn','ResetActive','TwapChkWait','TwapChk','VwapChk','VwapVlmFail','CleanupBrkr','AlgoNormal','StkClosed','StkHalted','StkNotOpn','FutClosed','FutHalted','FutNotOpn','TryCxlChildrenCont','BrkrPendNew','BrkrPendClose','BrkrPreOpnQ','BrkrPendRpl','BrkrWaitTrig','TryCxlChildrenTerm','PendChildCxl','Done','BrkrClosing','BrkrClosed','BrkrRejected','MktHalted','LimitErr','RiskHold','SecTypeErr','MktDataErr','LmtErr','StkNotRdy','MinUPrcLmt','MaxUPrcLmt','InvldSysEnv','InvldRunStatus','InvldEngineType','MarketClosed','GoodTillDttmReached','TestExpired','AutoHedgeExpired','EngineClosed','EngPreOpn','OutsideMktDay','OutsideMktDay2','MaxChildRejects','IOCExpired','ProgressTimeout','NoStreetFixSession','StreetFixNotLoggedIn','StreetFixTimeout','HedgeHold','NewParent','AddUpdate','ClearAction','UpdateLegLimit','Exception','AlgoWorking','ReviewReject','ReviewPending','ReviewTimeout','PendTrigger','PendReview','PendCxlRpl','Suspended','LeggerWait','NoStkMkt','CkIncrProgress','TriggerHold','SwitchMOC','HoldMOC','VwapStepWait','MaxChildOrders','ActiveHold') NOT NULL DEFAULT 'None' COMMENT 'broker monitor state',\n    `spdrMktState` ENUM('None','PreOpen','Open','Closed','Halted','EngNotOpen','Exception') NOT NULL DEFAULT 'None',\n    `childOrderMask` INT UNSIGNED NOT NULL DEFAULT 0 COMMENT 'bit-mask of all exchange for which a child order was generated',\n    `numChildOrders` SMALLINT UNSIGNED NOT NULL DEFAULT 0 COMMENT 'total number of child orders generated by this parent broker (parent number)',\n    `numDayChildOrders` SMALLINT UNSIGNED NOT NULL DEFAULT 0 COMMENT 'total number of child orders generated by this parent broker (all day; base parent number)',\n    `modifiedBy` VARCHAR(24) NOT NULL DEFAULT '' COMMENT 'user who last modified this record',\n    `modifiedIn` ENUM('None','Neptune','Pluto','V7_Stable','V7_Latest','Saturn','Venus','Mars','SysTest','V7_Current') NOT NULL DEFAULT 'None',\n    `timestamp` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000' COMMENT 'timestamp of last modification',\n    CONSTRAINT nonnegative_parentNumber CHECK(ASCII(parentNumber) < 56),\n    CONSTRAINT nonnegative_groupingCode CHECK(ASCII(groupingCode) < 56),\n    CONSTRAINT nonnegative_baseParentNumber CHECK(ASCII(baseParentNumber) < 56),\n    PRIMARY KEY USING HASH (`parentNumber`,`recType`)\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='SpdrMLegBrkrEvent records are published when a new or clx/replace parent order arrives causes a broker to beging working and again when a parent order terminates and the underlying broker stops working.  The initial version contains state and market data from just after the initial risk check and first attempt at generating child orders.';\n\n"})}),"\n",(0,d.jsx)(r.h3,{id:"select-table-example-query",children:"SELECT TABLE EXAMPLE QUERY"}),"\n",(0,d.jsx)(r.pre,{children:(0,d.jsx)(r.code,{className:"language-sql",children:"SELECT\n    `parentNumber`,\n    `recType`,\n    `ticker_at`,\n    `ticker_ts`,\n    `ticker_tk`,\n    `accnt`,\n    `spdrSource`,\n    `groupingCode`,\n    `orderSide`,\n    `clientFirm`,\n    `altAccnt`,\n    `altUserName`,\n    `eventNumber`,\n    `stageType`,\n    `stageReview`,\n    `baseParentNumber`,\n    `prevParentNumber`,\n    `engineName`,\n    `spdrBrokerStatus`,\n    `spdrOrderStatus`,\n    `spdrCloseReason`,\n    `spdrRejectReason`,\n    `spdrComment`,\n    `cumSquareQty`,\n    `avgSquarePrc`,\n    `cumPartialQty`,\n    `uBid`,\n    `uAsk`,\n    `bidPrc`,\n    `askPrc`,\n    `bidSize`,\n    `askSize`,\n    `openOrderSize`,\n    `hedgeSecKey_at`,\n    `hedgeSecKey_ts`,\n    `hedgeSecKey_tk`,\n    `hedgeSecKey_yr`,\n    `hedgeSecKey_mn`,\n    `hedgeSecKey_dy`,\n    `hedgeSecType`,\n    `riskLimitSize`,\n    `riskLimitDesc`,\n    `riskLimitLevel`,\n    `riskLimitDetail`,\n    `limitPrice`,\n    `limitErr`,\n    `limitErrDesc`,\n    `algoState`,\n    `algoCounter`,\n    `makeState`,\n    `makeCounter`,\n    `brokerState`,\n    `spdrMktState`,\n    `childOrderMask`,\n    `numChildOrders`,\n    `numDayChildOrders`,\n    `timestamp`\nFROM `SRTrade`.`MsgSRMLegBrkrEvent`\nWHERE \n    /* Replace with a CHAR(19) */\n    `parentNumber` = 'Example_parentNumber'\n  AND\n    /* Replace with a ENUM('New','Modify','Replace','Close','Reject') */ \n    `recType` = 'New';\n"})}),"\n",(0,d.jsx)(r.h3,{id:"doc-columns-query",children:"Doc Columns Query"}),"\n",(0,d.jsx)(r.pre,{children:(0,d.jsx)(r.code,{className:"language-sql",children:"SELECT * FROM SRTrade.doccolumns WHERE TABLE_NAME='SRMLegBrkrEvent' ORDER BY ordinal_position ASC;\n"})})]})}function h(e={}){const{wrapper:r}={...(0,n.R)(),...e.components};return r?(0,d.jsx)(r,{...e,children:(0,d.jsx)(o,{...e})}):o(e)}},28453:(e,r,t)=>{t.d(r,{R:()=>i,x:()=>l});var d=t(96540);const n={},s=d.createContext(n);function i(e){const r=d.useContext(s);return d.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),d.createElement(s.Provider,{value:r},e.children)}}}]);