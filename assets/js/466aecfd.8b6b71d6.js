"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[21252],{4322:(e,s,d)=>{d.r(s),d.d(s,{assets:()=>c,contentTitle:()=>i,default:()=>j,frontMatter:()=>n,metadata:()=>l,toc:()=>h});var r=d(74848),t=d(28453);const n={},i=void 0,l={id:"MessageSchemas/Schema/SRSE Products/SRTrade/SpdrParentReviewRequest/SpdrParentReviewRequest",title:"SpdrParentReviewRequest",description:"V8 Message Definiton",source:"@site/docs/MessageSchemas/Schema/SRSE Products/SRTrade/SpdrParentReviewRequest/SpdrParentReviewRequest.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRTrade/SpdrParentReviewRequest",slug:"/MessageSchemas/Schema/SRSE Products/SRTrade/SpdrParentReviewRequest/",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRTrade/SpdrParentReviewRequest/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"messageSchemasSidebar",previous:{title:"SpdrParentReport",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRTrade/SpdrParentReport/"},next:{title:"SpdrParentReviewResponse",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRTrade/SpdrParentReviewResponse/"}},c={},h=[{value:"METADATA",id:"metadata",level:3},{value:"Table Definition",id:"table-definition",level:3},{value:"PRIMARY KEY DEFINITION (Unique)",id:"primary-key-definition-unique",level:3},{value:"JSON Block (OrderLegsList)",id:"json-block-orderlegslist",level:3},{value:"CREATE TABLE QUERY",id:"create-table-query",level:3}];function x(e){const s={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.p,{children:(0,r.jsx)(s.a,{href:"../../../Topics/parent-review/SpdrParentReviewRequest",children:"V8 Message Definiton"})}),"\n",(0,r.jsx)(s.p,{children:"SpdrParentReviewRequest records created when a parent order is submitted with StageType=StageReview.  These records indicate that an external review of the parent order has been requested."}),"\n",(0,r.jsx)(s.h3,{id:"metadata",children:"METADATA"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Attribute"}),(0,r.jsx)(s.th,{children:"Value"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Topic"}),(0,r.jsx)(s.td,{children:"4195-parent-review"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"MLink Token"}),(0,r.jsx)(s.td,{children:"SystemData"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Product"}),(0,r.jsx)(s.td,{children:"SRTrade"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"accessType"}),(0,r.jsx)(s.td,{children:"SELECT"})]})]})]}),"\n",(0,r.jsx)(s.h3,{id:"table-definition",children:"Table Definition"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Field"}),(0,r.jsx)(s.th,{children:"Type"}),(0,r.jsx)(s.th,{children:"Key"}),(0,r.jsx)(s.th,{children:"Default Value"}),(0,r.jsx)(s.th,{children:"Comment"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"parentNumber"}),(0,r.jsx)(s.td,{children:"CHAR(19)"}),(0,r.jsx)(s.td,{children:"PRI"}),(0,r.jsx)(s.td,{children:"'0000-0000-0000-0000'"}),(0,r.jsx)(s.td,{children:"SPDR order number"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"sysEnvironment"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"../../../Enums/SysEnvironment",children:"enum - SysEnvironment"})}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"'None'"}),(0,r.jsx)(s.td,{children:"original source sys environment Stable Current etc"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"runStatus"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"../../../Enums/RunStatus",children:"enum - RunStatus"})}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"'None'"}),(0,r.jsx)(s.td,{children:"original source run status ProdBeta"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"parentShape"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"../../../Enums/SpdrOrderShape",children:"enum - SpdrOrderShape"})}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"'None'"}),(0,r.jsx)(s.td,{children:"Parent Shape Single Cross MLeg MLegCross"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"altOrderId"}),(0,r.jsx)(s.td,{children:"VARCHAR(24)"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"''"}),(0,r.jsx)(s.td,{children:"alternate order ID usually clOrdId from client"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"altPrevOrderId"}),(0,r.jsx)(s.td,{children:"VARCHAR(24)"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"''"}),(0,r.jsx)(s.td,{children:"alternate prev order ID usually origClOrdId from client during cxlreplace"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"altAccnt"}),(0,r.jsx)(s.td,{children:"VARCHAR(32)"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"''"}),(0,r.jsx)(s.td,{children:"alternate client assigned long account string optional used to map between client and SR account strings"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"altUserName"}),(0,r.jsx)(s.td,{children:"VARCHAR(24)"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"''"}),(0,r.jsx)(s.td,{children:"alternate client assigned user name optional used to map between client and SR account strings"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"secKey_at"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"../../../Enums/AssetType",children:"enum - AssetType"})}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"'None'"}),(0,r.jsx)(s.td,{children:"Composite Security Key"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"secKey_ts"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"../../../Enums/TickerSrc",children:"enum - TickerSrc"})}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"'None'"}),(0,r.jsx)(s.td,{children:"Composite Security Key"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"secKey_tk"}),(0,r.jsx)(s.td,{children:"VARCHAR(12)"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"''"}),(0,r.jsx)(s.td,{children:"Composite Security Key"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"secKey_yr"}),(0,r.jsx)(s.td,{children:"SMALLINT UNSIGNED"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"0"}),(0,r.jsx)(s.td,{children:"Composite Security Key"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"secKey_mn"}),(0,r.jsx)(s.td,{children:"TINYINT UNSIGNED"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"0"}),(0,r.jsx)(s.td,{children:"Composite Security Key"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"secKey_dy"}),(0,r.jsx)(s.td,{children:"TINYINT UNSIGNED"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"0"}),(0,r.jsx)(s.td,{children:"Composite Security Key"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"secKey_xx"}),(0,r.jsx)(s.td,{children:"DOUBLE"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"0"}),(0,r.jsx)(s.td,{children:"Composite Security Key"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"secKey_cp"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"../../../Enums/CallPut",children:"enum - CallPut"})}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"'Call'"}),(0,r.jsx)(s.td,{children:"Composite Security Key"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"secType"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"../../../Enums/SpdrKeyType",children:"enum - SpdrKeyType"})}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"'None'"}),(0,r.jsx)(s.td,{children:"Security Type Stock Future Option"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"securityDesc"}),(0,r.jsx)(s.td,{children:"TINYTEXT"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"''"}),(0,r.jsx)(s.td,{children:"additional security description"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"accnt"}),(0,r.jsx)(s.td,{children:"VARCHAR(16)"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"''"}),(0,r.jsx)(s.td,{children:"SR trading account"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"clientFirm"}),(0,r.jsx)(s.td,{children:"VARCHAR(16)"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"''"}),(0,r.jsx)(s.td,{children:"SR client firm"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"spdrSource"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"../../../Enums/SpdrSource",children:"enum - SpdrSource"})}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"'None'"}),(0,r.jsx)(s.td,{children:"from original parent order"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"groupingCode"}),(0,r.jsx)(s.td,{children:"CHAR(19)"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"'0000-0000-0000-0000'"}),(0,r.jsx)(s.td,{children:"from original parent order"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"strategy"}),(0,r.jsx)(s.td,{children:"VARCHAR(36)"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"''"}),(0,r.jsx)(s.td,{children:"clientsupplied strategy stringvisible on SpiderRock GUI tools and other order reports"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"userName"}),(0,r.jsx)(s.td,{children:"VARCHAR(24)"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"''"}),(0,r.jsx)(s.td,{children:"name of the user entering the order"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"orderSide"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"../../../Enums/BuySell",children:"enum - BuySell"})}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"'None'"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"orderSize"}),(0,r.jsx)(s.td,{children:"INT"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"0"}),(0,r.jsx)(s.td,{children:"maximum fill size contracts"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"firmType"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"../../../Enums/FirmType",children:"enum - FirmType"})}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"'None'"}),(0,r.jsx)(s.td,{children:"used to override firmType in account config"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"orderCapacity"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"../../../Enums/OrderCapacity",children:"enum - OrderCapacity"})}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"'None'"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"positionType"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"../../../Enums/PositionType",children:"enum - PositionType"})}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"'None'"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"ssaleFlag"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"../../../Enums/ShortSaleFlag",children:"enum - ShortSaleFlag"})}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"'None'"}),(0,r.jsx)(s.td,{children:"used to determine stock autohedge flags"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"locateQuan"}),(0,r.jsx)(s.td,{children:"INT"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"0"}),(0,r.jsx)(s.td,{children:"available locate quantity if selling short"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"locateFirm"}),(0,r.jsx)(s.td,{children:"VARCHAR(6)"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"''"}),(0,r.jsx)(s.td,{children:"firm granting the locate also locate firm used on street FIX orders"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"locatePool"}),(0,r.jsx)(s.td,{children:"VARCHAR(16)"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"''"}),(0,r.jsx)(s.td,{children:"locate pool  firm granting the locate"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"noCrossGroup"}),(0,r.jsx)(s.td,{children:"VARCHAR(16)"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"''"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"exchTraderId"}),(0,r.jsx)(s.td,{children:"VARCHAR(16)"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"''"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"largeTraderId"}),(0,r.jsx)(s.td,{children:"VARCHAR(16)"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"''"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"tradingLocation"}),(0,r.jsx)(s.td,{children:"VARCHAR(16)"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"''"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"hedgeSecKey_at"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"../../../Enums/AssetType",children:"enum - AssetType"})}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"'None'"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"hedgeSecKey_ts"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"../../../Enums/TickerSrc",children:"enum - TickerSrc"})}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"'None'"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"hedgeSecKey_tk"}),(0,r.jsx)(s.td,{children:"VARCHAR(12)"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"''"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"hedgeSecKey_yr"}),(0,r.jsx)(s.td,{children:"SMALLINT UNSIGNED"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"0"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"hedgeSecKey_mn"}),(0,r.jsx)(s.td,{children:"TINYINT UNSIGNED"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"0"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"hedgeSecKey_dy"}),(0,r.jsx)(s.td,{children:"TINYINT UNSIGNED"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"0"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"hedgeSecType"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"../../../Enums/SpdrKeyType",children:"enum - SpdrKeyType"})}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"'None'"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"hedgeUnits"}),(0,r.jsx)(s.td,{children:"FLOAT"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"0"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"userData1"}),(0,r.jsx)(s.td,{children:"TINYTEXT"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"''"}),(0,r.jsx)(s.td,{children:"client supplied data field passes through to parent and child executions and reports as well as FIX drops"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"userData2"}),(0,r.jsx)(s.td,{children:"TINYTEXT"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"''"}),(0,r.jsx)(s.td,{children:"client supplied data field passes through to parent and child executions and reports as well as FIX drops"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"childData"}),(0,r.jsx)(s.td,{children:"TINYTEXT"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"''"}),(0,r.jsx)(s.td,{children:"client supplied data field passes through to down stream child orders"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"timestamp"}),(0,r.jsx)(s.td,{children:"DATETIME(6)"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"'1900-01-01 00:00:00.000000'"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"OrderLegsList"}),(0,r.jsx)(s.td,{children:"JSON"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"'JSON_OBJECT()'"}),(0,r.jsx)(s.td,{})]})]})]}),"\n",(0,r.jsx)(s.h3,{id:"primary-key-definition-unique",children:"PRIMARY KEY DEFINITION (Unique)"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Field"}),(0,r.jsx)(s.th,{children:"Sequence"})]})}),(0,r.jsx)(s.tbody,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"parentNumber"}),(0,r.jsx)(s.td,{children:"1"})]})})]}),"\n",(0,r.jsx)(s.h3,{id:"json-block-orderlegslist",children:"JSON Block (OrderLegsList)"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Field"}),(0,r.jsx)(s.th,{children:"Type"}),(0,r.jsx)(s.th,{children:"Comment"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"ticker"}),(0,r.jsx)(s.td,{children:"TickerKey"}),(0,r.jsx)(s.td,{children:"stock ticker"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"stockSide"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"../../../Enums/stockSide",children:"enum - stockSide"})}),(0,r.jsx)(s.td,{children:"Buy  Sell  None"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"stockShares"}),(0,r.jsx)(s.td,{children:"int"}),(0,r.jsx)(s.td,{children:"number of shares included zero if none"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"stockLegId"}),(0,r.jsx)(s.td,{children:"long"}),(0,r.jsx)(s.td,{children:"SR stock leg ID"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"altStkLegId"}),(0,r.jsx)(s.td,{children:"string"}),(0,r.jsx)(s.td,{children:"client stock leg ID usually from a FIX order"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"ssaleFlag"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"../../../Enums/ssaleFlag",children:"enum - ssaleFlag"})}),(0,r.jsx)(s.td,{children:"stock short sale flag"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"numLegs"}),(0,r.jsx)(s.td,{children:"byte"}),(0,r.jsx)(s.td,{children:"number of valid legs below"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"secKey1"}),(0,r.jsx)(s.td,{children:"OptionKey"}),(0,r.jsx)(s.td,{children:"leg 1"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"secType1"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"../../../Enums/secType1",children:"enum - secType1"})}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"mult1"}),(0,r.jsx)(s.td,{children:"ushort"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"side1"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"../../../Enums/side1",children:"enum - side1"})}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"legId1"}),(0,r.jsx)(s.td,{children:"long"}),(0,r.jsx)(s.td,{children:"SR leg Id"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"altLegId1"}),(0,r.jsx)(s.td,{children:"string"}),(0,r.jsx)(s.td,{children:"client leg Id usually from a FIX order"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"posType1"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"../../../Enums/posType1",children:"enum - posType1"})}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"ssaleFlag1"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"../../../Enums/ssaleFlag1",children:"enum - ssaleFlag1"})}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"secKey2"}),(0,r.jsx)(s.td,{children:"OptionKey"}),(0,r.jsx)(s.td,{children:"leg 2"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"secType2"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"../../../Enums/secType2",children:"enum - secType2"})}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"mult2"}),(0,r.jsx)(s.td,{children:"ushort"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"side2"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"../../../Enums/side2",children:"enum - side2"})}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"legId2"}),(0,r.jsx)(s.td,{children:"long"}),(0,r.jsx)(s.td,{children:"SR leg Id"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"altLegId2"}),(0,r.jsx)(s.td,{children:"string"}),(0,r.jsx)(s.td,{children:"client leg Id usually from a FIX order"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"posType2"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"../../../Enums/posType2",children:"enum - posType2"})}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"ssaleFlag2"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"../../../Enums/ssaleFlag2",children:"enum - ssaleFlag2"})}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"secKey3"}),(0,r.jsx)(s.td,{children:"OptionKey"}),(0,r.jsx)(s.td,{children:"leg 3"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"secType3"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"../../../Enums/secType3",children:"enum - secType3"})}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"mult3"}),(0,r.jsx)(s.td,{children:"ushort"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"side3"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"../../../Enums/side3",children:"enum - side3"})}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"legId3"}),(0,r.jsx)(s.td,{children:"long"}),(0,r.jsx)(s.td,{children:"SR leg Id"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"altLegId3"}),(0,r.jsx)(s.td,{children:"string"}),(0,r.jsx)(s.td,{children:"client leg Id usually from a FIX order"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"posType3"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"../../../Enums/posType3",children:"enum - posType3"})}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"ssaleFlag3"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"../../../Enums/ssaleFlag3",children:"enum - ssaleFlag3"})}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"secKey4"}),(0,r.jsx)(s.td,{children:"OptionKey"}),(0,r.jsx)(s.td,{children:"leg 4"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"secType4"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"../../../Enums/secType4",children:"enum - secType4"})}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"mult4"}),(0,r.jsx)(s.td,{children:"ushort"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"side4"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"../../../Enums/side4",children:"enum - side4"})}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"legId4"}),(0,r.jsx)(s.td,{children:"long"}),(0,r.jsx)(s.td,{children:"SR leg Id"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"altLegId4"}),(0,r.jsx)(s.td,{children:"string"}),(0,r.jsx)(s.td,{children:"client leg Id usually from a FIX order"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"posType4"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"../../../Enums/posType4",children:"enum - posType4"})}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"ssaleFlag4"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"../../../Enums/ssaleFlag4",children:"enum - ssaleFlag4"})}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"secKey5"}),(0,r.jsx)(s.td,{children:"OptionKey"}),(0,r.jsx)(s.td,{children:"leg 5"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"secType5"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"../../../Enums/secType5",children:"enum - secType5"})}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"mult5"}),(0,r.jsx)(s.td,{children:"ushort"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"side5"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"../../../Enums/side5",children:"enum - side5"})}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"legId5"}),(0,r.jsx)(s.td,{children:"long"}),(0,r.jsx)(s.td,{children:"SR leg Id"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"altLegId5"}),(0,r.jsx)(s.td,{children:"string"}),(0,r.jsx)(s.td,{children:"client leg Id usually from a FIX order"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"posType5"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"../../../Enums/posType5",children:"enum - posType5"})}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"ssaleFlag5"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"../../../Enums/ssaleFlag5",children:"enum - ssaleFlag5"})}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"secKey6"}),(0,r.jsx)(s.td,{children:"OptionKey"}),(0,r.jsx)(s.td,{children:"leg 6"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"secType6"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"../../../Enums/secType6",children:"enum - secType6"})}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"mult6"}),(0,r.jsx)(s.td,{children:"ushort"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"side6"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"../../../Enums/side6",children:"enum - side6"})}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"legId6"}),(0,r.jsx)(s.td,{children:"long"}),(0,r.jsx)(s.td,{children:"SR leg Id"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"altLegId6"}),(0,r.jsx)(s.td,{children:"string"}),(0,r.jsx)(s.td,{children:"client leg Id usually from a FIX order"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"posType6"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"../../../Enums/posType6",children:"enum - posType6"})}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"ssaleFlag6"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"../../../Enums/ssaleFlag6",children:"enum - ssaleFlag6"})}),(0,r.jsx)(s.td,{})]})]})]}),"\n",(0,r.jsx)(s.h3,{id:"create-table-query",children:"CREATE TABLE QUERY"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-sql",children:"CREATE TABLE `SRTrade`.`MsgSRParentReviewRequest` (\n    `parentNumber` CHAR(19) NOT NULL DEFAULT '0000-0000-0000-0000' COMMENT 'SPDR order number',\n    `sysEnvironment` ENUM('None','Neptune','Pluto','V7_Stable','V7_Latest','Saturn','Venus','Mars','SysTest','V7_Current') NOT NULL DEFAULT 'None' COMMENT 'original (source) sys environment [Stable, Current, etc]',\n    `runStatus` ENUM('None','Prod','Beta','UAT','SysTest') NOT NULL DEFAULT 'None' COMMENT 'original (source) run status [Prod,Beta]',\n    `parentShape` ENUM('None','Single','Cross','MLeg','MLegCross') NOT NULL DEFAULT 'None' COMMENT 'Parent Shape [Single, Cross, MLeg, MLegCross]',\n    `altOrderId` VARCHAR(24) NOT NULL DEFAULT '' COMMENT 'alternate order ID (usually clOrdId from client)',\n    `altPrevOrderId` VARCHAR(24) NOT NULL DEFAULT '' COMMENT 'alternate prev order ID (usually origClOrdId from client during cxl/replace)',\n    `altAccnt` VARCHAR(32) NOT NULL DEFAULT '' COMMENT 'alternate (client assigned) \"long\" account string (optional) [used to map between client and SR account strings]',\n    `altUserName` VARCHAR(24) NOT NULL DEFAULT '' COMMENT 'alternate (client assigned) user name (optional) [used to map between client and SR account strings]',\n    `secKey_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None' COMMENT 'Composite Security Key',\n    `secKey_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','ESX','ANY','CXE','DXE','NXAM','NXBR','NXDUB','NXLS','NXLDN','NXML','NXMLT','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None' COMMENT 'Composite Security Key',\n    `secKey_tk` VARCHAR(12) NOT NULL DEFAULT '' COMMENT 'Composite Security Key',\n    `secKey_yr` SMALLINT UNSIGNED NOT NULL DEFAULT 0 COMMENT 'Composite Security Key',\n    `secKey_mn` TINYINT UNSIGNED NOT NULL DEFAULT 0 COMMENT 'Composite Security Key',\n    `secKey_dy` TINYINT UNSIGNED NOT NULL DEFAULT 0 COMMENT 'Composite Security Key',\n    `secKey_xx` DOUBLE NOT NULL DEFAULT 0 COMMENT 'Composite Security Key',\n    `secKey_cp` ENUM('Call','Put','Pair') NOT NULL DEFAULT 'Call' COMMENT 'Composite Security Key',\n    `secType` ENUM('None','Stock','Future','Option','MLeg') NOT NULL DEFAULT 'None' COMMENT 'Security Type [Stock, Future, Option]',\n    `securityDesc` TINYTEXT NOT NULL DEFAULT '' COMMENT 'additional security description',\n    `accnt` VARCHAR(16) NOT NULL DEFAULT '' COMMENT 'SR trading account',\n    `clientFirm` VARCHAR(16) NOT NULL DEFAULT '' COMMENT 'SR client firm',\n    `spdrSource` ENUM('None','SpdrTicket','SpdrSingle','SRSE','FIX','HedgeTool','TradeHedge','OpenHedge','AutoHedge','Orphan','RiskManager','OrderManager','ManagedOrder','RFQRespSrvr','Legger','SRSEDrop','FixDrop','TicketDrop','SysTest','RFRResponse','AllocOmni','AllocClient','CertGateway','MLegResponse','LeggerX','DropManager','AutoHedgeSrvr','AuctionStrategySrvr','AllocBlockFace','AllocBlockCust','IceChatGateway','EXS2SRC','MLinkResponse','AutoResponderVD','AutoResponderRC','AutoResponderSN','AutoResponderBX') NOT NULL DEFAULT 'None' COMMENT 'from original parent order',\n    `groupingCode` CHAR(19) NOT NULL DEFAULT '0000-0000-0000-0000' COMMENT 'from original parent order',\n    `strategy` VARCHAR(36) NOT NULL DEFAULT '' COMMENT 'client-supplied strategy string;visible on SpiderRock GUI tools and other order reports.',\n    `userName` VARCHAR(24) NOT NULL DEFAULT '' COMMENT 'name of the user entering the order',\n    `orderSide` ENUM('None','Buy','Sell') NOT NULL DEFAULT 'None',\n    `orderSize` INT NOT NULL DEFAULT 0 COMMENT 'maximum fill size (contracts)',\n    `firmType` ENUM('None','Customer','Firm','MarketMaker','ProCustomer','BrokerDealer','AwayMM','FirmJBO','BrkrDlrCust') NOT NULL DEFAULT 'None' COMMENT 'used to override firmType in account config',\n    `orderCapacity` ENUM('None','Agency','Principal','Individual','Proprietary','AgentOtherMember','RisklessPrincipal') NOT NULL DEFAULT 'None',\n    `positionType` ENUM('None','Opening','Closing','Auto') NOT NULL DEFAULT 'None',\n    `ssaleFlag` ENUM('None','Long','Short','Exempt','Auto','Open','Close','Cover','NA') NOT NULL DEFAULT 'None' COMMENT 'used to determine stock auto-hedge flags',\n    `locateQuan` INT NOT NULL DEFAULT 0 COMMENT 'available locate quantity (if selling short)',\n    `locateFirm` VARCHAR(6) NOT NULL DEFAULT '' COMMENT 'firm granting the locate (also locate firm used on street FIX orders)',\n    `locatePool` VARCHAR(16) NOT NULL DEFAULT '' COMMENT 'locate pool @ firm granting the locate',\n    `noCrossGroup` VARCHAR(16) NOT NULL DEFAULT '',\n    `exchTraderId` VARCHAR(16) NOT NULL DEFAULT '',\n    `largeTraderId` VARCHAR(16) NOT NULL DEFAULT '',\n    `tradingLocation` VARCHAR(16) NOT NULL DEFAULT '',\n    `hedgeSecKey_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None',\n    `hedgeSecKey_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','ESX','ANY','CXE','DXE','NXAM','NXBR','NXDUB','NXLS','NXLDN','NXML','NXMLT','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None',\n    `hedgeSecKey_tk` VARCHAR(12) NOT NULL DEFAULT '',\n    `hedgeSecKey_yr` SMALLINT UNSIGNED NOT NULL DEFAULT 0,\n    `hedgeSecKey_mn` TINYINT UNSIGNED NOT NULL DEFAULT 0,\n    `hedgeSecKey_dy` TINYINT UNSIGNED NOT NULL DEFAULT 0,\n    `hedgeSecType` ENUM('None','Stock','Future','Option','MLeg') NOT NULL DEFAULT 'None',\n    `hedgeUnits` FLOAT NOT NULL DEFAULT 0,\n    `userData1` TINYTEXT NOT NULL DEFAULT '' COMMENT 'client supplied data field; passes through to parent and child executions and reports as well as FIX drops',\n    `userData2` TINYTEXT NOT NULL DEFAULT '' COMMENT 'client supplied data field; passes through to parent and child executions and reports as well as FIX drops',\n    `childData` TINYTEXT NOT NULL DEFAULT '' COMMENT 'client supplied data field; passes through to down stream child orders',\n    `timestamp` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000',\n    `OrderLegsList` JSON NOT NULL DEFAULT JSON_OBJECT() CHECK(JSON_VALID(OrderLegsList)),\n    CONSTRAINT nonnegative_parentNumber CHECK(ASCII(parentNumber) < 56),\n    CONSTRAINT nonnegative_groupingCode CHECK(ASCII(groupingCode) < 56),\n    PRIMARY KEY USING HASH (`parentNumber`)\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='SpdrParentReviewRequest records created when a parent order is submitted with StageType=StageReview.  These records indicate that an external review of the parent order has been requested.';\n\n"})})]})}function j(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(x,{...e})}):x(e)}},28453:(e,s,d)=>{d.d(s,{R:()=>i,x:()=>l});var r=d(96540);const t={},n=r.createContext(t);function i(e){const s=r.useContext(n);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),r.createElement(n.Provider,{value:s},e.children)}}}]);