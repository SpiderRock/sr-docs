"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[94249],{36460:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>N,default:()=>E,frontMatter:()=>r,metadata:()=>c,toc:()=>a});var i=t(74848),o=t(28453);const r={title:"CCodeDefinition"},N=void 0,c={id:"MessageSchemas/Schema/SRSE Products/SRLive/CCodeDefinition/CCodeDefinition",title:"CCodeDefinition",description:"V8 Message Definition",source:"@site/docs/MessageSchemas/Schema/SRSE Products/SRLive/CCodeDefinition/CCodeDefinition.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRLive/CCodeDefinition",slug:"/MessageSchemas/Schema/SRSE Products/SRLive/CCodeDefinition/",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRLive/CCodeDefinition/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"CCodeDefinition"},sidebar:"messageSchemasSidebar",previous:{title:"SRLive",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRLive/"},next:{title:"FutureBookQuote",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRLive/FutureBookQuote/"}},s={},a=[];function d(e){const n={a:"a",code:"code",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"../../../Topics/product-definition/CCodeDefinition",children:"V8 Message Definition"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"CREATE TABLE `SRAnalytics`.`MsgCCodeDefinition` (\n    `ccode_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None',\n    `ccode_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','ESX','ANY','CXE','DXE','NXAM','NXBR','NXDUB','NXLS','NXLDN','NXML','NXMLT','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None',\n    `ccode_tk` VARCHAR(12) NOT NULL DEFAULT '',\n    `futexch` ENUM('None','CFE','CME','CBOT','COMEX','NYMEX','ICE','EUREX','CEDX','NXAM','NXBR','NXLS','NXML','NXOS','NXP','ICEFE') NOT NULL DEFAULT 'None' COMMENT 'listing exchange',\n    `ticker_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None' COMMENT 'master underlying',\n    `ticker_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','ESX','ANY','CXE','DXE','NXAM','NXBR','NXDUB','NXLS','NXLDN','NXML','NXMLT','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None' COMMENT 'master underlying',\n    `ticker_tk` VARCHAR(12) NOT NULL DEFAULT '' COMMENT 'master underlying',\n    `settleTime` ENUM('None','PM','AM') NOT NULL DEFAULT 'None' COMMENT 'Settlement time: None; PM; AM',\n    `positionLimit` INT NOT NULL DEFAULT 0 COMMENT 'max contract limit',\n    `tickValue` FLOAT NOT NULL DEFAULT 0 COMMENT '$NLV value of a single tick change in display premium\t(pointValue = tickValue / tickSize)',\n    `pointValue` FLOAT NOT NULL DEFAULT 0 COMMENT '$NLV value of a single point change in display premium (pointValue = tickValue / tickSize)',\n    `pointCurrency` ENUM('None','AUD','BRL','CAD','CHF','CNH','CNY','EUR','GBP','JPY','KRW','MXN','MYR','NOK','NZD','SEK','TRY','USD','USDCents','CZK','ZAR','HUF','USX','GBX') NOT NULL DEFAULT 'None',\n    `priceScaling` FLOAT NOT NULL DEFAULT 0 COMMENT 'underlying price scale factor - products where the underlying quotes in cents will have 0.01',\n    `underliersPerCn` INT NOT NULL DEFAULT 0 COMMENT 'shares, bond, or index units underlying the future (contract size)',\n    `underlierType` ENUM('None','Equity','Other','FX') NOT NULL DEFAULT 'None' COMMENT 'Underlying type; None; Equity; Other; FX',\n    `clearingCode` VARCHAR(6) NOT NULL DEFAULT '' COMMENT 'GMI/Clearing code',\n    `ricRoot` VARCHAR(6) NOT NULL DEFAULT '' COMMENT 'RIC Root',\n    `bbgRoot` VARCHAR(6) NOT NULL DEFAULT '' COMMENT 'Bloomberg root',\n    `bbgGroup` ENUM('None','Govt','Corp','Mtge','MMkt','Muni','Pfd','Equity','Comdty','Index','Curncy') NOT NULL DEFAULT 'None' COMMENT 'Bloomberg Yellow Key',\n    `gmiExchange` VARCHAR(3) NOT NULL DEFAULT '' COMMENT 'GMI (Sungard) exchange code',\n    `gmiProduct` VARCHAR(3) NOT NULL DEFAULT '' COMMENT 'GMI (Sungard) product code',\n    `gmiSubType` VARCHAR(3) NOT NULL DEFAULT '' COMMENT 'GMI (Sungard) subtype code',\n    `displayPriceScaling` FLOAT NOT NULL DEFAULT 0 COMMENT 'internal display price scale factor override',\n    `strikeScaling` FLOAT NOT NULL DEFAULT 0 COMMENT 'internal strike price scale factor override',\n    `description` VARCHAR(48) NOT NULL DEFAULT '' COMMENT 'product description',\n    `marketCenter` VARCHAR(48) NOT NULL DEFAULT '' COMMENT 'market center, eg \"ICE Market Type\", \"CME MarketGroup\"',\n    `timestamp` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000',\n    `ricCode_V7` VARCHAR(6) NOT NULL DEFAULT '' COMMENT 'only V7',\n    PRIMARY KEY USING HASH (`ccode_tk`,`ccode_at`,`ccode_ts`),\n    KEY `TickerIndex` (`ticker_tk`) USING HASH\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='Commodity code (product code) definitions for all futures.  Also maps future ccodes to SpiderRock tickers. Information is sourced from listing exchange product definitions.\\nThis table also contains definitions for exchange and user-defined spreads including spreads used as option underliers. SpiderRock typically uses a compact form of the exchange (spread) product ID as the ccode for these products if there is no natural (human-readable) exchange spread ticker issued for the spread.  Note that the full spread definition can be found in the ProductDefinition and human-readable version in the description field below.\\nNote that SpiderRock tickers below are synthetic and are created for organizational purposes only.  SpiderRock synthetic tickers typically begin with a \\'@\\' character.';\n\n"})})]})}function E(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>N,x:()=>c});var i=t(96540);const o={},r=i.createContext(o);function N(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:N(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);