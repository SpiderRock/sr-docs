"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[77117],{11257:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>x,frontMatter:()=>n,metadata:()=>c,toc:()=>h});var d=t(74848),s=t(28453);const n={},i=void 0,c={id:"MessageSchemas/Schema/SRSE Products/SRSpread/SpreadMarketSummary/SpreadMarketSummary",title:"SpreadMarketSummary",description:"V8 Message Definiton",source:"@site/docs/MessageSchemas/Schema/SRSE Products/SRSpread/SpreadMarketSummary/SpreadMarketSummary.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRSpread/SpreadMarketSummary",slug:"/MessageSchemas/Schema/SRSE Products/SRSpread/SpreadMarketSummary/",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRSpread/SpreadMarketSummary/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"messageSchemasSidebar",previous:{title:"SpreadCloseMark",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRSpread/SpreadCloseMark/"},next:{title:"SpreadOpenMark",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRSpread/SpreadOpenMark/"}},l={},h=[{value:"METADATA",id:"metadata",level:3},{value:"Table Definition",id:"table-definition",level:3},{value:"PRIMARY KEY DEFINITION (Unique)",id:"primary-key-definition-unique",level:3},{value:"CREATE TABLE QUERY",id:"create-table-query",level:3}];function a(e){const r={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(r.p,{children:(0,d.jsx)(r.a,{href:"../../../Topics/market-data-spreads/SpreadMarketSummary",children:"V8 Message Definiton"})}),"\n",(0,d.jsx)(r.p,{children:"These records represent live market summary snapshots for each active spread market"}),"\n",(0,d.jsx)(r.h3,{id:"metadata",children:"METADATA"}),"\n",(0,d.jsxs)(r.table,{children:[(0,d.jsx)(r.thead,{children:(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.th,{children:"Attribute"}),(0,d.jsx)(r.th,{children:"Value"})]})}),(0,d.jsxs)(r.tbody,{children:[(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"Topic"}),(0,d.jsx)(r.td,{children:"2895-market-data-spreads"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"MLink Token"}),(0,d.jsx)(r.td,{children:"SystemData"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"Product"}),(0,d.jsx)(r.td,{children:"SRSpread"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"accessType"}),(0,d.jsx)(r.td,{children:"SELECT"})]})]})]}),"\n",(0,d.jsx)(r.h3,{id:"table-definition",children:"Table Definition"}),"\n",(0,d.jsxs)(r.table,{children:[(0,d.jsx)(r.thead,{children:(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.th,{children:"Field"}),(0,d.jsx)(r.th,{children:"Type"}),(0,d.jsx)(r.th,{children:"Key"}),(0,d.jsx)(r.th,{children:"Default Value"}),(0,d.jsx)(r.th,{children:"Comment"})]})}),(0,d.jsxs)(r.tbody,{children:[(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"skey_at"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../../Enums/AssetType",children:"enum - AssetType"})}),(0,d.jsx)(r.td,{children:"PRI"}),(0,d.jsx)(r.td,{children:"'None'"}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"skey_ts"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../../Enums/TickerSrc",children:"enum - TickerSrc"})}),(0,d.jsx)(r.td,{children:"PRI"}),(0,d.jsx)(r.td,{children:"'None'"}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"skey_tk"}),(0,d.jsx)(r.td,{children:"VARCHAR(12)"}),(0,d.jsx)(r.td,{children:"PRI"}),(0,d.jsx)(r.td,{children:"''"}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"ticker_at"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../../Enums/AssetType",children:"enum - AssetType"})}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"'None'"}),(0,d.jsx)(r.td,{children:"underlier or product group tickerKey"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"ticker_ts"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../../Enums/TickerSrc",children:"enum - TickerSrc"})}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"'None'"}),(0,d.jsx)(r.td,{children:"underlier or product group tickerKey"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"ticker_tk"}),(0,d.jsx)(r.td,{children:"VARCHAR(12)"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"''"}),(0,d.jsx)(r.td,{children:"underlier or product group tickerKey"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"iniPrice"}),(0,d.jsx)(r.td,{children:"DOUBLE"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"0"}),(0,d.jsx)(r.td,{children:"first print price of the day during regular market hours"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"mrkPrice"}),(0,d.jsx)(r.td,{children:"DOUBLE"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"0"}),(0,d.jsx)(r.td,{children:"last print handling during regular market hours"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"clsPrice"}),(0,d.jsx)(r.td,{children:"DOUBLE"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"0"}),(0,d.jsx)(r.td,{children:"official exchange closing price"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"minPrice"}),(0,d.jsx)(r.td,{children:"DOUBLE"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"0"}),(0,d.jsx)(r.td,{children:"minimum print price within market hours"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"maxPrice"}),(0,d.jsx)(r.td,{children:"DOUBLE"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"0"}),(0,d.jsx)(r.td,{children:"maximum print price within market hours"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"openInt"}),(0,d.jsx)(r.td,{children:"INT"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"0"}),(0,d.jsx)(r.td,{children:"open interest"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"bidCount"}),(0,d.jsx)(r.td,{children:"INT"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"0"}),(0,d.jsx)(r.td,{children:"num prints  quotebid"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"bidVolume"}),(0,d.jsx)(r.td,{children:"INT"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"0"}),(0,d.jsx)(r.td,{children:"volume when prtPrice  quotebid"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"askCount"}),(0,d.jsx)(r.td,{children:"INT"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"0"}),(0,d.jsx)(r.td,{children:"num prints  quoteask"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"askVolume"}),(0,d.jsx)(r.td,{children:"INT"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"0"}),(0,d.jsx)(r.td,{children:"volume when prtPrice  quoteask"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"midCount"}),(0,d.jsx)(r.td,{children:"INT"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"0"}),(0,d.jsx)(r.td,{children:"num prints inside quotebid  quoteask"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"midVolume"}),(0,d.jsx)(r.td,{children:"INT"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"0"}),(0,d.jsx)(r.td,{children:"volume inside quotebid  quoteask"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"prtCount"}),(0,d.jsx)(r.td,{children:"INT"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"0"}),(0,d.jsx)(r.td,{children:"number of distinct print reports"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"prtPrice"}),(0,d.jsx)(r.td,{children:"DOUBLE"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"0"}),(0,d.jsx)(r.td,{children:"last print price"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"expCount"}),(0,d.jsx)(r.td,{children:"INT"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"0"}),(0,d.jsx)(r.td,{children:"number of updates included in exponential average"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"expWidth"}),(0,d.jsx)(r.td,{children:"DOUBLE"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"0"}),(0,d.jsx)(r.td,{children:"exponential average market width 10 minute 12 life"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"expBidSize"}),(0,d.jsx)(r.td,{children:"FLOAT"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"0"}),(0,d.jsx)(r.td,{children:"exponential average bid size 10 minute 12 life"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"expAskSize"}),(0,d.jsx)(r.td,{children:"FLOAT"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"0"}),(0,d.jsx)(r.td,{children:"exponential average ask size 10 minute 12 life"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"lastPrint"}),(0,d.jsx)(r.td,{children:"DATETIME(6)"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"1900-01-01 00:00:00.000000"}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"timestamp"}),(0,d.jsx)(r.td,{children:"DATETIME(6)"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"1900-01-01 00:00:00.000000"}),(0,d.jsx)(r.td,{})]})]})]}),"\n",(0,d.jsx)(r.h3,{id:"primary-key-definition-unique",children:"PRIMARY KEY DEFINITION (Unique)"}),"\n",(0,d.jsxs)(r.table,{children:[(0,d.jsx)(r.thead,{children:(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.th,{children:"Field"}),(0,d.jsx)(r.th,{children:"Sequence"})]})}),(0,d.jsxs)(r.tbody,{children:[(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"skey_tk"}),(0,d.jsx)(r.td,{children:"1"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"skey_at"}),(0,d.jsx)(r.td,{children:"2"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"skey_ts"}),(0,d.jsx)(r.td,{children:"3"})]})]})]}),"\n",(0,d.jsx)(r.h3,{id:"create-table-query",children:"CREATE TABLE QUERY"}),"\n",(0,d.jsx)(r.pre,{children:(0,d.jsx)(r.code,{className:"language-sql",children:"CREATE TABLE `SRSpread`.`MsgSpreadMarketSummary` (\n    `skey_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None',\n    `skey_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','ESX','ANY','CXE','DXE','NXAM','NXBR','NXDUB','NXLS','NXLDN','NXML','NXMLT','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None',\n    `skey_tk` VARCHAR(12) NOT NULL DEFAULT '',\n    `ticker_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None' COMMENT 'underlier (or product group) tickerKey',\n    `ticker_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','ESX','ANY','CXE','DXE','NXAM','NXBR','NXDUB','NXLS','NXLDN','NXML','NXMLT','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None' COMMENT 'underlier (or product group) tickerKey',\n    `ticker_tk` VARCHAR(12) NOT NULL DEFAULT '' COMMENT 'underlier (or product group) tickerKey',\n    `iniPrice` DOUBLE NOT NULL DEFAULT 0 COMMENT 'first print price of the day during regular market hours',\n    `mrkPrice` DOUBLE NOT NULL DEFAULT 0 COMMENT 'last print handling during regular market hours',\n    `clsPrice` DOUBLE NOT NULL DEFAULT 0 COMMENT 'official exchange closing price',\n    `minPrice` DOUBLE NOT NULL DEFAULT 0 COMMENT 'minimum print price within market hours',\n    `maxPrice` DOUBLE NOT NULL DEFAULT 0 COMMENT 'maximum print price within market hours',\n    `openInt` INT NOT NULL DEFAULT 0 COMMENT 'open interest',\n    `bidCount` INT NOT NULL DEFAULT 0 COMMENT 'num prints <= quote.bid',\n    `bidVolume` INT NOT NULL DEFAULT 0 COMMENT 'volume when prtPrice <= quote.bid',\n    `askCount` INT NOT NULL DEFAULT 0 COMMENT 'num prints >= quote.ask',\n    `askVolume` INT NOT NULL DEFAULT 0 COMMENT 'volume when prtPrice >= quote.ask',\n    `midCount` INT NOT NULL DEFAULT 0 COMMENT 'num prints inside quote.bid / quote.ask',\n    `midVolume` INT NOT NULL DEFAULT 0 COMMENT 'volume inside quote.bid / quote.ask',\n    `prtCount` INT NOT NULL DEFAULT 0 COMMENT 'number of distinct print reports',\n    `prtPrice` DOUBLE NOT NULL DEFAULT 0 COMMENT 'last print price',\n    `expCount` INT NOT NULL DEFAULT 0 COMMENT 'number of updates included in exponential average',\n    `expWidth` DOUBLE NOT NULL DEFAULT 0 COMMENT 'exponential average market width (10 minute 1/2 life)',\n    `expBidSize` FLOAT NOT NULL DEFAULT 0 COMMENT 'exponential average bid size (10 minute 1/2 life)',\n    `expAskSize` FLOAT NOT NULL DEFAULT 0 COMMENT 'exponential average ask size (10 minute 1/2 life)',\n    `lastPrint` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000',\n    `timestamp` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000',\n    PRIMARY KEY USING HASH (`skey_tk`,`skey_at`,`skey_ts`)\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='These records represent live market summary snapshots for each active spread market';\n\n"})})]})}function x(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,d.jsx)(r,{...e,children:(0,d.jsx)(a,{...e})}):a(e)}},28453:(e,r,t)=>{t.d(r,{R:()=>i,x:()=>c});var d=t(96540);const s={},n=d.createContext(s);function i(e){const r=d.useContext(n);return d.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),d.createElement(n.Provider,{value:r},e.children)}}}]);