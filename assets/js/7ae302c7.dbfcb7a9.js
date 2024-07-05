"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[83591],{34172:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>T,contentTitle:()=>s,default:()=>o,frontMatter:()=>a,metadata:()=>N,toc:()=>L});var i=n(74848),r=n(28453);const a={title:"FuturePrintProbability"},s=void 0,N={id:"MessageSchemas/Schema/SRSE Products/SRAnalytics/FuturePrintProbability/FuturePrintProbability",title:"FuturePrintProbability",description:"V8 Message Definition",source:"@site/docs/MessageSchemas/Schema/SRSE Products/SRAnalytics/FuturePrintProbability/FuturePrintProbability.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRAnalytics/FuturePrintProbability",slug:"/MessageSchemas/Schema/SRSE Products/SRAnalytics/FuturePrintProbability/",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRAnalytics/FuturePrintProbability/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"FuturePrintProbability"},sidebar:"messageSchemasSidebar",previous:{title:"FuturePrintMarkup",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRAnalytics/FuturePrintMarkup/"},next:{title:"FuturePrintSet",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRAnalytics/FuturePrintSet/"}},T={},L=[];function u(e){const t={a:"a",code:"code",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"../../../Topics/probabilities/FuturePrintProbability",children:"V8 Message Definition"})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sql",children:"CREATE TABLE `SRAnalytics`.`MsgFuturePrintProbability` (\n    `fkey_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None',\n    `fkey_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','ESX','ANY','CXE','DXE','NXAM','NXBR','NXDUB','NXLS','NXLDN','NXML','NXMLT','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None',\n    `fkey_tk` VARCHAR(12) NOT NULL DEFAULT '',\n    `fkey_yr` SMALLINT UNSIGNED NOT NULL DEFAULT 0,\n    `fkey_mn` TINYINT UNSIGNED NOT NULL DEFAULT 0,\n    `fkey_dy` TINYINT UNSIGNED NOT NULL DEFAULT 0,\n    `stateModel` ENUM('None','M1','M2','M3','M4') NOT NULL DEFAULT 'None',\n    `prtPrice` DOUBLE NOT NULL DEFAULT 0,\n    `prtSize` INT NOT NULL DEFAULT 0,\n    `prtProb` FLOAT NOT NULL DEFAULT 0 COMMENT 'probability that this print will result in positive PnL',\n    `prtSide` ENUM('None','Buy','Sell') NOT NULL DEFAULT 'None',\n    `bidPrice` DOUBLE NOT NULL DEFAULT 0 COMMENT 'nbbo bid price',\n    `askPrice` DOUBLE NOT NULL DEFAULT 0 COMMENT 'nbbo ask price',\n    `bidSize` INT NOT NULL DEFAULT 0 COMMENT 'cumulative size @ bid price',\n    `askSize` INT NOT NULL DEFAULT 0 COMMENT 'cumulative size @ ask price',\n    `avgBLink1m` FLOAT NOT NULL DEFAULT 0 COMMENT 'average buy link value (trailing 10)',\n    `maeBLink1m` FLOAT NOT NULL DEFAULT 0 COMMENT 'buy link value mean abs err (trailing 1000)',\n    `avgSLink1m` FLOAT NOT NULL DEFAULT 0 COMMENT 'average sell link value (trailing 10)',\n    `maeSLink1m` FLOAT NOT NULL DEFAULT 0 COMMENT 'sell link value mean abs err (trailing 1000)',\n    `avgBLink10m` FLOAT NOT NULL DEFAULT 0 COMMENT 'average buy link value (trailing 100)',\n    `maeBLink10m` FLOAT NOT NULL DEFAULT 0 COMMENT 'bid link value mean abs err (trailing 1000)',\n    `avgSLink10m` FLOAT NOT NULL DEFAULT 0 COMMENT 'average ask link value (trailing 100)',\n    `maeSLink10m` FLOAT NOT NULL DEFAULT 0 COMMENT 'ask link value mean abs err (trailing 1000)',\n    `bCounter` INT NOT NULL DEFAULT 0 COMMENT 'buy counter',\n    `sCounter` INT NOT NULL DEFAULT 0 COMMENT 'sell counter',\n    `prtTimestamp` BIGINT NOT NULL DEFAULT 0 COMMENT 'feed timestamp from the packet',\n    `netTimestamp` BIGINT NOT NULL DEFAULT 0 COMMENT 'inbound packet PTP timestamp from SR gateway switch (from FuturePrint)',\n    `smsTimestamp` BIGINT NOT NULL DEFAULT 0 COMMENT 'state model server timestamp (just before publish)',\n    PRIMARY KEY USING HASH (`fkey_tk`,`fkey_yr`,`fkey_mn`,`fkey_dy`,`fkey_at`,`fkey_ts`,`stateModel`)\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='';\n\n"})})]})}function o(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>N});var i=n(96540);const r={},a=i.createContext(r);function s(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function N(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);