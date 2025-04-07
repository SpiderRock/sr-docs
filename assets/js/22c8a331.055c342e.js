"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([["76261"],{18932:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>s,metadata:()=>i,assets:()=>l,toc:()=>o,contentTitle:()=>c});var i=JSON.parse('{"id":"MessageSchemas/Schema/SRSE Products/SRAnalytics/CCodeDefinition/CCodeDefinition","title":"CCodeDefinition","description":"V8 Message Definiton","source":"@site/versioned_docs/version-8.5.3.1/MessageSchemas/Schema/SRSE Products/SRAnalytics/CCodeDefinition/CCodeDefinition.md","sourceDirName":"MessageSchemas/Schema/SRSE Products/SRAnalytics/CCodeDefinition","slug":"/MessageSchemas/Schema/SRSE Products/SRAnalytics/CCodeDefinition/","permalink":"/docs/8.5.3.1/MessageSchemas/Schema/SRSE Products/SRAnalytics/CCodeDefinition/","draft":false,"unlisted":false,"tags":[],"version":"8.5.3.1","frontMatter":{},"sidebar":"messageSchemasSidebar","previous":{"title":"SRAnalytics","permalink":"/docs/8.5.3.1/MessageSchemas/Schema/SRSE Products/SRAnalytics/"},"next":{"title":"FutureCloseMark","permalink":"/docs/8.5.3.1/MessageSchemas/Schema/SRSE Products/SRAnalytics/FutureCloseMark/"}}'),d=t("52676"),r=t("91503");let s={},c=void 0,l={},o=[{value:"METADATA",id:"metadata",level:3},{value:"Table Definition",id:"table-definition",level:3},{value:"PRIMARY KEY DEFINITION (Unique)",id:"primary-key-definition-unique",level:3},{value:"SECONDARY INDEX (TickerIndex) (Not Unique)",id:"secondary-index-tickerindex-not-unique",level:3},{value:"CREATE TABLE EXAMPLE QUERY",id:"create-table-example-query",level:3},{value:"SELECT TABLE EXAMPLE QUERY",id:"select-table-example-query",level:3},{value:"Doc Columns Query",id:"doc-columns-query",level:3}];function a(e){let n={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.p,{children:(0,d.jsx)(n.a,{href:"../../../Topics/product-definition/CCodeDefinition",children:"V8 Message Definiton"})}),"\n",(0,d.jsx)(n.p,{children:"Commodity code (product code) definitions for all futures.  Also maps future ccodes to SpiderRock tickers. Information is sourced from listing exchange product definitions.\nThis table also contains definitions for exchange and user-defined spreads including spreads used as option underliers. SpiderRock typically uses a compact form of the exchange (spread) product ID as the ccode for these products if there is no natural (human-readable) exchange spread ticker issued for the spread.  Note that the full spread definition can be found in the ProductDefinition and human-readable version in the description field below.\nNote that SpiderRock tickers below are synthetic and are created for organizational purposes only.  SpiderRock synthetic tickers typically begin with a '@' character."}),"\n",(0,d.jsx)(n.h3,{id:"metadata",children:"METADATA"}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Attribute"}),(0,d.jsx)(n.th,{children:"Value"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Topic"}),(0,d.jsx)(n.td,{children:"4335-product-definition"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"MLink Token"}),(0,d.jsx)(n.td,{children:"FutureDefinition"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Product"}),(0,d.jsx)(n.td,{children:"SRAnalytics"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"accessType"}),(0,d.jsx)(n.td,{children:"SELECT"})]})]})]}),"\n",(0,d.jsx)(n.h3,{id:"table-definition",children:"Table Definition"}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Field"}),(0,d.jsx)(n.th,{children:"Type"}),(0,d.jsx)(n.th,{children:"Key"}),(0,d.jsx)(n.th,{children:"Default Value"}),(0,d.jsx)(n.th,{children:"Comment"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"ccode_at"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.a,{href:"../../../Enums/AssetType",children:"enum - AssetType"})}),(0,d.jsx)(n.td,{children:"PRI"}),(0,d.jsx)(n.td,{children:"'None'"}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"ccode_ts"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.a,{href:"../../../Enums/TickerSrc",children:"enum - TickerSrc"})}),(0,d.jsx)(n.td,{children:"PRI"}),(0,d.jsx)(n.td,{children:"'None'"}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"ccode_tk"}),(0,d.jsx)(n.td,{children:"VARCHAR(12)"}),(0,d.jsx)(n.td,{children:"PRI"}),(0,d.jsx)(n.td,{children:"''"}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"futexch"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.a,{href:"../../../Enums/FutExch",children:"enum - FutExch"})}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:"'None'"}),(0,d.jsx)(n.td,{children:"listing exchange"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"ticker_at"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.a,{href:"../../../Enums/AssetType",children:"enum - AssetType"})}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:"'None'"}),(0,d.jsx)(n.td,{children:"master underlying"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"ticker_ts"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.a,{href:"../../../Enums/TickerSrc",children:"enum - TickerSrc"})}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:"'None'"}),(0,d.jsx)(n.td,{children:"master underlying"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"ticker_tk"}),(0,d.jsx)(n.td,{children:"VARCHAR(12)"}),(0,d.jsx)(n.td,{children:"SEC"}),(0,d.jsx)(n.td,{children:"''"}),(0,d.jsx)(n.td,{children:"master underlying"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"settleTime"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.a,{href:"../../../Enums/SettleTime",children:"enum - SettleTime"})}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:"'None'"}),(0,d.jsx)(n.td,{children:"Settlement time None PM AM"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"positionLimit"}),(0,d.jsx)(n.td,{children:"INT"}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:"0"}),(0,d.jsx)(n.td,{children:"max contract limit"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"tickValue"}),(0,d.jsx)(n.td,{children:"FLOAT"}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:"0"}),(0,d.jsx)(n.td,{children:"NLV value of a single tick change in display premium	pointValue  tickValue  tickSize"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"pointValue"}),(0,d.jsx)(n.td,{children:"FLOAT"}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:"0"}),(0,d.jsx)(n.td,{children:"NLV value of a single point change in display premium pointValue  tickValue  tickSize"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"pointCurrency"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.a,{href:"../../../Enums/Currency",children:"enum - Currency"})}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:"'None'"}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"priceScaling"}),(0,d.jsx)(n.td,{children:"FLOAT"}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:"0"}),(0,d.jsx)(n.td,{children:"underlying price scale factor  products where the underlying quotes in cents will have 001"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"underliersPerCn"}),(0,d.jsx)(n.td,{children:"INT"}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:"0"}),(0,d.jsx)(n.td,{children:"shares bond or index units underlying the future contract size"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"underlierType"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.a,{href:"../../../Enums/UnderlierType",children:"enum - UnderlierType"})}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:"'None'"}),(0,d.jsx)(n.td,{children:"Underlying type None Equity Other FX"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"clearingCode"}),(0,d.jsx)(n.td,{children:"VARCHAR(6)"}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:"''"}),(0,d.jsx)(n.td,{children:"GMIClearing code"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"ricRoot"}),(0,d.jsx)(n.td,{children:"VARCHAR(6)"}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:"''"}),(0,d.jsx)(n.td,{children:"RIC Root"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"bbgRoot"}),(0,d.jsx)(n.td,{children:"VARCHAR(6)"}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:"''"}),(0,d.jsx)(n.td,{children:"Bloomberg root"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"bbgGroup"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.a,{href:"../../../Enums/YellowKey",children:"enum - YellowKey"})}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:"'None'"}),(0,d.jsx)(n.td,{children:"Bloomberg Yellow Key"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"gmiExchange"}),(0,d.jsx)(n.td,{children:"VARCHAR(3)"}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:"''"}),(0,d.jsx)(n.td,{children:"GMI Sungard exchange code"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"gmiProduct"}),(0,d.jsx)(n.td,{children:"VARCHAR(3)"}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:"''"}),(0,d.jsx)(n.td,{children:"GMI Sungard product code"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"gmiSubType"}),(0,d.jsx)(n.td,{children:"VARCHAR(3)"}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:"''"}),(0,d.jsx)(n.td,{children:"GMI Sungard subtype code"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"displayPriceScaling"}),(0,d.jsx)(n.td,{children:"FLOAT"}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:"0"}),(0,d.jsx)(n.td,{children:"internal display price scale factor override"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"strikeScaling"}),(0,d.jsx)(n.td,{children:"FLOAT"}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:"0"}),(0,d.jsx)(n.td,{children:"internal strike price scale factor override"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"description"}),(0,d.jsx)(n.td,{children:"VARCHAR(48)"}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:"''"}),(0,d.jsx)(n.td,{children:"product description"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"marketCenter"}),(0,d.jsx)(n.td,{children:"VARCHAR(48)"}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:"''"}),(0,d.jsx)(n.td,{children:"market center eg ICE Market Type CME MarketGroup"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"tradingPeriod"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.a,{href:"../../../Enums/TradingPeriod",children:"enum - TradingPeriod"})}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:"'None'"}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"timestamp"}),(0,d.jsx)(n.td,{children:"DATETIME(6)"}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:"'1900-01-01 00:00:00.000000'"}),(0,d.jsx)(n.td,{})]})]})]}),"\n",(0,d.jsx)(n.h3,{id:"primary-key-definition-unique",children:"PRIMARY KEY DEFINITION (Unique)"}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Field"}),(0,d.jsx)(n.th,{children:"Sequence"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"ccode_tk"}),(0,d.jsx)(n.td,{children:"1"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"ccode_at"}),(0,d.jsx)(n.td,{children:"2"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"ccode_ts"}),(0,d.jsx)(n.td,{children:"3"})]})]})]}),"\n",(0,d.jsx)(n.h3,{id:"secondary-index-tickerindex-not-unique",children:"SECONDARY INDEX (TickerIndex) (Not Unique)"}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Field"}),(0,d.jsx)(n.th,{children:"Sequence"})]})}),(0,d.jsx)(n.tbody,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"ticker_tk"}),(0,d.jsx)(n.td,{children:"1"})]})})]}),"\n",(0,d.jsx)(n.h3,{id:"create-table-example-query",children:"CREATE TABLE EXAMPLE QUERY"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-sql",children:"CREATE TABLE `SRAnalytics`.`MsgCCodeDefinition` (\n    `ccode_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None',\n    `ccode_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','EUX','ANY','CXE','DXE','NXAM','NXBR','NXLS','NXML','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None',\n    `ccode_tk` VARCHAR(12) NOT NULL DEFAULT '',\n    `futexch` ENUM('None','CFE','CME','CBOT','COMEX','NYMEX','ICE','EUREX','CEDX','NXAM','NXBR','NXLS','NXML','NXOS','NXP','ICEFE') NOT NULL DEFAULT 'None' COMMENT 'listing exchange',\n    `ticker_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None' COMMENT 'master underlying',\n    `ticker_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','EUX','ANY','CXE','DXE','NXAM','NXBR','NXLS','NXML','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None' COMMENT 'master underlying',\n    `ticker_tk` VARCHAR(12) NOT NULL DEFAULT '' COMMENT 'master underlying',\n    `settleTime` ENUM('None','PM','AM') NOT NULL DEFAULT 'None' COMMENT 'Settlement time: None; PM; AM',\n    `positionLimit` INT NOT NULL DEFAULT 0 COMMENT 'max contract limit',\n    `tickValue` FLOAT NOT NULL DEFAULT 0 COMMENT '$NLV value of a single tick change in display premium	(pointValue = tickValue / tickSize)',\n    `pointValue` FLOAT NOT NULL DEFAULT 0 COMMENT '$NLV value of a single point change in display premium (pointValue = tickValue / tickSize)',\n    `pointCurrency` ENUM('None','AUD','BRL','CAD','CHF','CNH','CNY','EUR','GBP','JPY','KRW','MXN','MYR','NOK','NZD','SEK','TRY','USD','USDCents','CZK','ZAR','HUF','USX','GBX','DKK','GEL') NOT NULL DEFAULT 'None',\n    `priceScaling` FLOAT NOT NULL DEFAULT 0 COMMENT 'underlying price scale factor - products where the underlying quotes in cents will have 0.01',\n    `underliersPerCn` INT NOT NULL DEFAULT 0 COMMENT 'shares, bond, or index units underlying the future (contract size)',\n    `underlierType` ENUM('None','Equity','Other','FX') NOT NULL DEFAULT 'None' COMMENT 'Underlying type; None; Equity; Other; FX',\n    `clearingCode` VARCHAR(6) NOT NULL DEFAULT '' COMMENT 'GMI/Clearing code',\n    `ricRoot` VARCHAR(6) NOT NULL DEFAULT '' COMMENT 'RIC Root',\n    `bbgRoot` VARCHAR(6) NOT NULL DEFAULT '' COMMENT 'Bloomberg root',\n    `bbgGroup` ENUM('None','Govt','Corp','Mtge','MMkt','Muni','Pfd','Equity','Comdty','Index','Curncy') NOT NULL DEFAULT 'None' COMMENT 'Bloomberg Yellow Key',\n    `gmiExchange` VARCHAR(3) NOT NULL DEFAULT '' COMMENT 'GMI (Sungard) exchange code',\n    `gmiProduct` VARCHAR(3) NOT NULL DEFAULT '' COMMENT 'GMI (Sungard) product code',\n    `gmiSubType` VARCHAR(3) NOT NULL DEFAULT '' COMMENT 'GMI (Sungard) subtype code',\n    `displayPriceScaling` FLOAT NOT NULL DEFAULT 0 COMMENT 'internal display price scale factor override',\n    `strikeScaling` FLOAT NOT NULL DEFAULT 0 COMMENT 'internal strike price scale factor override',\n    `description` VARCHAR(48) NOT NULL DEFAULT '' COMMENT 'product description',\n    `marketCenter` VARCHAR(48) NOT NULL DEFAULT '' COMMENT 'market center, eg \"ICE Market Type\", \"CME MarketGroup\"',\n    `tradingPeriod` ENUM('None','NMS','NMS_EXT','NMS_GTH','CME_ES','CME_GRAIN','CME_TRSY','CME_ENGY','CME_METAL','CME_FX','CME_COMD','CME_CRYP','CME_DAIRY','CME_EQBTIC','CME_NKBTIC','CME_WEATHER','CME_TACO','CME_TPXBTIC','CME_FTSE','CME_BMD','CME_BOVESPA','CME_EQTMAC','CME_TAM','CME_OTHER','CFE','ICE_US','ICE_EU','EUX','EU_ERX','EU_CBOE','EU_NXAM','EU_NXBR','EU_NXLS','EU_NXML','EU_NXOS','EU_NXP') NOT NULL DEFAULT 'None',\n    `timestamp` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000',\n    PRIMARY KEY USING HASH (`ccode_tk`,`ccode_at`,`ccode_ts`),\n    KEY `TickerIndex` (`ticker_tk`) USING HASH\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='Commodity code (product code) definitions for all futures.  Also maps future ccodes to SpiderRock tickers. Information is sourced from listing exchange product definitions.\\nThis table also contains definitions for exchange and user-defined spreads including spreads used as option underliers. SpiderRock typically uses a compact form of the exchange (spread) product ID as the ccode for these products if there is no natural (human-readable) exchange spread ticker issued for the spread.  Note that the full spread definition can be found in the ProductDefinition and human-readable version in the description field below.\\nNote that SpiderRock tickers below are synthetic and are created for organizational purposes only.  SpiderRock synthetic tickers typically begin with a \\'@\\' character.';\n\n"})}),"\n",(0,d.jsx)(n.h3,{id:"select-table-example-query",children:"SELECT TABLE EXAMPLE QUERY"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-sql",children:"SELECT\n    `ccode_at`,\n    `ccode_ts`,\n    `ccode_tk`,\n    `futexch`,\n    `ticker_at`,\n    `ticker_ts`,\n    `ticker_tk`,\n    `settleTime`,\n    `positionLimit`,\n    `tickValue`,\n    `pointValue`,\n    `pointCurrency`,\n    `priceScaling`,\n    `underliersPerCn`,\n    `underlierType`,\n    `clearingCode`,\n    `ricRoot`,\n    `bbgRoot`,\n    `bbgGroup`,\n    `gmiExchange`,\n    `gmiProduct`,\n    `gmiSubType`,\n    `displayPriceScaling`,\n    `strikeScaling`,\n    `description`,\n    `marketCenter`,\n    `tradingPeriod`,\n    `timestamp`\nFROM `SRAnalytics`.`MsgCCodeDefinition`\nWHERE \n    /* Replace with a ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') */ \n    `ccode_at` = 'None'\n  AND\n    /* Replace with a ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','EUX','ANY','CXE','DXE','NXAM','NXBR','NXLS','NXML','NXOS','NXP','EUREX','CEDX','ICEFE') */ \n    `ccode_ts` = 'None'\n  AND\n    /* Replace with a VARCHAR(12) */ \n    `ccode_tk` = 'Example_ccode_tk';\n"})}),"\n",(0,d.jsx)(n.h3,{id:"doc-columns-query",children:"Doc Columns Query"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-sql",children:"SELECT * FROM SRAnalytics.doccolumns WHERE TABLE_NAME='CCodeDefinition' ORDER BY ordinal_position ASC;\n"})})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(a,{...e})}):a(e)}},91503:function(e,n,t){t.d(n,{Z:function(){return c},a:function(){return s}});var i=t(75271);let d={},r=i.createContext(d);function s(e){let n=i.useContext(r);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:s(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);