"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[75849],{43833:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>E,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var l=n(74848),r=n(28453);const i={},c=void 0,s={id:"MessageSchemas/Schema/SRSE Products/SRControl/AltSymbolMap/AltSymbolMap",title:"AltSymbolMap",description:"V8 Message Definiton",source:"@site/docs/MessageSchemas/Schema/SRSE Products/SRControl/AltSymbolMap/AltSymbolMap.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRControl/AltSymbolMap",slug:"/MessageSchemas/Schema/SRSE Products/SRControl/AltSymbolMap/",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRControl/AltSymbolMap/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"messageSchemasSidebar",previous:{title:"AccountRouteConfig",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRControl/AccountRouteConfig/"},next:{title:"AssetAccountControl",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRControl/AssetAccountControl/"}},a={},d=[{value:"METADATA",id:"metadata",level:3},{value:"Table Definition",id:"table-definition",level:3},{value:"PRIMARY KEY DEFINITION (Unique)",id:"primary-key-definition-unique",level:3},{value:"JSON Block (AccntRouteTableList)",id:"json-block-accntroutetablelist",level:3},{value:"CREATE TABLE EXAMPLE QUERY",id:"create-table-example-query",level:3},{value:"SELECT TABLE EXAMPLE QUERY",id:"select-table-example-query",level:3},{value:"UPDATE TABLE EXAMPLE QUERY",id:"update-table-example-query",level:3},{value:"INSERT TABLE EXAMPLE QUERY",id:"insert-table-example-query",level:3},{value:"DELETE TABLE EXAMPLE QUERY",id:"delete-table-example-query",level:3}];function h(e){const t={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.p,{children:(0,l.jsx)(t.a,{href:"../../../Topics/client-config/AltSymbolMap",children:"V8 Message Definiton"})}),"\n",(0,l.jsx)(t.h3,{id:"metadata",children:"METADATA"}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{children:"Attribute"}),(0,l.jsx)(t.th,{children:"Value"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"Topic"}),(0,l.jsx)(t.td,{children:"1800-client-config"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"MLink Token"}),(0,l.jsx)(t.td,{children:"SystemData"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"Product"}),(0,l.jsx)(t.td,{children:"SRControl"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"accessType"}),(0,l.jsx)(t.td,{children:"SELECT,UPDATE,INSERT,DELETE"})]})]})]}),"\n",(0,l.jsx)(t.h3,{id:"table-definition",children:"Table Definition"}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{children:"Field"}),(0,l.jsx)(t.th,{children:"Type"}),(0,l.jsx)(t.th,{children:"Key"}),(0,l.jsx)(t.th,{children:"Default Value"}),(0,l.jsx)(t.th,{children:"Comment"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"ticker_at"}),(0,l.jsx)(t.td,{children:(0,l.jsx)(t.a,{href:"../../../Enums/AssetType",children:"enum - AssetType"})}),(0,l.jsx)(t.td,{children:"PRI"}),(0,l.jsx)(t.td,{children:"'None'"}),(0,l.jsx)(t.td,{})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"ticker_ts"}),(0,l.jsx)(t.td,{children:(0,l.jsx)(t.a,{href:"../../../Enums/TickerSrc",children:"enum - TickerSrc"})}),(0,l.jsx)(t.td,{children:"PRI"}),(0,l.jsx)(t.td,{children:"'None'"}),(0,l.jsx)(t.td,{})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"ticker_tk"}),(0,l.jsx)(t.td,{children:"VARCHAR(12)"}),(0,l.jsx)(t.td,{children:"PRI"}),(0,l.jsx)(t.td,{children:"''"}),(0,l.jsx)(t.td,{})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"rollupAccnt"}),(0,l.jsx)(t.td,{children:"VARCHAR(16)"}),(0,l.jsx)(t.td,{children:"PRI"}),(0,l.jsx)(t.td,{children:"''"}),(0,l.jsx)(t.td,{children:"client enter order in this account"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"clientFirm"}),(0,l.jsx)(t.td,{children:"VARCHAR(16)"}),(0,l.jsx)(t.td,{children:"PRI"}),(0,l.jsx)(t.td,{children:"''"}),(0,l.jsx)(t.td,{children:"SR assigned client firm acronym"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"accnt"}),(0,l.jsx)(t.td,{children:"VARCHAR(16)"}),(0,l.jsx)(t.td,{}),(0,l.jsx)(t.td,{children:"''"}),(0,l.jsx)(t.td,{children:"this accnt will replace accnt on parent order if exists"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"altAccnt"}),(0,l.jsx)(t.td,{children:"VARCHAR(16)"}),(0,l.jsx)(t.td,{}),(0,l.jsx)(t.td,{children:"''"}),(0,l.jsx)(t.td,{children:"will replace altAccnt on parent order if exists"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"altUserName"}),(0,l.jsx)(t.td,{children:"VARCHAR(24)"}),(0,l.jsx)(t.td,{}),(0,l.jsx)(t.td,{children:"''"}),(0,l.jsx)(t.td,{children:"will replace altUserName on parent order if exists"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"strategy"}),(0,l.jsx)(t.td,{children:"VARCHAR(36)"}),(0,l.jsx)(t.td,{}),(0,l.jsx)(t.td,{children:"''"}),(0,l.jsx)(t.td,{children:"will replace strategy on parent order if exists"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"userData1"}),(0,l.jsx)(t.td,{children:"TINYTEXT"}),(0,l.jsx)(t.td,{}),(0,l.jsx)(t.td,{children:"''"}),(0,l.jsx)(t.td,{children:"will replace userData1 on parent order if exists"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"userData2"}),(0,l.jsx)(t.td,{children:"TINYTEXT"}),(0,l.jsx)(t.td,{}),(0,l.jsx)(t.td,{children:"''"}),(0,l.jsx)(t.td,{children:"will replace userData2 on parent order if exists"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"childData"}),(0,l.jsx)(t.td,{children:"TINYTEXT"}),(0,l.jsx)(t.td,{}),(0,l.jsx)(t.td,{children:"''"}),(0,l.jsx)(t.td,{children:"will replace childData on parent order if exists"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"modifiedBy"}),(0,l.jsx)(t.td,{children:"VARCHAR(24)"}),(0,l.jsx)(t.td,{}),(0,l.jsx)(t.td,{children:"''"}),(0,l.jsx)(t.td,{children:"user who last modified this record"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"modifiedIn"}),(0,l.jsx)(t.td,{children:(0,l.jsx)(t.a,{href:"../../../Enums/SysEnvironment",children:"enum - SysEnvironment"})}),(0,l.jsx)(t.td,{}),(0,l.jsx)(t.td,{children:"'None'"}),(0,l.jsx)(t.td,{})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"timestamp"}),(0,l.jsx)(t.td,{children:"DATETIME(6)"}),(0,l.jsx)(t.td,{}),(0,l.jsx)(t.td,{children:"'1900-01-01 00:00:00.000000'"}),(0,l.jsx)(t.td,{children:"timestamp of last modification"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"AccntRouteTableList"}),(0,l.jsx)(t.td,{children:"JSON"}),(0,l.jsx)(t.td,{}),(0,l.jsx)(t.td,{children:"'JSON_OBJECT()'"}),(0,l.jsx)(t.td,{})]})]})]}),"\n",(0,l.jsx)(t.h3,{id:"primary-key-definition-unique",children:"PRIMARY KEY DEFINITION (Unique)"}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{children:"Field"}),(0,l.jsx)(t.th,{children:"Sequence"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"ticker_tk"}),(0,l.jsx)(t.td,{children:"1"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"ticker_at"}),(0,l.jsx)(t.td,{children:"2"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"ticker_ts"}),(0,l.jsx)(t.td,{children:"3"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"rollupAccnt"}),(0,l.jsx)(t.td,{children:"4"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"clientFirm"}),(0,l.jsx)(t.td,{children:"5"})]})]})]}),"\n",(0,l.jsx)(t.h3,{id:"json-block-accntroutetablelist",children:"JSON Block (AccntRouteTableList)"}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{children:"Field"}),(0,l.jsx)(t.th,{children:"Type"}),(0,l.jsx)(t.th,{children:"Comment"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"tickerSrc"}),(0,l.jsx)(t.td,{children:(0,l.jsx)(t.a,{href:"../../../Enums/tickerSrc",children:"enum - tickerSrc"})}),(0,l.jsx)(t.td,{})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"secType"}),(0,l.jsx)(t.td,{children:(0,l.jsx)(t.a,{href:"../../../Enums/secType",children:"enum - secType"})}),(0,l.jsx)(t.td,{})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"execBrkrCode"}),(0,l.jsx)(t.td,{children:"string"}),(0,l.jsx)(t.td,{children:"an SR assigned execBrkrCode"})]})]})]}),"\n",(0,l.jsx)(t.h3,{id:"create-table-example-query",children:"CREATE TABLE EXAMPLE QUERY"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-sql",children:"CREATE TABLE `SRControl`.`MsgAltSymbolMap` (\n    `ticker_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None',\n    `ticker_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','ESX','ANY','CXE','DXE','NXAM','NXBR','NXDUB','NXLS','NXLDN','NXML','NXMLT','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None',\n    `ticker_tk` VARCHAR(12) NOT NULL DEFAULT '',\n    `rollupAccnt` VARCHAR(16) NOT NULL DEFAULT '' COMMENT 'client enter order in this account',\n    `clientFirm` VARCHAR(16) NOT NULL DEFAULT '' COMMENT 'SR assigned client firm acronym',\n    `accnt` VARCHAR(16) NOT NULL DEFAULT '' COMMENT 'this accnt will replace accnt on parent order (if exists)',\n    `altAccnt` VARCHAR(16) NOT NULL DEFAULT '' COMMENT 'will replace altAccnt on parent order (if exists)',\n    `altUserName` VARCHAR(24) NOT NULL DEFAULT '' COMMENT 'will replace altUserName on parent order (if exists)',\n    `strategy` VARCHAR(36) NOT NULL DEFAULT '' COMMENT 'will replace strategy on parent order (if exists)',\n    `userData1` TINYTEXT NOT NULL DEFAULT '' COMMENT 'will replace userData1 on parent order (if exists)',\n    `userData2` TINYTEXT NOT NULL DEFAULT '' COMMENT 'will replace userData2 on parent order (if exists)',\n    `childData` TINYTEXT NOT NULL DEFAULT '' COMMENT 'will replace childData on parent order (if exists)',\n    `modifiedBy` VARCHAR(24) NOT NULL DEFAULT '' COMMENT 'user who last modified this record',\n    `modifiedIn` ENUM('None','Neptune','Pluto','V7_Stable','V7_Latest','Saturn','Venus','Mars','SysTest','V7_Current') NOT NULL DEFAULT 'None',\n    `timestamp` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000' COMMENT 'timestamp of last modification',\n    `AccntRouteTableList` JSON NOT NULL DEFAULT JSON_OBJECT() CHECK(JSON_VALID(AccntRouteTableList)),\n    PRIMARY KEY USING HASH (`ticker_tk`,`ticker_at`,`ticker_ts`,`rollupAccnt`,`clientFirm`)\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='';\n\n"})}),"\n",(0,l.jsx)(t.h3,{id:"select-table-example-query",children:"SELECT TABLE EXAMPLE QUERY"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-sql",children:"SELECT\n    `ticker_at`,\n    `ticker_ts`,\n    `ticker_tk`,\n    `rollupAccnt`,\n    `clientFirm`,\n    `accnt`,\n    `altAccnt`,\n    `altUserName`,\n    `strategy`,\n    `userData1`,\n    `userData2`,\n    `childData`,\n    `modifiedBy`,\n    `modifiedIn`,\n    `timestamp`,\n    `AccntRouteTableList`\nFROM `SRControl`.`MsgAltSymbolMap`\nWHERE \n    /* Replace with a ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') */ \n    `ticker_at` = 'None'\n  AND\n    /* Replace with a ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','ESX','ANY','CXE','DXE','NXAM','NXBR','NXDUB','NXLS','NXLDN','NXML','NXMLT','NXOS','NXP','EUREX','CEDX','ICEFE') */ \n    `ticker_ts` = 'None'\n  AND\n    /* Replace with a VARCHAR(12) */ \n    `ticker_tk` = 'Example_ticker_tk'\n  AND\n    /* Replace with a VARCHAR(16) */ \n    `rollupAccnt` = 'Example_rollupAccnt'\n  AND\n    /* Replace with a VARCHAR(16) */ \n    `clientFirm` = 'Example_clientFirm';\n"})}),"\n",(0,l.jsx)(t.h3,{id:"update-table-example-query",children:"UPDATE TABLE EXAMPLE QUERY"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-sql",children:"UPDATE `SRControl`.`MsgAltSymbolMap` \nSET\n    /* Replace with a VARCHAR(16) */ \n    `accnt` = 'Example_accnt',\n    /* Replace with a VARCHAR(16) */ \n    `altAccnt` = 'Example_altAccnt',\n    /* Replace with a VARCHAR(24) */ \n    `altUserName` = 'Example_altUserName',\n    /* Replace with a VARCHAR(36) */ \n    `strategy` = 'Example_strategy',\n    /* Replace with a TINYTEXT */ \n    `userData1` = 'dummy tiny text',\n    /* Replace with a TINYTEXT */ \n    `userData2` = 'dummy tiny text',\n    /* Replace with a TINYTEXT */ \n    `childData` = 'dummy tiny text',\n    /* Replace with a VARCHAR(24) */ \n    `modifiedBy` = 'Example_modifiedBy',\n    /* Replace with a ENUM('None','Neptune','Pluto','V7_Stable','V7_Latest','Saturn','Venus','Mars','SysTest','V7_Current') */ \n    `modifiedIn` = 'None',\n    /* Replace with a DATETIME(6) */\n    `timestamp` = '2022-01-01 12:34:56.000000',\n    /* Replace with a JSON */\n    `AccntRouteTableList` = '{\"key\": \"value\"}'\nWHERE\n    /* Replace with a ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') */ \n    `ticker_at` = 'None'\n  AND\n    /* Replace with a ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','ESX','ANY','CXE','DXE','NXAM','NXBR','NXDUB','NXLS','NXLDN','NXML','NXMLT','NXOS','NXP','EUREX','CEDX','ICEFE') */ \n    `ticker_ts` = 'None'\n  AND\n    /* Replace with a VARCHAR(12) */ \n    `ticker_tk` = 'Example_ticker_tk'\n  AND\n    /* Replace with a VARCHAR(16) */ \n    `rollupAccnt` = 'Example_rollupAccnt'\n  AND\n    /* Replace with a VARCHAR(16) */ \n    `clientFirm` = 'Example_clientFirm';\n"})}),"\n",(0,l.jsx)(t.h3,{id:"insert-table-example-query",children:"INSERT TABLE EXAMPLE QUERY"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-sql",children:"INSERT INTO `SRControl`.`MsgAltSymbolMap`(\n    /* Replace with a ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') */ \n    `ticker_at`,\n    /* Replace with a ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','ESX','ANY','CXE','DXE','NXAM','NXBR','NXDUB','NXLS','NXLDN','NXML','NXMLT','NXOS','NXP','EUREX','CEDX','ICEFE') */ \n    `ticker_ts`,\n    /* Replace with a VARCHAR(12) */ \n    `ticker_tk`,\n    /* Replace with a VARCHAR(16) */ \n    `rollupAccnt`,\n    /* Replace with a VARCHAR(16) */ \n    `clientFirm`,\n    /* Replace with a VARCHAR(16) */ \n    `accnt`,\n    /* Replace with a VARCHAR(16) */ \n    `altAccnt`,\n    /* Replace with a VARCHAR(24) */ \n    `altUserName`,\n    /* Replace with a VARCHAR(36) */ \n    `strategy`,\n    /* Replace with a TINYTEXT */ \n    `userData1`,\n    /* Replace with a TINYTEXT */ \n    `userData2`,\n    /* Replace with a TINYTEXT */ \n    `childData`,\n    /* Replace with a VARCHAR(24) */ \n    `modifiedBy`,\n    /* Replace with a ENUM('None','Neptune','Pluto','V7_Stable','V7_Latest','Saturn','Venus','Mars','SysTest','V7_Current') */ \n    `modifiedIn`,\n    /* Replace with a DATETIME(6) */\n    `timestamp`,\n    /* Replace with a JSON */\n    `AccntRouteTableList`\n) \nVALUES(\n    'None',\n    'None',\n    'Example_ticker_tk',\n    'Example_rollupAccnt',\n    'Example_clientFirm',\n    'Example_accnt',\n    'Example_altAccnt',\n    'Example_altUserName',\n    'Example_strategy',\n    'dummy tiny text',\n    'dummy tiny text',\n    'dummy tiny text',\n    'Example_modifiedBy',\n    'None',\n    '2022-01-01 12:34:56.000000',\n    '{\"key\": \"value\"}'\n);\n"})}),"\n",(0,l.jsx)(t.h3,{id:"delete-table-example-query",children:"DELETE TABLE EXAMPLE QUERY"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-sql",children:"DELETE FROM `SRControl`.`MsgAltSymbolMap` \nWHERE\n    /* Replace with a ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') */ \n    `ticker_at` = 'None'\n  AND\n    /* Replace with a ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','ESX','ANY','CXE','DXE','NXAM','NXBR','NXDUB','NXLS','NXLDN','NXML','NXMLT','NXOS','NXP','EUREX','CEDX','ICEFE') */ \n    `ticker_ts` = 'None'\n  AND\n    /* Replace with a VARCHAR(12) */ \n    `ticker_tk` = 'Example_ticker_tk'\n  AND\n    /* Replace with a VARCHAR(16) */ \n    `rollupAccnt` = 'Example_rollupAccnt'\n  AND\n    /* Replace with a VARCHAR(16) */ \n    `clientFirm` = 'Example_clientFirm';\n"})})]})}function E(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(h,{...e})}):h(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>s});var l=n(96540);const r={},i=l.createContext(r);function c(e){const t=l.useContext(i);return l.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),l.createElement(i.Provider,{value:t},e.children)}}}]);