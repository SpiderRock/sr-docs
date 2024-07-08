"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[40353],{98604:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var t=i(74848),s=i(28453);const o={title:"MLink Auction Responder",sidebar_position:3},r=void 0,c={id:"Documentation/PlatformAPIs/MLink/MLink-AuctionResponder",title:"MLink Auction Responder",description:"The MLink API's integration into the SRCconnect workflow can be summarized in the following steps:",source:"@site/docs/Documentation/PlatformAPIs/MLink/MLink-AuctionResponder.md",sourceDirName:"Documentation/PlatformAPIs/MLink",slug:"/Documentation/PlatformAPIs/MLink/MLink-AuctionResponder",permalink:"/docs/Documentation/PlatformAPIs/MLink/MLink-AuctionResponder",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"MLink Auction Responder",sidebar_position:3},sidebar:"documentationSidebar",previous:{title:"MLink",permalink:"/docs/Documentation/PlatformAPIs/MLink/"},next:{title:"MLink Authentication",permalink:"/docs/Documentation/PlatformAPIs/MLink/MLink-Authentication"}},a={},l=[{value:"Key Features",id:"key-features",level:3},{value:"Message Types",id:"message-types",level:3},{value:"Integration with MLink API",id:"integration-with-mlink-api",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"The MLink API's integration into the SRCconnect workflow can be summarized in the following steps:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Auction Notice Generation"}),": The MLink Server publishes an ",(0,t.jsx)(n.code,{children:"AuctionNotice"})," when a new auction is available that matches the client's predefined filters."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Client Decision Process"}),": The Client Auction Responder receives the ",(0,t.jsx)(n.code,{children:"AuctionNotice"})," and uses the client's strategy and risk profile to decide whether to participate in an auction."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Response Handling"}),": The client's ",(0,t.jsx)(n.code,{children:"NoticeResponse"})," is sent to the MLink Server, which then processes it and returns a ",(0,t.jsx)(n.code,{children:"NoticeExecReport"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Cancellation Option"}),": Clients retain the ability to send a ",(0,t.jsx)(n.code,{children:"NoticeCancel"})," message if they choose to withdraw from an auction."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"The process ensures that clients engage with auctions that are most relevant to them, maintaining a high level of market responsiveness and strategic participation."}),"\n",(0,t.jsx)(n.p,{children:"Through MLink, SRCconnect provides a robust platform for auction-based trading, enabling clients to filter, respond to, and manage auction participation with precision and agility. MLink's API and server act as the cornerstone of this process, ensuring real-time data streaming and interactive trading capabilities."}),"\n",(0,t.jsx)(n.h3,{id:"key-features",children:"Key Features"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Auction Filtering"}),": Participants can filter auctions of interest with ",(0,t.jsx)(n.code,{children:"UserAuctionFilter"})," messages, enhancing the relevance of AuctionNotice messages."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Auction Notice Publication"}),": Notices are consolidated into a feed called ",(0,t.jsx)(n.code,{children:"AuctionNotice"}),", which streams auctions in real-time."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Auction Responses"}),": Participants can respond to auctions directly using ",(0,t.jsx)(n.code,{children:"NoticeResponse"})," messages."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Auction Notice Execution Report"}),": Participants can monitor their ",(0,t.jsx)(n.code,{children:"NoticeResponse"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Auction Cancel"}),": Participants can cancel their NoticeResponse directly using ",(0,t.jsx)(n.code,{children:"NoticeCancel"})," messages."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"message-types",children:"Message Types"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"UserAuctionFilter"}),": Allows responders to specify filters for the auctions they wish to receive notifications from ",(0,t.jsx)(n.code,{children:"AuctionNotice"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"AuctionNotice"}),": A real-time feed of ongoing auctions available for clients to stream."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"NoticeResponse"}),": Used by responders to participate in an auction."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"NoticeExecReport"}),": Allows responders to get a execution report following their ",(0,t.jsx)(n.code,{children:"NoticeResponse"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"AuctionState"}),": Contains the state of the most recent auction trial match. ",(0,t.jsx)(n.code,{children:"AuctionState"})," messages are sent at the end of Flash auctions and once per second for Block auctions."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"NoticeCancel"}),": Allows responders to cancel their ",(0,t.jsx)(n.code,{children:"NoticeResponse"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Details on these messages can be found ",(0,t.jsx)(n.a,{href:"/docs/SpiderRockConnectATS/RespondingViaMLink",children:"here"})]}),"\n",(0,t.jsx)(n.h2,{id:"integration-with-mlink-api",children:"Integration with MLink API"}),"\n",(0,t.jsx)(n.p,{children:"Our Auction System utilizes the MLink API for message transmission, leveraging its support for multiple message delivery protocols, including JSON, Framed JSON, and Google Protocol Buffers."})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>c});var t=i(96540);const s={},o=t.createContext(s);function r(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);