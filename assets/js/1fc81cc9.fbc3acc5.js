"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[24947],{89658:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>j,frontMatter:()=>n,metadata:()=>c,toc:()=>h});var d=s(74848),i=s(28453);const n={title:"AuctionState"},r="Schema: AuctionState (ID: 2464)",c={id:"MessageSchemas/Schema/Topics/liquidity-notice/AuctionState",title:"AuctionState",description:"METADATA",source:"@site/docs/MessageSchemas/Schema/Topics/2450-liquidity-notice/AuctionState.md",sourceDirName:"MessageSchemas/Schema/Topics/2450-liquidity-notice",slug:"/MessageSchemas/Schema/Topics/liquidity-notice/AuctionState",permalink:"/docs/MessageSchemas/Schema/Topics/liquidity-notice/AuctionState",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"AuctionState"},sidebar:"messageSchemasSidebar",previous:{title:"AuctionPrintSN",permalink:"/docs/MessageSchemas/Schema/Topics/liquidity-notice/AuctionPrintSN"},next:{title:"AutoResponderBX",permalink:"/docs/MessageSchemas/Schema/Topics/liquidity-notice/AutoResponderBX"}},l={},h=[{value:"METADATA",id:"metadata",level:3},{value:"PRIMARY KEY",id:"primary-key",level:3},{value:"BODY",id:"body",level:3},{value:"REPEATING FIELDS",id:"repeating-fields",level:3}];function x(e){const t={a:"a",h1:"h1",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(t.h1,{id:"schema-auctionstate-id-2464",children:["Schema: AuctionState ",(0,d.jsx)("span",{className:"small-text",children:"(ID: 2464)"})]}),"\n",(0,d.jsxs)("div",{className:"single-message-meta",children:[(0,d.jsx)(t.h3,{id:"metadata",children:"METADATA"}),(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Attribute"}),(0,d.jsx)(t.th,{children:"Value"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"Topic"}),(0,d.jsx)(t.td,{children:"2450-liquidity-notice"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"MLink Token"}),(0,d.jsx)(t.td,{children:"SRConnect"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"SRSE Product"}),(0,d.jsx)(t.td,{children:"SRTrade"})]})]})]})]}),"\n",(0,d.jsxs)("div",{className:"single-message-primarykey",children:[(0,d.jsx)(t.h3,{id:"primary-key",children:"PRIMARY KEY"}),(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"#"}),(0,d.jsx)(t.th,{children:"Field"}),(0,d.jsx)(t.th,{children:"Type"}),(0,d.jsx)(t.th,{children:"Comment"})]})}),(0,d.jsx)(t.tbody,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"10"}),(0,d.jsx)(t.td,{children:"noticeNumber"}),(0,d.jsx)(t.td,{children:"long"}),(0,d.jsx)(t.td,{})]})})]})]}),"\n",(0,d.jsxs)("div",{className:"single-message-body",children:[(0,d.jsx)(t.h3,{id:"body",children:"BODY"}),(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"#"}),(0,d.jsx)(t.th,{children:"Field"}),(0,d.jsx)(t.th,{children:"Type"}),(0,d.jsx)(t.th,{children:"Comment"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"103"}),(0,d.jsx)(t.td,{children:"auctionType"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.a,{href:"../../../Enums/AuctionType",children:"enum : AuctionType"})}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"104"}),(0,d.jsx)(t.td,{children:"blockAuctionCounter"}),(0,d.jsx)(t.td,{children:"int"}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"105"}),(0,d.jsx)(t.td,{children:"blockAuctionStatus"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.a,{href:"../../../Enums/BlockAuctionStatus",children:"enum : BlockAuctionStatus"})}),(0,d.jsx)(t.td,{children:"Active,FinalTrial,Crossing,Crossed,CrossFailed,Closed"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"108"}),(0,d.jsx)(t.td,{children:"custPrc"}),(0,d.jsx)(t.td,{children:"double"}),(0,d.jsx)(t.td,{children:"public cust price"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"107"}),(0,d.jsx)(t.td,{children:"custQty"}),(0,d.jsx)(t.td,{children:"int"}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"106"}),(0,d.jsx)(t.td,{children:"custSide"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.a,{href:"../../../Enums/BuySell",children:"enum : BuySell"})}),(0,d.jsx)(t.td,{children:"if available"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"109"}),(0,d.jsx)(t.td,{children:"hasCustPrc"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"102"}),(0,d.jsx)(t.td,{children:"isTestAuction"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,d.jsx)(t.td,{children:"if yes, auction is a test auction (not a prod/live auction)"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"113"}),(0,d.jsx)(t.td,{children:"nbboAsk"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"current option nbbo ask (at time of record publish)"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"115"}),(0,d.jsx)(t.td,{children:"nbboAskSz"}),(0,d.jsx)(t.td,{children:"int"}),(0,d.jsx)(t.td,{children:"current option nbbo cum ask size (at time of record publish)"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"112"}),(0,d.jsx)(t.td,{children:"nbboBid"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"current option nbbo bid (at time of record publish)"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"114"}),(0,d.jsx)(t.td,{children:"nbboBidSz"}),(0,d.jsx)(t.td,{children:"int"}),(0,d.jsx)(t.td,{children:"current option nbbo cum bid size (at time of record publish)"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"116"}),(0,d.jsx)(t.td,{children:"surfacePrc"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"SR surface price @ record publish (uMid)"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"117"}),(0,d.jsx)(t.td,{children:"surfaceVol"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"SR surface volatility @ record publish"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"100"}),(0,d.jsx)(t.td,{children:"ticker"}),(0,d.jsx)(t.td,{children:"TickerKey"}),(0,d.jsx)(t.td,{children:"underlier ticker"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"126"}),(0,d.jsx)(t.td,{children:"timestamp"}),(0,d.jsx)(t.td,{children:"DateTime"}),(0,d.jsx)(t.td,{children:"SR system timestamp (record publish)"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"101"}),(0,d.jsx)(t.td,{children:"tradeDate"}),(0,d.jsx)(t.td,{children:"DateKey"}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"111"}),(0,d.jsx)(t.td,{children:"uAsk"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"underlier ask price (used to resolve limits during the last auction trial)"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"110"}),(0,d.jsx)(t.td,{children:"uBid"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"underlier bid price (used to resolve limits during the last auction trial)"})]})]})]}),(0,d.jsx)(t.h3,{id:"repeating-fields",children:"REPEATING FIELDS"}),(0,d.jsx)(t.p,{children:"AskSolution"}),(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Field"}),(0,d.jsx)(t.th,{children:"Type"}),(0,d.jsx)(t.th,{children:"Comment"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"124"}),(0,d.jsx)(t.td,{children:"matchPrice"}),(0,d.jsx)(t.td,{children:"double"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"125"}),(0,d.jsx)(t.td,{children:"matchSize"}),(0,d.jsx)(t.td,{children:"int"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"123"}),(0,d.jsx)(t.td,{children:"numResponders"}),(0,d.jsx)(t.td,{children:"byte"})]})]})]}),(0,d.jsx)(t.p,{children:"BidSolution"}),(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Field"}),(0,d.jsx)(t.th,{children:"Type"}),(0,d.jsx)(t.th,{children:"Comment"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"120"}),(0,d.jsx)(t.td,{children:"matchPrice"}),(0,d.jsx)(t.td,{children:"double"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"121"}),(0,d.jsx)(t.td,{children:"matchSize"}),(0,d.jsx)(t.td,{children:"int"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"119"}),(0,d.jsx)(t.td,{children:"numResponders"}),(0,d.jsx)(t.td,{children:"byte"})]})]})]})]})]})}function j(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(x,{...e})}):x(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>r,x:()=>c});var d=s(96540);const i={},n=d.createContext(i);function r(e){const t=d.useContext(n);return d.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),d.createElement(n.Provider,{value:t},e.children)}}}]);