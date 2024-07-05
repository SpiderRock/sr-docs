"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[5968],{4718:(e,n,N)=>{N.r(n),N.d(n,{assets:()=>s,contentTitle:()=>T,default:()=>c,frontMatter:()=>L,metadata:()=>i,toc:()=>E});var t=N(74848),o=N(28453);const L={title:"OptionImpliedVol"},T=void 0,i={id:"MessageSchemas/Schema/SRSE Products/SRAnalytics/OptionImpliedVol/OptionImpliedVol",title:"OptionImpliedVol",description:"V8 Message Definition",source:"@site/docs/MessageSchemas/Schema/SRSE Products/SRAnalytics/OptionImpliedVol/OptionImpliedVol.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRAnalytics/OptionImpliedVol",slug:"/MessageSchemas/Schema/SRSE Products/SRAnalytics/OptionImpliedVol/",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRAnalytics/OptionImpliedVol/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"OptionImpliedVol"},sidebar:"messageSchemasSidebar",previous:{title:"OptionImpliedPair",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRAnalytics/OptionImpliedPair/"},next:{title:"OptionLookback",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRAnalytics/OptionLookback/"}},s={},E=[];function a(e){const n={a:"a",code:"code",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"../../../Topics/srse-calculators/OptionImpliedVol",children:"V8 Message Definition"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"CREATE TABLE `SRAnalytics`.`MsgOptionImpliedVol` (\n    `okey_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None',\n    `okey_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','ESX','ANY','CXE','DXE','NXAM','NXBR','NXDUB','NXLS','NXLDN','NXML','NXMLT','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None',\n    `okey_tk` VARCHAR(12) NOT NULL DEFAULT '',\n    `okey_yr` SMALLINT UNSIGNED NOT NULL DEFAULT 0,\n    `okey_mn` TINYINT UNSIGNED NOT NULL DEFAULT 0,\n    `okey_dy` TINYINT UNSIGNED NOT NULL DEFAULT 0,\n    `okey_xx` DOUBLE NOT NULL DEFAULT 0,\n    `okey_cp` ENUM('Call','Put','Pair') NOT NULL DEFAULT 'Call',\n    `okeyOSI` VARCHAR(21) NOT NULL DEFAULT '',\n    `ticker_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None',\n    `ticker_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','ESX','ANY','CXE','DXE','NXAM','NXBR','NXDUB','NXLS','NXLDN','NXML','NXMLT','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None',\n    `ticker_tk` VARCHAR(12) NOT NULL DEFAULT '',\n    `ubid` FLOAT NOT NULL DEFAULT 0,\n    `uask` FLOAT NOT NULL DEFAULT 0,\n    `yrs` FLOAT NOT NULL DEFAULT 0,\n    `uprc` FLOAT NOT NULL DEFAULT 0,\n    `rate` FLOAT NOT NULL DEFAULT 0,\n    `sdiv` FLOAT NOT NULL DEFAULT 0,\n    `ddiv` FLOAT NOT NULL DEFAULT 0,\n    `cash` FLOAT NOT NULL DEFAULT 0,\n    `obid` FLOAT NOT NULL DEFAULT 0,\n    `oask` FLOAT NOT NULL DEFAULT 0,\n    `obiv` FLOAT NOT NULL DEFAULT 0 COMMENT 'volatility implied by option bid price',\n    `oaiv` FLOAT NOT NULL DEFAULT 0 COMMENT 'volatility implied by option ask price',\n    `svol` FLOAT NOT NULL DEFAULT 0,\n    `sprc` FLOAT NOT NULL DEFAULT 0,\n    `de` FLOAT NOT NULL DEFAULT 0,\n    `ga` FLOAT NOT NULL DEFAULT 0,\n    `th` FLOAT NOT NULL DEFAULT 0,\n    `ve` FLOAT NOT NULL DEFAULT 0,\n    `vo` FLOAT NOT NULL DEFAULT 0,\n    `va` FLOAT NOT NULL DEFAULT 0,\n    `deDecay` FLOAT NOT NULL DEFAULT 0,\n    `ro` FLOAT NOT NULL DEFAULT 0,\n    `err` TINYINT UNSIGNED NOT NULL DEFAULT 0,\n    `theoErr` VARCHAR(24) NOT NULL DEFAULT '',\n    `calcErr` VARCHAR(24) NOT NULL DEFAULT '',\n    `timestamp` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000',\n    PRIMARY KEY USING HASH (`okey_tk`,`okey_yr`,`okey_mn`,`okey_dy`,`okey_xx`,`okey_cp`,`okey_at`,`okey_ts`),\n    KEY `ExpirationIndex` (`okey_yr`,`okey_mn`,`okey_dy`) USING HASH,\n    KEY `OSISymbolIndex` (`okeyOSI`) USING HASH,\n    KEY `TickerIndex` (`ticker_tk`) USING HASH\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='This table contains option implied volatilities computed using fast/accurate calcuation methods while the SELECT is processing.  Note that if you need even faster queries that cover a large number of strikes you may be better off using the OptionImpliedQuoteAdj table as it is pre-computed.';\n\n"})})]})}function c(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},28453:(e,n,N)=>{N.d(n,{R:()=>T,x:()=>i});var t=N(96540);const o={},L=t.createContext(o);function T(e){const n=t.useContext(L);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:T(e.components),t.createElement(L.Provider,{value:n},e.children)}}}]);