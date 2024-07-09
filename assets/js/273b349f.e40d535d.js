"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[84509],{52988:(e,d,n)=>{n.r(d),n.d(d,{assets:()=>l,contentTitle:()=>i,default:()=>j,frontMatter:()=>t,metadata:()=>c,toc:()=>x});var s=n(74848),r=n(28453);const t={},i=void 0,c={id:"MessageSchemas/Schema/SRSE Products/SRAnalytics/OptionRiskFactor/OptionRiskFactor",title:"OptionRiskFactor",description:"V8 Message Definiton",source:"@site/docs/MessageSchemas/Schema/SRSE Products/SRAnalytics/OptionRiskFactor/OptionRiskFactor.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRAnalytics/OptionRiskFactor",slug:"/MessageSchemas/Schema/SRSE Products/SRAnalytics/OptionRiskFactor/",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRAnalytics/OptionRiskFactor/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"messageSchemasSidebar",previous:{title:"OptionQuoteProbability",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRAnalytics/OptionQuoteProbability/"},next:{title:"ProductDefinitionV2",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRAnalytics/ProductDefinitionV2/"}},l={},x=[{value:"METADATA",id:"metadata",level:3},{value:"Table Definition",id:"table-definition",level:3},{value:"PRIMARY KEY DEFINITION (Unique)",id:"primary-key-definition-unique",level:3},{value:"SECONDARY INDEX (ExpirationIndex) (Not Unique)",id:"secondary-index-expirationindex-not-unique",level:3},{value:"SECONDARY INDEX (TickerIndex) (Not Unique)",id:"secondary-index-tickerindex-not-unique",level:3},{value:"CREATE TABLE QUERY",id:"create-table-query",level:3}];function h(e){const d={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(d.p,{children:(0,s.jsx)(d.a,{href:"../../../Topics/analytics/OptionRiskFactor",children:"V8 Message Definiton"})}),"\n",(0,s.jsx)(d.h3,{id:"metadata",children:"METADATA"}),"\n",(0,s.jsxs)(d.table,{children:[(0,s.jsx)(d.thead,{children:(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.th,{children:"Attribute"}),(0,s.jsx)(d.th,{children:"Value"})]})}),(0,s.jsxs)(d.tbody,{children:[(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"Topic"}),(0,s.jsx)(d.td,{children:"1000-analytics"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"MLink Token"}),(0,s.jsx)(d.td,{children:"OptAnalytics"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"Product"}),(0,s.jsx)(d.td,{children:"SRAnalytics"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"accessType"}),(0,s.jsx)(d.td,{children:"SELECT"})]})]})]}),"\n",(0,s.jsx)(d.h3,{id:"table-definition",children:"Table Definition"}),"\n",(0,s.jsxs)(d.table,{children:[(0,s.jsx)(d.thead,{children:(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.th,{children:"Field"}),(0,s.jsx)(d.th,{children:"Type"}),(0,s.jsx)(d.th,{children:"Key"}),(0,s.jsx)(d.th,{children:"Comment"})]})}),(0,s.jsxs)(d.tbody,{children:[(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"okey_at"}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.a,{href:"../../../Enums/AssetType",children:"enum - AssetType"})}),(0,s.jsx)(d.td,{children:"PRI"}),(0,s.jsx)(d.td,{})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"okey_ts"}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.a,{href:"../../../Enums/TickerSrc",children:"enum - TickerSrc"})}),(0,s.jsx)(d.td,{children:"PRI"}),(0,s.jsx)(d.td,{})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"okey_tk"}),(0,s.jsx)(d.td,{children:"VARCHAR(12)"}),(0,s.jsx)(d.td,{children:"PRI"}),(0,s.jsx)(d.td,{})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"okey_yr"}),(0,s.jsx)(d.td,{children:"SMALLINT UNSIGNED"}),(0,s.jsx)(d.td,{children:"PRI"}),(0,s.jsx)(d.td,{})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"okey_mn"}),(0,s.jsx)(d.td,{children:"TINYINT UNSIGNED"}),(0,s.jsx)(d.td,{children:"PRI"}),(0,s.jsx)(d.td,{})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"okey_dy"}),(0,s.jsx)(d.td,{children:"TINYINT UNSIGNED"}),(0,s.jsx)(d.td,{children:"PRI"}),(0,s.jsx)(d.td,{})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"okey_xx"}),(0,s.jsx)(d.td,{children:"DOUBLE"}),(0,s.jsx)(d.td,{children:"PRI"}),(0,s.jsx)(d.td,{})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"okey_cp"}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.a,{href:"../../../Enums/CallPut",children:"enum - CallPut"})}),(0,s.jsx)(d.td,{children:"PRI"}),(0,s.jsx)(d.td,{})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"ticker_at"}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.a,{href:"../../../Enums/AssetType",children:"enum - AssetType"})}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"ticker_ts"}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.a,{href:"../../../Enums/TickerSrc",children:"enum - TickerSrc"})}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"ticker_tk"}),(0,s.jsx)(d.td,{children:"VARCHAR(12)"}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"svol"}),(0,s.jsx)(d.td,{children:"FLOAT"}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:"option surface volatility"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"years"}),(0,s.jsx)(d.td,{children:"FLOAT"}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:"years to expiration"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"up50"}),(0,s.jsx)(d.td,{children:"FLOAT"}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:"underlier up 50 slide"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"dn50"}),(0,s.jsx)(d.td,{children:"FLOAT"}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:"underlier dn 50 slide"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"up15"}),(0,s.jsx)(d.td,{children:"FLOAT"}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:"underlier up 15 slide"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"dn15"}),(0,s.jsx)(d.td,{children:"FLOAT"}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:"underlier dn 15 slide"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"up12"}),(0,s.jsx)(d.td,{children:"FLOAT"}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:"underlier up 12 slide"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"dn12"}),(0,s.jsx)(d.td,{children:"FLOAT"}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:"underlier dn 12 slide"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"up09"}),(0,s.jsx)(d.td,{children:"FLOAT"}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:"underlier up 9 slide"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"dn09"}),(0,s.jsx)(d.td,{children:"FLOAT"}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:"underlier dn 9 slide"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"dn08"}),(0,s.jsx)(d.td,{children:"FLOAT"}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:"underlier dn 8 slide"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"up06"}),(0,s.jsx)(d.td,{children:"FLOAT"}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:"underlier up 6 slide"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"dn06"}),(0,s.jsx)(d.td,{children:"FLOAT"}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:"underlier dn 6 slide"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"up03"}),(0,s.jsx)(d.td,{children:"FLOAT"}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:"underlier up 3 slide"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"dn03"}),(0,s.jsx)(d.td,{children:"FLOAT"}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:"underlier dn 3 slide"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"calcErr"}),(0,s.jsx)(d.td,{children:"VARCHAR(24)"}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:"option pricing error otherwise an empty string"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"calcSource"}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.a,{href:"../../../Enums/CalcSource",children:"enum - CalcSource"})}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"timestamp"}),(0,s.jsx)(d.td,{children:"DATETIME(6)"}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{})]})]})]}),"\n",(0,s.jsx)(d.h3,{id:"primary-key-definition-unique",children:"PRIMARY KEY DEFINITION (Unique)"}),"\n",(0,s.jsxs)(d.table,{children:[(0,s.jsx)(d.thead,{children:(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.th,{children:"Field"}),(0,s.jsx)(d.th,{children:"Sequence"})]})}),(0,s.jsxs)(d.tbody,{children:[(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"okey_tk"}),(0,s.jsx)(d.td,{children:"1"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"okey_yr"}),(0,s.jsx)(d.td,{children:"2"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"okey_mn"}),(0,s.jsx)(d.td,{children:"3"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"okey_dy"}),(0,s.jsx)(d.td,{children:"4"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"okey_xx"}),(0,s.jsx)(d.td,{children:"5"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"okey_cp"}),(0,s.jsx)(d.td,{children:"6"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"okey_at"}),(0,s.jsx)(d.td,{children:"7"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"okey_ts"}),(0,s.jsx)(d.td,{children:"8"})]})]})]}),"\n",(0,s.jsx)(d.h3,{id:"secondary-index-expirationindex-not-unique",children:"SECONDARY INDEX (ExpirationIndex) (Not Unique)"}),"\n",(0,s.jsxs)(d.table,{children:[(0,s.jsx)(d.thead,{children:(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.th,{children:"Field"}),(0,s.jsx)(d.th,{children:"Sequence"})]})}),(0,s.jsxs)(d.tbody,{children:[(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"okey_yr"}),(0,s.jsx)(d.td,{children:"1"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"okey_mn"}),(0,s.jsx)(d.td,{children:"2"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"okey_dy"}),(0,s.jsx)(d.td,{children:"3"})]})]})]}),"\n",(0,s.jsx)(d.h3,{id:"secondary-index-tickerindex-not-unique",children:"SECONDARY INDEX (TickerIndex) (Not Unique)"}),"\n",(0,s.jsxs)(d.table,{children:[(0,s.jsx)(d.thead,{children:(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.th,{children:"Field"}),(0,s.jsx)(d.th,{children:"Sequence"})]})}),(0,s.jsx)(d.tbody,{children:(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"ticker_tk"}),(0,s.jsx)(d.td,{children:"1"})]})})]}),"\n",(0,s.jsx)(d.h3,{id:"create-table-query",children:"CREATE TABLE QUERY"}),"\n",(0,s.jsx)(d.pre,{children:(0,s.jsx)(d.code,{className:"language-sql",children:"CREATE TABLE `SRAnalytics`.`MsgOptionRiskFactor` (\n    `okey_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None',\n    `okey_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','ESX','ANY','CXE','DXE','NXAM','NXBR','NXDUB','NXLS','NXLDN','NXML','NXMLT','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None',\n    `okey_tk` VARCHAR(12) NOT NULL DEFAULT '',\n    `okey_yr` SMALLINT UNSIGNED NOT NULL DEFAULT 0,\n    `okey_mn` TINYINT UNSIGNED NOT NULL DEFAULT 0,\n    `okey_dy` TINYINT UNSIGNED NOT NULL DEFAULT 0,\n    `okey_xx` DOUBLE NOT NULL DEFAULT 0,\n    `okey_cp` ENUM('Call','Put','Pair') NOT NULL DEFAULT 'Call',\n    `ticker_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None',\n    `ticker_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','ESX','ANY','CXE','DXE','NXAM','NXBR','NXDUB','NXLS','NXLDN','NXML','NXMLT','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None',\n    `ticker_tk` VARCHAR(12) NOT NULL DEFAULT '',\n    `svol` FLOAT NOT NULL DEFAULT 0 COMMENT 'option surface volatility',\n    `years` FLOAT NOT NULL DEFAULT 0 COMMENT 'years to expiration',\n    `up50` FLOAT NOT NULL DEFAULT 0 COMMENT 'underlier up 50% slide',\n    `dn50` FLOAT NOT NULL DEFAULT 0 COMMENT 'underlier dn 50% slide',\n    `up15` FLOAT NOT NULL DEFAULT 0 COMMENT 'underlier up 15% slide',\n    `dn15` FLOAT NOT NULL DEFAULT 0 COMMENT 'underlier dn 15% slide',\n    `up12` FLOAT NOT NULL DEFAULT 0 COMMENT 'underlier up 12% slide',\n    `dn12` FLOAT NOT NULL DEFAULT 0 COMMENT 'underlier dn 12% slide',\n    `up09` FLOAT NOT NULL DEFAULT 0 COMMENT 'underlier up 9% slide',\n    `dn09` FLOAT NOT NULL DEFAULT 0 COMMENT 'underlier dn 9% slide',\n    `dn08` FLOAT NOT NULL DEFAULT 0 COMMENT 'underlier dn 8% slide',\n    `up06` FLOAT NOT NULL DEFAULT 0 COMMENT 'underlier up 6% slide',\n    `dn06` FLOAT NOT NULL DEFAULT 0 COMMENT 'underlier dn 6% slide',\n    `up03` FLOAT NOT NULL DEFAULT 0 COMMENT 'underlier up 3% slide',\n    `dn03` FLOAT NOT NULL DEFAULT 0 COMMENT 'underlier dn 3% slide',\n    `calcErr` VARCHAR(24) NOT NULL DEFAULT '' COMMENT 'option pricing error, otherwise, an empty string.',\n    `calcSource` ENUM('None','Tick','Loop') NOT NULL DEFAULT 'None',\n    `timestamp` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000',\n    PRIMARY KEY USING HASH (`okey_tk`,`okey_yr`,`okey_mn`,`okey_dy`,`okey_xx`,`okey_cp`,`okey_at`,`okey_ts`),\n    KEY `ExpirationIndex` (`okey_yr`,`okey_mn`,`okey_dy`) USING HASH,\n    KEY `TickerIndex` (`ticker_tk`) USING HASH\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='This table contains the up/dn underlier price slides used in OCC risk calculations.  Note that these values are computed by SpiderRock using similar methods but may not exactly match OCC values.';\n\n"})})]})}function j(e={}){const{wrapper:d}={...(0,r.R)(),...e.components};return d?(0,s.jsx)(d,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},28453:(e,d,n)=>{n.d(d,{R:()=>i,x:()=>c});var s=n(96540);const r={},t=s.createContext(r);function i(e){const d=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(d):{...d,...e}}),[d,e])}function c(e){let d;return d=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(t.Provider,{value:d},e.children)}}}]);