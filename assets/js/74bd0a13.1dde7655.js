"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[46405],{98494:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var d=s(74848),n=s(28453);const r={},i=void 0,c={id:"MessageSchemas/Schema/SRSE Products/SRLive/ProductTradingStatusV2/ProductTradingStatusV2",title:"ProductTradingStatusV2",description:"V8 Message Definiton",source:"@site/docs/MessageSchemas/Schema/SRSE Products/SRLive/ProductTradingStatusV2/ProductTradingStatusV2.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRLive/ProductTradingStatusV2",slug:"/MessageSchemas/Schema/SRSE Products/SRLive/ProductTradingStatusV2/",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRLive/ProductTradingStatusV2/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"messageSchemasSidebar",previous:{title:"ProductTradingStatus",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRLive/ProductTradingStatus/"},next:{title:"RFQQuoteBroadcast",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRLive/RFQQuoteBroadcast/"}},a={},l=[{value:"METADATA",id:"metadata",level:3},{value:"Table Definition",id:"table-definition",level:3},{value:"PRIMARY KEY DEFINITION (Unique)",id:"primary-key-definition-unique",level:3},{value:"CREATE TABLE QUERY",id:"create-table-query",level:3}];function h(e){const t={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(t.p,{children:(0,d.jsx)(t.a,{href:"../../../Topics/product-status/ProductTradingStatusV2",children:"V8 Message Definiton"})}),"\n",(0,d.jsx)(t.p,{children:"This table contains live trading status records for entire product groups (futures and options) and asset groups and individual instruments"}),"\n",(0,d.jsx)(t.h3,{id:"metadata",children:"METADATA"}),"\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Attribute"}),(0,d.jsx)(t.th,{children:"Value"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"Topic"}),(0,d.jsx)(t.td,{children:"4440-product-status"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"MLink Token"}),(0,d.jsx)(t.td,{children:"SystemData"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"Product"}),(0,d.jsx)(t.td,{children:"SRLive"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"accessType"}),(0,d.jsx)(t.td,{children:"SELECT"})]})]})]}),"\n",(0,d.jsx)(t.h3,{id:"table-definition",children:"Table Definition"}),"\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Field"}),(0,d.jsx)(t.th,{children:"Type"}),(0,d.jsx)(t.th,{children:"Key"}),(0,d.jsx)(t.th,{children:"Default Value"}),(0,d.jsx)(t.th,{children:"Comment"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"secKey_at"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.a,{href:"../../../Enums/AssetType",children:"enum - AssetType"})}),(0,d.jsx)(t.td,{children:"PRI"}),(0,d.jsx)(t.td,{children:"'None'"}),(0,d.jsx)(t.td,{children:"trading status product key Interpretation depends on the status type"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"secKey_ts"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.a,{href:"../../../Enums/TickerSrc",children:"enum - TickerSrc"})}),(0,d.jsx)(t.td,{children:"PRI"}),(0,d.jsx)(t.td,{children:"'None'"}),(0,d.jsx)(t.td,{children:"trading status product key Interpretation depends on the status type"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"secKey_tk"}),(0,d.jsx)(t.td,{children:"VARCHAR(12)"}),(0,d.jsx)(t.td,{children:"PRI"}),(0,d.jsx)(t.td,{children:"''"}),(0,d.jsx)(t.td,{children:"trading status product key Interpretation depends on the status type"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"secKey_yr"}),(0,d.jsx)(t.td,{children:"SMALLINT UNSIGNED"}),(0,d.jsx)(t.td,{children:"PRI"}),(0,d.jsx)(t.td,{children:"0"}),(0,d.jsx)(t.td,{children:"trading status product key Interpretation depends on the status type"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"secKey_mn"}),(0,d.jsx)(t.td,{children:"TINYINT UNSIGNED"}),(0,d.jsx)(t.td,{children:"PRI"}),(0,d.jsx)(t.td,{children:"0"}),(0,d.jsx)(t.td,{children:"trading status product key Interpretation depends on the status type"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"secKey_dy"}),(0,d.jsx)(t.td,{children:"TINYINT UNSIGNED"}),(0,d.jsx)(t.td,{children:"PRI"}),(0,d.jsx)(t.td,{children:"0"}),(0,d.jsx)(t.td,{children:"trading status product key Interpretation depends on the status type"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"secKey_xx"}),(0,d.jsx)(t.td,{children:"DOUBLE"}),(0,d.jsx)(t.td,{children:"PRI"}),(0,d.jsx)(t.td,{children:"0"}),(0,d.jsx)(t.td,{children:"trading status product key Interpretation depends on the status type"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"secKey_cp"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.a,{href:"../../../Enums/CallPut",children:"enum - CallPut"})}),(0,d.jsx)(t.td,{children:"PRI"}),(0,d.jsx)(t.td,{children:"'Call'"}),(0,d.jsx)(t.td,{children:"trading status product key Interpretation depends on the status type"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"secType"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.a,{href:"../../../Enums/SpdrKeyType",children:"enum - SpdrKeyType"})}),(0,d.jsx)(t.td,{children:"PRI"}),(0,d.jsx)(t.td,{children:"'None'"}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"tradingStatusType"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.a,{href:"../../../Enums/TradingStatusType",children:"enum - TradingStatusType"})}),(0,d.jsx)(t.td,{children:"PRI"}),(0,d.jsx)(t.td,{children:"'None'"}),(0,d.jsx)(t.td,{children:"Processing level for the product trading status 1  statusKey is the product group key 2  statusKey is the security group key statusKey is for an individual instrument"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"tradeDate"}),(0,d.jsx)(t.td,{children:"DATE"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"1900-01-01"}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"marketStatus"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.a,{href:"../../../Enums/MarketStatus",children:"enum - MarketStatus"})}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"'None'"}),(0,d.jsx)(t.td,{children:"market status open halted etc"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"timestamp"}),(0,d.jsx)(t.td,{children:"DATETIME(6)"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"1900-01-01 00:00:00.000000"}),(0,d.jsx)(t.td,{children:"time of last state update CST"})]})]})]}),"\n",(0,d.jsx)(t.h3,{id:"primary-key-definition-unique",children:"PRIMARY KEY DEFINITION (Unique)"}),"\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Field"}),(0,d.jsx)(t.th,{children:"Sequence"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"secKey_tk"}),(0,d.jsx)(t.td,{children:"1"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"secKey_yr"}),(0,d.jsx)(t.td,{children:"2"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"secKey_mn"}),(0,d.jsx)(t.td,{children:"3"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"secKey_dy"}),(0,d.jsx)(t.td,{children:"4"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"secKey_xx"}),(0,d.jsx)(t.td,{children:"5"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"secKey_cp"}),(0,d.jsx)(t.td,{children:"6"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"secKey_at"}),(0,d.jsx)(t.td,{children:"7"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"secKey_ts"}),(0,d.jsx)(t.td,{children:"8"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"secType"}),(0,d.jsx)(t.td,{children:"9"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"tradingStatusType"}),(0,d.jsx)(t.td,{children:"10"})]})]})]}),"\n",(0,d.jsx)(t.h3,{id:"create-table-query",children:"CREATE TABLE QUERY"}),"\n",(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:"language-sql",children:"CREATE TABLE `SRLive`.`MsgProductTradingStatusV2` (\n    `secKey_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None' COMMENT 'trading status product key. Interpretation depends on the status type',\n    `secKey_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','ESX','ANY','CXE','DXE','NXAM','NXBR','NXDUB','NXLS','NXLDN','NXML','NXMLT','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None' COMMENT 'trading status product key. Interpretation depends on the status type',\n    `secKey_tk` VARCHAR(12) NOT NULL DEFAULT '' COMMENT 'trading status product key. Interpretation depends on the status type',\n    `secKey_yr` SMALLINT UNSIGNED NOT NULL DEFAULT 0 COMMENT 'trading status product key. Interpretation depends on the status type',\n    `secKey_mn` TINYINT UNSIGNED NOT NULL DEFAULT 0 COMMENT 'trading status product key. Interpretation depends on the status type',\n    `secKey_dy` TINYINT UNSIGNED NOT NULL DEFAULT 0 COMMENT 'trading status product key. Interpretation depends on the status type',\n    `secKey_xx` DOUBLE NOT NULL DEFAULT 0 COMMENT 'trading status product key. Interpretation depends on the status type',\n    `secKey_cp` ENUM('Call','Put','Pair') NOT NULL DEFAULT 'Call' COMMENT 'trading status product key. Interpretation depends on the status type',\n    `secType` ENUM('None','Stock','Future','Option','MLeg') NOT NULL DEFAULT 'None',\n    `tradingStatusType` ENUM('None','ProductGroup','SecurityGroup','Instrument') NOT NULL DEFAULT 'None' COMMENT 'Processing level for the product trading status: 1 = statusKey is the product group key, 2 = statusKey is the security group key, statusKey is for an individual instrument',\n    `tradeDate` DATE NOT NULL DEFAULT '1900-01-01',\n    `marketStatus` ENUM('None','PreOpen','PreCross','Cross','Open','Closed','Halted','AfterHours') NOT NULL DEFAULT 'None' COMMENT 'market status (open, halted, etc)',\n    `timestamp` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000' COMMENT 'time of last state update (CST)',\n    PRIMARY KEY USING HASH (`secKey_tk`,`secKey_yr`,`secKey_mn`,`secKey_dy`,`secKey_xx`,`secKey_cp`,`secKey_at`,`secKey_ts`,`secType`,`tradingStatusType`)\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='This table contains live trading status records for entire product groups (futures and options) and asset groups and individual instruments';\n\n"})})]})}function u(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(h,{...e})}):h(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>i,x:()=>c});var d=s(96540);const n={},r=d.createContext(n);function i(e){const t=d.useContext(r);return d.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),d.createElement(r.Provider,{value:t},e.children)}}}]);