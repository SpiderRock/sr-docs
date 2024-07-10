"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[98237],{76501:(e,r,d)=>{d.r(r),d.d(r,{assets:()=>h,contentTitle:()=>n,default:()=>x,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var s=d(74848),t=d(28453);const i={title:"SpreadExchOrder"},n="Schema: SpreadExchOrder (ID: 2915)",c={id:"MessageSchemas/Schema/Topics/market-data-spreads/SpreadExchOrder",title:"SpreadExchOrder",description:"Live public spread orders for each exchange (if available)",source:"@site/docs/MessageSchemas/Schema/Topics/2895-market-data-spreads/SpreadExchOrder.md",sourceDirName:"MessageSchemas/Schema/Topics/2895-market-data-spreads",slug:"/MessageSchemas/Schema/Topics/market-data-spreads/SpreadExchOrder",permalink:"/docs/MessageSchemas/Schema/Topics/market-data-spreads/SpreadExchOrder",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"SpreadExchOrder"},sidebar:"messageSchemasSidebar",previous:{title:"SpreadBookQuote",permalink:"/docs/MessageSchemas/Schema/Topics/market-data-spreads/SpreadBookQuote"},next:{title:"SpreadExchPrint",permalink:"/docs/MessageSchemas/Schema/Topics/market-data-spreads/SpreadExchPrint"}},h={},l=[{value:"METADATA",id:"metadata",level:3},{value:"BODY",id:"body",level:3}];function a(e){const r={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h3:"h3",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(r.h1,{id:"schema-spreadexchorder-id-2915",children:["Schema: SpreadExchOrder ",(0,s.jsx)("span",{className:"small-text",children:"(ID: 2915)"})]}),"\n",(0,s.jsx)(r.p,{children:"Live public spread orders for each exchange (if available)"}),"\n",(0,s.jsx)(r.h3,{id:"metadata",children:"METADATA"}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Attribute"}),(0,s.jsx)(r.th,{children:"Value"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Topic"}),(0,s.jsx)(r.td,{children:"2895-market-data-spreads"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"MLink Token"}),(0,s.jsx)(r.td,{children:"SpreadExchData"})]})]})]}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsxs)(r.blockquote,{children:["\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"Note:"})," The symbol ",(0,s.jsx)(r.code,{children:"="})," next to a field number indicates that it is a primary key."]}),"\n"]}),"\n",(0,s.jsx)(r.h3,{id:"body",children:"BODY"}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"#"}),(0,s.jsx)(r.th,{children:"Field"}),(0,s.jsx)(r.th,{children:"Type"}),(0,s.jsx)(r.th,{children:"Comment"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"10="}),(0,s.jsx)(r.td,{children:"skey"}),(0,s.jsx)(r.td,{children:"TickerKey"}),(0,s.jsx)(r.td,{children:"SR or exchange assigned Spread TickerKey (ProductDefinition.pkey) (might be null)"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"11="}),(0,s.jsx)(r.td,{children:"exch"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"../../../Enums/OptExch",children:"enum : OptExch"})}),(0,s.jsx)(r.td,{})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"12="}),(0,s.jsx)(r.td,{children:"side"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"../../../Enums/BuySell",children:"enum : BuySell"})}),(0,s.jsx)(r.td,{})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"13="}),(0,s.jsx)(r.td,{children:"isTest"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,s.jsx)(r.td,{})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"100"}),(0,s.jsx)(r.td,{children:"ticker"}),(0,s.jsx)(r.td,{children:"TickerKey"}),(0,s.jsx)(r.td,{children:"underlier (or product group) tickerKey"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"103"}),(0,s.jsx)(r.td,{children:"orderID"}),(0,s.jsx)(r.td,{children:"string(24)"}),(0,s.jsx)(r.td,{children:"exchange order ID"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"106"}),(0,s.jsx)(r.td,{children:"size"}),(0,s.jsx)(r.td,{children:"int"}),(0,s.jsx)(r.td,{children:"total spreads available"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"109"}),(0,s.jsx)(r.td,{children:"price"}),(0,s.jsx)(r.td,{children:"double"}),(0,s.jsx)(r.td,{})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"112"}),(0,s.jsx)(r.td,{children:"isPriceValid"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,s.jsx)(r.td,{})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"113"}),(0,s.jsx)(r.td,{children:"flipSide"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,s.jsx)(r.td,{children:"if the side and price have been flipped"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"115"}),(0,s.jsx)(r.td,{children:"origOrderSize"}),(0,s.jsx)(r.td,{children:"int"}),(0,s.jsx)(r.td,{children:"original order size (if available)"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"118"}),(0,s.jsx)(r.td,{children:"orderType"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"../../../Enums/ExchOrderType",children:"enum : ExchOrderType"})}),(0,s.jsx)(r.td,{})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"121"}),(0,s.jsx)(r.td,{children:"orderStatus"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"../../../Enums/ExchOrderStatus",children:"enum : ExchOrderStatus"})}),(0,s.jsx)(r.td,{})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"124"}),(0,s.jsx)(r.td,{children:"marketQualifier"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"../../../Enums/MarketQualifier",children:"enum : MarketQualifier"})}),(0,s.jsx)(r.td,{})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"127"}),(0,s.jsx)(r.td,{children:"execQualifier"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"../../../Enums/ExecQualifier",children:"enum : ExecQualifier"})}),(0,s.jsx)(r.td,{})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"130"}),(0,s.jsx)(r.td,{children:"timeInForce"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"../../../Enums/TimeInForce",children:"enum : TimeInForce"})}),(0,s.jsx)(r.td,{})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"133"}),(0,s.jsx)(r.td,{children:"firmType"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"../../../Enums/FirmType",children:"enum : FirmType"})}),(0,s.jsx)(r.td,{})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"136"}),(0,s.jsx)(r.td,{children:"clearingFirm"}),(0,s.jsx)(r.td,{children:"string(5)"}),(0,s.jsx)(r.td,{})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"139"}),(0,s.jsx)(r.td,{children:"clearingAccnt"}),(0,s.jsx)(r.td,{children:"string(8)"}),(0,s.jsx)(r.td,{})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"142"}),(0,s.jsx)(r.td,{children:"srcTimestamp"}),(0,s.jsx)(r.td,{children:"long"}),(0,s.jsx)(r.td,{children:"source high precision timestamp (if available)"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"145"}),(0,s.jsx)(r.td,{children:"netTimestamp"}),(0,s.jsx)(r.td,{children:"long"}),(0,s.jsx)(r.td,{children:"SpiderRock network PTP timestamp"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"148"}),(0,s.jsx)(r.td,{children:"dgwTimestamp"}),(0,s.jsx)(r.td,{children:"long"}),(0,s.jsx)(r.td,{children:"SpiderRock data gateway timestamp"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"151"}),(0,s.jsx)(r.td,{children:"timestamp"}),(0,s.jsx)(r.td,{children:"DateTime"}),(0,s.jsx)(r.td,{})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"170"}),(0,s.jsx)(r.td,{children:"exchSprID"}),(0,s.jsx)(r.td,{children:"string(30)"}),(0,s.jsx)(r.td,{children:"unique exchange spread id"})]})]})]})]})}function x(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},28453:(e,r,d)=>{d.d(r,{R:()=>n,x:()=>c});var s=d(96540);const t={},i=s.createContext(t);function n(e){const r=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:n(e.components),s.createElement(i.Provider,{value:r},e.children)}}}]);