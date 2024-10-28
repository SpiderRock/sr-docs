"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[89643],{41765:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>j,frontMatter:()=>t,metadata:()=>l,toc:()=>h});var d=s(74848),n=s(28453);const t={},i=void 0,l={id:"MessageSchemas/Schema/SRSE Products/SRTrade/SpdrParentReviewResponse/SpdrParentReviewResponse",title:"SpdrParentReviewResponse",description:"V8 Message Definiton",source:"@site/versioned_docs/version-8.4.10.4/MessageSchemas/Schema/SRSE Products/SRTrade/SpdrParentReviewResponse/SpdrParentReviewResponse.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRTrade/SpdrParentReviewResponse",slug:"/MessageSchemas/Schema/SRSE Products/SRTrade/SpdrParentReviewResponse/",permalink:"/docs/8.4.10.4/MessageSchemas/Schema/SRSE Products/SRTrade/SpdrParentReviewResponse/",draft:!1,unlisted:!1,tags:[],version:"8.4.10.4",frontMatter:{},sidebar:"messageSchemasSidebar",previous:{title:"SpdrParentReviewRequest",permalink:"/docs/8.4.10.4/MessageSchemas/Schema/SRSE Products/SRTrade/SpdrParentReviewRequest/"},next:{title:"SpdrReleaseWaitTrigger",permalink:"/docs/8.4.10.4/MessageSchemas/Schema/SRSE Products/SRTrade/SpdrReleaseWaitTrigger/"}},c={},h=[{value:"METADATA",id:"metadata",level:3},{value:"Table Definition",id:"table-definition",level:3},{value:"PRIMARY KEY DEFINITION (Unique)",id:"primary-key-definition-unique",level:3},{value:"JSON Block (OrderLegsList)",id:"json-block-orderlegslist",level:3},{value:"CREATE TABLE EXAMPLE QUERY",id:"create-table-example-query",level:3},{value:"SELECT TABLE EXAMPLE QUERY",id:"select-table-example-query",level:3},{value:"Doc Columns Query",id:"doc-columns-query",level:3}];function x(e){const r={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(r.p,{children:(0,d.jsx)(r.a,{href:"../../../Topics/parent-review/SpdrParentReviewResponse",children:"V8 Message Definiton"})}),"\n",(0,d.jsx)(r.p,{children:"SpdrParentReviewResponse records are created when a parent order review request is completed"}),"\n",(0,d.jsx)(r.h3,{id:"metadata",children:"METADATA"}),"\n",(0,d.jsxs)(r.table,{children:[(0,d.jsx)(r.thead,{children:(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.th,{children:"Attribute"}),(0,d.jsx)(r.th,{children:"Value"})]})}),(0,d.jsxs)(r.tbody,{children:[(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"Topic"}),(0,d.jsx)(r.td,{children:"4195-parent-review"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"MLink Token"}),(0,d.jsx)(r.td,{children:"SystemData"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"Product"}),(0,d.jsx)(r.td,{children:"SRTrade"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"accessType"}),(0,d.jsx)(r.td,{children:"SELECT"})]})]})]}),"\n",(0,d.jsx)(r.h3,{id:"table-definition",children:"Table Definition"}),"\n",(0,d.jsxs)(r.table,{children:[(0,d.jsx)(r.thead,{children:(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.th,{children:"Field"}),(0,d.jsx)(r.th,{children:"Type"}),(0,d.jsx)(r.th,{children:"Key"}),(0,d.jsx)(r.th,{children:"Default Value"}),(0,d.jsx)(r.th,{children:"Comment"})]})}),(0,d.jsxs)(r.tbody,{children:[(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"parentNumber"}),(0,d.jsx)(r.td,{children:"CHAR(19)"}),(0,d.jsx)(r.td,{children:"PRI"}),(0,d.jsx)(r.td,{children:"'0000-0000-0000-0000'"}),(0,d.jsx)(r.td,{children:"SPDR order number"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"sysEnvironment"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../../Enums/SysEnvironment",children:"enum - SysEnvironment"})}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"'None'"}),(0,d.jsx)(r.td,{children:"original source sys environment Stable Current etc"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"runStatus"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../../Enums/RunStatus",children:"enum - RunStatus"})}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"'None'"}),(0,d.jsx)(r.td,{children:"original source run status ProdBeta"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"parentShape"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../../Enums/SpdrOrderShape",children:"enum - SpdrOrderShape"})}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"'None'"}),(0,d.jsx)(r.td,{children:"Parent Shape Single Cross MLeg MLegCross"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"altOrderId"}),(0,d.jsx)(r.td,{children:"VARCHAR(24)"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"''"}),(0,d.jsx)(r.td,{children:"alternate order ID usually clOrdId from client"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"altPrevOrderId"}),(0,d.jsx)(r.td,{children:"VARCHAR(24)"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"''"}),(0,d.jsx)(r.td,{children:"alternate prev order ID usually origClOrdId from client during cxlreplace"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"altAccnt"}),(0,d.jsx)(r.td,{children:"VARCHAR(32)"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"''"}),(0,d.jsx)(r.td,{children:"alternate client assigned long account string optional used to map between client and SR account strings"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"altUserName"}),(0,d.jsx)(r.td,{children:"VARCHAR(24)"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"''"}),(0,d.jsx)(r.td,{children:"alternate client assigned user name optional used to map between client and SR account strings"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"secKey_at"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../../Enums/AssetType",children:"enum - AssetType"})}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"'None'"}),(0,d.jsx)(r.td,{children:"Composite Security Key"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"secKey_ts"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../../Enums/TickerSrc",children:"enum - TickerSrc"})}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"'None'"}),(0,d.jsx)(r.td,{children:"Composite Security Key"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"secKey_tk"}),(0,d.jsx)(r.td,{children:"VARCHAR(12)"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"''"}),(0,d.jsx)(r.td,{children:"Composite Security Key"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"secKey_yr"}),(0,d.jsx)(r.td,{children:"SMALLINT UNSIGNED"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"0"}),(0,d.jsx)(r.td,{children:"Composite Security Key"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"secKey_mn"}),(0,d.jsx)(r.td,{children:"TINYINT UNSIGNED"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"0"}),(0,d.jsx)(r.td,{children:"Composite Security Key"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"secKey_dy"}),(0,d.jsx)(r.td,{children:"TINYINT UNSIGNED"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"0"}),(0,d.jsx)(r.td,{children:"Composite Security Key"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"secKey_xx"}),(0,d.jsx)(r.td,{children:"DOUBLE"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"0"}),(0,d.jsx)(r.td,{children:"Composite Security Key"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"secKey_cp"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../../Enums/CallPut",children:"enum - CallPut"})}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"'Call'"}),(0,d.jsx)(r.td,{children:"Composite Security Key"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"secType"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../../Enums/SpdrKeyType",children:"enum - SpdrKeyType"})}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"'None'"}),(0,d.jsx)(r.td,{children:"Security Type Stock Future Option"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"securityDesc"}),(0,d.jsx)(r.td,{children:"TINYTEXT"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"''"}),(0,d.jsx)(r.td,{children:"additional security description"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"accnt"}),(0,d.jsx)(r.td,{children:"VARCHAR(16)"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"''"}),(0,d.jsx)(r.td,{children:"SR trading account"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"clientFirm"}),(0,d.jsx)(r.td,{children:"VARCHAR(16)"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"''"}),(0,d.jsx)(r.td,{children:"SR client firm"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"spdrSource"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../../Enums/SpdrSource",children:"enum - SpdrSource"})}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"'None'"}),(0,d.jsx)(r.td,{children:"from original parent order"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"groupingCode"}),(0,d.jsx)(r.td,{children:"CHAR(19)"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"'0000-0000-0000-0000'"}),(0,d.jsx)(r.td,{children:"from original parent order"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"clientClOrdId"}),(0,d.jsx)(r.td,{children:"VARCHAR(24)"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"''"}),(0,d.jsx)(r.td,{children:"client ClOrdId if handled by ClientGateway"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"srcRoutingCode"}),(0,d.jsx)(r.td,{children:"VARCHAR(65)"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"''"}),(0,d.jsx)(r.td,{children:"RoutingCode if handled by ClientGateway"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"strategy"}),(0,d.jsx)(r.td,{children:"VARCHAR(36)"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"''"}),(0,d.jsx)(r.td,{children:"clientsupplied strategy stringvisible on SpiderRock GUI tools and other order reports"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"userName"}),(0,d.jsx)(r.td,{children:"VARCHAR(24)"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"''"}),(0,d.jsx)(r.td,{children:"name of the user entering the order"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"orderSide"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../../Enums/BuySell",children:"enum - BuySell"})}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"'None'"}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"orderSize"}),(0,d.jsx)(r.td,{children:"INT"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"0"}),(0,d.jsx)(r.td,{children:"maximum fill size contracts can be less than requested"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"orderActiveSize"}),(0,d.jsx)(r.td,{children:"INT"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"0"}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"reviewResult"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../../Enums/ReviewResult",children:"enum - ReviewResult"})}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"'None'"}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"reviewText"}),(0,d.jsx)(r.td,{children:"TINYTEXT"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"''"}),(0,d.jsx)(r.td,{children:"review release  reject text will be showed to the user submitting the parent order"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"responseSpdrSource"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../../Enums/SpdrSource",children:"enum - SpdrSource"})}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"'None'"}),(0,d.jsx)(r.td,{children:"source of the response SRSE FIX etc"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"responseClOrdId"}),(0,d.jsx)(r.td,{children:"VARCHAR(24)"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"''"}),(0,d.jsx)(r.td,{children:"review request  response clOrdID if any"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"responseOrigClOrdId"}),(0,d.jsx)(r.td,{children:"VARCHAR(24)"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"''"}),(0,d.jsx)(r.td,{children:"review request  response orig clOrdID"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"responseCancelClOrdId"}),(0,d.jsx)(r.td,{children:"VARCHAR(24)"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"''"}),(0,d.jsx)(r.td,{children:"review request  response cancel clOrdID"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"firmType"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../../Enums/FirmType",children:"enum - FirmType"})}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"'None'"}),(0,d.jsx)(r.td,{children:"will override firmType on the original parent order if  None"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"orderCapacity"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../../Enums/OrderCapacity",children:"enum - OrderCapacity"})}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"'None'"}),(0,d.jsx)(r.td,{children:"will override orderCapacity on the original parent order if  None"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"positionType"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../../Enums/PositionType",children:"enum - PositionType"})}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"'None'"}),(0,d.jsx)(r.td,{children:"will override positionType on the original parent order if  None"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"ssaleFlag"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../../Enums/ShortSaleFlag",children:"enum - ShortSaleFlag"})}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"'None'"}),(0,d.jsx)(r.td,{children:"will override ssaleFlag on the original parent order if  None"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"locateQuan"}),(0,d.jsx)(r.td,{children:"INT"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"0"}),(0,d.jsx)(r.td,{children:"locate quantity"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"locateFirm"}),(0,d.jsx)(r.td,{children:"VARCHAR(6)"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"''"}),(0,d.jsx)(r.td,{children:"locate firm"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"locatePool"}),(0,d.jsx)(r.td,{children:"VARCHAR(16)"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"''"}),(0,d.jsx)(r.td,{children:"locate pool  firm granting the locate"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"userData1"}),(0,d.jsx)(r.td,{children:"TINYTEXT"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"''"}),(0,d.jsx)(r.td,{children:"will override value on original parent order if  null"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"userData2"}),(0,d.jsx)(r.td,{children:"TINYTEXT"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"''"}),(0,d.jsx)(r.td,{children:"will override value on the original parent order if  null"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"childData"}),(0,d.jsx)(r.td,{children:"TINYTEXT"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"''"}),(0,d.jsx)(r.td,{children:"will override value on the original parent order if  null"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"timestamp"}),(0,d.jsx)(r.td,{children:"DATETIME(6)"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"'1900-01-01 00:00:00.000000'"}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"OrderLegsList"}),(0,d.jsx)(r.td,{children:"JSON"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"'JSON_OBJECT()'"}),(0,d.jsx)(r.td,{})]})]})]}),"\n",(0,d.jsx)(r.h3,{id:"primary-key-definition-unique",children:"PRIMARY KEY DEFINITION (Unique)"}),"\n",(0,d.jsxs)(r.table,{children:[(0,d.jsx)(r.thead,{children:(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.th,{children:"Field"}),(0,d.jsx)(r.th,{children:"Sequence"})]})}),(0,d.jsx)(r.tbody,{children:(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"parentNumber"}),(0,d.jsx)(r.td,{children:"1"})]})})]}),"\n",(0,d.jsx)(r.h3,{id:"json-block-orderlegslist",children:"JSON Block (OrderLegsList)"}),"\n",(0,d.jsxs)(r.table,{children:[(0,d.jsx)(r.thead,{children:(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.th,{children:"Field"}),(0,d.jsx)(r.th,{children:"Type"}),(0,d.jsx)(r.th,{children:"Comment"})]})}),(0,d.jsxs)(r.tbody,{children:[(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"ticker"}),(0,d.jsx)(r.td,{children:"TickerKey"}),(0,d.jsx)(r.td,{children:"stock ticker"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"stockSide"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../../Enums/stockSide",children:"enum - stockSide"})}),(0,d.jsx)(r.td,{children:"Buy  Sell  None"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"stockShares"}),(0,d.jsx)(r.td,{children:"int"}),(0,d.jsx)(r.td,{children:"number of shares included zero if none"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"ssaleFlag"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../../Enums/ssaleFlag",children:"enum - ssaleFlag"})}),(0,d.jsx)(r.td,{children:"will override value on the original parent order if  None"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"reviewStkLegId"}),(0,d.jsx)(r.td,{children:"string"}),(0,d.jsx)(r.td,{children:"client review stock leg Id"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"reviewStkLegAltId"}),(0,d.jsx)(r.td,{children:"string"}),(0,d.jsx)(r.td,{children:"client review stock leg alt Id"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"numLegs"}),(0,d.jsx)(r.td,{children:"byte"}),(0,d.jsx)(r.td,{children:"number of valid legs below"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"secKey1"}),(0,d.jsx)(r.td,{children:"OptionKey"}),(0,d.jsx)(r.td,{children:"leg 1"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"secType1"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../../Enums/secType1",children:"enum - secType1"})}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"mult1"}),(0,d.jsx)(r.td,{children:"ushort"}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"side1"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../../Enums/side1",children:"enum - side1"})}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"posType1"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../../Enums/posType1",children:"enum - posType1"})}),(0,d.jsx)(r.td,{children:"will override value on the original parent order if  None"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"ssaleFlag1"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../../Enums/ssaleFlag1",children:"enum - ssaleFlag1"})}),(0,d.jsx)(r.td,{children:"will override value on the original parent order if  None"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"reviewLegId1"}),(0,d.jsx)(r.td,{children:"string"}),(0,d.jsx)(r.td,{children:"client review leg 1 Id"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"reviewLegAltId1"}),(0,d.jsx)(r.td,{children:"string"}),(0,d.jsx)(r.td,{children:"client review leg 1 alt Id"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"secKey2"}),(0,d.jsx)(r.td,{children:"OptionKey"}),(0,d.jsx)(r.td,{children:"leg 2"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"secType2"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../../Enums/secType2",children:"enum - secType2"})}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"mult2"}),(0,d.jsx)(r.td,{children:"ushort"}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"side2"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../../Enums/side2",children:"enum - side2"})}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"posType2"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../../Enums/posType2",children:"enum - posType2"})}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"ssaleFlag2"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../../Enums/ssaleFlag2",children:"enum - ssaleFlag2"})}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"reviewLegId2"}),(0,d.jsx)(r.td,{children:"string"}),(0,d.jsx)(r.td,{children:"client review leg 2 Id"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"reviewLegAltId2"}),(0,d.jsx)(r.td,{children:"string"}),(0,d.jsx)(r.td,{children:"client review leg 2 alt Id"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"secKey3"}),(0,d.jsx)(r.td,{children:"OptionKey"}),(0,d.jsx)(r.td,{children:"leg 3"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"secType3"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../../Enums/secType3",children:"enum - secType3"})}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"mult3"}),(0,d.jsx)(r.td,{children:"ushort"}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"side3"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../../Enums/side3",children:"enum - side3"})}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"posType3"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../../Enums/posType3",children:"enum - posType3"})}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"ssaleFlag3"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../../Enums/ssaleFlag3",children:"enum - ssaleFlag3"})}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"reviewLegId3"}),(0,d.jsx)(r.td,{children:"string"}),(0,d.jsx)(r.td,{children:"client review leg 3 Id"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"reviewLegAltId3"}),(0,d.jsx)(r.td,{children:"string"}),(0,d.jsx)(r.td,{children:"client review leg 3 alt Id"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"secKey4"}),(0,d.jsx)(r.td,{children:"OptionKey"}),(0,d.jsx)(r.td,{children:"leg 4"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"secType4"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../../Enums/secType4",children:"enum - secType4"})}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"mult4"}),(0,d.jsx)(r.td,{children:"ushort"}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"side4"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../../Enums/side4",children:"enum - side4"})}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"posType4"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../../Enums/posType4",children:"enum - posType4"})}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"ssaleFlag4"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../../Enums/ssaleFlag4",children:"enum - ssaleFlag4"})}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"reviewLegId4"}),(0,d.jsx)(r.td,{children:"string"}),(0,d.jsx)(r.td,{children:"client review leg 4 Id"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"reviewLegAltId4"}),(0,d.jsx)(r.td,{children:"string"}),(0,d.jsx)(r.td,{children:"client review leg 4 alt Id"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"secKey5"}),(0,d.jsx)(r.td,{children:"OptionKey"}),(0,d.jsx)(r.td,{children:"leg 5"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"secType5"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../../Enums/secType5",children:"enum - secType5"})}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"mult5"}),(0,d.jsx)(r.td,{children:"ushort"}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"side5"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../../Enums/side5",children:"enum - side5"})}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"posType5"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../../Enums/posType5",children:"enum - posType5"})}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"ssaleFlag5"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../../Enums/ssaleFlag5",children:"enum - ssaleFlag5"})}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"reviewLegId5"}),(0,d.jsx)(r.td,{children:"string"}),(0,d.jsx)(r.td,{children:"client review leg 5 Id"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"reviewLegAltId5"}),(0,d.jsx)(r.td,{children:"string"}),(0,d.jsx)(r.td,{children:"client review leg 5 alt Id"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"secKey6"}),(0,d.jsx)(r.td,{children:"OptionKey"}),(0,d.jsx)(r.td,{children:"leg 6"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"secType6"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../../Enums/secType6",children:"enum - secType6"})}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"mult6"}),(0,d.jsx)(r.td,{children:"ushort"}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"side6"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../../Enums/side6",children:"enum - side6"})}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"posType6"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../../Enums/posType6",children:"enum - posType6"})}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"ssaleFlag6"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"../../../Enums/ssaleFlag6",children:"enum - ssaleFlag6"})}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"reviewLegId6"}),(0,d.jsx)(r.td,{children:"string"}),(0,d.jsx)(r.td,{children:"client review leg 6 Id"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"reviewLegAltId6"}),(0,d.jsx)(r.td,{children:"string"}),(0,d.jsx)(r.td,{children:"client review leg 6 alt Id"})]})]})]}),"\n",(0,d.jsx)(r.h3,{id:"create-table-example-query",children:"CREATE TABLE EXAMPLE QUERY"}),"\n",(0,d.jsx)(r.pre,{children:(0,d.jsx)(r.code,{className:"language-sql",children:"CREATE TABLE `SRTrade`.`MsgSRParentReviewResponse` (\n    `parentNumber` CHAR(19) NOT NULL DEFAULT '0000-0000-0000-0000' COMMENT 'SPDR order number',\n    `sysEnvironment` ENUM('None','Neptune','Pluto','V7_Stable','V7_Latest','Saturn','Venus','Mars','SysTest','V7_Current') NOT NULL DEFAULT 'None' COMMENT 'original (source) sys environment [Stable, Current, etc]',\n    `runStatus` ENUM('None','Prod','Beta','UAT','SysTest') NOT NULL DEFAULT 'None' COMMENT 'original (source) run status [Prod,Beta]',\n    `parentShape` ENUM('None','Single','Cross','MLeg','MLegCross') NOT NULL DEFAULT 'None' COMMENT 'Parent Shape [Single, Cross, MLeg, MLegCross]',\n    `altOrderId` VARCHAR(24) NOT NULL DEFAULT '' COMMENT 'alternate order ID (usually clOrdId from client)',\n    `altPrevOrderId` VARCHAR(24) NOT NULL DEFAULT '' COMMENT 'alternate prev order ID (usually origClOrdId from client during cxl/replace)',\n    `altAccnt` VARCHAR(32) NOT NULL DEFAULT '' COMMENT 'alternate (client assigned) \"long\" account string (optional) [used to map between client and SR account strings]',\n    `altUserName` VARCHAR(24) NOT NULL DEFAULT '' COMMENT 'alternate (client assigned) user name (optional) [used to map between client and SR account strings]',\n    `secKey_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None' COMMENT 'Composite Security Key',\n    `secKey_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','ESX','ANY','CXE','DXE','NXAM','NXBR','NXDUB','NXLS','NXLDN','NXML','NXMLT','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None' COMMENT 'Composite Security Key',\n    `secKey_tk` VARCHAR(12) NOT NULL DEFAULT '' COMMENT 'Composite Security Key',\n    `secKey_yr` SMALLINT UNSIGNED NOT NULL DEFAULT 0 COMMENT 'Composite Security Key',\n    `secKey_mn` TINYINT UNSIGNED NOT NULL DEFAULT 0 COMMENT 'Composite Security Key',\n    `secKey_dy` TINYINT UNSIGNED NOT NULL DEFAULT 0 COMMENT 'Composite Security Key',\n    `secKey_xx` DOUBLE NOT NULL DEFAULT 0 COMMENT 'Composite Security Key',\n    `secKey_cp` ENUM('Call','Put','Pair') NOT NULL DEFAULT 'Call' COMMENT 'Composite Security Key',\n    `secType` ENUM('None','Stock','Future','Option','MLeg') NOT NULL DEFAULT 'None' COMMENT 'Security Type [Stock, Future, Option]',\n    `securityDesc` TINYTEXT NOT NULL DEFAULT '' COMMENT 'additional security description',\n    `accnt` VARCHAR(16) NOT NULL DEFAULT '' COMMENT 'SR trading account',\n    `clientFirm` VARCHAR(16) NOT NULL DEFAULT '' COMMENT 'SR client firm',\n    `spdrSource` ENUM('None','SpdrTicket','SpdrSingle','SRSE','FIX','HedgeTool','TradeHedge','OpenHedge','AutoHedge','Orphan','RiskManager','OrderManager','ManagedOrder','RFQRespSrvr','Legger','SRSEDrop','FixDrop','TicketDrop','SysTest','RFRResponse','AllocOmni','AllocClient','CertGateway','MLegResponse','LeggerX','DropManager','AutoHedgeSrvr','AuctionStrategySrvr','AllocBlockFace','AllocBlockCust','IceChatGateway','EXS2SRC','MLinkResponse','AutoResponderVD','AutoResponderRC','AutoResponderSN','AutoResponderBX','MLink') NOT NULL DEFAULT 'None' COMMENT 'from original parent order',\n    `groupingCode` CHAR(19) NOT NULL DEFAULT '0000-0000-0000-0000' COMMENT 'from original parent order',\n    `clientClOrdId` VARCHAR(24) NOT NULL DEFAULT '' COMMENT 'client ClOrdId (if handled by ClientGateway)',\n    `srcRoutingCode` VARCHAR(65) NOT NULL DEFAULT '' COMMENT 'RoutingCode (if handled by ClientGateway)',\n    `strategy` VARCHAR(36) NOT NULL DEFAULT '' COMMENT 'client-supplied strategy string;visible on SpiderRock GUI tools and other order reports.',\n    `userName` VARCHAR(24) NOT NULL DEFAULT '' COMMENT 'name of the user entering the order',\n    `orderSide` ENUM('None','Buy','Sell') NOT NULL DEFAULT 'None',\n    `orderSize` INT NOT NULL DEFAULT 0 COMMENT 'maximum fill size (contracts) [can be less than requested]',\n    `orderActiveSize` INT NOT NULL DEFAULT 0,\n    `reviewResult` ENUM('None','Release','RejectParent','CancelParent','CancelReview','CancelReplaceReview') NOT NULL DEFAULT 'None',\n    `reviewText` TINYTEXT NOT NULL DEFAULT '' COMMENT 'review release / reject text (will be showed to the user submitting the parent order)',\n    `responseSpdrSource` ENUM('None','SpdrTicket','SpdrSingle','SRSE','FIX','HedgeTool','TradeHedge','OpenHedge','AutoHedge','Orphan','RiskManager','OrderManager','ManagedOrder','RFQRespSrvr','Legger','SRSEDrop','FixDrop','TicketDrop','SysTest','RFRResponse','AllocOmni','AllocClient','CertGateway','MLegResponse','LeggerX','DropManager','AutoHedgeSrvr','AuctionStrategySrvr','AllocBlockFace','AllocBlockCust','IceChatGateway','EXS2SRC','MLinkResponse','AutoResponderVD','AutoResponderRC','AutoResponderSN','AutoResponderBX','MLink') NOT NULL DEFAULT 'None' COMMENT 'source of the response (SRSE, FIX, etc)',\n    `responseClOrdId` VARCHAR(24) NOT NULL DEFAULT '' COMMENT 'review request / response clOrdID (if any)',\n    `responseOrigClOrdId` VARCHAR(24) NOT NULL DEFAULT '' COMMENT 'review request / response orig clOrdID',\n    `responseCancelClOrdId` VARCHAR(24) NOT NULL DEFAULT '' COMMENT 'review request / response cancel clOrdID',\n    `firmType` ENUM('None','Customer','Firm','MarketMaker','ProCustomer','BrokerDealer','AwayMM','FirmJBO','BrkrDlrCust') NOT NULL DEFAULT 'None' COMMENT 'will override firmType on the original parent order (if != None)',\n    `orderCapacity` ENUM('None','Agency','Principal','Individual','Proprietary','AgentOtherMember','RisklessPrincipal') NOT NULL DEFAULT 'None' COMMENT 'will override orderCapacity on the original parent order (if != None)',\n    `positionType` ENUM('None','Opening','Closing','Auto') NOT NULL DEFAULT 'None' COMMENT 'will override positionType on the original parent order (if != None)',\n    `ssaleFlag` ENUM('None','Long','Short','Exempt','Auto','Open','Close','Cover','NA') NOT NULL DEFAULT 'None' COMMENT 'will override ssaleFlag on the original parent order (if != None)',\n    `locateQuan` INT NOT NULL DEFAULT 0 COMMENT 'locate quantity',\n    `locateFirm` VARCHAR(6) NOT NULL DEFAULT '' COMMENT 'locate firm',\n    `locatePool` VARCHAR(16) NOT NULL DEFAULT '' COMMENT 'locate pool @ firm granting the locate',\n    `userData1` TINYTEXT NOT NULL DEFAULT '' COMMENT 'will override value on original parent order (if != null)',\n    `userData2` TINYTEXT NOT NULL DEFAULT '' COMMENT 'will override value on the original parent order (if != null)',\n    `childData` TINYTEXT NOT NULL DEFAULT '' COMMENT 'will override value on the original parent order (if != null)',\n    `timestamp` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000',\n    `OrderLegsList` JSON NOT NULL DEFAULT JSON_OBJECT() CHECK(JSON_VALID(OrderLegsList)),\n    CONSTRAINT nonnegative_parentNumber CHECK(ASCII(parentNumber) < 56),\n    CONSTRAINT nonnegative_groupingCode CHECK(ASCII(groupingCode) < 56),\n    PRIMARY KEY USING HASH (`parentNumber`)\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='SpdrParentReviewResponse records are created when a parent order review request is completed';\n\n"})}),"\n",(0,d.jsx)(r.h3,{id:"select-table-example-query",children:"SELECT TABLE EXAMPLE QUERY"}),"\n",(0,d.jsx)(r.pre,{children:(0,d.jsx)(r.code,{className:"language-sql",children:"SELECT\n    `parentNumber`,\n    `sysEnvironment`,\n    `runStatus`,\n    `parentShape`,\n    `altOrderId`,\n    `altPrevOrderId`,\n    `altAccnt`,\n    `altUserName`,\n    `secKey_at`,\n    `secKey_ts`,\n    `secKey_tk`,\n    `secKey_yr`,\n    `secKey_mn`,\n    `secKey_dy`,\n    `secKey_xx`,\n    `secKey_cp`,\n    `secType`,\n    `securityDesc`,\n    `accnt`,\n    `clientFirm`,\n    `spdrSource`,\n    `groupingCode`,\n    `clientClOrdId`,\n    `srcRoutingCode`,\n    `strategy`,\n    `userName`,\n    `orderSide`,\n    `orderSize`,\n    `orderActiveSize`,\n    `reviewResult`,\n    `reviewText`,\n    `responseSpdrSource`,\n    `responseClOrdId`,\n    `responseOrigClOrdId`,\n    `responseCancelClOrdId`,\n    `firmType`,\n    `orderCapacity`,\n    `positionType`,\n    `ssaleFlag`,\n    `locateQuan`,\n    `locateFirm`,\n    `locatePool`,\n    `userData1`,\n    `userData2`,\n    `childData`,\n    `timestamp`,\n    `OrderLegsList`\nFROM `SRTrade`.`MsgSRParentReviewResponse`\nWHERE \n    /* Replace with a CHAR(19) */\n    `parentNumber` = 'Example_parentNumber';\n"})}),"\n",(0,d.jsx)(r.h3,{id:"doc-columns-query",children:"Doc Columns Query"}),"\n",(0,d.jsx)(r.pre,{children:(0,d.jsx)(r.code,{className:"language-sql",children:"SELECT * FROM SRTrade.doccolumns WHERE TABLE_NAME='SpdrParentReviewResponse' ORDER BY ordinal_position ASC;\n"})})]})}function j(e={}){const{wrapper:r}={...(0,n.R)(),...e.components};return r?(0,d.jsx)(r,{...e,children:(0,d.jsx)(x,{...e})}):x(e)}},28453:(e,r,s)=>{s.d(r,{R:()=>i,x:()=>l});var d=s(96540);const n={},t=d.createContext(n);function i(e){const r=d.useContext(t);return d.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),d.createElement(t.Provider,{value:r},e.children)}}}]);