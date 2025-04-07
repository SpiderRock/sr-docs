"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([["72568"],{21787:function(e,i,s){s.r(i),s.d(i,{default:()=>p,frontMatter:()=>r,metadata:()=>n,assets:()=>d,toc:()=>l,contentTitle:()=>a});var n=JSON.parse('{"id":"SpiderRockConnectATS/RespondingViaMLink","title":"Responding Via MLink","description":"AuctionNotice and AuctionState messages are available to SpiderRock ATS clients (hereafter \\"Subscribers\\") via the SpiderRock MLink/WebSocket API. To gain access, responders must secure an MLink API Key, connect to an MLink/WebSocket server, and subscribe to both AuctionNotice and AuctionState messages.","source":"@site/docs/SpiderRockConnectATS/5.RespondingViaMLink.md","sourceDirName":"SpiderRockConnectATS","slug":"/SpiderRockConnectATS/RespondingViaMLink","permalink":"/docs/next/SpiderRockConnectATS/RespondingViaMLink","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"Responding Via MLink","sidebar_position":5},"sidebar":"spiderRockConnectATSSidebar","previous":{"title":"SpiderRock Connect Trade App","permalink":"/docs/next/SpiderRockConnectATS/TradeTool"},"next":{"title":"Responding Via FIX","permalink":"/docs/next/SpiderRockConnectATS/RespondingViaFIX"}}'),t=s("52676"),o=s("91503"),c=s("68404");let r={title:"Responding Via MLink",sidebar_position:5},a=void 0,d={},l=[{value:"Auction Notices",id:"auction-notices",level:3},{value:"Specialized Strategy Notices",id:"specialized-strategy-notices",level:3},{value:"Auction Response Messages",id:"auction-response-messages",level:3},{value:"Key Features",id:"key-features",level:3},{value:"Disclosures and Additional Information",id:"disclosures-and-additional-information",level:2}];function h(e){let i={a:"a",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.a,{href:"/docs/next/MessageSchemas/Schema/Topics/liquidity-notice/AuctionNotice",children:(0,t.jsx)(i.em,{children:"AuctionNotice"})})," and ",(0,t.jsx)(i.a,{href:"/docs/next/MessageSchemas/Schema/Topics/liquidity-notice/AuctionState",children:(0,t.jsx)(i.em,{children:"AuctionState"})}),' messages are available to SpiderRock ATS clients (hereafter "Subscribers") via the SpiderRock ',(0,t.jsx)(i.a,{href:"/docs/next/Documentation/PlatformAPIs/MLink/",children:"MLink/WebSocket API"}),". To gain access, responders must secure an MLink API Key, connect to an MLink/WebSocket server, and subscribe to both ",(0,t.jsx)(i.a,{href:"/docs/next/MessageSchemas/Schema/Topics/liquidity-notice/AuctionNotice",children:(0,t.jsx)(i.em,{children:"AuctionNotice"})})," and ",(0,t.jsx)(i.a,{href:"/docs/next/MessageSchemas/Schema/Topics/liquidity-notice/AuctionState",children:(0,t.jsx)(i.em,{children:"AuctionState"})})," messages."]}),"\n",(0,t.jsxs)(i.p,{children:["Once subscribed, relevant ",(0,t.jsx)(i.a,{href:"/docs/next/MessageSchemas/Schema/Topics/liquidity-notice/AuctionNotice",children:(0,t.jsx)(i.em,{children:"AuctionNotice"})})," auction messages will be delivered to Subscribers associated with the MLink API Key via the MLink/WebSocket API, and will contain as much information as the initiator has chosen to reveal. For example, if the initiator has chosen to reveal their identity, then their identity will be contained in the ",(0,t.jsx)(i.a,{href:"/docs/next/MessageSchemas/Schema/Topics/liquidity-notice/AuctionNotice",children:(0,t.jsx)(i.em,{children:"AuctionNotice"})})," message a Subscriber receives."]}),"\n",(0,t.jsxs)(i.p,{children:["This page focuses on the messages relevant to auction participants. Interested responders should also review SpiderRock's more general ",(0,t.jsx)(i.a,{href:"/docs/next/Documentation/PlatformAPIs/MLink/",children:(0,t.jsx)(i.strong,{children:"MLink/Websocket API documentation found here"})})," for information on connecting, subscribing, sending, and receiving messages."]}),"\n",(0,t.jsx)(i.h3,{id:"auction-notices",children:"Auction Notices"}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{children:"Message"}),(0,t.jsx)(i.th,{children:"Source"}),(0,t.jsx)(i.th,{children:"Description"})]})}),(0,t.jsxs)(i.tbody,{children:[(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.a,{href:"/docs/next/MessageSchemas/Schema/Topics/liquidity-notice/AuctionNotice",children:"AuctionNotice"})}),(0,t.jsx)(i.td,{children:"SR"}),(0,t.jsxs)(i.td,{children:["This is the primary message used to notify responders that an auction has started and/or that an initiator has updated their public parameters. ",(0,t.jsx)(i.a,{href:"/docs/next/MessageSchemas/Schema/Topics/liquidity-notice/AuctionNotice",children:(0,t.jsx)(i.em,{children:"AuctionNotice"})})," messages are available for all SpiderRock ATS auctions as well as for exposure and price improvement auctions that take place on options exchanges."]})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.a,{href:"/docs/next/MessageSchemas/Schema/Topics/liquidity-notice/AuctionState",children:"AuctionState"})}),(0,t.jsx)(i.td,{children:"SR"}),(0,t.jsx)(i.td,{children:"Contains the state of the most recent auction trial match. Auction state messages are sent at the conclusion of Flash Auctions and once per second for Block Auctions."})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.a,{href:"/docs/next/MessageSchemas/Schema/Topics/liquidity-notice/AuctionPrint",children:"AuctionPrint"})}),(0,t.jsx)(i.td,{children:"SR"}),(0,t.jsx)(i.td,{children:"Auction print messages correspond to auction notices for all exchange facilitated auctions including secondary (on-exchange) SpiderRock ATS auctions."})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.a,{href:"/docs/next/MessageSchemas/Schema/Topics/client-config/UserAuctionFilter",children:"UserAuctionFilter"})}),(0,t.jsx)(i.td,{children:"Subscriber"}),(0,t.jsx)(i.td,{children:"Message used to filter, control, or otherwise limit the delivery of the above auction messages. Messages that are blocked by the relevant filter will not be received."})]})]})]}),"\n",(0,t.jsx)(i.h3,{id:"specialized-strategy-notices",children:"Specialized Strategy Notices"}),"\n",(0,t.jsx)(i.p,{children:"SpiderRock ATS distributes specialized auction notice messages designed to make it easier to respond to certain common option spread strategies. These notices are delivered in addition to normal auction notices and are not required in order to respond successfully to these common strategies."}),"\n",(0,t.jsxs)(i.p,{children:["Specialized notices contain a ",(0,t.jsx)(i.em,{children:"noticeNumber"})," and can be responded to in the same manner as normal notices."]}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{children:"Message"}),(0,t.jsx)(i.th,{children:"Source"}),(0,t.jsx)(i.th,{children:"Description"})]})}),(0,t.jsxs)(i.tbody,{children:[(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.a,{href:"/docs/next/MessageSchemas/Schema/Topics/liquidity-notice/AuctionNoticeRC",children:"AuctionNoticeRC"})}),(0,t.jsx)(i.td,{children:"SR"}),(0,t.jsx)(i.td,{children:"Rev/Con (+C/-P/-S) auction notice message"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.a,{href:"/docs/next/MessageSchemas/Schema/Topics/liquidity-notice/AuctionNoticeBX",children:"AuctionNoticeBX"})}),(0,t.jsx)(i.td,{children:"SR"}),(0,t.jsx)(i.td,{children:"Box spread auction notice message"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.a,{href:"/docs/next/MessageSchemas/Schema/Topics/liquidity-notice/AuctionNoticeSN",children:"AuctionNoticeSN"})}),(0,t.jsx)(i.td,{children:"SR"}),(0,t.jsx)(i.td,{children:"Synthetic (+C/-P) auction notice message"})]})]})]}),"\n",(0,t.jsx)(i.h3,{id:"auction-response-messages",children:"Auction Response Messages"}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.a,{href:"/docs/next/MessageSchemas/Schema/Topics/liquidity-notice/NoticeResponse",children:(0,t.jsx)(i.em,{children:"NoticeResponse"})})," messages can be sent through MLink/WebSocket connections to respond directly to ",(0,t.jsx)(i.a,{href:"/docs/next/MessageSchemas/Schema/Topics/liquidity-notice/AuctionNotice",children:(0,t.jsx)(i.em,{children:"AuctionNotices"})}),", whether the notice is from either a SpiderRock ATS or an on-exchange auction. Responders are expected to process the associated ",(0,t.jsx)(i.a,{href:"/docs/next/MessageSchemas/Schema/Topics/liquidity-notice/NoticeExecReport",children:(0,t.jsx)(i.em,{children:"NoticeExecReport"})})," messages to receive confirmation of, and updates to, their ",(0,t.jsx)(i.a,{href:"/docs/next/MessageSchemas/Schema/Topics/liquidity-notice/NoticeResponse",children:(0,t.jsx)(i.em,{children:"NoticeResponses"})}),". This is a simpler method (relative to FIX) of responding to auction notices, particularly for Subscribers that do not currently operate production quality live FIX infrastructure."]}),"\n",(0,t.jsx)("ul",{children:(0,t.jsxs)(i.p,{children:[(0,t.jsx)("b",{children:"Note:"})," Responders should subscribe to ",(0,t.jsx)("i",{children:"NoticeExecReport"})," messages if they intend to send ",(0,t.jsx)(i.em,{children:"NoticeResponse"})," messages through an MLink/WebSocket server."]})}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{children:"Message"}),(0,t.jsx)(i.th,{children:"Source"}),(0,t.jsx)(i.th,{children:"Description"})]})}),(0,t.jsxs)(i.tbody,{children:[(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.a,{href:"/docs/next/MessageSchemas/Schema/Topics/liquidity-notice/NoticeResponse",children:"NoticeResponse"})}),(0,t.jsx)(i.td,{children:"Subscriber"}),(0,t.jsxs)(i.td,{children:["Message used to participate/respond to an ",(0,t.jsx)(i.a,{href:"/docs/next/MessageSchemas/Schema/Topics/liquidity-notice/AuctionNotice",children:(0,t.jsx)(i.em,{children:"AuctionNotice"})}),". Responses are by ",(0,t.jsx)(i.em,{children:"noticeNumber"})," and only one response is allowed per user per ",(0,t.jsx)(i.em,{children:"noticeNumber"}),". Subsequent responses from a user will be deemed to cancel/replace any previous response for the same ",(0,t.jsx)(i.em,{children:"noticeNumber"}),"."]})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.a,{href:"/docs/next/MessageSchemas/Schema/Topics/liquidity-notice/NoticeExecReport",children:"NoticeExecReport"})}),(0,t.jsx)(i.td,{children:"SR"}),(0,t.jsxs)(i.td,{children:["Message used to confirmation and communicate status of a ",(0,t.jsx)(i.a,{href:"/docs/next/MessageSchemas/Schema/Topics/liquidity-notice/NoticeResponse",children:(0,t.jsx)(i.em,{children:"NoticeResponse"})}),". Similar to a FIX exec report."]})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.a,{href:"/docs/next/MessageSchemas/Schema/Topics/liquidity-notice/NoticeCancel",children:"NoticeCancel"})}),(0,t.jsx)(i.td,{children:"Client"}),(0,t.jsxs)(i.td,{children:["Cancels a previous ",(0,t.jsx)(i.a,{href:"/docs/next/MessageSchemas/Schema/Topics/liquidity-notice/NoticeResponse",children:(0,t.jsx)(i.em,{children:"NoticeResponse"})})," by ",(0,t.jsx)(i.em,{children:"noticeNumber"}),"."]})]})]})]}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.a,{href:"/docs/next/MessageSchemas/Schema/Topics/liquidity-notice/NoticeResponse",children:(0,t.jsx)(i.em,{children:"NoticeResponse"})})," messages are converted to ",(0,t.jsx)(i.a,{href:"/docs/next/MessageSchemas/Schema/Topics/parent-orders/SpdrParentOrder",children:(0,t.jsx)(i.em,{children:"SpdrParentOrder"})})," messages by the MLink/Websocket API and are visible both via SRSE and other MLink servers. It is also possible for SpiderRock to send either execution only FIX drop copy streams or full parent order FIX drop copy streams back to responder firms such that the FIX drop copies replicate the associated MLink/WebSocket API interaction."]}),"\n",(0,t.jsx)(i.h3,{id:"key-features",children:"Key Features"}),"\n",(0,t.jsx)(i.p,{children:"The MLink API's integration into the SRCconnect workflow can be summarized in the following steps:"}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Auction Notice Generation"}),": The MLink Server publishes an ",(0,t.jsx)(i.a,{href:"/docs/next/MessageSchemas/Schema/Topics/liquidity-notice/AuctionNotice",children:(0,t.jsx)(i.em,{children:"AuctionNotice"})})," (Block / Flash) when a new auction is available that matches the client's predefined filters."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Client Decision Process"}),": The Client Auction Responder receives the ",(0,t.jsx)(i.a,{href:"/docs/next/MessageSchemas/Schema/Topics/liquidity-notice/AuctionNotice",children:(0,t.jsx)(i.em,{children:"AuctionNotice"})})," and uses the client's strategy and risk profile to decide whether to participate in an auction."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Response Handling"}),": The client's ",(0,t.jsx)(i.a,{href:"/docs/next/MessageSchemas/Schema/Topics/liquidity-notice/NoticeResponse",children:(0,t.jsx)(i.em,{children:"NoticeResponse"})})," is sent to the MLink Server, which then processes it and returns a ",(0,t.jsx)(i.a,{href:"/docs/next/MessageSchemas/Schema/Topics/liquidity-notice/NoticeExecReport",children:(0,t.jsx)(i.em,{children:"NoticeExecReport"})}),"."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Trial Match"}),": ",(0,t.jsx)(i.a,{href:"/docs/next/MessageSchemas/Schema/Topics/liquidity-notice/AuctionState",children:(0,t.jsx)(i.em,{children:"AuctionState"})})," messages are sent at the conclusion of each auction trial match (once per second while the auction is running for Block Auctions, at conclusion for Flash Auctions)"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Cancellation Option"}),": Clients retain the ability to send a ",(0,t.jsx)(i.a,{href:"/docs/next/MessageSchemas/Schema/Topics/liquidity-notice/NoticeCancel",children:(0,t.jsx)(i.em,{children:"NoticeCancel"})})," message if they choose to withdraw from an auction."]}),"\n"]}),"\n",(0,t.jsxs)(i.p,{children:["At a Subscriber's request, SpiderRock can also configure a trading account such that any ",(0,t.jsx)(i.a,{href:"/docs/next/MessageSchemas/Schema/Topics/parent-orders/SpdrParentOrder",children:(0,t.jsx)(i.em,{children:"SpdrParentOrder"})})," created from a ",(0,t.jsx)(i.a,{href:"/docs/next/MessageSchemas/Schema/Topics/liquidity-notice/NoticeResponse",children:(0,t.jsx)(i.em,{children:"NoticeResponse"})})," message triggers a Stage Review sequence. The Stage Review sequence would occur before a live response is sent to SpiderRock ATS or forwarded as a live exchange auction response or child order."]}),"\n",(0,t.jsxs)(i.p,{children:["In a Stage Review sequence, SpiderRock will send a simple FIX ",(0,t.jsx)(i.a,{href:"/docs/next/Documentation/PlatformAPIs/FIX/auction-responder-spec",children:(0,t.jsx)(i.em,{children:"NewOrderSingle"})})," or ",(0,t.jsx)(i.a,{href:"/docs/next/Documentation/PlatformAPIs/FIX/auction-responder-spec",children:(0,t.jsx)(i.em,{children:"NewOrderMultileg"})})," message to an order entry gateway implementing risk and/or compliance checks for a Subscriber firm. If this gateway forwards the review order back to SpiderRock, then the return of the order will be deemed a successful risk and compliance check and the original ",(0,t.jsx)(i.a,{href:"/docs/next/MessageSchemas/Schema/Topics/parent-orders/SpdrParentOrder",children:(0,t.jsx)(i.em,{children:"SpdrParentOrder"})})," will be allowed to proceed. This mechanism can both provide a risk control and be a pathway for supplying certain compliance and operations details (e.g. sell short versus sell long, existence of a locate, opening/closing indicators, allocation details, and so on.)"]}),"\n",(0,t.jsx)(i.h2,{id:"disclosures-and-additional-information",children:"Disclosures and Additional Information"}),"\n",(0,t.jsxs)(i.p,{children:["The information above provides a brief summary of certain technical aspects of SpiderRock ATS and is compiled for concise reference purposes only. While it encapsulates key points and provides an overview of certain content found in the SpiderRock ATS Subscriber Manual, it may not capture every detail found in the manual. For comprehensive understanding and complete context, please refer to the ",(0,t.jsx)(i.strong,{children:"SpiderRock ATS Subscriber Manual"}),"."]}),"\n",(0,t.jsx)(c.h,{label:"SpiderRock ATS Subscriber Manual",url:"/files/SpiderRockATSSubscriberManual.pdf"})]})}function p(e={}){let{wrapper:i}={...(0,o.a)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},70022:function(e,i,s){s.d(i,{Z:()=>f});var n=s("75271"),t=s("54461"),o=s("4566"),c=s("1552"),r=s("72604"),a=s("97412"),d=s("27050"),l=s("55674"),h=s("87025");function p(e){return(0,h.ZP)("MuiSvgIcon",e)}(0,l.Z)("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);var u=s("52676");let m=e=>{let{color:i,fontSize:s,classes:n}=e,t={root:["root","inherit"!==i&&`color${(0,c.Z)(i)}`,`fontSize${(0,c.Z)(s)}`]};return(0,o.Z)(t,p,n)},x=(0,r.ZP)("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:(e,i)=>{let{ownerState:s}=e;return[i.root,"inherit"!==s.color&&i[`color${(0,c.Z)(s.color)}`],i[`fontSize${(0,c.Z)(s.fontSize)}`]]}})((0,a.Z)(({theme:e})=>({userSelect:"none",width:"1em",height:"1em",display:"inline-block",flexShrink:0,transition:e.transitions?.create?.("fill",{duration:(e.vars??e).transitions?.duration?.shorter}),variants:[{props:e=>!e.hasSvgAsChild,style:{fill:"currentColor"}},{props:{fontSize:"inherit"},style:{fontSize:"inherit"}},{props:{fontSize:"small"},style:{fontSize:e.typography?.pxToRem?.(20)||"1.25rem"}},{props:{fontSize:"medium"},style:{fontSize:e.typography?.pxToRem?.(24)||"1.5rem"}},{props:{fontSize:"large"},style:{fontSize:e.typography?.pxToRem?.(35)||"2.1875rem"}},...Object.entries((e.vars??e).palette).filter(([,e])=>e&&e.main).map(([i])=>({props:{color:i},style:{color:(e.vars??e).palette?.[i]?.main}})),{props:{color:"action"},style:{color:(e.vars??e).palette?.action?.active}},{props:{color:"disabled"},style:{color:(e.vars??e).palette?.action?.disabled}},{props:{color:"inherit"},style:{color:void 0}}]}))),S=n.forwardRef(function(e,i){let s=(0,d.i)({props:e,name:"MuiSvgIcon"}),{children:o,className:c,color:r="inherit",component:a="svg",fontSize:l="medium",htmlColor:h,inheritViewBox:p=!1,titleAccess:S,viewBox:f="0 0 24 24",...j}=s,g=n.isValidElement(o)&&"svg"===o.type,b={...s,color:r,component:a,fontSize:l,instanceFontSize:e.fontSize,inheritViewBox:p,viewBox:f,hasSvgAsChild:g},y={};p||(y.viewBox=f);let v=m(b);return(0,u.jsxs)(x,{as:a,className:(0,t.Z)(v.root,c),focusable:"false",color:h,"aria-hidden":!S||void 0,role:S?"img":void 0,ref:i,...y,...j,...g&&o.props,ownerState:b,children:[g?o.props.children:o,S?(0,u.jsx)("title",{children:S}):null]})});function f(e,i){function s(s,n){return(0,u.jsx)(S,{"data-testid":`${i}Icon`,ref:n,...s,children:e})}return s.muiName=S.muiName,n.memo(n.forwardRef(s))}S.muiName="SvgIcon"},68404:function(e,i,s){s.d(i,{h:()=>r});var n=s("52676");s("75271");var t=s("42592"),o=s("52717");let c=(0,s("70022").Z)((0,n.jsx)("path",{d:"M19 9h-4V3H9v6H5l7 7zM5 18v2h14v-2z"}),"FileDownload"),r=e=>{let{url:i,label:s}=e;return(0,n.jsx)(t.Z,{className:"DownloadApp-root",sx:{marginTop:"32px",display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",gap:"24px"},children:(0,n.jsxs)(o.Z,{onClick:()=>{let e=document.createElement("a");e.href=i,e.download=s,document.body.appendChild(e),e.click(),document.body.removeChild(e)},sx:{padding:1,display:"flex",justifyContent:"center",alignItems:"center",gap:"8px",fontWeight:700,fontSize:"12px",minHeight:"30px",lineHeight:"12px",borderRadius:"4px",backgroundColor:"#333747","&:hover":{backgroundColor:"#44495B"},"& .DownloadFile-icon":{display:"flex",alignItems:"center",justifyContent:"center","& svg":{fill:"#A1A7BF",width:"20px",height:"20px"}}},children:[(0,n.jsx)("div",{className:"DownloadFile-icon",children:(0,n.jsx)(c,{})}),(0,n.jsx)("span",{children:s})]},"downloadButton")})}},91503:function(e,i,s){s.d(i,{Z:function(){return r},a:function(){return c}});var n=s(75271);let t={},o=n.createContext(t);function c(e){let i=n.useContext(o);return n.useMemo(function(){return"function"==typeof e?e(i):{...i,...e}},[i,e])}function r(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),n.createElement(o.Provider,{value:i},e.children)}}}]);