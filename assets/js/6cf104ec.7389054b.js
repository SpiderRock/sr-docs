"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([["71977"],{12192:function(e,t,n){n.r(t),n.d(t,{default:()=>o,frontMatter:()=>i,metadata:()=>r,assets:()=>l,toc:()=>h,contentTitle:()=>c});var r=JSON.parse('{"id":"MessageSchemas/Schema/SRSE Products/SRLive/SyntheticFutureQuote/SyntheticFutureQuote","title":"SyntheticFutureQuote","description":"V8 Message Definiton","source":"@site/versioned_docs/version-8.5.3.1/MessageSchemas/Schema/SRSE Products/SRLive/SyntheticFutureQuote/SyntheticFutureQuote.md","sourceDirName":"MessageSchemas/Schema/SRSE Products/SRLive/SyntheticFutureQuote","slug":"/MessageSchemas/Schema/SRSE Products/SRLive/SyntheticFutureQuote/","permalink":"/docs/8.5.3.1/MessageSchemas/Schema/SRSE Products/SRLive/SyntheticFutureQuote/","draft":false,"unlisted":false,"tags":[],"version":"8.5.3.1","frontMatter":{},"sidebar":"messageSchemasSidebar","previous":{"title":"SyntheticExpiryQuote","permalink":"/docs/8.5.3.1/MessageSchemas/Schema/SRSE Products/SRLive/SyntheticExpiryQuote/"},"next":{"title":"TickerAnalytics","permalink":"/docs/8.5.3.1/MessageSchemas/Schema/SRSE Products/SRLive/TickerAnalytics/"}}'),d=n("52676"),s=n("91503");let i={},c=void 0,l={},h=[{value:"METADATA",id:"metadata",level:3},{value:"Table Definition",id:"table-definition",level:3},{value:"PRIMARY KEY DEFINITION (Unique)",id:"primary-key-definition-unique",level:3},{value:"CREATE TABLE EXAMPLE QUERY",id:"create-table-example-query",level:3},{value:"SELECT TABLE EXAMPLE QUERY",id:"select-table-example-query",level:3},{value:"Doc Columns Query",id:"doc-columns-query",level:3}];function a(e){let t={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(t.p,{children:(0,d.jsx)(t.a,{href:"../../../Topics/market-data-index/SyntheticFutureQuote",children:"V8 Message Definiton"})}),"\n",(0,d.jsx)(t.p,{children:"Live synthetic future quotes are SpiderRock implied futures quotes derived from roll prices."}),"\n",(0,d.jsx)(t.h3,{id:"metadata",children:"METADATA"}),"\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Attribute"}),(0,d.jsx)(t.th,{children:"Value"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"Topic"}),(0,d.jsx)(t.td,{children:"2675-market-data-index"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"MLink Token"}),(0,d.jsx)(t.td,{children:"ClientLive"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"Product"}),(0,d.jsx)(t.td,{children:"SRLive"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"accessType"}),(0,d.jsx)(t.td,{children:"SELECT"})]})]})]}),"\n",(0,d.jsx)(t.h3,{id:"table-definition",children:"Table Definition"}),"\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Field"}),(0,d.jsx)(t.th,{children:"Type"}),(0,d.jsx)(t.th,{children:"Key"}),(0,d.jsx)(t.th,{children:"Default Value"}),(0,d.jsx)(t.th,{children:"Comment"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"fkey_at"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.a,{href:"../../../Enums/AssetType",children:"enum - AssetType"})}),(0,d.jsx)(t.td,{children:"PRI"}),(0,d.jsx)(t.td,{children:"'None'"}),(0,d.jsx)(t.td,{children:"ccode  expiry"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"fkey_ts"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.a,{href:"../../../Enums/TickerSrc",children:"enum - TickerSrc"})}),(0,d.jsx)(t.td,{children:"PRI"}),(0,d.jsx)(t.td,{children:"'None'"}),(0,d.jsx)(t.td,{children:"ccode  expiry"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"fkey_tk"}),(0,d.jsx)(t.td,{children:"VARCHAR(12)"}),(0,d.jsx)(t.td,{children:"PRI"}),(0,d.jsx)(t.td,{children:"''"}),(0,d.jsx)(t.td,{children:"ccode  expiry"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"fkey_yr"}),(0,d.jsx)(t.td,{children:"SMALLINT UNSIGNED"}),(0,d.jsx)(t.td,{children:"PRI"}),(0,d.jsx)(t.td,{children:"0"}),(0,d.jsx)(t.td,{children:"ccode  expiry"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"fkey_mn"}),(0,d.jsx)(t.td,{children:"TINYINT UNSIGNED"}),(0,d.jsx)(t.td,{children:"PRI"}),(0,d.jsx)(t.td,{children:"0"}),(0,d.jsx)(t.td,{children:"ccode  expiry"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"fkey_dy"}),(0,d.jsx)(t.td,{children:"TINYINT UNSIGNED"}),(0,d.jsx)(t.td,{children:"PRI"}),(0,d.jsx)(t.td,{children:"0"}),(0,d.jsx)(t.td,{children:"ccode  expiry"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"bidPrice"}),(0,d.jsx)(t.td,{children:"DOUBLE"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"0"}),(0,d.jsx)(t.td,{children:"best implied future bid price adjusted for option expiry"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"askPrice"}),(0,d.jsx)(t.td,{children:"DOUBLE"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"0"}),(0,d.jsx)(t.td,{children:"best implied future ask price adjusted for option expiry"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"bidSize"}),(0,d.jsx)(t.td,{children:"INT"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"0"}),(0,d.jsx)(t.td,{children:"best implied future bid size"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"askSize"}),(0,d.jsx)(t.td,{children:"INT"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"0"}),(0,d.jsx)(t.td,{children:"best implied future ask size"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"bidSource"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.a,{href:"../../../Enums/SyntheticSource",children:"enum - SyntheticSource"})}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"'None'"}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"askSource"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.a,{href:"../../../Enums/SyntheticSource",children:"enum - SyntheticSource"})}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"'None'"}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"marketStatus"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.a,{href:"../../../Enums/MarketStatus",children:"enum - MarketStatus"})}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"'None'"}),(0,d.jsx)(t.td,{children:"composite market status of all dependent markets"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"netTimestamp"}),(0,d.jsx)(t.td,{children:"BIGINT"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"0"}),(0,d.jsx)(t.td,{children:"most recent net timestamp of any market affecting this record"})]})]})]}),"\n",(0,d.jsx)(t.h3,{id:"primary-key-definition-unique",children:"PRIMARY KEY DEFINITION (Unique)"}),"\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Field"}),(0,d.jsx)(t.th,{children:"Sequence"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"fkey_tk"}),(0,d.jsx)(t.td,{children:"1"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"fkey_yr"}),(0,d.jsx)(t.td,{children:"2"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"fkey_mn"}),(0,d.jsx)(t.td,{children:"3"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"fkey_dy"}),(0,d.jsx)(t.td,{children:"4"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"fkey_at"}),(0,d.jsx)(t.td,{children:"5"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"fkey_ts"}),(0,d.jsx)(t.td,{children:"6"})]})]})]}),"\n",(0,d.jsx)(t.h3,{id:"create-table-example-query",children:"CREATE TABLE EXAMPLE QUERY"}),"\n",(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:"language-sql",children:"CREATE TABLE `SRLive`.`MsgSyntheticFutureQuote` (\n    `fkey_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None' COMMENT 'ccode + expiry',\n    `fkey_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','EUX','ANY','CXE','DXE','NXAM','NXBR','NXLS','NXML','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None' COMMENT 'ccode + expiry',\n    `fkey_tk` VARCHAR(12) NOT NULL DEFAULT '' COMMENT 'ccode + expiry',\n    `fkey_yr` SMALLINT UNSIGNED NOT NULL DEFAULT 0 COMMENT 'ccode + expiry',\n    `fkey_mn` TINYINT UNSIGNED NOT NULL DEFAULT 0 COMMENT 'ccode + expiry',\n    `fkey_dy` TINYINT UNSIGNED NOT NULL DEFAULT 0 COMMENT 'ccode + expiry',\n    `bidPrice` DOUBLE NOT NULL DEFAULT 0 COMMENT 'best implied future bid price (adjusted for option expiry)',\n    `askPrice` DOUBLE NOT NULL DEFAULT 0 COMMENT 'best implied future ask price (adjusted for option expiry)',\n    `bidSize` INT NOT NULL DEFAULT 0 COMMENT 'best implied future bid size',\n    `askSize` INT NOT NULL DEFAULT 0 COMMENT 'best implied future ask size',\n    `bidSource` ENUM('None','Future','FutureRoll','Stock') NOT NULL DEFAULT 'None',\n    `askSource` ENUM('None','Future','FutureRoll','Stock') NOT NULL DEFAULT 'None',\n    `marketStatus` ENUM('None','PreOpen','PreCross','Cross','Open','Closed','Halted','AfterHours') NOT NULL DEFAULT 'None' COMMENT 'composite market status of all dependent markets',\n    `netTimestamp` BIGINT NOT NULL DEFAULT 0 COMMENT 'most recent net timestamp of any market affecting this record',\n    PRIMARY KEY USING HASH (`fkey_tk`,`fkey_yr`,`fkey_mn`,`fkey_dy`,`fkey_at`,`fkey_ts`)\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='Live synthetic future quotes are SpiderRock implied futures quotes derived from roll prices.';\n\n"})}),"\n",(0,d.jsx)(t.h3,{id:"select-table-example-query",children:"SELECT TABLE EXAMPLE QUERY"}),"\n",(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:"language-sql",children:"SELECT\n    `fkey_at`,\n    `fkey_ts`,\n    `fkey_tk`,\n    `fkey_yr`,\n    `fkey_mn`,\n    `fkey_dy`,\n    `bidPrice`,\n    `askPrice`,\n    `bidSize`,\n    `askSize`,\n    `bidSource`,\n    `askSource`,\n    `marketStatus`,\n    `netTimestamp`\nFROM `SRLive`.`MsgSyntheticFutureQuote`\nWHERE \n    /* Replace with a ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') */ \n    `fkey_at` = 'None'\n  AND\n    /* Replace with a ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','EUX','ANY','CXE','DXE','NXAM','NXBR','NXLS','NXML','NXOS','NXP','EUREX','CEDX','ICEFE') */ \n    `fkey_ts` = 'None'\n  AND\n    /* Replace with a VARCHAR(12) */ \n    `fkey_tk` = 'Example_fkey_tk'\n  AND\n    /* Replace with a SMALLINT UNSIGNED */ \n    `fkey_yr` = 123\n  AND\n    /* Replace with a TINYINT UNSIGNED */ \n    `fkey_mn` = 1\n  AND\n    /* Replace with a TINYINT UNSIGNED */ \n    `fkey_dy` = 1;\n"})}),"\n",(0,d.jsx)(t.h3,{id:"doc-columns-query",children:"Doc Columns Query"}),"\n",(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:"language-sql",children:"SELECT * FROM SRLive.doccolumns WHERE TABLE_NAME='SyntheticFutureQuote' ORDER BY ordinal_position ASC;\n"})})]})}function o(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(a,{...e})}):a(e)}},91503:function(e,t,n){n.d(t,{Z:function(){return c},a:function(){return i}});var r=n(75271);let d={},s=r.createContext(d);function i(e){let t=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:i(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);