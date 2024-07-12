"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[70271],{36700:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var s=t(74848),n=t(28453);const r={title:"ICE Chat Bot",sidebar_position:8},o=void 0,c={id:"SpiderRockConnectATS/ICEChatBot",title:"ICE Chat Bot",description:"SpiderRock Connect allows customers to discover and trade with each other in a transparent, all-electronic auction notice/response format utilizing both fast Flash auctions and slower Block auctions.",source:"@site/docs/SpiderRockConnectATS/8.ICEChatBot.md",sourceDirName:"SpiderRockConnectATS",slug:"/SpiderRockConnectATS/ICEChatBot",permalink:"/docs/SpiderRockConnectATS/ICEChatBot",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{title:"ICE Chat Bot",sidebar_position:8},sidebar:"spiderRockConnectATSSidebar",previous:{title:"Auction Auto-Responders",permalink:"/docs/SpiderRockConnectATS/AutoResponders"},next:{title:"EXS Concierge Desk",permalink:"/docs/SpiderRockConnectATS/ConciergeDesk"}},d={},l=[{value:"Access Off-screen Liquidity Using SpiderRock&#39;s Block Auction",id:"access-off-screen-liquidity-using-spiderrocks-block-auction",level:2},{value:"Responding to Block Auctions via ICE Chat",id:"responding-to-block-auctions-via-ice-chat",level:2},{value:"Block Auction Format in ICE Chat",id:"block-auction-format-in-ice-chat",level:2},{value:"ICE Chat Block Auction Notice",id:"ice-chat-block-auction-notice",level:2},{value:"Response Dictionary",id:"response-dictionary",level:3},{value:"Response Examples",id:"response-examples",level:3},{value:"Response Confirmation",id:"response-confirmation",level:2},{value:"Response Status Request",id:"response-status-request",level:2},{value:"Modify Response Order",id:"modify-response-order",level:2},{value:"Auction Cancel",id:"auction-cancel",level:2},{value:"Auction Completion",id:"auction-completion",level:2},{value:"Full Dictionary of ICE Chat Responder Commands",id:"full-dictionary-of-ice-chat-responder-commands",level:2},{value:"Auction Filters",id:"auction-filters",level:2},{value:"Initiating with ICE Chat",id:"initiating-with-ice-chat",level:2}];function a(e){const i={blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",img:"img",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.p,{children:"SpiderRock Connect allows customers to discover and trade with each other in a transparent, all-electronic auction notice/response format utilizing both fast Flash auctions and slower Block auctions."}),"\n",(0,s.jsx)(i.p,{children:"The SpiderRock ATS can be accessed in one of three ways, via:"}),"\n",(0,s.jsxs)("ol",{children:[" ",(0,s.jsx)("li",{children:" The SpiderRock Connect trade application; "})," ",(0,s.jsx)("li",{children:" An API such as MLink, SRSE, or FIX; or "})," ",(0,s.jsxs)("li",{children:[" ICE Chat. (",(0,s.jsx)("b",{children:"NOTE"})," only Block Auctions are available via ICE Chat.) "]})," "]}),"\n",(0,s.jsxs)(i.p,{children:["This document is focused on how clients of SpiderRock can respond or initiate ",(0,s.jsx)(i.strong,{children:"Block auctions"})," via ICE Chat."]}),"\n",(0,s.jsx)(i.h2,{id:"access-off-screen-liquidity-using-spiderrocks-block-auction",children:"Access Off-screen Liquidity Using SpiderRock's Block Auction"}),"\n",(0,s.jsx)(i.p,{children:"SpiderRock created Block Auctions to efficiently connect initiators of block-size option orders with a comprehensive network of liquidity providers via a fully electronic auction.  This innovative auction process removes manual interaction and invites institutional clients to transact electronically with a wide array of liquidity providers via the SpiderRock ATS. Initiating clients can access both the SpiderRock Network of liquidity providers as well as existing trading counterparties upon request.  Responding clients will be part of the SpiderRock Network of liquidity providers and have access to all Block Auctions."}),"\n",(0,s.jsx)(i.h2,{id:"responding-to-block-auctions-via-ice-chat",children:"Responding to Block Auctions via ICE Chat"}),"\n",(0,s.jsx)(i.p,{children:"Clients of SpiderRock have access to our Concierge Desk which provides high-touch trading services.  For clients who opt to forgo utilizing the SpiderRock Connect application or integrating using an API, we offer access to our Block Auctions via ICE Chat.  Members of our Concierge Desk will create a persistent ICE Chatroom that includes the client(s), members of SpiderRock\u2019s Concierge Desk, as well as our API connected bot.  As Block Auctions are generated using our ATS, they will be broadcast to users of the SpiderRock Connect application, to clients connected via API, as well as ICE Chatrooms.  Once a Block Auction is initiated, clients connected via ICE Chat will receive an auction notice in their ICE Chatroom from our bot."}),"\n",(0,s.jsx)(i.h2,{id:"block-auction-format-in-ice-chat",children:"Block Auction Format in ICE Chat"}),"\n",(0,s.jsx)(i.p,{children:"When a Block Auction is initiated an ICE Chat user will receive a notice similar to the below:"}),"\n",(0,s.jsxs)(i.blockquote,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.code,{children:"\\[\\#A1ND\\] ABT Jul 05th 91C $12.15 offer 150x \\[AoN\\] (Start)"})," ",(0,s.jsx)("br",{}),"\n",(0,s.jsx)(i.code,{children:"----- uprc: 103.05, de: 0.99, ga: 0.004, ve: 0.002, se: 0.00 -----"})]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"This auction notice can be broken into these distinct sections:"}),"\n",(0,s.jsxs)(i.table,{children:[(0,s.jsx)(i.thead,{children:(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.th,{children:"Fragment"}),(0,s.jsx)(i.th,{children:"Description"})]})}),(0,s.jsxs)(i.tbody,{children:[(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.strong,{children:"A1ND"})}),(0,s.jsx)(i.td,{children:"Auction short code"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.strong,{children:"ABT Jul 05th 91C"})}),(0,s.jsx)(i.td,{children:"Item being auctioned"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.strong,{children:"$12.15 offer"})}),(0,s.jsx)(i.td,{children:"Price of the option or package"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.strong,{children:"150x"})}),(0,s.jsx)(i.td,{children:"Size"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.strong,{children:"AoN"})}),(0,s.jsx)(i.td,{children:"Size condition \u2013 (short for All or None)"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.strong,{children:"Start"})}),(0,s.jsx)(i.td,{children:"Message type \u2013 (indicates that this is the start of this auction)"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.strong,{children:"uprc: 103.05"})}),(0,s.jsx)(i.td,{children:"the price of the underlying at the start of the auction"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.strong,{children:"de: 0.99"})}),(0,s.jsx)(i.td,{children:"reference delta of the option or package"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.strong,{children:"ga: 0.004"})}),(0,s.jsx)(i.td,{children:"reference gamma of the option or package"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.strong,{children:"ve: 0.002"})}),(0,s.jsx)(i.td,{children:"reference vega of the option or package"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.strong,{children:"se: 0.00"})}),(0,s.jsx)(i.td,{children:"SpiderRock surface edge for the option or package"})]})]})]}),"\n",(0,s.jsx)(i.h2,{id:"ice-chat-block-auction-notice",children:"ICE Chat Block Auction Notice"}),"\n",(0,s.jsx)(i.p,{children:"We require clients to follow a specific format when responding to auction notices in an ICE Chatroom.  Responses should start with our auction short code so that we can accurately identify the correct auction notice, unless they are responding to the most recent notice.  Clients can begin their response with any of these formats: [#A1ND], #A1ND or A1ND."}),"\n",(0,s.jsx)(i.p,{children:"Following the auction short code clients can enter a bid or offer price as a static price or allow their price to fluctuate using a delta, gamma, and reference price."}),"\n",(0,s.jsxs)(i.p,{children:["A few notes:\n",(0,s.jsxs)("ul",{children:[" ",(0,s.jsx)("li",{children:" If the size is left blank, the default size will be the maximum size for that price. "})," ",(0,s.jsx)("li",{children:" If you include your own delta, you have to supply your own ref. If the ref value is missing, you will submit a prompt to re-submit your Auction Response with the value provided or else the response is rendered null. "})," ",(0,s.jsx)("li",{children:" If you include a ref value, it is assumed that you are using SpiderRock's provided delta value. "})," "]})]}),"\n",(0,s.jsx)(i.h3,{id:"response-dictionary",children:"Response Dictionary"}),"\n",(0,s.jsxs)(i.table,{children:[(0,s.jsx)(i.thead,{children:(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.th,{children:"Keyword"}),(0,s.jsx)(i.th,{children:"Synonymms"})]})}),(0,s.jsxs)(i.tbody,{children:[(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"Size"}),(0,s.jsx)(i.td,{children:"x, qty"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"Price"}),(0,s.jsx)(i.td,{children:"prc, @, $"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"Debit"}),(0,s.jsx)(i.td,{children:"bid, debit, pay, b, buy"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"Credit"}),(0,s.jsx)(i.td,{children:"offer, credit, collect, s, sell"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"Tied"}),(0,s.jsx)(i.td,{children:"ref, uref tied"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"Reference Price"}),(0,s.jsx)(i.td,{children:"refuprc, refprc, urefprc, uprc"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"Delta"}),(0,s.jsx)(i.td,{children:"delta, de , delt, d"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"Gamma"}),(0,s.jsx)(i.td,{children:"gamma, ga, g"})]})]})]}),"\n",(0,s.jsx)(i.h3,{id:"response-examples",children:"Response Examples"}),"\n",(0,s.jsxs)(i.table,{children:[(0,s.jsx)(i.thead,{children:(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.th,{children:"Action"}),(0,s.jsx)(i.th,{children:"Example"})]})}),(0,s.jsxs)(i.tbody,{children:[(0,s.jsxs)(i.tr,{children:[(0,s.jsxs)(i.td,{children:[(0,s.jsx)(i.strong,{children:"Submitting a full size bid"})," (unadjusted)"]}),(0,s.jsxs)(i.td,{children:['"A1ND 7.00 bid\u201d ',(0,s.jsx)("br",{})," \u201cA1ND 7.00\u201d ",(0,s.jsx)("br",{}),' "#A1ND pay 7.00\u201d ',(0,s.jsx)("br",{}),' \u201cA1ND 7.00 b"']})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsxs)(i.td,{children:[(0,s.jsx)(i.strong,{children:"Submitting a full size offer"})," (unadjusted)"]}),(0,s.jsxs)(i.td,{children:["\u201cA1ND 7.00 offer\u201d ",(0,s.jsx)("br",{})," \u201cA1ND 7.00\u201d ",(0,s.jsx)("br",{})," \u201c#A1ND collect 7.00\u201d ",(0,s.jsx)("br",{})," \u201cA1ND s 7.00\u201d"]})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.strong,{children:"Submitting a partial size bid or offer"})}),(0,s.jsxs)(i.td,{children:["\u201cA1ND 7.00 bid 50x\u201d ",(0,s.jsx)("br",{})," \u201c[#A1ND] @ 7.00 50x\u201d"]})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.strong,{children:"Submitting an adjusted/tied bid or offer"})}),(0,s.jsx)(i.td,{children:"\u201cA1ND 7.00 bid, ref 50.50, 99de\u201d"})]})]})]}),"\n",(0,s.jsx)(i.h2,{id:"response-confirmation",children:"Response Confirmation"}),"\n",(0,s.jsx)(i.p,{children:"When submitting an auction response, there will be a 5 second window in which you can confirm or deny the order.  The user will receive a confirmation message like the below:\n[#A1ND] RCVD: [Bid 150 @ 12.00] FOR ABT Jul 05th 91C $12.15 Offer 150x; Confirm Y/N?"}),"\n",(0,s.jsx)(i.p,{children:"This message confirms that we received (abbreviated \u201cRCVD\u201d) this message from the user.  Responding in the chat with \u201cY\u201d or \u201cy\u201d will submit the user\u2019s response to the ATS.  Responding \u201cN\u201d or \u201cn\u201d will stop the response from being sent to the ATS.  The user can also type nothing, because if we have not received a response in the 5 second response window the order will be timed out."}),"\n",(0,s.jsx)(i.h2,{id:"response-status-request",children:"Response Status Request"}),"\n",(0,s.jsx)(i.p,{children:"Users can request an update at any time for active Block Auctions.  Requesting a status update will provide the user with the current initiator\u2019s price and size, the price and size of the user requesting the status update (if available), as well as the best response.  To request a status update, the user can type the auction short code followed by any of these three keywords: status, ?, update.  For example, the user could type \u201cA1ND update\u201d to receive an update on this specific Block Auction.  After requesting a status update the user will receive a response similar to the below:"}),"\n",(0,s.jsx)(i.p,{children:"[#A1ND] STATUS Working [Bid 150 @ 12.00] [Best Bid 100 @ 12.05] [Best Fill Bid 150 @ 12.02] ABT Jul 05th 91C $12.15 Offer 150x"}),"\n",(0,s.jsx)(i.p,{children:"This message is telling the responder that the order is \u201cWorking\u201d, that the responder is currently \u201cBid 150 @ 12.00\u201d, that the best price bid (not necessarly for the full size) in the auction is \u201cBest Bid 100 @12.05\u201d, that the best price for the full auction size is \u201cBest Fill Bid 150 @ 12.02\u201d, and then shows the initiating customer\u2019s order details."}),"\n",(0,s.jsx)(i.p,{children:"SpiderRock also sends ICE Chat users automatic updates (An example of an automatic update is shown below).  The user will be provided with automatic updates in these circumstances:"}),"\n",(0,s.jsxs)("ul",{children:[" ",(0,s.jsx)("li",{children:" If the initiating order price is updated "})," ",(0,s.jsx)("li",{children:" If the user was the best response but no longer are the best response "})," ",(0,s.jsx)("li",{children:" If the user is now the best response "})," "]}),"\n",(0,s.jsx)(i.h2,{id:"modify-response-order",children:"Modify Response Order"}),"\n",(0,s.jsx)(i.p,{children:"Block Auction responders will have the ability to modify their response size and response price at any point while the auction is still active.  Each modified response the user enters will replace their previous entry.  Once the user has sent their modified response, they will receive a response confirmation message like the one outlined in the Response Confirmation section above.  Below are examples of how a responder would make updates to their response size and price:"}),"\n",(0,s.jsxs)("ul",{children:[" ",(0,s.jsxs)("li",{children:[" ",(0,s.jsx)("b",{children:" Updating response price "})," - If the user was 1.00 bid for 500 contracts and would now like to update their price to 1.05,they could type \u201cA1ND 1.05 bid 500x\u201d. "]})," ",(0,s.jsxs)("li",{children:[" ",(0,s.jsx)("b",{children:" Updating response size "})," - If the user was 1.00 bid for 500 contracts and would now like to update their size to 250 contracts, they could type \u201cA1ND 1.00 bid 250x\u201d. "]})," "]}),"\n",(0,s.jsx)(i.h2,{id:"auction-cancel",children:"Auction Cancel"}),"\n",(0,s.jsx)(i.p,{children:"To cancel an order, the user will write the auction short code followed by either \u201cCancel\u201d or \u201cCxl\u201d.  For example, they can type: \u201cA1ND Cancel\u201d or \u201cA1ND Cxl\u201d."}),"\n",(0,s.jsx)(i.h2,{id:"auction-completion",children:"Auction Completion"}),"\n",(0,s.jsx)(i.p,{children:"At the completion of an auction the user will receive a notification providing details.  There are three types of auction completion notices:"}),"\n",(0,s.jsxs)("ul",{children:[" ",(0,s.jsxs)("li",{children:[" ",(0,s.jsx)("b",{children:" The user was filled on all or a portion of their order "})," - The fill notification will look like this: ",(0,s.jsx)("br",{})," \u201c[#A1ND] STATUS Filled ABT Jul 05th 91C $12.02 Offer 150/150x [FILLS] [Jul 05th 91C 100 @ 12.02] [CBOE] [12:02:51]\u201d "]})," ",(0,s.jsxs)("li",{children:[" ",(0,s.jsx)("b",{children:" The order traded but the user was NOT filled "})," - The fill notification will look like this: ",(0,s.jsx)("br",{})," \u201c[#A1ND] ABT [Call] Traded 150 @ 12.02 (End)\u201d "]})," ",(0,s.jsxs)("li",{children:[" ",(0,s.jsx)("b",{children:" The order did NOT trade "})," - The notification will look like this: ",(0,s.jsx)("br",{})," \u201c[#A1ND] ABT [Call] Did Not Trade (End)\u201d "]})," "]}),"\n",(0,s.jsx)(i.h2,{id:"full-dictionary-of-ice-chat-responder-commands",children:"Full Dictionary of ICE Chat Responder Commands"}),"\n",(0,s.jsx)(i.p,{children:"For reference, below is the full list of commands and syntax that can be utilized by Block Auction responsers in ICE Chat:"}),"\n",(0,s.jsxs)(i.table,{children:[(0,s.jsx)(i.thead,{children:(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.th,{children:"Keyword"}),(0,s.jsx)(i.th,{children:"Values"})]})}),(0,s.jsxs)(i.tbody,{children:[(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"Size"}),(0,s.jsx)(i.td,{children:"x, qty"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"Price"}),(0,s.jsx)(i.td,{children:"prc, @, $"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"Debit"}),(0,s.jsx)(i.td,{children:"bid, debit, pay, b, buy"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"Credit"}),(0,s.jsx)(i.td,{children:"offer, credit, collect, s, sell"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"Tied"}),(0,s.jsx)(i.td,{children:"ref, uref, tied"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"Reference Price"}),(0,s.jsx)(i.td,{children:"refuprc, refprc, urefprc, uprc"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"Delta"}),(0,s.jsx)(i.td,{children:"delta, de, delt, d"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"Gamma"}),(0,s.jsx)(i.td,{children:"gamma, ga, g"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"Status"}),(0,s.jsx)(i.td,{children:"status, ?, update"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"Join"}),(0,s.jsx)(i.td,{children:"join, with"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"Yes"}),(0,s.jsx)(i.td,{children:"y, yes, confirm"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"No"}),(0,s.jsx)(i.td,{children:"n, no"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"Cancel"}),(0,s.jsx)(i.td,{children:"cancel, out, cxl"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"Help"}),(0,s.jsx)(i.td,{children:"help"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"All"}),(0,s.jsx)(i.td,{children:"all"})]})]})]}),"\n",(0,s.jsx)(i.h2,{id:"auction-filters",children:"Auction Filters"}),"\n",(0,s.jsx)(i.p,{children:"ICE Chat clients can customize the Block Auctions they receive by defining filtering criteria.  All filtering customizations will need to be communicated to a member of SpiderRock\u2019s Concierge Desk, who will then enter the filter criteria on their behalf.  Below is an image showing all possible filter customization the user can choose:"}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{alt:"Auction Filter",src:t(16774).A+"",width:"340",height:"655"})}),"\n",(0,s.jsx)(i.h2,{id:"initiating-with-ice-chat",children:"Initiating with ICE Chat"}),"\n",(0,s.jsx)(i.p,{children:"SpiderRock\u2019s Concierge Desk was created to service institutional options traders interested in outsourced trading and accessing off-screen liquidity.  While we have an automated solution that allows users to respond to Block Auctions (as described above), clients interested in initiating orders via ICE Chat will need to type instructions of their order in the chatroom to members of SpiderRock\u2019s Concierge Desk.  A member of our Concierge Desk will then enter the client\u2019s order on their behalf."}),"\n",(0,s.jsxs)("ul",{children:[" ",(0,s.jsx)("b",{children:" Note: "})," The SpiderRock ATS system will not accept an initiating order message directly from ICE chat. It ",(0,s.jsx)("i",{children:" must "})," be facilitated by a member of the Concierge Desk. "]})]})}function h(e={}){const{wrapper:i}={...(0,n.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},16774:(e,i,t)=>{t.d(i,{A:()=>s});const s=t.p+"assets/images/ice-image1-383994920a855dbd6b1047a9904a9c41.png"},28453:(e,i,t)=>{t.d(i,{R:()=>o,x:()=>c});var s=t(96540);const n={},r=s.createContext(n);function o(e){const i=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function c(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),s.createElement(r.Provider,{value:i},e.children)}}}]);