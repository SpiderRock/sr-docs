"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([["61754"],{2098:function(e,n,t){t.r(n),t.d(n,{default:()=>o,frontMatter:()=>r,metadata:()=>s,assets:()=>l,toc:()=>a,contentTitle:()=>c});var s=JSON.parse('{"id":"MessageSchemas/Schema/SRSE Products/SRRisk/OptionExAsRecordV5/OptionExAsRecordV5","title":"OptionExAsRecordV5","description":"V8 Message Definiton","source":"@site/docs/MessageSchemas/Schema/SRSE Products/SRRisk/OptionExAsRecordV5/OptionExAsRecordV5.md","sourceDirName":"MessageSchemas/Schema/SRSE Products/SRRisk/OptionExAsRecordV5","slug":"/MessageSchemas/Schema/SRSE Products/SRRisk/OptionExAsRecordV5/","permalink":"/docs/next/MessageSchemas/Schema/SRSE Products/SRRisk/OptionExAsRecordV5/","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"messageSchemasSidebar","previous":{"title":"OptionCorpActionRecordV5","permalink":"/docs/next/MessageSchemas/Schema/SRSE Products/SRRisk/OptionCorpActionRecordV5/"},"next":{"title":"OptionPositionRecordV5","permalink":"/docs/next/MessageSchemas/Schema/SRSE Products/SRRisk/OptionPositionRecordV5/"}}'),i=t("52676"),d=t("91503");let r={},c=void 0,l={},a=[{value:"METADATA",id:"metadata",level:3},{value:"Table Definition",id:"table-definition",level:3},{value:"PRIMARY KEY DEFINITION (Unique)",id:"primary-key-definition-unique",level:3},{value:"CREATE TABLE EXAMPLE QUERY",id:"create-table-example-query",level:3},{value:"SELECT TABLE EXAMPLE QUERY",id:"select-table-example-query",level:3},{value:"UPDATE TABLE EXAMPLE QUERY",id:"update-table-example-query",level:3},{value:"INSERT TABLE EXAMPLE QUERY",id:"insert-table-example-query",level:3},{value:"DELETE TABLE EXAMPLE QUERY",id:"delete-table-example-query",level:3},{value:"Doc Columns Query",id:"doc-columns-query",level:3}];function E(e){let n={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"../../../Topics/risk-v5/OptionExAsRecordV5",children:"V8 Message Definiton"})}),"\n",(0,i.jsx)(n.p,{children:"Option exercise/assigment records (either from SR clearing loaders or uploaded directly by client)"}),"\n",(0,i.jsx)(n.h3,{id:"metadata",children:"METADATA"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Attribute"}),(0,i.jsx)(n.th,{children:"Value"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Topic"}),(0,i.jsx)(n.td,{children:"4740-risk-v5"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"MLink Token"}),(0,i.jsx)(n.td,{children:"ClientRisk"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Product"}),(0,i.jsx)(n.td,{children:"SRRisk"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"accessType"}),(0,i.jsx)(n.td,{children:"SELECT,UPDATE,INSERT,DELETE"})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"table-definition",children:"Table Definition"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Field"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Key"}),(0,i.jsx)(n.th,{children:"Default Value"}),(0,i.jsx)(n.th,{children:"Comment"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"okey_at"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"../../../Enums/AssetType",children:"enum - AssetType"})}),(0,i.jsx)(n.td,{children:"PRI"}),(0,i.jsx)(n.td,{children:"'None'"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"okey_ts"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"../../../Enums/TickerSrc",children:"enum - TickerSrc"})}),(0,i.jsx)(n.td,{children:"PRI"}),(0,i.jsx)(n.td,{children:"'None'"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"okey_tk"}),(0,i.jsx)(n.td,{children:"VARCHAR(12)"}),(0,i.jsx)(n.td,{children:"PRI"}),(0,i.jsx)(n.td,{children:"''"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"okey_yr"}),(0,i.jsx)(n.td,{children:"SMALLINT UNSIGNED"}),(0,i.jsx)(n.td,{children:"PRI"}),(0,i.jsx)(n.td,{children:"0"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"okey_mn"}),(0,i.jsx)(n.td,{children:"TINYINT UNSIGNED"}),(0,i.jsx)(n.td,{children:"PRI"}),(0,i.jsx)(n.td,{children:"0"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"okey_dy"}),(0,i.jsx)(n.td,{children:"TINYINT UNSIGNED"}),(0,i.jsx)(n.td,{children:"PRI"}),(0,i.jsx)(n.td,{children:"0"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"okey_xx"}),(0,i.jsx)(n.td,{children:"DOUBLE"}),(0,i.jsx)(n.td,{children:"PRI"}),(0,i.jsx)(n.td,{children:"0"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"okey_cp"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"../../../Enums/CallPut",children:"enum - CallPut"})}),(0,i.jsx)(n.td,{children:"PRI"}),(0,i.jsx)(n.td,{children:"'Call'"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"accnt"}),(0,i.jsx)(n.td,{children:"VARCHAR(16)"}),(0,i.jsx)(n.td,{children:"PRI"}),(0,i.jsx)(n.td,{children:"''"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"tradeDate"}),(0,i.jsx)(n.td,{children:"DATE"}),(0,i.jsx)(n.td,{children:"PRI"}),(0,i.jsx)(n.td,{children:"'1900-01-01'"}),(0,i.jsx)(n.td,{children:"trading date immediately prior to exdate of the action"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"clientFirm"}),(0,i.jsx)(n.td,{children:"VARCHAR(16)"}),(0,i.jsx)(n.td,{children:"PRI"}),(0,i.jsx)(n.td,{children:"''"}),(0,i.jsx)(n.td,{children:"SR assigned client firm"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"exAsTransId"}),(0,i.jsx)(n.td,{children:"TINYTEXT"}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"''"}),(0,i.jsx)(n.td,{children:"exerciseassigment transaction Id optiona used to reference away sytem records"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"exAsContracts"}),(0,i.jsx)(n.td,{children:"INT"}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"0"}),(0,i.jsx)(n.td,{children:"note override the normal automatic exas rules for up to this number of contracts The balance if any will be presumed to exas according to default rules"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"timestamp"}),(0,i.jsx)(n.td,{children:"DATETIME(6)"}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"'1900-01-01 00:00:00.000000'"}),(0,i.jsx)(n.td,{})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"primary-key-definition-unique",children:"PRIMARY KEY DEFINITION (Unique)"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Field"}),(0,i.jsx)(n.th,{children:"Sequence"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"okey_tk"}),(0,i.jsx)(n.td,{children:"1"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"okey_yr"}),(0,i.jsx)(n.td,{children:"2"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"okey_mn"}),(0,i.jsx)(n.td,{children:"3"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"okey_dy"}),(0,i.jsx)(n.td,{children:"4"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"okey_xx"}),(0,i.jsx)(n.td,{children:"5"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"okey_cp"}),(0,i.jsx)(n.td,{children:"6"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"okey_at"}),(0,i.jsx)(n.td,{children:"7"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"okey_ts"}),(0,i.jsx)(n.td,{children:"8"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"accnt"}),(0,i.jsx)(n.td,{children:"9"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"tradeDate"}),(0,i.jsx)(n.td,{children:"10"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"clientFirm"}),(0,i.jsx)(n.td,{children:"11"})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"create-table-example-query",children:"CREATE TABLE EXAMPLE QUERY"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"CREATE TABLE `SRRisk`.`MsgOptionExAsRecordV5` (\n    `okey_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None',\n    `okey_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','EUX','ANY','CXE','DXE','NXAM','NXBR','NXLS','NXML','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None',\n    `okey_tk` VARCHAR(12) NOT NULL DEFAULT '',\n    `okey_yr` SMALLINT UNSIGNED NOT NULL DEFAULT 0,\n    `okey_mn` TINYINT UNSIGNED NOT NULL DEFAULT 0,\n    `okey_dy` TINYINT UNSIGNED NOT NULL DEFAULT 0,\n    `okey_xx` DOUBLE NOT NULL DEFAULT 0,\n    `okey_cp` ENUM('Call','Put','Pair') NOT NULL DEFAULT 'Call',\n    `accnt` VARCHAR(16) NOT NULL DEFAULT '',\n    `tradeDate` DATE NOT NULL DEFAULT '1900-01-01' COMMENT 'trading date immediately prior to ex-date of the action',\n    `clientFirm` VARCHAR(16) NOT NULL DEFAULT '' COMMENT 'SR assigned client firm',\n    `exAsTransId` TINYTEXT NOT NULL DEFAULT '' COMMENT 'exercise/assigment transaction Id [optiona] (used to reference away sytem records)',\n    `exAsContracts` INT NOT NULL DEFAULT 0 COMMENT 'note: override the normal automatic ex/as rules for up to this number of contracts. The balance (if any) will be presumed to ex/as according to default rules',\n    `timestamp` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000',\n    PRIMARY KEY USING HASH (`okey_tk`,`okey_yr`,`okey_mn`,`okey_dy`,`okey_xx`,`okey_cp`,`okey_at`,`okey_ts`,`accnt`,`tradeDate`,`clientFirm`)\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='Option exercise/assigment records (either from SR clearing loaders or uploaded directly by client)';\n\n"})}),"\n",(0,i.jsx)(n.h3,{id:"select-table-example-query",children:"SELECT TABLE EXAMPLE QUERY"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"SELECT\n    `okey_at`,\n    `okey_ts`,\n    `okey_tk`,\n    `okey_yr`,\n    `okey_mn`,\n    `okey_dy`,\n    `okey_xx`,\n    `okey_cp`,\n    `accnt`,\n    `tradeDate`,\n    `clientFirm`,\n    `exAsTransId`,\n    `exAsContracts`,\n    `timestamp`\nFROM `SRRisk`.`MsgOptionExAsRecordV5`\nWHERE \n    /* Replace with a ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') */ \n    `okey_at` = 'None'\n  AND\n    /* Replace with a ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','EUX','ANY','CXE','DXE','NXAM','NXBR','NXLS','NXML','NXOS','NXP','EUREX','CEDX','ICEFE') */ \n    `okey_ts` = 'None'\n  AND\n    /* Replace with a VARCHAR(12) */ \n    `okey_tk` = 'Example_okey_tk'\n  AND\n    /* Replace with a SMALLINT UNSIGNED */ \n    `okey_yr` = 123\n  AND\n    /* Replace with a TINYINT UNSIGNED */ \n    `okey_mn` = 1\n  AND\n    /* Replace with a TINYINT UNSIGNED */ \n    `okey_dy` = 1\n  AND\n    /* Replace with a DOUBLE */ \n    `okey_xx` = 4.56\n  AND\n    /* Replace with a ENUM('Call','Put','Pair') */ \n    `okey_cp` = 'Call'\n  AND\n    /* Replace with a VARCHAR(16) */ \n    `accnt` = 'Example_accnt'\n  AND\n    /* Replace with a DATE */\n    `tradeDate` = '2022-01-01'\n  AND\n    /* Replace with a VARCHAR(16) */ \n    `clientFirm` = 'Example_clientFirm';\n"})}),"\n",(0,i.jsx)(n.h3,{id:"update-table-example-query",children:"UPDATE TABLE EXAMPLE QUERY"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"UPDATE `SRRisk`.`MsgOptionExAsRecordV5` \nSET\n    /* Replace with a TINYTEXT */ \n    `exAsTransId` = 'dummy tiny text',\n    /* Replace with a INT */ \n    `exAsContracts` = 5,\n    /* Replace with a DATETIME(6) */\n    `timestamp` = '2022-01-01 12:34:56.000000'\nWHERE\n    /* Replace with a ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') */ \n    `okey_at` = 'None'\n  AND\n    /* Replace with a ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','EUX','ANY','CXE','DXE','NXAM','NXBR','NXLS','NXML','NXOS','NXP','EUREX','CEDX','ICEFE') */ \n    `okey_ts` = 'None'\n  AND\n    /* Replace with a VARCHAR(12) */ \n    `okey_tk` = 'Example_okey_tk'\n  AND\n    /* Replace with a SMALLINT UNSIGNED */ \n    `okey_yr` = 123\n  AND\n    /* Replace with a TINYINT UNSIGNED */ \n    `okey_mn` = 1\n  AND\n    /* Replace with a TINYINT UNSIGNED */ \n    `okey_dy` = 1\n  AND\n    /* Replace with a DOUBLE */ \n    `okey_xx` = 4.56\n  AND\n    /* Replace with a ENUM('Call','Put','Pair') */ \n    `okey_cp` = 'Call'\n  AND\n    /* Replace with a VARCHAR(16) */ \n    `accnt` = 'Example_accnt'\n  AND\n    /* Replace with a DATE */\n    `tradeDate` = '2022-01-01'\n  AND\n    /* Replace with a VARCHAR(16) */ \n    `clientFirm` = 'Example_clientFirm';\n"})}),"\n",(0,i.jsx)(n.h3,{id:"insert-table-example-query",children:"INSERT TABLE EXAMPLE QUERY"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"INSERT INTO `SRRisk`.`MsgOptionExAsRecordV5`(\n    /* Replace with a ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') */ \n    `okey_at`,\n    /* Replace with a ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','EUX','ANY','CXE','DXE','NXAM','NXBR','NXLS','NXML','NXOS','NXP','EUREX','CEDX','ICEFE') */ \n    `okey_ts`,\n    /* Replace with a VARCHAR(12) */ \n    `okey_tk`,\n    /* Replace with a SMALLINT UNSIGNED */ \n    `okey_yr`,\n    /* Replace with a TINYINT UNSIGNED */ \n    `okey_mn`,\n    /* Replace with a TINYINT UNSIGNED */ \n    `okey_dy`,\n    /* Replace with a DOUBLE */ \n    `okey_xx`,\n    /* Replace with a ENUM('Call','Put','Pair') */ \n    `okey_cp`,\n    /* Replace with a VARCHAR(16) */ \n    `accnt`,\n    /* Replace with a DATE */\n    `tradeDate`,\n    /* Replace with a VARCHAR(16) */ \n    `clientFirm`,\n    /* Replace with a TINYTEXT */ \n    `exAsTransId`,\n    /* Replace with a INT */ \n    `exAsContracts`,\n    /* Replace with a DATETIME(6) */\n    `timestamp`\n) \nVALUES(\n    'None',\n    'None',\n    'Example_okey_tk',\n    123,\n    1,\n    1,\n    4.56,\n    'Call',\n    'Example_accnt',\n    '2022-01-01',\n    'Example_clientFirm',\n    'dummy tiny text',\n    5,\n    '2022-01-01 12:34:56.000000'\n);\n"})}),"\n",(0,i.jsx)(n.h3,{id:"delete-table-example-query",children:"DELETE TABLE EXAMPLE QUERY"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"DELETE FROM `SRRisk`.`MsgOptionExAsRecordV5` \nWHERE\n    /* Replace with a ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') */ \n    `okey_at` = 'None'\n  AND\n    /* Replace with a ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','EUX','ANY','CXE','DXE','NXAM','NXBR','NXLS','NXML','NXOS','NXP','EUREX','CEDX','ICEFE') */ \n    `okey_ts` = 'None'\n  AND\n    /* Replace with a VARCHAR(12) */ \n    `okey_tk` = 'Example_okey_tk'\n  AND\n    /* Replace with a SMALLINT UNSIGNED */ \n    `okey_yr` = 123\n  AND\n    /* Replace with a TINYINT UNSIGNED */ \n    `okey_mn` = 1\n  AND\n    /* Replace with a TINYINT UNSIGNED */ \n    `okey_dy` = 1\n  AND\n    /* Replace with a DOUBLE */ \n    `okey_xx` = 4.56\n  AND\n    /* Replace with a ENUM('Call','Put','Pair') */ \n    `okey_cp` = 'Call'\n  AND\n    /* Replace with a VARCHAR(16) */ \n    `accnt` = 'Example_accnt'\n  AND\n    /* Replace with a DATE */\n    `tradeDate` = '2022-01-01'\n  AND\n    /* Replace with a VARCHAR(16) */ \n    `clientFirm` = 'Example_clientFirm';\n"})}),"\n",(0,i.jsx)(n.h3,{id:"doc-columns-query",children:"Doc Columns Query"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"SELECT * FROM SRRisk.doccolumns WHERE TABLE_NAME='OptionExAsRecordV5' ORDER BY ordinal_position ASC;\n"})})]})}function o(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(E,{...e})}):E(e)}},91503:function(e,n,t){t.d(n,{Z:function(){return c},a:function(){return r}});var s=t(75271);let i={},d=s.createContext(i);function r(e){let n=s.useContext(d);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);