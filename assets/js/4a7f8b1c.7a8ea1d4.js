"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[86823],{61043:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>c,contentTitle:()=>i,default:()=>x,frontMatter:()=>r,metadata:()=>l,toc:()=>h});var n=t(74848),d=t(28453);const r={},i=void 0,l={id:"MessageSchemas/Schema/SRSE Products/SRTrade/SRAllocationNotice/SRAllocationNotice",title:"SRAllocationNotice",description:"V8 Message Definiton",source:"@site/versioned_docs/version-8.5.3.3/MessageSchemas/Schema/SRSE Products/SRTrade/SRAllocationNotice/SRAllocationNotice.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRTrade/SRAllocationNotice",slug:"/MessageSchemas/Schema/SRSE Products/SRTrade/SRAllocationNotice/",permalink:"/docs/8.5.3.3/MessageSchemas/Schema/SRSE Products/SRTrade/SRAllocationNotice/",draft:!1,unlisted:!1,tags:[],version:"8.5.3.3",frontMatter:{},sidebar:"messageSchemasSidebar",previous:{title:"SRAccntCancel",permalink:"/docs/8.5.3.3/MessageSchemas/Schema/SRSE Products/SRTrade/SRAccntCancel/"},next:{title:"SRAllocationNoticeStatus",permalink:"/docs/8.5.3.3/MessageSchemas/Schema/SRSE Products/SRTrade/SRAllocationNoticeStatus/"}},c={},h=[{value:"METADATA",id:"metadata",level:3},{value:"Table Definition",id:"table-definition",level:3},{value:"PRIMARY KEY DEFINITION (Unique)",id:"primary-key-definition-unique",level:3},{value:"JSON Block (ChildOrdersList)",id:"json-block-childorderslist",level:3},{value:"JSON Block (FragmentsList)",id:"json-block-fragmentslist",level:3},{value:"JSON Block (LegPosTypeList)",id:"json-block-legpostypelist",level:3},{value:"JSON Block (OrderLegsList)",id:"json-block-orderlegslist",level:3},{value:"CREATE TABLE EXAMPLE QUERY",id:"create-table-example-query",level:3},{value:"SELECT TABLE EXAMPLE QUERY",id:"select-table-example-query",level:3},{value:"Doc Columns Query",id:"doc-columns-query",level:3}];function o(e){const s={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"../../../Topics/order-allocation/SpdrAllocationNotice",children:"V8 Message Definiton"})}),"\n",(0,n.jsx)(s.h3,{id:"metadata",children:"METADATA"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Attribute"}),(0,n.jsx)(s.th,{children:"Value"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Topic"}),(0,n.jsx)(s.td,{children:"3695-order-allocation"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"MLink Token"}),(0,n.jsx)(s.td,{children:"ClientTrading"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Product"}),(0,n.jsx)(s.td,{children:"SRTrade"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"accessType"}),(0,n.jsx)(s.td,{children:"SELECT"})]})]})]}),"\n",(0,n.jsx)(s.h3,{id:"table-definition",children:"Table Definition"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Field"}),(0,n.jsx)(s.th,{children:"Type"}),(0,n.jsx)(s.th,{children:"Key"}),(0,n.jsx)(s.th,{children:"Default Value"}),(0,n.jsx)(s.th,{children:"Comment"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"allocNumber"}),(0,n.jsx)(s.td,{children:"BIGINT"}),(0,n.jsx)(s.td,{children:"PRI"}),(0,n.jsx)(s.td,{children:"0"}),(0,n.jsx)(s.td,{children:"unique number assigned to this allocation notice"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"tradeDate"}),(0,n.jsx)(s.td,{children:"DATE"}),(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{children:"'1900-01-01'"}),(0,n.jsx)(s.td,{})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"clientFirm"}),(0,n.jsx)(s.td,{children:"VARCHAR(16)"}),(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{children:"''"}),(0,n.jsx)(s.td,{})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"omniAccnt"}),(0,n.jsx)(s.td,{children:"VARCHAR(16)"}),(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{children:"''"}),(0,n.jsx)(s.td,{children:"omnibus accnt SR accnt"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"secKey_at"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"../../../Enums/AssetType",children:"enum - AssetType"})}),(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{children:"'None'"}),(0,n.jsx)(s.td,{children:"security key stock future or option"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"secKey_ts"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"../../../Enums/TickerSrc",children:"enum - TickerSrc"})}),(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{children:"'None'"}),(0,n.jsx)(s.td,{children:"security key stock future or option"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"secKey_tk"}),(0,n.jsx)(s.td,{children:"VARCHAR(12)"}),(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{children:"''"}),(0,n.jsx)(s.td,{children:"security key stock future or option"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"secKey_yr"}),(0,n.jsx)(s.td,{children:"SMALLINT UNSIGNED"}),(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{children:"0"}),(0,n.jsx)(s.td,{children:"security key stock future or option"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"secKey_mn"}),(0,n.jsx)(s.td,{children:"TINYINT UNSIGNED"}),(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{children:"0"}),(0,n.jsx)(s.td,{children:"security key stock future or option"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"secKey_dy"}),(0,n.jsx)(s.td,{children:"TINYINT UNSIGNED"}),(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{children:"0"}),(0,n.jsx)(s.td,{children:"security key stock future or option"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"secKey_xx"}),(0,n.jsx)(s.td,{children:"DOUBLE"}),(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{children:"0"}),(0,n.jsx)(s.td,{children:"security key stock future or option"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"secKey_cp"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"../../../Enums/CallPut",children:"enum - CallPut"})}),(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{children:"'Call'"}),(0,n.jsx)(s.td,{children:"security key stock future or option"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"secType"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"../../../Enums/SpdrKeyType",children:"enum - SpdrKeyType"})}),(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{children:"'None'"}),(0,n.jsx)(s.td,{children:"security type"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"mlegLegKey"}),(0,n.jsx)(s.td,{children:"TINYTEXT"}),(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{children:"''"}),(0,n.jsx)(s.td,{children:"secKeyStringKeylegRatiosidepositionEffect secKeyStringKeylegRatiosidepositionEffect"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"orderSide"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"../../../Enums/BuySell",children:"enum - BuySell"})}),(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{children:"'None'"}),(0,n.jsx)(s.td,{children:"order side always buy for MLEG orders"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"ssaleFlag"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"../../../Enums/ShortSaleFlag",children:"enum - ShortSaleFlag"})}),(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{children:"'None'"}),(0,n.jsx)(s.td,{children:"ssale flag None if not stock"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"positionType"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"../../../Enums/PositionType",children:"enum - PositionType"})}),(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{children:"'None'"}),(0,n.jsx)(s.td,{children:"positionType None if not equity option"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"noticeState"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"../../../Enums/NoticeState",children:"enum - NoticeState"})}),(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{children:"'None'"}),(0,n.jsx)(s.td,{children:"indicates that this noticed is ready to forward to a custodian"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"noticeText"}),(0,n.jsx)(s.td,{children:"TINYTEXT"}),(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{children:"''"}),(0,n.jsx)(s.td,{})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"allocMethod"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"../../../Enums/AllocMethod",children:"enum - AllocMethod"})}),(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{children:"'None'"}),(0,n.jsx)(s.td,{children:"method for delivery of the allocation instruction to the broker"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"execBrkrCode"}),(0,n.jsx)(s.td,{children:"VARCHAR(16)"}),(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{children:"''"}),(0,n.jsx)(s.td,{children:"used for FIX routing can be null"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"allocExDest"}),(0,n.jsx)(s.td,{children:"VARCHAR(16)"}),(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{children:"''"}),(0,n.jsx)(s.td,{children:"used for FIX routing"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"orderShape"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"../../../Enums/SpdrOrderShape",children:"enum - SpdrOrderShape"})}),(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{children:"'None'"}),(0,n.jsx)(s.td,{children:"Single or MLeg"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"cumFillQuantity"}),(0,n.jsx)(s.td,{children:"INT"}),(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{children:"0"}),(0,n.jsx)(s.td,{children:"total fill size of all ChildOrders"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"avgFillPrice"}),(0,n.jsx)(s.td,{children:"DOUBLE"}),(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{children:"0"}),(0,n.jsx)(s.td,{children:"parent order average fill price"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"netMoney"}),(0,n.jsx)(s.td,{children:"DOUBLE"}),(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{children:"0"}),(0,n.jsx)(s.td,{children:"net allocation money"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"modifiedBy"}),(0,n.jsx)(s.td,{children:"VARCHAR(24)"}),(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{children:"''"}),(0,n.jsx)(s.td,{children:"user who last modified this record"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"modifiedIn"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"../../../Enums/SysEnvironment",children:"enum - SysEnvironment"})}),(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{children:"'None'"}),(0,n.jsx)(s.td,{})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"timestamp"}),(0,n.jsx)(s.td,{children:"DATETIME(6)"}),(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{children:"'1900-01-01 00:00:00.000000'"}),(0,n.jsx)(s.td,{children:"timestamp of last modification"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"ChildOrdersList"}),(0,n.jsx)(s.td,{children:"JSON"}),(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{children:"'JSON_ARRAY()'"}),(0,n.jsx)(s.td,{})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"FragmentsList"}),(0,n.jsx)(s.td,{children:"JSON"}),(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{children:"'JSON_ARRAY()'"}),(0,n.jsx)(s.td,{})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"LegPosTypeList"}),(0,n.jsx)(s.td,{children:"JSON"}),(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{children:"'JSON_ARRAY()'"}),(0,n.jsx)(s.td,{})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"OrderLegsList"}),(0,n.jsx)(s.td,{children:"JSON"}),(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{children:"'JSON_ARRAY()'"}),(0,n.jsx)(s.td,{})]})]})]}),"\n",(0,n.jsx)(s.h3,{id:"primary-key-definition-unique",children:"PRIMARY KEY DEFINITION (Unique)"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Field"}),(0,n.jsx)(s.th,{children:"Sequence"})]})}),(0,n.jsx)(s.tbody,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"allocNumber"}),(0,n.jsx)(s.td,{children:"1"})]})})]}),"\n",(0,n.jsx)(s.h3,{id:"json-block-childorderslist",children:"JSON Block (ChildOrdersList)"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Field"}),(0,n.jsx)(s.th,{children:"Type"}),(0,n.jsx)(s.th,{children:"Comment"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"clOrdId"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"../../../Enums/clOrdId",children:"enum - clOrdId"})}),(0,n.jsx)(s.td,{})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"orderSize"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"../../../Enums/orderSize",children:"enum - orderSize"})}),(0,n.jsx)(s.td,{})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"cumFillQuantity"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"../../../Enums/cumFillQuantity",children:"enum - cumFillQuantity"})}),(0,n.jsx)(s.td,{})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"avgFillPrice"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"../../../Enums/avgFillPrice",children:"enum - avgFillPrice"})}),(0,n.jsx)(s.td,{})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"streetClOrdId"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"../../../Enums/streetClOrdId",children:"enum - streetClOrdId"})}),(0,n.jsx)(s.td,{children:"usually clOrdIDX16 but can be different if street gateway was translating clOrdId"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"streetOrderId"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"../../../Enums/streetOrderId",children:"enum - streetOrderId"})}),(0,n.jsx)(s.td,{children:"street side order ID for canceling order"})]})]})]}),"\n",(0,n.jsx)(s.h3,{id:"json-block-fragmentslist",children:"JSON Block (FragmentsList)"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Field"}),(0,n.jsx)(s.th,{children:"Type"}),(0,n.jsx)(s.th,{children:"Comment"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"accnt"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"../../../Enums/accnt",children:"enum - accnt"})}),(0,n.jsx)(s.td,{children:"SR alloc accnt"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"clientFirm"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"../../../Enums/clientFirm",children:"enum - clientFirm"})}),(0,n.jsx)(s.td,{children:"SR client firm"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"allocAccnt"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"../../../Enums/allocAccnt",children:"enum - allocAccnt"})}),(0,n.jsx)(s.td,{children:"clearing firm alloc accnt maps to FixAllocAccount"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"allocFragId"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"../../../Enums/allocFragId",children:"enum - allocFragId"})}),(0,n.jsx)(s.td,{children:"unique ID of this allocfragment maps to FixIndividualAllocID"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"allocSize"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"../../../Enums/allocSize",children:"enum - allocSize"})}),(0,n.jsx)(s.td,{children:"accnt alloc size"})]})]})]}),"\n",(0,n.jsx)(s.h3,{id:"json-block-legpostypelist",children:"JSON Block (LegPosTypeList)"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Field"}),(0,n.jsx)(s.th,{children:"Type"}),(0,n.jsx)(s.th,{children:"Comment"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"secKey"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"../../../Enums/secKey",children:"enum - secKey"})}),(0,n.jsx)(s.td,{})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"secType"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"../../../Enums/SpdrKeyType",children:"enum - SpdrKeyType"})}),(0,n.jsx)(s.td,{})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"accnt"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"../../../Enums/accnt",children:"enum - accnt"})}),(0,n.jsx)(s.td,{children:"SR alloc accnt matches fragment"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"clientFirm"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"../../../Enums/clientFirm",children:"enum - clientFirm"})}),(0,n.jsx)(s.td,{children:"SR client firm"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"ssaleFlag"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"../../../Enums/ShortSaleFlag",children:"enum - ShortSaleFlag"})}),(0,n.jsx)(s.td,{children:"ssale flag if secType  Stock"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"positionType"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"../../../Enums/PositionType",children:"enum - PositionType"})}),(0,n.jsx)(s.td,{children:"positionType if secType  Stock"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"firmPosition"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"../../../Enums/firmPosition",children:"enum - firmPosition"})}),(0,n.jsx)(s.td,{})]})]})]}),"\n",(0,n.jsx)(s.h3,{id:"json-block-orderlegslist",children:"JSON Block (OrderLegsList)"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Field"}),(0,n.jsx)(s.th,{children:"Type"}),(0,n.jsx)(s.th,{children:"Comment"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"secKey"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"../../../Enums/secKey",children:"enum - secKey"})}),(0,n.jsx)(s.td,{})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"secType"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"../../../Enums/SpdrKeyType",children:"enum - SpdrKeyType"})}),(0,n.jsx)(s.td,{})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"mult"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"../../../Enums/mult",children:"enum - mult"})}),(0,n.jsx)(s.td,{})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"side"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"../../../Enums/BuySell",children:"enum - BuySell"})}),(0,n.jsx)(s.td,{})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"legId"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"../../../Enums/legId",children:"enum - legId"})}),(0,n.jsx)(s.td,{children:"SR leg Id"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"altLegId"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"../../../Enums/altLegId",children:"enum - altLegId"})}),(0,n.jsx)(s.td,{children:"client leg Id usually from a FIX order"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"sumLegQty"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"../../../Enums/sumLegQty",children:"enum - sumLegQty"})}),(0,n.jsx)(s.td,{})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"sumLegMny"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"../../../Enums/sumLegMny",children:"enum - sumLegMny"})}),(0,n.jsx)(s.td,{})]})]})]}),"\n",(0,n.jsx)(s.h3,{id:"create-table-example-query",children:"CREATE TABLE EXAMPLE QUERY"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-sql",children:"CREATE TABLE `SRTrade`.`MsgSRAllocationNotice` (\n    `allocNumber` BIGINT NOT NULL DEFAULT 0 COMMENT 'unique number assigned to this allocation notice',\n    `tradeDate` DATE NOT NULL DEFAULT '1900-01-01',\n    `clientFirm` VARCHAR(16) NOT NULL DEFAULT '',\n    `omniAccnt` VARCHAR(16) NOT NULL DEFAULT '' COMMENT 'omnibus accnt (SR accnt)',\n    `secKey_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None' COMMENT 'security key (stock, future, or option)',\n    `secKey_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','EUX','ANY','CXE','DXE','NXAM','NXBR','NXLS','NXML','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None' COMMENT 'security key (stock, future, or option)',\n    `secKey_tk` VARCHAR(12) NOT NULL DEFAULT '' COMMENT 'security key (stock, future, or option)',\n    `secKey_yr` SMALLINT UNSIGNED NOT NULL DEFAULT 0 COMMENT 'security key (stock, future, or option)',\n    `secKey_mn` TINYINT UNSIGNED NOT NULL DEFAULT 0 COMMENT 'security key (stock, future, or option)',\n    `secKey_dy` TINYINT UNSIGNED NOT NULL DEFAULT 0 COMMENT 'security key (stock, future, or option)',\n    `secKey_xx` DOUBLE NOT NULL DEFAULT 0 COMMENT 'security key (stock, future, or option)',\n    `secKey_cp` ENUM('Call','Put','Pair') NOT NULL DEFAULT 'Call' COMMENT 'security key (stock, future, or option)',\n    `secType` ENUM('None','Stock','Future','Option','MLeg') NOT NULL DEFAULT 'None' COMMENT 'security type',\n    `mlegLegKey` TINYTEXT NOT NULL DEFAULT '' COMMENT '[secKey.StringKey;legRatio;side;positionEffect, secKey.StringKey;legRatio;side;positionEffect, ...]',\n    `orderSide` ENUM('None','Buy','Sell') NOT NULL DEFAULT 'None' COMMENT 'order side (always buy for MLEG orders)',\n    `ssaleFlag` ENUM('None','Long','Short','Exempt','Auto','Open','Close','Cover','NA') NOT NULL DEFAULT 'None' COMMENT 'ssale flag (None if not stock)',\n    `positionType` ENUM('None','Opening','Closing','Auto') NOT NULL DEFAULT 'None' COMMENT 'positionType (None if not equity option)',\n    `noticeState` ENUM('None','ReadyToSend','HoldForReview','Canceled','Error') NOT NULL DEFAULT 'None' COMMENT 'indicates that this noticed is ready to forward to a custodian',\n    `noticeText` TINYTEXT NOT NULL DEFAULT '',\n    `allocMethod` ENUM('None','FIX','FilePAS') NOT NULL DEFAULT 'None' COMMENT 'method for delivery of the allocation instruction to the broker',\n    `execBrkrCode` VARCHAR(16) NOT NULL DEFAULT '' COMMENT 'used for FIX routing (can be null)',\n    `allocExDest` VARCHAR(16) NOT NULL DEFAULT '' COMMENT 'used for FIX routing',\n    `orderShape` ENUM('None','Single','Cross','MLeg','MLegCross') NOT NULL DEFAULT 'None' COMMENT 'Single or MLeg',\n    `cumFillQuantity` INT NOT NULL DEFAULT 0 COMMENT 'total fill size of all ChildOrders',\n    `avgFillPrice` DOUBLE NOT NULL DEFAULT 0 COMMENT 'parent order average fill price',\n    `netMoney` DOUBLE NOT NULL DEFAULT 0 COMMENT 'net allocation money',\n    `modifiedBy` VARCHAR(24) NOT NULL DEFAULT '' COMMENT 'user who last modified this record',\n    `modifiedIn` ENUM('None','Neptune','Pluto','V7_Stable','V7_Latest','Saturn','Venus','Mars','SysTest','V7_Current') NOT NULL DEFAULT 'None',\n    `timestamp` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000' COMMENT 'timestamp of last modification',\n    `ChildOrdersList` JSON NOT NULL DEFAULT JSON_ARRAY() CHECK(JSON_VALID(ChildOrdersList)),\n    `FragmentsList` JSON NOT NULL DEFAULT JSON_ARRAY() CHECK(JSON_VALID(FragmentsList)),\n    `LegPosTypeList` JSON NOT NULL DEFAULT JSON_ARRAY() CHECK(JSON_VALID(LegPosTypeList)),\n    `OrderLegsList` JSON NOT NULL DEFAULT JSON_ARRAY() CHECK(JSON_VALID(OrderLegsList)),\n    PRIMARY KEY USING HASH (`allocNumber`)\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='';\n\n"})}),"\n",(0,n.jsx)(s.h3,{id:"select-table-example-query",children:"SELECT TABLE EXAMPLE QUERY"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-sql",children:"SELECT\n    `allocNumber`,\n    `tradeDate`,\n    `clientFirm`,\n    `omniAccnt`,\n    `secKey_at`,\n    `secKey_ts`,\n    `secKey_tk`,\n    `secKey_yr`,\n    `secKey_mn`,\n    `secKey_dy`,\n    `secKey_xx`,\n    `secKey_cp`,\n    `secType`,\n    `mlegLegKey`,\n    `orderSide`,\n    `ssaleFlag`,\n    `positionType`,\n    `noticeState`,\n    `noticeText`,\n    `allocMethod`,\n    `execBrkrCode`,\n    `allocExDest`,\n    `orderShape`,\n    `cumFillQuantity`,\n    `avgFillPrice`,\n    `netMoney`,\n    `timestamp`,\n    `ChildOrdersList`,\n    `FragmentsList`,\n    `LegPosTypeList`,\n    `OrderLegsList`\nFROM `SRTrade`.`MsgSRAllocationNotice`\nWHERE \n    /* Replace with a BIGINT */ \n    `allocNumber` = 1234567890;\n"})}),"\n",(0,n.jsx)(s.h3,{id:"doc-columns-query",children:"Doc Columns Query"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-sql",children:"SELECT * FROM SRTrade.doccolumns WHERE TABLE_NAME='SRAllocationNotice' ORDER BY ordinal_position ASC;\n"})})]})}function x(e={}){const{wrapper:s}={...(0,d.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(o,{...e})}):o(e)}},28453:(e,s,t)=>{t.d(s,{R:()=>i,x:()=>l});var n=t(96540);const d={},r=n.createContext(d);function i(e){const s=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:i(e.components),n.createElement(r.Provider,{value:s},e.children)}}}]);