"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[20305],{22318:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var n=t(74848),s=t(28453);const o={title:"SRConnect Flash Auctions",sidebar_position:2},r=void 0,a={id:"SpiderRockConnectATS/ATSConceptGuides/SRConnect Auctions/Flash-Auction",title:"SRConnect Flash Auctions",description:"SpiderRock has built its own Flash Auction capability. The SpiderRock Flash Auction immediately matches an initiating order with auto-responding liquidity, while also displaying all responses to aid in price discovery.",source:"@site/docs/SpiderRockConnectATS/ATSConceptGuides/SRConnect Auctions/Flash-Auction.md",sourceDirName:"SpiderRockConnectATS/ATSConceptGuides/SRConnect Auctions",slug:"/SpiderRockConnectATS/ATSConceptGuides/SRConnect Auctions/Flash-Auction",permalink:"/docs/SpiderRockConnectATS/ATSConceptGuides/SRConnect Auctions/Flash-Auction",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"SRConnect Flash Auctions",sidebar_position:2},sidebar:"spiderRockConnectATSSidebar",previous:{title:"SRConnect Auctions Overview",permalink:"/docs/SpiderRockConnectATS/ATSConceptGuides/SRConnect Auctions/SRConnect-Auctions"},next:{title:"Allocations on Auction Transactions",permalink:"/docs/SpiderRockConnectATS/ATSConceptGuides/SRConnect Auctions/Auction-Allocations"}},c={},d=[{value:"Key features of Flash Auctions:",id:"key-features-of-flash-auctions",level:3},{value:"Flash Auction Parameters",id:"flash-auction-parameters",level:3}];function l(e){const i={br:"br",h3:"h3",p:"p",strong:"strong",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.p,{children:"SpiderRock has built its own Flash Auction capability. The SpiderRock Flash Auction immediately matches an initiating order with auto-responding liquidity, while also displaying all responses to aid in price discovery."}),"\n",(0,n.jsx)(i.p,{children:"SpiderRock's innovative Flash Auction utilizes a two-step process:"}),"\n",(0,n.jsxs)(i.p,{children:["In ",(0,n.jsx)(i.strong,{children:"step-one"}),", the initiating client's order (item, size, direction) is sent to a network of auto-responding liquidity providers without disclosing the initiating order's limit price.  After receiving the auction notice,\nthe network of liquidity providers respond with both a price and size for the initiating client\u2019s order.  Liquidity providers may respond at a single price level or use a price limit with a best price offset.",(0,n.jsx)(i.br,{}),"\n","The best price offset (discussed in more detail in the Block Auction parameters section) gives the liquidity provider flexibility to respond with their desired level as well as their most aggressive level in case the traded level\nis more aggressive than their desired level."]}),"\n",(0,n.jsxs)(i.p,{children:["In ",(0,n.jsx)(i.strong,{children:"step-two"}),", SpiderRock immediately matches the initiating client and liquidity provider's order using both price and size, and exposes the 2-sided order on exchange to be traded.  This two-step process requires liquidity providers\nto respond with price and size before a match is made, resulting in these price and size levels being communicated to the initiating client."]}),"\n",(0,n.jsx)(i.h3,{id:"key-features-of-flash-auctions",children:"Key features of Flash Auctions:"}),"\n",(0,n.jsx)(i.p,{children:"\u2022\tThese IOC auctions have a duration of less than 100ms."}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsx)(i.p,{children:"\u2022\tFlash Auctions allow for access to liquidity and price discovery."}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsx)(i.p,{children:"\u2022\tFlash Auction Initiators can choose to reveal their identity."}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsx)(i.p,{children:"\u2022\tSpiderRock provides a transparent process where prices are visible to all auction participants at the conclusion of the IOC auction."}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsx)(i.p,{children:"\u2022\tFlash Auctions have been built into SpiderRock's suite of algorithms offering initiators access to a new pool of liquidity and more flexibility to minimize friction from trading costs."}),"\n",(0,n.jsx)(i.h3,{id:"flash-auction-parameters",children:"Flash Auction Parameters"}),"\n",(0,n.jsx)(i.p,{children:"Flash Auctions are always IOC orders, and given their short duration, they are only shown to electronic responders capable of responding in 100ms or less.  The immediate nature of these auctions also means there is far less customization on their parameters.  While initiating customers can select Flash Auction as a strategy from the strategy pulldown menu on the SRConnect Trade Tool, Flash Auction responders need to be integrated with SpiderRock via an API such as MLink (SpiderRock\u2019s proprietary streaming API), SRSE (SpiderRock\u2019s SQL-based API), or FIX."}),"\n",(0,n.jsx)(i.p,{children:"Once an initiator has selected Flash Auction as their trading strategy, they have the ability to enter an order size as well as a limit price.  Once the Flash Auction is started, the user is not able to edit the order due to the IOC duration."})]})}function u(e={}){const{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},28453:(e,i,t)=>{t.d(i,{R:()=>r,x:()=>a});var n=t(96540);const s={},o=n.createContext(s);function r(e){const i=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),n.createElement(o.Provider,{value:i},e.children)}}}]);