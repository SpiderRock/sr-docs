"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[88715],{8381:(e,s,d)=>{d.r(s),d.d(s,{assets:()=>h,contentTitle:()=>n,default:()=>x,frontMatter:()=>t,metadata:()=>c,toc:()=>a});var r=d(74848),i=d(28453);const t={},n=void 0,c={id:"MessageSchemas/Schema/SRSE Products/SRSpread/SpreadBookQuote/SpreadBookQuote",title:"SpreadBookQuote",description:"V8 Message Definiton",source:"@site/docs/MessageSchemas/Schema/SRSE Products/SRSpread/SpreadBookQuote/SpreadBookQuote.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRSpread/SpreadBookQuote",slug:"/MessageSchemas/Schema/SRSE Products/SRSpread/SpreadBookQuote/",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRSpread/SpreadBookQuote/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"messageSchemasSidebar",previous:{title:"SpreadBookMarkup",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRSpread/SpreadBookMarkup/"},next:{title:"SpreadCloseMark",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRSpread/SpreadCloseMark/"}},h={},a=[{value:"METADATA",id:"metadata",level:3},{value:"Table Definition",id:"table-definition",level:3},{value:"PRIMARY KEY DEFINITION (Unique)",id:"primary-key-definition-unique",level:3},{value:"CREATE TABLE QUERY",id:"create-table-query",level:3}];function l(e){const s={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.p,{children:(0,r.jsx)(s.a,{href:"../../../Topics/market-data-spreads/SpreadBookQuote",children:"V8 Message Definiton"})}),"\n",(0,r.jsx)(s.p,{children:"This table contains live spread quote records from the individual equity option exchanges.  Each record contains up to two price levels and represents a live snapshot of the book for a specific spread."}),"\n",(0,r.jsx)(s.h3,{id:"metadata",children:"METADATA"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Attribute"}),(0,r.jsx)(s.th,{children:"Value"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Topic"}),(0,r.jsx)(s.td,{children:"2895-market-data-spreads"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"MLink Token"}),(0,r.jsx)(s.td,{children:"SpreadMktData"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Product"}),(0,r.jsx)(s.td,{children:"SRSpread"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"accessType"}),(0,r.jsx)(s.td,{children:"SELECT"})]})]})]}),"\n",(0,r.jsx)(s.h3,{id:"table-definition",children:"Table Definition"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Field"}),(0,r.jsx)(s.th,{children:"Type"}),(0,r.jsx)(s.th,{children:"Key"}),(0,r.jsx)(s.th,{children:"Default Value"}),(0,r.jsx)(s.th,{children:"Comment"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"skey_at"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"../../../Enums/AssetType",children:"enum - AssetType"})}),(0,r.jsx)(s.td,{children:"PRI"}),(0,r.jsx)(s.td,{children:"'None'"}),(0,r.jsx)(s.td,{children:"SR Spread Key should have corresponding ProductDefinition record"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"skey_ts"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"../../../Enums/TickerSrc",children:"enum - TickerSrc"})}),(0,r.jsx)(s.td,{children:"PRI"}),(0,r.jsx)(s.td,{children:"'None'"}),(0,r.jsx)(s.td,{children:"SR Spread Key should have corresponding ProductDefinition record"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"skey_tk"}),(0,r.jsx)(s.td,{children:"VARCHAR(12)"}),(0,r.jsx)(s.td,{children:"PRI"}),(0,r.jsx)(s.td,{children:"''"}),(0,r.jsx)(s.td,{children:"SR Spread Key should have corresponding ProductDefinition record"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"isTest"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"../../../Enums/YesNo",children:"enum - YesNo"})}),(0,r.jsx)(s.td,{children:"PRI"}),(0,r.jsx)(s.td,{children:"'None'"}),(0,r.jsx)(s.td,{children:"Yes indicates that response is made of entirely of isTestYes SpreadExchOrders"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"ticker_at"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"../../../Enums/AssetType",children:"enum - AssetType"})}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"'None'"}),(0,r.jsx)(s.td,{children:"common spread underlier"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"ticker_ts"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"../../../Enums/TickerSrc",children:"enum - TickerSrc"})}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"'None'"}),(0,r.jsx)(s.td,{children:"common spread underlier"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"ticker_tk"}),(0,r.jsx)(s.td,{children:"VARCHAR(12)"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"''"}),(0,r.jsx)(s.td,{children:"common spread underlier"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"SRspreadID"}),(0,r.jsx)(s.td,{children:"BIGINT"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"0"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"bidPrice1"}),(0,r.jsx)(s.td,{children:"DOUBLE"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"0"}),(0,r.jsx)(s.td,{children:"bid price"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"isBidPrice1Valid"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"../../../Enums/YesNo",children:"enum - YesNo"})}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"'None'"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"askPrice1"}),(0,r.jsx)(s.td,{children:"DOUBLE"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"0"}),(0,r.jsx)(s.td,{children:"ask price"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"isAskPrice1Valid"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"../../../Enums/YesNo",children:"enum - YesNo"})}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"'None'"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"bidSize1"}),(0,r.jsx)(s.td,{children:"INT"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"0"}),(0,r.jsx)(s.td,{children:"cumulative size at bidPrice"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"askSize1"}),(0,r.jsx)(s.td,{children:"INT"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"0"}),(0,r.jsx)(s.td,{children:"cumulative size at askPrice"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"bidPrice2"}),(0,r.jsx)(s.td,{children:"DOUBLE"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"0"}),(0,r.jsx)(s.td,{children:"2nd best bid price"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"isBidPrice2Valid"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"../../../Enums/YesNo",children:"enum - YesNo"})}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"'None'"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"askPrice2"}),(0,r.jsx)(s.td,{children:"DOUBLE"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"0"}),(0,r.jsx)(s.td,{children:"2nd best ask price"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"isAskPrice2Valid"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"../../../Enums/YesNo",children:"enum - YesNo"})}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"'None'"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"bidSize2"}),(0,r.jsx)(s.td,{children:"INT"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"0"}),(0,r.jsx)(s.td,{children:"cumulative size at 2nd price"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"askSize2"}),(0,r.jsx)(s.td,{children:"INT"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"0"}),(0,r.jsx)(s.td,{children:"cumulative size at 2nd price"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"bidExch1"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"../../../Enums/OptExch",children:"enum - OptExch"})}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"'None'"}),(0,r.jsx)(s.td,{children:"exchange at bid price with the largest size if any"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"askExch1"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"../../../Enums/OptExch",children:"enum - OptExch"})}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"'None'"}),(0,r.jsx)(s.td,{children:"exchange at ask price with the largest size if any"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"bidMask1"}),(0,r.jsx)(s.td,{children:"INT UNSIGNED"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"0"}),(0,r.jsx)(s.td,{children:"exchange bid bit mask OptExch mask for NMS spreads zero for single exchange spreads"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"askMask1"}),(0,r.jsx)(s.td,{children:"INT UNSIGNED"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"0"}),(0,r.jsx)(s.td,{children:"exchange ask bit mask OptExch mask for NMS spreads zero for single exchange spreads"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"bidTime"}),(0,r.jsx)(s.td,{children:"DATETIME(6)"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"1900-01-01 00:00:00.000000"}),(0,r.jsx)(s.td,{children:"last bid price or size change"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"askTime"}),(0,r.jsx)(s.td,{children:"DATETIME(6)"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"1900-01-01 00:00:00.000000"}),(0,r.jsx)(s.td,{children:"last ask price or size change"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"printVolume"}),(0,r.jsx)(s.td,{children:"INT"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"0"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"updateType"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"../../../Enums/UpdateType",children:"enum - UpdateType"})}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"'None'"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"srcTimestamp"}),(0,r.jsx)(s.td,{children:"BIGINT"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"0"}),(0,r.jsx)(s.td,{children:"source high precision timestamp if available"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"netTimestamp"}),(0,r.jsx)(s.td,{children:"BIGINT"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"0"}),(0,r.jsx)(s.td,{children:"inbound packet PTP timestamp from SR gateway switchusually syncronized with facility grandfather clock"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"timestamp"}),(0,r.jsx)(s.td,{children:"DATETIME(6)"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"1900-01-01 00:00:00.000000"}),(0,r.jsx)(s.td,{})]})]})]}),"\n",(0,r.jsx)(s.h3,{id:"primary-key-definition-unique",children:"PRIMARY KEY DEFINITION (Unique)"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Field"}),(0,r.jsx)(s.th,{children:"Sequence"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"skey_tk"}),(0,r.jsx)(s.td,{children:"1"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"skey_at"}),(0,r.jsx)(s.td,{children:"2"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"skey_ts"}),(0,r.jsx)(s.td,{children:"3"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"isTest"}),(0,r.jsx)(s.td,{children:"4"})]})]})]}),"\n",(0,r.jsx)(s.h3,{id:"create-table-query",children:"CREATE TABLE QUERY"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-sql",children:"CREATE TABLE `SRSpread`.`MsgSpreadBookQuote` (\n    `skey_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None' COMMENT 'SR Spread Key (should have corresponding ProductDefinition record)',\n    `skey_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','ESX','ANY','CXE','DXE','NXAM','NXBR','NXDUB','NXLS','NXLDN','NXML','NXMLT','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None' COMMENT 'SR Spread Key (should have corresponding ProductDefinition record)',\n    `skey_tk` VARCHAR(12) NOT NULL DEFAULT '' COMMENT 'SR Spread Key (should have corresponding ProductDefinition record)',\n    `isTest` ENUM('None','Yes','No') NOT NULL DEFAULT 'None' COMMENT 'Yes indicates that response is made of entirely of isTest=Yes SpreadExchOrders',\n    `ticker_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None' COMMENT 'common spread underlier',\n    `ticker_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','ESX','ANY','CXE','DXE','NXAM','NXBR','NXDUB','NXLS','NXLDN','NXML','NXMLT','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None' COMMENT 'common spread underlier',\n    `ticker_tk` VARCHAR(12) NOT NULL DEFAULT '' COMMENT 'common spread underlier',\n    `SRspreadID` BIGINT NOT NULL DEFAULT 0,\n    `bidPrice1` DOUBLE NOT NULL DEFAULT 0 COMMENT 'bid price',\n    `isBidPrice1Valid` ENUM('None','Yes','No') NOT NULL DEFAULT 'None',\n    `askPrice1` DOUBLE NOT NULL DEFAULT 0 COMMENT 'ask price',\n    `isAskPrice1Valid` ENUM('None','Yes','No') NOT NULL DEFAULT 'None',\n    `bidSize1` INT NOT NULL DEFAULT 0 COMMENT 'cumulative size at bidPrice',\n    `askSize1` INT NOT NULL DEFAULT 0 COMMENT 'cumulative size at askPrice',\n    `bidPrice2` DOUBLE NOT NULL DEFAULT 0 COMMENT '2nd best bid price',\n    `isBidPrice2Valid` ENUM('None','Yes','No') NOT NULL DEFAULT 'None',\n    `askPrice2` DOUBLE NOT NULL DEFAULT 0 COMMENT '2nd best ask price',\n    `isAskPrice2Valid` ENUM('None','Yes','No') NOT NULL DEFAULT 'None',\n    `bidSize2` INT NOT NULL DEFAULT 0 COMMENT 'cumulative size at 2nd price',\n    `askSize2` INT NOT NULL DEFAULT 0 COMMENT 'cumulative size at 2nd price',\n    `bidExch1` ENUM('None','AMEX','BOX','CBOE','ISE','NYSE','PHLX','NSDQ','BATS','C2','NQBX','MIAX','GMNI','CME','CBOT','NYMEX','COMEX','ICE','EDGO','MCRY','MPRL','SDRK','DQTE','EMLD','CFE','MEMX','EUREX','CEDX','NXAM','NXBR','NXLS','NXML','NXOS','NXP','ICEFE') NOT NULL DEFAULT 'None' COMMENT 'exchange at bid price with the largest size (if any)',\n    `askExch1` ENUM('None','AMEX','BOX','CBOE','ISE','NYSE','PHLX','NSDQ','BATS','C2','NQBX','MIAX','GMNI','CME','CBOT','NYMEX','COMEX','ICE','EDGO','MCRY','MPRL','SDRK','DQTE','EMLD','CFE','MEMX','EUREX','CEDX','NXAM','NXBR','NXLS','NXML','NXOS','NXP','ICEFE') NOT NULL DEFAULT 'None' COMMENT 'exchange at ask price with the largest size (if any)',\n    `bidMask1` INT UNSIGNED NOT NULL DEFAULT 0 COMMENT 'exchange bid bit mask (OptExch mask for NMS spreads; zero for single exchange spreads)',\n    `askMask1` INT UNSIGNED NOT NULL DEFAULT 0 COMMENT 'exchange ask bit mask (OptExch mask for NMS spreads; zero for single exchange spreads)',\n    `bidTime` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000' COMMENT 'last bid price or size change',\n    `askTime` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000' COMMENT 'last ask price or size change',\n    `printVolume` INT NOT NULL DEFAULT 0,\n    `updateType` ENUM('None','PrcChange','SizeOnly','PrevPeriod') NOT NULL DEFAULT 'None',\n    `srcTimestamp` BIGINT NOT NULL DEFAULT 0 COMMENT 'source high precision timestamp (if available)',\n    `netTimestamp` BIGINT NOT NULL DEFAULT 0 COMMENT 'inbound packet PTP timestamp from SR gateway switch;usually syncronized with facility grandfather clock',\n    `timestamp` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000',\n    PRIMARY KEY USING HASH (`skey_tk`,`skey_at`,`skey_ts`,`isTest`)\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='This table contains live spread quote records from the individual equity option exchanges.  Each record contains up to two price levels and represents a live snapshot of the book for a specific spread.';\n\n"})})]})}function x(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},28453:(e,s,d)=>{d.d(s,{R:()=>n,x:()=>c});var r=d(96540);const i={},t=r.createContext(i);function n(e){const s=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:n(e.components),r.createElement(t.Provider,{value:s},e.children)}}}]);