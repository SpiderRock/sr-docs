"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([["29684"],{56470:function(e,s,r){r.r(s),r.d(s,{default:()=>o,frontMatter:()=>i,metadata:()=>n,assets:()=>a,toc:()=>l,contentTitle:()=>c});var n=JSON.parse('{"id":"MessageSchemas/Schema/SRSE Products/SRAnalytics/SpreadOpenMark/SpreadOpenMark","title":"SpreadOpenMark","description":"V8 Message Definiton","source":"@site/versioned_docs/version-8.5.3.3/MessageSchemas/Schema/SRSE Products/SRAnalytics/SpreadOpenMark/SpreadOpenMark.md","sourceDirName":"MessageSchemas/Schema/SRSE Products/SRAnalytics/SpreadOpenMark","slug":"/MessageSchemas/Schema/SRSE Products/SRAnalytics/SpreadOpenMark/","permalink":"/docs/8.5.3.3/MessageSchemas/Schema/SRSE Products/SRAnalytics/SpreadOpenMark/","draft":false,"unlisted":false,"tags":[],"version":"8.5.3.3","frontMatter":{},"sidebar":"messageSchemasSidebar","previous":{"title":"SpreadCloseMark","permalink":"/docs/8.5.3.3/MessageSchemas/Schema/SRSE Products/SRAnalytics/SpreadCloseMark/"},"next":{"title":"StockBeta","permalink":"/docs/8.5.3.3/MessageSchemas/Schema/SRSE Products/SRAnalytics/StockBeta/"}}'),d=r("52676"),t=r("91503");let i={},c=void 0,a={},l=[{value:"METADATA",id:"metadata",level:3},{value:"Table Definition",id:"table-definition",level:3},{value:"PRIMARY KEY DEFINITION (Unique)",id:"primary-key-definition-unique",level:3},{value:"CREATE TABLE EXAMPLE QUERY",id:"create-table-example-query",level:3},{value:"SELECT TABLE EXAMPLE QUERY",id:"select-table-example-query",level:3},{value:"Doc Columns Query",id:"doc-columns-query",level:3}];function h(e){let s={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(s.p,{children:(0,d.jsx)(s.a,{href:"../../../Topics/market-marks/SpreadOpenMark",children:"V8 Message Definiton"})}),"\n",(0,d.jsxs)(s.p,{children:["SpreadOpenMark records are created during the end-of-day rotation for each ticker and intended for use the following trading day.\nBaseObj",":Spread"]}),"\n",(0,d.jsx)(s.h3,{id:"metadata",children:"METADATA"}),"\n",(0,d.jsxs)(s.table,{children:[(0,d.jsx)(s.thead,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.th,{children:"Attribute"}),(0,d.jsx)(s.th,{children:"Value"})]})}),(0,d.jsxs)(s.tbody,{children:[(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"Topic"}),(0,d.jsx)(s.td,{children:"3120-market-marks"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"MLink Token"}),(0,d.jsx)(s.td,{children:"SpreadMktData"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"Product"}),(0,d.jsx)(s.td,{children:"SRAnalytics"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"accessType"}),(0,d.jsx)(s.td,{children:"SELECT"})]})]})]}),"\n",(0,d.jsx)(s.h3,{id:"table-definition",children:"Table Definition"}),"\n",(0,d.jsxs)(s.table,{children:[(0,d.jsx)(s.thead,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.th,{children:"Field"}),(0,d.jsx)(s.th,{children:"Type"}),(0,d.jsx)(s.th,{children:"Key"}),(0,d.jsx)(s.th,{children:"Default Value"}),(0,d.jsx)(s.th,{children:"Comment"})]})}),(0,d.jsxs)(s.tbody,{children:[(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"skey_at"}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.a,{href:"../../../Enums/AssetType",children:"enum - AssetType"})}),(0,d.jsx)(s.td,{children:"PRI"}),(0,d.jsx)(s.td,{children:"'None'"}),(0,d.jsx)(s.td,{})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"skey_ts"}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.a,{href:"../../../Enums/TickerSrc",children:"enum - TickerSrc"})}),(0,d.jsx)(s.td,{children:"PRI"}),(0,d.jsx)(s.td,{children:"'None'"}),(0,d.jsx)(s.td,{})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"skey_tk"}),(0,d.jsx)(s.td,{children:"VARCHAR(12)"}),(0,d.jsx)(s.td,{children:"PRI"}),(0,d.jsx)(s.td,{children:"''"}),(0,d.jsx)(s.td,{})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"srClsPrc"}),(0,d.jsx)(s.td,{children:"DOUBLE"}),(0,d.jsx)(s.td,{}),(0,d.jsx)(s.td,{children:"0"}),(0,d.jsx)(s.td,{children:"SR close mark close  1min from previous day"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"closePrc"}),(0,d.jsx)(s.td,{children:"DOUBLE"}),(0,d.jsx)(s.td,{}),(0,d.jsx)(s.td,{children:"0"}),(0,d.jsx)(s.td,{children:"official exchange closing mark  from previous day"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"bidPrc"}),(0,d.jsx)(s.td,{children:"DOUBLE"}),(0,d.jsx)(s.td,{}),(0,d.jsx)(s.td,{children:"0"}),(0,d.jsx)(s.td,{children:"bid price SR mark from previous day"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"askPrc"}),(0,d.jsx)(s.td,{children:"DOUBLE"}),(0,d.jsx)(s.td,{}),(0,d.jsx)(s.td,{children:"0"}),(0,d.jsx)(s.td,{children:"ask price SR mark from previous day"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"timestamp"}),(0,d.jsx)(s.td,{children:"DATETIME(6)"}),(0,d.jsx)(s.td,{}),(0,d.jsx)(s.td,{children:"'1900-01-01 00:00:00.000000'"}),(0,d.jsx)(s.td,{})]})]})]}),"\n",(0,d.jsx)(s.h3,{id:"primary-key-definition-unique",children:"PRIMARY KEY DEFINITION (Unique)"}),"\n",(0,d.jsxs)(s.table,{children:[(0,d.jsx)(s.thead,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.th,{children:"Field"}),(0,d.jsx)(s.th,{children:"Sequence"})]})}),(0,d.jsxs)(s.tbody,{children:[(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"skey_tk"}),(0,d.jsx)(s.td,{children:"1"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"skey_at"}),(0,d.jsx)(s.td,{children:"2"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"skey_ts"}),(0,d.jsx)(s.td,{children:"3"})]})]})]}),"\n",(0,d.jsx)(s.h3,{id:"create-table-example-query",children:"CREATE TABLE EXAMPLE QUERY"}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-sql",children:"CREATE TABLE `SRAnalytics`.`MsgSpreadOpenMark` (\n    `skey_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None',\n    `skey_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','EUX','ANY','CXE','DXE','NXAM','NXBR','NXLS','NXML','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None',\n    `skey_tk` VARCHAR(12) NOT NULL DEFAULT '',\n    `srClsPrc` DOUBLE NOT NULL DEFAULT 0 COMMENT 'SR close mark (close - 1min) (from previous day)',\n    `closePrc` DOUBLE NOT NULL DEFAULT 0 COMMENT 'official exchange closing mark  (from previous day)',\n    `bidPrc` DOUBLE NOT NULL DEFAULT 0 COMMENT 'bid price (SR mark from previous day)',\n    `askPrc` DOUBLE NOT NULL DEFAULT 0 COMMENT 'ask price (SR mark from previous day)',\n    `timestamp` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000',\n    PRIMARY KEY USING HASH (`skey_tk`,`skey_at`,`skey_ts`)\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='SpreadOpenMark records are created during the end-of-day rotation for each ticker and intended for use the following trading day.\\nBaseObj:Spread';\n\n"})}),"\n",(0,d.jsx)(s.h3,{id:"select-table-example-query",children:"SELECT TABLE EXAMPLE QUERY"}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-sql",children:"SELECT\n    `skey_at`,\n    `skey_ts`,\n    `skey_tk`,\n    `srClsPrc`,\n    `closePrc`,\n    `bidPrc`,\n    `askPrc`,\n    `timestamp`\nFROM `SRAnalytics`.`MsgSpreadOpenMark`\nWHERE \n    /* Replace with a ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') */ \n    `skey_at` = 'None'\n  AND\n    /* Replace with a ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','EUX','ANY','CXE','DXE','NXAM','NXBR','NXLS','NXML','NXOS','NXP','EUREX','CEDX','ICEFE') */ \n    `skey_ts` = 'None'\n  AND\n    /* Replace with a VARCHAR(12) */ \n    `skey_tk` = 'Example_skey_tk';\n"})}),"\n",(0,d.jsx)(s.h3,{id:"doc-columns-query",children:"Doc Columns Query"}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-sql",children:"SELECT * FROM SRAnalytics.doccolumns WHERE TABLE_NAME='SpreadOpenMark' ORDER BY ordinal_position ASC;\n"})})]})}function o(e={}){let{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,d.jsx)(s,{...e,children:(0,d.jsx)(h,{...e})}):h(e)}},91503:function(e,s,r){r.d(s,{Z:function(){return c},a:function(){return i}});var n=r(75271);let d={},t=n.createContext(d);function i(e){let s=n.useContext(t);return n.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:i(e.components),n.createElement(t.Provider,{value:s},e.children)}}}]);