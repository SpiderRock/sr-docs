"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[26251],{88032:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>a,frontMatter:()=>s,metadata:()=>d,toc:()=>E});var l=t(74848),r=t(28453);const s={},i=void 0,d={id:"MessageSchemas/Schema/SRSE Products/SRControl/FutureControl/FutureControl",title:"FutureControl",description:"V8 Message Definiton",source:"@site/versioned_docs/version-8.4.10.4/MessageSchemas/Schema/SRSE Products/SRControl/FutureControl/FutureControl.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRControl/FutureControl",slug:"/MessageSchemas/Schema/SRSE Products/SRControl/FutureControl/",permalink:"/docs/8.4.10.4/MessageSchemas/Schema/SRSE Products/SRControl/FutureControl/",draft:!1,unlisted:!1,tags:[],version:"8.4.10.4",frontMatter:{},sidebar:"messageSchemasSidebar",previous:{title:"ExpirationControl",permalink:"/docs/8.4.10.4/MessageSchemas/Schema/SRSE Products/SRControl/ExpirationControl/"},next:{title:"GlobalRiskControl",permalink:"/docs/8.4.10.4/MessageSchemas/Schema/SRSE Products/SRControl/GlobalRiskControl/"}},c={},E=[{value:"METADATA",id:"metadata",level:3},{value:"Table Definition",id:"table-definition",level:3},{value:"PRIMARY KEY DEFINITION (Unique)",id:"primary-key-definition-unique",level:3},{value:"CREATE TABLE EXAMPLE QUERY",id:"create-table-example-query",level:3},{value:"SELECT TABLE EXAMPLE QUERY",id:"select-table-example-query",level:3},{value:"UPDATE TABLE EXAMPLE QUERY",id:"update-table-example-query",level:3},{value:"INSERT TABLE EXAMPLE QUERY",id:"insert-table-example-query",level:3},{value:"DELETE TABLE EXAMPLE QUERY",id:"delete-table-example-query",level:3},{value:"Doc Columns Query",id:"doc-columns-query",level:3}];function N(e){const n={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.p,{children:(0,l.jsx)(n.a,{href:"../../../Topics/client-book-risk/FutureControl",children:"V8 Message Definiton"})}),"\n",(0,l.jsx)(n.h3,{id:"metadata",children:"METADATA"}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Attribute"}),(0,l.jsx)(n.th,{children:"Value"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Topic"}),(0,l.jsx)(n.td,{children:"1630-client-book-risk"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"MLink Token"}),(0,l.jsx)(n.td,{children:"ClientControl"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Product"}),(0,l.jsx)(n.td,{children:"SRControl"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"accessType"}),(0,l.jsx)(n.td,{children:"SELECT,UPDATE,INSERT,DELETE"})]})]})]}),"\n",(0,l.jsx)(n.h3,{id:"table-definition",children:"Table Definition"}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Field"}),(0,l.jsx)(n.th,{children:"Type"}),(0,l.jsx)(n.th,{children:"Key"}),(0,l.jsx)(n.th,{children:"Default Value"}),(0,l.jsx)(n.th,{children:"Comment"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"futCtrlKey"}),(0,l.jsx)(n.td,{children:"VARCHAR(16)"}),(0,l.jsx)(n.td,{children:"PRI"}),(0,l.jsx)(n.td,{children:"''"}),(0,l.jsx)(n.td,{})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"clientFirm"}),(0,l.jsx)(n.td,{children:"VARCHAR(16)"}),(0,l.jsx)(n.td,{children:"PRI"}),(0,l.jsx)(n.td,{children:"''"}),(0,l.jsx)(n.td,{})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"fkey_at"}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.a,{href:"../../../Enums/AssetType",children:"enum - AssetType"})}),(0,l.jsx)(n.td,{children:"PRI"}),(0,l.jsx)(n.td,{children:"'None'"}),(0,l.jsx)(n.td,{})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"fkey_ts"}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.a,{href:"../../../Enums/TickerSrc",children:"enum - TickerSrc"})}),(0,l.jsx)(n.td,{children:"PRI"}),(0,l.jsx)(n.td,{children:"'None'"}),(0,l.jsx)(n.td,{})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"fkey_tk"}),(0,l.jsx)(n.td,{children:"VARCHAR(12)"}),(0,l.jsx)(n.td,{children:"PRI"}),(0,l.jsx)(n.td,{children:"''"}),(0,l.jsx)(n.td,{})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"fkey_yr"}),(0,l.jsx)(n.td,{children:"SMALLINT UNSIGNED"}),(0,l.jsx)(n.td,{children:"PRI"}),(0,l.jsx)(n.td,{children:"0"}),(0,l.jsx)(n.td,{})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"fkey_mn"}),(0,l.jsx)(n.td,{children:"TINYINT UNSIGNED"}),(0,l.jsx)(n.td,{children:"PRI"}),(0,l.jsx)(n.td,{children:"0"}),(0,l.jsx)(n.td,{})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"fkey_dy"}),(0,l.jsx)(n.td,{children:"TINYINT UNSIGNED"}),(0,l.jsx)(n.td,{children:"PRI"}),(0,l.jsx)(n.td,{children:"0"}),(0,l.jsx)(n.td,{})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"modifiedBy"}),(0,l.jsx)(n.td,{children:"VARCHAR(24)"}),(0,l.jsx)(n.td,{}),(0,l.jsx)(n.td,{children:"''"}),(0,l.jsx)(n.td,{children:"user who last modified this record"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"modifiedIn"}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.a,{href:"../../../Enums/SysEnvironment",children:"enum - SysEnvironment"})}),(0,l.jsx)(n.td,{}),(0,l.jsx)(n.td,{children:"'None'"}),(0,l.jsx)(n.td,{})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"timestamp"}),(0,l.jsx)(n.td,{children:"DATETIME(6)"}),(0,l.jsx)(n.td,{}),(0,l.jsx)(n.td,{children:"'1900-01-01 00:00:00.000000'"}),(0,l.jsx)(n.td,{children:"timestamp of last modification"})]})]})]}),"\n",(0,l.jsx)(n.h3,{id:"primary-key-definition-unique",children:"PRIMARY KEY DEFINITION (Unique)"}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Field"}),(0,l.jsx)(n.th,{children:"Sequence"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"futCtrlKey"}),(0,l.jsx)(n.td,{children:"1"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"clientFirm"}),(0,l.jsx)(n.td,{children:"2"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"fkey_tk"}),(0,l.jsx)(n.td,{children:"3"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"fkey_yr"}),(0,l.jsx)(n.td,{children:"4"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"fkey_mn"}),(0,l.jsx)(n.td,{children:"5"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"fkey_dy"}),(0,l.jsx)(n.td,{children:"6"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"fkey_at"}),(0,l.jsx)(n.td,{children:"7"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"fkey_ts"}),(0,l.jsx)(n.td,{children:"8"})]})]})]}),"\n",(0,l.jsx)(n.h3,{id:"create-table-example-query",children:"CREATE TABLE EXAMPLE QUERY"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"CREATE TABLE `SRControl`.`MsgFutureControl` (\n    `futCtrlKey` VARCHAR(16) NOT NULL DEFAULT '',\n    `clientFirm` VARCHAR(16) NOT NULL DEFAULT '',\n    `fkey_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None',\n    `fkey_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','EUX','ANY','CXE','DXE','NXAM','NXBR','NXLS','NXML','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None',\n    `fkey_tk` VARCHAR(12) NOT NULL DEFAULT '',\n    `fkey_yr` SMALLINT UNSIGNED NOT NULL DEFAULT 0,\n    `fkey_mn` TINYINT UNSIGNED NOT NULL DEFAULT 0,\n    `fkey_dy` TINYINT UNSIGNED NOT NULL DEFAULT 0,\n    `modifiedBy` VARCHAR(24) NOT NULL DEFAULT '' COMMENT 'user who last modified this record',\n    `modifiedIn` ENUM('None','Neptune','Pluto','V7_Stable','V7_Latest','Saturn','Venus','Mars','SysTest','V7_Current') NOT NULL DEFAULT 'None',\n    `timestamp` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000' COMMENT 'timestamp of last modification',\n    PRIMARY KEY USING HASH (`futCtrlKey`,`clientFirm`,`fkey_tk`,`fkey_yr`,`fkey_mn`,`fkey_dy`,`fkey_at`,`fkey_ts`)\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='';\n\n"})}),"\n",(0,l.jsx)(n.h3,{id:"select-table-example-query",children:"SELECT TABLE EXAMPLE QUERY"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"SELECT\n    `futCtrlKey`,\n    `clientFirm`,\n    `fkey_at`,\n    `fkey_ts`,\n    `fkey_tk`,\n    `fkey_yr`,\n    `fkey_mn`,\n    `fkey_dy`,\n    `timestamp`\nFROM `SRControl`.`MsgFutureControl`\nWHERE \n    /* Replace with a VARCHAR(16) */ \n    `futCtrlKey` = 'Example_futCtrlKey'\n  AND\n    /* Replace with a VARCHAR(16) */ \n    `clientFirm` = 'Example_clientFirm'\n  AND\n    /* Replace with a ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') */ \n    `fkey_at` = 'None'\n  AND\n    /* Replace with a ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','EUX','ANY','CXE','DXE','NXAM','NXBR','NXLS','NXML','NXOS','NXP','EUREX','CEDX','ICEFE') */ \n    `fkey_ts` = 'None'\n  AND\n    /* Replace with a VARCHAR(12) */ \n    `fkey_tk` = 'Example_fkey_tk'\n  AND\n    /* Replace with a SMALLINT UNSIGNED */ \n    `fkey_yr` = 123\n  AND\n    /* Replace with a TINYINT UNSIGNED */ \n    `fkey_mn` = 1\n  AND\n    /* Replace with a TINYINT UNSIGNED */ \n    `fkey_dy` = 1;\n"})}),"\n",(0,l.jsx)(n.h3,{id:"update-table-example-query",children:"UPDATE TABLE EXAMPLE QUERY"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"UPDATE `SRControl`.`MsgFutureControl` \nSET\n    /* Replace with a DATETIME(6) */\n    `timestamp` = '2022-01-01 12:34:56.000000'\nWHERE\n    /* Replace with a VARCHAR(16) */ \n    `futCtrlKey` = 'Example_futCtrlKey'\n  AND\n    /* Replace with a VARCHAR(16) */ \n    `clientFirm` = 'Example_clientFirm'\n  AND\n    /* Replace with a ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') */ \n    `fkey_at` = 'None'\n  AND\n    /* Replace with a ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','EUX','ANY','CXE','DXE','NXAM','NXBR','NXLS','NXML','NXOS','NXP','EUREX','CEDX','ICEFE') */ \n    `fkey_ts` = 'None'\n  AND\n    /* Replace with a VARCHAR(12) */ \n    `fkey_tk` = 'Example_fkey_tk'\n  AND\n    /* Replace with a SMALLINT UNSIGNED */ \n    `fkey_yr` = 123\n  AND\n    /* Replace with a TINYINT UNSIGNED */ \n    `fkey_mn` = 1\n  AND\n    /* Replace with a TINYINT UNSIGNED */ \n    `fkey_dy` = 1;\n"})}),"\n",(0,l.jsx)(n.h3,{id:"insert-table-example-query",children:"INSERT TABLE EXAMPLE QUERY"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"INSERT INTO `SRControl`.`MsgFutureControl`(\n    /* Replace with a VARCHAR(16) */ \n    `futCtrlKey`,\n    /* Replace with a VARCHAR(16) */ \n    `clientFirm`,\n    /* Replace with a ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') */ \n    `fkey_at`,\n    /* Replace with a ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','EUX','ANY','CXE','DXE','NXAM','NXBR','NXLS','NXML','NXOS','NXP','EUREX','CEDX','ICEFE') */ \n    `fkey_ts`,\n    /* Replace with a VARCHAR(12) */ \n    `fkey_tk`,\n    /* Replace with a SMALLINT UNSIGNED */ \n    `fkey_yr`,\n    /* Replace with a TINYINT UNSIGNED */ \n    `fkey_mn`,\n    /* Replace with a TINYINT UNSIGNED */ \n    `fkey_dy`,\n    /* Replace with a DATETIME(6) */\n    `timestamp`\n) \nVALUES(\n    'Example_futCtrlKey',\n    'Example_clientFirm',\n    'None',\n    'None',\n    'Example_fkey_tk',\n    123,\n    1,\n    1,\n    '2022-01-01 12:34:56.000000'\n);\n"})}),"\n",(0,l.jsx)(n.h3,{id:"delete-table-example-query",children:"DELETE TABLE EXAMPLE QUERY"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"DELETE FROM `SRControl`.`MsgFutureControl` \nWHERE\n    /* Replace with a VARCHAR(16) */ \n    `futCtrlKey` = 'Example_futCtrlKey'\n  AND\n    /* Replace with a VARCHAR(16) */ \n    `clientFirm` = 'Example_clientFirm'\n  AND\n    /* Replace with a ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') */ \n    `fkey_at` = 'None'\n  AND\n    /* Replace with a ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','EUX','ANY','CXE','DXE','NXAM','NXBR','NXLS','NXML','NXOS','NXP','EUREX','CEDX','ICEFE') */ \n    `fkey_ts` = 'None'\n  AND\n    /* Replace with a VARCHAR(12) */ \n    `fkey_tk` = 'Example_fkey_tk'\n  AND\n    /* Replace with a SMALLINT UNSIGNED */ \n    `fkey_yr` = 123\n  AND\n    /* Replace with a TINYINT UNSIGNED */ \n    `fkey_mn` = 1\n  AND\n    /* Replace with a TINYINT UNSIGNED */ \n    `fkey_dy` = 1;\n"})}),"\n",(0,l.jsx)(n.h3,{id:"doc-columns-query",children:"Doc Columns Query"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"SELECT * FROM SRControl.doccolumns WHERE TABLE_NAME='FutureControl' ORDER BY ordinal_position ASC;\n"})})]})}function a(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(N,{...e})}):N(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>d});var l=t(96540);const r={},s=l.createContext(r);function i(e){const n=l.useContext(s);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),l.createElement(s.Provider,{value:n},e.children)}}}]);