"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[776],{20054:(e,t,d)=>{d.r(t),d.d(t,{assets:()=>l,contentTitle:()=>n,default:()=>o,frontMatter:()=>i,metadata:()=>c,toc:()=>h});var r=d(74848),s=d(28453);const i={},n=void 0,c={id:"MessageSchemas/Schema/SRSE Products/SRLive/SyntheticFutureQuote/SyntheticFutureQuote",title:"SyntheticFutureQuote",description:"V8 Message Definiton",source:"@site/docs/MessageSchemas/Schema/SRSE Products/SRLive/SyntheticFutureQuote/SyntheticFutureQuote.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRLive/SyntheticFutureQuote",slug:"/MessageSchemas/Schema/SRSE Products/SRLive/SyntheticFutureQuote/",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRLive/SyntheticFutureQuote/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"messageSchemasSidebar",previous:{title:"SyntheticExpiryQuote",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRLive/SyntheticExpiryQuote/"},next:{title:"TickerAnalytics",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRLive/TickerAnalytics/"}},l={},h=[{value:"METADATA",id:"metadata",level:3},{value:"Table Definition",id:"table-definition",level:3},{value:"PRIMARY KEY DEFINITION (Unique)",id:"primary-key-definition-unique",level:3},{value:"CREATE TABLE QUERY",id:"create-table-query",level:3}];function x(e){const t={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"../../../Topics/market-data-index/SyntheticFutureQuote",children:"V8 Message Definiton"})}),"\n",(0,r.jsx)(t.p,{children:"Live synthetic future quotes are SpiderRock implied futures quotes derived from roll prices."}),"\n",(0,r.jsx)(t.h3,{id:"metadata",children:"METADATA"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Attribute"}),(0,r.jsx)(t.th,{children:"Value"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Topic"}),(0,r.jsx)(t.td,{children:"2675-market-data-index"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"MLink Token"}),(0,r.jsx)(t.td,{children:"SystemData"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Product"}),(0,r.jsx)(t.td,{children:"SRLive"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"accessType"}),(0,r.jsx)(t.td,{children:"SELECT"})]})]})]}),"\n",(0,r.jsx)(t.h3,{id:"table-definition",children:"Table Definition"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Field"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Key"}),(0,r.jsx)(t.th,{children:"Default Value"}),(0,r.jsx)(t.th,{children:"Comment"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"fkey_at"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"../../../Enums/AssetType",children:"enum - AssetType"})}),(0,r.jsx)(t.td,{children:"PRI"}),(0,r.jsx)(t.td,{children:"'None'"}),(0,r.jsx)(t.td,{children:"ccode  expiry"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"fkey_ts"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"../../../Enums/TickerSrc",children:"enum - TickerSrc"})}),(0,r.jsx)(t.td,{children:"PRI"}),(0,r.jsx)(t.td,{children:"'None'"}),(0,r.jsx)(t.td,{children:"ccode  expiry"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"fkey_tk"}),(0,r.jsx)(t.td,{children:"VARCHAR(12)"}),(0,r.jsx)(t.td,{children:"PRI"}),(0,r.jsx)(t.td,{children:"''"}),(0,r.jsx)(t.td,{children:"ccode  expiry"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"fkey_yr"}),(0,r.jsx)(t.td,{children:"SMALLINT UNSIGNED"}),(0,r.jsx)(t.td,{children:"PRI"}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"ccode  expiry"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"fkey_mn"}),(0,r.jsx)(t.td,{children:"TINYINT UNSIGNED"}),(0,r.jsx)(t.td,{children:"PRI"}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"ccode  expiry"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"fkey_dy"}),(0,r.jsx)(t.td,{children:"TINYINT UNSIGNED"}),(0,r.jsx)(t.td,{children:"PRI"}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"ccode  expiry"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"bidPrice"}),(0,r.jsx)(t.td,{children:"DOUBLE"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"best implied future bid price adjusted for option expiry"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"askPrice"}),(0,r.jsx)(t.td,{children:"DOUBLE"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"best implied future ask price adjusted for option expiry"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"bidSize"}),(0,r.jsx)(t.td,{children:"INT"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"best implied future bid size"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"askSize"}),(0,r.jsx)(t.td,{children:"INT"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"best implied future ask size"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"bidSource"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"../../../Enums/SyntheticSource",children:"enum - SyntheticSource"})}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"'None'"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"askSource"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"../../../Enums/SyntheticSource",children:"enum - SyntheticSource"})}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"'None'"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"marketStatus"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"../../../Enums/MarketStatus",children:"enum - MarketStatus"})}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"'None'"}),(0,r.jsx)(t.td,{children:"composite market status of all dependent markets"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"netTimestamp"}),(0,r.jsx)(t.td,{children:"BIGINT"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"most recent net timestamp of any market affecting this record"})]})]})]}),"\n",(0,r.jsx)(t.h3,{id:"primary-key-definition-unique",children:"PRIMARY KEY DEFINITION (Unique)"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Field"}),(0,r.jsx)(t.th,{children:"Sequence"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"fkey_tk"}),(0,r.jsx)(t.td,{children:"1"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"fkey_yr"}),(0,r.jsx)(t.td,{children:"2"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"fkey_mn"}),(0,r.jsx)(t.td,{children:"3"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"fkey_dy"}),(0,r.jsx)(t.td,{children:"4"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"fkey_at"}),(0,r.jsx)(t.td,{children:"5"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"fkey_ts"}),(0,r.jsx)(t.td,{children:"6"})]})]})]}),"\n",(0,r.jsx)(t.h3,{id:"create-table-query",children:"CREATE TABLE QUERY"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sql",children:"CREATE TABLE `SRLive`.`MsgSyntheticFutureQuote` (\n    `fkey_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None' COMMENT 'ccode + expiry',\n    `fkey_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','ESX','ANY','CXE','DXE','NXAM','NXBR','NXDUB','NXLS','NXLDN','NXML','NXMLT','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None' COMMENT 'ccode + expiry',\n    `fkey_tk` VARCHAR(12) NOT NULL DEFAULT '' COMMENT 'ccode + expiry',\n    `fkey_yr` SMALLINT UNSIGNED NOT NULL DEFAULT 0 COMMENT 'ccode + expiry',\n    `fkey_mn` TINYINT UNSIGNED NOT NULL DEFAULT 0 COMMENT 'ccode + expiry',\n    `fkey_dy` TINYINT UNSIGNED NOT NULL DEFAULT 0 COMMENT 'ccode + expiry',\n    `bidPrice` DOUBLE NOT NULL DEFAULT 0 COMMENT 'best implied future bid price (adjusted for option expiry)',\n    `askPrice` DOUBLE NOT NULL DEFAULT 0 COMMENT 'best implied future ask price (adjusted for option expiry)',\n    `bidSize` INT NOT NULL DEFAULT 0 COMMENT 'best implied future bid size',\n    `askSize` INT NOT NULL DEFAULT 0 COMMENT 'best implied future ask size',\n    `bidSource` ENUM('None','Future','FutureRoll','Stock') NOT NULL DEFAULT 'None',\n    `askSource` ENUM('None','Future','FutureRoll','Stock') NOT NULL DEFAULT 'None',\n    `marketStatus` ENUM('None','PreOpen','PreCross','Cross','Open','Closed','Halted','AfterHours') NOT NULL DEFAULT 'None' COMMENT 'composite market status of all dependent markets',\n    `netTimestamp` BIGINT NOT NULL DEFAULT 0 COMMENT 'most recent net timestamp of any market affecting this record',\n    PRIMARY KEY USING HASH (`fkey_tk`,`fkey_yr`,`fkey_mn`,`fkey_dy`,`fkey_at`,`fkey_ts`)\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='Live synthetic future quotes are SpiderRock implied futures quotes derived from roll prices.';\n\n"})})]})}function o(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(x,{...e})}):x(e)}},28453:(e,t,d)=>{d.d(t,{R:()=>n,x:()=>c});var r=d(96540);const s={},i=r.createContext(s);function n(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:n(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);