"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[7254],{29542:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var i=n(74848),o=n(28453);const s={title:"Example - Responding to a Block Auction",sidebar_position:4},a=void 0,c={id:"Documentation/Products/ToolSuite/TradeApp/BlockRespondingExample",title:"Example - Responding to a Block Auction",description:"Auction responders can access a queue of auctions on the right side of the SpiderRock Connect application.  Users can choose to receive all auctions or filter the list based on their own criteria.  Each auction is presented in its own card that displays the item being auctioned, the size, time remaining in the auction, as well as delta/gamma/vega, a reference underlying price, and edge to the SpiderRock surface.  To respond to an auction, a client can select an auction card from the auction queue and follow the below steps:",source:"@site/docs/Documentation/Products/ToolSuite/TradeApp/BlockRespondingExample.md",sourceDirName:"Documentation/Products/ToolSuite/TradeApp",slug:"/Documentation/Products/ToolSuite/TradeApp/BlockRespondingExample",permalink:"/docs/next/Documentation/Products/ToolSuite/TradeApp/BlockRespondingExample",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Example - Responding to a Block Auction",sidebar_position:4},sidebar:"documentationSidebar",previous:{title:"Example - Initiating a Block Auction",permalink:"/docs/next/Documentation/Products/ToolSuite/TradeApp/BlockInitiatingExample"},next:{title:"Portal App Manual",permalink:"/docs/next/Documentation/Products/ToolSuite/PortalApp"}},r={},d=[{value:"Auction Opened",id:"auction-opened",level:2},{value:"Response Sent",id:"response-sent",level:2}];function l(e){const t={h2:"h2",img:"img",p:"p",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"Auction responders can access a queue of auctions on the right side of the SpiderRock Connect application.  Users can choose to receive all auctions or filter the list based on their own criteria.  Each auction is presented in its own card that displays the item being auctioned, the size, time remaining in the auction, as well as delta/gamma/vega, a reference underlying price, and edge to the SpiderRock surface.  To respond to an auction, a client can select an auction card from the auction queue and follow the below steps:"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Auction Queue",src:n(26328).A+"",width:"330",height:"769"})}),"\n",(0,i.jsx)(t.h2,{id:"auction-opened",children:"Auction Opened"}),"\n",(0,i.jsx)(t.p,{children:"Once the responding client selects an auction card from the queue, SpiderRock Connect will display the initiating client\u2019s order.  In this example, the initiating client\u2019s order was:"}),"\n",(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{children:"Buy the 200 strike put"}),(0,i.jsx)("li",{children:"Sell the 195 strike put"})]}),"\n",(0,i.jsx)(t.p,{children:"These individual option legs are reversed for the responder, so the responder sees:"}),"\n",(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{children:"Sell the 200 strike put"}),(0,i.jsx)("li",{children:"Buy the 195 strike put"})]}),"\n",(0,i.jsx)(t.p,{children:"Since this is a multi-leg order, SpiderRock Connect displays a debit/credit toggle, and this toggle is automatically switched for the responder.  SpiderRock Connect also updates the Block Auction strategy to show a \u201cR\u201d for responding order.  In order to respond the client will need to click \u201cSet Response\u201d, enter their parameters, and send their auction response."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Responder&#39;s view",src:n(21939).A+"",width:"975",height:"245"})}),"\n",(0,i.jsx)(t.h2,{id:"response-sent",children:"Response Sent"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Responder&#39;s position shown in the display panel",src:n(6378).A+"",width:"975",height:"245"})}),"\n",(0,i.jsx)(t.p,{children:"Once the response has been sent the responder can see their position in the auction response panel highlighted with a blue icon.\u2003"})]})}function p(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},26328:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/tt-bre-image1-69d0110dcab55388acc8ff9f4c778cb4.png"},21939:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/tt-bre-image2-1f1279b41d4447fbd236bc9a5398465b.png"},6378:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/tt-bre-image3-86d0b79d1dd2e81d7f5fddd18beb5e3e.png"},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>c});var i=n(96540);const o={},s=i.createContext(o);function a(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);