"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[67393],{37720:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>T,frontMatter:()=>c,metadata:()=>r,toc:()=>N});var o=t(74848),i=t(28453);const c={title:"OptionOpenAuction"},s=void 0,r={id:"MessageSchemas/Schema/SRSE Products/SRLive/OptionOpenAuction/OptionOpenAuction",title:"OptionOpenAuction",description:"V8 Message Definition",source:"@site/docs/MessageSchemas/Schema/SRSE Products/SRLive/OptionOpenAuction/OptionOpenAuction.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRLive/OptionOpenAuction",slug:"/MessageSchemas/Schema/SRSE Products/SRLive/OptionOpenAuction/",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRLive/OptionOpenAuction/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"OptionOpenAuction"},sidebar:"messageSchemasSidebar",previous:{title:"OptionNbboQuote",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRLive/OptionNbboQuote/"},next:{title:"OptionOpenAuctionSummary",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRLive/OptionOpenAuctionSummary/"}},a={},N=[];function p(e){const n={a:"a",code:"code",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"../../../Topics/market-data-options/OptionOpenAuction",children:"V8 Message Definition"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sql",children:"CREATE TABLE `SRLive`.`MsgOptionOpenAuction` (\n    `okey_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None',\n    `okey_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','ESX','ANY','CXE','DXE','NXAM','NXBR','NXDUB','NXLS','NXLDN','NXML','NXMLT','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None',\n    `okey_tk` VARCHAR(12) NOT NULL DEFAULT '',\n    `okey_yr` SMALLINT UNSIGNED NOT NULL DEFAULT 0,\n    `okey_mn` TINYINT UNSIGNED NOT NULL DEFAULT 0,\n    `okey_dy` TINYINT UNSIGNED NOT NULL DEFAULT 0,\n    `okey_xx` DOUBLE NOT NULL DEFAULT 0,\n    `okey_cp` ENUM('Call','Put','Pair') NOT NULL DEFAULT 'Call',\n    `auctionType` ENUM('None','GTHOpen','RTHOpen','HaltReopen','VolOpen') NOT NULL DEFAULT 'None' COMMENT 'Opening auction type',\n    `refPrc` FLOAT NOT NULL DEFAULT 0 COMMENT 'Current collared VMIM (Volume Maximizing/Imbalance Minimizing) price',\n    `buyContracts` INT NOT NULL DEFAULT 0 COMMENT 'Cumulative buy contracts at and above the reference price',\n    `sellContracts` INT NOT NULL DEFAULT 0 COMMENT 'Cumulative sell contracts at or below the reference price',\n    `indicativePrc` FLOAT NOT NULL DEFAULT 0 COMMENT 'Current collared VMIM price on the queueing book and continuous book, equal to reference price for options without GTH sessions',\n    `auctionOnlyPrc` FLOAT NOT NULL DEFAULT 0 COMMENT 'Uncollared VMIM price on the queueing book only',\n    `openingCond` ENUM('None','WouldOpen','NeedQteToOpn','NeedBuyers','NeedSellers','CrossCmpstMrkt') NOT NULL DEFAULT 'None' COMMENT 'Current opening condition based on the auction',\n    `compMktBidPrc` FLOAT NOT NULL DEFAULT 0 COMMENT 'Current bid price of prevailing composite market',\n    `compMktAskPrc` FLOAT NOT NULL DEFAULT 0 COMMENT 'Current ask price of prevailing composite market',\n    `srcTimestamp` BIGINT NOT NULL DEFAULT 0 COMMENT 'exchange high precision timestamp (if available)',\n    `netTimestamp` BIGINT NOT NULL DEFAULT 0 COMMENT 'inbound packet PTP timestamp from SR gateway switch;usually syncronized with f',\n    `timestamp` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000',\n    PRIMARY KEY USING HASH (`okey_tk`,`okey_yr`,`okey_mn`,`okey_dy`,`okey_xx`,`okey_cp`,`okey_at`,`okey_ts`)\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='';\n\n"})})]})}function T(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>r});var o=t(96540);const i={},c=o.createContext(i);function s(e){const n=o.useContext(c);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),o.createElement(c.Provider,{value:n},e.children)}}}]);