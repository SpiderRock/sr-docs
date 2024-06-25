"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[20494],{88741:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>l,contentTitle:()=>n,default:()=>x,frontMatter:()=>r,metadata:()=>c,toc:()=>h});var i=t(74848),d=t(28453);const r={title:"NoticeResponse"},n="Schema: NoticeResponse (ID: 2470)",c={id:"Schema/Topics/liquidity-notice/NoticeResponse",title:"NoticeResponse",description:"META DATA",source:"@site/docs/Schema/Topics/2450-liquidity-notice/NoticeResponse.md",sourceDirName:"Schema/Topics/2450-liquidity-notice",slug:"/Schema/Topics/liquidity-notice/NoticeResponse",permalink:"/docs/Schema/Topics/liquidity-notice/NoticeResponse",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"NoticeResponse"},sidebar:"schemaSidebar",previous:{title:"NoticeExecReport",permalink:"/docs/Schema/Topics/liquidity-notice/NoticeExecReport"},next:{title:"ResponderMarkupBX",permalink:"/docs/Schema/Topics/liquidity-notice/ResponderMarkupBX"}},l={},h=[{value:"META DATA",id:"meta-data",level:3},{value:"PRIMARY KEY",id:"primary-key",level:3},{value:"BODY",id:"body",level:3},{value:"REPEATING FIELDS",id:"repeating-fields",level:3}];function o(e){const s={a:"a",h1:"h1",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(s.h1,{id:"schema-noticeresponse-id-2470",children:["Schema: NoticeResponse ",(0,i.jsx)("span",{className:"small-text",children:"(ID: 2470)"})]}),"\n",(0,i.jsxs)("div",{className:"single-message-meta",children:[(0,i.jsx)(s.h3,{id:"meta-data",children:"META DATA"}),(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Attribute"}),(0,i.jsx)(s.th,{children:"Value"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"MLink Token"}),(0,i.jsx)(s.td,{children:"SRConnect"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Topic"}),(0,i.jsx)(s.td,{children:"liquidity-notice"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"SRSE Product"}),(0,i.jsx)(s.td,{children:"SRTrade"})]})]})]})]}),"\n",(0,i.jsxs)("div",{className:"single-message-primarykey",children:[(0,i.jsx)(s.h3,{id:"primary-key",children:"PRIMARY KEY"}),(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Field"}),(0,i.jsx)(s.th,{children:"Type"}),(0,i.jsx)(s.th,{children:"Comment"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"noticeNumber"}),(0,i.jsx)(s.td,{children:"long"}),(0,i.jsx)(s.td,{children:"(required) AuctionNotice.noticeNumber"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"accnt"}),(0,i.jsx)(s.td,{children:"string(16)"}),(0,i.jsx)(s.td,{children:"(required) SR Accnt"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"clientFirm"}),(0,i.jsx)(s.td,{children:"string(16)"}),(0,i.jsx)(s.td,{children:"(optional) SR ClientFirm"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"responseId"}),(0,i.jsx)(s.td,{children:"string(24)"}),(0,i.jsx)(s.td,{children:"(required) client ResponseId of this response; reflected back on NoticeExecReport messages"})]})]})]})]}),"\n",(0,i.jsxs)("div",{className:"single-message-body",children:[(0,i.jsx)(s.h3,{id:"body",children:"BODY"}),(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Field"}),(0,i.jsx)(s.th,{children:"Type"}),(0,i.jsx)(s.th,{children:"Comment"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"maxUAsk"}),(0,i.jsx)(s.td,{children:"float"}),(0,i.jsx)(s.td,{})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"minUBid"}),(0,i.jsx)(s.td,{children:"float"}),(0,i.jsx)(s.td,{})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"refDe"}),(0,i.jsx)(s.td,{children:"float"}),(0,i.jsx)(s.td,{})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"refGa"}),(0,i.jsx)(s.td,{children:"float"}),(0,i.jsx)(s.td,{})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"refUPrc"}),(0,i.jsx)(s.td,{children:"double"}),(0,i.jsx)(s.td,{})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"respPrice"}),(0,i.jsx)(s.td,{children:"double"}),(0,i.jsx)(s.td,{})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"respSide"}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.a,{href:"../../../Enums/BuySell",children:"enum : BuySell"})}),(0,i.jsx)(s.td,{})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"respSize"}),(0,i.jsx)(s.td,{children:"int"}),(0,i.jsx)(s.td,{})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"riskGroupId"}),(0,i.jsx)(s.td,{children:"long"}),(0,i.jsx)(s.td,{children:"(optional) any auction response is associated with this riskGroupID (and SpdrRiskGroupControl)"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"stageType"}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.a,{href:"../../../Enums/SpdrStageType",children:"enum : SpdrStageType"})}),(0,i.jsx)(s.td,{children:"(optional) (default is None/Live) can only be supplied on the initial notice response in a cancel/replace chain"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"strategy"}),(0,i.jsx)(s.td,{children:"string(32)"}),(0,i.jsx)(s.td,{children:"(optional) user strategy field (visible on SR tools)"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"ticker"}),(0,i.jsx)(s.td,{children:"TickerKey"}),(0,i.jsx)(s.td,{children:"(filled in on server) underlier ticker"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"timestamp"}),(0,i.jsx)(s.td,{children:"DateTime"}),(0,i.jsx)(s.td,{})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"tradeDate"}),(0,i.jsx)(s.td,{children:"DateKey"}),(0,i.jsx)(s.td,{children:"(filled in on server)"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"userData1"}),(0,i.jsx)(s.td,{children:"text1"}),(0,i.jsx)(s.td,{children:"(optional) user data field (free text) (reflected on NoticeResponse)"})]})]})]}),(0,i.jsx)(s.h3,{id:"repeating-fields",children:"REPEATING FIELDS"}),(0,i.jsx)(s.p,{children:"OrderLegs"}),(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Field"}),(0,i.jsx)(s.th,{children:"Type"}),(0,i.jsx)(s.th,{children:"Comment"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"positionType"}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.a,{href:"../../../Enums/LegPositionType",children:"enum : LegPositionType"})}),(0,i.jsx)(s.td,{})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"secKey"}),(0,i.jsx)(s.td,{children:"OptionKey"}),(0,i.jsx)(s.td,{})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"secType"}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.a,{href:"../../../Enums/SpdrKeyType",children:"enum : SpdrKeyType"})}),(0,i.jsx)(s.td,{})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"side"}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.a,{href:"../../../Enums/BuySell",children:"enum : BuySell"})}),(0,i.jsx)(s.td,{})]})]})]})]})]})}function x(e={}){const{wrapper:s}={...(0,d.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},28453:(e,s,t)=>{t.d(s,{R:()=>n,x:()=>c});var i=t(96540);const d={},r=i.createContext(d);function n(e){const s=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:n(e.components),i.createElement(r.Provider,{value:s},e.children)}}}]);