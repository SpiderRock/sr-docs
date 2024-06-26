"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[4918],{36007:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>c,contentTitle:()=>n,default:()=>o,frontMatter:()=>t,metadata:()=>l,toc:()=>h});var d=i(74848),r=i(28453);const t={title:"ResponderMarkupBX"},n="Schema: ResponderMarkupBX (ID: 2503)",l={id:"Schemas/Schema/Topics/liquidity-notice/ResponderMarkupBX",title:"ResponderMarkupBX",description:"METADATA",source:"@site/docs/Schemas/Schema/Topics/2450-liquidity-notice/ResponderMarkupBX.md",sourceDirName:"Schemas/Schema/Topics/2450-liquidity-notice",slug:"/Schemas/Schema/Topics/liquidity-notice/ResponderMarkupBX",permalink:"/docs/Schemas/Schema/Topics/liquidity-notice/ResponderMarkupBX",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"ResponderMarkupBX"},sidebar:"schemaSidebar",previous:{title:"NoticeResponse",permalink:"/docs/Schemas/Schema/Topics/liquidity-notice/NoticeResponse"},next:{title:"ResponderMarkupRC",permalink:"/docs/Schemas/Schema/Topics/liquidity-notice/ResponderMarkupRC"}},c={},h=[{value:"METADATA",id:"metadata",level:3},{value:"PRIMARY KEY",id:"primary-key",level:3},{value:"BODY",id:"body",level:3}];function a(e){const s={a:"a",h1:"h1",h3:"h3",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(s.h1,{id:"schema-respondermarkupbx-id-2503",children:["Schema: ResponderMarkupBX ",(0,d.jsx)("span",{className:"small-text",children:"(ID: 2503)"})]}),"\n",(0,d.jsxs)("div",{className:"single-message-meta",children:[(0,d.jsx)(s.h3,{id:"metadata",children:"METADATA"}),(0,d.jsxs)(s.table,{children:[(0,d.jsx)(s.thead,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.th,{children:"Attribute"}),(0,d.jsx)(s.th,{children:"Value"})]})}),(0,d.jsxs)(s.tbody,{children:[(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"MLink Token"}),(0,d.jsx)(s.td,{children:"SystemData"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"Topic"}),(0,d.jsx)(s.td,{children:"liquidity-notice"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"SRSE Product"}),(0,d.jsx)(s.td,{children:"SRTrade"})]})]})]})]}),"\n",(0,d.jsxs)("div",{className:"single-message-primarykey",children:[(0,d.jsx)(s.h3,{id:"primary-key",children:"PRIMARY KEY"}),(0,d.jsxs)(s.table,{children:[(0,d.jsx)(s.thead,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.th,{children:"Field"}),(0,d.jsx)(s.th,{children:"Type"}),(0,d.jsx)(s.th,{children:"Comment"})]})}),(0,d.jsxs)(s.tbody,{children:[(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"accnt"}),(0,d.jsx)(s.td,{children:"string(16)"}),(0,d.jsx)(s.td,{})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"clientFirm"}),(0,d.jsx)(s.td,{children:"string(16)"}),(0,d.jsx)(s.td,{})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"root"}),(0,d.jsx)(s.td,{children:"TickerKey"}),(0,d.jsx)(s.td,{})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"expiry"}),(0,d.jsx)(s.td,{children:"DateKey"}),(0,d.jsx)(s.td,{})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"respSide"}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.a,{href:"../../../Enums/BuySell",children:"enum : BuySell"})}),(0,d.jsx)(s.td,{children:"auction responder side (your side) (Buy = Buy/Borrow Cash)"})]})]})]})]}),"\n",(0,d.jsxs)("div",{className:"single-message-body",children:[(0,d.jsx)(s.h3,{id:"body",children:"BODY"}),(0,d.jsxs)(s.table,{children:[(0,d.jsx)(s.thead,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.th,{children:"Field"}),(0,d.jsx)(s.th,{children:"Type"}),(0,d.jsx)(s.th,{children:"Comment"})]})}),(0,d.jsxs)(s.tbody,{children:[(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"avgFillRate"}),(0,d.jsx)(s.td,{children:"double"}),(0,d.jsx)(s.td,{children:"avg fill effective moneyRate (this expiry)"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"cumFillMoney"}),(0,d.jsx)(s.td,{children:"double"}),(0,d.jsx)(s.td,{children:"cumulative fill money (credit/debit) (this expiry)"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"expiryMoneyAvail"}),(0,d.jsx)(s.td,{children:"long"}),(0,d.jsx)(s.td,{children:"money available for responding (day total; this ticker/expiry; all strikes) [note: money = (hiStrike - loStrike) * pointValue per BX spread]"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"iDays"}),(0,d.jsx)(s.td,{children:"double"}),(0,d.jsx)(s.td,{children:"iDays = effective interest days [SR supplied]"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"iYears"}),(0,d.jsx)(s.td,{children:"double"}),(0,d.jsx)(s.td,{children:"iYears = iDays / 360.0"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"incFeesInResp"}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,d.jsx)(s.td,{children:"include all estimated responder fees in final response price"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"isDisabled"}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,d.jsx)(s.td,{children:"if Yes, this auto-responder record is disabled"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"isDivControlDisabled"}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,d.jsx)(s.td,{children:"yes if dividend control above is triggered"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"modifiedBy"}),(0,d.jsx)(s.td,{children:"string(24)"}),(0,d.jsx)(s.td,{children:"user who last modified this record"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"modifiedIn"}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.a,{href:"../../../Enums/SysEnvironment",children:"enum : SysEnvironment"})}),(0,d.jsx)(s.td,{})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"moneyRate"}),(0,d.jsx)(s.td,{children:"double"}),(0,d.jsx)(s.td,{children:"0.00 = no effective lend/borrow value (360 day convention)"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"openExpiryMoney"}),(0,d.jsx)(s.td,{children:"int"}),(0,d.jsx)(s.td,{children:"remaining synthetics (100 share units) available for responding (day total; this ticker/expiry; all strikes)"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"openTickerMoney"}),(0,d.jsx)(s.td,{children:"int"}),(0,d.jsx)(s.td,{children:"remaining synthetics (100 share units) available for responding (day total; this ticker; all strikes)"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"roundRule"}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.a,{href:"../../../Enums/RoundRule",children:"enum : RoundRule"})}),(0,d.jsx)(s.td,{})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"ticker"}),(0,d.jsx)(s.td,{children:"TickerKey"}),(0,d.jsx)(s.td,{})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"tickerMoneyAvail"}),(0,d.jsx)(s.td,{children:"long"}),(0,d.jsx)(s.td,{children:"money available for responding (day total; this ticker; all strikes)"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"timestamp"}),(0,d.jsx)(s.td,{children:"DateTime"}),(0,d.jsx)(s.td,{children:"timestamp of last modification"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"transactFee"}),(0,d.jsx)(s.td,{children:"double"}),(0,d.jsx)(s.td,{})]})]})]})]})]})}function o(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,d.jsx)(s,{...e,children:(0,d.jsx)(a,{...e})}):a(e)}},28453:(e,s,i)=>{i.d(s,{R:()=>n,x:()=>l});var d=i(96540);const r={},t=d.createContext(r);function n(e){const s=d.useContext(t);return d.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:n(e.components),d.createElement(t.Provider,{value:s},e.children)}}}]);