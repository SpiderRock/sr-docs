"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[44836],{63190:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>a});var d=r(74848),n=r(28453);const s={},i=void 0,l={id:"MessageSchemas/Schema/SRSE Products/SRTrade/SpdrStrategyReportLeggerX/SpdrStrategyReportLeggerX",title:"SpdrStrategyReportLeggerX",description:"V8 Message Definiton",source:"@site/versioned_docs/version-8.4.12.1/MessageSchemas/Schema/SRSE Products/SRTrade/SpdrStrategyReportLeggerX/SpdrStrategyReportLeggerX.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRTrade/SpdrStrategyReportLeggerX",slug:"/MessageSchemas/Schema/SRSE Products/SRTrade/SpdrStrategyReportLeggerX/",permalink:"/docs/8.4.12.1/MessageSchemas/Schema/SRSE Products/SRTrade/SpdrStrategyReportLeggerX/",draft:!1,unlisted:!1,tags:[],version:"8.4.12.1",frontMatter:{},sidebar:"messageSchemasSidebar",previous:{title:"SpdrStrategyReportLegX",permalink:"/docs/8.4.12.1/MessageSchemas/Schema/SRSE Products/SRTrade/SpdrStrategyReportLegX/"},next:{title:"SpdrStrategyStateLegX",permalink:"/docs/8.4.12.1/MessageSchemas/Schema/SRSE Products/SRTrade/SpdrStrategyStateLegX/"}},c={},a=[{value:"METADATA",id:"metadata",level:3},{value:"Table Definition",id:"table-definition",level:3},{value:"PRIMARY KEY DEFINITION (Unique)",id:"primary-key-definition-unique",level:3},{value:"CREATE TABLE EXAMPLE QUERY",id:"create-table-example-query",level:3},{value:"SELECT TABLE EXAMPLE QUERY",id:"select-table-example-query",level:3},{value:"Doc Columns Query",id:"doc-columns-query",level:3}];function o(e){const t={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(t.p,{children:(0,d.jsx)(t.a,{href:"../../../Topics/strategy-legger/SpdrStrategyReportLeggerX",children:"V8 Message Definiton"})}),"\n",(0,d.jsx)(t.h3,{id:"metadata",children:"METADATA"}),"\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Attribute"}),(0,d.jsx)(t.th,{children:"Value"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"Topic"}),(0,d.jsx)(t.td,{children:"5355-strategy-legger"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"MLink Token"}),(0,d.jsx)(t.td,{children:"SystemData"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"Product"}),(0,d.jsx)(t.td,{children:"SRTrade"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"accessType"}),(0,d.jsx)(t.td,{children:"SELECT"})]})]})]}),"\n",(0,d.jsx)(t.h3,{id:"table-definition",children:"Table Definition"}),"\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Field"}),(0,d.jsx)(t.th,{children:"Type"}),(0,d.jsx)(t.th,{children:"Key"}),(0,d.jsx)(t.th,{children:"Default Value"}),(0,d.jsx)(t.th,{children:"Comment"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"strategyNumber"}),(0,d.jsx)(t.td,{children:"BIGINT"}),(0,d.jsx)(t.td,{children:"PRI"}),(0,d.jsx)(t.td,{children:"0"}),(0,d.jsx)(t.td,{children:"strategy number"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"strategyStatus"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.a,{href:"../../../Enums/StrategyStatus",children:"enum - StrategyStatus"})}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"'None'"}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"accnt"}),(0,d.jsx)(t.td,{children:"VARCHAR(16)"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"''"}),(0,d.jsx)(t.td,{children:"SR trading account"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"clientFirm"}),(0,d.jsx)(t.td,{children:"VARCHAR(16)"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"''"}),(0,d.jsx)(t.td,{children:"SR client firm"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"spdrSource"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.a,{href:"../../../Enums/SpdrSource",children:"enum - SpdrSource"})}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"'None'"}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"execBrkrCode"}),(0,d.jsx)(t.td,{children:"VARCHAR(16)"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"''"}),(0,d.jsx)(t.td,{children:"optional override the default execBrkrCode for this order"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"externExDest"}),(0,d.jsx)(t.td,{children:"VARCHAR(12)"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"''"}),(0,d.jsx)(t.td,{children:"routing code for orders directed to an external order router default  null should match FixRoutingTabledestination in SR accnt config"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"externParams"}),(0,d.jsx)(t.td,{children:"TINYTEXT"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"''"}),(0,d.jsx)(t.td,{children:"external algo namesparameters usually just an algo name"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"strategy"}),(0,d.jsx)(t.td,{children:"VARCHAR(36)"}),(0,d.jsx)(t.td,{children:"PRI"}),(0,d.jsx)(t.td,{children:"''"}),(0,d.jsx)(t.td,{children:"clientsupplied strategy string visible on SpiderRock GUI tools and other order reports"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"userName"}),(0,d.jsx)(t.td,{children:"VARCHAR(24)"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"''"}),(0,d.jsx)(t.td,{children:"name of the user entering the order"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"orderSize"}),(0,d.jsx)(t.td,{children:"INT"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"0"}),(0,d.jsx)(t.td,{children:"strategy size number of complete spreads"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"leggerLimit"}),(0,d.jsx)(t.td,{children:"DOUBLE"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"0"}),(0,d.jsx)(t.td,{children:"strategy limit"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"leggerLimitType"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.a,{href:"../../../Enums/LeggerLimitType",children:"enum - LeggerLimitType"})}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"'None'"}),(0,d.jsx)(t.td,{children:"strategy limit type"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"leggerLimitInc"}),(0,d.jsx)(t.td,{children:"DOUBLE"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"0"}),(0,d.jsx)(t.td,{children:"strategy limit price tick increment for"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"leggerAlgo"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.a,{href:"../../../Enums/LeggerAlgo",children:"enum - LeggerAlgo"})}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"'None'"}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"balanceHandling"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.a,{href:"../../../Enums/ParentBalanceHandling",children:"enum - ParentBalanceHandling"})}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"'None'"}),(0,d.jsx)(t.td,{children:"base parent order balance handling make style algo"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"legExposurePct"}),(0,d.jsx)(t.td,{children:"FLOAT"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"0"}),(0,d.jsx)(t.td,{children:"percentage of legger order than can be exposed on a single leg without completing related legs"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"legCompletionSlippage"}),(0,d.jsx)(t.td,{children:"DOUBLE"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"0"}),(0,d.jsx)(t.td,{children:"maximum leg price slippage to complete an open strategy order"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"marketSession"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.a,{href:"../../../Enums/MarketSession",children:"enum - MarketSession"})}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"'None'"}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"startDttm"}),(0,d.jsx)(t.td,{children:"DATETIME(6)"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"'1900-01-01 00:00:00.000000'"}),(0,d.jsx)(t.td,{children:"optional parent order start time"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"orderDuration"}),(0,d.jsx)(t.td,{children:"INT"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"0"}),(0,d.jsx)(t.td,{children:"optional number of seconds"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"goodTillDttm"}),(0,d.jsx)(t.td,{children:"DATETIME(6)"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"'1900-01-01 00:00:00.000000'"}),(0,d.jsx)(t.td,{children:"optional default 20990101"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"autoHedge"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.a,{href:"../../../Enums/AutoHedge",children:"enum - AutoHedge"})}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"'None'"}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"hedgeInstrument"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.a,{href:"../../../Enums/HedgeInst",children:"enum - HedgeInst"})}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"'None'"}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"hedgeSecKey_at"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.a,{href:"../../../Enums/AssetType",children:"enum - AssetType"})}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"'None'"}),(0,d.jsx)(t.td,{children:"autohedge instrument can be a TickerKey stock or ExpiryKey future required for Stock and Future"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"hedgeSecKey_ts"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.a,{href:"../../../Enums/TickerSrc",children:"enum - TickerSrc"})}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"'None'"}),(0,d.jsx)(t.td,{children:"autohedge instrument can be a TickerKey stock or ExpiryKey future required for Stock and Future"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"hedgeSecKey_tk"}),(0,d.jsx)(t.td,{children:"VARCHAR(12)"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"''"}),(0,d.jsx)(t.td,{children:"autohedge instrument can be a TickerKey stock or ExpiryKey future required for Stock and Future"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"hedgeSecKey_yr"}),(0,d.jsx)(t.td,{children:"SMALLINT UNSIGNED"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"0"}),(0,d.jsx)(t.td,{children:"autohedge instrument can be a TickerKey stock or ExpiryKey future required for Stock and Future"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"hedgeSecKey_mn"}),(0,d.jsx)(t.td,{children:"TINYINT UNSIGNED"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"0"}),(0,d.jsx)(t.td,{children:"autohedge instrument can be a TickerKey stock or ExpiryKey future required for Stock and Future"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"hedgeSecKey_dy"}),(0,d.jsx)(t.td,{children:"TINYINT UNSIGNED"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"0"}),(0,d.jsx)(t.td,{children:"autohedge instrument can be a TickerKey stock or ExpiryKey future required for Stock and Future"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"hedgeBetaRatio"}),(0,d.jsx)(t.td,{children:"FLOAT"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"0"}),(0,d.jsx)(t.td,{children:"portion of executed money to autohedge can be 10  Beta for beta hedging 40 to 40"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"hedgeScope"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.a,{href:"../../../Enums/HedgeScope",children:"enum - HedgeScope"})}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"'None'"}),(0,d.jsx)(t.td,{children:"hedge group scope RiskGroup or Accnt"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"hedgeSession"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.a,{href:"../../../Enums/MarketSession",children:"enum - MarketSession"})}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"'None'"}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"externHedgeExDest"}),(0,d.jsx)(t.td,{children:"VARCHAR(16)"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"''"}),(0,d.jsx)(t.td,{children:"external broker exDest only used if orderHandlingExtern\t\t\t Should match FixRoutingTabledestination type"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"externHedgeParams"}),(0,d.jsx)(t.td,{children:"TINYTEXT"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"''"}),(0,d.jsx)(t.td,{children:"external algo namesparameters usually just an algo name"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"userData1"}),(0,d.jsx)(t.td,{children:"TINYTEXT"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"''"}),(0,d.jsx)(t.td,{children:"client supplied data field passes through to parent and child executions and reports as well as FIX drops"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"userData2"}),(0,d.jsx)(t.td,{children:"TINYTEXT"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"''"}),(0,d.jsx)(t.td,{children:"client supplied data field passes through to parent and child executions and reports as well as FIX drops"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"childData"}),(0,d.jsx)(t.td,{children:"TINYTEXT"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"''"}),(0,d.jsx)(t.td,{children:"client supplied data field passes through to down stream child orders"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"timestamp"}),(0,d.jsx)(t.td,{children:"DATETIME(6)"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"'1900-01-01 00:00:00.000000'"}),(0,d.jsx)(t.td,{})]})]})]}),"\n",(0,d.jsx)(t.h3,{id:"primary-key-definition-unique",children:"PRIMARY KEY DEFINITION (Unique)"}),"\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Field"}),(0,d.jsx)(t.th,{children:"Sequence"})]})}),(0,d.jsx)(t.tbody,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"strategyNumber"}),(0,d.jsx)(t.td,{children:"1"})]})})]}),"\n",(0,d.jsx)(t.h3,{id:"create-table-example-query",children:"CREATE TABLE EXAMPLE QUERY"}),"\n",(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:"language-sql",children:"CREATE TABLE `SRTrade`.`MsgSRStrategyReportLeggerX` (\n    `strategyNumber` BIGINT NOT NULL DEFAULT 0 COMMENT 'strategy number',\n    `strategyStatus` ENUM('None','Active','Hold','Closed') NOT NULL DEFAULT 'None',\n    `accnt` VARCHAR(16) NOT NULL DEFAULT '' COMMENT 'SR trading account',\n    `clientFirm` VARCHAR(16) NOT NULL DEFAULT '' COMMENT 'SR client firm',\n    `spdrSource` ENUM('None','SpdrTicket','SpdrSingle','SRSE','FIX','HedgeTool','TradeHedge','OpenHedge','AutoHedge','Orphan','RiskManager','OrderManager','ManagedOrder','RFQRespSrvr','Legger','SRSEDrop','FixDrop','TicketDrop','SysTest','RFRResponse','AllocOmni','AllocClient','CertGateway','MLegResponse','LeggerX','DropManager','AutoHedgeSrvr','AuctionStrategySrvr','AllocBlockFace','AllocBlockCust','IceChatGateway','EXS2SRC','MLinkResponse','AutoResponderVD','AutoResponderRC','AutoResponderSN','AutoResponderBX','MLink') NOT NULL DEFAULT 'None',\n    `execBrkrCode` VARCHAR(16) NOT NULL DEFAULT '' COMMENT '(optional) override the default execBrkrCode for this order',\n    `externExDest` VARCHAR(12) NOT NULL DEFAULT '' COMMENT 'routing code for orders directed to an external order router (default = null); should match FixRoutingTable.destination (in SR accnt config)',\n    `externParams` TINYTEXT NOT NULL DEFAULT '' COMMENT 'external algo names/parameters (usually just an algo name)',\n    `strategy` VARCHAR(36) NOT NULL DEFAULT '' COMMENT 'client-supplied strategy string; visible on SpiderRock GUI tools and other order reports.',\n    `userName` VARCHAR(24) NOT NULL DEFAULT '' COMMENT 'name of the user entering the order',\n    `orderSize` INT NOT NULL DEFAULT 0 COMMENT 'strategy size (number of complete spreads)',\n    `leggerLimit` DOUBLE NOT NULL DEFAULT 0 COMMENT 'strategy limit',\n    `leggerLimitType` ENUM('None','Prc','PrcDe','PrcDeX') NOT NULL DEFAULT 'None' COMMENT 'strategy limit type',\n    `leggerLimitInc` DOUBLE NOT NULL DEFAULT 0 COMMENT 'strategy limit price tick increment (for +/-)',\n    `leggerAlgo` ENUM('None','LegCrossOnly','LegOutLoud') NOT NULL DEFAULT 'None',\n    `balanceHandling` ENUM('None','PostWith','PostTurn','PostImprove','PostLimit','MaxIntern','PostWthF','PostImprvR','PostFlash','PostFlashW','PostPeg','PostFlashI') NOT NULL DEFAULT 'None' COMMENT 'base parent order balance handling [make style algo]',\n    `legExposurePct` FLOAT NOT NULL DEFAULT 0 COMMENT 'percentage of legger order than can be exposed on a single leg without completing related legs',\n    `legCompletionSlippage` DOUBLE NOT NULL DEFAULT 0 COMMENT 'maximum leg price slippage to complete an open strategy order',\n    `marketSession` ENUM('None','PreMkt','RegMkt','PostMkt','PreRegMkt','RegPostMkt','AllDay') NOT NULL DEFAULT 'None',\n    `startDttm` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000' COMMENT '[optional] (parent order start time)',\n    `orderDuration` INT NOT NULL DEFAULT 0 COMMENT '[optional] (number of seconds)',\n    `goodTillDttm` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000' COMMENT '[optional] (default: 2099-01-01)',\n    `autoHedge` ENUM('None','Static','AutoMid','AutoCrx','AutoTrn','SpdrAuto','Spdr10S','Spdr30S','Spdr90S','Spdr5M','Spdr30M','SpdrDay','SmartFast','SmartNorm','FastCrx','FastDark','SlowDark','AlphaVwap1pct','AlphaVwap2pct','AlphaVwap5pct','AlphaVwap25pct','Custom','AwayAlgo') NOT NULL DEFAULT 'None',\n    `hedgeInstrument` ENUM('None','Default','FrontMonth','Stock','Future') NOT NULL DEFAULT 'None',\n    `hedgeSecKey_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None' COMMENT 'autohedge instrument (can be a TickerKey (stock) or ExpiryKey (future)) [required for Stock and Future]',\n    `hedgeSecKey_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','ESX','ANY','CXE','DXE','NXAM','NXBR','NXDUB','NXLS','NXLDN','NXML','NXMLT','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None' COMMENT 'autohedge instrument (can be a TickerKey (stock) or ExpiryKey (future)) [required for Stock and Future]',\n    `hedgeSecKey_tk` VARCHAR(12) NOT NULL DEFAULT '' COMMENT 'autohedge instrument (can be a TickerKey (stock) or ExpiryKey (future)) [required for Stock and Future]',\n    `hedgeSecKey_yr` SMALLINT UNSIGNED NOT NULL DEFAULT 0 COMMENT 'autohedge instrument (can be a TickerKey (stock) or ExpiryKey (future)) [required for Stock and Future]',\n    `hedgeSecKey_mn` TINYINT UNSIGNED NOT NULL DEFAULT 0 COMMENT 'autohedge instrument (can be a TickerKey (stock) or ExpiryKey (future)) [required for Stock and Future]',\n    `hedgeSecKey_dy` TINYINT UNSIGNED NOT NULL DEFAULT 0 COMMENT 'autohedge instrument (can be a TickerKey (stock) or ExpiryKey (future)) [required for Stock and Future]',\n    `hedgeBetaRatio` FLOAT NOT NULL DEFAULT 0 COMMENT 'portion of executed $money to auto-hedge (can be 1.0 / Beta for beta hedging) [-4.0 to +4.0]',\n    `hedgeScope` ENUM('None','Accnt','RiskGroup') NOT NULL DEFAULT 'None' COMMENT 'hedge group scope [RiskGroup or Accnt]',\n    `hedgeSession` ENUM('None','PreMkt','RegMkt','PostMkt','PreRegMkt','RegPostMkt','AllDay') NOT NULL DEFAULT 'None',\n    `externHedgeExDest` VARCHAR(16) NOT NULL DEFAULT '' COMMENT 'external broker exDest (only used if orderHandling=Extern)\t\t\t# Should match FixRoutingTable.destination type',\n    `externHedgeParams` TINYTEXT NOT NULL DEFAULT '' COMMENT 'external algo names/parameters (usually just an algo name)',\n    `userData1` TINYTEXT NOT NULL DEFAULT '' COMMENT 'client supplied data field; passes through to parent and child executions and reports as well as FIX drops',\n    `userData2` TINYTEXT NOT NULL DEFAULT '' COMMENT 'client supplied data field; passes through to parent and child executions and reports as well as FIX drops',\n    `childData` TINYTEXT NOT NULL DEFAULT '' COMMENT 'client supplied data field; passes through to down stream child orders',\n    `timestamp` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000',\n    PRIMARY KEY USING HASH (`strategyNumber`)\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='';\n\n"})}),"\n",(0,d.jsx)(t.h3,{id:"select-table-example-query",children:"SELECT TABLE EXAMPLE QUERY"}),"\n",(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:"language-sql",children:"SELECT\n    `strategyNumber`,\n    `strategyStatus`,\n    `accnt`,\n    `clientFirm`,\n    `spdrSource`,\n    `execBrkrCode`,\n    `externExDest`,\n    `externParams`,\n    `strategy`,\n    `userName`,\n    `orderSize`,\n    `leggerLimit`,\n    `leggerLimitType`,\n    `leggerLimitInc`,\n    `leggerAlgo`,\n    `balanceHandling`,\n    `legExposurePct`,\n    `legCompletionSlippage`,\n    `marketSession`,\n    `startDttm`,\n    `orderDuration`,\n    `goodTillDttm`,\n    `autoHedge`,\n    `hedgeInstrument`,\n    `hedgeSecKey_at`,\n    `hedgeSecKey_ts`,\n    `hedgeSecKey_tk`,\n    `hedgeSecKey_yr`,\n    `hedgeSecKey_mn`,\n    `hedgeSecKey_dy`,\n    `hedgeBetaRatio`,\n    `hedgeScope`,\n    `hedgeSession`,\n    `externHedgeExDest`,\n    `externHedgeParams`,\n    `userData1`,\n    `userData2`,\n    `childData`,\n    `timestamp`\nFROM `SRTrade`.`MsgSRStrategyReportLeggerX`\nWHERE \n    /* Replace with a BIGINT */ \n    `strategyNumber` = 1234567890;\n"})}),"\n",(0,d.jsx)(t.h3,{id:"doc-columns-query",children:"Doc Columns Query"}),"\n",(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:"language-sql",children:"SELECT * FROM SRTrade.doccolumns WHERE TABLE_NAME='SpdrStrategyReportLeggerX' ORDER BY ordinal_position ASC;\n"})})]})}function h(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(o,{...e})}):o(e)}},28453:(e,t,r)=>{r.d(t,{R:()=>i,x:()=>l});var d=r(96540);const n={},s=d.createContext(n);function i(e){const t=d.useContext(s);return d.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),d.createElement(s.Provider,{value:t},e.children)}}}]);