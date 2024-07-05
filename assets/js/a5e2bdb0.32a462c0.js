"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[38932],{17440:(e,n,N)=>{N.r(n),N.d(n,{assets:()=>E,contentTitle:()=>T,default:()=>a,frontMatter:()=>i,metadata:()=>o,toc:()=>r});var L=N(74848),t=N(28453);const i={title:"LiveImpliedQuoteAdj"},T=void 0,o={id:"MessageSchemas/Schema/SRSE Products/SRAnalytics/LiveImpliedQuoteAdj/LiveImpliedQuoteAdj",title:"LiveImpliedQuoteAdj",description:"V8 Message Definition",source:"@site/docs/MessageSchemas/Schema/SRSE Products/SRAnalytics/LiveImpliedQuoteAdj/LiveImpliedQuoteAdj.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRAnalytics/LiveImpliedQuoteAdj",slug:"/MessageSchemas/Schema/SRSE Products/SRAnalytics/LiveImpliedQuoteAdj/",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRAnalytics/LiveImpliedQuoteAdj/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"LiveImpliedQuoteAdj"},sidebar:"messageSchemasSidebar",previous:{title:"LiveImpliedQuote",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRAnalytics/LiveImpliedQuote/"},next:{title:"LiveRevConQuote",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRAnalytics/LiveRevConQuote/"}},E={},r=[];function s(e){const n={a:"a",code:"code",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(n.p,{children:(0,L.jsx)(n.a,{href:"../../../Topics/analytics/LiveImpliedQuoteAdj",children:"V8 Message Definition"})}),"\n",(0,L.jsx)(n.pre,{children:(0,L.jsx)(n.code,{className:"language-sql",children:"CREATE TABLE `SRAnalytics`.`MsgLiveImpliedQuoteAdj` (\n    `okey_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None',\n    `okey_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','ESX','ANY','CXE','DXE','NXAM','NXBR','NXDUB','NXLS','NXLDN','NXML','NXMLT','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None',\n    `okey_tk` VARCHAR(12) NOT NULL DEFAULT '',\n    `okey_yr` SMALLINT UNSIGNED NOT NULL DEFAULT 0,\n    `okey_mn` TINYINT UNSIGNED NOT NULL DEFAULT 0,\n    `okey_dy` TINYINT UNSIGNED NOT NULL DEFAULT 0,\n    `okey_xx` DOUBLE NOT NULL DEFAULT 0,\n    `okey_cp` ENUM('Call','Put','Pair') NOT NULL DEFAULT 'Call',\n    `ticker_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None',\n    `ticker_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','ESX','ANY','CXE','DXE','NXAM','NXBR','NXDUB','NXLS','NXLDN','NXML','NXMLT','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None',\n    `ticker_tk` VARCHAR(12) NOT NULL DEFAULT '',\n    `uprc` FLOAT NOT NULL DEFAULT 0 COMMENT 'underlier price (usually mid-market)',\n    `years` FLOAT NOT NULL DEFAULT 0 COMMENT 'years to expiration',\n    `rate` FLOAT NOT NULL DEFAULT 0 COMMENT 'interest rate',\n    `sdiv` FLOAT NOT NULL DEFAULT 0 COMMENT 'sdiv (stock dividend) rate',\n    `ddiv` FLOAT NOT NULL DEFAULT 0 COMMENT 'cumulative discrete dividend values',\n    `obid` FLOAT NOT NULL DEFAULT 0 COMMENT 'option bid price',\n    `oask` FLOAT NOT NULL DEFAULT 0 COMMENT 'option ask price',\n    `obiv` FLOAT NOT NULL DEFAULT 0 COMMENT 'volatility implied by option bid price',\n    `oaiv` FLOAT NOT NULL DEFAULT 0 COMMENT 'volatility implied by option ask price',\n    `satm` FLOAT NOT NULL DEFAULT 0 COMMENT 'option atm volatility (from SR surface)',\n    `smny` FLOAT NOT NULL DEFAULT 0 COMMENT 'option moneyness',\n    `svol` FLOAT NOT NULL DEFAULT 0 COMMENT 'option surface volatility',\n    `sprc` FLOAT NOT NULL DEFAULT 0 COMMENT 'option surface price',\n    `smrk` FLOAT NOT NULL DEFAULT 0 COMMENT 'option surface price (w/bounding rules)',\n    `veSlope` FLOAT NOT NULL DEFAULT 0 COMMENT 'veSlope = dVol / dUprc (assuming vol @ xAxis = 0 remains constant);hedgeDelta = (de + ve * 100 * veSlope) if hedging with this assumption',\n    `de` FLOAT NOT NULL DEFAULT 0 COMMENT 'option delta',\n    `ga` FLOAT NOT NULL DEFAULT 0 COMMENT 'option gamma',\n    `th` FLOAT NOT NULL DEFAULT 0 COMMENT 'option theta',\n    `ve` FLOAT NOT NULL DEFAULT 0 COMMENT 'option vega',\n    `va` FLOAT NOT NULL DEFAULT 0 COMMENT 'option vanna',\n    `vo` FLOAT NOT NULL DEFAULT 0 COMMENT 'option volga',\n    `ro` FLOAT NOT NULL DEFAULT 0 COMMENT 'option rho',\n    `ph` FLOAT NOT NULL DEFAULT 0 COMMENT 'option phi',\n    `deDecay` FLOAT NOT NULL DEFAULT 0 COMMENT 'option delta decay',\n    `up50` FLOAT NOT NULL DEFAULT 0 COMMENT 'underlier up 50% slide',\n    `dn50` FLOAT NOT NULL DEFAULT 0 COMMENT 'underlier dn 50% slide',\n    `up15` FLOAT NOT NULL DEFAULT 0 COMMENT 'underlier up 15% slide',\n    `dn15` FLOAT NOT NULL DEFAULT 0 COMMENT 'underlier dn 15% slide',\n    `up06` FLOAT NOT NULL DEFAULT 0 COMMENT 'underlier up 6% slide',\n    `dn08` FLOAT NOT NULL DEFAULT 0 COMMENT 'underlier dn 8% slide',\n    `synSpot` DOUBLE NOT NULL DEFAULT 0 COMMENT 'Synthetic spot price (market-derived spot when the underlying is not a traded instrument)',\n    `priceType` ENUM('None','Equity','Future') NOT NULL DEFAULT 'None' COMMENT 'Equity or Future (Black76) pricing framework;  if Future then uPrc is the forwardUPrc and sdiv = rate',\n    `calcErr` VARCHAR(24) NOT NULL DEFAULT '' COMMENT 'option pricing error (if any)',\n    `calcSource` ENUM('None','Tick','Loop') NOT NULL DEFAULT 'None',\n    `uPrcAdjResult` ENUM('None','OK','InvalidUPrc','UPrcRangeErr','OtherError','NullOption','StaleUPrc') NOT NULL DEFAULT 'None',\n    `timestamp` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000',\n    PRIMARY KEY USING HASH (`okey_tk`,`okey_yr`,`okey_mn`,`okey_dy`,`okey_xx`,`okey_cp`,`okey_at`,`okey_ts`),\n    KEY `ExpirationIndex` (`okey_yr`,`okey_mn`,`okey_dy`) USING HASH,\n    KEY `TickerIndex` (`ticker_tk`) USING HASH\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='';\n\n"})})]})}function a(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,L.jsx)(n,{...e,children:(0,L.jsx)(s,{...e})}):s(e)}},28453:(e,n,N)=>{N.d(n,{R:()=>T,x:()=>o});var L=N(96540);const t={},i=L.createContext(t);function T(e){const n=L.useContext(i);return L.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:T(e.components),L.createElement(i.Provider,{value:n},e.children)}}}]);