"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[89473],{33670:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>S,contentTitle:()=>c,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>a});var n=r(74848),o=r(28453);const s={title:"SpdrSetActiveSize"},c=void 0,i={id:"MessageSchemas/Schema/SRSE Products/SRTrade/SpdrSetActiveSize/SpdrSetActiveSize",title:"SpdrSetActiveSize",description:"V8 Message Definition",source:"@site/docs/MessageSchemas/Schema/SRSE Products/SRTrade/SpdrSetActiveSize/SpdrSetActiveSize.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRTrade/SpdrSetActiveSize",slug:"/MessageSchemas/Schema/SRSE Products/SRTrade/SpdrSetActiveSize/",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRTrade/SpdrSetActiveSize/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"SpdrSetActiveSize"},sidebar:"messageSchemasSidebar",previous:{title:"SpdrSecKeyCancel",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRTrade/SpdrSecKeyCancel/"},next:{title:"SpdrStrategyOrderLeggerX",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRTrade/SpdrStrategyOrderLeggerX/"}},S={},a=[];function N(e){const t={a:"a",code:"code",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"../../../Topics/parent-orders/SpdrSetActiveSize",children:"V8 Message Definition"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sql",children:"CREATE TABLE `SRTrade`.`MsgSRSetActiveSize` (\n    `accnt` VARCHAR(16) NOT NULL DEFAULT '' COMMENT 'SR trading account',\n    `secKey_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None' COMMENT 'Composite Security Key',\n    `secKey_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','ESX','ANY','CXE','DXE','NXAM','NXBR','NXDUB','NXLS','NXLDN','NXML','NXMLT','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None' COMMENT 'Composite Security Key',\n    `secKey_tk` VARCHAR(12) NOT NULL DEFAULT '' COMMENT 'Composite Security Key',\n    `secKey_yr` SMALLINT UNSIGNED NOT NULL DEFAULT 0 COMMENT 'Composite Security Key',\n    `secKey_mn` TINYINT UNSIGNED NOT NULL DEFAULT 0 COMMENT 'Composite Security Key',\n    `secKey_dy` TINYINT UNSIGNED NOT NULL DEFAULT 0 COMMENT 'Composite Security Key',\n    `secKey_xx` DOUBLE NOT NULL DEFAULT 0 COMMENT 'Composite Security Key',\n    `secKey_cp` ENUM('Call','Put','Pair') NOT NULL DEFAULT 'Call' COMMENT 'Composite Security Key',\n    `secType` ENUM('None','Stock','Future','Option','MLeg') NOT NULL DEFAULT 'None' COMMENT 'Security Type [Stock, Future, Option]',\n    `groupingCode` CHAR(19) NOT NULL DEFAULT '0000-0000-0000-0000',\n    `spdrSource` ENUM('None','SpdrTicket','SpdrSingle','SRSE','FIX','HedgeTool','TradeHedge','OpenHedge','AutoHedge','Orphan','RiskManager','OrderManager','ManagedOrder','RFQRespSrvr','Legger','SRSEDrop','FixDrop','TicketDrop','SysTest','RFRResponse','AllocOmni','AllocClient','CertGateway','MLegResponse','LeggerX','DropManager','AutoHedgeSrvr','AuctionStrategySrvr','AllocBlockFace','AllocBlockCust','IceChatGateway','EXS2SRC','MLinkResponse','AutoResponderVD','AutoResponderRC','AutoResponderSN','AutoResponderBX') NOT NULL DEFAULT 'None',\n    `orderSide` ENUM('None','Buy','Sell') NOT NULL DEFAULT 'None',\n    `clientFirm` VARCHAR(16) NOT NULL DEFAULT '' COMMENT 'SR client firm',\n    `orderActiveSize` INT NOT NULL DEFAULT 0,\n    `startDttm` DATETIME(6) NOT NULL DEFAULT '2000-01-01' COMMENT '[optional] (parent order start time)',\n    `activeDuration` INT NOT NULL DEFAULT -1 COMMENT '[optional] (number of seconds)',\n    `closeIfFilled` ENUM('None','Yes','No') NOT NULL DEFAULT 'None' COMMENT 'close order if active size is <= cumFillQuantity',\n    `clArriveMark` FLOAT NOT NULL DEFAULT 0 COMMENT 'note: will pass through as SpdrParentExecution.clArriveMark',\n    `modifiedBy` VARCHAR(24) NOT NULL DEFAULT '' COMMENT 'user who last modified this record',\n    `modifiedIn` ENUM('None','Neptune','Pluto','V7_Stable','V7_Latest','Saturn','Venus','Mars','SysTest','V7_Current') NOT NULL DEFAULT 'None',\n    `timestamp` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000' COMMENT 'timestamp of last modification',\n    CONSTRAINT nonnegative_groupingCode CHECK(ASCII(groupingCode) < 56),\n    PRIMARY KEY USING HASH (`accnt`,`secKey_tk`,`secKey_yr`,`secKey_mn`,`secKey_dy`,`secKey_xx`,`secKey_cp`,`secKey_at`,`secKey_ts`,`secType`,`groupingCode`,`spdrSource`,`orderSide`,`clientFirm`)\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='SpdrSetActiveSize records control the active working size for parent orders that are locked (have active size controls).  These records can be modified by ClientRiskTrader and ClientStageTrader user types.';\n\n"})})]})}function d(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(N,{...e})}):N(e)}},28453:(e,t,r)=>{r.d(t,{R:()=>c,x:()=>i});var n=r(96540);const o={},s=n.createContext(o);function c(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);