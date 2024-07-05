"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[28436],{41672:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>E,contentTitle:()=>L,default:()=>U,frontMatter:()=>o,metadata:()=>T,toc:()=>a});var N=n(74848),r=n(28453);const o={title:"SpdrAutoHedgeState"},L=void 0,T={id:"MessageSchemas/Schema/SRSE Products/SRTrade/SpdrAutoHedgeState/SpdrAutoHedgeState",title:"SpdrAutoHedgeState",description:"V8 Message Definition",source:"@site/docs/MessageSchemas/Schema/SRSE Products/SRTrade/SpdrAutoHedgeState/SpdrAutoHedgeState.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRTrade/SpdrAutoHedgeState",slug:"/MessageSchemas/Schema/SRSE Products/SRTrade/SpdrAutoHedgeState/",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRTrade/SpdrAutoHedgeState/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"SpdrAutoHedgeState"},sidebar:"messageSchemasSidebar",previous:{title:"SpdrAutoHedgeControl",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRTrade/SpdrAutoHedgeControl/"},next:{title:"SpdrAvailExecAllocation",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRTrade/SpdrAvailExecAllocation/"}},E={},a=[];function d(e){const t={a:"a",code:"code",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(t.p,{children:(0,N.jsx)(t.a,{href:"../../../Topics/strategy-autohedge/SpdrAutoHedgeState",children:"V8 Message Definition"})}),"\n",(0,N.jsx)(t.pre,{children:(0,N.jsx)(t.code,{className:"language-sql",children:"CREATE TABLE `SRTrade`.`MsgSRAutoHedgeState` (\n    `accnt` VARCHAR(16) NOT NULL DEFAULT '',\n    `riskGroupId` CHAR(19) NOT NULL DEFAULT '0000-0000-0000-0000',\n    `hedgeSecKey_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None' COMMENT 'Execution Hedge SecKey (from SpdrAutoHedgeControl.targetSecKey)',\n    `hedgeSecKey_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','ESX','ANY','CXE','DXE','NXAM','NXBR','NXDUB','NXLS','NXLDN','NXML','NXMLT','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None' COMMENT 'Execution Hedge SecKey (from SpdrAutoHedgeControl.targetSecKey)',\n    `hedgeSecKey_tk` VARCHAR(12) NOT NULL DEFAULT '' COMMENT 'Execution Hedge SecKey (from SpdrAutoHedgeControl.targetSecKey)',\n    `hedgeSecKey_yr` SMALLINT UNSIGNED NOT NULL DEFAULT 0 COMMENT 'Execution Hedge SecKey (from SpdrAutoHedgeControl.targetSecKey)',\n    `hedgeSecKey_mn` TINYINT UNSIGNED NOT NULL DEFAULT 0 COMMENT 'Execution Hedge SecKey (from SpdrAutoHedgeControl.targetSecKey)',\n    `hedgeSecKey_dy` TINYINT UNSIGNED NOT NULL DEFAULT 0 COMMENT 'Execution Hedge SecKey (from SpdrAutoHedgeControl.targetSecKey)',\n    `hedgeSecType` ENUM('None','Stock','Future','Option','MLeg') NOT NULL DEFAULT 'None' COMMENT 'Execution Hedge SecType (from SpdrAutoHedgeControl.targetSecType) [can be None]',\n    `clientFirm` VARCHAR(16) NOT NULL DEFAULT '',\n    `groupingCode` CHAR(19) NOT NULL DEFAULT '0000-0000-0000-0000',\n    `ticker_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None' COMMENT 'ticker group (eg. @ES, @ZN)',\n    `ticker_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','ESX','ANY','CXE','DXE','NXAM','NXBR','NXDUB','NXLS','NXLDN','NXML','NXMLT','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None' COMMENT 'ticker group (eg. @ES, @ZN)',\n    `ticker_tk` VARCHAR(12) NOT NULL DEFAULT '' COMMENT 'ticker group (eg. @ES, @ZN)',\n    `securityDesc` VARCHAR(255) NOT NULL DEFAULT '',\n    `ssaleFlag` ENUM('None','Long','Short','Exempt','Auto','Open','Close','Cover','NA') NOT NULL DEFAULT 'None',\n    `positionType` ENUM('None','Opening','Closing','Auto') NOT NULL DEFAULT 'None',\n    `hedgeState` ENUM('None','NoHedgeCtrl','MLegHold','InBand','BandSh','BandLn','Exception','DDMultErr','UndTypeErr','UndPerCnErr','Init','UPrcErr','AccumulatorError') NOT NULL DEFAULT 'None',\n    `hedgeText` VARCHAR(255) NOT NULL DEFAULT '',\n    `uPrc` DOUBLE NOT NULL DEFAULT 0 COMMENT 'hedge target underlier price',\n    `isDeltaMixed` ENUM('None','Yes','No') NOT NULL DEFAULT 'None',\n    `accumulatorError` VARCHAR(255) NOT NULL DEFAULT '',\n    `grpDeltaBot` DOUBLE NOT NULL DEFAULT 0 COMMENT 'option delta bot (in ctrlDe units)',\n    `grpDeltaSld` DOUBLE NOT NULL DEFAULT 0,\n    `grpDDeltaBot` DOUBLE NOT NULL DEFAULT 0 COMMENT 'option $delta bot (using uMid at time of option fill)',\n    `grpDDeltaSld` DOUBLE NOT NULL DEFAULT 0,\n    `lastGrpFillDttm` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000',\n    `ctrlDeltaBot` DOUBLE NOT NULL DEFAULT 0 COMMENT 'hedge target delta (units) bot',\n    `ctrlDeltaSld` DOUBLE NOT NULL DEFAULT 0,\n    `ctrlDDeltaBot` DOUBLE NOT NULL DEFAULT 0 COMMENT 'hedge target $delta bot (using actual fill price)',\n    `ctrlDDeltaSld` DOUBLE NOT NULL DEFAULT 0,\n    `lastCtrlFillDttm` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000',\n    `absOptCn` INT NOT NULL DEFAULT 0 COMMENT 'total number of option contracts executed in this hedge group',\n    `netDelta` DOUBLE NOT NULL DEFAULT 0 COMMENT 'grpDeltaBot - grpDeltaSld + ctrlDeltaBot - ctrlDeltaSld',\n    `netDDelta` DOUBLE NOT NULL DEFAULT 0 COMMENT 'grpDDeltaBot - grpDDeltaSld + ctrlDDeltaBot - ctrlDDeltaSld',\n    `openHedgeTime` FLOAT NOT NULL DEFAULT 0 COMMENT 'size weighted average time (in seconds) hedge risk has been open (executions to fills)',\n    `hedgeTargetVol` FLOAT NOT NULL DEFAULT 0 COMMENT 'implied / expected today (annualized) volatility for hedge target',\n    `expectedPrcRange` FLOAT NOT NULL DEFAULT 0 COMMENT 'SQRT(avgHedgeTime x hedgeTargetVol) cone',\n    `opnDeltaBot` DOUBLE NOT NULL DEFAULT 0 COMMENT 'open risk delta bot (in ctrlDe units)',\n    `opnDeltaSld` DOUBLE NOT NULL DEFAULT 0,\n    `opnDDeltaBot` DOUBLE NOT NULL DEFAULT 0 COMMENT 'open risk $delta bot (in ctrlDe units)',\n    `opnDDeltaSld` DOUBLE NOT NULL DEFAULT 0,\n    `clsDeltaBot` DOUBLE NOT NULL DEFAULT 0 COMMENT 'close risk delta bot (in ctrlDe units)',\n    `clsDeltaSld` DOUBLE NOT NULL DEFAULT 0,\n    `clsDDeltaBot` DOUBLE NOT NULL DEFAULT 0 COMMENT 'close risk $delta bot (in ctrlDe units)',\n    `clsDDeltaSld` DOUBLE NOT NULL DEFAULT 0,\n    `slippagePnL` FLOAT NOT NULL DEFAULT 0 COMMENT 'opnDeltaBot * (clsDeltaPrcSld - opnDeltaPrcBot) + opnDeltaSld * (opnDeltaPrcSld - clsDeltaPrcBot)',\n    `slippageUnitPnL` FLOAT NOT NULL DEFAULT 0 COMMENT 'slippagePnL / (grpDeltaBot + grpDeltaSld) [pnl / unit (share or fc)]',\n    `slippageNormPnL` FLOAT NOT NULL DEFAULT 0 COMMENT 'slippageUnitPnL / expectedPrcRange',\n    `minDDeltaBand` FLOAT NOT NULL DEFAULT 0,\n    `maxDDeltaBand` FLOAT NOT NULL DEFAULT 0,\n    `bParentNumber` BIGINT NOT NULL DEFAULT 0,\n    `bActiveSize` INT NOT NULL DEFAULT 0,\n    `bBrkrStatus` VARCHAR(255) NOT NULL DEFAULT '',\n    `bBrkrError` VARCHAR(255) NOT NULL DEFAULT '',\n    `sParentNumber` BIGINT NOT NULL DEFAULT 0,\n    `sActiveSize` INT NOT NULL DEFAULT 0,\n    `sBrkrStatus` VARCHAR(255) NOT NULL DEFAULT '',\n    `sBrkrError` VARCHAR(255) NOT NULL DEFAULT '',\n    `ddMult` DOUBLE NOT NULL DEFAULT 0,\n    `underliersPerCn` INT NOT NULL DEFAULT 0 COMMENT 'future underliers per contract',\n    `underlierType` ENUM('None','Equity','Other','FX') NOT NULL DEFAULT 'None' COMMENT 'type of underlier (affects $greek calculations)',\n    `pointValue` DOUBLE NOT NULL DEFAULT 0 COMMENT '$NLV value of a single point change in display premium (hedge target)',\n    `pointCurrency` ENUM('None','AUD','BRL','CAD','CHF','CNH','CNY','EUR','GBP','JPY','KRW','MXN','MYR','NOK','NZD','SEK','TRY','USD','USDCents','CZK','ZAR','HUF','USX','GBX') NOT NULL DEFAULT 'None',\n    `liveHedgeMark` DOUBLE NOT NULL DEFAULT 0 COMMENT 'hedgeSecKey live mark (mid-market) [zero in SRSE]',\n    `updtReason` VARCHAR(20) NOT NULL DEFAULT '',\n    `timestamp` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000' COMMENT 'SR system timestamp',\n    CONSTRAINT nonnegative_riskGroupId CHECK(ASCII(riskGroupId) < 56),\n    CONSTRAINT nonnegative_groupingCode CHECK(ASCII(groupingCode) < 56),\n    PRIMARY KEY USING HASH (`accnt`,`riskGroupId`,`hedgeSecKey_tk`,`hedgeSecKey_yr`,`hedgeSecKey_mn`,`hedgeSecKey_dy`,`hedgeSecKey_at`,`hedgeSecKey_ts`,`hedgeSecType`,`clientFirm`)\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='SpdrAutoHedgeState records are published by autohedge servers and describe the current state of an autohedge controller that is managing RiskGroup autohedge orders.';\n\n"})})]})}function U(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,N.jsx)(t,{...e,children:(0,N.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>L,x:()=>T});var N=n(96540);const r={},o=N.createContext(r);function L(e){const t=N.useContext(o);return N.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function T(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:L(e.components),N.createElement(o.Provider,{value:t},e.children)}}}]);