"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[69622],{43847:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>x,frontMatter:()=>d,metadata:()=>i,toc:()=>l});var n=s(74848),r=s(28453);const d={},c=void 0,i={id:"MessageSchemas/Schema/SRSE Products/SRAnalytics/StockBeta/StockBeta",title:"StockBeta",description:"V8 Message Definiton",source:"@site/versioned_docs/version-8.4.12.1/MessageSchemas/Schema/SRSE Products/SRAnalytics/StockBeta/StockBeta.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRAnalytics/StockBeta",slug:"/MessageSchemas/Schema/SRSE Products/SRAnalytics/StockBeta/",permalink:"/docs/8.4.12.1/MessageSchemas/Schema/SRSE Products/SRAnalytics/StockBeta/",draft:!1,unlisted:!1,tags:[],version:"8.4.12.1",frontMatter:{},sidebar:"messageSchemasSidebar",previous:{title:"SpreadOpenMark",permalink:"/docs/8.4.12.1/MessageSchemas/Schema/SRSE Products/SRAnalytics/SpreadOpenMark/"},next:{title:"StockBetaExt",permalink:"/docs/8.4.12.1/MessageSchemas/Schema/SRSE Products/SRAnalytics/StockBetaExt/"}},a={},l=[{value:"METADATA",id:"metadata",level:3},{value:"Table Definition",id:"table-definition",level:3},{value:"PRIMARY KEY DEFINITION (Unique)",id:"primary-key-definition-unique",level:3},{value:"CREATE TABLE EXAMPLE QUERY",id:"create-table-example-query",level:3},{value:"SELECT TABLE EXAMPLE QUERY",id:"select-table-example-query",level:3},{value:"Doc Columns Query",id:"doc-columns-query",level:3}];function h(e){const t={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"../../../Topics/market-statistics/StockBeta",children:"V8 Message Definiton"})}),"\n",(0,n.jsx)(t.p,{children:"Beta values are computed weekly for a few different ETFs."}),"\n",(0,n.jsx)(t.h3,{id:"metadata",children:"METADATA"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Attribute"}),(0,n.jsx)(t.th,{children:"Value"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Topic"}),(0,n.jsx)(t.td,{children:"3225-market-statistics"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"MLink Token"}),(0,n.jsx)(t.td,{children:"OptAnalytics"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Product"}),(0,n.jsx)(t.td,{children:"SRAnalytics"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"accessType"}),(0,n.jsx)(t.td,{children:"SELECT"})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"table-definition",children:"Table Definition"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Field"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Key"}),(0,n.jsx)(t.th,{children:"Default Value"}),(0,n.jsx)(t.th,{children:"Comment"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"ticker_at"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"../../../Enums/AssetType",children:"enum - AssetType"})}),(0,n.jsx)(t.td,{children:"PRI"}),(0,n.jsx)(t.td,{children:"'None'"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"ticker_ts"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"../../../Enums/TickerSrc",children:"enum - TickerSrc"})}),(0,n.jsx)(t.td,{children:"PRI"}),(0,n.jsx)(t.td,{children:"'None'"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"ticker_tk"}),(0,n.jsx)(t.td,{children:"VARCHAR(12)"}),(0,n.jsx)(t.td,{children:"PRI"}),(0,n.jsx)(t.td,{children:"''"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"status"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"../../../Enums/BetaStatus",children:"enum - BetaStatus"})}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"'None'"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"beta"}),(0,n.jsx)(t.td,{children:"FLOAT"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"0"}),(0,n.jsx)(t.td,{children:"depricate"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"betaInd"}),(0,n.jsx)(t.td,{children:"FLOAT"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"0"}),(0,n.jsx)(t.td,{children:"SR beta to IND"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"betaSub"}),(0,n.jsx)(t.td,{children:"FLOAT"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"0"}),(0,n.jsx)(t.td,{children:"SR beta to SUB"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"betaGrp"}),(0,n.jsx)(t.td,{children:"FLOAT"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"0"}),(0,n.jsx)(t.td,{children:"SR beta to GRP"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"betaQQQ"}),(0,n.jsx)(t.td,{children:"FLOAT"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"0"}),(0,n.jsx)(t.td,{children:"SR beta to QQQ 2 year weekly fri  fri"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"betaSPY"}),(0,n.jsx)(t.td,{children:"FLOAT"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"0"}),(0,n.jsx)(t.td,{children:"SR beta to SPY 2 year weekly fri  fri"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"betaIWM"}),(0,n.jsx)(t.td,{children:"FLOAT"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"0"}),(0,n.jsx)(t.td,{children:"SR beta to IWM 2 year weekly fri  fri"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"timestamp"}),(0,n.jsx)(t.td,{children:"DATETIME(6)"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"'1900-01-01 00:00:00.000000'"}),(0,n.jsx)(t.td,{children:"record update timestamp"})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"primary-key-definition-unique",children:"PRIMARY KEY DEFINITION (Unique)"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Field"}),(0,n.jsx)(t.th,{children:"Sequence"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"ticker_tk"}),(0,n.jsx)(t.td,{children:"1"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"ticker_at"}),(0,n.jsx)(t.td,{children:"2"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"ticker_ts"}),(0,n.jsx)(t.td,{children:"3"})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"create-table-example-query",children:"CREATE TABLE EXAMPLE QUERY"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sql",children:"CREATE TABLE `SRAnalytics`.`MsgStockBeta` (\n    `ticker_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None',\n    `ticker_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','EUX','ANY','CXE','DXE','NXAM','NXBR','NXLS','NXML','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None',\n    `ticker_tk` VARCHAR(12) NOT NULL DEFAULT '',\n    `status` ENUM('None','InsuffPrcPts','Ok') NOT NULL DEFAULT 'None',\n    `beta` FLOAT NOT NULL DEFAULT 0 COMMENT '(depricate)',\n    `betaInd` FLOAT NOT NULL DEFAULT 0 COMMENT 'SR beta to IND',\n    `betaSub` FLOAT NOT NULL DEFAULT 0 COMMENT 'SR beta to SUB',\n    `betaGrp` FLOAT NOT NULL DEFAULT 0 COMMENT 'SR beta to GRP',\n    `betaQQQ` FLOAT NOT NULL DEFAULT 0 COMMENT 'SR beta to QQQ [2 year; weekly (fri - fri)]',\n    `betaSPY` FLOAT NOT NULL DEFAULT 0 COMMENT 'SR beta to SPY [2 year; weekly (fri - fri)]',\n    `betaIWM` FLOAT NOT NULL DEFAULT 0 COMMENT 'SR beta to IWM [2 year; weekly (fri - fri)]',\n    `timestamp` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000' COMMENT 'record update timestamp',\n    PRIMARY KEY USING HASH (`ticker_tk`,`ticker_at`,`ticker_ts`)\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='Beta values are computed weekly for a few different ETFs.';\n\n"})}),"\n",(0,n.jsx)(t.h3,{id:"select-table-example-query",children:"SELECT TABLE EXAMPLE QUERY"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sql",children:"SELECT\n    `ticker_at`,\n    `ticker_ts`,\n    `ticker_tk`,\n    `status`,\n    `beta`,\n    `betaInd`,\n    `betaSub`,\n    `betaGrp`,\n    `betaQQQ`,\n    `betaSPY`,\n    `betaIWM`,\n    `timestamp`\nFROM `SRAnalytics`.`MsgStockBeta`\nWHERE \n    /* Replace with a ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') */ \n    `ticker_at` = 'None'\n  AND\n    /* Replace with a ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','EUX','ANY','CXE','DXE','NXAM','NXBR','NXLS','NXML','NXOS','NXP','EUREX','CEDX','ICEFE') */ \n    `ticker_ts` = 'None'\n  AND\n    /* Replace with a VARCHAR(12) */ \n    `ticker_tk` = 'Example_ticker_tk';\n"})}),"\n",(0,n.jsx)(t.h3,{id:"doc-columns-query",children:"Doc Columns Query"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sql",children:"SELECT * FROM SRAnalytics.doccolumns WHERE TABLE_NAME='StockBeta' ORDER BY ordinal_position ASC;\n"})})]})}function x(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>c,x:()=>i});var n=s(96540);const r={},d=n.createContext(r);function c(e){const t=n.useContext(d);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),n.createElement(d.Provider,{value:t},e.children)}}}]);