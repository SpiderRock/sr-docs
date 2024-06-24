"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[8011],{73057:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>l,contentTitle:()=>r,default:()=>a,frontMatter:()=>n,metadata:()=>c,toc:()=>o});var i=t(74848),d=t(28453);const n={title:"AutoResponderBX"},r="Message: AutoResponderBX (ID: 2498)",c={id:"Schema/Topics/liquidity-notice/AutoResponderBX",title:"AutoResponderBX",description:"META DATA  (Topic: liquidity-notice )",source:"@site/docs/Schema/Topics/2450-liquidity-notice/AutoResponderBX.md",sourceDirName:"Schema/Topics/2450-liquidity-notice",slug:"/Schema/Topics/liquidity-notice/AutoResponderBX",permalink:"/sr-docs/docs/Schema/Topics/liquidity-notice/AutoResponderBX",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"AutoResponderBX"},sidebar:"schemaSidebar",previous:{title:"AuctionState",permalink:"/sr-docs/docs/Schema/Topics/liquidity-notice/AuctionState"},next:{title:"AutoResponderRC",permalink:"/sr-docs/docs/Schema/Topics/liquidity-notice/AutoResponderRC"}},l={},o=[{value:"META DATA  (Topic: liquidity-notice )",id:"meta-data--topic-liquidity-notice-",level:3},{value:"PRIMARY KEY",id:"primary-key",level:3},{value:"BODY",id:"body",level:3}];function h(e){const s={a:"a",h1:"h1",h3:"h3",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(s.h1,{id:"message-autoresponderbx-id-2498",children:["Message: AutoResponderBX ",(0,i.jsx)("span",{className:"small-text",children:"(ID: 2498)"})]}),"\n",(0,i.jsxs)("div",{className:"single-message-meta",children:[(0,i.jsx)(s.h3,{id:"meta-data--topic-liquidity-notice-",children:"META DATA  (Topic: liquidity-notice )"}),(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Attribute"}),(0,i.jsx)(s.th,{children:"Value"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"MLink Token"}),(0,i.jsx)(s.td,{children:"SystemData"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"SRSE Product"}),(0,i.jsx)(s.td,{children:"SRTrade"})]})]})]})]}),"\n",(0,i.jsxs)("div",{className:"single-message-primarykey",children:[(0,i.jsx)(s.h3,{id:"primary-key",children:"PRIMARY KEY"}),(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Field"}),(0,i.jsx)(s.th,{children:"Type"}),(0,i.jsx)(s.th,{children:"Comment"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"accnt"}),(0,i.jsx)(s.td,{children:"string(16)"}),(0,i.jsx)(s.td,{})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"clientFirm"}),(0,i.jsx)(s.td,{children:"string(16)"}),(0,i.jsx)(s.td,{})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"root"}),(0,i.jsx)(s.td,{children:"TickerKey"}),(0,i.jsx)(s.td,{})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"expiry"}),(0,i.jsx)(s.td,{children:"DateKey"}),(0,i.jsx)(s.td,{})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"respSide"}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.a,{href:"../../../Enums/BuySell",children:"enum : BuySell"})}),(0,i.jsx)(s.td,{children:"auction responder side (your side) (Buy = Buy/Borrow Cash)"})]})]})]})]}),"\n",(0,i.jsxs)("div",{className:"single-message-body",children:[(0,i.jsx)(s.h3,{id:"body",children:"BODY"}),(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Field"}),(0,i.jsx)(s.th,{children:"Type"}),(0,i.jsx)(s.th,{children:"Comment"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"expiryMoneyAvail"}),(0,i.jsx)(s.td,{children:"long"}),(0,i.jsx)(s.td,{children:"money available for responding (day total; this ticker/expiry; all strikes) [note: money = (hiStrike - loStrike) * pointValue per BX spread]"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"incFeesInResp"}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,i.jsx)(s.td,{children:"include all estimated responder fees in final response price"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"isDisabled"}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,i.jsx)(s.td,{children:"if Yes, this auto-responder record is disabled"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"modifiedBy"}),(0,i.jsx)(s.td,{children:"string(24)"}),(0,i.jsx)(s.td,{children:"user who last modified this record"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"modifiedIn"}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.a,{href:"../../../Enums/SysEnvironment",children:"enum : SysEnvironment"})}),(0,i.jsx)(s.td,{})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"moneyRate"}),(0,i.jsx)(s.td,{children:"double"}),(0,i.jsx)(s.td,{children:"0.00 = no effective lend/borrow value (360 day convention)"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"riskGroupId"}),(0,i.jsx)(s.td,{children:"long"}),(0,i.jsx)(s.td,{})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"roundRule"}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.a,{href:"../../../Enums/RoundRule",children:"enum : RoundRule"})}),(0,i.jsx)(s.td,{})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"ticker"}),(0,i.jsx)(s.td,{children:"TickerKey"}),(0,i.jsx)(s.td,{})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"tickerMoneyAvail"}),(0,i.jsx)(s.td,{children:"long"}),(0,i.jsx)(s.td,{children:"money available for responding (day total; this ticker; all strikes)"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"timestamp"}),(0,i.jsx)(s.td,{children:"DateTime"}),(0,i.jsx)(s.td,{children:"timestamp of last modification"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"transactFee"}),(0,i.jsx)(s.td,{children:"double"}),(0,i.jsx)(s.td,{})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"userName"}),(0,i.jsx)(s.td,{children:"string(24)"}),(0,i.jsx)(s.td,{children:"username used for responding to auction notices"})]})]})]})]})]})}function a(e={}){const{wrapper:s}={...(0,d.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},28453:(e,s,t)=>{t.d(s,{R:()=>r,x:()=>c});var i=t(96540);const d={},n=i.createContext(d);function r(e){const s=i.useContext(n);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:r(e.components),i.createElement(n.Provider,{value:s},e.children)}}}]);