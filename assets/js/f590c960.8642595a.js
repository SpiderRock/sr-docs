"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[55805],{8422:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>i,contentTitle:()=>r,default:()=>S,frontMatter:()=>c,metadata:()=>a,toc:()=>u});var n=o(74848),s=o(28453);const c={title:"SpdrExecutionAllocationStatus"},r=void 0,a={id:"MessageSchemas/Schema/SRSE Products/SRTrade/SpdrExecutionAllocationStatus/SpdrExecutionAllocationStatus",title:"SpdrExecutionAllocationStatus",description:"V8 Message Definition",source:"@site/docs/MessageSchemas/Schema/SRSE Products/SRTrade/SpdrExecutionAllocationStatus/SpdrExecutionAllocationStatus.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRTrade/SpdrExecutionAllocationStatus",slug:"/MessageSchemas/Schema/SRSE Products/SRTrade/SpdrExecutionAllocationStatus/",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRTrade/SpdrExecutionAllocationStatus/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"SpdrExecutionAllocationStatus"},sidebar:"messageSchemasSidebar",previous:{title:"SpdrExecutionAllocation",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRTrade/SpdrExecutionAllocation/"},next:{title:"SpdrFixParentCancel",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRTrade/SpdrFixParentCancel/"}},i={},u=[];function N(e){const t={a:"a",code:"code",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"../../../Topics/order-allocation/SpdrExecutionAllocationStatus",children:"V8 Message Definition"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sql",children:"CREATE TABLE `SRTrade`.`MsgSRExecutionAllocationStatus` (\n    `allocNumber` BIGINT NOT NULL DEFAULT 0 COMMENT 'unique number for this allocation request',\n    `secKey_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None' COMMENT 'security key (stock, future, or option)',\n    `secKey_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','ESX','ANY','CXE','DXE','NXAM','NXBR','NXDUB','NXLS','NXLDN','NXML','NXMLT','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None' COMMENT 'security key (stock, future, or option)',\n    `secKey_tk` VARCHAR(12) NOT NULL DEFAULT '' COMMENT 'security key (stock, future, or option)',\n    `secKey_yr` SMALLINT UNSIGNED NOT NULL DEFAULT 0 COMMENT 'security key (stock, future, or option)',\n    `secKey_mn` TINYINT UNSIGNED NOT NULL DEFAULT 0 COMMENT 'security key (stock, future, or option)',\n    `secKey_dy` TINYINT UNSIGNED NOT NULL DEFAULT 0 COMMENT 'security key (stock, future, or option)',\n    `secKey_xx` DOUBLE NOT NULL DEFAULT 0 COMMENT 'security key (stock, future, or option)',\n    `secKey_cp` ENUM('Call','Put','Pair') NOT NULL DEFAULT 'Call' COMMENT 'security key (stock, future, or option)',\n    `secType` ENUM('None','Stock','Future','Option','MLeg') NOT NULL DEFAULT 'None' COMMENT 'security type',\n    `allocStatus` ENUM('None','Pending','Done','Error') NOT NULL DEFAULT 'None',\n    `allocDetail` VARCHAR(10000) NOT NULL DEFAULT '' CHECK(LENGTH(allocDetail) <= 10000),\n    `modifiedBy` VARCHAR(24) NOT NULL DEFAULT '' COMMENT 'user who last modified this record',\n    `modifiedIn` ENUM('None','Neptune','Pluto','V7_Stable','V7_Latest','Saturn','Venus','Mars','SysTest','V7_Current') NOT NULL DEFAULT 'None',\n    `timestamp` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000' COMMENT 'timestamp of last modification',\n    PRIMARY KEY USING HASH (`allocNumber`)\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='';\n\n"})})]})}function S(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(N,{...e})}):N(e)}},28453:(e,t,o)=>{o.d(t,{R:()=>r,x:()=>a});var n=o(96540);const s={},c=n.createContext(s);function r(e){const t=n.useContext(c);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),n.createElement(c.Provider,{value:t},e.children)}}}]);