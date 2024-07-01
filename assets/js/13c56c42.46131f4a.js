"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[13572],{79711:(e,s,d)=>{d.r(s),d.d(s,{assets:()=>c,contentTitle:()=>r,default:()=>j,frontMatter:()=>t,metadata:()=>l,toc:()=>h});var n=d(74848),i=d(28453);const t={title:"UserAuctionFilter"},r="Schema: UserAuctionFilter (ID: 1915)",l={id:"MessageSchemas/Schema/Topics/client-config/UserAuctionFilter",title:"UserAuctionFilter",description:"METADATA",source:"@site/docs/MessageSchemas/Schema/Topics/1800-client-config/UserAuctionFilter.md",sourceDirName:"MessageSchemas/Schema/Topics/1800-client-config",slug:"/MessageSchemas/Schema/Topics/client-config/UserAuctionFilter",permalink:"/docs/MessageSchemas/Schema/Topics/client-config/UserAuctionFilter",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"UserAuctionFilter"},sidebar:"messageSchemasSidebar",previous:{title:"ClientPrivateSRSE",permalink:"/docs/MessageSchemas/Schema/Topics/client-config/ClientPrivateSRSE"},next:{title:"UserAuthentication",permalink:"/docs/MessageSchemas/Schema/Topics/client-config/UserAuthentication"}},c={},h=[{value:"METADATA",id:"metadata",level:3},{value:"PRIMARY KEY",id:"primary-key",level:3},{value:"BODY",id:"body",level:3},{value:"REPEATING FIELDS",id:"repeating-fields",level:3}];function x(e){const s={a:"a",h1:"h1",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s.h1,{id:"schema-userauctionfilter-id-1915",children:["Schema: UserAuctionFilter ",(0,n.jsx)("span",{className:"small-text",children:"(ID: 1915)"})]}),"\n",(0,n.jsxs)("div",{className:"single-message-meta",children:[(0,n.jsx)(s.h3,{id:"metadata",children:"METADATA"}),(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Attribute"}),(0,n.jsx)(s.th,{children:"Value"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"MLink Token"}),(0,n.jsx)(s.td,{children:"SRConnect"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Topic"}),(0,n.jsx)(s.td,{children:"client-config"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"SRSE Product"}),(0,n.jsx)(s.td,{children:"SRTrade"})]})]})]})]}),"\n",(0,n.jsxs)("div",{className:"single-message-primarykey",children:[(0,n.jsx)(s.h3,{id:"primary-key",children:"PRIMARY KEY"}),(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Field"}),(0,n.jsx)(s.th,{children:"Type"}),(0,n.jsx)(s.th,{children:"Comment"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"userName"}),(0,n.jsx)(s.td,{children:"string(24)"}),(0,n.jsx)(s.td,{})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"filterName"}),(0,n.jsx)(s.td,{children:"string(16)"}),(0,n.jsx)(s.td,{})]})]})]})]}),"\n",(0,n.jsxs)("div",{className:"single-message-body",children:[(0,n.jsx)(s.h3,{id:"body",children:"BODY"}),(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Field"}),(0,n.jsx)(s.th,{children:"Type"}),(0,n.jsx)(s.th,{children:"Comment"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"clientFirm"}),(0,n.jsx)(s.td,{children:"string(16)"}),(0,n.jsx)(s.td,{children:"client firm of the user this filter belongs to"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"direction"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"../../../Enums/BuySell",children:"enum : BuySell"})}),(0,n.jsx)(s.td,{children:"must match if not None (Buy = Buy Regular or Sell Flipped) (Buy = cust is buying)"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"disabled"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,n.jsx)(s.td,{})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"hasAbsDeltaFilter"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,n.jsx)(s.td,{children:"if Yes use fields: minAbsDelta, maxAbsDelta"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"hasAtmSDivFilter"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,n.jsx)(s.td,{children:"if Yes use fields: minAtmSDiv, maxAtmSDiv"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"hasAtmSVolFilter"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,n.jsx)(s.td,{children:"if Yes use fields: minAtmSVol, maxAtmSVol"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"hasExpiryDays"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,n.jsx)(s.td,{children:"if Yes use fields: minExpiryDays, maxExpiryDays"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"hasUAvgDailyVlmFilter"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,n.jsx)(s.td,{children:"if Yes use fields: minUAvgDailyVlm, maxUAvgDailyVlm"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"hasXDeltaFilter"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,n.jsx)(s.td,{children:"if Yes use fields: minXDelta, maxXDelta"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"includeADRs"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,n.jsx)(s.td,{children:"must match if not None"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"includeCommPaying"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,n.jsx)(s.td,{children:"must match if not None"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"includeCovered"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,n.jsx)(s.td,{children:"must match if not None"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"includeDaily"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,n.jsx)(s.td,{children:"must match if not None"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"includeDirected"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,n.jsx)(s.td,{children:"must match if not None"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"includeETFs"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,n.jsx)(s.td,{children:"must match if not None"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"includeFlex"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,n.jsx)(s.td,{children:"must match if not None"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"includeIndexes"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,n.jsx)(s.td,{children:"must match if not None"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"includeLongTerm"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,n.jsx)(s.td,{children:"must match if not None"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"includeOtherExp"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,n.jsx)(s.td,{children:"must match if not None"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"includeQuarterly"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,n.jsx)(s.td,{children:"must match if not None"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"includeRegular"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,n.jsx)(s.td,{children:"must match if not None"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"includeWeekly"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,n.jsx)(s.td,{children:"must match if not None"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"includeZDte"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,n.jsx)(s.td,{children:"must match if not None"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"maxAbsDelta"}),(0,n.jsx)(s.td,{children:"float"}),(0,n.jsx)(s.td,{children:"max absolute delta"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"maxAtmSDiv"}),(0,n.jsx)(s.td,{children:"float"}),(0,n.jsx)(s.td,{})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"maxAtmSVol"}),(0,n.jsx)(s.td,{children:"float"}),(0,n.jsx)(s.td,{})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"maxExpiryDays"}),(0,n.jsx)(s.td,{children:"int"}),(0,n.jsx)(s.td,{children:"max days to expiration"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"maxUAvgDailyVlm"}),(0,n.jsx)(s.td,{children:"float"}),(0,n.jsx)(s.td,{children:"max underlier avg daily volume (in $1mm increments)"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"maxXDelta"}),(0,n.jsx)(s.td,{children:"float"}),(0,n.jsx)(s.td,{})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"minAbsDelta"}),(0,n.jsx)(s.td,{children:"float"}),(0,n.jsx)(s.td,{children:"min absolute delta"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"minAbsVega"}),(0,n.jsx)(s.td,{children:"float"}),(0,n.jsx)(s.td,{children:"min absolute vega (no decimals)"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"minAtmSDiv"}),(0,n.jsx)(s.td,{children:"float"}),(0,n.jsx)(s.td,{})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"minAtmSVol"}),(0,n.jsx)(s.td,{children:"float"}),(0,n.jsx)(s.td,{})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"minExpiryDays"}),(0,n.jsx)(s.td,{children:"int"}),(0,n.jsx)(s.td,{children:"min days to expiration"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"minSize"}),(0,n.jsx)(s.td,{children:"float"}),(0,n.jsx)(s.td,{children:"min order size (no decimals)"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"minUAvgDailyVlm"}),(0,n.jsx)(s.td,{children:"float"}),(0,n.jsx)(s.td,{children:"min underlier avg daily volume (in $1mm increments)"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"minUPrc"}),(0,n.jsx)(s.td,{children:"float"}),(0,n.jsx)(s.td,{children:"min underlier price"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"minXDelta"}),(0,n.jsx)(s.td,{children:"float"}),(0,n.jsx)(s.td,{})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"modifiedBy"}),(0,n.jsx)(s.td,{children:"string(24)"}),(0,n.jsx)(s.td,{})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"modifiedIn"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"../../../Enums/SysEnvironment",children:"enum : SysEnvironment"})}),(0,n.jsx)(s.td,{})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"netVegaDirection"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"../../../Enums/BuySell",children:"enum : BuySell"})}),(0,n.jsx)(s.td,{children:"must match if not None (Buy = cust is buying net vega)"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"timestamp"}),(0,n.jsx)(s.td,{children:"DateTime"}),(0,n.jsx)(s.td,{})]})]})]}),(0,n.jsx)(s.h3,{id:"repeating-fields",children:"REPEATING FIELDS"}),(0,n.jsx)(s.p,{children:"AuctionSources"}),(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Field"}),(0,n.jsx)(s.th,{children:"Type"}),(0,n.jsx)(s.th,{children:"Comment"})]})}),(0,n.jsx)(s.tbody,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"auctionSource"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"../../../Enums/AuctionSource",children:"enum : AuctionSource"})}),(0,n.jsx)(s.td,{})]})})]}),(0,n.jsx)(s.p,{children:"AuctionTypes"}),(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Field"}),(0,n.jsx)(s.th,{children:"Type"}),(0,n.jsx)(s.th,{children:"Comment"})]})}),(0,n.jsx)(s.tbody,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"auctionType"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"../../../Enums/AuctionType",children:"enum : AuctionType"})}),(0,n.jsx)(s.td,{})]})})]}),(0,n.jsx)(s.p,{children:"ExcludeTicker"}),(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Field"}),(0,n.jsx)(s.th,{children:"Type"}),(0,n.jsx)(s.th,{children:"Comment"})]})}),(0,n.jsx)(s.tbody,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"ticker"}),(0,n.jsx)(s.td,{children:"TickerKey"}),(0,n.jsx)(s.td,{})]})})]}),(0,n.jsx)(s.p,{children:"IncludeTicker"}),(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Field"}),(0,n.jsx)(s.th,{children:"Type"}),(0,n.jsx)(s.th,{children:"Comment"})]})}),(0,n.jsx)(s.tbody,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"ticker"}),(0,n.jsx)(s.td,{children:"TickerKey"}),(0,n.jsx)(s.td,{})]})})]}),(0,n.jsx)(s.p,{children:"Industry"}),(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Field"}),(0,n.jsx)(s.th,{children:"Type"}),(0,n.jsx)(s.th,{children:"Comment"})]})}),(0,n.jsx)(s.tbody,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"industry"}),(0,n.jsx)(s.td,{children:"string(32)"}),(0,n.jsx)(s.td,{children:"industry string prefix (must match left edge)"})]})})]}),(0,n.jsx)(s.p,{children:"SpreadClass"}),(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Field"}),(0,n.jsx)(s.th,{children:"Type"}),(0,n.jsx)(s.th,{children:"Comment"})]})}),(0,n.jsx)(s.tbody,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"spreadClass"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"../../../Enums/ToolSpreadClass",children:"enum : ToolSpreadClass"})}),(0,n.jsx)(s.td,{})]})})]})]})]})}function j(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(x,{...e})}):x(e)}},28453:(e,s,d)=>{d.d(s,{R:()=>r,x:()=>l});var n=d(96540);const i={},t=n.createContext(i);function r(e){const s=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),n.createElement(t.Provider,{value:s},e.children)}}}]);