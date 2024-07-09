"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[17898],{86364:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>d,default:()=>o,frontMatter:()=>r,metadata:()=>c,toc:()=>a});var i=s(74848),n=s(28453);const r={},d=void 0,c={id:"MessageSchemas/Schema/SRSE Products/SRLive/SOQStrikeRangeUpdate/SOQStrikeRangeUpdate",title:"SOQStrikeRangeUpdate",description:"V8 Message Definiton",source:"@site/docs/MessageSchemas/Schema/SRSE Products/SRLive/SOQStrikeRangeUpdate/SOQStrikeRangeUpdate.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRLive/SOQStrikeRangeUpdate",slug:"/MessageSchemas/Schema/SRSE Products/SRLive/SOQStrikeRangeUpdate/",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRLive/SOQStrikeRangeUpdate/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"messageSchemasSidebar",previous:{title:"SOQConstituentSymbolMap",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRLive/SOQConstituentSymbolMap/"},next:{title:"StockAuctionSummary",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRLive/StockAuctionSummary/"}},l={},a=[{value:"METADATA",id:"metadata",level:3},{value:"Table Definition",id:"table-definition",level:3},{value:"PRIMARY KEY DEFINITION (Unique)",id:"primary-key-definition-unique",level:3},{value:"CREATE TABLE QUERY",id:"create-table-query",level:3}];function h(e){const t={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"../../../Topics/market-data-options/SOQStrikeRangeUpdate",children:"V8 Message Definiton"})}),"\n",(0,i.jsx)(t.h3,{id:"metadata",children:"METADATA"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Attribute"}),(0,i.jsx)(t.th,{children:"Value"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Topic"}),(0,i.jsx)(t.td,{children:"2750-market-data-options"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"MLink Token"}),(0,i.jsx)(t.td,{children:"SystemData"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Product"}),(0,i.jsx)(t.td,{children:"SRLive"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"accessType"}),(0,i.jsx)(t.td,{children:"SELECT"})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"table-definition",children:"Table Definition"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Field"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{children:"Key"}),(0,i.jsx)(t.th,{children:"Comment"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"ticker_at"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"../../../Enums/AssetType",children:"enum - AssetType"})}),(0,i.jsx)(t.td,{children:"PRI"}),(0,i.jsx)(t.td,{children:"Underlying symbol"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"ticker_ts"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"../../../Enums/TickerSrc",children:"enum - TickerSrc"})}),(0,i.jsx)(t.td,{children:"PRI"}),(0,i.jsx)(t.td,{children:"Underlying symbol"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"ticker_tk"}),(0,i.jsx)(t.td,{children:"VARCHAR(12)"}),(0,i.jsx)(t.td,{children:"PRI"}),(0,i.jsx)(t.td,{children:"Underlying symbol"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"soqIdentifier"}),(0,i.jsx)(t.td,{children:"VARCHAR(20)"}),(0,i.jsx)(t.td,{children:"PRI"}),(0,i.jsx)(t.td,{children:"SOQ dissemination symbol"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"lowerStrikePrc"}),(0,i.jsx)(t.td,{children:"FLOAT"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"SOQ lower strike price"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"upperStrikePrc"}),(0,i.jsx)(t.td,{children:"FLOAT"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"SOQ upper strike price"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"srcTimestamp"}),(0,i.jsx)(t.td,{children:"BIGINT"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"exchange high precision timestamp if available"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"netTimestamp"}),(0,i.jsx)(t.td,{children:"BIGINT"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"inbound packet PTP timestamp from SR gateway switchusually syncronized with f"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"timestamp"}),(0,i.jsx)(t.td,{children:"DATETIME(6)"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"primary-key-definition-unique",children:"PRIMARY KEY DEFINITION (Unique)"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Field"}),(0,i.jsx)(t.th,{children:"Sequence"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"ticker_tk"}),(0,i.jsx)(t.td,{children:"1"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"ticker_at"}),(0,i.jsx)(t.td,{children:"2"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"ticker_ts"}),(0,i.jsx)(t.td,{children:"3"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"soqIdentifier"}),(0,i.jsx)(t.td,{children:"4"})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"create-table-query",children:"CREATE TABLE QUERY"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sql",children:"CREATE TABLE `SRLive`.`MsgSOQStrikeRangeUpdate` (\n    `ticker_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None' COMMENT 'Underlying symbol',\n    `ticker_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','ESX','ANY','CXE','DXE','NXAM','NXBR','NXDUB','NXLS','NXLDN','NXML','NXMLT','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None' COMMENT 'Underlying symbol',\n    `ticker_tk` VARCHAR(12) NOT NULL DEFAULT '' COMMENT 'Underlying symbol',\n    `soqIdentifier` VARCHAR(20) NOT NULL DEFAULT '' COMMENT 'SOQ dissemination symbol',\n    `lowerStrikePrc` FLOAT NOT NULL DEFAULT 0 COMMENT 'SOQ lower strike price',\n    `upperStrikePrc` FLOAT NOT NULL DEFAULT 0 COMMENT 'SOQ upper strike price',\n    `srcTimestamp` BIGINT NOT NULL DEFAULT 0 COMMENT 'exchange high precision timestamp (if available)',\n    `netTimestamp` BIGINT NOT NULL DEFAULT 0 COMMENT 'inbound packet PTP timestamp from SR gateway switch;usually syncronized with f',\n    `timestamp` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000',\n    PRIMARY KEY USING HASH (`ticker_tk`,`ticker_at`,`ticker_ts`,`soqIdentifier`)\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='';\n\n"})})]})}function o(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>d,x:()=>c});var i=s(96540);const n={},r=i.createContext(n);function d(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:d(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);