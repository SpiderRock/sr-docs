"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[37284],{75181:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>h,contentTitle:()=>i,default:()=>a,frontMatter:()=>c,metadata:()=>t,toc:()=>l});var d=s(74848),n=s(28453);const c={},i=void 0,t={id:"MessageSchemas/Schema/SRSE Products/SRRisk/SodCashRecordV5/SodCashRecordV5",title:"SodCashRecordV5",description:"V8 Message Definiton",source:"@site/versioned_docs/version-8.4.12.1/MessageSchemas/Schema/SRSE Products/SRRisk/SodCashRecordV5/SodCashRecordV5.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRRisk/SodCashRecordV5",slug:"/MessageSchemas/Schema/SRSE Products/SRRisk/SodCashRecordV5/",permalink:"/docs/8.4.12.1/MessageSchemas/Schema/SRSE Products/SRRisk/SodCashRecordV5/",draft:!1,unlisted:!1,tags:[],version:"8.4.12.1",frontMatter:{},sidebar:"messageSchemasSidebar",previous:{title:"RiskCubeDetailV5",permalink:"/docs/8.4.12.1/MessageSchemas/Schema/SRSE Products/SRRisk/RiskCubeDetailV5/"},next:{title:"SodClearingRecordV5",permalink:"/docs/8.4.12.1/MessageSchemas/Schema/SRSE Products/SRRisk/SodClearingRecordV5/"}},h={},l=[{value:"METADATA",id:"metadata",level:3},{value:"Table Definition",id:"table-definition",level:3},{value:"PRIMARY KEY DEFINITION (Unique)",id:"primary-key-definition-unique",level:3},{value:"CREATE TABLE EXAMPLE QUERY",id:"create-table-example-query",level:3},{value:"SELECT TABLE EXAMPLE QUERY",id:"select-table-example-query",level:3},{value:"Doc Columns Query",id:"doc-columns-query",level:3}];function o(e){const r={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(r.p,{children:(0,d.jsx)(r.a,{href:"../../../Topics/risk-v5/SodCashRecordV5",children:"V8 Message Definiton"})}),"\n",(0,d.jsx)(r.p,{children:"SodCashRecords contain a start-of-day currency position that derived from dividend or corporate action being applied to a prior period position.\nThese records are computed and published by SR rotation servers."}),"\n",(0,d.jsx)(r.h3,{id:"metadata",children:"METADATA"}),"\n",(0,d.jsxs)(r.table,{children:[(0,d.jsx)(r.thead,{children:(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.th,{children:"Attribute"}),(0,d.jsx)(r.th,{children:"Value"})]})}),(0,d.jsxs)(r.tbody,{children:[(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"Topic"}),(0,d.jsx)(r.td,{children:"4740-risk-v5"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"MLink Token"}),(0,d.jsx)(r.td,{children:"ClientRisk"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"Product"}),(0,d.jsx)(r.td,{children:"SRRisk"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"accessType"}),(0,d.jsx)(r.td,{children:"SELECT"})]})]})]}),"\n",(0,d.jsx)(r.h3,{id:"table-definition",children:"Table Definition"}),"\n",(0,d.jsxs)(r.table,{children:[(0,d.jsx)(r.thead,{children:(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.th,{children:"Field"}),(0,d.jsx)(r.th,{children:"Type"}),(0,d.jsx)(r.th,{children:"Key"}),(0,d.jsx)(r.th,{children:"Default Value"}),(0,d.jsx)(r.th,{children:"Comment"})]})}),(0,d.jsxs)(r.tbody,{children:[(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"accnt"}),(0,d.jsx)(r.td,{children:"VARCHAR(16)"}),(0,d.jsx)(r.td,{children:"PRI"}),(0,d.jsx)(r.td,{children:"''"}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"currency"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../../Enums/Currency",children:"enum - Currency"})}),(0,d.jsx)(r.td,{children:"PRI"}),(0,d.jsx)(r.td,{children:"'None'"}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"tradeDate"}),(0,d.jsx)(r.td,{children:"DATE"}),(0,d.jsx)(r.td,{children:"PRI"}),(0,d.jsx)(r.td,{children:"'1900-01-01'"}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"srcTransaction"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../../Enums/SrcTransaction",children:"enum - SrcTransaction"})}),(0,d.jsx)(r.td,{children:"PRI"}),(0,d.jsx)(r.td,{children:"'None'"}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"srcSecKey_at"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../../Enums/AssetType",children:"enum - AssetType"})}),(0,d.jsx)(r.td,{children:"PRI"}),(0,d.jsx)(r.td,{children:"'None'"}),(0,d.jsx)(r.td,{children:"prior period sec key that this position record derived from if any"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"srcSecKey_ts"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../../Enums/TickerSrc",children:"enum - TickerSrc"})}),(0,d.jsx)(r.td,{children:"PRI"}),(0,d.jsx)(r.td,{children:"'None'"}),(0,d.jsx)(r.td,{children:"prior period sec key that this position record derived from if any"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"srcSecKey_tk"}),(0,d.jsx)(r.td,{children:"VARCHAR(12)"}),(0,d.jsx)(r.td,{children:"PRI"}),(0,d.jsx)(r.td,{children:"''"}),(0,d.jsx)(r.td,{children:"prior period sec key that this position record derived from if any"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"srcSecKey_yr"}),(0,d.jsx)(r.td,{children:"SMALLINT UNSIGNED"}),(0,d.jsx)(r.td,{children:"PRI"}),(0,d.jsx)(r.td,{children:"0"}),(0,d.jsx)(r.td,{children:"prior period sec key that this position record derived from if any"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"srcSecKey_mn"}),(0,d.jsx)(r.td,{children:"TINYINT UNSIGNED"}),(0,d.jsx)(r.td,{children:"PRI"}),(0,d.jsx)(r.td,{children:"0"}),(0,d.jsx)(r.td,{children:"prior period sec key that this position record derived from if any"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"srcSecKey_dy"}),(0,d.jsx)(r.td,{children:"TINYINT UNSIGNED"}),(0,d.jsx)(r.td,{children:"PRI"}),(0,d.jsx)(r.td,{children:"0"}),(0,d.jsx)(r.td,{children:"prior period sec key that this position record derived from if any"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"srcSecKey_xx"}),(0,d.jsx)(r.td,{children:"DOUBLE"}),(0,d.jsx)(r.td,{children:"PRI"}),(0,d.jsx)(r.td,{children:"0"}),(0,d.jsx)(r.td,{children:"prior period sec key that this position record derived from if any"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"srcSecKey_cp"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../../Enums/CallPut",children:"enum - CallPut"})}),(0,d.jsx)(r.td,{children:"PRI"}),(0,d.jsx)(r.td,{children:"'Call'"}),(0,d.jsx)(r.td,{children:"prior period sec key that this position record derived from if any"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"srcSecType"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../../Enums/SpdrKeyType",children:"enum - SpdrKeyType"})}),(0,d.jsx)(r.td,{children:"PRI"}),(0,d.jsx)(r.td,{children:"'None'"}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"srcTradeDate"}),(0,d.jsx)(r.td,{children:"DATE"}),(0,d.jsx)(r.td,{children:"PRI"}),(0,d.jsx)(r.td,{children:"'1900-01-01'"}),(0,d.jsx)(r.td,{children:"prior period trade date that this position record derived from"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"clientFirm"}),(0,d.jsx)(r.td,{children:"VARCHAR(16)"}),(0,d.jsx)(r.td,{children:"PRI"}),(0,d.jsx)(r.td,{children:"''"}),(0,d.jsx)(r.td,{children:"SR assigned client firm"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"srCashAmount"}),(0,d.jsx)(r.td,{children:"DOUBLE"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"0"}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"clrCashAmount"}),(0,d.jsx)(r.td,{children:"DOUBLE"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"0"}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"comment"}),(0,d.jsx)(r.td,{children:"TINYTEXT"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"''"}),(0,d.jsx)(r.td,{children:"source description if any"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"timestamp"}),(0,d.jsx)(r.td,{children:"DATETIME(6)"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"'1900-01-01 00:00:00.000000'"}),(0,d.jsx)(r.td,{})]})]})]}),"\n",(0,d.jsx)(r.h3,{id:"primary-key-definition-unique",children:"PRIMARY KEY DEFINITION (Unique)"}),"\n",(0,d.jsxs)(r.table,{children:[(0,d.jsx)(r.thead,{children:(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.th,{children:"Field"}),(0,d.jsx)(r.th,{children:"Sequence"})]})}),(0,d.jsxs)(r.tbody,{children:[(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"accnt"}),(0,d.jsx)(r.td,{children:"1"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"currency"}),(0,d.jsx)(r.td,{children:"2"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"tradeDate"}),(0,d.jsx)(r.td,{children:"3"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"srcTransaction"}),(0,d.jsx)(r.td,{children:"4"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"srcSecKey_tk"}),(0,d.jsx)(r.td,{children:"5"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"srcSecKey_yr"}),(0,d.jsx)(r.td,{children:"6"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"srcSecKey_mn"}),(0,d.jsx)(r.td,{children:"7"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"srcSecKey_dy"}),(0,d.jsx)(r.td,{children:"8"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"srcSecKey_xx"}),(0,d.jsx)(r.td,{children:"9"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"srcSecKey_cp"}),(0,d.jsx)(r.td,{children:"10"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"srcSecKey_at"}),(0,d.jsx)(r.td,{children:"11"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"srcSecKey_ts"}),(0,d.jsx)(r.td,{children:"12"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"srcSecType"}),(0,d.jsx)(r.td,{children:"13"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"srcTradeDate"}),(0,d.jsx)(r.td,{children:"14"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"clientFirm"}),(0,d.jsx)(r.td,{children:"15"})]})]})]}),"\n",(0,d.jsx)(r.h3,{id:"create-table-example-query",children:"CREATE TABLE EXAMPLE QUERY"}),"\n",(0,d.jsx)(r.pre,{children:(0,d.jsx)(r.code,{className:"language-sql",children:"CREATE TABLE `SRRisk`.`MsgSodCashRecordV5` (\n    `accnt` VARCHAR(16) NOT NULL DEFAULT '',\n    `currency` ENUM('None','AUD','BRL','CAD','CHF','CNH','CNY','EUR','GBP','JPY','KRW','MXN','MYR','NOK','NZD','SEK','TRY','USD','USDCents','CZK','ZAR','HUF','USX','GBX') NOT NULL DEFAULT 'None',\n    `tradeDate` DATE NOT NULL DEFAULT '1900-01-01',\n    `srcTransaction` ENUM('None','ExAsTrans','Dividend','CashTakeout','SecLending') NOT NULL DEFAULT 'None',\n    `srcSecKey_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None' COMMENT 'prior period sec key that this position record derived from (if any)',\n    `srcSecKey_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','EUX','ANY','CXE','DXE','NXAM','NXBR','NXLS','NXML','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None' COMMENT 'prior period sec key that this position record derived from (if any)',\n    `srcSecKey_tk` VARCHAR(12) NOT NULL DEFAULT '' COMMENT 'prior period sec key that this position record derived from (if any)',\n    `srcSecKey_yr` SMALLINT UNSIGNED NOT NULL DEFAULT 0 COMMENT 'prior period sec key that this position record derived from (if any)',\n    `srcSecKey_mn` TINYINT UNSIGNED NOT NULL DEFAULT 0 COMMENT 'prior period sec key that this position record derived from (if any)',\n    `srcSecKey_dy` TINYINT UNSIGNED NOT NULL DEFAULT 0 COMMENT 'prior period sec key that this position record derived from (if any)',\n    `srcSecKey_xx` DOUBLE NOT NULL DEFAULT 0 COMMENT 'prior period sec key that this position record derived from (if any)',\n    `srcSecKey_cp` ENUM('Call','Put','Pair') NOT NULL DEFAULT 'Call' COMMENT 'prior period sec key that this position record derived from (if any)',\n    `srcSecType` ENUM('None','Stock','Future','Option','MLeg') NOT NULL DEFAULT 'None',\n    `srcTradeDate` DATE NOT NULL DEFAULT '1900-01-01' COMMENT 'prior period trade date that this position record derived from',\n    `clientFirm` VARCHAR(16) NOT NULL DEFAULT '' COMMENT 'SR assigned client firm',\n    `srCashAmount` DOUBLE NOT NULL DEFAULT 0,\n    `clrCashAmount` DOUBLE NOT NULL DEFAULT 0,\n    `comment` TINYTEXT NOT NULL DEFAULT '' COMMENT 'source description (if any)',\n    `timestamp` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000',\n    PRIMARY KEY USING HASH (`accnt`,`currency`,`tradeDate`,`srcTransaction`,`srcSecKey_tk`,`srcSecKey_yr`,`srcSecKey_mn`,`srcSecKey_dy`,`srcSecKey_xx`,`srcSecKey_cp`,`srcSecKey_at`,`srcSecKey_ts`,`srcSecType`,`srcTradeDate`,`clientFirm`)\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='SodCashRecords contain a start-of-day currency position that derived from dividend or corporate action being applied to a prior period position.\\nThese records are computed and published by SR rotation servers.';\n\n"})}),"\n",(0,d.jsx)(r.h3,{id:"select-table-example-query",children:"SELECT TABLE EXAMPLE QUERY"}),"\n",(0,d.jsx)(r.pre,{children:(0,d.jsx)(r.code,{className:"language-sql",children:"SELECT\n    `accnt`,\n    `currency`,\n    `tradeDate`,\n    `srcTransaction`,\n    `srcSecKey_at`,\n    `srcSecKey_ts`,\n    `srcSecKey_tk`,\n    `srcSecKey_yr`,\n    `srcSecKey_mn`,\n    `srcSecKey_dy`,\n    `srcSecKey_xx`,\n    `srcSecKey_cp`,\n    `srcSecType`,\n    `srcTradeDate`,\n    `clientFirm`,\n    `srCashAmount`,\n    `clrCashAmount`,\n    `comment`,\n    `timestamp`\nFROM `SRRisk`.`MsgSodCashRecordV5`\nWHERE \n    /* Replace with a VARCHAR(16) */ \n    `accnt` = 'Example_accnt'\n  AND\n    /* Replace with a ENUM('None','AUD','BRL','CAD','CHF','CNH','CNY','EUR','GBP','JPY','KRW','MXN','MYR','NOK','NZD','SEK','TRY','USD','USDCents','CZK','ZAR','HUF','USX','GBX') */ \n    `currency` = 'None'\n  AND\n    /* Replace with a DATE */\n    `tradeDate` = '2022-01-01'\n  AND\n    /* Replace with a ENUM('None','ExAsTrans','Dividend','CashTakeout','SecLending') */ \n    `srcTransaction` = 'None'\n  AND\n    /* Replace with a ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') */ \n    `srcSecKey_at` = 'None'\n  AND\n    /* Replace with a ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','EUX','ANY','CXE','DXE','NXAM','NXBR','NXLS','NXML','NXOS','NXP','EUREX','CEDX','ICEFE') */ \n    `srcSecKey_ts` = 'None'\n  AND\n    /* Replace with a VARCHAR(12) */ \n    `srcSecKey_tk` = 'Example_srcSecKey_tk'\n  AND\n    /* Replace with a SMALLINT UNSIGNED */ \n    `srcSecKey_yr` = 123\n  AND\n    /* Replace with a TINYINT UNSIGNED */ \n    `srcSecKey_mn` = 1\n  AND\n    /* Replace with a TINYINT UNSIGNED */ \n    `srcSecKey_dy` = 1\n  AND\n    /* Replace with a DOUBLE */ \n    `srcSecKey_xx` = 4.56\n  AND\n    /* Replace with a ENUM('Call','Put','Pair') */ \n    `srcSecKey_cp` = 'Call'\n  AND\n    /* Replace with a ENUM('None','Stock','Future','Option','MLeg') */ \n    `srcSecType` = 'None'\n  AND\n    /* Replace with a DATE */\n    `srcTradeDate` = '2022-01-01'\n  AND\n    /* Replace with a VARCHAR(16) */ \n    `clientFirm` = 'Example_clientFirm';\n"})}),"\n",(0,d.jsx)(r.h3,{id:"doc-columns-query",children:"Doc Columns Query"}),"\n",(0,d.jsx)(r.pre,{children:(0,d.jsx)(r.code,{className:"language-sql",children:"SELECT * FROM SRRisk.doccolumns WHERE TABLE_NAME='SodCashRecordV5' ORDER BY ordinal_position ASC;\n"})})]})}function a(e={}){const{wrapper:r}={...(0,n.R)(),...e.components};return r?(0,d.jsx)(r,{...e,children:(0,d.jsx)(o,{...e})}):o(e)}},28453:(e,r,s)=>{s.d(r,{R:()=>i,x:()=>t});var d=s(96540);const n={},c=d.createContext(n);function i(e){const r=d.useContext(c);return d.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function t(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),d.createElement(c.Provider,{value:r},e.children)}}}]);