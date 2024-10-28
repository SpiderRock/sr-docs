"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[63231],{33596:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>c,contentTitle:()=>n,default:()=>a,frontMatter:()=>i,metadata:()=>l,toc:()=>h});var d=s(74848),t=s(28453);const i={},n=void 0,l={id:"MessageSchemas/Schema/SRSE Products/SRLive/RFQQuoteBroadcast/RFQQuoteBroadcast",title:"RFQQuoteBroadcast",description:"V8 Message Definiton",source:"@site/docs/MessageSchemas/Schema/SRSE Products/SRLive/RFQQuoteBroadcast/RFQQuoteBroadcast.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRLive/RFQQuoteBroadcast",slug:"/MessageSchemas/Schema/SRSE Products/SRLive/RFQQuoteBroadcast/",permalink:"/docs/next/MessageSchemas/Schema/SRSE Products/SRLive/RFQQuoteBroadcast/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"messageSchemasSidebar",previous:{title:"ProductTradingStatusV2",permalink:"/docs/next/MessageSchemas/Schema/SRSE Products/SRLive/ProductTradingStatusV2/"},next:{title:"RootDefinition",permalink:"/docs/next/MessageSchemas/Schema/SRSE Products/SRLive/RootDefinition/"}},c={},h=[{value:"METADATA",id:"metadata",level:3},{value:"Table Definition",id:"table-definition",level:3},{value:"PRIMARY KEY DEFINITION (Unique)",id:"primary-key-definition-unique",level:3},{value:"SECONDARY INDEX (TickerIndex) (Not Unique)",id:"secondary-index-tickerindex-not-unique",level:3},{value:"JSON Block (QuoteLegsList)",id:"json-block-quotelegslist",level:3},{value:"CREATE TABLE EXAMPLE QUERY",id:"create-table-example-query",level:3},{value:"SELECT TABLE EXAMPLE QUERY",id:"select-table-example-query",level:3},{value:"Doc Columns Query",id:"doc-columns-query",level:3}];function x(e){const r={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(r.p,{children:(0,d.jsx)(r.a,{href:"../../../Topics/tool-rows/RFQQuoteBroadcast",children:"V8 Message Definiton"})}),"\n",(0,d.jsx)(r.p,{children:"Live spread quotes with SpiderRock markup details for equity and future option spreads.  Legs details are included in a packed field.  This table contains the most recent market for each spread."}),"\n",(0,d.jsx)(r.h3,{id:"metadata",children:"METADATA"}),"\n",(0,d.jsxs)(r.table,{children:[(0,d.jsx)(r.thead,{children:(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.th,{children:"Attribute"}),(0,d.jsx)(r.th,{children:"Value"})]})}),(0,d.jsxs)(r.tbody,{children:[(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"Topic"}),(0,d.jsx)(r.td,{children:"6120-tool-rows"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"MLink Token"}),(0,d.jsx)(r.td,{children:"ClientLive"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"Product"}),(0,d.jsx)(r.td,{children:"SRLive"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"accessType"}),(0,d.jsx)(r.td,{children:"SELECT"})]})]})]}),"\n",(0,d.jsx)(r.h3,{id:"table-definition",children:"Table Definition"}),"\n",(0,d.jsxs)(r.table,{children:[(0,d.jsx)(r.thead,{children:(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.th,{children:"Field"}),(0,d.jsx)(r.th,{children:"Type"}),(0,d.jsx)(r.th,{children:"Key"}),(0,d.jsx)(r.th,{children:"Default Value"}),(0,d.jsx)(r.th,{children:"Comment"})]})}),(0,d.jsxs)(r.tbody,{children:[(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"securityID"}),(0,d.jsx)(r.td,{children:"BIGINT"}),(0,d.jsx)(r.td,{children:"PRI"}),(0,d.jsx)(r.td,{children:"0"}),(0,d.jsx)(r.td,{children:"exchange spread ID eg CME ProductID or ISE SecurityID"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"exchSource"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../../Enums/ExchSource",children:"enum - ExchSource"})}),(0,d.jsx)(r.td,{children:"PRI"}),(0,d.jsx)(r.td,{children:"'None'"}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"ticker_at"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../../Enums/AssetType",children:"enum - AssetType"})}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"'None'"}),(0,d.jsx)(r.td,{children:"first ticker in leg list"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"ticker_ts"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../../Enums/TickerSrc",children:"enum - TickerSrc"})}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"'None'"}),(0,d.jsx)(r.td,{children:"first ticker in leg list"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"ticker_tk"}),(0,d.jsx)(r.td,{children:"VARCHAR(12)"}),(0,d.jsx)(r.td,{children:"SEC"}),(0,d.jsx)(r.td,{children:"''"}),(0,d.jsx)(r.td,{children:"first ticker in leg list"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"securityDesc"}),(0,d.jsx)(r.td,{children:"TINYTEXT"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"''"}),(0,d.jsx)(r.td,{children:"SR constructedblank on broadcast filled by tool or SRSE proxy"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"rfqSource"}),(0,d.jsx)(r.td,{children:"VARCHAR(255)"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"'Any'"}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"rfqStrategy"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../../Enums/SpreadStrategy",children:"enum - SpreadStrategy"})}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"'None'"}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"isCoveredStrategy"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../../Enums/YesNo",children:"enum - YesNo"})}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"'None'"}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"isTradeable"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../../Enums/YesNo",children:"enum - YesNo"})}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"'None'"}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"rfqBidPrice"}),(0,d.jsx)(r.td,{children:"DOUBLE"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"0"}),(0,d.jsx)(r.td,{children:"best bid buy price for this RFQSpread book"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"rfqBidQuan"}),(0,d.jsx)(r.td,{children:"INT"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"0"}),(0,d.jsx)(r.td,{children:"cumulative bid buy quantity"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"rfqAskPrice"}),(0,d.jsx)(r.td,{children:"DOUBLE"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"0"}),(0,d.jsx)(r.td,{children:"best ask sell price for this RFQSpread book"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"rfqAskQuan"}),(0,d.jsx)(r.td,{children:"INT"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"0"}),(0,d.jsx)(r.td,{children:"cumulative ask sell quantity"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"rfqPrtPrice"}),(0,d.jsx)(r.td,{children:"DOUBLE"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"0"}),(0,d.jsx)(r.td,{children:"last print price for this RFQSpread"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"rfqPrtSize"}),(0,d.jsx)(r.td,{children:"INT"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"0"}),(0,d.jsx)(r.td,{children:"last print size for this RFQSpread"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"rfqPrtVolume"}),(0,d.jsx)(r.td,{children:"INT"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"0"}),(0,d.jsx)(r.td,{children:"total print volume for session for this RFQSpread"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"rfqPrtTime"}),(0,d.jsx)(r.td,{children:"BIGINT"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"0"}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"bidPrice"}),(0,d.jsx)(r.td,{children:"DOUBLE"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"0"}),(0,d.jsx)(r.td,{children:"best bid buy price for this RFQSpread from individual legs"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"bidQuan"}),(0,d.jsx)(r.td,{children:"INT"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"0"}),(0,d.jsx)(r.td,{children:"minimum bid buy quantity from individual legs"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"askPrice"}),(0,d.jsx)(r.td,{children:"DOUBLE"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"0"}),(0,d.jsx)(r.td,{children:"best ask sell price for this RFQSpread from individual legs"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"askQuan"}),(0,d.jsx)(r.td,{children:"INT"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"0"}),(0,d.jsx)(r.td,{children:"minimum ask sell quantity from individual legs"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"surfDelta"}),(0,d.jsx)(r.td,{children:"FLOAT"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"0"}),(0,d.jsx)(r.td,{children:"delta of all legs"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"surfVega"}),(0,d.jsx)(r.td,{children:"FLOAT"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"0"}),(0,d.jsx)(r.td,{children:"vega of all legs"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"surfPrice"}),(0,d.jsx)(r.td,{children:"FLOAT"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"0"}),(0,d.jsx)(r.td,{children:"surfPrice SR midmarket of all legs"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"theoPrice"}),(0,d.jsx)(r.td,{children:"FLOAT"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"0"}),(0,d.jsx)(r.td,{children:"theoPrice if applicable of all legs"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"theoPriceLo"}),(0,d.jsx)(r.td,{children:"FLOAT"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"0"}),(0,d.jsx)(r.td,{children:"theoPrice if applicable of all legs best way"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"theoPriceHi"}),(0,d.jsx)(r.td,{children:"FLOAT"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"0"}),(0,d.jsx)(r.td,{children:"theoPrice if applicable of all legs worst way"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"minUPrc"}),(0,d.jsx)(r.td,{children:"DOUBLE"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"0"}),(0,d.jsx)(r.td,{children:"min uPrc of all option legs"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"maxUPrc"}),(0,d.jsx)(r.td,{children:"DOUBLE"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"0"}),(0,d.jsx)(r.td,{children:"max uPrc of all option legs"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"minYears"}),(0,d.jsx)(r.td,{children:"FLOAT"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"0"}),(0,d.jsx)(r.td,{children:"min years of all option legs"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"maxYears"}),(0,d.jsx)(r.td,{children:"FLOAT"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"0"}),(0,d.jsx)(r.td,{children:"max years of all option legs"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"legSecTypes"}),(0,d.jsx)(r.td,{children:"VARCHAR(255)"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"'Any'"}),(0,d.jsx)(r.td,{children:"multi value"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"exchange"}),(0,d.jsx)(r.td,{children:"VARCHAR(8)"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"''"}),(0,d.jsx)(r.td,{children:"comma separated list"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"grpNum"}),(0,d.jsx)(r.td,{children:"INT"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"0"}),(0,d.jsx)(r.td,{children:"industry group number equities only"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"sector"}),(0,d.jsx)(r.td,{children:"VARCHAR(16)"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"''"}),(0,d.jsx)(r.td,{children:"user defined sector code if any"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"riskClass"}),(0,d.jsx)(r.td,{children:"VARCHAR(8)"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"''"}),(0,d.jsx)(r.td,{children:"risk class letter code"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"optStatus"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../../Enums/OptStatus",children:"enum - OptStatus"})}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"'Hold'"}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"posVega"}),(0,d.jsx)(r.td,{children:"FLOAT"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"0"}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"posGamma"}),(0,d.jsx)(r.td,{children:"FLOAT"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"0"}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"posTheta"}),(0,d.jsx)(r.td,{children:"FLOAT"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"0"}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"posDelta"}),(0,d.jsx)(r.td,{children:"FLOAT"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"0"}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"netTimestamp"}),(0,d.jsx)(r.td,{children:"BIGINT"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"0"}),(0,d.jsx)(r.td,{children:"PTP timestamp of most recent message update"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"filterId"}),(0,d.jsx)(r.td,{children:"BIGINT"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"0"}),(0,d.jsx)(r.td,{children:"used by tooltoolServer session to multiplex filters"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"numLegs"}),(0,d.jsx)(r.td,{children:"INT"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"0"}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"QuoteLegsList"}),(0,d.jsx)(r.td,{children:"JSON"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"'JSON_OBJECT()'"}),(0,d.jsx)(r.td,{})]})]})]}),"\n",(0,d.jsx)(r.h3,{id:"primary-key-definition-unique",children:"PRIMARY KEY DEFINITION (Unique)"}),"\n",(0,d.jsxs)(r.table,{children:[(0,d.jsx)(r.thead,{children:(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.th,{children:"Field"}),(0,d.jsx)(r.th,{children:"Sequence"})]})}),(0,d.jsxs)(r.tbody,{children:[(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"securityID"}),(0,d.jsx)(r.td,{children:"1"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"exchSource"}),(0,d.jsx)(r.td,{children:"2"})]})]})]}),"\n",(0,d.jsx)(r.h3,{id:"secondary-index-tickerindex-not-unique",children:"SECONDARY INDEX (TickerIndex) (Not Unique)"}),"\n",(0,d.jsxs)(r.table,{children:[(0,d.jsx)(r.thead,{children:(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.th,{children:"Field"}),(0,d.jsx)(r.th,{children:"Sequence"})]})}),(0,d.jsx)(r.tbody,{children:(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"ticker_tk"}),(0,d.jsx)(r.td,{children:"1"})]})})]}),"\n",(0,d.jsx)(r.h3,{id:"json-block-quotelegslist",children:"JSON Block (QuoteLegsList)"}),"\n",(0,d.jsxs)(r.table,{children:[(0,d.jsx)(r.thead,{children:(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.th,{children:"Field"}),(0,d.jsx)(r.th,{children:"Type"}),(0,d.jsx)(r.th,{children:"Comment"})]})}),(0,d.jsxs)(r.tbody,{children:[(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"legKey"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../../Enums/legKey",children:"enum - legKey"})}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"legKeyType"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../../Enums/LegKeyType",children:"enum - LegKeyType"})}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"legSecurityID"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../../Enums/legSecurityID",children:"enum - legSecurityID"})}),(0,d.jsx)(r.td,{children:"product securityID if available 0 otherwise can be another spread"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"legParentSecID"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../../Enums/legParentSecID",children:"enum - legParentSecID"})}),(0,d.jsx)(r.td,{children:"product securityID of parent if unrolled from a compound spread"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"legSecurityDesc"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../../Enums/legSecurityDesc",children:"enum - legSecurityDesc"})}),(0,d.jsx)(r.td,{children:"Security description"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"legRatio"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../../Enums/legRatio",children:"enum - legRatio"})}),(0,d.jsx)(r.td,{children:"leg ratio 1 2 etc"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"legSide"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../../Enums/BuySell",children:"enum - BuySell"})}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"legBidPrice"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../../Enums/legBidPrice",children:"enum - legBidPrice"})}),(0,d.jsx)(r.td,{children:"leg market bid"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"legBidSize"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../../Enums/legBidSize",children:"enum - legBidSize"})}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"legAskPrice"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../../Enums/legAskPrice",children:"enum - legAskPrice"})}),(0,d.jsx)(r.td,{children:"leg market ask"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"legAskSize"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../../Enums/legAskSize",children:"enum - legAskSize"})}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"legYears"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../../Enums/legYears",children:"enum - legYears"})}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"legUPrc"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../../Enums/legUPrc",children:"enum - legUPrc"})}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"legOptMult"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../../Enums/legOptMult",children:"enum - legOptMult"})}),(0,d.jsx)(r.td,{children:"SPC if equity 1 if optionfuture"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"legFutMult"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../../Enums/legFutMult",children:"enum - legFutMult"})}),(0,d.jsx)(r.td,{children:"1 if equity uMult if optionfuture"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"legSurfVol"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../../Enums/legSurfVol",children:"enum - legSurfVol"})}),(0,d.jsx)(r.td,{children:"leg surface volatility"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"legSurfDe"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../../Enums/legSurfDe",children:"enum - legSurfDe"})}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"legSurfVe"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../../Enums/legSurfVe",children:"enum - legSurfVe"})}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"legSurfPrice"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../../Enums/legSurfPrice",children:"enum - legSurfPrice"})}),(0,d.jsx)(r.td,{children:"surface price as of message arrival"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"legTheoPrice"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../../Enums/legTheoPrice",children:"enum - legTheoPrice"})}),(0,d.jsx)(r.td,{children:"theo price"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"legTheoPrcB"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../../Enums/legTheoPrcB",children:"enum - legTheoPrcB"})}),(0,d.jsx)(r.td,{children:"theo buy price"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"legTheoPrcS"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../../Enums/legTheoPrcS",children:"enum - legTheoPrcS"})}),(0,d.jsx)(r.td,{children:"theo sell price"})]})]})]}),"\n",(0,d.jsx)(r.h3,{id:"create-table-example-query",children:"CREATE TABLE EXAMPLE QUERY"}),"\n",(0,d.jsx)(r.pre,{children:(0,d.jsx)(r.code,{className:"language-sql",children:"CREATE TABLE `SRLive`.`MsgRFQQuoteBroadcast` (\n    `securityID` BIGINT NOT NULL DEFAULT 0 COMMENT 'exchange spread ID (eg. CME ProductID or ISE SecurityID)',\n    `exchSource` ENUM('None','Broker','CME','ISE','CBOE','PHLX','CBOT','NYMEX','COMEX','NMS','ICE','CFE') NOT NULL DEFAULT 'None',\n    `ticker_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None' COMMENT 'first ticker in leg list',\n    `ticker_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','EUX','ANY','CXE','DXE','NXAM','NXBR','NXLS','NXML','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None' COMMENT 'first ticker in leg list',\n    `ticker_tk` VARCHAR(12) NOT NULL DEFAULT '' COMMENT 'first ticker in leg list',\n    `securityDesc` TINYTEXT NOT NULL DEFAULT '' COMMENT 'SR constructed;blank on broadcast (filled by tool or SRSE proxy)',\n    `rfqSource` VARCHAR(255) NOT NULL DEFAULT 'Any',\n    `rfqStrategy` ENUM('None','SingleLeg','CalHoriz','CalDiag','CalSprd','EqCalSprd','ForexCalSprd','TASCalSprd','Straddle','HorizStraddle','Strip','StraddleStrip','StripMnth','EnrgStrip','BalStrip','UnbalStrip','EnrgInterCommStrip','Strangle','Vertical','Box','Bundle','BundleSprd','BFly','PackBFly','IronBFly','DblBFly','CndnlCurve','Double','Condor','IronCondor','Ratio1x2','Ratio1x3','Ratio2x3','RiskRev','XmasTree','JellyRoll','Guts','ThreeWay','ThreeWayStrdVsCall','ThreeWayStrdVsPut','RedTick','InterCommod','Pack','MnthPack','PackSprd','Crack1x1','IntRateIntCmSprd','ImpTreasIntCmSprd','ComIntCmSprd','InvoiceSwpSprd','Conversion','Horizontal','Generic') NOT NULL DEFAULT 'None',\n    `isCoveredStrategy` ENUM('None','Yes','No') NOT NULL DEFAULT 'None',\n    `isTradeable` ENUM('None','Yes','No') NOT NULL DEFAULT 'None',\n    `rfqBidPrice` DOUBLE NOT NULL DEFAULT 0 COMMENT 'best bid (buy) price for this RFQ/Spread book',\n    `rfqBidQuan` INT NOT NULL DEFAULT 0 COMMENT 'cumulative bid (buy) quantity',\n    `rfqAskPrice` DOUBLE NOT NULL DEFAULT 0 COMMENT 'best ask (sell) price for this RFQ/Spread book',\n    `rfqAskQuan` INT NOT NULL DEFAULT 0 COMMENT 'cumulative ask (sell) quantity',\n    `rfqPrtPrice` DOUBLE NOT NULL DEFAULT 0 COMMENT 'last print price for this RFQ/Spread',\n    `rfqPrtSize` INT NOT NULL DEFAULT 0 COMMENT 'last print size for this RFQ/Spread',\n    `rfqPrtVolume` INT NOT NULL DEFAULT 0 COMMENT 'total print volume (for session) for this RFQ/Spread',\n    `rfqPrtTime` BIGINT NOT NULL DEFAULT 0,\n    `bidPrice` DOUBLE NOT NULL DEFAULT 0 COMMENT 'best bid (buy) price for this RFQ/Spread from individual legs',\n    `bidQuan` INT NOT NULL DEFAULT 0 COMMENT 'minimum bid (buy) quantity from individual legs',\n    `askPrice` DOUBLE NOT NULL DEFAULT 0 COMMENT 'best ask (sell) price for this RFQ/Spread from individual legs',\n    `askQuan` INT NOT NULL DEFAULT 0 COMMENT 'minimum ask (sell) quantity from individual legs',\n    `surfDelta` FLOAT NOT NULL DEFAULT 0 COMMENT 'delta of all legs',\n    `surfVega` FLOAT NOT NULL DEFAULT 0 COMMENT 'vega of all legs',\n    `surfPrice` FLOAT NOT NULL DEFAULT 0 COMMENT 'surfPrice (SR mid-market) of all legs',\n    `theoPrice` FLOAT NOT NULL DEFAULT 0 COMMENT 'theoPrice (if applicable) of all legs',\n    `theoPriceLo` FLOAT NOT NULL DEFAULT 0 COMMENT 'theoPrice (if applicable) of all legs (best way)',\n    `theoPriceHi` FLOAT NOT NULL DEFAULT 0 COMMENT 'theoPrice (if applicable) of all legs (worst way)',\n    `minUPrc` DOUBLE NOT NULL DEFAULT 0 COMMENT 'min uPrc of all option legs',\n    `maxUPrc` DOUBLE NOT NULL DEFAULT 0 COMMENT 'max uPrc of all option legs',\n    `minYears` FLOAT NOT NULL DEFAULT 0 COMMENT 'min years of all option legs',\n    `maxYears` FLOAT NOT NULL DEFAULT 0 COMMENT 'max years of all option legs',\n    `legSecTypes` VARCHAR(255) NOT NULL DEFAULT 'Any' COMMENT 'multi value',\n    `exchange` VARCHAR(8) NOT NULL DEFAULT '' COMMENT 'comma separated list',\n    `grpNum` INT NOT NULL DEFAULT 0 COMMENT 'industry group number (equities only)',\n    `sector` VARCHAR(16) NOT NULL DEFAULT '' COMMENT 'user defined sector code (if any)',\n    `riskClass` VARCHAR(8) NOT NULL DEFAULT '' COMMENT 'risk class letter code',\n    `optStatus` ENUM('Hold','TwoWay','BuyOnly','SellOnly','CloseOnly','CloseNow','CloseRisk','BuyCloseOnly','SellCloseOnly') NOT NULL DEFAULT 'Hold',\n    `posVega` FLOAT NOT NULL DEFAULT 0,\n    `posGamma` FLOAT NOT NULL DEFAULT 0,\n    `posTheta` FLOAT NOT NULL DEFAULT 0,\n    `posDelta` FLOAT NOT NULL DEFAULT 0,\n    `netTimestamp` BIGINT NOT NULL DEFAULT 0 COMMENT 'PTP timestamp of most recent message update',\n    `filterId` BIGINT NOT NULL DEFAULT 0 COMMENT 'used by tool/toolServer session to multiplex filters',\n    `numLegs` INT NOT NULL DEFAULT 0,\n    `QuoteLegsList` JSON NOT NULL DEFAULT JSON_OBJECT() CHECK(JSON_VALID(QuoteLegsList)),\n    PRIMARY KEY USING HASH (`securityID`,`exchSource`),\n    KEY `TickerIndex` (`ticker_tk`) USING HASH\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='Live spread quotes with SpiderRock markup details for equity and future option spreads.  Legs details are included in a packed field.  This table contains the most recent market for each spread.';\n\n"})}),"\n",(0,d.jsx)(r.h3,{id:"select-table-example-query",children:"SELECT TABLE EXAMPLE QUERY"}),"\n",(0,d.jsx)(r.pre,{children:(0,d.jsx)(r.code,{className:"language-sql",children:"SELECT\n    `securityID`,\n    `exchSource`,\n    `ticker_at`,\n    `ticker_ts`,\n    `ticker_tk`,\n    `securityDesc`,\n    `rfqSource`,\n    `rfqStrategy`,\n    `isCoveredStrategy`,\n    `isTradeable`,\n    `rfqBidPrice`,\n    `rfqBidQuan`,\n    `rfqAskPrice`,\n    `rfqAskQuan`,\n    `rfqPrtPrice`,\n    `rfqPrtSize`,\n    `rfqPrtVolume`,\n    `rfqPrtTime`,\n    `bidPrice`,\n    `bidQuan`,\n    `askPrice`,\n    `askQuan`,\n    `surfDelta`,\n    `surfVega`,\n    `surfPrice`,\n    `theoPrice`,\n    `theoPriceLo`,\n    `theoPriceHi`,\n    `minUPrc`,\n    `maxUPrc`,\n    `minYears`,\n    `maxYears`,\n    `legSecTypes`,\n    `exchange`,\n    `grpNum`,\n    `sector`,\n    `riskClass`,\n    `optStatus`,\n    `posVega`,\n    `posGamma`,\n    `posTheta`,\n    `posDelta`,\n    `netTimestamp`,\n    `filterId`,\n    `numLegs`,\n    `QuoteLegsList`\nFROM `SRLive`.`MsgRFQQuoteBroadcast`\nWHERE \n    /* Replace with a BIGINT */ \n    `securityID` = 1234567890\n  AND\n    /* Replace with a ENUM('None','Broker','CME','ISE','CBOE','PHLX','CBOT','NYMEX','COMEX','NMS','ICE','CFE') */ \n    `exchSource` = 'None';\n"})}),"\n",(0,d.jsx)(r.h3,{id:"doc-columns-query",children:"Doc Columns Query"}),"\n",(0,d.jsx)(r.pre,{children:(0,d.jsx)(r.code,{className:"language-sql",children:"SELECT * FROM SRLive.doccolumns WHERE TABLE_NAME='RFQQuoteBroadcast' ORDER BY ordinal_position ASC;\n"})})]})}function a(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,d.jsx)(r,{...e,children:(0,d.jsx)(x,{...e})}):x(e)}},28453:(e,r,s)=>{s.d(r,{R:()=>n,x:()=>l});var d=s(96540);const t={},i=d.createContext(t);function n(e){const r=d.useContext(i);return d.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:n(e.components),d.createElement(i.Provider,{value:r},e.children)}}}]);