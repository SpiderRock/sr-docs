"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[41975],{73712:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>a});var d=t(74848),n=t(28453);const s={},i=void 0,l={id:"MessageSchemas/Schema/SRSE Products/SRTrade/SRStrategyOrderLeggerX/SRStrategyOrderLeggerX",title:"SRStrategyOrderLeggerX",description:"V8 Message Definiton",source:"@site/docs/MessageSchemas/Schema/SRSE Products/SRTrade/SRStrategyOrderLeggerX/SRStrategyOrderLeggerX.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRTrade/SRStrategyOrderLeggerX",slug:"/MessageSchemas/Schema/SRSE Products/SRTrade/SRStrategyOrderLeggerX/",permalink:"/docs/next/MessageSchemas/Schema/SRSE Products/SRTrade/SRStrategyOrderLeggerX/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"messageSchemasSidebar",previous:{title:"SRSetActiveSize",permalink:"/docs/next/MessageSchemas/Schema/SRSE Products/SRTrade/SRSetActiveSize/"},next:{title:"SRStrategyReportLegX",permalink:"/docs/next/MessageSchemas/Schema/SRSE Products/SRTrade/SRStrategyReportLegX/"}},c={},a=[{value:"METADATA",id:"metadata",level:3},{value:"Table Definition",id:"table-definition",level:3},{value:"PRIMARY KEY DEFINITION (Unique)",id:"primary-key-definition-unique",level:3},{value:"JSON Block (LegsList)",id:"json-block-legslist",level:3},{value:"CREATE TABLE EXAMPLE QUERY",id:"create-table-example-query",level:3},{value:"SELECT TABLE EXAMPLE QUERY",id:"select-table-example-query",level:3},{value:"Doc Columns Query",id:"doc-columns-query",level:3}];function o(e){const r={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(r.p,{children:(0,d.jsx)(r.a,{href:"../../../Topics/strategy-legger/SpdrStrategyOrderLeggerX",children:"V8 Message Definiton"})}),"\n",(0,d.jsx)(r.h3,{id:"metadata",children:"METADATA"}),"\n",(0,d.jsxs)(r.table,{children:[(0,d.jsx)(r.thead,{children:(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.th,{children:"Attribute"}),(0,d.jsx)(r.th,{children:"Value"})]})}),(0,d.jsxs)(r.tbody,{children:[(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"Topic"}),(0,d.jsx)(r.td,{children:"5355-strategy-legger"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"MLink Token"}),(0,d.jsx)(r.td,{children:"Internal"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"Product"}),(0,d.jsx)(r.td,{children:"SRTrade"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"accessType"}),(0,d.jsx)(r.td,{children:"SELECT"})]})]})]}),"\n",(0,d.jsx)(r.h3,{id:"table-definition",children:"Table Definition"}),"\n",(0,d.jsxs)(r.table,{children:[(0,d.jsx)(r.thead,{children:(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.th,{children:"Field"}),(0,d.jsx)(r.th,{children:"Type"}),(0,d.jsx)(r.th,{children:"Key"}),(0,d.jsx)(r.th,{children:"Default Value"}),(0,d.jsx)(r.th,{children:"Comment"})]})}),(0,d.jsxs)(r.tbody,{children:[(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"strategyNumber"}),(0,d.jsx)(r.td,{children:"BIGINT"}),(0,d.jsx)(r.td,{children:"PRI"}),(0,d.jsx)(r.td,{children:"0"}),(0,d.jsx)(r.td,{children:"strategy order number"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"spdrSource"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../../Enums/SpdrSource",children:"enum - SpdrSource"})}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"'None'"}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"accnt"}),(0,d.jsx)(r.td,{children:"VARCHAR(16)"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"''"}),(0,d.jsx)(r.td,{children:"SR trading account"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"clientFirm"}),(0,d.jsx)(r.td,{children:"VARCHAR(16)"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"''"}),(0,d.jsx)(r.td,{children:"SR client firm"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"strategyStatus"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../../Enums/StrategyStatus",children:"enum - StrategyStatus"})}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"'None'"}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"execBrkrCode"}),(0,d.jsx)(r.td,{children:"VARCHAR(16)"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"''"}),(0,d.jsx)(r.td,{children:"optional override the default execBrkrCode for this order"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"externExDest"}),(0,d.jsx)(r.td,{children:"VARCHAR(16)"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"''"}),(0,d.jsx)(r.td,{children:"routing code for orders directed to an external order router default  null should match FixRoutingTabledestination in SR accnt config"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"externParams"}),(0,d.jsx)(r.td,{children:"TINYTEXT"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"''"}),(0,d.jsx)(r.td,{children:"external algo namesparameters usually just an algo name"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"strategy"}),(0,d.jsx)(r.td,{children:"VARCHAR(36)"}),(0,d.jsx)(r.td,{children:"PRI"}),(0,d.jsx)(r.td,{children:"''"}),(0,d.jsx)(r.td,{children:"clientsupplied strategy string visible on SpiderRock GUI tools and other order reports"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"userName"}),(0,d.jsx)(r.td,{children:"VARCHAR(24)"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"''"}),(0,d.jsx)(r.td,{children:"name of the user entering the order"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"orderSize"}),(0,d.jsx)(r.td,{children:"INT"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"0"}),(0,d.jsx)(r.td,{children:"strategy size number of complete spreads"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"leggerLimit"}),(0,d.jsx)(r.td,{children:"DOUBLE"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"0"}),(0,d.jsx)(r.td,{children:"strategy limit"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"leggerLimitType"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../../Enums/LeggerLimitType",children:"enum - LeggerLimitType"})}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"'None'"}),(0,d.jsx)(r.td,{children:"strategy limit type"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"leggerAlgo"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../../Enums/LeggerAlgo",children:"enum - LeggerAlgo"})}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"'None'"}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"balanceHandling"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../../Enums/ParentBalanceHandling",children:"enum - ParentBalanceHandling"})}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"'None'"}),(0,d.jsx)(r.td,{children:"base parent order balance handling make style algo"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"legExposurePct"}),(0,d.jsx)(r.td,{children:"FLOAT"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"0"}),(0,d.jsx)(r.td,{children:"percentage of legger order than can be exposed on a single leg without completing related legs"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"legCompletionSlippage"}),(0,d.jsx)(r.td,{children:"DOUBLE"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"0"}),(0,d.jsx)(r.td,{children:"maximum leg price slippage to complete an open strategy order"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"marketSession"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../../Enums/MarketSession",children:"enum - MarketSession"})}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"'None'"}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"startDttm"}),(0,d.jsx)(r.td,{children:"DATETIME(6)"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"'1900-01-01 00:00:00.000000'"}),(0,d.jsx)(r.td,{children:"optional parent order start time"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"orderDuration"}),(0,d.jsx)(r.td,{children:"INT"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"0"}),(0,d.jsx)(r.td,{children:"optional number of seconds"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"goodTillDttm"}),(0,d.jsx)(r.td,{children:"DATETIME(6)"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"'1900-01-01 00:00:00.000000'"}),(0,d.jsx)(r.td,{children:"optional default 20990101"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"autoHedge"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../../Enums/AutoHedge",children:"enum - AutoHedge"})}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"'None'"}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"hedgeInstrument"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../../Enums/HedgeInst",children:"enum - HedgeInst"})}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"'None'"}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"hedgeSecKey_at"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../../Enums/AssetType",children:"enum - AssetType"})}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"'None'"}),(0,d.jsx)(r.td,{children:"autohedge instrument can be a TickerKey stock or ExpiryKey future required for Stock and Future"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"hedgeSecKey_ts"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../../Enums/TickerSrc",children:"enum - TickerSrc"})}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"'None'"}),(0,d.jsx)(r.td,{children:"autohedge instrument can be a TickerKey stock or ExpiryKey future required for Stock and Future"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"hedgeSecKey_tk"}),(0,d.jsx)(r.td,{children:"VARCHAR(12)"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"''"}),(0,d.jsx)(r.td,{children:"autohedge instrument can be a TickerKey stock or ExpiryKey future required for Stock and Future"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"hedgeSecKey_yr"}),(0,d.jsx)(r.td,{children:"SMALLINT UNSIGNED"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"0"}),(0,d.jsx)(r.td,{children:"autohedge instrument can be a TickerKey stock or ExpiryKey future required for Stock and Future"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"hedgeSecKey_mn"}),(0,d.jsx)(r.td,{children:"TINYINT UNSIGNED"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"0"}),(0,d.jsx)(r.td,{children:"autohedge instrument can be a TickerKey stock or ExpiryKey future required for Stock and Future"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"hedgeSecKey_dy"}),(0,d.jsx)(r.td,{children:"TINYINT UNSIGNED"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"0"}),(0,d.jsx)(r.td,{children:"autohedge instrument can be a TickerKey stock or ExpiryKey future required for Stock and Future"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"hedgeBetaRatio"}),(0,d.jsx)(r.td,{children:"FLOAT"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"0"}),(0,d.jsx)(r.td,{children:"portion of executed money to autohedge can be 10  Beta for beta hedging 40 to 40"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"hedgeScope"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../../Enums/HedgeScope",children:"enum - HedgeScope"})}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"'None'"}),(0,d.jsx)(r.td,{children:"hedge group scope RiskGroup or Accnt"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"hedgeSession"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../../Enums/MarketSession",children:"enum - MarketSession"})}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"'None'"}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"externHedgeExDest"}),(0,d.jsx)(r.td,{children:"VARCHAR(16)"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"''"}),(0,d.jsx)(r.td,{children:"external broker exDest only used if orderHandlingExtern\t\t\t Should match FixRoutingTabledestination type"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"externHedgeParams"}),(0,d.jsx)(r.td,{children:"TINYTEXT"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"''"}),(0,d.jsx)(r.td,{children:"external algo namesparameters usually just an algo name"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"userData1"}),(0,d.jsx)(r.td,{children:"TINYTEXT"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"''"}),(0,d.jsx)(r.td,{children:"client supplied data field passes through to parent and child executions and reports as well as FIX drops"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"userData2"}),(0,d.jsx)(r.td,{children:"TINYTEXT"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"''"}),(0,d.jsx)(r.td,{children:"client supplied data field passes through to parent and child executions and reports as well as FIX drops"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"childData"}),(0,d.jsx)(r.td,{children:"TINYTEXT"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"''"}),(0,d.jsx)(r.td,{children:"client supplied data field passes through to down stream child orders"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"timestamp"}),(0,d.jsx)(r.td,{children:"DATETIME(6)"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"'1900-01-01 00:00:00.000000'"}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"LegsList"}),(0,d.jsx)(r.td,{children:"JSON"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"'JSON_OBJECT()'"}),(0,d.jsx)(r.td,{})]})]})]}),"\n",(0,d.jsx)(r.h3,{id:"primary-key-definition-unique",children:"PRIMARY KEY DEFINITION (Unique)"}),"\n",(0,d.jsxs)(r.table,{children:[(0,d.jsx)(r.thead,{children:(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.th,{children:"Field"}),(0,d.jsx)(r.th,{children:"Sequence"})]})}),(0,d.jsx)(r.tbody,{children:(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"strategyNumber"}),(0,d.jsx)(r.td,{children:"1"})]})})]}),"\n",(0,d.jsx)(r.h3,{id:"json-block-legslist",children:"JSON Block (LegsList)"}),"\n",(0,d.jsxs)(r.table,{children:[(0,d.jsx)(r.thead,{children:(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.th,{children:"Field"}),(0,d.jsx)(r.th,{children:"Type"}),(0,d.jsx)(r.th,{children:"Comment"})]})}),(0,d.jsxs)(r.tbody,{children:[(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"legId"}),(0,d.jsx)(r.td,{children:"long"}),(0,d.jsx)(r.td,{children:"leg ID"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"legPriority"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../../Enums/legPriority",children:"enum - legPriority"})}),(0,d.jsx)(r.td,{children:"Lead legs fill first note if there are no lead legs the first leg in the list will be treated as the lead leg"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"secKey"}),(0,d.jsx)(r.td,{children:"OptionKey"}),(0,d.jsx)(r.td,{children:"leg Security"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"secType"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../../Enums/secType",children:"enum - secType"})}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"mult"}),(0,d.jsx)(r.td,{children:"ushort"}),(0,d.jsx)(r.td,{children:"leg ratio"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"side"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../../Enums/side",children:"enum - side"})}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"posType"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../../Enums/posType",children:"enum - posType"})}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"ssaleFlag"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../../Enums/ssaleFlag",children:"enum - ssaleFlag"})}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"exchMask"}),(0,d.jsx)(r.td,{children:"uint"}),(0,d.jsx)(r.td,{children:"eligible exchanges 0  all"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"minUBid"}),(0,d.jsx)(r.td,{children:"double"}),(0,d.jsx)(r.td,{children:"optional  0 is any leg limit is only valid if all uMkt prices are between minUBid maxUAsk"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"maxUAsk"}),(0,d.jsx)(r.td,{children:"double"}),(0,d.jsx)(r.td,{children:"optional  0 is any"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"minMaxType"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../../Enums/minMaxType",children:"enum - minMaxType"})}),(0,d.jsx)(r.td,{children:"if Prc minUBidmaxUAsk are expressed as prices if Pct then they are expresses as pct change since parent order arrival"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"refUPrc"}),(0,d.jsx)(r.td,{children:"double"}),(0,d.jsx)(r.td,{children:"reference underlier price PrcDe orders"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"refDelta"}),(0,d.jsx)(r.td,{children:"float"}),(0,d.jsx)(r.td,{children:"reference delta for PrcDe order handling"})]})]})]}),"\n",(0,d.jsx)(r.h3,{id:"create-table-example-query",children:"CREATE TABLE EXAMPLE QUERY"}),"\n",(0,d.jsx)(r.pre,{children:(0,d.jsx)(r.code,{className:"language-sql",children:"CREATE TABLE `SRTrade`.`MsgSRStrategyOrderLeggerX` (\n    `strategyNumber` BIGINT NOT NULL DEFAULT 0 COMMENT 'strategy order number',\n    `spdrSource` ENUM('None','SpdrTicket','SpdrSingle','SRSE','FIX','HedgeTool','TradeHedge','OpenHedge','AutoHedge','Orphan','RiskManager','OrderManager','ManagedOrder','RFQRespSrvr','Legger','SRSEDrop','FixDrop','TicketDrop','SysTest','RFRResponse','AllocOmni','AllocClient','CertGateway','MLegResponse','LeggerX','DropManager','AutoHedgeSrvr','AuctionStrategySrvr','AllocBlockFace','AllocBlockCust','IceChatGateway','EXS2SRC','MLinkResponse','AutoResponderVD','AutoResponderRC','AutoResponderSN','AutoResponderBX','MLink') NOT NULL DEFAULT 'None',\n    `accnt` VARCHAR(16) NOT NULL DEFAULT '' COMMENT 'SR trading account',\n    `clientFirm` VARCHAR(16) NOT NULL DEFAULT '' COMMENT 'SR client firm',\n    `strategyStatus` ENUM('None','Active','Hold','Closed') NOT NULL DEFAULT 'None',\n    `execBrkrCode` VARCHAR(16) NOT NULL DEFAULT '' COMMENT '(optional) override the default execBrkrCode for this order',\n    `externExDest` VARCHAR(16) NOT NULL DEFAULT '' COMMENT 'routing code for orders directed to an external order router (default = null); should match FixRoutingTable.destination (in SR accnt config)',\n    `externParams` TINYTEXT NOT NULL DEFAULT '' COMMENT 'external algo names/parameters (usually just an algo name)',\n    `strategy` VARCHAR(36) NOT NULL DEFAULT '' COMMENT 'client-supplied strategy string; visible on SpiderRock GUI tools and other order reports.',\n    `userName` VARCHAR(24) NOT NULL DEFAULT '' COMMENT 'name of the user entering the order',\n    `orderSize` INT NOT NULL DEFAULT 0 COMMENT 'strategy size (number of complete spreads)',\n    `leggerLimit` DOUBLE NOT NULL DEFAULT 0 COMMENT 'strategy limit',\n    `leggerLimitType` ENUM('None','Prc','PrcDe','PrcDeX') NOT NULL DEFAULT 'None' COMMENT 'strategy limit type',\n    `leggerAlgo` ENUM('None','LegCrossOnly','LegOutLoud') NOT NULL DEFAULT 'None',\n    `balanceHandling` ENUM('None','PostWith','PostTurn','PostImprove','PostLimit','MaxIntern','PostWthF','PostImprvR','PostFlash','PostFlashW','PostPeg','PostFlashI') NOT NULL DEFAULT 'None' COMMENT 'base parent order balance handling [make style algo]',\n    `legExposurePct` FLOAT NOT NULL DEFAULT 0 COMMENT 'percentage of legger order than can be exposed on a single leg without completing related legs',\n    `legCompletionSlippage` DOUBLE NOT NULL DEFAULT 0 COMMENT 'maximum leg price slippage to complete an open strategy order',\n    `marketSession` ENUM('None','PreMkt','RegMkt','PostMkt','PreRegMkt','RegPostMkt','AllDay') NOT NULL DEFAULT 'None',\n    `startDttm` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000' COMMENT '[optional] (parent order start time)',\n    `orderDuration` INT NOT NULL DEFAULT 0 COMMENT '[optional] (number of seconds)',\n    `goodTillDttm` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000' COMMENT '[optional] (default: 2099-01-01)',\n    `autoHedge` ENUM('None','Static','AutoMid','AutoCrx','AutoTrn','SpdrAuto','Spdr10S','Spdr30S','Spdr90S','Spdr5M','Spdr30M','SpdrDay','SmartFast','SmartNorm','FastCrx','FastDark','SlowDark','AlphaVwap1pct','AlphaVwap2pct','AlphaVwap5pct','AlphaVwap25pct','Custom','AwayAlgo') NOT NULL DEFAULT 'None',\n    `hedgeInstrument` ENUM('None','Default','FrontMonth','Stock','Future') NOT NULL DEFAULT 'None',\n    `hedgeSecKey_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None' COMMENT 'autohedge instrument (can be a TickerKey (stock) or ExpiryKey (future)) [required for Stock and Future]',\n    `hedgeSecKey_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','EUX','ANY','CXE','DXE','NXAM','NXBR','NXLS','NXML','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None' COMMENT 'autohedge instrument (can be a TickerKey (stock) or ExpiryKey (future)) [required for Stock and Future]',\n    `hedgeSecKey_tk` VARCHAR(12) NOT NULL DEFAULT '' COMMENT 'autohedge instrument (can be a TickerKey (stock) or ExpiryKey (future)) [required for Stock and Future]',\n    `hedgeSecKey_yr` SMALLINT UNSIGNED NOT NULL DEFAULT 0 COMMENT 'autohedge instrument (can be a TickerKey (stock) or ExpiryKey (future)) [required for Stock and Future]',\n    `hedgeSecKey_mn` TINYINT UNSIGNED NOT NULL DEFAULT 0 COMMENT 'autohedge instrument (can be a TickerKey (stock) or ExpiryKey (future)) [required for Stock and Future]',\n    `hedgeSecKey_dy` TINYINT UNSIGNED NOT NULL DEFAULT 0 COMMENT 'autohedge instrument (can be a TickerKey (stock) or ExpiryKey (future)) [required for Stock and Future]',\n    `hedgeBetaRatio` FLOAT NOT NULL DEFAULT 0 COMMENT 'portion of executed $money to auto-hedge (can be 1.0 / Beta for beta hedging) [-4.0 to +4.0]',\n    `hedgeScope` ENUM('None','Accnt','RiskGroup') NOT NULL DEFAULT 'None' COMMENT 'hedge group scope [RiskGroup or Accnt]',\n    `hedgeSession` ENUM('None','PreMkt','RegMkt','PostMkt','PreRegMkt','RegPostMkt','AllDay') NOT NULL DEFAULT 'None',\n    `externHedgeExDest` VARCHAR(16) NOT NULL DEFAULT '' COMMENT 'external broker exDest (only used if orderHandling=Extern)\t\t\t# Should match FixRoutingTable.destination type',\n    `externHedgeParams` TINYTEXT NOT NULL DEFAULT '' COMMENT 'external algo names/parameters (usually just an algo name)',\n    `userData1` TINYTEXT NOT NULL DEFAULT '' COMMENT 'client supplied data field; passes through to parent and child executions and reports as well as FIX drops',\n    `userData2` TINYTEXT NOT NULL DEFAULT '' COMMENT 'client supplied data field; passes through to parent and child executions and reports as well as FIX drops',\n    `childData` TINYTEXT NOT NULL DEFAULT '' COMMENT 'client supplied data field; passes through to down stream child orders',\n    `timestamp` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000',\n    `LegsList` JSON NOT NULL DEFAULT JSON_OBJECT() CHECK(JSON_VALID(LegsList)),\n    PRIMARY KEY USING HASH (`strategyNumber`)\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='';\n\n"})}),"\n",(0,d.jsx)(r.h3,{id:"select-table-example-query",children:"SELECT TABLE EXAMPLE QUERY"}),"\n",(0,d.jsx)(r.pre,{children:(0,d.jsx)(r.code,{className:"language-sql",children:"SELECT\n    `strategyNumber`,\n    `spdrSource`,\n    `accnt`,\n    `clientFirm`,\n    `strategyStatus`,\n    `execBrkrCode`,\n    `externExDest`,\n    `externParams`,\n    `strategy`,\n    `userName`,\n    `orderSize`,\n    `leggerLimit`,\n    `leggerLimitType`,\n    `leggerAlgo`,\n    `balanceHandling`,\n    `legExposurePct`,\n    `legCompletionSlippage`,\n    `marketSession`,\n    `startDttm`,\n    `orderDuration`,\n    `goodTillDttm`,\n    `autoHedge`,\n    `hedgeInstrument`,\n    `hedgeSecKey_at`,\n    `hedgeSecKey_ts`,\n    `hedgeSecKey_tk`,\n    `hedgeSecKey_yr`,\n    `hedgeSecKey_mn`,\n    `hedgeSecKey_dy`,\n    `hedgeBetaRatio`,\n    `hedgeScope`,\n    `hedgeSession`,\n    `externHedgeExDest`,\n    `externHedgeParams`,\n    `userData1`,\n    `userData2`,\n    `childData`,\n    `timestamp`,\n    `LegsList`\nFROM `SRTrade`.`MsgSRStrategyOrderLeggerX`\nWHERE \n    /* Replace with a BIGINT */ \n    `strategyNumber` = 1234567890;\n"})}),"\n",(0,d.jsx)(r.h3,{id:"doc-columns-query",children:"Doc Columns Query"}),"\n",(0,d.jsx)(r.pre,{children:(0,d.jsx)(r.code,{className:"language-sql",children:"SELECT * FROM SRTrade.doccolumns WHERE TABLE_NAME='SRStrategyOrderLeggerX' ORDER BY ordinal_position ASC;\n"})})]})}function h(e={}){const{wrapper:r}={...(0,n.R)(),...e.components};return r?(0,d.jsx)(r,{...e,children:(0,d.jsx)(o,{...e})}):o(e)}},28453:(e,r,t)=>{t.d(r,{R:()=>i,x:()=>l});var d=t(96540);const n={},s=d.createContext(n);function i(e){const r=d.useContext(s);return d.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),d.createElement(s.Provider,{value:r},e.children)}}}]);