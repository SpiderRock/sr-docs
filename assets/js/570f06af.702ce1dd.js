"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[26426],{85743:(e,s,d)=>{d.r(s),d.d(s,{assets:()=>l,contentTitle:()=>i,default:()=>j,frontMatter:()=>t,metadata:()=>c,toc:()=>x});var r=d(74848),n=d(28453);const t={},i=void 0,c={id:"MessageSchemas/Schema/SRSE Products/SRSpread/SpreadBookMarkup/SpreadBookMarkup",title:"SpreadBookMarkup",description:"V8 Message Definiton",source:"@site/versioned_docs/version-8.4.08.4/MessageSchemas/Schema/SRSE Products/SRSpread/SpreadBookMarkup/SpreadBookMarkup.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRSpread/SpreadBookMarkup",slug:"/MessageSchemas/Schema/SRSE Products/SRSpread/SpreadBookMarkup/",permalink:"/docs/8.4.08.4/MessageSchemas/Schema/SRSE Products/SRSpread/SpreadBookMarkup/",draft:!1,unlisted:!1,tags:[],version:"8.4.08.4",frontMatter:{},sidebar:"messageSchemasSidebar",previous:{title:"SRSpread",permalink:"/docs/8.4.08.4/MessageSchemas/Schema/SRSE Products/SRSpread/"},next:{title:"SpreadBookQuote",permalink:"/docs/8.4.08.4/MessageSchemas/Schema/SRSE Products/SRSpread/SpreadBookQuote/"}},l={},x=[{value:"METADATA",id:"metadata",level:3},{value:"Table Definition",id:"table-definition",level:3},{value:"PRIMARY KEY DEFINITION (Unique)",id:"primary-key-definition-unique",level:3},{value:"JSON Block (MarkupLegsList)",id:"json-block-markuplegslist",level:3},{value:"CREATE TABLE EXAMPLE QUERY",id:"create-table-example-query",level:3},{value:"SELECT TABLE EXAMPLE QUERY",id:"select-table-example-query",level:3},{value:"Doc Columns Query",id:"doc-columns-query",level:3}];function h(e){const s={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.p,{children:(0,r.jsx)(s.a,{href:"../../../Topics/market-data-spreads/SpreadBookMarkup",children:"V8 Message Definiton"})}),"\n",(0,r.jsx)(s.p,{children:"Live spread quotes with SpiderRock markup details for equity and future option spreads."}),"\n",(0,r.jsx)(s.h3,{id:"metadata",children:"METADATA"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Attribute"}),(0,r.jsx)(s.th,{children:"Value"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Topic"}),(0,r.jsx)(s.td,{children:"2895-market-data-spreads"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"MLink Token"}),(0,r.jsx)(s.td,{children:"SpreadMktData"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Product"}),(0,r.jsx)(s.td,{children:"SRSpread"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"accessType"}),(0,r.jsx)(s.td,{children:"SELECT"})]})]})]}),"\n",(0,r.jsx)(s.h3,{id:"table-definition",children:"Table Definition"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Field"}),(0,r.jsx)(s.th,{children:"Type"}),(0,r.jsx)(s.th,{children:"Key"}),(0,r.jsx)(s.th,{children:"Default Value"}),(0,r.jsx)(s.th,{children:"Comment"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"skey_at"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"../../../Enums/AssetType",children:"enum - AssetType"})}),(0,r.jsx)(s.td,{children:"PRI"}),(0,r.jsx)(s.td,{children:"'None'"}),(0,r.jsx)(s.td,{children:"SR Spread Key should have corresponding ProductDefinition record"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"skey_ts"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"../../../Enums/TickerSrc",children:"enum - TickerSrc"})}),(0,r.jsx)(s.td,{children:"PRI"}),(0,r.jsx)(s.td,{children:"'None'"}),(0,r.jsx)(s.td,{children:"SR Spread Key should have corresponding ProductDefinition record"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"skey_tk"}),(0,r.jsx)(s.td,{children:"VARCHAR(12)"}),(0,r.jsx)(s.td,{children:"PRI"}),(0,r.jsx)(s.td,{children:"''"}),(0,r.jsx)(s.td,{children:"SR Spread Key should have corresponding ProductDefinition record"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"isTest"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"../../../Enums/YesNo",children:"enum - YesNo"})}),(0,r.jsx)(s.td,{children:"PRI"}),(0,r.jsx)(s.td,{children:"'None'"}),(0,r.jsx)(s.td,{children:"Yes indicates that response is made of entirely of isTestYes SpreadExchOrders"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"ticker_at"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"../../../Enums/AssetType",children:"enum - AssetType"})}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"'None'"}),(0,r.jsx)(s.td,{children:"common spread underlier"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"ticker_ts"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"../../../Enums/TickerSrc",children:"enum - TickerSrc"})}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"'None'"}),(0,r.jsx)(s.td,{children:"common spread underlier"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"ticker_tk"}),(0,r.jsx)(s.td,{children:"VARCHAR(12)"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"''"}),(0,r.jsx)(s.td,{children:"common spread underlier"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"SRspreadID"}),(0,r.jsx)(s.td,{children:"BIGINT"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"0"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"priceFormat"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"../../../Enums/PriceFormat",children:"enum - PriceFormat"})}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"'None'"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"bidPrice1"}),(0,r.jsx)(s.td,{children:"DOUBLE"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"0"}),(0,r.jsx)(s.td,{children:"bid price"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"isBidPrice1Valid"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"../../../Enums/YesNo",children:"enum - YesNo"})}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"'None'"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"askPrice1"}),(0,r.jsx)(s.td,{children:"DOUBLE"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"0"}),(0,r.jsx)(s.td,{children:"ask price"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"isAskPrice1Valid"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"../../../Enums/YesNo",children:"enum - YesNo"})}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"'None'"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"bidSize1"}),(0,r.jsx)(s.td,{children:"INT"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"0"}),(0,r.jsx)(s.td,{children:"cumulative size at bidPrice"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"askSize1"}),(0,r.jsx)(s.td,{children:"INT"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"0"}),(0,r.jsx)(s.td,{children:"cumulative size at askPrice"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"bidMask1"}),(0,r.jsx)(s.td,{children:"INT UNSIGNED"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"0"}),(0,r.jsx)(s.td,{children:"exchange bid bit mask OptExch mask for NMS spreads zero for single exchange spreads"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"askMask1"}),(0,r.jsx)(s.td,{children:"INT UNSIGNED"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"0"}),(0,r.jsx)(s.td,{children:"exchange ask bit mask OptExch mask for NMS spreads zero for single exchange spreads"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"bidExch1"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"../../../Enums/OptExch",children:"enum - OptExch"})}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"'None'"}),(0,r.jsx)(s.td,{children:"exchange at bid price with the largest size if any"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"askExch1"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"../../../Enums/OptExch",children:"enum - OptExch"})}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"'None'"}),(0,r.jsx)(s.td,{children:"exchange at ask price with the largest size if any"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"bidTime"}),(0,r.jsx)(s.td,{children:"DATETIME(6)"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"'1900-01-01 00:00:00.000000'"}),(0,r.jsx)(s.td,{children:"last bid price or size change"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"askTime"}),(0,r.jsx)(s.td,{children:"DATETIME(6)"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"'1900-01-01 00:00:00.000000'"}),(0,r.jsx)(s.td,{children:"last ask price or size change"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"updateType"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"../../../Enums/UpdateType",children:"enum - UpdateType"})}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"'None'"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"numStkLegs"}),(0,r.jsx)(s.td,{children:"TINYINT UNSIGNED"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"0"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"numFutLegs"}),(0,r.jsx)(s.td,{children:"TINYINT UNSIGNED"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"0"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"numOptLegs"}),(0,r.jsx)(s.td,{children:"TINYINT UNSIGNED"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"0"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"userDefined"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"../../../Enums/YesNo",children:"enum - YesNo"})}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"'None'"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"spreadClass"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"../../../Enums/ToolSpreadClass",children:"enum - ToolSpreadClass"})}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"'None'"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"containsHedge"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"../../../Enums/YesNo",children:"enum - YesNo"})}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"'None'"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"legBidPrc"}),(0,r.jsx)(s.td,{children:"DOUBLE"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"0"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"legAskPrc"}),(0,r.jsx)(s.td,{children:"DOUBLE"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"0"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"legBidSz"}),(0,r.jsx)(s.td,{children:"INT"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"0"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"legAskSz"}),(0,r.jsx)(s.td,{children:"INT"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"0"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"surfPrc"}),(0,r.jsx)(s.td,{children:"DOUBLE"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"0"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"surfDelta"}),(0,r.jsx)(s.td,{children:"FLOAT"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"0"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"surfGamma"}),(0,r.jsx)(s.td,{children:"FLOAT"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"0"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"surfVega"}),(0,r.jsx)(s.td,{children:"FLOAT"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"0"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"surfWtVega"}),(0,r.jsx)(s.td,{children:"FLOAT"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"0"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"surfError"}),(0,r.jsx)(s.td,{children:"TINYINT UNSIGNED"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"0"}),(0,r.jsx)(s.td,{children:"error code from surface price calc if any"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"minExpiry"}),(0,r.jsx)(s.td,{children:"DATETIME(6)"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"'1900-01-01 00:00:00.000000'"}),(0,r.jsx)(s.td,{children:"expiry of earliest option legs"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"maxExpiry"}),(0,r.jsx)(s.td,{children:"DATETIME(6)"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"'1900-01-01 00:00:00.000000'"}),(0,r.jsx)(s.td,{children:"expiry of latest option legs"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"minYears"}),(0,r.jsx)(s.td,{children:"FLOAT"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"0"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"maxYears"}),(0,r.jsx)(s.td,{children:"FLOAT"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"0"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"refUPrc"}),(0,r.jsx)(s.td,{children:"FLOAT"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"0"}),(0,r.jsx)(s.td,{children:"reference underlier price"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"printPrice"}),(0,r.jsx)(s.td,{children:"FLOAT"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"0"}),(0,r.jsx)(s.td,{children:"last spread print price if any"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"printTime"}),(0,r.jsx)(s.td,{children:"DATETIME(6)"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"'1900-01-01 00:00:00.000000'"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"printSize"}),(0,r.jsx)(s.td,{children:"INT"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"0"}),(0,r.jsx)(s.td,{children:"last spread print size if any"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"printVolume"}),(0,r.jsx)(s.td,{children:"INT"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"0"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"grpNum"}),(0,r.jsx)(s.td,{children:"INT"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"0"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"securityDesc"}),(0,r.jsx)(s.td,{children:"VARCHAR(24)"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"''"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"filterId"}),(0,r.jsx)(s.td,{children:"BIGINT"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"0"}),(0,r.jsx)(s.td,{children:"tool server filter request ID"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"timestamp"}),(0,r.jsx)(s.td,{children:"DATETIME(6)"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"'1900-01-01 00:00:00.000000'"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"MarkupLegsList"}),(0,r.jsx)(s.td,{children:"JSON"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"'JSON_OBJECT()'"}),(0,r.jsx)(s.td,{})]})]})]}),"\n",(0,r.jsx)(s.h3,{id:"primary-key-definition-unique",children:"PRIMARY KEY DEFINITION (Unique)"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Field"}),(0,r.jsx)(s.th,{children:"Sequence"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"skey_tk"}),(0,r.jsx)(s.td,{children:"1"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"skey_at"}),(0,r.jsx)(s.td,{children:"2"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"skey_ts"}),(0,r.jsx)(s.td,{children:"3"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"isTest"}),(0,r.jsx)(s.td,{children:"4"})]})]})]}),"\n",(0,r.jsx)(s.h3,{id:"json-block-markuplegslist",children:"JSON Block (MarkupLegsList)"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Field"}),(0,r.jsx)(s.th,{children:"Type"}),(0,r.jsx)(s.th,{children:"Comment"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"legSecKey"}),(0,r.jsx)(s.td,{children:"OptionKey"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"legSecType"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"../../../Enums/legSecType",children:"enum - legSecType"})}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"legPriceFormat"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"../../../Enums/legPriceFormat",children:"enum - legPriceFormat"})}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"legSecurityDesc"}),(0,r.jsx)(s.td,{children:"string"}),(0,r.jsx)(s.td,{children:"Security description"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"legSide"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"../../../Enums/legSide",children:"enum - legSide"})}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"legRatio"}),(0,r.jsx)(s.td,{children:"ushort"}),(0,r.jsx)(s.td,{children:"leg ratio 1 2 etc"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"legBidPrice"}),(0,r.jsx)(s.td,{children:"double"}),(0,r.jsx)(s.td,{children:"leg market bid"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"legBidSize"}),(0,r.jsx)(s.td,{children:"int"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"legAskPrice"}),(0,r.jsx)(s.td,{children:"double"}),(0,r.jsx)(s.td,{children:"leg market ask"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"legAskSize"}),(0,r.jsx)(s.td,{children:"int"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"legYears"}),(0,r.jsx)(s.td,{children:"float"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"legUPrc"}),(0,r.jsx)(s.td,{children:"double"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"legSurfVol"}),(0,r.jsx)(s.td,{children:"float"}),(0,r.jsx)(s.td,{children:"leg surface volatility"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"legSurfPrice"}),(0,r.jsx)(s.td,{children:"float"}),(0,r.jsx)(s.td,{children:"surface price as of message arrival"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"legSurfDe"}),(0,r.jsx)(s.td,{children:"float"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"legSurfGa"}),(0,r.jsx)(s.td,{children:"float"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"legSurfVe"}),(0,r.jsx)(s.td,{children:"float"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"legSurfErr"}),(0,r.jsx)(s.td,{children:"byte"}),(0,r.jsx)(s.td,{})]})]})]}),"\n",(0,r.jsx)(s.h3,{id:"create-table-example-query",children:"CREATE TABLE EXAMPLE QUERY"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-sql",children:"CREATE TABLE `SRSpread`.`MsgSpreadBookMarkup` (\n    `skey_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None' COMMENT 'SR Spread Key (should have corresponding ProductDefinition record)',\n    `skey_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','ESX','ANY','CXE','DXE','NXAM','NXBR','NXDUB','NXLS','NXLDN','NXML','NXMLT','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None' COMMENT 'SR Spread Key (should have corresponding ProductDefinition record)',\n    `skey_tk` VARCHAR(12) NOT NULL DEFAULT '' COMMENT 'SR Spread Key (should have corresponding ProductDefinition record)',\n    `isTest` ENUM('None','Yes','No') NOT NULL DEFAULT 'None' COMMENT 'Yes indicates that response is made of entirely of isTest=Yes SpreadExchOrders',\n    `ticker_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None' COMMENT 'common spread underlier',\n    `ticker_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','ESX','ANY','CXE','DXE','NXAM','NXBR','NXDUB','NXLS','NXLDN','NXML','NXMLT','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None' COMMENT 'common spread underlier',\n    `ticker_tk` VARCHAR(12) NOT NULL DEFAULT '' COMMENT 'common spread underlier',\n    `SRspreadID` BIGINT NOT NULL DEFAULT 0,\n    `priceFormat` ENUM('None','N0','N1','N2','N3','N4','N5','N6','N7','F4','F8','Q8','F16','F32','H32','Q32','F64','H64','FullPenny','PartPenny','PartNickle','EQT','V1','V2','V3','V4','V5','V6','V7','V8','V9','V10','V11','V12','V13','V14','V15','A0','A1','A2','A3','A4','A5','A6','A7','E32') NOT NULL DEFAULT 'None',\n    `bidPrice1` DOUBLE NOT NULL DEFAULT 0 COMMENT 'bid price',\n    `isBidPrice1Valid` ENUM('None','Yes','No') NOT NULL DEFAULT 'None',\n    `askPrice1` DOUBLE NOT NULL DEFAULT 0 COMMENT 'ask price',\n    `isAskPrice1Valid` ENUM('None','Yes','No') NOT NULL DEFAULT 'None',\n    `bidSize1` INT NOT NULL DEFAULT 0 COMMENT 'cumulative size at bidPrice',\n    `askSize1` INT NOT NULL DEFAULT 0 COMMENT 'cumulative size at askPrice',\n    `bidMask1` INT UNSIGNED NOT NULL DEFAULT 0 COMMENT 'exchange bid bit mask (OptExch mask for NMS spreads; zero for single exchange spreads)',\n    `askMask1` INT UNSIGNED NOT NULL DEFAULT 0 COMMENT 'exchange ask bit mask (OptExch mask for NMS spreads; zero for single exchange spreads)',\n    `bidExch1` ENUM('None','AMEX','BOX','CBOE','ISE','NYSE','PHLX','NSDQ','BATS','C2','NQBX','MIAX','GMNI','CME','CBOT','NYMEX','COMEX','ICE','EDGO','MCRY','MPRL','SDRK','DQTE','EMLD','CFE','MEMX','EUREX','CEDX','NXAM','NXBR','NXLS','NXML','NXOS','NXP','ICEFE') NOT NULL DEFAULT 'None' COMMENT 'exchange at bid price with the largest size (if any)',\n    `askExch1` ENUM('None','AMEX','BOX','CBOE','ISE','NYSE','PHLX','NSDQ','BATS','C2','NQBX','MIAX','GMNI','CME','CBOT','NYMEX','COMEX','ICE','EDGO','MCRY','MPRL','SDRK','DQTE','EMLD','CFE','MEMX','EUREX','CEDX','NXAM','NXBR','NXLS','NXML','NXOS','NXP','ICEFE') NOT NULL DEFAULT 'None' COMMENT 'exchange at ask price with the largest size (if any)',\n    `bidTime` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000' COMMENT 'last bid price or size change',\n    `askTime` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000' COMMENT 'last ask price or size change',\n    `updateType` ENUM('None','PrcChange','SizeOnly','PrevPeriod') NOT NULL DEFAULT 'None',\n    `numStkLegs` TINYINT UNSIGNED NOT NULL DEFAULT 0,\n    `numFutLegs` TINYINT UNSIGNED NOT NULL DEFAULT 0,\n    `numOptLegs` TINYINT UNSIGNED NOT NULL DEFAULT 0,\n    `userDefined` ENUM('None','Yes','No') NOT NULL DEFAULT 'None',\n    `spreadClass` ENUM('None','Stk','Fut','Call','Put','Synth','RevCon','Box','JRoll','Roll','Straddle','Strangle','CSpread','PSpread','VStrip','VSpread','HStrip','HSpread','BFly','RiskRev','Mixed','VarSwap') NOT NULL DEFAULT 'None',\n    `containsHedge` ENUM('None','Yes','No') NOT NULL DEFAULT 'None',\n    `legBidPrc` DOUBLE NOT NULL DEFAULT 0,\n    `legAskPrc` DOUBLE NOT NULL DEFAULT 0,\n    `legBidSz` INT NOT NULL DEFAULT 0,\n    `legAskSz` INT NOT NULL DEFAULT 0,\n    `surfPrc` DOUBLE NOT NULL DEFAULT 0,\n    `surfDelta` FLOAT NOT NULL DEFAULT 0,\n    `surfGamma` FLOAT NOT NULL DEFAULT 0,\n    `surfVega` FLOAT NOT NULL DEFAULT 0,\n    `surfWtVega` FLOAT NOT NULL DEFAULT 0,\n    `surfError` TINYINT UNSIGNED NOT NULL DEFAULT 0 COMMENT 'error code from surface price calc (if any)',\n    `minExpiry` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000' COMMENT 'expiry of earliest option leg(s)',\n    `maxExpiry` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000' COMMENT 'expiry of latest option leg(s)',\n    `minYears` FLOAT NOT NULL DEFAULT 0,\n    `maxYears` FLOAT NOT NULL DEFAULT 0,\n    `refUPrc` FLOAT NOT NULL DEFAULT 0 COMMENT 'reference underlier price',\n    `printPrice` FLOAT NOT NULL DEFAULT 0 COMMENT 'last spread print price (if any)',\n    `printTime` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000',\n    `printSize` INT NOT NULL DEFAULT 0 COMMENT 'last spread print size (if any)',\n    `printVolume` INT NOT NULL DEFAULT 0,\n    `grpNum` INT NOT NULL DEFAULT 0,\n    `securityDesc` VARCHAR(24) NOT NULL DEFAULT '',\n    `filterId` BIGINT NOT NULL DEFAULT 0 COMMENT 'tool server filter request ID',\n    `timestamp` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000',\n    `MarkupLegsList` JSON NOT NULL DEFAULT JSON_OBJECT() CHECK(JSON_VALID(MarkupLegsList)),\n    PRIMARY KEY USING HASH (`skey_tk`,`skey_at`,`skey_ts`,`isTest`)\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='Live spread quotes with SpiderRock markup details for equity and future option spreads.';\n\n"})}),"\n",(0,r.jsx)(s.h3,{id:"select-table-example-query",children:"SELECT TABLE EXAMPLE QUERY"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-sql",children:"SELECT\n    `skey_at`,\n    `skey_ts`,\n    `skey_tk`,\n    `isTest`,\n    `ticker_at`,\n    `ticker_ts`,\n    `ticker_tk`,\n    `SRspreadID`,\n    `priceFormat`,\n    `bidPrice1`,\n    `isBidPrice1Valid`,\n    `askPrice1`,\n    `isAskPrice1Valid`,\n    `bidSize1`,\n    `askSize1`,\n    `bidMask1`,\n    `askMask1`,\n    `bidExch1`,\n    `askExch1`,\n    `bidTime`,\n    `askTime`,\n    `updateType`,\n    `numStkLegs`,\n    `numFutLegs`,\n    `numOptLegs`,\n    `userDefined`,\n    `spreadClass`,\n    `containsHedge`,\n    `legBidPrc`,\n    `legAskPrc`,\n    `legBidSz`,\n    `legAskSz`,\n    `surfPrc`,\n    `surfDelta`,\n    `surfGamma`,\n    `surfVega`,\n    `surfWtVega`,\n    `surfError`,\n    `minExpiry`,\n    `maxExpiry`,\n    `minYears`,\n    `maxYears`,\n    `refUPrc`,\n    `printPrice`,\n    `printTime`,\n    `printSize`,\n    `printVolume`,\n    `grpNum`,\n    `securityDesc`,\n    `filterId`,\n    `timestamp`,\n    `MarkupLegsList`\nFROM `SRSpread`.`MsgSpreadBookMarkup`\nWHERE \n    /* Replace with a ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') */ \n    `skey_at` = 'None'\n  AND\n    /* Replace with a ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','ESX','ANY','CXE','DXE','NXAM','NXBR','NXDUB','NXLS','NXLDN','NXML','NXMLT','NXOS','NXP','EUREX','CEDX','ICEFE') */ \n    `skey_ts` = 'None'\n  AND\n    /* Replace with a VARCHAR(12) */ \n    `skey_tk` = 'Example_skey_tk'\n  AND\n    /* Replace with a ENUM('None','Yes','No') */ \n    `isTest` = 'None';\n"})}),"\n",(0,r.jsx)(s.h3,{id:"doc-columns-query",children:"Doc Columns Query"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-sql",children:"SELECT * FROM SRSpread.doccolumns WHERE TABLE_NAME='SpreadBookMarkup' ORDER BY ordinal_position ASC;\n"})})]})}function j(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},28453:(e,s,d)=>{d.d(s,{R:()=>i,x:()=>c});var r=d(96540);const n={},t=r.createContext(n);function i(e){const s=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),r.createElement(t.Provider,{value:s},e.children)}}}]);