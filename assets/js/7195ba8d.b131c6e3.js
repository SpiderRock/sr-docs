"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[41086],{49243:(e,i,s)=>{s.r(i),s.d(i,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>c,metadata:()=>r,toc:()=>d});var n=s(74848),t=s(28453);const c={title:"Responding Via MLink",sidebar_position:5},o=void 0,r={id:"SpiderRockConnectATS/RespondingViaMLink",title:"Responding Via MLink",description:'AuctionNotice and AuctionState messages are available to SpiderRock Connect clients (hereafter "Subscribers") via the SpiderRock MLink/WebSocket API. To gain access, responders must secure an MLink API Key, connect to an MLink/WebSocket server, and subscribe to both AuctionNotice and AuctionState messages.',source:"@site/docs/SpiderRockConnectATS/5.RespondingViaMLink.md",sourceDirName:"SpiderRockConnectATS",slug:"/SpiderRockConnectATS/RespondingViaMLink",permalink:"/docs/SpiderRockConnectATS/RespondingViaMLink",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Responding Via MLink",sidebar_position:5},sidebar:"spiderRockConnectATSSidebar",previous:{title:"SpiderRock Connect Trade App",permalink:"/docs/SpiderRockConnectATS/TradeTool"},next:{title:"Responding Via FIX",permalink:"/docs/SpiderRockConnectATS/RespondingViaFIX"}},a={},d=[{value:"Auction Notices",id:"auction-notices",level:3},{value:"Specialized Strategy Notices",id:"specialized-strategy-notices",level:3},{value:"Auction Response Messages",id:"auction-response-messages",level:3},{value:"Key Features",id:"key-features",level:3},{value:"Disclosures and Additional Information",id:"disclosures-and-additional-information",level:2}];function l(e){const i={a:"a",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.em,{children:"AuctionNotice"})," and ",(0,n.jsx)(i.em,{children:"AuctionState"}),' messages are available to SpiderRock Connect clients (hereafter "Subscribers") via the SpiderRock ',(0,n.jsx)(i.a,{href:"/docs/Documentation/PlatformAPIs/MLink/WebSocket",children:"MLink/WebSocket API"}),". To gain access, responders must secure an MLink API Key, connect to an MLink/WebSocket server, and subscribe to both ",(0,n.jsx)(i.em,{children:"AuctionNotice"})," and ",(0,n.jsx)(i.em,{children:"AuctionState"})," messages."]}),"\n",(0,n.jsxs)(i.p,{children:["Once subscribed, relevant ",(0,n.jsx)(i.em,{children:"AuctionNotice"})," auction messages will be delivered to Subscribers associated with the MLink API Key via the MLink/WebSocket API, and will contain as much information as the initiator has chosen to reveal. For example, if the initiator has chosen to reveal their identity, then their identity will be contained in the ",(0,n.jsx)(i.em,{children:"AuctionNotice"})," message a Subscriber receives."]}),"\n",(0,n.jsxs)(i.p,{children:["This page focuses on the messages relevant to auction participants. Interested responders should also review SpiderRock's more general MLink/Websocket API documentation found ",(0,n.jsx)(i.a,{href:"/docs/Documentation/PlatformAPIs/MLink/",children:(0,n.jsx)(i.strong,{children:"here"})})," for information on connecting, subscribing, sending, and receiving messages."]}),"\n",(0,n.jsx)(i.h3,{id:"auction-notices",children:"Auction Notices"}),"\n",(0,n.jsxs)(i.table,{children:[(0,n.jsx)(i.thead,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.th,{children:"Message"}),(0,n.jsx)(i.th,{children:"Source"}),(0,n.jsx)(i.th,{children:"Description"})]})}),(0,n.jsxs)(i.tbody,{children:[(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.a,{href:"../MessageSchemas/Schema/Topics/liquidity-notice/AuctionNotice.md",children:"AuctionNotice"})}),(0,n.jsx)(i.td,{children:"SR"}),(0,n.jsxs)(i.td,{children:["This is the primary message used to notify responders that an auction has started and/or that an initiator has updated their public parameters. ",(0,n.jsx)(i.em,{children:"AuctionNotice"})," messages are available for all SpiderRock Connect auctions as well as for exposure and price improvement auctions that take place on options exchanges."]})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.a,{href:"../MessageSchemas/Schema/Topics/liquidity-notice/AuctionState.md",children:"AuctionState"})}),(0,n.jsx)(i.td,{children:"SR"}),(0,n.jsx)(i.td,{children:"Contains the state of the most recent auction trial match. Auction state messages are sent at the conclusion of Flash Auctions and once per second for Block Auctions."})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.a,{href:"../MessageSchemas/Schema/Topics/liquidity-notice/AuctionPrint.md",children:"AuctionPrint"})}),(0,n.jsx)(i.td,{children:"SR"}),(0,n.jsx)(i.td,{children:"Auction print messages correspond to auction notices for all exchange facilitated auctions including secondary (on-exchange) SpiderRock Connect auctions."})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.a,{href:"../MessageSchemas/Schema/Topics/client-config/UserAuctionFilter.md",children:"UserAuctionFilter"})}),(0,n.jsx)(i.td,{children:"Subscriber"}),(0,n.jsx)(i.td,{children:"Message used to filter, control, or otherwise limit the delivery of the above auction messages. Messages that are blocked by the relevant filter willnot be received."})]})]})]}),"\n",(0,n.jsx)(i.h3,{id:"specialized-strategy-notices",children:"Specialized Strategy Notices"}),"\n",(0,n.jsx)(i.p,{children:"SpiderRock Connect distributes specialized auction notice messages designed to make it easier to respond to certain common option spread strategies. These notices are delivered in addition to normal auction notices and are not required in order to respond successfully to these common strategies."}),"\n",(0,n.jsxs)(i.p,{children:["Specialized notices contain ",(0,n.jsx)(i.em,{children:"AuctionNoticeIDs"})," and can be responded to in the same manner as normal notices."]}),"\n",(0,n.jsxs)(i.table,{children:[(0,n.jsx)(i.thead,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.th,{children:"Message"}),(0,n.jsx)(i.th,{children:"Source"}),(0,n.jsx)(i.th,{children:"Description"})]})}),(0,n.jsxs)(i.tbody,{children:[(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.a,{href:"../MessageSchemas/Schema/Topics/liquidity-notice/AuctionNoticeRC",children:"AuctionNoticeRC"})}),(0,n.jsx)(i.td,{children:"SR"}),(0,n.jsx)(i.td,{children:"Rev/Con (+C/-P/-S) auction notice message"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.a,{href:"../MessageSchemas/Schema/Topics/liquidity-notice/AuctionNoticeBX",children:"AuctionNoticeBX"})}),(0,n.jsx)(i.td,{children:"SR"}),(0,n.jsx)(i.td,{children:"Box spread auction notice message"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.a,{href:"../MessageSchemas/Schema/Topics/liquidity-notice/AuctionNoticeSN",children:"AuctionNoticeSN"})}),(0,n.jsx)(i.td,{children:"SR"}),(0,n.jsx)(i.td,{children:"Synthetic (+C/-P) auction notice message"})]})]})]}),"\n",(0,n.jsx)(i.h3,{id:"auction-response-messages",children:"Auction Response Messages"}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.em,{children:"NoticeResponse"})," messages can be sent through MLink/WebSocket connections to respond directly to ",(0,n.jsx)(i.em,{children:"AuctionNotices"}),", whether the notice is from either a SpiderRock Connect or an on-exchange auction. Responders are expected to process the associated ",(0,n.jsx)(i.em,{children:"NoticeExecReport"})," messages to receive confirmation of, and updates to, their ",(0,n.jsx)(i.em,{children:"NoticeResponses"}),". This is a simpler method (relative to FIX) of responding to auction notices, particularly for Subscribers that do not currently operate production quality live FIX infrastructure."]}),"\n",(0,n.jsxs)("ul",{children:[(0,n.jsx)("b",{children:"Note:"})," Responders should subscribe to ",(0,n.jsx)(i.em,{children:"NoticeExecReport"})," messages if they intend to send ",(0,n.jsx)(i.em,{children:"NoticeResponse"})," messages through an MLink/WebSocket server."]}),"\n",(0,n.jsxs)(i.table,{children:[(0,n.jsx)(i.thead,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.th,{children:"Message"}),(0,n.jsx)(i.th,{children:"Source"}),(0,n.jsx)(i.th,{children:"Description"})]})}),(0,n.jsxs)(i.tbody,{children:[(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.a,{href:"../MessageSchemas/Schema/Topics/liquidity-notice/NoticeResponse.md",children:"NoticeResponse"})}),(0,n.jsx)(i.td,{children:"Subscriber"}),(0,n.jsxs)(i.td,{children:["Message used to participate/respond to an ",(0,n.jsx)(i.em,{children:"AuctionNotice"}),". Responses are by ",(0,n.jsx)(i.em,{children:"AuctionNoticeID"})," and only one response is allowed per user per ",(0,n.jsx)(i.em,{children:"AuctionNoticeID"}),". Subsequent responses from a user will be deemed to cancel/replace any previous response for the same ",(0,n.jsx)(i.em,{children:"AuctionNoticeID"}),"."]})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.a,{href:"../MessageSchemas/Schema/Topics/liquidity-notice/NoticeExecReport.md",children:"NoticeExecReport"})}),(0,n.jsx)(i.td,{children:"SR"}),(0,n.jsxs)(i.td,{children:["Message used to confirmation and comunicate status of a ",(0,n.jsx)(i.em,{children:"NoticeResponse"}),". Similar to a FIX exec report."]})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.a,{href:"/docs/MessageSchemas/Schema/Topics/liquidity-notice/NoticeExecReport",children:"NoticeCancel"})}),(0,n.jsx)(i.td,{children:"Client"}),(0,n.jsxs)(i.td,{children:["Cancels a previous ",(0,n.jsx)(i.em,{children:"NoticeResponse"})," by ",(0,n.jsx)(i.em,{children:"AuctionNoticeID"}),"."]})]})]})]}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.em,{children:"NoticeResponse"})," messages are converted to ",(0,n.jsx)(i.em,{children:"SpdrParentOrder"})," messages by the MLink/Websocket API and are visible both via SRSE and other MLink servers. It is also possible for SpiderRock to send either execution only FIX drop copy streams or full parent order FIX drop copy streams back to responder firms such that the FIX drop copies replicate the associated MLink/WebSocket API interaction."]}),"\n",(0,n.jsx)(i.h3,{id:"key-features",children:"Key Features"}),"\n",(0,n.jsx)(i.p,{children:"The MLink API's integration into the SRCconnect workflow can be summarized in the following steps:"}),"\n",(0,n.jsxs)(i.ol,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Auction Notice Generation"}),": The MLink Server publishes an ",(0,n.jsx)(i.a,{href:"../MessageSchemas/Schema/Topics/liquidity-notice/AuctionNotice.md",children:"AuctionNotice"})," (Block / Flash) when a new auction is available that matches the client's predefined filters."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Client Decision Process"}),": The Client Auction Responder receives the ",(0,n.jsx)(i.a,{href:"../MessageSchemas/Schema/Topics/liquidity-notice/AuctionNotice.md",children:"AuctionNotice"})," and uses the client's strategy and risk profile to decide whether to participate in an auction."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Response Handling"}),": The client's ",(0,n.jsx)(i.a,{href:"../MessageSchemas/Schema/Topics/liquidity-notice/NoticeResponse.md",children:"NoticeResponse"})," is sent to the MLink Server, which then processes it and returns a ",(0,n.jsx)(i.a,{href:"../MessageSchemas/Schema/Topics/liquidity-notice/NoticeExecReport.md",children:"NoticeExecReport"}),"."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Trial Match"}),": ",(0,n.jsx)(i.a,{href:"../MessageSchemas/Schema/Topics/liquidity-notice/AuctionState.md",children:"AuctionState"})," messages are sent at the conclusion of each auction trial match (once per second while the auction is running for Block Auctions, at conclusion for Flash Auctions)"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Cancellation Option"}),": Clients retain the ability to send a ",(0,n.jsx)(i.a,{href:"../MessageSchemas/Schema/Topics/liquidity-notice/NoticeCancel.md",children:"NoticeCancel"})," message if they choose to withdraw from an auction."]}),"\n"]}),"\n",(0,n.jsxs)(i.p,{children:["At a Subscriber's request, SpiderRock can also configure a trading account such that any ",(0,n.jsx)(i.em,{children:"SpdrParentOrder"})," created from a ",(0,n.jsx)(i.em,{children:"NoticeReponse"})," message triggers a ",(0,n.jsx)(i.em,{children:"StageReview"})," sequence. The ",(0,n.jsx)(i.em,{children:"StageReview"})," sequence would occur before a live response is sent to SpiderRock Connect ATS or forwareded as a live exchange auction response or child order."]}),"\n",(0,n.jsxs)(i.p,{children:["In a ",(0,n.jsx)(i.em,{children:"StageReview"})," sequence, SpiderRock will send a simple FIX ",(0,n.jsx)(i.em,{children:"NewOrderSingle"})," or ",(0,n.jsx)(i.em,{children:"NewOrderMultileg"})," message to an order entry gateway implementing risk and/or compliance checks for a Subscriber firm. If this gateway forwards the review order back to SpiderRock, then the return of the order will be deemed a successful risk and compliance check and the original ",(0,n.jsx)(i.em,{children:"SpdrParentOrder"})," will be allowed to proceed. This mechanism can both provide a risk control and be a pathway for supplying certain compliance and operations details (e.g. sell short versus sell long, existence of a locate, opening/closing indicators, allocation details, and so on.)"]}),"\n",(0,n.jsx)(i.h2,{id:"disclosures-and-additional-information",children:"Disclosures and Additional Information"}),"\n",(0,n.jsxs)(i.p,{children:["The information above provides a brief summary of certain technical aspects of SpiderRock Connect and is compiled for concise reference purposes only. While it encapsulates key points and provides an overview of certain content found in the SpiderRock Connect subscriber Manual, it may not capture every detail found in the manual. For comprehensive understanding and complete context, please refer to the ",(0,n.jsx)(i.strong,{children:"SpiderRock Connect Subscriber Manual"}),"."]})]})}function h(e={}){const{wrapper:i}={...(0,t.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},28453:(e,i,s)=>{s.d(i,{R:()=>o,x:()=>r});var n=s(96540);const t={},c=n.createContext(t);function o(e){const i=n.useContext(c);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function r(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),n.createElement(c.Provider,{value:i},e.children)}}}]);