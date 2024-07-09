"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[15858],{27640:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>l,contentTitle:()=>i,default:()=>x,frontMatter:()=>d,metadata:()=>c,toc:()=>h});var t=r(74848),n=r(28453);const d={},i=void 0,c={id:"MessageSchemas/Schema/SRSE Products/SRAnalytics/SyntheticExpiryOpenMark/SyntheticExpiryOpenMark",title:"SyntheticExpiryOpenMark",description:"V8 Message Definiton",source:"@site/docs/MessageSchemas/Schema/SRSE Products/SRAnalytics/SyntheticExpiryOpenMark/SyntheticExpiryOpenMark.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRAnalytics/SyntheticExpiryOpenMark",slug:"/MessageSchemas/Schema/SRSE Products/SRAnalytics/SyntheticExpiryOpenMark/",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRAnalytics/SyntheticExpiryOpenMark/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"messageSchemasSidebar",previous:{title:"SyntheticExpiryCloseMark",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRAnalytics/SyntheticExpiryCloseMark/"},next:{title:"TickerAnalytics",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRAnalytics/TickerAnalytics/"}},l={},h=[{value:"METADATA",id:"metadata",level:3},{value:"Table Definition",id:"table-definition",level:3},{value:"PRIMARY KEY DEFINITION (Unique)",id:"primary-key-definition-unique",level:3},{value:"CREATE TABLE QUERY",id:"create-table-query",level:3}];function a(e){const s={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"../../../Topics/market-marks/SyntheticExpiryOpenMark",children:"V8 Message Definiton"})}),"\n",(0,t.jsx)(s.h3,{id:"metadata",children:"METADATA"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Attribute"}),(0,t.jsx)(s.th,{children:"Value"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Topic"}),(0,t.jsx)(s.td,{children:"3120-market-marks"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"MLink Token"}),(0,t.jsx)(s.td,{children:"SystemData"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Product"}),(0,t.jsx)(s.td,{children:"SRAnalytics"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"accessType"}),(0,t.jsx)(s.td,{children:"SELECT"})]})]})]}),"\n",(0,t.jsx)(s.h3,{id:"table-definition",children:"Table Definition"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Field"}),(0,t.jsx)(s.th,{children:"Type"}),(0,t.jsx)(s.th,{children:"Key"}),(0,t.jsx)(s.th,{children:"Comment"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"ekey_at"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"../../../Enums/AssetType",children:"enum - AssetType"})}),(0,t.jsx)(s.td,{children:"PRI"}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"ekey_ts"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"../../../Enums/TickerSrc",children:"enum - TickerSrc"})}),(0,t.jsx)(s.td,{children:"PRI"}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"ekey_tk"}),(0,t.jsx)(s.td,{children:"VARCHAR(12)"}),(0,t.jsx)(s.td,{children:"PRI"}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"ekey_yr"}),(0,t.jsx)(s.td,{children:"SMALLINT UNSIGNED"}),(0,t.jsx)(s.td,{children:"PRI"}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"ekey_mn"}),(0,t.jsx)(s.td,{children:"TINYINT UNSIGNED"}),(0,t.jsx)(s.td,{children:"PRI"}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"ekey_dy"}),(0,t.jsx)(s.td,{children:"TINYINT UNSIGNED"}),(0,t.jsx)(s.td,{children:"PRI"}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"tradeDate"}),(0,t.jsx)(s.td,{children:"DATE"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"bidPrc"}),(0,t.jsx)(s.td,{children:"DOUBLE"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"bid price SR bid price from previous day"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"askPrc"}),(0,t.jsx)(s.td,{children:"DOUBLE"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"ask price SR ask price from previous day"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"srClsPrc"}),(0,t.jsx)(s.td,{children:"DOUBLE"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"SR open mark SR close mark close  1min from previous day"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"closePrc"}),(0,t.jsx)(s.td,{children:"DOUBLE"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"exchange open mark exchange close mark from previous day"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"timestamp"}),(0,t.jsx)(s.td,{children:"DATETIME(6)"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{})]})]})]}),"\n",(0,t.jsx)(s.h3,{id:"primary-key-definition-unique",children:"PRIMARY KEY DEFINITION (Unique)"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Field"}),(0,t.jsx)(s.th,{children:"Sequence"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"ekey_tk"}),(0,t.jsx)(s.td,{children:"1"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"ekey_yr"}),(0,t.jsx)(s.td,{children:"2"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"ekey_mn"}),(0,t.jsx)(s.td,{children:"3"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"ekey_dy"}),(0,t.jsx)(s.td,{children:"4"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"ekey_at"}),(0,t.jsx)(s.td,{children:"5"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"ekey_ts"}),(0,t.jsx)(s.td,{children:"6"})]})]})]}),"\n",(0,t.jsx)(s.h3,{id:"create-table-query",children:"CREATE TABLE QUERY"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-sql",children:"CREATE TABLE `SRAnalytics`.`MsgSyntheticExpiryOpenMark` (\n    `ekey_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None',\n    `ekey_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','ESX','ANY','CXE','DXE','NXAM','NXBR','NXDUB','NXLS','NXLDN','NXML','NXMLT','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None',\n    `ekey_tk` VARCHAR(12) NOT NULL DEFAULT '',\n    `ekey_yr` SMALLINT UNSIGNED NOT NULL DEFAULT 0,\n    `ekey_mn` TINYINT UNSIGNED NOT NULL DEFAULT 0,\n    `ekey_dy` TINYINT UNSIGNED NOT NULL DEFAULT 0,\n    `tradeDate` DATE NOT NULL DEFAULT '1900-01-01',\n    `bidPrc` DOUBLE NOT NULL DEFAULT 0 COMMENT 'bid price (SR bid price from previous day)',\n    `askPrc` DOUBLE NOT NULL DEFAULT 0 COMMENT 'ask price (SR ask price from previous day)',\n    `srClsPrc` DOUBLE NOT NULL DEFAULT 0 COMMENT 'SR open mark; [SR close mark (close - 1min) from previous day]',\n    `closePrc` DOUBLE NOT NULL DEFAULT 0 COMMENT 'exchange open mark; [exchange close mark from previous day]',\n    `timestamp` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000',\n    PRIMARY KEY USING HASH (`ekey_tk`,`ekey_yr`,`ekey_mn`,`ekey_dy`,`ekey_at`,`ekey_ts`)\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='';\n\n"})})]})}function x(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},28453:(e,s,r)=>{r.d(s,{R:()=>i,x:()=>c});var t=r(96540);const n={},d=t.createContext(n);function i(e){const s=t.useContext(d);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),t.createElement(d.Provider,{value:s},e.children)}}}]);