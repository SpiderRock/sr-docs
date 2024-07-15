"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[22898],{69317:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var n=o(74848),s=o(28453);const i={title:"Auction Auto-Responders",sidebar_position:7},r=void 0,a={id:"SpiderRockConnectATS/AutoResponders",title:"Auction Auto-Responders",description:'SpiderRock allows its clients (hereafter "Subscribers") to establish auction auto-responders capable of receiving auction notices and responding to both SpiderRock Connect and on-exchange auctions.  These auto-responders are created via messages sent (and updated as needed) to SpiderRock Connect, and must be established in advance of an auction.',source:"@site/docs/SpiderRockConnectATS/7.AutoResponders.md",sourceDirName:"SpiderRockConnectATS",slug:"/SpiderRockConnectATS/AutoResponders",permalink:"/docs/SpiderRockConnectATS/AutoResponders",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"Auction Auto-Responders",sidebar_position:7},sidebar:"spiderRockConnectATSSidebar",previous:{title:"Responding Via FIX",permalink:"/docs/SpiderRockConnectATS/RespondingViaFIX"},next:{title:"ICE Chat Bot",permalink:"/docs/SpiderRockConnectATS/ICEChatBot"}},d={},c=[{value:"Auto-Responder Configuration Messages",id:"auto-responder-configuration-messages",level:2},{value:"Auto-Responding to VegaDir Auctions",id:"auto-responding-to-vegadir-auctions",level:3},{value:"Auto-Responding to Rev/Con Spread Auctions",id:"auto-responding-to-revcon-spread-auctions",level:3},{value:"Auto-Responding to Box Spread Auctions",id:"auto-responding-to-box-spread-auctions",level:3},{value:"Auto-Responding to Synthetic Spread Auctions",id:"auto-responding-to-synthetic-spread-auctions",level:3},{value:"Disclosures and Additional Information",id:"disclosures-and-additional-information",level:2}];function l(e){const t={a:"a",em:"em",h2:"h2",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:'SpiderRock allows its clients (hereafter "Subscribers") to establish auction auto-responders capable of receiving auction notices and responding to both SpiderRock Connect and on-exchange auctions.  These auto-responders are created via messages sent (and updated as needed) to SpiderRock Connect, and must be established in advance of an auction.'}),"\n",(0,n.jsx)(t.p,{children:"This feature is best utilized by Subscribers who can identify securities and total quantities (in contract, vega, or other terms) that they are generally willing to buy (or sell) in advance at mid-market or slightly better."}),"\n",(0,n.jsx)(t.p,{children:"These auto-responders can be configured to respond to auctions for both listed and/or FLEX options."}),"\n",(0,n.jsxs)(t.p,{children:["Auto-responders generally allow Subscribers to specify the underliers and expiries they are willing to respond to, the levels they are willing to respond at, and also, the total aggregate quantity they are willing to trade.  If all of a responder's criteria are met, SpiderRock auto-responders generate ",(0,n.jsx)(t.em,{children:"SpdrParentOrders"})," on the responder's behalf in order to participate in the auctions.  These parent order records are visible in SRSE and MLink Servers and are subject to all normal SpiderRock risk controls as well as potentially triggering a SpiderRock ",(0,n.jsx)(t.em,{children:"StageReview"})," sequence.  In addition, drop copies of the parent orders and all associated exec reports can be delivery to Subscribers via FIX drop copy."]}),"\n",(0,n.jsx)(t.p,{children:"All auto-responder messages have primary keys allowing them to be replaced by sending a subsequent message with the same primary key.  This mechanism can be used to update any auto-responder parameter including enabling or disabling it."}),"\n",(0,n.jsx)(t.p,{children:"Auto-responder records can be uploaded to SpiderRock via MLink/REST, MLink/WebSocket, SRSE APIs, or via the SpiderRock MLink Portal webApp tool."}),"\n",(0,n.jsx)(t.h2,{id:"auto-responder-configuration-messages",children:"Auto-Responder Configuration Messages"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Message"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/MessageSchemas/Schema/Topics/liquidity-notice/AutoResponderVegaDir",children:"AutoResponderVegaDir"})}),(0,n.jsx)(t.td,{children:"Used to respond to auctions in which a leg(s) is going the same direction."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/MessageSchemas/Schema/Topics/liquidity-notice/AutoResponderRC",children:"AutoResponderRC"})}),(0,n.jsx)(t.td,{children:"Used to respond to option rev/con spread (C/P/S) strategies."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/MessageSchemas/Schema/Topics/liquidity-notice/AutoResponderBX",children:"AutoResponderBX"})}),(0,n.jsx)(t.td,{children:"Used to respond to option box spread (C/P/C/P) strategies."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/MessageSchemas/Schema/Topics/liquidity-notice/AutoResponderSN",children:"AutoResponderSN"})}),(0,n.jsx)(t.td,{children:"Used to respond to option synthetic spread (C/P) strategies."})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"auto-responding-to-vegadir-auctions",children:"Auto-Responding to VegaDir Auctions"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsxs)(t.a,{href:"(/docs/MessageSchemas/Schema/Topics/2450-liquidity-notice/AutoResponderVegaDir.md)",children:[(0,n.jsx)(t.em,{children:"VegaDir"})," auto-responder"]})," defines the set of strikes that a responder is willing to either buy or sell via underlier, expiry, and delta range (",(0,n.jsx)(t.em,{children:"minXDelta"})," to ",(0,n.jsx)(t.em,{children:"maxXDelta"}),").  Any auction for a strike or combination of strikes within this 'risk box' that meets a minimum surface edge requirement and has not exhausted responder cumulative risk thresholds will be responded to. Auto-hedge instructions can (optionally) be supplied that will cause any resulting trades to be automatically auto-hedged if and when they occur."]}),"\n",(0,n.jsx)(t.p,{children:"Subscribers can establish as many auto-responder records as reasonably necessary to 'cover' the set of strikes that they are willing to buy or sell at any given time."}),"\n",(0,n.jsx)(t.h3,{id:"auto-responding-to-revcon-spread-auctions",children:"Auto-Responding to Rev/Con Spread Auctions"}),"\n",(0,n.jsx)(t.p,{children:"Rev/Con spread auto-responders define an underlier and expiry for which they are willing to execute a Rev/Con transaction (a transaction to lend or borrow shares by buying or selling shares vs synthetic call/put pair that will return the shares on expiration). While Rev/Con transactions can be viewed in option terms, it is often simpler to analyze them as short term lend/borrow transactions.  To help facilitate this analysis, auto-responders can specify their potential rev/con auction response limit price using a term stock lending rate, a term cash discount rate, and the present value of the expected term dividend stream. SpiderRock allows auto-responders to convert this information into a Rev/Con premium limit level for the purpose of participating in Rev/Con auctions."}),"\n",(0,n.jsx)(t.p,{children:"Responders would typically use this type of record to pre-load an inventory list and expiry terms that they are willing to lend (or borrow) shares at if or when appropriate auctions occur."}),"\n",(0,n.jsx)(t.h3,{id:"auto-responding-to-box-spread-auctions",children:"Auto-Responding to Box Spread Auctions"}),"\n",(0,n.jsx)(t.p,{children:"Box spread auto-responders are similar to Rev/Con auto-responders except they are involved in the buying and selling of a BOX spread (a transaction to lend or borrow cash that will return on expiration).  To help support this type of auction, SpiderRock allows auction response limit prices to be specified as a term cash discount rate."}),"\n",(0,n.jsx)(t.p,{children:"Auto-responders can use this type of record to pre-load expiries for which they are willing to lend (or borrow) cash if or when appropriate auctions occur."}),"\n",(0,n.jsx)(t.h3,{id:"auto-responding-to-synthetic-spread-auctions",children:"Auto-Responding to Synthetic Spread Auctions"}),"\n",(0,n.jsx)(t.p,{children:"Synthetic spread auto-responders are willing to execute a synthetic spread transaction (a transaction to create temporary exposure to an underlier similar to that of a single stock future).  To help support this type of auto-responder, SpiderRock allows auction response limit prices to be specified as offsets to the current underlier stock NBBO price."}),"\n",(0,n.jsx)(t.p,{children:"Auto-responders can use this type of record to pre-load underliers and expiries for which they are willing to execute synthetic spread transactions if or when appropriate auctions occur."}),"\n",(0,n.jsx)(t.h2,{id:"disclosures-and-additional-information",children:"Disclosures and Additional Information"}),"\n",(0,n.jsx)(t.p,{children:"The information above provides a brief summary of certain technical aspects of SpiderRock Connect and is compiled for concise reference purposes only. While it encapsulates key points and provides an overview of certain content found in the SpiderRock Connect subscriber Manual, it may not capture every detail"})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},28453:(e,t,o)=>{o.d(t,{R:()=>r,x:()=>a});var n=o(96540);const s={},i=n.createContext(s);function r(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);