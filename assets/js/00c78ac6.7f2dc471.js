"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[14395],{16898:(e,n,d)=>{d.r(n),d.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>o,frontMatter:()=>i,metadata:()=>c,toc:()=>x});var r=d(74848),t=d(28453);const i={},s=void 0,c={id:"MessageSchemas/Schema/SRSE Products/SRTrade/SRAwayExecution/SRAwayExecution",title:"SRAwayExecution",description:"V8 Message Definiton",source:"@site/docs/MessageSchemas/Schema/SRSE Products/SRTrade/SRAwayExecution/SRAwayExecution.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRTrade/SRAwayExecution",slug:"/MessageSchemas/Schema/SRSE Products/SRTrade/SRAwayExecution/",permalink:"/docs/next/MessageSchemas/Schema/SRSE Products/SRTrade/SRAwayExecution/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"messageSchemasSidebar",previous:{title:"SRAvailExecAllocation",permalink:"/docs/next/MessageSchemas/Schema/SRSE Products/SRTrade/SRAvailExecAllocation/"},next:{title:"SRBrokerCancel",permalink:"/docs/next/MessageSchemas/Schema/SRSE Products/SRTrade/SRBrokerCancel/"}},l={},x=[{value:"METADATA",id:"metadata",level:3},{value:"Table Definition",id:"table-definition",level:3},{value:"PRIMARY KEY DEFINITION (Unique)",id:"primary-key-definition-unique",level:3},{value:"SECONDARY INDEX (AccntIndex) (Not Unique)",id:"secondary-index-accntindex-not-unique",level:3},{value:"SECONDARY INDEX (ClientFirmIndex) (Not Unique)",id:"secondary-index-clientfirmindex-not-unique",level:3},{value:"SECONDARY INDEX (FillNumberIndex) (Not Unique)",id:"secondary-index-fillnumberindex-not-unique",level:3},{value:"CREATE TABLE EXAMPLE QUERY",id:"create-table-example-query",level:3},{value:"SELECT TABLE EXAMPLE QUERY",id:"select-table-example-query",level:3},{value:"Doc Columns Query",id:"doc-columns-query",level:3}];function h(e){const n={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"../../../Topics/away-drop/SpdrAwayExecution",children:"V8 Message Definiton"})}),"\n",(0,r.jsx)(n.p,{children:"SpdrAwayExecution records are published by ToolServers, SRSE, and FIX drop recv gateways.  They are consumed by AwayExecutionMarkupServer which, in turn, publishes corresponding SpdrParentExecution records, including M1 and M10 updates."}),"\n",(0,r.jsx)(n.h3,{id:"metadata",children:"METADATA"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Attribute"}),(0,r.jsx)(n.th,{children:"Value"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Topic"}),(0,r.jsx)(n.td,{children:"1450-away-drop"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"MLink Token"}),(0,r.jsx)(n.td,{children:"ClientTrading"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Product"}),(0,r.jsx)(n.td,{children:"SRTrade"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"accessType"}),(0,r.jsx)(n.td,{children:"SELECT"})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"table-definition",children:"Table Definition"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Field"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Key"}),(0,r.jsx)(n.th,{children:"Default Value"}),(0,r.jsx)(n.th,{children:"Comment"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"accnt"}),(0,r.jsx)(n.td,{children:"VARCHAR(16)"}),(0,r.jsx)(n.td,{children:"PRI, SEC"}),(0,r.jsx)(n.td,{children:"''"}),(0,r.jsx)(n.td,{children:"SR accnt"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"clientFillId"}),(0,r.jsx)(n.td,{children:"BIGINT"}),(0,r.jsx)(n.td,{children:"PRI"}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"client fill ID should be unique for each accnt"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"clientFirm"}),(0,r.jsx)(n.td,{children:"VARCHAR(16)"}),(0,r.jsx)(n.td,{children:"PRI, SEC"}),(0,r.jsx)(n.td,{children:"''"}),(0,r.jsx)(n.td,{children:"SR client firm"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"fillNumber"}),(0,r.jsx)(n.td,{children:"BIGINT"}),(0,r.jsx)(n.td,{children:"SEC"}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"SpiderRock execution number globally unique over trailing 10 days copied in SpdrParentExecutionpkeyfillNumber"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"engineName"}),(0,r.jsx)(n.td,{children:"VARCHAR(32)"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"''"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"spdrSource"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../../../Enums/SpdrSource",children:"enum - SpdrSource"})}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"'None'"}),(0,r.jsx)(n.td,{children:"SR source code"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"execStatus"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../../../Enums/ExecStatus",children:"enum - ExecStatus"})}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"'None'"}),(0,r.jsx)(n.td,{children:"SR execution status FillBustCorrectReject"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"clientOrderId"}),(0,r.jsx)(n.td,{children:"VARCHAR(24)"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"''"}),(0,r.jsx)(n.td,{children:"client order ID should be unique for each clientFirm if any copied into SpdrParentExecutionaltOrderId"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"srcRoutingCode"}),(0,r.jsx)(n.td,{children:"TINYTEXT"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"''"}),(0,r.jsx)(n.td,{children:"inbound FIX routing code drop server if any"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"riskGroupId"}),(0,r.jsx)(n.td,{children:"CHAR(19)"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"'0000-0000-0000-0000'"}),(0,r.jsx)(n.td,{children:"riskGroupId parent order group ID for this away execution report will be incorporated into a corresponding EE risk group counter if  0"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"secKey_at"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../../../Enums/AssetType",children:"enum - AssetType"})}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"'None'"}),(0,r.jsx)(n.td,{children:"SR security key"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"secKey_ts"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../../../Enums/TickerSrc",children:"enum - TickerSrc"})}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"'None'"}),(0,r.jsx)(n.td,{children:"SR security key"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"secKey_tk"}),(0,r.jsx)(n.td,{children:"VARCHAR(12)"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"''"}),(0,r.jsx)(n.td,{children:"SR security key"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"secKey_yr"}),(0,r.jsx)(n.td,{children:"SMALLINT UNSIGNED"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"SR security key"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"secKey_mn"}),(0,r.jsx)(n.td,{children:"TINYINT UNSIGNED"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"SR security key"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"secKey_dy"}),(0,r.jsx)(n.td,{children:"TINYINT UNSIGNED"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"SR security key"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"secKey_xx"}),(0,r.jsx)(n.td,{children:"DOUBLE"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"SR security key"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"secKey_cp"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../../../Enums/CallPut",children:"enum - CallPut"})}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"'Call'"}),(0,r.jsx)(n.td,{children:"SR security key"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"secType"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../../../Enums/SpdrKeyType",children:"enum - SpdrKeyType"})}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"'None'"}),(0,r.jsx)(n.td,{children:"SR security type Stock Future Option"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"execRole"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../../../Enums/ExecRole",children:"enum - ExecRole"})}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"'None'"}),(0,r.jsx)(n.td,{children:"SpiderRock relationship to this execution record"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"extExecBroker"}),(0,r.jsx)(n.td,{children:"VARCHAR(12)"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"''"}),(0,r.jsx)(n.td,{children:"Client execBroker code"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"fillSide"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../../../Enums/BuySell",children:"enum - BuySell"})}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"'None'"}),(0,r.jsx)(n.td,{children:"fill side"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"fillPrice"}),(0,r.jsx)(n.td,{children:"DOUBLE"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"fill price"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"fillPriceType"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../../../Enums/PriceType",children:"enum - PriceType"})}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"'Explicit'"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"fillQuantity"}),(0,r.jsx)(n.td,{children:"INT"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"fill quantity"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"childSize"}),(0,r.jsx)(n.td,{children:"INT"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"child order size"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"fillExch"}),(0,r.jsx)(n.td,{children:"VARCHAR(6)"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"''"}),(0,r.jsx)(n.td,{children:"fill exchange if any"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"fillDttm"}),(0,r.jsx)(n.td,{children:"DATETIME(6)"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"'1900-01-01 00:00:00.000000'"}),(0,r.jsx)(n.td,{children:"fill datetime"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"fillRefUPrc"}),(0,r.jsx)(n.td,{children:"DOUBLE"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"reference underlier price  fill arrival time"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"origExecID"}),(0,r.jsx)(n.td,{children:"TINYTEXT"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"''"}),(0,r.jsx)(n.td,{children:"original execution ID string child order"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"lastExecID"}),(0,r.jsx)(n.td,{children:"TINYTEXT"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"''"}),(0,r.jsx)(n.td,{children:"most recent execution ID same as origExecID unless CANCELCORRECTION has been processed"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"fillTransactDttm"}),(0,r.jsx)(n.td,{children:"DATETIME(6)"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"'1900-01-01 00:00:00.000000'"}),(0,r.jsx)(n.td,{children:"transaction datetime as reported by exchange or down stream broker"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"fillReportDetail"}),(0,r.jsx)(n.td,{children:"TINYTEXT"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"''"}),(0,r.jsx)(n.td,{children:"extra detail if any from child execution"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ssaleFlag"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../../../Enums/ShortSaleFlag",children:"enum - ShortSaleFlag"})}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"'None'"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"positionType"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../../../Enums/PositionType",children:"enum - PositionType"})}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"'None'"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"theoVol"}),(0,r.jsx)(n.td,{children:"FLOAT"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"client supplied theoretical volatility used for markup only"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"comment"}),(0,r.jsx)(n.td,{children:"TINYTEXT"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"''"}),(0,r.jsx)(n.td,{children:"text comment if any"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"userData1"}),(0,r.jsx)(n.td,{children:"TINYTEXT"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"''"}),(0,r.jsx)(n.td,{children:"client supplied data field passes through to parent and child executions and reports as well as FIX drops"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"userData2"}),(0,r.jsx)(n.td,{children:"TINYTEXT"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"''"}),(0,r.jsx)(n.td,{children:"client supplied data field passes through to parent and child executions and reports as well as FIX drops"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"strategy"}),(0,r.jsx)(n.td,{children:"VARCHAR(36)"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"''"}),(0,r.jsx)(n.td,{children:"clientsupplied strategy string"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"modifiedBy"}),(0,r.jsx)(n.td,{children:"VARCHAR(24)"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"''"}),(0,r.jsx)(n.td,{children:"user who last modified this record"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"modifiedIn"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../../../Enums/SysEnvironment",children:"enum - SysEnvironment"})}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"'None'"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"timestamp"}),(0,r.jsx)(n.td,{children:"DATETIME(6)"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"'1900-01-01 00:00:00.000000'"}),(0,r.jsx)(n.td,{children:"timestamp of last modification"})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"primary-key-definition-unique",children:"PRIMARY KEY DEFINITION (Unique)"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Field"}),(0,r.jsx)(n.th,{children:"Sequence"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"accnt"}),(0,r.jsx)(n.td,{children:"1"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"clientFillId"}),(0,r.jsx)(n.td,{children:"2"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"clientFirm"}),(0,r.jsx)(n.td,{children:"3"})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"secondary-index-accntindex-not-unique",children:"SECONDARY INDEX (AccntIndex) (Not Unique)"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Field"}),(0,r.jsx)(n.th,{children:"Sequence"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"accnt"}),(0,r.jsx)(n.td,{children:"1"})]})})]}),"\n",(0,r.jsx)(n.h3,{id:"secondary-index-clientfirmindex-not-unique",children:"SECONDARY INDEX (ClientFirmIndex) (Not Unique)"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Field"}),(0,r.jsx)(n.th,{children:"Sequence"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"clientFirm"}),(0,r.jsx)(n.td,{children:"1"})]})})]}),"\n",(0,r.jsx)(n.h3,{id:"secondary-index-fillnumberindex-not-unique",children:"SECONDARY INDEX (FillNumberIndex) (Not Unique)"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Field"}),(0,r.jsx)(n.th,{children:"Sequence"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"fillNumber"}),(0,r.jsx)(n.td,{children:"1"})]})})]}),"\n",(0,r.jsx)(n.h3,{id:"create-table-example-query",children:"CREATE TABLE EXAMPLE QUERY"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"CREATE TABLE `SRTrade`.`MsgSRAwayExecution` (\n    `accnt` VARCHAR(16) NOT NULL DEFAULT '' COMMENT 'SR accnt',\n    `clientFillId` BIGINT NOT NULL DEFAULT 0 COMMENT 'client fill ID (should be unique for each accnt)',\n    `clientFirm` VARCHAR(16) NOT NULL DEFAULT '' COMMENT 'SR client firm',\n    `fillNumber` BIGINT NOT NULL DEFAULT 0 COMMENT 'SpiderRock execution number (globally unique over trailing 10 days) [copied in SpdrParentExecution.pkey.fillNumber]',\n    `engineName` VARCHAR(32) NOT NULL DEFAULT '',\n    `spdrSource` ENUM('None','SpdrTicket','SpdrSingle','SRSE','FIX','HedgeTool','TradeHedge','OpenHedge','AutoHedge','Orphan','RiskManager','OrderManager','ManagedOrder','RFQRespSrvr','Legger','SRSEDrop','FixDrop','TicketDrop','SysTest','RFRResponse','AllocOmni','AllocClient','CertGateway','MLegResponse','LeggerX','DropManager','AutoHedgeSrvr','AuctionStrategySrvr','AllocBlockFace','AllocBlockCust','IceChatGateway','EXS2SRC','MLinkResponse','AutoResponderVD','AutoResponderRC','AutoResponderSN','AutoResponderBX','MLink') NOT NULL DEFAULT 'None' COMMENT 'SR source code',\n    `execStatus` ENUM('None','Fill','Bust','Correct','Reject','SysRej') NOT NULL DEFAULT 'None' COMMENT 'SR execution status (Fill,Bust,Correct,Reject)',\n    `clientOrderId` VARCHAR(24) NOT NULL DEFAULT '' COMMENT 'client order ID (should be unique for each clientFirm) (if any) [copied into SpdrParentExecution.altOrderId]',\n    `srcRoutingCode` TINYTEXT NOT NULL DEFAULT '' COMMENT 'inbound FIX routing code (drop server) (if any)',\n    `riskGroupId` CHAR(19) NOT NULL DEFAULT '0000-0000-0000-0000' COMMENT 'riskGroupId (parent order group ID) for this away execution report (will be incorporated into a corresponding EE risk group counter if != 0)',\n    `secKey_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None' COMMENT 'SR security key',\n    `secKey_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','EUX','ANY','CXE','DXE','NXAM','NXBR','NXLS','NXML','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None' COMMENT 'SR security key',\n    `secKey_tk` VARCHAR(12) NOT NULL DEFAULT '' COMMENT 'SR security key',\n    `secKey_yr` SMALLINT UNSIGNED NOT NULL DEFAULT 0 COMMENT 'SR security key',\n    `secKey_mn` TINYINT UNSIGNED NOT NULL DEFAULT 0 COMMENT 'SR security key',\n    `secKey_dy` TINYINT UNSIGNED NOT NULL DEFAULT 0 COMMENT 'SR security key',\n    `secKey_xx` DOUBLE NOT NULL DEFAULT 0 COMMENT 'SR security key',\n    `secKey_cp` ENUM('Call','Put','Pair') NOT NULL DEFAULT 'Call' COMMENT 'SR security key',\n    `secType` ENUM('None','Stock','Future','Option','MLeg') NOT NULL DEFAULT 'None' COMMENT 'SR security type [Stock, Future, Option]',\n    `execRole` ENUM('None','DirectAccnt','AwayGiveup','RiskDrop','AwayDrop','PullDrop') NOT NULL DEFAULT 'None' COMMENT 'SpiderRock relationship to this execution record',\n    `extExecBroker` VARCHAR(12) NOT NULL DEFAULT '' COMMENT 'Client execBroker code',\n    `fillSide` ENUM('None','Buy','Sell') NOT NULL DEFAULT 'None' COMMENT 'fill side',\n    `fillPrice` DOUBLE NOT NULL DEFAULT 0 COMMENT 'fill price',\n    `fillPriceType` ENUM('None','Explicit','Offset','Zero') NOT NULL DEFAULT 'Explicit',\n    `fillQuantity` INT NOT NULL DEFAULT 0 COMMENT 'fill quantity',\n    `childSize` INT NOT NULL DEFAULT 0 COMMENT 'child order size',\n    `fillExch` VARCHAR(6) NOT NULL DEFAULT '' COMMENT 'fill exchange (if any)',\n    `fillDttm` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000' COMMENT 'fill date/time',\n    `fillRefUPrc` DOUBLE NOT NULL DEFAULT 0 COMMENT 'reference underlier price @ fill arrival time',\n    `origExecID` TINYTEXT NOT NULL DEFAULT '' COMMENT 'original execution ID string (child order)',\n    `lastExecID` TINYTEXT NOT NULL DEFAULT '' COMMENT 'most recent execution ID (same as origExecID unless CANCEL/CORRECTION has been processed)',\n    `fillTransactDttm` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000' COMMENT 'transaction date/time as reported by exchange or down stream broker',\n    `fillReportDetail` TINYTEXT NOT NULL DEFAULT '' COMMENT 'extra detail (if any) from child execution',\n    `ssaleFlag` ENUM('None','Long','Short','Exempt','Cover','NA') NOT NULL DEFAULT 'None',\n    `positionType` ENUM('None','Opening','Closing') NOT NULL DEFAULT 'None',\n    `theoVol` FLOAT NOT NULL DEFAULT 0 COMMENT 'client supplied theoretical volatility (used for markup only)',\n    `comment` TINYTEXT NOT NULL DEFAULT '' COMMENT 'text comment (if any)',\n    `userData1` TINYTEXT NOT NULL DEFAULT '' COMMENT 'client supplied data field; passes through to parent and child executions and reports as well as FIX drops',\n    `userData2` TINYTEXT NOT NULL DEFAULT '' COMMENT 'client supplied data field; passes through to parent and child executions and reports as well as FIX drops',\n    `strategy` VARCHAR(36) NOT NULL DEFAULT '' COMMENT 'client-supplied strategy string',\n    `modifiedBy` VARCHAR(24) NOT NULL DEFAULT '' COMMENT 'user who last modified this record',\n    `modifiedIn` ENUM('None','Neptune','Pluto','V7_Stable','V7_Latest','Saturn','Venus','Mars','SysTest','V7_Current') NOT NULL DEFAULT 'None',\n    `timestamp` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000' COMMENT 'timestamp of last modification',\n    CONSTRAINT nonnegative_riskGroupId CHECK(ASCII(riskGroupId) < 56),\n    PRIMARY KEY USING HASH (`accnt`,`clientFillId`,`clientFirm`),\n    KEY `AccntIndex` (`accnt`) USING HASH,\n    KEY `ClientFirmIndex` (`clientFirm`) USING HASH,\n    KEY `FillNumberIndex` (`fillNumber`) USING HASH\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='SpdrAwayExecution records are published by ToolServers, SRSE, and FIX drop recv gateways.  They are consumed by AwayExecutionMarkupServer which, in turn, publishes corresponding SpdrParentExecution records, including M1 and M10 updates.';\n\n"})}),"\n",(0,r.jsx)(n.h3,{id:"select-table-example-query",children:"SELECT TABLE EXAMPLE QUERY"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"SELECT\n    `accnt`,\n    `clientFillId`,\n    `clientFirm`,\n    `fillNumber`,\n    `engineName`,\n    `spdrSource`,\n    `execStatus`,\n    `clientOrderId`,\n    `srcRoutingCode`,\n    `riskGroupId`,\n    `secKey_at`,\n    `secKey_ts`,\n    `secKey_tk`,\n    `secKey_yr`,\n    `secKey_mn`,\n    `secKey_dy`,\n    `secKey_xx`,\n    `secKey_cp`,\n    `secType`,\n    `execRole`,\n    `extExecBroker`,\n    `fillSide`,\n    `fillPrice`,\n    `fillPriceType`,\n    `fillQuantity`,\n    `childSize`,\n    `fillExch`,\n    `fillDttm`,\n    `fillRefUPrc`,\n    `origExecID`,\n    `lastExecID`,\n    `fillTransactDttm`,\n    `fillReportDetail`,\n    `ssaleFlag`,\n    `positionType`,\n    `theoVol`,\n    `comment`,\n    `userData1`,\n    `userData2`,\n    `strategy`,\n    `timestamp`\nFROM `SRTrade`.`MsgSRAwayExecution`\nWHERE \n    /* Replace with a VARCHAR(16) */ \n    `accnt` = 'Example_accnt'\n  AND\n    /* Replace with a BIGINT */ \n    `clientFillId` = 1234567890\n  AND\n    /* Replace with a VARCHAR(16) */ \n    `clientFirm` = 'Example_clientFirm';\n"})}),"\n",(0,r.jsx)(n.h3,{id:"doc-columns-query",children:"Doc Columns Query"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"SELECT * FROM SRTrade.doccolumns WHERE TABLE_NAME='SRAwayExecution' ORDER BY ordinal_position ASC;\n"})})]})}function o(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},28453:(e,n,d)=>{d.d(n,{R:()=>s,x:()=>c});var r=d(96540);const t={},i=r.createContext(t);function s(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);