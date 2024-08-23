"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[96994],{56617:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>i,default:()=>x,frontMatter:()=>c,metadata:()=>r,toc:()=>h});var t=n(74848),d=n(28453);const c={},i=void 0,r={id:"MessageSchemas/Schema/SRSE Products/SRRisk/ClientBeta/ClientBeta",title:"ClientBeta",description:"V8 Message Definiton",source:"@site/docs/MessageSchemas/Schema/SRSE Products/SRRisk/ClientBeta/ClientBeta.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRRisk/ClientBeta",slug:"/MessageSchemas/Schema/SRSE Products/SRRisk/ClientBeta/",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRRisk/ClientBeta/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"messageSchemasSidebar",previous:{title:"AccountRiskRecordV5",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRRisk/AccountRiskRecordV5/"},next:{title:"CurrencyPositionRecordV5",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRRisk/CurrencyPositionRecordV5/"}},l={},h=[{value:"METADATA",id:"metadata",level:3},{value:"Table Definition",id:"table-definition",level:3},{value:"PRIMARY KEY DEFINITION (Unique)",id:"primary-key-definition-unique",level:3},{value:"CREATE TABLE EXAMPLE QUERY",id:"create-table-example-query",level:3},{value:"SELECT TABLE EXAMPLE QUERY",id:"select-table-example-query",level:3},{value:"Doc Columns Query",id:"doc-columns-query",level:3}];function a(e){const s={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"../../../Topics/client-theos/ClientBeta",children:"V8 Message Definiton"})}),"\n",(0,t.jsx)(s.h3,{id:"metadata",children:"METADATA"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Attribute"}),(0,t.jsx)(s.th,{children:"Value"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Topic"}),(0,t.jsx)(s.td,{children:"1945-client-theos"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"MLink Token"}),(0,t.jsx)(s.td,{children:"SystemData"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Product"}),(0,t.jsx)(s.td,{children:"SRRisk"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"accessType"}),(0,t.jsx)(s.td,{children:"SELECT"})]})]})]}),"\n",(0,t.jsx)(s.h3,{id:"table-definition",children:"Table Definition"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Field"}),(0,t.jsx)(s.th,{children:"Type"}),(0,t.jsx)(s.th,{children:"Key"}),(0,t.jsx)(s.th,{children:"Default Value"}),(0,t.jsx)(s.th,{children:"Comment"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"secKey_at"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"../../../Enums/AssetType",children:"enum - AssetType"})}),(0,t.jsx)(s.td,{children:"PRI"}),(0,t.jsx)(s.td,{children:"'None'"}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"secKey_ts"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"../../../Enums/TickerSrc",children:"enum - TickerSrc"})}),(0,t.jsx)(s.td,{children:"PRI"}),(0,t.jsx)(s.td,{children:"'None'"}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"secKey_tk"}),(0,t.jsx)(s.td,{children:"VARCHAR(12)"}),(0,t.jsx)(s.td,{children:"PRI"}),(0,t.jsx)(s.td,{children:"''"}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"secKey_yr"}),(0,t.jsx)(s.td,{children:"SMALLINT UNSIGNED"}),(0,t.jsx)(s.td,{children:"PRI"}),(0,t.jsx)(s.td,{children:"0"}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"secKey_mn"}),(0,t.jsx)(s.td,{children:"TINYINT UNSIGNED"}),(0,t.jsx)(s.td,{children:"PRI"}),(0,t.jsx)(s.td,{children:"0"}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"secKey_dy"}),(0,t.jsx)(s.td,{children:"TINYINT UNSIGNED"}),(0,t.jsx)(s.td,{children:"PRI"}),(0,t.jsx)(s.td,{children:"0"}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"secType"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"../../../Enums/SpdrKeyType",children:"enum - SpdrKeyType"})}),(0,t.jsx)(s.td,{children:"PRI"}),(0,t.jsx)(s.td,{children:"'None'"}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"clientFirm"}),(0,t.jsx)(s.td,{children:"VARCHAR(16)"}),(0,t.jsx)(s.td,{children:"PRI"}),(0,t.jsx)(s.td,{children:"''"}),(0,t.jsx)(s.td,{children:"client firm of the uploading user"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"beta"}),(0,t.jsx)(s.td,{children:"FLOAT"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"0"}),(0,t.jsx)(s.td,{children:"client supplied beta expected move of secKey relative to reference"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"modifiedBy"}),(0,t.jsx)(s.td,{children:"VARCHAR(24)"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"''"}),(0,t.jsx)(s.td,{children:"user who last modified this record"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"modifiedIn"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"../../../Enums/SysEnvironment",children:"enum - SysEnvironment"})}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"'None'"}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"timestamp"}),(0,t.jsx)(s.td,{children:"DATETIME(6)"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"'1900-01-01 00:00:00.000000'"}),(0,t.jsx)(s.td,{children:"timestamp of last modification"})]})]})]}),"\n",(0,t.jsx)(s.h3,{id:"primary-key-definition-unique",children:"PRIMARY KEY DEFINITION (Unique)"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Field"}),(0,t.jsx)(s.th,{children:"Sequence"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"secKey_tk"}),(0,t.jsx)(s.td,{children:"1"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"secKey_yr"}),(0,t.jsx)(s.td,{children:"2"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"secKey_mn"}),(0,t.jsx)(s.td,{children:"3"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"secKey_dy"}),(0,t.jsx)(s.td,{children:"4"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"secKey_at"}),(0,t.jsx)(s.td,{children:"5"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"secKey_ts"}),(0,t.jsx)(s.td,{children:"6"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"secType"}),(0,t.jsx)(s.td,{children:"7"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"clientFirm"}),(0,t.jsx)(s.td,{children:"8"})]})]})]}),"\n",(0,t.jsx)(s.h3,{id:"create-table-example-query",children:"CREATE TABLE EXAMPLE QUERY"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-sql",children:"CREATE TABLE `SRRisk`.`MsgClientBeta` (\n    `secKey_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None',\n    `secKey_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','ESX','ANY','CXE','DXE','NXAM','NXBR','NXDUB','NXLS','NXLDN','NXML','NXMLT','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None',\n    `secKey_tk` VARCHAR(12) NOT NULL DEFAULT '',\n    `secKey_yr` SMALLINT UNSIGNED NOT NULL DEFAULT 0,\n    `secKey_mn` TINYINT UNSIGNED NOT NULL DEFAULT 0,\n    `secKey_dy` TINYINT UNSIGNED NOT NULL DEFAULT 0,\n    `secType` ENUM('None','Stock','Future','Option','MLeg') NOT NULL DEFAULT 'None',\n    `clientFirm` VARCHAR(16) NOT NULL DEFAULT '' COMMENT 'client firm of the uploading user',\n    `beta` FLOAT NOT NULL DEFAULT 0 COMMENT 'client supplied beta (expected move of secKey relative to reference)',\n    `modifiedBy` VARCHAR(24) NOT NULL DEFAULT '' COMMENT 'user who last modified this record',\n    `modifiedIn` ENUM('None','Neptune','Pluto','V7_Stable','V7_Latest','Saturn','Venus','Mars','SysTest','V7_Current') NOT NULL DEFAULT 'None',\n    `timestamp` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000' COMMENT 'timestamp of last modification',\n    PRIMARY KEY USING HASH (`secKey_tk`,`secKey_yr`,`secKey_mn`,`secKey_dy`,`secKey_at`,`secKey_ts`,`secType`,`clientFirm`)\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='';\n\n"})}),"\n",(0,t.jsx)(s.h3,{id:"select-table-example-query",children:"SELECT TABLE EXAMPLE QUERY"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-sql",children:"SELECT\n    `secKey_at`,\n    `secKey_ts`,\n    `secKey_tk`,\n    `secKey_yr`,\n    `secKey_mn`,\n    `secKey_dy`,\n    `secType`,\n    `clientFirm`,\n    `beta`,\n    `timestamp`\nFROM `SRRisk`.`MsgClientBeta`\nWHERE \n    /* Replace with a ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') */ \n    `secKey_at` = 'None'\n  AND\n    /* Replace with a ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','ESX','ANY','CXE','DXE','NXAM','NXBR','NXDUB','NXLS','NXLDN','NXML','NXMLT','NXOS','NXP','EUREX','CEDX','ICEFE') */ \n    `secKey_ts` = 'None'\n  AND\n    /* Replace with a VARCHAR(12) */ \n    `secKey_tk` = 'Example_secKey_tk'\n  AND\n    /* Replace with a SMALLINT UNSIGNED */ \n    `secKey_yr` = 123\n  AND\n    /* Replace with a TINYINT UNSIGNED */ \n    `secKey_mn` = 1\n  AND\n    /* Replace with a TINYINT UNSIGNED */ \n    `secKey_dy` = 1\n  AND\n    /* Replace with a ENUM('None','Stock','Future','Option','MLeg') */ \n    `secType` = 'None'\n  AND\n    /* Replace with a VARCHAR(16) */\n    `clientFirm` = 'Example_clientFirm';\n"})}),"\n",(0,t.jsx)(s.h3,{id:"doc-columns-query",children:"Doc Columns Query"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-sql",children:"SELECT * FROM SRRisk.doccolumns WHERE TABLE_NAME='ClientBeta' ORDER BY ordinal_position ASC;\n"})})]})}function x(e={}){const{wrapper:s}={...(0,d.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>i,x:()=>r});var t=n(96540);const d={},c=t.createContext(d);function i(e){const s=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:i(e.components),t.createElement(c.Provider,{value:s},e.children)}}}]);