"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[83483],{87849:(e,t,d)=>{d.r(t),d.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>x,frontMatter:()=>i,metadata:()=>c,toc:()=>h});var s=d(74848),n=d(28453);const i={title:"SpdrAuctionState"},r="Schema: SpdrAuctionState (ID: 2525)",c={id:"MessageSchemas/Schema/Topics/market-data-auctions/SpdrAuctionState",title:"SpdrAuctionState",description:"METADATA",source:"@site/docs/MessageSchemas/Schema/Topics/2510-market-data-auctions/SpdrAuctionState.md",sourceDirName:"MessageSchemas/Schema/Topics/2510-market-data-auctions",slug:"/MessageSchemas/Schema/Topics/market-data-auctions/SpdrAuctionState",permalink:"/docs/MessageSchemas/Schema/Topics/market-data-auctions/SpdrAuctionState",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"SpdrAuctionState"},sidebar:"messageSchemasSidebar",previous:{title:"2510-market-data-auctions",permalink:"/docs/MessageSchemas/Schema/Topics/market-data-auctions/"},next:{title:"2580-market-data-futures",permalink:"/docs/MessageSchemas/Schema/Topics/market-data-futures/"}},l={},h=[{value:"METADATA",id:"metadata",level:3},{value:"BODY",id:"body",level:3},{value:"REPEATING FIELDS",id:"repeating-fields",level:3}];function a(e){const t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h3:"h3",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.h1,{id:"schema-spdrauctionstate-id-2525",children:["Schema: SpdrAuctionState ",(0,s.jsx)("span",{className:"small-text",children:"(ID: 2525)"})]}),"\n",(0,s.jsx)(t.h3,{id:"metadata",children:"METADATA"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Attribute"}),(0,s.jsx)(t.th,{children:"Value"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Topic"}),(0,s.jsx)(t.td,{children:"2510-market-data-auctions"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"MLink Token"}),(0,s.jsx)(t.td,{children:"OptExchAuction"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"SRSE Product"}),(0,s.jsx)(t.td,{children:"SRAuction"})]})]})]}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Note:"})," The symbol ",(0,s.jsx)(t.code,{children:"="})," next to a field number indicates that it is a primary key."]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"body",children:"BODY"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"#"}),(0,s.jsx)(t.th,{children:"Field"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Comment"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"10="}),(0,s.jsx)(t.td,{children:"secKey"}),(0,s.jsx)(t.td,{children:"OptionKey"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"11="}),(0,s.jsx)(t.td,{children:"secType"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"../../../Enums/SpdrKeyType",children:"enum : SpdrKeyType"})}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"12="}),(0,s.jsx)(t.td,{children:"auctionExch"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"../../../Enums/OptExch",children:"enum : OptExch"})}),(0,s.jsx)(t.td,{children:"exchange handling the auction"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"13="}),(0,s.jsx)(t.td,{children:"auctionExDest"}),(0,s.jsx)(t.td,{children:"string(16)"}),(0,s.jsx)(t.td,{children:"external exDest of auction (usually means auction is off-exchange)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"100"}),(0,s.jsx)(t.td,{children:"srAuctionID"}),(0,s.jsx)(t.td,{children:"long"}),(0,s.jsx)(t.td,{children:"unique SR AUCTION ID (required when responding to an auction notice)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"103"}),(0,s.jsx)(t.td,{children:"exchAuctionId"}),(0,s.jsx)(t.td,{children:"string(20)"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"106"}),(0,s.jsx)(t.td,{children:"exchAuctionType"}),(0,s.jsx)(t.td,{children:"string(4)"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"109"}),(0,s.jsx)(t.td,{children:"isTestAuction"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,s.jsx)(t.td,{children:"test auction (should only respond from T.accnts)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"212"}),(0,s.jsx)(t.td,{children:"auctionEvent"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"../../../Enums/AuctionEvent",children:"enum : AuctionEvent"})}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"115"}),(0,s.jsx)(t.td,{children:"auctionShape"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"../../../Enums/NoticeShape",children:"enum : NoticeShape"})}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"118"}),(0,s.jsx)(t.td,{children:"auctionType"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"../../../Enums/AuctionType",children:"enum : AuctionType"})}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"121"}),(0,s.jsx)(t.td,{children:"auctionSide"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"../../../Enums/BuySell",children:"enum : BuySell"})}),(0,s.jsx)(t.td,{children:"Market side (client/imbalance side of auction; if known) [responder should be opposite side]"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"124"}),(0,s.jsx)(t.td,{children:"auctionSize"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"size available to trade"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"127"}),(0,s.jsx)(t.td,{children:"auctionPrice"}),(0,s.jsx)(t.td,{children:"double"}),(0,s.jsx)(t.td,{children:"auction price (can be positive or negative)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"130"}),(0,s.jsx)(t.td,{children:"isAuctionPriceValid"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"133"}),(0,s.jsx)(t.td,{children:"auctionDuration"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"expected auction / imbalance action duration (ms)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"136"}),(0,s.jsx)(t.td,{children:"auctionStartSize"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"initial (starting) auction size"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"139"}),(0,s.jsx)(t.td,{children:"auctionStartPrice"}),(0,s.jsx)(t.td,{children:"double"}),(0,s.jsx)(t.td,{children:"initial (starting) auction price"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"142"}),(0,s.jsx)(t.td,{children:"auctionStartTimestamp"}),(0,s.jsx)(t.td,{children:"long"}),(0,s.jsx)(t.td,{children:"auction start timestamp"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"145"}),(0,s.jsx)(t.td,{children:"minResponseSize"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"minimum size of the response order"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"148"}),(0,s.jsx)(t.td,{children:"limitType"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"../../../Enums/AuctionLimitType",children:"enum : AuctionLimitType"})}),(0,s.jsx)(t.td,{children:"client / imbalance limit type (if available)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"151"}),(0,s.jsx)(t.td,{children:"firmType"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"../../../Enums/FirmType",children:"enum : FirmType"})}),(0,s.jsx)(t.td,{children:"firm type of the client side of auction (if available)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"154"}),(0,s.jsx)(t.td,{children:"memberMPID"}),(0,s.jsx)(t.td,{children:"string(10)"}),(0,s.jsx)(t.td,{children:"exchange member initiating auction (if available)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"157"}),(0,s.jsx)(t.td,{children:"clientAccnt"}),(0,s.jsx)(t.td,{children:"string(10)"}),(0,s.jsx)(t.td,{children:"client account designation (if known)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"160"}),(0,s.jsx)(t.td,{children:"otherDetail"}),(0,s.jsx)(t.td,{children:"string(16)"}),(0,s.jsx)(t.td,{children:"additional auction detail (exchange specific)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"163"}),(0,s.jsx)(t.td,{children:"matchedSize"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"size already matched (may still be available to trade at a better price)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"166"}),(0,s.jsx)(t.td,{children:"numUpdates"}),(0,s.jsx)(t.td,{children:"byte"}),(0,s.jsx)(t.td,{children:"number of auction updates received (not counting auction termination message)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"169"}),(0,s.jsx)(t.td,{children:"numResponses"}),(0,s.jsx)(t.td,{children:"byte"}),(0,s.jsx)(t.td,{children:"as reported by exchange (if available)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"172"}),(0,s.jsx)(t.td,{children:"bestResponseSize"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"175"}),(0,s.jsx)(t.td,{children:"bestResponsePrice"}),(0,s.jsx)(t.td,{children:"double"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"178"}),(0,s.jsx)(t.td,{children:"cumFillQuantity"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"as reported by exchange (if available)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"181"}),(0,s.jsx)(t.td,{children:"avgFillPrice"}),(0,s.jsx)(t.td,{children:"double"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"184"}),(0,s.jsx)(t.td,{children:"marketStatus"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"../../../Enums/MarketStatus",children:"enum : MarketStatus"})}),(0,s.jsx)(t.td,{children:"market status (pre-open, open, closed, etc)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"187"}),(0,s.jsx)(t.td,{children:"srcTimestamp"}),(0,s.jsx)(t.td,{children:"long"}),(0,s.jsx)(t.td,{children:"source timestamp (nanoseconds) if available"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"190"}),(0,s.jsx)(t.td,{children:"netTimestamp"}),(0,s.jsx)(t.td,{children:"long"}),(0,s.jsx)(t.td,{children:"network timestamp message arrival @ direct exchange gateway"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"193"}),(0,s.jsx)(t.td,{children:"dgwTimestamp"}),(0,s.jsx)(t.td,{children:"long"}),(0,s.jsx)(t.td,{children:"network timestamp mbus message send @ direct exchange gateway"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"196"}),(0,s.jsx)(t.td,{children:"timestamp"}),(0,s.jsx)(t.td,{children:"DateTime"}),(0,s.jsx)(t.td,{})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"repeating-fields",children:"REPEATING FIELDS"}),"\n",(0,s.jsx)(t.p,{children:"Legs"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Field"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Comment"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"202"}),(0,s.jsx)(t.td,{children:"legSecKey"}),(0,s.jsx)(t.td,{children:"OptionKey"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"205"}),(0,s.jsx)(t.td,{children:"legSecType"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"../../../Enums/SpdrKeyType",children:"enum : SpdrKeyType"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"208"}),(0,s.jsx)(t.td,{children:"legSide"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"../../../Enums/BuySell",children:"enum : BuySell"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"211"}),(0,s.jsx)(t.td,{children:"legRatio"}),(0,s.jsx)(t.td,{children:"ushort"})]})]})]})]})}function x(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},28453:(e,t,d)=>{d.d(t,{R:()=>r,x:()=>c});var s=d(96540);const n={},i=s.createContext(n);function r(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);