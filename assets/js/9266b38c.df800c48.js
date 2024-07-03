"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[44676],{87274:(e,r,d)=>{d.r(r),d.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>j,frontMatter:()=>t,metadata:()=>l,toc:()=>h});var s=d(74848),n=d(28453);const t={title:"SpdrParentReviewResponse"},i="Schema: SpdrParentReviewResponse (ID: 4200)",l={id:"MessageSchemas/Schema/Topics/parent-review/SpdrParentReviewResponse",title:"SpdrParentReviewResponse",description:"SpdrParentReviewResponse records are created when a parent order review request is completed",source:"@site/docs/MessageSchemas/Schema/Topics/4195-parent-review/SpdrParentReviewResponse.md",sourceDirName:"MessageSchemas/Schema/Topics/4195-parent-review",slug:"/MessageSchemas/Schema/Topics/parent-review/SpdrParentReviewResponse",permalink:"/docs/MessageSchemas/Schema/Topics/parent-review/SpdrParentReviewResponse",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"SpdrParentReviewResponse"},sidebar:"messageSchemasSidebar",previous:{title:"SpdrParentReviewRequest",permalink:"/docs/MessageSchemas/Schema/Topics/parent-review/SpdrParentReviewRequest"},next:{title:"4255-probabilities",permalink:"/docs/MessageSchemas/Schema/Topics/probabilities/"}},c={},h=[{value:"METADATA",id:"metadata",level:3},{value:"PRIMARY KEY",id:"primary-key",level:3},{value:"BODY",id:"body",level:3},{value:"REPEATING FIELDS",id:"repeating-fields",level:3}];function x(e){const r={a:"a",h1:"h1",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(r.h1,{id:"schema-spdrparentreviewresponse-id-4200",children:["Schema: SpdrParentReviewResponse ",(0,s.jsx)("span",{className:"small-text",children:"(ID: 4200)"})]}),"\n",(0,s.jsx)(r.p,{children:"SpdrParentReviewResponse records are created when a parent order review request is completed"}),"\n",(0,s.jsxs)("div",{className:"single-message-meta",children:[(0,s.jsx)(r.h3,{id:"metadata",children:"METADATA"}),(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Attribute"}),(0,s.jsx)(r.th,{children:"Value"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Topic"}),(0,s.jsx)(r.td,{children:"4195-parent-review"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"MLink Token"}),(0,s.jsx)(r.td,{children:"SystemData"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"SRSE Product"}),(0,s.jsx)(r.td,{children:"SRTrade"})]})]})]})]}),"\n",(0,s.jsxs)("div",{className:"single-message-primarykey",children:[(0,s.jsx)(r.h3,{id:"primary-key",children:"PRIMARY KEY"}),(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"#"}),(0,s.jsx)(r.th,{children:"Field"}),(0,s.jsx)(r.th,{children:"Type"}),(0,s.jsx)(r.th,{children:"Comment"})]})}),(0,s.jsx)(r.tbody,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"10"}),(0,s.jsx)(r.td,{children:"parentNumber"}),(0,s.jsx)(r.td,{children:"long"}),(0,s.jsx)(r.td,{children:"SPDR order number"})]})})]})]}),"\n",(0,s.jsxs)("div",{className:"single-message-body",children:[(0,s.jsx)(r.h3,{id:"body",children:"BODY"}),(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"#"}),(0,s.jsx)(r.th,{children:"Field"}),(0,s.jsx)(r.th,{children:"Type"}),(0,s.jsx)(r.th,{children:"Comment"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"130"}),(0,s.jsx)(r.td,{children:"accnt"}),(0,s.jsx)(r.td,{children:"string(16)"}),(0,s.jsx)(r.td,{children:"SR trading account"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"115"}),(0,s.jsx)(r.td,{children:"altAccnt"}),(0,s.jsx)(r.td,{children:"string(32)"}),(0,s.jsx)(r.td,{children:'alternate (client assigned) "long" account string (optional) [used to map between client and SR account strings]'})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"109"}),(0,s.jsx)(r.td,{children:"altOrderId"}),(0,s.jsx)(r.td,{children:"string(24)"}),(0,s.jsx)(r.td,{children:"alternate order ID (usually clOrdId from client)"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"112"}),(0,s.jsx)(r.td,{children:"altPrevOrderId"}),(0,s.jsx)(r.td,{children:"string(24)"}),(0,s.jsx)(r.td,{children:"alternate prev order ID (usually origClOrdId from client during cxl/replace)"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"118"}),(0,s.jsx)(r.td,{children:"altUserName"}),(0,s.jsx)(r.td,{children:"string(24)"}),(0,s.jsx)(r.td,{children:"alternate (client assigned) user name (optional) [used to map between client and SR account strings]"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"208"}),(0,s.jsx)(r.td,{children:"childData"}),(0,s.jsx)(r.td,{children:"text1"}),(0,s.jsx)(r.td,{children:"will override value on the original parent order (if != null)"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"142"}),(0,s.jsx)(r.td,{children:"clientClOrdId"}),(0,s.jsx)(r.td,{children:"string(24)"}),(0,s.jsx)(r.td,{children:"client ClOrdId (if handled by ClientGateway)"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"133"}),(0,s.jsx)(r.td,{children:"clientFirm"}),(0,s.jsx)(r.td,{children:"string(16)"}),(0,s.jsx)(r.td,{children:"SR client firm"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"181"}),(0,s.jsx)(r.td,{children:"firmType"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"../../../Enums/FirmType",children:"enum : FirmType"})}),(0,s.jsx)(r.td,{children:"will override firmType on the original parent order (if != None)"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"139"}),(0,s.jsx)(r.td,{children:"groupingCode"}),(0,s.jsx)(r.td,{children:"long"}),(0,s.jsx)(r.td,{children:"from original parent order"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"196"}),(0,s.jsx)(r.td,{children:"locateFirm"}),(0,s.jsx)(r.td,{children:"string(6)"}),(0,s.jsx)(r.td,{children:"locate firm"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"199"}),(0,s.jsx)(r.td,{children:"locatePool"}),(0,s.jsx)(r.td,{children:"string(16)"}),(0,s.jsx)(r.td,{children:"locate pool @ firm granting the locate"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"193"}),(0,s.jsx)(r.td,{children:"locateQuan"}),(0,s.jsx)(r.td,{children:"int"}),(0,s.jsx)(r.td,{children:"locate quantity"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"160"}),(0,s.jsx)(r.td,{children:"orderActiveSize"}),(0,s.jsx)(r.td,{children:"int"}),(0,s.jsx)(r.td,{})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"184"}),(0,s.jsx)(r.td,{children:"orderCapacity"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"../../../Enums/OrderCapacity",children:"enum : OrderCapacity"})}),(0,s.jsx)(r.td,{children:"will override orderCapacity on the original parent order (if != None)"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"154"}),(0,s.jsx)(r.td,{children:"orderSide"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"../../../Enums/BuySell",children:"enum : BuySell"})}),(0,s.jsx)(r.td,{})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"157"}),(0,s.jsx)(r.td,{children:"orderSize"}),(0,s.jsx)(r.td,{children:"int"}),(0,s.jsx)(r.td,{children:"maximum fill size (contracts) [can be less than requested]"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"106"}),(0,s.jsx)(r.td,{children:"parentShape"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"../../../Enums/SpdrOrderShape",children:"enum : SpdrOrderShape"})}),(0,s.jsx)(r.td,{children:"Parent Shape [Single, Cross, MLeg, MLegCross]"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"187"}),(0,s.jsx)(r.td,{children:"positionType"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"../../../Enums/PositionType",children:"enum : PositionType"})}),(0,s.jsx)(r.td,{children:"will override positionType on the original parent order (if != None)"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"178"}),(0,s.jsx)(r.td,{children:"responseCancelClOrdId"}),(0,s.jsx)(r.td,{children:"string(24)"}),(0,s.jsx)(r.td,{children:"review request / response cancel clOrdID"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"172"}),(0,s.jsx)(r.td,{children:"responseClOrdId"}),(0,s.jsx)(r.td,{children:"string(24)"}),(0,s.jsx)(r.td,{children:"review request / response clOrdID (if any)"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"175"}),(0,s.jsx)(r.td,{children:"responseOrigClOrdId"}),(0,s.jsx)(r.td,{children:"string(24)"}),(0,s.jsx)(r.td,{children:"review request / response orig clOrdID"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"169"}),(0,s.jsx)(r.td,{children:"responseSpdrSource"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"../../../Enums/SpdrSource",children:"enum : SpdrSource"})}),(0,s.jsx)(r.td,{children:"source of the response (SRSE, FIX, etc)"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"163"}),(0,s.jsx)(r.td,{children:"reviewResult"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"../../../Enums/ReviewResult",children:"enum : ReviewResult"})}),(0,s.jsx)(r.td,{})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"166"}),(0,s.jsx)(r.td,{children:"reviewText"}),(0,s.jsx)(r.td,{children:"text1"}),(0,s.jsx)(r.td,{children:"review release / reject text (will be showed to the user submitting the parent order)"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"103"}),(0,s.jsx)(r.td,{children:"runStatus"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"../../../Enums/RunStatus",children:"enum : RunStatus"})}),(0,s.jsx)(r.td,{children:"original (source) run status [Prod,Beta]"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"121"}),(0,s.jsx)(r.td,{children:"secKey"}),(0,s.jsx)(r.td,{children:"OptionKey"}),(0,s.jsx)(r.td,{children:"Composite Security Key"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"124"}),(0,s.jsx)(r.td,{children:"secType"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"../../../Enums/SpdrKeyType",children:"enum : SpdrKeyType"})}),(0,s.jsx)(r.td,{children:"Security Type [Stock, Future, Option]"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"127"}),(0,s.jsx)(r.td,{children:"securityDesc"}),(0,s.jsx)(r.td,{children:"text1"}),(0,s.jsx)(r.td,{children:"additional security description"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"136"}),(0,s.jsx)(r.td,{children:"spdrSource"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"../../../Enums/SpdrSource",children:"enum : SpdrSource"})}),(0,s.jsx)(r.td,{children:"from original parent order"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"145"}),(0,s.jsx)(r.td,{children:"srcRoutingCode"}),(0,s.jsx)(r.td,{children:"string(65)"}),(0,s.jsx)(r.td,{children:"RoutingCode (if handled by ClientGateway)"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"190"}),(0,s.jsx)(r.td,{children:"ssaleFlag"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"../../../Enums/ShortSaleFlag",children:"enum : ShortSaleFlag"})}),(0,s.jsx)(r.td,{children:"will override ssaleFlag on the original parent order (if != None)"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"148"}),(0,s.jsx)(r.td,{children:"strategy"}),(0,s.jsx)(r.td,{children:"string(36)"}),(0,s.jsx)(r.td,{children:"client-supplied strategy string;visible on SpiderRock GUI tools and other order reports."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"100"}),(0,s.jsx)(r.td,{children:"sysEnvironment"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"../../../Enums/SysEnvironment",children:"enum : SysEnvironment"})}),(0,s.jsx)(r.td,{children:"original (source) sys environment [Stable, Current, etc]"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"211"}),(0,s.jsx)(r.td,{children:"timestamp"}),(0,s.jsx)(r.td,{children:"DateTime"}),(0,s.jsx)(r.td,{})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"202"}),(0,s.jsx)(r.td,{children:"userData1"}),(0,s.jsx)(r.td,{children:"text1"}),(0,s.jsx)(r.td,{children:"will override value on original parent order (if != null)"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"205"}),(0,s.jsx)(r.td,{children:"userData2"}),(0,s.jsx)(r.td,{children:"text1"}),(0,s.jsx)(r.td,{children:"will override value on the original parent order (if != null)"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"151"}),(0,s.jsx)(r.td,{children:"userName"}),(0,s.jsx)(r.td,{children:"string(24)"}),(0,s.jsx)(r.td,{children:"name of the user entering the order"})]})]})]}),(0,s.jsx)(r.h3,{id:"repeating-fields",children:"REPEATING FIELDS"}),(0,s.jsx)(r.p,{children:"OrderLegs"}),(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Field"}),(0,s.jsx)(r.th,{children:"Type"}),(0,s.jsx)(r.th,{children:"Comment"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"244"}),(0,s.jsx)(r.td,{children:"mult1"}),(0,s.jsx)(r.td,{children:"ushort"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"268"}),(0,s.jsx)(r.td,{children:"mult2"}),(0,s.jsx)(r.td,{children:"ushort"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"292"}),(0,s.jsx)(r.td,{children:"mult3"}),(0,s.jsx)(r.td,{children:"ushort"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"316"}),(0,s.jsx)(r.td,{children:"mult4"}),(0,s.jsx)(r.td,{children:"ushort"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"340"}),(0,s.jsx)(r.td,{children:"mult5"}),(0,s.jsx)(r.td,{children:"ushort"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"364"}),(0,s.jsx)(r.td,{children:"mult6"}),(0,s.jsx)(r.td,{children:"ushort"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"235"}),(0,s.jsx)(r.td,{children:"numLegs"}),(0,s.jsx)(r.td,{children:"byte"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"250"}),(0,s.jsx)(r.td,{children:"posType1"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"../../../Enums/PositionType",children:"enum : PositionType"})})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"274"}),(0,s.jsx)(r.td,{children:"posType2"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"../../../Enums/PositionType",children:"enum : PositionType"})})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"298"}),(0,s.jsx)(r.td,{children:"posType3"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"../../../Enums/PositionType",children:"enum : PositionType"})})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"322"}),(0,s.jsx)(r.td,{children:"posType4"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"../../../Enums/PositionType",children:"enum : PositionType"})})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"346"}),(0,s.jsx)(r.td,{children:"posType5"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"../../../Enums/PositionType",children:"enum : PositionType"})})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"370"}),(0,s.jsx)(r.td,{children:"posType6"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"../../../Enums/PositionType",children:"enum : PositionType"})})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"259"}),(0,s.jsx)(r.td,{children:"reviewLegAltId1"}),(0,s.jsx)(r.td,{children:"string(24)"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"283"}),(0,s.jsx)(r.td,{children:"reviewLegAltId2"}),(0,s.jsx)(r.td,{children:"string(24)"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"307"}),(0,s.jsx)(r.td,{children:"reviewLegAltId3"}),(0,s.jsx)(r.td,{children:"string(24)"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"331"}),(0,s.jsx)(r.td,{children:"reviewLegAltId4"}),(0,s.jsx)(r.td,{children:"string(24)"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"355"}),(0,s.jsx)(r.td,{children:"reviewLegAltId5"}),(0,s.jsx)(r.td,{children:"string(24)"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"379"}),(0,s.jsx)(r.td,{children:"reviewLegAltId6"}),(0,s.jsx)(r.td,{children:"string(24)"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"256"}),(0,s.jsx)(r.td,{children:"reviewLegId1"}),(0,s.jsx)(r.td,{children:"string(24)"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"280"}),(0,s.jsx)(r.td,{children:"reviewLegId2"}),(0,s.jsx)(r.td,{children:"string(24)"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"304"}),(0,s.jsx)(r.td,{children:"reviewLegId3"}),(0,s.jsx)(r.td,{children:"string(24)"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"328"}),(0,s.jsx)(r.td,{children:"reviewLegId4"}),(0,s.jsx)(r.td,{children:"string(24)"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"352"}),(0,s.jsx)(r.td,{children:"reviewLegId5"}),(0,s.jsx)(r.td,{children:"string(24)"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"376"}),(0,s.jsx)(r.td,{children:"reviewLegId6"}),(0,s.jsx)(r.td,{children:"string(24)"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"232"}),(0,s.jsx)(r.td,{children:"reviewStkLegAltId"}),(0,s.jsx)(r.td,{children:"string(24)"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"229"}),(0,s.jsx)(r.td,{children:"reviewStkLegId"}),(0,s.jsx)(r.td,{children:"string(24)"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"238"}),(0,s.jsx)(r.td,{children:"secKey1"}),(0,s.jsx)(r.td,{children:"OptionKey"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"262"}),(0,s.jsx)(r.td,{children:"secKey2"}),(0,s.jsx)(r.td,{children:"OptionKey"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"286"}),(0,s.jsx)(r.td,{children:"secKey3"}),(0,s.jsx)(r.td,{children:"OptionKey"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"310"}),(0,s.jsx)(r.td,{children:"secKey4"}),(0,s.jsx)(r.td,{children:"OptionKey"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"334"}),(0,s.jsx)(r.td,{children:"secKey5"}),(0,s.jsx)(r.td,{children:"OptionKey"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"358"}),(0,s.jsx)(r.td,{children:"secKey6"}),(0,s.jsx)(r.td,{children:"OptionKey"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"241"}),(0,s.jsx)(r.td,{children:"secType1"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"../../../Enums/SpdrKeyType",children:"enum : SpdrKeyType"})})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"265"}),(0,s.jsx)(r.td,{children:"secType2"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"../../../Enums/SpdrKeyType",children:"enum : SpdrKeyType"})})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"289"}),(0,s.jsx)(r.td,{children:"secType3"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"../../../Enums/SpdrKeyType",children:"enum : SpdrKeyType"})})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"313"}),(0,s.jsx)(r.td,{children:"secType4"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"../../../Enums/SpdrKeyType",children:"enum : SpdrKeyType"})})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"337"}),(0,s.jsx)(r.td,{children:"secType5"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"../../../Enums/SpdrKeyType",children:"enum : SpdrKeyType"})})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"361"}),(0,s.jsx)(r.td,{children:"secType6"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"../../../Enums/SpdrKeyType",children:"enum : SpdrKeyType"})})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"247"}),(0,s.jsx)(r.td,{children:"side1"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"../../../Enums/BuySell",children:"enum : BuySell"})})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"271"}),(0,s.jsx)(r.td,{children:"side2"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"../../../Enums/BuySell",children:"enum : BuySell"})})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"295"}),(0,s.jsx)(r.td,{children:"side3"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"../../../Enums/BuySell",children:"enum : BuySell"})})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"319"}),(0,s.jsx)(r.td,{children:"side4"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"../../../Enums/BuySell",children:"enum : BuySell"})})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"343"}),(0,s.jsx)(r.td,{children:"side5"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"../../../Enums/BuySell",children:"enum : BuySell"})})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"367"}),(0,s.jsx)(r.td,{children:"side6"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"../../../Enums/BuySell",children:"enum : BuySell"})})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"226"}),(0,s.jsx)(r.td,{children:"ssaleFlag"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"../../../Enums/ShortSaleFlag",children:"enum : ShortSaleFlag"})})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"253"}),(0,s.jsx)(r.td,{children:"ssaleFlag1"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"../../../Enums/ShortSaleFlag",children:"enum : ShortSaleFlag"})})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"277"}),(0,s.jsx)(r.td,{children:"ssaleFlag2"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"../../../Enums/ShortSaleFlag",children:"enum : ShortSaleFlag"})})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"301"}),(0,s.jsx)(r.td,{children:"ssaleFlag3"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"../../../Enums/ShortSaleFlag",children:"enum : ShortSaleFlag"})})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"325"}),(0,s.jsx)(r.td,{children:"ssaleFlag4"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"../../../Enums/ShortSaleFlag",children:"enum : ShortSaleFlag"})})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"349"}),(0,s.jsx)(r.td,{children:"ssaleFlag5"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"../../../Enums/ShortSaleFlag",children:"enum : ShortSaleFlag"})})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"373"}),(0,s.jsx)(r.td,{children:"ssaleFlag6"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"../../../Enums/ShortSaleFlag",children:"enum : ShortSaleFlag"})})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"223"}),(0,s.jsx)(r.td,{children:"stockShares"}),(0,s.jsx)(r.td,{children:"int"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"220"}),(0,s.jsx)(r.td,{children:"stockSide"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"../../../Enums/BuySell",children:"enum : BuySell"})})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"217"}),(0,s.jsx)(r.td,{children:"ticker"}),(0,s.jsx)(r.td,{children:"TickerKey"})]})]})]})]})]})}function j(e={}){const{wrapper:r}={...(0,n.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(x,{...e})}):x(e)}},28453:(e,r,d)=>{d.d(r,{R:()=>i,x:()=>l});var s=d(96540);const n={},t=s.createContext(n);function i(e){const r=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),s.createElement(t.Provider,{value:r},e.children)}}}]);