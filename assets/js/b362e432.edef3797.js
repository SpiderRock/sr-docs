"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[81818],{65976:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>l,contentTitle:()=>n,default:()=>o,frontMatter:()=>d,metadata:()=>c,toc:()=>h});var t=i(74848),r=i(28453);const d={title:"UserSDivOverride"},n="Schema: UserSDivOverride (ID: 3640)",c={id:"MessageSchemas/Schema/Topics/option-pricing/UserSDivOverride",title:"UserSDivOverride",description:"Records in this table override SpiderRock global implied sdiv values in option pricing calculations.",source:"@site/docs/MessageSchemas/Schema/Topics/3585-option-pricing/UserSDivOverride.md",sourceDirName:"MessageSchemas/Schema/Topics/3585-option-pricing",slug:"/MessageSchemas/Schema/Topics/option-pricing/UserSDivOverride",permalink:"/docs/MessageSchemas/Schema/Topics/option-pricing/UserSDivOverride",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"UserSDivOverride"},sidebar:"messageSchemasSidebar",previous:{title:"UserRateOverride",permalink:"/docs/MessageSchemas/Schema/Topics/option-pricing/UserRateOverride"},next:{title:"3695-order-allocation",permalink:"/docs/MessageSchemas/Schema/Topics/order-allocation/"}},l={},h=[{value:"METADATA",id:"metadata",level:3},{value:"PRIMARY KEY",id:"primary-key",level:3},{value:"BODY",id:"body",level:3}];function a(e){const s={h1:"h1",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.h1,{id:"schema-usersdivoverride-id-3640",children:["Schema: UserSDivOverride ",(0,t.jsx)("span",{className:"small-text",children:"(ID: 3640)"})]}),"\n",(0,t.jsx)(s.p,{children:"Records in this table override SpiderRock global implied sdiv values in option pricing calculations."}),"\n",(0,t.jsxs)("div",{className:"single-message-meta",children:[(0,t.jsx)(s.h3,{id:"metadata",children:"METADATA"}),(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Attribute"}),(0,t.jsx)(s.th,{children:"Value"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Topic"}),(0,t.jsx)(s.td,{children:"3585-option-pricing"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"MLink Token"}),(0,t.jsx)(s.td,{children:"SystemData"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"SRSE Product"}),(0,t.jsx)(s.td,{children:"SRControl, MIPControl"})]})]})]})]}),"\n",(0,t.jsxs)("div",{className:"single-message-primarykey",children:[(0,t.jsx)(s.h3,{id:"primary-key",children:"PRIMARY KEY"}),(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"#"}),(0,t.jsx)(s.th,{children:"Field"}),(0,t.jsx)(s.th,{children:"Type"}),(0,t.jsx)(s.th,{children:"Comment"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"10"}),(0,t.jsx)(s.td,{children:"ekey"}),(0,t.jsx)(s.td,{children:"ExpiryKey"}),(0,t.jsx)(s.td,{children:"StocKey + option expiry date"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"11"}),(0,t.jsx)(s.td,{children:"clientFirm"}),(0,t.jsx)(s.td,{children:"string(16)"}),(0,t.jsx)(s.td,{})]})]})]})]}),"\n",(0,t.jsxs)("div",{className:"single-message-body",children:[(0,t.jsx)(s.h3,{id:"body",children:"BODY"}),(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"#"}),(0,t.jsx)(s.th,{children:"Field"}),(0,t.jsx)(s.th,{children:"Type"}),(0,t.jsx)(s.th,{children:"Comment"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"100"}),(0,t.jsx)(s.td,{children:"sdivRate"}),(0,t.jsx)(s.td,{children:"float"}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"103"}),(0,t.jsx)(s.td,{children:"lnSDivRate"}),(0,t.jsx)(s.td,{children:"float"}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"106"}),(0,t.jsx)(s.td,{children:"shSDivRate"}),(0,t.jsx)(s.td,{children:"float"}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"109"}),(0,t.jsx)(s.td,{children:"text"}),(0,t.jsx)(s.td,{children:"text1"}),(0,t.jsx)(s.td,{children:"user detail (if any)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"112"}),(0,t.jsx)(s.td,{children:"timestamp"}),(0,t.jsx)(s.td,{children:"DateTime"}),(0,t.jsx)(s.td,{})]})]})]})]})]})}function o(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},28453:(e,s,i)=>{i.d(s,{R:()=>n,x:()=>c});var t=i(96540);const r={},d=t.createContext(r);function n(e){const s=t.useContext(d);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:n(e.components),t.createElement(d.Provider,{value:s},e.children)}}}]);