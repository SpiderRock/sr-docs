"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[34573],{7209:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>d,default:()=>x,frontMatter:()=>i,metadata:()=>c,toc:()=>h});var r=n(74848),s=n(28453);const i={},d=void 0,c={id:"MessageSchemas/Schema/SRSE Products/SRLive/StockPrint/StockPrint",title:"StockPrint",description:"V8 Message Definiton",source:"@site/versioned_docs/version-8.5.3.1/MessageSchemas/Schema/SRSE Products/SRLive/StockPrint/StockPrint.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRLive/StockPrint",slug:"/MessageSchemas/Schema/SRSE Products/SRLive/StockPrint/",permalink:"/docs/8.5.3.1/MessageSchemas/Schema/SRSE Products/SRLive/StockPrint/",draft:!1,unlisted:!1,tags:[],version:"8.5.3.1",frontMatter:{},sidebar:"messageSchemasSidebar",previous:{title:"StockOpenMark",permalink:"/docs/8.5.3.1/MessageSchemas/Schema/SRSE Products/SRLive/StockOpenMark/"},next:{title:"StockPrintProbability",permalink:"/docs/8.5.3.1/MessageSchemas/Schema/SRSE Products/SRLive/StockPrintProbability/"}},l={},h=[{value:"METADATA",id:"metadata",level:3},{value:"Table Definition",id:"table-definition",level:3},{value:"PRIMARY KEY DEFINITION (Unique)",id:"primary-key-definition-unique",level:3},{value:"CREATE TABLE EXAMPLE QUERY",id:"create-table-example-query",level:3},{value:"SELECT TABLE EXAMPLE QUERY",id:"select-table-example-query",level:3},{value:"Doc Columns Query",id:"doc-columns-query",level:3}];function a(e){const t={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"../../../Topics/market-data-stock/StockPrint",children:"V8 Message Definiton"})}),"\n",(0,r.jsx)(t.p,{children:"The most recent (last) print record for CTS/UTDF markets as well as SpiderRock synthetic markets.  Records also incorporate some summary detail and closing mark information as well."}),"\n",(0,r.jsx)(t.h3,{id:"metadata",children:"METADATA"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Attribute"}),(0,r.jsx)(t.th,{children:"Value"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Topic"}),(0,r.jsx)(t.td,{children:"2990-market-data-stock"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"MLink Token"}),(0,r.jsx)(t.td,{children:"EqtMktData"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Product"}),(0,r.jsx)(t.td,{children:"SRLive"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"accessType"}),(0,r.jsx)(t.td,{children:"SELECT"})]})]})]}),"\n",(0,r.jsx)(t.h3,{id:"table-definition",children:"Table Definition"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Field"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Key"}),(0,r.jsx)(t.th,{children:"Default Value"}),(0,r.jsx)(t.th,{children:"Comment"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"ticker_at"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"../../../Enums/AssetType",children:"enum - AssetType"})}),(0,r.jsx)(t.td,{children:"PRI"}),(0,r.jsx)(t.td,{children:"'None'"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"ticker_ts"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"../../../Enums/TickerSrc",children:"enum - TickerSrc"})}),(0,r.jsx)(t.td,{children:"PRI"}),(0,r.jsx)(t.td,{children:"'None'"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"ticker_tk"}),(0,r.jsx)(t.td,{children:"VARCHAR(12)"}),(0,r.jsx)(t.td,{children:"PRI"}),(0,r.jsx)(t.td,{children:"''"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"prtExch"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"../../../Enums/StkExch",children:"enum - StkExch"})}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"'None'"}),(0,r.jsx)(t.td,{children:"print exch"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"prtSize"}),(0,r.jsx)(t.td,{children:"INT"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"print size"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"prtPrice"}),(0,r.jsx)(t.td,{children:"FLOAT"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"print price level"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"prtClusterNum"}),(0,r.jsx)(t.td,{children:"INT"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"incremental print cluster counter one counter per ticker used to group prints into clusters"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"prtClusterSize"}),(0,r.jsx)(t.td,{children:"INT"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"cumulative size of prints in this sequence prints  same or more aggressive price with less than 25 ms elapsing since first print can span exchanges"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"prtVolume"}),(0,r.jsx)(t.td,{children:"INT"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"cumulative print size today"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"mrkPrice"}),(0,r.jsx)(t.td,{children:"FLOAT"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"last regular market print price"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"clsPrice"}),(0,r.jsx)(t.td,{children:"FLOAT"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"official closing price if available"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"prtType"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"../../../Enums/StkPrintType",children:"enum - StkPrintType"})}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"'None'"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"printCodes"}),(0,r.jsx)(t.td,{children:"VARCHAR(18)"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"''"}),(0,r.jsx)(t.td,{children:"European trade condition codes"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"prtCond1"}),(0,r.jsx)(t.td,{children:"TINYINT UNSIGNED"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"print condition from SIP feed"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"prtCond2"}),(0,r.jsx)(t.td,{children:"TINYINT UNSIGNED"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"prtCond3"}),(0,r.jsx)(t.td,{children:"TINYINT UNSIGNED"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"prtCond4"}),(0,r.jsx)(t.td,{children:"TINYINT UNSIGNED"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"ebid"}),(0,r.jsx)(t.td,{children:"FLOAT"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"exchange bid  print time SIP feed"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"eask"}),(0,r.jsx)(t.td,{children:"FLOAT"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"exchange ask  print time SIP feed"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"ebsz"}),(0,r.jsx)(t.td,{children:"INT"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"exchange bid size"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"easz"}),(0,r.jsx)(t.td,{children:"INT"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"exchange ask size"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"eage"}),(0,r.jsx)(t.td,{children:"FLOAT"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"age of prevailing quote at time of print"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"prtSide"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"../../../Enums/PrtSide",children:"enum - PrtSide"})}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"'None'"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"prtTimestamp"}),(0,r.jsx)(t.td,{children:"BIGINT"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"exchange high precision timestamp if available"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"netTimestamp"}),(0,r.jsx)(t.td,{children:"BIGINT"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"inbound packet PTP timestamp from SR gateway switch usually syncronized with facility grandfather clock"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"timestamp"}),(0,r.jsx)(t.td,{children:"DATETIME(6)"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"'1900-01-01 00:00:00.000000'"}),(0,r.jsx)(t.td,{})]})]})]}),"\n",(0,r.jsx)(t.h3,{id:"primary-key-definition-unique",children:"PRIMARY KEY DEFINITION (Unique)"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Field"}),(0,r.jsx)(t.th,{children:"Sequence"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"ticker_tk"}),(0,r.jsx)(t.td,{children:"1"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"ticker_at"}),(0,r.jsx)(t.td,{children:"2"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"ticker_ts"}),(0,r.jsx)(t.td,{children:"3"})]})]})]}),"\n",(0,r.jsx)(t.h3,{id:"create-table-example-query",children:"CREATE TABLE EXAMPLE QUERY"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sql",children:"CREATE TABLE `SRLive`.`MsgStockPrint` (\n    `ticker_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None',\n    `ticker_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','EUX','ANY','CXE','DXE','NXAM','NXBR','NXLS','NXML','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None',\n    `ticker_tk` VARCHAR(12) NOT NULL DEFAULT '',\n    `prtExch` ENUM('None','AMEX','NQBX','NSX','FNRA','ISE','EDGA','EDGX','CHX','NYSE','ARCA','NSDQ','CBSX','PSX','BTSY','BATS','CBIDX','IEX','OTC','MPRL','LTSE','MEMX','MXIDX','DJIDX','BXE','CXE','DXE','XETRA','NXAM','NXBR','NXLS','NXML','NXOS','NXP') NOT NULL DEFAULT 'None' COMMENT 'print exch',\n    `prtSize` INT NOT NULL DEFAULT 0 COMMENT 'print size',\n    `prtPrice` FLOAT NOT NULL DEFAULT 0 COMMENT 'print price level',\n    `prtClusterNum` INT NOT NULL DEFAULT 0 COMMENT 'incremental print cluster counter (one counter per ticker; used to group prints into clusters)',\n    `prtClusterSize` INT NOT NULL DEFAULT 0 COMMENT 'cumulative size of prints in this sequence (prints @ same or more aggressive price with less than 25 ms elapsing since first print; can span exchanges)',\n    `prtVolume` INT NOT NULL DEFAULT 0 COMMENT 'cumulative print size today',\n    `mrkPrice` FLOAT NOT NULL DEFAULT 0 COMMENT 'last regular market print price',\n    `clsPrice` FLOAT NOT NULL DEFAULT 0 COMMENT 'official closing price (if available)',\n    `prtType` ENUM('None','RegularSequence','OutOfSequence','VolumeOnly','ExtendedHours','OddLot','OddLotExtendedHours') NOT NULL DEFAULT 'None',\n    `printCodes` VARCHAR(18) NOT NULL DEFAULT '' COMMENT 'European trade condition codes',\n    `prtCond1` TINYINT UNSIGNED NOT NULL DEFAULT 0 COMMENT 'print condition (from SIP feed)',\n    `prtCond2` TINYINT UNSIGNED NOT NULL DEFAULT 0,\n    `prtCond3` TINYINT UNSIGNED NOT NULL DEFAULT 0,\n    `prtCond4` TINYINT UNSIGNED NOT NULL DEFAULT 0,\n    `ebid` FLOAT NOT NULL DEFAULT 0 COMMENT 'exchange bid (@ print time) [SIP feed]',\n    `eask` FLOAT NOT NULL DEFAULT 0 COMMENT 'exchange ask (@ print time) [SIP feed]',\n    `ebsz` INT NOT NULL DEFAULT 0 COMMENT 'exchange bid size',\n    `easz` INT NOT NULL DEFAULT 0 COMMENT 'exchange ask size',\n    `eage` FLOAT NOT NULL DEFAULT 0 COMMENT 'age of prevailing quote at time of print',\n    `prtSide` ENUM('None','Mid','Bid','Ask') NOT NULL DEFAULT 'None',\n    `prtTimestamp` BIGINT NOT NULL DEFAULT 0 COMMENT 'exchange high precision timestamp (if available)',\n    `netTimestamp` BIGINT NOT NULL DEFAULT 0 COMMENT 'inbound packet PTP timestamp from SR gateway switch; usually syncronized with facility grandfather clock',\n    `timestamp` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000',\n    PRIMARY KEY USING HASH (`ticker_tk`,`ticker_at`,`ticker_ts`)\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='The most recent (last) print record for CTS/UTDF markets as well as SpiderRock synthetic markets.  Records also incorporate some summary detail and closing mark information as well.';\n\n"})}),"\n",(0,r.jsx)(t.h3,{id:"select-table-example-query",children:"SELECT TABLE EXAMPLE QUERY"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sql",children:"SELECT\n    `ticker_at`,\n    `ticker_ts`,\n    `ticker_tk`,\n    `prtExch`,\n    `prtSize`,\n    `prtPrice`,\n    `prtClusterNum`,\n    `prtClusterSize`,\n    `prtVolume`,\n    `mrkPrice`,\n    `clsPrice`,\n    `prtType`,\n    `printCodes`,\n    `prtCond1`,\n    `prtCond2`,\n    `prtCond3`,\n    `prtCond4`,\n    `ebid`,\n    `eask`,\n    `ebsz`,\n    `easz`,\n    `eage`,\n    `prtSide`,\n    `prtTimestamp`,\n    `netTimestamp`,\n    `timestamp`\nFROM `SRLive`.`MsgStockPrint`\nWHERE \n    /* Replace with a ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') */ \n    `ticker_at` = 'None'\n  AND\n    /* Replace with a ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','EUX','ANY','CXE','DXE','NXAM','NXBR','NXLS','NXML','NXOS','NXP','EUREX','CEDX','ICEFE') */ \n    `ticker_ts` = 'None'\n  AND\n    /* Replace with a VARCHAR(12) */ \n    `ticker_tk` = 'Example_ticker_tk';\n"})}),"\n",(0,r.jsx)(t.h3,{id:"doc-columns-query",children:"Doc Columns Query"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sql",children:"SELECT * FROM SRLive.doccolumns WHERE TABLE_NAME='StockPrint' ORDER BY ordinal_position ASC;\n"})})]})}function x(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>d,x:()=>c});var r=n(96540);const s={},i=r.createContext(s);function d(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);