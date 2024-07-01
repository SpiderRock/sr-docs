"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[38403],{33123:(e,s,d)=>{d.r(s),d.d(s,{assets:()=>c,contentTitle:()=>l,default:()=>j,frontMatter:()=>i,metadata:()=>n,toc:()=>h});var t=d(74848),r=d(28453);const i={title:"RFQQuoteBroadcast"},l="Schema: RFQQuoteBroadcast (ID: 6225)",n={id:"MessageSchemas/Schema/Topics/tool-rows/RFQQuoteBroadcast",title:"RFQQuoteBroadcast",description:"Live spread quotes with SpiderRock markup details for equity and future option spreads.  Legs details are included in a packed field.  This table contains the most recent market for each spread.",source:"@site/docs/MessageSchemas/Schema/Topics/6120-tool-rows/RFQQuoteBroadcast.md",sourceDirName:"MessageSchemas/Schema/Topics/6120-tool-rows",slug:"/MessageSchemas/Schema/Topics/tool-rows/RFQQuoteBroadcast",permalink:"/docs/MessageSchemas/Schema/Topics/tool-rows/RFQQuoteBroadcast",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"RFQQuoteBroadcast"},sidebar:"messageSchemasSidebar",previous:{title:"NetPulse",permalink:"/docs/MessageSchemas/Schema/Topics/tool-link/NetPulse"},next:{title:"OptionAtmMinuteBarData",permalink:"/docs/MessageSchemas/Schema/Topics/wts-trade-tool/OptionAtmMinuteBarData"}},c={},h=[{value:"METADATA",id:"metadata",level:3},{value:"PRIMARY KEY",id:"primary-key",level:3},{value:"BODY",id:"body",level:3},{value:"REPEATING FIELDS",id:"repeating-fields",level:3}];function x(e){const s={a:"a",h1:"h1",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.h1,{id:"schema-rfqquotebroadcast-id-6225",children:["Schema: RFQQuoteBroadcast ",(0,t.jsx)("span",{className:"small-text",children:"(ID: 6225)"})]}),"\n",(0,t.jsx)(s.p,{children:"Live spread quotes with SpiderRock markup details for equity and future option spreads.  Legs details are included in a packed field.  This table contains the most recent market for each spread."}),"\n",(0,t.jsxs)("div",{className:"single-message-meta",children:[(0,t.jsx)(s.h3,{id:"metadata",children:"METADATA"}),(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Attribute"}),(0,t.jsx)(s.th,{children:"Value"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"MLink Token"}),(0,t.jsx)(s.td,{children:"SystemData"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Topic"}),(0,t.jsx)(s.td,{children:"tool-rows"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"SRSE Product"}),(0,t.jsx)(s.td,{children:"SRLive"})]})]})]})]}),"\n",(0,t.jsxs)("div",{className:"single-message-primarykey",children:[(0,t.jsx)(s.h3,{id:"primary-key",children:"PRIMARY KEY"}),(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Field"}),(0,t.jsx)(s.th,{children:"Type"}),(0,t.jsx)(s.th,{children:"Comment"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"securityID"}),(0,t.jsx)(s.td,{children:"long"}),(0,t.jsx)(s.td,{children:"exchange spread ID (eg. CME ProductID or ISE SecurityID)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"exchSource"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"../../../Enums/ExchSource",children:"enum : ExchSource"})}),(0,t.jsx)(s.td,{})]})]})]})]}),"\n",(0,t.jsxs)("div",{className:"single-message-body",children:[(0,t.jsx)(s.h3,{id:"body",children:"BODY"}),(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Field"}),(0,t.jsx)(s.th,{children:"Type"}),(0,t.jsx)(s.th,{children:"Comment"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"askPrice"}),(0,t.jsx)(s.td,{children:"double"}),(0,t.jsx)(s.td,{children:"best ask (sell) price for this RFQ/Spread from individual legs"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"askQuan"}),(0,t.jsx)(s.td,{children:"int"}),(0,t.jsx)(s.td,{children:"minimum ask (sell) quantity from individual legs"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"bidPrice"}),(0,t.jsx)(s.td,{children:"double"}),(0,t.jsx)(s.td,{children:"best bid (buy) price for this RFQ/Spread from individual legs"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"bidQuan"}),(0,t.jsx)(s.td,{children:"int"}),(0,t.jsx)(s.td,{children:"minimum bid (buy) quantity from individual legs"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"exchange"}),(0,t.jsx)(s.td,{children:"string(8)"}),(0,t.jsx)(s.td,{children:"comma separated list"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"filterId"}),(0,t.jsx)(s.td,{children:"long"}),(0,t.jsx)(s.td,{children:"used by tool/toolServer session to multiplex filters"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"grpNum"}),(0,t.jsx)(s.td,{children:"int"}),(0,t.jsx)(s.td,{children:"industry group number (equities only)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"isCoveredStrategy"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"isTradeable"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"legSecTypes"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"../../../Enums/LegSecType",children:"flag : LegSecType"})}),(0,t.jsx)(s.td,{children:"multi value"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"maxUPrc"}),(0,t.jsx)(s.td,{children:"double"}),(0,t.jsx)(s.td,{children:"max uPrc of all option legs"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"maxYears"}),(0,t.jsx)(s.td,{children:"float"}),(0,t.jsx)(s.td,{children:"max years of all option legs"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"minUPrc"}),(0,t.jsx)(s.td,{children:"double"}),(0,t.jsx)(s.td,{children:"min uPrc of all option legs"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"minYears"}),(0,t.jsx)(s.td,{children:"float"}),(0,t.jsx)(s.td,{children:"min years of all option legs"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"netTimestamp"}),(0,t.jsx)(s.td,{children:"long"}),(0,t.jsx)(s.td,{children:"PTP timestamp of most recent message update"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"numLegs"}),(0,t.jsx)(s.td,{children:"int"}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"optStatus"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"../../../Enums/OptStatus",children:"enum : OptStatus"})}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"posDelta"}),(0,t.jsx)(s.td,{children:"float"}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"posGamma"}),(0,t.jsx)(s.td,{children:"float"}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"posTheta"}),(0,t.jsx)(s.td,{children:"float"}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"posVega"}),(0,t.jsx)(s.td,{children:"float"}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"rfqAskPrice"}),(0,t.jsx)(s.td,{children:"double"}),(0,t.jsx)(s.td,{children:"best ask (sell) price for this RFQ/Spread book"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"rfqAskQuan"}),(0,t.jsx)(s.td,{children:"int"}),(0,t.jsx)(s.td,{children:"cumulative ask (sell) quantity"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"rfqBidPrice"}),(0,t.jsx)(s.td,{children:"double"}),(0,t.jsx)(s.td,{children:"best bid (buy) price for this RFQ/Spread book"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"rfqBidQuan"}),(0,t.jsx)(s.td,{children:"int"}),(0,t.jsx)(s.td,{children:"cumulative bid (buy) quantity"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"rfqPrtPrice"}),(0,t.jsx)(s.td,{children:"double"}),(0,t.jsx)(s.td,{children:"last print price for this RFQ/Spread"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"rfqPrtSize"}),(0,t.jsx)(s.td,{children:"int"}),(0,t.jsx)(s.td,{children:"last print size for this RFQ/Spread"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"rfqPrtTime"}),(0,t.jsx)(s.td,{children:"long"}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"rfqPrtVolume"}),(0,t.jsx)(s.td,{children:"int"}),(0,t.jsx)(s.td,{children:"total print volume (for session) for this RFQ/Spread"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"rfqSource"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"../../../Enums/RFQSourceType",children:"flag : RFQSourceType"})}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"rfqStrategy"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"../../../Enums/SpreadStrategy",children:"enum : SpreadStrategy"})}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"riskClass"}),(0,t.jsx)(s.td,{children:"string(8)"}),(0,t.jsx)(s.td,{children:"risk class letter code"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"sector"}),(0,t.jsx)(s.td,{children:"string(16)"}),(0,t.jsx)(s.td,{children:"user defined sector code (if any)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"securityDesc"}),(0,t.jsx)(s.td,{children:"text1"}),(0,t.jsx)(s.td,{children:"SR constructed;blank on broadcast (filled by tool or SRSE proxy)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"surfDelta"}),(0,t.jsx)(s.td,{children:"float"}),(0,t.jsx)(s.td,{children:"delta of all legs"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"surfPrice"}),(0,t.jsx)(s.td,{children:"float"}),(0,t.jsx)(s.td,{children:"surfPrice (SR mid-market) of all legs"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"surfVega"}),(0,t.jsx)(s.td,{children:"float"}),(0,t.jsx)(s.td,{children:"vega of all legs"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"theoPrice"}),(0,t.jsx)(s.td,{children:"float"}),(0,t.jsx)(s.td,{children:"theoPrice (if applicable) of all legs"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"theoPriceHi"}),(0,t.jsx)(s.td,{children:"float"}),(0,t.jsx)(s.td,{children:"theoPrice (if applicable) of all legs (worst way)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"theoPriceLo"}),(0,t.jsx)(s.td,{children:"float"}),(0,t.jsx)(s.td,{children:"theoPrice (if applicable) of all legs (best way)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"ticker"}),(0,t.jsx)(s.td,{children:"TickerKey"}),(0,t.jsx)(s.td,{children:"first ticker in leg list"})]})]})]}),(0,t.jsx)(s.h3,{id:"repeating-fields",children:"REPEATING FIELDS"}),(0,t.jsx)(s.p,{children:"QuoteLegs"}),(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Field"}),(0,t.jsx)(s.th,{children:"Type"}),(0,t.jsx)(s.th,{children:"Comment"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"legAskPrice"}),(0,t.jsx)(s.td,{children:"double"}),(0,t.jsx)(s.td,{children:"leg market ask"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"legAskSize"}),(0,t.jsx)(s.td,{children:"int"}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"legBidPrice"}),(0,t.jsx)(s.td,{children:"double"}),(0,t.jsx)(s.td,{children:"leg market bid"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"legBidSize"}),(0,t.jsx)(s.td,{children:"int"}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"legFutMult"}),(0,t.jsx)(s.td,{children:"float"}),(0,t.jsx)(s.td,{children:"1 if equity, uMult if option/future"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"legKey"}),(0,t.jsx)(s.td,{children:"OptionKey"}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"legKeyType"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"../../../Enums/LegKeyType",children:"enum : LegKeyType"})}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"legOptMult"}),(0,t.jsx)(s.td,{children:"float"}),(0,t.jsx)(s.td,{children:"SPC if equity, 1 if option/future"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"legParentSecID"}),(0,t.jsx)(s.td,{children:"long"}),(0,t.jsx)(s.td,{children:"product securityID of parent (if unrolled from a compound spread)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"legRatio"}),(0,t.jsx)(s.td,{children:"ushort"}),(0,t.jsx)(s.td,{children:"leg ratio (1, 2, etc)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"legSecurityDesc"}),(0,t.jsx)(s.td,{children:"string(20)"}),(0,t.jsx)(s.td,{children:"Security description"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"legSecurityID"}),(0,t.jsx)(s.td,{children:"long"}),(0,t.jsx)(s.td,{children:"product securityID (if available, 0 otherwise) (can be another spread)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"legSide"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"../../../Enums/BuySell",children:"enum : BuySell"})}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"legSurfDe"}),(0,t.jsx)(s.td,{children:"float"}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"legSurfPrice"}),(0,t.jsx)(s.td,{children:"float"}),(0,t.jsx)(s.td,{children:"surface price as of message arrival"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"legSurfVe"}),(0,t.jsx)(s.td,{children:"float"}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"legSurfVol"}),(0,t.jsx)(s.td,{children:"float"}),(0,t.jsx)(s.td,{children:"leg surface volatility"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"legTheoPrcB"}),(0,t.jsx)(s.td,{children:"float"}),(0,t.jsx)(s.td,{children:"theo buy price"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"legTheoPrcS"}),(0,t.jsx)(s.td,{children:"float"}),(0,t.jsx)(s.td,{children:"theo sell price"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"legTheoPrice"}),(0,t.jsx)(s.td,{children:"float"}),(0,t.jsx)(s.td,{children:"theo price"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"legUPrc"}),(0,t.jsx)(s.td,{children:"double"}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"legYears"}),(0,t.jsx)(s.td,{children:"float"}),(0,t.jsx)(s.td,{})]})]})]})]})]})}function j(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(x,{...e})}):x(e)}},28453:(e,s,d)=>{d.d(s,{R:()=>l,x:()=>n});var t=d(96540);const r={},i=t.createContext(r);function l(e){const s=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function n(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),t.createElement(i.Provider,{value:s},e.children)}}}]);