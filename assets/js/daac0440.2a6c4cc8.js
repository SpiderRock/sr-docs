"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[75526],{36826:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>T,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var n=a(74848),r=a(28453);const s={title:"StkAwayTktGateway"},i=void 0,c={id:"MessageSchemas/Schema/SRSE Products/SRTrade/StkAwayTktGateway/StkAwayTktGateway",title:"StkAwayTktGateway",description:"V8 Message Definition",source:"@site/docs/MessageSchemas/Schema/SRSE Products/SRTrade/StkAwayTktGateway/StkAwayTktGateway.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRTrade/StkAwayTktGateway",slug:"/MessageSchemas/Schema/SRSE Products/SRTrade/StkAwayTktGateway/",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRTrade/StkAwayTktGateway/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"StkAwayTktGateway"},sidebar:"messageSchemasSidebar",previous:{title:"SpdrUserCancel",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRTrade/SpdrUserCancel/"},next:{title:"StkOrderGateway",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRTrade/StkOrderGateway/"}},o={},l=[];function N(e){const t={a:"a",code:"code",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"../../../Topics/srse-gateway/StkAwayTktGateway",children:"V8 Message Definition"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sql",children:"CREATE TABLE `SRTrade`.`MsgStkAwayTktGateway` (\n    `accnt` VARCHAR(16) NOT NULL DEFAULT '',\n    `clientFillID` BIGINT NOT NULL DEFAULT 0 COMMENT 'client execution ID, these must be unique on a per-account basis [copied into SpdrParentExecution.altFillId]',\n    `clientFirm` VARCHAR(16) NOT NULL DEFAULT '',\n    `clientOrderID` VARCHAR(24) NOT NULL DEFAULT '' COMMENT 'client orderID [copied into SpdrParentExecution.altOrderId]',\n    `riskGroupId` CHAR(19) NOT NULL DEFAULT '0000-0000-0000-0000' COMMENT 'riskGroupId for this execution report',\n    `ticker_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None',\n    `ticker_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','ESX','ANY','CXE','DXE','NXAM','NXBR','NXDUB','NXLS','NXLDN','NXML','NXMLT','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None',\n    `ticker_tk` VARCHAR(12) NOT NULL DEFAULT '',\n    `fillSide` ENUM('None','Buy','Sell') NOT NULL DEFAULT 'None',\n    `fillPrice` DOUBLE NOT NULL DEFAULT 0,\n    `fillQuantity` INT NOT NULL DEFAULT 0,\n    `fillRefUPrc` DOUBLE NOT NULL DEFAULT 0 COMMENT 'reference underlier price @ fill arrival time',\n    `ssaleFlag` ENUM('None','Long','Short','Exempt','Cover','NA') NOT NULL DEFAULT 'None',\n    `deliverExecReport` ENUM('Yes','No') NOT NULL DEFAULT 'No' COMMENT 'Drop a copy of the execution report',\n    `SRfillID` BIGINT NOT NULL DEFAULT 0 COMMENT 'SR internal fill number, any values submitted will be overwritten by the SR generated fill number',\n    `comment` VARCHAR(64) NOT NULL DEFAULT '' COMMENT 'text comment (if any)',\n    `execBrkr` VARCHAR(12) NOT NULL DEFAULT '' COMMENT 'client (external) exec broker code',\n    `userData1` VARCHAR(255) NOT NULL DEFAULT '' COMMENT 'client supplied data field; passes through to parent and child executions and reports as well as FIX drops',\n    `userData2` VARCHAR(255) NOT NULL DEFAULT '' COMMENT 'client supplied data field; passes through to parent and child executions and reports as well as FIX drops',\n    `strategy` VARCHAR(36) NOT NULL DEFAULT '' COMMENT 'client-supplied strategy string',\n    `fillDttm` DATETIME(6) NOT NULL DEFAULT '1900-01-01',\n    `timestamp` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000',\n    `checksum` TINYINT UNSIGNED NOT NULL DEFAULT 0 COMMENT 'Must be set to 13.  This helps detect some column,value misalignments.',\n    CONSTRAINT nonnegative_riskGroupId CHECK(ASCII(riskGroupId) < 56),\n    PRIMARY KEY USING HASH (`accnt`,`clientFillID`,`clientFirm`)\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='StkAwayTktGateway inserts are validated and convered to away SpdrParentExecution records and published. If successfully published they will be visible in the SpdrParentExecution table and on SpiderRock GUI tools.\\nReplaces are allowed but they are functionally identical to updates in that only the fillPrice and fillQuantity fields are actually changed.';\n\n"})})]})}function T(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(N,{...e})}):N(e)}},28453:(e,t,a)=>{a.d(t,{R:()=>i,x:()=>c});var n=a(96540);const r={},s=n.createContext(r);function i(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);