"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[83606],{27057:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>o,frontMatter:()=>d,metadata:()=>c,toc:()=>h});var t=s(74848),i=s(28453);const d={},r=void 0,c={id:"MessageSchemas/Schema/SRSE Products/SRLive/TickerDefinition/TickerDefinition",title:"TickerDefinition",description:"V8 Message Definiton",source:"@site/versioned_docs/version-8.4.10.2/MessageSchemas/Schema/SRSE Products/SRLive/TickerDefinition/TickerDefinition.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRLive/TickerDefinition",slug:"/MessageSchemas/Schema/SRSE Products/SRLive/TickerDefinition/",permalink:"/docs/8.4.10.2/MessageSchemas/Schema/SRSE Products/SRLive/TickerDefinition/",draft:!1,unlisted:!1,tags:[],version:"8.4.10.2",frontMatter:{},sidebar:"messageSchemasSidebar",previous:{title:"TickerAnalytics",permalink:"/docs/8.4.10.2/MessageSchemas/Schema/SRSE Products/SRLive/TickerAnalytics/"},next:{title:"TickerDefinitionExt",permalink:"/docs/8.4.10.2/MessageSchemas/Schema/SRSE Products/SRLive/TickerDefinitionExt/"}},l={},h=[{value:"METADATA",id:"metadata",level:3},{value:"Table Definition",id:"table-definition",level:3},{value:"PRIMARY KEY DEFINITION (Unique)",id:"primary-key-definition-unique",level:3},{value:"JSON Block (ExchangeList)",id:"json-block-exchangelist",level:3},{value:"CREATE TABLE EXAMPLE QUERY",id:"create-table-example-query",level:3},{value:"SELECT TABLE EXAMPLE QUERY",id:"select-table-example-query",level:3},{value:"Doc Columns Query",id:"doc-columns-query",level:3}];function x(e){const n={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"../../../Topics/product-definition/TickerDefinition",children:"V8 Message Definiton"})}),"\n",(0,t.jsx)(n.p,{children:"TickerDefinition (internal only) records exist for all SpiderRock tickers including equity tickers (stocks and ETFs) as well as index tickers and synthetic tickers for future chains and option multihedge baskets."}),"\n",(0,t.jsx)(n.h3,{id:"metadata",children:"METADATA"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Attribute"}),(0,t.jsx)(n.th,{children:"Value"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Topic"}),(0,t.jsx)(n.td,{children:"4335-product-definition"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"MLink Token"}),(0,t.jsx)(n.td,{children:"EquityDefinition"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Product"}),(0,t.jsx)(n.td,{children:"SRLive"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"accessType"}),(0,t.jsx)(n.td,{children:"SELECT"})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"table-definition",children:"Table Definition"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Field"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Key"}),(0,t.jsx)(n.th,{children:"Default Value"}),(0,t.jsx)(n.th,{children:"Comment"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"ticker_at"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"../../../Enums/AssetType",children:"enum - AssetType"})}),(0,t.jsx)(n.td,{children:"PRI"}),(0,t.jsx)(n.td,{children:"'None'"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"ticker_ts"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"../../../Enums/TickerSrc",children:"enum - TickerSrc"})}),(0,t.jsx)(n.td,{children:"PRI"}),(0,t.jsx)(n.td,{children:"'None'"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"ticker_tk"}),(0,t.jsx)(n.td,{children:"VARCHAR(12)"}),(0,t.jsx)(n.td,{children:"PRI"}),(0,t.jsx)(n.td,{children:"''"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"securityID"}),(0,t.jsx)(n.td,{children:"INT"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"0"}),(0,t.jsx)(n.td,{children:"Security ID number from the source  Vendor SR Feed"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"symbolType"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"../../../Enums/SymbolType",children:"enum - SymbolType"})}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"'None'"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"name"}),(0,t.jsx)(n.td,{children:"VARCHAR(72)"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"''"}),(0,t.jsx)(n.td,{children:"Symbol name"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"country"}),(0,t.jsx)(n.td,{children:"VARCHAR(2)"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"''"}),(0,t.jsx)(n.td,{children:"ISO Issuer Country Code"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"primaryCurrency"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"../../../Enums/Currency",children:"enum - Currency"})}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"'None'"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"rateCurve"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"../../../Enums/RateCurve",children:"enum - RateCurve"})}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"'None'"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"parValue"}),(0,t.jsx)(n.td,{children:"FLOAT"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"0"}),(0,t.jsx)(n.td,{children:"Security Parvalue"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"parValueCurrency"}),(0,t.jsx)(n.td,{children:"VARCHAR(3)"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"''"}),(0,t.jsx)(n.td,{children:"Security Parvalue currency"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"pointValue"}),(0,t.jsx)(n.td,{children:"FLOAT"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"0"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"pointCurrency"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"../../../Enums/Currency",children:"enum - Currency"})}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"'None'"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"primaryExch"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"../../../Enums/PrimaryExchange",children:"enum - PrimaryExchange"})}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"'None'"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"altID"}),(0,t.jsx)(n.td,{children:"INT"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"0"}),(0,t.jsx)(n.td,{children:"Alt Security ID number"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"mic"}),(0,t.jsx)(n.td,{children:"VARCHAR(4)"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"''"}),(0,t.jsx)(n.td,{children:"ISO Market Identification Code"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"micSeg"}),(0,t.jsx)(n.td,{children:"VARCHAR(4)"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"''"}),(0,t.jsx)(n.td,{children:"ISO Market Indentification Segment Code"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"symbol"}),(0,t.jsx)(n.td,{children:"VARCHAR(12)"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"''"}),(0,t.jsx)(n.td,{children:"trading symbol wo dot notation"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"issueClass"}),(0,t.jsx)(n.td,{children:"VARCHAR(1)"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"''"}),(0,t.jsx)(n.td,{children:"issue class of stock symbol  if no issue class field will be blank"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"sharesOutstanding"}),(0,t.jsx)(n.td,{children:"BIGINT"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"0"}),(0,t.jsx)(n.td,{children:"symbol shares outstanding represented in thousands actualsharesoutstanding  sharesoutstanding  1000"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"cusip"}),(0,t.jsx)(n.td,{children:"VARCHAR(10)"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"''"}),(0,t.jsx)(n.td,{children:"cusip code"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"indNum"}),(0,t.jsx)(n.td,{children:"INT"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"0"}),(0,t.jsx)(n.td,{children:"IND 2 digits"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"subNum"}),(0,t.jsx)(n.td,{children:"INT"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"0"}),(0,t.jsx)(n.td,{children:"SUB 4 digits"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"grpNum"}),(0,t.jsx)(n.td,{children:"INT"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"0"}),(0,t.jsx)(n.td,{children:"GRP 6 digits"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"nbrNum"}),(0,t.jsx)(n.td,{children:"INT"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"0"}),(0,t.jsx)(n.td,{children:"NBR 8 digits"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"sic"}),(0,t.jsx)(n.td,{children:"VARCHAR(4)"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"''"}),(0,t.jsx)(n.td,{children:"SIC Standard Industrial Classification code"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"cik"}),(0,t.jsx)(n.td,{children:"VARCHAR(10)"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"''"}),(0,t.jsx)(n.td,{children:"Central Index Key US specific"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"gics"}),(0,t.jsx)(n.td,{children:"VARCHAR(8)"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"''"}),(0,t.jsx)(n.td,{children:"Global Industry Classification Standard"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"lei"}),(0,t.jsx)(n.td,{children:"VARCHAR(20)"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"''"}),(0,t.jsx)(n.td,{children:"Legal Entity Identifier"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"naics"}),(0,t.jsx)(n.td,{children:"VARCHAR(6)"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"''"}),(0,t.jsx)(n.td,{children:"North American Industry Classification System"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"cfi"}),(0,t.jsx)(n.td,{children:"VARCHAR(6)"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"''"}),(0,t.jsx)(n.td,{children:"ISO Classification of Financial Instruments"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"cic"}),(0,t.jsx)(n.td,{children:"VARCHAR(4)"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"''"}),(0,t.jsx)(n.td,{children:"Complementay Identification Code"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"fisn"}),(0,t.jsx)(n.td,{children:"VARCHAR(40)"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"''"}),(0,t.jsx)(n.td,{children:"Financial Instrument Short Name"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"isin"}),(0,t.jsx)(n.td,{children:"VARCHAR(12)"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"''"}),(0,t.jsx)(n.td,{children:"ISIN code"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"figi"}),(0,t.jsx)(n.td,{children:"VARCHAR(16)"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"''"}),(0,t.jsx)(n.td,{children:"FIGI code"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"bbgCompositeTicker"}),(0,t.jsx)(n.td,{children:"VARCHAR(12)"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"''"}),(0,t.jsx)(n.td,{children:"Bloomberg Composite Ticker"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"bbgExchangeTicker"}),(0,t.jsx)(n.td,{children:"VARCHAR(28)"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"''"}),(0,t.jsx)(n.td,{children:"Bloomberg Exchange Ticker"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"bbgCompositeGlobalID"}),(0,t.jsx)(n.td,{children:"VARCHAR(12)"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"''"}),(0,t.jsx)(n.td,{children:"Bloomberg Composite Global ID"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"bbgGlobalID"}),(0,t.jsx)(n.td,{children:"VARCHAR(12)"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"''"}),(0,t.jsx)(n.td,{children:"Bloomberg Global ID"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"bbgCurrency"}),(0,t.jsx)(n.td,{children:"VARCHAR(3)"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"''"}),(0,t.jsx)(n.td,{children:"Bloomberg Trading Currency"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"otcPrimaryMarket"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"../../../Enums/OTCPrimaryMarket",children:"enum - OTCPrimaryMarket"})}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"'None'"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"otcTier"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"../../../Enums/OTCTier",children:"enum - OTCTier"})}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"'None'"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"otcReportingStatus"}),(0,t.jsx)(n.td,{children:"VARCHAR(1)"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"''"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"otcDisclosureStatus"}),(0,t.jsx)(n.td,{children:"INT"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"0"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"otcFlags"}),(0,t.jsx)(n.td,{children:"INT"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"0"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"stkPriceInc"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"../../../Enums/StkPriceInc",children:"enum - StkPriceInc"})}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"'None'"}),(0,t.jsx)(n.td,{children:"Price increment None FullPenny Nickle"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"tkDefSource"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"../../../Enums/TkDefSource",children:"enum - TkDefSource"})}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"'None'"}),(0,t.jsx)(n.td,{children:"Ticker definition source None Vendor OTC SR Exchange"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"statusFlag"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"../../../Enums/TkStatusFlag",children:"enum - TkStatusFlag"})}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"'None'"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"tapeCode"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"../../../Enums/TapeCode",children:"enum - TapeCode"})}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"'None'"}),(0,t.jsx)(n.td,{children:"SIP Tape Code"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"stkVolume"}),(0,t.jsx)(n.td,{children:"FLOAT"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"0"}),(0,t.jsx)(n.td,{children:"daily stock volume"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"futVolume"}),(0,t.jsx)(n.td,{children:"FLOAT"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"0"}),(0,t.jsx)(n.td,{children:"daily future volume"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"optVolume"}),(0,t.jsx)(n.td,{children:"FLOAT"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"0"}),(0,t.jsx)(n.td,{children:"daily option volume"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"exchString"}),(0,t.jsx)(n.td,{children:"VARCHAR(8)"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"''"}),(0,t.jsx)(n.td,{children:"exchanges listing any options on this underlying"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"hasOptions"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"../../../Enums/YesNo",children:"enum - YesNo"})}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"'None'"}),(0,t.jsx)(n.td,{children:"Has Options flag"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"numOptions"}),(0,t.jsx)(n.td,{children:"INT"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"0"}),(0,t.jsx)(n.td,{children:"total number of listed options"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"basisKey_at"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"../../../Enums/AssetType",children:"enum - AssetType"})}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"'None'"}),(0,t.jsx)(n.td,{children:"skew basis fn key"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"basisKey_ts"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"../../../Enums/TickerSrc",children:"enum - TickerSrc"})}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"'None'"}),(0,t.jsx)(n.td,{children:"skew basis fn key"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"basisKey_tk"}),(0,t.jsx)(n.td,{children:"VARCHAR(12)"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"''"}),(0,t.jsx)(n.td,{children:"skew basis fn key"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"reverseSkew"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"../../../Enums/YesNo",children:"enum - YesNo"})}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"'None'"}),(0,t.jsx)(n.td,{children:"if YesNo force skew curve normareverse leftright orientation  if None autodetermine from data"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"timeMetric"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"../../../Enums/TimeMetric",children:"enum - TimeMetric"})}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"'None'"}),(0,t.jsx)(n.td,{children:"trading time metric  252 or 365 trading days or a weekly cycle type"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"tradingPeriod"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"../../../Enums/TradingPeriod",children:"enum - TradingPeriod"})}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"'None'"}),(0,t.jsx)(n.td,{children:"trading period code defines 24hour trading period startstop"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"timestamp"}),(0,t.jsx)(n.td,{children:"DATETIME(6)"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"'1900-01-01 00:00:00.000000'"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"ExchangeList"}),(0,t.jsx)(n.td,{children:"JSON"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"'JSON_OBJECT()'"}),(0,t.jsx)(n.td,{})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"primary-key-definition-unique",children:"PRIMARY KEY DEFINITION (Unique)"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Field"}),(0,t.jsx)(n.th,{children:"Sequence"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"ticker_tk"}),(0,t.jsx)(n.td,{children:"1"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"ticker_at"}),(0,t.jsx)(n.td,{children:"2"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"ticker_ts"}),(0,t.jsx)(n.td,{children:"3"})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"json-block-exchangelist",children:"JSON Block (ExchangeList)"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Field"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Comment"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"stkExch"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"../../../Enums/stkExch",children:"enum - stkExch"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"ticker"}),(0,t.jsx)(n.td,{children:"TickerKey"}),(0,t.jsx)(n.td,{})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"create-table-example-query",children:"CREATE TABLE EXAMPLE QUERY"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"CREATE TABLE `SRLive`.`MsgTickerDefinition` (\n    `ticker_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None',\n    `ticker_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','EUX','ANY','CXE','DXE','NXAM','NXBR','NXLS','NXML','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None',\n    `ticker_tk` VARCHAR(12) NOT NULL DEFAULT '',\n    `securityID` INT NOT NULL DEFAULT 0 COMMENT 'Security ID number from the source - Vendor, SR, Feed',\n    `symbolType` ENUM('None','Equity','ADR','ETF','CashIndex','MutualFund','ShortETF','Future','Bond','DepReceipts','PreferredSec','PreferenceShare','StructuredProd','StapledSec','TradeableRights','Unit','Warrant','WhenIssued','ForeignIssue') NOT NULL DEFAULT 'None',\n    `name` VARCHAR(72) NOT NULL DEFAULT '' COMMENT 'Symbol name',\n    `country` VARCHAR(2) NOT NULL DEFAULT '' COMMENT 'ISO Issuer Country Code',\n    `primaryCurrency` ENUM('None','AUD','BRL','CAD','CHF','CNH','CNY','EUR','GBP','JPY','KRW','MXN','MYR','NOK','NZD','SEK','TRY','USD','USDCents','CZK','ZAR','HUF','USX','GBX') NOT NULL DEFAULT 'None',\n    `rateCurve` ENUM('None','Default','SOFR','SpxBox','StoxxBox') NOT NULL DEFAULT 'None',\n    `parValue` FLOAT NOT NULL DEFAULT 0 COMMENT 'Security Parvalue',\n    `parValueCurrency` VARCHAR(3) NOT NULL DEFAULT '' COMMENT 'Security Parvalue currency',\n    `pointValue` FLOAT NOT NULL DEFAULT 0,\n    `pointCurrency` ENUM('None','AUD','BRL','CAD','CHF','CNH','CNY','EUR','GBP','JPY','KRW','MXN','MYR','NOK','NZD','SEK','TRY','USD','USDCents','CZK','ZAR','HUF','USX','GBX') NOT NULL DEFAULT 'None',\n    `primaryExch` ENUM('None','NYSE','NYSEArca','NYSEMkt','NASDAQ','NASDAQBOS','BATS','PHLX','IEXG','CSE','NSE','FINRA','PORTAL','OTC','CME','CBOT','NYMEX','COMEX','ICE','EUREX','XETRA','CDEX','BXE','CXE','DXE','LSE','NXAM','NXBR','NXLS','NXML','NXOS','NXP') NOT NULL DEFAULT 'None',\n    `altID` INT NOT NULL DEFAULT 0 COMMENT 'Alt Security ID number',\n    `mic` VARCHAR(4) NOT NULL DEFAULT '' COMMENT 'ISO Market Identification Code',\n    `micSeg` VARCHAR(4) NOT NULL DEFAULT '' COMMENT 'ISO Market Indentification Segment Code',\n    `symbol` VARCHAR(12) NOT NULL DEFAULT '' COMMENT 'trading symbol (w/o dot notation)',\n    `issueClass` VARCHAR(1) NOT NULL DEFAULT '' COMMENT 'issue class of stock symbol.  if no issue class field will be blank.',\n    `sharesOutstanding` BIGINT NOT NULL DEFAULT 0 COMMENT 'symbol shares outstanding, represented in thousands (actualsharesoutstanding = sharesoutstanding * 1000)',\n    `cusip` VARCHAR(10) NOT NULL DEFAULT '' COMMENT 'cusip code',\n    `indNum` INT NOT NULL DEFAULT 0 COMMENT 'IND (2 digits)',\n    `subNum` INT NOT NULL DEFAULT 0 COMMENT 'SUB (4 digits)',\n    `grpNum` INT NOT NULL DEFAULT 0 COMMENT 'GRP (6 digits)',\n    `nbrNum` INT NOT NULL DEFAULT 0 COMMENT 'NBR (8 digits)',\n    `sic` VARCHAR(4) NOT NULL DEFAULT '' COMMENT 'SIC (Standard Industrial Classification) code',\n    `cik` VARCHAR(10) NOT NULL DEFAULT '' COMMENT 'Central Index Key (US specific)',\n    `gics` VARCHAR(8) NOT NULL DEFAULT '' COMMENT 'Global Industry Classification Standard',\n    `lei` VARCHAR(20) NOT NULL DEFAULT '' COMMENT 'Legal Entity Identifier',\n    `naics` VARCHAR(6) NOT NULL DEFAULT '' COMMENT 'North American Industry Classification System',\n    `cfi` VARCHAR(6) NOT NULL DEFAULT '' COMMENT 'ISO Classification of Financial Instruments',\n    `cic` VARCHAR(4) NOT NULL DEFAULT '' COMMENT 'Complementay Identification Code',\n    `fisn` VARCHAR(40) NOT NULL DEFAULT '' COMMENT 'Financial Instrument Short Name',\n    `isin` VARCHAR(12) NOT NULL DEFAULT '' COMMENT 'ISIN code',\n    `figi` VARCHAR(16) NOT NULL DEFAULT '' COMMENT 'FIGI code',\n    `bbgCompositeTicker` VARCHAR(12) NOT NULL DEFAULT '' COMMENT 'Bloomberg Composite Ticker',\n    `bbgExchangeTicker` VARCHAR(28) NOT NULL DEFAULT '' COMMENT 'Bloomberg Exchange Ticker',\n    `bbgCompositeGlobalID` VARCHAR(12) NOT NULL DEFAULT '' COMMENT 'Bloomberg Composite Global ID',\n    `bbgGlobalID` VARCHAR(12) NOT NULL DEFAULT '' COMMENT 'Bloomberg Global ID',\n    `bbgCurrency` VARCHAR(3) NOT NULL DEFAULT '' COMMENT 'Bloomberg Trading Currency',\n    `otcPrimaryMarket` ENUM('None','OTCLink','OTCBB','OTCLinkBB','GreyMarket','OTCBonds') NOT NULL DEFAULT 'None',\n    `otcTier` ENUM('None','OtcNoTier','OTCQXUSPrem','OTCQXUS','OTCQXIntPrem','OTCQXInt','OTCQB','OTCBBOnly','PinkCurr','PinkLim','PinkNoInfo','Grey','Expert','OTCBonds') NOT NULL DEFAULT 'None',\n    `otcReportingStatus` VARCHAR(1) NOT NULL DEFAULT '',\n    `otcDisclosureStatus` INT NOT NULL DEFAULT 0,\n    `otcFlags` INT NOT NULL DEFAULT 0,\n    `stkPriceInc` ENUM('None','FullPenny','Nickle') NOT NULL DEFAULT 'None' COMMENT 'Price increment: None; FullPenny; Nickle',\n    `tkDefSource` ENUM('None','Vendor','OTC','SR','Exchange') NOT NULL DEFAULT 'None' COMMENT 'Ticker definition source: None; Vendor; OTC; SR; Exchange',\n    `statusFlag` ENUM('None','Active','Delisted') NOT NULL DEFAULT 'None',\n    `tapeCode` ENUM('None','A','B','C') NOT NULL DEFAULT 'None' COMMENT 'SIP Tape Code',\n    `stkVolume` FLOAT NOT NULL DEFAULT 0 COMMENT 'daily stock volume',\n    `futVolume` FLOAT NOT NULL DEFAULT 0 COMMENT 'daily future volume',\n    `optVolume` FLOAT NOT NULL DEFAULT 0 COMMENT 'daily option volume',\n    `exchString` VARCHAR(8) NOT NULL DEFAULT '' COMMENT 'exchanges listing any options on this underlying',\n    `hasOptions` ENUM('None','Yes','No') NOT NULL DEFAULT 'None' COMMENT 'Has Options flag',\n    `numOptions` INT NOT NULL DEFAULT 0 COMMENT 'total number of listed options',\n    `basisKey_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None' COMMENT 'skew basis fn key',\n    `basisKey_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','EUX','ANY','CXE','DXE','NXAM','NXBR','NXLS','NXML','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None' COMMENT 'skew basis fn key',\n    `basisKey_tk` VARCHAR(12) NOT NULL DEFAULT '' COMMENT 'skew basis fn key',\n    `reverseSkew` ENUM('None','Yes','No') NOT NULL DEFAULT 'None' COMMENT 'if Yes/No, force skew curve norma/reverse (left/right) orientation,  if None, auto-determine from data',\n    `timeMetric` ENUM('None','D252','D365','SRV6') NOT NULL DEFAULT 'None' COMMENT 'trading time metric - 252 or 365 trading days or a weekly cycle type',\n    `tradingPeriod` ENUM('None','NMS','NMS_EXT','NMS_GTH','CME_ES','CME_ZC','CME_ZN','CME_CL','CME_GC','CFE','ICE_US','ICE_EU','EUX','EU_ERX','EU_CBOE','EU_NXAM','EU_NXBR','EU_NXLS','EU_NXML','EU_NXOS','EU_NXP') NOT NULL DEFAULT 'None' COMMENT 'trading period code (defines 24-hour trading period start/stop)',\n    `timestamp` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000',\n    `ExchangeList` JSON NOT NULL DEFAULT JSON_OBJECT() CHECK(JSON_VALID(ExchangeList)),\n    PRIMARY KEY USING HASH (`ticker_tk`,`ticker_at`,`ticker_ts`)\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='TickerDefinition (internal only) records exist for all SpiderRock tickers including equity tickers (stocks and ETFs) as well as index tickers and synthetic tickers for future chains and option multihedge baskets.';\n\n"})}),"\n",(0,t.jsx)(n.h3,{id:"select-table-example-query",children:"SELECT TABLE EXAMPLE QUERY"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"SELECT\n    `ticker_at`,\n    `ticker_ts`,\n    `ticker_tk`,\n    `securityID`,\n    `symbolType`,\n    `name`,\n    `country`,\n    `primaryCurrency`,\n    `rateCurve`,\n    `parValue`,\n    `parValueCurrency`,\n    `pointValue`,\n    `pointCurrency`,\n    `primaryExch`,\n    `altID`,\n    `mic`,\n    `micSeg`,\n    `symbol`,\n    `issueClass`,\n    `sharesOutstanding`,\n    `cusip`,\n    `indNum`,\n    `subNum`,\n    `grpNum`,\n    `nbrNum`,\n    `sic`,\n    `cik`,\n    `gics`,\n    `lei`,\n    `naics`,\n    `cfi`,\n    `cic`,\n    `fisn`,\n    `isin`,\n    `figi`,\n    `bbgCompositeTicker`,\n    `bbgExchangeTicker`,\n    `bbgCompositeGlobalID`,\n    `bbgGlobalID`,\n    `bbgCurrency`,\n    `otcPrimaryMarket`,\n    `otcTier`,\n    `otcReportingStatus`,\n    `otcDisclosureStatus`,\n    `otcFlags`,\n    `stkPriceInc`,\n    `tkDefSource`,\n    `statusFlag`,\n    `tapeCode`,\n    `stkVolume`,\n    `futVolume`,\n    `optVolume`,\n    `exchString`,\n    `hasOptions`,\n    `numOptions`,\n    `basisKey_at`,\n    `basisKey_ts`,\n    `basisKey_tk`,\n    `reverseSkew`,\n    `timeMetric`,\n    `tradingPeriod`,\n    `timestamp`,\n    `ExchangeList`\nFROM `SRLive`.`MsgTickerDefinition`\nWHERE \n    /* Replace with a ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') */ \n    `ticker_at` = 'None'\n  AND\n    /* Replace with a ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','EUX','ANY','CXE','DXE','NXAM','NXBR','NXLS','NXML','NXOS','NXP','EUREX','CEDX','ICEFE') */ \n    `ticker_ts` = 'None'\n  AND\n    /* Replace with a VARCHAR(12) */ \n    `ticker_tk` = 'Example_ticker_tk';\n"})}),"\n",(0,t.jsx)(n.h3,{id:"doc-columns-query",children:"Doc Columns Query"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"SELECT * FROM SRLive.doccolumns WHERE TABLE_NAME='TickerDefinition' ORDER BY ordinal_position ASC;\n"})})]})}function o(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(x,{...e})}):x(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>c});var t=s(96540);const i={},d=t.createContext(i);function r(e){const n=t.useContext(d);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(d.Provider,{value:n},e.children)}}}]);