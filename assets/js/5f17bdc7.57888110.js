"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[22898],{69317:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var n=o(74848),r=o(28453);const s={title:"Auction Auto-Responders",sidebar_position:7},i=void 0,a={id:"SpiderRockConnectATS/AutoResponders",title:"Auction Auto-Responders",description:"SpiderRock allows clients to setup auction auto-responders capable to receiving auction notices and responding to both SpiderRock Connect auctions as well as on-exchange auctions.  In order to establish an auto-responder, clients send and update messages containing the necessary parameters for automatic responding.",source:"@site/docs/SpiderRockConnectATS/7.AutoResponders.md",sourceDirName:"SpiderRockConnectATS",slug:"/SpiderRockConnectATS/AutoResponders",permalink:"/docs/SpiderRockConnectATS/AutoResponders",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"Auction Auto-Responders",sidebar_position:7},sidebar:"spiderRockConnectATSSidebar",previous:{title:"Responding Via FIX",permalink:"/docs/SpiderRockConnectATS/RespondingViaFIX"},next:{title:"ICE Chat Bot",permalink:"/docs/SpiderRockConnectATS/ICEChatBot"}},d={},c=[{value:"AutoResponder Configuration Messages",id:"autoresponder-configuration-messages",level:2},{value:"Auto-Responding to VegaDir Auctions",id:"auto-responding-to-vegadir-auctions",level:3},{value:"Auto-Responding to Rev/Con Spread Auctions",id:"auto-responding-to-revcon-spread-auctions",level:3},{value:"Auto-Responding to Box Spread Auctions",id:"auto-responding-to-box-spread-auctions",level:3},{value:"Auto-Responding to Synthetic Spread Auctions",id:"auto-responding-to-synthetic-spread-auctions",level:3}];function l(e){const t={a:"a",h2:"h2",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"SpiderRock allows clients to setup auction auto-responders capable to receiving auction notices and responding to both SpiderRock Connect auctions as well as on-exchange auctions.  In order to establish an auto-responder, clients send and update messages containing the necessary parameters for automatic responding."}),"\n",(0,n.jsx)(t.p,{children:"Auto-responders must be setup in advance of an auction and are best utilized by clients who can identify securities that they are generally willing to buy (or sell) at mid-market or slightly better levels and total quantities (in contract, vega, or other terms) that they are willing to execute in advance."}),"\n",(0,n.jsx)(t.p,{children:"Auto-responders can be configured to respond to auctions for both listed and/or FLEX options."}),"\n",(0,n.jsx)(t.p,{children:"Auto-responders generally allow clients to specify the underliers and expiries they are willing to respond to, the levels they are willing to respond at, and also, the total aggregate quantity they are will to trade.  If all of a responders criteria are met, SpiderRock auto-responders generate SpdrParentOrders on the responders behalf in order to participate in auctions.  These parent order records are visible in SRSE and MLinkServers and are subject to all normal SpiderRock risk controls as well as potentially triggering a SpiderRock StageReview sequence.  In addition, drop copies of the parent orders and all associated exec reports can be delivery to clients via FIX drop copy."}),"\n",(0,n.jsx)(t.p,{children:"All auto-responder messages have primary keys and can be replaced by sending a subsequent message with the same primary key.  This mechanism can be used to update any auto-responder parameter including enabling or disabling it."}),"\n",(0,n.jsx)(t.p,{children:"Auto-responder records can be uploaded to SpiderRock via the MLink/REST, MLink/WebSocket, and SRSE APIs or via the SpiderRock MLink Portal webApp tool."}),"\n",(0,n.jsx)(t.h2,{id:"autoresponder-configuration-messages",children:"AutoResponder Configuration Messages"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Message"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"../../MessageSchemas/Schema/Topics/liquidity-notice/AutoResponderVegaDir",children:"AutoResponderVegaDir"})}),(0,n.jsx)(t.td,{children:"Used to respond to auctions in which a leg(s) are going the same direction."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"../../MessageSchemas/Schema/Topics/liquidity-notice/AutoResponderRC",children:"AutoResponderRC"})}),(0,n.jsx)(t.td,{children:"Used to respond to option rev/con spread (C/P/S) stratgies."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"../../MessageSchemas/Schema/Topics/liquidity-notice/AutoResponderRC",children:"AutoResponderBX"})}),(0,n.jsx)(t.td,{children:"Used to respond to option box spread (C/P/C/P) stratgies."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"../../MessageSchemas/Schema/Topics/liquidity-notice/AutoResponderRC",children:"AutoResponderSN"})}),(0,n.jsx)(t.td,{children:"Used to respond to option synthetic spread (C/P) stratgies."})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"auto-responding-to-vegadir-auctions",children:"Auto-Responding to VegaDir Auctions"}),"\n",(0,n.jsx)(t.p,{children:"The VegaDir auto-responder defines, via underlier, expiry range (min expiry to max expiry) and delta range (minXDelta to maxXDelta) as a set of strikes that a responder is willing to either buy or sell.  Any auction for a strike or combination of strikes within this 'risk box' and that meets a minimum surface edge requirement and has not exhausted responder cumulative risk thresholds will be responded to. Auto-hedge instructions can (optionally) be supplied that will cause any resulting trades to be automatically auto-hedged if/when they occur."}),"\n",(0,n.jsx)(t.p,{children:"Clients can establish as many auto-responder records as reasonably necessary to 'cover' the set of strikes that they are willing to buy or sell at any given time."}),"\n",(0,n.jsx)(t.h3,{id:"auto-responding-to-revcon-spread-auctions",children:"Auto-Responding to Rev/Con Spread Auctions"}),"\n",(0,n.jsx)(t.p,{children:"Rev/Con spread auto-responders define an underlier and expiry for which they are willing to execute a Rev/Con transaction (a transaction to lend or borrow shares by buying or selling shares vs synthetic call/put pair that will return the shares on expiration). While Rev/Con transactions can be viewed in option terms, it is often simpler to view them as short term lend/borrow transactions.  To help facilitate this, auto-responder records let client specify their potential rev/con auction response limit price using a term stock lending rate, a term cash discount rate, and the present value of expected term dividend stream which a SpiderRock auto-responder will convert to a Rev/Con premium limit level for the purpose of participating in Rev/Con auctions."}),"\n",(0,n.jsx)(t.p,{children:"Responders would typically use this type record to pre-load an inventory list and expiry terms that they are willing to lend (or borrow) shares if or when appropriate auctions occur."}),"\n",(0,n.jsx)(t.h3,{id:"auto-responding-to-box-spread-auctions",children:"Auto-Responding to Box Spread Auctions"}),"\n",(0,n.jsx)(t.p,{children:"Box spread auto-responders are similar to Rev/Con auto-responders except they are tailored for buy and sell a BOX spread (a transaction to lend or borrow cash that will return on expiration).  To help faciliate this type of auction, auto-responder allows auction response limit prices to be specified as a term cash discount rate."}),"\n",(0,n.jsx)(t.p,{children:"Responders would typically use this type record to pre-load expiries for which they are willing to lend (or borrow) cash if or when appropriate auctions occur."}),"\n",(0,n.jsx)(t.h3,{id:"auto-responding-to-synthetic-spread-auctions",children:"Auto-Responding to Synthetic Spread Auctions"}),"\n",(0,n.jsx)(t.p,{children:"Synthetic spread auto-responders are willing to execute a synthetic spread transaction (a transaction to create temporary exposure to underlier similar to that of a single stock future).  To help faciliate this type of auction, auto-responder allows auction response limit prices to be specified as offsets to the current underlier stock NBBO market."}),"\n",(0,n.jsx)(t.p,{children:"Responders would typically use this type record to pre-load underliers and expiries for which they are willing to execute synthetic spread transactions if or when appropriate auctions occur."})]})}function p(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},28453:(e,t,o)=>{o.d(t,{R:()=>i,x:()=>a});var n=o(96540);const r={},s=n.createContext(r);function i(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);