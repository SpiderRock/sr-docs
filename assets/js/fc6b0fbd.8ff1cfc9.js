"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[80086],{8097:(e,d,s)=>{s.r(d),s.d(d,{assets:()=>c,contentTitle:()=>n,default:()=>j,frontMatter:()=>i,metadata:()=>l,toc:()=>h});var t=s(74848),r=s(28453);const i={title:"SpdrAllocationNotice"},n="Schema: SpdrAllocationNotice (ID: 3695)",l={id:"MessageSchemas/Schema/Topics/order-allocation/SpdrAllocationNotice",title:"SpdrAllocationNotice",description:"METADATA",source:"@site/docs/MessageSchemas/Schema/Topics/3695-order-allocation/SpdrAllocationNotice.md",sourceDirName:"MessageSchemas/Schema/Topics/3695-order-allocation",slug:"/MessageSchemas/Schema/Topics/order-allocation/SpdrAllocationNotice",permalink:"/docs/MessageSchemas/Schema/Topics/order-allocation/SpdrAllocationNotice",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"SpdrAllocationNotice"},sidebar:"messageSchemasSidebar",previous:{title:"UserSDivOverride",permalink:"/docs/MessageSchemas/Schema/Topics/option-pricing/UserSDivOverride"},next:{title:"SpdrAllocationNoticeStatus",permalink:"/docs/MessageSchemas/Schema/Topics/order-allocation/SpdrAllocationNoticeStatus"}},c={},h=[{value:"METADATA",id:"metadata",level:3},{value:"PRIMARY KEY",id:"primary-key",level:3},{value:"BODY",id:"body",level:3},{value:"REPEATING FIELDS",id:"repeating-fields",level:3}];function x(e){const d={a:"a",h1:"h1",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(d.h1,{id:"schema-spdrallocationnotice-id-3695",children:["Schema: SpdrAllocationNotice ",(0,t.jsx)("span",{className:"small-text",children:"(ID: 3695)"})]}),"\n",(0,t.jsxs)("div",{className:"single-message-meta",children:[(0,t.jsx)(d.h3,{id:"metadata",children:"METADATA"}),(0,t.jsxs)(d.table,{children:[(0,t.jsx)(d.thead,{children:(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.th,{children:"Attribute"}),(0,t.jsx)(d.th,{children:"Value"})]})}),(0,t.jsxs)(d.tbody,{children:[(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"MLink Token"}),(0,t.jsx)(d.td,{children:"SystemData"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"Topic"}),(0,t.jsx)(d.td,{children:"order-allocation"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"SRSE Product"}),(0,t.jsx)(d.td,{children:"SRTrade"})]})]})]})]}),"\n",(0,t.jsxs)("div",{className:"single-message-primarykey",children:[(0,t.jsx)(d.h3,{id:"primary-key",children:"PRIMARY KEY"}),(0,t.jsxs)(d.table,{children:[(0,t.jsx)(d.thead,{children:(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.th,{children:"Field"}),(0,t.jsx)(d.th,{children:"Type"}),(0,t.jsx)(d.th,{children:"Comment"})]})}),(0,t.jsx)(d.tbody,{children:(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"allocNumber"}),(0,t.jsx)(d.td,{children:"long"}),(0,t.jsx)(d.td,{children:"unique number assigned to this allocation notice"})]})})]})]}),"\n",(0,t.jsxs)("div",{className:"single-message-body",children:[(0,t.jsx)(d.h3,{id:"body",children:"BODY"}),(0,t.jsxs)(d.table,{children:[(0,t.jsx)(d.thead,{children:(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.th,{children:"Field"}),(0,t.jsx)(d.th,{children:"Type"}),(0,t.jsx)(d.th,{children:"Comment"})]})}),(0,t.jsxs)(d.tbody,{children:[(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"allocExDest"}),(0,t.jsx)(d.td,{children:"string(16)"}),(0,t.jsx)(d.td,{children:"used for FIX routing"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"allocMethod"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.a,{href:"../../../Enums/AllocMethod",children:"enum : AllocMethod"})}),(0,t.jsx)(d.td,{children:"method for delivery of the allocation instruction to the broker"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"avgFillPrice"}),(0,t.jsx)(d.td,{children:"double"}),(0,t.jsx)(d.td,{children:"parent order average fill price"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"clientFirm"}),(0,t.jsx)(d.td,{children:"string(16)"}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"cumFillQuantity"}),(0,t.jsx)(d.td,{children:"int"}),(0,t.jsx)(d.td,{children:"total fill size of all ChildOrders"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"execBrkrCode"}),(0,t.jsx)(d.td,{children:"string(16)"}),(0,t.jsx)(d.td,{children:"used for FIX routing (can be null)"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"mlegLegKey"}),(0,t.jsx)(d.td,{children:"text1"}),(0,t.jsx)(d.td,{children:"[secKey.StringKey;legRatio;side;positionEffect, secKey.StringKey;legRatio;side;positionEffect, ...]"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"modifiedBy"}),(0,t.jsx)(d.td,{children:"string(24)"}),(0,t.jsx)(d.td,{children:"user who last modified this record"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"modifiedIn"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.a,{href:"../../../Enums/SysEnvironment",children:"enum : SysEnvironment"})}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"netMoney"}),(0,t.jsx)(d.td,{children:"double"}),(0,t.jsx)(d.td,{children:"net allocation money"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"noticeState"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.a,{href:"../../../Enums/NoticeState",children:"enum : NoticeState"})}),(0,t.jsx)(d.td,{children:"indicates that this noticed is ready to forward to a custodian"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"noticeText"}),(0,t.jsx)(d.td,{children:"text1"}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"omniAccnt"}),(0,t.jsx)(d.td,{children:"string(16)"}),(0,t.jsx)(d.td,{children:"omnibus accnt (SR accnt)"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"orderShape"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.a,{href:"../../../Enums/SpdrOrderShape",children:"enum : SpdrOrderShape"})}),(0,t.jsx)(d.td,{children:"Single or MLeg"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"orderSide"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.a,{href:"../../../Enums/BuySell",children:"enum : BuySell"})}),(0,t.jsx)(d.td,{children:"order side (always buy for MLEG orders)"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"positionType"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.a,{href:"../../../Enums/PositionType",children:"enum : PositionType"})}),(0,t.jsx)(d.td,{children:"positionType (None if not equity option)"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"secKey"}),(0,t.jsx)(d.td,{children:"OptionKey"}),(0,t.jsx)(d.td,{children:"security key (stock, future, or option)"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"secType"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.a,{href:"../../../Enums/SpdrKeyType",children:"enum : SpdrKeyType"})}),(0,t.jsx)(d.td,{children:"security type"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"ssaleFlag"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.a,{href:"../../../Enums/ShortSaleFlag",children:"enum : ShortSaleFlag"})}),(0,t.jsx)(d.td,{children:"ssale flag (None if not stock)"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"timestamp"}),(0,t.jsx)(d.td,{children:"DateTime"}),(0,t.jsx)(d.td,{children:"timestamp of last modification"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"tradeDate"}),(0,t.jsx)(d.td,{children:"DateKey"}),(0,t.jsx)(d.td,{})]})]})]}),(0,t.jsx)(d.h3,{id:"repeating-fields",children:"REPEATING FIELDS"}),(0,t.jsx)(d.p,{children:"ChildOrders"}),(0,t.jsxs)(d.table,{children:[(0,t.jsx)(d.thead,{children:(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.th,{children:"Field"}),(0,t.jsx)(d.th,{children:"Type"}),(0,t.jsx)(d.th,{children:"Comment"})]})}),(0,t.jsxs)(d.tbody,{children:[(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"avgFillPrice"}),(0,t.jsx)(d.td,{children:"double"}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"clOrdId"}),(0,t.jsx)(d.td,{children:"long"}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"cumFillQuantity"}),(0,t.jsx)(d.td,{children:"int"}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"orderSize"}),(0,t.jsx)(d.td,{children:"int"}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"streetClOrdId"}),(0,t.jsx)(d.td,{children:"string(24)"}),(0,t.jsx)(d.td,{children:"usually clOrdID.X16 but can be different if street gateway was translating clOrdId"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"streetOrderId"}),(0,t.jsx)(d.td,{children:"string(24)"}),(0,t.jsx)(d.td,{children:"street side order ID (for canceling order)"})]})]})]}),(0,t.jsx)(d.p,{children:"Fragments"}),(0,t.jsxs)(d.table,{children:[(0,t.jsx)(d.thead,{children:(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.th,{children:"Field"}),(0,t.jsx)(d.th,{children:"Type"}),(0,t.jsx)(d.th,{children:"Comment"})]})}),(0,t.jsxs)(d.tbody,{children:[(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"accnt"}),(0,t.jsx)(d.td,{children:"string(16)"}),(0,t.jsx)(d.td,{children:"SR alloc accnt"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"allocAccnt"}),(0,t.jsx)(d.td,{children:"string(16)"}),(0,t.jsx)(d.td,{children:"clearing firm alloc accnt (maps to Fix.AllocAccount)"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"allocFragId"}),(0,t.jsx)(d.td,{children:"long"}),(0,t.jsx)(d.td,{children:"unique ID of this alloc/fragment (maps to Fix.IndividualAllocID)"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"allocSize"}),(0,t.jsx)(d.td,{children:"int"}),(0,t.jsx)(d.td,{children:"accnt alloc size"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"clientFirm"}),(0,t.jsx)(d.td,{children:"string(16)"}),(0,t.jsx)(d.td,{children:"SR client firm"})]})]})]}),(0,t.jsx)(d.p,{children:"LegPosType"}),(0,t.jsxs)(d.table,{children:[(0,t.jsx)(d.thead,{children:(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.th,{children:"Field"}),(0,t.jsx)(d.th,{children:"Type"}),(0,t.jsx)(d.th,{children:"Comment"})]})}),(0,t.jsxs)(d.tbody,{children:[(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"accnt"}),(0,t.jsx)(d.td,{children:"string(16)"}),(0,t.jsx)(d.td,{children:"SR alloc accnt (matches fragment)"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"clientFirm"}),(0,t.jsx)(d.td,{children:"string(16)"}),(0,t.jsx)(d.td,{children:"SR client firm"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"firmPosition"}),(0,t.jsx)(d.td,{children:"int"}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"positionType"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.a,{href:"../../../Enums/PositionType",children:"enum : PositionType"})}),(0,t.jsx)(d.td,{children:"positionType (if secType != Stock)"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"secKey"}),(0,t.jsx)(d.td,{children:"OptionKey"}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"secType"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.a,{href:"../../../Enums/SpdrKeyType",children:"enum : SpdrKeyType"})}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"ssaleFlag"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.a,{href:"../../../Enums/ShortSaleFlag",children:"enum : ShortSaleFlag"})}),(0,t.jsx)(d.td,{children:"ssale flag (if secType = Stock)"})]})]})]}),(0,t.jsx)(d.p,{children:"OrderLegs"}),(0,t.jsxs)(d.table,{children:[(0,t.jsx)(d.thead,{children:(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.th,{children:"Field"}),(0,t.jsx)(d.th,{children:"Type"}),(0,t.jsx)(d.th,{children:"Comment"})]})}),(0,t.jsxs)(d.tbody,{children:[(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"altLegId"}),(0,t.jsx)(d.td,{children:"string(24)"}),(0,t.jsx)(d.td,{children:"client leg Id (usually from a FIX order)"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"legId"}),(0,t.jsx)(d.td,{children:"long"}),(0,t.jsx)(d.td,{children:"SR leg Id"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"mult"}),(0,t.jsx)(d.td,{children:"ushort"}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"secKey"}),(0,t.jsx)(d.td,{children:"OptionKey"}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"secType"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.a,{href:"../../../Enums/SpdrKeyType",children:"enum : SpdrKeyType"})}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"side"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.a,{href:"../../../Enums/BuySell",children:"enum : BuySell"})}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"sumLegMny"}),(0,t.jsx)(d.td,{children:"double"}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"sumLegQty"}),(0,t.jsx)(d.td,{children:"int"}),(0,t.jsx)(d.td,{})]})]})]})]})]})}function j(e={}){const{wrapper:d}={...(0,r.R)(),...e.components};return d?(0,t.jsx)(d,{...e,children:(0,t.jsx)(x,{...e})}):x(e)}},28453:(e,d,s)=>{s.d(d,{R:()=>n,x:()=>l});var t=s(96540);const r={},i=t.createContext(r);function n(e){const d=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(d):{...d,...e}}),[d,e])}function l(e){let d;return d=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:n(e.components),t.createElement(i.Provider,{value:d},e.children)}}}]);