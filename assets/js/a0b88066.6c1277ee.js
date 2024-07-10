"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[5942],{19760:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>l,contentTitle:()=>c,default:()=>o,frontMatter:()=>n,metadata:()=>i,toc:()=>a});var r=t(74848),d=t(28453);const n={},c=void 0,i={id:"MessageSchemas/Schema/SRSE Products/SRAnalytics/StockCloseMark/StockCloseMark",title:"StockCloseMark",description:"V8 Message Definiton",source:"@site/docs/MessageSchemas/Schema/SRSE Products/SRAnalytics/StockCloseMark/StockCloseMark.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRAnalytics/StockCloseMark",slug:"/MessageSchemas/Schema/SRSE Products/SRAnalytics/StockCloseMark/",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRAnalytics/StockCloseMark/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"messageSchemasSidebar",previous:{title:"StockBorrowRate",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRAnalytics/StockBorrowRate/"},next:{title:"StockDetail",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRAnalytics/StockDetail/"}},l={},a=[{value:"METADATA",id:"metadata",level:3},{value:"Table Definition",id:"table-definition",level:3},{value:"PRIMARY KEY DEFINITION (Unique)",id:"primary-key-definition-unique",level:3},{value:"CREATE TABLE QUERY",id:"create-table-query",level:3}];function h(e){const s={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.p,{children:(0,r.jsx)(s.a,{href:"../../../Topics/market-marks/StockCloseMark",children:"V8 Message Definiton"})}),"\n",(0,r.jsx)(s.p,{children:"StockCloseMark records are created immediately after the market close (clsMarkState=SRClose), when exchanges publish official marks (clsMarkState=ExchClose), and again during top of day rotation (clsMarkState=Final).  These records contain closing quotes and prices as well as markup details for all outright options.\\nStockCloseMark records are published to the SpiderRock elastic cluster when clsMarkState=Final"}),"\n",(0,r.jsx)(s.h3,{id:"metadata",children:"METADATA"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Attribute"}),(0,r.jsx)(s.th,{children:"Value"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Topic"}),(0,r.jsx)(s.td,{children:"3120-market-marks"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"MLink Token"}),(0,r.jsx)(s.td,{children:"EqtMarkData"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Product"}),(0,r.jsx)(s.td,{children:"SRAnalytics"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"accessType"}),(0,r.jsx)(s.td,{children:"SELECT"})]})]})]}),"\n",(0,r.jsx)(s.h3,{id:"table-definition",children:"Table Definition"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Field"}),(0,r.jsx)(s.th,{children:"Type"}),(0,r.jsx)(s.th,{children:"Key"}),(0,r.jsx)(s.th,{children:"Default Value"}),(0,r.jsx)(s.th,{children:"Comment"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"ticker_at"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"../../../Enums/AssetType",children:"enum - AssetType"})}),(0,r.jsx)(s.td,{children:"PRI"}),(0,r.jsx)(s.td,{children:"'None'"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"ticker_ts"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"../../../Enums/TickerSrc",children:"enum - TickerSrc"})}),(0,r.jsx)(s.td,{children:"PRI"}),(0,r.jsx)(s.td,{children:"'None'"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"ticker_tk"}),(0,r.jsx)(s.td,{children:"VARCHAR(12)"}),(0,r.jsx)(s.td,{children:"PRI"}),(0,r.jsx)(s.td,{children:"''"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"tradeDate"}),(0,r.jsx)(s.td,{children:"DATE"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"1900-01-01"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"clsMarkState"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"../../../Enums/ClsMarkState",children:"enum - ClsMarkState"})}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"'None'"}),(0,r.jsx)(s.td,{children:"Close mark state None LastPrt SRClose ExchClose Final"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"opnPrc"}),(0,r.jsx)(s.td,{children:"FLOAT"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"0"}),(0,r.jsx)(s.td,{children:"Open price"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"minPrc"}),(0,r.jsx)(s.td,{children:"FLOAT"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"0"}),(0,r.jsx)(s.td,{children:"Low price"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"maxPrc"}),(0,r.jsx)(s.td,{children:"FLOAT"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"0"}),(0,r.jsx)(s.td,{children:"High price"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"sharesOutstanding"}),(0,r.jsx)(s.td,{children:"BIGINT"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"0"}),(0,r.jsx)(s.td,{children:"Shares outstanding"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"prtCount"}),(0,r.jsx)(s.td,{children:"INT"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"0"}),(0,r.jsx)(s.td,{children:"Print count"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"prtVolume"}),(0,r.jsx)(s.td,{children:"INT"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"0"}),(0,r.jsx)(s.td,{children:"Print volume"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"realizedVol"}),(0,r.jsx)(s.td,{children:"FLOAT"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"0"}),(0,r.jsx)(s.td,{children:"Realized vol"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"avgMktSize"}),(0,r.jsx)(s.td,{children:"FLOAT"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"0"}),(0,r.jsx)(s.td,{children:"Average market size"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"avgMktWidth"}),(0,r.jsx)(s.td,{children:"FLOAT"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"0"}),(0,r.jsx)(s.td,{children:"Average market width"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"bidPrc"}),(0,r.jsx)(s.td,{children:"FLOAT"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"0"}),(0,r.jsx)(s.td,{children:"bid price close  1min"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"askPrc"}),(0,r.jsx)(s.td,{children:"FLOAT"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"0"}),(0,r.jsx)(s.td,{children:"ask price close  1min"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"srClsPrc"}),(0,r.jsx)(s.td,{children:"FLOAT"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"0"}),(0,r.jsx)(s.td,{children:"SR close mark close  1min"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"closePrc"}),(0,r.jsx)(s.td,{children:"FLOAT"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"0"}),(0,r.jsx)(s.td,{children:"official exchange closing mark last print then official close"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"hasSRClsPrc"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"../../../Enums/YesNo",children:"enum - YesNo"})}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"'None'"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"hasClosePrc"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"../../../Enums/YesNo",children:"enum - YesNo"})}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"'None'"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"srCloseMarkDttm"}),(0,r.jsx)(s.td,{children:"DATETIME(6)"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"1900-01-01 00:00:00.000000"}),(0,r.jsx)(s.td,{children:"from MarketCloseQuotesrCloseMarkDttm"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"timestamp"}),(0,r.jsx)(s.td,{children:"DATETIME(6)"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"1900-01-01 00:00:00.000000"}),(0,r.jsx)(s.td,{children:"record publishupdate timestamp"})]})]})]}),"\n",(0,r.jsx)(s.h3,{id:"primary-key-definition-unique",children:"PRIMARY KEY DEFINITION (Unique)"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Field"}),(0,r.jsx)(s.th,{children:"Sequence"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"ticker_tk"}),(0,r.jsx)(s.td,{children:"1"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"ticker_at"}),(0,r.jsx)(s.td,{children:"2"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"ticker_ts"}),(0,r.jsx)(s.td,{children:"3"})]})]})]}),"\n",(0,r.jsx)(s.h3,{id:"create-table-query",children:"CREATE TABLE QUERY"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-sql",children:"CREATE TABLE `SRAnalytics`.`MsgStockCloseMark` (\n    `ticker_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None',\n    `ticker_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','ESX','ANY','CXE','DXE','NXAM','NXBR','NXDUB','NXLS','NXLDN','NXML','NXMLT','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None',\n    `ticker_tk` VARCHAR(12) NOT NULL DEFAULT '',\n    `tradeDate` DATE NOT NULL DEFAULT '1900-01-01',\n    `clsMarkState` ENUM('None','LastPrt','SRClose','ExchClose','Final') NOT NULL DEFAULT 'None' COMMENT 'Close mark state. None; LastPrt; SRClose; ExchClose; Final',\n    `opnPrc` FLOAT NOT NULL DEFAULT 0 COMMENT 'Open price',\n    `minPrc` FLOAT NOT NULL DEFAULT 0 COMMENT 'Low price',\n    `maxPrc` FLOAT NOT NULL DEFAULT 0 COMMENT 'High price',\n    `sharesOutstanding` BIGINT NOT NULL DEFAULT 0 COMMENT 'Shares outstanding',\n    `prtCount` INT NOT NULL DEFAULT 0 COMMENT 'Print count',\n    `prtVolume` INT NOT NULL DEFAULT 0 COMMENT 'Print volume',\n    `realizedVol` FLOAT NOT NULL DEFAULT 0 COMMENT 'Realized vol',\n    `avgMktSize` FLOAT NOT NULL DEFAULT 0 COMMENT 'Average market size',\n    `avgMktWidth` FLOAT NOT NULL DEFAULT 0 COMMENT 'Average market width',\n    `bidPrc` FLOAT NOT NULL DEFAULT 0 COMMENT 'bid price (close - 1min)',\n    `askPrc` FLOAT NOT NULL DEFAULT 0 COMMENT 'ask price (close - 1min)',\n    `srClsPrc` FLOAT NOT NULL DEFAULT 0 COMMENT 'SR close mark (close - 1min)',\n    `closePrc` FLOAT NOT NULL DEFAULT 0 COMMENT 'official exchange closing mark (last print; then official close)',\n    `hasSRClsPrc` ENUM('None','Yes','No') NOT NULL DEFAULT 'None',\n    `hasClosePrc` ENUM('None','Yes','No') NOT NULL DEFAULT 'None',\n    `srCloseMarkDttm` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000' COMMENT 'from MarketCloseQuote.srCloseMarkDttm',\n    `timestamp` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000' COMMENT 'record publish/update timestamp',\n    PRIMARY KEY USING HASH (`ticker_tk`,`ticker_at`,`ticker_ts`)\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='StockCloseMark records are created immediately after the market close (clsMarkState=SRClose), when exchanges publish official marks (clsMarkState=ExchClose), and again during top of day rotation (clsMarkState=Final).  These records contain closing quotes and prices as well as markup details for all outright options.\\nStockCloseMark records are published to the SpiderRock elastic cluster when clsMarkState=Final';\n\n"})})]})}function o(e={}){const{wrapper:s}={...(0,d.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},28453:(e,s,t)=>{t.d(s,{R:()=>c,x:()=>i});var r=t(96540);const d={},n=r.createContext(d);function c(e){const s=r.useContext(n);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:c(e.components),r.createElement(n.Provider,{value:s},e.children)}}}]);