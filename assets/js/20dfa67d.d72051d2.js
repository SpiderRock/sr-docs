"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[27207],{69616:(d,e,s)=>{s.r(e),s.d(e,{assets:()=>l,contentTitle:()=>r,default:()=>j,frontMatter:()=>n,metadata:()=>c,toc:()=>h});var t=s(74848),i=s(28453);const n={},r=void 0,c={id:"MessageSchemas/Schema/SRSE Products/SRAnalytics/HistoricalVolatilities/HistoricalVolatilities",title:"HistoricalVolatilities",description:"V8 Message Definiton",source:"@site/docs/MessageSchemas/Schema/SRSE Products/SRAnalytics/HistoricalVolatilities/HistoricalVolatilities.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRAnalytics/HistoricalVolatilities",slug:"/MessageSchemas/Schema/SRSE Products/SRAnalytics/HistoricalVolatilities/",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRAnalytics/HistoricalVolatilities/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"messageSchemasSidebar",previous:{title:"GlobalRates",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRAnalytics/GlobalRates/"},next:{title:"IndustryDefinition",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRAnalytics/IndustryDefinition/"}},l={},h=[{value:"METADATA",id:"metadata",level:3},{value:"Table Definition",id:"table-definition",level:3},{value:"PRIMARY KEY DEFINITION (Unique)",id:"primary-key-definition-unique",level:3},{value:"CREATE TABLE QUERY",id:"create-table-query",level:3}];function x(d){const e={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...d.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.p,{children:(0,t.jsx)(e.a,{href:"../../../Topics/market-statistics/HistoricalVolatilities",children:"V8 Message Definiton"})}),"\n",(0,t.jsx)(e.p,{children:"Values in this table are computed daily and are calculated from end-of-day marks from the previous period.  Official exchange closing values are used where possible.\\nHistoricalVolatility records are published to the SpiderRock elastic cluster nightly."}),"\n",(0,t.jsx)(e.h3,{id:"metadata",children:"METADATA"}),"\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"Attribute"}),(0,t.jsx)(e.th,{children:"Value"})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Topic"}),(0,t.jsx)(e.td,{children:"3225-market-statistics"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"MLink Token"}),(0,t.jsx)(e.td,{children:"OptSurface"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Product"}),(0,t.jsx)(e.td,{children:"SRAnalytics"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"accessType"}),(0,t.jsx)(e.td,{children:"SELECT"})]})]})]}),"\n",(0,t.jsx)(e.h3,{id:"table-definition",children:"Table Definition"}),"\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"Field"}),(0,t.jsx)(e.th,{children:"Type"}),(0,t.jsx)(e.th,{children:"Key"}),(0,t.jsx)(e.th,{children:"Default Value"}),(0,t.jsx)(e.th,{children:"Comment"})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"ticker_at"}),(0,t.jsx)(e.td,{children:(0,t.jsx)(e.a,{href:"../../../Enums/AssetType",children:"enum - AssetType"})}),(0,t.jsx)(e.td,{children:"PRI"}),(0,t.jsx)(e.td,{children:"'None'"}),(0,t.jsx)(e.td,{})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"ticker_ts"}),(0,t.jsx)(e.td,{children:(0,t.jsx)(e.a,{href:"../../../Enums/TickerSrc",children:"enum - TickerSrc"})}),(0,t.jsx)(e.td,{children:"PRI"}),(0,t.jsx)(e.td,{children:"'None'"}),(0,t.jsx)(e.td,{})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"ticker_tk"}),(0,t.jsx)(e.td,{children:"VARCHAR(12)"}),(0,t.jsx)(e.td,{children:"PRI"}),(0,t.jsx)(e.td,{children:"''"}),(0,t.jsx)(e.td,{})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"windowType"}),(0,t.jsx)(e.td,{children:"VARCHAR(12)"}),(0,t.jsx)(e.td,{children:"PRI"}),(0,t.jsx)(e.td,{children:"''"}),(0,t.jsx)(e.td,{children:"eg cc ccCen ccClCen hl hlCen iv63 iv126 etc"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"date"}),(0,t.jsx)(e.td,{children:"VARCHAR(10)"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"''"}),(0,t.jsx)(e.td,{children:"most recent closing date"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"securityID"}),(0,t.jsx)(e.td,{children:"INT"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"0"}),(0,t.jsx)(e.td,{})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"value"}),(0,t.jsx)(e.td,{children:"FLOAT"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"0"}),(0,t.jsx)(e.td,{children:"most recent historical value"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"mv_5d"}),(0,t.jsx)(e.td,{children:"FLOAT"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"0"}),(0,t.jsx)(e.td,{children:"historical mean value 5 day window"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"sd_5d"}),(0,t.jsx)(e.td,{children:"FLOAT"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"0"}),(0,t.jsx)(e.td,{children:"historical std dev 5 day window"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"mv_10d"}),(0,t.jsx)(e.td,{children:"FLOAT"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"0"}),(0,t.jsx)(e.td,{})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"sd_10d"}),(0,t.jsx)(e.td,{children:"FLOAT"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"0"}),(0,t.jsx)(e.td,{})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"mv_21d"}),(0,t.jsx)(e.td,{children:"FLOAT"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"0"}),(0,t.jsx)(e.td,{})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"sd_21d"}),(0,t.jsx)(e.td,{children:"FLOAT"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"0"}),(0,t.jsx)(e.td,{})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"mv_42d"}),(0,t.jsx)(e.td,{children:"FLOAT"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"0"}),(0,t.jsx)(e.td,{})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"sd_42d"}),(0,t.jsx)(e.td,{children:"FLOAT"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"0"}),(0,t.jsx)(e.td,{})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"mv_63d"}),(0,t.jsx)(e.td,{children:"FLOAT"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"0"}),(0,t.jsx)(e.td,{})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"sd_63d"}),(0,t.jsx)(e.td,{children:"FLOAT"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"0"}),(0,t.jsx)(e.td,{})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"mv_84d"}),(0,t.jsx)(e.td,{children:"FLOAT"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"0"}),(0,t.jsx)(e.td,{})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"sd_84d"}),(0,t.jsx)(e.td,{children:"FLOAT"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"0"}),(0,t.jsx)(e.td,{})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"mv_105d"}),(0,t.jsx)(e.td,{children:"FLOAT"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"0"}),(0,t.jsx)(e.td,{})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"sd_105d"}),(0,t.jsx)(e.td,{children:"FLOAT"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"0"}),(0,t.jsx)(e.td,{})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"mv_126d"}),(0,t.jsx)(e.td,{children:"FLOAT"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"0"}),(0,t.jsx)(e.td,{})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"sd_126d"}),(0,t.jsx)(e.td,{children:"FLOAT"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"0"}),(0,t.jsx)(e.td,{})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"mv_189d"}),(0,t.jsx)(e.td,{children:"FLOAT"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"0"}),(0,t.jsx)(e.td,{})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"sd_189d"}),(0,t.jsx)(e.td,{children:"FLOAT"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"0"}),(0,t.jsx)(e.td,{})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"mv_252d"}),(0,t.jsx)(e.td,{children:"FLOAT"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"0"}),(0,t.jsx)(e.td,{})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"sd_252d"}),(0,t.jsx)(e.td,{children:"FLOAT"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"0"}),(0,t.jsx)(e.td,{})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"mv_378d"}),(0,t.jsx)(e.td,{children:"FLOAT"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"0"}),(0,t.jsx)(e.td,{})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"sd_378d"}),(0,t.jsx)(e.td,{children:"FLOAT"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"0"}),(0,t.jsx)(e.td,{})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"mv_504d"}),(0,t.jsx)(e.td,{children:"FLOAT"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"0"}),(0,t.jsx)(e.td,{})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"sd_504d"}),(0,t.jsx)(e.td,{children:"FLOAT"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"0"}),(0,t.jsx)(e.td,{})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"timestamp"}),(0,t.jsx)(e.td,{children:"DATETIME(6)"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"1900-01-01 00:00:00.000000"}),(0,t.jsx)(e.td,{children:"record update timestamp"})]})]})]}),"\n",(0,t.jsx)(e.h3,{id:"primary-key-definition-unique",children:"PRIMARY KEY DEFINITION (Unique)"}),"\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"Field"}),(0,t.jsx)(e.th,{children:"Sequence"})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"ticker_tk"}),(0,t.jsx)(e.td,{children:"1"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"ticker_at"}),(0,t.jsx)(e.td,{children:"2"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"ticker_ts"}),(0,t.jsx)(e.td,{children:"3"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"windowType"}),(0,t.jsx)(e.td,{children:"4"})]})]})]}),"\n",(0,t.jsx)(e.h3,{id:"create-table-query",children:"CREATE TABLE QUERY"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sql",children:"CREATE TABLE `SRAnalytics`.`MsgHistoricalVolatilities` (\n    `ticker_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None',\n    `ticker_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','ESX','ANY','CXE','DXE','NXAM','NXBR','NXDUB','NXLS','NXLDN','NXML','NXMLT','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None',\n    `ticker_tk` VARCHAR(12) NOT NULL DEFAULT '',\n    `windowType` VARCHAR(12) NOT NULL DEFAULT '' COMMENT 'eg. cc, ccCen, ccClCen, hl, hlCen, iv63, iv126, etc',\n    `date` VARCHAR(10) NOT NULL DEFAULT '' COMMENT 'most recent closing date',\n    `securityID` INT NOT NULL DEFAULT 0,\n    `value` FLOAT NOT NULL DEFAULT 0 COMMENT 'most recent historical value',\n    `mv_5d` FLOAT NOT NULL DEFAULT 0 COMMENT 'historical mean value (5 day window)',\n    `sd_5d` FLOAT NOT NULL DEFAULT 0 COMMENT 'historical std dev (5 day window)',\n    `mv_10d` FLOAT NOT NULL DEFAULT 0,\n    `sd_10d` FLOAT NOT NULL DEFAULT 0,\n    `mv_21d` FLOAT NOT NULL DEFAULT 0,\n    `sd_21d` FLOAT NOT NULL DEFAULT 0,\n    `mv_42d` FLOAT NOT NULL DEFAULT 0,\n    `sd_42d` FLOAT NOT NULL DEFAULT 0,\n    `mv_63d` FLOAT NOT NULL DEFAULT 0,\n    `sd_63d` FLOAT NOT NULL DEFAULT 0,\n    `mv_84d` FLOAT NOT NULL DEFAULT 0,\n    `sd_84d` FLOAT NOT NULL DEFAULT 0,\n    `mv_105d` FLOAT NOT NULL DEFAULT 0,\n    `sd_105d` FLOAT NOT NULL DEFAULT 0,\n    `mv_126d` FLOAT NOT NULL DEFAULT 0,\n    `sd_126d` FLOAT NOT NULL DEFAULT 0,\n    `mv_189d` FLOAT NOT NULL DEFAULT 0,\n    `sd_189d` FLOAT NOT NULL DEFAULT 0,\n    `mv_252d` FLOAT NOT NULL DEFAULT 0,\n    `sd_252d` FLOAT NOT NULL DEFAULT 0,\n    `mv_378d` FLOAT NOT NULL DEFAULT 0,\n    `sd_378d` FLOAT NOT NULL DEFAULT 0,\n    `mv_504d` FLOAT NOT NULL DEFAULT 0,\n    `sd_504d` FLOAT NOT NULL DEFAULT 0,\n    `timestamp` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000' COMMENT 'record update timestamp',\n    PRIMARY KEY USING HASH (`ticker_tk`,`ticker_at`,`ticker_ts`,`windowType`)\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='Values in this table are computed daily and are calculated from end-of-day marks from the previous period.  Official exchange closing values are used where possible.\\nHistoricalVolatility records are published to the SpiderRock elastic cluster nightly.';\n\n"})})]})}function j(d={}){const{wrapper:e}={...(0,i.R)(),...d.components};return e?(0,t.jsx)(e,{...d,children:(0,t.jsx)(x,{...d})}):x(d)}},28453:(d,e,s)=>{s.d(e,{R:()=>r,x:()=>c});var t=s(96540);const i={},n=t.createContext(i);function r(d){const e=t.useContext(n);return t.useMemo((function(){return"function"==typeof d?d(e):{...e,...d}}),[e,d])}function c(d){let e;return e=d.disableParentContext?"function"==typeof d.components?d.components(i):d.components||i:r(d.components),t.createElement(n.Provider,{value:e},d.children)}}}]);