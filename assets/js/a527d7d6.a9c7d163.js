"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[77117],{11257:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>o,contentTitle:()=>s,default:()=>M,frontMatter:()=>N,metadata:()=>i,toc:()=>E});var n=t(74848),a=t(28453);const N={title:"SpreadMarketSummary"},s=void 0,i={id:"MessageSchemas/Schema/SRSE Products/SRSpread/SpreadMarketSummary/SpreadMarketSummary",title:"SpreadMarketSummary",description:"V8 Message Definition",source:"@site/docs/MessageSchemas/Schema/SRSE Products/SRSpread/SpreadMarketSummary/SpreadMarketSummary.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRSpread/SpreadMarketSummary",slug:"/MessageSchemas/Schema/SRSE Products/SRSpread/SpreadMarketSummary/",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRSpread/SpreadMarketSummary/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"SpreadMarketSummary"},sidebar:"messageSchemasSidebar",previous:{title:"SpreadCloseMark",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRSpread/SpreadCloseMark/"},next:{title:"SpreadOpenMark",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRSpread/SpreadOpenMark/"}},o={},E=[];function T(e){const r={a:"a",code:"code",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:(0,n.jsx)(r.a,{href:"../../../Topics/market-data-spreads/SpreadMarketSummary",children:"V8 Message Definition"})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-sql",children:"CREATE TABLE `SRSpread`.`MsgSpreadMarketSummary` (\n    `skey_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None',\n    `skey_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','ESX','ANY','CXE','DXE','NXAM','NXBR','NXDUB','NXLS','NXLDN','NXML','NXMLT','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None',\n    `skey_tk` VARCHAR(12) NOT NULL DEFAULT '',\n    `ticker_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None' COMMENT 'underlier (or product group) tickerKey',\n    `ticker_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','ESX','ANY','CXE','DXE','NXAM','NXBR','NXDUB','NXLS','NXLDN','NXML','NXMLT','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None' COMMENT 'underlier (or product group) tickerKey',\n    `ticker_tk` VARCHAR(12) NOT NULL DEFAULT '' COMMENT 'underlier (or product group) tickerKey',\n    `iniPrice` DOUBLE NOT NULL DEFAULT 0 COMMENT 'first print price of the day during regular market hours',\n    `mrkPrice` DOUBLE NOT NULL DEFAULT 0 COMMENT 'last print handling during regular market hours',\n    `clsPrice` DOUBLE NOT NULL DEFAULT 0 COMMENT 'official exchange closing price',\n    `minPrice` DOUBLE NOT NULL DEFAULT 0 COMMENT 'minimum print price within market hours',\n    `maxPrice` DOUBLE NOT NULL DEFAULT 0 COMMENT 'maximum print price within market hours',\n    `openInt` INT NOT NULL DEFAULT 0 COMMENT 'open interest',\n    `bidCount` INT NOT NULL DEFAULT 0 COMMENT 'num prints <= quote.bid',\n    `bidVolume` INT NOT NULL DEFAULT 0 COMMENT 'volume when prtPrice <= quote.bid',\n    `askCount` INT NOT NULL DEFAULT 0 COMMENT 'num prints >= quote.ask',\n    `askVolume` INT NOT NULL DEFAULT 0 COMMENT 'volume when prtPrice >= quote.ask',\n    `midCount` INT NOT NULL DEFAULT 0 COMMENT 'num prints inside quote.bid / quote.ask',\n    `midVolume` INT NOT NULL DEFAULT 0 COMMENT 'volume inside quote.bid / quote.ask',\n    `prtCount` INT NOT NULL DEFAULT 0 COMMENT 'number of distinct print reports',\n    `prtPrice` DOUBLE NOT NULL DEFAULT 0 COMMENT 'last print price',\n    `expCount` INT NOT NULL DEFAULT 0 COMMENT 'number of updates included in exponential average',\n    `expWidth` DOUBLE NOT NULL DEFAULT 0 COMMENT 'exponential average market width (10 minute 1/2 life)',\n    `expBidSize` FLOAT NOT NULL DEFAULT 0 COMMENT 'exponential average bid size (10 minute 1/2 life)',\n    `expAskSize` FLOAT NOT NULL DEFAULT 0 COMMENT 'exponential average ask size (10 minute 1/2 life)',\n    `lastPrint` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000',\n    `timestamp` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000',\n    PRIMARY KEY USING HASH (`skey_tk`,`skey_at`,`skey_ts`)\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='These records represent live market summary snapshots for each active spread market';\n\n"})})]})}function M(e={}){const{wrapper:r}={...(0,a.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(T,{...e})}):T(e)}},28453:(e,r,t)=>{t.d(r,{R:()=>s,x:()=>i});var n=t(96540);const a={},N=n.createContext(a);function s(e){const r=n.useContext(N);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),n.createElement(N.Provider,{value:r},e.children)}}}]);