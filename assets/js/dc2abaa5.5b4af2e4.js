"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[96994],{56617:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>r,contentTitle:()=>i,default:()=>E,frontMatter:()=>o,metadata:()=>a,toc:()=>N});var n=s(74848),c=s(28453);const o={title:"ClientBeta"},i=void 0,a={id:"MessageSchemas/Schema/SRSE Products/SRRisk/ClientBeta/ClientBeta",title:"ClientBeta",description:"V8 Message Definition",source:"@site/docs/MessageSchemas/Schema/SRSE Products/SRRisk/ClientBeta/ClientBeta.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRRisk/ClientBeta",slug:"/MessageSchemas/Schema/SRSE Products/SRRisk/ClientBeta/",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRRisk/ClientBeta/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"ClientBeta"},sidebar:"messageSchemasSidebar",previous:{title:"AccountRiskRecordV5",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRRisk/AccountRiskRecordV5/"},next:{title:"CurrencyPositionRecordV5",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRRisk/CurrencyPositionRecordV5/"}},r={},N=[];function S(e){const t={a:"a",code:"code",p:"p",pre:"pre",...(0,c.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"../../../Topics/client-theos/ClientBeta",children:"V8 Message Definition"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sql",children:"CREATE TABLE `SRRisk`.`MsgClientBeta` (\n    `secKey_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None',\n    `secKey_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','ESX','ANY','CXE','DXE','NXAM','NXBR','NXDUB','NXLS','NXLDN','NXML','NXMLT','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None',\n    `secKey_tk` VARCHAR(12) NOT NULL DEFAULT '',\n    `secKey_yr` SMALLINT UNSIGNED NOT NULL DEFAULT 0,\n    `secKey_mn` TINYINT UNSIGNED NOT NULL DEFAULT 0,\n    `secKey_dy` TINYINT UNSIGNED NOT NULL DEFAULT 0,\n    `secType` ENUM('None','Stock','Future','Option','MLeg') NOT NULL DEFAULT 'None',\n    `clientFirm` VARCHAR(16) NOT NULL DEFAULT '' COMMENT 'client firm of the uploading user',\n    `beta` FLOAT NOT NULL DEFAULT 0 COMMENT 'client supplied beta (expected move of secKey relative to reference)',\n    `modifiedBy` VARCHAR(24) NOT NULL DEFAULT '' COMMENT 'user who last modified this record',\n    `modifiedIn` ENUM('None','Neptune','Pluto','V7_Stable','V7_Latest','Saturn','Venus','Mars','SysTest','V7_Current') NOT NULL DEFAULT 'None',\n    `timestamp` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000' COMMENT 'timestamp of last modification',\n    PRIMARY KEY USING HASH (`secKey_tk`,`secKey_yr`,`secKey_mn`,`secKey_dy`,`secKey_at`,`secKey_ts`,`secType`,`clientFirm`)\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='';\n\n"})})]})}function E(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(S,{...e})}):S(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>i,x:()=>a});var n=s(96540);const c={},o=n.createContext(c);function i(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:i(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);