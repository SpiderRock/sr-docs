"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[32108],{60917:(e,n,c)=>{c.r(n),c.d(n,{assets:()=>a,contentTitle:()=>d,default:()=>E,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var s=c(74848),t=c(28453);const r={},d=void 0,i={id:"MessageSchemas/Schema/SRSE Products/SRRisk/SodClearingRecordV5/SodClearingRecordV5",title:"SodClearingRecordV5",description:"V8 Message Definiton",source:"@site/docs/MessageSchemas/Schema/SRSE Products/SRRisk/SodClearingRecordV5/SodClearingRecordV5.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRRisk/SodClearingRecordV5",slug:"/MessageSchemas/Schema/SRSE Products/SRRisk/SodClearingRecordV5/",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRRisk/SodClearingRecordV5/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"messageSchemasSidebar",previous:{title:"SodCashRecordV5",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRRisk/SodCashRecordV5/"},next:{title:"StockPositionRecordV5",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRRisk/StockPositionRecordV5/"}},a={},l=[{value:"METADATA",id:"metadata",level:3},{value:"Table Definition",id:"table-definition",level:3},{value:"PRIMARY KEY DEFINITION (Unique)",id:"primary-key-definition-unique",level:3},{value:"CREATE TABLE EXAMPLE QUERY",id:"create-table-example-query",level:3},{value:"SELECT TABLE EXAMPLE QUERY",id:"select-table-example-query",level:3},{value:"UPDATE TABLE EXAMPLE QUERY",id:"update-table-example-query",level:3},{value:"INSERT TABLE EXAMPLE QUERY",id:"insert-table-example-query",level:3},{value:"DELETE TABLE EXAMPLE QUERY",id:"delete-table-example-query",level:3},{value:"Doc Columns Query",id:"doc-columns-query",level:3},{value:"Option SOD Insert Query",id:"option-sod-insert-query",level:3},{value:"Stock SOD Insert Query",id:"stock-sod-insert-query",level:3},{value:"Future SOD Insert Query",id:"future-sod-insert-query",level:3}];function N(e){const n={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"../../../Topics/risk-v5/SodClearingRecordV5",children:"V8 Message Definiton"})}),"\n",(0,s.jsx)(n.p,{children:"SodClearingRecords contain start-of-day option position and mark details.  They can be source directly from a prime broker by SpiderRock or inserted by clients.\\nThey can also be modified after the start of trading. These records are the source of the CLR side positions in SR risk records."}),"\n",(0,s.jsx)(n.h3,{id:"metadata",children:"METADATA"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Attribute"}),(0,s.jsx)(n.th,{children:"Value"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Topic"}),(0,s.jsx)(n.td,{children:"4740-risk-v5"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"MLink Token"}),(0,s.jsx)(n.td,{children:"SystemData"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Product"}),(0,s.jsx)(n.td,{children:"SRRisk"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"accessType"}),(0,s.jsx)(n.td,{children:"SELECT,UPDATE,INSERT,DELETE"})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"table-definition",children:"Table Definition"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Field"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Key"}),(0,s.jsx)(n.th,{children:"Default Value"}),(0,s.jsx)(n.th,{children:"Comment"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"accnt"}),(0,s.jsx)(n.td,{children:"VARCHAR(16)"}),(0,s.jsx)(n.td,{children:"PRI"}),(0,s.jsx)(n.td,{children:"''"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"secKey_at"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"../../../Enums/AssetType",children:"enum - AssetType"})}),(0,s.jsx)(n.td,{children:"PRI"}),(0,s.jsx)(n.td,{children:"'None'"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"secKey_ts"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"../../../Enums/TickerSrc",children:"enum - TickerSrc"})}),(0,s.jsx)(n.td,{children:"PRI"}),(0,s.jsx)(n.td,{children:"'None'"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"secKey_tk"}),(0,s.jsx)(n.td,{children:"VARCHAR(12)"}),(0,s.jsx)(n.td,{children:"PRI"}),(0,s.jsx)(n.td,{children:"''"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"secKey_yr"}),(0,s.jsx)(n.td,{children:"SMALLINT UNSIGNED"}),(0,s.jsx)(n.td,{children:"PRI"}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"secKey_mn"}),(0,s.jsx)(n.td,{children:"TINYINT UNSIGNED"}),(0,s.jsx)(n.td,{children:"PRI"}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"secKey_dy"}),(0,s.jsx)(n.td,{children:"TINYINT UNSIGNED"}),(0,s.jsx)(n.td,{children:"PRI"}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"secKey_xx"}),(0,s.jsx)(n.td,{children:"DOUBLE"}),(0,s.jsx)(n.td,{children:"PRI"}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"secKey_cp"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"../../../Enums/CallPut",children:"enum - CallPut"})}),(0,s.jsx)(n.td,{children:"PRI"}),(0,s.jsx)(n.td,{children:"'Call'"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"secType"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"../../../Enums/SpdrKeyType",children:"enum - SpdrKeyType"})}),(0,s.jsx)(n.td,{children:"PRI"}),(0,s.jsx)(n.td,{children:"'None'"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"tradeDate"}),(0,s.jsx)(n.td,{children:"DATE"}),(0,s.jsx)(n.td,{children:"PRI"}),(0,s.jsx)(n.td,{children:"'1900-01-01'"}),(0,s.jsx)(n.td,{children:"effective tradeDate of this clearing record"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"clientFirm"}),(0,s.jsx)(n.td,{children:"VARCHAR(16)"}),(0,s.jsx)(n.td,{children:"PRI"}),(0,s.jsx)(n.td,{children:"''"}),(0,s.jsx)(n.td,{children:"SR assigned client firm"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"daySide"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"../../../Enums/DaySide",children:"enum - DaySide"})}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"'StartOfDay'"}),(0,s.jsx)(n.td,{children:"startofday or prev weekdays endofday ie corpaction adjusted or not"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"clrPosition"}),(0,s.jsx)(n.td,{children:"INT"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{children:"clearing position  daySide"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"clrMark"}),(0,s.jsx)(n.td,{children:"DOUBLE"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{children:"clearing mark  daySide"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"comment"}),(0,s.jsx)(n.td,{children:"TINYTEXT"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"''"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"timestamp"}),(0,s.jsx)(n.td,{children:"DATETIME(6)"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"'1900-01-01 00:00:00.000000'"}),(0,s.jsx)(n.td,{children:"upload timestamp will be identical per accnt"})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"primary-key-definition-unique",children:"PRIMARY KEY DEFINITION (Unique)"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Field"}),(0,s.jsx)(n.th,{children:"Sequence"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"accnt"}),(0,s.jsx)(n.td,{children:"1"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"secKey_tk"}),(0,s.jsx)(n.td,{children:"2"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"secKey_yr"}),(0,s.jsx)(n.td,{children:"3"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"secKey_mn"}),(0,s.jsx)(n.td,{children:"4"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"secKey_dy"}),(0,s.jsx)(n.td,{children:"5"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"secKey_xx"}),(0,s.jsx)(n.td,{children:"6"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"secKey_cp"}),(0,s.jsx)(n.td,{children:"7"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"secKey_at"}),(0,s.jsx)(n.td,{children:"8"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"secKey_ts"}),(0,s.jsx)(n.td,{children:"9"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"secType"}),(0,s.jsx)(n.td,{children:"10"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"tradeDate"}),(0,s.jsx)(n.td,{children:"11"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"clientFirm"}),(0,s.jsx)(n.td,{children:"12"})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"create-table-example-query",children:"CREATE TABLE EXAMPLE QUERY"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"CREATE TABLE `SRRisk`.`MsgSodClearingRecordV5` (\n    `accnt` VARCHAR(16) NOT NULL DEFAULT '',\n    `secKey_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None',\n    `secKey_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','ESX','ANY','CXE','DXE','NXAM','NXBR','NXDUB','NXLS','NXLDN','NXML','NXMLT','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None',\n    `secKey_tk` VARCHAR(12) NOT NULL DEFAULT '',\n    `secKey_yr` SMALLINT UNSIGNED NOT NULL DEFAULT 0,\n    `secKey_mn` TINYINT UNSIGNED NOT NULL DEFAULT 0,\n    `secKey_dy` TINYINT UNSIGNED NOT NULL DEFAULT 0,\n    `secKey_xx` DOUBLE NOT NULL DEFAULT 0,\n    `secKey_cp` ENUM('Call','Put','Pair') NOT NULL DEFAULT 'Call',\n    `secType` ENUM('None','Stock','Future','Option','MLeg') NOT NULL DEFAULT 'None',\n    `tradeDate` DATE NOT NULL DEFAULT '1900-01-01' COMMENT 'effective tradeDate of this clearing record',\n    `clientFirm` VARCHAR(16) NOT NULL DEFAULT '' COMMENT 'SR assigned client firm',\n    `daySide` ENUM('StartOfDay','EndOfDay') NOT NULL DEFAULT 'StartOfDay' COMMENT 'start-of-day or prev weekday''s end-of-day; i.e. corpaction adjusted or not',\n    `clrPosition` INT NOT NULL DEFAULT 0 COMMENT 'clearing position @ daySide',\n    `clrMark` DOUBLE NOT NULL DEFAULT 0 COMMENT 'clearing mark @ daySide',\n    `comment` TINYTEXT NOT NULL DEFAULT '',\n    `timestamp` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000' COMMENT 'upload timestamp; will be identical per accnt',\n    PRIMARY KEY USING HASH (`accnt`,`secKey_tk`,`secKey_yr`,`secKey_mn`,`secKey_dy`,`secKey_xx`,`secKey_cp`,`secKey_at`,`secKey_ts`,`secType`,`tradeDate`,`clientFirm`)\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='SodClearingRecords contain start-of-day option position and mark details.  They can be source directly from a prime broker by SpiderRock or inserted by clients.\\nThey can also be modified after the start of trading. These records are the source of the CLR side positions in SR risk records.';\n\n"})}),"\n",(0,s.jsx)(n.h3,{id:"select-table-example-query",children:"SELECT TABLE EXAMPLE QUERY"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"SELECT\n    `accnt`,\n    `secKey_at`,\n    `secKey_ts`,\n    `secKey_tk`,\n    `secKey_yr`,\n    `secKey_mn`,\n    `secKey_dy`,\n    `secKey_xx`,\n    `secKey_cp`,\n    `secType`,\n    `tradeDate`,\n    `clientFirm`,\n    `daySide`,\n    `clrPosition`,\n    `clrMark`,\n    `comment`,\n    `timestamp`\nFROM `SRRisk`.`MsgSodClearingRecordV5`\nWHERE \n    /* Replace with a VARCHAR(16) */ \n    `accnt` = 'Example_accnt'\n  AND\n    /* Replace with a ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') */ \n    `secKey_at` = 'None'\n  AND\n    /* Replace with a ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','ESX','ANY','CXE','DXE','NXAM','NXBR','NXDUB','NXLS','NXLDN','NXML','NXMLT','NXOS','NXP','EUREX','CEDX','ICEFE') */ \n    `secKey_ts` = 'None'\n  AND\n    /* Replace with a VARCHAR(12) */ \n    `secKey_tk` = 'Example_secKey_tk'\n  AND\n    /* Replace with a SMALLINT UNSIGNED */ \n    `secKey_yr` = 123\n  AND\n    /* Replace with a TINYINT UNSIGNED */ \n    `secKey_mn` = 1\n  AND\n    /* Replace with a TINYINT UNSIGNED */ \n    `secKey_dy` = 1\n  AND\n    /* Replace with a DOUBLE */ \n    `secKey_xx` = 4.56\n  AND\n    /* Replace with a ENUM('Call','Put','Pair') */ \n    `secKey_cp` = 'Call'\n  AND\n    /* Replace with a ENUM('None','Stock','Future','Option','MLeg') */ \n    `secType` = 'None'\n  AND\n    /* Replace with a DATE */\n    `tradeDate` = '2022-01-01'\n  AND\n    /* Replace with a VARCHAR(16) */ \n    `clientFirm` = 'Example_clientFirm';\n"})}),"\n",(0,s.jsx)(n.h3,{id:"update-table-example-query",children:"UPDATE TABLE EXAMPLE QUERY"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"UPDATE `SRRisk`.`MsgSodClearingRecordV5` \nSET\n    /* Replace with a ENUM('StartOfDay','EndOfDay') */ \n    `daySide` = 'StartOfDay',\n    /* Replace with a INT */ \n    `clrPosition` = 5,\n    /* Replace with a DOUBLE */ \n    `clrMark` = 4.56,\n    /* Replace with a TINYTEXT */ \n    `comment` = 'dummy tiny text',\n    /* Replace with a DATETIME(6) */\n    `timestamp` = '2022-01-01 12:34:56.000000'\nWHERE\n    /* Replace with a VARCHAR(16) */ \n    `accnt` = 'Example_accnt'\n  AND\n    /* Replace with a ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') */ \n    `secKey_at` = 'None'\n  AND\n    /* Replace with a ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','ESX','ANY','CXE','DXE','NXAM','NXBR','NXDUB','NXLS','NXLDN','NXML','NXMLT','NXOS','NXP','EUREX','CEDX','ICEFE') */ \n    `secKey_ts` = 'None'\n  AND\n    /* Replace with a VARCHAR(12) */ \n    `secKey_tk` = 'Example_secKey_tk'\n  AND\n    /* Replace with a SMALLINT UNSIGNED */ \n    `secKey_yr` = 123\n  AND\n    /* Replace with a TINYINT UNSIGNED */ \n    `secKey_mn` = 1\n  AND\n    /* Replace with a TINYINT UNSIGNED */ \n    `secKey_dy` = 1\n  AND\n    /* Replace with a DOUBLE */ \n    `secKey_xx` = 4.56\n  AND\n    /* Replace with a ENUM('Call','Put','Pair') */ \n    `secKey_cp` = 'Call'\n  AND\n    /* Replace with a ENUM('None','Stock','Future','Option','MLeg') */ \n    `secType` = 'None'\n  AND\n    /* Replace with a DATE */\n    `tradeDate` = '2022-01-01'\n  AND\n    /* Replace with a VARCHAR(16) */ \n    `clientFirm` = 'Example_clientFirm';\n"})}),"\n",(0,s.jsx)(n.h3,{id:"insert-table-example-query",children:"INSERT TABLE EXAMPLE QUERY"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"INSERT INTO `SRRisk`.`MsgSodClearingRecordV5`(\n    /* Replace with a VARCHAR(16) */ \n    `accnt`,\n    /* Replace with a ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') */ \n    `secKey_at`,\n    /* Replace with a ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','ESX','ANY','CXE','DXE','NXAM','NXBR','NXDUB','NXLS','NXLDN','NXML','NXMLT','NXOS','NXP','EUREX','CEDX','ICEFE') */ \n    `secKey_ts`,\n    /* Replace with a VARCHAR(12) */ \n    `secKey_tk`,\n    /* Replace with a SMALLINT UNSIGNED */ \n    `secKey_yr`,\n    /* Replace with a TINYINT UNSIGNED */ \n    `secKey_mn`,\n    /* Replace with a TINYINT UNSIGNED */ \n    `secKey_dy`,\n    /* Replace with a DOUBLE */ \n    `secKey_xx`,\n    /* Replace with a ENUM('Call','Put','Pair') */ \n    `secKey_cp`,\n    /* Replace with a ENUM('None','Stock','Future','Option','MLeg') */ \n    `secType`,\n    /* Replace with a DATE */\n    `tradeDate`,\n    /* Replace with a VARCHAR(16) */ \n    `clientFirm`,\n    /* Replace with a ENUM('StartOfDay','EndOfDay') */ \n    `daySide`,\n    /* Replace with a INT */ \n    `clrPosition`,\n    /* Replace with a DOUBLE */ \n    `clrMark`,\n    /* Replace with a TINYTEXT */ \n    `comment`,\n    /* Replace with a DATETIME(6) */\n    `timestamp`\n) \nVALUES(\n    'Example_accnt',\n    'None',\n    'None',\n    'Example_secKey_tk',\n    123,\n    1,\n    1,\n    4.56,\n    'Call',\n    'None',\n    '2022-01-01',\n    'Example_clientFirm',\n    'StartOfDay',\n    5,\n    4.56,\n    'dummy tiny text',\n    '2022-01-01 12:34:56.000000'\n);\n"})}),"\n",(0,s.jsx)(n.h3,{id:"delete-table-example-query",children:"DELETE TABLE EXAMPLE QUERY"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"DELETE FROM `SRRisk`.`MsgSodClearingRecordV5` \nWHERE\n    /* Replace with a VARCHAR(16) */ \n    `accnt` = 'Example_accnt'\n  AND\n    /* Replace with a ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') */ \n    `secKey_at` = 'None'\n  AND\n    /* Replace with a ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','ESX','ANY','CXE','DXE','NXAM','NXBR','NXDUB','NXLS','NXLDN','NXML','NXMLT','NXOS','NXP','EUREX','CEDX','ICEFE') */ \n    `secKey_ts` = 'None'\n  AND\n    /* Replace with a VARCHAR(12) */ \n    `secKey_tk` = 'Example_secKey_tk'\n  AND\n    /* Replace with a SMALLINT UNSIGNED */ \n    `secKey_yr` = 123\n  AND\n    /* Replace with a TINYINT UNSIGNED */ \n    `secKey_mn` = 1\n  AND\n    /* Replace with a TINYINT UNSIGNED */ \n    `secKey_dy` = 1\n  AND\n    /* Replace with a DOUBLE */ \n    `secKey_xx` = 4.56\n  AND\n    /* Replace with a ENUM('Call','Put','Pair') */ \n    `secKey_cp` = 'Call'\n  AND\n    /* Replace with a ENUM('None','Stock','Future','Option','MLeg') */ \n    `secType` = 'None'\n  AND\n    /* Replace with a DATE */\n    `tradeDate` = '2022-01-01'\n  AND\n    /* Replace with a VARCHAR(16) */ \n    `clientFirm` = 'Example_clientFirm';\n"})}),"\n",(0,s.jsx)(n.h3,{id:"doc-columns-query",children:"Doc Columns Query"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"SELECT * FROM SRRisk.doccolumns WHERE TABLE_NAME='SodClearingRecordV5' ORDER BY ordinal_position ASC;\n"})}),"\n",(0,s.jsx)(n.h3,{id:"option-sod-insert-query",children:"Option SOD Insert Query"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"REPLACE INTO srrisk.msgsodclearingrecordv5 \n(accnt,seckey_at,seckey_ts,seckey_tk,seckey_yr,seckey_mn,seckey_dy,seckey_xx,seckey_cp,sectype,tradedate,clientfirm,dayside,clrposition,clrmark,TIMESTAMP)\nVALUES ('T.CB','EQT','NMS','NKE',2025,1,17,70,'Call','Option','2024-08-09','SR','Startofday',150,5.85,NOW());\n"})}),"\n",(0,s.jsx)(n.h3,{id:"stock-sod-insert-query",children:"Stock SOD Insert Query"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"REPLACE INTO srrisk.msgsodclearingrecordv5 (accnt,seckey_at,seckey_ts,seckey_tk,seckey_yr,seckey_mn,seckey_dy,seckey_xx,seckey_cp,sectype,tradedate,clientfirm,dayside,clrposition,clrmark,TIMESTAMP)\nVALUES ('T.CB','EQT','NMS','JNJ',2000,0,0,0,'Call','Stock','2024-08-09','SR','Startofday',1000,145,NOW());\n"})}),"\n",(0,s.jsx)(n.h3,{id:"future-sod-insert-query",children:"Future SOD Insert Query"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"REPLACE INTO srrisk.msgsodclearingrecordv5 (accnt,seckey_at,seckey_ts,seckey_tk,seckey_yr,seckey_mn,seckey_dy,seckey_xx,seckey_cp,sectype,tradedate,clientfirm,dayside,clrposition,clrmark,TIMESTAMP)\nVALUES ('T.CB','FUT','CME','ES',2024,9,20,0,'Call','Future','2024-08-09','SR','Startofday',850,5340,NOW());\n"})})]})}function E(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(N,{...e})}):N(e)}},28453:(e,n,c)=>{c.d(n,{R:()=>d,x:()=>i});var s=c(96540);const t={},r=s.createContext(t);function d(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);