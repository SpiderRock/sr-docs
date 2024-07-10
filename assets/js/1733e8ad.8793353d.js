"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[1061],{73900:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>j,frontMatter:()=>s,metadata:()=>c,toc:()=>h});var d=n(74848),r=n(28453);const s={},i=void 0,c={id:"MessageSchemas/Schema/SRSE Products/SRAnalytics/OptionPrintSetSummary/OptionPrintSetSummary",title:"OptionPrintSetSummary",description:"V8 Message Definiton",source:"@site/docs/MessageSchemas/Schema/SRSE Products/SRAnalytics/OptionPrintSetSummary/OptionPrintSetSummary.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRAnalytics/OptionPrintSetSummary",slug:"/MessageSchemas/Schema/SRSE Products/SRAnalytics/OptionPrintSetSummary/",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRAnalytics/OptionPrintSetSummary/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"messageSchemasSidebar",previous:{title:"OptionPrintSet",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRAnalytics/OptionPrintSet/"},next:{title:"OptionQuoteProbability",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRAnalytics/OptionQuoteProbability/"}},l={},h=[{value:"METADATA",id:"metadata",level:3},{value:"Table Definition",id:"table-definition",level:3},{value:"PRIMARY KEY DEFINITION (Unique)",id:"primary-key-definition-unique",level:3},{value:"CREATE TABLE QUERY",id:"create-table-query",level:3}];function x(e){const t={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(t.p,{children:(0,d.jsx)(t.a,{href:"../../../Topics/market-data-options/OptionPrintSetSummary",children:"V8 Message Definiton"})}),"\n",(0,d.jsx)(t.p,{children:"OptionPrintSetSummary records are created at the end of each trading period and contain a summary of the activity for the period; Summary of OptionPrintSet records"}),"\n",(0,d.jsx)(t.h3,{id:"metadata",children:"METADATA"}),"\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Attribute"}),(0,d.jsx)(t.th,{children:"Value"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"Topic"}),(0,d.jsx)(t.td,{children:"2750-market-data-options"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"MLink Token"}),(0,d.jsx)(t.td,{children:"SystemData"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"Product"}),(0,d.jsx)(t.td,{children:"SRAnalytics"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"accessType"}),(0,d.jsx)(t.td,{children:"SELECT"})]})]})]}),"\n",(0,d.jsx)(t.h3,{id:"table-definition",children:"Table Definition"}),"\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Field"}),(0,d.jsx)(t.th,{children:"Type"}),(0,d.jsx)(t.th,{children:"Key"}),(0,d.jsx)(t.th,{children:"Comment"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"okey_at"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.a,{href:"../../../Enums/AssetType",children:"enum - AssetType"})}),(0,d.jsx)(t.td,{children:"PRI"}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"okey_ts"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.a,{href:"../../../Enums/TickerSrc",children:"enum - TickerSrc"})}),(0,d.jsx)(t.td,{children:"PRI"}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"okey_tk"}),(0,d.jsx)(t.td,{children:"VARCHAR(12)"}),(0,d.jsx)(t.td,{children:"PRI"}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"okey_yr"}),(0,d.jsx)(t.td,{children:"SMALLINT UNSIGNED"}),(0,d.jsx)(t.td,{children:"PRI"}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"okey_mn"}),(0,d.jsx)(t.td,{children:"TINYINT UNSIGNED"}),(0,d.jsx)(t.td,{children:"PRI"}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"okey_dy"}),(0,d.jsx)(t.td,{children:"TINYINT UNSIGNED"}),(0,d.jsx)(t.td,{children:"PRI"}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"okey_xx"}),(0,d.jsx)(t.td,{children:"DOUBLE"}),(0,d.jsx)(t.td,{children:"PRI"}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"okey_cp"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.a,{href:"../../../Enums/CallPut",children:"enum - CallPut"})}),(0,d.jsx)(t.td,{children:"PRI"}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"prtExch"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.a,{href:"../../../Enums/OptExch",children:"enum - OptExch"})}),(0,d.jsx)(t.td,{children:"PRI"}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"prtSide"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.a,{href:"../../../Enums/BuySell",children:"enum - BuySell"})}),(0,d.jsx)(t.td,{children:"PRI"}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"prtType"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.a,{href:"../../../Enums/PrtType",children:"enum - PrtType"})}),(0,d.jsx)(t.td,{children:"PRI"}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"tradingPeriod"}),(0,d.jsx)(t.td,{children:"DATE"}),(0,d.jsx)(t.td,{children:"PRI"}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"numPrints"}),(0,d.jsx)(t.td,{children:"INT"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"sumPrintSize"}),(0,d.jsx)(t.td,{children:"INT"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"sumExchQuoteSize"}),(0,d.jsx)(t.td,{children:"INT"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"exch quote size at the time of print"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"sumPrintM1PnL"}),(0,d.jsx)(t.td,{children:"FLOAT"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"sumPrintM10PnL"}),(0,d.jsx)(t.td,{children:"FLOAT"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"avgVol"}),(0,d.jsx)(t.td,{children:"FLOAT"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"avgVega"}),(0,d.jsx)(t.td,{children:"FLOAT"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"avgDelta"}),(0,d.jsx)(t.td,{children:"FLOAT"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"avgPrintProb"}),(0,d.jsx)(t.td,{children:"FLOAT"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"sumSurfaceEdge"}),(0,d.jsx)(t.td,{children:"FLOAT"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{})]})]})]}),"\n",(0,d.jsx)(t.h3,{id:"primary-key-definition-unique",children:"PRIMARY KEY DEFINITION (Unique)"}),"\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Field"}),(0,d.jsx)(t.th,{children:"Sequence"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"okey_tk"}),(0,d.jsx)(t.td,{children:"1"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"okey_yr"}),(0,d.jsx)(t.td,{children:"2"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"okey_mn"}),(0,d.jsx)(t.td,{children:"3"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"okey_dy"}),(0,d.jsx)(t.td,{children:"4"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"okey_xx"}),(0,d.jsx)(t.td,{children:"5"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"okey_cp"}),(0,d.jsx)(t.td,{children:"6"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"okey_at"}),(0,d.jsx)(t.td,{children:"7"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"okey_ts"}),(0,d.jsx)(t.td,{children:"8"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"prtExch"}),(0,d.jsx)(t.td,{children:"9"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"prtSide"}),(0,d.jsx)(t.td,{children:"10"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"prtType"}),(0,d.jsx)(t.td,{children:"11"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"tradingPeriod"}),(0,d.jsx)(t.td,{children:"12"})]})]})]}),"\n",(0,d.jsx)(t.h3,{id:"create-table-query",children:"CREATE TABLE QUERY"}),"\n",(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:"language-sql",children:"CREATE TABLE `SRAnalytics`.`MsgOptionPrintSetSummary` (\n    `okey_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None',\n    `okey_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','ESX','ANY','CXE','DXE','NXAM','NXBR','NXDUB','NXLS','NXLDN','NXML','NXMLT','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None',\n    `okey_tk` VARCHAR(12) NOT NULL DEFAULT '',\n    `okey_yr` SMALLINT UNSIGNED NOT NULL DEFAULT 0,\n    `okey_mn` TINYINT UNSIGNED NOT NULL DEFAULT 0,\n    `okey_dy` TINYINT UNSIGNED NOT NULL DEFAULT 0,\n    `okey_xx` DOUBLE NOT NULL DEFAULT 0,\n    `okey_cp` ENUM('Call','Put','Pair') NOT NULL DEFAULT 'Call',\n    `prtExch` ENUM('None','AMEX','BOX','CBOE','ISE','NYSE','PHLX','NSDQ','BATS','C2','NQBX','MIAX','GMNI','CME','CBOT','NYMEX','COMEX','ICE','EDGO','MCRY','MPRL','SDRK','DQTE','EMLD','CFE','MEMX','EUREX','CEDX','NXAM','NXBR','NXLS','NXML','NXOS','NXP','ICEFE') NOT NULL DEFAULT 'None',\n    `prtSide` ENUM('None','Buy','Sell') NOT NULL DEFAULT 'None',\n    `prtType` ENUM('None','CANC','OSEQ','CNCL','LATE','CNCO','OPEN','CNOL','OPNL','AUTO','REOP','ISOI','SLAN','SLAI','SLCN','SCLI','SLFT','MLET','MLAT','MLCT','MLFT','MESL','TLAT','MASL','MFSL','TLET','TLCT','TLFT','TESL','TASL','TFSL','CBMO','MCTP','EXHT') NOT NULL DEFAULT 'None',\n    `tradingPeriod` DATE NOT NULL DEFAULT '1900-01-01',\n    `numPrints` INT NOT NULL DEFAULT 0,\n    `sumPrintSize` INT NOT NULL DEFAULT 0,\n    `sumExchQuoteSize` INT NOT NULL DEFAULT 0 COMMENT 'exch quote size at the time of print',\n    `sumPrintM1PnL` FLOAT NOT NULL DEFAULT 0,\n    `sumPrintM10PnL` FLOAT NOT NULL DEFAULT 0,\n    `avgVol` FLOAT NOT NULL DEFAULT 0,\n    `avgVega` FLOAT NOT NULL DEFAULT 0,\n    `avgDelta` FLOAT NOT NULL DEFAULT 0,\n    `avgPrintProb` FLOAT NOT NULL DEFAULT 0,\n    `sumSurfaceEdge` FLOAT NOT NULL DEFAULT 0,\n    PRIMARY KEY USING HASH (`okey_tk`,`okey_yr`,`okey_mn`,`okey_dy`,`okey_xx`,`okey_cp`,`okey_at`,`okey_ts`,`prtExch`,`prtSide`,`prtType`,`tradingPeriod`)\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='OptionPrintSetSummary records are created at the end of each trading period and contain a summary of the activity for the period; Summary of OptionPrintSet records';\n\n"})})]})}function j(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(x,{...e})}):x(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>c});var d=n(96540);const r={},s=d.createContext(r);function i(e){const t=d.useContext(s);return d.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),d.createElement(s.Provider,{value:t},e.children)}}}]);