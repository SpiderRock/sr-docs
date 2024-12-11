"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[20619],{99774:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>d,default:()=>x,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var l=t(74848),i=t(28453);const r={},d=void 0,s={id:"MessageSchemas/Schema/SRSE Products/SRTrade/FutAwayTktGateway/FutAwayTktGateway",title:"FutAwayTktGateway",description:"V8 Message Definiton",source:"@site/versioned_docs/version-8.4.12.1/MessageSchemas/Schema/SRSE Products/SRTrade/FutAwayTktGateway/FutAwayTktGateway.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRTrade/FutAwayTktGateway",slug:"/MessageSchemas/Schema/SRSE Products/SRTrade/FutAwayTktGateway/",permalink:"/docs/8.4.12.1/MessageSchemas/Schema/SRSE Products/SRTrade/FutAwayTktGateway/",draft:!1,unlisted:!1,tags:[],version:"8.4.12.1",frontMatter:{},sidebar:"messageSchemasSidebar",previous:{title:"ExternAggGroupReport",permalink:"/docs/8.4.12.1/MessageSchemas/Schema/SRSE Products/SRTrade/ExternAggGroupReport/"},next:{title:"FutOrderGateway",permalink:"/docs/8.4.12.1/MessageSchemas/Schema/SRSE Products/SRTrade/FutOrderGateway/"}},a={},c=[{value:"METADATA",id:"metadata",level:3},{value:"Table Definition",id:"table-definition",level:3},{value:"PRIMARY KEY DEFINITION (Unique)",id:"primary-key-definition-unique",level:3},{value:"CREATE TABLE EXAMPLE QUERY",id:"create-table-example-query",level:3},{value:"SELECT TABLE EXAMPLE QUERY",id:"select-table-example-query",level:3},{value:"UPDATE TABLE EXAMPLE QUERY",id:"update-table-example-query",level:3},{value:"INSERT TABLE EXAMPLE QUERY",id:"insert-table-example-query",level:3},{value:"DELETE TABLE EXAMPLE QUERY",id:"delete-table-example-query",level:3},{value:"Doc Columns Query",id:"doc-columns-query",level:3}];function h(e){const n={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.p,{children:(0,l.jsx)(n.a,{href:"../../../Topics/srse-gateway/FutAwayTktGateway",children:"V8 Message Definiton"})}),"\n",(0,l.jsx)(n.p,{children:"FutAwayTktGateway inserts are validated and convered to away SpdrParentExecution records and published. If successfully published they will be visible in the SpdrParentExecution table and on SpiderRock GUI tools.\nReplaces are allowed but they are functionally identical to updates in that only the fillPrice and fillQuantity fields are actually changed."}),"\n",(0,l.jsx)(n.h3,{id:"metadata",children:"METADATA"}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Attribute"}),(0,l.jsx)(n.th,{children:"Value"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Topic"}),(0,l.jsx)(n.td,{children:"5120-srse-gateway"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"MLink Token"}),(0,l.jsx)(n.td,{children:"Internal"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Product"}),(0,l.jsx)(n.td,{children:"SRTrade"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"accessType"}),(0,l.jsx)(n.td,{children:"SELECT,UPDATE,INSERT,DELETE"})]})]})]}),"\n",(0,l.jsx)(n.h3,{id:"table-definition",children:"Table Definition"}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Field"}),(0,l.jsx)(n.th,{children:"Type"}),(0,l.jsx)(n.th,{children:"Key"}),(0,l.jsx)(n.th,{children:"Default Value"}),(0,l.jsx)(n.th,{children:"Comment"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"accnt"}),(0,l.jsx)(n.td,{children:"VARCHAR(16)"}),(0,l.jsx)(n.td,{children:"PRI"}),(0,l.jsx)(n.td,{children:"''"}),(0,l.jsx)(n.td,{})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"clientFillID"}),(0,l.jsx)(n.td,{children:"BIGINT"}),(0,l.jsx)(n.td,{children:"PRI"}),(0,l.jsx)(n.td,{children:"0"}),(0,l.jsx)(n.td,{children:"client execution ID these must be unique on a peraccount basis copied into SpdrParentExecutionaltFillId"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"clientFirm"}),(0,l.jsx)(n.td,{children:"VARCHAR(16)"}),(0,l.jsx)(n.td,{children:"PRI"}),(0,l.jsx)(n.td,{children:"''"}),(0,l.jsx)(n.td,{})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"clientOrderID"}),(0,l.jsx)(n.td,{children:"VARCHAR(24)"}),(0,l.jsx)(n.td,{}),(0,l.jsx)(n.td,{children:"''"}),(0,l.jsx)(n.td,{children:"client orderID copied into SpdrParentExecutionaltOrderId"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"riskGroupId"}),(0,l.jsx)(n.td,{children:"CHAR(19)"}),(0,l.jsx)(n.td,{}),(0,l.jsx)(n.td,{children:"'0000-0000-0000-0000'"}),(0,l.jsx)(n.td,{children:"Default 0 none  Required to be nonzero if incorporating risk into an existing riskGroupId"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"fkey_at"}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.a,{href:"../../../Enums/AssetType",children:"enum - AssetType"})}),(0,l.jsx)(n.td,{}),(0,l.jsx)(n.td,{children:"'None'"}),(0,l.jsx)(n.td,{})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"fkey_ts"}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.a,{href:"../../../Enums/TickerSrc",children:"enum - TickerSrc"})}),(0,l.jsx)(n.td,{}),(0,l.jsx)(n.td,{children:"'None'"}),(0,l.jsx)(n.td,{})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"fkey_tk"}),(0,l.jsx)(n.td,{children:"VARCHAR(12)"}),(0,l.jsx)(n.td,{}),(0,l.jsx)(n.td,{children:"''"}),(0,l.jsx)(n.td,{})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"fkey_yr"}),(0,l.jsx)(n.td,{children:"SMALLINT UNSIGNED"}),(0,l.jsx)(n.td,{}),(0,l.jsx)(n.td,{children:"0"}),(0,l.jsx)(n.td,{})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"fkey_mn"}),(0,l.jsx)(n.td,{children:"TINYINT UNSIGNED"}),(0,l.jsx)(n.td,{}),(0,l.jsx)(n.td,{children:"0"}),(0,l.jsx)(n.td,{})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"fkey_dy"}),(0,l.jsx)(n.td,{children:"TINYINT UNSIGNED"}),(0,l.jsx)(n.td,{}),(0,l.jsx)(n.td,{children:"0"}),(0,l.jsx)(n.td,{})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"fillSide"}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.a,{href:"../../../Enums/BuySell",children:"enum - BuySell"})}),(0,l.jsx)(n.td,{}),(0,l.jsx)(n.td,{children:"'None'"}),(0,l.jsx)(n.td,{})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"fillPrice"}),(0,l.jsx)(n.td,{children:"DOUBLE"}),(0,l.jsx)(n.td,{}),(0,l.jsx)(n.td,{children:"0"}),(0,l.jsx)(n.td,{})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"fillQuantity"}),(0,l.jsx)(n.td,{children:"INT"}),(0,l.jsx)(n.td,{}),(0,l.jsx)(n.td,{children:"0"}),(0,l.jsx)(n.td,{})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"fillRefUPrc"}),(0,l.jsx)(n.td,{children:"DOUBLE"}),(0,l.jsx)(n.td,{}),(0,l.jsx)(n.td,{children:"0"}),(0,l.jsx)(n.td,{children:"reference underlier price  fill arrival time"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"deliverExecReport"}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.a,{href:"../../../Enums/YesNo",children:"enum - YesNo"})}),(0,l.jsx)(n.td,{}),(0,l.jsx)(n.td,{children:"'No'"}),(0,l.jsx)(n.td,{children:"Drop a copy of the execution report"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"SRfillID"}),(0,l.jsx)(n.td,{children:"BIGINT"}),(0,l.jsx)(n.td,{}),(0,l.jsx)(n.td,{children:"0"}),(0,l.jsx)(n.td,{children:"SR internal fill number any values submitted will be overwritten by the SR generated fill number"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"comment"}),(0,l.jsx)(n.td,{children:"VARCHAR(64)"}),(0,l.jsx)(n.td,{}),(0,l.jsx)(n.td,{children:"''"}),(0,l.jsx)(n.td,{children:"text comment if any"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"execBrkr"}),(0,l.jsx)(n.td,{children:"VARCHAR(12)"}),(0,l.jsx)(n.td,{}),(0,l.jsx)(n.td,{children:"''"}),(0,l.jsx)(n.td,{children:"client external exec broker code"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"userData1"}),(0,l.jsx)(n.td,{children:"TINYTEXT"}),(0,l.jsx)(n.td,{}),(0,l.jsx)(n.td,{children:"''"}),(0,l.jsx)(n.td,{children:"client supplied data field passes through to parent and child executions and reports as well as FIX drops"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"userData2"}),(0,l.jsx)(n.td,{children:"TINYTEXT"}),(0,l.jsx)(n.td,{}),(0,l.jsx)(n.td,{children:"''"}),(0,l.jsx)(n.td,{children:"client supplied data field passes through to parent and child executions and reports as well as FIX drops"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"strategy"}),(0,l.jsx)(n.td,{children:"VARCHAR(36)"}),(0,l.jsx)(n.td,{}),(0,l.jsx)(n.td,{children:"''"}),(0,l.jsx)(n.td,{children:"clientsupplied strategy string"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"fillDttm"}),(0,l.jsx)(n.td,{children:"DATETIME(6)"}),(0,l.jsx)(n.td,{}),(0,l.jsx)(n.td,{children:"'1990-01-01'"}),(0,l.jsx)(n.td,{})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"timestamp"}),(0,l.jsx)(n.td,{children:"DATETIME(6)"}),(0,l.jsx)(n.td,{}),(0,l.jsx)(n.td,{children:"'1900-01-01 00:00:00.000000'"}),(0,l.jsx)(n.td,{})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"checksum"}),(0,l.jsx)(n.td,{children:"TINYINT UNSIGNED"}),(0,l.jsx)(n.td,{}),(0,l.jsx)(n.td,{children:"0"}),(0,l.jsx)(n.td,{children:"Must be set to 13  This helps detect some columnvalue misalignments"})]})]})]}),"\n",(0,l.jsx)(n.h3,{id:"primary-key-definition-unique",children:"PRIMARY KEY DEFINITION (Unique)"}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Field"}),(0,l.jsx)(n.th,{children:"Sequence"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"accnt"}),(0,l.jsx)(n.td,{children:"1"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"clientFillID"}),(0,l.jsx)(n.td,{children:"2"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"clientFirm"}),(0,l.jsx)(n.td,{children:"3"})]})]})]}),"\n",(0,l.jsx)(n.h3,{id:"create-table-example-query",children:"CREATE TABLE EXAMPLE QUERY"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"CREATE TABLE `SRTrade`.`MsgFutAwayTktGateway` (\n    `accnt` VARCHAR(16) NOT NULL DEFAULT '',\n    `clientFillID` BIGINT NOT NULL DEFAULT 0 COMMENT 'client execution ID, these must be unique on a per-account basis [copied into SpdrParentExecution.altFillId]',\n    `clientFirm` VARCHAR(16) NOT NULL DEFAULT '',\n    `clientOrderID` VARCHAR(24) NOT NULL DEFAULT '' COMMENT 'client orderID [copied into SpdrParentExecution.altOrderId]',\n    `riskGroupId` CHAR(19) NOT NULL DEFAULT '0000-0000-0000-0000' COMMENT 'Default: 0 (none).  Required to be non-zero if incorporating risk into an existing riskGroupId',\n    `fkey_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None',\n    `fkey_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','EUX','ANY','CXE','DXE','NXAM','NXBR','NXLS','NXML','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None',\n    `fkey_tk` VARCHAR(12) NOT NULL DEFAULT '',\n    `fkey_yr` SMALLINT UNSIGNED NOT NULL DEFAULT 0,\n    `fkey_mn` TINYINT UNSIGNED NOT NULL DEFAULT 0,\n    `fkey_dy` TINYINT UNSIGNED NOT NULL DEFAULT 0,\n    `fillSide` ENUM('None','Buy','Sell') NOT NULL DEFAULT 'None',\n    `fillPrice` DOUBLE NOT NULL DEFAULT 0,\n    `fillQuantity` INT NOT NULL DEFAULT 0,\n    `fillRefUPrc` DOUBLE NOT NULL DEFAULT 0 COMMENT 'reference underlier price @ fill arrival time',\n    `deliverExecReport` ENUM('Yes','No') NOT NULL DEFAULT 'No' COMMENT 'Drop a copy of the execution report',\n    `SRfillID` BIGINT NOT NULL DEFAULT 0 COMMENT 'SR internal fill number, any values submitted will be overwritten by the SR generated fill number',\n    `comment` VARCHAR(64) NOT NULL DEFAULT '' COMMENT 'text comment (if any)',\n    `execBrkr` VARCHAR(12) NOT NULL DEFAULT '' COMMENT 'client (external) exec broker code',\n    `userData1` TINYTEXT NOT NULL DEFAULT '' COMMENT 'client supplied data field; passes through to parent and child executions and reports as well as FIX drops',\n    `userData2` TINYTEXT NOT NULL DEFAULT '' COMMENT 'client supplied data field; passes through to parent and child executions and reports as well as FIX drops',\n    `strategy` VARCHAR(36) NOT NULL DEFAULT '' COMMENT 'client-supplied strategy string',\n    `fillDttm` DATETIME(6) NOT NULL DEFAULT '1990-01-01',\n    `timestamp` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000',\n    `checksum` TINYINT UNSIGNED NOT NULL DEFAULT 0 COMMENT 'Must be set to 13.  This helps detect some column,value misalignments.',\n    CONSTRAINT nonnegative_riskGroupId CHECK(ASCII(riskGroupId) < 56),\n    PRIMARY KEY USING HASH (`accnt`,`clientFillID`,`clientFirm`)\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='FutAwayTktGateway inserts are validated and convered to away SpdrParentExecution records and published. If successfully published they will be visible in the SpdrParentExecution table and on SpiderRock GUI tools.\\nReplaces are allowed but they are functionally identical to updates in that only the fillPrice and fillQuantity fields are actually changed.';\n\n"})}),"\n",(0,l.jsx)(n.h3,{id:"select-table-example-query",children:"SELECT TABLE EXAMPLE QUERY"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"SELECT\n    `accnt`,\n    `clientFillID`,\n    `clientFirm`,\n    `clientOrderID`,\n    `riskGroupId`,\n    `fkey_at`,\n    `fkey_ts`,\n    `fkey_tk`,\n    `fkey_yr`,\n    `fkey_mn`,\n    `fkey_dy`,\n    `fillSide`,\n    `fillPrice`,\n    `fillQuantity`,\n    `fillRefUPrc`,\n    `deliverExecReport`,\n    `SRfillID`,\n    `comment`,\n    `execBrkr`,\n    `userData1`,\n    `userData2`,\n    `strategy`,\n    `fillDttm`,\n    `timestamp`,\n    `checksum`\nFROM `SRTrade`.`MsgFutAwayTktGateway`\nWHERE \n    /* Replace with a VARCHAR(16) */ \n    `accnt` = 'Example_accnt'\n  AND\n    /* Replace with a BIGINT */ \n    `clientFillID` = 1234567890\n  AND\n    /* Replace with a VARCHAR(16) */ \n    `clientFirm` = 'Example_clientFirm';\n"})}),"\n",(0,l.jsx)(n.h3,{id:"update-table-example-query",children:"UPDATE TABLE EXAMPLE QUERY"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"UPDATE `SRTrade`.`MsgFutAwayTktGateway` \nSET\n    /* Replace with a VARCHAR(24) */ \n    `clientOrderID` = 'Example_clientOrderID',\n    /* Replace with a CHAR(19) */\n    `riskGroupId` = 'Example_riskGroupId',\n    /* Replace with a ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') */ \n    `fkey_at` = 'None',\n    /* Replace with a ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','EUX','ANY','CXE','DXE','NXAM','NXBR','NXLS','NXML','NXOS','NXP','EUREX','CEDX','ICEFE') */ \n    `fkey_ts` = 'None',\n    /* Replace with a VARCHAR(12) */ \n    `fkey_tk` = 'Example_fkey_tk',\n    /* Replace with a SMALLINT UNSIGNED */ \n    `fkey_yr` = 123,\n    /* Replace with a TINYINT UNSIGNED */ \n    `fkey_mn` = 1,\n    /* Replace with a TINYINT UNSIGNED */ \n    `fkey_dy` = 1,\n    /* Replace with a ENUM('None','Buy','Sell') */ \n    `fillSide` = 'None',\n    /* Replace with a DOUBLE */ \n    `fillPrice` = 4.56,\n    /* Replace with a INT */ \n    `fillQuantity` = 5,\n    /* Replace with a DOUBLE */ \n    `fillRefUPrc` = 4.56,\n    /* Replace with a ENUM('Yes','No') */\n    `deliverExecReport` = 'No',\n    /* Replace with a BIGINT */\n    `SRfillID` = 1234567890,\n    /* Replace with a VARCHAR(64) */\n    `comment` = 'Example_comment',\n    /* Replace with a VARCHAR(12) */\n    `execBrkr` = 'Example_execBrkr',\n    /* Replace with a TINYTEXT */\n    `userData1` = 'dummy tiny text',\n    /* Replace with a TINYTEXT */\n    `userData2` = 'dummy tiny text',\n    /* Replace with a VARCHAR(36) */ \n    `strategy` = 'Example_strategy',\n    /* Replace with a DATETIME(6) */\n    `fillDttm` = '2022-01-01 12:34:56.000000',\n    /* Replace with a DATETIME(6) */\n    `timestamp` = '2022-01-01 12:34:56.000000',\n    /* Replace with a TINYINT UNSIGNED */ \n    `checksum` = 1\nWHERE\n    /* Replace with a VARCHAR(16) */ \n    `accnt` = 'Example_accnt'\n  AND\n    /* Replace with a BIGINT */ \n    `clientFillID` = 1234567890\n  AND\n    /* Replace with a VARCHAR(16) */ \n    `clientFirm` = 'Example_clientFirm';\n"})}),"\n",(0,l.jsx)(n.h3,{id:"insert-table-example-query",children:"INSERT TABLE EXAMPLE QUERY"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"INSERT INTO `SRTrade`.`MsgFutAwayTktGateway`(\n    /* Replace with a VARCHAR(16) */ \n    `accnt`,\n    /* Replace with a BIGINT */ \n    `clientFillID`,\n    /* Replace with a VARCHAR(16) */ \n    `clientFirm`,\n    /* Replace with a VARCHAR(24) */ \n    `clientOrderID`,\n    /* Replace with a CHAR(19) */\n    `riskGroupId`,\n    /* Replace with a ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') */ \n    `fkey_at`,\n    /* Replace with a ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','EUX','ANY','CXE','DXE','NXAM','NXBR','NXLS','NXML','NXOS','NXP','EUREX','CEDX','ICEFE') */ \n    `fkey_ts`,\n    /* Replace with a VARCHAR(12) */ \n    `fkey_tk`,\n    /* Replace with a SMALLINT UNSIGNED */ \n    `fkey_yr`,\n    /* Replace with a TINYINT UNSIGNED */ \n    `fkey_mn`,\n    /* Replace with a TINYINT UNSIGNED */ \n    `fkey_dy`,\n    /* Replace with a ENUM('None','Buy','Sell') */ \n    `fillSide`,\n    /* Replace with a DOUBLE */ \n    `fillPrice`,\n    /* Replace with a INT */ \n    `fillQuantity`,\n    /* Replace with a DOUBLE */ \n    `fillRefUPrc`,\n    /* Replace with a ENUM('Yes','No') */\n    `deliverExecReport`,\n    /* Replace with a BIGINT */\n    `SRfillID`,\n    /* Replace with a VARCHAR(64) */\n    `comment`,\n    /* Replace with a VARCHAR(12) */\n    `execBrkr`,\n    /* Replace with a TINYTEXT */\n    `userData1`,\n    /* Replace with a TINYTEXT */\n    `userData2`,\n    /* Replace with a VARCHAR(36) */ \n    `strategy`,\n    /* Replace with a DATETIME(6) */\n    `fillDttm`,\n    /* Replace with a DATETIME(6) */\n    `timestamp`,\n    /* Replace with a TINYINT UNSIGNED */ \n    `checksum`\n) \nVALUES(\n    'Example_accnt',\n    1234567890,\n    'Example_clientFirm',\n    'Example_clientOrderID',\n    'Example_riskGroupId',\n    'None',\n    'None',\n    'Example_fkey_tk',\n    123,\n    1,\n    1,\n    'None',\n    4.56,\n    5,\n    4.56,\n    'No',\n    1234567890,\n    'Example_comment',\n    'Example_execBrkr',\n    'dummy tiny text',\n    'dummy tiny text',\n    'Example_strategy',\n    '2022-01-01 12:34:56.000000',\n    '2022-01-01 12:34:56.000000',\n    1\n);\n"})}),"\n",(0,l.jsx)(n.h3,{id:"delete-table-example-query",children:"DELETE TABLE EXAMPLE QUERY"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"DELETE FROM `SRTrade`.`MsgFutAwayTktGateway` \nWHERE\n    /* Replace with a VARCHAR(16) */ \n    `accnt` = 'Example_accnt'\n  AND\n    /* Replace with a BIGINT */ \n    `clientFillID` = 1234567890\n  AND\n    /* Replace with a VARCHAR(16) */ \n    `clientFirm` = 'Example_clientFirm';\n"})}),"\n",(0,l.jsx)(n.h3,{id:"doc-columns-query",children:"Doc Columns Query"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"SELECT * FROM SRTrade.doccolumns WHERE TABLE_NAME='FutAwayTktGateway' ORDER BY ordinal_position ASC;\n"})})]})}function x(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(h,{...e})}):h(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>d,x:()=>s});var l=t(96540);const i={},r=l.createContext(i);function d(e){const n=l.useContext(r);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),l.createElement(r.Provider,{value:n},e.children)}}}]);