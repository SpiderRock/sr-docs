"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[9041],{71001:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>o,frontMatter:()=>d,metadata:()=>c,toc:()=>a});var t=s(74848),n=s(28453);const d={},i=void 0,c={id:"MessageSchemas/Schema/SRSE Products/SRLive/StockCloseMark/StockCloseMark",title:"StockCloseMark",description:"V8 Message Definiton",source:"@site/versioned_docs/version-8.5.1.3/MessageSchemas/Schema/SRSE Products/SRLive/StockCloseMark/StockCloseMark.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRLive/StockCloseMark",slug:"/MessageSchemas/Schema/SRSE Products/SRLive/StockCloseMark/",permalink:"/docs/8.5.1.3/MessageSchemas/Schema/SRSE Products/SRLive/StockCloseMark/",draft:!1,unlisted:!1,tags:[],version:"8.5.1.3",frontMatter:{},sidebar:"messageSchemasSidebar",previous:{title:"StockBookQuote",permalink:"/docs/8.5.1.3/MessageSchemas/Schema/SRSE Products/SRLive/StockBookQuote/"},next:{title:"StockExchImbalance",permalink:"/docs/8.5.1.3/MessageSchemas/Schema/SRSE Products/SRLive/StockExchImbalance/"}},l={},a=[{value:"METADATA",id:"metadata",level:3},{value:"Table Definition",id:"table-definition",level:3},{value:"PRIMARY KEY DEFINITION (Unique)",id:"primary-key-definition-unique",level:3},{value:"CREATE TABLE EXAMPLE QUERY",id:"create-table-example-query",level:3},{value:"SELECT TABLE EXAMPLE QUERY",id:"select-table-example-query",level:3},{value:"Doc Columns Query",id:"doc-columns-query",level:3}];function h(e){const r={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.p,{children:(0,t.jsx)(r.a,{href:"../../../Topics/market-marks/StockCloseMark",children:"V8 Message Definiton"})}),"\n",(0,t.jsx)(r.p,{children:"StockCloseMark records are published immediately after the market close - 5 min and again when exchanges publish official marks.\nStockCloseMark records are published to the SpiderRock elastic cluster when clsMarkState=Final"}),"\n",(0,t.jsx)(r.h3,{id:"metadata",children:"METADATA"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Attribute"}),(0,t.jsx)(r.th,{children:"Value"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Topic"}),(0,t.jsx)(r.td,{children:"3120-market-marks"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"MLink Token"}),(0,t.jsx)(r.td,{children:"EqtMarkData"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Product"}),(0,t.jsx)(r.td,{children:"SRLive"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"accessType"}),(0,t.jsx)(r.td,{children:"SELECT"})]})]})]}),"\n",(0,t.jsx)(r.h3,{id:"table-definition",children:"Table Definition"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Field"}),(0,t.jsx)(r.th,{children:"Type"}),(0,t.jsx)(r.th,{children:"Key"}),(0,t.jsx)(r.th,{children:"Default Value"}),(0,t.jsx)(r.th,{children:"Comment"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"ticker_at"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../../Enums/AssetType",children:"enum - AssetType"})}),(0,t.jsx)(r.td,{children:"PRI"}),(0,t.jsx)(r.td,{children:"'None'"}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"ticker_ts"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../../Enums/TickerSrc",children:"enum - TickerSrc"})}),(0,t.jsx)(r.td,{children:"PRI"}),(0,t.jsx)(r.td,{children:"'None'"}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"ticker_tk"}),(0,t.jsx)(r.td,{children:"VARCHAR(12)"}),(0,t.jsx)(r.td,{children:"PRI"}),(0,t.jsx)(r.td,{children:"''"}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"tradeDate"}),(0,t.jsx)(r.td,{children:"DATE"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"'1900-01-01'"}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"clsMarkState"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../../Enums/ClsMarkState",children:"enum - ClsMarkState"})}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"'None'"}),(0,t.jsx)(r.td,{children:"Preview or Final"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"opnPrc"}),(0,t.jsx)(r.td,{children:"FLOAT"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"0"}),(0,t.jsx)(r.td,{children:"Open price start of regular hours"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"minPrc"}),(0,t.jsx)(r.td,{children:"FLOAT"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"0"}),(0,t.jsx)(r.td,{children:"Low price during regular hours"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"maxPrc"}),(0,t.jsx)(r.td,{children:"FLOAT"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"0"}),(0,t.jsx)(r.td,{children:"High price during regular hours"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"sharesOutstanding"}),(0,t.jsx)(r.td,{children:"BIGINT"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"0"}),(0,t.jsx)(r.td,{children:"Shares outstanding"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"prtCount"}),(0,t.jsx)(r.td,{children:"INT"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"0"}),(0,t.jsx)(r.td,{children:"Print count entire trading period"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"prtVolume"}),(0,t.jsx)(r.td,{children:"INT"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"0"}),(0,t.jsx)(r.td,{children:"Print volume entire trading period"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"realizedCnt"}),(0,t.jsx)(r.td,{children:"INT"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"0"}),(0,t.jsx)(r.td,{children:"number of minute bar segments used in realizedVar calc"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"realizedVol"}),(0,t.jsx)(r.td,{children:"FLOAT"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"0"}),(0,t.jsx)(r.td,{children:"realizedVol  SQRT SUM LOG qteTwapT  qteTwapT1   2   realizedCnt  1 minute intervals during market hours"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"avgMktSize"}),(0,t.jsx)(r.td,{children:"FLOAT"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"0"}),(0,t.jsx)(r.td,{children:"Average market size"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"avgMktWidth"}),(0,t.jsx)(r.td,{children:"FLOAT"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"0"}),(0,t.jsx)(r.td,{children:"Average market width"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"bidPrc"}),(0,t.jsx)(r.td,{children:"FLOAT"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"0"}),(0,t.jsx)(r.td,{children:"bid price close  5 min"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"askPrc"}),(0,t.jsx)(r.td,{children:"FLOAT"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"0"}),(0,t.jsx)(r.td,{children:"ask price close  5 min"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"srClsPrc"}),(0,t.jsx)(r.td,{children:"FLOAT"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"0"}),(0,t.jsx)(r.td,{children:"SR close mark close  5 min"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"closePrc"}),(0,t.jsx)(r.td,{children:"FLOAT"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"0"}),(0,t.jsx)(r.td,{children:"official exchange closing mark or last print"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"hasSRClsPrc"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../../Enums/YesNo",children:"enum - YesNo"})}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"'None'"}),(0,t.jsx)(r.td,{children:"srClsPrc is valid"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"hasClosePrc"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../../Enums/YesNo",children:"enum - YesNo"})}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"'None'"}),(0,t.jsx)(r.td,{children:"closePrc is valid otherwise is last print"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"srCloseMarkDttm"}),(0,t.jsx)(r.td,{children:"DATETIME(6)"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"'1900-01-01 00:00:00.000000'"}),(0,t.jsx)(r.td,{children:"close  5 min datetime"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"timestamp"}),(0,t.jsx)(r.td,{children:"DATETIME(6)"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"'1900-01-01 00:00:00.000000'"}),(0,t.jsx)(r.td,{children:"record publishupdate timestamp"})]})]})]}),"\n",(0,t.jsx)(r.h3,{id:"primary-key-definition-unique",children:"PRIMARY KEY DEFINITION (Unique)"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Field"}),(0,t.jsx)(r.th,{children:"Sequence"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"ticker_tk"}),(0,t.jsx)(r.td,{children:"1"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"ticker_at"}),(0,t.jsx)(r.td,{children:"2"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"ticker_ts"}),(0,t.jsx)(r.td,{children:"3"})]})]})]}),"\n",(0,t.jsx)(r.h3,{id:"create-table-example-query",children:"CREATE TABLE EXAMPLE QUERY"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-sql",children:"CREATE TABLE `SRLive`.`MsgStockCloseMark` (\n    `ticker_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None',\n    `ticker_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','EUX','ANY','CXE','DXE','NXAM','NXBR','NXLS','NXML','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None',\n    `ticker_tk` VARCHAR(12) NOT NULL DEFAULT '',\n    `tradeDate` DATE NOT NULL DEFAULT '1900-01-01',\n    `clsMarkState` ENUM('None','Preview','Final') NOT NULL DEFAULT 'None' COMMENT 'Preview or Final',\n    `opnPrc` FLOAT NOT NULL DEFAULT 0 COMMENT 'Open price (start of regular hours)',\n    `minPrc` FLOAT NOT NULL DEFAULT 0 COMMENT 'Low price (during regular hours)',\n    `maxPrc` FLOAT NOT NULL DEFAULT 0 COMMENT 'High price (during regular hours)',\n    `sharesOutstanding` BIGINT NOT NULL DEFAULT 0 COMMENT 'Shares outstanding',\n    `prtCount` INT NOT NULL DEFAULT 0 COMMENT 'Print count (entire trading period)',\n    `prtVolume` INT NOT NULL DEFAULT 0 COMMENT 'Print volume (entire trading period)',\n    `realizedCnt` INT NOT NULL DEFAULT 0 COMMENT 'number of minute bar segments used in realizedVar calc',\n    `realizedVol` FLOAT NOT NULL DEFAULT 0 COMMENT 'realizedVol = SQRT: SUM[ LOG( qteTwap(T) / qteTwap(T+1) ) ^ 2 ] / realizedCnt @ 1 minute intervals during market hours',\n    `avgMktSize` FLOAT NOT NULL DEFAULT 0 COMMENT 'Average market size',\n    `avgMktWidth` FLOAT NOT NULL DEFAULT 0 COMMENT 'Average market width',\n    `bidPrc` FLOAT NOT NULL DEFAULT 0 COMMENT 'bid price (close - 5 min)',\n    `askPrc` FLOAT NOT NULL DEFAULT 0 COMMENT 'ask price (close - 5 min)',\n    `srClsPrc` FLOAT NOT NULL DEFAULT 0 COMMENT 'SR close mark (close - 5 min)',\n    `closePrc` FLOAT NOT NULL DEFAULT 0 COMMENT 'official exchange closing mark (or last print)',\n    `hasSRClsPrc` ENUM('None','Yes','No') NOT NULL DEFAULT 'None' COMMENT 'srClsPrc is valid',\n    `hasClosePrc` ENUM('None','Yes','No') NOT NULL DEFAULT 'None' COMMENT 'closePrc is valid; otherwise is last print',\n    `srCloseMarkDttm` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000' COMMENT '(close - 5 min) date/time',\n    `timestamp` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000' COMMENT 'record publish/update timestamp',\n    PRIMARY KEY USING HASH (`ticker_tk`,`ticker_at`,`ticker_ts`)\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='StockCloseMark records are published immediately after the market close - 5 min and again when exchanges publish official marks.\\nStockCloseMark records are published to the SpiderRock elastic cluster when clsMarkState=Final';\n\n"})}),"\n",(0,t.jsx)(r.h3,{id:"select-table-example-query",children:"SELECT TABLE EXAMPLE QUERY"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-sql",children:"SELECT\n    `ticker_at`,\n    `ticker_ts`,\n    `ticker_tk`,\n    `tradeDate`,\n    `clsMarkState`,\n    `opnPrc`,\n    `minPrc`,\n    `maxPrc`,\n    `sharesOutstanding`,\n    `prtCount`,\n    `prtVolume`,\n    `realizedCnt`,\n    `realizedVol`,\n    `avgMktSize`,\n    `avgMktWidth`,\n    `bidPrc`,\n    `askPrc`,\n    `srClsPrc`,\n    `closePrc`,\n    `hasSRClsPrc`,\n    `hasClosePrc`,\n    `srCloseMarkDttm`,\n    `timestamp`\nFROM `SRLive`.`MsgStockCloseMark`\nWHERE \n    /* Replace with a ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') */ \n    `ticker_at` = 'None'\n  AND\n    /* Replace with a ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','EUX','ANY','CXE','DXE','NXAM','NXBR','NXLS','NXML','NXOS','NXP','EUREX','CEDX','ICEFE') */ \n    `ticker_ts` = 'None'\n  AND\n    /* Replace with a VARCHAR(12) */ \n    `ticker_tk` = 'Example_ticker_tk';\n"})}),"\n",(0,t.jsx)(r.h3,{id:"doc-columns-query",children:"Doc Columns Query"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-sql",children:"SELECT * FROM SRLive.doccolumns WHERE TABLE_NAME='StockCloseMark' ORDER BY ordinal_position ASC;\n"})})]})}function o(e={}){const{wrapper:r}={...(0,n.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},28453:(e,r,s)=>{s.d(r,{R:()=>i,x:()=>c});var t=s(96540);const n={},d=t.createContext(n);function i(e){const r=t.useContext(d);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),t.createElement(d.Provider,{value:r},e.children)}}}]);