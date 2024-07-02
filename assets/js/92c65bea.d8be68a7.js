"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[52338],{79256:(e,d,s)=>{s.r(d),s.d(d,{assets:()=>c,contentTitle:()=>l,default:()=>j,frontMatter:()=>n,metadata:()=>i,toc:()=>h});var r=s(74848),t=s(28453);const n={title:"SpdrParentReviewRequest"},l="Schema: SpdrParentReviewRequest (ID: 4195)",i={id:"MessageSchemas/Schema/Topics/parent-review/SpdrParentReviewRequest",title:"SpdrParentReviewRequest",description:"SpdrParentReviewRequest records created when a parent order is submitted with StageType=StageReview.  These records indicate that an external review of the parent order has been requested.",source:"@site/docs/MessageSchemas/Schema/Topics/4195-parent-review/SpdrParentReviewRequest.md",sourceDirName:"MessageSchemas/Schema/Topics/4195-parent-review",slug:"/MessageSchemas/Schema/Topics/parent-review/SpdrParentReviewRequest",permalink:"/docs/MessageSchemas/Schema/Topics/parent-review/SpdrParentReviewRequest",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"SpdrParentReviewRequest"},sidebar:"messageSchemasSidebar",previous:{title:"4195-parent-review",permalink:"/docs/MessageSchemas/Schema/Topics/parent-review/"},next:{title:"SpdrParentReviewResponse",permalink:"/docs/MessageSchemas/Schema/Topics/parent-review/SpdrParentReviewResponse"}},c={},h=[{value:"METADATA",id:"metadata",level:3},{value:"PRIMARY KEY",id:"primary-key",level:3},{value:"BODY",id:"body",level:3},{value:"REPEATING FIELDS",id:"repeating-fields",level:3}];function x(e){const d={a:"a",h1:"h1",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(d.h1,{id:"schema-spdrparentreviewrequest-id-4195",children:["Schema: SpdrParentReviewRequest ",(0,r.jsx)("span",{className:"small-text",children:"(ID: 4195)"})]}),"\n",(0,r.jsx)(d.p,{children:"SpdrParentReviewRequest records created when a parent order is submitted with StageType=StageReview.  These records indicate that an external review of the parent order has been requested."}),"\n",(0,r.jsxs)("div",{className:"single-message-meta",children:[(0,r.jsx)(d.h3,{id:"metadata",children:"METADATA"}),(0,r.jsxs)(d.table,{children:[(0,r.jsx)(d.thead,{children:(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.th,{children:"Attribute"}),(0,r.jsx)(d.th,{children:"Value"})]})}),(0,r.jsxs)(d.tbody,{children:[(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"MLink Token"}),(0,r.jsx)(d.td,{children:"SystemData"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"Topic"}),(0,r.jsx)(d.td,{children:"parent-review"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"SRSE Product"}),(0,r.jsx)(d.td,{children:"SRTrade"})]})]})]})]}),"\n",(0,r.jsxs)("div",{className:"single-message-primarykey",children:[(0,r.jsx)(d.h3,{id:"primary-key",children:"PRIMARY KEY"}),(0,r.jsxs)(d.table,{children:[(0,r.jsx)(d.thead,{children:(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.th,{children:"Field"}),(0,r.jsx)(d.th,{children:"Type"}),(0,r.jsx)(d.th,{children:"Comment"})]})}),(0,r.jsx)(d.tbody,{children:(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"parentNumber"}),(0,r.jsx)(d.td,{children:"long"}),(0,r.jsx)(d.td,{children:"SPDR order number"})]})})]})]}),"\n",(0,r.jsxs)("div",{className:"single-message-body",children:[(0,r.jsx)(d.h3,{id:"body",children:"BODY"}),(0,r.jsxs)(d.table,{children:[(0,r.jsx)(d.thead,{children:(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.th,{children:"Field"}),(0,r.jsx)(d.th,{children:"Type"}),(0,r.jsx)(d.th,{children:"Comment"})]})}),(0,r.jsxs)(d.tbody,{children:[(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"accnt"}),(0,r.jsx)(d.td,{children:"string(16)"}),(0,r.jsx)(d.td,{children:"SR trading account"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"altAccnt"}),(0,r.jsx)(d.td,{children:"string(32)"}),(0,r.jsx)(d.td,{children:'alternate (client assigned) "long" account string (optional) [used to map between client and SR account strings]'})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"altOrderId"}),(0,r.jsx)(d.td,{children:"string(24)"}),(0,r.jsx)(d.td,{children:"alternate order ID (usually clOrdId from client)"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"altPrevOrderId"}),(0,r.jsx)(d.td,{children:"string(24)"}),(0,r.jsx)(d.td,{children:"alternate prev order ID (usually origClOrdId from client during cxl/replace)"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"altUserName"}),(0,r.jsx)(d.td,{children:"string(24)"}),(0,r.jsx)(d.td,{children:"alternate (client assigned) user name (optional) [used to map between client and SR account strings]"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"childData"}),(0,r.jsx)(d.td,{children:"text1"}),(0,r.jsx)(d.td,{children:"client supplied data field; passes through to down stream child orders"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"clientFirm"}),(0,r.jsx)(d.td,{children:"string(16)"}),(0,r.jsx)(d.td,{children:"SR client firm"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"exchTraderId"}),(0,r.jsx)(d.td,{children:"string(16)"}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"firmType"}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.a,{href:"../../../Enums/FirmType",children:"enum : FirmType"})}),(0,r.jsx)(d.td,{children:"used to override firmType in account config"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"groupingCode"}),(0,r.jsx)(d.td,{children:"long"}),(0,r.jsx)(d.td,{children:"from original parent order"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"hedgeSecKey"}),(0,r.jsx)(d.td,{children:"ExpiryKey"}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"hedgeSecType"}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.a,{href:"../../../Enums/SpdrKeyType",children:"enum : SpdrKeyType"})}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"hedgeUnits"}),(0,r.jsx)(d.td,{children:"float"}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"largeTraderId"}),(0,r.jsx)(d.td,{children:"string(16)"}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"locateFirm"}),(0,r.jsx)(d.td,{children:"string(6)"}),(0,r.jsx)(d.td,{children:"firm granting the locate (also locate firm used on street FIX orders)"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"locatePool"}),(0,r.jsx)(d.td,{children:"string(16)"}),(0,r.jsx)(d.td,{children:"locate pool @ firm granting the locate"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"locateQuan"}),(0,r.jsx)(d.td,{children:"int"}),(0,r.jsx)(d.td,{children:"available locate quantity (if selling short)"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"noCrossGroup"}),(0,r.jsx)(d.td,{children:"string(16)"}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"orderCapacity"}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.a,{href:"../../../Enums/OrderCapacity",children:"enum : OrderCapacity"})}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"orderSide"}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.a,{href:"../../../Enums/BuySell",children:"enum : BuySell"})}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"orderSize"}),(0,r.jsx)(d.td,{children:"int"}),(0,r.jsx)(d.td,{children:"maximum fill size (contracts)"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"parentShape"}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.a,{href:"../../../Enums/SpdrOrderShape",children:"enum : SpdrOrderShape"})}),(0,r.jsx)(d.td,{children:"Parent Shape [Single, Cross, MLeg, MLegCross]"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"positionType"}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.a,{href:"../../../Enums/PositionType",children:"enum : PositionType"})}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"runStatus"}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.a,{href:"../../../Enums/RunStatus",children:"enum : RunStatus"})}),(0,r.jsx)(d.td,{children:"original (source) run status [Prod,Beta]"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"secKey"}),(0,r.jsx)(d.td,{children:"OptionKey"}),(0,r.jsx)(d.td,{children:"Composite Security Key"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"secType"}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.a,{href:"../../../Enums/SpdrKeyType",children:"enum : SpdrKeyType"})}),(0,r.jsx)(d.td,{children:"Security Type [Stock, Future, Option]"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"securityDesc"}),(0,r.jsx)(d.td,{children:"text1"}),(0,r.jsx)(d.td,{children:"additional security description"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"spdrSource"}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.a,{href:"../../../Enums/SpdrSource",children:"enum : SpdrSource"})}),(0,r.jsx)(d.td,{children:"from original parent order"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"ssaleFlag"}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.a,{href:"../../../Enums/ShortSaleFlag",children:"enum : ShortSaleFlag"})}),(0,r.jsx)(d.td,{children:"used to determine stock auto-hedge flags"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"strategy"}),(0,r.jsx)(d.td,{children:"string(36)"}),(0,r.jsx)(d.td,{children:"client-supplied strategy string;visible on SpiderRock GUI tools and other order reports."})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"sysEnvironment"}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.a,{href:"../../../Enums/SysEnvironment",children:"enum : SysEnvironment"})}),(0,r.jsx)(d.td,{children:"original (source) sys environment [Stable, Current, etc]"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"timestamp"}),(0,r.jsx)(d.td,{children:"DateTime"}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"tradingLocation"}),(0,r.jsx)(d.td,{children:"string(16)"}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"userData1"}),(0,r.jsx)(d.td,{children:"text1"}),(0,r.jsx)(d.td,{children:"client supplied data field; passes through to parent and child executions and reports as well as FIX drops"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"userData2"}),(0,r.jsx)(d.td,{children:"text1"}),(0,r.jsx)(d.td,{children:"client supplied data field; passes through to parent and child executions and reports as well as FIX drops"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"userName"}),(0,r.jsx)(d.td,{children:"string(24)"}),(0,r.jsx)(d.td,{children:"name of the user entering the order"})]})]})]}),(0,r.jsx)(d.h3,{id:"repeating-fields",children:"REPEATING FIELDS"}),(0,r.jsx)(d.p,{children:"OrderLegs"}),(0,r.jsxs)(d.table,{children:[(0,r.jsx)(d.thead,{children:(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.th,{children:"Field"}),(0,r.jsx)(d.th,{children:"Type"}),(0,r.jsx)(d.th,{children:"Comment"})]})}),(0,r.jsxs)(d.tbody,{children:[(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"altLegId1"}),(0,r.jsx)(d.td,{children:"string(24)"}),(0,r.jsx)(d.td,{children:"client leg Id (usually from a FIX order)"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"altLegId2"}),(0,r.jsx)(d.td,{children:"string(24)"}),(0,r.jsx)(d.td,{children:"client leg Id (usually from a FIX order)"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"altLegId3"}),(0,r.jsx)(d.td,{children:"string(24)"}),(0,r.jsx)(d.td,{children:"client leg Id (usually from a FIX order)"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"altLegId4"}),(0,r.jsx)(d.td,{children:"string(24)"}),(0,r.jsx)(d.td,{children:"client leg Id (usually from a FIX order)"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"altLegId5"}),(0,r.jsx)(d.td,{children:"string(24)"}),(0,r.jsx)(d.td,{children:"client leg Id (usually from a FIX order)"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"altLegId6"}),(0,r.jsx)(d.td,{children:"string(24)"}),(0,r.jsx)(d.td,{children:"client leg Id (usually from a FIX order)"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"altStkLegId"}),(0,r.jsx)(d.td,{children:"string(24)"}),(0,r.jsx)(d.td,{children:"client stock leg ID (usually from a FIX order)"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"legId1"}),(0,r.jsx)(d.td,{children:"long"}),(0,r.jsx)(d.td,{children:"SR leg Id"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"legId2"}),(0,r.jsx)(d.td,{children:"long"}),(0,r.jsx)(d.td,{children:"SR leg Id"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"legId3"}),(0,r.jsx)(d.td,{children:"long"}),(0,r.jsx)(d.td,{children:"SR leg Id"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"legId4"}),(0,r.jsx)(d.td,{children:"long"}),(0,r.jsx)(d.td,{children:"SR leg Id"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"legId5"}),(0,r.jsx)(d.td,{children:"long"}),(0,r.jsx)(d.td,{children:"SR leg Id"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"legId6"}),(0,r.jsx)(d.td,{children:"long"}),(0,r.jsx)(d.td,{children:"SR leg Id"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"mult1"}),(0,r.jsx)(d.td,{children:"ushort"}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"mult2"}),(0,r.jsx)(d.td,{children:"ushort"}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"mult3"}),(0,r.jsx)(d.td,{children:"ushort"}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"mult4"}),(0,r.jsx)(d.td,{children:"ushort"}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"mult5"}),(0,r.jsx)(d.td,{children:"ushort"}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"mult6"}),(0,r.jsx)(d.td,{children:"ushort"}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"numLegs"}),(0,r.jsx)(d.td,{children:"byte"}),(0,r.jsx)(d.td,{children:"number of valid legs below"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"posType1"}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.a,{href:"../../../Enums/PositionType",children:"enum : PositionType"})}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"posType2"}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.a,{href:"../../../Enums/PositionType",children:"enum : PositionType"})}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"posType3"}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.a,{href:"../../../Enums/PositionType",children:"enum : PositionType"})}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"posType4"}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.a,{href:"../../../Enums/PositionType",children:"enum : PositionType"})}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"posType5"}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.a,{href:"../../../Enums/PositionType",children:"enum : PositionType"})}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"posType6"}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.a,{href:"../../../Enums/PositionType",children:"enum : PositionType"})}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"secKey1"}),(0,r.jsx)(d.td,{children:"OptionKey"}),(0,r.jsx)(d.td,{children:"leg #1"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"secKey2"}),(0,r.jsx)(d.td,{children:"OptionKey"}),(0,r.jsx)(d.td,{children:"leg #2"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"secKey3"}),(0,r.jsx)(d.td,{children:"OptionKey"}),(0,r.jsx)(d.td,{children:"leg #3"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"secKey4"}),(0,r.jsx)(d.td,{children:"OptionKey"}),(0,r.jsx)(d.td,{children:"leg #4"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"secKey5"}),(0,r.jsx)(d.td,{children:"OptionKey"}),(0,r.jsx)(d.td,{children:"leg #5"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"secKey6"}),(0,r.jsx)(d.td,{children:"OptionKey"}),(0,r.jsx)(d.td,{children:"leg #6"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"secType1"}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.a,{href:"../../../Enums/SpdrKeyType",children:"enum : SpdrKeyType"})}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"secType2"}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.a,{href:"../../../Enums/SpdrKeyType",children:"enum : SpdrKeyType"})}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"secType3"}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.a,{href:"../../../Enums/SpdrKeyType",children:"enum : SpdrKeyType"})}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"secType4"}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.a,{href:"../../../Enums/SpdrKeyType",children:"enum : SpdrKeyType"})}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"secType5"}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.a,{href:"../../../Enums/SpdrKeyType",children:"enum : SpdrKeyType"})}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"secType6"}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.a,{href:"../../../Enums/SpdrKeyType",children:"enum : SpdrKeyType"})}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"side1"}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.a,{href:"../../../Enums/BuySell",children:"enum : BuySell"})}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"side2"}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.a,{href:"../../../Enums/BuySell",children:"enum : BuySell"})}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"side3"}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.a,{href:"../../../Enums/BuySell",children:"enum : BuySell"})}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"side4"}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.a,{href:"../../../Enums/BuySell",children:"enum : BuySell"})}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"side5"}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.a,{href:"../../../Enums/BuySell",children:"enum : BuySell"})}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"side6"}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.a,{href:"../../../Enums/BuySell",children:"enum : BuySell"})}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"ssaleFlag"}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.a,{href:"../../../Enums/ShortSaleFlag",children:"enum : ShortSaleFlag"})}),(0,r.jsx)(d.td,{children:"stock short sale flag"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"ssaleFlag1"}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.a,{href:"../../../Enums/ShortSaleFlag",children:"enum : ShortSaleFlag"})}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"ssaleFlag2"}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.a,{href:"../../../Enums/ShortSaleFlag",children:"enum : ShortSaleFlag"})}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"ssaleFlag3"}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.a,{href:"../../../Enums/ShortSaleFlag",children:"enum : ShortSaleFlag"})}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"ssaleFlag4"}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.a,{href:"../../../Enums/ShortSaleFlag",children:"enum : ShortSaleFlag"})}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"ssaleFlag5"}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.a,{href:"../../../Enums/ShortSaleFlag",children:"enum : ShortSaleFlag"})}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"ssaleFlag6"}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.a,{href:"../../../Enums/ShortSaleFlag",children:"enum : ShortSaleFlag"})}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"stockLegId"}),(0,r.jsx)(d.td,{children:"long"}),(0,r.jsx)(d.td,{children:"SR stock leg ID"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"stockShares"}),(0,r.jsx)(d.td,{children:"int"}),(0,r.jsx)(d.td,{children:"number of shares included (zero if none)"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"stockSide"}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.a,{href:"../../../Enums/BuySell",children:"enum : BuySell"})}),(0,r.jsx)(d.td,{children:"[Buy"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"ticker"}),(0,r.jsx)(d.td,{children:"TickerKey"}),(0,r.jsx)(d.td,{children:"stock ticker"})]})]})]})]})]})}function j(e={}){const{wrapper:d}={...(0,t.R)(),...e.components};return d?(0,r.jsx)(d,{...e,children:(0,r.jsx)(x,{...e})}):x(e)}},28453:(e,d,s)=>{s.d(d,{R:()=>l,x:()=>i});var r=s(96540);const t={},n=r.createContext(t);function l(e){const d=r.useContext(n);return r.useMemo((function(){return"function"==typeof e?e(d):{...d,...e}}),[d,e])}function i(e){let d;return d=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),r.createElement(n.Provider,{value:d},e.children)}}}]);