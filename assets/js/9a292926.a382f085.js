"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[39101],{43867:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>l,contentTitle:()=>r,default:()=>o,frontMatter:()=>n,metadata:()=>c,toc:()=>h});var d=t(74848),i=t(28453);const n={title:"NoticeResponse"},r="Schema: NoticeResponse (ID: 2470)",c={id:"MessageSchemas/Schema/Topics/liquidity-notice/NoticeResponse",title:"NoticeResponse",description:"METADATA",source:"@site/docs/MessageSchemas/Schema/Topics/2450-liquidity-notice/NoticeResponse.md",sourceDirName:"MessageSchemas/Schema/Topics/2450-liquidity-notice",slug:"/MessageSchemas/Schema/Topics/liquidity-notice/NoticeResponse",permalink:"/docs/MessageSchemas/Schema/Topics/liquidity-notice/NoticeResponse",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"NoticeResponse"},sidebar:"messageSchemasSidebar",previous:{title:"NoticeExecReport",permalink:"/docs/MessageSchemas/Schema/Topics/liquidity-notice/NoticeExecReport"},next:{title:"ResponderMarkupBX",permalink:"/docs/MessageSchemas/Schema/Topics/liquidity-notice/ResponderMarkupBX"}},l={},h=[{value:"METADATA",id:"metadata",level:3},{value:"BODY",id:"body",level:3},{value:"REPEATING FIELDS",id:"repeating-fields",level:3}];function x(e){const s={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h3:"h3",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(s.h1,{id:"schema-noticeresponse-id-2470",children:["Schema: NoticeResponse ",(0,d.jsx)("span",{className:"small-text",children:"(ID: 2470)"})]}),"\n",(0,d.jsx)(s.h3,{id:"metadata",children:"METADATA"}),"\n",(0,d.jsxs)(s.table,{children:[(0,d.jsx)(s.thead,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.th,{children:"Attribute"}),(0,d.jsx)(s.th,{children:"Value"})]})}),(0,d.jsxs)(s.tbody,{children:[(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"Topic"}),(0,d.jsx)(s.td,{children:"2450-liquidity-notice"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"MLink Token"}),(0,d.jsx)(s.td,{children:"SRConnect"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"SRSE Product"}),(0,d.jsx)(s.td,{children:"SRTrade"})]})]})]}),"\n",(0,d.jsx)("br",{}),"\n",(0,d.jsxs)(s.blockquote,{children:["\n",(0,d.jsxs)(s.p,{children:[(0,d.jsx)(s.strong,{children:"Note:"})," The symbol ",(0,d.jsx)(s.code,{children:"="})," next to a field number indicates that it is a primary key."]}),"\n"]}),"\n",(0,d.jsx)(s.h3,{id:"body",children:"BODY"}),"\n",(0,d.jsxs)(s.table,{children:[(0,d.jsx)(s.thead,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.th,{children:"#"}),(0,d.jsx)(s.th,{children:"Field"}),(0,d.jsx)(s.th,{children:"Type"}),(0,d.jsx)(s.th,{children:"Comment"})]})}),(0,d.jsxs)(s.tbody,{children:[(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"13="}),(0,d.jsx)(s.td,{children:"noticeNumber"}),(0,d.jsx)(s.td,{children:"long"}),(0,d.jsx)(s.td,{children:"(required) AuctionNotice.noticeNumber"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"11="}),(0,d.jsx)(s.td,{children:"accnt"}),(0,d.jsx)(s.td,{children:"string(16)"}),(0,d.jsx)(s.td,{children:"(required) SR Accnt"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"12="}),(0,d.jsx)(s.td,{children:"clientFirm"}),(0,d.jsx)(s.td,{children:"string(16)"}),(0,d.jsx)(s.td,{children:"(optional) SR ClientFirm"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"14="}),(0,d.jsx)(s.td,{children:"responseId"}),(0,d.jsx)(s.td,{children:"string(24)"}),(0,d.jsx)(s.td,{children:"(required) client ResponseId of this response; reflected back on NoticeExecReport messages"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"119"}),(0,d.jsx)(s.td,{children:"ticker"}),(0,d.jsx)(s.td,{children:"TickerKey"}),(0,d.jsx)(s.td,{children:"(filled in on server) underlier ticker"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"120"}),(0,d.jsx)(s.td,{children:"tradeDate"}),(0,d.jsx)(s.td,{children:"DateKey"}),(0,d.jsx)(s.td,{children:"(filled in on server)"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"101"}),(0,d.jsx)(s.td,{children:"stageType"}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.a,{href:"../../../Enums/SpdrStageType",children:"enum : SpdrStageType"})}),(0,d.jsx)(s.td,{children:"(optional) (default is None/Live) can only be supplied on the initial notice response in a cancel/replace chain"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"102"}),(0,d.jsx)(s.td,{children:"respSide"}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.a,{href:"../../../Enums/BuySell",children:"enum : BuySell"})}),(0,d.jsx)(s.td,{})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"103"}),(0,d.jsx)(s.td,{children:"respSize"}),(0,d.jsx)(s.td,{children:"int"}),(0,d.jsx)(s.td,{})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"104"}),(0,d.jsx)(s.td,{children:"respPrice"}),(0,d.jsx)(s.td,{children:"double"}),(0,d.jsx)(s.td,{})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"105"}),(0,d.jsx)(s.td,{children:"refUPrc"}),(0,d.jsx)(s.td,{children:"double"}),(0,d.jsx)(s.td,{})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"106"}),(0,d.jsx)(s.td,{children:"refDe"}),(0,d.jsx)(s.td,{children:"float"}),(0,d.jsx)(s.td,{})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"107"}),(0,d.jsx)(s.td,{children:"refGa"}),(0,d.jsx)(s.td,{children:"float"}),(0,d.jsx)(s.td,{})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"108"}),(0,d.jsx)(s.td,{children:"minUBid"}),(0,d.jsx)(s.td,{children:"float"}),(0,d.jsx)(s.td,{})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"109"}),(0,d.jsx)(s.td,{children:"maxUAsk"}),(0,d.jsx)(s.td,{children:"float"}),(0,d.jsx)(s.td,{})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"110"}),(0,d.jsx)(s.td,{children:"riskGroupId"}),(0,d.jsx)(s.td,{children:"long"}),(0,d.jsx)(s.td,{children:"(optional) any auction response is associated with this riskGroupID (and SpdrRiskGroupControl)"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"111"}),(0,d.jsx)(s.td,{children:"strategy"}),(0,d.jsx)(s.td,{children:"string(32)"}),(0,d.jsx)(s.td,{children:"(optional) user strategy field (visible on SR tools)"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"112"}),(0,d.jsx)(s.td,{children:"userData1"}),(0,d.jsx)(s.td,{children:"text1"}),(0,d.jsx)(s.td,{children:"(optional) user data field (free text) (reflected on NoticeResponse)"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"118"}),(0,d.jsx)(s.td,{children:"timestamp"}),(0,d.jsx)(s.td,{children:"DateTime"}),(0,d.jsx)(s.td,{})]})]})]}),"\n",(0,d.jsx)(s.h3,{id:"repeating-fields",children:"REPEATING FIELDS"}),"\n",(0,d.jsx)(s.p,{children:"OrderLegs"}),"\n",(0,d.jsxs)(s.table,{children:[(0,d.jsx)(s.thead,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.th,{children:"Field"}),(0,d.jsx)(s.th,{children:"Type"}),(0,d.jsx)(s.th,{children:"Comment"})]})}),(0,d.jsxs)(s.tbody,{children:[(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"114"}),(0,d.jsx)(s.td,{children:"secKey"}),(0,d.jsx)(s.td,{children:"OptionKey"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"115"}),(0,d.jsx)(s.td,{children:"secType"}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.a,{href:"../../../Enums/SpdrKeyType",children:"enum : SpdrKeyType"})})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"116"}),(0,d.jsx)(s.td,{children:"side"}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.a,{href:"../../../Enums/BuySell",children:"enum : BuySell"})})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"117"}),(0,d.jsx)(s.td,{children:"positionType"}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.a,{href:"../../../Enums/LegPositionType",children:"enum : LegPositionType"})})]})]})]})]})}function o(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,d.jsx)(s,{...e,children:(0,d.jsx)(x,{...e})}):x(e)}},28453:(e,s,t)=>{t.d(s,{R:()=>r,x:()=>c});var d=t(96540);const i={},n=d.createContext(i);function r(e){const s=d.useContext(n);return d.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),d.createElement(n.Provider,{value:s},e.children)}}}]);