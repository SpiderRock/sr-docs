"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[31185],{57820:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>x,frontMatter:()=>n,metadata:()=>c,toc:()=>h});var s=i(74848),d=i(28453);const n={title:"AuctionState"},r="Message: AuctionState (ID: 2464)",c={id:"Schema/Topics/liquidity-notice/AuctionState",title:"AuctionState",description:"META DATA  (Topic: liquidity-notice )",source:"@site/docs/Schema/Topics/2450-liquidity-notice/AuctionState.md",sourceDirName:"Schema/Topics/2450-liquidity-notice",slug:"/Schema/Topics/liquidity-notice/AuctionState",permalink:"/sr-docs/docs/Schema/Topics/liquidity-notice/AuctionState",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"AuctionState"},sidebar:"schemaSidebar",previous:{title:"AuctionPrintSN",permalink:"/sr-docs/docs/Schema/Topics/liquidity-notice/AuctionPrintSN"},next:{title:"AutoResponderBX",permalink:"/sr-docs/docs/Schema/Topics/liquidity-notice/AutoResponderBX"}},l={},h=[{value:"META DATA  (Topic: liquidity-notice )",id:"meta-data--topic-liquidity-notice-",level:3},{value:"PRIMARY KEY",id:"primary-key",level:3},{value:"BODY",id:"body",level:3},{value:"REPEATING FIELDS",id:"repeating-fields",level:3}];function o(e){const t={a:"a",h1:"h1",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.h1,{id:"message-auctionstate-id-2464",children:["Message: AuctionState ",(0,s.jsx)("span",{className:"small-text",children:"(ID: 2464)"})]}),"\n",(0,s.jsxs)("div",{className:"single-message-meta",children:[(0,s.jsx)(t.h3,{id:"meta-data--topic-liquidity-notice-",children:"META DATA  (Topic: liquidity-notice )"}),(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Attribute"}),(0,s.jsx)(t.th,{children:"Value"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"MLink Token"}),(0,s.jsx)(t.td,{children:"SRConnect"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"SRSE Product"}),(0,s.jsx)(t.td,{children:"SRTrade"})]})]})]})]}),"\n",(0,s.jsxs)("div",{className:"single-message-primarykey",children:[(0,s.jsx)(t.h3,{id:"primary-key",children:"PRIMARY KEY"}),(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Field"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Comment"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"noticeNumber"}),(0,s.jsx)(t.td,{children:"long"}),(0,s.jsx)(t.td,{})]})})]})]}),"\n",(0,s.jsxs)("div",{className:"single-message-body",children:[(0,s.jsx)(t.h3,{id:"body",children:"BODY"}),(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Field"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Comment"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"auctionType"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"../../Enums/AuctionType",children:"enum : AuctionType"})}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"blockAuctionCounter"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"blockAuctionStatus"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"../../Enums/BlockAuctionStatus",children:"enum : BlockAuctionStatus"})}),(0,s.jsx)(t.td,{children:"Active,FinalTrial,Crossing,Crossed,CrossFailed,Closed"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"custPrc"}),(0,s.jsx)(t.td,{children:"double"}),(0,s.jsx)(t.td,{children:"public cust price"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"custQty"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"custSide"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"../../Enums/BuySell",children:"enum : BuySell"})}),(0,s.jsx)(t.td,{children:"if available"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"hasCustPrc"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"../../Enums/YesNo",children:"enum : YesNo"})}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"isTestAuction"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"../../Enums/YesNo",children:"enum : YesNo"})}),(0,s.jsx)(t.td,{children:"if yes, auction is a test auction (not a prod/live auction)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"nbboAsk"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"current option nbbo ask (at time of record publish)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"nbboAskSz"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"current option nbbo cum ask size (at time of record publish)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"nbboBid"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"current option nbbo bid (at time of record publish)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"nbboBidSz"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"current option nbbo cum bid size (at time of record publish)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"surfacePrc"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"SR surface price @ record publish (uMid)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"surfaceVol"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"SR surface volatility @ record publish"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"ticker"}),(0,s.jsx)(t.td,{children:"TickerKey"}),(0,s.jsx)(t.td,{children:"underlier ticker"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"timestamp"}),(0,s.jsx)(t.td,{children:"DateTime"}),(0,s.jsx)(t.td,{children:"SR system timestamp (record publish)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"tradeDate"}),(0,s.jsx)(t.td,{children:"DateKey"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"uAsk"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"underlier ask price (used to resolve limits during the last auction trial)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"uBid"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"underlier bid price (used to resolve limits during the last auction trial)"})]})]})]}),(0,s.jsx)(t.h3,{id:"repeating-fields",children:"REPEATING FIELDS"}),(0,s.jsx)(t.p,{children:"AskSolution"}),(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Field"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Comment"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"matchPrice"}),(0,s.jsx)(t.td,{children:"double"}),(0,s.jsx)(t.td,{children:"current auction cross price (in exchange price increments)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"matchSize"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"current auction size available @ match price"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"numResponders"}),(0,s.jsx)(t.td,{children:"byte"}),(0,s.jsx)(t.td,{})]})]})]}),(0,s.jsx)(t.p,{children:"BidSolution"}),(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Field"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Comment"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"matchPrice"}),(0,s.jsx)(t.td,{children:"double"}),(0,s.jsx)(t.td,{children:"current auction cross price (in exchange price increments)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"matchSize"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"current auction size available @ match price"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"numResponders"}),(0,s.jsx)(t.td,{children:"byte"}),(0,s.jsx)(t.td,{})]})]})]})]})]})}function x(e={}){const{wrapper:t}={...(0,d.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},28453:(e,t,i)=>{i.d(t,{R:()=>r,x:()=>c});var s=i(96540);const d={},n=s.createContext(d);function r(e){const t=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:r(e.components),s.createElement(n.Provider,{value:t},e.children)}}}]);