"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[90820],{15791:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>o,contentTitle:()=>d,default:()=>x,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var n=t(74848),r=t(28453);const s={title:"OptExpiryDefinition"},d="Schema: OptExpiryDefinition (ID: 4355)",c={id:"MessageSchemas/Schema/Topics/product-definition/OptExpiryDefinition",title:"OptExpiryDefinition",description:"This table maps option root/expiration combinations to their deliverable future.  Mappings are sourced fromm listing exchange product definitions.BaseObj:Root",source:"@site/docs/MessageSchemas/Schema/Topics/4335-product-definition/OptExpiryDefinition.md",sourceDirName:"MessageSchemas/Schema/Topics/4335-product-definition",slug:"/MessageSchemas/Schema/Topics/product-definition/OptExpiryDefinition",permalink:"/docs/MessageSchemas/Schema/Topics/product-definition/OptExpiryDefinition",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"OptExpiryDefinition"},sidebar:"messageSchemasSidebar",previous:{title:"IndustryDefinition",permalink:"/docs/MessageSchemas/Schema/Topics/product-definition/IndustryDefinition"},next:{title:"ProductDefinitionV2",permalink:"/docs/MessageSchemas/Schema/Topics/product-definition/ProductDefinitionV2"}},o={},l=[{value:"METADATA",id:"metadata",level:3},{value:"BODY",id:"body",level:3}];function h(e){const i={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h3:"h3",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(i.h1,{id:"schema-optexpirydefinition-id-4355",children:["Schema: OptExpiryDefinition ",(0,n.jsx)("span",{className:"small-text",children:"(ID: 4355)"})]}),"\n",(0,n.jsxs)(i.p,{children:["This table maps option root/expiration combinations to their deliverable future.  Mappings are sourced fromm listing exchange product definitions.",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"BaseObj",":Root"]}),"\n",(0,n.jsx)(i.h3,{id:"metadata",children:"METADATA"}),"\n",(0,n.jsxs)(i.table,{children:[(0,n.jsx)(i.thead,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.th,{children:"Attribute"}),(0,n.jsx)(i.th,{children:"Value"})]})}),(0,n.jsxs)(i.tbody,{children:[(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"Topic"}),(0,n.jsx)(i.td,{children:"4335-product-definition"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"MLink Token"}),(0,n.jsx)(i.td,{children:"OptionDefinition"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"SRSE Product"}),(0,n.jsx)(i.td,{children:"SRLive, SRAnalytics"})]})]})]}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsxs)(i.blockquote,{children:["\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"Note:"})," The symbol ",(0,n.jsx)(i.code,{children:"="})," next to a field number indicates that it is a primary key."]}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"body",children:"BODY"}),"\n",(0,n.jsxs)(i.table,{children:[(0,n.jsx)(i.thead,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.th,{children:"#"}),(0,n.jsx)(i.th,{children:"Field"}),(0,n.jsx)(i.th,{children:"Type"}),(0,n.jsx)(i.th,{children:"Comment"})]})}),(0,n.jsxs)(i.tbody,{children:[(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"10="}),(0,n.jsx)(i.td,{children:"ekey"}),(0,n.jsx)(i.td,{children:"ExpiryKey"}),(0,n.jsx)(i.td,{children:"option root+expiration"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"100"}),(0,n.jsx)(i.td,{children:"ticker"}),(0,n.jsx)(i.td,{children:"TickerKey"}),(0,n.jsx)(i.td,{children:"master ticker"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"103"}),(0,n.jsx)(i.td,{children:"fkey"}),(0,n.jsx)(i.td,{children:"ExpiryKey"}),(0,n.jsx)(i.td,{children:"settlement future (if any)"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"106"}),(0,n.jsx)(i.td,{children:"uPrcDriverKey"}),(0,n.jsx)(i.td,{children:"ExpiryKey"}),(0,n.jsx)(i.td,{children:"underlier price driver for this option expiry (default is fkey; if it exists)"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"109"}),(0,n.jsx)(i.td,{children:"uPrcDriverKeyType"}),(0,n.jsx)(i.td,{children:(0,n.jsx)(i.a,{href:"../../../Enums/SpdrKeyType",children:"enum : SpdrKeyType"})}),(0,n.jsx)(i.td,{children:"Stock or Future"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"112"}),(0,n.jsx)(i.td,{children:"uPrcBoundFKey"}),(0,n.jsx)(i.td,{children:"ExpiryKey"}),(0,n.jsx)(i.td,{children:"underlier price bounding future (if any) for this option expiry"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"115"}),(0,n.jsx)(i.td,{children:"expiration"}),(0,n.jsx)(i.td,{children:"DateTime"}),(0,n.jsx)(i.td,{children:"option expiration date and time"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"118"}),(0,n.jsx)(i.td,{children:"maturityDate"}),(0,n.jsx)(i.td,{children:"DateTime"}),(0,n.jsx)(i.td,{})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"121"}),(0,n.jsx)(i.td,{children:"displayFactor"}),(0,n.jsx)(i.td,{children:"double"}),(0,n.jsx)(i.td,{})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"124"}),(0,n.jsx)(i.td,{children:"cabPrice"}),(0,n.jsx)(i.td,{children:"double"}),(0,n.jsx)(i.td,{})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"127"}),(0,n.jsx)(i.td,{children:"priceFormat"}),(0,n.jsx)(i.td,{children:(0,n.jsx)(i.a,{href:"../../../Enums/PriceFormat",children:"enum : PriceFormat"})}),(0,n.jsx)(i.td,{})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"130"}),(0,n.jsx)(i.td,{children:"minTickSize"}),(0,n.jsx)(i.td,{children:"double"}),(0,n.jsx)(i.td,{})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"133"}),(0,n.jsx)(i.td,{children:"timestamp"}),(0,n.jsx)(i.td,{children:"DateTime"}),(0,n.jsx)(i.td,{})]})]})]})]})}function x(e={}){const{wrapper:i}={...(0,r.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},28453:(e,i,t)=>{t.d(i,{R:()=>d,x:()=>c});var n=t(96540);const r={},s=n.createContext(r);function d(e){const i=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function c(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),n.createElement(s.Provider,{value:i},e.children)}}}]);