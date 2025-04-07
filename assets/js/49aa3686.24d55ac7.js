"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([["22996"],{76344:function(e,t,n){n.r(t),n.d(t,{default:()=>E,frontMatter:()=>i,metadata:()=>c,assets:()=>a,toc:()=>d,contentTitle:()=>s});var c=JSON.parse('{"id":"MessageSchemas/Schema/SRSE Products/SRControl/StockLocateRequestGateway/StockLocateRequestGateway","title":"StockLocateRequestGateway","description":"V8 Message Definiton","source":"@site/versioned_docs/version-8.5.3.1/MessageSchemas/Schema/SRSE Products/SRControl/StockLocateRequestGateway/StockLocateRequestGateway.md","sourceDirName":"MessageSchemas/Schema/SRSE Products/SRControl/StockLocateRequestGateway","slug":"/MessageSchemas/Schema/SRSE Products/SRControl/StockLocateRequestGateway/","permalink":"/docs/8.5.3.1/MessageSchemas/Schema/SRSE Products/SRControl/StockLocateRequestGateway/","draft":false,"unlisted":false,"tags":[],"version":"8.5.3.1","frontMatter":{},"sidebar":"messageSchemasSidebar","previous":{"title":"StockLocateRequest","permalink":"/docs/8.5.3.1/MessageSchemas/Schema/SRSE Products/SRControl/StockLocateRequest/"},"next":{"title":"StockLocateResponse","permalink":"/docs/8.5.3.1/MessageSchemas/Schema/SRSE Products/SRControl/StockLocateResponse/"}}'),l=n("52676"),r=n("91503");let i={},s=void 0,a={},d=[{value:"METADATA",id:"metadata",level:3},{value:"Table Definition",id:"table-definition",level:3},{value:"PRIMARY KEY DEFINITION (Unique)",id:"primary-key-definition-unique",level:3},{value:"CREATE TABLE EXAMPLE QUERY",id:"create-table-example-query",level:3},{value:"SELECT TABLE EXAMPLE QUERY",id:"select-table-example-query",level:3},{value:"INSERT TABLE EXAMPLE QUERY",id:"insert-table-example-query",level:3},{value:"DELETE TABLE EXAMPLE QUERY",id:"delete-table-example-query",level:3},{value:"Doc Columns Query",id:"doc-columns-query",level:3}];function o(e){let t={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.p,{children:(0,l.jsx)(t.a,{href:"../../../Topics/srse-gateway/StockLocateRequestGateway",children:"V8 Message Definiton"})}),"\n",(0,l.jsx)(t.p,{children:"Records inserted into this gateway become locate requests and are visible in the StockLocateRequest table."}),"\n",(0,l.jsx)(t.h3,{id:"metadata",children:"METADATA"}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{children:"Attribute"}),(0,l.jsx)(t.th,{children:"Value"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"Topic"}),(0,l.jsx)(t.td,{children:"5120-srse-gateway"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"MLink Token"}),(0,l.jsx)(t.td,{children:"Internal"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"Product"}),(0,l.jsx)(t.td,{children:"SRControl"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"accessType"}),(0,l.jsx)(t.td,{children:"SELECT,UPDATE(requestQuan),INSERT,DELETE"})]})]})]}),"\n",(0,l.jsx)(t.h3,{id:"table-definition",children:"Table Definition"}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{children:"Field"}),(0,l.jsx)(t.th,{children:"Type"}),(0,l.jsx)(t.th,{children:"Key"}),(0,l.jsx)(t.th,{children:"Default Value"}),(0,l.jsx)(t.th,{children:"Comment"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"ticker_at"}),(0,l.jsx)(t.td,{children:(0,l.jsx)(t.a,{href:"../../../Enums/AssetType",children:"enum - AssetType"})}),(0,l.jsx)(t.td,{children:"PRI"}),(0,l.jsx)(t.td,{children:"'None'"}),(0,l.jsx)(t.td,{})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"ticker_ts"}),(0,l.jsx)(t.td,{children:(0,l.jsx)(t.a,{href:"../../../Enums/TickerSrc",children:"enum - TickerSrc"})}),(0,l.jsx)(t.td,{children:"PRI"}),(0,l.jsx)(t.td,{children:"'None'"}),(0,l.jsx)(t.td,{})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"ticker_tk"}),(0,l.jsx)(t.td,{children:"VARCHAR(12)"}),(0,l.jsx)(t.td,{children:"PRI"}),(0,l.jsx)(t.td,{children:"''"}),(0,l.jsx)(t.td,{})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"coreClientFirm"}),(0,l.jsx)(t.td,{children:"VARCHAR(16)"}),(0,l.jsx)(t.td,{children:"PRI"}),(0,l.jsx)(t.td,{children:"''"}),(0,l.jsx)(t.td,{})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"locateFirm"}),(0,l.jsx)(t.td,{children:"VARCHAR(6)"}),(0,l.jsx)(t.td,{children:"PRI"}),(0,l.jsx)(t.td,{children:"''"}),(0,l.jsx)(t.td,{children:"locate firm defaults to clientFirmConfigdefaultLocateFirm"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"locatePool"}),(0,l.jsx)(t.td,{children:"VARCHAR(16)"}),(0,l.jsx)(t.td,{children:"PRI"}),(0,l.jsx)(t.td,{children:"''"}),(0,l.jsx)(t.td,{children:"locate pool  firm granting the locate defaults to clientFirmConfigdefaultLocatePool"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"requestQuan"}),(0,l.jsx)(t.td,{children:"INT"}),(0,l.jsx)(t.td,{}),(0,l.jsx)(t.td,{children:"0"}),(0,l.jsx)(t.td,{children:"request quantity"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"timestamp"}),(0,l.jsx)(t.td,{children:"DATETIME(6)"}),(0,l.jsx)(t.td,{}),(0,l.jsx)(t.td,{children:"'1900-01-01 00:00:00'"}),(0,l.jsx)(t.td,{})]})]})]}),"\n",(0,l.jsx)(t.h3,{id:"primary-key-definition-unique",children:"PRIMARY KEY DEFINITION (Unique)"}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{children:"Field"}),(0,l.jsx)(t.th,{children:"Sequence"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"ticker_tk"}),(0,l.jsx)(t.td,{children:"1"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"ticker_at"}),(0,l.jsx)(t.td,{children:"2"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"ticker_ts"}),(0,l.jsx)(t.td,{children:"3"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"coreClientFirm"}),(0,l.jsx)(t.td,{children:"4"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"locateFirm"}),(0,l.jsx)(t.td,{children:"5"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"locatePool"}),(0,l.jsx)(t.td,{children:"6"})]})]})]}),"\n",(0,l.jsx)(t.h3,{id:"create-table-example-query",children:"CREATE TABLE EXAMPLE QUERY"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-sql",children:"CREATE TABLE `SRControl`.`MsgStockLocateRequestGateway` (\n    `ticker_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None',\n    `ticker_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','EUX','ANY','CXE','DXE','NXAM','NXBR','NXLS','NXML','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None',\n    `ticker_tk` VARCHAR(12) NOT NULL DEFAULT '',\n    `coreClientFirm` VARCHAR(16) NOT NULL DEFAULT '',\n    `locateFirm` VARCHAR(6) NOT NULL DEFAULT '' COMMENT 'locate firm (defaults to clientFirmConfig.defaultLocateFirm)',\n    `locatePool` VARCHAR(16) NOT NULL DEFAULT '' COMMENT 'locate pool @ firm granting the locate (defaults to clientFirmConfig.defaultLocatePool)',\n    `requestQuan` INT NOT NULL DEFAULT 0 COMMENT 'request quantity',\n    `timestamp` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00',\n    PRIMARY KEY USING HASH (`ticker_tk`,`ticker_at`,`ticker_ts`,`coreClientFirm`,`locateFirm`,`locatePool`)\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='Records inserted into this gateway become locate requests and are visible in the StockLocateRequest table.';\n\n"})}),"\n",(0,l.jsx)(t.h3,{id:"select-table-example-query",children:"SELECT TABLE EXAMPLE QUERY"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-sql",children:"SELECT\n    `ticker_at`,\n    `ticker_ts`,\n    `ticker_tk`,\n    `coreClientFirm`,\n    `locateFirm`,\n    `locatePool`,\n    `requestQuan`,\n    `timestamp`\nFROM `SRControl`.`MsgStockLocateRequestGateway`\nWHERE \n    /* Replace with a ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') */ \n    `ticker_at` = 'None'\n  AND\n    /* Replace with a ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','EUX','ANY','CXE','DXE','NXAM','NXBR','NXLS','NXML','NXOS','NXP','EUREX','CEDX','ICEFE') */ \n    `ticker_ts` = 'None'\n  AND\n    /* Replace with a VARCHAR(12) */ \n    `ticker_tk` = 'Example_ticker_tk'\n  AND\n    /* Replace with a VARCHAR(16) */\n    `coreClientFirm` = 'Example_coreClientFirm'\n  AND\n    /* Replace with a VARCHAR(6) */\n    `locateFirm` = 'Example_locateFirm'\n  AND\n    /* Replace with a VARCHAR(16) */\n    `locatePool` = 'Example_locatePool';\n"})}),"\n",(0,l.jsx)(t.h3,{id:"insert-table-example-query",children:"INSERT TABLE EXAMPLE QUERY"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-sql",children:"INSERT INTO `SRControl`.`MsgStockLocateRequestGateway`(\n    /* Replace with a ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') */ \n    `ticker_at`,\n    /* Replace with a ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','EUX','ANY','CXE','DXE','NXAM','NXBR','NXLS','NXML','NXOS','NXP','EUREX','CEDX','ICEFE') */ \n    `ticker_ts`,\n    /* Replace with a VARCHAR(12) */ \n    `ticker_tk`,\n    /* Replace with a VARCHAR(16) */\n    `coreClientFirm`,\n    /* Replace with a VARCHAR(6) */\n    `locateFirm`,\n    /* Replace with a VARCHAR(16) */\n    `locatePool`,\n    /* Replace with a INT */ \n    `requestQuan`,\n    /* Replace with a DATETIME(6) */\n    `timestamp`\n) \nVALUES(\n    'None',\n    'None',\n    'Example_ticker_tk',\n    'Example_coreClientFirm',\n    'Example_locateFirm',\n    'Example_locatePool',\n    5,\n    '2022-01-01 12:34:56.000000'\n);\n"})}),"\n",(0,l.jsx)(t.h3,{id:"delete-table-example-query",children:"DELETE TABLE EXAMPLE QUERY"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-sql",children:"DELETE FROM `SRControl`.`MsgStockLocateRequestGateway` \nWHERE\n    /* Replace with a ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') */ \n    `ticker_at` = 'None'\n  AND\n    /* Replace with a ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','EUX','ANY','CXE','DXE','NXAM','NXBR','NXLS','NXML','NXOS','NXP','EUREX','CEDX','ICEFE') */ \n    `ticker_ts` = 'None'\n  AND\n    /* Replace with a VARCHAR(12) */ \n    `ticker_tk` = 'Example_ticker_tk'\n  AND\n    /* Replace with a VARCHAR(16) */\n    `coreClientFirm` = 'Example_coreClientFirm'\n  AND\n    /* Replace with a VARCHAR(6) */\n    `locateFirm` = 'Example_locateFirm'\n  AND\n    /* Replace with a VARCHAR(16) */\n    `locatePool` = 'Example_locatePool';\n"})}),"\n",(0,l.jsx)(t.h3,{id:"doc-columns-query",children:"Doc Columns Query"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-sql",children:"SELECT * FROM SRControl.doccolumns WHERE TABLE_NAME='StockLocateRequestGateway' ORDER BY ordinal_position ASC;\n"})})]})}function E(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}},91503:function(e,t,n){n.d(t,{Z:function(){return s},a:function(){return i}});var c=n(75271);let l={},r=c.createContext(l);function i(e){let t=c.useContext(r);return c.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),c.createElement(r.Provider,{value:t},e.children)}}}]);