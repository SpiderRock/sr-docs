"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[27207],{69616:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>o,contentTitle:()=>L,default:()=>r,frontMatter:()=>a,metadata:()=>c,toc:()=>T});var i=s(74848),n=s(28453);const a={title:"HistoricalVolatilities"},L=void 0,c={id:"MessageSchemas/Schema/SRSE Products/SRAnalytics/HistoricalVolatilities/HistoricalVolatilities",title:"HistoricalVolatilities",description:"V8 Message Definition",source:"@site/docs/MessageSchemas/Schema/SRSE Products/SRAnalytics/HistoricalVolatilities/HistoricalVolatilities.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRAnalytics/HistoricalVolatilities",slug:"/MessageSchemas/Schema/SRSE Products/SRAnalytics/HistoricalVolatilities/",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRAnalytics/HistoricalVolatilities/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"HistoricalVolatilities"},sidebar:"messageSchemasSidebar",previous:{title:"GlobalRates",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRAnalytics/GlobalRates/"},next:{title:"IndustryDefinition",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRAnalytics/IndustryDefinition/"}},o={},T=[];function N(e){const t={a:"a",code:"code",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"../../../Topics/market-statistics/HistoricalVolatilities",children:"V8 Message Definition"})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sql",children:"CREATE TABLE `SRAnalytics`.`MsgHistoricalVolatilities` (\n    `ticker_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None',\n    `ticker_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','ESX','ANY','CXE','DXE','NXAM','NXBR','NXDUB','NXLS','NXLDN','NXML','NXMLT','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None',\n    `ticker_tk` VARCHAR(12) NOT NULL DEFAULT '',\n    `windowType` VARCHAR(12) NOT NULL DEFAULT '' COMMENT 'eg. cc, ccCen, ccClCen, hl, hlCen, iv63, iv126, etc',\n    `date` VARCHAR(10) NOT NULL DEFAULT '' COMMENT 'most recent closing date',\n    `securityID` INT NOT NULL DEFAULT 0,\n    `value` FLOAT NOT NULL DEFAULT 0 COMMENT 'most recent historical value',\n    `mv_5d` FLOAT NOT NULL DEFAULT 0 COMMENT 'historical mean value (5 day window)',\n    `sd_5d` FLOAT NOT NULL DEFAULT 0 COMMENT 'historical std dev (5 day window)',\n    `mv_10d` FLOAT NOT NULL DEFAULT 0,\n    `sd_10d` FLOAT NOT NULL DEFAULT 0,\n    `mv_21d` FLOAT NOT NULL DEFAULT 0,\n    `sd_21d` FLOAT NOT NULL DEFAULT 0,\n    `mv_42d` FLOAT NOT NULL DEFAULT 0,\n    `sd_42d` FLOAT NOT NULL DEFAULT 0,\n    `mv_63d` FLOAT NOT NULL DEFAULT 0,\n    `sd_63d` FLOAT NOT NULL DEFAULT 0,\n    `mv_84d` FLOAT NOT NULL DEFAULT 0,\n    `sd_84d` FLOAT NOT NULL DEFAULT 0,\n    `mv_105d` FLOAT NOT NULL DEFAULT 0,\n    `sd_105d` FLOAT NOT NULL DEFAULT 0,\n    `mv_126d` FLOAT NOT NULL DEFAULT 0,\n    `sd_126d` FLOAT NOT NULL DEFAULT 0,\n    `mv_189d` FLOAT NOT NULL DEFAULT 0,\n    `sd_189d` FLOAT NOT NULL DEFAULT 0,\n    `mv_252d` FLOAT NOT NULL DEFAULT 0,\n    `sd_252d` FLOAT NOT NULL DEFAULT 0,\n    `mv_378d` FLOAT NOT NULL DEFAULT 0,\n    `sd_378d` FLOAT NOT NULL DEFAULT 0,\n    `mv_504d` FLOAT NOT NULL DEFAULT 0,\n    `sd_504d` FLOAT NOT NULL DEFAULT 0,\n    `timestamp` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000' COMMENT 'record update timestamp',\n    PRIMARY KEY USING HASH (`ticker_tk`,`ticker_at`,`ticker_ts`,`windowType`)\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='Values in this table are computed daily and are calculated from end-of-day marks from the previous period.  Official exchange closing values are used where possible.\\nHistoricalVolatility records are published to the SpiderRock elastic cluster nightly.';\n\n"})})]})}function r(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(N,{...e})}):N(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>L,x:()=>c});var i=s(96540);const n={},a=i.createContext(n);function L(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:L(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);