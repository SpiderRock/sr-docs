"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[19748],{90538:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>a,contentTitle:()=>N,default:()=>O,frontMatter:()=>t,metadata:()=>s,toc:()=>T});var L=o(74848),r=o(28453);const t={title:"OptionOpenMark"},N=void 0,s={id:"MessageSchemas/Schema/SRSE Products/SRLive/OptionOpenMark/OptionOpenMark",title:"OptionOpenMark",description:"V8 Message Definition",source:"@site/docs/MessageSchemas/Schema/SRSE Products/SRLive/OptionOpenMark/OptionOpenMark.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRLive/OptionOpenMark",slug:"/MessageSchemas/Schema/SRSE Products/SRLive/OptionOpenMark/",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRLive/OptionOpenMark/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"OptionOpenMark"},sidebar:"messageSchemasSidebar",previous:{title:"OptionOpenInterest",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRLive/OptionOpenInterest/"},next:{title:"OptionPrint",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRLive/OptionPrint/"}},a={},T=[];function i(e){const n={a:"a",code:"code",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(n.p,{children:(0,L.jsx)(n.a,{href:"../../../Topics/market-marks/OptionOpenMark",children:"V8 Message Definition"})}),"\n",(0,L.jsx)(n.pre,{children:(0,L.jsx)(n.code,{className:"language-sql",children:"CREATE TABLE `SRAnalytics`.`MsgOptionOpenMark` (\n    `okey_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None',\n    `okey_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','ESX','ANY','CXE','DXE','NXAM','NXBR','NXDUB','NXLS','NXLDN','NXML','NXMLT','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None',\n    `okey_tk` VARCHAR(12) NOT NULL DEFAULT '',\n    `okey_yr` SMALLINT UNSIGNED NOT NULL DEFAULT 0,\n    `okey_mn` TINYINT UNSIGNED NOT NULL DEFAULT 0,\n    `okey_dy` TINYINT UNSIGNED NOT NULL DEFAULT 0,\n    `okey_xx` DOUBLE NOT NULL DEFAULT 0,\n    `okey_cp` ENUM('Call','Put','Pair') NOT NULL DEFAULT 'Call',\n    `tradeDate` DATE NOT NULL DEFAULT '1900-01-01',\n    `uBid` DOUBLE NOT NULL DEFAULT 0 COMMENT 'SR open uBid; (SR close uBid overnight adjusted)',\n    `uAsk` DOUBLE NOT NULL DEFAULT 0 COMMENT 'SR open uAsk; (SR close uAsk overnight adjusted)',\n    `uSrCls` DOUBLE NOT NULL DEFAULT 0 COMMENT 'SR open uMark; [SR close uMark (C - 1m) overnight adjusted]',\n    `uClose` DOUBLE NOT NULL DEFAULT 0 COMMENT 'exchange open uMark; [exchange close uMark overnight adjusted]',\n    `bidPrc` FLOAT NOT NULL DEFAULT 0 COMMENT 'SR open bid; [SR close bid overnight adjusted]',\n    `askPrc` FLOAT NOT NULL DEFAULT 0 COMMENT 'SR open ask; [SR close ask overnight adjusted]',\n    `srClsPrc` DOUBLE NOT NULL DEFAULT 0 COMMENT 'SR open mark; [SR close mark (close - 1min) overnight adjusted]',\n    `closePrc` DOUBLE NOT NULL DEFAULT 0 COMMENT 'exchange open mark; [exchange close mark overnight adjusted] [if available]',\n    `bidIV` FLOAT NOT NULL DEFAULT 0 COMMENT 'implied vol of SR closing bid price',\n    `askIV` FLOAT NOT NULL DEFAULT 0 COMMENT 'implied vol of SR closing ask price',\n    `srPrc` FLOAT NOT NULL DEFAULT 0 COMMENT 'SR open surface price; [SR close surface price overnight adjusted]',\n    `srVol` FLOAT NOT NULL DEFAULT 0 COMMENT 'SR surface volatility',\n    `srSrc` ENUM('None','NbboMid','SRVol','LoBound','HiBound','SRPricer','SRQuote','CloseMark','OpenMark') NOT NULL DEFAULT 'None',\n    `de` FLOAT NOT NULL DEFAULT 0 COMMENT 'greeks from SR surface volatility',\n    `ga` FLOAT NOT NULL DEFAULT 0,\n    `th` FLOAT NOT NULL DEFAULT 0,\n    `ve` FLOAT NOT NULL DEFAULT 0,\n    `vo` FLOAT NOT NULL DEFAULT 0 COMMENT 'volga (SR surface)',\n    `va` FLOAT NOT NULL DEFAULT 0 COMMENT 'vanna (SR surface)',\n    `rh` FLOAT NOT NULL DEFAULT 0,\n    `ph` FLOAT NOT NULL DEFAULT 0,\n    `srSlope` FLOAT NOT NULL DEFAULT 0 COMMENT 'surface slope (SR surface)',\n    `deDecay` FLOAT NOT NULL DEFAULT 0,\n    `sdiv` FLOAT NOT NULL DEFAULT 0 COMMENT 'SR live sdiv rate',\n    `ddiv` FLOAT NOT NULL DEFAULT 0 COMMENT 'SR live ddiv rate',\n    `rate` FLOAT NOT NULL DEFAULT 0 COMMENT 'SR live int rate',\n    `years` FLOAT NOT NULL DEFAULT 0 COMMENT 'years to expiration',\n    `error` TINYINT UNSIGNED NOT NULL DEFAULT 0 COMMENT 'SRPricingLib.CalcError',\n    `corpAction` VARCHAR(255) NOT NULL DEFAULT '',\n    `timestamp` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000',\n    PRIMARY KEY USING HASH (`okey_tk`,`okey_yr`,`okey_mn`,`okey_dy`,`okey_xx`,`okey_cp`,`okey_at`,`okey_ts`)\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='OptionOpenMark records are created during the end-of-day rotation for each product and intended for use the following trading day.';\n\n"})})]})}function O(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,L.jsx)(n,{...e,children:(0,L.jsx)(i,{...e})}):i(e)}},28453:(e,n,o)=>{o.d(n,{R:()=>N,x:()=>s});var L=o(96540);const r={},t=L.createContext(r);function N(e){const n=L.useContext(t);return L.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:N(e.components),L.createElement(t.Provider,{value:n},e.children)}}}]);