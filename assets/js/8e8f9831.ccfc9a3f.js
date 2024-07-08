"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[81027],{47564:(d,t,e)=>{e.r(t),e.d(t,{assets:()=>x,contentTitle:()=>n,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var s=e(74848),i=e(28453);const r={},n=void 0,c={id:"MessageSchemas/Schema/SRSE Products/SRTrade/AuctionPrint/AuctionPrint",title:"AuctionPrint",description:"METADATA",source:"@site/docs/MessageSchemas/Schema/SRSE Products/SRTrade/AuctionPrint/AuctionPrint.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRTrade/AuctionPrint",slug:"/MessageSchemas/Schema/SRSE Products/SRTrade/AuctionPrint/",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRTrade/AuctionPrint/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"messageSchemasSidebar",previous:{title:"AuctionNoticeSN",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRTrade/AuctionNoticeSN/"},next:{title:"AuctionPrintBX",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRTrade/AuctionPrintBX/"}},x={},l=[{value:"METADATA",id:"metadata",level:3},{value:"Table Definition",id:"table-definition",level:3},{value:"PRIMARY KEY DEFINITION (Unique)",id:"primary-key-definition-unique",level:3}];function j(d){const t={h3:"h3",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...d.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h3,{id:"metadata",children:"METADATA"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Attribute"}),(0,s.jsx)(t.th,{children:"Value"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Topic"}),(0,s.jsx)(t.td,{children:"2450-liquidity-notice"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"MLink Token"}),(0,s.jsx)(t.td,{children:"SRConnect"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Product"}),(0,s.jsx)(t.td,{children:"SRTrade"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"accessType"}),(0,s.jsx)(t.td,{children:"SELECT"})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"table-definition",children:"Table Definition"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Field"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Key"}),(0,s.jsx)(t.th,{children:"Comment"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"noticeNumber"}),(0,s.jsx)(t.td,{children:"CHAR(19)"}),(0,s.jsx)(t.td,{children:"PRI"}),(0,s.jsx)(t.td,{children:"AuctionNoticenoticeNumber"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"ticker_at"}),(0,s.jsx)(t.td,{children:"ENUM"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"underlier ticker"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"ticker_ts"}),(0,s.jsx)(t.td,{children:"ENUM"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"underlier ticker"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"ticker_tk"}),(0,s.jsx)(t.td,{children:"VARCHAR(12)"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"underlier ticker"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"tradeDate"}),(0,s.jsx)(t.td,{children:"DATE"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"isTestAuction"}),(0,s.jsx)(t.td,{children:"ENUM"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"if yes auction is a test auction not a prodlive auction"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"noticeTime"}),(0,s.jsx)(t.td,{children:"DATETIME(6)"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"notice create timestamp high precision"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"auctionType"}),(0,s.jsx)(t.td,{children:"ENUM"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"eg Block Flash Improvement Facilitation etc"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"auctionSource"}),(0,s.jsx)(t.td,{children:"ENUM"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"source of the auction notice eg SRC MIAX etc"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"industry"}),(0,s.jsx)(t.td,{children:"VARCHAR(255)"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"industry string"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"symbolType"}),(0,s.jsx)(t.td,{children:"ENUM"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"uAvgDailyVlm"}),(0,s.jsx)(t.td,{children:"FLOAT"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"underlier average daily trading volume"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"custSide"}),(0,s.jsx)(t.td,{children:"ENUM"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"from AuctionNotice if known"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"custQty"}),(0,s.jsx)(t.td,{children:"INT"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"from AuctionNotice if known"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"custPrc"}),(0,s.jsx)(t.td,{children:"DOUBLE"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"from AuctionNotice if known"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"hasCustPrc"}),(0,s.jsx)(t.td,{children:"ENUM"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"from AuctionNotice if known"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"custFirmType"}),(0,s.jsx)(t.td,{children:"ENUM"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"cust firm type if disclosed"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"custAgentMPID"}),(0,s.jsx)(t.td,{children:"VARCHAR(6)"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"cust agent exchange member initiating the auction if disclosed"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"commEnhancement"}),(0,s.jsx)(t.td,{children:"FLOAT"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"additional commission if any paid by responder"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"numOptLegs"}),(0,s.jsx)(t.td,{children:"TINYINT UNSIGNED"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"MLEG Only"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"spreadClass"}),(0,s.jsx)(t.td,{children:"ENUM"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"spreadFlavor"}),(0,s.jsx)(t.td,{children:"ENUM"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"MLEG Only"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"containsHedge"}),(0,s.jsx)(t.td,{children:"ENUM"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"MLEG Only"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"containsFlex"}),(0,s.jsx)(t.td,{children:"ENUM"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"contains FLEX options not regular listed options"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"containsMultiHedge"}),(0,s.jsx)(t.td,{children:"ENUM"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"contains MultiHedge corp action adjusted options"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"uBid"}),(0,s.jsx)(t.td,{children:"DOUBLE"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"uAsk"}),(0,s.jsx)(t.td,{children:"DOUBLE"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"netDe"}),(0,s.jsx)(t.td,{children:"FLOAT"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"netGa"}),(0,s.jsx)(t.td,{children:"FLOAT"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"netTh"}),(0,s.jsx)(t.td,{children:"FLOAT"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"netVe"}),(0,s.jsx)(t.td,{children:"FLOAT"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"pkgSurfPrc"}),(0,s.jsx)(t.td,{children:"FLOAT"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"SR Surface Price entire package"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"pkgBidPrc"}),(0,s.jsx)(t.td,{children:"FLOAT"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"pkg bid price best way price entire package"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"pkgAskPrc"}),(0,s.jsx)(t.td,{children:"FLOAT"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"pkg ask price best way price entire package"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"prtPrice"}),(0,s.jsx)(t.td,{children:"DOUBLE"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"reported OPRA print price pkgPrice if MLeg"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"prtPrice2"}),(0,s.jsx)(t.td,{children:"DOUBLE"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"if reported as 2 separate prints at different prices ie partial size improvement"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"prtSize"}),(0,s.jsx)(t.td,{children:"INT"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"reported OPRA print size pgkSize if MLeg"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"prtSize2"}),(0,s.jsx)(t.td,{children:"INT"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"reported OPRA print size pgkSize if MLeg"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"prtTime"}),(0,s.jsx)(t.td,{children:"DATETIME(6)"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"reported OPRA print time 1st print if MLeg high precision"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"prtType"}),(0,s.jsx)(t.td,{children:"ENUM"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"reported OPRA print type"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"prtUBid"}),(0,s.jsx)(t.td,{children:"DOUBLE"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"best estimate of uBid  auction print time"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"prtUAsk"}),(0,s.jsx)(t.td,{children:"DOUBLE"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"best estimate of uAsk  auction print time"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"prtUPrc"}),(0,s.jsx)(t.td,{children:"DOUBLE"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"best estimate of uPrc  auction print time"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"prtSurfVol"}),(0,s.jsx)(t.td,{children:"FLOAT"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"surface vol  auction print time single option auction only"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"prtSurfPrc"}),(0,s.jsx)(t.td,{children:"FLOAT"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"surface prc  auction print time  uMid pkgSurfPrc if MLeg"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"bidPrc"}),(0,s.jsx)(t.td,{children:"FLOAT"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"option nbbo bid  auction print time"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"bidSz"}),(0,s.jsx)(t.td,{children:"INT"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"nbbo bid cum size"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"bidMask"}),(0,s.jsx)(t.td,{children:"INT UNSIGNED"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"nbbo bid exch mask"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"askPrc"}),(0,s.jsx)(t.td,{children:"FLOAT"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"option nbbo ask  auction print time"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"askSz"}),(0,s.jsx)(t.td,{children:"INT"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"nbbo ask cum size"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"askMask"}),(0,s.jsx)(t.td,{children:"INT UNSIGNED"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"nbbo ask exch mask"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"exchBidPrc"}),(0,s.jsx)(t.td,{children:"FLOAT"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"exch bid  auction print time"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"exchBidSz"}),(0,s.jsx)(t.td,{children:"INT"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"exch bid size"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"exchAskPrc"}),(0,s.jsx)(t.td,{children:"FLOAT"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"exch ask  auction print time"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"exchAskSz"}),(0,s.jsx)(t.td,{children:"INT"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"exch ask size"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"uPrc1m"}),(0,s.jsx)(t.td,{children:"FLOAT"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"uPrc mid market  auction print time  1m"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"bidPrc1m"}),(0,s.jsx)(t.td,{children:"FLOAT"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"option nbbo bid  auction print time  1m"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"askPrc1m"}),(0,s.jsx)(t.td,{children:"FLOAT"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"option nbbo ask  auction print time  1m"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"surfVol1m"}),(0,s.jsx)(t.td,{children:"FLOAT"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"surface vol  auction print time  1m single option auction only"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"surfPrc1m"}),(0,s.jsx)(t.td,{children:"FLOAT"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"surface prc  auction print time  1m  uMid"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"uPrc10m"}),(0,s.jsx)(t.td,{children:"FLOAT"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"uPrc mid market  auction print time  10m"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"bidPrc10m"}),(0,s.jsx)(t.td,{children:"FLOAT"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"option nbbo bid  auction print time  10m"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"askPrc10m"}),(0,s.jsx)(t.td,{children:"FLOAT"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"option nbbo ask  auction print time  10m"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"surfVol10m"}),(0,s.jsx)(t.td,{children:"FLOAT"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"surface vol  auction print time  10m single option auction only"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"surfPrc10m"}),(0,s.jsx)(t.td,{children:"FLOAT"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"surface prc  auction print time  10m  uMid"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"timestamp"}),(0,s.jsx)(t.td,{children:"DATETIME(6)"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"OrderLegsList"}),(0,s.jsx)(t.td,{children:"JSON"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"_isDeleted"}),(0,s.jsx)(t.td,{children:"ENUM"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"readonly"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"_fromRotation"}),(0,s.jsx)(t.td,{children:"ENUM"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"readonly"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"_fromCache"}),(0,s.jsx)(t.td,{children:"ENUM"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"readonly"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"_fromApplication"}),(0,s.jsx)(t.td,{children:"ENUM"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"readonly"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"_fromBridge"}),(0,s.jsx)(t.td,{children:"ENUM"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"readonly"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"_timeSent"}),(0,s.jsx)(t.td,{children:"BIGINT"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"readonly unix timestamp"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"_timeReceived"}),(0,s.jsx)(t.td,{children:"BIGINT"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"readonly"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"_netTimeReceived"}),(0,s.jsx)(t.td,{children:"BIGINT"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"readonly unix timestamp"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"_sysEnvironmentOrigin"}),(0,s.jsx)(t.td,{children:"ENUM"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"readonly"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"_sysRealmOrigin"}),(0,s.jsx)(t.td,{children:"ENUM"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"readonly"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"_sourceId"}),(0,s.jsx)(t.td,{children:"SMALLINT UNSIGNED"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"readonly"})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"primary-key-definition-unique",children:"PRIMARY KEY DEFINITION (Unique)"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Field"}),(0,s.jsx)(t.th,{children:"Sequence"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"noticeNumber"}),(0,s.jsx)(t.td,{children:"1"})]})})]})]})}function h(d={}){const{wrapper:t}={...(0,i.R)(),...d.components};return t?(0,s.jsx)(t,{...d,children:(0,s.jsx)(j,{...d})}):j(d)}},28453:(d,t,e)=>{e.d(t,{R:()=>n,x:()=>c});var s=e(96540);const i={},r=s.createContext(i);function n(d){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof d?d(t):{...t,...d}}),[t,d])}function c(d){let t;return t=d.disableParentContext?"function"==typeof d.components?d.components(i):d.components||i:n(d.components),s.createElement(r.Provider,{value:t},d.children)}}}]);