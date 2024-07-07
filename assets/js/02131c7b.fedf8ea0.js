"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[17898],{86364:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>S,toc:()=>o});var s=n(74848),a=n(28453);const i={title:"SOQStrikeRangeUpdate"},r=void 0,S={id:"MessageSchemas/Schema/SRSE Products/SRLive/SOQStrikeRangeUpdate/SOQStrikeRangeUpdate",title:"SOQStrikeRangeUpdate",description:"V8 Message Definition",source:"@site/docs/MessageSchemas/Schema/SRSE Products/SRLive/SOQStrikeRangeUpdate/SOQStrikeRangeUpdate.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRLive/SOQStrikeRangeUpdate",slug:"/MessageSchemas/Schema/SRSE Products/SRLive/SOQStrikeRangeUpdate/",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRLive/SOQStrikeRangeUpdate/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"SOQStrikeRangeUpdate"},sidebar:"messageSchemasSidebar",previous:{title:"SOQConstituentSymbolMap",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRLive/SOQConstituentSymbolMap/"},next:{title:"StockAuctionSummary",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRLive/StockAuctionSummary/"}},c={},o=[];function N(e){const t={a:"a",code:"code",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"../../../Topics/market-data-options/SOQStrikeRangeUpdate",children:"V8 Message Definition"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sql",children:"CREATE TABLE `SRLive`.`MsgSOQStrikeRangeUpdate` (\n    `ticker_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None' COMMENT 'Underlying symbol',\n    `ticker_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','ESX','ANY','CXE','DXE','NXAM','NXBR','NXDUB','NXLS','NXLDN','NXML','NXMLT','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None' COMMENT 'Underlying symbol',\n    `ticker_tk` VARCHAR(12) NOT NULL DEFAULT '' COMMENT 'Underlying symbol',\n    `soqIdentifier` VARCHAR(20) NOT NULL DEFAULT '' COMMENT 'SOQ dissemination symbol',\n    `lowerStrikePrc` FLOAT NOT NULL DEFAULT 0 COMMENT 'SOQ lower strike price',\n    `upperStrikePrc` FLOAT NOT NULL DEFAULT 0 COMMENT 'SOQ upper strike price',\n    `srcTimestamp` BIGINT NOT NULL DEFAULT 0 COMMENT 'exchange high precision timestamp (if available)',\n    `netTimestamp` BIGINT NOT NULL DEFAULT 0 COMMENT 'inbound packet PTP timestamp from SR gateway switch;usually syncronized with f',\n    `timestamp` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000',\n    PRIMARY KEY USING HASH (`ticker_tk`,`ticker_at`,`ticker_ts`,`soqIdentifier`)\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='';\n\n"})})]})}function d(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(N,{...e})}):N(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>S});var s=n(96540);const a={},i=s.createContext(a);function r(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function S(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);