"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[66348],{54731:(e,d,t)=>{t.r(d),t.d(d,{assets:()=>l,contentTitle:()=>n,default:()=>j,frontMatter:()=>i,metadata:()=>c,toc:()=>h});var r=t(74848),s=t(28453);const i={title:"NoticeExecReport"},n="Schema: NoticeExecReport (ID: 2475)",c={id:"MessageSchemas/Schema/Topics/liquidity-notice/NoticeExecReport",title:"NoticeExecReport",description:"METADATA",source:"@site/docs/MessageSchemas/Schema/Topics/2450-liquidity-notice/NoticeExecReport.md",sourceDirName:"MessageSchemas/Schema/Topics/2450-liquidity-notice",slug:"/MessageSchemas/Schema/Topics/liquidity-notice/NoticeExecReport",permalink:"/docs/MessageSchemas/Schema/Topics/liquidity-notice/NoticeExecReport",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"NoticeExecReport"},sidebar:"messageSchemasSidebar",previous:{title:"NoticeCancel",permalink:"/docs/MessageSchemas/Schema/Topics/liquidity-notice/NoticeCancel"},next:{title:"NoticeResponse",permalink:"/docs/MessageSchemas/Schema/Topics/liquidity-notice/NoticeResponse"}},l={},h=[{value:"METADATA",id:"metadata",level:3},{value:"BODY",id:"body",level:3},{value:"REPEATING FIELDS",id:"repeating-fields",level:3}];function x(e){const d={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h3:"h3",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(d.h1,{id:"schema-noticeexecreport-id-2475",children:["Schema: NoticeExecReport ",(0,r.jsx)("span",{className:"small-text",children:"(ID: 2475)"})]}),"\n",(0,r.jsx)(d.h3,{id:"metadata",children:"METADATA"}),"\n",(0,r.jsxs)(d.table,{children:[(0,r.jsx)(d.thead,{children:(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.th,{children:"Attribute"}),(0,r.jsx)(d.th,{children:"Value"})]})}),(0,r.jsxs)(d.tbody,{children:[(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"Topic"}),(0,r.jsx)(d.td,{children:"2450-liquidity-notice"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"MLink Token"}),(0,r.jsx)(d.td,{children:"SRConnect"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"SRSE Product"}),(0,r.jsx)(d.td,{children:"SRTrade"})]})]})]}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsxs)(d.blockquote,{children:["\n",(0,r.jsxs)(d.p,{children:[(0,r.jsx)(d.strong,{children:"Note:"})," The symbol ",(0,r.jsx)(d.code,{children:"="})," next to a field number indicates that it is a primary key."]}),"\n"]}),"\n",(0,r.jsx)(d.h3,{id:"body",children:"BODY"}),"\n",(0,r.jsxs)(d.table,{children:[(0,r.jsx)(d.thead,{children:(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.th,{children:"#"}),(0,r.jsx)(d.th,{children:"Field"}),(0,r.jsx)(d.th,{children:"Type"}),(0,r.jsx)(d.th,{children:"Comment"})]})}),(0,r.jsxs)(d.tbody,{children:[(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"13="}),(0,r.jsx)(d.td,{children:"noticeNumber"}),(0,r.jsx)(d.td,{children:"long"}),(0,r.jsx)(d.td,{children:"AuctionNotice.noticeNumber"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"14="}),(0,r.jsx)(d.td,{children:"baseParentNumber"}),(0,r.jsx)(d.td,{children:"long"}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"125"}),(0,r.jsx)(d.td,{children:"ticker"}),(0,r.jsx)(d.td,{children:"TickerKey"}),(0,r.jsx)(d.td,{children:"underlier ticker"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"126"}),(0,r.jsx)(d.td,{children:"tradeDate"}),(0,r.jsx)(d.td,{children:"DateKey"}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"139"}),(0,r.jsx)(d.td,{children:"accnt"}),(0,r.jsx)(d.td,{children:"string(16)"}),(0,r.jsx)(d.td,{children:"SR Accnt"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"140"}),(0,r.jsx)(d.td,{children:"clientFirm"}),(0,r.jsx)(d.td,{children:"string(16)"}),(0,r.jsx)(d.td,{children:"SR ClientFirm"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"141"}),(0,r.jsx)(d.td,{children:"noticeDttm"}),(0,r.jsx)(d.td,{children:"DateTime"}),(0,r.jsx)(d.td,{children:"either notice create datetime or notice arrival@SR datetime (high precision)"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"100"}),(0,r.jsx)(d.td,{children:"responseId"}),(0,r.jsx)(d.td,{children:"string(24)"}),(0,r.jsx)(d.td,{children:"from NoticeResponse.responseId (most recently processed response to noticeNumber for this accnt/clientFirm pair)"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"142"}),(0,r.jsx)(d.td,{children:"respOrigin"}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.a,{href:"../../../Enums/SpdrSource",children:"enum : SpdrSource"})}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"101"}),(0,r.jsx)(d.td,{children:"stageType"}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.a,{href:"../../../Enums/SpdrStageType",children:"enum : SpdrStageType"})}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"143"}),(0,r.jsx)(d.td,{children:"auctionType"}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.a,{href:"../../../Enums/AuctionType",children:"enum : AuctionType"})}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"144"}),(0,r.jsx)(d.td,{children:"auctionSource"}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.a,{href:"../../../Enums/AuctionSource",children:"enum : AuctionSource"})}),(0,r.jsx)(d.td,{children:"source of the auction notice (eg. SRC, MIAX, etc.)"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"127"}),(0,r.jsx)(d.td,{children:"respDttm"}),(0,r.jsx)(d.td,{children:"DateTime"}),(0,r.jsx)(d.td,{children:"response arrival dttm (high precision)"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"102"}),(0,r.jsx)(d.td,{children:"respSide"}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.a,{href:"../../../Enums/BuySell",children:"enum : BuySell"})}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"103"}),(0,r.jsx)(d.td,{children:"respSize"}),(0,r.jsx)(d.td,{children:"int"}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"104"}),(0,r.jsx)(d.td,{children:"respActiveSize"}),(0,r.jsx)(d.td,{children:"int"}),(0,r.jsx)(d.td,{children:"active response order size (zero for ActiveHold)"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"105"}),(0,r.jsx)(d.td,{children:"respPrice"}),(0,r.jsx)(d.td,{children:"double"}),(0,r.jsx)(d.td,{children:"effRespPrice = respPrice + de * (uMid - refUPrc) + 0.5 * ga * (uMid - refUPrc)^2"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"106"}),(0,r.jsx)(d.td,{children:"refUPrc"}),(0,r.jsx)(d.td,{children:"double"}),(0,r.jsx)(d.td,{children:"reference price for tied to underlier orders (mid-market tie) (block auctions only)"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"107"}),(0,r.jsx)(d.td,{children:"refDe"}),(0,r.jsx)(d.td,{children:"float"}),(0,r.jsx)(d.td,{children:"reference delta for tied to underlier orders (zero if tie is not desired) (block auctions only)"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"108"}),(0,r.jsx)(d.td,{children:"refGa"}),(0,r.jsx)(d.td,{children:"float"}),(0,r.jsx)(d.td,{children:"reference gamma for tied to underlier orders (zero if tie is not desired) (block auctions only)"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"128"}),(0,r.jsx)(d.td,{children:"roundRule"}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.a,{href:"../../../Enums/RoundRule",children:"enum : RoundRule"})}),(0,r.jsx)(d.td,{children:"Exact (100%) or Fuzzy (90%) [default is Exact] (block auctions only)"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"129"}),(0,r.jsx)(d.td,{children:"stepUpIncr"}),(0,r.jsx)(d.td,{children:"double"}),(0,r.jsx)(d.td,{children:"additional price increment (best price) (typically only used if auction is competitive)"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"109"}),(0,r.jsx)(d.td,{children:"riskGroupId"}),(0,r.jsx)(d.td,{children:"long"}),(0,r.jsx)(d.td,{children:"any auction response is associated with this riskGroupID (and SpdrRiskGroupControl)"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"110"}),(0,r.jsx)(d.td,{children:"strategy"}),(0,r.jsx)(d.td,{children:"string(32)"}),(0,r.jsx)(d.td,{children:"user strategy field (visible on SR tools)"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"111"}),(0,r.jsx)(d.td,{children:"userData1"}),(0,r.jsx)(d.td,{children:"text1"}),(0,r.jsx)(d.td,{children:"user data field (free text) (from NoticeResponse)"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"112"}),(0,r.jsx)(d.td,{children:"respStatus"}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.a,{href:"../../../Enums/SpdrOrderStatus",children:"enum : SpdrOrderStatus"})}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"113"}),(0,r.jsx)(d.td,{children:"respDetail"}),(0,r.jsx)(d.td,{children:"text1"}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"145"}),(0,r.jsx)(d.td,{children:"lastUPrc"}),(0,r.jsx)(d.td,{children:"double"}),(0,r.jsx)(d.td,{children:"effective uPrc (mid-market) from last trial pass"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"146"}),(0,r.jsx)(d.td,{children:"lastTrialPrc"}),(0,r.jsx)(d.td,{children:"double"}),(0,r.jsx)(d.td,{children:"effective response price from last trial pass"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"147"}),(0,r.jsx)(d.td,{children:"leavesQty"}),(0,r.jsx)(d.td,{children:"int"}),(0,r.jsx)(d.td,{children:"open order quantity"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"130"}),(0,r.jsx)(d.td,{children:"cumFillQty"}),(0,r.jsx)(d.td,{children:"int"}),(0,r.jsx)(d.td,{children:"pkg cumFillQty if MLeg"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"131"}),(0,r.jsx)(d.td,{children:"avgFillPrice"}),(0,r.jsx)(d.td,{children:"double"}),(0,r.jsx)(d.td,{children:"pkg avgFillPrice if MLeg"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"148"}),(0,r.jsx)(d.td,{children:"addLatency"}),(0,r.jsx)(d.td,{children:"double"}),(0,r.jsx)(d.td,{children:"latency from notice arrival@SR to external response send (in seconds) OR latency from notice create to response accepted (in seconds) (SRC Auctions)"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"149"}),(0,r.jsx)(d.td,{children:"ackLatency"}),(0,r.jsx)(d.td,{children:"double"}),(0,r.jsx)(d.td,{children:"latency from external response send to external response ack (FRT) (in seconds) (external auctions only)"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"132"}),(0,r.jsx)(d.td,{children:"responseResult"}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.a,{href:"../../../Enums/NoticeResult",children:"enum : NoticeResult"})}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"133"}),(0,r.jsx)(d.td,{children:"responseTime"}),(0,r.jsx)(d.td,{children:"short"}),(0,r.jsx)(d.td,{children:"notice response arrival time (milliseconds since auction start)"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"134"}),(0,r.jsx)(d.td,{children:"prtPrice"}),(0,r.jsx)(d.td,{children:"double"}),(0,r.jsx)(d.td,{children:"reported print price (pkgPrice if MLeg)"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"135"}),(0,r.jsx)(d.td,{children:"prtSize"}),(0,r.jsx)(d.td,{children:"int"}),(0,r.jsx)(d.td,{children:"reported print size (pgkSize if MLeg)"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"136"}),(0,r.jsx)(d.td,{children:"prtTime"}),(0,r.jsx)(d.td,{children:"DateTime"}),(0,r.jsx)(d.td,{children:"reported print time (1st print if MLeg)"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"150"}),(0,r.jsx)(d.td,{children:"prtUBid"}),(0,r.jsx)(d.td,{children:"double"}),(0,r.jsx)(d.td,{children:"best estimate of uBid @ auction print time"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"151"}),(0,r.jsx)(d.td,{children:"prtUAsk"}),(0,r.jsx)(d.td,{children:"double"}),(0,r.jsx)(d.td,{children:"best estimate of uAsk @ auction print time"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"124"}),(0,r.jsx)(d.td,{children:"timestamp"}),(0,r.jsx)(d.td,{children:"DateTime"}),(0,r.jsx)(d.td,{})]})]})]}),"\n",(0,r.jsx)(d.h3,{id:"repeating-fields",children:"REPEATING FIELDS"}),"\n",(0,r.jsx)(d.p,{children:"OrderLegs"}),"\n",(0,r.jsxs)(d.table,{children:[(0,r.jsx)(d.thead,{children:(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.th,{children:"Field"}),(0,r.jsx)(d.th,{children:"Type"}),(0,r.jsx)(d.th,{children:"Comment"})]})}),(0,r.jsxs)(d.tbody,{children:[(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"117"}),(0,r.jsx)(d.td,{children:"secKey"}),(0,r.jsx)(d.td,{children:"OptionKey"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"118"}),(0,r.jsx)(d.td,{children:"secType"}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.a,{href:"../../../Enums/SpdrKeyType",children:"enum : SpdrKeyType"})})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"119"}),(0,r.jsx)(d.td,{children:"side"}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.a,{href:"../../../Enums/BuySell",children:"enum : BuySell"})})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"120"}),(0,r.jsx)(d.td,{children:"ratio"}),(0,r.jsx)(d.td,{children:"int"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"121"}),(0,r.jsx)(d.td,{children:"positionType"}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.a,{href:"../../../Enums/LegPositionType",children:"enum : LegPositionType"})})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"122"}),(0,r.jsx)(d.td,{children:"legCumFillQty"}),(0,r.jsx)(d.td,{children:"int"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"123"}),(0,r.jsx)(d.td,{children:"legAvgFillPrice"}),(0,r.jsx)(d.td,{children:"double"})]})]})]})]})}function j(e={}){const{wrapper:d}={...(0,s.R)(),...e.components};return d?(0,r.jsx)(d,{...e,children:(0,r.jsx)(x,{...e})}):x(e)}},28453:(e,d,t)=>{t.d(d,{R:()=>n,x:()=>c});var r=t(96540);const s={},i=r.createContext(s);function n(e){const d=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(d):{...d,...e}}),[d,e])}function c(e){let d;return d=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:n(e.components),r.createElement(i.Provider,{value:d},e.children)}}}]);