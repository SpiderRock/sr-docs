"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[60429],{11592:(e,t,d)=>{d.r(t),d.d(t,{assets:()=>c,contentTitle:()=>n,default:()=>j,frontMatter:()=>i,metadata:()=>l,toc:()=>h});var r=d(74848),s=d(28453);const i={},n=void 0,l={id:"MessageSchemas/Schema/SRSE Products/SRLive/OptionMarketSummary/OptionMarketSummary",title:"OptionMarketSummary",description:"V8 Message Definiton",source:"@site/docs/MessageSchemas/Schema/SRSE Products/SRLive/OptionMarketSummary/OptionMarketSummary.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRLive/OptionMarketSummary",slug:"/MessageSchemas/Schema/SRSE Products/SRLive/OptionMarketSummary/",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRLive/OptionMarketSummary/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"messageSchemasSidebar",previous:{title:"OptionLookback",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRLive/OptionLookback/"},next:{title:"OptionNbboQuote",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRLive/OptionNbboQuote/"}},c={},h=[{value:"METADATA",id:"metadata",level:3},{value:"Table Definition",id:"table-definition",level:3},{value:"PRIMARY KEY DEFINITION (Unique)",id:"primary-key-definition-unique",level:3},{value:"CREATE TABLE QUERY",id:"create-table-query",level:3}];function x(e){const t={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"../../../Topics/market-data-options/OptionMarketSummary",children:"V8 Message Definiton"})}),"\n",(0,r.jsx)(t.p,{children:"These records represent live market summary snapshots for each active option"}),"\n",(0,r.jsx)(t.h3,{id:"metadata",children:"METADATA"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Attribute"}),(0,r.jsx)(t.th,{children:"Value"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Topic"}),(0,r.jsx)(t.td,{children:"2750-market-data-options"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"MLink Token"}),(0,r.jsx)(t.td,{children:"OptSummaryData"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Product"}),(0,r.jsx)(t.td,{children:"SRLive"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"accessType"}),(0,r.jsx)(t.td,{children:"SELECT"})]})]})]}),"\n",(0,r.jsx)(t.h3,{id:"table-definition",children:"Table Definition"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Field"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Key"}),(0,r.jsx)(t.th,{children:"Default Value"}),(0,r.jsx)(t.th,{children:"Comment"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"okey_at"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"../../../Enums/AssetType",children:"enum - AssetType"})}),(0,r.jsx)(t.td,{children:"PRI"}),(0,r.jsx)(t.td,{children:"'None'"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"okey_ts"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"../../../Enums/TickerSrc",children:"enum - TickerSrc"})}),(0,r.jsx)(t.td,{children:"PRI"}),(0,r.jsx)(t.td,{children:"'None'"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"okey_tk"}),(0,r.jsx)(t.td,{children:"VARCHAR(12)"}),(0,r.jsx)(t.td,{children:"PRI"}),(0,r.jsx)(t.td,{children:"''"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"okey_yr"}),(0,r.jsx)(t.td,{children:"SMALLINT UNSIGNED"}),(0,r.jsx)(t.td,{children:"PRI"}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"okey_mn"}),(0,r.jsx)(t.td,{children:"TINYINT UNSIGNED"}),(0,r.jsx)(t.td,{children:"PRI"}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"okey_dy"}),(0,r.jsx)(t.td,{children:"TINYINT UNSIGNED"}),(0,r.jsx)(t.td,{children:"PRI"}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"okey_xx"}),(0,r.jsx)(t.td,{children:"DOUBLE"}),(0,r.jsx)(t.td,{children:"PRI"}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"okey_cp"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"../../../Enums/CallPut",children:"enum - CallPut"})}),(0,r.jsx)(t.td,{children:"PRI"}),(0,r.jsx)(t.td,{children:"'Call'"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"opnPrice"}),(0,r.jsx)(t.td,{children:"DOUBLE"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"start of day SR open mark"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"opnVolatility"}),(0,r.jsx)(t.td,{children:"DOUBLE"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"start of day SR open mark volatility"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"clsPrice"}),(0,r.jsx)(t.td,{children:"DOUBLE"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"end of day SR close mark"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"clsVolatility"}),(0,r.jsx)(t.td,{children:"DOUBLE"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"end of day SR close mark volatility"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"minPrtPrc"}),(0,r.jsx)(t.td,{children:"DOUBLE"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"minimum print price within market hours"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"minPrtVol"}),(0,r.jsx)(t.td,{children:"DOUBLE"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"minimum print volatility within market hours"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"maxPrtPrc"}),(0,r.jsx)(t.td,{children:"DOUBLE"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"maximum print price within market hours"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"maxPrtVol"}),(0,r.jsx)(t.td,{children:"DOUBLE"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"maximum print volatility within market hours"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"openInterest"}),(0,r.jsx)(t.td,{children:"INT"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"bidCount"}),(0,r.jsx)(t.td,{children:"INT"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"num prints  SR surface mark"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"bidVolume"}),(0,r.jsx)(t.td,{children:"INT"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"volume when prtPrice  quotebid"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"askCount"}),(0,r.jsx)(t.td,{children:"INT"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"num prints  SR surface mark"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"askVolume"}),(0,r.jsx)(t.td,{children:"INT"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"volume when prtPrice  quoteask"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"midCount"}),(0,r.jsx)(t.td,{children:"INT"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"num prints inside quoteebid  quoteeask"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"midVolume"}),(0,r.jsx)(t.td,{children:"INT"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"volume inside quoteebid  quoteeask"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"prtCount"}),(0,r.jsx)(t.td,{children:"INT"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"number of distinct print reports"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"lastPrtPrice"}),(0,r.jsx)(t.td,{children:"DOUBLE"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"last print price"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"lastPrtVolatility"}),(0,r.jsx)(t.td,{children:"FLOAT"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"last print volatility"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"avgWidth"}),(0,r.jsx)(t.td,{children:"DOUBLE"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"average market width time weighted"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"avgBidSize"}),(0,r.jsx)(t.td,{children:"FLOAT"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"average bid size time weighted"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"avgAskSize"}),(0,r.jsx)(t.td,{children:"FLOAT"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"average ask size time weighted"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"lastPrint"}),(0,r.jsx)(t.td,{children:"DATETIME(6)"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"'1900-01-01 00:00:00.000000'"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"timestamp"}),(0,r.jsx)(t.td,{children:"DATETIME(6)"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"'1900-01-01 00:00:00.000000'"}),(0,r.jsx)(t.td,{})]})]})]}),"\n",(0,r.jsx)(t.h3,{id:"primary-key-definition-unique",children:"PRIMARY KEY DEFINITION (Unique)"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Field"}),(0,r.jsx)(t.th,{children:"Sequence"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"okey_tk"}),(0,r.jsx)(t.td,{children:"1"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"okey_yr"}),(0,r.jsx)(t.td,{children:"2"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"okey_mn"}),(0,r.jsx)(t.td,{children:"3"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"okey_dy"}),(0,r.jsx)(t.td,{children:"4"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"okey_xx"}),(0,r.jsx)(t.td,{children:"5"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"okey_cp"}),(0,r.jsx)(t.td,{children:"6"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"okey_at"}),(0,r.jsx)(t.td,{children:"7"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"okey_ts"}),(0,r.jsx)(t.td,{children:"8"})]})]})]}),"\n",(0,r.jsx)(t.h3,{id:"create-table-query",children:"CREATE TABLE QUERY"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sql",children:"CREATE TABLE `SRLive`.`MsgOptionMarketSummary` (\n    `okey_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None',\n    `okey_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','ESX','ANY','CXE','DXE','NXAM','NXBR','NXDUB','NXLS','NXLDN','NXML','NXMLT','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None',\n    `okey_tk` VARCHAR(12) NOT NULL DEFAULT '',\n    `okey_yr` SMALLINT UNSIGNED NOT NULL DEFAULT 0,\n    `okey_mn` TINYINT UNSIGNED NOT NULL DEFAULT 0,\n    `okey_dy` TINYINT UNSIGNED NOT NULL DEFAULT 0,\n    `okey_xx` DOUBLE NOT NULL DEFAULT 0,\n    `okey_cp` ENUM('Call','Put','Pair') NOT NULL DEFAULT 'Call',\n    `opnPrice` DOUBLE NOT NULL DEFAULT 0 COMMENT 'start of day (SR) open mark',\n    `opnVolatility` DOUBLE NOT NULL DEFAULT 0 COMMENT 'start of day (SR) open mark (volatility)',\n    `clsPrice` DOUBLE NOT NULL DEFAULT 0 COMMENT 'end of day (SR) close mark',\n    `clsVolatility` DOUBLE NOT NULL DEFAULT 0 COMMENT 'end of day (SR) close mark (volatility)',\n    `minPrtPrc` DOUBLE NOT NULL DEFAULT 0 COMMENT 'minimum print price within market hours',\n    `minPrtVol` DOUBLE NOT NULL DEFAULT 0 COMMENT 'minimum print volatility within market hours',\n    `maxPrtPrc` DOUBLE NOT NULL DEFAULT 0 COMMENT 'maximum print price within market hours',\n    `maxPrtVol` DOUBLE NOT NULL DEFAULT 0 COMMENT 'maximum print volatility within market hours',\n    `openInterest` INT NOT NULL DEFAULT 0,\n    `bidCount` INT NOT NULL DEFAULT 0 COMMENT 'num prints <= SR surface mark',\n    `bidVolume` INT NOT NULL DEFAULT 0 COMMENT 'volume when prtPrice <= quote.bid',\n    `askCount` INT NOT NULL DEFAULT 0 COMMENT 'num prints >= SR surface mark',\n    `askVolume` INT NOT NULL DEFAULT 0 COMMENT 'volume when prtPrice >= quote.ask',\n    `midCount` INT NOT NULL DEFAULT 0 COMMENT 'num prints inside quote.ebid / quote.eask',\n    `midVolume` INT NOT NULL DEFAULT 0 COMMENT 'volume inside quote.ebid / quote.eask',\n    `prtCount` INT NOT NULL DEFAULT 0 COMMENT 'number of distinct print reports',\n    `lastPrtPrice` DOUBLE NOT NULL DEFAULT 0 COMMENT 'last print price',\n    `lastPrtVolatility` FLOAT NOT NULL DEFAULT 0 COMMENT 'last print volatility',\n    `avgWidth` DOUBLE NOT NULL DEFAULT 0 COMMENT 'average market width (time weighted)',\n    `avgBidSize` FLOAT NOT NULL DEFAULT 0 COMMENT 'average bid size (time weighted)',\n    `avgAskSize` FLOAT NOT NULL DEFAULT 0 COMMENT 'average ask size (time weighted)',\n    `lastPrint` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000',\n    `timestamp` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000',\n    PRIMARY KEY USING HASH (`okey_tk`,`okey_yr`,`okey_mn`,`okey_dy`,`okey_xx`,`okey_cp`,`okey_at`,`okey_ts`)\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='These records represent live market summary snapshots for each active option';\n\n"})})]})}function j(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(x,{...e})}):x(e)}},28453:(e,t,d)=>{d.d(t,{R:()=>n,x:()=>l});var r=d(96540);const s={},i=r.createContext(s);function n(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:n(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);