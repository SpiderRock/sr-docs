"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([["87773"],{5251:function(e,i,t){t.r(i),t.d(i,{default:()=>h,frontMatter:()=>o,metadata:()=>n,assets:()=>d,toc:()=>l,contentTitle:()=>c});var n=JSON.parse('{"id":"SpiderRockConnectATS/ICEChatBot","title":"ICE Chat Bot","description":"SpiderRock ATS allows customers to discover and trade with each other in a transparent, all-electronic auction notice/response format utilizing both fast Flash auctions and slower Block auctions.","source":"@site/versioned_docs/version-8.5.3.1/SpiderRockConnectATS/8.ICEChatBot.md","sourceDirName":"SpiderRockConnectATS","slug":"/SpiderRockConnectATS/ICEChatBot","permalink":"/docs/8.5.3.1/SpiderRockConnectATS/ICEChatBot","draft":false,"unlisted":false,"tags":[],"version":"8.5.3.1","sidebarPosition":8,"frontMatter":{"title":"ICE Chat Bot","sidebar_position":8},"sidebar":"spiderRockConnectATSSidebar","previous":{"title":"Auction Auto-Responders","permalink":"/docs/8.5.3.1/SpiderRockConnectATS/AutoResponders"},"next":{"title":"EXS Concierge Desk","permalink":"/docs/8.5.3.1/SpiderRockConnectATS/ConciergeDesk"}}'),s=t("52676"),r=t("91503");let o={title:"ICE Chat Bot",sidebar_position:8},c=void 0,d={},l=[{value:"Access Off-screen Liquidity Using SpiderRock&#39;s Block Auction",id:"access-off-screen-liquidity-using-spiderrocks-block-auction",level:2},{value:"Responding to Block Auctions via ICE Chat",id:"responding-to-block-auctions-via-ice-chat",level:2},{value:"Block Auction Format in ICE Chat",id:"block-auction-format-in-ice-chat",level:2},{value:"Single-Leg Order",id:"single-leg-order",level:3},{value:"Order with a Stock Leg",id:"order-with-a-stock-leg",level:3},{value:"Multi-Leg Order",id:"multi-leg-order",level:3},{value:"Multi-Leg Order with Different Expirations",id:"multi-leg-order-with-different-expirations",level:3},{value:"ICE Chat Block Auction Notice",id:"ice-chat-block-auction-notice",level:2},{value:"Response Examples",id:"response-examples",level:3},{value:"Response Confirmation",id:"response-confirmation",level:2},{value:"Response Confirmation When Selling Stock",id:"response-confirmation-when-selling-stock",level:3},{value:"Response Status Request",id:"response-status-request",level:2},{value:"Modify Response Order",id:"modify-response-order",level:2},{value:"Auction Cancel",id:"auction-cancel",level:2},{value:"Auction Completion",id:"auction-completion",level:2},{value:"Full ICE Chat Responder Dictionary",id:"full-ice-chat-responder-dictionary",level:2},{value:"Auction Filters",id:"auction-filters",level:2},{value:"Initiating with ICE Chat",id:"initiating-with-ice-chat",level:2}];function a(e){let i={blockquote:"blockquote",em:"em",h2:"h2",h3:"h3",img:"img",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.p,{children:"SpiderRock ATS allows customers to discover and trade with each other in a transparent, all-electronic auction notice/response format utilizing both fast Flash auctions and slower Block auctions."}),"\n",(0,s.jsx)(i.p,{children:"The SpiderRock ATS can be accessed in one of three ways, via:"}),"\n",(0,s.jsxs)("ol",{children:[(0,s.jsx)("li",{children:" The SpiderRock Connect Trade application; "}),(0,s.jsx)("li",{children:" An API such as MLink, SRSE, or FIX; or "}),(0,s.jsxs)("li",{children:[" ICE Chat. (",(0,s.jsx)("b",{children:"NOTE"})," only Block Auctions are available via ICE Chat.) "]})]}),"\n",(0,s.jsxs)(i.p,{children:["This document is focused on how clients of SpiderRock can respond or initiate ",(0,s.jsx)(i.strong,{children:"Block Auctions"})," via ICE Chat."]}),"\n",(0,s.jsx)(i.h2,{id:"access-off-screen-liquidity-using-spiderrocks-block-auction",children:"Access Off-screen Liquidity Using SpiderRock's Block Auction"}),"\n",(0,s.jsx)(i.p,{children:"SpiderRock created Block Auctions to efficiently connect initiators of block-size option orders with a comprehensive network of liquidity providers via a fully electronic auction.  This innovative auction process removes manual interaction and invites institutional clients to transact electronically with a wide array of liquidity providers via the SpiderRock ATS. Initiating clients can access both the SpiderRock Network of liquidity providers as well as existing trading counterparties upon request.  Responding clients will be part of the SpiderRock Network of liquidity providers and have access to all Block Auctions."}),"\n",(0,s.jsx)(i.h2,{id:"responding-to-block-auctions-via-ice-chat",children:"Responding to Block Auctions via ICE Chat"}),"\n",(0,s.jsx)(i.p,{children:"Clients of SpiderRock have access to our Concierge Desk which provides high-touch trading services.  For clients who opt to forgo utilizing the SpiderRock Connect Trade application or integrating using an API, we offer access to our Block Auctions via ICE Chat.  Members of our Concierge Desk will create a persistent ICE Chatroom that includes the client(s), members of SpiderRock\u2019s Concierge Desk, as well as our API connected bot.  As Block Auctions are generated using our ATS, they will be broadcast to users of SpiderRock Connect Trade, to clients connected via API, as well as ICE Chatrooms.  Once a Block Auction is initiated, clients connected via ICE Chat will receive an auction notice in their ICE Chatroom from our bot."}),"\n",(0,s.jsx)(i.h2,{id:"block-auction-format-in-ice-chat",children:"Block Auction Format in ICE Chat"}),"\n",(0,s.jsx)(i.p,{children:"When a Block Auction is initiated an ICE Chat user will receive a notice similar to the examples below:"}),"\n",(0,s.jsx)(i.h3,{id:"single-leg-order",children:"Single-Leg Order"}),"\n",(0,s.jsxs)(i.blockquote,{children:["\n",(0,s.jsxs)(i.p,{children:["[#A0U3]: AMZN Jan 17th '25 250C $1.47 Bid 250x [Prc, AoN] {Start} ",(0,s.jsx)("br",{}),"\n[#A0U3]: ** uprc: 226.49, de: 0.15, ga: 0.012, se: 0.003"]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"This auction notice can be broken into these distinct sections:"}),"\n",(0,s.jsxs)(i.table,{children:[(0,s.jsx)(i.thead,{children:(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.th,{children:"Fragment"}),(0,s.jsx)(i.th,{children:"Description"})]})}),(0,s.jsxs)(i.tbody,{children:[(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.strong,{children:"#A0U3"})}),(0,s.jsx)(i.td,{children:"Auction short code - Unique for a trading day"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.strong,{children:"AMZN Jan 17th '25 250C"})}),(0,s.jsxs)(i.td,{children:["Item being auctioned ",(0,s.jsx)("br",{})," Note that the year will only be displayed if it is not the current year."]})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.strong,{children:"$1.47"})}),(0,s.jsx)(i.td,{children:"Price of the option"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.strong,{children:"Bid"})}),(0,s.jsx)(i.td,{children:"Direction of order"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.strong,{children:"250x"})}),(0,s.jsx)(i.td,{children:"Size"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.strong,{children:"Prc"})}),(0,s.jsx)(i.td,{children:"Order limit type"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.strong,{children:"AoN"})}),(0,s.jsxs)(i.td,{children:["Size condition ",(0,s.jsx)("br",{})," (Short for All or None)"]})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.strong,{children:"Start"})}),(0,s.jsxs)(i.td,{children:["Message type ",(0,s.jsx)("br",{})," (Indicates that this is the start of this auction.)"]})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.strong,{children:"**"})}),(0,s.jsxs)(i.td,{children:["Specifies that the subsequent line pertains to greeks ",(0,s.jsx)("br",{})," ",(0,s.jsx)("i",{children:"Contact your rep if you would like to disable this line."})]})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.strong,{children:"uprc: 226.49"})}),(0,s.jsx)(i.td,{children:"The price of the underlying at the start of the auction"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.strong,{children:"de: 0.15"})}),(0,s.jsx)(i.td,{children:"Reference delta of the option or package"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.strong,{children:"ga: 0.012"})}),(0,s.jsx)(i.td,{children:"Reference gamma of the option or package"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.strong,{children:"se: 0.03"})}),(0,s.jsx)(i.td,{children:"SpiderRock surface edge for the option or package"})]})]})]}),"\n",(0,s.jsx)(i.h3,{id:"order-with-a-stock-leg",children:"Order with a Stock Leg"}),"\n",(0,s.jsx)(i.p,{children:"This auction notice describes an order with an attached stock leg. Please note that a greek line will also be included and will be identical to the example above."}),"\n",(0,s.jsxs)(i.blockquote,{children:["\n",(0,s.jsx)(i.p,{children:"[#A0M8]: AAPL Feb 21st '25 265C (Call) vs 243.270 21 delta $2.54 Offer 250x (pkg px 48.5467) [PkgNeutral, AoN] {Start}"}),"\n"]}),"\n",(0,s.jsxs)(i.table,{children:[(0,s.jsx)(i.thead,{children:(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.th,{children:"Fragment"}),(0,s.jsx)(i.th,{children:"Description"})]})}),(0,s.jsxs)(i.tbody,{children:[(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.strong,{children:"(Call)"})}),(0,s.jsx)(i.td,{children:"Spread shape"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.strong,{children:"vs"})}),(0,s.jsx)(i.td,{children:"Indicates this order is tied to stock"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.strong,{children:"243.270"})}),(0,s.jsx)(i.td,{children:"Tied ref price"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.strong,{children:"21 delta"})}),(0,s.jsx)(i.td,{children:"Number of stock shares"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.strong,{children:"(pkg px 48.5467)"})}),(0,s.jsx)(i.td,{children:"Package price"})]})]})]}),"\n",(0,s.jsx)(i.p,{children:"You may encounter a shortened form of the auction notice above when receiving update messages concerning the same auction."}),"\n",(0,s.jsxs)(i.blockquote,{children:["\n",(0,s.jsx)(i.p,{children:"[#A0M8]; $$ AAPL Feb 21st '25 265C w/21sh (Buy tied: 243.270) $2.54 Offer 250x"}),"\n"]}),"\n",(0,s.jsxs)(i.table,{children:[(0,s.jsx)(i.thead,{children:(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.th,{children:"Fragment"}),(0,s.jsx)(i.th,{children:"Description"})]})}),(0,s.jsx)(i.tbody,{children:(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.strong,{children:"$$"})}),(0,s.jsx)(i.td,{children:"Specifies that the subsequent line pertains to auctions you have responded to"})]})})]}),"\n",(0,s.jsx)(i.h3,{id:"multi-leg-order",children:"Multi-Leg Order"}),"\n",(0,s.jsxs)(i.blockquote,{children:["\n",(0,s.jsx)(i.p,{children:"[#A0O2]: AMZN Mar 21st '25 240C/250C -1/1 (CSpread) vs 225.050 9 delta $2.90 Offer 500x (pkg px 17.3545) [PkgNeutral, AoN] {Start}"}),"\n"]}),"\n",(0,s.jsxs)(i.table,{children:[(0,s.jsx)(i.thead,{children:(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.th,{children:"Fragment"}),(0,s.jsx)(i.th,{children:"Description"})]})}),(0,s.jsxs)(i.tbody,{children:[(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.strong,{children:"240C/250C"})}),(0,s.jsx)(i.td,{children:"The first leg is before the '/' and the second leg is after"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.strong,{children:"-1/1"})}),(0,s.jsxs)(i.td,{children:["Direction and ratio of the legs ",(0,s.jsx)("br",{})," (-1 indicates a sell and 1 indicates a buy)"]})]})]})]}),"\n",(0,s.jsx)(i.h3,{id:"multi-leg-order-with-different-expirations",children:"Multi-Leg Order with Different Expirations"}),"\n",(0,s.jsxs)(i.blockquote,{children:["\n",(0,s.jsx)(i.p,{children:"[#A0O4]: AMZN (Mar 21st '25 240C) / (May 16th '25 260C) -1/1 (Mixed) $1.04 Offer 250x [Prc, AoN] {Start}"}),"\n"]}),"\n",(0,s.jsxs)(i.table,{children:[(0,s.jsx)(i.thead,{children:(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.th,{children:"Fragment"}),(0,s.jsx)(i.th,{children:"Description"})]})}),(0,s.jsx)(i.tbody,{children:(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.strong,{children:"(Mar 21st '25 240C) / (May 16th '25 260C)"})}),(0,s.jsx)(i.td,{children:"The first expiry is before the '/' and the second expiry is after"})]})})]}),"\n",(0,s.jsxs)(i.blockquote,{children:["\n",(0,s.jsx)(i.p,{children:"[#A0O9]: AMZN (Apr 17th '25 240C) / (May 16th '25 240C/260C) -1/1/-1 (Mixed) $5.06 Offer 250x [Prc, AoN] {Start}"}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"Displayed above is an example where there are three legs but only two expiration dates. The dates are separated by a '/' accordingly - (Apr 17th '25 240C) / (May 16th '25 240C/260C) - but the direction of each order is displayed in order of the legs."}),"\n",(0,s.jsx)(i.h2,{id:"ice-chat-block-auction-notice",children:"ICE Chat Block Auction Notice"}),"\n",(0,s.jsx)(i.p,{children:"We require clients to follow a specific format when responding to auction notices in an ICE Chatroom.  Responses should start with our auction short code so that we can accurately identify the correct auction notice, unless they are responding to the most recent notice.  Clients can begin their response with any of these formats: [#A1N2], #A1N2 or A1N2."}),"\n",(0,s.jsx)(i.p,{children:"Following the auction short code clients can enter a bid or offer price as a static price or allow their price to fluctuate using a delta, gamma, and reference price."}),"\n",(0,s.jsx)(i.p,{children:"A few notes:"}),"\n",(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{children:" If an Auction Response is submitted without a size parameter, the size prompted for confirmation and auction participation will be the full size  of the initiating order. "}),(0,s.jsxs)("li",{children:[" If an Auction Response is submitted for SpiderRock delta-adjustment using the 'ref' keyword and includes a delta override, Underlying Price (",(0,s.jsx)("i",{children:"uPrc"}),") must also be provided. If no ",(0,s.jsx)("i",{children:"uPrc"})," is provided, the Response will not be accepted and must be re-submitted with ",(0,s.jsx)("i",{children:"uPrc"}),". "]}),(0,s.jsxs)("li",{children:[" If an Auction Response is submitted for SpiderRock delta-adjustment using the 'ref' keyword with Underlying Price (",(0,s.jsx)("i",{children:"uPrc"}),") and no other override, the 'ref' values prompted for confirmation and auction participation will be supplied by SpiderRock based on our analysis of current market conditions at time of submission."]}),(0,s.jsxs)("li",{children:["When submitting override values for SpiderRock delta-adjustment, Underlying Price (",(0,s.jsx)("i",{children:"uPrc"}),") can be submitted in whole dollar terms or dollar and cents terms, to three decimals. Delta (de) should be provided in decimal format as a value in the range from 1.000 to -1.000, up to three decimals. Note that delta is not handled as an absolute value. Gamma (ga) should be provided in decimal format, as a positive value, up to three decimal places."]})]}),"\n",(0,s.jsx)(i.h3,{id:"response-examples",children:"Response Examples"}),"\n",(0,s.jsxs)(i.table,{children:[(0,s.jsx)(i.thead,{children:(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.th,{children:"Action"}),(0,s.jsx)(i.th,{children:"Example"})]})}),(0,s.jsxs)(i.tbody,{children:[(0,s.jsxs)(i.tr,{children:[(0,s.jsxs)(i.td,{children:[(0,s.jsx)(i.strong,{children:"Submitting a full size bid"})," (unadjusted)"]}),(0,s.jsxs)(i.td,{children:['"A1N2 bid 7.00" ',(0,s.jsx)("br",{})," \u201CA1N2 7.00\u201D ",(0,s.jsx)("br",{}),' "#A1N2 pay 7.00\u201D ',(0,s.jsx)("br",{}),' \u201CA1N2 b 7.00"']})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsxs)(i.td,{children:[(0,s.jsx)(i.strong,{children:"Submitting a full size offer"})," (unadjusted)"]}),(0,s.jsxs)(i.td,{children:['\u201CA1N2 offer 7.00" ',(0,s.jsx)("br",{})," \u201CA1N2 7.00\u201D ",(0,s.jsx)("br",{})," \u201C#A1N2 collect 7.00\u201D ",(0,s.jsx)("br",{})," \u201CA1N2 o 7.00\u201D"]})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.strong,{children:"Submitting a partial size bid or offer"})}),(0,s.jsxs)(i.td,{children:["\u201CA1N2 bid 7.00 50x\u201D ",(0,s.jsx)("br",{})," \u201C[#A1N2] @ 7.00 50x\u201D"]})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.strong,{children:"Submitting an adjusted/tied bid or offer"})}),(0,s.jsx)(i.td,{children:"\u201CA1N2 bid 7.00 ref uprc 50.50\u201D"})]})]})]}),"\n",(0,s.jsx)(i.h2,{id:"response-confirmation",children:"Response Confirmation"}),"\n",(0,s.jsx)(i.p,{children:"When submitting an auction response, there will be a 15 second window in which you can confirm or deny the order.  The user will receive a confirmation message like the below:"}),"\n",(0,s.jsxs)(i.blockquote,{children:["\n",(0,s.jsx)(i.p,{children:"[#A0Q0]; $$ AAPL Apr 17th '25 260C   $6.85  Offer 500x (T.DS2.CLIENT Bid 500 For $6.83) {Confirm} Y/N? *Auction ends in 01:17.703*"}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"This message confirms that we received this message from the user specified in the parentheses.  Responding in the chat with \u201CY\u201D or \u201Cy\u201D will submit the user\u2019s response to the ATS.  Responding \u201CN\u201D or \u201Cn\u201D will stop the response from being sent to the ATS.  The user can also type nothing, because if we have not received a response in the 15 second response window the order will be timed out."}),"\n",(0,s.jsx)("ul",{children:(0,s.jsxs)(i.p,{children:[(0,s.jsx)("b",{children:"It is IMPORTANT to note"})," that a response is not officially confirmed and an active order UNTIL you received a {Working} message from SpiderRock to you. Further details can be found in the ",(0,s.jsx)("a",{href:"https://docs.spiderrockconnect.com/docs/next/SpiderRockConnectATS/ICEChatBot/#response-status-request",children:"Response Status Request"})," section."]})}),"\n",(0,s.jsx)(i.h3,{id:"response-confirmation-when-selling-stock",children:"Response Confirmation When Selling Stock"}),"\n",(0,s.jsx)(i.p,{children:"When an order contains a stock leg, the response confirmation workflow includes additional steps."}),"\n",(0,s.jsx)(i.p,{children:"The user is required to indicate if the order is long or short. If this information is not included in the original response message, this confirmation message will be sent:"}),"\n",(0,s.jsxs)(i.blockquote,{children:["\n",(0,s.jsx)(i.p,{children:"[#A0M8]; $$ AAPL Feb 21st '25 265C w/21sh (Buy tied: 243.270) $2.54 Offer 250x (T.DS2.CLIENT Bid 250 For $2.52) {Confirm} Selling stock. (L)ong or (S)hort or (C)ancel?"}),"\n"]}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsxs)(i.strong,{children:["If ",(0,s.jsx)(i.em,{children:"(L)ong"})," is sent,"]})," this will be considered a confirmation and the order will be submitted."]}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsxs)(i.strong,{children:["If ",(0,s.jsx)(i.em,{children:"(S)hort"})," is sent AND a locate is supplied,"]})," this will be considered a confirmation and the order will be submitted."]}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsxs)(i.strong,{children:["If ",(0,s.jsx)(i.em,{children:"(S)hort"})," is sent AND default locates are in place in account configuration,"]})," another confirmation message will be sent out to confirm those locate defaults:"]}),"\n",(0,s.jsxs)(i.blockquote,{children:["\n",(0,s.jsx)(i.p,{children:"[#A0M8]; $$ AAPL Feb 21st '25 265C w/21sh (Buy tied: 243.270) $2.54 Offer 250x (T.DS2.CLIENT Bid 250 For $2.52 Short) {Confirm} LocateFirm=bnp LocateID=123. Please Confirm Y/N or (C)ancel"}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"Upon confirmation, the order will be submitted."}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsxs)(i.strong,{children:["If ",(0,s.jsx)(i.em,{children:"(S)hort"})," is sent AND there are no default locates AND locates are not provided,"]})," a message requesting locate details will be sent out:"]}),"\n",(0,s.jsxs)(i.blockquote,{children:["\n",(0,s.jsxs)(i.p,{children:["[#A0M8]; $$ AAPL Feb 21st '25 265C w/21sh (Buy tied: 243.270) $2.54 Offer 250x (T.DS2.CLIENT Bid 250 For $2.52 Short) {Confirm} Please Enter LocateFirm",":LocateID"," or (C)ancel`"]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"Upon supplying these locate details, this confirmation message will be sent out to confirm those locate defaults:"}),"\n",(0,s.jsxs)(i.blockquote,{children:["\n",(0,s.jsx)(i.p,{children:"[#A0M8]; $$ AAPL Feb 21st '25 265C w/21sh (Buy tied: 243.270) $2.54 Offer 250x (T.DS2.CLIENT Bid 250 For $2.52 Short) {Confirm} LocateFirm=bnp LocateID=123. Please Confirm Y/N or (C)ancel`"}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"Upon confirmation, the order will be submitted."}),"\n",(0,s.jsx)(i.h2,{id:"response-status-request",children:"Response Status Request"}),"\n",(0,s.jsx)(i.p,{children:"Post-confirmation, a {Working} message will be sent out to confirm that SpiderRock has received your order and the order is now an active order."}),"\n",(0,s.jsxs)(i.blockquote,{children:["\n",(0,s.jsx)(i.p,{children:"[#A0Q7]; $$ AAPL Apr 17th '25 260C $6.78 Offer 500x (T.DS2.CLIENT Bid 250 For $6.76) {Working} Street: Bid 500 For $6.75` *Auction ends in 01:17.703*"}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"Users can request an update at any time for active Block Auctions - regardless if they are a responder to that auction or not.  Requesting a status update will provide the user with the current initiator\u2019s price and size, the price and size of the user requesting the status update (if available), as well as the best response."}),"\n",(0,s.jsx)(i.p,{children:'To request a status update, the user can type the auction short code followed by any of these three keywords: status, ?, update.  For example, the user could type "A0Q7 update\u201D to receive an update on this specific Block Auction.'}),"\n",(0,s.jsx)(i.p,{children:"After requesting a status update the user will receive a response similar to the below:"}),"\n",(0,s.jsxs)(i.blockquote,{children:["\n",(0,s.jsx)(i.p,{children:"[#A0Q7]; && AAPL Apr 17th '25 260C (T.DS2.CLIENT Bid 250 For $6.76) {Market} Street: Bid 250 For $6.76 | 750 For $6.75`"}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:'This message is telling the responder that the order is active in the market, that the responder is currently "250 @ $6.76\u201D, that the best price bid (not necessarily for the full size) in the auction is "Bid 250 For $6.76\u201D, and that the best price for the full auction size is \u201C750 @ $6.75\u201D.'}),"\n",(0,s.jsx)(i.p,{children:"If the order price is adjustable due to the order's limit type (for example, a PrcDe order), a market message will be sent every 15 seconds to responders or automatically if the price has been changed."}),"\n",(0,s.jsx)(i.h2,{id:"modify-response-order",children:"Modify Response Order"}),"\n",(0,s.jsx)(i.p,{children:"Block Auction responders will have the ability to modify their response size and response price at any point while the auction is still active.  Each modified response the user enters will replace their previous entry.  Once the user has sent their modified response, they will receive a response confirmation message like the one outlined in the Response Confirmation section above.  Below are examples of how a responder would make updates to their response size and price:"}),"\n",(0,s.jsxs)("ul",{children:[(0,s.jsxs)("li",{children:[" ",(0,s.jsx)("b",{children:" Updating response price "})," - If the user was 1.00 bid for 500 contracts and would now like to update their price to 1.05, they could type \u201CA1N2 $1.05 bid 500x\u201D. "]}),(0,s.jsxs)("li",{children:[" ",(0,s.jsx)("b",{children:" Updating response size "})," - If the user was 1.00 bid for 500 contracts and would now like to update their size to 250 contracts, they could type \u201CA1N2 $1.00 bid 250x\u201D. "]})]}),"\n",(0,s.jsx)(i.h2,{id:"auction-cancel",children:"Auction Cancel"}),"\n",(0,s.jsx)(i.p,{children:"To cancel an order, the user will write the auction short code followed by either \u201CCancel\u201D or \u201CCxl\u201D.  For example, they can type: \u201CA1N2 Cancel\u201D or \u201CA1N2 Cxl\u201D."}),"\n",(0,s.jsx)(i.h2,{id:"auction-completion",children:"Auction Completion"}),"\n",(0,s.jsx)(i.p,{children:"At the completion of an auction the user will receive a notification providing details.  There are three types of auction completion notices:"}),"\n",(0,s.jsxs)("ul",{children:[(0,s.jsxs)("li",{children:[(0,s.jsx)("b",{children:"The user was filled on all or a portion of their order"})," - Sent to responder ",(0,s.jsx)("br",{})," [#A0E4]: $$ AAPL Mar 21st '25 250C  $8.50 Bid 500x (T.DS2.CLIENT Offer 500 @ $8.53) {Filled} Mar 21st '25 250C SOLD 500 @ $8.5300 [CBOE] [12:02:51]"]}),(0,s.jsxs)("li",{children:[(0,s.jsx)("b",{children:"The user was filled on their multi-leg order"})," - Sent to responder",(0,s.jsx)("br",{}),"[#A0A6]; $$ AAP Jan 17th '25 35P/55C/65C -1/1/-1 (Mixed) $0.19 Bid 750x (T.DS2.CLIENT Offer 750 @ $0.19) {Filled}",(0,s.jsx)("br",{}),"[Jan 17th '25 35P BOUGHT 750 FOR $0.2550]",(0,s.jsx)("br",{}),"[Jan 17th '25 55C SOLD 750 @ $0.5600]",(0,s.jsx)("br",{}),"[Jan 17th '25 65C BOUGHT 750 FOR $0.1150]",(0,s.jsx)("br",{}),"(Exchange: NYSEOPT)",(0,s.jsx)("br",{}),"(Time: 02:09:48.0418)"]}),(0,s.jsxs)("li",{children:[(0,s.jsx)("b",{children:"The order is traded "})," - Sent to everyone ",(0,s.jsx)("br",{})," [#A0E4]: && AAPL Mar 21st '25 250C {Traded} Traded 500 For $8.5300"]}),(0,s.jsxs)("li",{children:[(0,s.jsx)("b",{children:"The user's response did not fill the order"})," - Sent to responder ",(0,s.jsx)("br",{})," [#A0K7]: $$ AAP Jan 16th '26 50C $8.74 Bid 500x {ResponseClosed}"]}),(0,s.jsxs)("li",{children:[(0,s.jsx)("b",{children:"The order did NOT trade"})," - Sent to everyone ",(0,s.jsx)("br",{})," [#A0K7]: && AAP Jan 16th '26 50C {AuctionClosed}"]})]}),"\n",(0,s.jsx)(i.h2,{id:"full-ice-chat-responder-dictionary",children:"Full ICE Chat Responder Dictionary"}),"\n",(0,s.jsx)(i.p,{children:"For reference, below is the full list of commands and syntax that can be utilized by Block Auction responders in ICE Chat:"}),"\n",(0,s.jsxs)(i.table,{children:[(0,s.jsx)(i.thead,{children:(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.th,{children:"Keyword"}),(0,s.jsx)(i.th,{children:"Values"})]})}),(0,s.jsxs)(i.tbody,{children:[(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.strong,{children:"Size"})}),(0,s.jsxs)(i.td,{children:["x, qty, [1-100]% ",(0,s.jsx)("br",{})," ",(0,s.jsx)(i.strong,{children:"Note:"})," % is used when the size of the responding order is a specified percentage of the initiating order."]})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.strong,{children:"Price"})}),(0,s.jsxs)(i.td,{children:["prc, $, for ",(0,s.jsx)("br",{})," ",(0,s.jsx)(i.strong,{children:"Note:"})," Price can be written as '$X.XX' or 'XXc' when indicating a price less than $1. There is no space between 'XX' and 'c' OR ELSE a cancel will be triggered."]})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.strong,{children:"Debit"})}),(0,s.jsxs)(i.td,{children:["bid, debit, pay, b, buy ",(0,s.jsx)("br",{})," ",(0,s.jsx)(i.strong,{children:"Note:"})," If included anywhere in a response, the entire order will be flagged as a Debit Order."]})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.strong,{children:"Credit"})}),(0,s.jsxs)(i.td,{children:["offer, credit, collect, o, sell, @ ",(0,s.jsx)("br",{})," ",(0,s.jsx)(i.strong,{children:"Note:"})," If included anywhere in a response, the entire order will be flagged as a Credit Order."]})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.strong,{children:"Tied"})}),(0,s.jsx)(i.td,{children:"ref, uref, tied"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.strong,{children:"Reference Price"})}),(0,s.jsx)(i.td,{children:"refuprc, refprc, urefprc, uprc"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.strong,{children:"Delta"})}),(0,s.jsx)(i.td,{children:"delta, de, delt, d"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.strong,{children:"Gamma"})}),(0,s.jsx)(i.td,{children:"gamma, ga, g"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.strong,{children:"Long"})}),(0,s.jsx)(i.td,{children:"long, ln, ls, l"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.strong,{children:"Short"})}),(0,s.jsx)(i.td,{children:"short, sh, ss, s"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.strong,{children:"Locate"})}),(0,s.jsx)(i.td,{children:"locate, loc"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.strong,{children:"Status"})}),(0,s.jsx)(i.td,{children:"status, ?, update"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.strong,{children:"Join"})}),(0,s.jsx)(i.td,{children:"join, with"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.strong,{children:"Yes"})}),(0,s.jsx)(i.td,{children:"y, yes, confirm"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.strong,{children:"No"})}),(0,s.jsx)(i.td,{children:"n, no"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.strong,{children:"Cancel"})}),(0,s.jsx)(i.td,{children:"cancel, out, cxl, c"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.strong,{children:"Help"})}),(0,s.jsx)(i.td,{children:"help"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.strong,{children:"All"})}),(0,s.jsx)(i.td,{children:"all"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.strong,{children:"**"})}),(0,s.jsx)(i.td,{children:"Specifies that the subsequent line pertains to greeks"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.strong,{children:"$$"})}),(0,s.jsx)(i.td,{children:"Specifies that the subsequent line pertains to auctions you have responded to"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.strong,{children:"&&"})}),(0,s.jsx)(i.td,{children:"Specifies that the subsequent line pertains to public auction information"})]})]})]}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)("i",{children:"Upon request and through consultation, we could customize these responses on a client-by-client basis."}),"\n",(0,s.jsx)(i.h2,{id:"auction-filters",children:"Auction Filters"}),"\n",(0,s.jsx)(i.p,{children:"ICE Chat clients can customize the Block Auctions they receive by defining filtering criteria.  All filtering customizations will need to be communicated to a member of SpiderRock\u2019s Concierge Desk, who will then enter the filter criteria on their behalf.  Below is an image showing all possible filter customization the user can choose:"}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{alt:"Auction Filter",src:t(53768).Z+"",width:"340",height:"655"})}),"\n",(0,s.jsx)(i.h2,{id:"initiating-with-ice-chat",children:"Initiating with ICE Chat"}),"\n",(0,s.jsx)(i.p,{children:"SpiderRock\u2019s Concierge Desk was created to service institutional options traders interested in outsourced trading and accessing off-screen liquidity.  While we have an automated solution that allows users to respond to Block Auctions (as described above), clients interested in initiating orders via ICE Chat will need to type instructions of their order in the chatroom to members of SpiderRock\u2019s Concierge Desk.  A member of our Concierge Desk will then enter the client\u2019s order on their behalf."}),"\n",(0,s.jsxs)("ul",{children:[" ",(0,s.jsx)("b",{children:" Note: "})," The SpiderRock ATS system will not accept an initiating order message directly from ICE chat. It ",(0,s.jsx)("i",{children:" must "})," be facilitated by a member of the Concierge Desk. "]})]})}function h(e={}){let{wrapper:i}={...(0,r.a)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},53768:function(e,i,t){t.d(i,{Z:function(){return n}});let n=t.p+"assets/images/ice-image1-383994920a855dbd6b1047a9904a9c41.png"},91503:function(e,i,t){t.d(i,{Z:function(){return c},a:function(){return o}});var n=t(75271);let s={},r=n.createContext(s);function o(e){let i=n.useContext(r);return n.useMemo(function(){return"function"==typeof e?e(i):{...i,...e}},[i,e])}function c(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),n.createElement(r.Provider,{value:i},e.children)}}}]);