"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[8885],{4208:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>r,frontMatter:()=>o,metadata:()=>a,toc:()=>E});var i=n(74848),N=n(28453);const o={title:"OptionNbboQuote"},s=void 0,a={id:"MessageSchemas/Schema/SRSE Products/SRLive/OptionNbboQuote/OptionNbboQuote",title:"OptionNbboQuote",description:"V8 Message Definition",source:"@site/docs/MessageSchemas/Schema/SRSE Products/SRLive/OptionNbboQuote/OptionNbboQuote.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRLive/OptionNbboQuote",slug:"/MessageSchemas/Schema/SRSE Products/SRLive/OptionNbboQuote/",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRLive/OptionNbboQuote/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"OptionNbboQuote"},sidebar:"messageSchemasSidebar",previous:{title:"OptionMarketSummary",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRLive/OptionMarketSummary/"},next:{title:"OptionOpenAuction",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRLive/OptionOpenAuction/"}},c={},E=[];function T(e){const t={a:"a",code:"code",p:"p",pre:"pre",...(0,N.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"../../../Topics/market-data-options/OptionNbboQuote",children:"V8 Message Definition"})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sql",children:"CREATE TABLE `SRLive`.`MsgOptionNbboQuote` (\n    `okey_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None',\n    `okey_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','ESX','ANY','CXE','DXE','NXAM','NXBR','NXDUB','NXLS','NXLDN','NXML','NXMLT','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None',\n    `okey_tk` VARCHAR(12) NOT NULL DEFAULT '',\n    `okey_yr` SMALLINT UNSIGNED NOT NULL DEFAULT 0,\n    `okey_mn` TINYINT UNSIGNED NOT NULL DEFAULT 0,\n    `okey_dy` TINYINT UNSIGNED NOT NULL DEFAULT 0,\n    `okey_xx` DOUBLE NOT NULL DEFAULT 0,\n    `okey_cp` ENUM('Call','Put','Pair') NOT NULL DEFAULT 'Call',\n    `updateType` ENUM('None','PrcChange','SizeOnly','PrevPeriod') NOT NULL DEFAULT 'None',\n    `bidPrice` FLOAT NOT NULL DEFAULT 0 COMMENT 'bid price',\n    `askPrice` FLOAT NOT NULL DEFAULT 0 COMMENT 'ask price',\n    `bidSize` INT NOT NULL DEFAULT 0 COMMENT 'bid size in contracts (largest exch quote)',\n    `askSize` INT NOT NULL DEFAULT 0 COMMENT 'ask size in contracts (largest exch quote)',\n    `cumBidSize` INT NOT NULL DEFAULT 0 COMMENT 'bid size in contracts (total nbbo size)',\n    `cumAskSize` INT NOT NULL DEFAULT 0 COMMENT 'ask size in contracts (total nbbo size)',\n    `bidExch` ENUM('None','AMEX','BOX','CBOE','ISE','NYSE','PHLX','NSDQ','BATS','C2','NQBX','MIAX','GMNI','CME','CBOT','NYMEX','COMEX','ICE','EDGO','MCRY','MPRL','SDRK','DQTE','EMLD','CFE','MEMX','EUREX','CEDX','NXAM','NXBR','NXLS','NXML','NXOS','NXP','ICEFE') NOT NULL DEFAULT 'None' COMMENT 'first (or largest remaining) exchange at bid price',\n    `askExch` ENUM('None','AMEX','BOX','CBOE','ISE','NYSE','PHLX','NSDQ','BATS','C2','NQBX','MIAX','GMNI','CME','CBOT','NYMEX','COMEX','ICE','EDGO','MCRY','MPRL','SDRK','DQTE','EMLD','CFE','MEMX','EUREX','CEDX','NXAM','NXBR','NXLS','NXML','NXOS','NXP','ICEFE') NOT NULL DEFAULT 'None' COMMENT 'first (or largest remaining) exchange at ask price',\n    `bidMask` INT UNSIGNED NOT NULL DEFAULT 0 COMMENT 'exchange bid bit mask',\n    `askMask` INT UNSIGNED NOT NULL DEFAULT 0 COMMENT 'exchange ask bit mask',\n    `bidMktType` VARCHAR(255) NOT NULL DEFAULT 'None' COMMENT 'bid side quote flags (if any)',\n    `askMktType` VARCHAR(255) NOT NULL DEFAULT 'None' COMMENT 'ask side quote flags (if any)',\n    `bidPrice2` FLOAT NOT NULL DEFAULT 0 COMMENT '2nd best bid price',\n    `askPrice2` FLOAT NOT NULL DEFAULT 0 COMMENT '2nd best ask price',\n    `cumBidSize2` INT NOT NULL DEFAULT 0 COMMENT 'cumulative size at 2nd price',\n    `cumAskSize2` INT NOT NULL DEFAULT 0 COMMENT 'cumulative size at 2nd price',\n    `bidTime` INT NOT NULL DEFAULT 0 COMMENT 'last bid price change (milliseconds since midnight) calculated from the srcTimestamp',\n    `askTime` INT NOT NULL DEFAULT 0 COMMENT 'last ask price change (milliseconds since midnight) calculated from the srcTimestamp',\n    `srcTimestamp` BIGINT NOT NULL DEFAULT 0 COMMENT 'source high precision timestamp (if available)',\n    `netTimestamp` BIGINT NOT NULL DEFAULT 0 COMMENT 'inbound packet PTP timestamp from SR gateway switch;usually syncronized with facility grandfather clock',\n    PRIMARY KEY USING HASH (`okey_tk`,`okey_yr`,`okey_mn`,`okey_dy`,`okey_xx`,`okey_cp`,`okey_at`,`okey_ts`),\n    KEY `ExpirationIndex` (`okey_yr`,`okey_mn`,`okey_dy`) USING HASH\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='This table contains live option quote records from OPRA (equities) or the listing exchange (futures).  Each record contains up to two price levels and represents a live snapshot of the book for a specific option series.  There are typically 1mm+ records in this table if all ticker sources are enabled.';\n\n"})})]})}function r(e={}){const{wrapper:t}={...(0,N.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(T,{...e})}):T(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>a});var i=n(96540);const N={},o=i.createContext(N);function s(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(N):e.components||N:s(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);