"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[31727],{92681:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>E,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var r=n(74848),c=n(28453);const l={},s=void 0,i={id:"MessageSchemas/Schema/SRSE Products/SRControl/StockPoolBorrowRate/StockPoolBorrowRate",title:"StockPoolBorrowRate",description:"V8 Message Definiton",source:"@site/versioned_docs/version-8.4.12.1/MessageSchemas/Schema/SRSE Products/SRControl/StockPoolBorrowRate/StockPoolBorrowRate.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRControl/StockPoolBorrowRate",slug:"/MessageSchemas/Schema/SRSE Products/SRControl/StockPoolBorrowRate/",permalink:"/docs/8.4.12.1/MessageSchemas/Schema/SRSE Products/SRControl/StockPoolBorrowRate/",draft:!1,unlisted:!1,tags:[],version:"8.4.12.1",frontMatter:{},sidebar:"messageSchemasSidebar",previous:{title:"StockLocateResponse",permalink:"/docs/8.4.12.1/MessageSchemas/Schema/SRSE Products/SRControl/StockLocateResponse/"},next:{title:"StockThreshold",permalink:"/docs/8.4.12.1/MessageSchemas/Schema/SRSE Products/SRControl/StockThreshold/"}},o={},d=[{value:"METADATA",id:"metadata",level:3},{value:"Table Definition",id:"table-definition",level:3},{value:"PRIMARY KEY DEFINITION (Unique)",id:"primary-key-definition-unique",level:3},{value:"CREATE TABLE EXAMPLE QUERY",id:"create-table-example-query",level:3},{value:"SELECT TABLE EXAMPLE QUERY",id:"select-table-example-query",level:3},{value:"UPDATE TABLE EXAMPLE QUERY",id:"update-table-example-query",level:3},{value:"INSERT TABLE EXAMPLE QUERY",id:"insert-table-example-query",level:3},{value:"DELETE TABLE EXAMPLE QUERY",id:"delete-table-example-query",level:3},{value:"Doc Columns Query",id:"doc-columns-query",level:3}];function a(e){const t={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,c.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"../../../Topics/client-borrow/StockPoolBorrowRate",children:"V8 Message Definiton"})}),"\n",(0,r.jsx)(t.p,{children:"Records are as loaded by clients and usually represents their negotiated borrow rates."}),"\n",(0,r.jsx)(t.h3,{id:"metadata",children:"METADATA"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Attribute"}),(0,r.jsx)(t.th,{children:"Value"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Topic"}),(0,r.jsx)(t.td,{children:"1725-client-borrow"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"MLink Token"}),(0,r.jsx)(t.td,{children:"ClientControl"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Product"}),(0,r.jsx)(t.td,{children:"SRControl"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"accessType"}),(0,r.jsx)(t.td,{children:"SELECT,UPDATE,INSERT,DELETE"})]})]})]}),"\n",(0,r.jsx)(t.h3,{id:"table-definition",children:"Table Definition"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Field"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Key"}),(0,r.jsx)(t.th,{children:"Default Value"}),(0,r.jsx)(t.th,{children:"Comment"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"ticker_at"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"../../../Enums/AssetType",children:"enum - AssetType"})}),(0,r.jsx)(t.td,{children:"PRI"}),(0,r.jsx)(t.td,{children:"'None'"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"ticker_ts"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"../../../Enums/TickerSrc",children:"enum - TickerSrc"})}),(0,r.jsx)(t.td,{children:"PRI"}),(0,r.jsx)(t.td,{children:"'None'"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"ticker_tk"}),(0,r.jsx)(t.td,{children:"VARCHAR(12)"}),(0,r.jsx)(t.td,{children:"PRI"}),(0,r.jsx)(t.td,{children:"''"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"clientFirm"}),(0,r.jsx)(t.td,{children:"VARCHAR(16)"}),(0,r.jsx)(t.td,{children:"PRI"}),(0,r.jsx)(t.td,{children:"''"}),(0,r.jsx)(t.td,{children:"SR client firm"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"borrowRate"}),(0,r.jsx)(t.td,{children:"FLOAT"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"overnight borrow rate for this ticker"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"source"}),(0,r.jsx)(t.td,{children:"VARCHAR(16)"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"''"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"timestamp"}),(0,r.jsx)(t.td,{children:"DATETIME(6)"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"'1900-01-01 00:00:00.000000'"}),(0,r.jsx)(t.td,{})]})]})]}),"\n",(0,r.jsx)(t.h3,{id:"primary-key-definition-unique",children:"PRIMARY KEY DEFINITION (Unique)"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Field"}),(0,r.jsx)(t.th,{children:"Sequence"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"ticker_tk"}),(0,r.jsx)(t.td,{children:"1"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"ticker_at"}),(0,r.jsx)(t.td,{children:"2"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"ticker_ts"}),(0,r.jsx)(t.td,{children:"3"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"clientFirm"}),(0,r.jsx)(t.td,{children:"4"})]})]})]}),"\n",(0,r.jsx)(t.h3,{id:"create-table-example-query",children:"CREATE TABLE EXAMPLE QUERY"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sql",children:"CREATE TABLE `SRControl`.`MsgStockPoolBorrowRate` (\n    `ticker_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None',\n    `ticker_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','EUX','ANY','CXE','DXE','NXAM','NXBR','NXLS','NXML','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None',\n    `ticker_tk` VARCHAR(12) NOT NULL DEFAULT '',\n    `clientFirm` VARCHAR(16) NOT NULL DEFAULT '' COMMENT 'SR client firm',\n    `borrowRate` FLOAT NOT NULL DEFAULT 0 COMMENT 'overnight borrow rate for this ticker',\n    `source` VARCHAR(16) NOT NULL DEFAULT '',\n    `timestamp` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000',\n    PRIMARY KEY USING HASH (`ticker_tk`,`ticker_at`,`ticker_ts`,`clientFirm`)\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='Records are as loaded by clients and usually represents their negotiated borrow rates.';\n\n"})}),"\n",(0,r.jsx)(t.h3,{id:"select-table-example-query",children:"SELECT TABLE EXAMPLE QUERY"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sql",children:"SELECT\n    `ticker_at`,\n    `ticker_ts`,\n    `ticker_tk`,\n    `clientFirm`,\n    `borrowRate`,\n    `source`,\n    `timestamp`\nFROM `SRControl`.`MsgStockPoolBorrowRate`\nWHERE \n    /* Replace with a ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') */ \n    `ticker_at` = 'None'\n  AND\n    /* Replace with a ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','EUX','ANY','CXE','DXE','NXAM','NXBR','NXLS','NXML','NXOS','NXP','EUREX','CEDX','ICEFE') */ \n    `ticker_ts` = 'None'\n  AND\n    /* Replace with a VARCHAR(12) */ \n    `ticker_tk` = 'Example_ticker_tk'\n  AND\n    /* Replace with a VARCHAR(16) */ \n    `clientFirm` = 'Example_clientFirm';\n"})}),"\n",(0,r.jsx)(t.h3,{id:"update-table-example-query",children:"UPDATE TABLE EXAMPLE QUERY"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sql",children:"UPDATE `SRControl`.`MsgStockPoolBorrowRate` \nSET\n    /* Replace with a FLOAT */ \n    `borrowRate` = 1.23,\n    /* Replace with a VARCHAR(16) */ \n    `source` = 'Example_source',\n    /* Replace with a DATETIME(6) */\n    `timestamp` = '2022-01-01 12:34:56.000000'\nWHERE\n    /* Replace with a ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') */ \n    `ticker_at` = 'None'\n  AND\n    /* Replace with a ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','EUX','ANY','CXE','DXE','NXAM','NXBR','NXLS','NXML','NXOS','NXP','EUREX','CEDX','ICEFE') */ \n    `ticker_ts` = 'None'\n  AND\n    /* Replace with a VARCHAR(12) */ \n    `ticker_tk` = 'Example_ticker_tk'\n  AND\n    /* Replace with a VARCHAR(16) */ \n    `clientFirm` = 'Example_clientFirm';\n"})}),"\n",(0,r.jsx)(t.h3,{id:"insert-table-example-query",children:"INSERT TABLE EXAMPLE QUERY"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sql",children:"INSERT INTO `SRControl`.`MsgStockPoolBorrowRate`(\n    /* Replace with a ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') */ \n    `ticker_at`,\n    /* Replace with a ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','EUX','ANY','CXE','DXE','NXAM','NXBR','NXLS','NXML','NXOS','NXP','EUREX','CEDX','ICEFE') */ \n    `ticker_ts`,\n    /* Replace with a VARCHAR(12) */ \n    `ticker_tk`,\n    /* Replace with a VARCHAR(16) */ \n    `clientFirm`,\n    /* Replace with a FLOAT */ \n    `borrowRate`,\n    /* Replace with a VARCHAR(16) */ \n    `source`,\n    /* Replace with a DATETIME(6) */\n    `timestamp`\n) \nVALUES(\n    'None',\n    'None',\n    'Example_ticker_tk',\n    'Example_clientFirm',\n    1.23,\n    'Example_source',\n    '2022-01-01 12:34:56.000000'\n);\n"})}),"\n",(0,r.jsx)(t.h3,{id:"delete-table-example-query",children:"DELETE TABLE EXAMPLE QUERY"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sql",children:"DELETE FROM `SRControl`.`MsgStockPoolBorrowRate` \nWHERE\n    /* Replace with a ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') */ \n    `ticker_at` = 'None'\n  AND\n    /* Replace with a ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','EUX','ANY','CXE','DXE','NXAM','NXBR','NXLS','NXML','NXOS','NXP','EUREX','CEDX','ICEFE') */ \n    `ticker_ts` = 'None'\n  AND\n    /* Replace with a VARCHAR(12) */ \n    `ticker_tk` = 'Example_ticker_tk'\n  AND\n    /* Replace with a VARCHAR(16) */ \n    `clientFirm` = 'Example_clientFirm';\n"})}),"\n",(0,r.jsx)(t.h3,{id:"doc-columns-query",children:"Doc Columns Query"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sql",children:"SELECT * FROM SRControl.doccolumns WHERE TABLE_NAME='StockPoolBorrowRate' ORDER BY ordinal_position ASC;\n"})})]})}function E(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>i});var r=n(96540);const c={},l=r.createContext(c);function s(e){const t=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:s(e.components),r.createElement(l.Provider,{value:t},e.children)}}}]);