"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[64104],{34568:(e,r,i)=>{i.r(r),i.d(r,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>d,metadata:()=>o,toc:()=>l});var n=i(74848),t=i(28453);const d={},s=void 0,o={id:"MessageSchemas/Schema/SRSE Products/SRAnalytics/RootDefinition/RootDefinition",title:"RootDefinition",description:"V8 Message Definiton",source:"@site/versioned_docs/version-8.4.08.4/MessageSchemas/Schema/SRSE Products/SRAnalytics/RootDefinition/RootDefinition.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRAnalytics/RootDefinition",slug:"/MessageSchemas/Schema/SRSE Products/SRAnalytics/RootDefinition/",permalink:"/docs/8.4.08.4/MessageSchemas/Schema/SRSE Products/SRAnalytics/RootDefinition/",draft:!1,unlisted:!1,tags:[],version:"8.4.08.4",frontMatter:{},sidebar:"messageSchemasSidebar",previous:{title:"ProductDefinitionV2",permalink:"/docs/8.4.08.4/MessageSchemas/Schema/SRSE Products/SRAnalytics/ProductDefinitionV2/"},next:{title:"SkewBasisCurveV4",permalink:"/docs/8.4.08.4/MessageSchemas/Schema/SRSE Products/SRAnalytics/SkewBasisCurveV4/"}},c={},l=[{value:"METADATA",id:"metadata",level:3},{value:"Table Definition",id:"table-definition",level:3},{value:"PRIMARY KEY DEFINITION (Unique)",id:"primary-key-definition-unique",level:3},{value:"SECONDARY INDEX (CCodeIndex) (Not Unique)",id:"secondary-index-ccodeindex-not-unique",level:3},{value:"SECONDARY INDEX (OSIRootIndex) (Not Unique)",id:"secondary-index-osirootindex-not-unique",level:3},{value:"SECONDARY INDEX (TickerIndex) (Not Unique)",id:"secondary-index-tickerindex-not-unique",level:3},{value:"JSON Block (ExchangeList)",id:"json-block-exchangelist",level:3},{value:"JSON Block (UnderlyingList)",id:"json-block-underlyinglist",level:3},{value:"CREATE TABLE EXAMPLE QUERY",id:"create-table-example-query",level:3},{value:"SELECT TABLE EXAMPLE QUERY",id:"select-table-example-query",level:3},{value:"Doc Columns Query",id:"doc-columns-query",level:3}];function x(e){const r={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:(0,n.jsx)(r.a,{href:"../../../Topics/product-definition/RootDefinition",children:"V8 Message Definiton"})}),"\n",(0,n.jsx)(r.p,{children:"RootDefinition records are sourced from the listing exchange for future options and from OCC for US equity options.  Records are updated as SpiderRock receives changes."}),"\n",(0,n.jsx)(r.h3,{id:"metadata",children:"METADATA"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Attribute"}),(0,n.jsx)(r.th,{children:"Value"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Topic"}),(0,n.jsx)(r.td,{children:"4335-product-definition"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"MLink Token"}),(0,n.jsx)(r.td,{children:"OptionDefinition"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Product"}),(0,n.jsx)(r.td,{children:"SRAnalytics"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"accessType"}),(0,n.jsx)(r.td,{children:"SELECT"})]})]})]}),"\n",(0,n.jsx)(r.h3,{id:"table-definition",children:"Table Definition"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Field"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Key"}),(0,n.jsx)(r.th,{children:"Default Value"}),(0,n.jsx)(r.th,{children:"Comment"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"root_at"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"../../../Enums/AssetType",children:"enum - AssetType"})}),(0,n.jsx)(r.td,{children:"PRI"}),(0,n.jsx)(r.td,{children:"'None'"}),(0,n.jsx)(r.td,{})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"root_ts"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"../../../Enums/TickerSrc",children:"enum - TickerSrc"})}),(0,n.jsx)(r.td,{children:"PRI"}),(0,n.jsx)(r.td,{children:"'None'"}),(0,n.jsx)(r.td,{})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"root_tk"}),(0,n.jsx)(r.td,{children:"VARCHAR(12)"}),(0,n.jsx)(r.td,{children:"PRI"}),(0,n.jsx)(r.td,{children:"''"}),(0,n.jsx)(r.td,{})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"ticker_at"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"../../../Enums/AssetType",children:"enum - AssetType"})}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{children:"'None'"}),(0,n.jsx)(r.td,{children:"master underlying can be a stockproduct group eg ES"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"ticker_ts"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"../../../Enums/TickerSrc",children:"enum - TickerSrc"})}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{children:"'None'"}),(0,n.jsx)(r.td,{children:"master underlying can be a stockproduct group eg ES"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"ticker_tk"}),(0,n.jsx)(r.td,{children:"VARCHAR(12)"}),(0,n.jsx)(r.td,{children:"SEC"}),(0,n.jsx)(r.td,{children:"''"}),(0,n.jsx)(r.td,{children:"master underlying can be a stockproduct group eg ES"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"osiRoot"}),(0,n.jsx)(r.td,{children:"VARCHAR(8)"}),(0,n.jsx)(r.td,{children:"SEC"}),(0,n.jsx)(r.td,{children:"''"}),(0,n.jsx)(r.td,{children:"long version of the root  the short version is used in the TickerKey for example RYAAY1 not RYAA1"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"ccode_at"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"../../../Enums/AssetType",children:"enum - AssetType"})}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{children:"'None'"}),(0,n.jsx)(r.td,{})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"ccode_ts"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"../../../Enums/TickerSrc",children:"enum - TickerSrc"})}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{children:"'None'"}),(0,n.jsx)(r.td,{})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"ccode_tk"}),(0,n.jsx)(r.td,{children:"VARCHAR(12)"}),(0,n.jsx)(r.td,{children:"SEC"}),(0,n.jsx)(r.td,{children:"''"}),(0,n.jsx)(r.td,{})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"uPrcDriverKey_at"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"../../../Enums/AssetType",children:"enum - AssetType"})}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{children:"'None'"}),(0,n.jsx)(r.td,{children:"optional option underlier price driver all option expiries overrides optExpiryDefinition"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"uPrcDriverKey_ts"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"../../../Enums/TickerSrc",children:"enum - TickerSrc"})}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{children:"'None'"}),(0,n.jsx)(r.td,{children:"optional option underlier price driver all option expiries overrides optExpiryDefinition"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"uPrcDriverKey_tk"}),(0,n.jsx)(r.td,{children:"VARCHAR(12)"}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{children:"''"}),(0,n.jsx)(r.td,{children:"optional option underlier price driver all option expiries overrides optExpiryDefinition"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"uPrcDriverKey_yr"}),(0,n.jsx)(r.td,{children:"SMALLINT UNSIGNED"}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{children:"0"}),(0,n.jsx)(r.td,{children:"optional option underlier price driver all option expiries overrides optExpiryDefinition"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"uPrcDriverKey_mn"}),(0,n.jsx)(r.td,{children:"TINYINT UNSIGNED"}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{children:"0"}),(0,n.jsx)(r.td,{children:"optional option underlier price driver all option expiries overrides optExpiryDefinition"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"uPrcDriverKey_dy"}),(0,n.jsx)(r.td,{children:"TINYINT UNSIGNED"}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{children:"0"}),(0,n.jsx)(r.td,{children:"optional option underlier price driver all option expiries overrides optExpiryDefinition"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"uPrcDriverType"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"../../../Enums/SpdrKeyType",children:"enum - SpdrKeyType"})}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{children:"'None'"}),(0,n.jsx)(r.td,{children:"Stock or Future note if Future and uPrcDriverKey does not have an expiry month then FrontMonth will be used"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"uPrcDriverKey2_at"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"../../../Enums/AssetType",children:"enum - AssetType"})}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{children:"'None'"}),(0,n.jsx)(r.td,{children:"optional alternate option underlier price driver all option expiries overrides optExpiryDefinition"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"uPrcDriverKey2_ts"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"../../../Enums/TickerSrc",children:"enum - TickerSrc"})}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{children:"'None'"}),(0,n.jsx)(r.td,{children:"optional alternate option underlier price driver all option expiries overrides optExpiryDefinition"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"uPrcDriverKey2_tk"}),(0,n.jsx)(r.td,{children:"VARCHAR(12)"}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{children:"''"}),(0,n.jsx)(r.td,{children:"optional alternate option underlier price driver all option expiries overrides optExpiryDefinition"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"uPrcDriverKey2_yr"}),(0,n.jsx)(r.td,{children:"SMALLINT UNSIGNED"}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{children:"0"}),(0,n.jsx)(r.td,{children:"optional alternate option underlier price driver all option expiries overrides optExpiryDefinition"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"uPrcDriverKey2_mn"}),(0,n.jsx)(r.td,{children:"TINYINT UNSIGNED"}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{children:"0"}),(0,n.jsx)(r.td,{children:"optional alternate option underlier price driver all option expiries overrides optExpiryDefinition"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"uPrcDriverKey2_dy"}),(0,n.jsx)(r.td,{children:"TINYINT UNSIGNED"}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{children:"0"}),(0,n.jsx)(r.td,{children:"optional alternate option underlier price driver all option expiries overrides optExpiryDefinition"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"uPrcDriverType2"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"../../../Enums/SpdrKeyType",children:"enum - SpdrKeyType"})}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{children:"'None'"}),(0,n.jsx)(r.td,{children:"Stock or Future note if Future and uPrcDriverKey does not have an expiry month then FrontMonth will be used"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"uPrcBoundCCode"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"../../../Enums/YesNo",children:"enum - YesNo"})}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{children:"'None'"}),(0,n.jsx)(r.td,{children:"if Yes and if a future exists with ccodeCCode and futExpiry  optExpiry the use this future as a pricing bound"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"expirationMap"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"../../../Enums/ExpirationMap",children:"enum - ExpirationMap"})}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{children:"'None'"}),(0,n.jsx)(r.td,{children:"determines the underlying future if any"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"underlierMode"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"../../../Enums/UnderlierMode",children:"enum - UnderlierMode"})}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{children:"'None'"}),(0,n.jsx)(r.td,{})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"optionType"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"../../../Enums/OptionType",children:"enum - OptionType"})}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{children:"'None'"}),(0,n.jsx)(r.td,{children:"indicator for option type"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"multihedge"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"../../../Enums/Multihedge",children:"enum - Multihedge"})}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{children:"'None'"}),(0,n.jsx)(r.td,{children:"indicates type of multihedge None  standard root all other root types are not None"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"exerciseTime"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"../../../Enums/ExerciseTime",children:"enum - ExerciseTime"})}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{children:"'None'"}),(0,n.jsx)(r.td,{children:"Exercise time type"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"exerciseType"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"../../../Enums/ExerciseType",children:"enum - ExerciseType"})}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{children:"'None'"}),(0,n.jsx)(r.td,{children:"Exercise style"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"timeMetric"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"../../../Enums/TimeMetric",children:"enum - TimeMetric"})}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{children:"'None'"}),(0,n.jsx)(r.td,{children:"trading time metric  252 or 365 trading days or a weekly cycle type"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"pricingModel"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"../../../Enums/PricingModel",children:"enum - PricingModel"})}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{children:"'None'"}),(0,n.jsx)(r.td,{})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"moneynessType"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"../../../Enums/MoneynessType",children:"enum - MoneynessType"})}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{children:"'None'"}),(0,n.jsx)(r.td,{children:"moneyness xAxis convention PctStd  K  fUPrc  1  axisVol  RT LogStd  LOGKfUPrc  axisVol  RT NormStd  K  fUPrc  axisVol  RT"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"priceQuoteType"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"../../../Enums/PriceQuoteType",children:"enum - PriceQuoteType"})}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{children:"'None'"}),(0,n.jsx)(r.td,{children:"quoting style for the option series on the exchange price standard price quote or volatility quoted vol points"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"volumeTier"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"../../../Enums/VolumeTier",children:"enum - VolumeTier"})}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{children:"'None'"}),(0,n.jsx)(r.td,{})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"positionLimit"}),(0,n.jsx)(r.td,{children:"INT"}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{children:"0"}),(0,n.jsx)(r.td,{children:"max contract limit"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"exchanges"}),(0,n.jsx)(r.td,{children:"VARCHAR(24)"}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{children:"''"}),(0,n.jsx)(r.td,{children:"exchange codes"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"tickValue"}),(0,n.jsx)(r.td,{children:"FLOAT"}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{children:"0"}),(0,n.jsx)(r.td,{children:"NLV value of a single tick change in display premium\tpointValue  tickValue  tickSize"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"pointValue"}),(0,n.jsx)(r.td,{children:"FLOAT"}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{children:"0"}),(0,n.jsx)(r.td,{children:"NLV value of a single point change in display premium pointValue  tickValue  tickSize"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"pointCurrency"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"../../../Enums/Currency",children:"enum - Currency"})}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{children:"'None'"}),(0,n.jsx)(r.td,{})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"strikeScale"}),(0,n.jsx)(r.td,{children:"DOUBLE"}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{children:"0"}),(0,n.jsx)(r.td,{children:"manual strike price adjustment multiplier used for some CME products if set otherwise displayFactor is used okeyxx  strikePrice  manualStrikeScale"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"strikeRatio"}),(0,n.jsx)(r.td,{children:"FLOAT"}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{children:"0"}),(0,n.jsx)(r.td,{children:"note effective strike  strike  strikeRatio  cashOnExercise"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"cashOnExercise"}),(0,n.jsx)(r.td,{children:"FLOAT"}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{children:"0"}),(0,n.jsx)(r.td,{children:"note cashOnExercise is positive if it decreases the effective strike price"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"underliersPerCn"}),(0,n.jsx)(r.td,{children:"INT"}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{children:"0"}),(0,n.jsx)(r.td,{children:"note always 100 if underlying list is in use"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"premiumMult"}),(0,n.jsx)(r.td,{children:"DOUBLE"}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{children:"0"}),(0,n.jsx)(r.td,{children:"note OCC premiumstrike multiplier usually 100"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"symbolRatio"}),(0,n.jsx)(r.td,{children:"FLOAT"}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{children:"0"}),(0,n.jsx)(r.td,{children:"note currently used when AdjConvention is None value of 0 implies symbolRatio is 1"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"adjConvention"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"../../../Enums/AdjConvention",children:"enum - AdjConvention"})}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{children:"'None'"}),(0,n.jsx)(r.td,{})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"optPriceInc"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"../../../Enums/OptPriceInc",children:"enum - OptPriceInc"})}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{children:"'None'"}),(0,n.jsx)(r.td,{})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"priceFormat"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"../../../Enums/PriceFormat",children:"enum - PriceFormat"})}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{children:"'None'"}),(0,n.jsx)(r.td,{children:"price display format"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"tradeCurr"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"../../../Enums/Currency",children:"enum - Currency"})}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{children:"'None'"}),(0,n.jsx)(r.td,{})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"settleCurr"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"../../../Enums/Currency",children:"enum - Currency"})}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{children:"'None'"}),(0,n.jsx)(r.td,{})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"strikeCurr"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"../../../Enums/Currency",children:"enum - Currency"})}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{children:"'None'"}),(0,n.jsx)(r.td,{})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"defaultSurfaceRoot_at"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"../../../Enums/AssetType",children:"enum - AssetType"})}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{children:"'None'"}),(0,n.jsx)(r.td,{children:"fallback ticker to use for option surfaces if no native surfaces are available"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"defaultSurfaceRoot_ts"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"../../../Enums/TickerSrc",children:"enum - TickerSrc"})}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{children:"'None'"}),(0,n.jsx)(r.td,{children:"fallback ticker to use for option surfaces if no native surfaces are available"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"defaultSurfaceRoot_tk"}),(0,n.jsx)(r.td,{children:"VARCHAR(12)"}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{children:"''"}),(0,n.jsx)(r.td,{children:"fallback ticker to use for option surfaces if no native surfaces are available"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"ricRoot"}),(0,n.jsx)(r.td,{children:"VARCHAR(6)"}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{children:"''"}),(0,n.jsx)(r.td,{children:"RIC Root"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"timestamp"}),(0,n.jsx)(r.td,{children:"DATETIME(6)"}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{children:"'1900-01-01 00:00:00.000000'"}),(0,n.jsx)(r.td,{})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"ExchangeList"}),(0,n.jsx)(r.td,{children:"JSON"}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{children:"'JSON_OBJECT()'"}),(0,n.jsx)(r.td,{})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"UnderlyingList"}),(0,n.jsx)(r.td,{children:"JSON"}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{children:"'JSON_OBJECT()'"}),(0,n.jsx)(r.td,{})]})]})]}),"\n",(0,n.jsx)(r.h3,{id:"primary-key-definition-unique",children:"PRIMARY KEY DEFINITION (Unique)"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Field"}),(0,n.jsx)(r.th,{children:"Sequence"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"root_tk"}),(0,n.jsx)(r.td,{children:"1"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"root_at"}),(0,n.jsx)(r.td,{children:"2"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"root_ts"}),(0,n.jsx)(r.td,{children:"3"})]})]})]}),"\n",(0,n.jsx)(r.h3,{id:"secondary-index-ccodeindex-not-unique",children:"SECONDARY INDEX (CCodeIndex) (Not Unique)"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Field"}),(0,n.jsx)(r.th,{children:"Sequence"})]})}),(0,n.jsx)(r.tbody,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"ccode_tk"}),(0,n.jsx)(r.td,{children:"1"})]})})]}),"\n",(0,n.jsx)(r.h3,{id:"secondary-index-osirootindex-not-unique",children:"SECONDARY INDEX (OSIRootIndex) (Not Unique)"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Field"}),(0,n.jsx)(r.th,{children:"Sequence"})]})}),(0,n.jsx)(r.tbody,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"osiRoot"}),(0,n.jsx)(r.td,{children:"1"})]})})]}),"\n",(0,n.jsx)(r.h3,{id:"secondary-index-tickerindex-not-unique",children:"SECONDARY INDEX (TickerIndex) (Not Unique)"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Field"}),(0,n.jsx)(r.th,{children:"Sequence"})]})}),(0,n.jsx)(r.tbody,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"ticker_tk"}),(0,n.jsx)(r.td,{children:"1"})]})})]}),"\n",(0,n.jsx)(r.h3,{id:"json-block-exchangelist",children:"JSON Block (ExchangeList)"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Field"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Comment"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"optExch"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"../../../Enums/optExch",children:"enum - optExch"})}),(0,n.jsx)(r.td,{})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"nativeRoot"}),(0,n.jsx)(r.td,{children:"string"}),(0,n.jsx)(r.td,{})]})]})]}),"\n",(0,n.jsx)(r.h3,{id:"json-block-underlyinglist",children:"JSON Block (UnderlyingList)"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Field"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Comment"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"ticker"}),(0,n.jsx)(r.td,{children:"TickerKey"}),(0,n.jsx)(r.td,{})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"spc"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"note root basket  sumspc  ticker  100"})]})]})]}),"\n",(0,n.jsx)(r.h3,{id:"create-table-example-query",children:"CREATE TABLE EXAMPLE QUERY"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-sql",children:"CREATE TABLE `SRAnalytics`.`MsgRootDefinition` (\n    `root_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None',\n    `root_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','ESX','ANY','CXE','DXE','NXAM','NXBR','NXDUB','NXLS','NXLDN','NXML','NXMLT','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None',\n    `root_tk` VARCHAR(12) NOT NULL DEFAULT '',\n    `ticker_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None' COMMENT 'master underlying (can be a stock/product group; eg. @ES)',\n    `ticker_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','ESX','ANY','CXE','DXE','NXAM','NXBR','NXDUB','NXLS','NXLDN','NXML','NXMLT','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None' COMMENT 'master underlying (can be a stock/product group; eg. @ES)',\n    `ticker_tk` VARCHAR(12) NOT NULL DEFAULT '' COMMENT 'master underlying (can be a stock/product group; eg. @ES)',\n    `osiRoot` VARCHAR(8) NOT NULL DEFAULT '' COMMENT 'long version of the root.  the short version is used in the TickerKey (for example RYAAY1, not RYAA1)',\n    `ccode_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None',\n    `ccode_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','ESX','ANY','CXE','DXE','NXAM','NXBR','NXDUB','NXLS','NXLDN','NXML','NXMLT','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None',\n    `ccode_tk` VARCHAR(12) NOT NULL DEFAULT '',\n    `uPrcDriverKey_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None' COMMENT '(optional) option underlier price driver (all option expiries) (overrides optExpiryDefinition)',\n    `uPrcDriverKey_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','ESX','ANY','CXE','DXE','NXAM','NXBR','NXDUB','NXLS','NXLDN','NXML','NXMLT','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None' COMMENT '(optional) option underlier price driver (all option expiries) (overrides optExpiryDefinition)',\n    `uPrcDriverKey_tk` VARCHAR(12) NOT NULL DEFAULT '' COMMENT '(optional) option underlier price driver (all option expiries) (overrides optExpiryDefinition)',\n    `uPrcDriverKey_yr` SMALLINT UNSIGNED NOT NULL DEFAULT 0 COMMENT '(optional) option underlier price driver (all option expiries) (overrides optExpiryDefinition)',\n    `uPrcDriverKey_mn` TINYINT UNSIGNED NOT NULL DEFAULT 0 COMMENT '(optional) option underlier price driver (all option expiries) (overrides optExpiryDefinition)',\n    `uPrcDriverKey_dy` TINYINT UNSIGNED NOT NULL DEFAULT 0 COMMENT '(optional) option underlier price driver (all option expiries) (overrides optExpiryDefinition)',\n    `uPrcDriverType` ENUM('None','Stock','Future','Option','MLeg') NOT NULL DEFAULT 'None' COMMENT 'Stock or Future (note: if Future and uPrcDriverKey does not have an expiry month then FrontMonth will be used)',\n    `uPrcDriverKey2_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None' COMMENT '(optional) alternate option underlier price driver (all option expiries) (overrides optExpiryDefinition)',\n    `uPrcDriverKey2_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','ESX','ANY','CXE','DXE','NXAM','NXBR','NXDUB','NXLS','NXLDN','NXML','NXMLT','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None' COMMENT '(optional) alternate option underlier price driver (all option expiries) (overrides optExpiryDefinition)',\n    `uPrcDriverKey2_tk` VARCHAR(12) NOT NULL DEFAULT '' COMMENT '(optional) alternate option underlier price driver (all option expiries) (overrides optExpiryDefinition)',\n    `uPrcDriverKey2_yr` SMALLINT UNSIGNED NOT NULL DEFAULT 0 COMMENT '(optional) alternate option underlier price driver (all option expiries) (overrides optExpiryDefinition)',\n    `uPrcDriverKey2_mn` TINYINT UNSIGNED NOT NULL DEFAULT 0 COMMENT '(optional) alternate option underlier price driver (all option expiries) (overrides optExpiryDefinition)',\n    `uPrcDriverKey2_dy` TINYINT UNSIGNED NOT NULL DEFAULT 0 COMMENT '(optional) alternate option underlier price driver (all option expiries) (overrides optExpiryDefinition)',\n    `uPrcDriverType2` ENUM('None','Stock','Future','Option','MLeg') NOT NULL DEFAULT 'None' COMMENT 'Stock or Future (note: if Future and uPrcDriverKey does not have an expiry month then FrontMonth will be used)',\n    `uPrcBoundCCode` ENUM('None','Yes','No') NOT NULL DEFAULT 'None' COMMENT 'if Yes and if a future exists with ccode=CCode and futExpiry = optExpiry the use this future as a pricing bound',\n    `expirationMap` ENUM('None','ExactMatch','UnderlierMap') NOT NULL DEFAULT 'None' COMMENT 'determines the underlying future (if any)',\n    `underlierMode` ENUM('None','Actual','FrontMonth','UPrcAdj') NOT NULL DEFAULT 'None',\n    `optionType` ENUM('None','Equity','Index','Future','Binary','Warrant','Flex','MapError') NOT NULL DEFAULT 'None' COMMENT 'indicator for option type',\n    `multihedge` ENUM('None','Simple','Complex','AllCash','Binary','Fragment') NOT NULL DEFAULT 'None' COMMENT 'indicates type of multihedge (None = standard root; all other root types are not None)',\n    `exerciseTime` ENUM('None','PM','AM') NOT NULL DEFAULT 'None' COMMENT 'Exercise time type',\n    `exerciseType` ENUM('None','American','European','Asian','Cliquet') NOT NULL DEFAULT 'None' COMMENT 'Exercise style',\n    `timeMetric` ENUM('None','D252','D365','SPX','WK1','WK2','WK3','WK4') NOT NULL DEFAULT 'None' COMMENT 'trading time metric - 252 or 365 trading days or a weekly cycle type',\n    `pricingModel` ENUM('None','Equity','FutureApprox','FutureExact','NormalApprox','NormalExact') NOT NULL DEFAULT 'None',\n    `moneynessType` ENUM('None','PctStd','LogStd','NormStd') NOT NULL DEFAULT 'None' COMMENT 'moneyness (xAxis) convention: PctStd = (K / fUPrc - 1) / (axisVol * RT), LogStd = LOG(K/fUPrc) / (axisVol * RT), NormStd = (K - fUPrc) / (axisVol * RT)',\n    `priceQuoteType` ENUM('None','Price','Vol') NOT NULL DEFAULT 'None' COMMENT 'quoting style for the option series on the exchange, price (standard price quote) or volatility quoted (vol points)',\n    `volumeTier` ENUM('None','Top50') NOT NULL DEFAULT 'None',\n    `positionLimit` INT NOT NULL DEFAULT 0 COMMENT 'max contract limit',\n    `exchanges` VARCHAR(24) NOT NULL DEFAULT '' COMMENT 'exchange codes',\n    `tickValue` FLOAT NOT NULL DEFAULT 0 COMMENT '$NLV value of a single tick change in display premium\t(pointValue = tickValue / tickSize)',\n    `pointValue` FLOAT NOT NULL DEFAULT 0 COMMENT '$NLV value of a single point change in display premium (pointValue = tickValue / tickSize)',\n    `pointCurrency` ENUM('None','AUD','BRL','CAD','CHF','CNH','CNY','EUR','GBP','JPY','KRW','MXN','MYR','NOK','NZD','SEK','TRY','USD','USDCents','CZK','ZAR','HUF','USX','GBX') NOT NULL DEFAULT 'None',\n    `strikeScale` DOUBLE NOT NULL DEFAULT 0 COMMENT 'manual strike price adjustment multiplier (used for some CME products if set, otherwise displayFactor is used) (okey_xx = strikePrice * manualStrikeScale)',\n    `strikeRatio` FLOAT NOT NULL DEFAULT 0 COMMENT 'note: effective strike = strike * strikeRatio - cashOnExercise',\n    `cashOnExercise` FLOAT NOT NULL DEFAULT 0 COMMENT 'note: cashOnExercise is positive if it decreases the effective strike price',\n    `underliersPerCn` INT NOT NULL DEFAULT 0 COMMENT 'note: always 100 if underlying list is in use',\n    `premiumMult` DOUBLE NOT NULL DEFAULT 0 COMMENT 'note: OCC premium/strike multiplier (usually 100)',\n    `symbolRatio` FLOAT NOT NULL DEFAULT 0 COMMENT 'note: currently used when AdjConvention is None, value of 0 implies symbolRatio is 1',\n    `adjConvention` ENUM('None','Original','OSI','SpcOnly','OSIAlt') NOT NULL DEFAULT 'None',\n    `optPriceInc` ENUM('None','PartPenny','PartNickle','FullPenny') NOT NULL DEFAULT 'None',\n    `priceFormat` ENUM('None','N0','N1','N2','N3','N4','N5','N6','N7','F4','F8','Q8','F16','F32','H32','Q32','F64','H64','FullPenny','PartPenny','PartNickle','EQT','V1','V2','V3','V4','V5','V6','V7','V8','V9','V10','V11','V12','V13','V14','V15','A0','A1','A2','A3','A4','A5','A6','A7','E32') NOT NULL DEFAULT 'None' COMMENT 'price display format',\n    `tradeCurr` ENUM('None','AUD','BRL','CAD','CHF','CNH','CNY','EUR','GBP','JPY','KRW','MXN','MYR','NOK','NZD','SEK','TRY','USD','USDCents','CZK','ZAR','HUF','USX','GBX') NOT NULL DEFAULT 'None',\n    `settleCurr` ENUM('None','AUD','BRL','CAD','CHF','CNH','CNY','EUR','GBP','JPY','KRW','MXN','MYR','NOK','NZD','SEK','TRY','USD','USDCents','CZK','ZAR','HUF','USX','GBX') NOT NULL DEFAULT 'None',\n    `strikeCurr` ENUM('None','AUD','BRL','CAD','CHF','CNH','CNY','EUR','GBP','JPY','KRW','MXN','MYR','NOK','NZD','SEK','TRY','USD','USDCents','CZK','ZAR','HUF','USX','GBX') NOT NULL DEFAULT 'None',\n    `defaultSurfaceRoot_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None' COMMENT 'fallback ticker to use for option surfaces if no native surfaces are available',\n    `defaultSurfaceRoot_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','ESX','ANY','CXE','DXE','NXAM','NXBR','NXDUB','NXLS','NXLDN','NXML','NXMLT','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None' COMMENT 'fallback ticker to use for option surfaces if no native surfaces are available',\n    `defaultSurfaceRoot_tk` VARCHAR(12) NOT NULL DEFAULT '' COMMENT 'fallback ticker to use for option surfaces if no native surfaces are available',\n    `ricRoot` VARCHAR(6) NOT NULL DEFAULT '' COMMENT 'RIC Root',\n    `timestamp` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000',\n    `ExchangeList` JSON NOT NULL DEFAULT JSON_OBJECT() CHECK(JSON_VALID(ExchangeList)),\n    `UnderlyingList` JSON NOT NULL DEFAULT JSON_OBJECT() CHECK(JSON_VALID(UnderlyingList)),\n    PRIMARY KEY USING HASH (`root_tk`,`root_at`,`root_ts`),\n    KEY `CCodeIndex` (`ccode_tk`) USING HASH,\n    KEY `OSIRootIndex` (`osiRoot`) USING HASH,\n    KEY `TickerIndex` (`ticker_tk`) USING HASH\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='RootDefinition records are sourced from the listing exchange for future options and from OCC for US equity options.  Records are updated as SpiderRock receives changes.';\n\n"})}),"\n",(0,n.jsx)(r.h3,{id:"select-table-example-query",children:"SELECT TABLE EXAMPLE QUERY"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-sql",children:"SELECT\n    `root_at`,\n    `root_ts`,\n    `root_tk`,\n    `ticker_at`,\n    `ticker_ts`,\n    `ticker_tk`,\n    `osiRoot`,\n    `ccode_at`,\n    `ccode_ts`,\n    `ccode_tk`,\n    `uPrcDriverKey_at`,\n    `uPrcDriverKey_ts`,\n    `uPrcDriverKey_tk`,\n    `uPrcDriverKey_yr`,\n    `uPrcDriverKey_mn`,\n    `uPrcDriverKey_dy`,\n    `uPrcDriverType`,\n    `uPrcDriverKey2_at`,\n    `uPrcDriverKey2_ts`,\n    `uPrcDriverKey2_tk`,\n    `uPrcDriverKey2_yr`,\n    `uPrcDriverKey2_mn`,\n    `uPrcDriverKey2_dy`,\n    `uPrcDriverType2`,\n    `uPrcBoundCCode`,\n    `expirationMap`,\n    `underlierMode`,\n    `optionType`,\n    `multihedge`,\n    `exerciseTime`,\n    `exerciseType`,\n    `timeMetric`,\n    `pricingModel`,\n    `moneynessType`,\n    `priceQuoteType`,\n    `volumeTier`,\n    `positionLimit`,\n    `exchanges`,\n    `tickValue`,\n    `pointValue`,\n    `pointCurrency`,\n    `strikeScale`,\n    `strikeRatio`,\n    `cashOnExercise`,\n    `underliersPerCn`,\n    `premiumMult`,\n    `symbolRatio`,\n    `adjConvention`,\n    `optPriceInc`,\n    `priceFormat`,\n    `tradeCurr`,\n    `settleCurr`,\n    `strikeCurr`,\n    `defaultSurfaceRoot_at`,\n    `defaultSurfaceRoot_ts`,\n    `defaultSurfaceRoot_tk`,\n    `ricRoot`,\n    `timestamp`,\n    `ExchangeList`,\n    `UnderlyingList`\nFROM `SRAnalytics`.`MsgRootDefinition`\nWHERE \n    /* Replace with a ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') */ \n    `root_at` = 'None'\n  AND\n    /* Replace with a ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','ESX','ANY','CXE','DXE','NXAM','NXBR','NXDUB','NXLS','NXLDN','NXML','NXMLT','NXOS','NXP','EUREX','CEDX','ICEFE') */ \n    `root_ts` = 'None'\n  AND\n    /* Replace with a VARCHAR(12) */ \n    `root_tk` = 'Example_root_tk';\n"})}),"\n",(0,n.jsx)(r.h3,{id:"doc-columns-query",children:"Doc Columns Query"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-sql",children:"SELECT * FROM SRAnalytics.doccolumns WHERE TABLE_NAME='RootDefinition' ORDER BY ordinal_position ASC;\n"})})]})}function h(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(x,{...e})}):x(e)}},28453:(e,r,i)=>{i.d(r,{R:()=>s,x:()=>o});var n=i(96540);const t={},d=n.createContext(t);function s(e){const r=n.useContext(d);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),n.createElement(d.Provider,{value:r},e.children)}}}]);