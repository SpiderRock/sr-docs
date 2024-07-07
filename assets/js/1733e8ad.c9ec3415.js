"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[1061],{73900:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>L,contentTitle:()=>S,default:()=>T,frontMatter:()=>N,metadata:()=>i,toc:()=>a});var o=n(74848),r=n(28453);const N={title:"OptionPrintSetSummary"},S=void 0,i={id:"MessageSchemas/Schema/SRSE Products/SRAnalytics/OptionPrintSetSummary/OptionPrintSetSummary",title:"OptionPrintSetSummary",description:"V8 Message Definition",source:"@site/docs/MessageSchemas/Schema/SRSE Products/SRAnalytics/OptionPrintSetSummary/OptionPrintSetSummary.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRAnalytics/OptionPrintSetSummary",slug:"/MessageSchemas/Schema/SRSE Products/SRAnalytics/OptionPrintSetSummary/",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRAnalytics/OptionPrintSetSummary/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"OptionPrintSetSummary"},sidebar:"messageSchemasSidebar",previous:{title:"OptionPrintSet",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRAnalytics/OptionPrintSet/"},next:{title:"OptionQuoteProbability",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRAnalytics/OptionQuoteProbability/"}},L={},a=[];function s(e){const t={a:"a",code:"code",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:(0,o.jsx)(t.a,{href:"../../../Topics/market-data-options/OptionPrintSetSummary",children:"V8 Message Definition"})}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-sql",children:"CREATE TABLE `SRAnalytics`.`MsgOptionPrintSetSummary` (\n    `okey_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None',\n    `okey_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','ESX','ANY','CXE','DXE','NXAM','NXBR','NXDUB','NXLS','NXLDN','NXML','NXMLT','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None',\n    `okey_tk` VARCHAR(12) NOT NULL DEFAULT '',\n    `okey_yr` SMALLINT UNSIGNED NOT NULL DEFAULT 0,\n    `okey_mn` TINYINT UNSIGNED NOT NULL DEFAULT 0,\n    `okey_dy` TINYINT UNSIGNED NOT NULL DEFAULT 0,\n    `okey_xx` DOUBLE NOT NULL DEFAULT 0,\n    `okey_cp` ENUM('Call','Put','Pair') NOT NULL DEFAULT 'Call',\n    `prtExch` ENUM('None','AMEX','BOX','CBOE','ISE','NYSE','PHLX','NSDQ','BATS','C2','NQBX','MIAX','GMNI','CME','CBOT','NYMEX','COMEX','ICE','EDGO','MCRY','MPRL','SDRK','DQTE','EMLD','CFE','MEMX','EUREX','CEDX','NXAM','NXBR','NXLS','NXML','NXOS','NXP','ICEFE') NOT NULL DEFAULT 'None',\n    `prtSide` ENUM('None','Buy','Sell') NOT NULL DEFAULT 'None',\n    `prtType` ENUM('None','CANC','OSEQ','CNCL','LATE','CNCO','OPEN','CNOL','OPNL','AUTO','REOP','ISOI','SLAN','SLAI','SLCN','SCLI','SLFT','MLET','MLAT','MLCT','MLFT','MESL','TLAT','MASL','MFSL','TLET','TLCT','TLFT','TESL','TASL','TFSL','CBMO','MCTP','EXHT') NOT NULL DEFAULT 'None',\n    `tradingPeriod` DATE NOT NULL DEFAULT '1900-01-01',\n    `numPrints` INT NOT NULL DEFAULT 0,\n    `sumPrintSize` INT NOT NULL DEFAULT 0,\n    `sumExchQuoteSize` INT NOT NULL DEFAULT 0 COMMENT 'exch quote size at the time of print',\n    `sumPrintM1PnL` FLOAT NOT NULL DEFAULT 0,\n    `sumPrintM10PnL` FLOAT NOT NULL DEFAULT 0,\n    `avgVol` FLOAT NOT NULL DEFAULT 0,\n    `avgVega` FLOAT NOT NULL DEFAULT 0,\n    `avgDelta` FLOAT NOT NULL DEFAULT 0,\n    `avgPrintProb` FLOAT NOT NULL DEFAULT 0,\n    `sumSurfaceEdge` FLOAT NOT NULL DEFAULT 0,\n    PRIMARY KEY USING HASH (`okey_tk`,`okey_yr`,`okey_mn`,`okey_dy`,`okey_xx`,`okey_cp`,`okey_at`,`okey_ts`,`prtExch`,`prtSide`,`prtType`,`tradingPeriod`)\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='OptionPrintSetSummary records are created at the end of each trading period and contain a summary of the activity for the period; Summary of OptionPrintSet records';\n\n"})})]})}function T(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(s,{...e})}):s(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>S,x:()=>i});var o=n(96540);const r={},N=o.createContext(r);function S(e){const t=o.useContext(N);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:S(e.components),o.createElement(N.Provider,{value:t},e.children)}}}]);