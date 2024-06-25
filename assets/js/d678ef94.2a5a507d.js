"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[35506],{86375:(e,r,d)=>{d.r(r),d.d(r,{assets:()=>a,contentTitle:()=>n,default:()=>x,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var s=d(74848),t=d(28453);const i={title:"SpreadExchOrder"},n="Message: SpreadExchOrder (ID: 2915)",c={id:"Schema/Topics/market-data-spreads/SpreadExchOrder",title:"SpreadExchOrder",description:"Live public spread orders for each exchange (if available)",source:"@site/docs/Schema/Topics/2895-market-data-spreads/SpreadExchOrder.md",sourceDirName:"Schema/Topics/2895-market-data-spreads",slug:"/Schema/Topics/market-data-spreads/SpreadExchOrder",permalink:"/docs/Schema/Topics/market-data-spreads/SpreadExchOrder",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"SpreadExchOrder"},sidebar:"schemaSidebar",previous:{title:"SpreadBookQuote",permalink:"/docs/Schema/Topics/market-data-spreads/SpreadBookQuote"},next:{title:"SpreadExchPrint",permalink:"/docs/Schema/Topics/market-data-spreads/SpreadExchPrint"}},a={},l=[{value:"META DATA  (Topic: market-data-spreads )",id:"meta-data--topic-market-data-spreads-",level:3},{value:"PRIMARY KEY",id:"primary-key",level:3},{value:"BODY",id:"body",level:3}];function h(e){const r={a:"a",h1:"h1",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(r.h1,{id:"message-spreadexchorder-id-2915",children:["Message: SpreadExchOrder ",(0,s.jsx)("span",{className:"small-text",children:"(ID: 2915)"})]}),"\n",(0,s.jsx)(r.p,{children:"Live public spread orders for each exchange (if available)"}),"\n",(0,s.jsxs)("div",{className:"single-message-meta",children:[(0,s.jsx)(r.h3,{id:"meta-data--topic-market-data-spreads-",children:"META DATA  (Topic: market-data-spreads )"}),(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Attribute"}),(0,s.jsx)(r.th,{children:"Value"})]})}),(0,s.jsx)(r.tbody,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"MLink Token"}),(0,s.jsx)(r.td,{children:"SpreadExchData"})]})})]})]}),"\n",(0,s.jsxs)("div",{className:"single-message-primarykey",children:[(0,s.jsx)(r.h3,{id:"primary-key",children:"PRIMARY KEY"}),(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Field"}),(0,s.jsx)(r.th,{children:"Type"}),(0,s.jsx)(r.th,{children:"Comment"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"skey"}),(0,s.jsx)(r.td,{children:"TickerKey"}),(0,s.jsx)(r.td,{children:"SR or exchange assigned Spread TickerKey (ProductDefinition.pkey) (might be null)"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"exch"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"../../../Enums/OptExch",children:"enum : OptExch"})}),(0,s.jsx)(r.td,{})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"side"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"../../../Enums/BuySell",children:"enum : BuySell"})}),(0,s.jsx)(r.td,{})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"isTest"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,s.jsx)(r.td,{})]})]})]})]}),"\n",(0,s.jsxs)("div",{className:"single-message-body",children:[(0,s.jsx)(r.h3,{id:"body",children:"BODY"}),(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Field"}),(0,s.jsx)(r.th,{children:"Type"}),(0,s.jsx)(r.th,{children:"Comment"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"clearingAccnt"}),(0,s.jsx)(r.td,{children:"string(8)"}),(0,s.jsx)(r.td,{})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"clearingFirm"}),(0,s.jsx)(r.td,{children:"string(5)"}),(0,s.jsx)(r.td,{})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"dgwTimestamp"}),(0,s.jsx)(r.td,{children:"long"}),(0,s.jsx)(r.td,{children:"SpiderRock data gateway timestamp"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"exchSprID"}),(0,s.jsx)(r.td,{children:"string(30)"}),(0,s.jsx)(r.td,{children:"unique exchange spread id"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"execQualifier"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"../../../Enums/ExecQualifier",children:"enum : ExecQualifier"})}),(0,s.jsx)(r.td,{})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"firmType"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"../../../Enums/FirmType",children:"enum : FirmType"})}),(0,s.jsx)(r.td,{})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"isPriceValid"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,s.jsx)(r.td,{})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"marketQualifier"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"../../../Enums/MarketQualifier",children:"enum : MarketQualifier"})}),(0,s.jsx)(r.td,{})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"netTimestamp"}),(0,s.jsx)(r.td,{children:"long"}),(0,s.jsx)(r.td,{children:"SpiderRock network PTP timestamp"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"orderID"}),(0,s.jsx)(r.td,{children:"string(24)"}),(0,s.jsx)(r.td,{children:"exchange order ID"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"orderStatus"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"../../../Enums/ExchOrderStatus",children:"enum : ExchOrderStatus"})}),(0,s.jsx)(r.td,{})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"orderType"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"../../../Enums/ExchOrderType",children:"enum : ExchOrderType"})}),(0,s.jsx)(r.td,{})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"origOrderSize"}),(0,s.jsx)(r.td,{children:"int"}),(0,s.jsx)(r.td,{children:"original order size (if available)"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"price"}),(0,s.jsx)(r.td,{children:"double"}),(0,s.jsx)(r.td,{})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"size"}),(0,s.jsx)(r.td,{children:"int"}),(0,s.jsx)(r.td,{children:"total spreads available"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"srcTimestamp"}),(0,s.jsx)(r.td,{children:"long"}),(0,s.jsx)(r.td,{children:"source high precision timestamp (if available)"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"ticker"}),(0,s.jsx)(r.td,{children:"TickerKey"}),(0,s.jsx)(r.td,{children:"underlier (or product group) tickerKey"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"timeInForce"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"../../../Enums/TimeInForce",children:"enum : TimeInForce"})}),(0,s.jsx)(r.td,{})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"timestamp"}),(0,s.jsx)(r.td,{children:"DateTime"}),(0,s.jsx)(r.td,{})]})]})]})]})]})}function x(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},28453:(e,r,d)=>{d.d(r,{R:()=>n,x:()=>c});var s=d(96540);const t={},i=s.createContext(t);function n(e){const r=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:n(e.components),s.createElement(i.Provider,{value:r},e.children)}}}]);