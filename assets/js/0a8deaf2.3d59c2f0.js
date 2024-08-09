"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[38040],{51678:(e,d,t)=>{t.r(d),t.d(d,{assets:()=>c,contentTitle:()=>i,default:()=>j,frontMatter:()=>n,metadata:()=>l,toc:()=>x});var r=t(74848),s=t(28453);const n={},i=void 0,l={id:"MessageSchemas/Schema/SRSE Products/SRTrade/SpdrExchRiskDrop/SpdrExchRiskDrop",title:"SpdrExchRiskDrop",description:"V8 Message Definiton",source:"@site/docs/MessageSchemas/Schema/SRSE Products/SRTrade/SpdrExchRiskDrop/SpdrExchRiskDrop.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRTrade/SpdrExchRiskDrop",slug:"/MessageSchemas/Schema/SRSE Products/SRTrade/SpdrExchRiskDrop/",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRTrade/SpdrExchRiskDrop/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"messageSchemasSidebar",previous:{title:"SpdrDropExecutionAck",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRTrade/SpdrDropExecutionAck/"},next:{title:"SpdrExchRiskMgmt",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRTrade/SpdrExchRiskMgmt/"}},c={},x=[{value:"METADATA",id:"metadata",level:3},{value:"Table Definition",id:"table-definition",level:3},{value:"PRIMARY KEY DEFINITION (Unique)",id:"primary-key-definition-unique",level:3},{value:"CREATE TABLE EXAMPLE QUERY",id:"create-table-example-query",level:3},{value:"SELECT TABLE EXAMPLE QUERY",id:"select-table-example-query",level:3}];function h(e){const d={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(d.p,{children:(0,r.jsx)(d.a,{href:"../../../Topics/away-drop/SpdrExchRiskDrop",children:"V8 Message Definiton"})}),"\n",(0,r.jsx)(d.h3,{id:"metadata",children:"METADATA"}),"\n",(0,r.jsxs)(d.table,{children:[(0,r.jsx)(d.thead,{children:(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.th,{children:"Attribute"}),(0,r.jsx)(d.th,{children:"Value"})]})}),(0,r.jsxs)(d.tbody,{children:[(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"Topic"}),(0,r.jsx)(d.td,{children:"1450-away-drop"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"MLink Token"}),(0,r.jsx)(d.td,{children:"SystemData"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"Product"}),(0,r.jsx)(d.td,{children:"SRTrade"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"accessType"}),(0,r.jsx)(d.td,{children:"SELECT"})]})]})]}),"\n",(0,r.jsx)(d.h3,{id:"table-definition",children:"Table Definition"}),"\n",(0,r.jsxs)(d.table,{children:[(0,r.jsx)(d.thead,{children:(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.th,{children:"Field"}),(0,r.jsx)(d.th,{children:"Type"}),(0,r.jsx)(d.th,{children:"Key"}),(0,r.jsx)(d.th,{children:"Default Value"}),(0,r.jsx)(d.th,{children:"Comment"})]})}),(0,r.jsxs)(d.tbody,{children:[(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"exchDropNumber"}),(0,r.jsx)(d.td,{children:"BIGINT"}),(0,r.jsx)(d.td,{children:"PRI"}),(0,r.jsx)(d.td,{children:"0"}),(0,r.jsx)(d.td,{children:"SR Unique ID"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"routingCode"}),(0,r.jsx)(d.td,{children:"TINYTEXT"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"''"}),(0,r.jsx)(d.td,{children:"drop session routing code"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"routingSeqNum"}),(0,r.jsx)(d.td,{children:"INT"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"0"}),(0,r.jsx)(d.td,{children:"drop session routingSeqNum"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"routeRiskGroup"}),(0,r.jsx)(d.td,{children:"VARCHAR(32)"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"''"}),(0,r.jsx)(d.td,{children:"unique code grouping this drop session with 1 or more outbound street sessions"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"secKey_at"}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.a,{href:"../../../Enums/AssetType",children:"enum - AssetType"})}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"'None'"}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"secKey_ts"}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.a,{href:"../../../Enums/TickerSrc",children:"enum - TickerSrc"})}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"'None'"}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"secKey_tk"}),(0,r.jsx)(d.td,{children:"VARCHAR(12)"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"''"}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"secKey_yr"}),(0,r.jsx)(d.td,{children:"SMALLINT UNSIGNED"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"0"}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"secKey_mn"}),(0,r.jsx)(d.td,{children:"TINYINT UNSIGNED"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"0"}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"secKey_dy"}),(0,r.jsx)(d.td,{children:"TINYINT UNSIGNED"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"0"}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"secKey_xx"}),(0,r.jsx)(d.td,{children:"DOUBLE"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"0"}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"secKey_cp"}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.a,{href:"../../../Enums/CallPut",children:"enum - CallPut"})}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"'Call'"}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"secType"}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.a,{href:"../../../Enums/SpdrKeyType",children:"enum - SpdrKeyType"})}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"'None'"}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"account"}),(0,r.jsx)(d.td,{children:"TINYTEXT"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"''"}),(0,r.jsx)(d.td,{children:"FixTag1"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"dropData1"}),(0,r.jsx)(d.td,{children:"TINYTEXT"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"''"}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"dropData2"}),(0,r.jsx)(d.td,{children:"TINYTEXT"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"''"}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"clOrdId"}),(0,r.jsx)(d.td,{children:"VARCHAR(32)"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"''"}),(0,r.jsx)(d.td,{children:"child order clOrdId"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"fillVersion"}),(0,r.jsx)(d.td,{children:"TINYINT UNSIGNED"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"0"}),(0,r.jsx)(d.td,{children:"cancelcorrect version number initial fill is version1"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"fillExecStatus"}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.a,{href:"../../../Enums/ExecStatus",children:"enum - ExecStatus"})}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"'None'"}),(0,r.jsx)(d.td,{children:"SpiderRock execution status FillBustCorrectRejectSysRej"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"fillDttm"}),(0,r.jsx)(d.td,{children:"DATETIME(6)"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"'1900-01-01 00:00:00.000000'"}),(0,r.jsx)(d.td,{children:"fill DateTime from SRDateTime"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"fillQuantity"}),(0,r.jsx)(d.td,{children:"INT"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"0"}),(0,r.jsx)(d.td,{children:"fill size from execReportlastSize"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"fillSide"}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.a,{href:"../../../Enums/BuySell",children:"enum - BuySell"})}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"'None'"}),(0,r.jsx)(d.td,{children:"fill side from execReportside"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"fillPrice"}),(0,r.jsx)(d.td,{children:"DOUBLE"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"0"}),(0,r.jsx)(d.td,{children:"fill price from execReportlastPrice"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"fillTransactDttm"}),(0,r.jsx)(d.td,{children:"DATETIME(6)"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"'1900-01-01 00:00:00.000000'"}),(0,r.jsx)(d.td,{children:"fill DateTime from execReportfillDttm"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"fillMarket"}),(0,r.jsx)(d.td,{children:"VARCHAR(8)"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"''"}),(0,r.jsx)(d.td,{children:"fill market from execReportlastMarket"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"fillExecId"}),(0,r.jsx)(d.td,{children:"TINYTEXT"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"''"}),(0,r.jsx)(d.td,{children:"fill execution id from execReportexecId"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"fillRefExecId"}),(0,r.jsx)(d.td,{children:"TINYTEXT"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"''"}),(0,r.jsx)(d.td,{children:"fill ref execution id from execReportrefExecId only set on a cancel or correct"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"fillLegRefId"}),(0,r.jsx)(d.td,{children:"BIGINT"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"0"}),(0,r.jsx)(d.td,{children:"fill leg ref id from execReportlegRefId"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"fillStreetText"}),(0,r.jsx)(d.td,{children:"TINYTEXT"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"''"}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"netTimestamp"}),(0,r.jsx)(d.td,{children:"BIGINT"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"0"}),(0,r.jsx)(d.td,{children:"drop gateway arrival timestamp"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"timestamp"}),(0,r.jsx)(d.td,{children:"DATETIME(6)"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"'1900-01-01 00:00:00.000000'"}),(0,r.jsx)(d.td,{})]})]})]}),"\n",(0,r.jsx)(d.h3,{id:"primary-key-definition-unique",children:"PRIMARY KEY DEFINITION (Unique)"}),"\n",(0,r.jsxs)(d.table,{children:[(0,r.jsx)(d.thead,{children:(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.th,{children:"Field"}),(0,r.jsx)(d.th,{children:"Sequence"})]})}),(0,r.jsx)(d.tbody,{children:(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"exchDropNumber"}),(0,r.jsx)(d.td,{children:"1"})]})})]}),"\n",(0,r.jsx)(d.h3,{id:"create-table-example-query",children:"CREATE TABLE EXAMPLE QUERY"}),"\n",(0,r.jsx)(d.pre,{children:(0,r.jsx)(d.code,{className:"language-sql",children:"CREATE TABLE `SRTrade`.`MsgSRExchRiskDrop` (\n    `exchDropNumber` BIGINT NOT NULL DEFAULT 0 COMMENT 'SR Unique ID',\n    `routingCode` TINYTEXT NOT NULL DEFAULT '' COMMENT 'drop session routing code',\n    `routingSeqNum` INT NOT NULL DEFAULT 0 COMMENT 'drop session routingSeqNum',\n    `routeRiskGroup` VARCHAR(32) NOT NULL DEFAULT '' COMMENT 'unique code grouping this drop session with 1 or more outbound street sessions',\n    `secKey_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None',\n    `secKey_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','ESX','ANY','CXE','DXE','NXAM','NXBR','NXDUB','NXLS','NXLDN','NXML','NXMLT','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None',\n    `secKey_tk` VARCHAR(12) NOT NULL DEFAULT '',\n    `secKey_yr` SMALLINT UNSIGNED NOT NULL DEFAULT 0,\n    `secKey_mn` TINYINT UNSIGNED NOT NULL DEFAULT 0,\n    `secKey_dy` TINYINT UNSIGNED NOT NULL DEFAULT 0,\n    `secKey_xx` DOUBLE NOT NULL DEFAULT 0,\n    `secKey_cp` ENUM('Call','Put','Pair') NOT NULL DEFAULT 'Call',\n    `secType` ENUM('None','Stock','Future','Option','MLeg') NOT NULL DEFAULT 'None',\n    `account` TINYTEXT NOT NULL DEFAULT '' COMMENT 'FixTag.1',\n    `dropData1` TINYTEXT NOT NULL DEFAULT '',\n    `dropData2` TINYTEXT NOT NULL DEFAULT '',\n    `clOrdId` VARCHAR(32) NOT NULL DEFAULT '' COMMENT 'child order clOrdId',\n    `fillVersion` TINYINT UNSIGNED NOT NULL DEFAULT 0 COMMENT 'cancel/correct version number (initial fill is version=1)',\n    `fillExecStatus` ENUM('None','Fill','Bust','Correct','Reject','SysRej') NOT NULL DEFAULT 'None' COMMENT 'SpiderRock execution status (Fill,Bust,Correct,Reject,SysRej)',\n    `fillDttm` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000' COMMENT 'fill DateTime (from SRDateTime)',\n    `fillQuantity` INT NOT NULL DEFAULT 0 COMMENT 'fill size (from execReport.lastSize)',\n    `fillSide` ENUM('None','Buy','Sell') NOT NULL DEFAULT 'None' COMMENT 'fill side (from execReport.side)',\n    `fillPrice` DOUBLE NOT NULL DEFAULT 0 COMMENT 'fill price (from execReport.lastPrice)',\n    `fillTransactDttm` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000' COMMENT 'fill DateTime (from execReport.fillDttm)',\n    `fillMarket` VARCHAR(8) NOT NULL DEFAULT '' COMMENT 'fill market (from execReport.lastMarket)',\n    `fillExecId` TINYTEXT NOT NULL DEFAULT '' COMMENT 'fill execution id (from execReport.execId)',\n    `fillRefExecId` TINYTEXT NOT NULL DEFAULT '' COMMENT 'fill ref execution id (from execReport.refExecId) [only set on a cancel or correct]',\n    `fillLegRefId` BIGINT NOT NULL DEFAULT 0 COMMENT 'fill leg ref id (from execReport.legRefId)',\n    `fillStreetText` TINYTEXT NOT NULL DEFAULT '',\n    `netTimestamp` BIGINT NOT NULL DEFAULT 0 COMMENT 'drop gateway arrival timestamp',\n    `timestamp` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000',\n    PRIMARY KEY USING HASH (`exchDropNumber`)\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='';\n\n"})}),"\n",(0,r.jsx)(d.h3,{id:"select-table-example-query",children:"SELECT TABLE EXAMPLE QUERY"}),"\n",(0,r.jsx)(d.pre,{children:(0,r.jsx)(d.code,{className:"language-sql",children:"SELECT\n    `exchDropNumber`,\n    `routingCode`,\n    `routingSeqNum`,\n    `routeRiskGroup`,\n    `secKey_at`,\n    `secKey_ts`,\n    `secKey_tk`,\n    `secKey_yr`,\n    `secKey_mn`,\n    `secKey_dy`,\n    `secKey_xx`,\n    `secKey_cp`,\n    `secType`,\n    `account`,\n    `dropData1`,\n    `dropData2`,\n    `clOrdId`,\n    `fillVersion`,\n    `fillExecStatus`,\n    `fillDttm`,\n    `fillQuantity`,\n    `fillSide`,\n    `fillPrice`,\n    `fillTransactDttm`,\n    `fillMarket`,\n    `fillExecId`,\n    `fillRefExecId`,\n    `fillLegRefId`,\n    `fillStreetText`,\n    `netTimestamp`,\n    `timestamp`\nFROM `SRTrade`.`MsgSRExchRiskDrop`\nWHERE \n    /* Replace with a BIGINT */ \n    `exchDropNumber` = 1234567890;\n"})})]})}function j(e={}){const{wrapper:d}={...(0,s.R)(),...e.components};return d?(0,r.jsx)(d,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},28453:(e,d,t)=>{t.d(d,{R:()=>i,x:()=>l});var r=t(96540);const s={},n=r.createContext(s);function i(e){const d=r.useContext(n);return r.useMemo((function(){return"function"==typeof e?e(d):{...d,...e}}),[d,e])}function l(e){let d;return d=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(n.Provider,{value:d},e.children)}}}]);