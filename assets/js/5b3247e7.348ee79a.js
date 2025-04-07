"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([["54170"],{7493:function(e,t,d){d.r(t),d.d(t,{default:()=>a,frontMatter:()=>c,metadata:()=>n,assets:()=>l,toc:()=>h,contentTitle:()=>i});var n=JSON.parse('{"id":"MessageSchemas/Schema/SRSE Products/SRTrade/AutoHedgeSymbol/AutoHedgeSymbol","title":"AutoHedgeSymbol","description":"V8 Message Definiton","source":"@site/versioned_docs/version-8.5.3.1/MessageSchemas/Schema/SRSE Products/SRTrade/AutoHedgeSymbol/AutoHedgeSymbol.md","sourceDirName":"MessageSchemas/Schema/SRSE Products/SRTrade/AutoHedgeSymbol","slug":"/MessageSchemas/Schema/SRSE Products/SRTrade/AutoHedgeSymbol/","permalink":"/docs/8.5.3.1/MessageSchemas/Schema/SRSE Products/SRTrade/AutoHedgeSymbol/","draft":false,"unlisted":false,"tags":[],"version":"8.5.3.1","frontMatter":{},"sidebar":"messageSchemasSidebar","previous":{"title":"AutoHedgeControlGateway","permalink":"/docs/8.5.3.1/MessageSchemas/Schema/SRSE Products/SRTrade/AutoHedgeControlGateway/"},"next":{"title":"AutoResponderBX","permalink":"/docs/8.5.3.1/MessageSchemas/Schema/SRSE Products/SRTrade/AutoResponderBX/"}}'),r=d("52676"),s=d("91503");let c={},i=void 0,l={},h=[{value:"METADATA",id:"metadata",level:3},{value:"Table Definition",id:"table-definition",level:3},{value:"PRIMARY KEY DEFINITION (Unique)",id:"primary-key-definition-unique",level:3},{value:"CREATE TABLE EXAMPLE QUERY",id:"create-table-example-query",level:3},{value:"SELECT TABLE EXAMPLE QUERY",id:"select-table-example-query",level:3},{value:"Doc Columns Query",id:"doc-columns-query",level:3}];function N(e){let t={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"../../../Topics/strategy-autohedge/AutoHedgeSymbol",children:"V8 Message Definiton"})}),"\n",(0,r.jsx)(t.p,{children:"AutoHedgeSymbol records are published by autohedge servers and contain all valid hedge target symbols.  Execution engines reject auto-hedge requests for hedgeSecKeys that are not in this set."}),"\n",(0,r.jsx)(t.h3,{id:"metadata",children:"METADATA"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Attribute"}),(0,r.jsx)(t.th,{children:"Value"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Topic"}),(0,r.jsx)(t.td,{children:"5290-strategy-autohedge"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"MLink Token"}),(0,r.jsx)(t.td,{children:"ClientTrading"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Product"}),(0,r.jsx)(t.td,{children:"SRTrade"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"accessType"}),(0,r.jsx)(t.td,{children:"SELECT"})]})]})]}),"\n",(0,r.jsx)(t.h3,{id:"table-definition",children:"Table Definition"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Field"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Key"}),(0,r.jsx)(t.th,{children:"Default Value"}),(0,r.jsx)(t.th,{children:"Comment"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"targetSecKey_at"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"../../../Enums/AssetType",children:"enum - AssetType"})}),(0,r.jsx)(t.td,{children:"PRI"}),(0,r.jsx)(t.td,{children:"'None'"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"targetSecKey_ts"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"../../../Enums/TickerSrc",children:"enum - TickerSrc"})}),(0,r.jsx)(t.td,{children:"PRI"}),(0,r.jsx)(t.td,{children:"'None'"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"targetSecKey_tk"}),(0,r.jsx)(t.td,{children:"VARCHAR(12)"}),(0,r.jsx)(t.td,{children:"PRI"}),(0,r.jsx)(t.td,{children:"''"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"targetSecKey_yr"}),(0,r.jsx)(t.td,{children:"SMALLINT UNSIGNED"}),(0,r.jsx)(t.td,{children:"PRI"}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"targetSecKey_mn"}),(0,r.jsx)(t.td,{children:"TINYINT UNSIGNED"}),(0,r.jsx)(t.td,{children:"PRI"}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"targetSecKey_dy"}),(0,r.jsx)(t.td,{children:"TINYINT UNSIGNED"}),(0,r.jsx)(t.td,{children:"PRI"}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"targetSecType"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"../../../Enums/SpdrKeyType",children:"enum - SpdrKeyType"})}),(0,r.jsx)(t.td,{children:"PRI"}),(0,r.jsx)(t.td,{children:"'None'"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"hedgeTargetType"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"../../../Enums/HedgeTargetType",children:"enum - HedgeTargetType"})}),(0,r.jsx)(t.td,{children:"PRI"}),(0,r.jsx)(t.td,{children:"'None'"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"ticker_at"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"../../../Enums/AssetType",children:"enum - AssetType"})}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"'None'"}),(0,r.jsx)(t.td,{children:"Ticker"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"ticker_ts"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"../../../Enums/TickerSrc",children:"enum - TickerSrc"})}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"'None'"}),(0,r.jsx)(t.td,{children:"Ticker"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"ticker_tk"}),(0,r.jsx)(t.td,{children:"VARCHAR(12)"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"''"}),(0,r.jsx)(t.td,{children:"Ticker"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"tickerDesc"}),(0,r.jsx)(t.td,{children:"TINYTEXT"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"''"}),(0,r.jsx)(t.td,{children:"Ticker Description"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"hedgeSecKey_at"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"../../../Enums/AssetType",children:"enum - AssetType"})}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"'None'"}),(0,r.jsx)(t.td,{children:"Execution Hedge SecKey"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"hedgeSecKey_ts"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"../../../Enums/TickerSrc",children:"enum - TickerSrc"})}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"'None'"}),(0,r.jsx)(t.td,{children:"Execution Hedge SecKey"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"hedgeSecKey_tk"}),(0,r.jsx)(t.td,{children:"VARCHAR(12)"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"''"}),(0,r.jsx)(t.td,{children:"Execution Hedge SecKey"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"hedgeSecKey_yr"}),(0,r.jsx)(t.td,{children:"SMALLINT UNSIGNED"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"Execution Hedge SecKey"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"hedgeSecKey_mn"}),(0,r.jsx)(t.td,{children:"TINYINT UNSIGNED"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"Execution Hedge SecKey"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"hedgeSecKey_dy"}),(0,r.jsx)(t.td,{children:"TINYINT UNSIGNED"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"Execution Hedge SecKey"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"hedgeSecType"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"../../../Enums/SpdrKeyType",children:"enum - SpdrKeyType"})}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"'None'"}),(0,r.jsx)(t.td,{children:"Execution Hedge SecType"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"earlySessionClose"}),(0,r.jsx)(t.td,{children:"DATETIME(6)"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"'1900-01-01 00:00:00.000000'"}),(0,r.jsx)(t.td,{children:"system time CST"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"regSessionClose"}),(0,r.jsx)(t.td,{children:"DATETIME(6)"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"'1900-01-01 00:00:00.000000'"}),(0,r.jsx)(t.td,{children:"system time CST"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"lateSessionClose"}),(0,r.jsx)(t.td,{children:"DATETIME(6)"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"'1900-01-01 00:00:00.000000'"}),(0,r.jsx)(t.td,{children:"system time CST"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"isHedgeSecOK"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"../../../Enums/YesNo",children:"enum - YesNo"})}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"'None'"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"hedgeSecError"}),(0,r.jsx)(t.td,{children:"TINYTEXT"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"''"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"hedgeUMidPrc"}),(0,r.jsx)(t.td,{children:"DOUBLE"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"current market midprice of the hedge instrument used to calculate approximate hedge sizes for preorder checks"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"timestamp"}),(0,r.jsx)(t.td,{children:"DATETIME(6)"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"'1900-01-01 00:00:00.000000'"}),(0,r.jsx)(t.td,{children:"SR system timestamp"})]})]})]}),"\n",(0,r.jsx)(t.h3,{id:"primary-key-definition-unique",children:"PRIMARY KEY DEFINITION (Unique)"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Field"}),(0,r.jsx)(t.th,{children:"Sequence"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"targetSecKey_tk"}),(0,r.jsx)(t.td,{children:"1"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"targetSecKey_yr"}),(0,r.jsx)(t.td,{children:"2"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"targetSecKey_mn"}),(0,r.jsx)(t.td,{children:"3"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"targetSecKey_dy"}),(0,r.jsx)(t.td,{children:"4"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"targetSecKey_at"}),(0,r.jsx)(t.td,{children:"5"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"targetSecKey_ts"}),(0,r.jsx)(t.td,{children:"6"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"targetSecType"}),(0,r.jsx)(t.td,{children:"7"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"hedgeTargetType"}),(0,r.jsx)(t.td,{children:"8"})]})]})]}),"\n",(0,r.jsx)(t.h3,{id:"create-table-example-query",children:"CREATE TABLE EXAMPLE QUERY"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sql",children:"CREATE TABLE `SRTrade`.`MsgAutoHedgeSymbol` (\n    `targetSecKey_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None',\n    `targetSecKey_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','EUX','ANY','CXE','DXE','NXAM','NXBR','NXLS','NXML','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None',\n    `targetSecKey_tk` VARCHAR(12) NOT NULL DEFAULT '',\n    `targetSecKey_yr` SMALLINT UNSIGNED NOT NULL DEFAULT 0,\n    `targetSecKey_mn` TINYINT UNSIGNED NOT NULL DEFAULT 0,\n    `targetSecKey_dy` TINYINT UNSIGNED NOT NULL DEFAULT 0,\n    `targetSecType` ENUM('None','Stock','Future','Option','MLeg') NOT NULL DEFAULT 'None',\n    `hedgeTargetType` ENUM('None','Stock','Future','FrontMonth') NOT NULL DEFAULT 'None',\n    `ticker_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None' COMMENT 'Ticker',\n    `ticker_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','EUX','ANY','CXE','DXE','NXAM','NXBR','NXLS','NXML','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None' COMMENT 'Ticker',\n    `ticker_tk` VARCHAR(12) NOT NULL DEFAULT '' COMMENT 'Ticker',\n    `tickerDesc` TINYTEXT NOT NULL DEFAULT '' COMMENT 'Ticker Description',\n    `hedgeSecKey_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None' COMMENT 'Execution Hedge SecKey',\n    `hedgeSecKey_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','EUX','ANY','CXE','DXE','NXAM','NXBR','NXLS','NXML','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None' COMMENT 'Execution Hedge SecKey',\n    `hedgeSecKey_tk` VARCHAR(12) NOT NULL DEFAULT '' COMMENT 'Execution Hedge SecKey',\n    `hedgeSecKey_yr` SMALLINT UNSIGNED NOT NULL DEFAULT 0 COMMENT 'Execution Hedge SecKey',\n    `hedgeSecKey_mn` TINYINT UNSIGNED NOT NULL DEFAULT 0 COMMENT 'Execution Hedge SecKey',\n    `hedgeSecKey_dy` TINYINT UNSIGNED NOT NULL DEFAULT 0 COMMENT 'Execution Hedge SecKey',\n    `hedgeSecType` ENUM('None','Stock','Future','Option','MLeg') NOT NULL DEFAULT 'None' COMMENT 'Execution Hedge SecType',\n    `earlySessionClose` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000' COMMENT 'system time (CST)',\n    `regSessionClose` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000' COMMENT 'system time (CST)',\n    `lateSessionClose` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000' COMMENT 'system time (CST)',\n    `isHedgeSecOK` ENUM('None','Yes','No') NOT NULL DEFAULT 'None',\n    `hedgeSecError` TINYTEXT NOT NULL DEFAULT '',\n    `hedgeUMidPrc` DOUBLE NOT NULL DEFAULT 0 COMMENT 'current market mid-price of the hedge instrument, used to calculate approximate hedge sizes for pre-order checks',\n    `timestamp` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000' COMMENT 'SR system timestamp',\n    PRIMARY KEY USING HASH (`targetSecKey_tk`,`targetSecKey_yr`,`targetSecKey_mn`,`targetSecKey_dy`,`targetSecKey_at`,`targetSecKey_ts`,`targetSecType`,`hedgeTargetType`)\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='AutoHedgeSymbol records are published by autohedge servers and contain all valid hedge target symbols.  Execution engines reject auto-hedge requests for hedgeSecKeys that are not in this set.';\n\n"})}),"\n",(0,r.jsx)(t.h3,{id:"select-table-example-query",children:"SELECT TABLE EXAMPLE QUERY"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sql",children:"SELECT\n    `targetSecKey_at`,\n    `targetSecKey_ts`,\n    `targetSecKey_tk`,\n    `targetSecKey_yr`,\n    `targetSecKey_mn`,\n    `targetSecKey_dy`,\n    `targetSecType`,\n    `hedgeTargetType`,\n    `ticker_at`,\n    `ticker_ts`,\n    `ticker_tk`,\n    `tickerDesc`,\n    `hedgeSecKey_at`,\n    `hedgeSecKey_ts`,\n    `hedgeSecKey_tk`,\n    `hedgeSecKey_yr`,\n    `hedgeSecKey_mn`,\n    `hedgeSecKey_dy`,\n    `hedgeSecType`,\n    `earlySessionClose`,\n    `regSessionClose`,\n    `lateSessionClose`,\n    `isHedgeSecOK`,\n    `hedgeSecError`,\n    `hedgeUMidPrc`,\n    `timestamp`\nFROM `SRTrade`.`MsgAutoHedgeSymbol`\nWHERE \n    /* Replace with a ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') */ \n    `targetSecKey_at` = 'None'\n  AND\n    /* Replace with a ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','EUX','ANY','CXE','DXE','NXAM','NXBR','NXLS','NXML','NXOS','NXP','EUREX','CEDX','ICEFE') */ \n    `targetSecKey_ts` = 'None'\n  AND\n    /* Replace with a VARCHAR(12) */ \n    `targetSecKey_tk` = 'Example_targetSecKey_tk'\n  AND\n    /* Replace with a SMALLINT UNSIGNED */ \n    `targetSecKey_yr` = 123\n  AND\n    /* Replace with a TINYINT UNSIGNED */ \n    `targetSecKey_mn` = 1\n  AND\n    /* Replace with a TINYINT UNSIGNED */ \n    `targetSecKey_dy` = 1\n  AND\n    /* Replace with a ENUM('None','Stock','Future','Option','MLeg') */ \n    `targetSecType` = 'None'\n  AND\n    /* Replace with a ENUM('None','Stock','Future','FrontMonth') */ \n    `hedgeTargetType` = 'None';\n"})}),"\n",(0,r.jsx)(t.h3,{id:"doc-columns-query",children:"Doc Columns Query"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sql",children:"SELECT * FROM SRTrade.doccolumns WHERE TABLE_NAME='AutoHedgeSymbol' ORDER BY ordinal_position ASC;\n"})})]})}function a(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(N,{...e})}):N(e)}},91503:function(e,t,d){d.d(t,{Z:function(){return i},a:function(){return c}});var n=d(75271);let r={},s=n.createContext(r);function c(e){let t=n.useContext(s);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);