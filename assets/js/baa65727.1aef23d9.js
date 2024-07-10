"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[2032],{94552:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>o,frontMatter:()=>r,metadata:()=>c,toc:()=>x});var s=t(74848),i=t(28453);const r={},d=void 0,c={id:"MessageSchemas/Schema/SRSE Products/SRLive/TickerDefinition/TickerDefinition",title:"TickerDefinition",description:"V8 Message Definiton",source:"@site/docs/MessageSchemas/Schema/SRSE Products/SRLive/TickerDefinition/TickerDefinition.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRLive/TickerDefinition",slug:"/MessageSchemas/Schema/SRSE Products/SRLive/TickerDefinition/",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRLive/TickerDefinition/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"messageSchemasSidebar",previous:{title:"TickerAnalytics",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRLive/TickerAnalytics/"},next:{title:"TickerDefinitionExt",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRLive/TickerDefinitionExt/"}},l={},x=[{value:"METADATA",id:"metadata",level:3},{value:"Table Definition",id:"table-definition",level:3},{value:"PRIMARY KEY DEFINITION (Unique)",id:"primary-key-definition-unique",level:3},{value:"CREATE TABLE QUERY",id:"create-table-query",level:3}];function h(e){const n={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"../../../Topics/product-definition/TickerDefinition",children:"V8 Message Definiton"})}),"\n",(0,s.jsx)(n.p,{children:"TickerDefinition (internal only) records exist for all SpiderRock tickers including equity tickers (stocks and ETFs) as well as index tickers and synthetic tickers for future chains and option multihedge baskets."}),"\n",(0,s.jsx)(n.h3,{id:"metadata",children:"METADATA"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Attribute"}),(0,s.jsx)(n.th,{children:"Value"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Topic"}),(0,s.jsx)(n.td,{children:"4335-product-definition"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"MLink Token"}),(0,s.jsx)(n.td,{children:"EquityDefinition"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Product"}),(0,s.jsx)(n.td,{children:"SRLive"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"accessType"}),(0,s.jsx)(n.td,{children:"SELECT"})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"table-definition",children:"Table Definition"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Field"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Key"}),(0,s.jsx)(n.th,{children:"Comment"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"ticker_at"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"../../../Enums/AssetType",children:"enum - AssetType"})}),(0,s.jsx)(n.td,{children:"PRI"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"ticker_ts"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"../../../Enums/TickerSrc",children:"enum - TickerSrc"})}),(0,s.jsx)(n.td,{children:"PRI"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"ticker_tk"}),(0,s.jsx)(n.td,{children:"VARCHAR(12)"}),(0,s.jsx)(n.td,{children:"PRI"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"securityID"}),(0,s.jsx)(n.td,{children:"INT"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"Security ID number from the source  Vendor SR Feed"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"symbolType"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"../../../Enums/SymbolType",children:"enum - SymbolType"})}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"name"}),(0,s.jsx)(n.td,{children:"VARCHAR(72)"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"Symbol name"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"country"}),(0,s.jsx)(n.td,{children:"VARCHAR(2)"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"ISO Issuer Country Code"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"primaryCurrency"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"../../../Enums/Currency",children:"enum - Currency"})}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"rateCurve"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"../../../Enums/RateCurve",children:"enum - RateCurve"})}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"parValue"}),(0,s.jsx)(n.td,{children:"FLOAT"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"Security Parvalue"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"parValueCurrency"}),(0,s.jsx)(n.td,{children:"VARCHAR(3)"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"Security Parvalue currency"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"pointValue"}),(0,s.jsx)(n.td,{children:"FLOAT"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"pointCurrency"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"../../../Enums/Currency",children:"enum - Currency"})}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"primaryExch"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"../../../Enums/PrimaryExchange",children:"enum - PrimaryExchange"})}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"altID"}),(0,s.jsx)(n.td,{children:"INT"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"Alt Security ID number"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"mic"}),(0,s.jsx)(n.td,{children:"VARCHAR(4)"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"ISO Market Identification Code"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"micSeg"}),(0,s.jsx)(n.td,{children:"VARCHAR(4)"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"ISO Market Indentification Segment Code"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"symbol"}),(0,s.jsx)(n.td,{children:"VARCHAR(12)"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"trading symbol wo dot notation"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"issueClass"}),(0,s.jsx)(n.td,{children:"VARCHAR(1)"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"issue class of stock symbol  if no issue class field will be blank"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"sharesOutstanding"}),(0,s.jsx)(n.td,{children:"BIGINT"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"symbol shares outstanding represented in thousands actualsharesoutstanding  sharesoutstanding  1000"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"cusip"}),(0,s.jsx)(n.td,{children:"VARCHAR(10)"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"cusip code"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"indNum"}),(0,s.jsx)(n.td,{children:"INT"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"IND 2 digits"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"subNum"}),(0,s.jsx)(n.td,{children:"INT"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"SUB 4 digits"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"grpNum"}),(0,s.jsx)(n.td,{children:"INT"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"GRP 6 digits"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"nbrNum"}),(0,s.jsx)(n.td,{children:"INT"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"NBR 8 digits"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"sic"}),(0,s.jsx)(n.td,{children:"VARCHAR(4)"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"SIC Standard Industrial Classification code"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"cik"}),(0,s.jsx)(n.td,{children:"VARCHAR(10)"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"Central Index Key US specific"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"gics"}),(0,s.jsx)(n.td,{children:"VARCHAR(8)"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"Global Industry Classification Standard"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"lei"}),(0,s.jsx)(n.td,{children:"VARCHAR(20)"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"Legal Entity Identifier"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"naics"}),(0,s.jsx)(n.td,{children:"VARCHAR(6)"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"North American Industry Classification System"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"cfi"}),(0,s.jsx)(n.td,{children:"VARCHAR(6)"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"ISO Classification of Financial Instruments"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"cic"}),(0,s.jsx)(n.td,{children:"VARCHAR(4)"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"Complementay Identification Code"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"fisn"}),(0,s.jsx)(n.td,{children:"VARCHAR(40)"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"Financial Instrument Short Name"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"isin"}),(0,s.jsx)(n.td,{children:"VARCHAR(12)"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"ISIN code"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"figi"}),(0,s.jsx)(n.td,{children:"VARCHAR(16)"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"FIGI code"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"bbgCompositeTicker"}),(0,s.jsx)(n.td,{children:"VARCHAR(12)"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"Bloomberg Composite Ticker"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"bbgExchangeTicker"}),(0,s.jsx)(n.td,{children:"VARCHAR(28)"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"Bloomberg Exchange Ticker"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"bbgCompositeGlobalID"}),(0,s.jsx)(n.td,{children:"VARCHAR(12)"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"Bloomberg Composite Global ID"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"bbgGlobalID"}),(0,s.jsx)(n.td,{children:"VARCHAR(12)"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"Bloomberg Global ID"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"bbgCurrency"}),(0,s.jsx)(n.td,{children:"VARCHAR(3)"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"Bloomberg Trading Currency"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"otcPrimaryMarket"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"../../../Enums/OTCPrimaryMarket",children:"enum - OTCPrimaryMarket"})}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"otcTier"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"../../../Enums/OTCTier",children:"enum - OTCTier"})}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"otcReportingStatus"}),(0,s.jsx)(n.td,{children:"VARCHAR(1)"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"otcDisclosureStatus"}),(0,s.jsx)(n.td,{children:"INT"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"otcFlags"}),(0,s.jsx)(n.td,{children:"INT"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"stkPriceInc"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"../../../Enums/StkPriceInc",children:"enum - StkPriceInc"})}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"Price increment None FullPenny Nickle"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"tkDefSource"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"../../../Enums/TkDefSource",children:"enum - TkDefSource"})}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"Ticker definition source None Vendor OTC SR Exchange"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"statusFlag"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"../../../Enums/TkStatusFlag",children:"enum - TkStatusFlag"})}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"tapeCode"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"../../../Enums/TapeCode",children:"enum - TapeCode"})}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"SIP Tape Code"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"stkVolume"}),(0,s.jsx)(n.td,{children:"FLOAT"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"daily stock volume"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"futVolume"}),(0,s.jsx)(n.td,{children:"FLOAT"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"daily future volume"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"optVolume"}),(0,s.jsx)(n.td,{children:"FLOAT"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"daily option volume"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"exchString"}),(0,s.jsx)(n.td,{children:"VARCHAR(8)"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"exchanges listing any options on this underlying"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"hasOptions"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"../../../Enums/YesNo",children:"enum - YesNo"})}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"Has Options flag"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"numOptions"}),(0,s.jsx)(n.td,{children:"INT"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"total number of listed options"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"timeMetric"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"../../../Enums/TimeMetric",children:"enum - TimeMetric"})}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"trading time metric  252 or 365 trading days or a weekly cycle type"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"timestamp"}),(0,s.jsx)(n.td,{children:"DATETIME(6)"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"primary-key-definition-unique",children:"PRIMARY KEY DEFINITION (Unique)"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Field"}),(0,s.jsx)(n.th,{children:"Sequence"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"ticker_tk"}),(0,s.jsx)(n.td,{children:"1"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"ticker_at"}),(0,s.jsx)(n.td,{children:"2"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"ticker_ts"}),(0,s.jsx)(n.td,{children:"3"})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"create-table-query",children:"CREATE TABLE QUERY"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"CREATE TABLE `SRLive`.`MsgTickerDefinition` (\n    `ticker_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None',\n    `ticker_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','ESX','ANY','CXE','DXE','NXAM','NXBR','NXDUB','NXLS','NXLDN','NXML','NXMLT','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None',\n    `ticker_tk` VARCHAR(12) NOT NULL DEFAULT '',\n    `securityID` INT NOT NULL DEFAULT 0 COMMENT 'Security ID number from the source - Vendor, SR, Feed',\n    `symbolType` ENUM('None','Equity','ADR','ETF','CashIndex','MutualFund','ShortETF','Future','Bond','DepReceipts','PreferredSec','PreferenceShare','StructuredProd','StapledSec','TradeableRights','Unit','Warrant','WhenIssued','ForeignIssue') NOT NULL DEFAULT 'None',\n    `name` VARCHAR(72) NOT NULL DEFAULT '' COMMENT 'Symbol name',\n    `country` VARCHAR(2) NOT NULL DEFAULT '' COMMENT 'ISO Issuer Country Code',\n    `primaryCurrency` ENUM('None','AUD','BRL','CAD','CHF','CNH','CNY','EUR','GBP','JPY','KRW','MXN','MYR','NOK','NZD','SEK','TRY','USD','USDCents','CZK','ZAR','HUF','USX','GBX') NOT NULL DEFAULT 'None',\n    `rateCurve` ENUM('None','Default','SOFR','SpxBox','StoxxBox') NOT NULL DEFAULT 'None',\n    `parValue` FLOAT NOT NULL DEFAULT 0 COMMENT 'Security Parvalue',\n    `parValueCurrency` VARCHAR(3) NOT NULL DEFAULT '' COMMENT 'Security Parvalue currency',\n    `pointValue` FLOAT NOT NULL DEFAULT 0,\n    `pointCurrency` ENUM('None','AUD','BRL','CAD','CHF','CNH','CNY','EUR','GBP','JPY','KRW','MXN','MYR','NOK','NZD','SEK','TRY','USD','USDCents','CZK','ZAR','HUF','USX','GBX') NOT NULL DEFAULT 'None',\n    `primaryExch` ENUM('None','NYSE','NYSEArca','NYSEMkt','NASDAQ','NASDAQBOS','BATS','PHLX','IEXG','CSE','NSE','FINRA','PORTAL','OTC','CME','CBOT','NYMEX','COMEX','ICE','EUREX','XETRA','CDEX','BXE','CXE','DXE','LSE','NXAM','NXBR','NXDUB','NXLS','NXLDN','NXML','NXMLT','NXOS','NXP') NOT NULL DEFAULT 'None',\n    `altID` INT NOT NULL DEFAULT 0 COMMENT 'Alt Security ID number',\n    `mic` VARCHAR(4) NOT NULL DEFAULT '' COMMENT 'ISO Market Identification Code',\n    `micSeg` VARCHAR(4) NOT NULL DEFAULT '' COMMENT 'ISO Market Indentification Segment Code',\n    `symbol` VARCHAR(12) NOT NULL DEFAULT '' COMMENT 'trading symbol (w/o dot notation)',\n    `issueClass` VARCHAR(1) NOT NULL DEFAULT '' COMMENT 'issue class of stock symbol.  if no issue class field will be blank.',\n    `sharesOutstanding` BIGINT NOT NULL DEFAULT 0 COMMENT 'symbol shares outstanding, represented in thousands (actualsharesoutstanding = sharesoutstanding * 1000)',\n    `cusip` VARCHAR(10) NOT NULL DEFAULT '' COMMENT 'cusip code',\n    `indNum` INT NOT NULL DEFAULT 0 COMMENT 'IND (2 digits)',\n    `subNum` INT NOT NULL DEFAULT 0 COMMENT 'SUB (4 digits)',\n    `grpNum` INT NOT NULL DEFAULT 0 COMMENT 'GRP (6 digits)',\n    `nbrNum` INT NOT NULL DEFAULT 0 COMMENT 'NBR (8 digits)',\n    `sic` VARCHAR(4) NOT NULL DEFAULT '' COMMENT 'SIC (Standard Industrial Classification) code',\n    `cik` VARCHAR(10) NOT NULL DEFAULT '' COMMENT 'Central Index Key (US specific)',\n    `gics` VARCHAR(8) NOT NULL DEFAULT '' COMMENT 'Global Industry Classification Standard',\n    `lei` VARCHAR(20) NOT NULL DEFAULT '' COMMENT 'Legal Entity Identifier',\n    `naics` VARCHAR(6) NOT NULL DEFAULT '' COMMENT 'North American Industry Classification System',\n    `cfi` VARCHAR(6) NOT NULL DEFAULT '' COMMENT 'ISO Classification of Financial Instruments',\n    `cic` VARCHAR(4) NOT NULL DEFAULT '' COMMENT 'Complementay Identification Code',\n    `fisn` VARCHAR(40) NOT NULL DEFAULT '' COMMENT 'Financial Instrument Short Name',\n    `isin` VARCHAR(12) NOT NULL DEFAULT '' COMMENT 'ISIN code',\n    `figi` VARCHAR(16) NOT NULL DEFAULT '' COMMENT 'FIGI code',\n    `bbgCompositeTicker` VARCHAR(12) NOT NULL DEFAULT '' COMMENT 'Bloomberg Composite Ticker',\n    `bbgExchangeTicker` VARCHAR(28) NOT NULL DEFAULT '' COMMENT 'Bloomberg Exchange Ticker',\n    `bbgCompositeGlobalID` VARCHAR(12) NOT NULL DEFAULT '' COMMENT 'Bloomberg Composite Global ID',\n    `bbgGlobalID` VARCHAR(12) NOT NULL DEFAULT '' COMMENT 'Bloomberg Global ID',\n    `bbgCurrency` VARCHAR(3) NOT NULL DEFAULT '' COMMENT 'Bloomberg Trading Currency',\n    `otcPrimaryMarket` ENUM('None','OTCLink','OTCBB','OTCLinkBB','GreyMarket','OTCBonds') NOT NULL DEFAULT 'None',\n    `otcTier` ENUM('None','OtcNoTier','OTCQXUSPrem','OTCQXUS','OTCQXIntPrem','OTCQXInt','OTCQB','OTCBBOnly','PinkCurr','PinkLim','PinkNoInfo','Grey','Expert','OTCBonds') NOT NULL DEFAULT 'None',\n    `otcReportingStatus` VARCHAR(1) NOT NULL DEFAULT '',\n    `otcDisclosureStatus` INT NOT NULL DEFAULT 0,\n    `otcFlags` INT NOT NULL DEFAULT 0,\n    `stkPriceInc` ENUM('None','FullPenny','Nickle') NOT NULL DEFAULT 'None' COMMENT 'Price increment: None; FullPenny; Nickle',\n    `tkDefSource` ENUM('None','Vendor','OTC','SR','Exchange') NOT NULL DEFAULT 'None' COMMENT 'Ticker definition source: None; Vendor; OTC; SR; Exchange',\n    `statusFlag` ENUM('None','Active','Delisted') NOT NULL DEFAULT 'None',\n    `tapeCode` ENUM('None','A','B','C') NOT NULL DEFAULT 'None' COMMENT 'SIP Tape Code',\n    `stkVolume` FLOAT NOT NULL DEFAULT 0 COMMENT 'daily stock volume',\n    `futVolume` FLOAT NOT NULL DEFAULT 0 COMMENT 'daily future volume',\n    `optVolume` FLOAT NOT NULL DEFAULT 0 COMMENT 'daily option volume',\n    `exchString` VARCHAR(8) NOT NULL DEFAULT '' COMMENT 'exchanges listing any options on this underlying',\n    `hasOptions` ENUM('None','Yes','No') NOT NULL DEFAULT 'None' COMMENT 'Has Options flag',\n    `numOptions` INT NOT NULL DEFAULT 0 COMMENT 'total number of listed options',\n    `timeMetric` ENUM('None','D252','D365','SPX','WK1','WK2','WK3','WK4') NOT NULL DEFAULT 'None' COMMENT 'trading time metric - 252 or 365 trading days or a weekly cycle type',\n    `timestamp` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000',\n    PRIMARY KEY USING HASH (`ticker_tk`,`ticker_at`,`ticker_ts`)\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='TickerDefinition (internal only) records exist for all SpiderRock tickers including equity tickers (stocks and ETFs) as well as index tickers and synthetic tickers for future chains and option multihedge baskets.';\n\n"})})]})}function o(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>d,x:()=>c});var s=t(96540);const i={},r=s.createContext(i);function d(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);