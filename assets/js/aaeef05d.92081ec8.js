"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[19490],{74351:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>o,frontMatter:()=>i,metadata:()=>l,toc:()=>h});var d=n(74848),r=n(28453);const i={},s=void 0,l={id:"MessageSchemas/Schema/SRSE Products/SRLive/OptionMarketSummary/OptionMarketSummary",title:"OptionMarketSummary",description:"V8 Message Definiton",source:"@site/versioned_docs/version-8.5.3.3/MessageSchemas/Schema/SRSE Products/SRLive/OptionMarketSummary/OptionMarketSummary.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRLive/OptionMarketSummary",slug:"/MessageSchemas/Schema/SRSE Products/SRLive/OptionMarketSummary/",permalink:"/docs/8.5.3.3/MessageSchemas/Schema/SRSE Products/SRLive/OptionMarketSummary/",draft:!1,unlisted:!1,tags:[],version:"8.5.3.3",frontMatter:{},sidebar:"messageSchemasSidebar",previous:{title:"OptionLookback",permalink:"/docs/8.5.3.3/MessageSchemas/Schema/SRSE Products/SRLive/OptionLookback/"},next:{title:"OptionNbboQuote",permalink:"/docs/8.5.3.3/MessageSchemas/Schema/SRSE Products/SRLive/OptionNbboQuote/"}},c={},h=[{value:"METADATA",id:"metadata",level:3},{value:"Table Definition",id:"table-definition",level:3},{value:"PRIMARY KEY DEFINITION (Unique)",id:"primary-key-definition-unique",level:3},{value:"CREATE TABLE EXAMPLE QUERY",id:"create-table-example-query",level:3},{value:"SELECT TABLE EXAMPLE QUERY",id:"select-table-example-query",level:3},{value:"Doc Columns Query",id:"doc-columns-query",level:3}];function a(e){const t={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(t.p,{children:(0,d.jsx)(t.a,{href:"../../../Topics/market-data-options/OptionMarketSummary",children:"V8 Message Definiton"})}),"\n",(0,d.jsx)(t.p,{children:"These records represent live market summary snapshots for each active option"}),"\n",(0,d.jsx)(t.h3,{id:"metadata",children:"METADATA"}),"\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Attribute"}),(0,d.jsx)(t.th,{children:"Value"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"Topic"}),(0,d.jsx)(t.td,{children:"2750-market-data-options"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"MLink Token"}),(0,d.jsx)(t.td,{children:"OptSummaryData"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"Product"}),(0,d.jsx)(t.td,{children:"SRLive"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"accessType"}),(0,d.jsx)(t.td,{children:"SELECT"})]})]})]}),"\n",(0,d.jsx)(t.h3,{id:"table-definition",children:"Table Definition"}),"\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Field"}),(0,d.jsx)(t.th,{children:"Type"}),(0,d.jsx)(t.th,{children:"Key"}),(0,d.jsx)(t.th,{children:"Default Value"}),(0,d.jsx)(t.th,{children:"Comment"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"okey_at"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.a,{href:"../../../Enums/AssetType",children:"enum - AssetType"})}),(0,d.jsx)(t.td,{children:"PRI"}),(0,d.jsx)(t.td,{children:"'None'"}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"okey_ts"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.a,{href:"../../../Enums/TickerSrc",children:"enum - TickerSrc"})}),(0,d.jsx)(t.td,{children:"PRI"}),(0,d.jsx)(t.td,{children:"'None'"}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"okey_tk"}),(0,d.jsx)(t.td,{children:"VARCHAR(12)"}),(0,d.jsx)(t.td,{children:"PRI"}),(0,d.jsx)(t.td,{children:"''"}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"okey_yr"}),(0,d.jsx)(t.td,{children:"SMALLINT UNSIGNED"}),(0,d.jsx)(t.td,{children:"PRI"}),(0,d.jsx)(t.td,{children:"0"}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"okey_mn"}),(0,d.jsx)(t.td,{children:"TINYINT UNSIGNED"}),(0,d.jsx)(t.td,{children:"PRI"}),(0,d.jsx)(t.td,{children:"0"}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"okey_dy"}),(0,d.jsx)(t.td,{children:"TINYINT UNSIGNED"}),(0,d.jsx)(t.td,{children:"PRI"}),(0,d.jsx)(t.td,{children:"0"}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"okey_xx"}),(0,d.jsx)(t.td,{children:"DOUBLE"}),(0,d.jsx)(t.td,{children:"PRI"}),(0,d.jsx)(t.td,{children:"0"}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"okey_cp"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.a,{href:"../../../Enums/CallPut",children:"enum - CallPut"})}),(0,d.jsx)(t.td,{children:"PRI"}),(0,d.jsx)(t.td,{children:"'Call'"}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"tradeDate"}),(0,d.jsx)(t.td,{children:"DATE"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"'1900-01-01'"}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"opnPrice"}),(0,d.jsx)(t.td,{children:"DOUBLE"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"0"}),(0,d.jsx)(t.td,{children:"start of day SR open mark"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"opnVolatility"}),(0,d.jsx)(t.td,{children:"DOUBLE"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"0"}),(0,d.jsx)(t.td,{children:"start of day SR open mark volatility"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"clsPrice"}),(0,d.jsx)(t.td,{children:"DOUBLE"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"0"}),(0,d.jsx)(t.td,{children:"end of day SR close mark"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"clsVolatility"}),(0,d.jsx)(t.td,{children:"DOUBLE"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"0"}),(0,d.jsx)(t.td,{children:"end of day SR close mark volatility"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"minPrtPrc"}),(0,d.jsx)(t.td,{children:"DOUBLE"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"0"}),(0,d.jsx)(t.td,{children:"minimum print price within market hours"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"minPrtVol"}),(0,d.jsx)(t.td,{children:"DOUBLE"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"0"}),(0,d.jsx)(t.td,{children:"minimum print volatility within market hours"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"maxPrtPrc"}),(0,d.jsx)(t.td,{children:"DOUBLE"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"0"}),(0,d.jsx)(t.td,{children:"maximum print price within market hours"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"maxPrtVol"}),(0,d.jsx)(t.td,{children:"DOUBLE"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"0"}),(0,d.jsx)(t.td,{children:"maximum print volatility within market hours"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"openInterest"}),(0,d.jsx)(t.td,{children:"INT"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"0"}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"bidCount"}),(0,d.jsx)(t.td,{children:"INT"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"0"}),(0,d.jsx)(t.td,{children:"num prints  SR surface mark"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"bidVolume"}),(0,d.jsx)(t.td,{children:"INT"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"0"}),(0,d.jsx)(t.td,{children:"volume when prtPrice  quotebid"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"askCount"}),(0,d.jsx)(t.td,{children:"INT"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"0"}),(0,d.jsx)(t.td,{children:"num prints  SR surface mark"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"askVolume"}),(0,d.jsx)(t.td,{children:"INT"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"0"}),(0,d.jsx)(t.td,{children:"volume when prtPrice  quoteask"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"midCount"}),(0,d.jsx)(t.td,{children:"INT"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"0"}),(0,d.jsx)(t.td,{children:"num prints inside quoteebid  quoteeask"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"midVolume"}),(0,d.jsx)(t.td,{children:"INT"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"0"}),(0,d.jsx)(t.td,{children:"volume inside quoteebid  quoteeask"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"prtCount"}),(0,d.jsx)(t.td,{children:"INT"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"0"}),(0,d.jsx)(t.td,{children:"number of distinct print reports"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"prtVolume"}),(0,d.jsx)(t.td,{children:"INT"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"0"}),(0,d.jsx)(t.td,{children:"total print volume all print types"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"lastPrtPrice"}),(0,d.jsx)(t.td,{children:"DOUBLE"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"0"}),(0,d.jsx)(t.td,{children:"last print price"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"lastPrtDttm"}),(0,d.jsx)(t.td,{children:"DATETIME(6)"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"'1900-01-01 00:00:00.000000'"}),(0,d.jsx)(t.td,{children:"last print time"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"lastPrtVolatility"}),(0,d.jsx)(t.td,{children:"FLOAT"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"0"}),(0,d.jsx)(t.td,{children:"last print volatility"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"avgWidth"}),(0,d.jsx)(t.td,{children:"DOUBLE"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"0"}),(0,d.jsx)(t.td,{children:"not supported average market width time weighted"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"avgBidSize"}),(0,d.jsx)(t.td,{children:"FLOAT"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"0"}),(0,d.jsx)(t.td,{children:"not supported average bid size time weighted"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"avgAskSize"}),(0,d.jsx)(t.td,{children:"FLOAT"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"0"}),(0,d.jsx)(t.td,{children:"not supported average ask size time weighted"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"timestamp"}),(0,d.jsx)(t.td,{children:"DATETIME(6)"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"'1900-01-01 00:00:00.000000'"}),(0,d.jsx)(t.td,{})]})]})]}),"\n",(0,d.jsx)(t.h3,{id:"primary-key-definition-unique",children:"PRIMARY KEY DEFINITION (Unique)"}),"\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Field"}),(0,d.jsx)(t.th,{children:"Sequence"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"okey_tk"}),(0,d.jsx)(t.td,{children:"1"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"okey_yr"}),(0,d.jsx)(t.td,{children:"2"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"okey_mn"}),(0,d.jsx)(t.td,{children:"3"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"okey_dy"}),(0,d.jsx)(t.td,{children:"4"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"okey_xx"}),(0,d.jsx)(t.td,{children:"5"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"okey_cp"}),(0,d.jsx)(t.td,{children:"6"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"okey_at"}),(0,d.jsx)(t.td,{children:"7"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"okey_ts"}),(0,d.jsx)(t.td,{children:"8"})]})]})]}),"\n",(0,d.jsx)(t.h3,{id:"create-table-example-query",children:"CREATE TABLE EXAMPLE QUERY"}),"\n",(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:"language-sql",children:"CREATE TABLE `SRLive`.`MsgOptionMarketSummary` (\n    `okey_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None',\n    `okey_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','EUX','ANY','CXE','DXE','NXAM','NXBR','NXLS','NXML','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None',\n    `okey_tk` VARCHAR(12) NOT NULL DEFAULT '',\n    `okey_yr` SMALLINT UNSIGNED NOT NULL DEFAULT 0,\n    `okey_mn` TINYINT UNSIGNED NOT NULL DEFAULT 0,\n    `okey_dy` TINYINT UNSIGNED NOT NULL DEFAULT 0,\n    `okey_xx` DOUBLE NOT NULL DEFAULT 0,\n    `okey_cp` ENUM('Call','Put','Pair') NOT NULL DEFAULT 'Call',\n    `tradeDate` DATE NOT NULL DEFAULT '1900-01-01',\n    `opnPrice` DOUBLE NOT NULL DEFAULT 0 COMMENT 'start of day (SR) open mark',\n    `opnVolatility` DOUBLE NOT NULL DEFAULT 0 COMMENT 'start of day (SR) open mark (volatility)',\n    `clsPrice` DOUBLE NOT NULL DEFAULT 0 COMMENT 'end of day (SR) close mark',\n    `clsVolatility` DOUBLE NOT NULL DEFAULT 0 COMMENT 'end of day (SR) close mark (volatility)',\n    `minPrtPrc` DOUBLE NOT NULL DEFAULT 0 COMMENT 'minimum print price within market hours',\n    `minPrtVol` DOUBLE NOT NULL DEFAULT 0 COMMENT 'minimum print volatility within market hours',\n    `maxPrtPrc` DOUBLE NOT NULL DEFAULT 0 COMMENT 'maximum print price within market hours',\n    `maxPrtVol` DOUBLE NOT NULL DEFAULT 0 COMMENT 'maximum print volatility within market hours',\n    `openInterest` INT NOT NULL DEFAULT 0,\n    `bidCount` INT NOT NULL DEFAULT 0 COMMENT 'num prints <= SR surface mark',\n    `bidVolume` INT NOT NULL DEFAULT 0 COMMENT 'volume when prtPrice <= quote.bid',\n    `askCount` INT NOT NULL DEFAULT 0 COMMENT 'num prints >= SR surface mark',\n    `askVolume` INT NOT NULL DEFAULT 0 COMMENT 'volume when prtPrice >= quote.ask',\n    `midCount` INT NOT NULL DEFAULT 0 COMMENT 'num prints inside quote.ebid / quote.eask',\n    `midVolume` INT NOT NULL DEFAULT 0 COMMENT 'volume inside quote.ebid / quote.eask',\n    `prtCount` INT NOT NULL DEFAULT 0 COMMENT 'number of distinct print reports',\n    `prtVolume` INT NOT NULL DEFAULT 0 COMMENT 'total print volume (all print types)',\n    `lastPrtPrice` DOUBLE NOT NULL DEFAULT 0 COMMENT 'last print price',\n    `lastPrtDttm` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000' COMMENT 'last print time',\n    `lastPrtVolatility` FLOAT NOT NULL DEFAULT 0 COMMENT 'last print volatility',\n    `avgWidth` DOUBLE NOT NULL DEFAULT 0 COMMENT '(not supported) average market width (time weighted)',\n    `avgBidSize` FLOAT NOT NULL DEFAULT 0 COMMENT '(not supported) average bid size (time weighted)',\n    `avgAskSize` FLOAT NOT NULL DEFAULT 0 COMMENT '(not supported) average ask size (time weighted)',\n    `timestamp` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000',\n    PRIMARY KEY USING HASH (`okey_tk`,`okey_yr`,`okey_mn`,`okey_dy`,`okey_xx`,`okey_cp`,`okey_at`,`okey_ts`)\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='These records represent live market summary snapshots for each active option';\n\n"})}),"\n",(0,d.jsx)(t.h3,{id:"select-table-example-query",children:"SELECT TABLE EXAMPLE QUERY"}),"\n",(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:"language-sql",children:"SELECT\n    `okey_at`,\n    `okey_ts`,\n    `okey_tk`,\n    `okey_yr`,\n    `okey_mn`,\n    `okey_dy`,\n    `okey_xx`,\n    `okey_cp`,\n    `tradeDate`,\n    `opnPrice`,\n    `opnVolatility`,\n    `clsPrice`,\n    `clsVolatility`,\n    `minPrtPrc`,\n    `minPrtVol`,\n    `maxPrtPrc`,\n    `maxPrtVol`,\n    `openInterest`,\n    `bidCount`,\n    `bidVolume`,\n    `askCount`,\n    `askVolume`,\n    `midCount`,\n    `midVolume`,\n    `prtCount`,\n    `prtVolume`,\n    `lastPrtPrice`,\n    `lastPrtDttm`,\n    `lastPrtVolatility`,\n    `avgWidth`,\n    `avgBidSize`,\n    `avgAskSize`,\n    `timestamp`\nFROM `SRLive`.`MsgOptionMarketSummary`\nWHERE \n    /* Replace with a ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') */ \n    `okey_at` = 'None'\n  AND\n    /* Replace with a ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','EUX','ANY','CXE','DXE','NXAM','NXBR','NXLS','NXML','NXOS','NXP','EUREX','CEDX','ICEFE') */ \n    `okey_ts` = 'None'\n  AND\n    /* Replace with a VARCHAR(12) */ \n    `okey_tk` = 'Example_okey_tk'\n  AND\n    /* Replace with a SMALLINT UNSIGNED */ \n    `okey_yr` = 123\n  AND\n    /* Replace with a TINYINT UNSIGNED */ \n    `okey_mn` = 1\n  AND\n    /* Replace with a TINYINT UNSIGNED */ \n    `okey_dy` = 1\n  AND\n    /* Replace with a DOUBLE */ \n    `okey_xx` = 4.56\n  AND\n    /* Replace with a ENUM('Call','Put','Pair') */ \n    `okey_cp` = 'Call';\n"})}),"\n",(0,d.jsx)(t.h3,{id:"doc-columns-query",children:"Doc Columns Query"}),"\n",(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:"language-sql",children:"SELECT * FROM SRLive.doccolumns WHERE TABLE_NAME='OptionMarketSummary' ORDER BY ordinal_position ASC;\n"})})]})}function o(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(a,{...e})}):a(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>l});var d=n(96540);const r={},i=d.createContext(r);function s(e){const t=d.useContext(i);return d.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),d.createElement(i.Provider,{value:t},e.children)}}}]);