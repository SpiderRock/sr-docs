"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[10320],{21449:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>a,frontMatter:()=>s,metadata:()=>l,toc:()=>h});var r=n(74848),d=n(28453);const s={},i=void 0,l={id:"MessageSchemas/Schema/SRSE Products/SRLive/FutureMarketSummary/FutureMarketSummary",title:"FutureMarketSummary",description:"V8 Message Definiton",source:"@site/versioned_docs/version-8.4.10.2/MessageSchemas/Schema/SRSE Products/SRLive/FutureMarketSummary/FutureMarketSummary.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRLive/FutureMarketSummary",slug:"/MessageSchemas/Schema/SRSE Products/SRLive/FutureMarketSummary/",permalink:"/docs/8.4.10.2/MessageSchemas/Schema/SRSE Products/SRLive/FutureMarketSummary/",draft:!1,unlisted:!1,tags:[],version:"8.4.10.2",frontMatter:{},sidebar:"messageSchemasSidebar",previous:{title:"FutureCloseMark",permalink:"/docs/8.4.10.2/MessageSchemas/Schema/SRSE Products/SRLive/FutureCloseMark/"},next:{title:"FutureOpenMark",permalink:"/docs/8.4.10.2/MessageSchemas/Schema/SRSE Products/SRLive/FutureOpenMark/"}},c={},h=[{value:"METADATA",id:"metadata",level:3},{value:"Table Definition",id:"table-definition",level:3},{value:"PRIMARY KEY DEFINITION (Unique)",id:"primary-key-definition-unique",level:3},{value:"CREATE TABLE EXAMPLE QUERY",id:"create-table-example-query",level:3},{value:"SELECT TABLE EXAMPLE QUERY",id:"select-table-example-query",level:3},{value:"Doc Columns Query",id:"doc-columns-query",level:3}];function x(e){const t={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"../../../Topics/market-data-futures/FutureMarketSummary",children:"V8 Message Definiton"})}),"\n",(0,r.jsx)(t.p,{children:"These records represent live market summary snapshots for each active futures markets."}),"\n",(0,r.jsx)(t.h3,{id:"metadata",children:"METADATA"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Attribute"}),(0,r.jsx)(t.th,{children:"Value"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Topic"}),(0,r.jsx)(t.td,{children:"2580-market-data-futures"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"MLink Token"}),(0,r.jsx)(t.td,{children:"FutSummaryData"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Product"}),(0,r.jsx)(t.td,{children:"SRLive"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"accessType"}),(0,r.jsx)(t.td,{children:"SELECT"})]})]})]}),"\n",(0,r.jsx)(t.h3,{id:"table-definition",children:"Table Definition"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Field"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Key"}),(0,r.jsx)(t.th,{children:"Default Value"}),(0,r.jsx)(t.th,{children:"Comment"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"fkey_at"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"../../../Enums/AssetType",children:"enum - AssetType"})}),(0,r.jsx)(t.td,{children:"PRI"}),(0,r.jsx)(t.td,{children:"'None'"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"fkey_ts"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"../../../Enums/TickerSrc",children:"enum - TickerSrc"})}),(0,r.jsx)(t.td,{children:"PRI"}),(0,r.jsx)(t.td,{children:"'None'"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"fkey_tk"}),(0,r.jsx)(t.td,{children:"VARCHAR(12)"}),(0,r.jsx)(t.td,{children:"PRI"}),(0,r.jsx)(t.td,{children:"''"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"fkey_yr"}),(0,r.jsx)(t.td,{children:"SMALLINT UNSIGNED"}),(0,r.jsx)(t.td,{children:"PRI"}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"fkey_mn"}),(0,r.jsx)(t.td,{children:"TINYINT UNSIGNED"}),(0,r.jsx)(t.td,{children:"PRI"}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"fkey_dy"}),(0,r.jsx)(t.td,{children:"TINYINT UNSIGNED"}),(0,r.jsx)(t.td,{children:"PRI"}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"tradeDate"}),(0,r.jsx)(t.td,{children:"DATE"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"'1900-01-01'"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"opnPrice"}),(0,r.jsx)(t.td,{children:"DOUBLE"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"first print price of the day during regular market hours"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"mrkPrice"}),(0,r.jsx)(t.td,{children:"DOUBLE"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"last print handled during regular market hours"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"clsPrice"}),(0,r.jsx)(t.td,{children:"DOUBLE"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"official exchange closing price"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"minPrice"}),(0,r.jsx)(t.td,{children:"DOUBLE"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"minimum print price within market hours"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"maxPrice"}),(0,r.jsx)(t.td,{children:"DOUBLE"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"maximum print price within market hours"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"openInt"}),(0,r.jsx)(t.td,{children:"INT"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"open interest"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"bidCount"}),(0,r.jsx)(t.td,{children:"INT"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"num prints  quotebid"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"bidVolume"}),(0,r.jsx)(t.td,{children:"INT"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"volume when prtPrice  quotebid"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"askCount"}),(0,r.jsx)(t.td,{children:"INT"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"num prints  quoteask"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"askVolume"}),(0,r.jsx)(t.td,{children:"INT"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"volume when prtPrice  quoteask"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"midCount"}),(0,r.jsx)(t.td,{children:"INT"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"num prints inside quotebid  quoteask"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"midVolume"}),(0,r.jsx)(t.td,{children:"INT"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"volume inside quotebid  quoteask"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"prtCount"}),(0,r.jsx)(t.td,{children:"INT"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"number of distinct print reports"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"prtVolume"}),(0,r.jsx)(t.td,{children:"INT"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"total print volume all print types"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"lastPrtPrice"}),(0,r.jsx)(t.td,{children:"DOUBLE"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"last print price"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"lastPrtDttm"}),(0,r.jsx)(t.td,{children:"DATETIME(6)"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"'1900-01-01 00:00:00.000000'"}),(0,r.jsx)(t.td,{children:"last print time"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"expCount"}),(0,r.jsx)(t.td,{children:"INT"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"number of updates included in exponential average"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"expWidth"}),(0,r.jsx)(t.td,{children:"DOUBLE"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"exponential average market width 10 minute 12 life"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"expBidSize"}),(0,r.jsx)(t.td,{children:"FLOAT"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"exponential average bid size 10 minute 12 life"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"expAskSize"}),(0,r.jsx)(t.td,{children:"FLOAT"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"exponential average ask size 10 minute 12 life"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"timestamp"}),(0,r.jsx)(t.td,{children:"DATETIME(6)"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"'1900-01-01 00:00:00.000000'"}),(0,r.jsx)(t.td,{})]})]})]}),"\n",(0,r.jsx)(t.h3,{id:"primary-key-definition-unique",children:"PRIMARY KEY DEFINITION (Unique)"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Field"}),(0,r.jsx)(t.th,{children:"Sequence"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"fkey_tk"}),(0,r.jsx)(t.td,{children:"1"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"fkey_yr"}),(0,r.jsx)(t.td,{children:"2"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"fkey_mn"}),(0,r.jsx)(t.td,{children:"3"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"fkey_dy"}),(0,r.jsx)(t.td,{children:"4"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"fkey_at"}),(0,r.jsx)(t.td,{children:"5"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"fkey_ts"}),(0,r.jsx)(t.td,{children:"6"})]})]})]}),"\n",(0,r.jsx)(t.h3,{id:"create-table-example-query",children:"CREATE TABLE EXAMPLE QUERY"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sql",children:"CREATE TABLE `SRLive`.`MsgFutureMarketSummary` (\n    `fkey_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None',\n    `fkey_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','EUX','ANY','CXE','DXE','NXAM','NXBR','NXLS','NXML','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None',\n    `fkey_tk` VARCHAR(12) NOT NULL DEFAULT '',\n    `fkey_yr` SMALLINT UNSIGNED NOT NULL DEFAULT 0,\n    `fkey_mn` TINYINT UNSIGNED NOT NULL DEFAULT 0,\n    `fkey_dy` TINYINT UNSIGNED NOT NULL DEFAULT 0,\n    `tradeDate` DATE NOT NULL DEFAULT '1900-01-01',\n    `opnPrice` DOUBLE NOT NULL DEFAULT 0 COMMENT 'first print price of the day during regular market hours',\n    `mrkPrice` DOUBLE NOT NULL DEFAULT 0 COMMENT 'last print handled during regular market hours',\n    `clsPrice` DOUBLE NOT NULL DEFAULT 0 COMMENT 'official exchange closing price',\n    `minPrice` DOUBLE NOT NULL DEFAULT 0 COMMENT 'minimum print price within market hours',\n    `maxPrice` DOUBLE NOT NULL DEFAULT 0 COMMENT 'maximum print price within market hours',\n    `openInt` INT NOT NULL DEFAULT 0 COMMENT 'open interest',\n    `bidCount` INT NOT NULL DEFAULT 0 COMMENT 'num prints <= quote.bid',\n    `bidVolume` INT NOT NULL DEFAULT 0 COMMENT 'volume when prtPrice <= quote.bid',\n    `askCount` INT NOT NULL DEFAULT 0 COMMENT 'num prints >= quote.ask',\n    `askVolume` INT NOT NULL DEFAULT 0 COMMENT 'volume when prtPrice >= quote.ask',\n    `midCount` INT NOT NULL DEFAULT 0 COMMENT 'num prints inside quote.bid / quote.ask',\n    `midVolume` INT NOT NULL DEFAULT 0 COMMENT 'volume inside quote.bid / quote.ask',\n    `prtCount` INT NOT NULL DEFAULT 0 COMMENT 'number of distinct print reports',\n    `prtVolume` INT NOT NULL DEFAULT 0 COMMENT 'total print volume (all print types)',\n    `lastPrtPrice` DOUBLE NOT NULL DEFAULT 0 COMMENT 'last print price',\n    `lastPrtDttm` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000' COMMENT 'last print time',\n    `expCount` INT NOT NULL DEFAULT 0 COMMENT 'number of updates included in exponential average',\n    `expWidth` DOUBLE NOT NULL DEFAULT 0 COMMENT 'exponential average market width (10 minute 1/2 life)',\n    `expBidSize` FLOAT NOT NULL DEFAULT 0 COMMENT 'exponential average bid size (10 minute 1/2 life)',\n    `expAskSize` FLOAT NOT NULL DEFAULT 0 COMMENT 'exponential average ask size (10 minute 1/2 life)',\n    `timestamp` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000',\n    PRIMARY KEY USING HASH (`fkey_tk`,`fkey_yr`,`fkey_mn`,`fkey_dy`,`fkey_at`,`fkey_ts`)\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='These records represent live market summary snapshots for each active futures markets.';\n\n"})}),"\n",(0,r.jsx)(t.h3,{id:"select-table-example-query",children:"SELECT TABLE EXAMPLE QUERY"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sql",children:"SELECT\n    `fkey_at`,\n    `fkey_ts`,\n    `fkey_tk`,\n    `fkey_yr`,\n    `fkey_mn`,\n    `fkey_dy`,\n    `tradeDate`,\n    `opnPrice`,\n    `mrkPrice`,\n    `clsPrice`,\n    `minPrice`,\n    `maxPrice`,\n    `openInt`,\n    `bidCount`,\n    `bidVolume`,\n    `askCount`,\n    `askVolume`,\n    `midCount`,\n    `midVolume`,\n    `prtCount`,\n    `prtVolume`,\n    `lastPrtPrice`,\n    `lastPrtDttm`,\n    `expCount`,\n    `expWidth`,\n    `expBidSize`,\n    `expAskSize`,\n    `timestamp`\nFROM `SRLive`.`MsgFutureMarketSummary`\nWHERE \n    /* Replace with a ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') */ \n    `fkey_at` = 'None'\n  AND\n    /* Replace with a ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','EUX','ANY','CXE','DXE','NXAM','NXBR','NXLS','NXML','NXOS','NXP','EUREX','CEDX','ICEFE') */ \n    `fkey_ts` = 'None'\n  AND\n    /* Replace with a VARCHAR(12) */ \n    `fkey_tk` = 'Example_fkey_tk'\n  AND\n    /* Replace with a SMALLINT UNSIGNED */ \n    `fkey_yr` = 123\n  AND\n    /* Replace with a TINYINT UNSIGNED */ \n    `fkey_mn` = 1\n  AND\n    /* Replace with a TINYINT UNSIGNED */ \n    `fkey_dy` = 1;\n"})}),"\n",(0,r.jsx)(t.h3,{id:"doc-columns-query",children:"Doc Columns Query"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sql",children:"SELECT * FROM SRLive.doccolumns WHERE TABLE_NAME='FutureMarketSummary' ORDER BY ordinal_position ASC;\n"})})]})}function a(e={}){const{wrapper:t}={...(0,d.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(x,{...e})}):x(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>l});var r=n(96540);const d={},s=r.createContext(d);function i(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:i(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);