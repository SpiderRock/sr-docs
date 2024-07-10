"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[23280],{54636:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>d,default:()=>x,frontMatter:()=>n,metadata:()=>c,toc:()=>h});var s=r(74848),i=r(28453);const n={},d=void 0,c={id:"MessageSchemas/Schema/SRSE Products/SRAnalytics/StockPrintMarkup/StockPrintMarkup",title:"StockPrintMarkup",description:"V8 Message Definiton",source:"@site/docs/MessageSchemas/Schema/SRSE Products/SRAnalytics/StockPrintMarkup/StockPrintMarkup.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRAnalytics/StockPrintMarkup",slug:"/MessageSchemas/Schema/SRSE Products/SRAnalytics/StockPrintMarkup/",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRAnalytics/StockPrintMarkup/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"messageSchemasSidebar",previous:{title:"StockOpenMark",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRAnalytics/StockOpenMark/"},next:{title:"StockPrintProbability",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRAnalytics/StockPrintProbability/"}},l={},h=[{value:"METADATA",id:"metadata",level:3},{value:"Table Definition",id:"table-definition",level:3},{value:"PRIMARY KEY DEFINITION (Unique)",id:"primary-key-definition-unique",level:3},{value:"CREATE TABLE QUERY",id:"create-table-query",level:3}];function a(e){const t={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"../../../Topics/market-data-stock/StockPrintMarkup",children:"V8 Message Definiton"})}),"\n",(0,s.jsx)(t.p,{children:"StockPrintMarkup records are created/published for all stock prints"}),"\n",(0,s.jsx)(t.h3,{id:"metadata",children:"METADATA"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Attribute"}),(0,s.jsx)(t.th,{children:"Value"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Topic"}),(0,s.jsx)(t.td,{children:"2990-market-data-stock"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"MLink Token"}),(0,s.jsx)(t.td,{children:"SystemData"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Product"}),(0,s.jsx)(t.td,{children:"SRAnalytics"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"accessType"}),(0,s.jsx)(t.td,{children:"SELECT"})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"table-definition",children:"Table Definition"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Field"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Key"}),(0,s.jsx)(t.th,{children:"Comment"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"ticker_at"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"../../../Enums/AssetType",children:"enum - AssetType"})}),(0,s.jsx)(t.td,{children:"PRI"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"ticker_ts"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"../../../Enums/TickerSrc",children:"enum - TickerSrc"})}),(0,s.jsx)(t.td,{children:"PRI"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"ticker_tk"}),(0,s.jsx)(t.td,{children:"VARCHAR(12)"}),(0,s.jsx)(t.td,{children:"PRI"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"prtNumber"}),(0,s.jsx)(t.td,{children:"BIGINT"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"prtExch"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"../../../Enums/StkExch",children:"enum - StkExch"})}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"print exch"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"prtSize"}),(0,s.jsx)(t.td,{children:"INT"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"print size"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"prtPrice"}),(0,s.jsx)(t.td,{children:"FLOAT"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"print price level"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"prtClusterNum"}),(0,s.jsx)(t.td,{children:"INT"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"incremental print cluster counter one counter per ticker used to group prints into clusters"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"prtClusterSize"}),(0,s.jsx)(t.td,{children:"INT"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"cumulative size of prints in this sequence prints  same or more aggressive price with less than 25 ms elapsing since first print can span exchanges"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"prtVolume"}),(0,s.jsx)(t.td,{children:"INT"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"cumulative print size today"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"mrkPrice"}),(0,s.jsx)(t.td,{children:"FLOAT"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"last regular market print price"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"prtType"}),(0,s.jsx)(t.td,{children:"TINYINT UNSIGNED"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"OPRA message type from OPRA spec"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"prtCond1"}),(0,s.jsx)(t.td,{children:"TINYINT UNSIGNED"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"print condition from SIP feed"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"prtCond2"}),(0,s.jsx)(t.td,{children:"TINYINT UNSIGNED"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"prtCond3"}),(0,s.jsx)(t.td,{children:"TINYINT UNSIGNED"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"prtCond4"}),(0,s.jsx)(t.td,{children:"TINYINT UNSIGNED"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"prtSide"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"../../../Enums/PrtSide",children:"enum - PrtSide"})}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"Print side None Mid Bid Ask"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"bidPrice"}),(0,s.jsx)(t.td,{children:"FLOAT"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"nbbo bid  print arrival time"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"askPrice"}),(0,s.jsx)(t.td,{children:"FLOAT"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"nbbo ask  print arrival time"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"bidSize"}),(0,s.jsx)(t.td,{children:"INT"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"askSize"}),(0,s.jsx)(t.td,{children:"INT"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"bidPrice2"}),(0,s.jsx)(t.td,{children:"FLOAT"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"nbbo 2nd best bid  print arrival time"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"askPrice2"}),(0,s.jsx)(t.td,{children:"FLOAT"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"nbbo 2nd best ask  print arrival time"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"bidSize2"}),(0,s.jsx)(t.td,{children:"INT"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"nbbo 2nd best bid size"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"askSize2"}),(0,s.jsx)(t.td,{children:"INT"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"nbbo 2nd best ask size"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"srcTimestamp"}),(0,s.jsx)(t.td,{children:"BIGINT"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"exchange high precision timestamp if available"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"netTimestamp"}),(0,s.jsx)(t.td,{children:"BIGINT"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"inbound print packet PTP timestamp from SR gateway switch"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"timestamp"}),(0,s.jsx)(t.td,{children:"DATETIME(6)"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"primary-key-definition-unique",children:"PRIMARY KEY DEFINITION (Unique)"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Field"}),(0,s.jsx)(t.th,{children:"Sequence"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"ticker_tk"}),(0,s.jsx)(t.td,{children:"1"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"ticker_at"}),(0,s.jsx)(t.td,{children:"2"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"ticker_ts"}),(0,s.jsx)(t.td,{children:"3"})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"create-table-query",children:"CREATE TABLE QUERY"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sql",children:"CREATE TABLE `SRAnalytics`.`MsgStockPrintMarkup` (\n    `ticker_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None',\n    `ticker_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','ESX','ANY','CXE','DXE','NXAM','NXBR','NXDUB','NXLS','NXLDN','NXML','NXMLT','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None',\n    `ticker_tk` VARCHAR(12) NOT NULL DEFAULT '',\n    `prtNumber` BIGINT NOT NULL DEFAULT 0,\n    `prtExch` ENUM('None','AMEX','NQBX','NSX','FNRA','ISE','EDGA','EDGX','CHX','NYSE','ARCA','NSDQ','CBSX','PSX','BTSY','BATS','CBIDX','IEX','OTC','MPRL','LTSE','MEMX','MXIDX','DJIDX','BXE','CXE','DXE','XETRA','NXAM','NXBR','NXDUB','NXLS','NXLDN','NXML','NXMLT','NXOS','NXP') NOT NULL DEFAULT 'None' COMMENT 'print exch',\n    `prtSize` INT NOT NULL DEFAULT 0 COMMENT 'print size',\n    `prtPrice` FLOAT NOT NULL DEFAULT 0 COMMENT 'print price level',\n    `prtClusterNum` INT NOT NULL DEFAULT 0 COMMENT 'incremental print cluster counter (one counter per ticker; used to group prints into clusters)',\n    `prtClusterSize` INT NOT NULL DEFAULT 0 COMMENT 'cumulative size of prints in this sequence (prints @ same or more aggressive price with less than 25 ms elapsing since first print; can span exchanges)',\n    `prtVolume` INT NOT NULL DEFAULT 0 COMMENT 'cumulative print size today',\n    `mrkPrice` FLOAT NOT NULL DEFAULT 0 COMMENT 'last regular market print price',\n    `prtType` TINYINT UNSIGNED NOT NULL DEFAULT 0 COMMENT 'OPRA message type (from OPRA spec)',\n    `prtCond1` TINYINT UNSIGNED NOT NULL DEFAULT 0 COMMENT 'print condition (from SIP feed)',\n    `prtCond2` TINYINT UNSIGNED NOT NULL DEFAULT 0,\n    `prtCond3` TINYINT UNSIGNED NOT NULL DEFAULT 0,\n    `prtCond4` TINYINT UNSIGNED NOT NULL DEFAULT 0,\n    `prtSide` ENUM('None','Mid','Bid','Ask') NOT NULL DEFAULT 'None' COMMENT 'Print side: None; Mid; Bid; Ask',\n    `bidPrice` FLOAT NOT NULL DEFAULT 0 COMMENT 'nbbo bid @ print arrival time',\n    `askPrice` FLOAT NOT NULL DEFAULT 0 COMMENT 'nbbo ask @ print arrival time',\n    `bidSize` INT NOT NULL DEFAULT 0,\n    `askSize` INT NOT NULL DEFAULT 0,\n    `bidPrice2` FLOAT NOT NULL DEFAULT 0 COMMENT 'nbbo 2nd best bid @ print arrival time',\n    `askPrice2` FLOAT NOT NULL DEFAULT 0 COMMENT 'nbbo 2nd best ask @ print arrival time',\n    `bidSize2` INT NOT NULL DEFAULT 0 COMMENT 'nbbo 2nd best bid size',\n    `askSize2` INT NOT NULL DEFAULT 0 COMMENT 'nbbo 2nd best ask size',\n    `srcTimestamp` BIGINT NOT NULL DEFAULT 0 COMMENT 'exchange high precision timestamp (if available)',\n    `netTimestamp` BIGINT NOT NULL DEFAULT 0 COMMENT 'inbound print packet PTP timestamp from SR gateway switch',\n    `timestamp` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000',\n    PRIMARY KEY USING HASH (`ticker_tk`,`ticker_at`,`ticker_ts`)\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='StockPrintMarkup records are created/published for all stock prints';\n\n"})})]})}function x(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},28453:(e,t,r)=>{r.d(t,{R:()=>d,x:()=>c});var s=r(96540);const i={},n=s.createContext(i);function d(e){const t=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),s.createElement(n.Provider,{value:t},e.children)}}}]);