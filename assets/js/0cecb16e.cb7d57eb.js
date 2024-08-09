"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[47292],{36805:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>E,frontMatter:()=>d,metadata:()=>l,toc:()=>a});var i=t(74848),r=t(28453);const d={},s=void 0,l={id:"MessageSchemas/Schema/SRSE Products/SRControl/UserSDivOverride/UserSDivOverride",title:"UserSDivOverride",description:"V8 Message Definiton",source:"@site/docs/MessageSchemas/Schema/SRSE Products/SRControl/UserSDivOverride/UserSDivOverride.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRControl/UserSDivOverride",slug:"/MessageSchemas/Schema/SRSE Products/SRControl/UserSDivOverride/",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRControl/UserSDivOverride/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"messageSchemasSidebar",previous:{title:"UserRateOverride",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRControl/UserRateOverride/"},next:{title:"SRLive",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRLive/"}},c={},a=[{value:"METADATA",id:"metadata",level:3},{value:"Table Definition",id:"table-definition",level:3},{value:"PRIMARY KEY DEFINITION (Unique)",id:"primary-key-definition-unique",level:3},{value:"CREATE TABLE EXAMPLE QUERY",id:"create-table-example-query",level:3},{value:"SELECT TABLE EXAMPLE QUERY",id:"select-table-example-query",level:3},{value:"UPDATE TABLE EXAMPLE QUERY",id:"update-table-example-query",level:3},{value:"INSERT TABLE EXAMPLE QUERY",id:"insert-table-example-query",level:3},{value:"DELETE TABLE EXAMPLE QUERY",id:"delete-table-example-query",level:3}];function N(e){const n={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"../../../Topics/option-pricing/UserSDivOverride",children:"V8 Message Definiton"})}),"\n",(0,i.jsx)(n.p,{children:"Records in this table override SpiderRock global implied sdiv values in option pricing calculations."}),"\n",(0,i.jsx)(n.h3,{id:"metadata",children:"METADATA"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Attribute"}),(0,i.jsx)(n.th,{children:"Value"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Topic"}),(0,i.jsx)(n.td,{children:"3585-option-pricing"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"MLink Token"}),(0,i.jsx)(n.td,{children:"SystemData"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Product"}),(0,i.jsx)(n.td,{children:"SRControl"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"accessType"}),(0,i.jsx)(n.td,{children:"SELECT,UPDATE,INSERT,DELETE"})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"table-definition",children:"Table Definition"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Field"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Key"}),(0,i.jsx)(n.th,{children:"Default Value"}),(0,i.jsx)(n.th,{children:"Comment"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"ekey_at"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"../../../Enums/AssetType",children:"enum - AssetType"})}),(0,i.jsx)(n.td,{children:"PRI"}),(0,i.jsx)(n.td,{children:"'None'"}),(0,i.jsx)(n.td,{children:"StocKey  option expiry date"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"ekey_ts"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"../../../Enums/TickerSrc",children:"enum - TickerSrc"})}),(0,i.jsx)(n.td,{children:"PRI"}),(0,i.jsx)(n.td,{children:"'None'"}),(0,i.jsx)(n.td,{children:"StocKey  option expiry date"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"ekey_tk"}),(0,i.jsx)(n.td,{children:"VARCHAR(12)"}),(0,i.jsx)(n.td,{children:"PRI"}),(0,i.jsx)(n.td,{children:"''"}),(0,i.jsx)(n.td,{children:"StocKey  option expiry date"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"ekey_yr"}),(0,i.jsx)(n.td,{children:"SMALLINT UNSIGNED"}),(0,i.jsx)(n.td,{children:"PRI"}),(0,i.jsx)(n.td,{children:"0"}),(0,i.jsx)(n.td,{children:"StocKey  option expiry date"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"ekey_mn"}),(0,i.jsx)(n.td,{children:"TINYINT UNSIGNED"}),(0,i.jsx)(n.td,{children:"PRI"}),(0,i.jsx)(n.td,{children:"0"}),(0,i.jsx)(n.td,{children:"StocKey  option expiry date"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"ekey_dy"}),(0,i.jsx)(n.td,{children:"TINYINT UNSIGNED"}),(0,i.jsx)(n.td,{children:"PRI"}),(0,i.jsx)(n.td,{children:"0"}),(0,i.jsx)(n.td,{children:"StocKey  option expiry date"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"clientFirm"}),(0,i.jsx)(n.td,{children:"VARCHAR(16)"}),(0,i.jsx)(n.td,{children:"PRI"}),(0,i.jsx)(n.td,{children:"''"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"sdivRate"}),(0,i.jsx)(n.td,{children:"FLOAT"}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"0"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"lnSDivRate"}),(0,i.jsx)(n.td,{children:"FLOAT"}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"0"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"shSDivRate"}),(0,i.jsx)(n.td,{children:"FLOAT"}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"0"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"text"}),(0,i.jsx)(n.td,{children:"TINYTEXT"}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"''"}),(0,i.jsx)(n.td,{children:"user detail if any"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"timestamp"}),(0,i.jsx)(n.td,{children:"DATETIME(6)"}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"'1900-01-01 00:00:00.000000'"}),(0,i.jsx)(n.td,{})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"primary-key-definition-unique",children:"PRIMARY KEY DEFINITION (Unique)"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Field"}),(0,i.jsx)(n.th,{children:"Sequence"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"ekey_tk"}),(0,i.jsx)(n.td,{children:"1"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"ekey_yr"}),(0,i.jsx)(n.td,{children:"2"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"ekey_mn"}),(0,i.jsx)(n.td,{children:"3"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"ekey_dy"}),(0,i.jsx)(n.td,{children:"4"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"ekey_at"}),(0,i.jsx)(n.td,{children:"5"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"ekey_ts"}),(0,i.jsx)(n.td,{children:"6"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"clientFirm"}),(0,i.jsx)(n.td,{children:"7"})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"create-table-example-query",children:"CREATE TABLE EXAMPLE QUERY"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"CREATE TABLE `SRControl`.`MsgUserSDivOverride` (\n    `ekey_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None' COMMENT 'StocKey + option expiry date',\n    `ekey_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','ESX','ANY','CXE','DXE','NXAM','NXBR','NXDUB','NXLS','NXLDN','NXML','NXMLT','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None' COMMENT 'StocKey + option expiry date',\n    `ekey_tk` VARCHAR(12) NOT NULL DEFAULT '' COMMENT 'StocKey + option expiry date',\n    `ekey_yr` SMALLINT UNSIGNED NOT NULL DEFAULT 0 COMMENT 'StocKey + option expiry date',\n    `ekey_mn` TINYINT UNSIGNED NOT NULL DEFAULT 0 COMMENT 'StocKey + option expiry date',\n    `ekey_dy` TINYINT UNSIGNED NOT NULL DEFAULT 0 COMMENT 'StocKey + option expiry date',\n    `clientFirm` VARCHAR(16) NOT NULL DEFAULT '',\n    `sdivRate` FLOAT NOT NULL DEFAULT 0,\n    `lnSDivRate` FLOAT NOT NULL DEFAULT 0,\n    `shSDivRate` FLOAT NOT NULL DEFAULT 0,\n    `text` TINYTEXT NOT NULL DEFAULT '' COMMENT 'user detail (if any)',\n    `timestamp` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000',\n    PRIMARY KEY USING HASH (`ekey_tk`,`ekey_yr`,`ekey_mn`,`ekey_dy`,`ekey_at`,`ekey_ts`,`clientFirm`)\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='Records in this table override SpiderRock global implied sdiv values in option pricing calculations.';\n\n"})}),"\n",(0,i.jsx)(n.h3,{id:"select-table-example-query",children:"SELECT TABLE EXAMPLE QUERY"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"SELECT\n    `ekey_at`,\n    `ekey_ts`,\n    `ekey_tk`,\n    `ekey_yr`,\n    `ekey_mn`,\n    `ekey_dy`,\n    `clientFirm`,\n    `sdivRate`,\n    `lnSDivRate`,\n    `shSDivRate`,\n    `text`,\n    `timestamp`\nFROM `SRControl`.`MsgUserSDivOverride`\nWHERE \n    /* Replace with a ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') */ \n    `ekey_at` = 'None'\n  AND\n    /* Replace with a ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','ESX','ANY','CXE','DXE','NXAM','NXBR','NXDUB','NXLS','NXLDN','NXML','NXMLT','NXOS','NXP','EUREX','CEDX','ICEFE') */ \n    `ekey_ts` = 'None'\n  AND\n    /* Replace with a VARCHAR(12) */ \n    `ekey_tk` = 'Example_ekey_tk'\n  AND\n    /* Replace with a SMALLINT UNSIGNED */ \n    `ekey_yr` = 123\n  AND\n    /* Replace with a TINYINT UNSIGNED */ \n    `ekey_mn` = 1\n  AND\n    /* Replace with a TINYINT UNSIGNED */ \n    `ekey_dy` = 1\n  AND\n    /* Replace with a VARCHAR(16) */ \n    `clientFirm` = 'Example_clientFirm';\n"})}),"\n",(0,i.jsx)(n.h3,{id:"update-table-example-query",children:"UPDATE TABLE EXAMPLE QUERY"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"UPDATE `SRControl`.`MsgUserSDivOverride` \nSET\n    /* Replace with a FLOAT */ \n    `sdivRate` = 1.23,\n    /* Replace with a FLOAT */ \n    `lnSDivRate` = 1.23,\n    /* Replace with a FLOAT */ \n    `shSDivRate` = 1.23,\n    /* Replace with a TINYTEXT */ \n    `text` = 'dummy tiny text',\n    /* Replace with a DATETIME(6) */\n    `timestamp` = '2022-01-01 12:34:56.000000'\nWHERE\n    /* Replace with a ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') */ \n    `ekey_at` = 'None'\n  AND\n    /* Replace with a ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','ESX','ANY','CXE','DXE','NXAM','NXBR','NXDUB','NXLS','NXLDN','NXML','NXMLT','NXOS','NXP','EUREX','CEDX','ICEFE') */ \n    `ekey_ts` = 'None'\n  AND\n    /* Replace with a VARCHAR(12) */ \n    `ekey_tk` = 'Example_ekey_tk'\n  AND\n    /* Replace with a SMALLINT UNSIGNED */ \n    `ekey_yr` = 123\n  AND\n    /* Replace with a TINYINT UNSIGNED */ \n    `ekey_mn` = 1\n  AND\n    /* Replace with a TINYINT UNSIGNED */ \n    `ekey_dy` = 1\n  AND\n    /* Replace with a VARCHAR(16) */ \n    `clientFirm` = 'Example_clientFirm';\n"})}),"\n",(0,i.jsx)(n.h3,{id:"insert-table-example-query",children:"INSERT TABLE EXAMPLE QUERY"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"INSERT INTO `SRControl`.`MsgUserSDivOverride`(\n    /* Replace with a ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') */ \n    `ekey_at`,\n    /* Replace with a ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','ESX','ANY','CXE','DXE','NXAM','NXBR','NXDUB','NXLS','NXLDN','NXML','NXMLT','NXOS','NXP','EUREX','CEDX','ICEFE') */ \n    `ekey_ts`,\n    /* Replace with a VARCHAR(12) */ \n    `ekey_tk`,\n    /* Replace with a SMALLINT UNSIGNED */ \n    `ekey_yr`,\n    /* Replace with a TINYINT UNSIGNED */ \n    `ekey_mn`,\n    /* Replace with a TINYINT UNSIGNED */ \n    `ekey_dy`,\n    /* Replace with a VARCHAR(16) */ \n    `clientFirm`,\n    /* Replace with a FLOAT */ \n    `sdivRate`,\n    /* Replace with a FLOAT */ \n    `lnSDivRate`,\n    /* Replace with a FLOAT */ \n    `shSDivRate`,\n    /* Replace with a TINYTEXT */ \n    `text`,\n    /* Replace with a DATETIME(6) */\n    `timestamp`\n) \nVALUES(\n    'None',\n    'None',\n    'Example_ekey_tk',\n    123,\n    1,\n    1,\n    'Example_clientFirm',\n    1.23,\n    1.23,\n    1.23,\n    'dummy tiny text',\n    '2022-01-01 12:34:56.000000'\n);\n"})}),"\n",(0,i.jsx)(n.h3,{id:"delete-table-example-query",children:"DELETE TABLE EXAMPLE QUERY"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"DELETE FROM `SRControl`.`MsgUserSDivOverride` \nWHERE\n    /* Replace with a ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') */ \n    `ekey_at` = 'None'\n  AND\n    /* Replace with a ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','ESX','ANY','CXE','DXE','NXAM','NXBR','NXDUB','NXLS','NXLDN','NXML','NXMLT','NXOS','NXP','EUREX','CEDX','ICEFE') */ \n    `ekey_ts` = 'None'\n  AND\n    /* Replace with a VARCHAR(12) */ \n    `ekey_tk` = 'Example_ekey_tk'\n  AND\n    /* Replace with a SMALLINT UNSIGNED */ \n    `ekey_yr` = 123\n  AND\n    /* Replace with a TINYINT UNSIGNED */ \n    `ekey_mn` = 1\n  AND\n    /* Replace with a TINYINT UNSIGNED */ \n    `ekey_dy` = 1\n  AND\n    /* Replace with a VARCHAR(16) */ \n    `clientFirm` = 'Example_clientFirm';\n"})})]})}function E(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(N,{...e})}):N(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>l});var i=t(96540);const r={},d=i.createContext(r);function s(e){const n=i.useContext(d);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(d.Provider,{value:n},e.children)}}}]);