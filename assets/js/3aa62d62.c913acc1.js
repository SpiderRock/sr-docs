"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([["59978"],{65913:function(e,n,t){t.r(n),t.d(n,{default:()=>x,frontMatter:()=>s,metadata:()=>d,assets:()=>l,toc:()=>o,contentTitle:()=>c});var d=JSON.parse('{"id":"MessageSchemas/Schema/SRSE Products/SRAnalytics/ProductDefinitionV2/ProductDefinitionV2","title":"ProductDefinitionV2","description":"V8 Message Definiton","source":"@site/docs/MessageSchemas/Schema/SRSE Products/SRAnalytics/ProductDefinitionV2/ProductDefinitionV2.md","sourceDirName":"MessageSchemas/Schema/SRSE Products/SRAnalytics/ProductDefinitionV2","slug":"/MessageSchemas/Schema/SRSE Products/SRAnalytics/ProductDefinitionV2/","permalink":"/docs/next/MessageSchemas/Schema/SRSE Products/SRAnalytics/ProductDefinitionV2/","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"messageSchemasSidebar","previous":{"title":"OptionRiskFactor","permalink":"/docs/next/MessageSchemas/Schema/SRSE Products/SRAnalytics/OptionRiskFactor/"},"next":{"title":"RootDefinition","permalink":"/docs/next/MessageSchemas/Schema/SRSE Products/SRAnalytics/RootDefinition/"}}'),r=t("52676"),i=t("91503");let s={},c=void 0,l={},o=[{value:"METADATA",id:"metadata",level:3},{value:"Table Definition",id:"table-definition",level:3},{value:"PRIMARY KEY DEFINITION (Unique)",id:"primary-key-definition-unique",level:3},{value:"JSON Block (LegsList)",id:"json-block-legslist",level:3},{value:"CREATE TABLE EXAMPLE QUERY",id:"create-table-example-query",level:3},{value:"SELECT TABLE EXAMPLE QUERY",id:"select-table-example-query",level:3},{value:"Doc Columns Query",id:"doc-columns-query",level:3}];function h(e){let n={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"../../../Topics/product-definition/ProductDefinitionV2",children:"V8 Message Definiton"})}),"\n",(0,r.jsx)(n.p,{children:"SpiderRock normalized exchange product definitions.  Includes future, option, and spread definitions from a number of exchanges.  TickerDefinitions, RootDefinitions and CCodeDefinitions are consistent with these records."}),"\n",(0,r.jsx)(n.h3,{id:"metadata",children:"METADATA"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Attribute"}),(0,r.jsx)(n.th,{children:"Value"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Topic"}),(0,r.jsx)(n.td,{children:"4335-product-definition"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"MLink Token"}),(0,r.jsx)(n.td,{children:"FutureDefinition"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Product"}),(0,r.jsx)(n.td,{children:"SRAnalytics"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"accessType"}),(0,r.jsx)(n.td,{children:"SELECT"})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"table-definition",children:"Table Definition"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Field"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Key"}),(0,r.jsx)(n.th,{children:"Default Value"}),(0,r.jsx)(n.th,{children:"Comment"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"secKey_at"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../../../Enums/AssetType",children:"enum - AssetType"})}),(0,r.jsx)(n.td,{children:"PRI"}),(0,r.jsx)(n.td,{children:"'None'"}),(0,r.jsx)(n.td,{children:"SR Security Key can be partially filled in look at secType"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"secKey_ts"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../../../Enums/TickerSrc",children:"enum - TickerSrc"})}),(0,r.jsx)(n.td,{children:"PRI"}),(0,r.jsx)(n.td,{children:"'None'"}),(0,r.jsx)(n.td,{children:"SR Security Key can be partially filled in look at secType"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"secKey_tk"}),(0,r.jsx)(n.td,{children:"VARCHAR(12)"}),(0,r.jsx)(n.td,{children:"PRI"}),(0,r.jsx)(n.td,{children:"''"}),(0,r.jsx)(n.td,{children:"SR Security Key can be partially filled in look at secType"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"secKey_yr"}),(0,r.jsx)(n.td,{children:"SMALLINT UNSIGNED"}),(0,r.jsx)(n.td,{children:"PRI"}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"SR Security Key can be partially filled in look at secType"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"secKey_mn"}),(0,r.jsx)(n.td,{children:"TINYINT UNSIGNED"}),(0,r.jsx)(n.td,{children:"PRI"}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"SR Security Key can be partially filled in look at secType"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"secKey_dy"}),(0,r.jsx)(n.td,{children:"TINYINT UNSIGNED"}),(0,r.jsx)(n.td,{children:"PRI"}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"SR Security Key can be partially filled in look at secType"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"secKey_xx"}),(0,r.jsx)(n.td,{children:"DOUBLE"}),(0,r.jsx)(n.td,{children:"PRI"}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"SR Security Key can be partially filled in look at secType"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"secKey_cp"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../../../Enums/CallPut",children:"enum - CallPut"})}),(0,r.jsx)(n.td,{children:"PRI"}),(0,r.jsx)(n.td,{children:"'Call'"}),(0,r.jsx)(n.td,{children:"SR Security Key can be partially filled in look at secType"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"secType"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../../../Enums/SpdrKeyType",children:"enum - SpdrKeyType"})}),(0,r.jsx)(n.td,{children:"PRI"}),(0,r.jsx)(n.td,{children:"'None'"}),(0,r.jsx)(n.td,{children:"Security Type Stock Future Option"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"securityID"}),(0,r.jsx)(n.td,{children:"TINYTEXT"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"''"}),(0,r.jsx)(n.td,{children:"unique exchange id exch assigned"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ticker_at"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../../../Enums/AssetType",children:"enum - AssetType"})}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"'None'"}),(0,r.jsx)(n.td,{children:"master underlier"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ticker_ts"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../../../Enums/TickerSrc",children:"enum - TickerSrc"})}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"'None'"}),(0,r.jsx)(n.td,{children:"master underlier"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ticker_tk"}),(0,r.jsx)(n.td,{children:"VARCHAR(12)"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"''"}),(0,r.jsx)(n.td,{children:"master underlier"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"SRspreadID"}),(0,r.jsx)(n.td,{children:"BIGINT"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"productClass"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../../../Enums/ProductClass",children:"enum - ProductClass"})}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"'None'"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"underlierID"}),(0,r.jsx)(n.td,{children:"BIGINT"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"underlier product id option only securityID of undKeyundType product"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"undKey_at"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../../../Enums/AssetType",children:"enum - AssetType"})}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"'None'"}),(0,r.jsx)(n.td,{children:"SR Underlier Security Key can be partially filled in look at undType option only"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"undKey_ts"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../../../Enums/TickerSrc",children:"enum - TickerSrc"})}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"'None'"}),(0,r.jsx)(n.td,{children:"SR Underlier Security Key can be partially filled in look at undType option only"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"undKey_tk"}),(0,r.jsx)(n.td,{children:"VARCHAR(12)"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"''"}),(0,r.jsx)(n.td,{children:"SR Underlier Security Key can be partially filled in look at undType option only"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"undKey_yr"}),(0,r.jsx)(n.td,{children:"SMALLINT UNSIGNED"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"SR Underlier Security Key can be partially filled in look at undType option only"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"undKey_mn"}),(0,r.jsx)(n.td,{children:"TINYINT UNSIGNED"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"SR Underlier Security Key can be partially filled in look at undType option only"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"undKey_dy"}),(0,r.jsx)(n.td,{children:"TINYINT UNSIGNED"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"SR Underlier Security Key can be partially filled in look at undType option only"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"undType"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../../../Enums/SpdrKeyType",children:"enum - SpdrKeyType"})}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"'None'"}),(0,r.jsx)(n.td,{children:"Underlier Security Type Stock Future option only"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"productGroup"}),(0,r.jsx)(n.td,{children:"VARCHAR(6)"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"''"}),(0,r.jsx)(n.td,{children:"Underlying product code  IE All GE Eurodollar spreads options futures will be in the same productGroup  This is the Asset field from the SecurityDefinition message"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"securityGroup"}),(0,r.jsx)(n.td,{children:"VARCHAR(6)"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"''"}),(0,r.jsx)(n.td,{children:"Exchange specific code for a group of related securities that are all affected by market events  IE All Emini weekly options EW  This is SecurityGroup field from the SecurityDefinition messages"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"marketSegmentID"}),(0,r.jsx)(n.td,{children:"INT"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"Exchange specific market segment identifier"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ricCode"}),(0,r.jsx)(n.td,{children:"VARCHAR(32)"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"''"}),(0,r.jsx)(n.td,{children:"Full RIC Code  only provided for nonuser defined instruments"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"securityDesc"}),(0,r.jsx)(n.td,{children:"TINYTEXT"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"''"}),(0,r.jsx)(n.td,{children:"full exchange symbol"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"exchange"}),(0,r.jsx)(n.td,{children:"VARCHAR(8)"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"''"}),(0,r.jsx)(n.td,{children:"listing exchange"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"productType"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../../../Enums/ProductType",children:"enum - ProductType"})}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"'None'"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"productTerm"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../../../Enums/ProductTerm",children:"enum - ProductTerm"})}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"'None'"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"productIndexType"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../../../Enums/ProductIndexType",children:"enum - ProductIndexType"})}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"'None'"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"productRate"}),(0,r.jsx)(n.td,{children:"FLOAT"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"contractSize"}),(0,r.jsx)(n.td,{children:"FLOAT"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"contractUnit"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../../../Enums/ContractUnit",children:"enum - ContractUnit"})}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"'None'"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"priceFormat"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../../../Enums/PriceFormat",children:"enum - PriceFormat"})}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"'None'"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"minTickSize"}),(0,r.jsx)(n.td,{children:"DOUBLE"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"displayFactor"}),(0,r.jsx)(n.td,{children:"DOUBLE"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"strikeScale"}),(0,r.jsx)(n.td,{children:"DOUBLE"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"manual strike price adjustment multiplier used for some CME products if set otherwise displayFactor is used okeyxx  strikePrice  manualStrikeScale"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"minLotSize"}),(0,r.jsx)(n.td,{children:"SMALLINT"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"minimum lot size"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"bookDepth"}),(0,r.jsx)(n.td,{children:"SMALLINT"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"levels in the Globex quote book"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"impliedBookDepth"}),(0,r.jsx)(n.td,{children:"SMALLINT"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"levels in the globex implied quote book 0 if no implied depth"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"impMarketInd"}),(0,r.jsx)(n.td,{children:"SMALLINT"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"implied market type 0  no implied 1  implied in 2  implied out 3  implied in  out"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"minPriceIncrementAmount"}),(0,r.jsx)(n.td,{children:"FLOAT"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"depricate minimum price amount points per handle"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"parValue"}),(0,r.jsx)(n.td,{children:"FLOAT"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"per contract par value"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"contMultiplier"}),(0,r.jsx)(n.td,{children:"FLOAT"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"contract deliverable multipler"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"cabPrice"}),(0,r.jsx)(n.td,{children:"DOUBLE"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"depricate cabinet price minimum closing price for OOM options"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"tradeCurr"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../../../Enums/Currency",children:"enum - Currency"})}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"'None'"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"settleCurr"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../../../Enums/Currency",children:"enum - Currency"})}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"'None'"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"strikeCurr"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../../../Enums/Currency",children:"enum - Currency"})}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"'None'"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"expiration"}),(0,r.jsx)(n.td,{children:"DATETIME(6)"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"'1900-01-01 00:00:00.000000'"}),(0,r.jsx)(n.td,{children:"future expiration or option expiration if product is an option we use the last TRADING day as the expiration date"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"maturity"}),(0,r.jsx)(n.td,{children:"DATE"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"'1900-01-01'"}),(0,r.jsx)(n.td,{children:"future maturity date or option maturity date  this is the delivery month"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"exerciseType"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../../../Enums/ExerciseType",children:"enum - ExerciseType"})}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"'None'"}),(0,r.jsx)(n.td,{children:"depricate in RootDefinition Exercise style"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"userDefined"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../../../Enums/YesNo",children:"enum - YesNo"})}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"'None'"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"decayStartYear"}),(0,r.jsx)(n.td,{children:"SMALLINT"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"decayStartMonth"}),(0,r.jsx)(n.td,{children:"TINYINT UNSIGNED"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"decayStartDay"}),(0,r.jsx)(n.td,{children:"TINYINT UNSIGNED"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"decayQty"}),(0,r.jsx)(n.td,{children:"INT"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"daily decay quantity"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"priceRatio"}),(0,r.jsx)(n.td,{children:"DOUBLE"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"price ratio for interest rate intercommodity spreads"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"timestamp"}),(0,r.jsx)(n.td,{children:"DATETIME(6)"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"'1900-01-01 00:00:00.000000'"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"LegsList"}),(0,r.jsx)(n.td,{children:"JSON"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"'JSON_ARRAY()'"}),(0,r.jsx)(n.td,{})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"primary-key-definition-unique",children:"PRIMARY KEY DEFINITION (Unique)"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Field"}),(0,r.jsx)(n.th,{children:"Sequence"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"secKey_tk"}),(0,r.jsx)(n.td,{children:"1"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"secKey_yr"}),(0,r.jsx)(n.td,{children:"2"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"secKey_mn"}),(0,r.jsx)(n.td,{children:"3"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"secKey_dy"}),(0,r.jsx)(n.td,{children:"4"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"secKey_xx"}),(0,r.jsx)(n.td,{children:"5"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"secKey_cp"}),(0,r.jsx)(n.td,{children:"6"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"secKey_at"}),(0,r.jsx)(n.td,{children:"7"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"secKey_ts"}),(0,r.jsx)(n.td,{children:"8"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"secType"}),(0,r.jsx)(n.td,{children:"9"})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"json-block-legslist",children:"JSON Block (LegsList)"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Field"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Comment"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"legID"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../../../Enums/legID",children:"enum - legID"})}),(0,r.jsx)(n.td,{children:"leg SecurityId exch assigned"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"secKey"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../../../Enums/secKey",children:"enum - secKey"})}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"secType"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../../../Enums/SpdrKeyType",children:"enum - SpdrKeyType"})}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"side"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../../../Enums/BuySell",children:"enum - BuySell"})}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ratio"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../../../Enums/ratio",children:"enum - ratio"})}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"refDelta"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../../../Enums/refDelta",children:"enum - refDelta"})}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"refPrc"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../../../Enums/refPrc",children:"enum - refPrc"})}),(0,r.jsx)(n.td,{})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"create-table-example-query",children:"CREATE TABLE EXAMPLE QUERY"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"CREATE TABLE `SRAnalytics`.`MsgProductDefinitionV2` (\n    `secKey_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None' COMMENT 'SR Security Key [can be partially filled in (look at secType)]',\n    `secKey_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','EUX','ANY','CXE','DXE','NXAM','NXBR','NXLS','NXML','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None' COMMENT 'SR Security Key [can be partially filled in (look at secType)]',\n    `secKey_tk` VARCHAR(12) NOT NULL DEFAULT '' COMMENT 'SR Security Key [can be partially filled in (look at secType)]',\n    `secKey_yr` SMALLINT UNSIGNED NOT NULL DEFAULT 0 COMMENT 'SR Security Key [can be partially filled in (look at secType)]',\n    `secKey_mn` TINYINT UNSIGNED NOT NULL DEFAULT 0 COMMENT 'SR Security Key [can be partially filled in (look at secType)]',\n    `secKey_dy` TINYINT UNSIGNED NOT NULL DEFAULT 0 COMMENT 'SR Security Key [can be partially filled in (look at secType)]',\n    `secKey_xx` DOUBLE NOT NULL DEFAULT 0 COMMENT 'SR Security Key [can be partially filled in (look at secType)]',\n    `secKey_cp` ENUM('Call','Put','Pair') NOT NULL DEFAULT 'Call' COMMENT 'SR Security Key [can be partially filled in (look at secType)]',\n    `secType` ENUM('None','Stock','Future','Option','MLeg') NOT NULL DEFAULT 'None' COMMENT 'Security Type [Stock, Future, Option]',\n    `securityID` TINYTEXT NOT NULL DEFAULT '' COMMENT 'unique exchange id (exch assigned)',\n    `ticker_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None' COMMENT 'master underlier',\n    `ticker_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','EUX','ANY','CXE','DXE','NXAM','NXBR','NXLS','NXML','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None' COMMENT 'master underlier',\n    `ticker_tk` VARCHAR(12) NOT NULL DEFAULT '' COMMENT 'master underlier',\n    `SRspreadID` BIGINT NOT NULL DEFAULT 0,\n    `productClass` ENUM('None','Equity','Index','Future','Option','Spread') NOT NULL DEFAULT 'None',\n    `underlierID` BIGINT NOT NULL DEFAULT 0 COMMENT 'underlier product id (option only) [securityID of undKey/undType product]',\n    `undKey_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None' COMMENT 'SR Underlier Security Key [can be partially filled in (look at undType)] (option only)',\n    `undKey_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','EUX','ANY','CXE','DXE','NXAM','NXBR','NXLS','NXML','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None' COMMENT 'SR Underlier Security Key [can be partially filled in (look at undType)] (option only)',\n    `undKey_tk` VARCHAR(12) NOT NULL DEFAULT '' COMMENT 'SR Underlier Security Key [can be partially filled in (look at undType)] (option only)',\n    `undKey_yr` SMALLINT UNSIGNED NOT NULL DEFAULT 0 COMMENT 'SR Underlier Security Key [can be partially filled in (look at undType)] (option only)',\n    `undKey_mn` TINYINT UNSIGNED NOT NULL DEFAULT 0 COMMENT 'SR Underlier Security Key [can be partially filled in (look at undType)] (option only)',\n    `undKey_dy` TINYINT UNSIGNED NOT NULL DEFAULT 0 COMMENT 'SR Underlier Security Key [can be partially filled in (look at undType)] (option only)',\n    `undType` ENUM('None','Stock','Future','Option','MLeg') NOT NULL DEFAULT 'None' COMMENT 'Underlier Security Type [Stock, Future] (option only)',\n    `productGroup` VARCHAR(6) NOT NULL DEFAULT '' COMMENT 'Underlying product code.  I.E. All GE (Eurodollar) spreads, options, futures will be in the same productGroup - This is the Asset field from the SecurityDefinition message',\n    `securityGroup` VARCHAR(6) NOT NULL DEFAULT '' COMMENT 'Exchange specific code for a group of related securities that are all affected by market events.  I.E. All E-mini weekly options (EW) - This is SecurityGroup field from the SecurityDefinition messages',\n    `marketSegmentID` INT NOT NULL DEFAULT 0 COMMENT 'Exchange specific market segment identifier',\n    `ricCode` VARCHAR(32) NOT NULL DEFAULT '' COMMENT 'Full RIC Code - only provided for non-user defined instruments',\n    `securityDesc` TINYTEXT NOT NULL DEFAULT '' COMMENT 'full exchange symbol',\n    `exchange` VARCHAR(8) NOT NULL DEFAULT '' COMMENT 'listing exchange',\n    `productType` ENUM('None','Outright','CalSpr','EqCalSpr','FXCalSpr','RedTick','BFly','Condor','Strip','InterCmd','Pack','MnPack','PackBFly','DblBFly','PackSpr','Crck','Bndl','BndlSpr','EnrStrp','BalStrp','UnbalStrp','EnICStrp','IRICStrp','ITRICSpr','UserDef','Combo','TAS','TASCalSpr','TAA','TIC','BIC','TAP','Index') NOT NULL DEFAULT 'None',\n    `productTerm` ENUM('None','Month','Day','Week','BalanceOfMonth','Quarter','Season','BalanceOfWeek','CalendarYear','Variable','Custom','SameDay','NextDay','Weekly','Pack','Bundle','IRSAndCDSTenor','Year') NOT NULL DEFAULT 'None',\n    `productIndexType` ENUM('None','NextDay','FirstOfMonth','VWA','Russel') NOT NULL DEFAULT 'None',\n    `productRate` FLOAT NOT NULL DEFAULT 0,\n    `contractSize` FLOAT NOT NULL DEFAULT 0,\n    `contractUnit` ENUM('None','AUD','BBL','BDFT','BRL','BU','CAD','CHF','CTRCT','CUR','CWT','CZK','EUR','GAL','GBP','HUF','ILS','IPNT','JPY','KRW','LBS','MMBTU','MWH','MXN','MYR','NOK','NZD','PLN','RMB','RUR','SEK','TON','TRY','TRYOZ','USD','ZAR') NOT NULL DEFAULT 'None',\n    `priceFormat` ENUM('None','N0','N1','N2','N3','N4','N5','N6','N7','F4','F8','Q8','F16','F32','H32','Q32','F64','H64','FullPenny','PartPenny','PartNickle','EQT','V1','V2','V3','V4','V5','V6','V7','V8','V9','V10','V11','V12','V13','V14','V15','A0','A1','A2','A3','A4','A5','A6','A7','E32','EU2A','EU2B','EU2C','EU2D','EU2E','EU3A','EU3B','EU3C','EU3D','EU3E','EU4A','EU5A') NOT NULL DEFAULT 'None',\n    `minTickSize` DOUBLE NOT NULL DEFAULT 0,\n    `displayFactor` DOUBLE NOT NULL DEFAULT 0,\n    `strikeScale` DOUBLE NOT NULL DEFAULT 0 COMMENT 'manual strike price adjustment multiplier (used for some CME products if set, otherwise displayFactor is used) (okey_xx = strikePrice * manualStrikeScale)',\n    `minLotSize` SMALLINT NOT NULL DEFAULT 0 COMMENT 'minimum lot size',\n    `bookDepth` SMALLINT NOT NULL DEFAULT 0 COMMENT 'levels in the Globex quote book',\n    `impliedBookDepth` SMALLINT NOT NULL DEFAULT 0 COMMENT 'levels in the globex implied quote book (0 if no implied depth)',\n    `impMarketInd` SMALLINT NOT NULL DEFAULT 0 COMMENT 'implied market type (0 = no implied, 1 = implied in, 2 = implied out, 3 = implied in & out)',\n    `minPriceIncrementAmount` FLOAT NOT NULL DEFAULT 0 COMMENT '(depricate) minimum price amount (points per handle)',\n    `parValue` FLOAT NOT NULL DEFAULT 0 COMMENT 'per contract par value',\n    `contMultiplier` FLOAT NOT NULL DEFAULT 0 COMMENT 'contract deliverable multipler',\n    `cabPrice` DOUBLE NOT NULL DEFAULT 0 COMMENT '(depricate) cabinet price (minimum closing price for OOM options)',\n    `tradeCurr` ENUM('None','AUD','BRL','CAD','CHF','CNH','CNY','EUR','GBP','JPY','KRW','MXN','MYR','NOK','NZD','SEK','TRY','USD','USDCents','CZK','ZAR','HUF','USX','GBX','DKK','GEL') NOT NULL DEFAULT 'None',\n    `settleCurr` ENUM('None','AUD','BRL','CAD','CHF','CNH','CNY','EUR','GBP','JPY','KRW','MXN','MYR','NOK','NZD','SEK','TRY','USD','USDCents','CZK','ZAR','HUF','USX','GBX','DKK','GEL') NOT NULL DEFAULT 'None',\n    `strikeCurr` ENUM('None','AUD','BRL','CAD','CHF','CNH','CNY','EUR','GBP','JPY','KRW','MXN','MYR','NOK','NZD','SEK','TRY','USD','USDCents','CZK','ZAR','HUF','USX','GBX','DKK','GEL') NOT NULL DEFAULT 'None',\n    `expiration` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000' COMMENT 'future expiration or option expiration (if product is an option). we use the last TRADING day as the expiration date.',\n    `maturity` DATE NOT NULL DEFAULT '1900-01-01' COMMENT 'future maturity date or option maturity date.  this is the delivery month.',\n    `exerciseType` ENUM('None','American','European','Asian','Cliquet') NOT NULL DEFAULT 'None' COMMENT '(depricate; in RootDefinition) Exercise style',\n    `userDefined` ENUM('None','Yes','No') NOT NULL DEFAULT 'None',\n    `decayStartYear` SMALLINT NOT NULL DEFAULT 0,\n    `decayStartMonth` TINYINT UNSIGNED NOT NULL DEFAULT 0,\n    `decayStartDay` TINYINT UNSIGNED NOT NULL DEFAULT 0,\n    `decayQty` INT NOT NULL DEFAULT 0 COMMENT 'daily decay quantity',\n    `priceRatio` DOUBLE NOT NULL DEFAULT 0 COMMENT 'price ratio for interest rate intercommodity spreads',\n    `timestamp` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000',\n    `LegsList` JSON NOT NULL DEFAULT JSON_ARRAY() CHECK(JSON_VALID(LegsList)),\n    PRIMARY KEY USING HASH (`secKey_tk`,`secKey_yr`,`secKey_mn`,`secKey_dy`,`secKey_xx`,`secKey_cp`,`secKey_at`,`secKey_ts`,`secType`)\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='SpiderRock normalized exchange product definitions.  Includes future, option, and spread definitions from a number of exchanges.  TickerDefinitions, RootDefinitions and CCodeDefinitions are consistent with these records.';\n\n"})}),"\n",(0,r.jsx)(n.h3,{id:"select-table-example-query",children:"SELECT TABLE EXAMPLE QUERY"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"SELECT\n    `secKey_at`,\n    `secKey_ts`,\n    `secKey_tk`,\n    `secKey_yr`,\n    `secKey_mn`,\n    `secKey_dy`,\n    `secKey_xx`,\n    `secKey_cp`,\n    `secType`,\n    `securityID`,\n    `ticker_at`,\n    `ticker_ts`,\n    `ticker_tk`,\n    `SRspreadID`,\n    `productClass`,\n    `underlierID`,\n    `undKey_at`,\n    `undKey_ts`,\n    `undKey_tk`,\n    `undKey_yr`,\n    `undKey_mn`,\n    `undKey_dy`,\n    `undType`,\n    `productGroup`,\n    `securityGroup`,\n    `marketSegmentID`,\n    `ricCode`,\n    `securityDesc`,\n    `exchange`,\n    `productType`,\n    `productTerm`,\n    `productIndexType`,\n    `productRate`,\n    `contractSize`,\n    `contractUnit`,\n    `priceFormat`,\n    `minTickSize`,\n    `displayFactor`,\n    `strikeScale`,\n    `minLotSize`,\n    `bookDepth`,\n    `impliedBookDepth`,\n    `impMarketInd`,\n    `minPriceIncrementAmount`,\n    `parValue`,\n    `contMultiplier`,\n    `cabPrice`,\n    `tradeCurr`,\n    `settleCurr`,\n    `strikeCurr`,\n    `expiration`,\n    `maturity`,\n    `exerciseType`,\n    `userDefined`,\n    `decayStartYear`,\n    `decayStartMonth`,\n    `decayStartDay`,\n    `decayQty`,\n    `priceRatio`,\n    `timestamp`,\n    `LegsList`\nFROM `SRAnalytics`.`MsgProductDefinitionV2`\nWHERE \n    /* Replace with a ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') */ \n    `secKey_at` = 'None'\n  AND\n    /* Replace with a ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','EUX','ANY','CXE','DXE','NXAM','NXBR','NXLS','NXML','NXOS','NXP','EUREX','CEDX','ICEFE') */ \n    `secKey_ts` = 'None'\n  AND\n    /* Replace with a VARCHAR(12) */ \n    `secKey_tk` = 'Example_secKey_tk'\n  AND\n    /* Replace with a SMALLINT UNSIGNED */ \n    `secKey_yr` = 123\n  AND\n    /* Replace with a TINYINT UNSIGNED */ \n    `secKey_mn` = 1\n  AND\n    /* Replace with a TINYINT UNSIGNED */ \n    `secKey_dy` = 1\n  AND\n    /* Replace with a DOUBLE */ \n    `secKey_xx` = 4.56\n  AND\n    /* Replace with a ENUM('Call','Put','Pair') */ \n    `secKey_cp` = 'Call'\n  AND\n    /* Replace with a ENUM('None','Stock','Future','Option','MLeg') */ \n    `secType` = 'None';\n"})}),"\n",(0,r.jsx)(n.h3,{id:"doc-columns-query",children:"Doc Columns Query"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"SELECT * FROM SRAnalytics.doccolumns WHERE TABLE_NAME='ProductDefinitionV2' ORDER BY ordinal_position ASC;\n"})})]})}function x(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},91503:function(e,n,t){t.d(n,{Z:function(){return c},a:function(){return s}});var d=t(75271);let r={},i=d.createContext(r);function s(e){let n=d.useContext(i);return d.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),d.createElement(i.Provider,{value:n},e.children)}}}]);