"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[47633],{22593:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>x,frontMatter:()=>s,metadata:()=>c,toc:()=>a});var t=r(74848),i=r(28453);const s={},d=void 0,c={id:"MessageSchemas/Schema/SRSE Products/SRRisk/SymbolMarginSummaryV5/SymbolMarginSummaryV5",title:"SymbolMarginSummaryV5",description:"V8 Message Definiton",source:"@site/docs/MessageSchemas/Schema/SRSE Products/SRRisk/SymbolMarginSummaryV5/SymbolMarginSummaryV5.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRRisk/SymbolMarginSummaryV5",slug:"/MessageSchemas/Schema/SRSE Products/SRRisk/SymbolMarginSummaryV5/",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRRisk/SymbolMarginSummaryV5/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"messageSchemasSidebar",previous:{title:"StockPositionRecordV5",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRRisk/StockPositionRecordV5/"},next:{title:"SymbolRiskDetailV5",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRRisk/SymbolRiskDetailV5/"}},l={},a=[{value:"METADATA",id:"metadata",level:3},{value:"Table Definition",id:"table-definition",level:3},{value:"PRIMARY KEY DEFINITION (Unique)",id:"primary-key-definition-unique",level:3},{value:"CREATE TABLE EXAMPLE QUERY",id:"create-table-example-query",level:3},{value:"SELECT TABLE EXAMPLE QUERY",id:"select-table-example-query",level:3}];function h(e){const n={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"../../../Topics/risk-v5/SymbolMarginSummaryV5",children:"V8 Message Definiton"})}),"\n",(0,t.jsx)(n.p,{children:"SymbolMarginSummary records are published by the AggRiskServers and consumed by execution engines"}),"\n",(0,t.jsx)(n.h3,{id:"metadata",children:"METADATA"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Attribute"}),(0,t.jsx)(n.th,{children:"Value"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Topic"}),(0,t.jsx)(n.td,{children:"4740-risk-v5"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"MLink Token"}),(0,t.jsx)(n.td,{children:"SystemData"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Product"}),(0,t.jsx)(n.td,{children:"SRRisk"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"accessType"}),(0,t.jsx)(n.td,{children:"SELECT"})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"table-definition",children:"Table Definition"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Field"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Key"}),(0,t.jsx)(n.th,{children:"Default Value"}),(0,t.jsx)(n.th,{children:"Comment"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"ticker_at"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"../../../Enums/AssetType",children:"enum - AssetType"})}),(0,t.jsx)(n.td,{children:"PRI"}),(0,t.jsx)(n.td,{children:"'None'"}),(0,t.jsx)(n.td,{children:"stock ticker eg MSFT SPY"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"ticker_ts"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"../../../Enums/TickerSrc",children:"enum - TickerSrc"})}),(0,t.jsx)(n.td,{children:"PRI"}),(0,t.jsx)(n.td,{children:"'None'"}),(0,t.jsx)(n.td,{children:"stock ticker eg MSFT SPY"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"ticker_tk"}),(0,t.jsx)(n.td,{children:"VARCHAR(12)"}),(0,t.jsx)(n.td,{children:"PRI"}),(0,t.jsx)(n.td,{children:"''"}),(0,t.jsx)(n.td,{children:"stock ticker eg MSFT SPY"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"accnt"}),(0,t.jsx)(n.td,{children:"VARCHAR(16)"}),(0,t.jsx)(n.td,{children:"PRI"}),(0,t.jsx)(n.td,{children:"''"}),(0,t.jsx)(n.td,{children:"SRAccnt SR assignedup to 16 chars"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"tradeDate"}),(0,t.jsx)(n.td,{children:"DATE"}),(0,t.jsx)(n.td,{children:"PRI"}),(0,t.jsx)(n.td,{children:"'1900-01-01'"}),(0,t.jsx)(n.td,{children:"current live period trading date"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"clientFirm"}),(0,t.jsx)(n.td,{children:"VARCHAR(16)"}),(0,t.jsx)(n.td,{children:"PRI"}),(0,t.jsx)(n.td,{children:"''"}),(0,t.jsx)(n.td,{children:"SR assigned client firm"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"riskServerCode"}),(0,t.jsx)(n.td,{children:"VARCHAR(6)"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"''"}),(0,t.jsx)(n.td,{children:"SR risk server code that published this record"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"marginUDnVDn"}),(0,t.jsx)(n.td,{children:"FLOAT"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"0"}),(0,t.jsx)(n.td,{children:"Margin uPrc Dn  Vol Dn"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"marginUDnVUp"}),(0,t.jsx)(n.td,{children:"FLOAT"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"0"}),(0,t.jsx)(n.td,{children:"Margin uPrc Dn  Vol Up"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"marginUUpVDn"}),(0,t.jsx)(n.td,{children:"FLOAT"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"0"}),(0,t.jsx)(n.td,{children:"Margin uPrc Up  Vol Dn"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"marginUUpVUp"}),(0,t.jsx)(n.td,{children:"FLOAT"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"0"}),(0,t.jsx)(n.td,{children:"Margin uPrc Up  Vol Up"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"timestamp"}),(0,t.jsx)(n.td,{children:"DATETIME(6)"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"'1900-01-01 00:00:00.000000'"}),(0,t.jsx)(n.td,{})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"primary-key-definition-unique",children:"PRIMARY KEY DEFINITION (Unique)"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Field"}),(0,t.jsx)(n.th,{children:"Sequence"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"ticker_tk"}),(0,t.jsx)(n.td,{children:"1"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"ticker_at"}),(0,t.jsx)(n.td,{children:"2"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"ticker_ts"}),(0,t.jsx)(n.td,{children:"3"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"accnt"}),(0,t.jsx)(n.td,{children:"4"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"tradeDate"}),(0,t.jsx)(n.td,{children:"5"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"clientFirm"}),(0,t.jsx)(n.td,{children:"6"})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"create-table-example-query",children:"CREATE TABLE EXAMPLE QUERY"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"CREATE TABLE `SRRisk`.`MsgSymbolMarginSummaryV5` (\n    `ticker_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None' COMMENT 'stock ticker (eg MSFT, SPY)',\n    `ticker_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','ESX','ANY','CXE','DXE','NXAM','NXBR','NXDUB','NXLS','NXLDN','NXML','NXMLT','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None' COMMENT 'stock ticker (eg MSFT, SPY)',\n    `ticker_tk` VARCHAR(12) NOT NULL DEFAULT '' COMMENT 'stock ticker (eg MSFT, SPY)',\n    `accnt` VARCHAR(16) NOT NULL DEFAULT '' COMMENT 'SRAccnt (SR assigned;up to 16 chars)',\n    `tradeDate` DATE NOT NULL DEFAULT '1900-01-01' COMMENT 'current [live] period trading date',\n    `clientFirm` VARCHAR(16) NOT NULL DEFAULT '' COMMENT 'SR assigned client firm',\n    `riskServerCode` VARCHAR(6) NOT NULL DEFAULT '' COMMENT 'SR risk server code that published this record',\n    `marginUDnVDn` FLOAT NOT NULL DEFAULT 0 COMMENT 'Margin: uPrc Dn / Vol Dn',\n    `marginUDnVUp` FLOAT NOT NULL DEFAULT 0 COMMENT 'Margin: uPrc Dn / Vol Up',\n    `marginUUpVDn` FLOAT NOT NULL DEFAULT 0 COMMENT 'Margin: uPrc Up / Vol Dn',\n    `marginUUpVUp` FLOAT NOT NULL DEFAULT 0 COMMENT 'Margin: uPrc Up / Vol Up',\n    `timestamp` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000',\n    PRIMARY KEY USING HASH (`ticker_tk`,`ticker_at`,`ticker_ts`,`accnt`,`tradeDate`,`clientFirm`)\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='SymbolMarginSummary records are published by the AggRiskServers and consumed by execution engines';\n\n"})}),"\n",(0,t.jsx)(n.h3,{id:"select-table-example-query",children:"SELECT TABLE EXAMPLE QUERY"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"SELECT\n    `ticker_at`,\n    `ticker_ts`,\n    `ticker_tk`,\n    `accnt`,\n    `tradeDate`,\n    `clientFirm`,\n    `riskServerCode`,\n    `marginUDnVDn`,\n    `marginUDnVUp`,\n    `marginUUpVDn`,\n    `marginUUpVUp`,\n    `timestamp`\nFROM `SRRisk`.`MsgSymbolMarginSummaryV5`\nWHERE \n    /* Replace with a ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') */ \n    `ticker_at` = 'None'\n  AND\n    /* Replace with a ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','ESX','ANY','CXE','DXE','NXAM','NXBR','NXDUB','NXLS','NXLDN','NXML','NXMLT','NXOS','NXP','EUREX','CEDX','ICEFE') */ \n    `ticker_ts` = 'None'\n  AND\n    /* Replace with a VARCHAR(12) */ \n    `ticker_tk` = 'Example_ticker_tk'\n  AND\n    /* Replace with a VARCHAR(16) */ \n    `accnt` = 'Example_accnt'\n  AND\n    /* Replace with a DATE */\n    `tradeDate` = '2022-01-01'\n  AND\n    /* Replace with a VARCHAR(16) */ \n    `clientFirm` = 'Example_clientFirm';\n"})})]})}function x(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>d,x:()=>c});var t=r(96540);const i={},s=t.createContext(i);function d(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);