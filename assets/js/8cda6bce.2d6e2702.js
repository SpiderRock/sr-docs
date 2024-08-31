"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[5561],{54503:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>E,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var c=n(74848),a=n(28453);const r={},l=void 0,i={id:"MessageSchemas/Schema/SRSE Products/SRControl/AwayStockLocateGateway/AwayStockLocateGateway",title:"AwayStockLocateGateway",description:"V8 Message Definiton",source:"@site/versioned_docs/version-8.4.08.4/MessageSchemas/Schema/SRSE Products/SRControl/AwayStockLocateGateway/AwayStockLocateGateway.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRControl/AwayStockLocateGateway",slug:"/MessageSchemas/Schema/SRSE Products/SRControl/AwayStockLocateGateway/",permalink:"/docs/8.4.08.4/MessageSchemas/Schema/SRSE Products/SRControl/AwayStockLocateGateway/",draft:!1,unlisted:!1,tags:[],version:"8.4.08.4",frontMatter:{},sidebar:"messageSchemasSidebar",previous:{title:"AvailableStockLocates",permalink:"/docs/8.4.08.4/MessageSchemas/Schema/SRSE Products/SRControl/AvailableStockLocates/"},next:{title:"BookControl",permalink:"/docs/8.4.08.4/MessageSchemas/Schema/SRSE Products/SRControl/BookControl/"}},s={},d=[{value:"METADATA",id:"metadata",level:3},{value:"Table Definition",id:"table-definition",level:3},{value:"PRIMARY KEY DEFINITION (Unique)",id:"primary-key-definition-unique",level:3},{value:"CREATE TABLE EXAMPLE QUERY",id:"create-table-example-query",level:3},{value:"SELECT TABLE EXAMPLE QUERY",id:"select-table-example-query",level:3},{value:"INSERT TABLE EXAMPLE QUERY",id:"insert-table-example-query",level:3},{value:"DELETE TABLE EXAMPLE QUERY",id:"delete-table-example-query",level:3},{value:"Doc Columns Query",id:"doc-columns-query",level:3}];function o(e){const t={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.p,{children:(0,c.jsx)(t.a,{href:"../../../Topics/srse-gateway/AwayStockLocateGateway",children:"V8 Message Definiton"})}),"\n",(0,c.jsx)(t.p,{children:"Records inserted into this table represent locates that clients have received away from SpiderRock.  After validation, any away locate inserted into this table is turned into a StockLocateResponse record and appears in the StockLocateResponse table."}),"\n",(0,c.jsx)(t.h3,{id:"metadata",children:"METADATA"}),"\n",(0,c.jsxs)(t.table,{children:[(0,c.jsx)(t.thead,{children:(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.th,{children:"Attribute"}),(0,c.jsx)(t.th,{children:"Value"})]})}),(0,c.jsxs)(t.tbody,{children:[(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:"Topic"}),(0,c.jsx)(t.td,{children:"5120-srse-gateway"})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:"MLink Token"}),(0,c.jsx)(t.td,{children:"SystemData"})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:"Product"}),(0,c.jsx)(t.td,{children:"SRControl"})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:"accessType"}),(0,c.jsx)(t.td,{children:"SELECT,UPDATE(locateQuan),INSERT,DELETE"})]})]})]}),"\n",(0,c.jsx)(t.h3,{id:"table-definition",children:"Table Definition"}),"\n",(0,c.jsxs)(t.table,{children:[(0,c.jsx)(t.thead,{children:(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.th,{children:"Field"}),(0,c.jsx)(t.th,{children:"Type"}),(0,c.jsx)(t.th,{children:"Key"}),(0,c.jsx)(t.th,{children:"Default Value"}),(0,c.jsx)(t.th,{children:"Comment"})]})}),(0,c.jsxs)(t.tbody,{children:[(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:"ticker_at"}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.a,{href:"../../../Enums/AssetType",children:"enum - AssetType"})}),(0,c.jsx)(t.td,{children:"PRI"}),(0,c.jsx)(t.td,{children:"'EQT'"}),(0,c.jsx)(t.td,{})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:"ticker_ts"}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.a,{href:"../../../Enums/TickerSrc",children:"enum - TickerSrc"})}),(0,c.jsx)(t.td,{children:"PRI"}),(0,c.jsx)(t.td,{children:"'NMS'"}),(0,c.jsx)(t.td,{})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:"ticker_tk"}),(0,c.jsx)(t.td,{children:"VARCHAR(12)"}),(0,c.jsx)(t.td,{children:"PRI"}),(0,c.jsx)(t.td,{children:"''"}),(0,c.jsx)(t.td,{})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:"coreClientFirm"}),(0,c.jsx)(t.td,{children:"VARCHAR(16)"}),(0,c.jsx)(t.td,{children:"PRI"}),(0,c.jsx)(t.td,{children:"''"}),(0,c.jsx)(t.td,{})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:"locateFirm"}),(0,c.jsx)(t.td,{children:"VARCHAR(6)"}),(0,c.jsx)(t.td,{children:"PRI"}),(0,c.jsx)(t.td,{children:"''"}),(0,c.jsx)(t.td,{})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:"locatePool"}),(0,c.jsx)(t.td,{children:"VARCHAR(16)"}),(0,c.jsx)(t.td,{children:"PRI"}),(0,c.jsx)(t.td,{children:"''"}),(0,c.jsx)(t.td,{children:"locate pool  firm granting the locate"})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:"locateQuan"}),(0,c.jsx)(t.td,{children:"INT"}),(0,c.jsx)(t.td,{}),(0,c.jsx)(t.td,{children:"0"}),(0,c.jsx)(t.td,{})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:"isLocateExempt"}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.a,{href:"../../../Enums/YesNo",children:"enum - YesNo"})}),(0,c.jsx)(t.td,{}),(0,c.jsx)(t.td,{children:"'None'"}),(0,c.jsx)(t.td,{children:"Yes  ticker is locate exempt only allowed for market makers"})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:"altSecurityId"}),(0,c.jsx)(t.td,{children:"VARCHAR(12)"}),(0,c.jsx)(t.td,{}),(0,c.jsx)(t.td,{children:"''"}),(0,c.jsx)(t.td,{children:"An alternative securityID can be cusip or other"})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:"timestamp"}),(0,c.jsx)(t.td,{children:"DATETIME(6)"}),(0,c.jsx)(t.td,{}),(0,c.jsx)(t.td,{children:"'1900-01-01 00:00:00.000000'"}),(0,c.jsx)(t.td,{children:"will be set by SRSE server on upload"})]})]})]}),"\n",(0,c.jsx)(t.h3,{id:"primary-key-definition-unique",children:"PRIMARY KEY DEFINITION (Unique)"}),"\n",(0,c.jsxs)(t.table,{children:[(0,c.jsx)(t.thead,{children:(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.th,{children:"Field"}),(0,c.jsx)(t.th,{children:"Sequence"})]})}),(0,c.jsxs)(t.tbody,{children:[(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:"ticker_tk"}),(0,c.jsx)(t.td,{children:"1"})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:"ticker_at"}),(0,c.jsx)(t.td,{children:"2"})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:"ticker_ts"}),(0,c.jsx)(t.td,{children:"3"})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:"coreClientFirm"}),(0,c.jsx)(t.td,{children:"4"})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:"locateFirm"}),(0,c.jsx)(t.td,{children:"5"})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:"locatePool"}),(0,c.jsx)(t.td,{children:"6"})]})]})]}),"\n",(0,c.jsx)(t.h3,{id:"create-table-example-query",children:"CREATE TABLE EXAMPLE QUERY"}),"\n",(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-sql",children:"CREATE TABLE `SRControl`.`MsgAwayStockLocateGateway` (\n    `ticker_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'EQT',\n    `ticker_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','ESX','ANY','CXE','DXE','NXAM','NXBR','NXDUB','NXLS','NXLDN','NXML','NXMLT','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'NMS',\n    `ticker_tk` VARCHAR(12) NOT NULL DEFAULT '',\n    `coreClientFirm` VARCHAR(16) NOT NULL DEFAULT '',\n    `locateFirm` VARCHAR(6) NOT NULL DEFAULT '',\n    `locatePool` VARCHAR(16) NOT NULL DEFAULT '' COMMENT 'locate pool @ firm granting the locate',\n    `locateQuan` INT NOT NULL DEFAULT 0,\n    `isLocateExempt` ENUM('None','Yes','No') NOT NULL DEFAULT 'None' COMMENT 'Yes = ticker is locate exempt (only allowed for market makers)',\n    `altSecurityId` VARCHAR(12) NOT NULL DEFAULT '' COMMENT 'An alternative securityID (can be cusip or other)',\n    `timestamp` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000' COMMENT 'will be set by SRSE server on upload',\n    PRIMARY KEY USING HASH (`ticker_tk`,`ticker_at`,`ticker_ts`,`coreClientFirm`,`locateFirm`,`locatePool`)\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='Records inserted into this table represent locates that clients have received away from SpiderRock.  After validation, any away locate inserted into this table is turned into a StockLocateResponse record and appears in the StockLocateResponse table.';\n\n"})}),"\n",(0,c.jsx)(t.h3,{id:"select-table-example-query",children:"SELECT TABLE EXAMPLE QUERY"}),"\n",(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-sql",children:"SELECT\n    `ticker_at`,\n    `ticker_ts`,\n    `ticker_tk`,\n    `coreClientFirm`,\n    `locateFirm`,\n    `locatePool`,\n    `locateQuan`,\n    `isLocateExempt`,\n    `altSecurityId`,\n    `timestamp`\nFROM `SRControl`.`MsgAwayStockLocateGateway`\nWHERE \n    /* Replace with a ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') */\n    `ticker_at` = 'EQT'\n  AND\n    /* Replace with a ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','ESX','ANY','CXE','DXE','NXAM','NXBR','NXDUB','NXLS','NXLDN','NXML','NXMLT','NXOS','NXP','EUREX','CEDX','ICEFE') */\n    `ticker_ts` = 'NMS'\n  AND\n    /* Replace with a VARCHAR(12) */\n    `ticker_tk` = 'Example_ticker_tk'\n  AND\n    /* Replace with a VARCHAR(16) */\n    `coreClientFirm` = 'Example_coreClientFirm'\n  AND\n    /* Replace with a VARCHAR(6) */ \n    `locateFirm` = 'Example_locateFirm'\n  AND\n    /* Replace with a VARCHAR(16) */ \n    `locatePool` = 'Example_locatePool';\n"})}),"\n",(0,c.jsx)(t.h3,{id:"insert-table-example-query",children:"INSERT TABLE EXAMPLE QUERY"}),"\n",(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-sql",children:"INSERT INTO `SRControl`.`MsgAwayStockLocateGateway`(\n    /* Replace with a ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') */\n    `ticker_at`,\n    /* Replace with a ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','ESX','ANY','CXE','DXE','NXAM','NXBR','NXDUB','NXLS','NXLDN','NXML','NXMLT','NXOS','NXP','EUREX','CEDX','ICEFE') */\n    `ticker_ts`,\n    /* Replace with a VARCHAR(12) */\n    `ticker_tk`,\n    /* Replace with a VARCHAR(16) */\n    `coreClientFirm`,\n    /* Replace with a VARCHAR(6) */ \n    `locateFirm`,\n    /* Replace with a VARCHAR(16) */ \n    `locatePool`,\n    /* Replace with a INT */ \n    `locateQuan`,\n    /* Replace with a ENUM('None','Yes','No') */ \n    `isLocateExempt`,\n    /* Replace with a VARCHAR(12) */\n    `altSecurityId`,\n    /* Replace with a DATETIME(6) */\n    `timestamp`\n) \nVALUES(\n    'EQT',\n    'NMS',\n    'Example_ticker_tk',\n    'Example_coreClientFirm',\n    'Example_locateFirm',\n    'Example_locatePool',\n    5,\n    'None',\n    'Example_altSecurityId',\n    '2022-01-01 12:34:56.000000'\n);\n"})}),"\n",(0,c.jsx)(t.h3,{id:"delete-table-example-query",children:"DELETE TABLE EXAMPLE QUERY"}),"\n",(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-sql",children:"DELETE FROM `SRControl`.`MsgAwayStockLocateGateway` \nWHERE\n    /* Replace with a ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') */\n    `ticker_at` = 'EQT'\n  AND\n    /* Replace with a ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','ESX','ANY','CXE','DXE','NXAM','NXBR','NXDUB','NXLS','NXLDN','NXML','NXMLT','NXOS','NXP','EUREX','CEDX','ICEFE') */\n    `ticker_ts` = 'NMS'\n  AND\n    /* Replace with a VARCHAR(12) */\n    `ticker_tk` = 'Example_ticker_tk'\n  AND\n    /* Replace with a VARCHAR(16) */\n    `coreClientFirm` = 'Example_coreClientFirm'\n  AND\n    /* Replace with a VARCHAR(6) */ \n    `locateFirm` = 'Example_locateFirm'\n  AND\n    /* Replace with a VARCHAR(16) */ \n    `locatePool` = 'Example_locatePool';\n"})}),"\n",(0,c.jsx)(t.h3,{id:"doc-columns-query",children:"Doc Columns Query"}),"\n",(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-sql",children:"SELECT * FROM SRControl.doccolumns WHERE TABLE_NAME='AwayStockLocateGateway' ORDER BY ordinal_position ASC;\n"})})]})}function E(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>i});var c=n(96540);const a={},r=c.createContext(a);function l(e){const t=c.useContext(r);return c.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),c.createElement(r.Provider,{value:t},e.children)}}}]);