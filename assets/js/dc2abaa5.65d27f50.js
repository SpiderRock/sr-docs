"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[96994],{56617:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>l,contentTitle:()=>r,default:()=>a,frontMatter:()=>i,metadata:()=>c,toc:()=>h});var n=t(74848),d=t(28453);const i={},r=void 0,c={id:"MessageSchemas/Schema/SRSE Products/SRRisk/ClientBeta/ClientBeta",title:"ClientBeta",description:"V8 Message Definiton",source:"@site/docs/MessageSchemas/Schema/SRSE Products/SRRisk/ClientBeta/ClientBeta.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRRisk/ClientBeta",slug:"/MessageSchemas/Schema/SRSE Products/SRRisk/ClientBeta/",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRRisk/ClientBeta/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"messageSchemasSidebar",previous:{title:"AccountRiskRecordV5",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRRisk/AccountRiskRecordV5/"},next:{title:"CurrencyPositionRecordV5",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRRisk/CurrencyPositionRecordV5/"}},l={},h=[{value:"METADATA",id:"metadata",level:3},{value:"Table Definition",id:"table-definition",level:3},{value:"PRIMARY KEY DEFINITION (Unique)",id:"primary-key-definition-unique",level:3},{value:"CREATE TABLE QUERY",id:"create-table-query",level:3}];function x(e){const s={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"../../../Topics/client-theos/ClientBeta",children:"V8 Message Definiton"})}),"\n",(0,n.jsx)(s.h3,{id:"metadata",children:"METADATA"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Attribute"}),(0,n.jsx)(s.th,{children:"Value"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Topic"}),(0,n.jsx)(s.td,{children:"1945-client-theos"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"MLink Token"}),(0,n.jsx)(s.td,{children:"SystemData"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Product"}),(0,n.jsx)(s.td,{children:"SRRisk"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"accessType"}),(0,n.jsx)(s.td,{children:"SELECT"})]})]})]}),"\n",(0,n.jsx)(s.h3,{id:"table-definition",children:"Table Definition"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Field"}),(0,n.jsx)(s.th,{children:"Type"}),(0,n.jsx)(s.th,{children:"Key"}),(0,n.jsx)(s.th,{children:"Comment"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"secKey_at"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"../../../Enums/AssetType",children:"enum - AssetType"})}),(0,n.jsx)(s.td,{children:"PRI"}),(0,n.jsx)(s.td,{})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"secKey_ts"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"../../../Enums/TickerSrc",children:"enum - TickerSrc"})}),(0,n.jsx)(s.td,{children:"PRI"}),(0,n.jsx)(s.td,{})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"secKey_tk"}),(0,n.jsx)(s.td,{children:"VARCHAR(12)"}),(0,n.jsx)(s.td,{children:"PRI"}),(0,n.jsx)(s.td,{})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"secKey_yr"}),(0,n.jsx)(s.td,{children:"SMALLINT UNSIGNED"}),(0,n.jsx)(s.td,{children:"PRI"}),(0,n.jsx)(s.td,{})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"secKey_mn"}),(0,n.jsx)(s.td,{children:"TINYINT UNSIGNED"}),(0,n.jsx)(s.td,{children:"PRI"}),(0,n.jsx)(s.td,{})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"secKey_dy"}),(0,n.jsx)(s.td,{children:"TINYINT UNSIGNED"}),(0,n.jsx)(s.td,{children:"PRI"}),(0,n.jsx)(s.td,{})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"secType"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"../../../Enums/SpdrKeyType",children:"enum - SpdrKeyType"})}),(0,n.jsx)(s.td,{children:"PRI"}),(0,n.jsx)(s.td,{})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"clientFirm"}),(0,n.jsx)(s.td,{children:"VARCHAR(16)"}),(0,n.jsx)(s.td,{children:"PRI"}),(0,n.jsx)(s.td,{children:"client firm of the uploading user"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"beta"}),(0,n.jsx)(s.td,{children:"FLOAT"}),(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{children:"client supplied beta expected move of secKey relative to reference"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"modifiedBy"}),(0,n.jsx)(s.td,{children:"VARCHAR(24)"}),(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{children:"user who last modified this record"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"modifiedIn"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"../../../Enums/SysEnvironment",children:"enum - SysEnvironment"})}),(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"timestamp"}),(0,n.jsx)(s.td,{children:"DATETIME(6)"}),(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{children:"timestamp of last modification"})]})]})]}),"\n",(0,n.jsx)(s.h3,{id:"primary-key-definition-unique",children:"PRIMARY KEY DEFINITION (Unique)"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Field"}),(0,n.jsx)(s.th,{children:"Sequence"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"secKey_tk"}),(0,n.jsx)(s.td,{children:"1"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"secKey_yr"}),(0,n.jsx)(s.td,{children:"2"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"secKey_mn"}),(0,n.jsx)(s.td,{children:"3"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"secKey_dy"}),(0,n.jsx)(s.td,{children:"4"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"secKey_at"}),(0,n.jsx)(s.td,{children:"5"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"secKey_ts"}),(0,n.jsx)(s.td,{children:"6"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"secType"}),(0,n.jsx)(s.td,{children:"7"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"clientFirm"}),(0,n.jsx)(s.td,{children:"8"})]})]})]}),"\n",(0,n.jsx)(s.h3,{id:"create-table-query",children:"CREATE TABLE QUERY"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-sql",children:"CREATE TABLE `SRRisk`.`MsgClientBeta` (\n    `secKey_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None',\n    `secKey_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','ESX','ANY','CXE','DXE','NXAM','NXBR','NXDUB','NXLS','NXLDN','NXML','NXMLT','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None',\n    `secKey_tk` VARCHAR(12) NOT NULL DEFAULT '',\n    `secKey_yr` SMALLINT UNSIGNED NOT NULL DEFAULT 0,\n    `secKey_mn` TINYINT UNSIGNED NOT NULL DEFAULT 0,\n    `secKey_dy` TINYINT UNSIGNED NOT NULL DEFAULT 0,\n    `secType` ENUM('None','Stock','Future','Option','MLeg') NOT NULL DEFAULT 'None',\n    `clientFirm` VARCHAR(16) NOT NULL DEFAULT '' COMMENT 'client firm of the uploading user',\n    `beta` FLOAT NOT NULL DEFAULT 0 COMMENT 'client supplied beta (expected move of secKey relative to reference)',\n    `modifiedBy` VARCHAR(24) NOT NULL DEFAULT '' COMMENT 'user who last modified this record',\n    `modifiedIn` ENUM('None','Neptune','Pluto','V7_Stable','V7_Latest','Saturn','Venus','Mars','SysTest','V7_Current') NOT NULL DEFAULT 'None',\n    `timestamp` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000' COMMENT 'timestamp of last modification',\n    PRIMARY KEY USING HASH (`secKey_tk`,`secKey_yr`,`secKey_mn`,`secKey_dy`,`secKey_at`,`secKey_ts`,`secType`,`clientFirm`)\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='';\n\n"})})]})}function a(e={}){const{wrapper:s}={...(0,d.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(x,{...e})}):x(e)}},28453:(e,s,t)=>{t.d(s,{R:()=>r,x:()=>c});var n=t(96540);const d={},i=n.createContext(d);function r(e){const s=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:r(e.components),n.createElement(i.Provider,{value:s},e.children)}}}]);