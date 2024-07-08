"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[54341],{93282:(t,e,d)=>{d.r(e),d.d(e,{assets:()=>l,contentTitle:()=>n,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>x});var s=d(74848),i=d(28453);const r={},n=void 0,c={id:"MessageSchemas/Schema/SRSE Products/SRTrade/AuctionNoticeBX/AuctionNoticeBX",title:"AuctionNoticeBX",description:"METADATA",source:"@site/docs/MessageSchemas/Schema/SRSE Products/SRTrade/AuctionNoticeBX/AuctionNoticeBX.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRTrade/AuctionNoticeBX",slug:"/MessageSchemas/Schema/SRSE Products/SRTrade/AuctionNoticeBX/",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRTrade/AuctionNoticeBX/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"messageSchemasSidebar",previous:{title:"AuctionNotice",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRTrade/AuctionNotice/"},next:{title:"AuctionNoticeRC",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRTrade/AuctionNoticeRC/"}},l={},x=[{value:"METADATA",id:"metadata",level:3},{value:"Table Definition",id:"table-definition",level:3},{value:"PRIMARY KEY DEFINITION (Unique)",id:"primary-key-definition-unique",level:3}];function j(t){const e={h3:"h3",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...t.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h3,{id:"metadata",children:"METADATA"}),"\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"Attribute"}),(0,s.jsx)(e.th,{children:"Value"})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"Topic"}),(0,s.jsx)(e.td,{children:"2450-liquidity-notice"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"MLink Token"}),(0,s.jsx)(e.td,{children:"SRConnect"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"Product"}),(0,s.jsx)(e.td,{children:"SRTrade"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"accessType"}),(0,s.jsx)(e.td,{children:"SELECT"})]})]})]}),"\n",(0,s.jsx)(e.h3,{id:"table-definition",children:"Table Definition"}),"\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"Field"}),(0,s.jsx)(e.th,{children:"Type"}),(0,s.jsx)(e.th,{children:"Key"}),(0,s.jsx)(e.th,{children:"Comment"})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"noticeNumber"}),(0,s.jsx)(e.td,{children:"CHAR(19)"}),(0,s.jsx)(e.td,{children:"PRI"}),(0,s.jsx)(e.td,{})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"ticker_at"}),(0,s.jsx)(e.td,{children:"ENUM"}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"underlier ticker"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"ticker_ts"}),(0,s.jsx)(e.td,{children:"ENUM"}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"underlier ticker"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"ticker_tk"}),(0,s.jsx)(e.td,{children:"VARCHAR(12)"}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"underlier ticker"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"tradeDate"}),(0,s.jsx)(e.td,{children:"DATE"}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"auctionType"}),(0,s.jsx)(e.td,{children:"ENUM"}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"auctionEvent"}),(0,s.jsx)(e.td,{children:"ENUM"}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"srcAuctionID"}),(0,s.jsx)(e.td,{children:"VARCHAR(20)"}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"auction ID as known by the auction source empty for SRC"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"srcAuctionType"}),(0,s.jsx)(e.td,{children:"VARCHAR(4)"}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"auctionSource"}),(0,s.jsx)(e.td,{children:"ENUM"}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"source of the auction notice eg SRC MIAX etc"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"isTestAuction"}),(0,s.jsx)(e.td,{children:"ENUM"}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"if yes auction is a test auction not a prodlive auction"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"shortCode"}),(0,s.jsx)(e.td,{children:"VARCHAR(8)"}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"8 letter auction short code unique per day block auctions only can be used to find auctions on SR tools"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"industry"}),(0,s.jsx)(e.td,{children:"TINYTEXT"}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"industry string"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"symbolType"}),(0,s.jsx)(e.td,{children:"ENUM"}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"uAvgDailyVlm"}),(0,s.jsx)(e.td,{children:"FLOAT"}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"underlier average daily trading volume"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"root_at"}),(0,s.jsx)(e.td,{children:"ENUM"}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"option root CLoPLoCHiPHi"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"root_ts"}),(0,s.jsx)(e.td,{children:"ENUM"}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"option root CLoPLoCHiPHi"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"root_tk"}),(0,s.jsx)(e.td,{children:"VARCHAR(12)"}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"option root CLoPLoCHiPHi"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"expiry"}),(0,s.jsx)(e.td,{children:"DATE"}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"loStrike"}),(0,s.jsx)(e.td,{children:"DOUBLE"}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"lo strike"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"hiStrike"}),(0,s.jsx)(e.td,{children:"DOUBLE"}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"hi strike"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"custSide"}),(0,s.jsx)(e.td,{children:"ENUM"}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"if available"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"custQty"}),(0,s.jsx)(e.td,{children:"INT"}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"custPrc"}),(0,s.jsx)(e.td,{children:"DOUBLE"}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"public cust price"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"hasCustPrc"}),(0,s.jsx)(e.td,{children:"ENUM"}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"custFirmType"}),(0,s.jsx)(e.td,{children:"ENUM"}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"cust firm type if disclosed"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"custAgentMPID"}),(0,s.jsx)(e.td,{children:"VARCHAR(6)"}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"cust agent exchange member initiating the auction if disclosed"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"custClientFirm"}),(0,s.jsx)(e.td,{children:"VARCHAR(16)"}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"cust client firm if disclosed"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"commEnhancement"}),(0,s.jsx)(e.td,{children:"FLOAT"}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"additional commission if any paid by responder"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"custCommPaying"}),(0,s.jsx)(e.td,{children:"ENUM"}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"client is commission paying to the responder"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"custQtyCond"}),(0,s.jsx)(e.td,{children:"ENUM"}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"UpToQty AllOrNone QtyOrMore"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"auctionDuration"}),(0,s.jsx)(e.td,{children:"INT"}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"expected auction duration in milliseconds"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"iDays"}),(0,s.jsx)(e.td,{children:"DOUBLE"}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"iDays  effective interest days SR supplied"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"iYears"}),(0,s.jsx)(e.td,{children:"DOUBLE"}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"iYears  iDays  3600"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"pointValue"}),(0,s.jsx)(e.td,{children:"DOUBLE"}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"point value of the associated options expiry money  hiStrike  loStrike  pointValue"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"strikePv"}),(0,s.jsx)(e.td,{children:"DOUBLE"}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"strikePv  strike  10  moneyRate  iYears moneyRate supplied above"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"effMoneyRate"}),(0,s.jsx)(e.td,{children:"DOUBLE"}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"effMoneyRate  10  custPrc  hiStrike  loStrike  iYears"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"srcTimestamp"}),(0,s.jsx)(e.td,{children:"BIGINT"}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"netTimestamp"}),(0,s.jsx)(e.td,{children:"BIGINT"}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"timestamp"}),(0,s.jsx)(e.td,{children:"DATETIME(6)"}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"from ats  exchange net timestamp if possible"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"includeSRNetwork"}),(0,s.jsx)(e.td,{children:"ENUM"}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"DirectedCounterPartyList"}),(0,s.jsx)(e.td,{children:"JSON"}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{})]})]})]}),"\n",(0,s.jsx)(e.h3,{id:"primary-key-definition-unique",children:"PRIMARY KEY DEFINITION (Unique)"}),"\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"Field"}),(0,s.jsx)(e.th,{children:"Sequence"})]})}),(0,s.jsx)(e.tbody,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"noticeNumber"}),(0,s.jsx)(e.td,{children:"1"})]})})]})]})}function h(t={}){const{wrapper:e}={...(0,i.R)(),...t.components};return e?(0,s.jsx)(e,{...t,children:(0,s.jsx)(j,{...t})}):j(t)}},28453:(t,e,d)=>{d.d(e,{R:()=>n,x:()=>c});var s=d(96540);const i={},r=s.createContext(i);function n(t){const e=s.useContext(r);return s.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function c(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(i):t.components||i:n(t.components),s.createElement(r.Provider,{value:e},t.children)}}}]);