"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[91144],{81721:(e,r,d)=>{d.r(r),d.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>n,metadata:()=>c,toc:()=>x});var s=d(74848),t=d(28453);const n={},i=void 0,c={id:"MessageSchemas/Schema/SRSE Products/SRTrade/SpdrFixParentExecution/SpdrFixParentExecution",title:"SpdrFixParentExecution",description:"V8 Message Definiton",source:"@site/versioned_docs/version-8.4.10.4/MessageSchemas/Schema/SRSE Products/SRTrade/SpdrFixParentExecution/SpdrFixParentExecution.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRTrade/SpdrFixParentExecution",slug:"/MessageSchemas/Schema/SRSE Products/SRTrade/SpdrFixParentExecution/",permalink:"/docs/8.4.10.4/MessageSchemas/Schema/SRSE Products/SRTrade/SpdrFixParentExecution/",draft:!1,unlisted:!1,tags:[],version:"8.4.10.4",frontMatter:{},sidebar:"messageSchemasSidebar",previous:{title:"SpdrFixParentCancel",permalink:"/docs/8.4.10.4/MessageSchemas/Schema/SRSE Products/SRTrade/SpdrFixParentCancel/"},next:{title:"SpdrFixParentReject",permalink:"/docs/8.4.10.4/MessageSchemas/Schema/SRSE Products/SRTrade/SpdrFixParentReject/"}},l={},x=[{value:"METADATA",id:"metadata",level:3},{value:"Table Definition",id:"table-definition",level:3},{value:"PRIMARY KEY DEFINITION (Unique)",id:"primary-key-definition-unique",level:3},{value:"CREATE TABLE EXAMPLE QUERY",id:"create-table-example-query",level:3},{value:"SELECT TABLE EXAMPLE QUERY",id:"select-table-example-query",level:3},{value:"Doc Columns Query",id:"doc-columns-query",level:3}];function a(e){const r={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"../../../Topics/parent-orders/SpdrFixParentExecution",children:"V8 Message Definiton"})}),"\n",(0,s.jsx)(r.h3,{id:"metadata",children:"METADATA"}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Attribute"}),(0,s.jsx)(r.th,{children:"Value"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Topic"}),(0,s.jsx)(r.td,{children:"3985-parent-orders"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"MLink Token"}),(0,s.jsx)(r.td,{children:"SystemData"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Product"}),(0,s.jsx)(r.td,{children:"SRTrade"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"accessType"}),(0,s.jsx)(r.td,{children:"SELECT"})]})]})]}),"\n",(0,s.jsx)(r.h3,{id:"table-definition",children:"Table Definition"}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Field"}),(0,s.jsx)(r.th,{children:"Type"}),(0,s.jsx)(r.th,{children:"Key"}),(0,s.jsx)(r.th,{children:"Default Value"}),(0,s.jsx)(r.th,{children:"Comment"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"fillNumber"}),(0,s.jsx)(r.td,{children:"BIGINT"}),(0,s.jsx)(r.td,{children:"PRI"}),(0,s.jsx)(r.td,{children:"0"}),(0,s.jsx)(r.td,{})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"uniqueMsgID"}),(0,s.jsx)(r.td,{children:"VARCHAR(30)"}),(0,s.jsx)(r.td,{children:"PRI"}),(0,s.jsx)(r.td,{children:"''"}),(0,s.jsx)(r.td,{children:"internal stream unique messageId  Usually either an execId clOrdId or crossId   Unique across drop stream drop server and client firm"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"serverCode"}),(0,s.jsx)(r.td,{children:"VARCHAR(32)"}),(0,s.jsx)(r.td,{children:"PRI"}),(0,s.jsx)(r.td,{children:"''"}),(0,s.jsx)(r.td,{children:"SR Drop Server Code"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"clientFirm"}),(0,s.jsx)(r.td,{children:"VARCHAR(16)"}),(0,s.jsx)(r.td,{children:"PRI"}),(0,s.jsx)(r.td,{children:"''"}),(0,s.jsx)(r.td,{children:"SR Client Firm"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"streamType"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"../../../Enums/StreamType",children:"enum - StreamType"})}),(0,s.jsx)(r.td,{children:"PRI"}),(0,s.jsx)(r.td,{children:"'None'"}),(0,s.jsx)(r.td,{})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"accnt"}),(0,s.jsx)(r.td,{children:"VARCHAR(16)"}),(0,s.jsx)(r.td,{}),(0,s.jsx)(r.td,{children:"''"}),(0,s.jsx)(r.td,{children:"SR internal account used for permissioningrouting"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"secKey_at"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"../../../Enums/AssetType",children:"enum - AssetType"})}),(0,s.jsx)(r.td,{}),(0,s.jsx)(r.td,{children:"'None'"}),(0,s.jsx)(r.td,{})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"secKey_ts"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"../../../Enums/TickerSrc",children:"enum - TickerSrc"})}),(0,s.jsx)(r.td,{}),(0,s.jsx)(r.td,{children:"'None'"}),(0,s.jsx)(r.td,{})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"secKey_tk"}),(0,s.jsx)(r.td,{children:"VARCHAR(12)"}),(0,s.jsx)(r.td,{}),(0,s.jsx)(r.td,{children:"''"}),(0,s.jsx)(r.td,{})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"secKey_yr"}),(0,s.jsx)(r.td,{children:"SMALLINT UNSIGNED"}),(0,s.jsx)(r.td,{}),(0,s.jsx)(r.td,{children:"0"}),(0,s.jsx)(r.td,{})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"secKey_mn"}),(0,s.jsx)(r.td,{children:"TINYINT UNSIGNED"}),(0,s.jsx)(r.td,{}),(0,s.jsx)(r.td,{children:"0"}),(0,s.jsx)(r.td,{})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"secKey_dy"}),(0,s.jsx)(r.td,{children:"TINYINT UNSIGNED"}),(0,s.jsx)(r.td,{}),(0,s.jsx)(r.td,{children:"0"}),(0,s.jsx)(r.td,{})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"secKey_xx"}),(0,s.jsx)(r.td,{children:"DOUBLE"}),(0,s.jsx)(r.td,{}),(0,s.jsx)(r.td,{children:"0"}),(0,s.jsx)(r.td,{})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"secKey_cp"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"../../../Enums/CallPut",children:"enum - CallPut"})}),(0,s.jsx)(r.td,{}),(0,s.jsx)(r.td,{children:"'Call'"}),(0,s.jsx)(r.td,{})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"secType"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"../../../Enums/SpdrKeyType",children:"enum - SpdrKeyType"})}),(0,s.jsx)(r.td,{}),(0,s.jsx)(r.td,{children:"'None'"}),(0,s.jsx)(r.td,{})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"baseParentNumber"}),(0,s.jsx)(r.td,{children:"CHAR(19)"}),(0,s.jsx)(r.td,{}),(0,s.jsx)(r.td,{children:"'0000-0000-0000-0000'"}),(0,s.jsx)(r.td,{children:"SpiderRock base parent number"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"parentNumber"}),(0,s.jsx)(r.td,{children:"CHAR(19)"}),(0,s.jsx)(r.td,{}),(0,s.jsx)(r.td,{children:"'0000-0000-0000-0000'"}),(0,s.jsx)(r.td,{children:"SpiderRock parent number"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"fillVersion"}),(0,s.jsx)(r.td,{children:"TINYINT UNSIGNED"}),(0,s.jsx)(r.td,{}),(0,s.jsx)(r.td,{children:"0"}),(0,s.jsx)(r.td,{})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"clOrdId"}),(0,s.jsx)(r.td,{children:"CHAR(19)"}),(0,s.jsx)(r.td,{}),(0,s.jsx)(r.td,{children:"'0000-0000-0000-0000'"}),(0,s.jsx)(r.td,{children:"SR Child Order Number matches SpdrChildOrderpkeyclOrdId"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"side"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"../../../Enums/BuySell",children:"enum - BuySell"})}),(0,s.jsx)(r.td,{}),(0,s.jsx)(r.td,{children:"'None'"}),(0,s.jsx)(r.td,{})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"execStatus"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"../../../Enums/ExecStatus",children:"enum - ExecStatus"})}),(0,s.jsx)(r.td,{}),(0,s.jsx)(r.td,{children:"'None'"}),(0,s.jsx)(r.td,{children:"SpiderRock execution status FillBustCorrect"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"lastFillQty"}),(0,s.jsx)(r.td,{children:"INT"}),(0,s.jsx)(r.td,{}),(0,s.jsx)(r.td,{children:"0"}),(0,s.jsx)(r.td,{})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"lastFillPrice"}),(0,s.jsx)(r.td,{children:"DOUBLE"}),(0,s.jsx)(r.td,{}),(0,s.jsx)(r.td,{children:"0"}),(0,s.jsx)(r.td,{})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"lastFillDttm"}),(0,s.jsx)(r.td,{children:"DATETIME(6)"}),(0,s.jsx)(r.td,{}),(0,s.jsx)(r.td,{children:"'1900-01-01 00:00:00.000000'"}),(0,s.jsx)(r.td,{})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"cumFillQty"}),(0,s.jsx)(r.td,{children:"INT"}),(0,s.jsx)(r.td,{}),(0,s.jsx)(r.td,{children:"0"}),(0,s.jsx)(r.td,{children:"from SpdrParentExecutioncumFillQty"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"avgFillPrice"}),(0,s.jsx)(r.td,{children:"DOUBLE"}),(0,s.jsx)(r.td,{}),(0,s.jsx)(r.td,{children:"0"}),(0,s.jsx)(r.td,{children:"from SpdrParentExecutionavgFillPrice"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"fixClOrdId"}),(0,s.jsx)(r.td,{children:"VARCHAR(32)"}),(0,s.jsx)(r.td,{}),(0,s.jsx)(r.td,{children:"''"}),(0,s.jsx)(r.td,{children:"stream clOrdID11"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"fixCrossId"}),(0,s.jsx)(r.td,{children:"VARCHAR(32)"}),(0,s.jsx)(r.td,{}),(0,s.jsx)(r.td,{children:"''"}),(0,s.jsx)(r.td,{children:"stream crossID548"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"fixExecId"}),(0,s.jsx)(r.td,{children:"VARCHAR(32)"}),(0,s.jsx)(r.td,{}),(0,s.jsx)(r.td,{children:"''"}),(0,s.jsx)(r.td,{children:"stream execID17"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"fixExecType"}),(0,s.jsx)(r.td,{children:"VARCHAR(4)"}),(0,s.jsx)(r.td,{}),(0,s.jsx)(r.td,{children:"''"}),(0,s.jsx)(r.td,{children:"stream execType150"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"fixOrdStatus"}),(0,s.jsx)(r.td,{children:"VARCHAR(4)"}),(0,s.jsx)(r.td,{}),(0,s.jsx)(r.td,{children:"''"}),(0,s.jsx)(r.td,{children:"stream ordStatus39"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"fixCumFillQty"}),(0,s.jsx)(r.td,{children:"INT"}),(0,s.jsx)(r.td,{}),(0,s.jsx)(r.td,{children:"0"}),(0,s.jsx)(r.td,{children:"stream cumQty14"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"fixAvgFillPx"}),(0,s.jsx)(r.td,{children:"DOUBLE"}),(0,s.jsx)(r.td,{}),(0,s.jsx)(r.td,{children:"0"}),(0,s.jsx)(r.td,{children:"stream avgPx6"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"fixTransactDttm"}),(0,s.jsx)(r.td,{children:"DATETIME(6)"}),(0,s.jsx)(r.td,{}),(0,s.jsx)(r.td,{children:"'1900-01-01 00:00:00.000000'"}),(0,s.jsx)(r.td,{children:"stream transactTime60"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"netTimestamp"}),(0,s.jsx)(r.td,{children:"BIGINT"}),(0,s.jsx)(r.td,{}),(0,s.jsx)(r.td,{children:"0"}),(0,s.jsx)(r.td,{children:"drop gateway arrival timestamp"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"timestamp"}),(0,s.jsx)(r.td,{children:"DATETIME(6)"}),(0,s.jsx)(r.td,{}),(0,s.jsx)(r.td,{children:"'1900-01-01 00:00:00.000000'"}),(0,s.jsx)(r.td,{})]})]})]}),"\n",(0,s.jsx)(r.h3,{id:"primary-key-definition-unique",children:"PRIMARY KEY DEFINITION (Unique)"}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Field"}),(0,s.jsx)(r.th,{children:"Sequence"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"fillNumber"}),(0,s.jsx)(r.td,{children:"1"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"uniqueMsgID"}),(0,s.jsx)(r.td,{children:"2"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"serverCode"}),(0,s.jsx)(r.td,{children:"3"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"clientFirm"}),(0,s.jsx)(r.td,{children:"4"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"streamType"}),(0,s.jsx)(r.td,{children:"5"})]})]})]}),"\n",(0,s.jsx)(r.h3,{id:"create-table-example-query",children:"CREATE TABLE EXAMPLE QUERY"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-sql",children:"CREATE TABLE `SRTrade`.`MsgSRFixParentExecution` (\n    `fillNumber` BIGINT NOT NULL DEFAULT 0,\n    `uniqueMsgID` VARCHAR(30) NOT NULL DEFAULT '' COMMENT 'internal stream unique messageId.  Usually either an execId, clOrdId, or crossId.   Unique across drop stream (drop server and client firm)',\n    `serverCode` VARCHAR(32) NOT NULL DEFAULT '' COMMENT 'SR Drop Server Code',\n    `clientFirm` VARCHAR(16) NOT NULL DEFAULT '' COMMENT 'SR Client Firm',\n    `streamType` ENUM('None','ClientGW','DropServer') NOT NULL DEFAULT 'None',\n    `accnt` VARCHAR(16) NOT NULL DEFAULT '' COMMENT 'SR internal account (used for permissioning/routing)',\n    `secKey_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None',\n    `secKey_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','ESX','ANY','CXE','DXE','NXAM','NXBR','NXDUB','NXLS','NXLDN','NXML','NXMLT','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None',\n    `secKey_tk` VARCHAR(12) NOT NULL DEFAULT '',\n    `secKey_yr` SMALLINT UNSIGNED NOT NULL DEFAULT 0,\n    `secKey_mn` TINYINT UNSIGNED NOT NULL DEFAULT 0,\n    `secKey_dy` TINYINT UNSIGNED NOT NULL DEFAULT 0,\n    `secKey_xx` DOUBLE NOT NULL DEFAULT 0,\n    `secKey_cp` ENUM('Call','Put','Pair') NOT NULL DEFAULT 'Call',\n    `secType` ENUM('None','Stock','Future','Option','MLeg') NOT NULL DEFAULT 'None',\n    `baseParentNumber` CHAR(19) NOT NULL DEFAULT '0000-0000-0000-0000' COMMENT 'SpiderRock base parent number',\n    `parentNumber` CHAR(19) NOT NULL DEFAULT '0000-0000-0000-0000' COMMENT 'SpiderRock parent number',\n    `fillVersion` TINYINT UNSIGNED NOT NULL DEFAULT 0,\n    `clOrdId` CHAR(19) NOT NULL DEFAULT '0000-0000-0000-0000' COMMENT 'SR Child Order Number (matches SpdrChildOrder.pkey.clOrdId)',\n    `side` ENUM('None','Buy','Sell') NOT NULL DEFAULT 'None',\n    `execStatus` ENUM('None','Fill','Bust','Correct','Reject','SysRej') NOT NULL DEFAULT 'None' COMMENT 'SpiderRock execution status (Fill,Bust,Correct)',\n    `lastFillQty` INT NOT NULL DEFAULT 0,\n    `lastFillPrice` DOUBLE NOT NULL DEFAULT 0,\n    `lastFillDttm` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000',\n    `cumFillQty` INT NOT NULL DEFAULT 0 COMMENT 'from SpdrParentExecution.cumFillQty',\n    `avgFillPrice` DOUBLE NOT NULL DEFAULT 0 COMMENT 'from SpdrParentExecution.avgFillPrice',\n    `fixClOrdId` VARCHAR(32) NOT NULL DEFAULT '' COMMENT 'stream clOrdID<11>',\n    `fixCrossId` VARCHAR(32) NOT NULL DEFAULT '' COMMENT 'stream crossID<548>',\n    `fixExecId` VARCHAR(32) NOT NULL DEFAULT '' COMMENT 'stream execID<17>',\n    `fixExecType` VARCHAR(4) NOT NULL DEFAULT '' COMMENT 'stream execType<150>',\n    `fixOrdStatus` VARCHAR(4) NOT NULL DEFAULT '' COMMENT 'stream ordStatus<39>',\n    `fixCumFillQty` INT NOT NULL DEFAULT 0 COMMENT 'stream cumQty<14>',\n    `fixAvgFillPx` DOUBLE NOT NULL DEFAULT 0 COMMENT 'stream avgPx<6>',\n    `fixTransactDttm` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000' COMMENT 'stream transactTime<60>',\n    `netTimestamp` BIGINT NOT NULL DEFAULT 0 COMMENT 'drop gateway arrival timestamp',\n    `timestamp` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000',\n    CONSTRAINT nonnegative_baseParentNumber CHECK(ASCII(baseParentNumber) < 56),\n    CONSTRAINT nonnegative_parentNumber CHECK(ASCII(parentNumber) < 56),\n    CONSTRAINT nonnegative_clOrdId CHECK(ASCII(clOrdId) < 56),\n    PRIMARY KEY USING HASH (`fillNumber`,`uniqueMsgID`,`serverCode`,`clientFirm`,`streamType`)\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='';\n\n"})}),"\n",(0,s.jsx)(r.h3,{id:"select-table-example-query",children:"SELECT TABLE EXAMPLE QUERY"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-sql",children:"SELECT\n    `fillNumber`,\n    `uniqueMsgID`,\n    `serverCode`,\n    `clientFirm`,\n    `streamType`,\n    `accnt`,\n    `secKey_at`,\n    `secKey_ts`,\n    `secKey_tk`,\n    `secKey_yr`,\n    `secKey_mn`,\n    `secKey_dy`,\n    `secKey_xx`,\n    `secKey_cp`,\n    `secType`,\n    `baseParentNumber`,\n    `parentNumber`,\n    `fillVersion`,\n    `clOrdId`,\n    `side`,\n    `execStatus`,\n    `lastFillQty`,\n    `lastFillPrice`,\n    `lastFillDttm`,\n    `cumFillQty`,\n    `avgFillPrice`,\n    `fixClOrdId`,\n    `fixCrossId`,\n    `fixExecId`,\n    `fixExecType`,\n    `fixOrdStatus`,\n    `fixCumFillQty`,\n    `fixAvgFillPx`,\n    `fixTransactDttm`,\n    `netTimestamp`,\n    `timestamp`\nFROM `SRTrade`.`MsgSRFixParentExecution`\nWHERE \n    /* Replace with a BIGINT */ \n    `fillNumber` = 1234567890\n  AND\n    /* Replace with a VARCHAR(30) */ \n    `uniqueMsgID` = 'Example_uniqueMsgID'\n  AND\n    /* Replace with a VARCHAR(32) */ \n    `serverCode` = 'Example_serverCode'\n  AND\n    /* Replace with a VARCHAR(16) */ \n    `clientFirm` = 'Example_clientFirm'\n  AND\n    /* Replace with a ENUM('None','ClientGW','DropServer') */ \n    `streamType` = 'None';\n"})}),"\n",(0,s.jsx)(r.h3,{id:"doc-columns-query",children:"Doc Columns Query"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-sql",children:"SELECT * FROM SRTrade.doccolumns WHERE TABLE_NAME='SpdrFixParentExecution' ORDER BY ordinal_position ASC;\n"})})]})}function h(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},28453:(e,r,d)=>{d.d(r,{R:()=>i,x:()=>c});var s=d(96540);const t={},n=s.createContext(t);function i(e){const r=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),s.createElement(n.Provider,{value:r},e.children)}}}]);