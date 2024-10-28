"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[58743],{54509:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>d,contentTitle:()=>c,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var i=n(74848),t=n(28453),r=n(64210);const s={title:"Responding Via FIX",sidebar_position:6},c=void 0,a={id:"SpiderRockConnectATS/RespondingViaFIX",title:"Responding Via FIX",description:'SpiderRock ATS clients (hereafter "Subscribers") can respond to AuctionNotice and AuctionState messages received via FIX or the SpiderRock MLink/WebSocket API by sending FIX NewOrderSingle and NewOrderMultileg messages. These messages can be sent to a SpiderRock Order Entry FIX Gateway using an appropriately provisioned FIX session.',source:"@site/versioned_docs/version-8.4.10.4/SpiderRockConnectATS/6.RespondingViaFIX.md",sourceDirName:"SpiderRockConnectATS",slug:"/SpiderRockConnectATS/RespondingViaFIX",permalink:"/docs/8.4.10.4/SpiderRockConnectATS/RespondingViaFIX",draft:!1,unlisted:!1,tags:[],version:"8.4.10.4",sidebarPosition:6,frontMatter:{title:"Responding Via FIX",sidebar_position:6},sidebar:"spiderRockConnectATSSidebar",previous:{title:"Responding Via MLink",permalink:"/docs/8.4.10.4/SpiderRockConnectATS/RespondingViaMLink"},next:{title:"Auction Auto-Responders",permalink:"/docs/8.4.10.4/SpiderRockConnectATS/AutoResponders"}},d={},l=[{value:"Disclosures and Additional Information",id:"disclosures-and-additional-information",level:2}];function p(e){const o={a:"a",em:"em",h2:"h2",p:"p",strong:"strong",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(o.p,{children:['SpiderRock ATS clients (hereafter "Subscribers") can respond to ',(0,i.jsx)(o.a,{href:"/docs/next/MessageSchemas/Schema/Topics/liquidity-notice/AuctionNotice",children:(0,i.jsx)(o.em,{children:"AuctionNotice"})})," and ",(0,i.jsx)(o.a,{href:"/docs/next/MessageSchemas/Schema/Topics/liquidity-notice/AuctionState",children:(0,i.jsx)(o.em,{children:"AuctionState"})})," messages received via FIX or the SpiderRock ",(0,i.jsx)(o.a,{href:"/docs/8.4.10.4/Documentation/PlatformAPIs/MLink/",children:(0,i.jsx)(o.strong,{children:"MLink/WebSocket API"})})," by sending FIX ",(0,i.jsx)(o.em,{children:"NewOrderSingle"})," and ",(0,i.jsx)(o.em,{children:"NewOrderMultileg"})," messages. These messages can be sent to a SpiderRock Order Entry FIX Gateway using an appropriately provisioned FIX session."]}),"\n",(0,i.jsxs)(o.p,{children:["Learn more about connecting to ",(0,i.jsx)(o.strong,{children:"SpiderRock FIX Gateways"}),"."]}),"\n",(0,i.jsxs)(o.p,{children:["Read our ",(0,i.jsx)(o.a,{href:"/docs/8.4.10.4/Documentation/PlatformAPIs/FIX/auction-responder-spec",children:(0,i.jsx)(o.strong,{children:"Auction Responder FIX Specs."})})]}),"\n",(0,i.jsxs)("ul",{children:[(0,i.jsx)("b",{children:"Note:"})," Subscribers intended to respond via FIX are encouraged to connect to and develop against one of the SpiderRock Sandboxes prior to certifying sessions or responding to live auctions.  "]}),"\n",(0,i.jsx)(o.h2,{id:"disclosures-and-additional-information",children:"Disclosures and Additional Information"}),"\n",(0,i.jsxs)(o.p,{children:["The information above provides a brief summary of certain technical aspects of SpiderRock ATS and is compiled for concise reference purposes only. While it encapsulates key points and provides an overview of certain content found in the SpiderRock ATS Subscriber Manual, it may not capture every detail found in the manual. For comprehensive understanding and complete context, please refer to the ",(0,i.jsx)(o.strong,{children:"SpiderRock ATS Subscriber Manual"}),"."]}),"\n",(0,i.jsx)(r.p,{label:"SpiderRock ATS Subscriber Manual",url:"/files/SpiderRockATSSubscriberManual.pdf"})]})}function u(e={}){const{wrapper:o}={...(0,t.R)(),...e.components};return o?(0,i.jsx)(o,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},30332:(e,o,n)=>{n.d(o,{A:()=>g});var i=n(96540),t=n(34164),r=n(75659),s=n(28466),c=n(11848),a=n(49559),d=n(46126),l=n(38413),p=n(31609);function u(e){return(0,p.Ay)("MuiSvgIcon",e)}(0,l.A)("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);var m=n(74848);const h=(0,c.Ay)("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:n}=e;return[o.root,"inherit"!==n.color&&o[`color${(0,s.A)(n.color)}`],o[`fontSize${(0,s.A)(n.fontSize)}`]]}})((0,a.A)((({theme:e})=>({userSelect:"none",width:"1em",height:"1em",display:"inline-block",flexShrink:0,transition:e.transitions?.create?.("fill",{duration:(e.vars??e).transitions?.duration?.shorter}),variants:[{props:e=>!e.hasSvgAsChild,style:{fill:"currentColor"}},{props:{fontSize:"inherit"},style:{fontSize:"inherit"}},{props:{fontSize:"small"},style:{fontSize:e.typography?.pxToRem?.(20)||"1.25rem"}},{props:{fontSize:"medium"},style:{fontSize:e.typography?.pxToRem?.(24)||"1.5rem"}},{props:{fontSize:"large"},style:{fontSize:e.typography?.pxToRem?.(35)||"2.1875rem"}},...Object.entries((e.vars??e).palette).filter((([,e])=>e&&e.main)).map((([o])=>({props:{color:o},style:{color:(e.vars??e).palette?.[o]?.main}}))),{props:{color:"action"},style:{color:(e.vars??e).palette?.action?.active}},{props:{color:"disabled"},style:{color:(e.vars??e).palette?.action?.disabled}},{props:{color:"inherit"},style:{color:void 0}}]})))),S=i.forwardRef((function(e,o){const n=(0,d.b)({props:e,name:"MuiSvgIcon"}),{children:c,className:a,color:l="inherit",component:p="svg",fontSize:S="medium",htmlColor:f,inheritViewBox:g=!1,titleAccess:x,viewBox:v="0 0 24 24",...A}=n,y=i.isValidElement(c)&&"svg"===c.type,b={...n,color:l,component:p,fontSize:S,instanceFontSize:e.fontSize,inheritViewBox:g,viewBox:v,hasSvgAsChild:y},R={};g||(R.viewBox=v);const k=(e=>{const{color:o,fontSize:n,classes:i}=e,t={root:["root","inherit"!==o&&`color${(0,s.A)(o)}`,`fontSize${(0,s.A)(n)}`]};return(0,r.A)(t,u,i)})(b);return(0,m.jsxs)(h,{as:p,className:(0,t.A)(k.root,a),focusable:"false",color:f,"aria-hidden":!x||void 0,role:x?"img":void 0,ref:o,...R,...A,...y&&c.props,ownerState:b,children:[y?c.props.children:c,x?(0,m.jsx)("title",{children:x}):null]})}));S&&(S.muiName="SvgIcon");const f=S;function g(e,o){function n(n,i){return(0,m.jsx)(f,{"data-testid":`${o}Icon`,ref:i,...n,children:e})}return n.muiName=f.muiName,i.memo(i.forwardRef(n))}},64210:(e,o,n)=>{n.d(o,{p:()=>a});n(96540);var i=n(58968),t=n(67512),r=n(30332),s=n(74848);const c=(0,r.A)((0,s.jsx)("path",{d:"M19 9h-4V3H9v6H5l7 7zM5 18v2h14v-2z"}),"FileDownload"),a=e=>{let{url:o,label:n}=e;return(0,s.jsx)(i.A,{className:"DownloadApp-root",sx:{marginTop:"32px",display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",gap:"24px"},children:(0,s.jsxs)(t.A,{onClick:()=>{const e=document.createElement("a");e.href=o,e.download=n,document.body.appendChild(e),e.click(),document.body.removeChild(e)},sx:{padding:1,display:"flex",justifyContent:"center",alignItems:"center",gap:"8px",fontWeight:700,fontSize:"12px",minHeight:"30px",lineHeight:"12px",borderRadius:"4px",backgroundColor:"#333747","&:hover":{backgroundColor:"#44495B"},"& .DownloadFile-icon":{display:"flex",alignItems:"center",justifyContent:"center","& svg":{fill:"#A1A7BF",width:"20px",height:"20px"}}},children:[(0,s.jsx)("div",{className:"DownloadFile-icon",children:(0,s.jsx)(c,{})}),(0,s.jsx)("span",{children:n})]},"downloadButton")})}},28453:(e,o,n)=>{n.d(o,{R:()=>s,x:()=>c});var i=n(96540);const t={},r=i.createContext(t);function s(e){const o=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function c(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),i.createElement(r.Provider,{value:o},e.children)}}}]);