"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[75849],{43833:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>A,frontMatter:()=>r,metadata:()=>c,toc:()=>i});var o=n(74848),s=n(28453);const r={title:"AltSymbolMap"},a=void 0,c={id:"MessageSchemas/Schema/SRSE Products/SRControl/AltSymbolMap/AltSymbolMap",title:"AltSymbolMap",description:"V8 Message Definition",source:"@site/docs/MessageSchemas/Schema/SRSE Products/SRControl/AltSymbolMap/AltSymbolMap.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRControl/AltSymbolMap",slug:"/MessageSchemas/Schema/SRSE Products/SRControl/AltSymbolMap/",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRControl/AltSymbolMap/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"AltSymbolMap"},sidebar:"messageSchemasSidebar",previous:{title:"AccountRouteConfig",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRControl/AccountRouteConfig/"},next:{title:"AssetAccountControl",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRControl/AssetAccountControl/"}},l={},i=[];function N(e){const t={a:"a",code:"code",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:(0,o.jsx)(t.a,{href:"../../../Topics/client-config/AltSymbolMap",children:"V8 Message Definition"})}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-sql",children:"CREATE TABLE `SRControl`.`MsgAltSymbolMap` (\n    `ticker_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None',\n    `ticker_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','ESX','ANY','CXE','DXE','NXAM','NXBR','NXDUB','NXLS','NXLDN','NXML','NXMLT','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None',\n    `ticker_tk` VARCHAR(12) NOT NULL DEFAULT '',\n    `rollupAccnt` VARCHAR(16) NOT NULL DEFAULT '' COMMENT 'client enter order in this account',\n    `clientFirm` VARCHAR(16) NOT NULL DEFAULT '' COMMENT 'SR assigned client firm acronym',\n    `accnt` VARCHAR(16) NOT NULL DEFAULT '' COMMENT 'this accnt will replace accnt on parent order (if exists)',\n    `altAccnt` VARCHAR(16) NOT NULL DEFAULT '' COMMENT 'will replace altAccnt on parent order (if exists)',\n    `altUserName` VARCHAR(24) NOT NULL DEFAULT '' COMMENT 'will replace altUserName on parent order (if exists)',\n    `strategy` VARCHAR(36) NOT NULL DEFAULT '' COMMENT 'will replace strategy on parent order (if exists)',\n    `userData1` VARCHAR(255) NOT NULL DEFAULT '' COMMENT 'will replace userData1 on parent order (if exists)',\n    `userData2` VARCHAR(255) NOT NULL DEFAULT '' COMMENT 'will replace userData2 on parent order (if exists)',\n    `childData` VARCHAR(255) NOT NULL DEFAULT '' COMMENT 'will replace childData on parent order (if exists)',\n    `modifiedBy` VARCHAR(24) NOT NULL DEFAULT '' COMMENT 'user who last modified this record',\n    `modifiedIn` ENUM('None','Neptune','Pluto','V7_Stable','V7_Latest','Saturn','Venus','Mars','SysTest','V7_Current') NOT NULL DEFAULT 'None',\n    `timestamp` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000' COMMENT 'timestamp of last modification',\n    `AccntRouteTableList` JSON NOT NULL DEFAULT JSON_OBJECT() CHECK(JSON_VALID(AccntRouteTableList)),\n    PRIMARY KEY USING HASH (`ticker_tk`,`ticker_at`,`ticker_ts`,`rollupAccnt`,`clientFirm`)\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='';\n\n"})})]})}function A(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(N,{...e})}):N(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>c});var o=n(96540);const s={},r=o.createContext(s);function a(e){const t=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),o.createElement(r.Provider,{value:t},e.children)}}}]);