"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[49931],{14106:(e,i,d)=>{d.r(i),d.d(i,{assets:()=>l,contentTitle:()=>r,default:()=>o,frontMatter:()=>s,metadata:()=>c,toc:()=>a});var t=d(74848),n=d(28453);const s={title:"GlobalDividends"},r="Schema: GlobalDividends (ID: 3590)",c={id:"MessageSchemas/Schema/Topics/option-pricing/GlobalDividends",title:"GlobalDividends",description:"GlobalDividend records contain projected future discrete dividend payment dates and amounts for dividend paying equities.  These records are the dividend values that are incorporated into option pricing calculations.Note: Missing/empty DateAmt strings are interpreted as non-dividend paying",source:"@site/docs/MessageSchemas/Schema/Topics/3585-option-pricing/GlobalDividends.md",sourceDirName:"MessageSchemas/Schema/Topics/3585-option-pricing",slug:"/MessageSchemas/Schema/Topics/option-pricing/GlobalDividends",permalink:"/docs/MessageSchemas/Schema/Topics/option-pricing/GlobalDividends",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"GlobalDividends"},sidebar:"messageSchemasSidebar",previous:{title:"3585-option-pricing",permalink:"/docs/MessageSchemas/Schema/Topics/option-pricing/"},next:{title:"GlobalRates",permalink:"/docs/MessageSchemas/Schema/Topics/option-pricing/GlobalRates"}},l={},a=[{value:"METADATA",id:"metadata",level:3},{value:"BODY",id:"body",level:3},{value:"REPEATING FIELDS",id:"repeating-fields",level:3}];function h(e){const i={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h3:"h3",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(i.h1,{id:"schema-globaldividends-id-3590",children:["Schema: GlobalDividends ",(0,t.jsx)("span",{className:"small-text",children:"(ID: 3590)"})]}),"\n",(0,t.jsxs)(i.p,{children:["GlobalDividend records contain projected future discrete dividend payment dates and amounts for dividend paying equities.  These records are the dividend values that are incorporated into option pricing calculations.",(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),"Note: Missing/empty DateAmt strings are interpreted as non-dividend paying"]}),"\n",(0,t.jsx)(i.h3,{id:"metadata",children:"METADATA"}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{children:"Attribute"}),(0,t.jsx)(i.th,{children:"Value"})]})}),(0,t.jsxs)(i.tbody,{children:[(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Topic"}),(0,t.jsx)(i.td,{children:"3585-option-pricing"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"MLink Token"}),(0,t.jsx)(i.td,{children:"GlobalDefinition"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"SRSE Product"}),(0,t.jsx)(i.td,{children:"SRAnalytics"})]})]})]}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsxs)(i.blockquote,{children:["\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"Note:"})," The symbol ",(0,t.jsx)(i.code,{children:"="})," next to a field number indicates that it is a primary key."]}),"\n"]}),"\n",(0,t.jsx)(i.h3,{id:"body",children:"BODY"}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{children:"#"}),(0,t.jsx)(i.th,{children:"Field"}),(0,t.jsx)(i.th,{children:"Type"}),(0,t.jsx)(i.th,{children:"Comment"})]})}),(0,t.jsxs)(i.tbody,{children:[(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"10="}),(0,t.jsx)(i.td,{children:"ticker"}),(0,t.jsx)(i.td,{children:"TickerKey"}),(0,t.jsx)(i.td,{})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"100"}),(0,t.jsx)(i.td,{children:"timestamp"}),(0,t.jsx)(i.td,{children:"DateTime"}),(0,t.jsx)(i.td,{children:"publish time (GlobalDividend.timestamp = SRPricingCalcRecord.timestamp @ publish)"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"103"}),(0,t.jsx)(i.td,{children:"lastModified"}),(0,t.jsx)(i.td,{children:"DateTime"}),(0,t.jsx)(i.td,{children:"last dividend data modify timestamp"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"106"}),(0,t.jsx)(i.td,{children:"text"}),(0,t.jsx)(i.td,{children:"text1"}),(0,t.jsx)(i.td,{children:"extra text (if any)"})]})]})]}),"\n",(0,t.jsx)(i.h3,{id:"repeating-fields",children:"REPEATING FIELDS"}),"\n",(0,t.jsx)(i.p,{children:"DateAmt"}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{children:"Field"}),(0,t.jsx)(i.th,{children:"Type"}),(0,t.jsx)(i.th,{children:"Comment"})]})}),(0,t.jsxs)(i.tbody,{children:[(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"112"}),(0,t.jsx)(i.td,{children:"divDate"}),(0,t.jsx)(i.td,{children:"DateKey"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"115"}),(0,t.jsx)(i.td,{children:"divValue"}),(0,t.jsx)(i.td,{children:"float"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"118"}),(0,t.jsx)(i.td,{children:"divCurrency"}),(0,t.jsx)(i.td,{children:"string(3)"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"121"}),(0,t.jsx)(i.td,{children:"divKind"}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.a,{href:"../../../Enums/DivKind",children:"enum : DivKind"})})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"124"}),(0,t.jsx)(i.td,{children:"divSource"}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.a,{href:"../../../Enums/DivSource",children:"enum : DivSource"})})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"127"}),(0,t.jsx)(i.td,{children:"divFreq"}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.a,{href:"../../../Enums/DivFreq",children:"enum : DivFreq"})})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"130"}),(0,t.jsx)(i.td,{children:"divOverrideSource"}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.a,{href:"../../../Enums/DivOverrideSource",children:"enum : DivOverrideSource"})})]})]})]})]})}function o(e={}){const{wrapper:i}={...(0,n.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},28453:(e,i,d)=>{d.d(i,{R:()=>r,x:()=>c});var t=d(96540);const n={},s=t.createContext(n);function r(e){const i=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function c(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),t.createElement(s.Provider,{value:i},e.children)}}}]);