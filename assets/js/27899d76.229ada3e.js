"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[35199],{65924:(e,s,d)=>{d.r(s),d.d(s,{assets:()=>h,contentTitle:()=>n,default:()=>x,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var r=d(74848),t=d(28453);const i={title:"SpreadBookQuote"},n="Schema: SpreadBookQuote (ID: 2900)",c={id:"MessageSchemas/Schema/Topics/market-data-spreads/SpreadBookQuote",title:"SpreadBookQuote",description:"This table contains live spread quote records from the individual equity option exchanges.  Each record contains up to two price levels and represents a live snapshot of the book for a specific spread.",source:"@site/docs/MessageSchemas/Schema/Topics/2895-market-data-spreads/SpreadBookQuote.md",sourceDirName:"MessageSchemas/Schema/Topics/2895-market-data-spreads",slug:"/MessageSchemas/Schema/Topics/market-data-spreads/SpreadBookQuote",permalink:"/docs/MessageSchemas/Schema/Topics/market-data-spreads/SpreadBookQuote",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"SpreadBookQuote"},sidebar:"messageSchemasSidebar",previous:{title:"SpreadBookMarkup",permalink:"/docs/MessageSchemas/Schema/Topics/market-data-spreads/SpreadBookMarkup"},next:{title:"SpreadExchOrder",permalink:"/docs/MessageSchemas/Schema/Topics/market-data-spreads/SpreadExchOrder"}},h={},l=[{value:"METADATA",id:"metadata",level:3},{value:"PRIMARY KEY",id:"primary-key",level:3},{value:"BODY",id:"body",level:3}];function a(e){const s={a:"a",h1:"h1",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.h1,{id:"schema-spreadbookquote-id-2900",children:["Schema: SpreadBookQuote ",(0,r.jsx)("span",{className:"small-text",children:"(ID: 2900)"})]}),"\n",(0,r.jsx)(s.p,{children:"This table contains live spread quote records from the individual equity option exchanges.  Each record contains up to two price levels and represents a live snapshot of the book for a specific spread."}),"\n",(0,r.jsxs)("div",{className:"single-message-meta",children:[(0,r.jsx)(s.h3,{id:"metadata",children:"METADATA"}),(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Attribute"}),(0,r.jsx)(s.th,{children:"Value"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Topic"}),(0,r.jsx)(s.td,{children:"2895-market-data-spreads"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"MLink Token"}),(0,r.jsx)(s.td,{children:"SpreadMktData"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"SRSE Product"}),(0,r.jsx)(s.td,{children:"SRSpread"})]})]})]})]}),"\n",(0,r.jsxs)("div",{className:"single-message-primarykey",children:[(0,r.jsx)(s.h3,{id:"primary-key",children:"PRIMARY KEY"}),(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"#"}),(0,r.jsx)(s.th,{children:"Field"}),(0,r.jsx)(s.th,{children:"Type"}),(0,r.jsx)(s.th,{children:"Comment"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"10"}),(0,r.jsx)(s.td,{children:"skey"}),(0,r.jsx)(s.td,{children:"TickerKey"}),(0,r.jsx)(s.td,{children:"SR Spread Key (should have corresponding ProductDefinition record)"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"11"}),(0,r.jsx)(s.td,{children:"isTest"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,r.jsx)(s.td,{children:"Yes indicates that response is made of entirely of isTest=Yes SpreadExchOrders"})]})]})]})]}),"\n",(0,r.jsxs)("div",{className:"single-message-body",children:[(0,r.jsx)(s.h3,{id:"body",children:"BODY"}),(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"#"}),(0,r.jsx)(s.th,{children:"Field"}),(0,r.jsx)(s.th,{children:"Type"}),(0,r.jsx)(s.th,{children:"Comment"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"167"}),(0,r.jsx)(s.td,{children:"SRspreadID"}),(0,r.jsx)(s.td,{children:"long"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"142"}),(0,r.jsx)(s.td,{children:"askExch1"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"../../../Enums/OptExch",children:"enum : OptExch"})}),(0,r.jsx)(s.td,{children:"exchange at ask price with the largest size (if any)"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"148"}),(0,r.jsx)(s.td,{children:"askMask1"}),(0,r.jsx)(s.td,{children:"uint"}),(0,r.jsx)(s.td,{children:"exchange ask bit mask (OptExch mask for NMS spreads; zero for single exchange spreads)"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"109"}),(0,r.jsx)(s.td,{children:"askPrice1"}),(0,r.jsx)(s.td,{children:"double"}),(0,r.jsx)(s.td,{children:"ask price"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"127"}),(0,r.jsx)(s.td,{children:"askPrice2"}),(0,r.jsx)(s.td,{children:"double"}),(0,r.jsx)(s.td,{children:"2nd best ask price"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"118"}),(0,r.jsx)(s.td,{children:"askSize1"}),(0,r.jsx)(s.td,{children:"int"}),(0,r.jsx)(s.td,{children:"cumulative size at askPrice"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"136"}),(0,r.jsx)(s.td,{children:"askSize2"}),(0,r.jsx)(s.td,{children:"int"}),(0,r.jsx)(s.td,{children:"cumulative size at 2nd price"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"154"}),(0,r.jsx)(s.td,{children:"askTime"}),(0,r.jsx)(s.td,{children:"DateTime"}),(0,r.jsx)(s.td,{children:"last ask price or size change"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"139"}),(0,r.jsx)(s.td,{children:"bidExch1"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"../../../Enums/OptExch",children:"enum : OptExch"})}),(0,r.jsx)(s.td,{children:"exchange at bid price with the largest size (if any)"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"145"}),(0,r.jsx)(s.td,{children:"bidMask1"}),(0,r.jsx)(s.td,{children:"uint"}),(0,r.jsx)(s.td,{children:"exchange bid bit mask (OptExch mask for NMS spreads; zero for single exchange spreads)"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"103"}),(0,r.jsx)(s.td,{children:"bidPrice1"}),(0,r.jsx)(s.td,{children:"double"}),(0,r.jsx)(s.td,{children:"bid price"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"121"}),(0,r.jsx)(s.td,{children:"bidPrice2"}),(0,r.jsx)(s.td,{children:"double"}),(0,r.jsx)(s.td,{children:"2nd best bid price"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"115"}),(0,r.jsx)(s.td,{children:"bidSize1"}),(0,r.jsx)(s.td,{children:"int"}),(0,r.jsx)(s.td,{children:"cumulative size at bidPrice"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"133"}),(0,r.jsx)(s.td,{children:"bidSize2"}),(0,r.jsx)(s.td,{children:"int"}),(0,r.jsx)(s.td,{children:"cumulative size at 2nd price"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"151"}),(0,r.jsx)(s.td,{children:"bidTime"}),(0,r.jsx)(s.td,{children:"DateTime"}),(0,r.jsx)(s.td,{children:"last bid price or size change"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"112"}),(0,r.jsx)(s.td,{children:"isAskPrice1Valid"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"130"}),(0,r.jsx)(s.td,{children:"isAskPrice2Valid"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"106"}),(0,r.jsx)(s.td,{children:"isBidPrice1Valid"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"124"}),(0,r.jsx)(s.td,{children:"isBidPrice2Valid"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"163"}),(0,r.jsx)(s.td,{children:"netTimestamp"}),(0,r.jsx)(s.td,{children:"long"}),(0,r.jsx)(s.td,{children:"inbound packet PTP timestamp from SR gateway switch;usually syncronized with facility grandfather clock"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"168"}),(0,r.jsx)(s.td,{children:"printVolume"}),(0,r.jsx)(s.td,{children:"int"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"160"}),(0,r.jsx)(s.td,{children:"srcTimestamp"}),(0,r.jsx)(s.td,{children:"long"}),(0,r.jsx)(s.td,{children:"source high precision timestamp (if available)"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"100"}),(0,r.jsx)(s.td,{children:"ticker"}),(0,r.jsx)(s.td,{children:"TickerKey"}),(0,r.jsx)(s.td,{children:"common spread underlier"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"166"}),(0,r.jsx)(s.td,{children:"timestamp"}),(0,r.jsx)(s.td,{children:"DateTime"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"157"}),(0,r.jsx)(s.td,{children:"updateType"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"../../../Enums/UpdateType",children:"enum : UpdateType"})}),(0,r.jsx)(s.td,{})]})]})]})]})]})}function x(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},28453:(e,s,d)=>{d.d(s,{R:()=>n,x:()=>c});var r=d(96540);const t={},i=r.createContext(t);function n(e){const s=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:n(e.components),r.createElement(i.Provider,{value:s},e.children)}}}]);