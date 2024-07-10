"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[12580],{98812:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>a,frontMatter:()=>d,metadata:()=>c,toc:()=>o});var i=n(74848),r=n(28453);const d={},s=void 0,c={id:"MessageSchemas/Schema/SRSE Products/SRAnalytics/ProductDefinitionV2/ProductDefinitionV2",title:"ProductDefinitionV2",description:"V8 Message Definiton",source:"@site/docs/MessageSchemas/Schema/SRSE Products/SRAnalytics/ProductDefinitionV2/ProductDefinitionV2.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRAnalytics/ProductDefinitionV2",slug:"/MessageSchemas/Schema/SRSE Products/SRAnalytics/ProductDefinitionV2/",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRAnalytics/ProductDefinitionV2/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"messageSchemasSidebar",previous:{title:"OptionRiskFactor",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRAnalytics/OptionRiskFactor/"},next:{title:"RootDefinition",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRAnalytics/RootDefinition/"}},l={},o=[{value:"METADATA",id:"metadata",level:3},{value:"Table Definition",id:"table-definition",level:3},{value:"PRIMARY KEY DEFINITION (Unique)",id:"primary-key-definition-unique",level:3},{value:"JSON Block (LegsList)",id:"json-block-legslist",level:3},{value:"CREATE TABLE QUERY",id:"create-table-query",level:3}];function x(e){const t={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"../../../Topics/product-definition/ProductDefinitionV2",children:"V8 Message Definiton"})}),"\n",(0,i.jsx)(t.p,{children:"SpiderRock normalized exchange product definitions.  Includes future, option, and spread definitions from a number of exchanges.  TickerDefinitions, RootDefinitions and CCodeDefinitions are consistent with these records."}),"\n",(0,i.jsx)(t.h3,{id:"metadata",children:"METADATA"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Attribute"}),(0,i.jsx)(t.th,{children:"Value"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Topic"}),(0,i.jsx)(t.td,{children:"4335-product-definition"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"MLink Token"}),(0,i.jsx)(t.td,{children:"FutureDefinition"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Product"}),(0,i.jsx)(t.td,{children:"SRAnalytics"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"accessType"}),(0,i.jsx)(t.td,{children:"SELECT"})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"table-definition",children:"Table Definition"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Field"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{children:"Key"}),(0,i.jsx)(t.th,{children:"Comment"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"secKey_at"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"../../../Enums/AssetType",children:"enum - AssetType"})}),(0,i.jsx)(t.td,{children:"PRI"}),(0,i.jsx)(t.td,{children:"SR Security Key can be partially filled in look at secType"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"secKey_ts"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"../../../Enums/TickerSrc",children:"enum - TickerSrc"})}),(0,i.jsx)(t.td,{children:"PRI"}),(0,i.jsx)(t.td,{children:"SR Security Key can be partially filled in look at secType"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"secKey_tk"}),(0,i.jsx)(t.td,{children:"VARCHAR(12)"}),(0,i.jsx)(t.td,{children:"PRI"}),(0,i.jsx)(t.td,{children:"SR Security Key can be partially filled in look at secType"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"secKey_yr"}),(0,i.jsx)(t.td,{children:"SMALLINT UNSIGNED"}),(0,i.jsx)(t.td,{children:"PRI"}),(0,i.jsx)(t.td,{children:"SR Security Key can be partially filled in look at secType"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"secKey_mn"}),(0,i.jsx)(t.td,{children:"TINYINT UNSIGNED"}),(0,i.jsx)(t.td,{children:"PRI"}),(0,i.jsx)(t.td,{children:"SR Security Key can be partially filled in look at secType"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"secKey_dy"}),(0,i.jsx)(t.td,{children:"TINYINT UNSIGNED"}),(0,i.jsx)(t.td,{children:"PRI"}),(0,i.jsx)(t.td,{children:"SR Security Key can be partially filled in look at secType"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"secKey_xx"}),(0,i.jsx)(t.td,{children:"DOUBLE"}),(0,i.jsx)(t.td,{children:"PRI"}),(0,i.jsx)(t.td,{children:"SR Security Key can be partially filled in look at secType"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"secKey_cp"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"../../../Enums/CallPut",children:"enum - CallPut"})}),(0,i.jsx)(t.td,{children:"PRI"}),(0,i.jsx)(t.td,{children:"SR Security Key can be partially filled in look at secType"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"secType"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"../../../Enums/SpdrKeyType",children:"enum - SpdrKeyType"})}),(0,i.jsx)(t.td,{children:"PRI"}),(0,i.jsx)(t.td,{children:"Security Type Stock Future Option"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"securityID"}),(0,i.jsx)(t.td,{children:"TINYTEXT"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"unique exchange id exch assigned"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"ticker_at"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"../../../Enums/AssetType",children:"enum - AssetType"})}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"master underlier"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"ticker_ts"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"../../../Enums/TickerSrc",children:"enum - TickerSrc"})}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"master underlier"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"ticker_tk"}),(0,i.jsx)(t.td,{children:"VARCHAR(12)"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"master underlier"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"SRspreadID"}),(0,i.jsx)(t.td,{children:"BIGINT"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"productClass"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"../../../Enums/ProductClass",children:"enum - ProductClass"})}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"underlierID"}),(0,i.jsx)(t.td,{children:"BIGINT"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"underlier product id option only securityID of undKeyundType product"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"undKey_at"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"../../../Enums/AssetType",children:"enum - AssetType"})}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"SR Underlier Security Key can be partially filled in look at undType option only"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"undKey_ts"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"../../../Enums/TickerSrc",children:"enum - TickerSrc"})}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"SR Underlier Security Key can be partially filled in look at undType option only"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"undKey_tk"}),(0,i.jsx)(t.td,{children:"VARCHAR(12)"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"SR Underlier Security Key can be partially filled in look at undType option only"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"undKey_yr"}),(0,i.jsx)(t.td,{children:"SMALLINT UNSIGNED"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"SR Underlier Security Key can be partially filled in look at undType option only"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"undKey_mn"}),(0,i.jsx)(t.td,{children:"TINYINT UNSIGNED"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"SR Underlier Security Key can be partially filled in look at undType option only"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"undKey_dy"}),(0,i.jsx)(t.td,{children:"TINYINT UNSIGNED"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"SR Underlier Security Key can be partially filled in look at undType option only"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"undType"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"../../../Enums/SpdrKeyType",children:"enum - SpdrKeyType"})}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"Underlier Security Type Stock Future option only"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"productGroup"}),(0,i.jsx)(t.td,{children:"VARCHAR(6)"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"Underlying product code  IE All GE Eurodollar spreads options futures will be in the same productGroup  This is the Asset field from the SecurityDefinition message"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"securityGroup"}),(0,i.jsx)(t.td,{children:"VARCHAR(6)"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"Exchange specific code for a group of related securities that are all affected by market events  IE All Emini weekly options EW  This is SecurityGroup field from the SecurityDefinition messages"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"marketSegmentID"}),(0,i.jsx)(t.td,{children:"INT"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"Exchange specific market segment identifier"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"ricCode"}),(0,i.jsx)(t.td,{children:"VARCHAR(32)"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"Full RIC Code  only provided for nonuser defined instruments"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"securityDesc"}),(0,i.jsx)(t.td,{children:"TINYTEXT"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"full exchange symbol"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"exchange"}),(0,i.jsx)(t.td,{children:"VARCHAR(8)"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"listing exchange"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"productType"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"../../../Enums/ProductType",children:"enum - ProductType"})}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"productTerm"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"../../../Enums/ProductTerm",children:"enum - ProductTerm"})}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"productIndexType"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"../../../Enums/ProductIndexType",children:"enum - ProductIndexType"})}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"productRate"}),(0,i.jsx)(t.td,{children:"FLOAT"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"contractSize"}),(0,i.jsx)(t.td,{children:"FLOAT"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"contractUnit"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"../../../Enums/ContractUnit",children:"enum - ContractUnit"})}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"priceFormat"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"../../../Enums/PriceFormat",children:"enum - PriceFormat"})}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"minTickSize"}),(0,i.jsx)(t.td,{children:"DOUBLE"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"displayFactor"}),(0,i.jsx)(t.td,{children:"DOUBLE"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"strikeScale"}),(0,i.jsx)(t.td,{children:"DOUBLE"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"manual strike price adjustment multiplier used for some CME products if set otherwise displayFactor is used okeyxx  strikePrice  manualStrikeScale"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"minLotSize"}),(0,i.jsx)(t.td,{children:"SMALLINT"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"minimum lot size"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"bookDepth"}),(0,i.jsx)(t.td,{children:"SMALLINT"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"levels in the Globex quote book"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"impliedBookDepth"}),(0,i.jsx)(t.td,{children:"SMALLINT"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"levels in the globex implied quote book 0 if no implied depth"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"impMarketInd"}),(0,i.jsx)(t.td,{children:"SMALLINT"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"implied market type 0  no implied 1  implied in 2  implied out 3  implied in  out"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"minPriceIncrementAmount"}),(0,i.jsx)(t.td,{children:"FLOAT"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"depricate minimum price amount points per handle"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"parValue"}),(0,i.jsx)(t.td,{children:"FLOAT"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"per contract par value"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"contMultiplier"}),(0,i.jsx)(t.td,{children:"FLOAT"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"contract deliverable multipler"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"cabPrice"}),(0,i.jsx)(t.td,{children:"DOUBLE"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"depricate cabinet price minimum closing price for OOM options"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"tradeCurr"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"../../../Enums/Currency",children:"enum - Currency"})}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"settleCurr"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"../../../Enums/Currency",children:"enum - Currency"})}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"strikeCurr"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"../../../Enums/Currency",children:"enum - Currency"})}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"expiration"}),(0,i.jsx)(t.td,{children:"DATETIME(6)"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"future expiration or option expiration if product is an option we use the last TRADING day as the expiration date"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"maturity"}),(0,i.jsx)(t.td,{children:"DATE"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"future maturity date or option maturity date  this is the delivery month"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"exerciseType"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"../../../Enums/ExerciseType",children:"enum - ExerciseType"})}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"depricate in RootDefinition Exercise style"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"userDefined"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"../../../Enums/YesNo",children:"enum - YesNo"})}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"decayStartYear"}),(0,i.jsx)(t.td,{children:"SMALLINT"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"decayStartMonth"}),(0,i.jsx)(t.td,{children:"TINYINT UNSIGNED"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"decayStartDay"}),(0,i.jsx)(t.td,{children:"TINYINT UNSIGNED"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"decayQty"}),(0,i.jsx)(t.td,{children:"INT"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"daily decay quantity"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"priceRatio"}),(0,i.jsx)(t.td,{children:"DOUBLE"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"price ratio for interest rate intercommodity spreads"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"timestamp"}),(0,i.jsx)(t.td,{children:"DATETIME(6)"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"LegsList"}),(0,i.jsx)(t.td,{children:"JSON"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"primary-key-definition-unique",children:"PRIMARY KEY DEFINITION (Unique)"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Field"}),(0,i.jsx)(t.th,{children:"Sequence"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"secKey_tk"}),(0,i.jsx)(t.td,{children:"1"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"secKey_yr"}),(0,i.jsx)(t.td,{children:"2"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"secKey_mn"}),(0,i.jsx)(t.td,{children:"3"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"secKey_dy"}),(0,i.jsx)(t.td,{children:"4"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"secKey_xx"}),(0,i.jsx)(t.td,{children:"5"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"secKey_cp"}),(0,i.jsx)(t.td,{children:"6"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"secKey_at"}),(0,i.jsx)(t.td,{children:"7"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"secKey_ts"}),(0,i.jsx)(t.td,{children:"8"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"secType"}),(0,i.jsx)(t.td,{children:"9"})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"json-block-legslist",children:"JSON Block (LegsList)"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Field"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{children:"Comment"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"legID"}),(0,i.jsx)(t.td,{children:"string"}),(0,i.jsx)(t.td,{children:"leg SecurityId exch assigned"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"secKey"}),(0,i.jsx)(t.td,{children:"OptionKey"}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"secType"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"../../../Enums/secType",children:"enum - secType"})}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"side"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"../../../Enums/side",children:"enum - side"})}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"ratio"}),(0,i.jsx)(t.td,{children:"ushort"}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"refDelta"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"refPrc"}),(0,i.jsx)(t.td,{children:"double"}),(0,i.jsx)(t.td,{})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"create-table-query",children:"CREATE TABLE QUERY"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sql",children:"CREATE TABLE `SRAnalytics`.`MsgProductDefinitionV2` (\n    `secKey_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None' COMMENT 'SR Security Key [can be partially filled in (look at secType)]',\n    `secKey_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','ESX','ANY','CXE','DXE','NXAM','NXBR','NXDUB','NXLS','NXLDN','NXML','NXMLT','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None' COMMENT 'SR Security Key [can be partially filled in (look at secType)]',\n    `secKey_tk` VARCHAR(12) NOT NULL DEFAULT '' COMMENT 'SR Security Key [can be partially filled in (look at secType)]',\n    `secKey_yr` SMALLINT UNSIGNED NOT NULL DEFAULT 0 COMMENT 'SR Security Key [can be partially filled in (look at secType)]',\n    `secKey_mn` TINYINT UNSIGNED NOT NULL DEFAULT 0 COMMENT 'SR Security Key [can be partially filled in (look at secType)]',\n    `secKey_dy` TINYINT UNSIGNED NOT NULL DEFAULT 0 COMMENT 'SR Security Key [can be partially filled in (look at secType)]',\n    `secKey_xx` DOUBLE NOT NULL DEFAULT 0 COMMENT 'SR Security Key [can be partially filled in (look at secType)]',\n    `secKey_cp` ENUM('Call','Put','Pair') NOT NULL DEFAULT 'Call' COMMENT 'SR Security Key [can be partially filled in (look at secType)]',\n    `secType` ENUM('None','Stock','Future','Option','MLeg') NOT NULL DEFAULT 'None' COMMENT 'Security Type [Stock, Future, Option]',\n    `securityID` TINYTEXT NOT NULL DEFAULT '' COMMENT 'unique exchange id (exch assigned)',\n    `ticker_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None' COMMENT 'master underlier',\n    `ticker_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','ESX','ANY','CXE','DXE','NXAM','NXBR','NXDUB','NXLS','NXLDN','NXML','NXMLT','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None' COMMENT 'master underlier',\n    `ticker_tk` VARCHAR(12) NOT NULL DEFAULT '' COMMENT 'master underlier',\n    `SRspreadID` BIGINT NOT NULL DEFAULT 0,\n    `productClass` ENUM('None','Equity','Index','Future','Option','Spread') NOT NULL DEFAULT 'None',\n    `underlierID` BIGINT NOT NULL DEFAULT 0 COMMENT 'underlier product id (option only) [securityID of undKey/undType product]',\n    `undKey_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None' COMMENT 'SR Underlier Security Key [can be partially filled in (look at undType)] (option only)',\n    `undKey_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','ESX','ANY','CXE','DXE','NXAM','NXBR','NXDUB','NXLS','NXLDN','NXML','NXMLT','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None' COMMENT 'SR Underlier Security Key [can be partially filled in (look at undType)] (option only)',\n    `undKey_tk` VARCHAR(12) NOT NULL DEFAULT '' COMMENT 'SR Underlier Security Key [can be partially filled in (look at undType)] (option only)',\n    `undKey_yr` SMALLINT UNSIGNED NOT NULL DEFAULT 0 COMMENT 'SR Underlier Security Key [can be partially filled in (look at undType)] (option only)',\n    `undKey_mn` TINYINT UNSIGNED NOT NULL DEFAULT 0 COMMENT 'SR Underlier Security Key [can be partially filled in (look at undType)] (option only)',\n    `undKey_dy` TINYINT UNSIGNED NOT NULL DEFAULT 0 COMMENT 'SR Underlier Security Key [can be partially filled in (look at undType)] (option only)',\n    `undType` ENUM('None','Stock','Future','Option','MLeg') NOT NULL DEFAULT 'None' COMMENT 'Underlier Security Type [Stock, Future] (option only)',\n    `productGroup` VARCHAR(6) NOT NULL DEFAULT '' COMMENT 'Underlying product code.  I.E. All GE (Eurodollar) spreads, options, futures will be in the same productGroup - This is the Asset field from the SecurityDefinition message',\n    `securityGroup` VARCHAR(6) NOT NULL DEFAULT '' COMMENT 'Exchange specific code for a group of related securities that are all affected by market events.  I.E. All E-mini weekly options (EW) - This is SecurityGroup field from the SecurityDefinition messages',\n    `marketSegmentID` INT NOT NULL DEFAULT 0 COMMENT 'Exchange specific market segment identifier',\n    `ricCode` VARCHAR(32) NOT NULL DEFAULT '' COMMENT 'Full RIC Code - only provided for non-user defined instruments',\n    `securityDesc` TINYTEXT NOT NULL DEFAULT '' COMMENT 'full exchange symbol',\n    `exchange` VARCHAR(8) NOT NULL DEFAULT '' COMMENT 'listing exchange',\n    `productType` ENUM('None','Outright','CalSpr','EqCalSpr','FXCalSpr','RedTick','BFly','Condor','Strip','InterCmd','Pack','MnPack','PackBFly','DblBFly','PackSpr','Crck','Bndl','BndlSpr','EnrStrp','BalStrp','UnbalStrp','EnICStrp','IRICStrp','ITRICSpr','UserDef','Combo','TAS','TASCalSpr','TAA','TIC','BIC','TAP','Index') NOT NULL DEFAULT 'None',\n    `productTerm` ENUM('None','Month','Day','Week','BalanceOfMonth','Quarter','Season','BalanceOfWeek','CalendarYear','Variable','Custom','SameDay','NextDay','Weekly','Pack','Bundle','IRSAndCDSTenor','Year') NOT NULL DEFAULT 'None',\n    `productIndexType` ENUM('None','NextDay','FirstOfMonth','VWA','Russel') NOT NULL DEFAULT 'None',\n    `productRate` FLOAT NOT NULL DEFAULT 0,\n    `contractSize` FLOAT NOT NULL DEFAULT 0,\n    `contractUnit` ENUM('None','AUD','BBL','BDFT','BRL','BU','CAD','CHF','CTRCT','CUR','CWT','CZK','EUR','GAL','GBP','HUF','ILS','IPNT','JPY','KRW','LBS','MMBTU','MWH','MXN','MYR','NOK','NZD','PLN','RMB','RUR','SEK','TON','TRY','TRYOZ','USD','ZAR') NOT NULL DEFAULT 'None',\n    `priceFormat` ENUM('None','N0','N1','N2','N3','N4','N5','N6','N7','F4','F8','Q8','F16','F32','H32','Q32','F64','H64','FullPenny','PartPenny','PartNickle','EQT','V1','V2','V3','V4','V5','V6','V7','V8','V9','V10','V11','V12','V13','V14','V15','A0','A1','A2','A3','A4','A5','A6','A7','E32') NOT NULL DEFAULT 'None',\n    `minTickSize` DOUBLE NOT NULL DEFAULT 0,\n    `displayFactor` DOUBLE NOT NULL DEFAULT 0,\n    `strikeScale` DOUBLE NOT NULL DEFAULT 0 COMMENT 'manual strike price adjustment multiplier (used for some CME products if set, otherwise displayFactor is used) (okey_xx = strikePrice * manualStrikeScale)',\n    `minLotSize` SMALLINT NOT NULL DEFAULT 0 COMMENT 'minimum lot size',\n    `bookDepth` SMALLINT NOT NULL DEFAULT 0 COMMENT 'levels in the Globex quote book',\n    `impliedBookDepth` SMALLINT NOT NULL DEFAULT 0 COMMENT 'levels in the globex implied quote book (0 if no implied depth)',\n    `impMarketInd` SMALLINT NOT NULL DEFAULT 0 COMMENT 'implied market type (0 = no implied, 1 = implied in, 2 = implied out, 3 = implied in & out)',\n    `minPriceIncrementAmount` FLOAT NOT NULL DEFAULT 0 COMMENT '(depricate) minimum price amount (points per handle)',\n    `parValue` FLOAT NOT NULL DEFAULT 0 COMMENT 'per contract par value',\n    `contMultiplier` FLOAT NOT NULL DEFAULT 0 COMMENT 'contract deliverable multipler',\n    `cabPrice` DOUBLE NOT NULL DEFAULT 0 COMMENT '(depricate) cabinet price (minimum closing price for OOM options)',\n    `tradeCurr` ENUM('None','AUD','BRL','CAD','CHF','CNH','CNY','EUR','GBP','JPY','KRW','MXN','MYR','NOK','NZD','SEK','TRY','USD','USDCents','CZK','ZAR','HUF','USX','GBX') NOT NULL DEFAULT 'None',\n    `settleCurr` ENUM('None','AUD','BRL','CAD','CHF','CNH','CNY','EUR','GBP','JPY','KRW','MXN','MYR','NOK','NZD','SEK','TRY','USD','USDCents','CZK','ZAR','HUF','USX','GBX') NOT NULL DEFAULT 'None',\n    `strikeCurr` ENUM('None','AUD','BRL','CAD','CHF','CNH','CNY','EUR','GBP','JPY','KRW','MXN','MYR','NOK','NZD','SEK','TRY','USD','USDCents','CZK','ZAR','HUF','USX','GBX') NOT NULL DEFAULT 'None',\n    `expiration` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000' COMMENT 'future expiration or option expiration (if product is an option). we use the last TRADING day as the expiration date.',\n    `maturity` DATE NOT NULL DEFAULT '1900-01-01' COMMENT 'future maturity date or option maturity date.  this is the delivery month.',\n    `exerciseType` ENUM('None','American','European','Asian','Cliquet') NOT NULL DEFAULT 'None' COMMENT '(depricate; in RootDefinition) Exercise style',\n    `userDefined` ENUM('None','Yes','No') NOT NULL DEFAULT 'None',\n    `decayStartYear` SMALLINT NOT NULL DEFAULT 0,\n    `decayStartMonth` TINYINT UNSIGNED NOT NULL DEFAULT 0,\n    `decayStartDay` TINYINT UNSIGNED NOT NULL DEFAULT 0,\n    `decayQty` INT NOT NULL DEFAULT 0 COMMENT 'daily decay quantity',\n    `priceRatio` DOUBLE NOT NULL DEFAULT 0 COMMENT 'price ratio for interest rate intercommodity spreads',\n    `timestamp` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000',\n    `LegsList` JSON NOT NULL DEFAULT JSON_OBJECT() CHECK(JSON_VALID(LegsList)),\n    PRIMARY KEY USING HASH (`secKey_tk`,`secKey_yr`,`secKey_mn`,`secKey_dy`,`secKey_xx`,`secKey_cp`,`secKey_at`,`secKey_ts`,`secType`)\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='SpiderRock normalized exchange product definitions.  Includes future, option, and spread definitions from a number of exchanges.  TickerDefinitions, RootDefinitions and CCodeDefinitions are consistent with these records.';\n\n"})})]})}function a(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(x,{...e})}):x(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>c});var i=n(96540);const r={},d=i.createContext(r);function s(e){const t=i.useContext(d);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(d.Provider,{value:t},e.children)}}}]);