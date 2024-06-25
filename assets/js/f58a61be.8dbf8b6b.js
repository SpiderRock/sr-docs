"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[72905],{92684:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>l,contentTitle:()=>i,default:()=>x,frontMatter:()=>r,metadata:()=>c,toc:()=>o});var d=t(74848),n=t(28453);const r={title:"AutoResponderRC"},i="Schema: AutoResponderRC (ID: 2496)",c={id:"Schema/Topics/liquidity-notice/AutoResponderRC",title:"AutoResponderRC",description:"META DATA",source:"@site/docs/Schema/Topics/2450-liquidity-notice/AutoResponderRC.md",sourceDirName:"Schema/Topics/2450-liquidity-notice",slug:"/Schema/Topics/liquidity-notice/AutoResponderRC",permalink:"/docs/Schema/Topics/liquidity-notice/AutoResponderRC",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"AutoResponderRC"},sidebar:"schemaSidebar",previous:{title:"AutoResponderBX",permalink:"/docs/Schema/Topics/liquidity-notice/AutoResponderBX"},next:{title:"AutoResponderSN",permalink:"/docs/Schema/Topics/liquidity-notice/AutoResponderSN"}},l={},o=[{value:"META DATA",id:"meta-data",level:3},{value:"PRIMARY KEY",id:"primary-key",level:3},{value:"BODY",id:"body",level:3}];function h(e){const s={a:"a",h1:"h1",h3:"h3",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(s.h1,{id:"schema-autoresponderrc-id-2496",children:["Schema: AutoResponderRC ",(0,d.jsx)("span",{className:"small-text",children:"(ID: 2496)"})]}),"\n",(0,d.jsxs)("div",{className:"single-message-meta",children:[(0,d.jsx)(s.h3,{id:"meta-data",children:"META DATA"}),(0,d.jsxs)(s.table,{children:[(0,d.jsx)(s.thead,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.th,{children:"Attribute"}),(0,d.jsx)(s.th,{children:"Value"})]})}),(0,d.jsxs)(s.tbody,{children:[(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"MLink Token"}),(0,d.jsx)(s.td,{children:"SystemData"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"Topic"}),(0,d.jsx)(s.td,{children:"liquidity-notice"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"SRSE Product"}),(0,d.jsx)(s.td,{children:"SRTrade"})]})]})]})]}),"\n",(0,d.jsxs)("div",{className:"single-message-primarykey",children:[(0,d.jsx)(s.h3,{id:"primary-key",children:"PRIMARY KEY"}),(0,d.jsxs)(s.table,{children:[(0,d.jsx)(s.thead,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.th,{children:"Field"}),(0,d.jsx)(s.th,{children:"Type"}),(0,d.jsx)(s.th,{children:"Comment"})]})}),(0,d.jsxs)(s.tbody,{children:[(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"accnt"}),(0,d.jsx)(s.td,{children:"string(16)"}),(0,d.jsx)(s.td,{})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"clientFirm"}),(0,d.jsx)(s.td,{children:"string(16)"}),(0,d.jsx)(s.td,{})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"root"}),(0,d.jsx)(s.td,{children:"TickerKey"}),(0,d.jsx)(s.td,{})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"expiry"}),(0,d.jsx)(s.td,{children:"DateKey"}),(0,d.jsx)(s.td,{})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"respSide"}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.a,{href:"../../../Enums/BuySell",children:"enum : BuySell"})}),(0,d.jsx)(s.td,{children:"auction responder side (your side); Buy = Buy Synthetic (Sell Shares)"})]})]})]})]}),"\n",(0,d.jsxs)("div",{className:"single-message-body",children:[(0,d.jsx)(s.h3,{id:"body",children:"BODY"}),(0,d.jsxs)(s.table,{children:[(0,d.jsx)(s.thead,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.th,{children:"Field"}),(0,d.jsx)(s.th,{children:"Type"}),(0,d.jsx)(s.th,{children:"Comment"})]})}),(0,d.jsxs)(s.tbody,{children:[(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"ddivPv"}),(0,d.jsx)(s.td,{children:"double"}),(0,d.jsx)(s.td,{children:"present value of any expected dividends to expiry"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"divControl"}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.a,{href:"../../../Enums/DivControl",children:"enum : DivControl"})}),(0,d.jsx)(s.td,{children:"disable this auto-responder record if SR Dividends exist or are estimates"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"expiryQtyAvail"}),(0,d.jsx)(s.td,{children:"int"}),(0,d.jsx)(s.td,{children:"revcons (contracts) available for responding (day total; this ticker/expiry; all strikes) [note: 1 contract = undPerCn underlier units]"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"incFeesInResp"}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,d.jsx)(s.td,{children:"include all estimated responder fees in final response price"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"isDisabled"}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,d.jsx)(s.td,{children:"if Yes, this auto-responder record is disabled"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"modifiedBy"}),(0,d.jsx)(s.td,{children:"string(24)"}),(0,d.jsx)(s.td,{children:"user who last modified this record"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"modifiedIn"}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.a,{href:"../../../Enums/SysEnvironment",children:"enum : SysEnvironment"})}),(0,d.jsx)(s.td,{})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"moneyRate"}),(0,d.jsx)(s.td,{children:"double"}),(0,d.jsx)(s.td,{children:"effective rate to borrow/lend money to expiry (360 day convention) [compares to globalRate * 360 / 365]"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"respondFlex"}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,d.jsx)(s.td,{children:"if not None, much match auction notice containsFlex field"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"riskGroupId"}),(0,d.jsx)(s.td,{children:"long"}),(0,d.jsx)(s.td,{})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"roundRule"}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.a,{href:"../../../Enums/RoundRule",children:"enum : RoundRule"})}),(0,d.jsx)(s.td,{})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"stockRate"}),(0,d.jsx)(s.td,{children:"double"}),(0,d.jsx)(s.td,{children:"0.00 = no effective lend/borrow value  (360 day convention)"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"ticker"}),(0,d.jsx)(s.td,{children:"TickerKey"}),(0,d.jsx)(s.td,{})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"tickerQtyAvail"}),(0,d.jsx)(s.td,{children:"int"}),(0,d.jsx)(s.td,{children:"revcons (contracts) available for responding (day total; this ticker; all strikes) [note: 1 contract = undPerCn underlier units]"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"timestamp"}),(0,d.jsx)(s.td,{children:"DateTime"}),(0,d.jsx)(s.td,{children:"timestamp of last modification"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"transactFee"}),(0,d.jsx)(s.td,{children:"double"}),(0,d.jsx)(s.td,{children:"(+ = you pay) / (- = you receive)"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"userName"}),(0,d.jsx)(s.td,{children:"string(24)"}),(0,d.jsx)(s.td,{children:"username used for responding to auction notices"})]})]})]})]})]})}function x(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,d.jsx)(s,{...e,children:(0,d.jsx)(h,{...e})}):h(e)}},28453:(e,s,t)=>{t.d(s,{R:()=>i,x:()=>c});var d=t(96540);const n={},r=d.createContext(n);function i(e){const s=d.useContext(r);return d.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),d.createElement(r.Provider,{value:s},e.children)}}}]);