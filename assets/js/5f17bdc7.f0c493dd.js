"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[22898],{69317:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>d,toc:()=>l});var n=t(74848),r=t(28453),i=t(64210);const s={title:"Auction Auto-Responders",sidebar_position:7},a=void 0,d={id:"SpiderRockConnectATS/AutoResponders",title:"Auction Auto-Responders",description:'SpiderRock ATS allows its clients (hereafter "Subscribers") to establish auction auto-responders capable of receiving auction notices and responding to both a SpiderRock ATS auction and on-exchange auctions.  These auto-responders are created via messages sent (and updated as needed) to SpiderRock ATS, and must be established in advance of an auction.',source:"@site/docs/SpiderRockConnectATS/7.AutoResponders.md",sourceDirName:"SpiderRockConnectATS",slug:"/SpiderRockConnectATS/AutoResponders",permalink:"/docs/next/SpiderRockConnectATS/AutoResponders",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"Auction Auto-Responders",sidebar_position:7},sidebar:"spiderRockConnectATSSidebar",previous:{title:"Responding Via FIX",permalink:"/docs/next/SpiderRockConnectATS/RespondingViaFIX"},next:{title:"ICE Chat Bot",permalink:"/docs/next/SpiderRockConnectATS/ICEChatBot"}},c={},l=[{value:"Auto-Responder Configuration Messages",id:"auto-responder-configuration-messages",level:2},{value:"Auto-Responding to VegaDir Auctions",id:"auto-responding-to-vegadir-auctions",level:3},{value:"Auto-Responding to Rev/Con Spread Auctions",id:"auto-responding-to-revcon-spread-auctions",level:3},{value:"Auto-Responding to Box Spread Auctions",id:"auto-responding-to-box-spread-auctions",level:3},{value:"Auto-Responding to Synthetic Spread Auctions",id:"auto-responding-to-synthetic-spread-auctions",level:3},{value:"Disclosures and Additional Information",id:"disclosures-and-additional-information",level:2}];function p(e){const o={a:"a",em:"em",h2:"h2",h3:"h3",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.p,{children:'SpiderRock ATS allows its clients (hereafter "Subscribers") to establish auction auto-responders capable of receiving auction notices and responding to both a SpiderRock ATS auction and on-exchange auctions.  These auto-responders are created via messages sent (and updated as needed) to SpiderRock ATS, and must be established in advance of an auction.'}),"\n",(0,n.jsx)(o.p,{children:"This feature is best utilized by Subscribers who can identify securities and total quantities (in contract, vega, or other terms) that they are generally willing to buy (or sell) in advance at mid-market or slightly better."}),"\n",(0,n.jsx)(o.p,{children:"These auto-responders can be configured to respond to auctions for both listed and/or FLEX options."}),"\n",(0,n.jsxs)(o.p,{children:["Auto-responders generally allow Subscribers to specify the underliers and expiries they are willing to respond to, the levels they are willing to respond at, and also, the total aggregate quantity they are willing to trade.  If all of a responder's criteria are met, SpiderRock auto-responders generate ",(0,n.jsx)(o.em,{children:"SpdrParentOrders"})," on the responder's behalf in order to participate in the auctions.  These parent order records are visible in SRSE and MLink Servers and are subject to all normal SpiderRock risk controls as well as potentially triggering a SpiderRock ",(0,n.jsx)(o.em,{children:"StageReview"})," sequence.  In addition, drop copies of the parent orders and all associated exec reports can be delivered to Subscribers via FIX drop copy."]}),"\n",(0,n.jsx)(o.p,{children:"All auto-responder messages have primary keys allowing them to be replaced by sending a subsequent message with the same primary key.  This mechanism can be used to update any auto-responder parameter including enabling or disabling it."}),"\n",(0,n.jsxs)(o.p,{children:["Auto-responder records can be uploaded to SpiderRock via ",(0,n.jsx)(o.a,{href:"/docs/next/Documentation/PlatformAPIs/MLink/RESTAPI",children:"MLink/REST"}),", ",(0,n.jsx)(o.a,{href:"/docs/next/Documentation/PlatformAPIs/MLink/WebSocket",children:"MLink/WebSocket"}),", ",(0,n.jsx)(o.a,{href:"/docs/next/Documentation/PlatformAPIs/SRSE/",children:"SRSE APIs"}),", or via the SpiderRock ",(0,n.jsx)(o.a,{href:"/docs/next/Documentation/Products/ToolSuite/PortalApp",children:"Portal App"}),"."]}),"\n",(0,n.jsx)(o.h2,{id:"auto-responder-configuration-messages",children:"Auto-Responder Configuration Messages"}),"\n",(0,n.jsxs)(o.table,{children:[(0,n.jsx)(o.thead,{children:(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.th,{children:"Message"}),(0,n.jsx)(o.th,{children:"Description"})]})}),(0,n.jsxs)(o.tbody,{children:[(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.td,{children:(0,n.jsx)(o.a,{href:"/docs/next/MessageSchemas/Schema/Topics/liquidity-notice/AutoResponderVegaDir",children:"AutoResponderVegaDir"})}),(0,n.jsx)(o.td,{children:"Used to respond to auctions in which a leg(s) is going the same direction."})]}),(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.td,{children:(0,n.jsx)(o.a,{href:"/docs/next/MessageSchemas/Schema/Topics/liquidity-notice/AutoResponderRC",children:"AutoResponderRC"})}),(0,n.jsx)(o.td,{children:"Used to respond to option rev/con spread (C/P/S) strategies."})]}),(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.td,{children:(0,n.jsx)(o.a,{href:"/docs/next/MessageSchemas/Schema/Topics/liquidity-notice/AutoResponderBX",children:"AutoResponderBX"})}),(0,n.jsx)(o.td,{children:"Used to respond to option box spread (C/P/C/P) strategies."})]}),(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.td,{children:(0,n.jsx)(o.a,{href:"/docs/next/MessageSchemas/Schema/Topics/liquidity-notice/AutoResponderSN",children:"AutoResponderSN"})}),(0,n.jsx)(o.td,{children:"Used to respond to option synthetic spread (C/P) strategies."})]})]})]}),"\n",(0,n.jsx)(o.h3,{id:"auto-responding-to-vegadir-auctions",children:"Auto-Responding to VegaDir Auctions"}),"\n",(0,n.jsxs)(o.p,{children:["The ",(0,n.jsxs)(o.a,{href:"/docs/next/MessageSchemas/Schema/Topics/liquidity-notice/AutoResponderVegaDir",children:[(0,n.jsx)(o.em,{children:"VegaDir"})," auto-responder"]})," defines the set of strikes that a responder is willing to either buy or sell via underlier, expiry, and delta range (",(0,n.jsx)(o.em,{children:"minXDelta"})," to ",(0,n.jsx)(o.em,{children:"maxXDelta"}),").  Any auction for a strike or combination of strikes within this 'risk box' that meets a minimum surface edge requirement and has not exhausted responder cumulative risk thresholds will be responded to. Auto-hedge instructions can (optionally) be supplied that will cause any resulting trades to be automatically auto-hedged if and when they occur."]}),"\n",(0,n.jsx)(o.p,{children:"Subscribers can establish as many auto-responder records as reasonably necessary to 'cover' the set of strikes that they are willing to buy or sell at any given time."}),"\n",(0,n.jsx)(o.h3,{id:"auto-responding-to-revcon-spread-auctions",children:"Auto-Responding to Rev/Con Spread Auctions"}),"\n",(0,n.jsx)(o.p,{children:"Rev/Con spread auto-responders define an underlier and expiry for which they are willing to execute a Rev/Con transaction (a transaction to lend or borrow shares by buying or selling shares vs synthetic call/put pair that will return the shares on expiration). While Rev/Con transactions can be viewed in option terms, it is often simpler to analyze them as short term lend/borrow transactions.  To help facilitate this analysis, auto-responders can specify their potential rev/con auction response limit price using a term stock lending rate, a term cash discount rate, and the present value of the expected term dividend stream. SpiderRock allows auto-responders to convert this information into a Rev/Con premium limit level for the purpose of participating in Rev/Con auctions."}),"\n",(0,n.jsx)(o.p,{children:"Responders would typically use this type of record to pre-load an inventory list and expiry terms that they are willing to lend (or borrow) shares at if or when appropriate auctions occur."}),"\n",(0,n.jsx)(o.h3,{id:"auto-responding-to-box-spread-auctions",children:"Auto-Responding to Box Spread Auctions"}),"\n",(0,n.jsx)(o.p,{children:"Box spread auto-responders are similar to Rev/Con auto-responders except they are involved in the buying and selling of a BOX spread (a transaction to lend or borrow cash that will return on expiration).  To help support this type of auction, SpiderRock allows auction response limit prices to be specified as a term cash discount rate."}),"\n",(0,n.jsx)(o.p,{children:"Auto-responders can use this type of record to pre-load expiries for which they are willing to lend (or borrow) cash if or when appropriate auctions occur."}),"\n",(0,n.jsx)(o.h3,{id:"auto-responding-to-synthetic-spread-auctions",children:"Auto-Responding to Synthetic Spread Auctions"}),"\n",(0,n.jsx)(o.p,{children:"Synthetic spread auto-responders are willing to execute a synthetic spread transaction (a transaction to create temporary exposure to an underlier similar to that of a single stock future).  To help support this type of auto-responder, SpiderRock allows auction response limit prices to be specified as offsets to the current underlier stock NBBO price."}),"\n",(0,n.jsx)(o.p,{children:"Auto-responders can use this type of record to pre-load underliers and expiries for which they are willing to execute synthetic spread transactions if or when appropriate auctions occur."}),"\n",(0,n.jsx)(o.h2,{id:"disclosures-and-additional-information",children:"Disclosures and Additional Information"}),"\n",(0,n.jsxs)(o.p,{children:["The information above provides a brief summary of certain technical aspects of SpiderRock ATS and is compiled for concise reference purposes only. While it encapsulates key points and provides an overview of certain content found in the SpiderRock ATS Subscriber Manual, it may not capture every detail found in the manual. For comprehensive understanding and complete context, please refer to the ",(0,n.jsx)(o.strong,{children:"SpiderRock ATS Subscriber Manual"}),"."]}),"\n",(0,n.jsx)(i.p,{label:"SpiderRock ATS Subscriber Manual",url:"/files/SpiderRockATSSubscriberManual.pdf"})]})}function u(e={}){const{wrapper:o}={...(0,r.R)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},30332:(e,o,t)=>{t.d(o,{A:()=>x});var n=t(96540),r=t(34164),i=t(75659),s=t(28466),a=t(11848),d=t(49559),c=t(46126),l=t(38413),p=t(31609);function u(e){return(0,p.Ay)("MuiSvgIcon",e)}(0,l.A)("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);var h=t(74848);const m=(0,a.Ay)("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:t}=e;return[o.root,"inherit"!==t.color&&o[`color${(0,s.A)(t.color)}`],o[`fontSize${(0,s.A)(t.fontSize)}`]]}})((0,d.A)((({theme:e})=>({userSelect:"none",width:"1em",height:"1em",display:"inline-block",flexShrink:0,transition:e.transitions?.create?.("fill",{duration:(e.vars??e).transitions?.duration?.shorter}),variants:[{props:e=>!e.hasSvgAsChild,style:{fill:"currentColor"}},{props:{fontSize:"inherit"},style:{fontSize:"inherit"}},{props:{fontSize:"small"},style:{fontSize:e.typography?.pxToRem?.(20)||"1.25rem"}},{props:{fontSize:"medium"},style:{fontSize:e.typography?.pxToRem?.(24)||"1.5rem"}},{props:{fontSize:"large"},style:{fontSize:e.typography?.pxToRem?.(35)||"2.1875rem"}},...Object.entries((e.vars??e).palette).filter((([,e])=>e&&e.main)).map((([o])=>({props:{color:o},style:{color:(e.vars??e).palette?.[o]?.main}}))),{props:{color:"action"},style:{color:(e.vars??e).palette?.action?.active}},{props:{color:"disabled"},style:{color:(e.vars??e).palette?.action?.disabled}},{props:{color:"inherit"},style:{color:void 0}}]})))),f=n.forwardRef((function(e,o){const t=(0,c.b)({props:e,name:"MuiSvgIcon"}),{children:a,className:d,color:l="inherit",component:p="svg",fontSize:f="medium",htmlColor:g,inheritViewBox:x=!1,titleAccess:S,viewBox:y="0 0 24 24",...v}=t,b=n.isValidElement(a)&&"svg"===a.type,A={...t,color:l,component:p,fontSize:f,instanceFontSize:e.fontSize,inheritViewBox:x,viewBox:y,hasSvgAsChild:b},R={};x||(R.viewBox=y);const j=(e=>{const{color:o,fontSize:t,classes:n}=e,r={root:["root","inherit"!==o&&`color${(0,s.A)(o)}`,`fontSize${(0,s.A)(t)}`]};return(0,i.A)(r,u,n)})(A);return(0,h.jsxs)(m,{as:p,className:(0,r.A)(j.root,d),focusable:"false",color:g,"aria-hidden":!S||void 0,role:S?"img":void 0,ref:o,...R,...v,...b&&a.props,ownerState:A,children:[b?a.props.children:a,S?(0,h.jsx)("title",{children:S}):null]})}));f&&(f.muiName="SvgIcon");const g=f;function x(e,o){function t(t,n){return(0,h.jsx)(g,{"data-testid":`${o}Icon`,ref:n,...t,children:e})}return t.muiName=g.muiName,n.memo(n.forwardRef(t))}},64210:(e,o,t)=>{t.d(o,{p:()=>d});t(96540);var n=t(58968),r=t(67512),i=t(30332),s=t(74848);const a=(0,i.A)((0,s.jsx)("path",{d:"M19 9h-4V3H9v6H5l7 7zM5 18v2h14v-2z"}),"FileDownload"),d=e=>{let{url:o,label:t}=e;return(0,s.jsx)(n.A,{className:"DownloadApp-root",sx:{marginTop:"32px",display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",gap:"24px"},children:(0,s.jsxs)(r.A,{onClick:()=>{const e=document.createElement("a");e.href=o,e.download=t,document.body.appendChild(e),e.click(),document.body.removeChild(e)},sx:{padding:1,display:"flex",justifyContent:"center",alignItems:"center",gap:"8px",fontWeight:700,fontSize:"12px",minHeight:"30px",lineHeight:"12px",borderRadius:"4px",backgroundColor:"#333747","&:hover":{backgroundColor:"#44495B"},"& .DownloadFile-icon":{display:"flex",alignItems:"center",justifyContent:"center","& svg":{fill:"#A1A7BF",width:"20px",height:"20px"}}},children:[(0,s.jsx)("div",{className:"DownloadFile-icon",children:(0,s.jsx)(a,{})}),(0,s.jsx)("span",{children:t})]},"downloadButton")})}},28453:(e,o,t)=>{t.d(o,{R:()=>s,x:()=>a});var n=t(96540);const r={},i=n.createContext(r);function s(e){const o=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function a(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),n.createElement(i.Provider,{value:o},e.children)}}}]);