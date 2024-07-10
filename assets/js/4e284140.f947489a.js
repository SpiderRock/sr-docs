"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[35321],{65941:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>l,frontMatter:()=>d,metadata:()=>c,toc:()=>a});var s=n(74848),i=n(28453);const d={title:"OptionEOP"},r="Schema: OptionEOP (ID: 2760)",c={id:"MessageSchemas/Schema/Topics/market-data-options/OptionEOP",title:"OptionEOP",description:"The expected opening price and opening size for an option.  Based on the exchange open auction feed.",source:"@site/docs/MessageSchemas/Schema/Topics/2750-market-data-options/OptionEOP.md",sourceDirName:"MessageSchemas/Schema/Topics/2750-market-data-options",slug:"/MessageSchemas/Schema/Topics/market-data-options/OptionEOP",permalink:"/docs/MessageSchemas/Schema/Topics/market-data-options/OptionEOP",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"OptionEOP"},sidebar:"messageSchemasSidebar",previous:{title:"OpraPrintType",permalink:"/docs/MessageSchemas/Schema/Topics/market-data-options/OpraPrintType"},next:{title:"OptionExchOrder",permalink:"/docs/MessageSchemas/Schema/Topics/market-data-options/OptionExchOrder"}},o={},a=[{value:"METADATA",id:"metadata",level:3},{value:"BODY",id:"body",level:3}];function h(e){const t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h3:"h3",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.h1,{id:"schema-optioneop-id-2760",children:["Schema: OptionEOP ",(0,s.jsx)("span",{className:"small-text",children:"(ID: 2760)"})]}),"\n",(0,s.jsx)(t.p,{children:"The expected opening price and opening size for an option.  Based on the exchange open auction feed."}),"\n",(0,s.jsx)(t.h3,{id:"metadata",children:"METADATA"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Attribute"}),(0,s.jsx)(t.th,{children:"Value"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Topic"}),(0,s.jsx)(t.td,{children:"2750-market-data-options"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"MLink Token"}),(0,s.jsx)(t.td,{children:"SystemData"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"SRSE Product"}),(0,s.jsx)(t.td,{children:"SRLive"})]})]})]}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Note:"})," The symbol ",(0,s.jsx)(t.code,{children:"="})," next to a field number indicates that it is a primary key."]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"body",children:"BODY"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"#"}),(0,s.jsx)(t.th,{children:"Field"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Comment"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"10="}),(0,s.jsx)(t.td,{children:"okey"}),(0,s.jsx)(t.td,{children:"OptionKey"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"11="}),(0,s.jsx)(t.td,{children:"sourceExch"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"../../../Enums/TickerSrc",children:"enum : TickerSrc"})}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"100"}),(0,s.jsx)(t.td,{children:"opnSize"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"expected opening size [contracts]"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"103"}),(0,s.jsx)(t.td,{children:"opnPrice"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"expected opening price"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"106"}),(0,s.jsx)(t.td,{children:"optOpnType"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"../../../Enums/OptOpnType",children:"enum : OptOpnType"})}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"109"}),(0,s.jsx)(t.td,{children:"legalMarket"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"../../../Enums/YesNo",children:"enum : YesNo"})}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"112"}),(0,s.jsx)(t.td,{children:"eopTimestamp"}),(0,s.jsx)(t.td,{children:"long"}),(0,s.jsx)(t.td,{children:"exchange high precision timestamp (if available)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"115"}),(0,s.jsx)(t.td,{children:"netTimestamp"}),(0,s.jsx)(t.td,{children:"long"}),(0,s.jsx)(t.td,{children:"inbound packet PTP timestamp from SR gateway switch;usually syncronized with f"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"118"}),(0,s.jsx)(t.td,{children:"timestamp"}),(0,s.jsx)(t.td,{children:"DateTime"}),(0,s.jsx)(t.td,{})]})]})]})]})}function l(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>c});var s=n(96540);const i={},d=s.createContext(i);function r(e){const t=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(d.Provider,{value:t},e.children)}}}]);