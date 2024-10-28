"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[97375],{72374:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>a,frontMatter:()=>s,metadata:()=>c,toc:()=>h});var d=t(74848),r=t(28453);const s={},i=void 0,c={id:"MessageSchemas/Schema/SRSE Products/SRAnalytics/OptionPrintSetSummary/OptionPrintSetSummary",title:"OptionPrintSetSummary",description:"V8 Message Definiton",source:"@site/versioned_docs/version-8.4.10.4/MessageSchemas/Schema/SRSE Products/SRAnalytics/OptionPrintSetSummary/OptionPrintSetSummary.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRAnalytics/OptionPrintSetSummary",slug:"/MessageSchemas/Schema/SRSE Products/SRAnalytics/OptionPrintSetSummary/",permalink:"/docs/8.4.10.4/MessageSchemas/Schema/SRSE Products/SRAnalytics/OptionPrintSetSummary/",draft:!1,unlisted:!1,tags:[],version:"8.4.10.4",frontMatter:{},sidebar:"messageSchemasSidebar",previous:{title:"OptionPrintSet",permalink:"/docs/8.4.10.4/MessageSchemas/Schema/SRSE Products/SRAnalytics/OptionPrintSet/"},next:{title:"OptionQuoteProbability",permalink:"/docs/8.4.10.4/MessageSchemas/Schema/SRSE Products/SRAnalytics/OptionQuoteProbability/"}},l={},h=[{value:"METADATA",id:"metadata",level:3},{value:"Table Definition",id:"table-definition",level:3},{value:"PRIMARY KEY DEFINITION (Unique)",id:"primary-key-definition-unique",level:3},{value:"CREATE TABLE EXAMPLE QUERY",id:"create-table-example-query",level:3},{value:"SELECT TABLE EXAMPLE QUERY",id:"select-table-example-query",level:3},{value:"Doc Columns Query",id:"doc-columns-query",level:3}];function x(e){const n={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.p,{children:(0,d.jsx)(n.a,{href:"../../../Topics/market-data-options/OptionPrintSetSummary",children:"V8 Message Definiton"})}),"\n",(0,d.jsx)(n.p,{children:"OptionPrintSetSummary records are created at the end of each trading period and contain a summary of the activity for the period; Summary of OptionPrintSet records"}),"\n",(0,d.jsx)(n.h3,{id:"metadata",children:"METADATA"}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Attribute"}),(0,d.jsx)(n.th,{children:"Value"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Topic"}),(0,d.jsx)(n.td,{children:"2750-market-data-options"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"MLink Token"}),(0,d.jsx)(n.td,{children:"SRMLinkAnalytics"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Product"}),(0,d.jsx)(n.td,{children:"SRAnalytics"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"accessType"}),(0,d.jsx)(n.td,{children:"SELECT"})]})]})]}),"\n",(0,d.jsx)(n.h3,{id:"table-definition",children:"Table Definition"}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Field"}),(0,d.jsx)(n.th,{children:"Type"}),(0,d.jsx)(n.th,{children:"Key"}),(0,d.jsx)(n.th,{children:"Default Value"}),(0,d.jsx)(n.th,{children:"Comment"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"okey_at"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.a,{href:"../../../Enums/AssetType",children:"enum - AssetType"})}),(0,d.jsx)(n.td,{children:"PRI"}),(0,d.jsx)(n.td,{children:"'None'"}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"okey_ts"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.a,{href:"../../../Enums/TickerSrc",children:"enum - TickerSrc"})}),(0,d.jsx)(n.td,{children:"PRI"}),(0,d.jsx)(n.td,{children:"'None'"}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"okey_tk"}),(0,d.jsx)(n.td,{children:"VARCHAR(12)"}),(0,d.jsx)(n.td,{children:"PRI"}),(0,d.jsx)(n.td,{children:"''"}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"okey_yr"}),(0,d.jsx)(n.td,{children:"SMALLINT UNSIGNED"}),(0,d.jsx)(n.td,{children:"PRI"}),(0,d.jsx)(n.td,{children:"0"}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"okey_mn"}),(0,d.jsx)(n.td,{children:"TINYINT UNSIGNED"}),(0,d.jsx)(n.td,{children:"PRI"}),(0,d.jsx)(n.td,{children:"0"}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"okey_dy"}),(0,d.jsx)(n.td,{children:"TINYINT UNSIGNED"}),(0,d.jsx)(n.td,{children:"PRI"}),(0,d.jsx)(n.td,{children:"0"}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"okey_xx"}),(0,d.jsx)(n.td,{children:"DOUBLE"}),(0,d.jsx)(n.td,{children:"PRI"}),(0,d.jsx)(n.td,{children:"0"}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"okey_cp"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.a,{href:"../../../Enums/CallPut",children:"enum - CallPut"})}),(0,d.jsx)(n.td,{children:"PRI"}),(0,d.jsx)(n.td,{children:"'Call'"}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"prtExch"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.a,{href:"../../../Enums/OptExch",children:"enum - OptExch"})}),(0,d.jsx)(n.td,{children:"PRI"}),(0,d.jsx)(n.td,{children:"'None'"}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"prtSide"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.a,{href:"../../../Enums/BuySell",children:"enum - BuySell"})}),(0,d.jsx)(n.td,{children:"PRI"}),(0,d.jsx)(n.td,{children:"'None'"}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"prtType"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.a,{href:"../../../Enums/PrtType",children:"enum - PrtType"})}),(0,d.jsx)(n.td,{children:"PRI"}),(0,d.jsx)(n.td,{children:"'None'"}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"tradingPeriod"}),(0,d.jsx)(n.td,{children:"DATE"}),(0,d.jsx)(n.td,{children:"PRI"}),(0,d.jsx)(n.td,{children:"'1900-01-01'"}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"numPrints"}),(0,d.jsx)(n.td,{children:"INT"}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:"0"}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"sumPrintSize"}),(0,d.jsx)(n.td,{children:"INT"}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:"0"}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"sumExchQuoteSize"}),(0,d.jsx)(n.td,{children:"INT"}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:"0"}),(0,d.jsx)(n.td,{children:"exch quote size at the time of print"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"sumPrintM1PnL"}),(0,d.jsx)(n.td,{children:"FLOAT"}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:"0"}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"sumPrintM10PnL"}),(0,d.jsx)(n.td,{children:"FLOAT"}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:"0"}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"avgVol"}),(0,d.jsx)(n.td,{children:"FLOAT"}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:"0"}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"avgVega"}),(0,d.jsx)(n.td,{children:"FLOAT"}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:"0"}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"avgDelta"}),(0,d.jsx)(n.td,{children:"FLOAT"}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:"0"}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"avgPrintProb"}),(0,d.jsx)(n.td,{children:"FLOAT"}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:"0"}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"sumSurfaceEdge"}),(0,d.jsx)(n.td,{children:"FLOAT"}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:"0"}),(0,d.jsx)(n.td,{})]})]})]}),"\n",(0,d.jsx)(n.h3,{id:"primary-key-definition-unique",children:"PRIMARY KEY DEFINITION (Unique)"}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Field"}),(0,d.jsx)(n.th,{children:"Sequence"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"okey_tk"}),(0,d.jsx)(n.td,{children:"1"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"okey_yr"}),(0,d.jsx)(n.td,{children:"2"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"okey_mn"}),(0,d.jsx)(n.td,{children:"3"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"okey_dy"}),(0,d.jsx)(n.td,{children:"4"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"okey_xx"}),(0,d.jsx)(n.td,{children:"5"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"okey_cp"}),(0,d.jsx)(n.td,{children:"6"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"okey_at"}),(0,d.jsx)(n.td,{children:"7"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"okey_ts"}),(0,d.jsx)(n.td,{children:"8"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"prtExch"}),(0,d.jsx)(n.td,{children:"9"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"prtSide"}),(0,d.jsx)(n.td,{children:"10"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"prtType"}),(0,d.jsx)(n.td,{children:"11"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"tradingPeriod"}),(0,d.jsx)(n.td,{children:"12"})]})]})]}),"\n",(0,d.jsx)(n.h3,{id:"create-table-example-query",children:"CREATE TABLE EXAMPLE QUERY"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-sql",children:"CREATE TABLE `SRAnalytics`.`MsgOptionPrintSetSummary` (\n    `okey_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None',\n    `okey_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','EUX','ANY','CXE','DXE','NXAM','NXBR','NXLS','NXML','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None',\n    `okey_tk` VARCHAR(12) NOT NULL DEFAULT '',\n    `okey_yr` SMALLINT UNSIGNED NOT NULL DEFAULT 0,\n    `okey_mn` TINYINT UNSIGNED NOT NULL DEFAULT 0,\n    `okey_dy` TINYINT UNSIGNED NOT NULL DEFAULT 0,\n    `okey_xx` DOUBLE NOT NULL DEFAULT 0,\n    `okey_cp` ENUM('Call','Put','Pair') NOT NULL DEFAULT 'Call',\n    `prtExch` ENUM('None','AMEX','BOX','CBOE','ISE','NYSE','PHLX','NSDQ','BATS','C2','NQBX','MIAX','GMNI','CME','CBOT','NYMEX','COMEX','ICE','EDGO','MCRY','MPRL','SDRK','DQTE','EMLD','CFE','MEMX','SPHR','EUREX','CEDX','NXAM','NXBR','NXLS','NXML','NXOS','NXP','ICEFE') NOT NULL DEFAULT 'None',\n    `prtSide` ENUM('None','Buy','Sell') NOT NULL DEFAULT 'None',\n    `prtType` ENUM('None','CANC','OSEQ','CNCL','LATE','CNCO','OPEN','CNOL','OPNL','AUTO','REOP','ISOI','SLAN','SLAI','SLCN','SCLI','SLFT','MLET','MLAT','MLCT','MLFT','MESL','TLAT','MASL','MFSL','TLET','TLCT','TLFT','TESL','TASL','TFSL','CBMO','MCTP','EXHT') NOT NULL DEFAULT 'None',\n    `tradingPeriod` DATE NOT NULL DEFAULT '1900-01-01',\n    `numPrints` INT NOT NULL DEFAULT 0,\n    `sumPrintSize` INT NOT NULL DEFAULT 0,\n    `sumExchQuoteSize` INT NOT NULL DEFAULT 0 COMMENT 'exch quote size at the time of print',\n    `sumPrintM1PnL` FLOAT NOT NULL DEFAULT 0,\n    `sumPrintM10PnL` FLOAT NOT NULL DEFAULT 0,\n    `avgVol` FLOAT NOT NULL DEFAULT 0,\n    `avgVega` FLOAT NOT NULL DEFAULT 0,\n    `avgDelta` FLOAT NOT NULL DEFAULT 0,\n    `avgPrintProb` FLOAT NOT NULL DEFAULT 0,\n    `sumSurfaceEdge` FLOAT NOT NULL DEFAULT 0,\n    PRIMARY KEY USING HASH (`okey_tk`,`okey_yr`,`okey_mn`,`okey_dy`,`okey_xx`,`okey_cp`,`okey_at`,`okey_ts`,`prtExch`,`prtSide`,`prtType`,`tradingPeriod`)\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='OptionPrintSetSummary records are created at the end of each trading period and contain a summary of the activity for the period; Summary of OptionPrintSet records';\n\n"})}),"\n",(0,d.jsx)(n.h3,{id:"select-table-example-query",children:"SELECT TABLE EXAMPLE QUERY"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-sql",children:"SELECT\n    `okey_at`,\n    `okey_ts`,\n    `okey_tk`,\n    `okey_yr`,\n    `okey_mn`,\n    `okey_dy`,\n    `okey_xx`,\n    `okey_cp`,\n    `prtExch`,\n    `prtSide`,\n    `prtType`,\n    `tradingPeriod`,\n    `numPrints`,\n    `sumPrintSize`,\n    `sumExchQuoteSize`,\n    `sumPrintM1PnL`,\n    `sumPrintM10PnL`,\n    `avgVol`,\n    `avgVega`,\n    `avgDelta`,\n    `avgPrintProb`,\n    `sumSurfaceEdge`\nFROM `SRAnalytics`.`MsgOptionPrintSetSummary`\nWHERE \n    /* Replace with a ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') */ \n    `okey_at` = 'None'\n  AND\n    /* Replace with a ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','EUX','ANY','CXE','DXE','NXAM','NXBR','NXLS','NXML','NXOS','NXP','EUREX','CEDX','ICEFE') */ \n    `okey_ts` = 'None'\n  AND\n    /* Replace with a VARCHAR(12) */ \n    `okey_tk` = 'Example_okey_tk'\n  AND\n    /* Replace with a SMALLINT UNSIGNED */ \n    `okey_yr` = 123\n  AND\n    /* Replace with a TINYINT UNSIGNED */ \n    `okey_mn` = 1\n  AND\n    /* Replace with a TINYINT UNSIGNED */ \n    `okey_dy` = 1\n  AND\n    /* Replace with a DOUBLE */ \n    `okey_xx` = 4.56\n  AND\n    /* Replace with a ENUM('Call','Put','Pair') */ \n    `okey_cp` = 'Call'\n  AND\n    /* Replace with a ENUM('None','AMEX','BOX','CBOE','ISE','NYSE','PHLX','NSDQ','BATS','C2','NQBX','MIAX','GMNI','CME','CBOT','NYMEX','COMEX','ICE','EDGO','MCRY','MPRL','SDRK','DQTE','EMLD','CFE','MEMX','SPHR','EUREX','CEDX','NXAM','NXBR','NXLS','NXML','NXOS','NXP','ICEFE') */ \n    `prtExch` = 'None'\n  AND\n    /* Replace with a ENUM('None','Buy','Sell') */ \n    `prtSide` = 'None'\n  AND\n    /* Replace with a ENUM('None','CANC','OSEQ','CNCL','LATE','CNCO','OPEN','CNOL','OPNL','AUTO','REOP','ISOI','SLAN','SLAI','SLCN','SCLI','SLFT','MLET','MLAT','MLCT','MLFT','MESL','TLAT','MASL','MFSL','TLET','TLCT','TLFT','TESL','TASL','TFSL','CBMO','MCTP','EXHT') */ \n    `prtType` = 'None'\n  AND\n    /* Replace with a DATE */\n    `tradingPeriod` = '2022-01-01';\n"})}),"\n",(0,d.jsx)(n.h3,{id:"doc-columns-query",children:"Doc Columns Query"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-sql",children:"SELECT * FROM SRAnalytics.doccolumns WHERE TABLE_NAME='OptionPrintSetSummary' ORDER BY ordinal_position ASC;\n"})})]})}function a(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(x,{...e})}):x(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>c});var d=t(96540);const r={},s=d.createContext(r);function i(e){const n=d.useContext(s);return d.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),d.createElement(s.Provider,{value:n},e.children)}}}]);