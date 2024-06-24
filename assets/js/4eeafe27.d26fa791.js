"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[53550],{5428:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>d,default:()=>h,frontMatter:()=>n,metadata:()=>c,toc:()=>a});var s=i(74848),r=i(28453);const n={title:"UserRateOverride"},d="Message: UserRateOverride (ID: 3635)",c={id:"Schema/Topics/option-pricing/UserRateOverride",title:"UserRateOverride",description:"Records in this table override SpiderRock global discount rate values in option pricing calculations.Note: Expiry dates that fall between years values below will be interpolated using a cubic spline on (days * rate)",source:"@site/docs/Schema/Topics/3585-option-pricing/UserRateOverride.md",sourceDirName:"Schema/Topics/3585-option-pricing",slug:"/Schema/Topics/option-pricing/UserRateOverride",permalink:"/sr-docs/docs/Schema/Topics/option-pricing/UserRateOverride",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"UserRateOverride"},sidebar:"schemaSidebar",previous:{title:"UserDividendOverride",permalink:"/sr-docs/docs/Schema/Topics/option-pricing/UserDividendOverride"},next:{title:"UserSDivOverride",permalink:"/sr-docs/docs/Schema/Topics/option-pricing/UserSDivOverride"}},l={},a=[{value:"META DATA  (Topic: option-pricing )",id:"meta-data--topic-option-pricing-",level:3},{value:"PRIMARY KEY",id:"primary-key",level:3},{value:"BODY",id:"body",level:3},{value:"REPEATING FIELDS",id:"repeating-fields",level:3}];function o(e){const t={h1:"h1",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.h1,{id:"message-userrateoverride-id-3635",children:["Message: UserRateOverride ",(0,s.jsx)("span",{className:"small-text",children:"(ID: 3635)"})]}),"\n",(0,s.jsxs)(t.p,{children:["Records in this table override SpiderRock global discount rate values in option pricing calculations.",(0,s.jsx)("br",{}),(0,s.jsx)("br",{}),"Note: Expiry dates that fall between years values below will be interpolated using a cubic spline on (days * rate)"]}),"\n",(0,s.jsxs)("div",{className:"single-message-meta",children:[(0,s.jsx)(t.h3,{id:"meta-data--topic-option-pricing-",children:"META DATA  (Topic: option-pricing )"}),(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Attribute"}),(0,s.jsx)(t.th,{children:"Value"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"MLink Token"}),(0,s.jsx)(t.td,{children:"SystemData"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"SRSE Product"}),(0,s.jsx)(t.td,{children:"SRControl, MIPControl"})]})]})]})]}),"\n",(0,s.jsxs)("div",{className:"single-message-primarykey",children:[(0,s.jsx)(t.h3,{id:"primary-key",children:"PRIMARY KEY"}),(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Field"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Comment"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"clientFirm"}),(0,s.jsx)(t.td,{children:"string(16)"}),(0,s.jsx)(t.td,{})]})})]})]}),"\n",(0,s.jsxs)("div",{className:"single-message-body",children:[(0,s.jsx)(t.h3,{id:"body",children:"BODY"}),(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Field"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Comment"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"text"}),(0,s.jsx)(t.td,{children:"text1"}),(0,s.jsx)(t.td,{children:"user detail (if any)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"timestamp"}),(0,s.jsx)(t.td,{children:"DateTime"}),(0,s.jsx)(t.td,{})]})]})]}),(0,s.jsx)(t.h3,{id:"repeating-fields",children:"REPEATING FIELDS"}),(0,s.jsx)(t.p,{children:"Curve"}),(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Field"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Comment"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"days"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"calendar days to expiration (actual/365 days per year)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"lnRate"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"rate"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"shRate"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{})]})]})]})]})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},28453:(e,t,i)=>{i.d(t,{R:()=>d,x:()=>c});var s=i(96540);const r={},n=s.createContext(r);function d(e){const t=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),s.createElement(n.Provider,{value:t},e.children)}}}]);