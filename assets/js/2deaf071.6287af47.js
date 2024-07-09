"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[521],{66508:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>a,frontMatter:()=>d,metadata:()=>c,toc:()=>h});var n=s(74848),r=s(28453);const d={},i=void 0,c={id:"MessageSchemas/Schema/SRSE Products/SRLive/FutureSettlementMark/FutureSettlementMark",title:"FutureSettlementMark",description:"V8 Message Definiton",source:"@site/docs/MessageSchemas/Schema/SRSE Products/SRLive/FutureSettlementMark/FutureSettlementMark.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRLive/FutureSettlementMark",slug:"/MessageSchemas/Schema/SRSE Products/SRLive/FutureSettlementMark/",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRLive/FutureSettlementMark/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"messageSchemasSidebar",previous:{title:"FutureQuoteProbability",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRLive/FutureQuoteProbability/"},next:{title:"IndexQuote",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRLive/IndexQuote/"}},l={},h=[{value:"METADATA",id:"metadata",level:3},{value:"Table Definition",id:"table-definition",level:3},{value:"PRIMARY KEY DEFINITION (Unique)",id:"primary-key-definition-unique",level:3},{value:"CREATE TABLE QUERY",id:"create-table-query",level:3}];function x(e){const t={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"../../../Topics/market-marks/FutureSettlementMark",children:"V8 Message Definiton"})}),"\n",(0,n.jsx)(t.h3,{id:"metadata",children:"METADATA"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Attribute"}),(0,n.jsx)(t.th,{children:"Value"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Topic"}),(0,n.jsx)(t.td,{children:"3120-market-marks"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"MLink Token"}),(0,n.jsx)(t.td,{children:"FutMarkData"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Product"}),(0,n.jsx)(t.td,{children:"SRLive"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"accessType"}),(0,n.jsx)(t.td,{children:"SELECT"})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"table-definition",children:"Table Definition"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Field"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Key"}),(0,n.jsx)(t.th,{children:"Comment"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"fkey_at"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"../../../Enums/AssetType",children:"enum - AssetType"})}),(0,n.jsx)(t.td,{children:"PRI"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"fkey_ts"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"../../../Enums/TickerSrc",children:"enum - TickerSrc"})}),(0,n.jsx)(t.td,{children:"PRI"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"fkey_tk"}),(0,n.jsx)(t.td,{children:"VARCHAR(12)"}),(0,n.jsx)(t.td,{children:"PRI"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"fkey_yr"}),(0,n.jsx)(t.td,{children:"SMALLINT UNSIGNED"}),(0,n.jsx)(t.td,{children:"PRI"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"fkey_mn"}),(0,n.jsx)(t.td,{children:"TINYINT UNSIGNED"}),(0,n.jsx)(t.td,{children:"PRI"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"fkey_dy"}),(0,n.jsx)(t.td,{children:"TINYINT UNSIGNED"}),(0,n.jsx)(t.td,{children:"PRI"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"settleDate"}),(0,n.jsx)(t.td,{children:"DATE"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"settlePx"}),(0,n.jsx)(t.td,{children:"DOUBLE"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"Exchange settlement price"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"lowLmtPx"}),(0,n.jsx)(t.td,{children:"DOUBLE"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"Exchange low limit price"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"highLmtPx"}),(0,n.jsx)(t.td,{children:"DOUBLE"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"Exchange high limit price"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"openInt"}),(0,n.jsx)(t.td,{children:"INT"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"Exchange open interest date prior to settle date"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"volume"}),(0,n.jsx)(t.td,{children:"INT"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"Exchange volume date prior to settle date"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"early"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"../../../Enums/YesNo",children:"enum - YesNo"})}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"timestamp"}),(0,n.jsx)(t.td,{children:"DATETIME(6)"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"primary-key-definition-unique",children:"PRIMARY KEY DEFINITION (Unique)"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Field"}),(0,n.jsx)(t.th,{children:"Sequence"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"fkey_tk"}),(0,n.jsx)(t.td,{children:"1"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"fkey_yr"}),(0,n.jsx)(t.td,{children:"2"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"fkey_mn"}),(0,n.jsx)(t.td,{children:"3"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"fkey_dy"}),(0,n.jsx)(t.td,{children:"4"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"fkey_at"}),(0,n.jsx)(t.td,{children:"5"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"fkey_ts"}),(0,n.jsx)(t.td,{children:"6"})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"create-table-query",children:"CREATE TABLE QUERY"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sql",children:"CREATE TABLE `SRLive`.`MsgFutureSettlementMark` (\n    `fkey_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None',\n    `fkey_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','ESX','ANY','CXE','DXE','NXAM','NXBR','NXDUB','NXLS','NXLDN','NXML','NXMLT','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None',\n    `fkey_tk` VARCHAR(12) NOT NULL DEFAULT '',\n    `fkey_yr` SMALLINT UNSIGNED NOT NULL DEFAULT 0,\n    `fkey_mn` TINYINT UNSIGNED NOT NULL DEFAULT 0,\n    `fkey_dy` TINYINT UNSIGNED NOT NULL DEFAULT 0,\n    `settleDate` DATE NOT NULL DEFAULT '1900-01-01',\n    `settlePx` DOUBLE NOT NULL DEFAULT 0 COMMENT 'Exchange settlement price',\n    `lowLmtPx` DOUBLE NOT NULL DEFAULT 0 COMMENT 'Exchange low limit price',\n    `highLmtPx` DOUBLE NOT NULL DEFAULT 0 COMMENT 'Exchange high limit price',\n    `openInt` INT NOT NULL DEFAULT 0 COMMENT 'Exchange open interest (date prior to settle date)',\n    `volume` INT NOT NULL DEFAULT 0 COMMENT 'Exchange volume (date prior to settle date)',\n    `early` ENUM('None','Yes','No') NOT NULL DEFAULT 'None',\n    `timestamp` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000',\n    PRIMARY KEY USING HASH (`fkey_tk`,`fkey_yr`,`fkey_mn`,`fkey_dy`,`fkey_at`,`fkey_ts`)\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='Future settlement marks from the listing exchange';\n\n"})})]})}function a(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(x,{...e})}):x(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>i,x:()=>c});var n=s(96540);const r={},d=n.createContext(r);function i(e){const t=n.useContext(d);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(d.Provider,{value:t},e.children)}}}]);